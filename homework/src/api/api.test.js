import axios from "axios";
import {getAgents} from "./api";
import {updateAgent} from "./api";

jest.mock('axios')

describe('agents api', function () {
    test('should return agents data when getAgents called', async () => {
        const mockData = [];
        axios.get.mockResolvedValue({
            data: mockData,
        });

        const result = await getAgents();

        expect(result).toEqual(mockData);
    });

    test('should return updated data when updateAgent called', async () => {
        const mockData = [];
        axios.put.mockResolvedValue({
            data: mockData,
        });

        const result = await updateAgent(mockData);

        expect(result).toEqual(mockData)
    });
});
