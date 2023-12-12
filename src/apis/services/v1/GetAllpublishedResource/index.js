const Resource = require('@models/Resources');
const GetAllpublishedResource = async () => {
  try {
    const resources = await Resource.find({ isdelete: false ,publishStatus:true});
    return resources;
  } catch (error) {
    console.error('Failed to fetch resources:', error);
    throw new Error('Failed to fetch resources');
  }
};
module.exports = {
  GetAllpublishedResource,
};
