<template>
    <div class="roles">
        <div class="role-cont">
            <ul>
                <li v-for="(item,index) in roles.pannels" :key="index" :class="{active: roles.current===index}">
                    <img v-lazy="item" alt="">
                </li>
            </ul>
        </div>
        <div class="role-tab">
            <ul>
                <li v-for="(item,index) in roles.tabs" :key="index" :class="{active: roles.current===index}" @click="roles.current=index" @mouseenter="roles.current=index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['roles'],
    data(){
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
@keyframes rolling{
    from {
        transform: translateX(10px);
    }
    to{
        transform: translateX(0px);
    }
}
.roles{
    position: relative;
    width: 1200px;
    height: 1076px;
}
.role-tab{
    position: absolute;
    left: 0px;
    top: 112px;
    width: 316px;
    height: 931px;
    // background: url('./img/role-tab-bg.png') no-repeat;
    @include sprite($role-tab-bg);
    ul{
        @for $i from 1 through 4 {
            li:nth-child(#{$i}){
                position: absolute;
                width: 100px;
                height: 85px;
                // background: url('./img/role-tab-#{$i}.png') no-repeat;
                cursor: pointer;
                text-indent: -9999px;
                &::before{
                    display: block;
                    position: absolute;
                    top: 50%;
                    margin-top: -5.5px;
                    content: '';
                    width: 11px;
                    height: 11px;
                    // background: url('./img/icon-circle.png') no-repeat;
                    @include sprite($icon-circle);
                }
                &.active{
                    width: 127px;
                    height: 144px;
                    // background: url('./img/role-tab-h#{$i}.png') no-repeat;
                    &::before{
                        display: block;
                        position: absolute;
                        top: 50%;
                        margin-top: -5.5px;
                        content: '';
                        width: 22px;
                        height: 22px;
                        // background: url('./img/icon-circle-h.png') no-repeat;
                        @include sprite($icon-circle-h);
                        border-radius: 6px;
                    }
                }
            }
        }

        li:nth-child(1){
            left: 80px;
            top: 225px;
            @include sprite($role-tab-1);
            &::before{
                left: -37px;
            }
            &.active{
                left: 78px;
                top: 196px;
                @include sprite($role-tab-h1);
                &::before{
                    left: -42px;
                }
            }
        }
        li:nth-child(2){
            left: 30px;
            top: 357px;
            @include sprite($role-tab-2);
            &::before{
                left: -26px;
            }
            &.active{
                left: 29px;
                top: 328px;
                @include sprite($role-tab-h2);
                &::before{
                    left: -31px;
                }
            }
        }
        li:nth-child(3){
            left: 30px;
            top: 499px;
            @include sprite($role-tab-3);
            &::before{
                left: -29px;
            }
            &.active{
                left: 29px;
                top: 470px;
                @include sprite($role-tab-h3);
                &::before{
                    left: -32px;
                }
            }
        }
        li:nth-child(4){
            left: 64px;
            top: 642px;
            @include sprite($role-tab-4);
            &::before{
                left: -27px;
            }
            &.active{
                left: 63px;
                top: 612px;
                @include sprite($role-tab-h4);
                &::before{
                    left: -29px;
                }
            }
        }
    }
}
.role-cont{
    position: relative;
    width: 1200px;
    height: 1076px;
    ul{
        li{
            position: absolute;
            opacity: 0;
            // transform: translateX(10px);
            // transition: all .5s ease-in;
            &.active{
                animation: rolling 0.5s linear both;
                opacity: 1;
                // transform: translateX(0px);
            }
        }
        li:nth-child(1){
            left: 90px;
            top: 199px;
        }
        li:nth-child(2){
            left: 60px;
            top: 199px;
        }
        li:nth-child(3){
            left: 51px;
            top: 242px;
        }
        li:nth-child(4){
            left: 93px;
            top: 245px;
        }
    }
}
</style>


