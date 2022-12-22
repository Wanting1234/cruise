import React from "react";
import './Card.css'

export const Status = ({status, num}) => (
    <section className={`card ${status === 'building' ? 'yellow' : 'green'}`}>
        <h1>{status}</h1>
        <div
            className={`iconfont ${
                status === 'building' ? 'icon-cog' : 'icon-coffee'}`
            }>
        </div>
        <p data-testid={`${status}`}>{num}</p>
    </section>
);
