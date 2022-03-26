const asyncHandler = require('express-async-handler') 

const Item = require('../models/itemModel')
const User = require('../models/userModel')

// @desc    Get items
// @route   GET /api/items
// @access  Private
const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find({user: req.user.id})

    res.status(200).json(items)
})

// @desc    Set item
// @route   POST /api/items
// @access  Private
const setItem = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const item = await Item.create ({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(item)
})

// @desc    Update item
// @route   UPDATE /api/items/:id
// @access  Private
const updateItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if (!item) {
        res.status(400)
        throw new Error('Item not found.')
    }

    const user = await User.findById(req.user.id)

    //Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found!')
    }

    //Check if the logged in user matches the item's user
    if (item.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedItem)
})

// @desc    Delete item
// @route   DELETE /api/items/:id
// @access  Private
const deleteItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if(!item){
        res.status(400)
        throw new Error('Item not found.')
    }

    const user = await User.findById(req.user.id)

    //Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found!')
    }

    //Check if the logged in user matches the item's user
    if (item.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await item.remove()


    res.status(200).json( {id: req.params.id})
})

module.exports = {
    getItems,
    setItem,
    updateItem,
    deleteItem,
}