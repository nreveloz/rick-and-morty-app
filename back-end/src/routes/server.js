const PORT = 3001;
const server = require("../app");
const { conn } = require('../DB_connection');

conn.sync({ alter: true })
server.listen(PORT, () => {
            console.log('Server raised in port ' + PORT)
        })

