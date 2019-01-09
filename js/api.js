var loginUrl = pathUrl + "sys/login"; //登录
var loginPageUrl = localhost + "/view/login/login.html"; //filter拦截到登录页面

//打印使用页面
var printinstore = localhost+"/view/print/print-in-store.html";
var printoutstore = localhost+"/view/print/print-out-store.html";
var printinstore2 = localhost+"/view/print/print-in-store2.html";
var printoutstore2 = localhost+"/view/print/print-out-store2.html";
var printin = localhost+"/view/print/print-in.html";
var printout = localhost+"/view/print/print-out.html";
var printadjust = localhost+"/view/print/print-adjust.html";

var weekInCount = pathUrl + "home/weekInCount";//本周入库统计立方
var weekOutCount = pathUrl + "home/weekOutCount";//本周出库统计立方
var weekStockCount = pathUrl + "home/weekStockCount";//本周库存统计立方
var inOrderCount = pathUrl + "home/inOrderCount";//预入库单
var outOrderCount = pathUrl + "home/outOrderCount";//出货申请单

//基础货物公共信息
var commonBaseUrl = pathUrl + "c/goodsbasics/list"; //查询货物
// 库存管理
var ilbstockAdd = pathUrl + "lb/ilbstock/add";//增
var ilbstockDelete = pathUrl + "lb/ilbstock/delete";//删
var ilbstockUpdate = pathUrl + "lb/ilbstock/update";//改
var ilbstockList = pathUrl + "lb/ilbstock/list";//查
var ilbstockListAll = pathUrl + "lb/ilbstock/listAll";//出库申请单查询货物
var ilbstockListAdjustlb = pathUrl + "lb/ilbstock/listAdjustlb";//货物调整单 货物查询
var ilbstocklistPreLb = pathUrl + "lb/ilbstock/listPreLb";//预入库单查询货物
var ilbstockmovelibrary = pathUrl + "lb/ilbstock/movelibrary";//同仓库下移动库位（参数，uuidarr:uuid数组，positionid:库位ID）


var ilbstocklblist = pathUrl + "lb/ilbstock/lblist";//查询出货时信息
var ilbstockImportUrl = pathUrl + "lb/ilbstock/importExcel"; //导入
var ilbstockExportUrl = pathUrl + "lb/ilbstock/exportExcel"; //导出
var ilbstockImportTemp = pathUrl + "template/预入库导入.xlsx"; //导入模板

// 预入库
var preinlbdel = pathUrl + "order/prewarehousing/inlbdel";//入库单删除
var preEntry = pathUrl + "order/prewarehousing/list";//预入库
var preEntryAdd = pathUrl + "order/prewarehousing/add";//预入库新增
var preEntryDelete = pathUrl + "order/prewarehousing/delete";//预入库单删除
var preEntryUpdate = pathUrl + "order/prewarehousing/update";//预入库编辑
var preEntrygetByOrderno = pathUrl + "order/prewarehousing/getByOrderno?ish=1";//预入库单详情 ish:获取单号所有信息
var preEntryexamineStock = pathUrl + "order/prewarehousing/examineStock";//预入库单审核为库存
var preEntryexamineStockGoods = pathUrl + "order/prewarehousing/examineStockGoods";//选择预入库单中的货物入库为库存
var preprintinjk = pathUrl+"/order/warehousing/prinware";
var preEntrySingleadd = pathUrl + "order/prewarehousing/singleadd";//预入库新增
//打印接口
var print_prein = pathUrl+"/order/prewarehousing/prinware"; //入库申请打印
var print_in = pathUrl+"/order/warehousing/prinware"; //入库打印
var print_preout = pathUrl+"/order/preouttreasury/prinOut"; //出库申请打印
var print_out = pathUrl+"/order/outtreasury/prinOut"; //出库打印

