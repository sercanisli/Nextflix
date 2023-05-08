import { baseUrl, categoriesUrl } from '@/config'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// export default function CategoryList({genres}) {
//     const [categories, setCategories] = useState([])

//     useEffect(() => {
//         axios.get('https://api.themoviedb.org/3/genre/movie/list', {
//             params: {
//                 api_key : '7727a1c97bc5205612f2769b66dcf4fe'
//             }
//         })
//         .then(response => {
//             setCategories( response.data.genres)
//         })
//         .catch(err => {
//             console.log(error)
//         })
//     }, [])
//     return (
//         <div>
//             <h1>Movie Categories</h1>
//             <ul>
//                 {categories.map(category =>  (
//                     <li key={category.id}> 
//                         <Link legacyBehavior href={`${baseUrl}/popular?api_key=${process.env.API_KEY}&language=en&with_genres=${category.id}`}>
//                             {category.name}
//                         </Link>
//                     </li>
//                 )
                
//                 )}
//             </ul>
//         </div>
//     )
// }



const Genre = ({categories}) => {
    console.log(categories);
    return (
        <div>
            {categories.name}
        </div>
    )
}


export async function getStaticProps(idFromPaths) {
    const {id} = idFromPaths.params;
    const api = await axios(`${categoriesUrl}/list?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const categories = api.data;
    return {
      props: {categories}
    }
}

export async function getStaticPaths () {
    const api = await axios(`${baseUrl}/popular?api_key=${process.env.API_KEY}&language=en-US&with_genres=${genres.id}`);
    const categories = api.data.results;
    const ids = categories.map(category => category.id);
    const paths = ids.map(id => ({params : {id:id.toString()}}))
    return {
      paths,
      fallback:false
    }
}

