function employees() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }
        addTask(id, taskName, priority) {
            let task = { id, taskName, priority };
            if (priority == 'high') {
                this.tasks.unshift(task);
            } else {
                this.tasks.push(task);
            }

            return `Task id ${id}, with ${priority} priority, has been added.`;
        }
        doTask() {
            if (this.tasks.length == 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`;
            } else {
                let task = this.tasks.shift();
                return task.taskName;
            }
        }
        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }

        reviewTasks() {
            let result = [`Tasks, that need to be completed:`,];
            if (this.tasks.length > 0) {

                this.tasks.forEach((t) => {
                    result.push(`${t.id}: ${t.taskName} - ${t.priority}`);

                });
                return result.join('\n');
            }
        }
    }
    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.experience = Number(experience);
            this.baseSalary = 1000 + Number(bonus);
            this.tasks = [];
        }

        learn(years) {
            this.experience += Number(years);
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.experience = Number(experience) + 5;
            this.baseSalary = 1000 + Number(bonus);
        }
        changeTaskPriority(taskId) {
            let task = this.tasks.find((t) => t.id === taskId);
            let index = this.tasks.indexOf(task);
            this.tasks = this.tasks.splice(index, 1);
            if (task.priority === 'high') {
                task.priority = 'low';
                this.tasks.push(task);
            } else if (task.priority === 'low') {
                task.priority = 'high';
                this.tasks.unshift(task);
            }

            return task;
        }
    }
    return {
        Developer,
        Junior,
        Senior
    }
}

let classes = employees();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());
console.log('============');
const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());
console.log('============');
const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);