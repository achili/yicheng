<template>
    <div class="yc-case-content">
      <div class="case-content-top-image"></div>
      <div class="case-yc container">
        <div class="case-yc-title">
          <div class="case-yc-test">典型案例</div>
          <div class="case-yc-ionic"></div>
        </div>
        <div class="case-yc-content row">
          <div class="case-yc-content-item col-md-6" v-for="item in caseList" :key="item.index">
            <div class="case-yc-content-item-img" :style=" 'background:url(\'' + item.img +'\') center no-repeat content-box;' "></div>
            <div class="case-yc-content-item-content">
              <div class="case-yc-content-item-title">{{item.title}}</div>
              <div class="case-yc-content-item-text">{{item.text}}</div>
              <div class="case-yc-content-item-btn" @click="openUrl(item.url)">more ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "case",
      data(){
          return{
            caseList:{
              caseOne:{
                title:"零号湾全球创新创业集聚区",
                text:'"零号湾"以改善创业环境、促进大众创业、优化创新环境、促进万众创新为宗旨，发挥科技、人才、信息、平台、资源、资本的集聚优势，为创业者...',
                img:require('../../../static/image/index/raw_1535423478.jpeg'),
                url:'https://neobay.cn/'
              },
              caseTwo:{
                title:"星桥腾飞集团",
                text:'星桥腾飞集团是亚洲领先的可持续发展城市和商务地产解决方案提供者，管理的资产总值超过200亿新加坡元。星桥腾飞集团由淡马锡控股和...',
                img:require('../../../static/image/index/raw_1535423576.jpeg'),
                url:'https://www.ascendas-singbridge.com/zh-cn/about-us/who-we-are/'
              }
            }
          }
      },
      methods:{
        openUrl(e){
          window.open(e, "_blank");
        }
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
  .yc-case-content{
    .case-content-top-image{
      width: 100%;
      height: 535px;
      background: url('../../../static/image/index/cooperative-partner.jpg') no-repeat;
      background-size: cover !important;
    }
    .case-yc{
      margin-top: 70px;
      .case-yc-title{
        .case-yc-test{
          font-size: 26px;
          text-align: center;
        }
        .case-yc-ionic{
          margin: 5px auto 45px auto;
          width: 65px;
          height: 10px;
          background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
          background-size: 65px 10px;
        }
      }
      .case-yc-content{
        padding-bottom: 30px;
        .case-yc-content-item{
          height: 230px;
          margin-bottom: 40px;
          .case-yc-content-item-img{
            width: 40%;
            height: 230px;
            display: inline-block;
            float: left;
          }
          .case-yc-content-item-content{
            width: 60%;
            height: 230px;
            border: 1px solid rgb(208, 208, 208);;
            display: inline-block;
            float: right;
            font-size: 14px;
            border-radius: 0 5px 5px 0;
            .case-yc-content-item-title{
              color: rgb(111, 111, 111);
              margin: 20px 0 20px 30px;
            }
            .case-yc-content-item-text{
              color: rgb(156, 156, 156);
              margin: 0 0 30px 30px;
            }
            .case-yc-content-item-btn{
              width: 109px;
              height: 30px;
              color: rgb(74, 174, 248);
              border: 1px solid rgb(208, 208, 208);
              border-radius: 5px;
              text-align: center;
              line-height: 28px;
              margin-left: 30px;
              cursor:pointer;
            }
          }
        }
      }
    }
  }
</style>
