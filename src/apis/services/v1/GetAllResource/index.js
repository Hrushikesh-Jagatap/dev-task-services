const Resource = require('@models/Resources');

const getAllResources = async () => {
  try {
   const resources = await Resource.find({ isdelete: false });
    return resources;
  } catch (error) {
console.error('Failed to fetch resources:', error);
    throw new Error('Failed to fetch resources');
  }
};

module.exports = {
  getAllResources
};
