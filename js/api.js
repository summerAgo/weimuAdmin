var localport = ":8080";//服务器端口
// var localhost = "http://119.23.68.13" + localport;//本地
// var pathUrl = "http://119.23.68.13/storage-web/"; //?username=admin&password=123456

// var localport = ":8000";//本地端口
// var localhost = "http://192.168.10.201" + localport;//本地
var pathUrl = "http://192.168.10.201:80/storage-web/"; //?username=admin&password=123456

// var localport = ":8000";//本地端口
var localhost = "http://192.168.10.110" + localport;//本地
// var pathUrl = "http://192.168.10.201:80/storage-web/"; //?username=admin&password=123456

var loginUrl = pathUrl + "sys/login"; //登录
var loginPageUrl = localhost + "/view/login/login.html"; //filter拦截到登录页面

//打印
var printinstore = localhost+"/view/print/print-in-store.html";
var printoutstore = localhost+"/view/print/print-out-store.html";


var weekInCount = pathUrl + "home/weekInCount";//本周入库统计立方
var weekOutCount = pathUrl + "home/weekOutCount";//本周出库统计立方
var weekStockCount = pathUrl + "home/weekStockCount";//本周库存统计立方

//基础货物公共信息
var commonBaseUrl = pathUrl + "c/goodsbasics/list"; //查询货物
// 库存管理
var ilbstockAdd = pathUrl + "lb/ilbstock/add";//增
var ilbstockDelete = pathUrl + "lb/ilbstock/delete";//删
var ilbstockUpdate = pathUrl + "lb/ilbstock/update";//改
var ilbstockList = pathUrl + "lb/ilbstock/list";//查
var ilbstockListAll = pathUrl + "lb/ilbstock/listAll";//查
var ilbstockSaveAbnor = pathUrl + "lb/ilbstock/saveAbnor";//异常调整修改
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
var outHistory = pathUrl + "order/outtreasury/list?ishistory=1";//出库记录
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
var userdropdown = pathUrl + "sys/dropdown";//用户下拉
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

//按钮
var buttonList = pathUrl + "sys/button/list";//按钮列表
var buttonAdd = pathUrl + "sys/button/add";//添加按钮
var buttonUpdate = pathUrl + "sys/button/update";//修改按钮
var buttonDel = pathUrl + "sys/button/deleteMany";//删除按钮

//下拉列表
var ownerDropdown = pathUrl + "user/owner/dropdown";//货权人下拉
var depotDropdown =  pathUrl + "basics/depot/dropdown";//仓库下拉： 货权人id(ownerid)
var positionDropdown = pathUrl + "basics/position/dropdown";//库位列表 depotid：根据仓库ID返回
var driverDropdown = pathUrl + "order/vehiclerecord/dropdown";//出货单司机记录


//系统基础信息功能
var basicsInfoAdd = pathUrl + "basics/info/add"; 
var basicsInfoDelete = pathUrl + "basics/info/delete"; 
var basicsInfoUpdate = pathUrl + "basics/info/update"; 
var basicsInfoList = pathUrl + "basics/info/list"; //查询
var CHDList = pathUrl + "basics/info/dropdown?instid=46"; //根据code查询接口 //产地列表
var VTSList = pathUrl + "basics/info/dropdown?instid=45"; //根据code查询接口 //品种列表
var levelsList = pathUrl + "basics/info/dropdown?instid=47"; //根据code查询接口 //等级列表
var specList = pathUrl + "basics/info/dropdown?instid=44"; //根据code查询接口 //规格列表


var basicsInfocode = pathUrl + "basics/info/isSelectByCode";//判断code是否存在

//用户分类
var listInstitution = pathUrl +"basics/institution/list";//查询分类
var addInstitution = pathUrl +"basics/institution/add";//添加分类
var updInstitution = pathUrl +"basics/institution/update";//修改分类
var delInstitution = pathUrl +"basics/institution/deleteMany";//查询分类

var userAuthority = pathUrl + "sys/setAuthority";//设置用户对应角色(userid 角色id roleid[]菜单数组)

