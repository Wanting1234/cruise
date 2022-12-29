import axios from "axios";
import { getAgents, modifyAgent } from "./api";

jest.mock("axios");

describe("agents api", () => {
  test("should return agents data when getAgents called", async () => {
    const mockData = [];
    axios.get.mockResolvedValue({
      data: mockData,
    });

    const result = await getAgents();

    expect(result).toEqual(mockData);
  });

  test("should return updated data when updateAgent called", async () => {
    const mockData = [];
    axios.put.mockResolvedValue({
      data: mockData,
    });

    const result = await modifyAgent(mockData);

    expect(result).toEqual(mockData);
  });
});
