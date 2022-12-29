import React from "react";
import { useSelector } from "react-redux";
import { countAgentsNumberWithProps } from "../../../../features/agentsSlice";

function Statistics() {
  const physicalNum = useSelector((state) =>
    countAgentsNumberWithProps(state, "physical")
  );
  const virtualNum = useSelector((state) =>
    countAgentsNumberWithProps(state, "virtual")
  );
  const menu = [
    { name: "all", number: physicalNum + virtualNum },
    { name: "physical", number: physicalNum },
    { name: "virtual", number: virtualNum },
  ];
  return (
    <section className="card-overview">
      {menu.map((item) => (
        <div className="overview-item" key={item.name}>
          <span>{item.name.toUpperCase()}</span>
          <span data-testid={item.name}>{item.number}</span>
        </div>
      ))}
    </section>
  );
}

export default Statistics;
