import express from "express"  
import {
    updateTestArticle,
    getDividedArticle,
    userArticles, 
     getArticle,
     postArticle,
     readArticle,
     getEditArticle,
     updateArticle,
     deleteArticle,
     updateTestArticle
    } from "../controllers/articleController.js"
import { protect } from "../middleware/authMiddleware.js"
  
    // router.route("/").get(getProducts).post(protect, admin, createProduct)
const router = express.Router()

router.get("/divideAll", getDividedArticle)

router.get("/userBlogs", userArticles)

router.get("/all", getArticle)

// router.post("/", postArticle) 

router.route("/").post(protect, postArticle)  

router.get("/read/:slug", readArticle)

router.get("/edit/:id", getEditArticle)

router.route("/test/:id").post(protect, updateTestArticle)

// router.put("/test/:id", updateTestArticle)

router.put("/:id", updateArticle)

router.put("/test/:id", updateTestArticle)

// router.delete("/:id", deleteArticle)

router.route("/:id").delete(protect, deleteArticle)

export default router 
