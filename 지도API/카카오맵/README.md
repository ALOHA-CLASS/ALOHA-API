# 카카오맵 지도 API 시작하기

## 1. 카카오 개발자 앱 생성

[카카오디벨로퍼스](https://developers.kakao.com/)에 로그인한 후 애플리케이션을 생성합니다.

```text
카카오디벨로퍼스
→ 내 애플리케이션
→ 애플리케이션 추가하기
```

앱 생성 후 **앱 키 → JavaScript 키**를 확인합니다.

> 카카오맵 Web API에서는 **JavaScript 키**를 사용합니다.

---

## 2. 플랫폼 및 도메인 등록

애플리케이션 설정에서 사용할 웹 사이트 도메인을 등록합니다.

개발 환경:

```text
http://localhost:8080
http://localhost:3000
http://localhost:5173
http://127.0.0.1:8080
```

운영 환경:

```text
https://example.com
```

Spring Boot에서 로컬 개발을 한다면 일반적으로 `http://localhost:8080`을 등록하면 됩니다.

---

## 3. 사용설정 활성화

### [카카오맵] > [사용 설정] > ON (활성화)

카카오맵 메뉴에서 사용설정 활성화를 해주어야 동작합니다.

<br><br><br>


---

## 4. 카카오맵 SDK 추가

HTML의 `<head>` 영역에 카카오맵 JavaScript SDK를 추가합니다.

```html
<script
    type="text/javascript"
    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=JavaScript키">
</script>
```

주소 검색 기능까지 사용할 경우 `libraries=services`를 추가합니다.

```html
<script
    type="text/javascript"
    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=JavaScript키&libraries=services">
</script>
```

---

## 5. 지도 영역 만들기

지도를 표시할 `<div>`를 만듭니다.

```html
<div id="map"></div>
```

지도 영역에는 반드시 높이(`height`)를 지정해야 합니다.

```css
#map {
    width: 100%;
    height: 400px;
}
```

---

## 6. 지도 생성

JavaScript에서 지도를 생성합니다.

```javascript
const container = document.getElementById('map');

const options = {
    center: new kakao.maps.LatLng(37.5665, 126.9780),
    level: 3
};

const map = new kakao.maps.Map(container, options);
```

### 주요 설정

```javascript
new kakao.maps.LatLng(위도, 경도)
```

* `위도`: latitude
* `경도`: longitude

```javascript
level: 3
```

* 지도 확대 수준
* 숫자가 작을수록 확대된 지도

---

## 7. 전체 기본 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>카카오맵</title>

    <style>
        #map {
            width: 100%;
            height: 400px;
        }
    </style>

    <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=JavaScript키">
    </script>
</head>

<body>

<h1>카카오맵</h1>

<div id="map"></div>

<script>
    const container = document.getElementById('map');

    const options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780),
        level: 3
    };

    const map = new kakao.maps.Map(container, options);
</script>

</body>
</html>
```

이 코드까지 적용하면 **카카오맵을 화면에 표시하는 기본 준비가 완료**됩니다.

---

## 다음 단계

기본 지도가 정상적으로 표시된다면 다음 기능을 추가할 수 있습니다.

* 마커 표시
* 마커 클릭 이벤트
* 주소 검색
* 주소 → 좌표 변환
* 장소 검색
* 여러 장소 마커 표시
* 현재 위치 표시
* 지도 이동 및 확대/축소
* Spring Boot와 연동
