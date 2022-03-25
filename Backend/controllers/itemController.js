const asyncHandler = require('express-async-handler') 

// @desc    Get items
// @route   GET /api/items
// @access  Private
const getItems = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
})

// @desc    Set item
// @route   POST /api/items
// @access  Private
const setItem = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Set item'})
})

// @desc    Update item
// @route   UPDATE /api/items/:id
// @access  Private
const updateItem = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update item ${req.params.id}`})
})

// @desc    Delete item
// @route   DELETE /api/items/:id
// @access  Private
const deleteItem = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete item ${req.params.id}`})
})

module.exports = {
    getItems,
    setItem,
    updateItem,
    deleteItem,
}