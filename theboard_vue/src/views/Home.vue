<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <Aside id="aside"></Aside>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Aside
  }
}
</script>
<style scoped>
#aside {
}
</style>

