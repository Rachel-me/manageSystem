<template>
  <div style="width:250px;" id="order-list">
    <el-menu :default-openeds="['2']">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <!--<template slot="title">分组1</template>-->
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>员工数据管理</span>
        </template>
        <el-menu-item-group>
          <!--<template slot="title">分组一</template>-->
          <el-menu-item index="2-1">
            <router-link to="/manage/emp_record">员工档案信息</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/manage/emp_attendance">员工考勤信息</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/manage/job_discuss">工作评价</router-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <router-link to="/manage/emp_remove">员工调动信息</router-link>
          </el-menu-item>
          <el-menu-item index="2-5">
            <router-link to="/manage/salary">工资管理</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>
        <el-menu-item index="explain">管理员设置</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>说明</span>
        </template>
        <el-menu-item index="explain">说明</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "vue",
  data() {
    return {};
  },
  mounted: function() {
    let orderHeight = window.innerHeight;
    document.getElementById("order-list").style.height = orderHeight + "px";
  },

  methods: {}
};
</script>

<style scoped>
#app {
  margin-top: 10px;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.manage {
  text-align: left;
}
.el-aside .el-menu .el-submenu {
  display: block;
  width: 200px;
}
.el-container .el-header {
  padding-top: 20px;
}
.el-menu-item > a {
  text-decoration: none;
}
.el-menu-item > a:link {
  /* color: black; */
}
.el-menu-item > a:visited {
  /* color: aquamarine; */
}
.el-menu-item > a:hover {
  color: #b3c0d1;
}
.el-menu-item > a:active {
  color: red;
}
</style>
