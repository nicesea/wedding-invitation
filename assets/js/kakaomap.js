var container = document.getElementById('kakao-map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.5017411, 127.0369172), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var markerPosition  = new kakao.maps.LatLng(37.5017411, 127.0369172);
var marker = new kakao.maps.Marker({
    map: map,
    position: markerPosition
});

// 인포윈도우
var infowindow = new kakao.maps.InfoWindow({
    content: '<div style="width:150px;text-align:center;padding:5%;font-size:13px;">아모리스<br>역삼GS타워(1층)</div>'
});
infowindow.open(map, marker);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
map.setZoomable(false);
