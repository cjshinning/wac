<template>
    <header class="nav-head">
        <div class="left">
            <a href="javascript:;" class="icon">
                <img :src="config.iconSrc" width="100%" alt="">
            </a>
            <div class="info">
                <h2>{{ config.title }}</h2>
                <p>{{ config.desc }}</p>
            </div>
        </div>
        <div class="right">
            <a href="javascript:;" class="btn-subscribe" @click.prevent="showPublic">关注我们</a>
            <a :href="config.reserveLink" class="btn-reserve">{{config.reserveText}}</a>
        </div>
    </header>
</template>
<script>
export default {
    props: ['config'],
    methods: {
        showPublic(){
            let content = `
                <div class="public-code">
                    <img src="${this.config.publicSrc}" width="100%"/>
                </div>
            `;
            this.$modal({
                width: 508,
                title: '公众号',
                content
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.nav-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 750px;
    height: 95px;
    padding: 0 10px 0 136px;
    background: rgba(255,255,255,0.9);
    z-index: 999;
    .left{
        display: flex;
        .icon{
            position: absolute;
            left: 7px;
            top: 9px;
            width: 114px;
            height: 114px;
        }
        .info{
            h2{
                height: 40px;
                line-height: 40px;
                font-size: 32px;
                color: #141414;
            }
            p{
                height: 32px;
                line-height: 32px;
                font-size: 24px;
                color: #626161;
            }
        }
    }
    .right{
        display: flex;
        a{
            display: block;
            width: 149px;
            height: 63px;
            line-height: 63px;
            margin-right: 10px;
            border-radius: 10px;
            text-align: center;
            font-size: 22px;
            color: #f5f5f5;
            &.btn-subscribe{
                background: #cc5e36;
            }
            &.btn-reserve{
                background: #3970c6;
            }
        }
    }
}
</style>

