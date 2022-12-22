import React from "react";

export const Statistics = ({physicalNum, virtualNum}) => (
    // todo: duplicated code(use map)
    <section className="card-overview">
        <div className="overview-item">
            <span>ALL</span>
            <span data-testid="all">{physicalNum + virtualNum}</span>
        </div>
        <div className="overview-item">
            <span>PHYSICAL</span>
            <span data-testid="physical">{physicalNum}</span>
        </div>
        <div className="overview-item">
            <span>VIRTUAL</span>
            <span data-testid="virtual">{virtualNum}</span>
        </div>
    </section>
);
