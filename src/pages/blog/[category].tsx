import axios from 'axios';
import React from 'react'
import Image from 'next/image'


export default function category({ category }) {
    console.log(category);
    const imgPath = category.cover[0]?.url !== undefined ? (process.env.STRAPIHOST + category.cover[0]?.url) : '/mountains.jpg'
    category = category[0]
    return (
        <div className='w-full h-full'>
            <div className="flex flex-col w-9/12 mx-auto mt-20 bg-green-100 shadow">
                {category.cover && <div className='relative mb-5 overflow-hidden bg-black h-80'><Image className='object-fill ' layout='fill' src={imgPath} /></div>}
                <h1 className='text-2xl'>{category.title}</h1>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const { data } = await axios.get(`${process.env.STRAPIHOST}/categories`)

    const paths = data.map(cat => ({
        params: { category: cat.slug },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    const { data } = await axios.get(`${process.env.STRAPIHOST}/categories?slug=${context.params.category}`)
    return {
        props: { category: data },
    }
}