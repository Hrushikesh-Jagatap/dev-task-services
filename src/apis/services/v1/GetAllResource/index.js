const Resource = require('@models/Resources');

const getAllResources = async () => {
  try {
    const resources = await Resource.find({  });
    return resources;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllResources
};
