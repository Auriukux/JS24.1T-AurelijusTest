import React from 'react';
import OrderItem from './OrderItem';

function OrderList({ orders, updateOrderStatus }) {
    if (orders.length === 0) return <p>Užsakymų nėra. Pridėkite naują!</p>;

    return (
        <ul className="order-list">
            {orders.map(order => (
                <OrderItem key={order.id} order={order} updateOrderStatus={updateOrderStatus} />
            ))}
        </ul>
    );
}

export default OrderList;