/*
|--------------------------------------------------------------------------
|  Dependencies
|--------------------------------------------------------------------------
*/

const router = require('express').Router(),
knex = require('../db/knex.js');






router.get('/', (request, response) => {

    return knex.select()
        .from('characters')
        .then((character) => {
            response.status(200).json(character);
        })
})



module.exports = router;