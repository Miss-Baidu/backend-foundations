const tasks = require("./data");

function addTask(task) {
    tasks.push(task);
    return task;
}

function findTaskById(id) {
    return tasks.find(task => task.id === id);
}

function filterByStatus(status) {
    return tasks.filter(task => task.status === status);
}

function updateTask(id, updates) {
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return null;
    }

    Object.assign(task, updates);

    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return null;
    }

    return tasks.splice(index, 1)[0];
}

function getTaskSummary() {
    const summary = {
        total: tasks.length,
        pending: 0,
        "in-progress": 0,
        completed: 0
    };

    tasks.forEach(task => {
        summary[task.status]++;
    });

    return summary;
}

module.exports = {
    addTask,
    findTaskById,
    filterByStatus,
    updateTask,
    deleteTask,
    getTaskSummary
};