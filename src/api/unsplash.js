import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization:
        'Client-ID 12d6d05dfb5e48b56961a3797f3ae1b07a46bbe919165817c5e2c0fc30936670 '
    }
});