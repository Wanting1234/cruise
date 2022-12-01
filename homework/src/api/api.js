import axios from "axios";

const AGENT_URL = "http://localhost:3001/agents";
const getAgents = () => {
    return axios.get(AGENT_URL).then(({data}) => data)
}

const putAgent = (agent) => {
    return axios.put(`${AGENT_URL}/${agent.id}`, {
        name: agent.name,
        os: agent.os,
        status: agent.status,
        type: agent.type,
        ip: agent.ip,
        location: agent.location,
        resources: agent.resources
    })
}

export {getAgents, putAgent}
