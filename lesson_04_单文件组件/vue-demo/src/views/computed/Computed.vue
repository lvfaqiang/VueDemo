<template>
  <div>
    Message: {{ message}}
    <p>Reversed Message1 : {{ reversedMessage1 }}</p>
    <p>Reversed Message2 : {{ reversedMessage2() }}</p>
    <p>{{now}}</p>
    <p>
      <button @click="forceUpdate()">forceUpdate</button>
    </p>
    <p>
      <input v-model="message" />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello world"
    };
  },
  computed: {
    reversedMessage1: function() {
      console.log("执行 reversedMessage1 ");
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    now: function() {
      return Date.now();
    }
  },
  methods: {
    reversedMessage2: function() {
      console.log("执行 reversedMessage2 ");
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    forceUpdate: function() {
      this.$emit("force-update");
      console.log("------");
      
    }
  }
};
</script>

<style>
</style>