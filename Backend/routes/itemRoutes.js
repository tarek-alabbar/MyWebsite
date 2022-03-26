const express = require('express')
const router = express.Router()
const { 
    getItems,
    setItem,
    updateItem,
    deleteItem } = require('../controllers/itemController')

    const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getItems)
router.post('/', protect,  setItem)
router.put('/:id', protect, updateItem)
router.delete('/:id', protect, deleteItem)

/* 
    'cleaner' way
router.route('/').get(getItems).post(setItem)
router.route('/:id').put(updateItem).delete(deleteItem)
*/

module.exports = router