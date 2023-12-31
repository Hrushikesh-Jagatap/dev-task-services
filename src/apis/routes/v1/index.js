const express = require('express');

const router = express.Router();

const getAssignById = require('./getAssignById');

const CreateAssignment = require('./CreateAssignment');

const UpdateAssignById = require('./UpdateAssignById');

// const NotificationRoute = require('./Notification')

const publishAssignById = require('./publishAssignById');

const CreateExam = require('./CreateExam');

const UpdateExamById = require('./UpdateExamById');

const getAssignByBatchId = require('./getAssignByBatchId');

const getExamDetaialsById = require('./getExamDetaialsById');

const getExamDetaialsByBatchId = require('./getExamDetaialsByBatchId');

const publishExamById = require('./publishExamById');

const deleteExamById = require('./deleteExamById');

const deleteAssignById = require('./deleteAssignById');

const createResource = require('./createResource');

const updateResourceById = require('./updateResourceById');

const getResourceById = require('./getResourceById');

const publishedResourceById = require('./publishedResourceById');

const getAllResourcesByUserId = require('./getAllResourcesByUserId');

const getquebystudentid = require('./getquebystudentid');

const getquebyteacherid = require('./getquebyteacherid');

const createque = require('./createque');

const getque = require('./getque');

const updateque = require('./updateque');

const updatestatus = require('./updatestatus');

const CreateExamSeries = require('./CreateExamSeries');

const GetAllResource = require('./GetAllResource');
const getResourceBysubject = require('./getResourceBysubject');
const RatingforResource = require('./RatingforResource');
const SearchResources = require('./SearchResources');

const PanelExam = require('./PanelExam');

const addques = require('./addques');

const getExamQuesDetails = require('./getExamQuesDetails');

const getAllExamDetailsByUserId = require('./getAllExamDetailsByUserId');

const deleteQuesById = require('./deleteQuesById');

const editQuesById = require('./editQuesById');

const getExamDetailsByStatus = require('./getExamDetailsByStatus');

const getPanelExamByUserId = require('./getPanelExamByUserId');
const GetAllpublishedResource = require('./GetAllpublishedResource');

router.use('/', getPanelExamByUserId);

router.use('/', getExamDetailsByStatus);

router.use('/', editQuesById);

router.use('/', deleteQuesById);

router.use('/', getAllExamDetailsByUserId);

router.use('/', getExamQuesDetails);

router.use('/', addques);


router.use('/', PanelExam);


router.use('/', updatestatus)
// route to get All Resources By userId.
router.use('/', getAllResourcesByUserId);

//router to published by userId
router.use('/', publishedResourceById);

//Route to get Resource By Id
router.use('/', getResourceById);
router.use('/', getResourceBysubject);

//Route to update Resource By Id
router.use('/', updateResourceById)

//Route to create Resource
router.use('/', createResource);

//Route to get delete Assigned by Id
router.use('/', deleteAssignById);

//Route to get delete Exam by Id
router.use('/', deleteExamById);

// Route to  publishAssignedById
router.use('/', publishAssignById);

// Route to  publishExamByID
router.use('/', publishExamById);

// Route to create a new Assignment
router.use('/', CreateAssignment);

// Route to get a single teacher by ID
router.use('/', getAssignById);

// Route to update a  Assignment by  teacher ID
router.use('/', UpdateAssignById);

// Route to CreateExam
router.use('/', CreateExam);

// route to update Exam by Id
router.use('/', UpdateExamById);

// router to get Exam Details by Id;
router.use('/', getExamDetaialsById);

// route to get Assignment by BatchId
router.use('/', getAssignByBatchId)

// route to get Exam Details By Btachid
router.use('/', getExamDetaialsByBatchId);

router.use('/', createque);

router.use('/', getque);

router.use('/', getquebystudentid);

router.use('/', getquebyteacherid);

router.use('/', updateque);

router.use('/', CreateExamSeries);
router.use('/', GetAllResource);

router.use('/', RatingforResource);
router.use('/', SearchResources);
router.use('/', GetAllpublishedResource);

module.exports = router;
