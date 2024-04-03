'use client';

import styles from '@/styles/Clock.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from "react";

function LocalTime(y?: number, m?: number, d?: number, h?: number, min?: number) {
    return {
        year: y !== undefined ? y : 0,
        month: m !== undefined ? m : 0,
        day: d !== undefined ? d : 0,
        hour: h !== undefined ? h : 0,
        minute: min !== undefined ? min : 0,
        setTime: function (y?: number, m?: number, d?: number, h?: number, min?: number) {
            this.year = y !== undefined ? y : this.year;
            this.month = m !== undefined ? m : this.month;
            this.day = d !== undefined ? d : this.day;
            this.hour = h !== undefined ? h : this.hour;
            this.minute = min !== undefined ? min : this.minute;
        },
        getDate: function () {
            const formattedMonth = this.month < 10 ? `0${this.month}` : this.month;
            const formattedDay = this.day < 10 ? `0${this.day}` : this.day;

            return `${this.year}-${formattedMonth}-${formattedDay}`;
        },
        getTime: function() {
            const formattedHour = this.hour < 10 ? `0${this.hour}` : this.hour;
            const formattedMinute = this.minute < 10 ? `0${this.minute}` : this.minute;
            return `${formattedHour}:${formattedMinute}`;
        }
    }
}
export default function Clock(props:{orientation:string}) {
    const localTime = LocalTime();
    const today = new Date();
    localTime.setTime(today.getFullYear(), today.getMonth() + 1, today.getDate(),
        today.getHours(), today.getMinutes());
        
    const [times, setTimes] = useState(localTime);
    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date();
            localTime.setTime(today.getFullYear(), today.getMonth() + 1, today.getDate(),
                today.getHours(), today.getMinutes());
            setTimes(localTime);
        }, 20000);
        return () => clearInterval(interval);
    }, [localTime]);

    return (
        <div id={styles.clockWrapper} className={clsx(props.orientation==="vertical" && styles.clockWrapperVertical)}>
            <p>{times.getTime()}</p>
            <p>{times.getDate()}</p>
        </div>
    )
}
