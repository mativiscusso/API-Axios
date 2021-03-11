const axios = require("axios");
const defaults = require("../requires/default");

const provinciasRequest = {
    listAll: () => {
        return axios({
            ...defaults,
            method: "GET",
            url: "provincias",
        });
    },
    showOne: (name) => {
        return axios({
            ...defaults,
            method: "GET",
            url: "provincias",
            params: {
                nombre: name
            }
        });
    }
};

module.exports = provinciasRequest