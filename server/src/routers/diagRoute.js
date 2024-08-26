const express = require('express')
const diagController = require('../controllers/diag')

const router = express.Router()
router.post('/addNewDiag', diagController.addNewDiag)


module.exports = router;