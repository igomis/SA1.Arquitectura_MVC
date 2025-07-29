const model = require('../models/itemModel');
exports.getItems = (req, res) => res.json(model.getAll());
exports.createItem = (req, res) => {
  const item = { id: Date.now(), ...req.body };
  res.status(201).json(model.add(item));
};
