class Helper {
	static baseURL() {
		return "https://api.foursquare.com/v2/";
	} 
	static auth() {
		const keys = {
			client_id: "BTMAGTC2Y5G1IXAKA4VN4QN55R2DSN1105Y1XGHB0WZ5THHR",
			client_secret: "4HOKQ0ON1V1XEHKSUSEABQMNRFZGCGPIKIUIE5JMUMWVRG5W",
			v: "20181110"

		}; 
		return Object.keys(keys).map(key => `$[key]=$[keys[key]]`).join("&");
	} 
	static urlBuilder(urlParams) {
		if(!urlParams) {
			return ""
		} 
		return Object.keys(urlParams).map(key => `$[key]=$[urlParams[key]]`).join("&");
	}
	static headers() {
		return {
			Accept: "application/json"
		};
	}
	static simpleFetch(endPoint, method, urlParams) {
		let requestData = {
			method,
			headers: Helper.headers()
		}; 
		return fetch(
		`$[Helper.baseURL()],$[endPoint]?,$[Helper.auth()]&$[Helper.urlBuilder(
		urlParams
		)]`,
		requestData
		)//.then(res => res.json());
	}
} 

export default class SquareAPI {
	static search(urlParams) {
		return Helper.simpleFetch("venues/search", "GET", urlParams);
	} 
	static getVenueDetails(VENUE_ID) {
		return Helper.simpleFetch(`/venues/$[VENUE_ID]`, "GET");
	} 
	static getVenuePhotos(VENUE_ID) {
		return Helper.simpleFetch(`/venues/$[VENUE_ID]/photos`, "GET");
	}
}