const client = require("./");

const getAllOrders = async () => {
  try {
    const res = await client.query(`
    SELECT * FROM orders;
    `);
    return res.rows;
  } catch (error) {
    throw error;
  }
};

const getAllOrdersById = async ({ orderId }) => {
  try {
    const res = await client.query(
      `
      SELECT * FROM orders WHERE id = $1
      `,
      [orderId]
    );
    return res.rows;
  } catch (error) {
    throw error;
  }
};

const updateOrder = async ({ id, creatorId }) => {
  try {
    if (id != undefined) {
      if (creatorId) {
        client.query(
          `
          UPDATE orders
          SET "creatorId" = $1
          WHERE id = $2;
        `,
          [creatorId, id]
        );
      }
    }
    const response = await client.query(
      `
      SELECT * FROM orders
      WHERE id = $1;
    `,
      [id]
    );

    return response.rows[0];
  } catch (err) {
    throw err;
  }
};

const destroyOrder = async (orderId) => {
  try {
    const {
      rows: [deletedOrder],
    } = await client.query(
      `
      DELETE FROM orders o
      WHERE o.id = $1
      RETURNING *;
    `,
      [orderId]
    );

    return deletedOrder;
  } catch (err) {
    throw err;
  }
};

const createOrder = async ({ creatorId }) => {
  const res = await client.query(
    `
  INSERT INTO orders ("creatorId")
  VALUES ($1)
  RETURNING *;
    `,
    [creatorId]
  );
  return res.rows[0];
};

const checkoutOrder = async (orderId) => {
  try {
    client.query(
      `
      UPDATE orders
      SET "isPurchased" = true
      WHERE id = $1;
    `,
      [orderId, id]
    );
  } catch (error) {
    throw error;
  }
};

const getCartByUserId = async (creatorId) => {
  try {
    const cart = await client.query(
      `
      SELECT * FROM orders
      WHERE "creatorId" = $1
      AND "isPurchased" = false;
    `,
      [creatorId]
    );
    return cart.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllOrders,
  getAllOrdersById,
  destroyOrder,
  updateOrder,
  createOrder,
  checkoutOrder,
  getCartByUserId,
};
