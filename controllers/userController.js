
import { getAllUsers, getUserById } from '../services/userService.js';

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

export{
    getAllUsersController,
    getUserByIdController
}