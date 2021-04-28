import asyncHandler from "express-async-handler"
import Article from "../models/article.js"
  
 
// @desc get all articles
// @route get /api/articles/divideAll
// @access Public
const getDividedArticle = asyncHandler(async(req, res) => {
    const pageSize = 6
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: "i"
        }
    } : {}

    const count = await Article.countDocuments({...keyword})
    const fetchedBlog = await Article.find({...keyword}).limit(pageSize).skip(pageSize * (page - 1)).sort({ createdAt: "desc"})

    res.json({ fetchedBlog, page, pages: Math.ceil(count/pageSize)})

})

// @desc get only user articles
// @route get /api/articles/userBlogs
// @access Private
const userArticles = asyncHandler(async(req, res) => {
    const pageSize = 6
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: "i"
        }
    } : {}
    
    const count = await Article.countDocuments({...keyword})
    const fetchedBlog = await Article.find({...keyword}).limit(pageSize).skip(pageSize * (page - 1)).sort({ createdAt: "desc"})

    let userArts = fetchedBlog.filter(function(e) {
        return e.user == req.query.userArts
    } )

    res.json({ userArts, page, pages: Math.ceil(count/pageSize)})

})

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

const getEditArticle = asyncHandler(async(req, res) => {
    const article = await Article.findById(req.params.id)

    if(article){
        res.status(200).json(article)
    } else {
        res.status(404)
        throw new Error("editing article couldn't found")
    }
})

const readArticle = asyncHandler(async(req, res) => {
    const article = await Article.findOne({slug:req.params.slug})
    if(article){
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
        author,
        title,
        image,
        description,
        markdown,
        } = req.body  
    
        const article = await Article.create({
            user: req.user._id,
            author,
            title,
            image,
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

// @desc update specific articles
// @route put /api/articles/:id
// @access Private
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

const updateTestArticle = asyncHandler(async(req, res) => {
    const { rating, comment } = req.body

    const article = await Article.findById(req.params.id)
    
    if(article){
        const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString())

        if(alreadyReviewed){
            res.status(404)
            throw new Error("Article already reviewed")
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }

        article.reviews.push(review)
        article.numReviews = article.reviews.length
        await article.save()
    
    res.status(201).json({message: "Review added"})
    } else {
        res.status(404)
        throw new Error("Article not found")
    }
}) 

// @desc remove specific articles
// @route delete /api/articles/:id
// @access Private
const deleteArticle = asyncHandler(async(req, res) => {
    const article = await Article.findById(req.params.id)
    // if(article && article.user == req.query.userArts)
    if(article) {
        await article.remove()
        res.json({message: "article has been removed"})
    } else {
        res.status(404)
        throw new Error("Article not Found")
    }
}) 

export {getDividedArticle, userArticles, getArticle, getEditArticle, postArticle, readArticle, updateArticle, deleteArticle, updateTestArticle }
