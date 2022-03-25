// @desc    Get items
// @route   GET /api/items
// @access  Private
const getItems = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
}

// @desc    Set item
// @route   POST /api/items
// @access  Private
const setItem = (req, res) => {
    res.status(200).json({ message: 'Set item'})
}

// @desc    Update item
// @route   UPDATE /api/items/:id
// @access  Private
const updateItem = (req, res) => {
    res.status(200).json({ message: `Update item ${req.params.id}`})
}

// @desc    Delete item
// @route   DELETE /api/items/:id
// @access  Private
const deleteItem = (req, res) => {
    res.status(200).json({ message: `Delete item ${req.params.id}`})
}
module.exports = {
    getItems,
    setItem,
    updateItem,
    deleteItem,
}