// const ResourceData = require('@models/Resources');
// const mongoose = require('mongoose');

// // Service function to update a Exam by ID
// const updateResourceById = async (resourceId, resourceData) => {
//   try {
//     let updatedResource;
//     let sid=resourceData.rating.sid
//     let rating = resourceData.rating.rating
//         const objectId = mongoose.Types.ObjectId(resourceId);

//     const Data = await ResourceData.findOne({_id:objectId});
//     console.log(Data.rating)
//     if(Data.rating.sid==sid){
//         updatedResource =await ResourceData.findOneAndUpdate({"rating.sid":sid, "rating.rating":rating});
//     }
//     else{
//      updatedResource = await ResourceData.findByIdAndUpdate(resourceId, resourceData, { new: true });
//     }
//      return updatedResource;
//   } catch (error) {
//     throw new Error('Failed to update Exam');
//   }
// };

// module.exports = {
//     updateResourceById,
// };
const mongoose = require('mongoose');
const Resource = require('@models/Resources');

// Service function to update or add a rating for a resource by ID
const updateResourceById = async (resourceId, resourceData) => {
  try {
     let sid=resourceData.rating.sid
    let rating = resourceData.rating.rating
    // Convert the resourceId to a Mongoose ObjectId
    const objectId = mongoose.Types.ObjectId(resourceId);

    // Find the resource by ID
    const resource = await Resource.findById(objectId);

    // Check if the sid already exists in the rating array
    const existingRatingIndex = resource.rating.findIndex(r => r.sid == sid);

    if (existingRatingIndex !== -1) {
      // If the sid exists, update the rating
      resource.rating[existingRatingIndex].rating = rating;
    } else {
      // If the sid doesn't exist, add a new rating object
      resource.rating.push({ sid, rating });
    }

    // Update the updatedAt timestamp
    resource.updatedAt = new Date();

    // Save the updated resource back to the database
    const updatedResource = await resource.save();
    
    return updatedResource;
  } catch (error) {
    throw new Error('Failed to update or add rating for resource');
  }
};

module.exports = {
  updateResourceById,
};
