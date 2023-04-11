const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    const { id, name, origin, status, image, species, gender } = req.body;

    try {
      if (!name || !origin || !status || !image || !species || !gender) {
          res.status(401).send("Faltan datos");
      } else {   {
           }
          await Favorite.findOrCreate({
              where : {
                  id
              },
              defaults : {
                  name , origin , status, image, species, gender
              }
          }).then(() => Favorite.findAll().then((result => res.status(200).json(result))))
      }
    }
    catch (err) {
        res.status(500).json( { error : err.message});
    }
}

module.exports = postFav;