const QueData = require('@models/que');


const updateQueById = async (queId, queData) => {
  try {
      console.log(queData)

  if (queData.hasOwnProperty("duration")) {
      console.log("Duration exists:", queData.duration);

      let meetingtime=queData.duration;
const gettimelimits = await QueData.findById(queId);
let timelimit=gettimelimits.timelimit;
if(meetingtime>timelimit)
{
 let Questant=Math.floor(meetingtime/timelimit);

 gettimelimits.numberofqueaskstudent=gettimelimits.numberofqueaskstudent+Questant;


  let mode=(meetingtime)%(timelimit);

if(mode==0)
{
  gettimelimits.numberofqueaskstudent=gettimelimits.numberofqueaskstudent-1;
}



 const updateque1 = await QueData.findByIdAndUpdate(queId, gettimelimits);





}
    }


const updateque = await QueData.findByIdAndUpdate(queId, queData, { new: true });



    return updateque;
  } catch (error) {
    throw new Error('Failed to update Exam');
  }
};

module.exports = {
    updateQueById,
};
