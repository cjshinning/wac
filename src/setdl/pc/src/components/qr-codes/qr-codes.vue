<template>
    <div class="qr-codes">
        <dl v-for="(item,index) in qrcode.imgs" :key="index">
            <dt>
                <img v-lazy="item" width="98" height="98" alt="">
            </dt>
            <dd>
                <div class="info">
                    <p>{{qrcode.infos[index].split('\\n')[1]}}</p>
                    <p>{{qrcode.infos[index].split('\\n')[2]}}</p>
                    <h4>{{qrcode.infos[index].split('\\n')[0]}}</h4>
                </div>
                <div class="name">{{qrcode.names[index]}}</div>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props: ['qrcode'],
    data(){
        return{}
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
    .qr-codes{
        position: absolute;
        right: 0;
        top: 235px;
        width: 100%;
        overflow: hidden;
        dl{
            position: relative;
            float: right;
            width: 222px;
            margin-left: 50px;
        }
        dt{
            position: absolute;
            right: 0;
            top: 0;
            width: 98px;
            height: 98px;
            background: #000;
        }
        dd{
            .info{
                overflow: auto;
                p, h4{
                    float: left;
                    height: 142px;
                    text-align: center;
                    color: #fff;
                }
                p{
                    width: 27px;
                    line-height: 17px;
                    font-size: 16px;
                }
                h4{
                    width: 37px;
                    line-height: 26px;
                    font-size: 26px;
                }
            }
            .name{
                position: relative;
                height: 40px;
                line-height: 40px;
                padding-left: 5px;
                margin-top: 3px;
                font-size: 18px;
                color: #fff;
                &::before{
                    display: block;
                    position: absolute;
                    left: 0;
                    top: -3px;
                    content: '';
                    width: 55px;
                    height: 3px;
                    background: #fff;
                }
            }
        }
    }
</style>

