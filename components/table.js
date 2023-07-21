//Decorator Design Pattern
import { useState } from "react";
import classes from "./tasks/tableTask.module.css";

//Componente
class Component {

    constructor(url) {
        this.url = url;
    }
    //fetch de datos
    async getData() {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}

//Decorador
class Decorator {

    constructor(component) {
        this.component = component;
    }

    async getData() {
        return await this.component.getData;
    }
}

//Decorador 1 - para mostrar tabla y mayúsculas
class TableDecorator extends Component{

    async getData(){
        const data = await super.getData();
        const newData = data.map(item => {
            item._id = item._id.toUpperCase();
            return item;
        });

        return newData;
    }
}

(async () => {
    const url = '/api/tasks';
    const tasks = new Component(url);
    const data = await tasks.getData();
    console.log(data);

    const tableData = new TableDecorator(tasks)
    const data2 = await tableData.getData();
    console.log(data2);
}) ();

