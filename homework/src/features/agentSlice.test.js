import reducer, {fetchAgents, updateAgent} from "./agentSlice";
import agentSlice from "./agentSlice";
import store from "../app/store";

describe('agentSlice', () => {
    const initialState = []
    test('should have no agents when fetchAgents is pending', () => {
        expect(reducer(initialState, fetchAgents.pending)).toEqual([])
    });

    test('should get agents when fetchAgents is fulfilled', async () => {
        const result = await store.dispatch(fetchAgents())
        const agents = result.payload

        expect(result.type).toBe('agents/fetchAgents/fulfilled')
        const state = store.getState().agents
        expect(state).toEqual({agents})
    });

    test('should update agent when updateAgent is fulfilled', async () => {
        const updatedAgent = {
            "id": 1,
            "ip": "192.168.1.80",
            "location": "/var/lib/cruise-agent",
            "name": "bjstdmngbdr08.thoughtworks.com",
            "os": "windows",
            "resources": [
                "Safari",
                "Ubuntu",
                "Chrome"
            ],
            "status": "building",
            "type": "virtual"}

        const result = await store.dispatch(updateAgent(updatedAgent))
        const agent = result.payload

        expect(result.type).toBe('agents/updateAgent/fulfilled')
        expect(agent).toEqual(updatedAgent)
    });

})



