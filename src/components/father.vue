<template>
 <div>
   <h1>我是父组件！</h1>
   <p></p>
   <son message="我是子组件一"></son>
      <son v-bind:message="msg"></son>
        <son v-bind:message="msg2"></son>
        <router-link to='/son'>change</router-link>
    <router-view/>
 </div>
</template>

<script>
import son from './son'
export default {
  name: 'fater',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2:'我是三'
    }},
    components:{
      son
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
