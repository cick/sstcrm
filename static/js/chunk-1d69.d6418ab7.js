(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d69"],{QO4p:function(e,t,s){"use strict";var a=s("wUZ+");s.n(a).a},kFvY:function(e,t,s){"use strict";s.r(t);var a,i=s("YEIV"),n=s.n(i),o=s("vDqi"),r=s.n(o),l=s("KTTK"),c=s("ViDN"),m=s("utuE"),u=s("1RnH"),f={components:{CreateView:c.a,membersDep:m.a,relatedBusiness:u.a},computed:{crmFileSaveUrl:function(){return window.BASE_URL+l.f},httpHeader:function(){return{authKey:r.a.defaults.headers.authKey,sessionId:r.a.defaults.headers.sessionId}}},data:function(){return{activeName:"1",tabsData:[{label:"日报",key:"1"},{label:"周报",key:"2"},{label:"月报",key:"3"}],formList:[],dateList:[{label:"今日工作内容",model:"content"},{label:"明日工作内容",model:"tomorrow"},{label:"遇到的问题",model:"question"}],weekList:[{label:"本周工作内容",model:"content"},{label:"下周工作内容",model:"tomorrow"},{label:"遇到的问题",model:"question"}],monthList:[{label:"本月工作内容",model:"content"},{label:"下月工作内容",model:"tomorrow"},{label:"遇到的问题",model:"question"}],imageFileList:[],fileList:[],dialogVisible:!1,relevanceAll:{},allData:{}}},props:{formData:{type:Object,default:function(){return{}}},dialogTitle:{type:String,default:"写日志"},accessoryFileList:{type:Array,default:function(){return[]}},imgFileList:{type:Array,default:function(){return[]}},newLoading:Boolean},mounted:function(){if(document.body.appendChild(this.$el),this.formList=this.dateList,this.formData.category_id)switch(this.formData.category_id){case 1:this.tabsData=[{label:"日报",key:"1"}],this.formList=this.dateList;break;case 2:this.tabsData=[{label:"周报",key:"1"}],this.formList=this.weekList;break;case 3:this.tabsData=[{label:"月报",key:"1"}],this.formList=this.monthList}var e={};e.business=this.formData.businessList?this.formData.businessList:[],e.contacts=this.formData.contactsList?this.formData.contactsList:[],e.contract=this.formData.contractList?this.formData.contractList:[],e.customer=this.formData.customerList?this.formData.customerList:[],this.allData=e;var t={};t.business_ids=this.formData.businessList?this.formData.businessList.map(function(e,t,s){return e.business_id}):[],t.contacts_ids=this.formData.contactsList?this.formData.contactsList.map(function(e,t,s){return e.contacts_id}):[],t.contract_ids=this.formData.contractList?this.formData.contractList.map(function(e,t,s){return e.contract_id}):[],t.customer_ids=this.formData.customerList?this.formData.customerList.map(function(e,t,s){return e.customer_id}):[],this.relevanceAll=t,this.imageFileList=this.imgFileList.map(function(e,t,s){return e.url=e.file_path_thumb,e}),this.fileList=this.accessoryFileList.map(function(e,t,s){return e.url=e.file_path_thumb,e})},methods:(a={close:function(){1==this.$route.query.routerKey?this.$router.go(-1):this.$emit("close")},tabClick:function(){switch(this.activeName){case"1":this.formList=this.dateList;break;case"2":this.formList=this.weekList;break;case"3":this.formList=this.monthList}},submitBtn:function(){this.formData.content||this.formData.tomorrow||this.formData.question?this.$emit("submitBtn",this.activeName,this.fileList,this.imageFileList,this.relevanceAll):this.$message.error("内容至少填写一项")},beforeRemove:function(){return this.$confirm("此操作将永久删除该图片, 是否继续？")},imgFileUploadSuccess:function(e,t,s){this.imageFileList=s},handleFilePreview:function(e){if(e.response||e.file_id){var t=void 0;t=e.response?{url:e.response.data[0].path,name:e.response.data[0].name}:{url:e.file_path,name:e.name},this.$bus.emit("preview-image-bus",{index:0,data:[t]})}}},n()(a,"beforeRemove",function(e,t){var s=this;if(e.response||e.file_id){var a=void 0;return a=e.response?e.response.data[0].save_name:e.save_name,this.$confirm("您确定要删除该文件吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l.c)({save_name:a}).then(function(e){s.$message.success(e.data);var t=s.getFileIndex(s.$refs.imageUpload.uploadFiles,a);-1!=t&&s.$refs.imageUpload.uploadFiles.splice(t,1),-1!=(t=s.getFileIndex(s.imgFileList,a))&&s.imgFileList.splice(t,1)}).catch(function(){})}).catch(function(){s.$message({type:"info",message:"已取消操作"})}),!1}return!0}),n()(a,"getFileIndex",function(e,t){for(var s=-1,a=0;a<e.length;a++){var i=e[a];if((i.response?i.response.data[0].save_name:i.save_name)==t){s=a;break}}return s}),n()(a,"fileUploadSuccess",function(e,t,s){this.fileList=s}),n()(a,"handleFileRemove",function(e,t){var s=this;if(e.response||e.file_id){var a=void 0;return a=e.response?e.response.data[0].save_name:e.save_name,this.$confirm("您确定要删除该文件吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l.c)({save_name:a}).then(function(e){s.$message.success(e.data);var t=s.getFileIndex(s.$refs.fileUpload.uploadFiles,a);-1!=t&&s.$refs.fileUpload.uploadFiles.splice(t,1),-1!=(t=s.getFileIndex(s.fileList,a))&&s.fileList.splice(t,1)}).catch(function(){})}).catch(function(){s.$message({type:"info",message:"已取消操作"})}),!1}return!0}),n()(a,"popoverSubmit",function(e,t){this.$set(this.formData,"sentWhoList",e),this.$set(this.formData,"depData",t)}),n()(a,"handleClose",function(){this.dialogVisible=!1}),n()(a,"checkInfos",function(e){this.relevanceAll=e}),a),destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},d=(s("QO4p"),s("KHd+")),h=Object(d.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("create-view",{attrs:{"body-style":{height:"100%"}}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.newLoading,expression:"newLoading"}],staticClass:"new-journal"},[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"text"},[e._v(e._s(e.dialogTitle))]),e._v(" "),a("img",{staticClass:"el-icon-close rt",attrs:{src:s("cjwK"),alt:""},on:{click:e.close}})]),e._v(" "),a("div",{staticClass:"content"},[a("el-tabs",{on:{"tab-click":e.tabClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.tabsData,function(e,t){return a("el-tab-pane",{key:t,attrs:{label:e.label,name:e.key}})})),e._v(" "),a("div",{staticClass:"form"},[e._l(e.formList,function(t,s){return a("div",{key:s,staticClass:"row-list"},[a("label",{staticClass:"item-label"},[e._v(e._s(t.label)+"：")]),e._v(" "),a("el-input",{attrs:{type:"textarea",autosize:{minRows:4},placeholder:"请输入内容",resize:"none"},model:{value:e.formData[t.model],callback:function(s){e.$set(e.formData,t.model,s)},expression:"formData[item.model]"}})],1)}),e._v(" "),a("div",{staticClass:"img-accessory"},[a("div",{staticClass:"img-box"},[a("el-upload",{ref:"imageUpload",attrs:{action:e.crmFileSaveUrl,headers:e.httpHeader,name:"img[]",multiple:"",accept:"image/*","list-type":"picture-card","on-preview":e.handleFilePreview,"before-remove":e.beforeRemove,"on-success":e.imgFileUploadSuccess,"file-list":e.imageFileList}},[a("p",{staticClass:"add-img"},[a("span",{staticClass:"el-icon-picture"}),e._v(" "),a("span",[e._v("添加图片")])]),e._v(" "),a("i",{staticClass:"el-icon-plus"})])],1),e._v(" "),a("p",{staticClass:"add-accessory"},[a("el-upload",{ref:"fileUpload",attrs:{action:e.crmFileSaveUrl,headers:e.httpHeader,name:"file[]",multiple:"",accept:"*.*","on-preview":e.handleFilePreview,"before-remove":e.handleFileRemove,"on-success":e.fileUploadSuccess,"file-list":e.fileList}},[a("p",[a("img",{attrs:{src:s("6KEE"),alt:""}}),e._v("\n                添加附件\n              ")])])],1)]),e._v(" "),a("div",{staticClass:"sent-who"},[a("span",{staticClass:"label"},[e._v("发送给谁:")]),e._v(" "),e._l(e.formData.sentWhoList,function(t,s){return a("div",{directives:[{name:"photo",rawName:"v-photo",value:t,expression:"k"},{name:"lazy",rawName:"v-lazy:background-image",value:e.$options.filters.filterUserLazyImg(t.thumb_img),expression:"$options.filters.filterUserLazyImg(k.thumb_img)",arg:"background-image"}],key:s,staticClass:"div-photo k-img header-circle"})}),e._v(" "),a("span",e._l(e.formData.depData,function(t,s){return a("span",{key:s,staticClass:"item-name"},[e._v(e._s(t.name))])})),e._v(" "),a("members-dep",{attrs:{userCheckedData:e.formData.sentWhoList,depCheckedData:e.formData.depData,contentBlock:!1},on:{popoverSubmit:e.popoverSubmit}},[a("img",{staticClass:"sent-img",attrs:{slot:"membersDep",src:s("xVxq")},slot:"membersDep"})])],2),e._v(" "),a("related-business",{attrs:{marginLeft:"0",allData:e.allData},on:{checkInfos:e.checkInfos}})],2)],1),e._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitBtn}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:e.close}},[e._v("取消")])],1)])])},[],!1,null,"f97b37ac",null);h.options.__file="newDialog.vue";t.default=h.exports},"wUZ+":function(e,t,s){}}]);