var roledown = pathUrl + "sys/role/dropdown";//角色列表所有
var menudown = pathUrl + "sys/menu/dropdown";//菜单列表所有

//客户(货权人)
var listOwner = pathUrl +"user/owner/list";//查询客户
var addOwner = pathUrl +"user/owner/add";//添加客户
var updOwner = pathUrl +"user/owner/update";//修改客户
var delOwner = pathUrl +"user/owner/deleteMany";//删除客户
var dropOwner = pathUrl +"user/owner/dropdown";//查询客户所有
//供应商
var listSupplier = pathUrl +"basics/supplier/list";//查询
var addSupplier = pathUrl +"basics/supplier/add";//添加
var updSupplier = pathUrl +"basics/supplier/update";//修改
var delSupplier = pathUrl +"basics/supplier/deleteMany";//删除
var dropSupplier = pathUrl +"basics/supplier/dropdown";//供应商列表

var menuAll = pathUrl + "sys/menu/dropdown";//查询所有
var buttonAllList = pathUrl + "sys/button/dropdown";//查询按钮所有的
var rolegetAuthority = pathUrl + "sys/role/getAuthority";//查询角色对应菜单(roleid 角色id)]
var menugetAuthority = pathUrl + "sys/menu/getAuthority";//查询菜单对应按钮(menuid 菜单id)

var getAuthorityAll = pathUrl + "sys/role/getAuthorityAll";//根据角色id查询所有的按钮权限(roleid=2)
var setAuthorityAll = pathUrl + "sys/role/setAuthorityAll";//添加角色权限 roleid角色id，allauth 权限[{'菜单id':[按钮id]}]
//风控
var riskList = pathUrl + "risk/control/riskList" //商品评估列表 
var outTreasuryList = pathUrl + "risk/control/outTreasuryList" //出货审核列表
var setThroughOut = pathUrl + "risk/control/setThroughOut" //设置通过出货审核

var outHistoryList = pathUrl + "risk/control/outHistoryList" //风控审核过的出货记录
var saveEvaluationPrice = pathUrl + "risk/control/saveEvaluationPrice" //保存修改的商品评估价
var outCordonList = pathUrl + "risk/control/outCordonList" //出货警戒线列表
var outDetails = pathUrl + "risk/control/outHistoryDetail"//出货审核详情
var outHistoryDetails = pathUrl + "risk/control/outHistoryDetails"//出货审核记录详情
var setAdopt = pathUrl + "risk/control/setAdopt"//出货审核通过
var setNotAdopt = pathUrl + "risk/control/setNotAdopt"//出货审核不通过
var setOutCordon = pathUrl + "risk/control/setOutCordon"//修改警戒线设置

//盘点记录
var checklbList = pathUrl + "check/recordlist/lblist";//查
var checkList = pathUrl + "check/recordlist/list";//盘点记录列表
var checkAdd = pathUrl + "check/recordlist/add";//盘点保存
var endInventory = pathUrl + "check/recordlist/endInventory";//确认盘点

var getByidList = pathUrl + "check/recordlist/getByidList";//查询盘点记录 参数cid

//异常处理
var abnList = pathUrl + "abn/recordlist/list";//查
var abnlbList = pathUrl + "abn/recordlist/lblist";//查
var abnAdd = pathUrl + "abn/recordlist/add";//
var abnByidList = pathUrl + "abn/recordlist/getByidList";//查询盘点记录 参数cid


/////验证
var isname_supplier = pathUrl +"basics/supplier/isName";        //供应商验证    instid,name
var isname_position = pathUrl +"basics/position/isName";        //库位验证      depotid,name
var isname_institution = pathUrl +"basics/institution/isName";  //类型信息  utype:0员工1货权人2供应商3基础数据 ,name
var isname_info = pathUrl +"basics/info/isName";                //商品信息      instid,name
var isname_depot = pathUrl +"basics/depot/isName";              //仓库验证      ownerid,name
var isname_user = pathUrl +"sys/isName";                        //员工验证      instid,
var isname_role = pathUrl +"sys/role/isName";                   //角色验证      rolename
var isname_owner = pathUrl +"user/owner/isName";                //货权人验证    instid,name