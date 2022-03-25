const express = require('express')
const router = express.Router()
const { 
    getItems,
    setItem,
    updateItem,
    deleteItem } = require('../controllers/itemController')

router.get('/', getItems)
router.post('/', setItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

/* 
    'cleaner' way
router.route('/').get(getItems).post(setItem)
router.route('/:id').put(updateItem).delete(deleteItem)
*/

module.exports = router