const { User } = require('../DB_connection');

const postUser = async ( req, res ) => {
    const { email, password } = req.body;
    try {
        if(email && password !== ''){
            await User.create( { email, password })
                .then( result => res.status(200).json( result ))
        }
        else {
            res.status(400).send("Faltan datos");
        }
    }

    catch (error) {
        res.status(500).json( { error: error.message });
    }
}

module.exports = postUser;

