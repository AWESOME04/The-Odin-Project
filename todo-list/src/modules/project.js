class Project{
    constructor(name){
        this.name = name
        this.todos = []
    }

    addTodo(todo){
        this.todos.push(todo)
    }

    removeTodo(index){
        this.todos.splice(index, 1)
    }

    getTodo(index){
        return this.todos[index]
    }

}

export default Project;