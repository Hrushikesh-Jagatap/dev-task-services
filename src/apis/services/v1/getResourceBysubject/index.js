const ResourceData = require('@models/Resources');

// Service function to get a single resource by Id
const getResourceDetailsById = async (sub) => {
  try {
    const resource = await ResourceData.find({ subject:  sub});
    return resource;
  } catch (error) {
    throw new Error('Failed to get resource Details');
  }
};

module.exports = {
    getResourceDetailsById
}  