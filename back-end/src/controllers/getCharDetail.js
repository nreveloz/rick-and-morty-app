const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharDetail ( req, res ) {
    const { detailId } = req.params;

    if( detailId ){
        try {
            const response = await axios.get(URL + detailId);
            const character = {
                id: response.data.id,
                name: response.data.name,
                specie: response.data.species,
                image: response.data.image,
                gender: response.data.gender,
                status: response.data.status,
                origin: response.data.origin?.name,
                location: response.data.location?.name
            };
            return res.status(200).json(character);
        } catch(err) {
            return res.status(500).json(err.message);
        };
    } else {
        return res.status(500).send("Have to send detailId by params");
    };
}

module.exports = {getCharDetail};

// function getCharDetail ( req, res ) {
//     const { detailId } = req.params;
//     axios( URL + detailId )
//         .then( ( {data} ) => {
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 specie: data.species,
//                 image: data.image,
//                 gender: data.gender,
//                 status: data.status,
//                 origin: data.origin?.name,
//                 location: data.location?.name
//             };
//             return res.status(200).json(character);
//         })
//
//         .catch( (err) => {
//             res.status(500).json(err.message);
//         });
// }


// const axios = require("axios");
//
// const getCharDetail = ( res, id ) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then( response => response.data)
//         .then( data => {
//             console.log("response from rick and morty api : ", data)
//             let character = {
//                 id: data.id,
//                 name: data.name,
//                 specie: data.species,
//                 image: data.image,
//                 gender: data.gender,
//                 status: data.status,
//                 origin: data.origin.name,
//                 location: data.location.name
//             }
//             res.writeHead( 200, { "content-type":"application/json"})
//                 .end(JSON.stringify(character))
//         })
//         .catch( err => res.writeHead( 500, { "content-type":"text/plain"})
//             .end(` The character whit id:${id} was not found` )
//         )
// }
//
// module.exports = getCharDetail;