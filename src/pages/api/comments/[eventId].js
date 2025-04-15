import { comment } from "postcss";
import {MongoClient} from 'mongodb';

async function handler(req,res){
    const eventId=req.query.eventId;

    const client = MongoClient.connect('mongodb+srv://greatstack:L9J.V#t6QN!_iTE@cluster0.mwhfzre.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0');

    if(req.method==='POST'){
        const {email,name,text}=req.body;

        if(!email.includes('@') || name || name.trim()==='' || text.trim()===''){
            res.status(422).json({message:'Invalid Input'});
            return;
        }
        
        const newComment={
         
            email,
            name,
            text,
            eventId
        }

        const db = client.db();
        const result=await db.collecton('comments').insertOne(newComment)
        console.log(result);

        newComment.id=result.insertedId;
        res.status(201).json({message:"Added comment", comment: newComment})

    }
    if(req.method==='GET'){
        const dummyList=[
            {id:'c1',name:'Max', text:"A first comment"},
            {id:'c2',name:'Manuel',  text:"A second comment"}
        ]

    }
    res.status(200).json({comment:dummyList});

}
client.close();
export default handler;