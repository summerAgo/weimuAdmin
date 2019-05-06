window.billBaseInfo; //预入库单基本信息：仓库主-仓库名称等;
window.currData; //页面中当前选中行数据；

var unitMoney = "(RMB)";
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
Array.prototype.unique = function () {
    var result = [];
    var hash = {};
    for (var i = 0; i < this.length; i++) {
        if (!hash[this[i]]) {
            result.push(this[i]);
            hash[this[i]] = 1;
        }
    }
    return result;
};
//数组JSON去重
Array.prototype.uniqueJson = function (key) {
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
};
//数组获取索引
Array.prototype.indexGet = function (key, val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i][key] == val) return i;
    }
    return -1;
};
//数组删除项
Array.prototype.remove = function (key, val) {
    var index = this.indexGet(key, val);
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
    var data = JSON.parse(sessionStorage.getItem("buttonAuthority")); //所有页面按钮权限数据存入buttonAuthority
    var btnDom = "";
    if (data !== null) {
        var currentBtnData = data ? data[menuKey] : []; // 当前按钮数据 -- 根据当前页面key参数获得当前页面按钮数据
        // currentBtnData.sort(compare("sort"));
        if (!currentBtnData || currentBtnData.length == 0) {
            return false;
        }

        currentBtnData.sort(function (a1, b1) {
            return a1.sort - b1.sort;
        });
        for (var i = 0; i < currentBtnData.length; i++) { // 渲染按钮模块
            if (currentBtnData[i] != null) {
                btnDom += '<li class="layui-nav-item"><a href="javascript:;" class="' + currentBtnData[i].classname + '"><i class="' + currentBtnData[i].icon + '"></i>' + currentBtnData[i].bname + '</a></li>';
            }
        }
        domObj.append(btnDom);
    }
}

/**
 * @param {*} key 页面表格key
 */
function getTableOption(key) {
    var data = JSON.parse(sessionStorage.getItem("talbeAuthority")); //所有页面按钮权限数据存入talbeAuthority
    var tableOption = data[key];
    if (data == null || !key || !tableOption) {
        layer.alert("当前页面未开放表格显示权限");
        return false;
    } else {
        for (var k in tableOption) {
            tableOption[k] = JSON.parse(tableOption[k]);
            for (var i = 0; i < tableOption[k].length; i++) {
                if (tableOption[k][i]["templet"] && (/^function/.test(tableOption[k][i]["templet"]))) {
                    tableOption[k][i]["templet"] = tableOption[k][i]["templet"].replace(/return_/g, "return ");
                    tableOption[k][i]["templet"] = tableOption[k][i]["templet"].replace(/var_/g, "var ");
                    tableOption[k][i]["templet"] = tableOption[k][i]["templet"].replace(/else_/g, "else ");
                    tableOption[k][i]["templet"] = tableOption[k][i]["templet"].replace(/\<span/g, "<span ");
                    tableOption[k][i]["templet"] = new Function("return " + tableOption[k][i]["templet"])();
                }
                if (tableOption[k][i]["minWidth"]) {
                    tableOption[k][i]["minWidth"] = tableOption[k][i]["minWidth"] - 0;
                }
                if (tableOption[k][i]["width"]) {
                    tableOption[k][i]["width"] = tableOption[k][i]["width"] - 0;
                }
            }
        }
        return tableOption;
    }
}

//处理checkbox
// function checkboxHandle () {

//     console.log(dom)
// }




//冒泡排序比较器
function compare(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value2 < value1) {
            return 1;
        } else if (value2 > value1) {
            return -1;
        } else {
            return 0;
        }
    }
}

// 金额添加逗号
function formatNum(num) {
    if (num === 0) {
        return 0;
    }
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

// 登录超时函数
function goLogin() {
    layer.alert('登录超时或该用户在别处登陆，请重新登录。', function (index) {
        clearSeesion();
        window.location.href = loginPageUrl;
        layer.close(index);
    });
}

function clearSeesion() {
    delCookie("TOKEN");
    delCookie("SESSION_USER_CODE");
    sessionStorage.removeItem("roleName");
    sessionStorage.removeItem("menuAuthority");
    sessionStorage.removeItem("buttonAuthority");
}

// 车牌号小写改大写
function toUpperCase(obj) {
    obj.value = obj.value.toUpperCase()
}

/**
 * 数组JSON中的值清楚结尾.0字符
 */
function objValueMake(arr, key) {
    if (arr.length == 0) {
        return false;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key]) {
            arr[i][key] = arr[i][key].replace(/\.0$/, "");
        }
    }
    return arr;
}

