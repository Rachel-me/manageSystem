
<template>
  <div class="container">
    <el-container>
      <el-main>
        <el-form ref="form" :model="form" label-width="80px" label-position="left">
          <el-form-item label="账号">
            <el-input v-model="form.number" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="账号类型">
            <el-radio-group v-model="form.type">
              <el-radio :label="0">管理员</el-radio>
              <el-radio :label="1">员工</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="onSubmit">登录</el-button>
            <el-button type="info">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        登录帐号即表示您同意并愿意遵守企业人力资源管理系统
        <a href="#">用户协议</a>
      </el-footer>
    </el-container>
    <div class="footer">
      <span>企业人力资源管理系统版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        number: "",
        password: "",
        type: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({ path: "/emp_attendance" });
    }
  }
};
</script>

<style>
@import "../style/cssreset-min.css";
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  margin-top: 100px;
  position: relative;
  font: bold 14px "黑体";
}
.el-container {
  width: 400px;
  height: 400px;
  border: 1px solid #dadada;
  /* position: absolute; */
  /* top: 50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -212px; */
  margin: 0 auto;
  margin-top: 60px;

  box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
  /* z-index: 2; */
}
.container > div {
  margin-top: 100px;
}
.el-form > .el-form-item {
  margin-top: 30px;
}
.el-form > .el-form-item > .el-button--small {
  margin-left: 40px;
  width: 40px;
}
</style>
