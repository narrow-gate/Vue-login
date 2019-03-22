<template>
 <div>
  <h1>my-vueproject</h1>
  <div> welcome </div>
  <span v-if="user">{{user.name}}
    <el-button type="warning" @click="login">注销</el-button>
  </span>
<el-button v-else type="success" @click="login">点击登陆</el-button>
</div>

</template>

<script>

export default {
 methods:{
   login(){
     this.$router.replace('/login')
   },
   logout(){
     this.$store.dispatch('logout').then(()=>{
       this.$router.replace('/login')
     })
   }
 },
 computed:{
   user(){
     return this.$store.state.user
   }
 }
}
</script>