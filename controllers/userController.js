
import { deleteUser,createNewUser, getAllUsers, getUserById,updateUser } from '../services/userService.js';

async function getAllUsersController(req,res,next){
    try{
        const results = await getAllUsers();
        res.status(200).json(results);
    }catch(error){
        next(error);
    }
}

async function getUserByIdController(req,res,next){
    try{
        const user = await getUserById(req.params.id);
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
}

async function createNewUserController(req,res,next){
    try{
        const user = createNewUser(req.body);
        res.status(201).json(user);
    }catch(error){
        next(error);
    }
}

async function updateUserController(req,res,next){
    try{
        const updatedUser = await updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    }catch(error){
        next(error)
    }
}

async function deleteUserController(req,res,next){
    try{
        await deleteUser(req.params.id);
        res.status(204).end();
    }catch(error){
        next(error)
    }
}

export{
    getAllUsersController,
    getUserByIdController,
    createNewUserController,
    updateUserController,
    deleteUserController
}