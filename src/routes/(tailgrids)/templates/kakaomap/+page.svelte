<script>
	/**
	 *  @type {{
	 *    addControl: (arg0: any, arg1: any) => void;
	 *    setDraggable: (arg0: boolean) => void;
	 *  }}
	 */
	let map;

	/**
	 * SvelteAction
	 * 참고 : https://svelte.dev/docs/svelte-action
	 */

	/** @type {import('svelte/action').Action<HTMLElement, any>}  */
	function setupKakaoMap(node, kakao) {
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
		map = new kakao.maps.Map(node, options);

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

		// LOGIC
		node.dispatchEvent(new CustomEvent('emit', { detail: 'hello' }));

		return {
			destroy() {
				if (map) {
					mapTypeControl = null;
					markerPosition = null;
					marker = null;
					// @ts-ignore
					map = null;
				}
			},
		};
	}

	/** @type { (event:{detail:string}) => void } */
	function handleEmit(event) {
		console.log('Map.onEmit:', event.detail);
	}
</script>

<div on:emit={handleEmit} use:setupKakaoMap={window.kakao} style="width:500px;height:400px;"></div>
<div class="mt-4">
	<button
		class="btn"
		onclick={() => {
			map.setDraggable(false);
		}}>지도 드래그 이동 끄기</button
	>
	<button
		class="btn"
		onclick={() => {
			map.setDraggable(true);
		}}>지도 드래그 이동 켜기</button
	>
</div>
