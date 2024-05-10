<!--
  Flex 방식
  https://jasonlbeggs.com/blog/tailwind-css-tips-and-tricks
-->

<!-- Container -->
<div class="mx-auto max-w-screen-xl px-4">
	<!-- Grid wrapper -->
	<div class="-mx-4 flex flex-wrap">
		<!-- Grid column -->
		<div class="w-full p-4 sm:w-1/2 lg:w-1/3">
			<!-- Column contents -->
			<div class="rounded-lg bg-white px-10 py-12 shadow-lg">
				<!-- Card contents -->
				<div class="flex-1">
					<h2 class="text-2xl font-bold leading-snug text-gray-900">Tailwind v1.1.0</h2>
					<p class="text-md mt-2">
						Tailwind v1.1.0 has been released with some cool new features and a couple of bug fixes.
						This is the first feature release since the v1.0 release, so let's dig into some of the
						updates.
					</p>
				</div>
				<a
					href={undefined}
					class="mt-6 inline-flex items-center rounded-md bg-cyan-800 px-6 py-3 font-semibold text-white shadow-sm"
				>
					View article
				</a>
			</div>
		</div>
		<!-- Grid column -->
		<div class="w-full p-4 sm:w-1/2 lg:w-1/3">
			<!-- Column contents -->
			<div class="rounded-lg bg-white px-10 py-12 shadow-lg">
				<!-- Card contents -->
				<h2 class="text-2xl font-bold leading-snug text-gray-900">
					Getting Started with Tailwind CSS Custom Forms
				</h2>
				<p class="text-md mt-2">
					In this tutorial, I show you how to install the Tailwind CSS Custom Forms plugin and get
					started using it.
				</p>
				<a href={undefined} class="mt-6 inline-block text-blue-700">Read more</a>
			</div>
		</div>
		<!-- Grid column -->
		<div class="w-full p-4 sm:w-1/2 lg:w-1/3">
			<!-- Column contents -->
			<div class="rounded-lg bg-white px-10 py-12 shadow-lg">
				<!-- Card contents -->
				<h2 class="text-2xl font-bold leading-snug text-gray-900">
					Getting Started with Tailwind CSS Custom Forms
				</h2>
				<p class="text-md mt-2">
					In this tutorial, I show you how to install the Tailwind CSS Custom Forms plugin and get
					started using it.
				</p>
				<a href={undefined} class="mt-6 inline-block text-blue-700">Read more</a>
			</div>
		</div>
	</div>
</div>

<!--
  그리드 방식
 -->

<!-- Container -->
<div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
	<!-- Grid column -->
	<div class="flex flex-1 flex-col rounded-lg bg-white px-10 py-12 shadow-lg">
		<div class="flex-1">
			<h2 class="text-2xl font-bold leading-snug text-gray-900">Tailwind v1.1.0</h2>
			<p class="text-md mt-2">
				Tailwind v1.1.0 has been released with some cool new features and a couple of bug fixes.
				This is the first feature release since the v1.0 release, so let's dig into some of the
				updates.
			</p>
		</div>
		<a
			href={undefined}
			class="mt-6 inline-block rounded-md bg-blue-700 px-6 py-3 text-center font-semibold text-white shadow-sm"
		>
			View article
		</a>
	</div>
	<!-- Grid column -->
	<div class="flex flex-1 flex-col rounded-lg bg-white px-10 py-12 shadow-lg">
		<div class="flex-1">
			<h2 class="text-2xl font-bold leading-snug text-gray-900">
				Getting Started with Tailwind CSS Custom Forms
			</h2>
			<p class="text-md mt-2">Shorter content for accentuation</p>
		</div>
		<a
			href={undefined}
			class="mt-6 inline-block rounded-md bg-blue-700 px-6 py-3 text-center font-semibold text-white shadow-sm"
		>
			View article
		</a>
	</div>
	<!-- Grid column -->
	<div class="flex flex-1 flex-col rounded-lg bg-white px-10 py-12 shadow-lg">
		<div class="flex-1">
			<h2 class="text-2xl font-bold leading-snug text-gray-900">11 Benefits of Tailwind CSS</h2>
			<p class="text-md mt-2">
				I've been using Tailwind CSS professionally almost every day for nearly two years. Here I
				share some of the benefits I've gained by using Tailwind.
			</p>
		</div>
		<a
			href={undefined}
			class="mt-6 inline-block rounded-md bg-blue-700 px-6 py-3 text-center font-semibold text-white shadow-sm"
		>
			View article
		</a>
	</div>
</div>
