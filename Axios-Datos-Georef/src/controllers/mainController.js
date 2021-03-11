const provinciasRequest = require("../requires/provinciasResources");

module.exports = {
    list: (req, res) => {
        provinciasRequest
            .listAll()
            .then((provincias) => {
                return res.send(provincias.data);
            })
            .catch((err) => {
                return res.send(err);
            });
    },
    show: (req, res) => {
        const name = req.query.name
        provinciasRequest
            .showOne(name)
            .then((provincia) => {
                return res.send(provincia.data);
            })
            .catch((err) => {
                return res.send(err);
            });
    }
};
