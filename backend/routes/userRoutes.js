import express from "express"
import { 
    registerUser
} from "../controllers/userControllers.js"

// import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").post(registerUser)

router.post("/login", authUser)


export default router