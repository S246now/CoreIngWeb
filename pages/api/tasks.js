//for All Tasks
import { MongoClient, ObjectId } from 'mongodb';

async function Handler(req, res) {
  const taskTime = req.body.time
  const productivity = req.body.productivity
  //connection
  const client = await MongoClient.connect(
    'mongodb+srv://crud:crud123@web.gq8l24z.mongodb.net/?retryWrites=true&w=majority'
  );


  //GET request
  if (req.method === 'GET') {
    const db = client.db('core');

    const collection = db.collection('tasks');
    const data = await collection.find().toArray();
    //res.status(200).json({ sales: data });

    //Obtein TypeTask for each Task
    const showInfoTasks = await Promise.all(
      data.map(async (task) => {
        const typeTaskCollection = db.collection('typeTask');
        const type = await typeTaskCollection.findOne({ _id: new ObjectId(task.typeTaskId) });
        const infoTasks = { ...task, taskName: type ? type.name : 'Tarea NO encontrada' };
        return infoTasks;
      })
    );

    res.status(200).json({ tasks: showInfoTasks });
  }

  //POST request
  if (req.method === 'POST') {
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
    //console.log(newTask);

    //storing in a database: Mongodb
    const db = client.db('core');//getting access to the database
    //access to a collection(table) and queries as 'isertOne'
    await db.collection('tasks').insertOne(newTask);
    client.close();
    res.status(201).json({ message: 'succesfully POST request in tasks' });
  }


  client.close();

}

export default Handler;