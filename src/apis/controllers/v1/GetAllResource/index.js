const ResourceService = require('@root/src/apis/services/v1/GetAllResource');

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a Assignment  by  Batch ID
const getAllResources = async (req, res, next) => {
    try {
        

        const resources = await ResourceService.getAllResources();

        if (!resources) {
            return HttpResponseHandler.success(req, res, resources);
        }
        
        return HttpResponseHandler.success(req, res, resources);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllResources
}  