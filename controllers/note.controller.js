const Note = require("../models/note");

module.exports = {

    // READ ALL ----------
    findAll: (req, res) => {
        Note.find()
        .then(allNotes => res.json({notes: allNotes}))
        .catch(err => res.json({error: "error res", error: err}))
    },

    // CREATE
    create: (req, res) => {
        // const {title, content, isImportant} = req.body
        // req.body.title
        console.log(req.body)
        Note.create(req.body)
        .then(newNote => res.json(newNote))
        .catch(err => res.json({error: "error res", error: err}))
    },

    // READ ONE
    findOne: (req, res) => {
        console.log(req.params)
        Note.findOne({_id: req.params.id })
        .then(note => res.json(note))
        .catch(err => res.json({error: "error res", error: err}))
    },
    
    // UPDATE
    update: (req, res) => {
        console.log(req.params)
        console.log(req.body)
        Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
        .then((updatedNote) => {
            res.json(updatedNote)
            })
        .catch(err => res.json({error: "error res", error: err}))
    },

    // Delete
    delete: (req, res) => {
        Note.findByIdAndDelete(req.params.id)
        .then(result => res.json({result}))
        .catch(err => res.json({error: "error res", error: err}))
    }
}