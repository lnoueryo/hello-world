<template>
  <div id="wrapper" ref="wrapper" style="overflow:hidden">
    <navi v-if="nav"></navi>
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>
<script>
import Navi from '../components/Navi'
export default {
  components:{
    Navi
  },
  data() {
    return {
      nav: true,
    }
  },
  created(){
    window.addEventListener('resize', this.resizeWindow);
  },
  watch:{
    $route:{
      handler(to, from) {
        if(to.name=='index'){
          this.nav=false;
        } else {
          this.nav=true;
        }
      },
      immediate: true
    }
  },
  mounted(){
    this.resizeWindow()
  },
  methods:{
    resizeWindow(e){
      this.$refs.wrapper.style.minHeight = window.innerHeight+'px';
    },
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  
}
#wrapper {
  background: linear-gradient(#c44071, 80%, #c6899f);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
