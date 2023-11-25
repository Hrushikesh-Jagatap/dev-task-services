const QueService = require('@services/v1/createque');
const { HttpResponseHandler } = require('intelli-utility');
const Que = require('@models/que');


// POST // create exam
const createQue = async (req, res, next) => {

  try {

    let queData = req.body;
 const  studentquestion= await Que.find({studnetid:queData.studnetid}).sort({ createdAt: -1 });
console.log(studentquestion.length)
 if(studentquestion.length == 0){
    queData.numberofqueaskstudent=1;
}
else{
 console.log(studentquestion[0].howmanysubscriptionaskstudentlimit)
   if(studentquestion[0].howmanysubscriptionaskstudentlimit> studentquestion[0].numberofqueaskstudent){
 let a= studentquestion[0].numberofqueaskstudent+1;
        //createdQue.numberofqueaskstudent=a;
    queData.numberofqueaskstudent=a;
   }
     else{
    let message="plz add subscription"
     return HttpResponseHandler.success(req, res, message);
   }
  }

    const createdQue = await QueService.createQue(queData);

    if (!createdQue) {
      return HttpResponseHandler.success(req, res, createdQue);
    }

   if(createdQue=="no active teacher")
   {
    return HttpResponseHandler.success(req, res, createdQue);
   // return HttpResponseHandler.success(req, res,);
   }
  //  const  studentquestion= await Que.find({studnetid:queData.studnetid}).sort({ updatedAt: -1 });
// console.log(studentquestion[0].howmanysubscriptionaskstudentlimit)
//    if(studentquestion[0].howmanysubscriptionaskstudentlimit>= studentquestion.length){
//  let a= studentquestion[0].numberofqueaskstudent=studentquestion.length+1;
     
    //  createdQue.numberofqueaskstudent=a;
    //  const  createdQue1 = await createdQue.save();

    console.log(createdQue);
    return HttpResponseHandler.success(req, res, createdQue);
  //  }
  //  else{
  //   let message="plz add subscription"
  //    return HttpResponseHandler.success(req, res, message);
  //  }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createQue,
};