// 入库
var backinexamine = pathUrl + "order/warehousing/backinexamine";//反入库审核
var inlbdel = pathUrl + "order/warehousing/inlbdel";//入库单删除
var inEntry = pathUrl + "order/warehousing/list";//入库
var inEntryAdd = pathUrl + "order/warehousing/add";//预入库新增
var inEntryDelete = pathUrl + "order/warehousing/delete";//预入库单删除
var inEntryUpdate = pathUrl + "order/warehousing/update";//预入库编辑
var inEntrygetByOrderno = pathUrl + "order/warehousing/getByOrderno?ish=1";//预入库单详情 ish:获取单号所有信息
var inEntryexamineStock = pathUrl + "order/warehousing/examineStock";//预入库单审核为库存
var inEntryexamineStockGoods = pathUrl + "order/warehousing/examineStockGoods";//选择预入库单中的货物入库为库存
var inentryHistory = preEntry + "?ishistory=1";//入库记录
var inbatchExport = pathUrl + "order/warehousing/batchExport";//根据单号批量导出

//预出库
var pregetOrdernoDetails =  pathUrl + "order/preouttreasury/getOrdernoDetails" //库存中查询货物 (仓库：depotid 仓库主：ownerid)
var preoutTreasuryAdd = pathUrl + "order/preouttreasury/add";//增加出货申请
var preoutHistory = pathUrl + "order/preouttreasury/list?ishistory=1";//出库记录
var preoutHistoryOrderno = pathUrl + "order/preouttreasury/getByOrderno?ish=1";//出库详情 ish:获取单号所有信息
var preoutRemove = pathUrl + "order/preouttreasury/remove";//出货申请详情货物移除
var preoutStock = pathUrl + "order/preouttreasury/outStock";//审核通过出库
var preoutTreasuryDelete = pathUrl + "order/preouttreasury/delete";//出库删除
var preoutTreasury = pathUrl + "order/preouttreasury/list";//出库列表
var preoutgetByOrder = pathUrl + "order/preouttreasury/getByOrder";//根据orderno单号查询信息


//出库
var backoutexamine = pathUrl + "order/outtreasury/backoutexamine";//反出库审核
var getOrdernoDetails =  pathUrl + "order/outtreasury/getOrdernoDetails" //库存中查询货物 (仓库：depotid 仓库主：ownerid)
var outTreasuryAdd = pathUrl + "order/outtreasury/add";//增加出货申请
var outHistory = pathUrl + "order/outtreasury/list?ishistory=1";//出库记录
var outHistoryOrderno = pathUrl + "order/outtreasury/getByOrderno?ish=1";//出库详情 ish:获取单号所有信息
var outRemove = pathUrl + "order/outtreasury/remove";//出货申请详情货物移除
var outStock = pathUrl + "order/outtreasury/outStock";//审核通过出库
var outTreasuryDelete = pathUrl + "order/outtreasury/delete";//出库删除
var outTreasury = pathUrl + "order/outtreasury/list";//出库列表
var outfailoutlist = pathUrl + "order/outtreasury/failoutlist";//出库列表
var outbatchExport = pathUrl + "order/outtreasury/batchExport";//根据单号批量导出


// 仓库管理
var bitdepotList = pathUrl + "basics/bitdepot/list";//大仓库列表
var bitdepotAdd = pathUrl + "basics/bitdepot/add";//大仓库
var bitdepotDele = pathUrl + "basics/bitdepot/delete";//大仓库
var bitdepotUpda = pathUrl + "basics/bitdepot/update";//大仓库
var bitdepotzhipai = pathUrl + "basics/bitdepot/zhipai";//大仓库指派库位
var depotList = pathUrl + "basics/depot/list";//仓库列表
var depotAdd = pathUrl + "basics/depot/add";//添加仓库
var depotUpdate = pathUrl + "basics/depot/update";//修改仓库
var depotDel = pathUrl + "basics/depot/delete";//删除仓库
//库位
var positionList = pathUrl + "basics/position/list";//库位列表  bitdepotid=大仓库ID 有分页
var positiondropdown = pathUrl + "basics/position/dropdown";//库位下拉 bitdepotid=大仓库ID 没有分页
var positionnotusedropdown = pathUrl + "basics/position/notusedropdown";//库位下拉(筛选出已使用的库位) bitdepotid=大仓库ID 没有分页
var positionAdd = pathUrl + "basics/position/add";//添加库位    bitdepotid=大仓库ID
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
var usergetSessionAnth = pathUrl +"sys/getSessionAnth";   

