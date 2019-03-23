<template>
  <div>
    <div class="table_head">
      <h3>工资管理表</h3>
      <form action method="get">
        <input type="number" placeholder="请输入要查询员工编号">
        <button type="submit">查看</button>
      </form>
    </div>

    <el-table :data="tableData" stripe border height="250" style="width: 100%">
      <el-table-column prop="emp_id" label="员工编号" width="150"></el-table-column>
      <el-table-column prop="emp_name" label="员工姓名" width="150"></el-table-column>
      <el-table-column prop="emp_department" label="部门" width="150"></el-table-column>

      <el-table-column prop="emp_job" label="职位" width="150"></el-table-column>
      <el-table-column prop="basic_salary" label="基本工资" width="150"></el-table-column>
      <el-table-column prop="subsidy" label="补贴" width="150"></el-table-column>
      <el-table-column prop="bonus" label="奖金" width="150"></el-table-column>
      <el-table-column prop="attendance" label="出勤" width="200"></el-table-column>
      <el-table-column prop="finally_salary" label="实发工资" width="200"></el-table-column>
      <el-table-column prop="remark" label="备注" width="200"></el-table-column>
      <el-table-column prop="option" label="操作" width="200">
        <el-row>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "emp_record",
  data() {
    return {
      tableData: [
        {
          emp_id: "123",
          emp_name: "123",
          emp_department: "",
          emp_job: "",
          basic_salary: "",
          subsidy: "",
          bonus: "",
          attendance: "",
          finally_salary: "",
          remark: "",
          option: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.table_head {
  height: 80px;
}
.table_head > h3 {
  margin-top: 30px;
  float: left;
}
.table_head > form {
  margin-top: 25px;
  float: right;
}

.table_head > form > input {
  height: 30px;
  width: 200px;
  /* outline: none; */
  border: 1px solid black;
  margin-right: 30px;
  padding-left: 7px;
}
.table_head > form > button {
  padding: 0;
  border: 1px solid gainsboro;
  /* outline: none; */
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color: green;
  box-sizing: content-box;
  margin-right: 60px;
}
body .el-table th.gutter {
  display: table-cell !important;
}
</style>
