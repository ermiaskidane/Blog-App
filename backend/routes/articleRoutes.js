import express from "express"  
import {
    getDividedArticle,
     getArticle,
     postArticle,
     readArticle,
     getEditArticle,
     updateArticle,
     deleteArticle
    } from "../controllers/articleController.js"
import { protect } from "../middleware/authMiddleware.js"
  
    // router.route("/").get(getProducts).post(protect, admin, createProduct)
const router = express.Router()

router.get("/divideAll", getDividedArticle)

router.get("/all", getArticle)

// router.post("/", postArticle) 

router.route("/").post(protect, postArticle) 

router.get("/read/:slug", readArticle)

router.get("/edit/:id", getEditArticle)

router.put("/:id", updateArticle)

router.delete("/:id", deleteArticle)

export default router
