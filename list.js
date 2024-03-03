// data structure
const tasksData = {
    "2024-02-28": [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
        // ... more tasks
    ],
    // ... more dates
};

function loadTasks() {
    const selectedDate = document.getElementById('datePicker').value;
    const taskList = document.getElementById('taskList');
    const achievements = document.getElementById('achievements');

    // Clear 
    taskList.innerHTML = '';
    achievements.innerHTML = '';

    // Display tasks for selected date
    if (tasksData[selectedDate]) {
        tasksData[selectedDate].forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.textContent = task.title;
            taskList.appendChild(taskItem);
        });
    }

    // Display achievements for selected date
    // You can fetch achievements from your data structure in a similar way
}

function showAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'block';
}

function hideAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'none';
}

function addTask() {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';

    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

    const taskText = newTaskInput.value;

    if (taskText.trim() !== '') {
        const taskDiv = document.createElement('div');
        taskDiv.textContent = taskText;
        taskDiv.className = 'task-item';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);

        newTaskInput.value = '';

        hideAddTaskModal();

        // Add this code at the end of the function
        const selectedDate = document.getElementById('datePicker').value;
        tasksData[selectedDate].push({ id: Date.now() + tasksData[selectedDate].length, title: taskText });
    }
}

// Function to save tasks for the next day
function saveTasksForNextDay() {
    const currentDate = document.getElementById('datePicker').value;

    // Replace this line
    // const nextDate = new Date(date.Parse(currentdate));

    // With this line
    const nextDate = new Date(currentDate);

    nextDate.setDate(nextDate.getDate() +1 );

    tasksData[nextDate.toISOString().split('T')[0]] = [];

    const taskList = document.getElementById('taskList');
    const tasks = Array.from(taskList.children).map(child => child.textContent);

    tasks.forEach(task => {
        tasksData[nextDate.toISOString().split('T')[0]].push({ id: Date.now() + tasks.indexOf(task), title: task });
    });

    // Add this code at the beginning of the function
    const selectedDate = document.getElementById('datePicker').value;
    tasksData[selectedDate] = [];

    loadTasks();
}

deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskDiv);
    const selectedDate = document.getElementById('datePicker').value;
    tasksData[selectedDate] = tasksData[selectedDate].filter(task => task.title !== taskDiv.textContent);
    deleteButton.style.display = 'none';
});

// Add a button to trigger the function
// const nextDayButton = document.createElement('button');
// nextDayButton.textContent = 'Save tasks for next day';
// nextDayButton.addEventListener('click', saveTasksForNextDay);
// document.body.appendChild(nextDayButton);

// function to handle date changes in the date picker
// document.getElementById('datePicker').addEventListener('change', loadTasks);
``