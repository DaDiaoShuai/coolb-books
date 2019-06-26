const config = require("../config");
const fetch = require("node-fetch");

class SafeRequest {
    constructor(url) {
        this.url = url;
        this.baseUrl = config.baseUrl;
    }

    fetch() {
        let result = {
            code: 0,
            message: "success ok",
            data: []
        };

        return new Promise((resolve, reject) => {
            let nodeFetch = fetch(this.baseUrl + this.url);
            nodeFetch
                .then(res => res.json())
                .then(json => {
                    result.data = json;
                    resolve(result);
                })
                .catch(error => {
                    result.code = 1;
                    result.message = "failed request";
                    reject(result);
                });
        });
    }
}

module.exports = SafeRequest;
