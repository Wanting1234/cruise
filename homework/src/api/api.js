import axios from "axios";

const AGENT_URL = "http://localhost:3001/agents";
const getAgents = () => {
    return axios.get(AGENT_URL).then(({data}) => data)
}

const patchAgent = agent => {
    return axios.patch(`${AGENT_URL}/${agent.id}`, {
        resources: agent.resources
    })
}

export {getAgents, patchAgent}
