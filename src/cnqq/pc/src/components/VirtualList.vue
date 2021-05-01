<template>
    <div class="infinite-list-container" ref="list">
        <div class="infinite-list-phanto" :style="{height: listHeight + 'px'}"></div>
        <div class="infinite-list">
            <div class="infinite-list-item" :style="{height: itemSize + 'px', lineHeight: itemSize + 'px'}">1</div>
            <div class="infinite-list-item">2</div>
            <div class="infinite-list-item">3</div>
            <div class="infinite-list-item">4</div>
            <div class="infinite-list-item">5</div>
            <div class="infinite-list-item">6</div>
            <div class="infinite-list-item">7</div>
            <div class="infinite-list-item">8</div>
            <div class="infinite-list-item">9</div>
            <div class="infinite-list-item">10</div>
            <div class="infinite-list-item">11</div>
            <div class="infinite-list-item">12</div>
            <div class="infinite-list-item">13</div>
            <div class="infinite-list-item">14</div>
            <div class="infinite-list-item">15</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        // 所有列表数据
        listData: {
            type: Array,
            default: () => []
        },
        // 每项高度
        itemSize: {
            type: Number,
            default: 200
        }
    },
    computed: {
        // 列表总高度
        listHeight(){
            return this.listData.length + this.itemSize;
        },
        // 可显示的列表项数
        visibleCount(){
            return Math.ceil(this.screenHeight/this.itemSize);
        }
    },
    data(){
        return {
            screenHeight: 0,
            startOffset: 0,
            end: null
        }
    },
    mounted(){
        // console.log(this.listHeight);
        // console.log(this.$refs.list.clientHeight);
        // 开始索引
        let scrollTop = this.$refs.list.scrollTop;
        this.start = 0
        this.end = this.start + this.visibleCount;
        console.log(this.visibleCount);
    }
}
</script>
<style lang="scss" scoped>
.infinite-list-container{
    position: relative;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.infinite-list-phanto{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
}
.infinite-list{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    text-align: center;
}
.infinite-list-item{
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
    color: #555;
}
</style>

