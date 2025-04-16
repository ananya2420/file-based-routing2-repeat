import { comment } from "postcss";
import {MongoClient} from 'mongodb';
import {connectDatabase,insertDocument,getAllDocuments} from '../../../../helpers/db-util'


async function handler(req,res){
    const eventId=req.query.eventId;

    let client;

    
    try{
        const client = connectDatabase();

    }catch(error){
        res.status(500).json({message:'connecting to the database failed!'});
        return;
    }

    
    if(req.method==='POST'){
        const {email,name,text}=req.body;

        if(!email.includes('@') || name || name.trim()==='' || text.trim()===''){
            res.status(422).json({message:'Invalid Input'});
            client.close();
            return;
        }
        
        const newComment={
         
            email,
            name,
            text,
            eventId
        };
        let result;

        try{
            const result = await insertDocument(client,'comment',newComment);
            newComment._id=result.insertedId;
        res.status(201).json({message:"Added comment", comment: newComment})

        }catch(error){
            res.status(500).json({message:'Inserting comment failed'})

        }

        //const db = client.db();
        //const result=await db.collecton('comments').insertOne(newComment)
        //console.log(result);

     

        

    }
    if(req.method==='GET'){
        try{
            const documents = await getAllDocuments(client,'comments',{_id:-1})
            res.status(200).json({comment:documents});

        }catch(error){
            res.status(500).json({message:'Getting comment failed.'})
           
        }

       
              

       /* const dummyList=[
            {id:'c1',name:'Max', text:"A first comment"},
            {id:'c2',name:'Manuel',  text:"A second comment"}
        ]
            */

    }
  

}

export default handler;