const m = require('../models');

async function index(req, res) {
  try {
    const data = await m.Customer.findAll();
    res.json({ data });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function show(req, res) {
  try {
    const data = await m.Customer.findOne({ where: { id: req.params.id } });
    res.json({ data });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function create(req, res) {
  try {
    const newCustomer = await m.Customer.create({ ...req.body });
    res.json({ data: newCustomer });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function update(req, res) {
  try {
    const status = await m.Customer.update({ ...req.body }, { where: { id: req.params.id } });
    res.json({ status });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function destroy(req, res) {
  try {
    const status = await m.Customer.destroy({ where: { id: req.params.id } });
    res.json({ status });
  } catch (error) {
    res.status(500).send({ error });
  }
}

module.exports = {
  index, show, create, update, destroy,
};
