import React from "react";
import './Card.css'

export const StatusCard = ({status, num}) => (
    <div className={`card ${status === 'building' ? 'yellow' : 'green'}`}>
        <div
            className={`iconfont ${
                status === 'building' ? 'icon-cog' : 'icon-coffee'}`
            }>
        </div>
        <h1>{status}</h1>
        <p>{num}</p>
    </div>
);
