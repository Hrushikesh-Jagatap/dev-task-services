const mongoose = require('mongoose');

const queschema = new mongoose.Schema({

  class: {
    type: String
  },

  sub: {
    type: String
  },

  lang: {
    type: String
  },

  actual_ques: {
    type: String,
  },

  status: {
    type: String,
      
  },

  duration: {
    type: String,
    default:'0'
  },

  studnetid: {
    type: String,
  },

  name: {
    type: String
  },

  profileimage: {
    type: String
  },

  req_teacherid: [{
    teacherid: String,
    meetingurl: { type: String, default: null },
    status: {
      type: String,
      default: "requested"
    },

    flag: {
      type: Boolean,
      default: true
    },

  }],
  review: {
    type: String
  },
    timelimit:{
    type:String,
    default: "20",
  },
  numberofqueaskstudent:{
    type:Number,
    default: 0,
  },
    howmanysubscriptionaskstudentlimit:{
    type:Number,
    default: 25,
  },


  howmanytimeleft:{
  type:Number,
},
},

  { timestamps: true });

const que = mongoose.model('que', queschema);

module.exports = que;
