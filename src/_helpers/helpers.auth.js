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
    const response = await axios.post('https://userslending-backend.glitch.me/api/v1/aspirants', data, options);
    //return [response.data.status, ];
    console.log(response.data)
  } catch (error) {
    console.log(error);
  }
}

module.exports = { login }