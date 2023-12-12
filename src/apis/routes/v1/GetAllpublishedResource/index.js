const express = require('express');
const router = express.Router();
const GetAllpublishedResourceController = require('@controllers/v1/GetAllpublishedResource')
router.get('/resources-abc/pub',async(req, res, next) => {
    try {
        const result = await GetAllpublishedResourceController.GetAllpublishedResource(req, res, next);
    } catch (error) {
        next(error);
    }    
});
module.exports = router;
