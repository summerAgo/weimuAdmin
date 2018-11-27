window.billBaseInfo; //预入库单基本信息：仓库主-仓库名称等;
window.currData; //页面中当前选中行数据；

var unitMoney = "（RMB）";
//存cookie
function setCookie(name, value, time) {
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

/***
 * 获取头部参数
 * @param name 参数的名称
 * @returns
 */
function getTopInfo(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function getsec(str) {
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    } else if (str2 == "h") {
        return str1 * 60 * 60 * 1000;
    } else if (str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
}
//这是有设定过期时间的使用示例：
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30

//取cookie
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
//删除cookie
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
//数组去重
Array.prototype.unique = function() {
    var result = [];
    var hash = {};
    for (var i = 0; i < this.length; i++) {
        if (!hash[this[i]]) {
            result.push(this[i]);
            hash[this[i]] = 1;
        }
    }
    return result;
}
//数组JSON去重
Array.prototype.uniqueJson = function(key) {
    var result = [this[0]];
    for (var i = 1; i < this.length; i++) {
        var item = this[i];
        var repeat = false;
        for (var j = 0; j < result.length; j++) {
            if (item[key] == result[j][key]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            result.push(item);
        }
    }
    return result;
}
// //数组获取索引
Array.prototype.indexGet = function(key,val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i][key] == val) return i;
    }
    return -1;
};
//数组删除项
Array.prototype.remove = function(key,val) {
    var index = this.indexGet(key,val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
//权限按钮生成
/**
 * @param {*} domObj 按钮的目标存放dom容器
 * @param {*} menuKey 页面队友的key键
 */
function btnIsList(domObj, menuKey) {
    var data = JSON.parse(sessionStorage.getItem("buttonAuthority")); //获取按钮权限数据
    var btnDom;
    if (data !== null) {
        var currentBtnData = data ? data[menuKey] : [];
        for (var i = 0; i < currentBtnData.length; i++) {
            btnDom = '<li class="layui-nav-item"><a href="javascript:;" class="' + currentBtnData[i].classname + '"><i class="' + currentBtnData[i].icon + '"></i>' + currentBtnData[i].bname + '</a></li>';
            domObj.append(btnDom);
        }
    }
}

// 金额添加逗号
function formatNum(num) {
    if (num) {
        num = num.toString().replace(/\$|\,/g, '');
        if ('' === num || isNaN(num)) {
            return 'Not a Number ! ';
        }
        var sign = num.indexOf("-") > 0 ? '-' : '';
        var cents = num.indexOf(".") > 0 ? num.substr(num.indexOf(".")) : '';
        cents = cents.length > 1 ? cents : '';
        num = num.indexOf(".") > 0 ? num.substring(0, (num.indexOf("."))) : num;
        if ('' === cents) {
            if (num.length > 1 && '0' === num.substr(0, 1)) {
                return 'Not a Number ! ';
            }
        } else {
            if (num.length > 1 && '0' === num.substr(0, 1)) {
                return 'Not a Number ! ';
            }
        }
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        }
        return (sign + num + cents);
    }
}