//角色
var roleList = pathUrl + "sys/role/list";//角色列表
var roleAdd = pathUrl + "sys/role/add";//添加角色
var roleUpdate = pathUrl + "sys/role/update";//修改角色
var roleDel = pathUrl + "sys/role/deleteMany";//删除角色
var roleAuthority = pathUrl + "sys/role/setAuthority";//设置角色对应菜单(roleid 角色id        menuId[]菜单数组)
var setByAuthority = pathUrl + "sys/role/setByAuthority";// 角色单独发送菜单信息
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
var ownerDropdown = pathUrl + "user/owner/dropdown";//仓库主下拉
var depotDropdown =  pathUrl + "basics/depot/dropdown";//仓库下拉： 仓库主id(ownerid)
var positionDropdown = pathUrl + "basics/position/dropdown";//库位列表 bitdepotid：根据仓库ID返回
var driverDropdown = pathUrl + "order/vehiclerecord/dropdown";//出货单司机记录

// 货权人
var customerList = pathUrl + "user/customer/list";//查询列表
var customerIsName = pathUrl + "user/customer/isName";//验证名称重复
var customerDropdown = pathUrl + "user/customer/dropdown";//下拉
var customerAdd = pathUrl + "user/customer/add";//新增
var customerDelete = pathUrl + "user/customer/delete";//根据ID删除
var customerDeleteMany = pathUrl + "user/customer/deleteMany";//根据IDS删除
var customerUpdate = pathUrl + "user/customer/update";//修改

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
var delInstitution = pathUrl +"basics/institution/deleteMany";//删除分类

var userAuthority = pathUrl + "sys/setAuthority";//设置用户对应角色(userid 角色id roleid[]菜单数组)

var roledown = pathUrl + "sys/role/dropdown";//角色列表所有
var menudown = pathUrl + "sys/menu/dropdown";//菜单列表所有

//客户(仓库主)
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
var getMenuAll = pathUrl + "sys/menu/getMenuAll";//获取菜单类别列表
//风控
var riskList = pathUrl + "risk/control/riskList" //货物估值列表 
var outTreasuryList = pathUrl + "risk/control/outTreasuryList" //出货审核列表
var setThroughOut = pathUrl + "risk/control/setThroughOut" //设置通过出货审核

var outHistoryList = pathUrl + "risk/control/outHistoryList" //风控审核过的出货记录
var saveEvaluationPrice = pathUrl + "risk/control/saveEvaluationPrice" //保存修改的货物估值价
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
var checkdele = pathUrl + "check/recordlist/delete";//盘点删除
var checkdelealready = pathUrl + "check/recordlist/alreadydelete";//已盘点删除
var endInventory = pathUrl + "check/recordlist/endInventory";//确认盘点
var getByidList = pathUrl + "check/recordlist/getByidList";//查询盘点记录 参数cid


//库存调整单
var adjustlist = pathUrl +"order/adjust/list";
var adjustadd = pathUrl +"order/adjust/add";
var adjustadcomplete= pathUrl +"order/adjust/adcomplete";       //完成调整
var adjustagetOrderinfo= pathUrl +"order/adjust/getOrderinfo";  //点击列表，进入调整单详情
var adjustdeleteByOrderno= pathUrl +"order/adjust/deleteByOrderno";  //删除调整单
var adjustgive= pathUrl +"order/adjust/give";  //放弃调整单


/////验证
var isname_supplier = pathUrl +"basics/supplier/isName";        //供应商验证        instid,name
var isname_position = pathUrl +"basics/position/isName";        //库位验证          depotid,name
var isname_institution = pathUrl +"basics/institution/isName";  //类型信息          utype:0员工1仓库主2供应商3基础数据 ,name
var isname_info = pathUrl +"basics/info/isName";                //货物信息          instid,name
var isname_depot = pathUrl +"basics/depot/isName";              //仓库验证          ownerid,name
var iscode_depot = pathUrl +"basics/depot/isCode";              //仓库code验证      ownerid,code
var isname_bitdepot = pathUrl +"basics/bitdepot/isName";        //大仓库验证        name
var isname_user = pathUrl +"sys/isName";                        //员工验证          instid,
var isname_role = pathUrl +"sys/role/isName";                   //角色验证          rolename
var isname_owner = pathUrl +"user/owner/isName";                //仓库主验证        instid,name