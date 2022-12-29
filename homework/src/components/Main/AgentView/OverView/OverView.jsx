import React from "react";
import { useSelector } from "react-redux";
import Status from "./Status";
import Statistics from "./Statistics";
import { countAgentsNumberWithProps } from "../../../../features/agentsSlice";

export default function OverView() {
  const buildingNum = useSelector((state) =>
    countAgentsNumberWithProps(state, "building")
  );
  const idleNum = useSelector((state) =>
    countAgentsNumberWithProps(state, "idle")
  );

  return (
    <div className="overview" data-testid="overview">
      <Status status="building" num={buildingNum} />
      <Status status="idle" num={idleNum} />
      <Statistics />
    </div>
  );
}
