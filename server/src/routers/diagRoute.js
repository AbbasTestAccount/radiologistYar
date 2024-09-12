const express = require('express')
const diagController = require('../controllers/diag')

const router = express.Router()
router.post('/addNewDiag', diagController.addNewDiag)
router.get('/getTop3', diagController.getTop3DiseasesOfPatient)


module.exports = router;