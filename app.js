import express from 'express';

const app = express();
//First Level

// GET /users
// GET /users/:id
// POST /users
// PUT /users/:id
// DELETE /users/:id

//Second Level(Plants)

// GET    /users/:id/plants
// GET    /users/:id/plants/:id
// POST   /users/:id/plants
// PUT    /users/:id/plants/:id
// DELETE /users/:id/plants/:id

app.get('/', (req,res) => {
    res.send("Hello From Express");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})