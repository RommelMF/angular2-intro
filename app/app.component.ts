import {Component} from "@angular/core";

class Todo {
    constructor(public title: string,
                public completed: boolean = false) {}
}

const todos: Todo[] = [
    {
        title: 'Learn Node JS',
        completed: false
    },
    {
        title: 'Grunt',
        completed: false
    },
    {
        title: 'Javascript',
        completed: true
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css' ]
})
export class AppComponent {
    title = 'Angular TO TO';
    todos: Todo[] = todos;


    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    };
    delete(todo: Todo) {
        let index = this.todos.indexOf(todo);
        if(index > -1) {
            this.todos.splice(index, 1);
        };
    }

}