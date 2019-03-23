<template>
  <div>
    <div class="table_head">
      <h3>员工档案表</h3>
      <form action method="get">
        <input type="number" placeholder="请输入要查询员工编号">
        <button type="submit">查看</button>
      </form>
    </div>

    <el-table :data="tableData" stripe border height="350" style="width: 100%">
      <el-table-column prop="number" label="#" width="100"></el-table-column>
      <el-table-column prop="role" label="员工权限" width="120"></el-table-column>
      <el-table-column prop="emp_id" label="员工编号" width="120"></el-table-column>
      <el-table-column prop="emp_name" label="员工姓名" width="120"></el-table-column>
      <el-table-column prop="emp_sex" label="性别" width="120"></el-table-column>

      <el-table-column prop="emp_birthday" label="出生年月" width="120"></el-table-column>
      <el-table-column prop="emp_native" label="籍贯" width="150"></el-table-column>
      <el-table-column prop="emp_phone" label="电话号码" width="150"></el-table-column>
      <el-table-column prop="join_time" label="参加工作时间" width="120"></el-table-column>
      <el-table-column prop="job_resume" label="工作履历" width="200"></el-table-column>
      <el-table-column prop="remark" label="备注" width="150"></el-table-column>
      <el-table-column prop="option" label="操作" width="200">
        <el-row>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[15, 30, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="currentTotal"
    ></el-pagination>
  </div>
</template>

<script>
// import {ServFindAllByConditions} from '@/service/database'
export default {
  name: "emp_record",
  methods: {
    handleBtnQuery(query) {
      if (query.env === "") {
        this.$message({
          message: "请选择查询环境",
          type: "warning"
        });
        return;
      }

      ServFindAllByConditions(query)
        .then(res => {
          this.tableData = res.data;
          this.currentTotal = this.tableData.length;
          this.$message({
            message: res.msg,
            type: res.code == 200 ? "success" : "warning"
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 30,
      currentTotal: 0,

      tableData: [
        {
          number: "1",
          role: "1",
          emp_id: "123",
          emp_name: "123",
          emp_sex: "123",
          emp_birthday: "123",
          emp_native: "123",
          emp_phone: "123",
          join_time: "",
          job_resume: "",
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
</style>
