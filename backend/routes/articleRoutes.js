import express from "express"  
import {
     getArticle,
     postArticle,
     readArticle,
     getEditArticle,
     updateArticle,
     deleteArticle
    } from "../controllers/articleController.js"
  
const router = express.Router()

router.get("/all", getArticle)

router.post("/", postArticle)

router.get("/read/:slug", readArticle)

router.get("/edit/:id", getEditArticle)

router.put("/:id", updateArticle)

router.delete("/:id", deleteArticle)

export default router
