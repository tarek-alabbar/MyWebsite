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
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)
*/

module.exports = router