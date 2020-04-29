<template>
  <div>
    <p>Computed</p>
    <Computed @force-update="fUpdate()"></Computed>

    <p>Watch</p>
    <Watch></Watch>
  </div>
</template>

<script>
import Watch from "./Watch";
import Computed from "./Computed";
export default {
  components: { Watch, Computed },
  data() {
    return {};
  },
  methods: {
    fUpdate: function() {
      console.log("force update ...");
      
    }
  }
};
</script>

<style>
</style>