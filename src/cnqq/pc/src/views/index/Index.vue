<template>
    <div class="index">
        <virtual-list :listData="data" :itemSize="100"></virtual-list>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../assets/js/apiUrl.js';
import VirtualList from '../../components/VirtualList';

let d = [];
for(let i = 0; i < 1000; i++){
    d.push({
        id: i,
        value: i
    })
}

export default {
    data(){
        return{
            data: d
        }
    },
    components: {
        VirtualList
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
.index{
    width: 100%;
    height: 100%;
}
</style>

