"use strict";var e=require("../../common/vendor.js");const t={name:"ProCard",props:{title:{type:String,default:""},subTitle:{type:String,default:""},extra:{type:String,default:""},thumbnail:{type:String,default:void 0},cover:{type:String,default:void 0},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!1},shadow:{type:String,default:void 0},border:{type:Boolean,default:!0},margin:{type:String,default:void 0},spacing:{type:String,default:void 0},padding:{type:String,default:void 0},body:{type:[String,Number,Object],default:""},style:{type:[String,Object],default:()=>({})}},data:()=>({})};if(!Array){(e.resolveComponent("engine")+e.resolveComponent("uni-card"))()}Math||((()=>"../engine/engine.js")+(()=>"../../uni_modules/uni-card/components/uni-card/uni-card.js"))();var i=e._export_sfc(t,[["render",function(t,i,n,a,r,d){return{a:e.p({body:n.body}),b:e.s(n.style),c:e.p({title:n.title,subTitle:n.subTitle,extra:n.extra,thumbnail:n.thumbnail,cover:n.cover,isFull:n.isFull,isShadow:n.isShadow,shadow:n.shadow,border:n.border,margin:n.margin,spacing:n.spacing,padding:n.padding})}}]]);wx.createComponent(i);
