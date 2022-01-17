import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";

router.get('/', UserController.getAllDoc)
router.post('/', UserController.createDoc)
router.get('/:id', UserController.getSingleDocById)
router.put('/:id', UserController.updateDocById)
router.delete('/:id', UserController.deleteDocById)

export default router