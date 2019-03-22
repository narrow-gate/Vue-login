<template>

<el-container>
  <el-header class="header" height="100px">
    <h3>my-project</h3>
    <p>Vue的登陆</p>
  </el-header>
  <el-main>
       <router-view/>
  </el-main>
</el-container> 
</template>

<script>
/**
 *   <el-container>
  <el-header class="header" height="100px">
    <h3>my-project</h3>
    <p>Vue的登陆</p>
  </el-header>
  <el-main>
       <router-view/>
  </el-main>
</el-container> 
 */
export default {
  name: 'App',

}
</script>

<style>
.header
{
    text-align: center;

    color: lightpink;
    background-color: lightblue;;
}

</style>
 