<template>
    <div class="container">
        <router-view></router-view>
        <mobile-tip></mobile-tip>  
        <div>{{count}}</div>
    </div>
</template>
<script>
import './assets/css/main.scss';
import MobileTip from './components/mobilet-tip/mobilet-tip';
export default {
    data(){
        return{
        }
    },
    computed: {
        count(){
            return this.$store.state.count;
        }
    },
    components: {
        MobileTip
    },
    mounted(){
        // this.$store.commit('increment');
        // this.$store.dispatch('incrementAsync');
    }
}
</script>
<style lang="scss">

</style>
