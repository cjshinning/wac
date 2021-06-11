<template>
    <div class="top-nav">
        <div class="inner">
            <ul>
                <li class="nav-1">
                    <a href="#" target="_blank">官网首页<i></i></a>
                </li>
                <li class="nav-2">
                    <a href="#" target="_blank">资讯中心<i></i></a>
                </li>
                <li class="nav-3">
                    <a href="#" target="_blank">游戏特色<i></i></a>
                </li>
                <li class="nav-4">
                    <a href="#" target="_blank">客服中心<i></i></a>
                </li>
            </ul>
            <a href="#" target="_blank" class="logo"></a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
    .top-nav{
        height: 97px;
        background: url('./img/top-nav.png') no-repeat top center; 
        .inner{
            position: relative;
            width: 1200px;
            margin: 0 auto;
        }
        li{
            position: absolute;
            top: 0;
            width: 224px;
            height: 97px;
            &.nav-1{
                left: 0;
            }
            &.nav-2{
                left: 224px;
            }
            &.nav-3{
                right: 0;
            }
            &.nav-4{
                right: 224px;
            }
            a{
                display: block;
                text-align: center;
                text-decoration: none;
                line-height: 97px;
                font-size: 26px;
                color: #3c82fc;
                i{
                    display: none;
                    position: absolute;
                    left: 50%;
                    margin-left: -10px;
                    top: 97px;
                    width: 20px;
                    height: 6px;
                    background: url('./img/arrow.png') no-repeat;
                }
                &:hover{
                    background: #e57942;
                    color: #fff;
                    i{
                        display: block;
                    }
                }
            }
            &.current{
                a{
                    background: #e57942;
                    color: #fff;
                    i{
                        display: block;
                    }
                }
            }
        }
        .logo{
            display: block;
            position: absolute;
            left: 50%;
            margin-left: -104px;
            top: 0;
            width: 208px;
            height: 96px;
            background: url('./img/logo.png') no-repeat;
        }
    }
</style>

