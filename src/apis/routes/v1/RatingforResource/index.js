
const express = require('express');
const router = express.Router();
const updateResourceforratingController = require('@controllers/v1/RatingforResource')
router.put('/resource/rating/:id', async(req, res, next) => {
    try {
        const result = await updateResourceforratingController.updateResourceById(req, res, next);
    } catch (error) {
        next(error);
    } 
});
module.exports = router;
