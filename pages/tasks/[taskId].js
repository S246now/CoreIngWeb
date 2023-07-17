//obtiene la data de cada tarea, me ayuda para obtener el Id
import { MongoClient } from "mongodb";

async function TaskPage(req, res) {
  const taskId = req.body.taskId;
  const client = await MongoClient.connect('mongodb+srv://crud:crud123@web.gq8l24z.mongodb.net/?retryWrites=true&w=majority');
    

  if (req.method === 'POST') {
    const { time, productivity } = req.body;

    //añade validación
    if (
      !time ||
      time.trim() === '' ||
      !productivity ||
      productivity.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    //javascript object
    const task = {
      time,
      productivity,
    };
    //getting access to the database
    const db = client.db('core');
    //access to a collection(table) and insertOne
    const newTask = await db.collection('tasks').insertOne(task);
      
    //comprueba
    console.log(newTask);
    res.status(201).json({ message: 'Task added succesfully.', task: newTask });
  }

  if (req.method === 'GET') {
    //getting access to the database
    const db = client.db('core');
    const response = await db.collection('tasks').find().toArray();
    //comprueba
    console.log(response);
    res.status(201).json({ message: 'Extracted task', task: response });
  }

  client.close();
  

  return (
    <div>
      <h1>Datos de una Tarea específica</h1>
    </div>
  );
}

export default TaskPage;
