
const { loadBalancer,ms } = require('@config');
const { RequestHandler } = require('intelli-utility');

const notifyStudentsForResourceUpdation = async (studentIds) => {
    try {

        for (const student of studentIds.data) {
            const notificationData = {
                userId: student,
                appName: 'studentApp',
                data: {
                    message: `New Resource has been Added`
                },
                body: 'New Resource has been Added',
                title: 'New Resource has been Added'
            };
            // Call the pushNotification function to send the notification
            await pushNotification(notificationData);
        }
        console.log('Notifications sent to all students');
    } catch (error) {
        throw new Error('Failed to send notifications to students');
    }
};


const pushNotification = async (data) => {
    try {
        const url = `${ms}/ums/apis/v1/notification/push`;
        const { data: response } = await RequestHandler.post({ url, data });
        return response
    } catch (error) {
        throw new Error;
    }
};


module.exports = {
    notifyStudentsForResourceUpdation,
    pushNotification
};
