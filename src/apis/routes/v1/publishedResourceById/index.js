const express = require('express');

const router = express.Router();

const publishResourceByIdController = require('@root/src/apis/controllers/v1/publishedResourceById')

router.put('/resource',async(req, res, next) => {
    try {
        const result = await publishResourceByIdController.publishResourceById(req, res, next);
      
    } catch (error) {
       next(error);
    }    
});

module.exports = router;
