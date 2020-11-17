import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer j9hriQ6RWfoeERSm87cHKmPsQBMix32Ttv5L3cZj4jPJ3G_urWbra6rHwl8EOcuUzblU6uYARsvL0mZKXqfeUPM1wN2UjW0Cdq9QCbAqeO91uhLq_UxDP6RBa6qzX3Yx",
	},
});
