<template>
    <div class="information-broadcast">
      <div class="bullet left" @click="downRight">
        <div class="information-broadcast-left"></div>
        <div class="information-broadcast-left-d"></div>
      </div>
      <div class="slide">
        <transition-group tag="div" class="list-item-content" name="item" :style="'left:'+ depressionLeft +'px;'" v-if="layoutType === 'Partner'">
          <div class="list-item" v-for="(item,index) in DateList" :key="index">
            <div class="item-foreach" v-for="(ins,index) in item" :key="index">
              <div class="item-foreach-list">{{ins.name}}</div>
            </div>
          </div>
        </transition-group>
      </div>
      <div class="bullet right" @click="downLeft">
        <div class="information-broadcast-right"></div>
        <div class="information-broadcast-right-d"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "informationBroadcast",
      data(){
          return{
            timer:null,//定时器
            mark:0,//对比图片索引的变量
            depressionLeft:0
          }
      },
      props:{
        layoutType:{
          type:String
        },
        DateList:{

        }
      },
      methods:{
        downLeft(){
          if(this.depressionLeft > -360){
            this.depressionLeft -= 360;
          }
        },
        downRight(){
          if(this.depressionLeft < 0){
            this.depressionLeft += 360;
          }
        }
      },
      created () {},
      mounted(){}
    }
</script>

<style lang="less" rel="stylesheet/less">
  .information-broadcast{
    height: 210px;
    .bullet{
      width: 40px;
      height: 210px;
    }
    .left:hover {
      .information-broadcast-left-d{
        display: block;
      }
      .information-broadcast-left{
        display: none;
      }
    }
    .left{
      text-align: center;
      line-height: 210px;
      font-size: 22px;
      float: left;
      .information-broadcast-left-d{
        display: none;
        width: 40px;
        height: 50px;
        margin-top: 85px;
        background: url("../static/image/index/leftblue.png") no-repeat;
        -webkit-background-size: 40px 50px !important;
        background-size: 40px 50px !important;
        transform: rotate(0deg);
      }
      .information-broadcast-left{
        width: 40px;
        height: 50px;
        margin-top: 85px;
        background: url("../static/image/index/left.png") no-repeat;
        -webkit-background-size: 40px 50px !important;
        background-size: 40px 50px !important;
        transform: rotate(0deg);
      }
    }
    .right:hover {
      .information-broadcast-right-d{
        display: block;
      }
      .information-broadcast-right{
        display: none;
      }
    }
    .right{
      text-align: center;
      line-height: 210px;
      font-size: 22px;
      float: right;
      .information-broadcast-right-d{
        display: none;
        width: 40px;
        height: 50px;
        margin-top: 85px;
        background: url("../static/image/index/leftblue.png") no-repeat;
        -webkit-background-size: 40px 50px !important;
        background-size: 40px 50px !important;
        transform: rotate(180deg);
      }
      .information-broadcast-right{
        width: 40px;
        height: 50px;
        margin-top: 85px;
        background: url("../static/image/index/left.png") no-repeat;
        -webkit-background-size: 40px 50px !important;
        background-size: 40px 50px !important;
        transform: rotate(180deg);
      }
    }
    .slide{
      width: 1090px;
      height: 210px;
      overflow: hidden;
      display: inline-block;
      margin: auto;
      padding-left: 7px;
      .list-item-content{
        height: 255px;
        position: relative;
        top: 0;
        transition: all .4s cubic-bezier(.4,0,.2,1);
        .list-item{
          width: 1440px;
          .item-foreach{
            display: inline-block;
            margin: 15px 20px;
            .item-foreach-list{
              height: 80px;
              width: 320px;
              border-radius: 5px;
              background: #fff;
              border: 1px solid transparent;
              text-align: center;
              line-height: 80px;
              color: #b0b0b0;
            }
          }
          .margin-top-index{

          }
        }
      }
    }
    @media (max-width: 992px)and(min-width:750px){
      .slide{
        width: 730px !important;
        float: left;
      }
      .right{
        float: left!important;
      }
    }
  }
</style>
