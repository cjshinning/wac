<template>
    <div class="news-paging">
        <ul>
            <li>
                <span @click="firstOrLast(true)">首页</span>
            </li>
            <li @click="prevOrNext(-1)">
                <span>上一页</span>
            </li>
            <li v-for="(item, index) in pages" :key="index" :class="{active: item===page.currentPage}" @click="select(item)">
                <span>{{item}}</span>
            </li>
            <li @click="prevOrNext(1)">
                <span>下一页</span>
            </li>
            <li  @click="firstOrLast(false)">
                <span>尾页</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['page'],
    data(){
        return {
            // currentPage: 20,
            // totalPages: 50
        }
    },
    computed:{
        pages(){
            const c = this.page.currentPage;
            const t = this.page.totalPages;
            if(t <= 10){
                let result = [];
                for(let i=1;i<=t;i++){
                    result.push(i);
                }
                return result;
            }
            if(c <= 5){
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, '...', t]
            }else if(c >= t - 4){
                return [1, '...', t-8, t-7, t-6, t-5, t-4,t-3, t-2, t-1, t];
            }else{
                return [1, '...', c-3, c-2, c-1, c, c+1, c+2, c+3, '...', t];
            }
        }
    },
    methods: {
        select(n){
            if(n === this.page.currentPage) return;
            if(typeof n === 'string') return;
            this.page.currentPage = n;
            this.$emit('update', this.page.currentPage);
        },
        prevOrNext(n){
            this.page.currentPage += n;
            this.page.currentPage < 1 
                ? this.page.currentPage = 1
                : this.page.currentPage > this.page.totalPages
                    ? this.page.currentPage = this.page.totalPages
                    : null;
            
            this.$emit('update', this.page.currentPage);
        },
        firstOrLast(flag){
            if(flag){
                this.page.currentPage = 1;
            }else{
                this.page.currentPage = this.page.totalPages;
            }
            this.$emit('update', this.page.currentPage);
        }
    }
}
</script>
<style lang="scss" scoped>
.news-paging{
    text-align: center;
    margin-bottom: 40px;
    li{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        margin: 3px;
        padding: 0 12px;
        border-radius: 15px;
        background: #4488f7;
        font-size: 12px;
        color: #fff;
        cursor: pointer;
        &.active{
            background: #e57942;
            color: #fff;
        }
    }
}
</style>

