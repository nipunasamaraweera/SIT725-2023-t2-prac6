let collection = require('../models/anime')


function postAnime(req, res) {
    anime = req.body;
    collection.postAnime(anime, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, messsage: 'post success' })
        }
    });
}

function getAllAnime(req, res) {
    collection.getAllAnime((err, cards) => {
        if (err) {
            console.error(err);
            return res.statusCode(500).send('Error occurred');
        }
        res.render('index', { cards });
    })
}

function getAllAnime(req, res) {
    collection.getAllAnime((error, result) => {
        if (!error) {
            res.json({ statusCode: 200, data: result, messsage: 'post success' })
         }
     })
 }


module.exports = { postAnime, getAllAnime }