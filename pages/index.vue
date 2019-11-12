<template>
  <div>

    <nuxt-child/>

  </div>
</template>

<script>
  import 'assets/css/app.less'

  export default{
    data(){
      return{}
    },
    components:{

    },
    methods: {
      pushBaidu() {
        //百度自动推送
        let bp = document.createElement('script');
        let curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https'){
          bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else{
          bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        let s = document.getElementsByTagName("script")[0];
        console.log("简历请提交至:zhouyu@allready.cc");
        s.parentNode.insertBefore(bp, s);
      }
    },
    updated() {
      this.pushBaidu();
    },
    mounted() {
      this.pushBaidu();
    }
  }
</script>

