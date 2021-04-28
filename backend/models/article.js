import mongoose from "mongoose"
import marked from "marked"
import slugify from "slugify"
import createDomPurify from "dompurify"
import { JSDOM } from "jsdom"

const dompurify = createDomPurify(new JSDOM().window)

// const reviewSchema = mongoose.Schema(
//     {
//         name: { type: String, required: true},
//         rating: { type: Number, required: true},
//         comment: { type: String, },
//         user: {
//             type: mongoose.Schema.Types.ObjectId,
//             required: true,
//             ref: "User",
//         },
//     },
//     {
//         timestamps: true,
//     }
// )

const articleSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        author: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }, 
        image: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        markdown: {
            type: String,
            required: true
        },
        // reviews: [reviewSchema],
        // rating: {
        //     type: Number,
        //     required: true,
        //     default: 0,
        // },
        // numReviews: {
        //     type: Number,
        //     required: true,
        //     default: 0,
        // },
        createdAt: {
            type: Date,
            default: Date.now
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        sanitizedHTML: {
            type: String,
            required: true
        }
    },
    {
       timestamps: true,
   }
)

articleSchema.pre("validate", function(next) {
    if(this.title){
        this.slug = slugify(this.title, { lower: true, strict: true})
    }

    if(this.markdown){
        this.sanitizedHTML = dompurify.sanitize(marked(this.markdown))
    }

    next()
})

const Article = mongoose.model("Article", articleSchema)

export default Article
