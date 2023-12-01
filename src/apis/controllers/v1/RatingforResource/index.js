const ResourceService = require('@root/src/apis/services/v1/RatingforResource');
const { HttpResponseHandler } = require('intelli-utility');
// update /exam
const updateResourceById = async (req, res, next) => {
//   const { userId } = req.body;
  
  try {
    const updateResource = await ResourceService.updateResourceById(req.params.id, req.body);
    if (!updateResource) {
      return HttpResponseHandler.success(req, res, updateResource);
    }
    return HttpResponseHandler.success(req, res, updateResource);
  } catch (error) {
    next(error);
  }
};
module.exports = {
    updateResourceById,
};
