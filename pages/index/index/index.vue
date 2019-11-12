<template>
    <div class="yc-index-content-content">
      <div class="index-content-top-image"></div>
      <div class="index-about-yc container">
        <div class="index-about-yc-title">
          <div class="index-about-yc-test">关于我们</div>
          <div class="index-about-yc-ionic"></div>
        </div>
        <div class="index-about-yc-describe row">
          我们专注于智慧园区管理平台的建设，致力于把智慧平台系统软件与硬件带入每个众创空间、每个孵化器、每个科技园、每个产业园，从而构建万物互联的产业地产，是智慧产业园区一体化服务提供商。
        </div>
        <div class="index-about-yc-more" @click="$router.push('/about')">more ></div>
      </div>
      <div class="index-product-solution-yc">
        <div class="index-product-solution-yc-title">
          <div class="index-product-solution-yc-test">产品与解决方案</div>
          <div class="index-product-solution-yc-ionic"></div>
        </div>
        <div class="index-product-solution-yc-flow container">
          <div class="row" style="padding-left: 5%">
              <div class="col-md-3">
                <div class="col-md-9">
                  <div class="solution-yc-flow-yuan">
                    <div class="solution-yc-flow-yuan-guihua"></div>
                  </div>
                  <div class="solution-yc-flow-test">咨询规划</div>
                </div>
                <div class="col-md-3">
                  <div class="solution-yc-flow-ionic">
                    <i class="icon  fa fa-arrow-right" style="font-size: 24px;"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="col-md-9">
                  <div class="solution-yc-flow-yuan">
                    <div class="solution-yc-flow-yuan-kaifa"></div>
                  </div>
                  <div class="solution-yc-flow-test">定制开发</div>
                </div>
                <div class="col-md-3">
                  <div class="solution-yc-flow-ionic">
                    <i class="icon  fa fa-arrow-right" style="font-size: 24px;"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="col-md-9">
                  <div class="solution-yc-flow-yuan">
                    <div class="solution-yc-flow-yuan-dazao"></div>
                  </div>
                  <div class="solution-yc-flow-test">智慧空间</div>
                </div>
                <div class="col-md-3">
                  <div class="solution-yc-flow-ionic">
                    <i class="icon  fa fa-arrow-right" style="font-size: 24px;"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="solution-yc-flow-yuan">
                  <div class="solution-yc-flow-yuan-yunying"></div>
                </div>
                <div class="solution-yc-flow-test">增值服务</div>
              </div>
          </div>
        </div>
        <div class="index-product-solution-yc-describe container">
          Allready智慧园区管理平台解决方案是通过对园区运营经验，融合了园区咨询规划、智慧园区管理平台开发、智慧基础设施设备、第三方增值服务为园区使用者提供更优质的服务体验，为园区运营者提供持续卓越运营的能力。
        </div>
      </div>
      <div class="index-new-yc">
        <div class="index-new-yc-title">
          <div class="index-new-yc-test">最新资讯</div>
          <div class="index-new-yc-ionic"></div>
        </div>
        <div class="index-new-yc-content">
            <NewsBroadcast :layoutType="'New'" :DateList="newsInformation" :inv="invTime"></NewsBroadcast>
        </div>
      </div>
      <div class="index-partner-yc">
        <div class="index-partner-yc-title">
          <div class="index-partner-yc-test">合作伙伴</div>
          <div class="index-partner-yc-ionic"></div>
        </div>
        <div class="index-partner-yc-content">
          <div class="index-partner-yc-content-content">
            <InformationBroadcast :layoutType="'Partner'" :DateList="partnerList"></InformationBroadcast>
          </div>
        </div>
      </div>
      <div class="index-contact-us-yc container">
        <div class="index-contact-us-yc-title">
          <div class="index-contact-us-yc-test">联系我们</div>
          <div class="index-contact-us-yc-ionic"></div>
        </div>
        <div class="index-contact-us-yc-content row">
          <div class="information row">
            <div class="theme col-md-4 input-content">
              <div class="ionic-content theme-ionic"></div>
              <div class="ipt-content"><input type="text" placeholder="主题" v-model="isTheme"></div>
            </div>
            <div class="name col-md-4 input-content border-left">
              <div class="ionic-content name-ionic"></div>
              <div class="ipt-content"><input type="text" placeholder="名字" v-model="isName"></div>
            </div>
            <div class="mailbox col-md-4 input-content border-left">
              <div class="ionic-content mail-ionic"></div>
              <div class="ipt-content"><input type="text" placeholder="邮箱" v-model="isMail"></div>
            </div>
          </div>
          <div class="main-body row">
            <textarea name="text" id="" cols="28" rows="8" style="resize:none;" class="main-body-text-area" v-model="isTextArea" placeholder="文本">
            </textarea>
            <div class="main-body-ionic"></div>
          </div>
            <a :href="'mailto:'+ isMail +'?subject=test&cc=sample@hotmail.com&subject='+ isTheme +'&body='+ isTextArea + isName" class="information-btn" @click="sendEmails">发送消息</a>
        </div>
      </div>
    </div>
