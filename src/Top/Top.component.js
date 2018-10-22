import Link from 'react-router-dom/Link';
import React from 'react';

export default function Top() {
    return (
        <div>
            <p>A frontend of simple todo manager with React</p>
            <Link to="/login">Login</Link>
        </div>
    );
}