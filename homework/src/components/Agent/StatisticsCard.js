import React from "react";

export const StatisticsCard = ({physicalNum, virtualNum}) => (
    <div className="card-overview">
        <div className="overview-item">
            <span>ALL</span>
            <span>{physicalNum + virtualNum}</span>
        </div>
        <div className="overview-item">
            <span>PHYSICAL</span>
            <span>{physicalNum}</span>
        </div>
        <div className="overview-item">
            <span>VIRTUAL</span>
            <span>{virtualNum}</span>
        </div>
    </div>
);
