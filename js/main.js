const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [
        { text: "task 1", done: false },
        { text: "task 2", done: false },
        { text: "task 3", done: true },
        { text: "task 4", done: true },
        { text: "task 5", done: false },
        { text: "task 6", done: false },
        { text: "task 7", done: false },
        { text: "task 8", done: false },
      ],
      newTask: { text: "", done: false },
    };
  },
  methods: {
    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
    addTask(newTask) {
      if (newTask.text !== "") {
        this.tasks.push({ ...newTask });
        newTask.text = "";
      } else alert("inserire una descrizione per aggiungere la task");
    },
    doneTask(taskIndex) {
      this.tasks[taskIndex].done = true;
    },
    redoTask(taskIndex) {
      this.tasks[taskIndex].done = false;
    },
  },
});
console.log(app);
app.mount("#app");
