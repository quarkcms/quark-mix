<template>
	<view :style="style">
		<view v-if="navBar">
			<pro-nav-bar
				:title="navBar.title"
				:leftText="navBar.leftText"
				:rightText="navBar.rightText"
				:leftIcon="navBar.leftIcon"
				:rightIcon="navBar.rightIcon"
				:color="navBar.color"
				:backgroundColor="navBar.backgroundColor"
				:fixed="navBar.fixed"
				:statusBar="navBar.statusBar"
				:shadow="navBar.shadow"
				:border="navBar.border"
				:height="navBar.height"
				:dark="navBar.dark"
				:leftWidth="navBar.leftWidth"
				:rightWidth="navBar.rightWidth"
				:body="this.navBar.body"
			/>
		</view>
		<view>
			<engine :body="this.content" />
		</view>
	</view>
</template>

<script>
	/**
	 * ProPage
	 */
	import Engine from '@/components/engine/engine.vue';
	import ProNavBar from '@/components/pro-nav-bar/pro-nav-bar.vue';
	
	export default {
		name: 'ProPage',
		props: {
			navBar: {
				type: [Object],
				default: null
			},
			tabBar: {
				type: [Boolean,Object],
				default: null
			},
			content: {
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
