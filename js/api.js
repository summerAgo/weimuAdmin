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
var getOrdernoDetails =  pathUrl + "order/outtreasury/getOrdernoDetails" //库存中查询货物 （仓库：depotid 货权人：ownerid）

var outTreasuryAdd = pathUrl + "order/outtreasury/add";//增加出货申请
var outHistory = outTreasury + "?ishistory=1";//出库记录
var outHistoryOrderno = pathUrl + "order/outtreasury/getByOrderno?ish=1";//出库详情 ish:获取单号所有信息
var outRemove = pathUrl + "order/outtreasury/remove";//出货申请详情商品移除
var outStock = pathUrl + "order/outtreasury/outStock";//审核通过出库
var outTreasuryDelete = pathUrl + "order/outtreasury/delete";//出库删除
var outTreasury = pathUrl + "order/outtreasury/list";//出库列表
// 仓库管理
var depotList = pathUrl + "basics/depot/list";//仓库列表
var depotAdd = pathUrl + "basics/depot/add";//添加仓库
var depotUpdate = pathUrl + "basics/depot/update";//修改仓库
var depotDel = pathUrl + "basics/depot/delete";//删除仓库

var positionList = pathUrl + "basics/position/list";//库位列表
var positionAdd = pathUrl + "basics/position/add";//添加库位
var positionUpdate = pathUrl + "basics/position/update";//修改库位
var positionDel = pathUrl + "basics/position/delete";//删除库位
// 用户管理
var userList = pathUrl + "sys/list";//用户列表
var userAdd = pathUrl + "sys/add";//添加用户
var userUpdate = pathUrl + "sys/update";//修改用户
var userDel = pathUrl + "sys/deleteMany";//删除用户
var userPas = pathUrl + "sys/resetPassword";//重置密码
var userExit = pathUrl + "sys/exit";//退出登陆
//角色
var roleList = pathUrl + "sys/role/list";//角色列表
var roleAdd = pathUrl + "sys/role/add";//添加角色
var roleUpdate = pathUrl + "sys/role/update";//修改角色
var roleDel = pathUrl + "sys/role/deleteMany";//删除角色
var roleAuthority = pathUrl + "sys/role/setAuthority";//设置角色对应菜单(roleid 角色id        menuId[]菜单数组)
//菜单
var menuList = pathUrl + "sys/menu/list";//菜单列表
var menuAdd = pathUrl + "sys/menu/add";//添加菜单
var menuUpdate = pathUrl + "sys/menu/update";//修改菜单
var menuDel = pathUrl + "sys/menu/deleteMany";//删除菜单
var menuAuthority = pathUrl + "sys/menu/setAuthority";//设置菜单对应按钮(menuid 菜单id        butId[]按钮数组)
var menuAll = pathUrl + "sys/menu/droplist";//查询所有
//按钮
var buttonList = pathUrl + "sys/button/list";//按钮列表
var buttonAdd = pathUrl + "sys/button/add";//添加按钮
var buttonUpdate = pathUrl + "sys/button/update";//修改按钮
var buttonDel = pathUrl + "sys/button/deleteMany";//删除按钮
//下拉列表
var ownerDropdown = pathUrl + "user/owner/dropdown";//货权人下拉
var depotDropdown =  pathUrl + "basics/depot/dropdown";//仓库下拉： 货权人id(ownerid)
var positionDropdown = pathUrl + "basics/position/dropdown";//库位列表 depotid：根据仓库ID返回
//系统基础信息功能
var basicsInfoAdd = pathUrl + "basics/info/add"; 
var basicsInfoDelete = pathUrl + "basics/info/delete"; 
var basicsInfoUpdate = pathUrl + "basics/info/update"; 
var basicsInfoList = pathUrl + "basics/info/list"; //查询
var basicsInfogetCodeList = pathUrl + "basics/info/getCodeList"; //根据code查询接口
var basicsInfocode = pathUrl + "basics/info/isSelectByCode";//判断code是否存在

//用户分类
var listInstitution = pathUrl +"basics/institution/list";//查询分类
var addInstitution = pathUrl +"basics/institution/add";//添加分类
var updInstitution = pathUrl +"basics/institution/update";//修改分类
var delInstitution = pathUrl +"basics/institution/deleteMany";//查询分类 