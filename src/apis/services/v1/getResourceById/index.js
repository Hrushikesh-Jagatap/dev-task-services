const ResourceData = require('@models/Resources');
const mongoose = require('mongoose');

// Service function to get a single resource by Id
const getResourceDetailsById = async (resourceId) => {
  try {
     const objectId = mongoose.Types.ObjectId(resourceId);
    const resource = await ResourceData.findOne({ _id:  objectId});
    return resource;
  } catch (error) {
    throw new Error('Failed to get resource Details');
  }
};

module.exports = {
    getResourceDetailsById
}  
