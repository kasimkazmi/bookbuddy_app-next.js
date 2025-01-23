import { auth } from '@/src/firebase';
import axios from 'axios';

const auth_client = axios.create();

auth_client.interceptors.request.use(async (config) => {
    const user = auth.currentUser;
    if (!user) return Promise.reject({ states: 'no user' });
    try {
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    } catch (err) {
        return Promise.reject(err);
    }
});

// TODO: for ayoub -> handle the auth flow
// auth_client.interceptors.response.use(async (config) => {});

export { auth_client };
export default auth_client;
