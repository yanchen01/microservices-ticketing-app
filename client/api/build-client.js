import axios from 'axios';

export default ({ req }) => {
	if (typeof window === 'undefined') {
		// request made from the server
		return axios.create({
			baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
			headers: req.headers
		});
	} else {
		// from browser
		return axios.create({
			baseURL: '/'
		});
	}
};
