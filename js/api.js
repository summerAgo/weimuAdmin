var localport = ":8000";//本地端口
var localhost = "http://127.0.0.1" + localport;//本地
var pathUrl = "http://192.168.10.201:8080/storage-web/"; //?username=admin&password=123456
var loginUrl = pathUrl + "sys/login"; //登录
//基础货物公共信息
var commonBaseUrl = pathUrl + "c/goodsbasics/list"; //查询货物
// 库存管理
var ilbstockAdd = pathUrl + "lb/ilbstock/add";//增
var ilbstockDelete = pathUrl + "lb/ilbstock/delete";//删
var ilbstockUpdate = pathUrl + "lb/ilbstock/update";//改
var ilbstockList = pathUrl + "lb/ilbstock/list";//查
var ilbstockImportUrl = pathUrl + "lb/ilbstock/importExcel"; //导入
var ilbstockExportUrl = pathUrl + "lb/ilbstock/exportExcel"; //导出
var ilbstockImportTemp = pathUrl + "template/预入库导入.xlsx"; //导入模板
// 出入库
var preEntry = pathUrl + "order/warehousing/list";//预入库
var preEntryAdd = pathUrl + "order/warehousing/add";//预入库新增
var preEntryDelete = pathUrl + "order/warehousing/delete";//预入库删除
var preEntryUpdate = pathUrl + "order/warehousing/update";//预入库编辑
var preEntrygetByOrderno = pathUrl + "order/warehousing/getByOrderno";//预入库单详情
var outTreasury = pathUrl + "order/outtreasury/";//出库