
import express from 'express';
import { deleteUserController,updateUserController,getAllUsersController,getUserByIdController,createNewUserController } from '../controllers/userController.js';

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

// GET    /users/:id/plants
// GET    /users/:id/plants/:id
// POST   /users/:id/plants
// PUT    /users/:id/plants/:id
// DELETE /users/:id/plants/:id

export default router;