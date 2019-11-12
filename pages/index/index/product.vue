<template>
    <div class="yc-product-content-content">
      <div class="product-content-top-image"></div>
      <div class="product-park-yc container">
        <div class="product-park-yc-title">
          <div class="product-park-yc-test">智慧园区管理平台</div>
          <div class="product-park-yc-ionic"></div>
        </div>
        <div class="product-park-yc-content row">
          <div class="product-park-yc-content-tab">
            <div class="product-park-yc-content-ul row">
              <div v-for="(item,index) in tabs" :key="item.index" class="col-md-4" style="text-align: center;cursor:pointer">
                <div class="product-park-yc-content-li" :class="{active:index === num}" @click="tab(index)">
                  <div :style ="'background:url(\''+ item.ionic +'\') no-repeat'" class="product-park-yc-content-li-ionic" v-if="index != num"></div>
                  <div :style ="'background:url(\''+ item.image +'\') no-repeat'" class="product-park-yc-content-li-ionic" v-if="index === num"></div>
                  <div class="product-park-yc-content-li-title">{{item.name}}</div>
                  <div :style ="'background:url(\''+ item.upImg +'\') no-repeat'" class="product-park-yc-content-li-img" :class="index === num ? 'product-park-yc-content-li-img-deg':''"></div>
                </div>
              </div>
            </div>
            <div class="product-park-yc-content-tabCon row">
              <div  v-for='(itemCon,index) in tabs' v-show=" index === num" :key="itemCon.index">
                <div v-for="ins in itemCon.object" :key="ins.name" class="product-park-yc-content-tabCon-item col-md-3">
                  <div :style ="'background:url(\''+ ins.ionic +'\') no-repeat'" class="product-park-yc-content-tabCon-item-ionic"></div>
                  <div class="product-park-yc-content-tabCon-item-text">{{ins.name}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-person-service-yc" v-if="num === 'manpower'">
        <div class="product-person-service-yc-title">
          <div class="product-person-service-yc-test">人员管理与服务</div>
          <div class="product-person-service-yc-ionic"></div>
        </div>
        <div class="product-person-service-yc-content container">
          <div class="product-person-service-yc-content-text row">
            为入驻园区内企业的工作人员提供“美食餐饮”、“人才公寓”、“协议酒店”、“电子维修”、“物业维修”、“教育培训”、“体育运动” 等12大项优惠功能服务。
          </div>
          <div class="product-person-service-yc-content-phone row">
            <div class="col-md-1"></div>
            <div class="col-md-3">
              <div class="person-service-phone-min phone-one">
                <div class="phone-top">
                  <div class="phone-top-spot"></div>
                  <div class="phone-top-microphone">
                    <div class="phone-top-microphone-spot"></div>
                    <div class="phone-top-microphone-transverse"></div>
                    <div class="phone-content">
                      <img src="../../../static/image/index/raw_1535352230.jpeg" alt="" style="width:203px;height: 362px">
                    </div>
                    <div class="phone-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="person-service-phone phone-max phone-two">
                <div class="phone-top">
                  <div class="phone-top-spot"></div>
                  <div class="phone-top-microphone">
                    <div class="phone-top-microphone-spot"></div>
                    <div class="phone-top-microphone-transverse"></div>
                    <div class="phone-content">
                      <img src="../../../static/image/index/raw_1535354539.png" alt="" style="width: 227px;height: 402px">
                    </div>
                    <div class="phone-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="person-service-phone-min phone-three">
                <div class="phone-top">
                  <div class="phone-top-spot"></div>
                  <div class="phone-top-microphone">
                    <div class="phone-top-microphone-spot"></div>
                    <div class="phone-top-microphone-transverse"></div>
                  </div>
                  <div class="phone-content">
                    <img src="../../../static/image/index/836512012918424231.png" alt="" style="width:203px;">
                  </div>
                  <div class="phone-bottom"></div>
                </div>
              </div>
            </div>
            <div class="col-md-1"></div>
          </div>
        </div>
      </div>
      <div class="product-enterprise-service-yc" v-if="num === 'enterprise'">
        <div class="product-enterprise-service-yc-title">
          <div class="product-enterprise-service-yc-test">企业管理与服务</div>
          <div class="product-enterprise-service-yc-ionic"></div>
        </div>
        <div class="product-enterprise-service-yc-content container">
          <div class="product-enterprise-service-yc-content-text row">
            涵盖园区内企业所需的空间申请、工商注册、税务财务、法务法律、知识产权、人力资源、融资对接、政策查询申报等全系列企业孵化服务。
          </div>
          <div class="product-enterprise-service-yc-content-image"></div>
          <div class="product-enterprise-service-yc-content-phone">
            <div class="enterprise-phone-max">
              <div class="phone-top-spot"></div>
              <div class="phone-top-microphone">
                <div class="phone-top-microphone-spot"></div>
                <div class="phone-top-microphone-transverse"></div>
                <div class="phone-content">
                  <img src="../../../static/image/index/raw_1535354018.png" alt="" style="width:165px;height: 293px">
                </div>
                <div class="phone-bottom"></div>
              </div>
            </div>
            <div class="enterprise-phone-min">
              <div class="phone-top-spot"></div>
              <div class="phone-top-microphone">
                <div class="phone-top-microphone-spot"></div>
                <div class="phone-top-microphone-transverse"></div>
                <div class="phone-content">
                  <img src="../../../static/image/index/raw_1535355147.png" alt="" style="width:150px;height: 266px">
                </div>
                <div class="phone-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-operate-system-yc" v-if="num === 'operate'">
        <div class="product-operate-system-yc-title">
          <div class="product-operate-system-yc-test">园区运营管理工作系统</div>
          <div class="product-operate-system-yc-ionic"></div>
        </div>
        <div class="product-operate-system-yc-content container">
          <div class="product-operate-system-yc-content-text row">
            包括园区项目与企业管理、合同管理、空间管理、财务管理、园区通知、协同办公系统、数据汇总统计与分析系统等12个园区运营管理子系统，全面提升园区整体运营与招商工作效率、降低园区运营人力成本。
          </div>
          <div class="product-operate-system-yc-content-image-one"></div>
          <div class="product-operate-system-yc-content-image-two"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "product",
      data(){
          return{
            tabs:{
              operate:{
                name:"运营管理工作系统",
                ionic:require('../../../static/image/index/raw_1535009918.png'),
                image:require('../../../static/image/index/raw_1534994937.png'),
                upImg:require('../../../static/image/index/chevron-up1.svg'),
                object:{
                  administration:{
                    ionic:require('../../../static/image/index/raw_1535003810.png'),
                    name:"项目管理、企业管理"
                  },
                  space:{
                    ionic:require('../../../static/image/index/raw_1535003610.png'),
                    name:"空间管理"
                  },
                  contract:{
                    ionic:require('../../../static/image/index/raw_1535003197.png'),
                    name:"合同签约"
                  },
                  query:{
                    ionic:require('../../../static/image/index/raw_1535003088.png'),
                    name:"园区新闻发布与查询"
                  },
                  notice:{
                    ionic:require('../../../static/image/index/raw_1535006734.png'),
                    name:"用户组管理与群通知功能"
                  },
                  coordination:{
                    ionic:require('../../../static/image/index/raw_1535008492.png'),
                    name:"协同工作平台"
                  },
                  finance:{
                    ionic:require('../../../static/image/index/raw_1535008409.png'),
                    name:"财务管理"
                  },
                  meeting:{
                    ionic:require('../../../static/image/index/raw_1535008653.png'),
                    name:"园区会务管理系统"
                  },
                  statistics:{
                    ionic:require('../../../static/image/index/raw_1535018487.png'),
                    name:"高级汇总统计分析与导出功能"
                  }
                }
              },
              enterprise:{
                name:"企业管理与服务",
                ionic:require('../../../static/image/index/raw_1534994369.png'),
                image:require('../../../static/image/index/raw_1535010041.png'),
                upImg:require('../../../static/image/index/chevron-up1.svg'),
                object:{
                  enter:{
                    name:"企业入驻申请",
                    ionic:require('../../../static/image/index/raw_1535010887.png'),
                  },
                  butt:{
                    name:"投融资对接",
                    ionic:require('../../../static/image/index/raw_1535011083.png'),
                  },
                  apply:{
                    name:"创业空间在线申请",
                    ionic:require('../../../static/image/index/raw_1535011144.png'),
                  },
                  enterprise:{
                    name:"企业服务申请与管理",
                    ionic:require('../../../static/image/index/raw_1535011244.png'),
                  },
                  policy:{
                    name:"政策发布与在线查询系统",
                    ionic:require('../../../static/image/index/raw_1535011353.png'),
                  },
                  activity:{
                    name:"创业活动",
                    ionic:require('../../../static/image/index/raw_1535011476.png'),
                  },
                  register:{
                    name:"企业注册",
                    ionic:require('../../../static/image/index/raw_1535011523.png'),
                  },
                  finance:{
                    name:"财务代理",
                    ionic:require('../../../static/image/index/raw_1535013679.png'),
                  },
                  law:{
                    name:"法律服务",
                    ionic:require('../../../static/image/index/raw_1535013887.png'),
                  },
                  knowledge:{
                    name:"知识产权",
                    ionic:require('../../../static/image/index/raw_1535013970.png'),
                  },
                  investment:{
                    name:"投资融资",
                    ionic:require('../../../static/image/index/raw_1535014056.png'),
                  },
                  parking:{
                    name:"园区停车",
                    ionic:require('../../../static/image/index/raw_1535014106.png'),
                  },
                  agent:{
                    name:"政策代理",
                    ionic:require('../../../static/image/index/raw_1535014183.png'),
                  },
                  manpower:{
                    name:"人力资源",
                    ionic:require('../../../static/image/index/raw_1535014285.png'),
                  }
                }
              },
              manpower:{
                name:"人员管理与服务",
                ionic:require('../../../static/image/index/raw_1534994493.png'),
                image:require('../../../static/image/index/raw_1535010149.png'),
                upImg:require('../../../static/image/index/chevron-up1.svg'),
                object:{
                  card:{
                    name:"创业一卡通",
                    ionic:require('../../../static/image/index/raw_1535014463.png'),
                  },
                  logistics:{
                    name:"快递物流",
                    ionic:require('../../../static/image/index/raw_1535014516.png'),
                  },
                  bazaar:{
                    name:"园区集市",
                    ionic:require('../../../static/image/index/raw_1535014705.png'),
                  },
                  hotel:{
                    name:"协议酒店",
                    ionic:require('../../../static/image/index/raw_1535014757.png'),
                  },
                  payment:{
                    name:"停车缴费",
                    ionic:require('../../../static/image/index/raw_1535014821.png'),
                  },
                  services:{
                    name:"物业服务",
                    ionic:require('../../../static/image/index/raw_1535014864.png'),
                  },
                  training:{
                    name:"教育培训",
                    ionic:require('../../../static/image/index/raw_1535014907.png'),
                  },
                  maintenance:{
                    name:"电子维修",
                    ionic:require('../../../static/image/index/raw_1535014985.png'),
                  },
                  apartment:{
                    name:"人才公寓",
                    ionic:require('../../../static/image/index/raw_1535015235.png'),
                  },
                  beverage:{
                    name:"美食餐饮",
                    ionic:require('../../../static/image/index/raw_1535015355.png'),
                  }
                }
              }
            },
            num:'operate'
          }
      },
      methods:{
          tab(index){
            this.num = index;
          }
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .yc-product-content-content{
      .product-content-top-image{
        width: 100%;
        height: 635px;
        background: url('../../../static/image/index/20180928154601.jpg') no-repeat;
        background-size: cover !important;
      }
      .product-park-yc{
        margin-top: 70px;
        .product-park-yc-title{
          .product-park-yc-test{
            font-size: 26px;
            text-align: center;
          }
          .product-park-yc-ionic{
            margin: 5px auto 45px auto;
            width: 65px;
            height: 10px;
            background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
            background-size: 65px 10px;
          }
        }
        .product-park-yc-content{
          @media (max-width: 992px)and(min-width:750px){
            .product-park-yc-content-tab{
              .product-park-yc-content-ul{
                .col-md-4{
                  width: 30% !important;
                  display: inline-block;
                  margin-left: 1.5%;
                }
              }
              .product-park-yc-content-tabCon{
                .product-park-yc-content-tabCon-item{
                  width: 30% !important;
                  display: inline-block;
                }
              }
            }
          }
          .product-park-yc-content-tab{
            .product-park-yc-content-ul{
              color: rgb(111, 111, 111);
              .active{
                color: rgb(74, 174, 248) !important;
              }
              .product-park-yc-content-li{
                width: 235px;
                border: 1px solid #d0d0d0;
                text-align: center;
                font-size: 16px;
                padding: 15px;
                border-radius: 5px;
                margin: auto;
                height: 50px;
                .product-park-yc-content-li-ionic{
                  width: 30px;
                  height: 30px;
                  float: left;
                  display: inline-block;
                  background-size: 30px 30px !important;
                  margin-top: -5px;
                }
                .product-park-yc-content-li-img{
                  display: inline-block;
                  width: 25px;
                  height: 25px;
                  -webkit-background-size: 25px 25px!important;
                  background-size: 25px 25px!important;
                }
                .product-park-yc-content-li-img-deg{
                  transform: rotate(180deg);
                }
                .product-park-yc-content-li-title{
                  display: inline-block;
                  float: left;
                  margin-left: 20px;
                }
              }
            }
            .product-park-yc-content-tabCon{
              margin-top: 40px;
              border: 1px solid rgb(208, 208, 208);
              border-radius: 5px;
              padding-bottom: 30px;
              .product-park-yc-content-tabCon-item{
                padding: 50px 0 20px 0;
                text-align: center;
                color: rgb(156, 156, 156);
                font-size: 14px;
                height: 100px;
                .product-park-yc-content-tabCon-item-ionic{
                  width: 22px;
                  height: 22px;
                  -webkit-background-size: 22px 22px !important;
                  background-size: 22px 22px !important;
                  display: inline-block;
                  position: absolute;
                }
                .product-park-yc-content-tabCon-item-text{
                  display: inline-block;
                  height: 22px;
                  margin-left: 35px;
                }
              }
            }

          }
        }
      }
      .product-person-service-yc{
        margin: 80px 0 70px 0 ;
        .product-person-service-yc-title{
          .product-person-service-yc-test{
            font-size: 26px;
            text-align: center;
          }
          .product-person-service-yc-ionic{
            margin: 5px auto 45px auto;
            width: 65px;
            height: 10px;
            background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
            background-size: 65px 10px;
          }
        }
        .product-person-service-yc-content{
          .product-person-service-yc-content-text{
            color: rgb(142, 142, 142);
            font-size: 14px;
            text-align: center;
          }
          .product-person-service-yc-content-phone{
            margin-top: 50px;
            .person-service-phone{
            width: 255px;
            height: 508px;
            box-shadow: rgba(74, 174, 248, 0.05) 1px 1px 2px 2px;
            border-radius: 20px;
            border: 1px solid #d0d0d0;
            margin:0 auto 50px auto;
            .phone-top{
              width: 100%;
              .phone-top-spot{
                width: 4px;
                height: 4px;
                background-color: rgb(185, 185, 185);
                border-radius: 50%;
                margin: 15px auto 0 auto;
                border: 1px solid #d0d0d0;
              }
              .phone-top-microphone{
                .phone-top-microphone-spot{
                  width: 4px;
                  height: 4px;
                  border-radius: 50%;
                  border: 1px solid #d0d0d0;
                  display: inline-block;
                  margin: auto;
                  position: relative;
                  left:85px;
                }
                .phone-top-microphone-transverse{
                  width: 58px;
                  height: 4px;
                  background-color: rgb(213, 213, 213);
                  border-radius: 10px;
                  border: 1px solid #d0d0d0;
                  display: inline-block;
                  position: relative;
                  left:94px;
                  top: 0;
                }
              }
              .phone-content{
                width: 229px;
                height: 404px;
                box-shadow: rgb(170, 170, 170) 0px 0px 0px 0px;
                border: 1px solid #d0d0d0;
                margin:10px auto 0 auto;
                overflow: hidden;
              }
              .phone-bottom{
                width: 31px;
                height: 31px;
                border: 1px solid #d0d0d0;
                border-radius: 50%;
                margin: 10px auto 0 auto;
              }
            }
          }
            .person-service-phone-min{
              width: 228px;
              height: 445px;
              box-shadow: rgba(74, 174, 248, 0.05) 1px 1px 2px 2px;
              border-radius: 20px;
              border: 1px solid #d0d0d0;
              margin:63px auto 50px auto;
              .phone-top{
                width: 100%;
                .phone-top-spot{
                  width: 3px;
                  height: 3px;
                  background-color: rgb(185, 185, 185);
                  border-radius: 50%;
                  margin: 8px auto 0 auto;
                  border: 1px solid #d0d0d0;
                }
                .phone-top-microphone{
                  .phone-top-microphone-spot{
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    border: 1px solid #d0d0d0;
                    display: inline-block;
                    margin: auto;
                    position: relative;
                    left:75px;
                  }
                  .phone-top-microphone-transverse{
                    width: 53px;
                    height: 3px;
                    background-color: rgb(213, 213, 213);
                    border-radius: 10px;
                    border: 1px solid #d0d0d0;
                    display: inline-block;
                    position: relative;
                    left:85px;
                    top: 0;
                  }
                }
                .phone-content{
                  width: 205px;
                  height: 364px;
                  box-shadow: rgb(170, 170, 170) 0 0 0 0;
                  border: 1px solid #d0d0d0;
                  margin:8px auto 0 auto;
                  overflow: hidden;
                }
                .phone-bottom{
                  width: 28px;
                  height: 28px;
                  border: 1px solid #d0d0d0;
                  border-radius: 50%;
                  margin: 5px auto 0 auto;
                }
              }
            }
          }
        }

      }
      .product-enterprise-service-yc{
        margin: 80px 0 70px 0 ;
        .product-enterprise-service-yc-title{
          .product-enterprise-service-yc-test{
            font-size: 26px;
            text-align: center;
          }
          .product-enterprise-service-yc-ionic{
            margin: 5px auto 45px auto;
            width: 65px;
            height: 10px;
            background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
            background-size: 65px 10px;
          }
        }
        .product-enterprise-service-yc-content{
          height: 455px;
          overflow: hidden;
          @media (max-width: 992px)and(min-width:750px){
            .product-enterprise-service-yc-content-image{
              margin-left: 0!important;
            }
            .product-enterprise-service-yc-content-phone{
              top: -390px !important;
              left: 415px !important;
            }
          }
          .product-enterprise-service-yc-content-text{
            text-align: center;
            color: rgb(142, 142, 142);
            font-size: 14px;
          }
          .product-enterprise-service-yc-content-image{
            width: 762px;
            margin-top: 50px;
            height: 383px;
            background: url("../../../static/image/index/raw_1535353593.png") center no-repeat;
            background-size: 100% 383px;
            margin-left: 130px;
          }
          .product-enterprise-service-yc-content-phone{
            width: 320px;
            height: 375px;
            position: relative;
            top: -372px;
            left: 685px;
            display: inline-block;
            .enterprise-phone-max{
              overflow: hidden;
              display: inline-block;
              width: 186px;
              height: 371px;
              border: 1px solid #b0b0b0;
              border-radius: 20px;
              background: #fff;
              z-index: 666;
              position: relative;
              .phone-top-spot{
                width: 3px;
                height: 3px;
                background-color: rgb(185, 185, 185);
                border-radius: 50%;
                margin: 8px auto 0 auto;
                border: 1px solid #b0b0b0;
              }
              .phone-top-microphone{
                .phone-top-microphone-spot{
                  width: 42px;
                  height: 3px;
                  background-color: rgb(213, 213, 213);
                  border-radius: 10px;
                  border: 1px solid #b0b0b0;
                  position: relative;
                  left:73px;
                  display: inline-block;
                }
                .phone-top-microphone-transverse{
                  width: 3px;
                  height: 3px;
                  display: inline-block;
                  background-color: rgb(185, 185, 185);
                  border-radius: 50%;
                  border: 1px solid #b0b0b0;
                  position: relative;
                  left:22px;
                }
                .phone-content{
                  width: 167px;
                  height: 295px;
                  box-shadow: rgb(170, 170, 170) 0px 0px 0px 0px;
                  border: 1px solid #b0b0b0;
                  margin: auto;
                }
                .phone-bottom{
                  width: 23px;
                  height: 23px;
                  border: 1px solid #d0d0d0;
                  border-radius: 50%;
                  margin: 10px auto 0 auto;
                }
              }
            }
            .enterprise-phone-min{
              overflow: hidden;
              display: inline-block;
              width: 169px;
              height: 336px;
              border: 1px solid #b0b0b0;
              border-radius: 20px;
              background: #fff;
              z-index: 333;
              position: relative;
              bottom: 341px;
              left:150px;
              .phone-top-spot{
                width: 3px;
                height: 3px;
                background-color: rgb(185, 185, 185);
                border-radius: 50%;
                margin: 8px auto 0 auto;
                border: 1px solid #b0b0b0;
              }
              .phone-top-microphone{
                .phone-top-microphone-spot{
                  width: 38px;
                  height: 3px;
                  background-color: rgb(213, 213, 213);
                  border-radius: 10px;
                  border: 1px solid #b0b0b0;
                  position: relative;
                  left:66px;
                  display: inline-block;
                }
                .phone-top-microphone-transverse{
                  width: 3px;
                  height: 3px;
                  display: inline-block;
                  background-color: rgb(185, 185, 185);
                  border-radius: 50%;
                  border: 1px solid #b0b0b0;
                  position: relative;
                  left:20px;
                }
                .phone-content{
                  width: 148px;
                  height: 264px;
                  box-shadow: rgb(170, 170, 170) 0px 0px 0px 0px;
                  border: 1px solid #b0b0b0;
                  margin: auto;
                }
                .phone-bottom{
                  width: 21px;
                  height: 21px;
                  border: 1px solid #d0d0d0;
                  border-radius: 50%;
                  margin: 8px auto 0 auto;
                }
              }
            }
          }
        }
      }
      .product-operate-system-yc{
        margin: 80px 0 70px 0 ;
        .product-operate-system-yc-title{
          .product-operate-system-yc-test{
            font-size: 26px;
            text-align: center;
          }
          .product-operate-system-yc-ionic{
            margin: 5px auto 45px auto;
            width: 65px;
            height: 10px;
            background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
            background-size: 65px 10px;
          }
        }
        .product-operate-system-yc-content{
          height: 555px;
          overflow: hidden;
          .product-operate-system-yc-content-text{
            text-align: center;
            color: rgb(142, 142, 142);
            font-size: 14px;

          }
          @media (max-width: 992px)and(min-width:750px){
            .product-operate-system-yc-content-image-one{
             margin-left: 0!important;
            }
            .product-operate-system-yc-content-image-two{
              right: -95px !important;
            }
          }
          .product-operate-system-yc-content-image-one{
            margin:50px 0 0 100px;
            width: 641px;
            height: 391px;
            display: inline-block;
            background: url("../../../static/image/index/raw_1535335734.png") center no-repeat;
            background-size: 100% 391px;
          }
          .product-operate-system-yc-content-image-two{
            position: relative;
            top: -325px;
            right: -355px;
            width: 641px;
            height: 391px;
            display: inline-block;
            background: url("../../../static/image/index/raw_1535349445.png") center no-repeat;
            background-size: 100% 391px;
          }
        }
      }
    }
</style>
