//for All Tasks
import { MongoClient } from 'mongodb';

async function Handler(req, res) {
    const taskTime = req.body.time
    const productivity = req.body.productivity
    
    //añade validación
    if (
      !taskTime ||
      taskTime.trim() === '' ||
      !productivity ||
      productivity.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    //cálculo de productividad

    //javascript object
    const newTask = {
      taskTime,
      productivity,
    };
    console.log(newTask);//chi

    if (req.method === 'POST') {
        
        //storing in a database: Mongodb
        const client = await MongoClient.connect(
            'mongodb+srv://crud:crud123@web.gq8l24z.mongodb.net/?retryWrites=true&w=majority'
        );
        const db = client.db('core');//getting access to the database
        //access to a collection(table) and queries as 'isertOne'
        await db.collection('tasks').insertOne(newTask);
        client.close();
        res.status(201).json({ message: 'succesfully POST request in tasks' });
    }

}

export default Handler;