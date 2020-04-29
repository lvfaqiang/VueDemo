<template>
  <div>
    <p>{{ $data }}</p>
    <p>
      <button @click="()=>(a+=1)">a+1</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      b: {
        c: 2,
        d: 3
      },
      e: {
        f: {
          g: 4
        }
      },
      h: []
    };
  },
  watch: {
    a: function(val, oldVal) {
      this.b.c += 1;
      console.log("watch a :  new val %s , old val  %s", val, oldVal);
    },
    "b.c": function(val, oldVal) {
      this.b.d += 1;
      console.log("watch b.c :  new val %s , old val  %s", val, oldVal);
    },
    "b.d": function(val, oldVal) {
      this.e.f.g += 1;
      console.log("watch b.d :  new val %s , old val  %s", val, oldVal);
    },
    e: {
      handler: function(val, oldVal) {
        this.h.push("发");
        console.log("watch b.d :  new val %s , old val  %s", val, oldVal);
      },
      deep: true // 该字端标明可以深度监听，该对象中所有的对象都可以监听。
    }
  }
};
</script>

<style>
</style>