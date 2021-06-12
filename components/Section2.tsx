import React from 'react'
import Image from 'next/image'

export default function Section2() {
    return (
        <div className="flex flex-col flex-wrap content-center w-full h-screen bg-red-900 "><>
            <h1 className="mx-auto my-10 text-4xl">About Me:</h1>
            <Image
                src="/MeBW.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                className="rounded-full mt-100"
            />
            <p className="mx-auto mt-10">Welcome to my homepage!</p>
        </></div>

    )
}
