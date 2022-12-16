import {rest} from 'msw'

export const handlers = [
    rest.put("http://localhost:3001/agents/1", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "name": "bjstdmngbdr08.thoughtworks.com",
                "os": "windows",
                "status": "building",
                "type": "virtual",
                "ip": "192.168.1.80",
                "location": "/var/lib/cruise-agent",
                "resources": [
                    "Safari",
                    "Ubuntu",
                    "Chrome"
                ],
                "id": 1
            })
        )
    }),
]
