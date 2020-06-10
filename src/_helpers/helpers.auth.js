const axios = require('axios').default

const login = async (email, password) => {
  const data = {
    'email': email,
    'password': password,
  }
  const options = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await axios.post('http://localhost:3001/api/v1/aspirants', data, options);
    return response.data.status;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { login }