import axios from "axios";

const AGENT_URL = "http://localhost:3001/agents";
export const getAgents = () => {
    return axios.get(AGENT_URL).then(({data}) => data)
}

export const updateAgent = agent => {
    return axios.put(`${AGENT_URL}/${agent.id}`, {
        ...agent
    }).then(res => res.data)
}

export default {getAgents, updateAgent}
