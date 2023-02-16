const router = require('express').Router()
const puppiesCtrl = require('../controllers/puppies.js')


router.post('/', puppiesCtrl.create)
router.get('/', puppiesCtrl.index)



module.exports = router
