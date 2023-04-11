const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    const { id } = req.params;
    try {
        await Favorite.destroy({
            where: {
            id : id
            }
        }).then(() =>
            Favorite.findAll().then(
                (result) => res.status(200).json(result)));
    }
    catch (err) {
        res.status(500).json( { error : err.message});
    }
}

module.exports = deleteFav;