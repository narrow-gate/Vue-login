<template>

<el-form :model="user" :rules="rules2" ref="loginForm" label-width="100px" class="demo-ruleFrom">
<el-form-item label="用户名:" prop="name">
    <el-input v-model="user.name"></el-input>
</el-form-item>
<el-form-item label="密码:" prop="pass">
    <el-input type="password" v-model="user.pass" autocomplete="off"></el-input>
</el-form-item>
<el-form-item>
    <el-button type="primary" @click="login">submit</el-button>
</el-form-item>
   </el-form>

</template>
<script>
export default{
    data(){
        return {
            user:{
                 name:'',
                pass:'',   
            },
            rules2:{
                pass:[
                    {message:'密码不能为空',trigger:'blur'}
                ],
                name:[
                    {message:'用户名不能为空',trigger:'blur'}
                ]
            }
        }
    },
      methods: {
  login(){
      this.$refs.loginForm.validate((valid)=>{
          if(valid){
             /**
              * if(this.user.name==="admin" && this.user.pass==="123"){
                  //通过dispatch来调用actions中的login方法
                  //dispatch采用链式调用
                  this.$store.dispatch('login',this.user).then(()=>{
                    this.$notify({
                      type:'success',
                      message:'欢迎你,' + this.user.name + '!',
                      duration:3000
                  })
                  this.$router.replace('/')
              })
              }
              else if(this.user.name===''){
                  this.$message({
                      type:'error',
                      message:"用户名不能为空",
                      showClose:true
                  })
              }
           else if(this.user.pass===""){
               this.$message({
                      type:'error',
                      message:"密码不能为空",
                      showClose:true
                  })
           }
           else{
               return false
           }
              */ 
             this.$ajax.post('/users/validate',this.user).then((res)=>{
                 if(res.data){
                     this.$store.dispatch('login',res.data).then(()=>{
                         this.$notify({
                             type:'success',
                             message:'welcome'+res.data.name+'!',
                             duration:3000
                         })
                         this.$router.replace('/')
                     })
                 }
                 else{
                     this.$message({
                         type:'error',
                         message:'用户名or密码错误',
                         showClose:true
                     })
                 }
             }).catch((err)=>{
                 this.$message({
                     type:'error',
                     message:'网络错误，请重试',
                     showClose:true
                 })
             })
      }
      else{
          return false
      }
      })
  }
    }              
}
</script>

