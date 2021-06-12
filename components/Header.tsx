import classNames from 'classnames'
import React from 'react'
import { useTheme } from '../hooks/useTheme'
import Link from 'next/link'


export default function Header() {
    const { visible, toggle } = useTheme();
    const style = classNames('select-none flex transition delay-200 flex-wrap justify-between content-center px-16 h-12 px-5 font-mono text-lg ', { 'bg-opacity-0 text-white': visible, ' bg-white shadow-custom': !visible })
    return (
        <div className={style}>
            <Link href="/">
                <p className="linkStyle">Logo</p>
            </Link>
            <div className="flex">
                <Link href="blog" ><p className="px-4 linkStyle">Blog</p></Link>
                <Link href="contact"><p className="px-4 linkStyle">Contact Me</p></Link>
            </div>

        </div>
    )
}
