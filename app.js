import express from 'express';
import userRouter from './routes/userRouter.js';


const app = express();
//First Level

app.use('/users',userRouter)

app.use((error,req,res,next) => {
    console.error(error);
    if(error.message === "notfound"){
        return res.status(404).json({error: "User not found"})
    }else{
        return res.status(500).json({error: "Something went wrong!"})
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})