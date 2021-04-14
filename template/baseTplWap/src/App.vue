<template>
    <div class="container">
        <router-view></router-view>
        <mobile-tip></mobile-tip>  
    </div>
</template>
<script>
import './assets/css/main.scss';
import MobileTip from './components/mobileTip/MobileTip';
export default {
    data(){
        return{
        }
    },
    components: {
        MobileTip
    },
    mounted(){
    }
}
</script>
<style lang="scss">

</style>




