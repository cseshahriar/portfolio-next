"use client";

import React from 'react'
import { staticsData } from '@/constants'
import CountUp from 'react-countup';

const Statistics = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-5">
            {
                staticsData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start">
                        <CountUp
                            end={item?.value}
                            duration={5}
                            delay={2}
                            className="text-3xl lg:text-4xl font-extrabold"
                        />
                        <p className={`max-w[100px] leading-snug dark:text-white/80 text-sm`}>{item?.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Statistics