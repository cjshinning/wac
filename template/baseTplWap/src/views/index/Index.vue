<template>
    <div class="index">
        这是首页
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../assets/js/apiUrl.js';
export default {
    data(){
        return{
        }
    },
    methods: {
        getContent(keys){
            let _this = this;
            jsonp(apiUrl.get_cont,{
                params:{
                    key: keys
                }
            }).then(res=>{
                
            })
        }
    },
    mounted(){
        this.getContent('37_index_focus_wap');
    }
}
</script>
<style lang="scss" scoped>
</style>

