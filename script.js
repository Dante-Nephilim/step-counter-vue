const createApp = Vue.createApp;

const app = createApp({
  data() {
    return {
      step: 1,
      message: "",
      counter: 0,
      toDoArray: ["one", "two"],
    };
  },

  methods: {
    increment() {
      this.counter += this.step;
    },
    decrement() {
      this.counter -= this.step;
    },
    reset() {
      this.counter = 0;
    },
    random() {
      let j = Math.random();
      this.toDoArray.push(j);
    },
  },
  computed: {
    color() {
      console.log("calculating color");
      if (this.counter > 0) {
        return "Positive";
      } else if (this.counter < 0) {
        return "Negative";
      } else {
        return "Zero";
      }
    },
  },
});
app.mount("#app");
