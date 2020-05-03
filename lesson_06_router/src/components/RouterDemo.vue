<template>
  <div>
    <h1>RouterDemo</h1>
    <p>Params: ID={{id}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style>
</style>