
//import {MongoClient} from 'mongodb';

import {connectDatabase,insertDocument} from '../../../helpers/db-util';

async function handler(req,res) {
    if(req.Method==='POST'){
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({message:'Invalid email address'});
            return;


        }
        let client;

        try{
            client = await connectDatabase();

        }catch(error){
            res.status(500).json({message:'connecting to the database failed'})
            return;
        }
    }
    

    


async function connectDatabase(){
    const client = await MongoClient.connect(
        'mongodb+srv://maxi:L9J.V#t6QN!_iTE@cluster0.mwhfzre.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0',client=>{

        });
        return client;
}

async function insertDocument(client,document){
    const db=client.db()
    await db.collection('newsletter').insertOne(document)

}


    
            
        //console.log(userEmail)
        res.status(201).json({message:'Signed up'})
    }


export default handler;