/**
 * 剔除重复数组中包含其他数组的项
 */
function weedArr(arr1, arr2) {
    var newarr = [];
    if (arr1.length > 0 || arr2.length > 0) {
        for (var i = 0; i < arr1.length; i++) {
            var uuid = arr1[i]["uuid"];
            if (!iscz(uuid, arr2)) {
                newarr.push(arr1[i]);
            }
        }
    }
    return newarr;
}

function iscz(uuid, arr) {
    var f = false;
    for (var k = 0; k < arr.length; k++) {
        if (uuid == arr[k]["uuid"]) {
            f = true;
            break;
        }
    }
    return f;
}

/**
 * 验证是否为数字
 */
function isNumber(value) {
    var patrn = /^[0-9]*$/;
    if (patrn.exec(value) == null || value == "") {
        return false
    } else {
        return true
    }
}


//筛选框收缩,在layui实例之前创建实例,在table实例之后handle监听
class SlideForm {
    constructor(el, tableId, height) {
        this.el = document.querySelectorAll(el)[0] || ''
        this.tableId = tableId || ''
        this.domList = []
        this.hideList = []
        this.height = height || 103
        this.tableTopHeight
        this.domNumber = 5
        this.init()
    }
    init() {
        //设置基础样式
        this.el.classList.add('layui-flex-between')
        //集合dom子元素
        this.el.childNodes.forEach((item, index) => {
            item.tagName && this.domList.push(item)
        })
        //添加按钮
        if (this.domList.length > this.domNumber) {
            let para = document.createElement("a");
            para.className = 'slide-more'
            para.setAttribute('href', 'javascript:;')
            let node = document.createTextNode("更多");
            para.appendChild(node)
            this.el.appendChild(para);
            //集合需要隐藏的元素
            this.hideList = this.domList.splice(this.domNumber, this.domList.length - 1)
            this.hideList.forEach((item, index) => {
                item.classList.add('layui-hideDom')
            })
        }
    }
    /**
     * 
     * @param {*} table table实例
     */
    handle(table) {
        let isSlide = false;
        let $ = function (dom) {
            return document.querySelectorAll(dom)[0]
        }
        console.log(this.hideList)
        if (this.hideList.length !== 0) {
            document.getElementsByClassName('slide-more')[0].addEventListener('click', () => {
                if (isSlide) {  //收缩
                    this.hideList.forEach((item, index) => {
                        if (item.classList) {
                            item.classList.add('layui-hideDom')
                        } else {
                            item.className += `layui-hideDom`
                        }
                    })
                    this.el.classList.add('layui-flex-between')
                    document.getElementsByClassName('slide-more')[0].innerText = '更多'
                    this.tableTopHeight = (parseInt($(".table-page-header").clientHeight) + parseInt($(".table-content-title").clientHeight) + parseInt($(".content-header").clientHeight) + this.height); //内容区域所需减去的高度
                    this.resize(table)
                    isSlide = !isSlide
                } else {    //展开
                    this.hideList.forEach((item, index) => {
                        if (item.classList) {
                            item.classList.remove('layui-hideDom')
                        } else {
                            let classList = item.className.split(' ')
                            classList.splice(classList.indexOf('layui-hideDom'), 1)
                            item.className = classList
                        }
                    })
                    this.el.classList.remove('layui-flex-between')
                    document.getElementsByClassName('slide-more')[0].innerText = '收起'
                    this.tableTopHeight = (parseInt($(".table-page-header").clientHeight) + parseInt($(".table-content-title").clientHeight) + parseInt($(".content-header").clientHeight) + this.height); //内容区域所需减去的高度
                    this.resize(table)
                    isSlide = !isSlide
                }
            })
        }
    }
    resize(table) {
        table.resize(this.tableId, this.tableTopHeight)
    }
}