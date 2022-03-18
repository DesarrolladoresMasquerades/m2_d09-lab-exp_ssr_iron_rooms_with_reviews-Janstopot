const router = require("express").Router();


const mongoose = require("mongoose");
const User = require("../models/User.model");
const Room = require("../models/Room.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/room", isLoggedIn, (req, res) => {
  res.render("user/room" , { user: req.session.email });
  

})

router.post("/room", isLoggedIn, (req, res, next)=>{
    const owner = req.session.email._id
    const name = req.body.name
    const description = req.body.description
    const imageUrl = req.body.imageUrl


    Room.create({name, description, imageUrl, owner})
    .then(res.render("/"))
})

module.exports = router;