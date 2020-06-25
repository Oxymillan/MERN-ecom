import express from "express";
import User from "../models/userModel.js";
import { getToken } from "../util.js";

const router = express.Router();

// Route for sign in
router.post('/signin', async (req, res) => {

  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (signinUser) {
    res.send(json({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser)
    }))

  } else {
    res.status(401).send({ msg: 'Invalid Email or Password.' });
  }

})

// Route for registration
router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser)
    })
  } else {
    res.status(401).send({ msg: 'Invalid User Data.' });
  }

})

// Route for creating admin user
router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Jin",
      email: "oxymje@gmail.com",
      password: "1234",
      isAdmin: true,
    });

    const newUser = await user.save();
    res.send(newUser);

  } catch (error) {
    res.send({msg: error.message });
  }
});

export default router;