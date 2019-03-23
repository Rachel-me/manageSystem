<template>
  <div>
    <div class="table_head">
      <h3>员工调动信息表</h3>
      <form action method="get">
        <input type="number" placeholder="请输入要查询员工编号">
        <button type="submit">查看</button>
      </form>
    </div>

    <el-table :data="tableData" stripe border height="250" style="width: 100%">
      <el-table-column prop="emp_id" label="员工编号" width="150"></el-table-column>
      <el-table-column prop="emp_name" label="员工姓名" width="150"></el-table-column>
      <el-table-column prop="reason" label="调动原因" width="150"></el-table-column>

      <el-table-column prop="remove_time" label="调动时间" width="150"></el-table-column>
      <el-table-column prop="old_department" label="原部门" width="150"></el-table-column>
      <el-table-column prop="old_job" label="原职位" width="150"></el-table-column>
      <el-table-column prop="enter_time" label="调入时间" width="150"></el-table-column>
      <el-table-column prop="new_department" label="现部门" width="200"></el-table-column>
      <el-table-column prop="new_job" label="现职位" width="200"></el-table-column>
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
  name: "emp_attendance",
  data() {
    return {
      tableData: [
        {
          emp_id: "123",
          emp_name: "123",
          reason: "",
          remove_time: "",
          old_department: "",
          old_job: "",
          enter_time: "",
          new_department: "",
          new_job: "",
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
