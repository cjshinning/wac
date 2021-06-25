//引入Vue
import Vue from 'vue';
//引入video组件
import videoComponent from './video-play.vue';
//返回一个扩展实例构造器
const videoConstructor = Vue.extend(videoComponent);

class VideoPlay{
    constructor(obj){
        let _this = this;
        const defaultObj = {
            videoSrc: '',
            closeCb: function(){
                _this.hide();
            }
        }
        const paramObj = Object.assign(defaultObj, obj);
        this.video = new videoConstructor({
            el: document.createElement('div'),
            data(){
                return paramObj;
            }
        })
    }
    show(){
        document.body.appendChild(this.video.$el);
    }
    hide(){
        document.body.removeChild(this.video.$el);
    }
}

function $video(obj={}){
    return new VideoPlay(obj).show();
}

export default {
    install(){
        Vue.prototype.$video = $video;
    }
}