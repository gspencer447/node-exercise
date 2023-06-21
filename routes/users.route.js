import express from "express";
import db from "../mockdb/index.js";

const router = express.Router();

router.get("/:id?", (req, res)=>{
    async (req, res, next) => {
        try {
           const { id } = req.params;
           let data;

           if (id) {
            data = await db.getOne(id)
           }
           else {
            data = await db.getAll()
           }

           res.json(data);
        } catch (error) {
           next(error);
        }
     }
})

router.post("/", (req, res)=>{
    async (req, res, next) => {
        try {
           const newUser = req.body;
           let data = await db.add(newUser);

           req.json(data);
        } catch (error) {
           next(error);
        }
     }
})

router.put("/:id", (req, res)=>{
    async (req, res, next) => {
        try {
           const { id } = req.params;
           const updatedUser = req.body;
           let data = await db.update(id, updatedUser)

           res.json(data);
        } catch (error) {
           next(error);
        }
     }
})

router.delete("/:id", (req, res)=>{
    async (req, res, next) => {
        try {
           const { id } = req.params;
           let data = await db.remove(id)

           res.json(data)
        } catch (error) {
           next(error);
        }
     }
})

export default router;