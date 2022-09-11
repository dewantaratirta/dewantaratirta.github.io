<script>
	import GenerateTags from '$components/GenerateTags.svelte';
	let tags = ['JavaScript', 'PHP', 'fullstack'];
</script>

<header>
	<div class="left">
		<hgroup class="heading">
			<h2>Dewantara Tirta Putra</h2>
			<p>
				Hello, im fullstack web developer based on Yogyakarta.<br />
				<code class="text-alt">Currently Working as Backend Engineer @ ICUBE by Sirclo</code>
			</p>
			<div class="tags-container">
				<GenerateTags {tags} />
			</div>
		</hgroup>
	</div>
	<div class="right">
		<img src="img/pp.webp" alt="" />
	</div>
</header>

<style>
	.heading {
		margin-bottom: 0px;
	}
	header {
		margin: 0px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
	}
	header .left,
	header .right {
		padding: 10px;
	}
	header .left {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	header .left .text-alt {
		padding: 0px;
		margin-top: 10px;
	}

	.right img {
		border-radius: 20em;
		max-width: 180px;
	}

	.tags-container {
		display: flex;
	}

	@media (max-width: 1200px) {
		.right img {
			max-width: 80px;
		}
	}
</style>
