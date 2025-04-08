import express from 'express';

const app = express();
//First Level

// GET /users
app.get('/users', async (req,res) => {
    //code
})
// GET /users/:id
app.get('/users/:id', async (req,res) => {
    //code
})
// POST /users
app.post('/users', async (req,res) => {
    //code
})
// PUT /users/:id
app.put('/users/:id', async (req,res) => {
    //code
})
// DELETE /users/:id
app.delete('/users/:id', async (req,res) => {
    //code
})

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