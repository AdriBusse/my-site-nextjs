import React from 'react'

type Props = {
    id: string;
}
export default function Section1(props) {
    return (
        <div className="flex flex-col flex-wrap content-center justify-center w-screen h-screen min-h-full font-normal bg-cover select-none bg-hero-pattern">
            <h1 className=" text-8xl text-textblack">A d r i a n </h1>
            <h1 className=" text-8xl text-textblack">B u s s e </h1>
            <p>Student</p>
        </div>
    )
}
