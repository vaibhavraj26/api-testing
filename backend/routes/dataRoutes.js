const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// POST: Create new data entry
router.post('/data', async (req, res) => {
  try {
    const { name, email, message, category } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const newData = new Data({
      name,
      email,
      message,
      category,
    });

    const savedData = await newData.save();
    res.status(201).json({
      message: 'Data saved successfully',
      data: savedData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve all data entries
router.get('/data', async (req, res) => {
  try {
    const allData = await Data.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: 'Data retrieved successfully',
      count: allData.length,
      data: allData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve single data entry by ID
router.get('/data/:id', async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.status(200).json({
      message: 'Data retrieved successfully',
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE: Update data entry by ID
router.put('/data/:id', async (req, res) => {
  try {
    const { name, email, message, category } = req.body;
    const updatedData = await Data.findByIdAndUpdate(
      req.params.id,
      { name, email, message, category },
      { new: true, runValidators: true }
    );

    if (!updatedData) {
      return res.status(404).json({ error: 'Data not found' });
    }

    res.status(200).json({
      message: 'Data updated successfully',
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete data entry by ID
router.delete('/data/:id', async (req, res) => {
  try {
    const deletedData = await Data.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.status(200).json({
      message: 'Data deleted successfully',
      data: deletedData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
