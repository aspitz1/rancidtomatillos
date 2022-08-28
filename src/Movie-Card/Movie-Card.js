import React from 'react'
import './Movie-Card.css'
const MovieCard = ({ movieDetails, switchView}) => {
    const {
        title, poster_path, id, release_date, overview,
        genres, budget, revenue, runtime, tagline, average_rating
    } = movieDetails;
    
    const releaseDate = new Date(release_date).toLocaleDateString('en-US')
    const avgRating = average_rating.toFixed(1)
    return <article  key={id} style={{ backgroundImage: `url(${poster_path})`}} id={id} name={title} alt={title} className='movie-card' onClick={() => switchView(id)}>
        <h3>{title}</h3>
        <ul>
            <li className='release'>{releaseDate}</li>
            <li className='rating'>{avgRating}</li>
            <li className='genres'>{genres}</li>
        </ul>
    </article>
}
export default MovieCard;