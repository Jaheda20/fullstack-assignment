const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 8002;
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(express.json())
app.use(cors())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.al6znur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const cardCollection = client.db('helpCenter').collection('helpCards');

    // create a card
    app.post('/cards', async(req, res) => {
        const { title, description } = req.body;
        if(!title || !description) {
            return res.status(400).send({message: 'Title and description are required'})
        }
        try {
            const newCard = {
                title, 
                description, 
                timeStamp: new Date(),
            }
            const result = await cardCollection.insertOne(newCard)
            res.status(201).send({id: result.insertedId, ...newCard})           
        }
        catch (error) {
            res.status(500).send({message: 'Failed to create a card'})
        }
    })

    // get all cards
    app.get('/cards', async(req, res) =>{
        try {
            const result = await cardCollection.find().toArray()
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send({message: 'Failed to retrieve cards'})
        }
    })

    // get a card by title
    app.get('/card/:title', async(req, res) => {
        const { title } = req.params;
        try {
            const result = await cardCollection.findOne({title})
            
            if(!result) {
                return res.status(404).send({message: 'Card not found'})
            }
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send({message: 'Failed to load card'})
        }
    })



    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('Help center is active')
})

app.listen(port, ()=>{
    console.log(`Help center is active on port ${port}`)
})