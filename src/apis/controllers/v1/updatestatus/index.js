const statusService = require('@root/src/apis/services/v1/updatestatus');
const { HttpResponseHandler } = require('intelli-utility');

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
    // else{

    // }
     data={updateQue,meetinflink : "myeduc.ddns.net"}
   
 console.log("++++++++++++++",data)
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  updatesattusById,
};
