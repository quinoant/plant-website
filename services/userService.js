import { readData, generateUniqueId, writeData } from '../helpers.js';

async function getAllUsers(){
    return await readData();
}
async function getUserById(id){
    const results = await readData();
    const user = results.find(user => user.id === id);
    if(!user){
        throw new Error('notfound')
    }
    return user;
}

async function createNewUser(user){
    const users = await readData();
    const newId = await generateUniqueId();
    const newUser = {id: newId, ...user};
    users.push(newUser);
    await writeData(users);
    return newUser;
}

async function updateUser(id, newUserData){
    let users = await readData();
    const index = users.findIndex(user => user.id === id);

    if(index !== -1){
        users[index] = { id: users[index].id, ...newUserData};
        await writeData(users);
        return users[index];
    }else{
        throw new Error('notfound')
    }
}

async function deleteUser(id){
    let users = await readData();
    const originalLength = users.length;
    users = users.filter(user => user.id !== id);

    if(users.length === originalLength){
        throw new Error('notfound');
    }
    await writeData(users);
}

async function getAllPlantsByUserId(id){
    const user = await getUserById(id);
    return user.plants;
}
// id is user id 
// pid is plant id
async function getSpecificPlantByUserId(id,pid){
    const user = await getUserById(id);
    const plant = user.plants.find(plant => plant.id === pid);
    if(!plant){
        throw new Error('notfound')
    }
    return plant;
}
// plant is json plant to be created
// id is the id of the user that owns the plant
async function createNewPlant(uid, plant){
    const user = await getUserById(uid);
    const newPid = await generateUniqueId();
    const newPlant = {id: newPid, ...plant};
    user.plants.push(newPlant);
    await updateUser(uid, user);
    return user;
}

async function updatePlant(uid, newPlantData,pid){
    let user = await getUserById(uid);
    const index = user.plants.findIndex(plant => plant.id === pid);

    if(index !== -1){
        user.plants[index] = { id: user.plants[index].id, ...newPlantData};
        await updateUser(uid,user);
        return user.plants[index];
    }else{
        throw new Error('notfound')
    }
}

async function deletePlant(uid,pid){
    let user = await getUserById(uid);
    const originalLength = user.plants.length;
    user.plants = user.plants.filter(plant => plant.id !== pid);

    if(user.plants.length === originalLength){
        throw new Error('notfound');
    }
    await updateUser(uid,user);
}

export{
    getUserById,
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    getAllPlantsByUserId,
    getSpecificPlantByUserId,
    createNewPlant,
    updatePlant,
    deletePlant
}