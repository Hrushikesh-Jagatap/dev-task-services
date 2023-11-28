const axios = require('axios');
const { loadBalancer } = require('@config');

const getStudentsBySubjectAndClass = async (className, subject) => {
  try {
    const url = `${loadBalancer}/sts/apis/v1/getsubjectorclass`;
    const data = { class: className, subject: subject };
    const response = await axios.get(url, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch students from student service');
  }
};



module.exports = {
  getStudentsBySubjectAndClass
};
