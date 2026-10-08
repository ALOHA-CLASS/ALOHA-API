// API-KEY.json 의 key 로 카카오맵 SDK 를 불러옵니다.
// fetch 를 사용하므로 file:// 이 아닌 http(s)://(예: localhost) 로 열어야 합니다.
function loadKakao(libraries) {
    return fetch('API-KEY.json')
        .then(function (res) {
            if (!res.ok) throw new Error('API-KEY.json 을 불러올 수 없습니다. (' + res.status + ')');
            return res.json();
        })
        .then(function (data) {
            if (!data.key) throw new Error('API-KEY.json 에 "key" 값이 없습니다.');

            return new Promise(function (resolve, reject) {
                const script = document.createElement('script');
                script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=' + encodeURIComponent(data.key)
                    + '&autoload=false' + (libraries ? '&libraries=' + libraries : '');
                script.onload = function () { kakao.maps.load(resolve); };
                script.onerror = function () { reject(new Error('카카오맵 SDK 를 불러올 수 없습니다.')); };
                document.head.appendChild(script);
            });
        })
        .catch(function (err) {
            const map = document.getElementById('map');
            if (map) map.textContent = err.message;
            throw err;
        });
}
