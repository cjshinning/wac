<template>
    <div class="article">
        <top-nav></top-nav>
        <div class="c-wrap"></div>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../assets/js/apiUrl.js';
import TopNav from '../../components/top-nav/top-nav';
export default {
    data(){
        return{

        }
    },
    components: {
        TopNav
    }
}
</script>
<style lang="scss" scoped>
    
</style>

