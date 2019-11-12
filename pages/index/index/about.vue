<template>
  <div class="yc-about-content">
    <div class="about-content-top-image"></div>
    <div class="about-synopsis-yc">
      <div class="about-synopsis-yc-title">
        <div class="about-synopsis-yc-test">关于我们</div>
        <div class="about-synopsis-yc-ionic"></div>
      </div>
      <div class="about-synopsis-yc-content container">
        <div class="row">
          我们专注于智慧园区管理平台的建设，致力于把智慧平台系统软件与硬件带入每个众创空间、每个孵化器、每个科技园、每个产业园，从而构建万物互联的产业地产，是智慧产业园区一体化服务提供商。
          结合园区实际运营经验，我们基于园区咨询规划、智慧园区管理平台开发、智慧基础设施设备和第三方增值服务构建智慧园区一体化解决方案，可全面提升园区的竞争力，将产业园区铸成高效、便捷、智能的智慧园区。
        </div>
      </div>
    </div>
    <div class="about-advantage-yc">
      <div class="about-advantage-yc-title">
        <div class="about-advantage-yc-test">我们的优势</div>
        <div class="about-advantage-yc-ionic"></div>
      </div>
      <div class="about-advantage-yc-content container">
        <div class="about-advantage-yc-list-content row">
          <div class="about-advantage-yc-list col-md-4" v-for="item in advantageList" :key="item.title">
            <div class="about-advantage-yc-item col-md-12">
              <div class="about-advantage-yc-item-title">{{item.title}}</div>
              <div class="about-advantage-yc-item-text">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-recruit-yc container">
      <div class="about-recruit-yc-title">
        <div class="about-recruit-yc-test">招聘贤才</div>
        <div class="about-recruit-yc-ionic"></div>
      </div>
      <div class="about-recruit-yc-content">
        <div class="about-recruit-yc-content-row row">
          <div class="about-recruit-yc-content-one-row">
            <div class="about-recruit-yc-content-one-row-left">
              <div class="front-end-web">
                前端开发工程师
              </div>
              <div class="front-end-requirement">
                <div>我们希望你：</div>
                <div>1、能应用HTML5开发网页，熟悉jQuery,Bootstrap以及CSS、JavaScript前端开发技术，了解WEB标准化、性能优化方法，了解可用性、可访问性和安全性。</div>
                <div>2、对前端框架Angular,React,Vue熟悉者优先。</div>
                <div>3、具有良好的沟通能力和团队合作精神，有高度的责任心，具备创新能力和学习热情。</div>
              </div>
            </div>
            <div class="about-recruit-yc-content-one-row-in">
              <div class="circle"></div>
              <div class="solid"></div>
              <div class="circle"></div>
            </div>
            <div class="about-recruit-yc-content-one-row-right">
              <div class="back-end">
                后端开发工程师
              </div>
              <div class="back-end-requirement">
                <div>我们希望你：</div>
                <div>1、扎实的java编程基础，熟练使用常见编程框架和并发编程，熟悉PHP等开发语言。</div>
                <div>2、熟悉至少一种MVC框架（Struts, Spring MVC, Laveral, ThinkPHP）。</div>
                <div>3、具有良好的沟通能力和团队合作精神，有高度的责任心，具备创新能力和学习热情。</div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-recruit-yc-content-row row">
          <div class="about-recruit-yc-content-one-row">
            <div class="about-recruit-yc-content-one-row-left">
              <div class="front-end-requirement">
                <div>我们需要你：</div>
                <div>1、负责公司产品软件编程等</div>
                <div>2、负责参与产品设计、和团队成员一同探讨实现技术方案</div>
              </div>
            </div>
            <div class="about-recruit-yc-content-one-row-in">
              <div class="solid short"></div>
              <div class="circle"></div>
            </div>
            <div class="about-recruit-yc-content-one-row-right">
              <div class="back-end-requirement">
                <div>我们需要你：</div>
                <div>1、负责公司产品软件编程等</div>
                <div>2、负责参与产品设计、和团队成员一同探讨实现技术方案</div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-recruit-yc-content-row row">
          <div class="about-recruit-yc-content-one-row">
            <div class="about-recruit-yc-content-one-row-left">
              <div class="front-end-requirement">
                <div>简历投递evan.li@allready.cc</div>
              </div>
            </div>
            <div class="about-recruit-yc-content-one-row-in">
              <div class="dotted"></div>
            </div>
            <div class="about-recruit-yc-content-one-row-right">
              <div class="back-end-requirement">
                <div> 公司福利：</div>
                <div>1、每季度公司根据个人绩效发放奖金。</div>
                <div>2、每完成项目公司发放相应奖金。</div>
                <div>3、公司不定时组织团建活动。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-address-yc">
      <div class="about-address-yc-title">
        <div class="about-address-yc-test">联系地址</div>
        <div class="about-address-yc-ionic"></div>
      </div>
      <div class="about-address-yc-content container">
        <div class="about-address-yc-content-image row">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        advantageList:{
          consultation:{
            title:"咨询、规划与第三方增值服务：",
            text:"为园区开发商、运营商提供精准的前期咨询、产业规划、运营服务体系等，助力产业园区快速转型和产业升级。与工商服务、酒店餐饮、健身娱乐等各类第三方服务机构建立合作，提供优惠增值服务。"
          },
          implementation:{
            title:"智慧园区管理平台定制开发与实施：",
            text:"智慧园区信息化建设，深谙园区运营之道，强大的业务与资源整合能力，定制化、模块化的开发方式，针对性更强，从而快速提升园区运营效率，节省人力资源支出。"
          },
          service:{
            title:"智慧社区/园区软硬件一体化服务：",
            text:"强大的基于智能硬件的开发能力，智能硬件研发、开发和测试经验丰富。"
          }
        }
      }
    },
    components:{

    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .yc-about-content{
    .about-content-top-image{
      width: 100%;
      height: 535px;
      background: url('../../../static/image/index/about.jpg') no-repeat;
      background-size: cover !important;
    }
    .about-synopsis-yc{
      padding: 70px 0;
      .about-synopsis-yc-title{
        .about-synopsis-yc-test{
          font-size: 26px;
          text-align: center;
        }
        .about-synopsis-yc-ionic{
          margin: 5px auto 45px auto;
          width: 65px;
          height: 10px;
          background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
          background-size: 65px 10px;
        }
      }
      .about-synopsis-yc-content{
        text-align: center;
        color: rgb(142, 142, 142);
        line-height: 30px;
      }
    }
    .about-advantage-yc{
      padding: 70px 0;
      background-color: rgba(28, 119, 255, 0.03);
      .about-advantage-yc-title{
        .about-advantage-yc-test{
          font-size: 26px;
          text-align: center;
        }
        .about-advantage-yc-ionic{
          margin: 5px auto 45px auto;
          width: 65px;
          height: 10px;
          background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
          background-size: 65px 10px;
        }
      }
      @media (max-width: 992px)and(min-width:750px){
        .about-advantage-yc-content{
          .about-advantage-yc-item{
            margin-bottom: 30px;
            .about-advantage-yc-item-title{
              padding-top: 30px;
            }
            .about-advantage-yc-item-text{
              text-align: center;
            }
          }
        }
      }
      .about-advantage-yc-content{
        .about-advantage-yc-list-content{
          .about-advantage-yc-list{
            .about-advantage-yc-item{
              background: #fff;
              height: 213px;
              line-height: 20px;
              .about-advantage-yc-item-title{
                color: rgb(111, 111, 111);
                font-size: 14px;
                margin-top: 30px;
                text-align: center;
              }
              .about-advantage-yc-item-text{
                color: rgb(189, 189, 189);
                font-size: 12px;
                padding:20px 20px ;
              }
            }
          }
        }
      }
    }
    .about-recruit-yc{
      padding: 70px 0;
      .about-recruit-yc-title{
        .about-recruit-yc-test{
          font-size: 26px;
          text-align: center;
        }
        .about-recruit-yc-ionic{
          margin: 5px auto 45px auto;
          width: 65px;
          height: 10px;
          background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
          background-size: 65px 10px;
        }
      }
      .about-recruit-yc-content{
        .about-recruit-yc-content-row{
          .about-recruit-yc-content-one-row{
            .about-recruit-yc-content-one-row-left{
              width: 48%;
              float: left;
              .front-end-web{
                float: right;
                width: 167px;
                height: 32px;
                border-radius: 5px;
                font-size: 14px;
                border: 1px solid #b0b0b0;
                text-align: center;
                line-height: 30px;
              }
              .front-end-requirement{
                padding-top: 10px;
                float: right;
                text-align: right;
                color: rgb(189, 189, 189);
                font-size: 12px;
                line-height: 22px;
              }
            }
            .about-recruit-yc-content-one-row-in{
              float: left;
              width: 4%;
              padding-left: 1.5%;
              .circle{
                width: 10px;
                height: 10px;
                background-color: transparent;
                border: 1px solid rgb(74, 174, 248);
                border-radius: 50%;
              }
              .solid{
                height: 130px;
                width: 1px;
                background: rgb(74, 174, 248);
                margin-left: 4px;
              }
              .short{
                height: 110px;
              }
              .dotted{
                height: 110px;
                width: 1px;
                border-left:1px dotted  rgb(74, 174, 248);
                margin-left: 5px;
              }
            }
            .about-recruit-yc-content-one-row-right{
              width: 48%;
              float: right;
              .back-end{
                float: left;
                width: 167px;
                height: 32px;
                border-radius: 5px;
                font-size: 14px;
                border: 1px solid #b0b0b0;
                text-align: center;
                line-height: 30px;
              }
              .back-end-requirement{
                padding-top: 10px;
                float: left;
                text-align: left;
                color: rgb(189, 189, 189);
                font-size: 12px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
    .about-address-yc{
      padding: 70px 0;
      background-color: rgba(28, 119, 255, 0.03);
      .about-address-yc-title{
        .about-address-yc-test{
          font-size: 26px;
          text-align: center;
        }
        .about-address-yc-ionic{
          margin: 5px auto 45px auto;
          width: 65px;
          height: 10px;
          background: url("../../../static/image/index/raw_1534752531.png") no-repeat;
          background-size: 65px 10px;
        }
      }
      .about-address-yc-content{
        .about-address-yc-content-image{
          height: 225px;
          background: url("../../../static/image/index/raw_1534916516.png") center center no-repeat;
        }
      }
    }
  }
</style>

