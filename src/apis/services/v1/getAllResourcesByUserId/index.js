const Resource = require('@models/Resources');

const getAllResources = async (userId) => {
  try {
     const resources = await Resource.find({ userId, isdelete: false });
    return resources;
  } catch (error) {
    throw new Error('Failed to fetch resources');
  }
};

module.exports = {
  getAllResources
};
