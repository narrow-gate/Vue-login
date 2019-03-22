<template>
<div>
    <h3>{{message}}</h3>
    <h1>hello this is son</h1>
    <h2 @click="seen">now you can see</h2>
    <div>{{count}}</div>
</div>
</template>
<script>
export default {
    data(){
        return  {
seen:false,
count:0
        }
    },
    methods:{
     seen:function() {
         alert('success')
        },
        increment(){
            this.count++
        }
    
    },
    props:['message']
}
</script>

