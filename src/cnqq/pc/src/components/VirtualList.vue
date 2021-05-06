<template>
    <div class="infinite-list-container" ref="list" @scroll="scrollEvent($event)">
        <div class="infinite-list-phanto" :style="{height: listHeight + 'px'}"></div>
        <div class="infinite-list" :style="{ transform: getTransform }">
            <div class="infinite-list-item"
                v-for="item in visibleData" 
                :key="item.id"
                :style="{height: itemSize + 'px', lineHeight: itemSize + 'px'}">{{item.id}}</div>
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
            return this.listData.length * this.itemSize;
        },
        // 可显示的列表项数
        visibleCount(){
            return Math.ceil(this.screenHeight/this.itemSize);
        },
        // 偏移量对应的style
        getTransform(){
            return `translate3d(0,${this.startOffset}px,0)`;
        },
        // 获取真实显示列表数据
        visibleData(){
            return this.listData.slice(this.start, Math.min(this.end,this.listData.length));
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
        // 开始索引
        this.screenHeight = this.$el.clientHeight;
        this.start = 0
        this.end = this.start + this.visibleCount;
    },
    methods: {
        scrollEvent(){
            let scrollTop = this.$refs.list.scrollTop;
            this.start = Math.floor(scrollTop/this.itemSize);
            this.end = this.start + this.visibleCount;
            this.startOffset = scrollTop - (scrollTop % this.itemSize);
        }
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

