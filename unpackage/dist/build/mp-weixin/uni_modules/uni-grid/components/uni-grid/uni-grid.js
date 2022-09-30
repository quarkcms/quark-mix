"use strict";var e=require("../../../../common/vendor.js");const t={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide(){return{grid:this}},data:()=>({elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,width:0}),created(){this.children=[]},mounted(){this.$nextTick((()=>{this.init()}))},methods:{init(){setTimeout((()=>{this._getSize((e=>{this.children.forEach(((t,i)=>{t.width=e}))}))}),50)},change(e){this.$emit("change",e)},_getSize(t){e.index.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.width=parseInt((e[0].width-1)/this.column)+"px",t(this.width)}))}}};var i=e._export_sfc(t,[["render",function(e,t,i,r,n,o){return{a:n.elId,b:i.showBorder?1:"",c:i.borderColor}}]]);wx.createComponent(i);
