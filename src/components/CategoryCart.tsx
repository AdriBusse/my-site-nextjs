import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryCart({ category }) {
    const imgPath = category.cover[0]?.url !== undefined ? (process.env.STRAPIHOST + category.cover[0]?.url) : '/mountains.jpg'
    console.log(category, imgPath);

    return (
        <div className="container mx-auto my-5">

            <div className="relative flex flex-col items-center mx-2 rounded-lg md:flex-row md:shadow-xl md:h-72">

                <div className="relative z-0 order-1 w-full overflow-hidden rounded-lg md:order-2 md:w-2/5 h-80 md:h-full md:rounded-none md:rounded-r-lg">
                    <div className="absolute inset-0 object-fill object-center w-full h-full bg-blue-400 bg-bottom bg-cover bg-opacity-30">
                        <Image className='bg-blend-multiply' layout='fill' src={imgPath} />
                    </div>
                    <div className="absolute inset-0 flex flex-col-reverse items-start justify-start h-full p-6 pb-6 md:hidden bg-gradient-to-b from-transparent via-transparent to-gray-900">
                        <h3 className="w-full mb-2 text-2xl font-bold leading-tight text-white">{category.title}</h3>
                        <h4 className="w-full text-xl leading-tight text-gray-100">Bienvenido a</h4>
                    </div>
                    <svg className="absolute inset-y-0 hidden w-24 h-full -ml-12 text-white fill-current md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>

                <div className="z-10 flex items-center order-2 w-full h-full -mt-6 md:order-1 md:w-3/5 md:mt-0">
                    <div className="w-full h-full p-8 mx-2 bg-white rounded-lg shadow-xl md:pr-18 md:pl-14 md:py-12 md:mx-0 md:rounded-none md:rounded-l-lg md:shadow-none">
                        <h4 className="hidden text-xl text-gray-400 md:block">Bienvenido a</h4>
                        <h3 className="hidden text-2xl font-bold text-gray-700 md:block">{category.title}</h3>
                        <p className="text-justify text-gray-600">{category.describtion}</p>
                        <Link href={`/blog/${category.slug}`} >
                            <a className="flex items-baseline mt-3 text-gray-700 linkStyle" href="">
                                <span>Visit this Blog</span>
                                <span className="ml-1 text-xs">&#x279c;</span>
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
