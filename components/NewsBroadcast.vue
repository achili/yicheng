<template>
  <div class="time-container">
    <div class="bullet left" @click="downRight">
      <div class="information-broadcast-left"></div>
      <div class="information-broadcast-left-d"></div>
    </div>
    <div class="time-item" ref="scroll" @touchstart.stop="touchstarts" @touchmove.stop="touchmoves">
      <div class="time-list-container" :style="'left:'+ depressionLeft +'px;'">
        <div class="time-list list-short"  v-for="item in DateList" :key="item.index">
          <div class="time-news-img" :style="'background: url(\''+ item.img +'\') no-repeat;'"></div>
          <div class="text-content">
            <div class="time-news-title" @click="open(item.url)">{{item.title}}</div>
            <div class="time-news-text">{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bullet right" @click="downLeft">
      <div class="information-broadcast-right"></div>
      <div class="information-broadcast-right-d"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NewsBroadcast",
      data(){
        return{
          nowIndex: 0,
          isShow: true,
          depressionLeft:0 //1465 0
        }
      },
      props:{
        layoutType:{
          type:String
        },
        DateList:{

        },
        inv:{//轮播间隔时间
          type:Number,
          default:1000
        }
      },
      computed: {

      },
      methods: {
        downLeft(){
          if(this.depressionLeft > 0){
            this.depressionLeft -= 365;
          }
        },
        downRight(){
          if(this.depressionLeft < 0){
            this.depressionLeft += 365;
          }
        },
        touchstarts(){

        },
        touchmoves(){

        },
        open(url){
          window.open(url)
        }
      },
      mounted () {

      }
    }
</script>
<style lang="less" rel="stylesheet/less">
  .time-container{
    width: 100%;
    height: 390px;
    .bullet{
      width: 40px;
      height: 390px;
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
      line-height: 390px;
      font-size: 22px;
      float: left;
      .information-broadcast-left-d{
        display: none;
        width: 40px;
        height: 50px;
        margin-top: 170px;
        background: url("../static/image/index/leftblue.png") no-repeat;
        -webkit-background-size: 40px 50px !important;
        background-size: 40px 50px !important;
        transform: rotate(0deg);
      }
      .information-broadcast-left{
        width: 40px;
        height: 50px;
        margin-top: 170px;
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
      line-height: 390px;
      font-size: 22px;
      float: right;
      .information-broadcast-right-d{
        display: none;
        width: 40px;
        height: 50px;
        margin-top: 170px;
        background: url("../static/image/index/leftblue.png") no-repeat;
        -webkit-background-size: 40px 50px !important;
        background-size: 40px 50px !important;
        transform: rotate(180deg);
      }
      .information-broadcast-right{
        width: 40px;
        height: 50px;
        margin-top: 170px;
        background: url("../static/image/index/left.png") no-repeat;
        -webkit-background-size: 40px 50px !important;
        background-size: 40px 50px !important;
        transform: rotate(180deg);
      }
    }
    .slider-list{
      left: 0;
      top: 0;
      height: 50px;
      background-color:#ffdc35;
      opacity: .5;
      position: absolute;
      .left-slider{
        height: 50px;
      }
      .right-slider{
        width: 20px;
        height:50px;
        background-color:#FF9224;
        opacity: .6;
        display: inline-block;
      }
    }
    .time-item{
      width: 1090px;
      height: 390px;
      overflow: hidden;
      display: inline-block;
      margin: auto;
      .time-list-container{
        position: relative;
        height: 390px;
        width: 2570px;
        transition: all .4s cubic-bezier(.4,0,.2,1);
        .time-list{
          display: inline-block;
          width: 335px;
        }
        .list-short{
          height: 390px;
          margin: 0 15px;
          .time-news-img{
            height: 250px;
            -webkit-background-size: 100% 250px !important;
            background-size: 100% 250px !important;
          }
          .text-content{
            padding: 20px 10px 0 10px;
            width: 100%;
            height: 195px;
            box-shadow: rgba(74, 174, 248, 0.05) 1px 1px 2px 2px;
            background-color: rgb(255, 255, 255);
            .time-news-title{
              cursor: pointer;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              color: rgb(111, 111, 111);
              font-size: 14px;
              margin:0 0 15px 0;
            }
            .time-news-text{
              color: rgb(156, 156, 156);
              font-size: 12px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 4;
              overflow: hidden;
            }
          }
        }
      }
    }
    @media (max-width: 992px)and(min-width:750px){
      .time-item{
        width: 730px!important;
        float: left;
      }
      .right{
        float: left;
      }
    }
    ::-webkit-scrollbar {/*隐藏滚轮*/
      display: none;
    }
  }
</style>
