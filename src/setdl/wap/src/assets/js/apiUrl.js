let gameHost = 'gameapi.37.com';

export default {
    // 内容管理接口
    get_cont: `//${gameHost}/index.php?c=h5-website&a=cont&game_id=708&format=jsonp&_=1608000674629`,
    // 首页文章
    index_news: `//${gameHost}/index.php?c=h5-website&a=index&game_id=708&format=jsonp&_=1608000674629`,
    // 文章列表
    article_list: `//${gameHost}/index.php?c=h5-website&a=article_list&game_id=708&format=jsonp&_=1608000674629`,
    // 文章内容
    article_content: `//${gameHost}/index.php?c=h5-website&a=article_content&game_id=708&format=jsonp&_=1608000674629`
}