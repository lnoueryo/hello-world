<template>
  <div class="container">
    <div :style="ready?{transition: 'all 2.5s',opacity: 0}:''">
      <div style="position:relative">
        <img :style="ready?{transition: 'all 4s',transform: 'matrix(2.0, 2.0, 3.0, 2.0, 4.0, 5.0)'}:''" :src="require(`~/assets/images/logo_transparent.png`)" style="filter: brightness(0.5);position:absolute;max-width:200px;width:100%" alt="">
        <img :style="ready?{transition: 'all 4s',transform: 'matrix(6.0, 3.0, 4.0, 3.0, 2.0, 1.0)'}:''" :src="require(`~/assets/images/logo_transparent.png`)" style="filter: brightness(0.3);position:absolute;max-width:200px;" alt="">
        <img :style="ready?{transition: 'all 4s',transform: 'matrix(4.0, 1.0, 2.0, 4.0, 6.0, 3.0)'}:''" :src="require(`~/assets/images/logo_transparent.png`)" style="filter: brightness(0.7);max-width:200px;width:100%" alt="">
      </div>
        <img :src="require(`~/assets/images/letter_transparent.png`)" :style="ready?{transition: 'all 4s',transform: 'matrix(2.0, 2.0, 6.0, 2.0, 2.0, 1.0)'}:''" style="filter: brightness(0.7) hue-rotate(15deg) contrast(120%);max-width:600px;width:100%">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface Article {id: number, title: string, language: string, description: string, image: string, created_at: string}
interface DataType {
  blogs: Article[],
  ready: boolean
}
export default Vue.extend({
  data(): DataType {
    return {
      blogs: [],
      ready: false,
    }
  },
  watch:{
    ready:{
      handler(){
        const that = this;
        setTimeout(function(){that.$router.push({name:'home'})},2500)
      },
      immediate: false
    },
  },
  async created(){
    const session_url: string = '/blog';
    // const username: string = 'lnoueryo';
    // const password: string = 'popo0908';
    // const auth = {auth: {username: username, password: password}}
    const headers = {withCredentials: true, headers: {"Accept": "application/json", "Content-Type": "application/json"}}
    const response = await (this.$axios.$get(session_url, headers));
    this.blogs = response;
  },
  mounted(){
    let that = this;
    setTimeout(function(){that.ready=true},2000)
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
