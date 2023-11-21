// const statusData = require('@models/que');
// const mongoose = require('mongoose');

// // Service function to update a Exam by ID
// const updateStatusById = async (id, Data) => {

//   try {
//     let { teacherid1 ,status1} = Data.req_teacherid[0];
//     console.log(Data.req_teacherid.teacherid);
//      const mongooseId = mongoose.Types.ObjectId(id);
//     const existingDocument = await statusData.findById(mongooseId);
//  console.log(existingDocument);
//     //  if (existingDocument) {
//     //   existingDocument.req_teacherid.forEach(item => {
//     //     if (item.teacherid == teacherid1 && item.status =='requested' && item.flag==true) {
//     //       item.status = status1;
//     //     }
//     //   });
   

// if (existingDocument) {
//   existingDocument.req_teacherid.forEach(item => {
//     if (item.teacherid == teacherid1 && item.status === 'requested' && item.flag === true) {
//       item.status = status1;
//     }
//   });
// }




//       // Save the updated document
//       const updatedDocument = await existingDocument.save();


      

//  if (updatedDocument) {
//       updatedDocument.req_teacherid.forEach((item) => {
//         if (item.status == 'requested') {
//           // If status is 'Accepted', set flag to false
//           item.flag = false;
//         }
//       });

//  const  updated= await updatedDocument.save();
//       console.log('Updated Document:', updated.req_teacherid);
//       return updated.req_teacherid;
//     } else {
//       console.log('Document not found.');
//       return null;
//     }
//   } catch (error) {
//     throw new Error('Failed to update Exam');
//   }
// };

// module.exports = {
//     updateStatusById,
// };
const statusData = require('@models/que');
const mongoose = require('mongoose');

// Service function t1o update an Exam by ID
const updateStatusById = async (id, data) => {
  try {
    const { teacherid, status } = data.req_teacherid;
    const mongooseId = mongoose.Types.ObjectId(id);

    // Find the existing document by ID
    const existingDocument = await statusData.findById({_id:mongooseId});

    if (!existingDocument) {
      console.log('Document not found.');
      return null;
    }

    // Update the status if conditions are met
     existingDocument.req_teacherid.forEach(item => {
      console.log('Document not found.',item);
      if (item.teacherid == teacherid && item.status == 'requested' && item.flag == true) {
        item.status = status;
      }
    });

    // Save the updated document
    const updatedDocument = await existingDocument.save();

    if (updatedDocument) {
      // Set the flag to false for items with 'requested' status
      updatedDocument.req_teacherid.forEach(item => {
        if (item.status === 'requested') {
          item.flag = false;
        }
      });

      // Save the document again after updating flags
      const finalUpdatedDocument = await updatedDocument.save();

      console.log('Updated Document:', finalUpdatedDocument.req_teacherid);
      return finalUpdatedDocument.req_teacherid;
    } else {
      console.log('Document not found.');
      return null;
    }
  } catch (error) {
    throw new Error('Failed to update Exam');
  }
};

module.exports = {
  updateStatusById,
};
