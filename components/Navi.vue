<template>
    <div>
        <el-row class="tac" style="width: 200px;position:fixed;z-index:2;height:100%" :style="transform">
            <el-col :span="12" style="height:100%">
                <el-menu style="width:200px;height:100%;" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Navigator One</span>
                    </template>
                    <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span>Navigator Four</span>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <div class="line"></div>
        <!-- <el-menu style="position: fixed;z-index:3;width:100%" :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <button @click="drawer=!drawer">a</button>
            <el-menu-item index="1">Processing Center</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">Workspace</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-submenu>
                </el-submenu>
            <el-menu-item index="3">Info</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
        </el-menu> -->
        <div style="width:100%;margin:auto;position:absolute;z-index:3;padding: 10px;">
        <!-- <div style="width:100%;margin:auto;background-color:white;position:absolute;z-index:3;padding: 10px;background: linear-gradient(#DA397080, 80%, #DA397080);"> -->
            <div style="max-width:850px;width:100%;margin:auto;padding:0 6%;display:flex;align-items:center">
                <img style="position:relative;z-index:2;width:100%;max-width:40px;filter: brightness(0.7) hue-rotate(15deg) contrast(120%)" :src="require('~/assets/images/logo_transparent.png')" alt="">
                <img style="position:relative;z-index:2;width:100%;max-width:200px;filter: brightness(0.7) hue-rotate(50deg) contrast(120%)" :src="require('~/assets/images/letter_transparent.png')" alt="">
            </div>
        </div>
        <div style="position:relative;">
            <div style="padding:80px 6% 30px 6%;position:relative;z-index:1;max-width:850px;margin:auto">
                <div style="padding:3% 50px;margin-bottom:2%">
                    <img :src="require('~/assets/images/logo/start-programming6.png')" alt="" style="filter: drop-shadow(2px 4px 6px black);max-width:350px;margin-bottom:3%">
                </div>
                <el-carousel :interval="6000" type="card" height="200px">
                    <el-carousel-item v-for="item in items" :key="item">
                        <h3 class="medium" style="height:100%"><div style="justify-content:center;align-items:center;display:flex;height:100%"><img :src="item" alt="" style="max-height:120px;display:flex;align-items:center"></div></h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div :style="{backgroundImage: `url(${require('~/assets/images/mv4.jpg')})`}" style="filter: hue-rotate(300deg) contrast(1.5);background-position: center;position:absolute;top:0;bottom:0;right:0;left:0;"></div>
        </div>
        <div class="VueToNuxtLogo"><div class="Triangle Triangle--two" /><div class="Triangle Triangle--one" /><div class="Triangle Triangle--three" /><div class="Triangle Triangle--four" /></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            drawer: false,
            items: [
                require('~/assets/images/logo/html.png'),
                require('~/assets/images/logo/css.png'),
                require('~/assets/images/logo/bootstrap.png'),
                require('~/assets/images/logo/js.png'),
                require('~/assets/images/logo/vue.png'),
                require('~/assets/images/logo/vuetify-logo.svg'),
                require('~/assets/images/logo/nuxt.png'),
                require('~/assets/images/logo/react.png'),
                require('~/assets/images/logo/angular.png'),
                require('~/assets/images/logo/typescript.png'),
                require('~/assets/images/logo/php.png'),
                require('~/assets/images/logo/laravel.png'),
                require('~/assets/images/logo/apache.png'),
                require('~/assets/images/logo/ruby.png'),
                require('~/assets/images/logo/python.png'),
                require('~/assets/images/logo/django.png'),
                require('~/assets/images/logo/nginx.png'),
                require('~/assets/images/logo/gunicorn.png'),
                require('~/assets/images/logo/golang.png'),
                require('~/assets/images/logo/c.png'),
                require('~/assets/images/logo/csharp.png'),
                require('~/assets/images/logo/java.png'),
                require('~/assets/images/logo/kotlin.png'),
                require('~/assets/images/logo/swift.png'),
                require('~/assets/images/logo/flutter.png'),
                require('~/assets/images/logo/mysql.png'),
                require('~/assets/images/logo/mariadb.png'),
                require('~/assets/images/logo/postgres.png'),
                require('~/assets/images/logo/aws.png'),
                require('~/assets/images/logo/gcp.png'),
                require('~/assets/images/logo/azure.png'),
                require('~/assets/images/logo/chrome.png'),
                require('~/assets/images/logo/firefox.png'),
                require('~/assets/images/logo/safari.png'),
                require('~/assets/images/logo/ie.png'),
                require('~/assets/images/logo/windows.png'),
                require('~/assets/images/logo/mac.png'),
                require('~/assets/images/logo/linux.png'),
                require('~/assets/images/logo/ubuntu.png'),
                require('~/assets/images/logo/ios.png'),
                require('~/assets/images/logo/android.png'),
            ]
        }
    },
  computed:{
    transform(){
      return this.drawer ? {transform: 'translateX(0px)', transition: 'all .3s'} : {transform: 'translateX(-200px)', transition: 'all .3s'};
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
    console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
    console.log(key, keyPath);
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }



</style>