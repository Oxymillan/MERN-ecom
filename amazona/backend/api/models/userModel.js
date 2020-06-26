import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: { 
    type: String,
     required: true,
      unique: true,
      index: true,
      dropDups: true,
      match:  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false},
  
});

const User = mongoose.model("User", userSchema);

export default User;