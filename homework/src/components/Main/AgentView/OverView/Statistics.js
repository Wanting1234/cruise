import React from "react";

const Statistics = ({physicalNum, virtualNum}) => {
    const menu = [
        {name: 'all', number: physicalNum+virtualNum},
        {name: 'physical', number: physicalNum},
        {name: 'virtual', number: virtualNum},
    ]
    return (
        <section className="card-overview">
            {menu.map((item) =>
                (<div className="overview-item" key={item.name}>
                    <span>{item.name.toUpperCase()}</span>
                    <span data-testid={item.name}>{item.number}</span>
                </div>)
            )}
        </section>
    );
}

export default Statistics
