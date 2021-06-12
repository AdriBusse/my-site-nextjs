import React from 'react'

type Props = {
    id: string;
}
export default function Section1(props) {
    return (
        <div className="flex flex-col flex-wrap content-center justify-center w-screen h-screen font-normal bg-cover select-none bg-hero-pattern">
            <h1 className="text-8xl text-textblack">Adrian Busse</h1>
            <p>Student</p>
        </div>
    )
}
