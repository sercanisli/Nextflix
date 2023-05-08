import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CategoryList() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
                api_key : API_KEY
            }
        })
        .then(response => {
            setCategories(response.data.genres)
        })
        .catch(err => {
            console.log(error)
        })
    }, [])
    return (
        <div>
            <h1>Movie categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    )
}