const fs = require("fs");
const path = require('path')

const clients = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, "../../../", "clients.json"),
    "utf-8",
));
module.exports = {
    list: (req, res) => {
        const response = {
            meta: {
                status: 200,
                uri: '/api/clients',
                total: clients.length,
            },
            data: clients
        }
        res.json(response);
    },
    detail: (req, res) => {
        const client = clients.find(client => client.id == req.params.id)
        const response = {
            meta: {
                status: 200,
                uri:`/api/clients/${client.id}`,
            },
            data: client
        }
        res.json(response);
    },
    create: (req, res) => {
        console.log(req.body)
        
        
        const response = {
                status: 201,
                message: 'Resource created OK'
        }
        res.json(response);
    }
}