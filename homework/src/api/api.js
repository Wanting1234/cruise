import axios from "axios";

const AGENT_URL = "http://localhost:3001/agents";
export const getAgents = () => axios.get(AGENT_URL).then(({ data }) => data);

export const modifyAgent = (agent) =>
  axios
    .put(`${AGENT_URL}/${agent.id}`, {
      ...agent,
    })
    .then((res) => res.data);
