const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PanelExamSchema = new Schema({
    examName: {
        type: String
    },

    exanCreateFrom: {
        type: String
    },

    chapter: {
        type: String,
    },

    topic: {
        type: String,
        required: true,
    },

    subTopic: {
        type: String,
        default: '', // You may adjust this default value based on your requirements
    },

    subject: {
        type: String,
    },

    targetExam: {
        type: String,
    },

    userId: {
        type: String
    },

    publishStatus: {
        type: String,
        enum: ['NEW', 'REQUESTED', 'APPROVED'],
        default: 'NEW'
    },

    publisehdBy: {
        type: String
    },
    createdBy: {
        type: String
    },
    examDuration: {
        type: String,
        // required: true
    },
    language: {
        type: String,
        // required: true
    },
    numberOfQuestions: {
        type: Number,
        // required: true
    },
    price: {
        type: Number,
        // required: true
    },
    questionType: {
        type: String,
        // required: true
    },
    selectedChapterId: {
        type: String
    },
    selectedExamId: {
        type: String
    },
    selectedSubTopicId: {
        type: String
    },
    selectedSubjectId: {
        type: String
    },
    selectedTopicId: {
        type: String
    },
    totalMarks: {
        type: Number,
       
    },
    deleted: {
        type: Boolean,
        default: false
    },
    markPerQues: {
        type: Number,
    }

},
    { timestamps: true },
);

const PanelExam = mongoose.model('PanelExam', PanelExamSchema);

module.exports = PanelExam;
