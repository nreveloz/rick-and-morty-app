const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe( "Route: GET rickandmorty/onsearch/:id", () => {

    it( "Responde con status: 200", async () => {
        const response = await session(app).get("/rickandmorty/onsearch/1");
        expect(response.statusCode).toBe(200)
    });

    test("Responde un objeto con las propiedades: id, name, species, gender e image", async () => {
        const response = await session(app).get("/rickandmorty/onsearch/1");
        expect(Object.keys(response.body)).toEqual([
            "key",
            "id",
            "name",
            "image",
            "gender",
            "species",
        ]);
    });

    it( "Si hay un error responde con status: 500", () => {
        return agent
            .get("/rickandmorty/onsearch/2000")
            .send()
            .then( response => expect( response.statusCode).toBe(500))
    });
});


describe( "Route: GET rickandmorty/detail/:detailId", () => {

    it( "Responde con status: 200", async () => {
        const response = await session(app).get("/rickandmorty/detail/2");
        expect(response.statusCode).toBe(200)
    });

    test("Responde un objeto con las propiedades: id, name, specie, image, gender, status, origin, location", async () => {
        const response = await session(app).get("/rickandmorty/detail/2");
        expect(Object.keys(response.body)).toEqual([
            "id",
            "name",
            "specie",
            "image",
            "gender",
            "status",
            "origin",
            "location",
        ]);
    });

    it( "Si hay un error responde con status: 500", () => {
        return agent
            .get("/rickandmorty/detail/5000")
            .send()
            .then( response => expect(response.statusCode).toBe(500))
    });
});





