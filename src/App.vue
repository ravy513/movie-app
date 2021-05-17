<template>
<div 
  class="h-100 container"
>
   <header id="appheader" class="text-center"><strong>{{$store.state.appStore.appName}}</strong></header>
   <router-view />
  <footer  class="text-center">
    <small>Created by @ABC</small>
  </footer>
</div>
</template>

<script>


export default {
  
  data () {
    return {
    }
  },
  
  methods: {
  },
  name: 'App',
  
}
</script>
<style >
#appheader{
  font-size:45px;
}

.link {
      background: #333;
      color:aquamarine;
      width:100%;
      display: block;
      padding:10px;
      
}

</style>
