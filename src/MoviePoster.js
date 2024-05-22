import React from 'react';

const MoviePoster = ({ movie, onClick }) => {
    return (
        <div className="movie-poster" onClick={onClick}>
            {movie.poster ? (
                <img src={movie.poster} alt={movie.title} />
            ) : (
                <div className="placeholder">No Poster Available</div> // Placeholder text
            )}
            <h3>{movie.title}</h3>
        </div>
    );
};

export default MoviePoster;