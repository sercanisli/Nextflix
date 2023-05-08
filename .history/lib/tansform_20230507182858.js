export const transform = (val) => {
    return{
        id : val.id,
        poster : val.poster_path, 
        name : val.name,
        date: val.release_date
    }
}