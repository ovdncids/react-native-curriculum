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

# NAVER 지도 API v3 
* https://console.ncloud.com/naver-service/application
* https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html

## Web Dynamic Map
```sh
Services > Maps
Application 등록 > Web Dynamic Map
Application > App 이름 > 인증 정보 > Client ID 확인
Application > App 이름 > 수정 > 서비스 환경 등록 > Web 서비스 URL > http://localhost
# port는 넣지 않아도 됨
```
```html
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID"></script>
```
* ❕ `clientId`아니고 `ncpClientId`

## Mobile Dynamic Map - react-native-naver-map - Expo - Expo Development Client
* https://github.com/mym0404/react-native-naver-map?tab=readme-ov-file
* [Expo Go 이슈](https://githubissues.com/mym0404/react-native-naver-map/61)
* [네이버 지도 설치키 발급](https://medium.com/mj-studio/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8A%B8%EB%B8%8C%EB%A1%9C-%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%A7%80%EB%8F%84-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-1-%EC%84%A4%EC%B9%98%EC%99%80-%ED%82%A4-%EB%B0%9C%EA%B8%89-%EB%B0%9B%EA%B8%B0-f826d8c0644d)

### Expo Development Client
* [EAS - Expo Application Service](https://medium.com/crossplatformkorea/expo%EC%9D%98-%EC%83%88%EB%A1%9C%EC%9A%B4-%EB%B9%8C%EB%93%9C-%EC%8B%9C%EC%8A%A4%ED%85%9C-eas-build%EC%99%80-expo-dev-client-4d93f63ada18)
* https://docs.expo.dev/develop/development-builds/create-a-build
```sh
npx expo install expo-dev-client
```

eas.json
```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {},
    "development-simulator": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    }
  }
}
```

Android
```sh
eas build --profile development --platform android
```
* `app.json` 파일에 `expo.android.package`에 `앱 ID`를 생성하고 Expo 빌드를 실행한다.

iOS
```sh
eas build --profile development-simulator --platform ios
```
* `app.json` 파일에 `expo.ios.bundleIdentifier`에 `앱 ID`를 생성하고 Expo 빌드를 실행한다.
* [app.json 추가 정보](https://spartacodingclub.kr/community/fastqna/all/634b982cb9e1b40ed5b73bad/%EA%B5%AC%EA%B8%80%ED%94%8C%EC%97%90%EC%9D%B4%20expo%20%EC%95%B1%EB%B2%88%EB%93%A4%20%ED%8C%A8%ED%82%A4%EC%A7%80%20%EC%9D%B4%EB%A6%84%20%EC%82%AC%EC%9A%A9%20)

## 마커 클러스터화하기
* https://navermaps.github.io/maps.js.ncp/docs/tutorial-marker-cluster.example.html
* https://github.com/navermaps/marker-tools.js/tree/master/marker-clustering
* <details><summary>Next.js</summary>

  * https://github.com/ovdncids/react-native-curriculum/blob/master/download/naver-map/MarkerClustering.js
  * https://github.com/ovdncids/react-native-curriculum/blob/master/download/naver-map/accidentDeath.json

  pages/map.tsx
  ```tsx
  import { useEffect } from 'react'
  import Script from 'next/script'
  import accidentDeath from '../data/accidentDeath.json'
  
  declare global {
    interface Window {
      naver: any
      N: any
      MarkerClustering: any
    }
  }
  
  const Map = () => {
    useEffect(() => {
      const { naver, N, MarkerClustering } = window
      var map = new naver.maps.Map("map", {
        zoom: 6,
        center: new naver.maps.LatLng(36.2253017, 127.6460516),
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_LEFT,
          style: naver.maps.ZoomControlStyle.SMALL
        }
      });
  
      var markers = [],
        data = accidentDeath.searchResult.accidentDeath;
  
      for (var i = 0, ii = data.length; i < ii; i++) {
        var spot = data[i],
          latlng = new naver.maps.LatLng(spot.grd_la, spot.grd_lo),
          marker = new naver.maps.Marker({
            position: latlng,
            draggable: true
          });
        markers.push(marker);
      }
  
      var htmlMarker1 = {
        content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(../images/cluster-marker-1.png);background-size:contain;"></div>',
        size: N.Size(40, 40),
        anchor: N.Point(20, 20)
      },
        htmlMarker2 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(../images/cluster-marker-2.png);background-size:contain;"></div>',
          size: N.Size(40, 40),
          anchor: N.Point(20, 20)
        },
        htmlMarker3 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(../images/cluster-marker-3.png);background-size:contain;"></div>',
          size: N.Size(40, 40),
          anchor: N.Point(20, 20)
        },
        htmlMarker4 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(../images/cluster-marker-4.png);background-size:contain;"></div>',
          size: N.Size(40, 40),
          anchor: N.Point(20, 20)
        },
        htmlMarker5 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(../images/cluster-marker-5.png);background-size:contain;"></div>',
          size: N.Size(40, 40),
          anchor: N.Point(20, 20)
        };
  
  
      var markerClustering = new MarkerClustering({
        minClusterSize: 2,
        maxZoom: 13,
        map: map,
        markers: markers,
        disableClickZoom: false,
        gridSize: 120,
        icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
        indexGenerator: [10, 100, 200, 500, 1000],
        stylingFunction: function (clusterMarker: any, count: number) {
          clusterMarker.getElement().firstChild.innerHTML = count
        }
      });
  
    }, [])
    return (
      <>
        <Script
          src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=qdfvq55x8b"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/MarkerClustering.js"
          strategy="beforeInteractive"
        ></Script>
        <div id="map" style={{ width: '100%', height: '800px' }}></div>
      </>
    )
  }
  
  export default Map
  ```
</details>


# TMAP
* https://tmapapi.sktelecom.com/main.html#webv2/guide/webGuide.sample1

## 키 발급
* https://openapi.sk.com/user/login
```sh
로그인 > 마이페이지 > 앱 생성 > 앱 > 앱키(appKey) 
```

## TMAP 구매
* https://openapi.sk.com/content/API
```sh
로그인 > TMAP > FREE 구매하기 > 앱 선택 (생성한 앱) > 구매
로그인 > 마이페이지 > 앱 > 상품관리 > FREE TMAP 확인
```

```html
<script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=APP_KEY"></script>
```
