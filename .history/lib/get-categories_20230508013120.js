import { baseUrl } from '@/config'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function CategoryList({genres}) {
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
                {/* {genres.map(category =>  (
                    <li key={category.id}> 
                        <Link legacyBehavior href={`${baseUrl}/popular?api_key=7727a1c97bc5205612f2769b66dcf4fe&language=en&with_genres=${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                )
                
                )} */}
                <li key={genres.id}>
                <Link legacyBehavior href={`${baseUrl}/popular?api_key=7727a1c97bc5205612f2769b66dcf4fe&language=en&with_genres=${genres.id}`}>
                            {category.name}
                        </Link>
                </li>
            </ul>
        </div>
    )
}
export async function getStaticProps(idFromPaths) {
    const {id} = idFromPaths.params;
    const api = await axios(`${baseUrl}/popular?api_key=7727a1c97bc5205612f2769b66dcf4fe&language=en&with_genres=${category.id}`)
    const genres = api.data;
    return {
      props: {genres}
    }
}

export async function getStaticPaths () {
    const api = await axios(`${baseUrl}/popular?api_key=7727a1c97bc5205612f2769b66dcf4fe&language=en`)
    const categories = api.data.results;
    const ids = categories.map(category => category.id);
    const paths = ids.map(id => ({params : {id:id.toString()}}))
    return {
      paths,
      fallback:false
    }
}