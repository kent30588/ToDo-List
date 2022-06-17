const dom = {
    new: document.getElementById('new'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
};

const tasks = [];

// Отслеживаем клие по кнопке
dom.add.onclick = () => {
    const newTaskText = dom.new.value;
    if (newTaskText && isNotHaveTask(newTaskText, tasks)) {
        addTask(newTaskText, tasks);
    }
    dom.new.value = '';
};

// функция добавления задач

function addTask(text, list) {
    const timestamp = Date.now();
    const task = {
        id: timestamp,
        text,
        isComplete: false
    };
    list.push(task);
}

// Проверка на схожие задачи

function isNotHaveTask(text, list) {
    let isNotHave = true;

    list.forEach((task) => {
        if (task.text === text) {
            alert('Такая задача уже существует');
            isNotHave = false;
        }
    });
    return isNotHave;
}

// Функция вывода списка задач

function tasksRender(list) {

}