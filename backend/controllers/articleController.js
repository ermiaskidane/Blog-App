import asyncHandler from "express-async-handler"
import Article from "../models/article.js"


// @desc get all articles
// @route get /api/articles/all
// @access Public
const getArticle = asyncHandler(async(req, res) => {
    const fetchedBlog = await Article.find().sort({ createdAt: "desc"})

if(fetchedBlog){
    res.json(fetchedBlog)
} else {
    res.status(404)
    throw new Error("blog not found")
}
})

const readArticle = asyncHandler(async(req, res) => {
    const article = await Article.findOne({slug:req.params.slug})
    if(article){
        // console.log(article)
        res.json(article)
    } else {
        res.status(404)
        throw new Error("We couldnt found the article")
    }
})

// @desc post articles
// @route post /api/articles
// @access Public
const postArticle = asyncHandler(async(req, res) => {
    const {
        title,
        description,
        markdown,
        } = req.body 
    
        const article = await Article.create({
            title,
            description,
            markdown
        })

        if(article) {
            res.status(201).json(article)
        } else {
            res.status(400)
            throw new Error("failed to create Article")
        }
})

const updateArticle = asyncHandler(async(req, res) => {
    const article = await Article.findById(req.params.id)

    if(article){
        article.title = req.body.title,
        article.description = req.body.description,
        article.markdown = req.body.markdown

    const updateArticle = await article.save()
    res.json(updateArticle)
    } else {
        res.status(404)
        throw new Error("Article not found")
    }
})

const deleteArticle = asyncHandler(async(req, res) => {
    const article = await Article.findById(req.params.id)

    if(article) {
        await article.remove()
        res.json({message: "article have been reomved"})
    } else {
        res.status(404)
        throw new Error("Article not Found")
    }
})

export {getArticle, postArticle, readArticle, updateArticle, deleteArticle }