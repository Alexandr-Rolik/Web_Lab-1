import React, { useState, useEffect } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import BookingForm from './BookingForm';
import './App.css';

const App = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies()
            .then((data) => setMovies(data))
            .catch((error) => console.error(error));
    }, []);

    const fetchMovies = async () => {
        // Mock movies data for demonstration
        return [
            { id: 1, title: 'Lock, Stock and Two Smoking Barrels', poster: 'movie1.jpg', details: 'Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.' },
            { id: 2, title: 'Inglourious Basterds', poster: 'movie2.jpg', details: 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner\'s vengeful plans for the same.' },
            { id: 3, title: 'The Gentlemen', poster: 'movie3.jpg', details: 'An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.' },
        ];
    };

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleBookingSubmit = (formData) => {
        // Implement logic to submit booking form data
        console.log(formData);
    };

    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <MovieList movies={movies} onMovieClick={handleMovieClick} />
                {selectedMovie && <MovieDetails movie={selectedMovie} />}
                <BookingForm onSubmit={handleBookingSubmit} />
            </div>
        </div>
    );
};

export default App;