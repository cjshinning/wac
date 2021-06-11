/**
 * 公用方法模块
 */
export default {
    /**
     * @param {string} url 
     */
    async loadScript(url){
        return new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
            script.onload = function(){
                resolve();
            }
            script.onerror = function() {
                reject(`加载${url}失败`);
            }
        })
    }
}