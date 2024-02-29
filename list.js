

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
    //const addTaskModal = document.getElementById('addtaskModal');
    document.getElementById('addTaskModal').style.display = 'block';
    
}

function hideAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'none';
}

function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

//    .. function toggleAddTaskMenu() {
//         const plusIcon = document.getElementById('plusIcon');
//         const taskMenu = document.getElementById('taskMenu');
    
//         // Toggle rotation effect
//         plusIcon.style.transform = plusIcon.style.transform === 'rotate(45deg)' ? 'rotate(0deg)' : 'rotate(45deg)';
    
//         // Toggle menu visibility
//         taskMenu.style.display = taskMenu.style.display === 'block' ? 'none' : 'block';
//     }
    
//     function showAddTaskModal() {
//         // Function to show the modal
//         // Add your existing code for showing the modal here
//     }..

    // Get the task text from the input
    const taskText = newTaskInput.value;

    // Check if the input is not empty
    if (taskText.trim() !== '') {
        // Create a new task div
        const taskDiv = document.createElement('div');
        taskDiv.textContent = taskText;
        taskDiv.className = 'task-item';

        // Append the task div to the task list
        taskList.appendChild(taskDiv);

        // Clear the input
        newTaskInput.value = '';

        // Hide the add task modal
        hideAddTaskModal();
    }
}
