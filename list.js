// Example data structure
const tasksData = {
    "2024-02-28": [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
        // ... more tasks for this date
    ],
    // ... more dates
};

function loadTasks() {
    const selectedDate = document.getElementById('datePicker').value;
    const taskList = document.getElementById('taskList');
    const achievements = document.getElementById('achievements');

    // Clear existing content
    taskList.innerHTML = '';
    achievements.innerHTML = '';

    // Display tasks for the selected date
    if (tasksData[selectedDate]) {
        tasksData[selectedDate].forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.textContent = task.title;
            taskList.appendChild(taskItem);
        });
    }

    // Display achievements for the selected date
    // You can fetch achievements from your data structure in a similar way
}
