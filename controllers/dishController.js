import * as Dish from '../models/dishModel.js';

export const getDishes = async (req, res) => {
  res.json(await Dish.getAll());
};

export const createDish = async (req, res) => {
  res.json(await Dish.create(req.body));
};

export const updateDish = async (req, res) => {
  res.json(await Dish.update(req.params.id, req.body));
};

export const deleteDish = async (req, res) => {
  await Dish.remove(req.params.id);
  res.json({ message: 'Deleted' });
};