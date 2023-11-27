const ResourceService = require('@root/src/apis/services/v1/publishedResourceById');

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a  resource by userId
const publishResourceById = async (req, res, next) => {
    try {
        const Resource = await ResourceService.publishResourceById(req.query.Id);
        
        if (!Resource) {
            return HttpResponseHandler.success(req, res, Resource);
        }

        return HttpResponseHandler.success(req, res, Resource);

    } catch (error) {
        next(error)
    }

};

module.exports = {
    publishResourceById
}  