"use strict";var e=require("../../common/vendor.js");const t={name:"Card",props:{title:{type:String,default:""},extra:{type:String,default:""},body:{type:[String,Number,Object],default:""},customStyle:{type:Object,default:()=>({})}},data:()=>({})};if(!Array){(e.resolveComponent("engine")+e.resolveComponent("uni-card"))()}Math||((()=>"../engine/engine.js")+(()=>"../../uni_modules/uni-card/components/uni-card/uni-card.js"))();var n=e._export_sfc(t,[["render",function(t,n,r,o,a,i){return{a:e.p({body:r.body}),b:e.p({title:r.title,extra:r.extra})}}]]);wx.createComponent(n);
