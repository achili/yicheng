<template>
    <div class="footer-color">
      <div class="container">
        <div class="row">
          <div class="col-md-9 footer-color-75">
            <div class="row" style="padding-top: 20px">
              <div class="col-md-6">地址:上海市闵行区剑川路951号2号楼205</div>
              <div class="col-md-2">邮编:200240</div>
              <div class="col-md-4">邮箱:evan.li@allready.cc</div>
            </div>
            <div class="row" style="padding: 20px 0 20px 0">
              <div class="col-md-6">©Copyright 上海睿涅信息技术有限公司</div>
              <div class="col-md-4" ><span @click="open('http://www.miitbeian.gov.cn')" style="cursor:pointer">沪ICP备17036278</span></div>
            </div>
          </div>
          <div class="col-md-3 footer-color-25">
            <div class="footer-code"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
      methods: {
          open(url){
            window.open(url);
          }
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .footer-color{
      width: 100%;
      background-color: #2d2d2d;
      color: #dbe1ec;
      position: relative;
      bottom: 0;
      @media (max-width: 992px)and(min-width:750px){
        .footer-color-75{
          width: 75% !important;
          display: inline-block;
        }
        .footer-color-25{
          width: 25% !important;
          display: inline-block;
        }
    }
      .item-ionic{
        width: 15px;
        height: 16px;
        background: url("../static/image/index/creative-commons.svg") no-repeat;
        -webkit-background-size: 13px 13px !important;
        background-size: 13px 13px !important;
        display: inline-block;
        background-position-y: 3px;
      }
      .footer-code{
        width: 50px;
        height: 50px;
        background: url("../static/image/index/thumb_raw_1531467866.png") no-repeat;
        -webkit-background-size: 50px 50px !important;
        background-size: 50px 50px !important;
        margin:25px 0;
        float: right;
      }
    }
</style>
