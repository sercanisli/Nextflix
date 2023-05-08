import { baseUrl } from '@/config'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function CategoryList({genre}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
                api_key : '7727a1c97bc5205612f2769b66dcf4fe'
            }
        })
        .then(response => {
            setCategories( response.data.genres)
        })
        .catch(err => {
            console.log(error)
        })
    }, [])
    return (
        <div>
            <h1>Movie Categories</h1>
            <ul>
                {categories.map(category =>  (
                    <li key={category.id}> 
                        <Link legacyBehavior href={`${genre}`}>
                            {category.name}
                        </Link>
                    </li>
                )
                
                )}
            </ul>
        </div>
    )
}
export async function getStaticProps() {
    const api = await axios(`${baseUrl}/popular?api_key=7727a1c97bc5205612f2769b66dcf4fe&language=en&with_genres=${28}`)
    const genre = api.data;
  
    return {
      props: {genre}, revalidate:1
    }
  }