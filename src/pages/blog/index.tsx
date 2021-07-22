import React, { useEffect } from 'react'
import { useTheme } from '../../hooks/useTheme';
import Image from 'next/image'
import axios from 'axios';
import CategoryCart from '../../components/CategoryCart';


export default function blog({ categories }) {
    const { visible, toggle, setVisible } = useTheme();
    console.log(categories);

    useEffect(() => {
        setVisible(false)
    }, [])
    const html = "** Welcome **\nin this blog post you will learn : \n - docker\n - mongo\n\n1.docker\n2.mongo\n\n```docker compose up```\n\n![diCaprio.png](/uploads/di_Caprio_1285ef06e8.png) \n```{\n  \"name\": \"blog-backend\",\n  \"private\": true,\n  \"version\": \"0.1.0\",\n  \"description\": \"A Strapi application\",\n  \"scripts\": {\n    \"develop\": \"strapi develop\",\n    \"start\": \"strapi start\",\n    \"build\": \"strapi build\",\n    \"strapi\": \"strapi\"\n  },\n  \"devDependencies\": {},\n  \"dependencies\": {\n    \"slugify\": \"^1.5.3\",\n    \"strapi\": \"3.6.2\",\n    \"strapi-admin\": \"3.6.2\",\n    \"strapi-connector-mongoose\": \"3.6.2\",\n    \"strapi-plugin-content-manager\": \"3.6.2\",\n    \"strapi-plugin-content-type-builder\": \"3.6.2\",\n    \"strapi-plugin-email\": \"3.6.2\",\n    \"strapi-plugin-i18n\": \"3.6.2\",\n    \"strapi-plugin-upload\": \"3.6.2\",\n    \"strapi-plugin-users-permissions\": \"3.6.2\",\n    \"strapi-utils\": \"3.6.2\"\n  },\n  \"author\": {\n    \"name\": \"A Strapi developer\"\n  },\n  \"strapi\": {\n    \"uuid\": \"3bd55949-0933-4116-bef2-7f477515e2cb\"\n  },\n  \"engines\": {\n    \"node\": \">=10.16.0 <=14.x.x\",\n    \"npm\": \"^6.0.0\"\n  },\n  \"license\": \"MIT\"\n}\n```"
    //console.log("html", html);



    return (
        <div className="flex flex-col w-9/12 mx-auto mt-20 bg-green-100 shadow">
            <h1 className="pt-10 mx-auto text-5xl">Adri's blog</h1>
            <div className="px-10 pt-10">
                <h2 className="text-2xl text-winered undelined">Most Recent Post:</h2>
                <p>render most recent Posts</p>
                <hr className="" />
                <p>render most recent Posts</p>
                <div>
                    {categories.map((cat) => {
                        return (<div key={cat._id}>
                            <CategoryCart category={cat} />
                        </div>)
                    })}

                </div>

            </div>

        </div >
    )
}
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    const { data } = await axios.get('http://localhost:3003/categories')



    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            categories: data
        }
    }
}

