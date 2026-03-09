const Order = require('../models/Order');
const { mapOrder } = require('../services/orderService');

const createOrder = async (req, res) => {
  try {
    const mapped = mapOrder(req.body);
    const order = new Order(mapped);
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id });
    if (!order) return res.status(404).json({ error: 'O pedido não foi encontrado.' });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findOneAndUpdate(
  { orderId: req.params.id },
  mapOrder(req.body),
  { new: true, runValidators: true }
);
    if (!updated) return res.status(404).json({ error: 'O pedido não foi encontrado.' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findOneAndDelete({ orderId: req.params.id });
    if (!deleted) return res.status(404).json({ error: 'O pedido não foi encontrado.' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder };