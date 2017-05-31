/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-22 02:19:12
 * @version $Id$
 */

$(init) 
function init() {
  //logic
}

var map = new BMap.Map("myMap"); 
var first_point = new BMap.Point(120.17,30.30);

map.centerAndZoom(first_point, 15);     
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州"); 
map.enableScrollWheelZoom();

var shop_info=[
	"浙江省杭州市富阳市桂花西路25-3号",
	"浙江省杭州市下城区体育场路367号",
	"浙江省杭州市余杭区余杭街道安乐路148-150号",
	"浙江省杭州市余杭区余杭街道禹航路937号",
	"浙江省杭州市富阳市富春街道笕浦西路190号",
	"浙江省杭州市上城区武林路397-1号",
	"浙江省杭州市富阳市春江街道大桥南路288",
	"浙江省杭州市萧山区萧绍路1434号",
	"浙江省杭州市富阳市桂花西路26-8",
	"浙江省杭州市萧山区市心广场D座1016",
	"浙江省杭州市西湖区西湖区三墩镇厚诚路188号",
	"浙江省杭州市余杭区临平县临平北大街13-15号",
	"浙江省杭州市桐庐县杭州市桐庐县迎春南路405号",
	"浙江省杭州市余杭区航泰路135号",
	"浙江省杭州市余杭区乔司街道葛家车村269号",
];

var shop_point = new Array();

// 创建地址解析器实例     
var myGeo = new BMap.Geocoder();

// 将地址解析结果显示在地图上，并调整地图视野  
for (var i = 0; i < shop_info.length; i++){
	var count=i;
	myGeo.getPoint(shop_info[i], function(point,count){
		map.centerAndZoom(first_point, 11);
		var marker = new BMap.Marker(point);
   		map.addOverlay(marker);	
   		//marker.setAnimation(BMAP_ANIMATION_BOUNCE); //地标跳动动画

   		var content = '地址：' + shop_info[count];
		var searchInfoWindow = null;
		searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : shop_info[i],      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});

		marker.addEventListener("click", function(e){
	    	searchInfoWindow.open(marker);
    	})
	},"杭州市");
}  

// for (var i=0; i < shop_info.length; i++){
// 	var marker = new BMap.Marker(shop_point[i]);
// 	var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
//                     '地址：'+ shop_info[i]+ '</div>';
// 	var searchInfoWindow = null;
// 		searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
// 			title  : shop_info[i],      //标题
// 			width  : 290,             //宽度
// 			height : 105,              //高度
// 			panel  : "panel",         //检索结果面板
// 			enableAutoPan : true,     //自动平移
// 			searchTypes   :[
// 				BMAPLIB_TAB_SEARCH,   //周边检索
// 				BMAPLIB_TAB_TO_HERE,  //到这里去
// 				BMAPLIB_TAB_FROM_HERE //从这里出发
// 			]
// 		});
// 	function openInfoWindow1() {
// 		searchInfoWindow1.open(new BMap.Point(116.319852,40.057031));
// 	}
// 	marker.addEventListener("click", function(e){
// 	    searchInfoWindow.open(marker);
//     })
// }
