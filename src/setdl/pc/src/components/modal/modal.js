/**
 * 弹窗
 */
import Vue from 'vue';
import modalComponent from './modal.vue';
const modalConstructor = Vue.extend(modalComponent);

class Modal{
    constructor(obj){
        let that = this;
        const defaultObj = {
            width: 508,
            height: 'auto',
            className: '',
            title: '温馨提示',
            content: '',
            closeCb(){
                that.hide();
            },
            buttons:[{
                text: '确定',
                callback(){
                    that.hide();
                }
            }]
        }
        const paramObj = Object.assign(defaultObj, obj);
        this.modal = new modalConstructor({
            el: document.createElement('div'),
            data(){
                return paramObj;
            },
            computed: {
                buttonCb(){
                    return this.buttons.map(button => {
                        return button.callback && button.callback.bind(that);
                    })
                }
            }
        })
    }
    show(){
        document.body.appendChild(this.modal.$el);
    }
    hide(){
        document.body.removeChild(this.modal.$el);
    }
}

function $modal(obj = {}){
    new Modal(obj).show();
}

export default {
    install(){
        Vue.prototype.$modal = $modal;
    }
};