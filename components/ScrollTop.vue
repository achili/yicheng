<template>
  <div>
    <div class="scroll-top" :class="{show:isActive}" >
      <div id="toTop" @click="toTop(step)" v-if="upDisplay">
        <div class="toBottom-svg"></div>
      </div>
      <div id="toBottom" @click="toBottom(step)" v-if="downDisplay">

      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      step:{   //此数据是控制动画快慢的
        type:Number,
        default:50
      },
      upDisplay:{ //返回顶部
        type:Boolean,
        default:true
      },
      downDisplay:{ //返回底部
        type:Boolean,
        default:true
      }
    },
    data(){
      return {
        isActive:false,
      }
    },
    methods:{
      toTop(i){
        let c;
        //参数i表示间隔的幅度大小，以此来控制速度
        document.documentElement.scrollTop-=i;
        if (document.documentElement.scrollTop>0) {
          c = setTimeout(()=>this.toTop(i),16);
        }else {
          clearTimeout(c);
        }
      },
      toBottom(i){
        let clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
        let scrollHeight=document.documentElement.scrollHeight;
        let height=scrollHeight-clientHeight; //超出窗口上界的值就是底部的scrolTop的值
        let c;
        document.documentElement.scrollTop+=i;
        if (document.documentElement.scrollTop<height) {
          c = setTimeout(()=>this.toBottom(i),16);
        }else {
          clearTimeout(c);
        }
      }
    },
    mounted(){
      let that = this;
      window.onscroll = function(){
        if (document.documentElement.scrollTop>60) {
          that.isActive = true;
        }else {
          that.isActive = false;
        }
      }
    }
  }
</script>
<style scoped>
  .scroll-top{
    position: fixed;
    right: 120px;
    bottom: 60px;
    width: 30px;
    height: 60px;
    cursor: pointer;
    display: none;
    z-index: 99999;
  }
  .scroll-top>div{
    width: 30px;
    height: 30px;
    transform: rotate(90deg);
    line-height: 30px;
    text-align: center;
    font-size: 35px;
    background-color: rgb(227, 227, 227);
    opacity: 1;
    border-radius: 5px;
    color: #fff;
  }
  .scroll-top>div:hover{
    background-color: rgba(45,45,45,1);
  }
  .toBottom-svg{
    height: 24px;
    background: url("../static/image/index/chevron-up.svg") no-repeat;
    -webkit-background-size: 24px 24px!important;
    background-size: 24px 24px!important;
    transform:rotate(-90deg);
    -ms-background-position-y: -1px;
    background-position-y: -1px;
  }
  .show{
    display: block;
  }
</style>
