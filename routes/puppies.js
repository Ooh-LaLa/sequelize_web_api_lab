const router = require('express').Router()
const puppiesCtrl = require('../controllers/puppies.js')


router.post('/', puppiesCtrl.create)
router.get('/', puppiesCtrl.index)
router.put('/:id', puppiesCtrl.update)
router.delete('/:id', puppiesCtrl.delete)

router.post('/:id/dogparks', puppiesCtrl.addDogPark)

module.exports = router
