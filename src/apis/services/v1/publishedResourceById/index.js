const ResourceData = require('@models/Resources');
const { default: mongoose } = require('mongoose');


// Service function to publish a Resource by ID
const publishResourceById = async (resourceId) => {
  try {
    let publishStatus = 'true';

    const resource = await ResourceData.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(resourceId) }, { publishStatus: publishStatus });

    //send notification to teacher_> userId
    let className = resource.class
    const { userId , subject} = resource;


    // class and subject
    // senmd notification to all student
    return resource;
  } catch (error) {
    throw new Error('Failed to publish  Resource');
  }
};

module.exports = {
  publishResourceById
}  