<template>
    <div class="container">
        <!-- <common-header></common-header> -->
        <router-view></router-view>
        <common-footer></common-footer>  
    </div>
</template>
<script>
import './assets/css/main.scss';
import './assets/js/initLogin.js';
import CommonHeader from './components/common-header/common-header';
import CommonFooter from './components/common-footer/common-footer';
export default {
    data(){
        return{
            time: 0
        }
    },
    computed: {
        count(){
            return this.$store.state.count;
        }
    },
    components: {
        CommonHeader,
        CommonFooter
    },
    mounted(){
    }
}
</script>
<style lang="scss">

</style>




