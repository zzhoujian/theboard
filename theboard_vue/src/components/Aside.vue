<template>
  <div class="Aside">
    <div class="container">
      <el-row style="margin-bottom: 5px; padding-top: 5px">
        <el-tooltip class="item" effect="light" content="载入文件" placement="top-start"  >
          <el-button plain icon="el-icon-wenjianjia" round></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="导出" placement="top-start">
          <el-button plain icon="el-icon-daochu" round></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="保存为图片" placement="top-start">
          <el-button plain icon="el-icon-daochutupian" round></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="实时协作" placement="top-start">
          <el-button plain icon="el-icon-duoren" round></el-button>
        </el-tooltip>
      </el-row>
      <el-row type="flex">
        <el-col :span="6" :offset="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="12">
          <el-input v-model="colorVal" style="font-size:20px;">
            <template slot="prepend">#</template>
          </el-input>
        </el-col>
        
      </el-row>
    </div>
    <div class="container">
      <el-row>
        <el-button type="primary" icon="el-icon-edit" round></el-button>
        <el-button type="success" icon="el-icon-check" round></el-button>
        <el-button type="info" icon="el-icon-message" round></el-button>
      </el-row>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      colorVal:'ffffff'
    }
  },
  props: {
    msg: String
  },
}
</script>
<style scoped>
.container{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  width: 300px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
}
</style>

  