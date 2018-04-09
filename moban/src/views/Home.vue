<template>
  <div class="home">
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="180">
    </el-table-column>
    <el-table-column
      prop="id"
      label="学号">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="删除"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="del(scope.row)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
    
  </el-table>
  <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
<!--       <el-form-item label="姓名" :label-width="formLabelWidth"> -->
      姓名
      <el-input v-model="form.name" auto-complete="off"></el-input>
      性别<el-input v-model="form.sex" auto-complete="off"></el-input>
      学号<el-input v-model="form.status" auto-complete="off"></el-input>
      </el-select>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
  	return{
  		tableData: [],
      dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          sex:'',
          status:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
  	}
  },
  created(){
    if(this.$route.params.id==null){
      this.$route.params.id='1';
      this._get()
      }else{
        this._get()
      }

    },
  methods:{
    _get:function(){
      this.$http.post(`http://localhost:3000`,{status:this.$route.params.id},{emulateJSON:true}).then(function(e){
        this.tableData=e.body;
      })
    },
    del:function(e){
      console.log(e)
      this.$http.post(`http://localhost:3000/del`,{id:e.id},{emulateJSON:true}).then(function(e){});
      this._get()
    },
    add:function(e){
      this.dialogFormVisible = false;
      this.$http.post(`http://localhost:3000/add`,{name:this.form.name,sex:this.form.sex,status:this.form.status},{emulateJSON:true}).then(function(e){this._get()})
      
    }
    
  },
  watch:{
    '$route':function(){
      this._get()
    }
  }
}
</script>
<style>
  li>a{
    display: block!important;
    width: 100%!important;
    height: 100%!important;
  }
</style>
