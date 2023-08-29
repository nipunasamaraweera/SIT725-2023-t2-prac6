var express = require("express")
//var app = express()
let router = express.Router()
let controller = require('../controllers/controller')

router.post('/api/anime', (req, res, next) => {
    controller.postAnime(req, res);
})

router.get('/api/anime', (req, res, next) => {
    controller.getAllAnime(req, res)
})

router.get('/', (req, res, next) => {
    controller.getAllAnime(req, res)
})


module.exports = router;