<template>
  <div class="header">
    <div class="big">
      <div class="certainDiv">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
      </div>
      <div class="certainDiv">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
      </div>
      <div class="certainDiv">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
  .big {
    flex: 1;
  }
  .certainDiv {
    flex: 1;
  }
</style>
