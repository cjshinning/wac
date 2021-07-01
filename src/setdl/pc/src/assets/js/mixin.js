
const mixin = {
    methods: {
        showWaiting(link){
            if(!link){
                this.$modal({
                    width: 508,
                    height: 200,
                    content: '敬请期待'
                });
            }else{
                window.open(link);
            }
        }
    }
}

export default mixin;