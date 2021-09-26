import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1272633",
    key: "baaa43a26f3b8c202ff6",
    secret: "8ece4f849fac6aaa79ea",
    cluster: "eu",
    useTLS: true
  });

  const db = mongoose.connection;

  db.once("open", () =>{
      console.log("DB connected");

      const msgCollection = db.collection("messagecontents");
      const changeStream = msgCollection.watch();

      changeStream.on('change', (change) => {
          console.log(change);

          if(change.operationType === "insert"){
              const messageDetails = change.fullDocument;
              pusher.trigger('messages', 'inserted',
              {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
              })
          } else {
            console.log("Error triggering Pusher");
          }
      })
  } )



const connection_url = 'mongodb+srv://rohit:rohit123@cluster0.ceea0.mongodb.net/wapp?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

  
app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>res.status(200).send('hello world'))


app.get("/messages/sync", (req,res) => {

    Messages.find ((err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(data)
    })
});



app.post("/messages/new", (req,res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(`new message created : \n ${data}`)
    })
});

app.listen(port, () => console.log(`Listening on localhost: ${port}`));















