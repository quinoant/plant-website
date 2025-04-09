
import { getAllPlantsByUserId,deleteUser,createNewUser, getAllUsers, getUserById,updateUser,getSpecificPlantByUserId,createNewPlant,updatePlant,deletePlant } from '../services/userService.js';

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

async function getAllPlantsByUserIdController(req,res,next){
    try{
        const results = await getAllPlantsByUserId(req.params.id);
        console.log("getting plants");
        res.status(200).json(results);
    }catch(error){
        next(error)
    }
}

async function getSpecificPlantByUserIdController(req,res,next){
    try{
        const plant = await getSpecificPlantByUserId(req.params.id,req.params.pid);
        res.status(200).json(plant);
    }catch(error){
        next(error);
    }
}

async function createNewPlantController(req,res,next){
    try{
        const plant = await createNewPlant(req.params.id,req.body);
        res.status(201).json(plant);
    }catch(error){
        next(error);
    }
}

async function updatePlantController(req,res,next){
    try{
        const plant = await updatePlant(req.params.id,req.body,req.params.pid);
        res.status(200).json(plant);
    }catch(error){
        next(error);
    }
}

async function deletePlantController(req,res,next){
    try{
        await deletePlant(req.params.id,req.params.pid);
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
    deleteUserController,
    getAllPlantsByUserIdController,
    getSpecificPlantByUserIdController,
    createNewPlantController,
    updatePlantController,
    deletePlantController
}