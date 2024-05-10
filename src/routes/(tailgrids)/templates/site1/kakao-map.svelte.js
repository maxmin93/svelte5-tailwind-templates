/**
 *
 * @param {{
 *   addControl: (arg0: any, arg1: any) => void;
 *   setDraggable: (arg0: boolean) => void;
 * }} kakao
 * @param { HTMLDivElement } container
 * @returns any
 */
export function createKakaoMap(kakao, container) {
	/**
	 * 지도 생성
	 * https://apis.map.kakao.com/web/sample/basicMap/
	 *
	 * 컨트롤러 추가
	 * https://apis.map.kakao.com/web/sample/addMapControl/
	 *
	 * 지도 이동 막기
	 * https://apis.map.kakao.com/web/sample/disableMapDragMove/
	 */
	let options = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3, // 지도의 레벨 (확대, 축소 정도)
	};
	// 지도 생성
	let map = new kakao.maps.Map(container, options);

	// 일반 지도와 스카이뷰로 전환할 수 있는 컨트롤 생성
	let mapTypeControl = new kakao.maps.MapTypeControl();
	map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

	/**
	 * 마커
	 * https://apis.map.kakao.com/web/sample/basicMarker/
	 */
	let markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
	let marker = new kakao.maps.Marker({
		position: markerPosition,
	});
	marker.setMap(map);

	return map;
}
