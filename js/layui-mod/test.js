layui.define(['jquery', 'layer', "formSelects"], function(exports) { //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
    var obj = {
        hello: function(str) {
            alert('Hello ' + (str || 'mymod'));
        }
    };

    //输出test接口
    exports('mymod', obj);
});