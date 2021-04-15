<template>
    <div>
        <div class="wrapper">
            <div ref="frame" class="frame">
                <div :style="styles[index]" style="z-index:1;position:absolute;" v-for="(source, index) in sources" :key="index" @mouseover="mouseIn" @mouseleave="mouseOut">
                    <div ref="videoframe" style="position:relative;">
                        <iframe ref="video" @load="$emit('ready')" style="width:100%;" :src="source"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen v-if="video"></iframe>
                        <div class="video-filter" @click="openDialog(index)" :style="{zIndex: styles[index].zIndex}" v-if="styles.length!==0"></div>
                    </div>
                </div>
                <div ref="next" @mouseover="mouseIn" @mouseleave="mouseOut" @click="next" class="next button" v-if="arrow">
                    <svg style="position:relative;width:40px;height:40px;color:white;" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                    </svg>
                </div>
                <div ref="back" @click="back" @mouseover="mouseIn" @mouseleave="mouseOut" class="back button" v-if="arrow">
                    <svg style="position:relative;width:40px;height:40px;color:white;" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </div>
                <div v-if="delimiter&&styles" class="delimiter">
                    <div class="delimiterButton" @click="eachButton(index)" v-for="(source, index) in sources" :key="index" style="margin:0 5px">
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24" :style="{color: color(index)}">
                            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div @click="closeDialog" class="dialog" v-show="videoDialog">
                <div id="first-frame">
                    <div id="second-frame">
                        <div id="third-frame">
                            <iframe style="position:absolute;width:100%;height:100%;" :src="sources[key]"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen v-if="video"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ['sources', 'delimiter', 'arrow','video'],
    data() {
        return {
            position: 0,
            time: '',
            ready: false,
            styles: [],
            innerWidth: null,
            videoDialog: false,
            key: null,
        }
    },
    watch:{
        innerWidth(){
            this.videoSize()
            this.videoPosition()
        }
    },
    mounted(){
        window.addEventListener('resize', this.resizeWindow);
        this.resizeWindow()
        const that = this;
        this.time = setTimeout(function(){that.next()},3000);
        this.videoSize()
        this.videoPosition();
    },
    methods:{
        openDialog(index){
            this.key = index;
            this.videoDialog = true;
        },
        closeDialog(){
            this.videoDialog=false
            const that = this;
            setTimeout(function(){{that.key = null}},500)
        },
        mouseIn(){
            Object.assign(this.$refs.next.style,{opacity: 1,transition: 'all .5s'})
            Object.assign(this.$refs.back.style,{opacity: 1,transition: 'all .5s'})
        },
        mouseOut(){
            Object.assign(this.$refs.next.style,{opacity: 1,transition: 'all .5s'})
            Object.assign(this.$refs.back.style,{opacity: 1,transition: 'all .5s'})
        },
        color(i){
            const index = this.styles.findIndex((style)=>{
                return style.id === 1;
            })
            let newIndex = index-1;
            if (newIndex==-1) {
                newIndex = this.styles.length-1;
            }
            if(newIndex==i){
                return 'black';
            } else {
                return 'white'
            }
        },
        eachButton(index){
            clearTimeout(this.time);
            this.videoPosition();
            for (let i = 0; i < index; i++) {
                this.styles.unshift(this.styles[this.styles.length-1]);
                this.styles = this.styles.filter((style, i) => {
                    return i !== this.styles.length-1
                })
            }
            const that = this;
            this.time = setTimeout(function(){that.next()},3000);
        },
        resizeWindow(){
            this.innerWidth = window.innerWidth;
        },
        next(){
            clearTimeout(this.time)
            this.styles.unshift(this.styles[this.styles.length-1]);
            this.styles = this.styles.filter((style, i) => {
                return i !== this.styles.length-1
            })
            const that = this;
            this.time = setTimeout(function(){that.next()},3000);
        },
        back(){
            clearTimeout(this.time)
            this.styles.push(this.styles[0]);
            this.styles = this.styles.filter((style, i) => {
                return i !== 0;
            })
            const that = this;
            this.time = setTimeout(function(){that.next()},3000);
        },
        videoSize(){
            const overallWidth = this.$refs.frame.getBoundingClientRect().width;
            let videoFrames = this.$refs.videoframe;
            let videos = this.$refs.video;
            if (this.sources.length>=3 && this.innerWidth>=480) {
                this.$refs.frame.style.height = 7*overallWidth/16 + 'px'
                let frame = this.$refs.frame;
                frame.style.justifyContent = 'space-between';
                for (let i = 0; i < this.sources.length; i++) {
                    videoFrames[i].style.width = overallWidth/3*1.3 + 'px'
                    videoFrames[i].style.height = 'auto';
                    videos[i].style.height = 9*(overallWidth/3*1.3)/16 + 'px'
                }
            } else {
                this.$refs.frame.style.height = 9*overallWidth/16 + 'px'
                let frame = this.$refs.frame;
                frame.style.height = 9*(overallWidth)/16 + 'px';
                frame.style.paddingBottom =50 + 'px';
                frame.style.justifyContent = 'space-between';
                for (let i = 0; i < this.sources.length; i++) {
                    videoFrames[i].style.width = overallWidth*0.8 + 'px'
                    videoFrames[i].style.height = 9*(overallWidth*0.8)/16 + 'px'
                    videos[i].style.height = 9*(overallWidth*0.8)/16 + 'px'
                }
            }
        },
        videoPosition(){
            this.styles=[]
            let videoFrames = this.$refs.videoframe;
            const overallWidth = this.$refs.frame.getBoundingClientRect().width;
            const videoWidth = videoFrames[0].getBoundingClientRect().width;
            const center = (overallWidth-videoWidth*3)/2;
            if (this.sources.length>=3 && this.innerWidth>=480) {
                this.styles.push({transform: `translate(${(-videoWidth/2)+(videoWidth*1/3)}px,0px)`,transition: 'all .3s',zIndex: 2})
                this.styles.push({transform: `translate(${videoWidth+center}px,0px) scale(1.3)`,transition: 'all .3s',zIndex:3,id:1})
                this.styles.push({transform: `translate(${(overallWidth-videoWidth/2)-(videoWidth*1/3)}px,0px)`,transition: 'all .3s',zIndex: 2,})
                const plusLength = Math.round((this.sources.length-3)/2)
                const minusLength = Math.floor((this.sources.length-3)/2)
                for (let i = 0; i < plusLength; i++) {
                    this.styles.push({transform: `translate(${((overallWidth-videoWidth/2)-(videoWidth*1/3))+videoWidth}px,0}px)`,transition: 'all 1s',zIndex: 0})
                    }
                for (let i = 0; i < minusLength; i++) {
                    this.styles.push({transform: `translate(${((-videoWidth/2)+(videoWidth*1/3))*2}px,0px)`,zIndex: 0})
                }
            } else {
                this.styles.push({transform: `translate(${(overallWidth-videoWidth)/2}px,0px)`,transition: 'all 1s',opacity: 1,id: 1,zIndex: 3})
                for (let i = 0; i < this.sources.length-1; i++) {
                    this.styles.push({transform: `translate(${(overallWidth-videoWidth)/2}px,0px)`,transition: 'all 1s',opacity: 0,zIndex: 0})
                }

            }
        }
    }
}
</script>

