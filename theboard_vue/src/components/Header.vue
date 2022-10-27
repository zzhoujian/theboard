<template>
  <div class="header">
    <el-row type="flex">
      <el-col :span="1" :offset="8">
        <el-button icon="el-icon-suoding" circle></el-button>
      </el-col>
      <el-col :span="7">
        <div class="mid">
          <el-button icon="el-icon-24gf-pointer" circle></el-button>
          <el-button icon="el-icon-checkbox-full" circle></el-button>
          <el-button icon="el-icon-lingxing" circle></el-button>
          <el-button icon="el-icon-radio-on-full" circle></el-button>
          <el-button icon="el-icon-jiantou_xiangyou" circle></el-button>
          <el-button icon="el-icon-jurassic_line" circle></el-button>
          <el-button icon="el-icon-icon-pencil" circle></el-button>
          <el-button icon="el-icon-ziti" circle></el-button>
          <el-button icon="el-icon-tupian" circle></el-button>
        </div>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-delete" circle></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
.mid{
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 40px;
}
.header{
  margin-top: 1%;
}
</style>
