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
        await writeData[users];
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

export{
    getUserById,
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}