<template>
  <div id="app">
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to='/1'>1705A</router-link></el-menu-item>
  <el-menu-item index="2"><router-link to='/2'>待重修</router-link></el-menu-item>
  <el-menu-item index="3"><router-link to='/3'>已重修</router-link></el-menu-item>
</el-menu>
    
    <router-view/>
  </div>
</template>

<style scoped>
a{
  text-decoration: none;

}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}*/
</style>
<script>
  export default {
    data() {
      return {
        activeIndex2:(this.$route.params.id==null)?'1':this.$route.params.id,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>