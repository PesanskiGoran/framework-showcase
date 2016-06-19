import {expect} from "chai";
import {stub} from "sinon";
import {TodoController} from "../src/app/controllers/TodoController";
import {TodoRepository} from "../src/app/repository/TodoRepository";

describe('TodoController', () => {

    let todoController: TodoController;
    let todoRepository: TodoRepository;

    beforeEach(() => {
        todoController = new TodoController();
        todoRepository = new TodoRepository();

        // wiring
        (<any> todoController).todoRepository = todoRepository;
        (<any> todoController).property = 'some prop';
    });


    // TODO: tests need also to be written in synchronous manner
    // its should be async functions
    it('should return all todos', () => {
        // given
        let givenTodos = ['todo1', 'todo2'];
        stub(todoRepository, 'getAll').returns(Promise.resolve(givenTodos));

        // when
        todoController.getAllTodos().then((result) => {
            // then
            expect(result).eq(givenTodos);
        });
    })
});