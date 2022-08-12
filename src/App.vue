<template>
	<router-view/>
</template>

<script>
	export default {
		mounted(){
			var scripts = [
				//
			];

			scripts.forEach((script) => {
				let tag = document.createElement("script");
				tag.setAttribute("src", script);
				document.head.appendChild(tag);
			})
		},
	}
</script>