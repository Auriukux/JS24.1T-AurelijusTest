import React, { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import './App.scss';

function App() {
    const [orders, setOrders] = useState([]);
    const [filter, setFilter] = useState('visi');

    const addOrder = (title) => {
        setOrders([...orders, { id: Date.now(), title: title, status: 'neįvykdyta' }]);
    };

    const updateOrderStatus = (id, newStatus) => {
        setOrders(
            orders.map(order =>
                order.id === id ? { ...order, status: newStatus } : order
            )
        );
    };

    const filteredOrders = orders.filter(order => {
        switch (filter) {
            case 'visi':
                return true;
            case 'neįvykdyti':
                return order.status === 'neįvykdyta';
            case 'įvykdyti':
                return order.status === 'įvykdyta';
            default:
                return true;
        }
    });

    const getFilterClass = (status) => filter === status ? 'active' : '';

    return (
        <div className="app">
            <OrderForm addOrder={addOrder} />
            <div className="filter">
                <button onClick={() => setFilter('visi')} className={getFilterClass('visi')}>Visi</button>
                <button onClick={() => setFilter('neįvykdyti')} className={getFilterClass('neįvykdyti')}>Neįvykdyti</button>
                <button onClick={() => setFilter('įvykdyti')} className={getFilterClass('įvykdyti')}>Įvykdyti</button>
            </div>
            <OrderList orders={filteredOrders} updateOrderStatus={updateOrderStatus} />
        </div>
    );
}

export default App;