<style scoped>
    .wrapper{
        max-width:1200px;
        margin:auto;
        position:relative;
        z-index:1;
    }
    .frame{
        display:flex;
        position:relative;
        overflow:hidden;
        height:100%;
        align-items:center;
        justify-content:space-between;
    }
    .button{
        z-index:3;
        border-radius:50%;
        background-color:#00000070;
        width:50px;
        height:50px;
        left:2%;
        display:flex;
        justify-content:center;
        align-items:center;
        transition: all 0.2s;
        cursor: pointer;
    }
    .button :active{
        opacity: 0.3;
        background-color: #00000000;
        transition: all 0.2s;
    }
    .next{
        margin-left:2%;
    }
    .back{
        margin-right:2%;
    }
    .delimiter{
        position:absolute;
        bottom:2%;
        left:0;
        right:0;
        max-width:480px;
        margin:auto;
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        color:white;
        opacity: 0.8;
        cursor: pointer;
    }
    .delimiterButton{
        transition: all .5s;
        cursor: pointer;
    }
    .delimiterButton:hover{
        opacity: 0.5;
        transition: all .5s;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .video-filter{
        position:absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
        z-index:3;
        transition: all .5s
    }
    .video-filter:hover{
        background-color: rgba(0, 0, 0, 0.600);
        transition: all .5s;
        cursor: pointer;
    }
    .dialog{
        position:fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;
        z-index:4;
        background-color:#00000095;
    }
    #first-frame{
        height:100%;
        width:100%;
        display:flex
    }
    #second-frame{
        max-width:1100px;
        margin:auto;
        position:relative;
        display:flex;
        width:100%;
    }
    #third-frame{
        padding-bottom:56.25%;
    }
</style>