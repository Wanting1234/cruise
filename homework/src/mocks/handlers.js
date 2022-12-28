import { rest } from 'msw';

const handlers = [
  rest.put('http://localhost:3001/agents/1', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      name: 'bjstdmngbdr08.thoughtworks.com',
      os: 'windows',
      status: 'building',
      type: 'virtual',
      ip: '192.168.1.80',
      location: '/var/lib/cruise-agent',
      resources: [
        'Safari',
        'Ubuntu',
        'Chrome',
      ],
      id: 1,
    }),
  )),
  rest.put('http://localhost:3001/agents/2', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      name: 'bjstdmngbdr10.thoughtworks.com',
      os: 'ubuntu',
      status: 'building',
      type: 'physical',
      ip: '192.168.1.117',
      location: '/var/lib/cruise-agent',
      resources: [
        'Chrome',
        'Test01',
      ],
      id: 2,
    }),
  )),
  rest.put('http://localhost:3001/agents/3', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      name: 'bjstdmngbdr10.thoughtworks.com',
      os: 'ubuntu',
      status: 'building',
      type: 'physical',
      ip: '192.168.1.117',
      location: '/var/lib/cruise-agent',
      resources: [
        'Test02',
        'Test03',
      ],
      id: 3,
    }),
  )),
  rest.get('http://localhost:3001/agents', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        name: 'bjstdmngbdr08.thoughtworks.com',
        os: 'windows',
        status: 'building',
        type: 'virtual',
        ip: '192.168.1.80',
        location: '/var/lib/cruise-agent',
        resources: [
          'Firefox',
          'Safari',
          'Ubuntu',
          'Chrome',
        ],
        id: 1,
      },
      {
        name: 'bjstdmngbdr10.thoughtworks.com',
        os: 'ubuntu',
        status: 'building',
        type: 'physical',
        ip: '192.168.1.117',
        location: '/var/lib/cruise-agent',
        resources: [
          'Chrome',
        ],
        id: 2,
      },
      {
        name: 'bjstdmngbdr10.thoughtworks.com',
        os: 'ubuntu',
        status: 'building',
        type: 'physical',
        ip: '192.168.1.117',
        location: '/var/lib/cruise-agent',
        resources: [],
        id: 3,
      },
    ]),
  )),
];

export default handlers;
