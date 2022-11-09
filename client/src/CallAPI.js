import axios from "axios";

function CallAPI(url, method = "GET", params = null, callback = null) {
	let options = {
		method: method,
		url: url,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
	};

	method == "GET" ? options["params"] = params : options["data"] = params;
	
	return new Promise((resolve, reject) => {
		axios(options)
		.then(response => {
			if (callback != null) {
				callback(response);
			}

			resolve(response);
		})
		.catch(err => {
			reject(err);
		})
	});
}

export default CallAPI;