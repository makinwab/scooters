import axios from 'axios';

const axiosGetScooters = axios.create({
    baseURL: process.env.REACT_APP_SCOOTER_URL
});

const getScooters = () => {
    return axiosGetScooters.get();
}

export default getScooters;