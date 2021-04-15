<template>
  <div id="wrapper" ref="wrapper" style="overflow:hidden" :style="{minHeight: innerHeight}">
      <headerbar></headerbar>
      <sidebar></sidebar>
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>
<script>
import Sidebar from '../components/Sidebar';
import Headerbar from '../components/Headerbar';
export default {
  components:{
    Sidebar,
    Headerbar
  },
  data() {
    return {
      nav: true,
    }
  },
  computed:{
    innerHeight(){
      return this.$store.getters.innerHeight + 'px';
    }
  },
  created(){
    window.addEventListener('resize', this.resizeWindow);
    this.resizeWindow()
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
  methods:{
    resizeWindow(){
      this.$store.dispatch('resize', {innerWidth: window.innerWidth, innerHeight: window.innerHeight})
    },
  }
}
</script>

