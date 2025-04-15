
import {MongoClient} from 'mongodb';

async function handler(req,res){
    if(req.method==='POST'){
        const userEmail=req.body.email;

        if(!userEmail || userEmail.includes('@')){
            res.status(422).json({message:"invalid email address."})
            return;
        }
       const client = await MongoClient.connect(
            'mongodb+srv://greatstack:L9J.V#t6QN!_iTE@cluster0.mwhfzre.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0',client=>{

            })
                const db=client.db()
                await db.collection('newsletter').insertOne({email:userEmail})

                client.close();
            
        //console.log(userEmail)
        res.status(201).json({message:'Signed up'})
    }

}
export default handler;