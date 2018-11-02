var localport = ":8000";//本地端口
var localhost = "http://192.168.10.216" + localport;//本地
var pathUrl = "http://192.168.10.201:80/storage-web/"; //?username=admin&password=123456
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
var preEntrygetByOrderno = pathUrl + "order/warehousing/getByOrderno?ish=1";//预入库单详情 ish:获取单号所有信息
var preEntryexamineStock = pathUrl + "order/warehousing/examineStock";//预入库单审核为库存
var entryHistory = preEntry + "?ishistory=1";//入库记录

var outTreasury = pathUrl + "order/outtreasury/list";//出库
var outTreasuryAdd = pathUrl + "order/outtreasury/add";//增加出货申请
var outHistory = outTreasury + "?ishistory=1";//出库记录
var outHistoryOrderno = pathUrl + "order/outtreasury/getByOrderno?ish=1";//出库详情 ish:获取单号所有信息
// 用户管理
var userList = pathUrl + "sys/list";//用户列表
var userAdd = pathUrl + "sys/add";//添加用户
