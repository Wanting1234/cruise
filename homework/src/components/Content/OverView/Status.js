import React from "react";
import './Card.css'

export const Status = ({status, num}) => (
    <div className={`card ${status === 'building' ? 'yellow' : 'green'}`}>
        <h1>{status}</h1>
        <div
            className={`iconfont ${
                status === 'building' ? 'icon-cog' : 'icon-coffee'}`
            }>
        </div>
        <p>{num}</p>
    </div>
);
