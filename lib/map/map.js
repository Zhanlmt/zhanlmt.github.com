/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 16:23:04
 * @version $Id$
 */

var map = new BMap.Map("myMap"); 
var point = new BMap.Point(120.19,30.26);

map.centerAndZoom(point, 15);     
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州"); 
map.enableScrollWheelZoom();

function hotel(){
	var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上，并调整地图视野    
	myGeo.getPoint("西湖风景区", function(point) {
  		if (point) {
    		map.centerAndZoom(point, 14);
    		//map.addOverlay(new BMap.Marker(point));
  		}
	}, "杭州市");

	var local = new BMap.LocalSearch(map, {
	//调整每页显示8个结果,为本地搜索对象提供一个结果列表容器，搜索结果会自动添加到容器元素中
		pageCapacity: 7,
  		renderOptions: {
    		map: map,
    		panel: "result",
    		autoViewport: true
  		}
	});

	local.searchNearby("宾馆", "西湖风景区");
}

function route(){
	var myGeo = new BMap.Geocoder();
	// // 将地址解析结果显示在地图上，并调整地图视野    
	myGeo.getPoint("西湖风景区", function(point) {
  		if (point) {
    		map.centerAndZoom(point, 14);
    		//map.addOverlay(new BMap.Marker(point));
  		}
	}, "杭州市");

	var local = new BMap.LocalSearch(map, {
		//调整每页显示8个结果,为本地搜索对象提供一个结果列表容器，搜索结果会自动添加到容器元素中
		pageCapacity: 7,
  		renderOptions: {
    		map: map,
    		panel: "result",
    		autoViewport: true
  		}
	});
	// //local.search("宾馆");
	// //BMap.LocalSearch还提包含searchNearby和searchInBounds方法，为您提供周边搜索和范围搜索服务
	local.searchNearby("宾馆", "西湖风景区");

	var marker;
	var infoWindow;
	//公交导航，范围为市
	var transit = new BMap.TransitRoute(map, {
  		renderOptions: {
    		map: map,
    		panel: "result"
  		}
	});

 	var markerArr = [];
 	local.setMarkersSetCallback(function(pois) {
		for (var i = 0; i < pois.length; i++) {
			markerArr[i] = pois[i].marker;
			pois[i].marker.addEventListener("click", function(e) {
				transit.search("杭州师范大学仓前校区", this.z.title);
				transit.clearResults();
			})
		}
	})
}

var school_info=[
 	[120.020403,30.295784,"恕园2号楼综合楼"],
 	[120.019325,30.296696,"恕园14号楼教学楼"],
 	[120.017718,30.296704,"恕园19号楼教学楼"],
 	[120.020103,30.297753,"恕园20号楼教学楼"],
 	[120.018382,30.297453,"恕园23号楼琴房楼"],
 	[120.018081,30.298131,"恕园31号楼教学楼"],
 	[120.018122,30.297706,"恕园32号楼教学楼"],
 	[120.017318,30.297390,"恕园33号楼教学楼"],
 	[120.017497,30.297994,"恕园35号楼教学楼"],
];

var opts = {
 	width: 200, // 信息窗口宽度    
 	height: 200, // 信息窗口高度      
}

function OnClick(address,point){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var div=document.createElement("div");
	div.style.width='200px';
	div.style.height="150px";
	var img = document.createElement('img');
	img.style.width='200px';
	img.style.height='180px';
	img.src='img/'+ address + '.jpg';
	div.append(img);
	div.append(address);
	div.style.fontSize= "13px";
	var infoWindow = new BMap.InfoWindow(div,opts);
	map.openInfoWindow(infoWindow,point);
	});
}
function school(){
	map.centerAndZoom(new BMap.Point(120.015355,30.295605), 17);//设置中心
	for(var i = 0;i < school_info.length;i++){
	var point= new BMap.Marker(new BMap.Point(school_info[i][0],school_info[i][1]));//设置marker的坐标
	var address = school_info[i][2];
	map.addOverlay(point);
	OnClick(address,point);
	}
}

// function showInfo(e) {
//   alert(e.point.lng + ", " + e.point.lat);
//   map.removeEventListener("click", showInfo);
// }
// map.addEventListener("click", showInfo);
