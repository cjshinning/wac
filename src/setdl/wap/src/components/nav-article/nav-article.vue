<template>
    <header class="nav-article">
        <h3>{{title}}</h3>
        <router-link :to="{ path: '/' }" class="back">返回首页</router-link>
    </header>
</template>
<script>
export default {
    props: ['title'],
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
@import '../../assets/css/mixins.scss';
.nav-article{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 750px;
    height: 95px;
    padding: 0 32px;
    background: #fff;
    z-index: 999;
    h3{
        position: relative;
        padding-left: 38px;
        font-size: 30px;
        color: #141414;
        &::before{
            display: block;
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            @include sprite($ico-calendar);
        }
    }
    .back{
        position: relative;
        padding-left: 48px;
        font-size: 24px;
        color: #1a0e11;
        &::before{
            display: block;
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            @include sprite($ico-back);
        }
    }
}
</style>


