import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ name: '', email: '', seats: 1 });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="booking-form">
            <h2>Book Tickets</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Number of Seats:
                    <input type="number" name="seats" value={formData.seats} onChange={handleChange} min="1" max="10" required />
                </label>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookingForm;