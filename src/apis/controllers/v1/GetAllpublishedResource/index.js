const ResourceService = require('@root/src/apis/services/v1/GetAllpublishedResource');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to get a Assignment  by  Batch ID
const GetAllpublishedResource = async (req, res, next) => {
    try {
        
        const resources = await ResourceService.GetAllpublishedResource();
        if (!resources) {
            return HttpResponseHandler.success(req, res, resources);
        }
        
        return HttpResponseHandler.success(req, res, resources);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    GetAllpublishedResource
}  
