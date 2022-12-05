var { Router } = require("express");
var router = Router();

const {
  createFavorite,
  favoritesbyId_user,
  deleteFavorite,
  getAllFavorites,
} = require("../controllers/controller_favorites");

//Add Favorites
router.post("/favorites/createFavorite", createFavorite);

//Add Favorites
router.get("/favorites/getAllFavorites", getAllFavorites);
router.get("/favorites/:id_User", favoritesbyId_user);
router.delete("/favorite/delete/:id_Favorite", deleteFavorite);

module.exports = router;
