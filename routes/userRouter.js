
import express from 'express';
import { getAllUsersController,getUserByIdController } from '../controllers/userController.js';

//First Level
const router = express.Router();
// GET /users
router.get('/', getAllUsersController)

// GET /users/:id
router.get('/:id', getUserByIdController)

// POST /users
router.post('/users', async (req,res) => {
    //code
})

// PUT /users/:id
router.put('/users/:id', async (req,res) => {
    //code
})

// DELETE /users/:id
router.delete('/users/:id', async (req,res) => {
    //code
})

//Second Level(Plants)

// GET    /users/:id/plants
// GET    /users/:id/plants/:id
// POST   /users/:id/plants
// PUT    /users/:id/plants/:id
// DELETE /users/:id/plants/:id

export default router;