const SearchResourcesService = require('@services/v1/SearchResources');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to search for teachers
const searchResources = async (req, res, next) => {
    try {
        const queryParameters = req.query;
        const results = await SearchResourcesService.searchResources(queryParameters);
        if (results.length === 0) {
            return HttpResponseHandler.success(req, res,results);
        }
        return HttpResponseHandler.success(req, res, results);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    searchResources
};
