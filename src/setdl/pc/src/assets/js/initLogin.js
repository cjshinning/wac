var game = new SQ.Game({
    $log: $("#log"),
    $loginFrame: $("#loginframe"),
    gConfig: g_config,
    top: !!$("#gs-top").length,
    logedTpl: g_config.page !== "serverlist" ?
        '<div class="loged"><div class="loged-panel"><ul><li>您好，<a href="//my.37.com/user/" class="loged-highlight">{$third_ico}{$username}</a></li><li> <a target="_blank" href="//my.37.com/user/userprotect.php">完善密保资料</a></li><li>{$text}</li><li><a class="loged-highlight" href="{$serverurl}" {$serverblank}>{$servername}</a></li><li class="loged-usercenter f-ar"><a target="_blank" href="//my.37.com/user/">用户中心</a><a href="javascript:void(0);" id="logout">注销</a></li></ul></div></div>'
        : '<div class="s-loged"><div class="loged-panel"><ul><li>您好，<a href="//my.37.com/user/">{$third_ico}{$username}</a></li><li><a target="_blank" href="//my.37.com/user/userprotect.php">完善密保资料</a></li><li>登录时间：<span>{$date}</span></li><li>{$text}</li><li><a target="_blank" href="//my.37.com/user/">用户中心</a>&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);" id="logout">注销</a></li><li><a class="s-loged-highlight" href="{$serverurl}" {$serverblank}>{$servername}</a></li></ul></div></div>'
});