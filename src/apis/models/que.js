const mongoose = require('mongoose');

const queschema = new mongoose.Schema({
  class:String,
  sub:String,
  lang:String,
  actual_ques:String,
  status:String,
  duration:String,
  studnetid:String,
  name:{type:String},
    profileimage:{type:String}, 
  req_teacherid:[{
    teacherid:String,
    meetingurl:{type:String,default:null},
    status:{
     type:String,
    default:"requested"
    },
    
    flag:{type:Boolean,default:true},
     
  }],
  review:String,
},
{ timestamps: true }); 

const que = mongoose.model('que', queschema);

module.exports = que;