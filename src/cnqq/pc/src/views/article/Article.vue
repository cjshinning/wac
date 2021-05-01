<template>
    <div class="article">这是内页{{ $route.params.id }}</div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route, this.$router);
    }
}
</script>
<style lang="scss" scoped>

</style>

