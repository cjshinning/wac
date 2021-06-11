<template>
    <div class="common-header">
        <div class="inner">
            <a href="//www.37.com/" target="_blank" title="37游戏首页" class="logo">37游戏首页</a>
            <div class="all-game">
                <span class="all-game-btn">所有游戏</span>
            </div>
            <div class="all-game-list">
                <div class="all-game-pics">
                    <ul>
                        <li>
                            <a href="#" target="_blank" title="">
                                <img src="//img2.37wanimg.com/2017/02/21143238GqsMe.jpg" width="400" height="262" alt="">
                            </a>
                            <p class="txt">37《传奇霸业》是由37游戏旗下极光工作室自主研发，并获得盛大正版授权的传奇题材ARPG网页游戏。游戏秉承传奇经典设置，力求带给玩家原汁原味的传奇体验。</p>
                        </li>
                    </ul>
                </div>
                <dl class="all-game-hot yy">
                    <dt><i></i>热门页游</dt>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业<span class="hot"></span></a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业<span class="hot"></span></a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业<span class="new"></span></a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业</a>
                    </dd>
                </dl>
                <dl class="all-game-hot sy">
                    <dt><i></i>热门手游</dt>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业<span class="hot"></span></a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业<span class="new"></span></a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank" title="">传奇霸业</a>
                    </dd>
                </dl>
                <dl class="all-game-tool">
                    <dt><i></i>游戏工具</dt>
                    <dd>
                        <a class="icon-hz" href="http://landers.37.com/gamebox/" target="_blank" title="游戏盒子">游戏盒子</a>
                    </dd>
                    <dd>
                        <a class="icon-lp" href="//lp.37.com/" target="_blank" title="游戏令牌">游戏令牌</a>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
import util from '../../assets/js/util.js';
export default {
    data(){
        return{

        }
    },
    mounted(){
        util.loadScript('//ptres.37.com/content/s_www/pt_2015_head_nav_games.js')
            .then(()=>{
                console.log(sq_content_s_www_pt_2015_head_nav_games);
            })
            .catch(err => {
                console.log(err);
            })
        
    }
}
</script>
<style lang="scss" scoped>
    .common-header{
        width: 100%;
        height: 38px;
        border-bottom: 1px solid #ececec;
        box-shadow: 0 1px 2px rgba(0,0,0,.05);
        background: #f5f5f5 url('./img/bg-header.jpg') repeat-x top center;
        .inner{
            position: relative;
            width: 1000px;
            margin: 0 auto;
        }
        .logo{
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 254px;
            height: 38px;
            background: url('./img/logo.jpg') no-repeat;
            text-indent: -9999px;
        }
        .all-game{
            position: absolute;
            right: 0;
            top: 0;
            width: 68px;
            height: 37px;
            line-height: 38px;
            padding-left: 25px;
            &::before{
                display: block;
                position: absolute;
                left: 5.5px;
                top: 13.5px;
                width: 14px;
                height: 11px;
                background: url('./img/icon-game.png') no-repeat;
                content: '';
            }
            &::after{
                display: block;
                position: absolute;
                right: 6px;
                top: 17px;
                width: 7px;
                height: 4px;
                background: url('./img/icon-arrow.png') no-repeat;
                content: '';
            }
            &:hover{
                border: 1px solid #d9d9d9;
                box-shadow:0 -3px 3px rgba(0,0,0,.2);
                background: #fff;
                &::before{
                    background: url('./img/icon-game-h.png') no-repeat;
                }
                &::after{
                    background: url('./img/icon-arrow-h.png') no-repeat;
                }
            }
        }
        .all-game-btn{
            padding-right: 15px;
            color: #6c6c6c; 
        }
        .all-game-list{
            position: absolute;
            right: 0;
            top: 38px;
            width: 819px;
            height: 262px;
            background: #fff;
            border: 1px solid #d9d9d9;
            box-shadow: 0 0 3px rgba(0,0,0,.2);
            z-index: 1;
            line-height: 30px;
        }
        .all-game-pics{
            position: absolute;
            left: 0;
            top: 0;
            width: 400px;
            height: 262px;
            overflow: hidden;
            // background: url(//img1.37wanimg.com/www/css/images/common/loading-48x48.gif) center center no-repeat;
            li{
                position: relative;
                width: 400px;
                height: 262px;
                a{
                    display: block;
                }
                .txt{
                    position: absolute;
                    left: 17px;
                    top: 130px;
                    width: 215px;
                    height: 100px;
                    line-height: 20px;
                    overflow: hidden;
                    color: #6c6c6c;
                }
            }
        }
        .all-game-hot{
            position: absolute;
            top: 0px;
            height: 262px;
            padding: 0 15px;
            font-size: 14px;
            dt{
                position: relative;
                height: 44px;
                line-height: 44px;
                padding-left: 20px;
                text-align: left;
                font-size: 14px;
                font-weight: bold;
                color: #6c6c6c;
                i{
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    margin-top: -6px;
                    width: 4px;
                    height: 12px;
                    background-color: #2b9ae7;
                }
            }
            dd{
                width: 110px;
                height: 30px;
                overflow: hidden;
                a{
                    display: inline-block;
                    position: relative;
                    overflow: hidden;
                    height: 30px;
                    padding-right: 18px;
                    color: #6c6c6c;
                    text-decoration: none;
                    span{
                        display: block;
                        position: absolute;
                        right: 0;
                        top: 10px;
                        width: 10px;
                        height: 10px;
                        font-size: 0;
                        &.hot{
                            background: url('./img/icon-hot.png') no-repeat;
                        }
                        &.new{
                            background: url('./img/icon-new.png') no-repeat;
                        }
                    }
                }
            }
        }
        .yy{
            left: 400px;
            width: 110px;
        }
        .sy{
            left: 540px;
            width: 110px;
        }
        .all-game-tool{
            position: absolute;
            left: 680px;
            top: 0;
            width: 137px;
            height: 262px;
            border-left: 1px solid #d9d9d9;
            dt{
                position: relative;
                height: 44px;
                line-height: 44px;
                padding-left: 35px;
                text-align: left;
                font-size: 14px;
                font-weight: bold;
                color: #6c6c6c;
                i{
                    display: block;
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    margin-top: -6px;
                    width: 4px;
                    height: 12px;
                    background-color: #2b9ae7;
                }
            }
            dd{
                a{
                    display: block;
                    width: 60px;
                    margin: auto;
                    text-align: center;
                    margin-top: 5px;
                    padding-top: 60px;
                    text-decoration: none;
                    color: #6c6c6c;
                    &.icon-hz{
                        background: url('./img/icon-hz.png') no-repeat;
                        line-height: 50px;
                    }
                    &.icon-lp{
                        background: url('./img/icon-lp.png') no-repeat;
                        line-height: 30px;
                    }
                }
            }
        }
    }
</style>


