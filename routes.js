const express = require("express");
const router = express.Router();
const knex = require('./db/knex')


router.get("/", function(req, res) {
getNotes().then((data) => {
      res.json(data)
})

});

function getNotes(){
  return knex('*').from('notes')
}

module.exports = router
