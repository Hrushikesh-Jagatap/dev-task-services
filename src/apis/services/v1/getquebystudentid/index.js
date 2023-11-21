const QueData = require('@models/que');
const mongoose = require('mongoose');

// Service function to get a single batch by batchID
const getquebystudentid = async (studnetids) => {
  try {
    console.log(studnetids);
  
        const Que = await QueData.find({ studnetid: studnetids }).sort({updatedAt:-1});

    return Que;
  } catch (error) {
    throw new Error('Failed to  get que by studentid ');
  }
};

module.exports = {
  getquebystudentid
}  