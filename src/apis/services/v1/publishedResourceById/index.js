const ResourceData = require('@models/Resources');
const { default: mongoose } = require('mongoose');
const { getStudentsBySubjectAndClass } = require('@services/v1/getStudentsBySubjectAndClass');
const { notifyStudentsForResourceUpdation, pushNotification } = require('@services/v1/Notification')

// Service function to publish a Resource by ID
const publishResourceById = async (resourceId, publishStatus) => {
  try {

    let resource = await ResourceData.findById(mongoose.Types.ObjectId(resourceId));

    // if (publishStatus == 'true') {
    //   //send notification to teacher_> userId
    //   const NotificationData = {
    //     userId: resource.userId,
    //     appName: 'teacherApp',
    //     data: {
    //       message: 'Your Resource has been Added',
    //     },
    //     body: 'Your Resource has been Added',
    //     title: 'Your Resource has been Added'
    //   };

    //   const teacher = await pushNotification(NotificationData) // send  Notification to teacher 

    //   // // class and subject // need all student Ids to send Notification
    //   const students = await getStudentsBySubjectAndClass(resource.class, resource.subject);
    //   // // send notification to all student
    //   notifyStudentsForResourceUpdation(students);
    // }
    // else {

    //   const NotificationData = {
    //     userId: resource.userId,
    //     appName: 'teacherApp',
    //     data: {
    //       message: 'Your Resource has been not Added',
    //     },
    //     body: 'Your Resource has been not Added',
    //     title: 'Your Resource has been not Added'
    //   };

      // const teacher = await pushNotification(NotificationData) // send  Notification to teacher 
    // }
    resource.publishStatus = publishStatus;
    await resource.save();
    return resource;
  } catch (error) {
    throw new Error('Failed to publish  Resource');
  }
};

module.exports = {
  publishResourceById
}  
