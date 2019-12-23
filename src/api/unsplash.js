import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 9bca8fff11d7ead9e54ce52e6f9a6d1f24074d13cbe9cf8e27bfabb5774facc7'
	}
}); 