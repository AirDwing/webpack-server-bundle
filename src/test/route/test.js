const joi = require('joi');

const test = [
  {
    method: 'get',
    path: '/test',
    validate: {
      query: {
        name: joi.string().max(100).description('new user name')
      }
    },
    handler: async (ctx) => {
      ctx.status = 200;
      ctx.body = { status: 1, msg: 'hello world' };
    },
    swagger: {
      tags: ['demo'],
      responses: {
        200: {
          description: '查询域名',
          schema: joi.object({
            status: joi.number().integer().default(1),
            server: joi.string().default('js.cool')
          }).label('serverSuccess')
        }
      }
    }
  }
];

module.exports = test;
