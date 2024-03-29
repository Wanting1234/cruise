import reducer, {
  fetchAgents,
  updateAgent,
  selectCurrentAgentId,
} from "./agentsSlice";
import store from "../app/store";

describe("agentSlice", () => {
  test("should have no agents when fetchAgents is pending", () => {
    const initialState = [];
    expect(reducer(initialState, fetchAgents.pending)).toEqual([]);
  });

  test("should get agents when fetchAgents is fulfilled", async () => {
    const result = await store.dispatch(fetchAgents());
    const agents = result.payload;

    expect(result.type).toBe("agents/fetchAgents/fulfilled");
    const state = store.getState().agents;
    expect(state.agents).toEqual(agents);
  });

  test("should update agent when updateAgent is fulfilled", async () => {
    const updatedAgent = {
      id: 1,
      ip: "192.168.1.80",
      location: "/var/lib/cruise-agent",
      name: "bjstdmngbdr08.thoughtworks.com",
      os: "windows",
      resources: ["Safari", "Ubuntu", "Chrome"],
      status: "building",
      type: "virtual",
    };

    await store.dispatch(fetchAgents());
    const result = await store.dispatch(updateAgent(updatedAgent));
    const agent = result.payload;

    expect(result.type).toBe("agents/updateAgent/fulfilled");
    const state = store.getState().agents;
    expect(state.agents[0]).toEqual(agent);
  });

  test("should return initial state", () => {
    expect(reducer(undefined, { payload: undefined }).selectedAgent).toEqual(
      -1
    );
  });

  test("should return selected agent id", () => {
    const initialState = {
      selectedAgent: -1,
    };
    expect(
      reducer(initialState, selectCurrentAgentId(3)).selectedAgent
    ).toEqual(3);
  });
});
