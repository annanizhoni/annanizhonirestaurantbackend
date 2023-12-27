// path: ./src/api/order/controllers/order.js

'use strict';

module.exports = {
  // GET /orders
  async find(ctx) {
    try {
      const orders = await strapi.services.order.find(ctx.query);
      return orders;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // GET /orders/:id
  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const order = await strapi.services.order.findOne({ id });
      return order;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // POST /orders
  async create(ctx) {
    try {
      const order = await strapi.services.order.create(ctx.request.body);
      return order;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // PUT /orders/:id
  async update(ctx) {
    try {
      const { id } = ctx.params;
      const order = await strapi.services.order.update({ id }, ctx.request.body);
      return order;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // DELETE /orders/:id
  async delete(ctx) {
    try {
      const { id } = ctx.params;
      const order = await strapi.services.order.delete({ id });
      return order;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
