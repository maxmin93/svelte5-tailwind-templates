<script>
	import MailIcon from '$lib/assets/template1/icons/mail-icon.svelte';
	import MapIcon from '$lib/assets/template1/icons/map-icon.svelte';
	import PhoneIcon from '$lib/assets/template1/icons/phone-icon.svelte';

	// import { createKakaoMap } from './kakao-map.svelte';
	// import { onMount } from 'svelte';

	/**
	 *  @type {{
	 *    addControl: (arg0: any, arg1: any) => void;
	 *    setDraggable: (arg0: boolean) => void;
	 *  }}
	 */
	let map;

	// 참고 : https://svelte.dev/docs/svelte-action
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
</script>

<section id="support" class="overflow-hidden py-24">
	<div class="container mx-auto">
		<div class="flex flex-wrap justify-center">
			<div class="w-full px-4 xl:w-10/12">
				<div class="-mx-4 mb-16 flex flex-wrap bg-primary px-5 py-14 sm:p-14">
					<!-- Email -->
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-5 flex lg:mb-0">
							<div class="mr-4">
								<MailIcon />
							</div>
							<div>
								<h5 class="text-lg font-semibold text-white">Email</h5>
								<p class="text-base font-medium text-[#C1CCF2]">info@example.com</p>
								<!-- p class="text-base font-medium text-[#C1CCF2]">sales@yourmail.com</p -->
							</div>
						</div>
					</div>
					<!-- Phone -->
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-5 flex lg:mb-0">
							<div class="mr-4">
								<PhoneIcon />
							</div>
							<div>
								<h5 class="text-lg font-semibold text-white">Phone Number</h5>
								<p class="text-base font-medium text-[#C1CCF2]">+09 098 2345 332</p>
								<p class="text-base font-medium text-[#C1CCF2]">+77 904 5673 345</p>
							</div>
						</div>
					</div>
					<!-- Address -->
					<div class="w-full px-4 md:w-1/2 lg:w-1/3">
						<div class="mb-5 flex lg:mb-0">
							<div class="mr-4">
								<MapIcon />
							</div>
							<div>
								<h5 class="text-lg font-semibold text-white">Office Address</h5>
								<p class="text-base font-medium text-[#C1CCF2]">
									4571 Sugar Camp Road, Owatonna, Minnesota, 55060
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Form -->
		<div class="-mx-4 flex flex-wrap justify-center">
			<div class="w-full px-4 lg:w-7/12 xl:w-1/2">
				<div class="mb-12 lg:mb-0 lg:mr-4">
					<form action="">
						<!-- input items -->
						<div class="-mx-4 flex flex-wrap">
							<div class="w-full px-4 md:w-1/2">
								<div class="mb-7">
									<input
										type="text"
										id="firstName"
										name="firstName"
										placeholder="Enter your first name"
										class="w-full border border-form-stroke bg-white px-6 py-4 placeholder-[#9699A6] shadow-input outline-none focus:border-primary"
									/>
								</div>
							</div>
							<div class="w-full px-4 md:w-1/2">
								<div class="mb-7">
									<input
										id="lastName"
										type="text"
										name="lastName"
										placeholder="Enter your last Name"
										class="w-full border border-form-stroke bg-white px-6 py-4 placeholder-[#9699A6] shadow-input outline-none focus:border-primary"
									/>
								</div>
							</div>
							<div class="w-full px-4 md:w-1/2">
								<div class="mb-7">
									<input
										id="email"
										type="email"
										name="email"
										placeholder="Enter your Email"
										class="w-full border border-form-stroke bg-white px-6 py-4 placeholder-[#9699A6] shadow-input outline-none focus:border-primary"
									/>
								</div>
							</div>
							<div class="w-full px-4 md:w-1/2">
								<div class="mb-7">
									<input
										id="number"
										type="text"
										name="number"
										placeholder="Enter your number"
										class="w-full border border-form-stroke bg-white px-6 py-4 placeholder-[#9699A6] shadow-input outline-none focus:border-primary"
									/>
								</div>
							</div>
							<div class="w-full px-4">
								<div class="mb-7">
									<textarea
										id="message"
										name="message"
										placeholder="Type your message here"
										rows="6"
										class="w-full resize-none border border-form-stroke bg-white px-6 py-4 placeholder-[#9699A6] shadow-input outline-none focus:border-primary"
									></textarea>
								</div>
							</div>
							<!-- Submit -->
							<div class="w-full px-4">
								<div>
									<button
										type="submit"
										class="inline-flex items-center justify-center border-2 border-transparent bg-primary px-10 py-3 text-base font-semibold text-white hover:bg-opacity-90"
									>
										Submit Message
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>

			<!-- Map -->
			<div class="w-full px-2 lg:w-5/12 xl:w-4/12">
				<!-- map 의 width 와 height 가 명시적으로 지정되어야 한다 -->
				<div
					class="mx-auto rounded-md"
					use:setupKakaoMap={window.kakao ?? null}
					style="width:380px; height:500px;"
				></div>
			</div>
		</div>
	</div>
</section>
