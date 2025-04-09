
import express from 'express';
import { getAllPlantsByUserIdController,deleteUserController,updateUserController,getAllUsersController,getUserByIdController,createNewUserController } from '../controllers/userController.js';

//First Level
const router = express.Router();
// GET /users
router.get('/', getAllUsersController)

// GET /users/:id
router.get('/:id', getUserByIdController)

// POST /users
router.post('/', createNewUserController)

// PUT /users/:id
router.put('/:id', updateUserController)

// DELETE /users/:id
router.delete('/:id', deleteUserController)

//Second Level(Plants)
// GET all plants
router.get('/:id/plants', getAllPlantsByUserIdController)

// GET plants by ID
router.get('/:id/plants/:pid', getUserByIdController)

// POST a plant
router.post('/:id/plants', createNewUserController)

// PUT(Update) a plant
router.put('/:id/plants/:pid', updateUserController)

// DELETE a plant
router.delete('/:id/plants/:pid', deleteUserController)

export default router;