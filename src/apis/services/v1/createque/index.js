const Que = require('@models/que');
const axios = require('axios');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');

const getStudent = async (sid_userId) => {
  try {
    const config = {
      method: 'get',
      url: `${loadBalancer}/sts/apis/v1/user/${sid_userId}`,
      headers: {
        app_name: 'studentApp',
        app_version_code: '101',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SYSTEM_TOKEN}`,
      },
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error('Error fetching student data:', error.message);
    return null;
  }
};

const getTeacher = async (args) => {
  try {
    const { className, subject, studentid } = args;
    
    const url = `${loadBalancer}/tms/apis/v1/searchforinstance?className=${className}&subject=${subject}&studentid=${studentid}`;

    const config = {
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SYSTEM_TOKEN}`,
      },
    };

    const result = await axios(config);

    return result?.data || null;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch teacher information');
  }
};

const createQue = async (queData) => {
  try {
    const { class: className, sub: subject, lang, studnetid: studentid } = queData;
    const teacherArgs = { className, subject, studentid };
    
    const teacherInfo = await getTeacher(teacherArgs);

    if (teacherInfo.data === "No teachers found") {
      return "no active teacher";
    }

    const userIds = teacherInfo.data.map(obj => obj.userId);

    if (!userIds || userIds.length === 0) {
      const createdQue = await Que.create(queData);
      return "no active teacher";
    }

    const n = userIds.length;
    const req_teacherid = userIds.map(teacherid => ({ teacherid, status: 'requested', flag: true }));

    // Add name and profileimage to each req_teacherid element
    for (let i = 0; i < n; i++) {
      const teacherId = userIds[i];
      const abc = await getStudent(studentid);
      const name = abc.data[0].personalDetails?.first_name;
      const profileimage = abc.data[0].personalDetails?.profileImage;
queData.name=name;
queData.profileimage=profileimage;
      // const matchingReqTeacherId = req_teacherid.find(reqTeacherId => reqTeacherId.teacherid === teacherId);
      // if (matchingReqTeacherId) {
      //   matchingReqTeacherId.name = name;
      //   matchingReqTeacherId.profileimage = profileimage;
      // }
    }

    queData.req_teacherid = req_teacherid;

    const createdQue = await Que.create(queData);

    return createdQue;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create exam question');
  }
};

module.exports = {
  createQue,
};
