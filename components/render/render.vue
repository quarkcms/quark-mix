<template>
    <view v-if="body.hasOwnProperty('component')">
		<view v-if="body.component === 'view'">
			<view
				:style="body.style"
			>
				<engine
					:body="this.body.body"
					:data="this.data"
					:callback="this.callback"
				/>
			</view>
		</view>
		<view v-if="body.component === 'page'">
			<pro-page
				:style="body.style"
				:navBar="body.navBar"
				:tabBar="body.tabBar"
				:content="this.body.content"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'row'">
			<pro-row
				:style="body.style"
				:gutter="body.gutter"
				:body="this.body.body"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'col'">
			<pro-col
				:style="body.style"
				:title="body.title"
				:span="body.span"
				:offset="body.offset"
				:push="body.push"
				:pull="body.pull"
				:xs="body.xs"
				:sm="body.sm"
				:md="body.md"
				:lg="body.lg"
				:xl="body.xl"
				:body="this.body.body"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'list'">
			<pro-list
				:style="body.style"
				:border="body.border"
				:body="this.body.body"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'listItem'">
			<pro-list-item
				:style="body.style"
				:title="body.title"
				:note="body.note"
				:ellipsis="body.ellipsis"
				:thumb="body.thumb"
				:thumbSize="body.thumbSize"
				:showBadge="body.showBadge"
				:badgeText="body.badgeText"
				:badgeType="body.badgeType"
				:badgeStyle="body.badgeStyle"
				:rightText="body.rightText"
				:disabled="body.disabled"
				:showArrow="body.showArrow"
				:link="body.link"
				:to="body.to"
				:clickable="body.clickable"
				:showSwitch="body.showSwitch"
				:switchChecked="body.switchChecked"
				:showExtraIcon="body.showExtraIcon"
				:extraIcon="body.extraIcon"
				:direction="body.direction"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'section'">
			<pro-section
				:style="body.style"
				:type="body.type"
				:title="body.title"
				:titleFontSize="body.titleFontSize"
				:titleColor="body.titleColor"
				:subTitle="body.subTitle"
				:subTitleFontSize="body.subTitleFontSize"
				:subTitleColor="body.subTitleColor"
				:padding="body.padding"
				:body="this.body.body"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'group'">
			<pro-group
				:style="body.style"
				:title="body.title"
				:top="body.top"
				:mode="body.mode"
				:body="this.body.body"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'grid'">
			<pro-grid
				:style="body.style"
				:column="body.column"
				:borderColor="body.borderColor"
				:showBorder="body.showBorder"
				:square="body.square"
				:highlight="body.highlight"
				:body="this.body.body"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'navbar' || body.component === 'navBar'">
			<pro-nav-bar
				:style="body.style"
				:title="body.title"
				:leftText="body.leftText"
				:rightText="body.rightText"
				:leftIcon="body.leftIcon"
				:rightIcon="body.rightIcon"
				:color="body.color"
				:backgroundColor="body.backgroundColor"
				:fixed="body.fixed"
				:statusBar="body.statusBar"
				:shadow="body.shadow"
				:border="body.border"
				:height="body.height"
				:dark="body.dark"
				:leftWidth="body.leftWidth"
				:rightWidth="body.rightWidth"
				:body="this.body.body"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'action'">
			<pro-action
				:label="body.label"
				:type="body.type"
				:size="body.size"
				:plain="body.plain"
				:disabled="body.disabled"
				:loading="body.loading"
				:formType="body.formType"
				:openType="body.openType"
				:hoverClass="body.hoverClass"
				:hoverStartTime="body.hoverStartTime"
				:hoverStayTime="body.hoverStayTime"
				:appParameter="body.appParameter"
				:hoverStopPropagation="body.hoverStopPropagation"
				:lang="body.lang"
				:sessionFrom="body.sessionFrom"
				:sendMessageTitle="body.sendMessageTitle"
				:sendMessagePath="body.sendMessagePath"
				:sendMessageImg="body.sendMessageImg"
				:showMessageCard="body.showMessageCard"
				:groupId="body.groupId"
				:guildId="body.guildId"
				:publicId="body.publicId"
				:popup="body.popup"
				:drawer="body.drawer"
				:confirmTitle="body.confirmTitle"
				:confirmText="body.confirmText"
				:confirmType="body.confirmType"
				:api="body.api"
				:apiType="body.apiType"
				:reload="body.reload"
				:style="body.style"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'swiperDot'">
			<pro-swiper-dot
				:style="body.style"
				:items="body.items"
				:current="body.current"
				:mode="body.mode"
				:dotsStyles="body.dotsStyles"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'swiper'">
			<pro-swiper
				:style="body.style"
				:itemStyle="body.itemStyle"
				:items="body.items"
				:indicatorDots="body.indicatorDots"
				:indicatorColor="body.indicatorColor"
				:indicatorActiveColor="body.indicatorActiveColor"
				:activeClass="body.activeClass"
				:changingClass="body.changingClass"
				:autoplay="body.autoplay"
				:current="body.current"
				:currentItemId="body.currentItemId"
				:interval="body.interval"
				:duration="body.duration"
				:circular="body.circular"
				:vertical="body.vertical"
				:previousMargin="body.previousMargin"
				:nextMargin="body.nextMargin"
				:acceleration="body.acceleration"
				:disableProgrammaticAnimation="body.disableProgrammaticAnimation"
				:displayMultipleItems="body.displayMultipleItems"
				:skipHiddenItemLayout="body.skipHiddenItemLayout"
				:disableTouch="body.disableTouch"
				:touchable="body.touchable"
				:easingFunction="body.easingFunction"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'card'">
			<pro-card
				:style="body.style"
				:title="body.title"
				:subTitle="body.subTitle"
				:extra="body.extra"
				:thumbnail="body.thumbnail"
				:cover="body.cover"
				:isFull="body.isFull"
				:isShadow="body.isShadow"
				:shadow="body.shadow"
				:border="body.border"
				:margin="body.margin"
				:spacing="body.spacing"
				:padding="body.padding"
				:body="this.body.body"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'image'">
			<image
				:src="body.src"
				:mode="body.mode"
				:lazyLoad="body.lazyLoad"
				:fadeShow="body.fadeShow"
				:webp="body.webp"
				:showMenuByLongpress="body.showMenuByLongpress"
				:draggable="body.draggable"
				:style="body.style"
			/>
		</view>
		<view v-if="body.component === 'navigator'">
			<navigator
				:style="body.style"
				:url="body.url"
				:openType="body.openType"
				:delta="body.delta"
				:animationType="body.animationType"
				:animationDuration="body.animationDuration"
				:hoverClass="body.hoverClass"
				:hoverStopPropagation="body.hoverStopPropagation"
				:hoverStartTime="body.hoverStartTime"
				:hoverStayTime="body.hoverStayTime"
				:target="body.target"
			>
				<engine
					:body="this.body.body"
					:data="this.data"
					:callback="this.callback"
				/>
			</navigator>
		</view>
		<view v-if="body.component === 'link'">
			<uni-link
				:style="body.style"
				:href="body.href"
				:text="body.text"
				:download="body.download"
				:showUnderLine="body.showUnderLine"
				:copyTips="body.copyTips"
				:color="body.color"
				:fontSize="body.fontSize"
			>
				<engine
					:body="this.body.body"
					:data="this.data"
					:callback="this.callback"
				/>
			</uni-link>
		</view>
		<view v-if="body.component === 'collapse'">
			<pro-collapse
				:style="body.style"
				:accordion="body.accordion"
				:data="this.data"
				:callback="this.callback"
			>
				<engine
					:body="this.body.body"
					:data="this.data"
					:callback="this.callback"
				/>
			</pro-collapse>
		</view>
		<view v-if="body.component === 'collapseItem'">
			<pro-collapse-item
				:style="body.style"
				:title="body.title"
				:thumb="body.thumb"
				:disabled="body.disabled"
				:open="body.open"
				:showAnimation="body.showAnimation"
				:border="body.border"
				:titleBorder="body.titleBorder"
				:showArrow="body.showArrow"
				:body="this.body.body"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'segmentedControl'">
			<pro-segmented-control
				:style="body.style"
				:current="body.current"
				:titles="body.titles"
				:styleType="body.styleType"
				:activeColor="body.activeColor"
				:items="body.items"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'icon' || body.component === 'icons'">
			<uni-icons
				:size="body.size"
				:type="body.type"
				:color="body.color"
				:customPrefix="body.customPrefix"
			></uni-icons>
		</view>
		<view v-if="body.component === 'video'">
			<pro-video
				:src="body.src"
				:autoplay="body.autoplay"
				:loop="body.loop"
				:muted="body.muted"
				:initialTime="body.initialTime"
				:duration="body.duration"
				:controls="body.controls"
				:danmuList="body.danmuList"
				:danmuBtn="body.danmuBtn"
				:enableDanmu="body.enableDanmu"
				:pageGesture="body.pageGesture"
				:direction="body.direction"
				:showProgress="body.showProgress"
				:showFullscreenBtn="body.showFullscreenBtn"
				:showPlayBtn="body.showPlayBtn"
				:showCenterPlayBtn="body.showCenterPlayBtn"
				:showLoading="body.showLoading"
				:enableProgressGesture="body.enableProgressGesture"
				:objectFit="body.objectFit"
				:poster="body.poster"
				:showMuteBtn="body.showMuteBtn"
				:title="body.title"
				:playBtnPosition="body.playBtnPosition"
				:mobilenetHintType="body.mobilenetHintType"
				:enablePlayGesture="body.enablePlayGesture"
				:autoPauseIfNavigate="body.autoPauseIfNavigate"
				:autoPauseIfOpenNative="body.autoPauseIfOpenNative"
				:vslideGesture="body.vslideGesture"
				:vslideGestureInFullscreen="body.vslideGestureInFullscreen"
				:adUnitId="body.adUnitId"
				:posterForCrawler="body.posterForCrawler"
				:codec="body.codec"
				:httpCache="body.httpCache"
				:playStrategy="body.playStrategy"
				:header="body.header"
				:data="this.data"
				:callback="this.callback"
			></pro-video>
		</view>
		<view v-if="body.component === 'searchbar' || body.component === 'searchBar'">
			<pro-search-bar
				:value="body.value"
				:placeholder="body.placeholder"
				:radius="body.radius"
				:clearButton="body.clearButton"
				:cancelButton="body.cancelButton"
				:cancelText="body.cancelText"
				:bgColor="body.bgColor"
				:maxlength="body.maxlength"
				:focus="body.focus"
				:style="body.style"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
		<view v-if="body.component === 'form'">
			<pro-form
				:api="body.api"
				:apiType="body.apiType"
				:model="body.model"
				:rules="body.rules"
				:validateTrigger="body.validateTrigger"
				:labelPosition="body.labelPosition"
				:labelWidth="body.labelWidth"
				:labelAlign="body.labelAlign"
				:errShowType="body.errShowType"
				:border="body.border"
				:actions="body.actions"
				:body="this.body.body"
				:style="body.style"
				:data="this.data"
				:callback="this.callback"
			/>
		</view>
    </view>
    <view v-else>
      {{body}}
    </view>
