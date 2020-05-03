<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <router-link to="/foo">To Foo</router-link>
    <br />
    <router-link to="/bar">ToBar</router-link>
    <br />
    <router-link to="/root/123">To root/123</router-link>
    <br />
    <router-link to="/root/1234/child">to root/1234/child</router-link>
    <br />
    <router-link to="/root/1234/child/666">to root/1234/child/666</router-link>
    <br />
    <button @click="$router.push('/foo')">To Foo</button>
    <button @click="$router.push('/root/1234/child')">root/1234/child</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
</style>
