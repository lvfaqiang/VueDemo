<template>
  <div>
    <p>Child Component</p>
    Params:{{$route.params}}
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style>
</style>