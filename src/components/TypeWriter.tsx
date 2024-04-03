'use client';
import { useEffect, useRef, useState } from 'react';
export default function TypeWriter(props: { text: string, delay?: number }) {
    const text = props.text;
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    let delay1 = useRef<number>(0);
    useEffect(() => {
        const newIndex = currentIndex + 1;
        const newText = text.slice(0, newIndex)
        if (newText[currentIndex] === "<") {
            delay1.current = 0;
        }
        else if (newText[currentIndex] === ">") {
            delay1.current = props.delay || 100;
        }

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(newText);
                setCurrentIndex(newIndex);
            }, currentIndex === 0? 1100: delay1.current);
            return () => {
                clearTimeout(timeout);
            }
        }
        else {
            return;
        }

    }, [text, currentIndex, props.delay]);

    return (<div dangerouslySetInnerHTML={{ __html: currentText }}></div>)
}