<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	let path = [];
	export let show = 0;
	export let slug = null;
	let Project = null;
	let metadata = null;

	export const toggle = () => {
		!show ? close() : open();
	};

	export const close = () => {
		show = 0;
		dispatch('popupChange', { show: show, slug: slug, fn: 'close' });
		path = [];
		Project = null;
		metadata = null;
	};

	export const open = async (slugName) => {
		console.log(slugName)
		slug = slugName;
		console.log(slug);
		show = 1;
		dispatch('popupChange', { show: show, slug: slug, fn: 'open' });
		path = [];

		// get markdown data
		Project = await import(`../../portfolio/${slugName}.md`).then((res) => {
			metadata = res.metadata;
			console.log(metadata)
			return res.default;
		});
	};

	const handleMouseMove = (e) => {
		if (show == 0) return;
		path = e.path;
	};

	const handleClickOutside = (e) => {
		if (show == 0) return;
		if (path.length == 0) return;

		//close if click outside
		if (path[0].tagName != 'DIALOG') return;
		close();
	};

	const keyPressHandler = (e) => {
		if(e.code != 'Escape') return;
		close();
	}
</script>

{#if show && (Project != null) }
	<dialog out:fade={{ duration: 300 }} open>
		<article in:fly={{ y: -50, duration:500}}>
			<header>
				<p></p>
				<span aria-label="Close" class="close" on:click={close} />
			</header>
			<svelte:component this={Project}/>
		</article>
	</dialog>
{/if}

<svelte:window on:mousemove={handleMouseMove} on:click={handleClickOutside} on:keydown={keyPressHandler}/>


<style>
	dialog article header span{
		cursor: pointer;
	}

	dialog article{
		width: 100%;
	}
</style>