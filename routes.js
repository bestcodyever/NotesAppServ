const express = require("express");
const router = express.Router();
const knex = require('./db/knex')


router.get("/", (req, res) =>{
  getNotes().then((response) => {
    res.json(response)
  })
});
router.get('/:id', (req, res)=>{
  getId(req.params.id).then((response)=>{
    res.send(response)
  })
})

router.post("/", (req, res) =>{
  let newFam = req.body.fam
  let newNote = req.body.note
  let newDate = req.body.date
  let newPriority = req.body.priority
  knex('notes').insert({note: newNote, fam: newFam, date: newDate, priority: newPriority}).returning("id")
  .then((data)=>{
    res.send(data)
  })
})

router.delete("/:id", (req, res)=>{
  knex('notes').where('id', req.params.id).delete()
  .then((deleteData)=>{
    res.send('bye')
  })
})
router.put("/:id", (req, res) =>{
  let newFam = req.body.fam
  let newNote = req.body.note
  let newDate = req.body.date
  let newPriority = req.body.priority
  knex('notes').where('id', req.params.id).update({note: newNote, fam: newFam, date: newDate, priority: newPriority}).returning("id")
  .then((data)=>{
    res.send(data)
  })
})

function getNotes() {
  return knex('*').from('notes')
}
function getId (queryId){
  return knex('notes').where('id', queryId).first()
}

module.exports = router
