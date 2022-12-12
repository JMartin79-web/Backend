import { Router } from "express";

const users = []
const router = Router()

router.get("/", (req, res)=>{
    res.json(users)
})

router.post("/", (req, res)=>{
    pets.push(req.body)
    res.status(201).json(users)
})

export default usersRouter