const statusService = require('@root/src/apis/services/v1/updatestatus');
const { HttpResponseHandler } = require('intelli-utility');
const Que = require('@root/src/apis/models/que');
// update /exam
const updatesattusById = async (req, res, next) => {

  const { teacherId } = req.body;
  try {
    const updateQue = await statusService.updateStatusById(req.params.id, req.body);
 console.log("++++++++++++++",updateQue[0].status)

    if (!updateQue) {
      return HttpResponseHandler.success(req, res, updateQue);
    }
    let data={updateQue}
    if(updateQue[0].status=="Rejectecd"){
      return HttpResponseHandler.success(req, res, data);
    }
    const meetingUrl = "myeduc.ddns.net";

const result = await Que.findOneAndUpdate(
  { "req_teacherid._id": updateQue[0]._id },
  { $set: { "req_teacherid.$.meetingurl": meetingUrl } },
  { new: true }
);

    console.log(result);

    // Update the data with the meeting link
    data = { updateQue, meetinflink:meetingUrl };
    console.log("++++++++++++++", data);

    // Respond with the updated data
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  updatesattusById,
};
