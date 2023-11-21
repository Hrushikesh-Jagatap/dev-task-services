const express = require('express');

const router = express.Router();

const getAssignByController = require('@controllers/v1/GetAllResource')

router.get('/resource',async(req, res, next) => {
    try {
        const result = await getAssignByController.getAllResources(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
