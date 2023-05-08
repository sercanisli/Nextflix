import React from 'react'

export function getStaticPaths() {
    return {
      paths: [{
        params: {
          page: "1"
        }
      }],
      fallback: 'blocking'
    }
  }

  export async function getStaticProps({ params: { page = 1 } }) {
    try {
      page = Number(page);
      const stories = await getMovies('topstories', { page });
  
      return {
        props: {
          stories,
          page
        }
      }
    } 
    catch (err) {
      console.log({
        Error: err
      });
    }
  }

const MovieList = ({page, movies}) => {
  return (
    <div>
       { /*<Page>
            <Movies/>
  </Page>*/}
    </div>
  )
}

export default MovieList