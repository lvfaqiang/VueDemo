<template>
  <div id="app">
    {{ count }}
    <br />
    {{ $store.getters.doubleCount}}
    <p>
      <button @click="$store.commit('increment')">Count++</button>
    </p>
    <p>
      <button @click="$store.dispatch('incre')">Count++ Action</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
</style>
