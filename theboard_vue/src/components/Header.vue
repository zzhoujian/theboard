<template>
  <div class="header">
    <el-row>
      <el-tooltip class="item" effect="light" content="锁定" placement="top-start"  >
        <el-button :icon=lock :type=lockVal circle @click="changeLockIcon"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="鼠标" placement="top-start">
        <el-button :icon=tools.pointer[0] :type=tools.pointer[1] circle @click="changeStatus(0)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="正方形" placement="top-start">
        <el-button :icon=tools.square[0] :type=tools.square[1] circle @click="changeStatus(1)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="菱形" placement="top-start">
        <el-button :icon=tools.lozenge[0] :type=tools.lozenge[1] circle @click="changeStatus(2)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="圆形" placement="top-start">
        <el-button :icon=tools.circle[0] :type=tools.circle[1] circle @click="changeStatus(3)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="箭头" placement="top-start">
        <el-button :icon=tools.arrow[0] :type=tools.arrow[1] circle @click="changeStatus(4)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="线条" placement="top-start">
        <el-button :icon=tools.line[0] :type=tools.line[1] circle @click="changeStatus(5)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="自由书写" placement="top-start">
        <el-button :icon=tools.pen[0] :type=tools.pen[1] circle @click="changeStatus(6)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" content="图片" placement="top-start">
        <el-button :icon=tools.font[0] :type=tools.font[1] circle @click="changeStatus(7)"></el-button>
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      lock: "el-icon-jiesuo",
      lockVal: "text",
      tools:{
        pointer: ["el-icon-24gf-pointer", "primary"],
        square: ["el-icon-checkbox-full", "text"],
        lozenge: ["el-icon-lingxing", "text"],
        circle: ["el-icon-radio-on-full", "text"],
        arrow: ["el-icon-jiantou_xiangyou", "text"],
        line: ["el-icon-jurassic_line", "text"],
        pen: ["el-icon-icon-pencil", "text"],
        font: ["el-icon-ziti", "text"],
      },
    }
  },
  methods: {
    changeLockIcon() {
      if (this.lockVal === 'primary') {
        this.lockVal = 'text';
        this.lock = 'el-icon-jiesuo';
      } else {
        this.lockVal = 'primary';
        this.lock = 'el-icon-suoding';
      }
    },
    changeStatus(id) {
      const arr = ['pointer', 'square', 'lozenge', 'circle', 'arrow', 'line', 'pen', 'font'];
      const targetButton = arr[id];
      for (let key in this.tools) {
        if (key === targetButton) {
          this.tools[key][1] = 'primary';
        } else {
          this.tools[key][1] = 'text';
        }
      }
      this.tools = Object.assign({}, this.tools)
    }
  }
}
</script>

<style scoped>
.header{
  margin-top: 5px;
}
</style>
