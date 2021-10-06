import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID u-3zvT8tmcvC2RcJySKD39SmfiYpVF1FeiAD5eb-AQs',
  },
});
