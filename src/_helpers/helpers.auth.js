const axios = require('axios').default

export const login = async (email, password) => {
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
    let status = response.data.status
    let id = response.data.aspirant.storeKeeperId
    return [status, id];
  } catch (error) {
    console.log(error);
  }
}
