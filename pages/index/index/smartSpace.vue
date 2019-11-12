<template>
    <div class="yc-smart-space-content">
      <div class="smart-space-content-top-image"></div>
      <div class="smart-space-yc">
        <div class="smart-space-yc-title">
          <div class="smart-space-yc-test">智慧空间</div>
          <div class="smart-space-yc-ionic"></div>
        </div>
        <div class="smart-space-yc-content container">
          <div class="smart-space-yc-content-text row">
            结合”智慧空调“、”智慧门禁“、智慧安防”、“智慧网络服务”等打造智慧社区、园区，使园区内的人员享受科技带来的便捷。
          </div>
          <div class="smart-space-yc-content-list row">
            <div class="col-md-3">
              <div class="smart-space-yc-content-list-title">
                <div class="smart-space-yc-content-list-title-text">硬件</div>
                <p class="smart-space-yc-content-list-title-underline"></p>
                <div class="smart-space-yc-content-list-title-describe">我们的服务</div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="col-md-4" v-for="item in smartSpaceService" :key="item.title">
                <div class="smart-space-yc-content-list-item">
                  <div class="smart-space-yc-content-list-item-title">{{item.title}}</div>
                  <div class="smart-space-yc-content-list-item-underline"></div>
                  <div class="smart-space-yc-content-list-item-ionic" :style="'background: url(\''+ item.ionic +'\') no-repeat;'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "smartSpace",
      data(){
          return{
            smartSpaceService:{
              printer:{
                title:"智能打印复印",
                ionic:require('../../../static/image/index/raw_1535510745.png')
              },
              video:{
                title:"视讯系统，国际会议，智能会议室",
                ionic:require('../../../static/image/index/raw_1535593564.png')
              },
              guard:{
                title:"智能门禁、道闸",
                ionic:require('../../../static/image/index/raw_1535511381.png')
              },
              network:{
                title:"智能网络服务",
                ionic:require('../../../static/image/index/raw_1535593738.png')
              },
              facilities:{
                title:"会议室等设施预订系统",
                ionic:require('../../../static/image/index/raw_1535594666.png')
              },
              security:{
                title:"智能安防",
                ionic:require('../../../static/image/index/raw_1535510719.png')
              },
              conditioner:{
                title:"智能空调",
                ionic:require('../../../static/image/index/raw_1535510759.png')
              },
              jurisdiction:{
                title:"智能考勤、访客系统、高级权限控制",
                ionic:require('../../../static/image/index/raw_1535593358.png')
              },
              propaganda:{
                title:"宣传展示中心",
                ionic:require('../../../static/image/index/raw_1535594353.png')
              },
              lamps:{
                title:"智能灯具",
                ionic:require('../../../static/image/index/raw_1535510729.png')
              },
              data:{
                title:"数据统计分析功能模块",
                ionic:require('../../../static/image/index/raw_1535594607.png')
              }
            }
          }
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
  .yc-smart-space-content{
    .smart-space-content-top-image{
      width: 100%;
      height: 535px;
      background: url('../../../static/image/index/zhihuikongjian.jpg') no-repeat;
      background-size: 100% 820px;
    }
    .smart-space-yc{
      margin-top: 70px;
      .smart-space-yc-title{
        .smart-space-yc-test{
          font-size: 26px;
          text-align: center;
        }
        .smart-space-yc-ionic{
          margin: 5px auto 45px auto;
          width: 65px;
          height: 10px;
          background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
          background-size: 65px 10px;
        }
      }
      .smart-space-yc-content{
        padding-bottom: 70px;
        .smart-space-yc-content-text{
          text-align: center;
          color: rgb(142, 142, 142);
        }
        @media (max-width: 992px)and(min-width:750px){
          .smart-space-yc-content-list{
            .col-md-3{
              width: 25% !important;
              display: inline-block;
              float: left;
            }
            .col-md-9{
              width: 75% !important;
              display: inline-block;
              float: left;
              .col-md-4{
                width: 50% !important;
                display: inline-block;
              }
            }
          }
        }
        .smart-space-yc-content-list{
          padding-top: 50px;
          .smart-space-yc-content-list-title{
            width: 150px;
            height: 275px;
            border: 1px solid rgb(164, 164, 164);
            margin: auto;
            .smart-space-yc-content-list-title-text{
              font-size: 20px;
              color: rgb(111, 111, 111);
              padding: 35px 0 15px 20px;
            }
            .smart-space-yc-content-list-title-underline{
              width: 150px;
              height: 2px;
              background-color: rgb(164, 164, 164);
              margin-left: 20px;
            }
            .smart-space-yc-content-list-title-describe{
              padding: 15px 0 0 20px;
              color: rgb(111, 111, 111);
              font-size: 16px;
            }
          }
          .smart-space-yc-content-list-item{
            margin: auto;
            .smart-space-yc-content-list-item-title{
              color: rgb(111, 111, 111);
              font-size: 14px;
            }
            .smart-space-yc-content-list-item-underline{
              width: 150px;
              height: 1px;
              background-color: rgb(164, 164, 164);
              margin: 25px 0 35px 0;
            }
            .smart-space-yc-content-list-item-ionic{
              width: 63px;
              height: 63px;
              margin-bottom: 70px;
              background-size: 63px 55px !important;
              opacity: 0.28;
            }
          }
        }
      }
    }
  }
</style>
