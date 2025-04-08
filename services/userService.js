import { readData } from '../helpers.js';

async function getAllUsers(){
    return await readData();
}
async function getUserById(id){
    const results = await readData();
    const user = results.find(user => user.id === id);
    if(!user){
        throw new Error("notfound")
    }
    return user;
}

export{
    getUserById,
    getAllUsers
}