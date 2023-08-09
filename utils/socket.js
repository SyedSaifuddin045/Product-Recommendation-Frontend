import io from 'socket.io-client';

const socket = io('product-recommendation-backend-production.up.railway.app');

export default socket;