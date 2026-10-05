const { findTaskById } = require("./taskService");

function fetchTask(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const task = findTaskById(id);

            if (task) {
                resolve(task);
            } else {
                reject(new Error(`Task with ID ${id} not found`));
            }
        }, 1000);
    });
}

async function getTaskAsync(id) {
    try {
        const task = await fetchTask(id);
        return task;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    fetchTask,
    getTaskAsync
};