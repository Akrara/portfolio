'use client';

import { useEffect, useState } from "react";

interface LocalTime {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    setTime: Function;
    getTime: Function;
}
function LocalTime(y?: number, m?: number, d?: number, h?: number, min?: number, s?: number): LocalTime {
    return {
        year: y !== undefined ? y : 0,
        month: m !== undefined ? m : 0,
        day: d !== undefined ? d : 0,
        hour: h !== undefined ? h : 0,
        minute: min !== undefined ? min : 0,
        second: s !== undefined ? s : 0,
        setTime: function (y?: number, m?: number, d?: number, h?: number, min?: number, s?: number) {
            this.year = y !== undefined ? y : this.year;
            this.month = m !== undefined ? m : this.month;
            this.day = d !== undefined ? d : this.day;
            this.hour = h !== undefined ? h : this.hour;
            this.minute = min !== undefined ? min : this.minute;
            this.second = s !== undefined ? s : this.second;
        },
        getTime: function () {
            const formattedMonth = this.month < 10 ? `0${this.month}` : this.month;
            const formattedDay = this.day < 10 ? `0${this.day}` : this.day;
            const formattedHour = this.hour < 10 ? `0${this.hour}` : this.hour;
            const formattedMinute = this.minute < 10 ? `0${this.minute}` : this.minute;
            const formattedSecond = this.second < 10 ? `0${this.second}` : this.second;

            return `${this.year}-${formattedMonth}-${formattedDay} ${formattedHour}:${formattedMinute}:${formattedSecond}`;
        }
    }
}
export default function Clock() {
    const localTime = LocalTime();
    const today = new Date();
    localTime.setTime(today.getFullYear(), today.getMonth() + 1, today.getDate(),
        today.getHours(), today.getMinutes(), today.getSeconds());
    const [time, setTime] = useState(localTime);
    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date();
            localTime.setTime(today.getFullYear(), today.getMonth() + 1, today.getDate(),
                today.getHours(), today.getMinutes(), today.getSeconds());
            setTime(localTime);
        }, 1000);
        return () => clearInterval(interval);
    },[localTime]);

    return (
        <>
            It&apos;s {time.getTime()}
        </>
    )
}
