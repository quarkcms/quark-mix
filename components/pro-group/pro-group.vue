<template>
	<uni-group
		:title="title"
		:top="top"
		:mode="mode"
		:style="style"
	>
		<engine :body="body" />
	</uni-group>
</template>

<script>
	/**
	 * ProGroup
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProGroup',
		props: {
			title: {
				type: String,
				default: null
			},
			top: {
				type: Number,
				default: null
			},
			mode: {
				type: String,
				default: ""
			},
			body: {
				type: [String, Number, Object],
				default: ''
			},
			style: {
				type: [String, Object],
				default () {
					return {}
				}
			}
		},
		data() {
			return {};
		}
	};
</script>

<style lang="scss" >
	
</style>