</template>

<script>
	/**
	 * Render
	 */
	import Engine from '@/components/engine/engine.vue';
	import ProPage from '@/components/pro-page/pro-page.vue';
	import ProRow from '@/components/pro-row/pro-row.vue';
	import ProCol from '@/components/pro-col/pro-col.vue';
	import ProList from '@/components/pro-list/pro-list.vue';
	import ProListItem from '@/components/pro-list-item/pro-list-item.vue';
	import ProSection from '@/components/pro-section/pro-section.vue'
	import ProGroup from '@/components/pro-group/pro-group.vue'
	import ProGrid from '@/components/pro-grid/pro-grid.vue';
	import ProNavBar from '@/components/pro-nav-bar/pro-nav-bar.vue';
	import ProAction from '@/components/pro-action/pro-action.vue';
	import ProSwiperDot from '@/components/pro-swiper-dot/pro-swiper-dot.vue';
	import ProSwiper from '@/components/pro-swiper/pro-swiper.vue';
	import ProCard from '@/components/pro-card/pro-card.vue';
	import ProCollapse from '@/components/pro-collapse/pro-collapse.vue';
	import ProCollapseItem from '@/components/pro-collapse-item/pro-collapse-item.vue';
	import ProSegmentedControl from '@/components/pro-segmented-control/pro-segmented-control.vue';
	import ProVideo from '@/components/pro-video/pro-video.vue';
	import ProSearchBar from '@/components/pro-search-bar/pro-search-bar.vue';
	import ProForm from '@/components/pro-form/pro-form.vue';
	
	export default {
		name: 'Render',
		props: {
			body: {
				type: String[String, Number, Object],
				default: ''
			},
			data: {
				type: Object,
				default () {
					return {}
				}
			},
			callback: {
				type: [Object, Function],
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
