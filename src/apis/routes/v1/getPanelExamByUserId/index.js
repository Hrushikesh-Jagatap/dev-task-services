const express = require('express');

const router = express.Router();

const getPanelExamDetailsByUserIdController = require('@root/src/apis/controllers/v1/getPanelExamByUserId')

router.get('/panel-exam',async(req, res, next) => {
    try {
        const result = await getPanelExamDetailsByUserIdController.getPanelExamDetailsId(req, res, next);
    
    } catch (error) {
       next(error);
    }    
});

module.exports = router;
