const mongoose= require('mongoose');

const {Schema}=mongoose;
const UserSchema=new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  }, {
    timestamps: true,
})

const Exercice= mongoose.model('Exercice', UserSchema)
module.exports=Exercice