</template>

<script>
  import InformationBroadcast from "../../../components/InformationBroadcast";
  import NewsBroadcast from "../../../components/NewsBroadcast";
    export default {
        name: "index",
      data(){
        return{
            newsInformation:{
              newsO:{
                img: require('../../../static/image/index/a61c00043d100d4399ec.jpg'),
                title:"2018 云栖大会｜一文看尽 2018 杭州·云栖大会地表最强黑科技",
                text:"9 月 19 日，2018 杭州·云栖大会正式揭开帷幕。想了解更多大咖发言、重磅发布，还有眼花缭乱的“黑科技”，快来一文读懂首日云栖。新制造是制造业和服务业的完美结合。新制造的竞争力不在于制造本身，而在于制造背后的创造思想、体验、感受和服务。阿里永远看最前沿的技术。技术把不可能变成可能，使整个社会资源高效匹配，使所有参与者的体验发生本质变化。",
                url:"https://www.toutiao.com/a6602946534461932039/"
              },
              newsT:{
                img: require('../../../static/image/index/15360401037325b03f39c70.jpg'),
                title:"深度解读智慧园区：什么是智慧园区？该如何建设智慧园区？",
                text:"产业园是指某类产业的聚集区或是科技的产业化项目，而智慧产业园则是一个城市综合体，集聚智慧信息产业，是智慧城市的产业基地，是顶尖科技成果的产学研结合基地，并且也是向各地政府和大型企业展示和示范基地。",
                url:"https://www.toutiao.com/a6597242290903712260/"
              },
              newsR:{
                img: require('../../../static/image/index/R6JV9lr7Qim106.jpg'),
                title:"浪潮智慧城市——城市运营界的“老司机”？",
                text:"“智慧城市”这个词提了很长时间，但由于云计算和大数据等技术在前几年未得到真正的深度应用，智慧城市的建设变得举步维艰。而随着BAT、华为、浪潮、平安等交相辉映地发布着各种交通大脑、各种感知大脑之际，城市的运营与建设有了更多的入口。",
                url:"https://www.toutiao.com/a6611635542012461571/"
              }
            },
            partnerList:{
              objOne:{
                "one":{
                  name:"零号湾",
                  indexer:0
                },
                "twen":{
                  name:"星桥腾飞",
                  indexer:1
                },
                "three":{
                  name:"明我信息",
                  indexer:2
                },
                "four":{
                  name:"上海地产",
                  indexer:3
                },
                "five":{
                  name:"上海交通大学",
                  indexer:4
                },
                "six":{
                  name:"同济大学",
                  indexer:5
                },
                "sixs":{
                  name:"上海设计之都",
                  indexer:6
                }
              }
            },
            isTheme:"",
            isName:"",
            isMail:"",
            isTextArea:"",
            invTime:2000
        }
      },
      components:{InformationBroadcast,NewsBroadcast},
      methods:{
        sendEmails(){

        }
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
.yc-index-content-content{
  .index-content-top-image{
    width: 100%;
    height: 635px;
    background: url('../../../static/image/index/index2.jpg') no-repeat;
    background-size: 100% 800px;
  }
  .index-about-yc{
    margin-top: 70px;
    .index-about-yc-title{
      .index-about-yc-test{
        font-size: 26px;
        text-align: center;
      }
      .index-about-yc-ionic{
        margin: 5px auto 45px auto;
        width: 65px;
        height: 10px;
        background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
        background-size: 65px 10px;
      }
    }
    .index-about-yc-describe{
      color: rgb(142, 142, 142);
      font-size: 14px;
      line-height: 30px;
      text-align: center;
    }
    .index-about-yc-more{
      cursor:pointer;
      width: 109px;
      height: 30px;
      color: rgb(74, 174, 248);
      border-radius: 5px;
      font-size: 14px;
      border: 1px solid rgb(208, 208, 208);
      text-align: center;
      margin: 20px auto 70px auto;
      line-height: 28px;
    }
  }
  .index-product-solution-yc{
    background-color: rgba(28, 119, 255, 0.03);
    .index-product-solution-yc-title{
      padding-top: 70px;
      .index-product-solution-yc-test{
        font-size: 26px;
        text-align: center;
      }
      .index-product-solution-yc-ionic{
        margin: 5px auto 45px auto;
        width: 65px;
        height: 10px;
        background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
        background-size: 65px 10px;
      }
    }
    .index-product-solution-yc-flow{
      .solution-yc-flow-yuan{
        width: 90px;
        height: 90px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin: auto;
        .solution-yc-flow-yuan-guihua{
          width: 30px;
          height: 30px;
          background: url("../../../static/image/index/raw_1534750331.png") no-repeat;
          -webkit-background-size: 30px 30px !important;
          background-size: 30px 30px !important;
          display: inline-block;
          margin: 29px;
        }
        .solution-yc-flow-yuan-kaifa{
          width: 30px;
          height: 30px;
          background: url("../../../static/image/index/raw_1534750504.png") no-repeat;
          -webkit-background-size: 30px 30px !important;
          background-size: 30px 30px !important;
          display: inline-block;
          margin: 29px;
        }
        .solution-yc-flow-yuan-dazao{
          width: 30px;
          height: 30px;
          background: url("../../../static/image/index/raw_1534751284.png") no-repeat;
          -webkit-background-size: 30px 30px !important;
          background-size: 30px 30px !important;
          display: inline-block;
          margin: 29px;
        }
        .solution-yc-flow-yuan-yunying{
          width: 30px;
          height: 30px;
          background: url("../../../static/image/index/raw_1534750596.png") no-repeat;
          -webkit-background-size: 30px 30px !important;
          background-size: 30px 30px !important;
          display: inline-block;
          margin: 29px;
        }
      }
      .solution-yc-flow-test{
        padding-top: 25px;
        color: rgb(147, 158, 168);
        font-size: 20px;
        text-align: center;
      }
      .solution-yc-flow-ionic{
        width: 24px;
        height: 12px;
      }
    }
    .index-product-solution-yc-describe{
      color: rgb(142, 142, 142);
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      padding-top: 55px;
      padding-bottom: 70px;
    }
  }
  .index-new-yc{
    background-color: #fff;
    .index-new-yc-title{
      padding-top: 70px;
      .index-new-yc-test{
        font-size: 26px;
        text-align: center;
      }
      .index-new-yc-ionic{
        margin: 5px auto 45px auto;
        width: 65px;
        height: 10px;
        background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
        background-size: 65px 10px;
      }
    }
    .index-new-yc-content{
      width: 1170px;
      height: 455px;
      margin: auto;
      padding-bottom: 70px;
    }
    @media (max-width: 992px)and(min-width:750px){
      .index-new-yc-content{
        width: 810px;
      }
    }
  }
  .index-partner-yc{
    background-color: rgba(28, 119, 255, 0.03);
    .index-partner-yc-title{
      padding-top: 70px;
      .index-partner-yc-test{
        font-size: 26px;
        text-align: center;
      }
      .index-partner-yc-ionic{
        margin: 5px auto 45px auto;
        width: 65px;
        height: 10px;
        background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
        background-size: 65px 10px;
      }
    }
    @media (max-width: 992px)and(min-width:750px){
      .index-partner-yc-content{
        width: 100% !important;
        .index-partner-yc-content-content{
          width: 810px;
          margin: auto;
        }
      }

    }
    .index-partner-yc-content{
      width: 1170px;
      margin: 40px auto 0 auto;
      padding-bottom: 70px;
      .index-partner-yc-content-content{
        height: 210px;
      }

    }
  }
  .index-contact-us-yc{
    background-color: #fff;
    .index-contact-us-yc-title{
      padding-top: 70px;
      .index-contact-us-yc-test{
        font-size: 26px;
        text-align: center;
      }
      .index-contact-us-yc-ionic{
        margin: 5px auto 45px auto;
        width: 65px;
        height: 10px;
        background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
        background-size: 65px 10px;
      }
    }
    .index-contact-us-yc-content{
      padding-bottom: 70px;
      @media (max-width: 992px)and(min-width:750px){
        .information{
          height: 200px !important;
          .border-left{
           border: none!important;
          }
        }
      }
      .information{
        height: 75px;
        border: 1px solid rgb(185, 185, 185);
        border-radius:5px;
        .input-content{
          height: 45px;
          margin-top:15px;
          .theme-ionic{
            background: url("../../../static/image/index/raw_1534819284.png") no-repeat;
            width: 23px;
            height: 23px;
            -webkit-background-size: 23px 23px !important;
            background-size: 23px 23px !important;
          }
          .name-ionic{
            background: url("../../../static/image/index/raw_1534819231.png") no-repeat;
            width: 23px;
            height: 23px;
            -webkit-background-size: 23px 23px !important;
            background-size: 23px 23px !important;
          }
          .mail-ionic{
            background: url("../../../static/image/index/raw_1534819116.png") no-repeat;
            width: 23px;
            height: 23px;
            -webkit-background-size: 23px 23px !important;
            background-size: 23px 23px !important;
          }
          .ionic-content{
            width: 22px;
            height: 23px;
            display: inline-block;
            position: relative;
            top: 12px;
          }
          .ipt-content{
            display: inline-block;
            position: relative;
            top: 5px;
            left: 15px;
            input{
              border: none;
              height: 36px;
              width: 275px;
              outline:none;
              font-size: 14px;
            }
          }
        }
        .border-left{
          border-left: 1px solid rgb(185, 185, 185);
        }
      }
      .main-body{
        .main-body-text-area{
          width: 100%;
          margin-top: 20px;
          height: 332px;
          border-radius: 5px;
          font-size: 14px;
          line-height: 30px;
          text-indent:3.5em;
          outline:none;
        }
        .main-body-ionic{
          width: 23px;
          height: 23px;
          background: url("../../../static/image/index/raw_1534819175.png") no-repeat;
          display: inline-block;
          -webkit-background-size: 23px 23px !important;
          background-size: 23px 23px !important;
          position: relative;
          left: 16px;
          top: -332px;
        }
      }
      .information-btn{
        display: block;
        text-decoration: none;
        width: 109px;
        height: 31px;
        margin: 20px auto 0 auto;
        text-align: center;
        line-height: 29px;
        border-radius: 5px;
        font-size: 14px;
        border: 1px solid rgb(208, 208, 208);
        color: rgb(74, 174, 248);
        cursor: pointer;
      }
    }
  }
}
</style>
