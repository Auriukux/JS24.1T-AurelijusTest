import React, { useState } from 'react';

function OrderForm({ addOrder }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            addOrder(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Užsakymo pavadinimas"
                required
            />
            <button type="submit">Pridėti užsakymą</button>
        </form>
    );
}

export default OrderForm;