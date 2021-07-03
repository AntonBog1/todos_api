$(document).ready(function () {
    $.getJSON('/api/todos')
        .then(addTodos);

    $('#todoInput').keypress(function (event) {
        if (event.which == 13) {
            createTodo();
        }
    });

    $('.list').on('click', 'span', function () {
        removeTodo($(this).parent());
    });
});

function addTodos(todos) {
    todos.forEach(function (todo) {
        addTodo(todo);
    })
};

function addTodo(todo) {
    const newTodo = $(`<li class="task">${todo.name}<span>X</span></li>`)
    newTodo.data('id', todo._id);
    if (todo.completed) {
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
};

function createTodo() {
    const userInput = $('#todoInput').val();
    $.post('/api/todos', { name: userInput })
        .then(function (newTodo) {
            $('#todoInput').val('');
            addTodo(newTodo);
        })
        .catch(function (err) {
            console.log(err);
        })
};

function removeTodo(todo) {
    const clickedId = todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: `/api/todos/${clickedId}`
    })
        .then(function (data) {
            todo.remove();
        })
        .catch(function (err){
        console.log(err);
    })
};