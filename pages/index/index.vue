<template>
  <div class="yc-index-content">
    <div class="top-bar-content">
      <div class="container">
        <div class="row">
          <div class="top-bar-box-shadow">
            <div class="row">
              <div class="col-md-5 top-bar-box-shadow-35">
                <div class="top-bar-logo">
                  <div class="top-bar-logo-image"></div>
                  <div class="top-bar-logo-test"><span>AllReady</span></div>
                </div>
              </div>
              <div class="col-md-7 top-bar-box-shadow-65">
                <div class="row top-bar-nav">
                  <div class="col-md-1"></div>
                  <div class="col-md-2 top-bar-nav-test" v-for="item in indexRouter" :key="item.test">
                    <nuxt-link :to="item.router">{{ item.test }}</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="component-container">
      <nuxt-child/>
    </div>
    <ScrollTop :downDisplay="false"></ScrollTop>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
import ScrollTop from "../../components/ScrollTop"
  export default{
    head: {"title":"AllReady | 智慧园区先行者-上海睿涅信息技术有限公司"},
    data(){
      return{
        indexRouter:{
          "index":{
            test:"首页",
            router:"/"
          },
          "product":{
            test:"产品与服务",
            router:"/product"
          },
          "smartSpace":{
            test:"智慧空间",
            router:"/smartSpace"
          },
          "case":{
            test:"典型案例",
            router:"/case"
          },
          "about":{
            test:"关于我们",
            router:"/about"
          }
        }
      }
    },
    components:{
      Footer,
      ScrollTop
    },
    methods:{

    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{
    position: static !important;
  }
  .yc-index-content{
    .top-bar-content{
      width: 100%;
      position: absolute;
      top: 40px;
      z-index: 9999;
      .top-bar-box-shadow{
        box-shadow: 0px 0px 1px #ccc;
        border-radius: 5px;
        background: #fff;
        .top-bar-logo{
          .top-bar-logo-image{
            width: 55px;
            height: 32px;
            background:url("../../static/image/index/thumb_raw_1531709057.png") no-repeat;
            display: inline-block;
            vertical-align: middle;
            margin-left: 50px;
          }
          .top-bar-logo-test{
            padding: 25px 0;
            display: inline-block;
            cursor:pointer;
            font-size: 22px;
          }
        }
        .top-bar-nav{
          .top-bar-nav-test{
            padding: 31px 0;
            color: rgb(168, 168, 168);
            font-size: 16px;
            cursor:pointer;
            text-align: center;
            .nuxt-link-exact-active{
              color: rgb(74, 174, 248) !important;
            }
            a{
              color: rgb(168, 168, 168);
              font-size: 16px;
              text-decoration: none;
            }
            a:hover{
              color: rgb(74, 174, 248);
            }
          }
        }
        @media (max-width: 992px)and(min-width:750px){
          .top-bar-box-shadow-35{
            width: 35%;
            display: inline-block;
          }
          .top-bar-box-shadow-65{
            width: 65%;
            display: inline-block;
            .top-bar-nav-test{
              display: inline-block;
              width: 19%;
            }
          }
        }
      }
    }
    .component-container{
      width: 100%;
    }
  }
</style>
