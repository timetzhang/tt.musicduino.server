var request = {
    queryString:
    function (item) {
        var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"));
        return svalue ? svalue[1] : svalue;
    },

    setCookie: function (name, value, days)//两个参数，一个是cookie的名子，一个是值
    {
        var Days = days; //此 cookie 将被保存 30 天
        var exp = new Date();    //new Date("December 31, 9998");
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + decodeURIComponent(value) + ";expires= " + exp.toGMTString() + ";path=/";
    },


    getCookie: function (name)//取cookies函数        
    {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr !== null) return decodeURIComponent(arr[2]); return null;

    },

    delCookie: function (name)//删除cookie
    {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        document.cookie = name + "=" + Request.GetCookie(name) + ";expires=" + exp.toGMTString() + ";path=/";
    }
};

var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1,
            presto: u.indexOf('Presto') > -1,
            webKit: u.indexOf('AppleWebKit') > -1,
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/) && u.indexOf('QIHU') && u.indexOf('QIHU') > -1 && u.indexOf('Chrome') < 0,
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            iPad: u.indexOf('iPad') > -1,
            webApp: u.indexOf('Safari') == -1,
            ua: u
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}