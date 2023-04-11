const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
const postUser = require("../controllers/postUser");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:detailId", getCharDetail);

router.post('/login', postUser);
router.get('/login', login);

router.post('/favs', postFav );
router.delete('/favs/:id', deleteFav );


module.exports = router;