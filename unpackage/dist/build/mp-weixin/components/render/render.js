"use strict";var o=require("../../common/vendor.js");const e={name:"Render",props:{body:{type:String[Object],default:""},data:{type:Object,default:()=>({})},callback:{type:Object,default:()=>({})}},data:()=>({})};if(!Array){(o.resolveComponent("engine")+o.resolveComponent("pro-page")+o.resolveComponent("pro-row")+o.resolveComponent("pro-col")+o.resolveComponent("pro-list")+o.resolveComponent("pro-list-item")+o.resolveComponent("pro-section")+o.resolveComponent("pro-group")+o.resolveComponent("pro-grid")+o.resolveComponent("pro-grid-item")+o.resolveComponent("pro-nav-bar")+o.resolveComponent("pro-action")+o.resolveComponent("pro-swiper-dot")+o.resolveComponent("pro-swiper")+o.resolveComponent("pro-card")+o.resolveComponent("uni-link"))()}Math||((()=>"../engine/engine.js")+(()=>"../pro-page/pro-page.js")+(()=>"../pro-row/pro-row.js")+(()=>"../pro-col/pro-col.js")+(()=>"../pro-list/pro-list.js")+(()=>"../pro-list-item/pro-list-item.js")+(()=>"../pro-section/pro-section.js")+(()=>"../pro-group/pro-group.js")+(()=>"../pro-grid/pro-grid.js")+(()=>"../pro-grid-item/pro-grid-item.js")+(()=>"../pro-nav-bar/pro-nav-bar.js")+(()=>"../pro-action/pro-action.js")+(()=>"../pro-swiper-dot/pro-swiper-dot.js")+(()=>"../pro-swiper/pro-swiper.js")+(()=>"../pro-card/pro-card.js")+(()=>"../../uni_modules/uni-link/components/uni-link/uni-link.js"))();var d=o._export_sfc(e,[["render",function(e,d,t,b,y,n){return o.e({a:t.body.hasOwnProperty("component")},t.body.hasOwnProperty("component")?o.e({b:"view"===t.body.component},"view"===t.body.component?{c:o.p({body:this.body.body}),d:o.s(t.body.style)}:{},{e:"page"===t.body.component},"page"===t.body.component?{f:o.s(t.body.style),g:o.p({navBar:t.body.navBar,tabBar:t.body.tabBar,content:this.body.content})}:{},{h:"row"===t.body.component},"row"===t.body.component?{i:o.s(t.body.style),j:o.p({gutter:t.body.gutter,body:this.body.body})}:{},{k:"col"===t.body.component},"col"===t.body.component?{l:o.s(t.body.style),m:o.p({title:t.body.title,span:t.body.span,offset:t.body.offset,push:t.body.push,pull:t.body.pull,xs:t.body.xs,sm:t.body.sm,md:t.body.md,lg:t.body.lg,xl:t.body.xl,body:this.body.body})}:{},{n:"list"===t.body.component},"list"===t.body.component?{o:o.s(t.body.style),p:o.p({border:t.body.border,body:this.body.body})}:{},{q:"listItem"===t.body.component},"listItem"===t.body.component?{r:o.s(t.body.style),s:o.p({title:t.body.title,note:t.body.note,ellipsis:t.body.ellipsis,thumb:t.body.thumb,thumbSize:t.body.thumbSize,showBadge:t.body.showBadge,badgeText:t.body.badgeText,badgeType:t.body.badgeType,badgeStyle:t.body.badgeStyle,rightText:t.body.rightText,disabled:t.body.disabled,showArrow:t.body.showArrow,link:t.body.link,to:t.body.to,clickable:t.body.clickable,showSwitch:t.body.showSwitch,switchChecked:t.body.switchChecked,showExtraIcon:t.body.showExtraIcon,extraIcon:t.body.extraIcon,direction:t.body.direction})}:{},{t:"section"===t.body.component},"section"===t.body.component?{v:o.s(t.body.style),w:o.p({type:t.body.type,title:t.body.title,titleFontSize:t.body.titleFontSize,titleColor:t.body.titleColor,subTitle:t.body.subTitle,subTitleFontSize:t.body.subTitleFontSize,subTitleColor:t.body.subTitleColor,padding:t.body.padding,body:this.body.body})}:{},{x:"group"===t.body.component},"group"===t.body.component?{y:o.s(t.body.style),z:o.p({title:t.body.title,top:t.body.top,mode:t.body.mode,body:this.body.body})}:{},{A:"grid"===t.body.component},"grid"===t.body.component?{B:o.s(t.body.style),C:o.p({column:t.body.column,borderColor:t.body.borderColor,showBorder:t.body.showBorder,square:t.body.square,highlight:t.body.highlight,body:this.body.body})}:{},{D:"gridItem"===t.body.component},"gridItem"===t.body.component?{E:o.s(t.body.style),F:o.p({index:t.body.index,body:this.body.body})}:{},{G:"navbar"===t.body.component||"navBar"===t.body.component},"navbar"===t.body.component||"navBar"===t.body.component?{H:o.s(t.body.style),I:o.p({title:t.body.title,leftText:t.body.leftText,rightText:t.body.rightText,leftIcon:t.body.leftIcon,rightIcon:t.body.rightIcon,color:t.body.color,backgroundColor:t.body.backgroundColor,fixed:t.body.fixed,statusBar:t.body.statusBar,shadow:t.body.shadow,border:t.body.border,height:t.body.height,dark:t.body.dark,leftWidth:t.body.leftWidth,rightWidth:t.body.rightWidth,body:this.body.body})}:{},{J:"action"===t.body.component},"action"===t.body.component?{K:o.s(t.body.style),L:o.p({label:t.body.label,type:t.body.type})}:{},{M:"swiperDot"===t.body.component},"swiperDot"===t.body.component?{N:o.s(t.body.style),O:o.p({items:t.body.items,current:t.body.current,mode:t.body.mode,dotsStyles:t.body.dotsStyles})}:{},{P:"swiper"===t.body.component},"swiper"===t.body.component?{Q:o.s(t.body.style),R:o.p({items:t.body.items,indicatorDots:t.body.indicatorDots,indicatorColor:t.body.indicatorColor,indicatorActiveColor:t.body.indicatorActiveColor,activeClass:t.body.activeClass,changingClass:t.body.changingClass,autoplay:t.body.autoplay,current:t.body.current,currentItemId:t.body.currentItemId,interval:t.body.interval,duration:t.body.duration,circular:t.body.circular,vertical:t.body.vertical,previousMargin:t.body.previousMargin,nextMargin:t.body.nextMargin,acceleration:t.body.acceleration,disableProgrammaticAnimation:t.body.disableProgrammaticAnimation,displayMultipleItems:t.body.displayMultipleItems,skipHiddenItemLayout:t.body.skipHiddenItemLayout,disableTouch:t.body.disableTouch,touchable:t.body.touchable,easingFunction:t.body.easingFunction})}:{},{S:"card"===t.body.component},"card"===t.body.component?{T:o.s(t.body.style),U:o.p({title:t.body.title,subTitle:t.body.subTitle,extra:t.body.extra,thumbnail:t.body.thumbnail,cover:t.body.cover,isFull:t.body.isFull,isShadow:t.body.isShadow,shadow:t.body.shadow,border:t.body.border,margin:t.body.margin,spacing:t.body.spacing,padding:t.body.padding,body:this.body.body})}:{},{V:"image"===t.body.component},"image"===t.body.component?{W:t.body.src,X:t.body.mode,Y:t.body.lazyLoad,Z:t.body.fadeShow,aa:t.body.webp,ab:t.body.showMenuByLongpress,ac:t.body.draggable,ad:o.s(t.body.style)}:{},{ae:"navigator"===t.body.component},"navigator"===t.body.component?{af:o.p({body:this.body.body}),ag:o.s(t.body.style),ah:t.body.url,ai:t.body.openType,aj:t.body.delta,ak:t.body.animationType,al:t.body.animationDuration,am:t.body.hoverClass,an:t.body.hoverStopPropagation,ao:t.body.hoverStartTime,ap:t.body.hoverStayTime,aq:t.body.target}:{},{ar:"link"===t.body.component},"link"===t.body.component?{as:o.p({body:this.body.body}),at:o.s(t.body.style),av:o.p({href:t.body.href,text:t.body.text,download:t.body.download,showUnderLine:t.body.showUnderLine,copyTips:t.body.copyTips,color:t.body.color,fontSize:t.body.fontSize})}:{}):{})}]]);wx.createComponent(d);
