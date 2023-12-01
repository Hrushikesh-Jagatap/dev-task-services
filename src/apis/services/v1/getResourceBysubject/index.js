const ResourceData = require('@models/Resources');

// Service function to get resources by subject
const getResourceDetailsBySubject = async (sub) => {
  try {
    const resources = await ResourceData.find({ subject: sub, isdelete: false });
    return resources;
  } catch (error) {
    console.error('Failed to get resource details:', error);
    throw new Error('Failed to get resource details');
  }
};

module.exports = {
  getResourceDetailsBySubject,
};
