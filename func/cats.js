// /.netlify/functions/cats

const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const catPicture = await axios.get(process.env.CAT_API);
    return {
      body: JSON.stringify(catPicture.data[0]),
      statusCode: 200,
    }
  } catch (error) {
    return {
      err: error,
      statusCode: 500,
    }
  }
}