import React from 'react';


function OrderItem({ order, updateOrderStatus }) {
    const toggleStatus = () => {
        const newStatus = order.status === 'įvykdyta' ? 'neįvykdyta' : 'įvykdyta';
        updateOrderStatus(order.id, newStatus);
    };

    return (
        <li className={`order-item ${order.status}`}>
            <span>{order.title}</span>
            <button onClick={toggleStatus}>
                {order.status === 'neįvykdyta' ? 'Pažymėti kaip įvykdytą' : 'Pažymėti kaip neįvykdytą'}
            </button>
        </li>
    );
}

export default OrderItem;