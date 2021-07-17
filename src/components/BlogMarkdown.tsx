import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'


export default function BlogMarkdown({ source }) {
    return (
        <div>

            <ReactMarkdown components={{
                // Map `h1` (`# heading`) to use `h2`s.
                h1: ({ node, ...props }) => <h1 className="text-6xl" {...props}></h1>,
                h2: ({ node, ...props }) => <h2 className="text-5xl" {...props}></h2>,
                h3: ({ node, ...props }) => <h3 className="text-4xl" {...props}></h3>,
                h4: ({ node, ...props }) => <h4 className="text-3xl" {...props}></h4>,
                h5: ({ node, ...props }) => <h5 className="text-2xl" {...props}></h5>,
                h6: ({ node, ...props }) => <h6 className="text-xl" {...props}></h6>,
                strong: ({ node, ...props }) => <p className="font-bold" {...props}></p>,
                a: ({ node, ...props }) => <a className="underline text-winered" {...props}></a>,
                blockquote: ({ node, ...props }) => <blockquote className="p-2 pl-5 m-2 bg-gray-100 border-l-2 rounded-r-lg border-textblack" {...props}></blockquote>,
                ul: ({ node, ...props }) => <ul className="list-disc" {...props}></ul>,
                code: ({ node, ...props }) => <code className="p-1 my-10 text-white bg-black rounded" {...props}></code>,
                pre: ({ node, ...props }) => <pre className="p-1 my-5 text-white bg-black rounded" {...props}></pre>,
                img: ({ node, ...props }) => {
                    return <Image src={`${process.env.STRAPIHOST}${props.src}`} alt={`${props.alt}`} width={500} height={500} />
                },

                // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                em: ({ node, ...props }) => <i style={{ color: 'red' }} {...props} />
            }}>{source}</ReactMarkdown>

        </div>
    )
}
