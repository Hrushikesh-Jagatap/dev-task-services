
const ResourceService = require('@root/src/apis/services/v1/getResourceBysubject')

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single resource by  Id
const getResourceDetailsById = async (req, res, next) => {
    try {
        const resource = await ResourceService.getResourceDetailsById(req.query.subject);

        if (!resource) {
            return HttpResponseHandler.success(req, res, resource);
        }

        return HttpResponseHandler.success(req, res, resource);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getResourceDetailsById
}  