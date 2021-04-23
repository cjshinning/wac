<template>
    <div class="container">
        <router-view></router-view>
        <div>{{count}}</div>
    </div>
</template>
<script>
import './assets/css/main.scss';
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
    },
    mounted(){
        // this.$store.commit('increment');
        // this.$store.dispatch('incrementAsync');
    }
}
</script>
<style lang="scss">

</style>




