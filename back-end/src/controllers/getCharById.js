const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";


async function getCharById( req, res ) {
    const { id } = req.params;

    try {
        const response = await axios.get(URL + id);
        const character = {
            key: response.data.id,
            id: response.data.id,
            name: response.data.name,
            image: response.data.image,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin.name,
            status: response.data.status
        };
        return res.status(200).json(character);
    } catch(error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {getCharById};

//function getCharById( req, res ) {
//     const { id } = req.params;
//     axios( URL + id )
//         .then( (response) => {
//             const character = {
//             key: response.data.id,
//             id: response.data.id,
//             name: response.data.name,
//             image: response.data.image,
//             gender: response.data.gender,
//             species: response.data.species,
//         };
//             res.status(200).json(character);
//         },
//             (err) => res.status(500).json(err.message)
//     );



// const axios = require("axios");
//
// const getCharById  = ( res, id ) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then( response => response.data)
//         .then( data => {
//             let character = {
//                 key: data.id,
//                 id: data.id,
//                 name: data.name,
//                 image: data.image,
//                 gender: data.gender,
//                 species: data.species
//             }
//             res.writeHead( 200, { "content-type":"application/json"})
//                 .end(JSON.stringify(character))
//         })
//         .catch( err => res.writeHead( 500, { "content-type":"text/plain"})
//             .end(`The character whit id:${id} was not found` )
//         )
//  };
//
// module.exports = getCharById;