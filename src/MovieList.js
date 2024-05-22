import React from 'react';
import MoviePoster from './MoviePoster';

const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div className="movie-list">
            <h2>Now Showing</h2>
            {movies.map((movie) => (
                <MoviePoster key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
            ))}
        </div>
    );
};

export default MovieList;