
import {MongoClient} from 'mongodb'

export async function connectDatabase(){
    const client = await MongoClient.connect(
        'mongodb+srv://maximilian:L9J.V#t6QN!_iTE@cluster0.mwhfzre.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0',client=>{

        });
        return client;
}

export async function insertDocument(client,document,collection){
    const db=client.db()
    const result = await db.collection(collection).insertOne(document)

    return result;

}
export async function getAllDocuments(client,collection,sort){
    const db =   client.db();

    const documents = await db
    .collecton(collection)
    .find()
    .sort(sort)
    .toArray();

    return documents;

}