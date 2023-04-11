const { User } = require('../DB_connection');

const login = async ( req, res ) => {
    const { email, password } = req.query;

    try {
        if(email && password !== ''){
            await User.findOne({
                where: {
                    email:email
                }
            }).then( result => {
                if( !result ){
                    res.status(404).send("Usuario no encontrado");
                } else {
                    if(result.password === password) {
                        res.status(200).json({
                            id: result.id,
                            access:true
                        });
                    } else {
                        res.status(403).send("Contraseña incorrecta");
                    }
                }
                })
        }
        else {
            res.status(400).send("Faltan datos");
        }
    }

    catch (error) {
        res.status(500).json( { error: error.message });
    }
}

module.exports = login;

