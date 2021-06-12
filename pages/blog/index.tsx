import React, { useEffect } from 'react'
import { useTheme } from '../../hooks/useTheme';

export default function blog({ categorys }) {
    const { visible, toggle, setVisible } = useTheme();

    useEffect(() => {
        setVisible(false)
    }, [])
    return (
        <div className="flex flex-col w-9/12 mx-auto mt-20 bg-green-100 shadow">
            <h1 className="pt-10 mx-auto text-5xl">Adri's blog</h1>
            <div>
                {categorys.map((cat) => {
                    return (
                        <div className="px-10 pt-10">
                            <h1 key={cat} className="text-4xl">{cat}</h1>
                            <p>I am a short describtion</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export async function getServerSideProps() {
    // Fetch data from external API

    return { props: { categorys: ['IT', 'Getting Started', 'vietnam', 'travel'] } }
}
