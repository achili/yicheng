<template>
  <div class="sssss">
    这是首页哦


    <div class="row">
      <div class="col-md-3">s {{date | dayTime}}</div>
      <!--<div class="col-md-3">s {{res.errorMessage}}</div>-->
      <div class="col-md-3">s</div>
      <div class="col-md-3">s</div>
    </div>
    <button @click="login" class="cccccc">点击登陆</button>

    <button @click="validate">点击验证</button>

    <div style="width:300px;margin:0 auto; padding:20px 0;">
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32059002001990" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">苏公网安备 32059002001990号</p></a>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import BaseEntity from '../static/model/common/BaseEntity'

  export default {
    asyncData({ req, params }) {
      // // // We can return a Promise instead of calling the callback
      // let base2 = new BaseEntity();
      // let baseccc = {
      //   errorMessage: "hahahaha!",
      //   id: "000"
      // };
      // base2.render(baseccc);
      // // console.log(base2.getTag());
      // return axios.get('http://localhost:8250/api')
      //   .then(function(res) {
      //     return {res: base2}
      //   },function() {
      //     return {res: base2}
      //   });
    },
    data() {
      return {
        date: new Date()
      }
    },
    created() {

    },
    beforeMount() {
      // console.log("beforeMount");
      // this.res = new BaseEntity().render(this.res);
    },
    methods: {
      // login() {
      //   axios.post('http://localhost:8250/api/login')
      //     .then(function (res) {
      //       console.log(res.data)
      //     },function () {
      //       console.log("失败！")
      //     });
      // },
      // validate() {
      //   axios.post('http://localhost:8250/api/validate')
      //     .then(function (res) {
      //       console.log(res.data)
      //     },function () {
      //       console.log("失败！")
      //     });
      // }
    },
    mounted() {
      // let base2 = new BaseEntity();
      // let baseccc = {
      //   errorMessage: "hahahaha!",
      //   id: "000"
      // };
      // base2.render(baseccc);
      console.log(this.res);

      document.write(unescape
      ("%3C/script%3E%3Cspan id='szgs_stat_icon_1031377142161604608'%3E%3C/span%3E%3Cscript src='http://61.155.26.218/sendMark?siteid=1031377142161604608&type=1' type='text/javascript'%3E%3C/script%3E")
      );
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .sssss {
    font-size: 20px;
    .cccccc {
      color: red;
    }
  }

</style>
