import pool from '../config/db.js';

const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS dishes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      price NUMERIC(10,2) NOT NULL,
      category VARCHAR(50) NOT NULL
    )
  `);
};

const getAll = async () => {
  const result = await pool.query('SELECT * FROM dishes ORDER BY id');
  return result.rows;
};

const create = async (dish) => {
  const { name, price, category } = dish;
  const result = await pool.query(
    'INSERT INTO dishes (name, price, category) VALUES ($1,$2,$3) RETURNING *',
    [name, price, category]
  );
  return result.rows[0];
};

const update = async (id, dish) => {
  const { name, price, category } = dish;
  const result = await pool.query(
    'UPDATE dishes SET name=$1, price=$2, category=$3 WHERE id=$4 RETURNING *',
    [name, price, category, id]
  );
  return result.rows[0];
};

const remove = async (id) => {
  await pool.query('DELETE FROM dishes WHERE id=$1', [id]);
};

export { createTable, getAll, create, update, remove };
