export default class Kanban {

    static getTasks(columnId){
        const data = read().find(column => {
            return column.columnId == columnId;
        });

        if(!data){
            return [];
        }

        return data.tasks;
    }

    static insertTask(columnId, content){
        const data = read();
        const column = data.find(column => {
            return column.columnId == columnId;
        });

        const task = {
            taskId: Math.floor(Math.random() * 100000),
            content: content
        };

        if(!column){
            throw new Error("Colum dosen't exists!");
        }

        column.tasks.push(task);
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data));

        return task;
    }

    static updateTask(taskId, updatedInformation){

    }

    static deleteTask(taskId){

    }

    static getAllTask(){
        const data = read();
        return [data[0].tasks, data[1].tasks, data[2].tasks];
    }

    
}

function read(){
    const data = localStorage.getItem("data");

    if(!data){
        return [
             { columnId: 0, tasks: [] },
             { columnId: 1, tasks: [] },
             { columnId: 2, tasks: [] } 
        ];
    }

    return JSON.parse(data);
}

function save(){

}