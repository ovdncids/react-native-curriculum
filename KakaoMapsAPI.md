# Kakao Maps API
* [카카오 맵](https://apis.map.kakao.com/web/guide)
* [카카오 개발자 콘솔](https://developers.kakao.com)
```sh
카카오 개발자 콘솔
  JavaScript 키 확인
  플랫폼 -> Web -> 사이트 도메인 (콜백 URL 설정)
    http://localhost:8080
```

## Maps 띄우기
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=JavaScript키사용"></script>
</head>
<body>
  <div id="map" style="width:500px;height:400px;"></div>
</body>
</html>
<script>
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3 //지도의 레벨(확대, 축소 정도)
};
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
</script>
```

## 주소로 장소 표시
* https://apis.map.kakao.com/web/sample/addr2coord
* 지도의 좌표를 얻을 수 있다.

## Marker CRUD
* https://apis.map.kakao.com/web/sample/multipleMarkerControl
* 마커를 생성 삭제 할 수 있다.

## 확대, 축소 이벤트 등록하기
* https://apis.map.kakao.com/web/sample/addMapZoomChangedEvent
* 확대, 축소 할때 이벤트를 발생 시킨다.

