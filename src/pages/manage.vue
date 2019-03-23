<template>
  <el-container>
    <el-header>
      <span>企业人力资源管理系统</span>
      <el-button icon="el-icon-warning">退出</el-button>
    </el-header>
    <el-container>
      <el-aside>
        <leftNav></leftNav>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Pagination></Pagination>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import leftNav from "../compoments/aside";
// import headTop from "../compoments/headTop";
import Pagination from "../compoments/Pagination";
export default {
  data() {
    return {};
  },
  //注册组件
  components: { leftNav, Pagination },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-container {
  margin-top: 2px;
  width: 100%;
  height: 100%;
}
.el-aside,
.el-main {
  text-align: left;
  color: #333;
}
.el-header {
  background-color: #b3c0d1;
  font: bold 22px "黑体";
  line-height: 60px;
}
.el-header > .el-button {
  float: right;
  margin-right: 30px;
  margin-top: 10px;
  width: 40px;
  height: 20px;
  box-sizing: content-box;
}
.el-aside {
  width: 250px !important;
  height: 800px !important;
}
.el-main {
  padding: 0;
  padding-left: 20px;
}
.el-pagination {
  margin-top: 20px;
}
</style>
