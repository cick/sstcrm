(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cae5"],{"+9np":function(t,e,i){"use strict";var s=i("Qf6f");i.n(s).a},"/Z2C":function(t,e,i){"use strict";var s=i("9bSZ");i.n(s).a},"3yi6":function(t,e,i){"use strict";var s=i("7Qib"),a=i("KzkL"),n={name:"FollowRecordCell",components:{CRMFullScreenDetail:function(){return Promise.all([i.e("chunk-66f9"),i.e("chunk-edbf"),i.e("chunk-6861"),i.e("chunk-24b7"),i.e("chunk-f93ad")]).then(i.bind(null,"uMjE"))}},props:{item:{type:Object,default:function(){return{}}},crmType:{type:String,default:""},index:[String,Number]},data:function(){return{showFullDetail:!1,relationID:"",relationCrmType:""}},computed:{},mounted:function(){},methods:{previewImg:function(t,e){this.$bus.emit("preview-image-bus",{index:e,data:t.map(function(t,e,i){return t.url=t.file_path,t})})},downloadFile:function(t){Object(s.a)({path:t.file_path,name:t.name})},handleCommand:function(t){var e=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.j)({id:e.item.record_id}).then(function(i){e.$emit("on-handle",{type:t,data:{item:e.item,index:e.index}}),e.$message.success(i.data)}).catch(function(){})}).catch(function(){e.$message({type:"info",message:"已取消操作"})})},checkRelationDetail:function(t,e){this.relationID=e,this.relationCrmType=t,this.showFullDetail=!0}}},o=(i("+9np"),i("KHd+")),l=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fl-c"},[s("flexbox",{staticClass:"fl-h"},[s("div",{directives:[{name:"photo",rawName:"v-photo",value:t.item.create_user_info,expression:"item.create_user_info"},{name:"lazy",rawName:"v-lazy:background-image",value:t.$options.filters.filterUserLazyImg(t.item.create_user_info.thumb_img),expression:"$options.filters.filterUserLazyImg(item.create_user_info.thumb_img)",arg:"background-image"}],key:t.item.create_user_info.thumb_img,staticClass:"div-photo fl-h-img"}),t._v(" "),s("div",{staticClass:"fl-h-b"},[s("div",{staticClass:"fl-h-name"},[t._v(t._s(t.item.create_user_info.realname))]),t._v(" "),s("div",{staticClass:"fl-h-time"},[t._v(t._s(t._f("filterTimestampToFormatTime")(t.item.create_time,"YYYY-MM-DD HH:mm")))])]),t._v(" "),s("flexbox",{staticClass:"fl-h-mark"},[s("img",{staticClass:"fl-h-mark-img",attrs:{src:i("N0PQ")}}),t._v(" "),s("div",{staticClass:"fl-h-mark-name"},[t._v("跟进记录")])]),t._v(" "),s("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("i",{staticClass:"el-icon-arrow-down el-icon-more",staticStyle:{color:"#CDCDCD","margin-left":"8px"}}),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"delete"}},[t._v("删除")])],1)],1)],1),t._v(" "),s("div",{staticClass:"fl-b"},[s("div",{staticClass:"fl-b-content"},[t._v(t._s(t.item.content))]),t._v(" "),t.item.dataInfo.imgList&&t.item.dataInfo.imgList.length>0?s("flexbox",{staticClass:"fl-b-images",attrs:{wrap:"wrap"}},t._l(t.item.dataInfo.imgList,function(e,i){return s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.file_path_thumb,expression:"file.file_path_thumb",arg:"background-image"}],key:e.file_path_thumb,staticClass:"fl-b-img-item",on:{click:function(e){t.previewImg(t.item.dataInfo.imgList,i)}}})})):t._e(),t._v(" "),t.item.dataInfo.fileList&&t.item.dataInfo.fileList.length>0?s("div",{staticClass:"fl-b-files"},t._l(t.item.dataInfo.fileList,function(e,a){return s("flexbox",{key:a,staticClass:"cell"},[s("img",{staticClass:"cell-head",attrs:{src:i("6KEE")}}),t._v(" "),s("div",{staticClass:"cell-body"},[t._v(t._s(e.name)),s("span",{staticStyle:{color:"#ccc"}},[t._v("（"+t._s(e.size)+"）")])]),t._v(" "),s("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:function(i){t.downloadFile(e)}}},[t._v("下载")])],1)})):t._e(),t._v(" "),t.item.category||t.item.next_time?s("div",{staticClass:"follow"},[t.item.category?s("span",{staticClass:"follow-info"},[t._v(t._s(t.item.category))]):t._e(),t._v(" "),t.item.next_time?s("span",{staticClass:"follow-info"},[t._v(t._s(t._f("filterTimestampToFormatTime")(t.item.next_time,"YYYY-MM-DD HH:mm:ss")))]):t._e()]):t._e(),t._v(" "),t.item.dataInfo.contactsList&&t.item.dataInfo.contactsList.length>0?s("div",{staticClass:"fl-b-other"},[s("div",{staticClass:"fl-b-other-name"},[t._v("关联联系人")]),t._v(" "),s("div",t._l(t.item.dataInfo.contactsList,function(e,i){return s("flexbox",{key:i,staticClass:"cell",nativeOn:{click:function(i){t.checkRelationDetail("contacts",e.contacts_id)}}},[s("i",{staticClass:"wukong wukong-contacts cell-head crm-type",style:{opacity:0==i?1:0}}),t._v(" "),s("div",{staticClass:"cell-body",staticStyle:{color:"#6394E5",cursor:"pointer"}},[t._v(t._s(e.name))])])}))]):t._e(),t._v(" "),t.item.dataInfo.businessList&&t.item.dataInfo.businessList.length>0?s("div",{staticClass:"fl-b-other"},[s("div",{staticClass:"fl-b-other-name"},[t._v("关联商机")]),t._v(" "),s("div",t._l(t.item.dataInfo.businessList,function(e,i){return s("flexbox",{key:i,staticClass:"cell",nativeOn:{click:function(i){t.checkRelationDetail("business",e.business_id)}}},[s("i",{staticClass:"wukong wukong-business cell-head crm-type",style:{opacity:0==i?1:0}}),t._v(" "),s("div",{staticClass:"cell-body",staticStyle:{color:"#6394E5",cursor:"pointer"}},[t._v(t._s(e.name))])])}))]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),s("c-r-m-full-screen-detail",{attrs:{visible:t.showFullDetail,"crm-type":t.relationCrmType,id:t.relationID},on:{"update:visible":function(e){t.showFullDetail=e}}})],1)},[],!1,null,"e92cd6c6",null);l.options.__file="FollowRecordCell.vue";e.a=l.exports},"7grR":function(t,e,i){},"9bSZ":function(t,e,i){},B2Fc:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var s=i("t3Un");function a(t){return Object(s.a)({url:"bi/achievement/statistics",method:"post",data:t})}function n(t){return Object(s.a)({url:"bi/product/statistics",method:"post",data:t})}},D8hj:function(t,e,i){"use strict";var s=i("7grR");i.n(s).a},GynS:function(t,e,i){"use strict";var s=i("fmM0");i.n(s).a},N0PQ:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZGRjBCRTYxRTBBNzExRTg5QkREOEQxRjlDMkUxOUExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZGRjBCRTYyRTBBNzExRTg5QkREOEQxRjlDMkUxOUExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkZGMEJFNUZFMEE3MTFFODlCREQ4RDFGOUMyRTE5QTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkZGMEJFNjBFMEE3MTFFODlCREQ4RDFGOUMyRTE5QTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz704RrgAAABwUlEQVR42uSXz0sCQRTH36h1sGNlaHjpVJoHC0KCOnVJOwSdqmM/6NZ/EF071rluQaduGQWd9BZEqWBhQQQmHYIQikDU6bs6G8Oy4q7sskYPPuzOzFu+++a9mZ1lnHNywlzkkDkm7JEb7/m8rWIDoVBHEc+DEuAaSmLMtqk+An6dfr8Ys0T4BHxJUbUzJq6q/yc47kR4CXg1fevgTcf3Faxp+vrAsuHikqxH054A5y2mWvYxnEaPwZTc/Kl1zJPJBt27gbR667YlnUjYMNWMORMxi8edETZhH+AZ9IIx4LZb+A5sieskGALfYMWW4hIFdQtmwJyIVt5gruEziucfrF5OVbAKZsGpzq42BVIQH+6suFovlRRQojnTzWethl73IO52wYaVEd+DcTDSaFUqRPV6c6RYJJ5ON8WJFqwuLkWl/7cWMhmE4SLm8xHP5YhFIkrEJPsYibhqQDgKCur3moXDROUy8Wy2KRoMqn5PZoQLBoSnxTf7otHyeonFYsSiUVlUsUMzwttAOfnV2my3e2ATvKjiFAjIPpdg30yOr0DYRL6VpbMDFoEPPIpz2EGrl2fyn0S3Hm8tNfbv/p1+BBgA+Vdv2Iz9D6cAAAAASUVORK5CYII="},OPCT:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVENDNERTkxRTA5QjExRThBQkRDQjRERjVBMjY3MzE0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVENDNERTkyRTA5QjExRThBQkRDQjRERjVBMjY3MzE0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUQ0M0RFOEZFMDlCMTFFOEFCRENCNERGNUEyNjczMTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ0M0RFOTBFMDlCMTFFOEFCRENCNERGNUEyNjczMTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7c1/V2AAABIElEQVR42mL8//8/AwicPXuWgVxgbGwMZzMRUBsGxBeB+AXITigfL2DBIxcCxHlA7AnEz4CYB4gnQ+VW4dKEz4UNQBwNNQwEvgBxBhAn4XMhPgMFgPghmthPIP5NroF/cYgzkmsgMw7x/+Qa+AGIZbBEIgu5BjYC8VIgloLyQbE8E4gXkJtsVkMt3Ak1DOTiDiBeSa6BDFDNK0nJNdi8rArEa4H4IzQC0PFHqLwqMQaqA/ERID4IxIrQJIKOFaDyR6Dq8Xq5DYon4fHVe6g8J1RtMD4XugDxYiKDazYQu5GSbMgC6AbuAeJYIvWmAPEuQmFYDQ3w/1Cvv8dikCDU0mIgtifkwhtAbAdV+BBHsnkIlbeDqieYsG+ixxwpACDAAIZEQR7SM/O0AAAAAElFTkSuQmCC"},QJC7:function(t,e,i){"use strict";var s=i("3yi6"),a=i("KzkL"),n={name:"RecordLog",components:{FollowRecordCell:s.a},props:{id:[String,Number],crmType:{type:String,default:""}},data:function(){return{loading:!1,loadMoreLoading:!0,isPost:!1,page:1,list:[]}},computed:{},watch:{id:function(t){this.refreshList()}},mounted:function(){var t=this;this.$bus.on("follow-log-refresh",function(e){"record-log"==e.type&&t.refreshList()});var e=document.getElementById("follow-log-content");e.onscroll=function(){var i=e.scrollTop+e.clientHeight-e.scrollHeight;Math.abs(i)<10&&1==t.loadMoreLoading&&(t.isPost?t.loadMoreLoading=!1:(t.isPost=!0,t.page++,t.getList()))},this.getList()},activated:function(){},deactivated:function(){},beforeDestroy:function(){this.$bus.off("follow-log-refresh")},methods:{getList:function(){var t=this;this.loading=!0,Object(a.k)({page:this.page,limit:10,types:"crm_"+this.crmType,types_id:this.id,by:"record"}).then(function(e){t.list=t.list.concat(e.data.list),e.data.list.length<10?t.loadMoreLoading=!1:t.loadMoreLoading=!0,t.loading=!1,t.isPost=!1}).catch(function(){t.isPost=!1,t.loading=!1})},refreshList:function(){this.page=1,this.list=[],this.getList()},cellHandle:function(t){"delete"==t.type&&this.list.splice(t.data.index,1)}}},o=(i("GynS"),i("KHd+")),l=Object(o.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("div",{directives:[{name:"empty",rawName:"v-empty",value:0===t.list.length,expression:"list.length === 0"}]},[i("div",{staticClass:"log-items"},[t._l(t.list,function(e,s){return i("follow-record-cell",{key:s,attrs:{item:e,"crm-type":t.crmType,index:s},on:{"on-handle":t.cellHandle}})}),t._v(" "),i("div",{staticClass:"load"},[i("el-button",{attrs:{loading:t.loadMoreLoading,type:"text"}},[t._v(t._s(t.loadMoreLoading?"加载更多":"没有更多了"))])],1)],2)])])},[],!1,null,"6a287ea5",null);l.options.__file="RecordLog.vue";e.a=l.exports},QUdC:function(t,e,i){},Qf6f:function(t,e,i){},UEWd:function(t,e,i){"use strict";var s=i("7Qib"),a=i("KTTK"),n={name:"MixAdd",components:{CrmRelative:i("mkuN").a},props:{showRelativeBusiness:{type:Boolean,default:!1},showRelativeContacts:{type:Boolean,default:!1},id:[String,Number],crmType:{type:String,default:""}},data:function(){return{content:"",inputAutosize:{minRows:1,maxRows:6},barItems:[{img:i("S1Xc"),title:"图片",type:"img",data:"image/*"},{img:i("rl4O"),title:"附件",type:"file",data:"*.*"}],imgFiles:[],files:[],business:[],contacts:[],showRelativeType:""}},computed:{},mounted:function(){this.showRelativeBusiness&&this.barItems.push({img:i("i91G"),title:"关联商机",type:"business",show:!1}),this.showRelativeContacts&&this.barItems.push({img:i("OPCT"),title:"关联联系人",type:"contacts",show:!1}),this.$on("submit-info",function(){this.$emit("mixadd-info",{content:this.content,files:this.files,images:this.imgFiles,business:this.business,contacts:this.contacts})})},beforeDestroy:function(){this.$off("submit-info")},methods:{resetInfo:function(){this.content="",this.imgFiles=[],this.files=[],this.business=[],this.contacts=[],this.showRelativeType=""},checkRelativeInfos:function(t){"business"==this.showRelativeType?this.business=t.data:"contacts"==this.showRelativeType&&(this.contacts=t.data)},barClick:function(t){"business"==t.type?(this.showRelativeType=t.type,t.show=!0):"contacts"==t.type&&(this.showRelativeType=t.type,t.show=!0)},uploadFile:function(t){for(var e=this,i=t.target.files,n=this,o=function(o){var l=i[o];(c={}).module_id=e.id,c.module="crm_"+e.crmType,"image/*"==t.target.accept?c["img[]"]=l:"*.*"==t.target.accept&&(c["file[]"]=l),Object(a.f)(c).then(function(e){e.data.forEach(function(e,i){e.size=Object(s.c)(l.size),"image/*"==t.target.accept?n.imgFiles.push(e):"*.*"==t.target.accept&&(e.icon=Object(s.f)(l),n.files.push(e))})}).catch(function(){})},l=0;l<i.length;l++){var c;o(l)}t.target.value=""},deleteAllImg:function(){this.imgFiles=[]},deleteImgOrFile:function(t,e,i){var s=this;Object(a.d)({save_name:e.save_name,module_id:this.id,module:"crm_"+this.crmType}).then(function(e){"image"==t?s.imgFiles.splice(i,1):s.files.splice(i,1),s.$message.success(e.data)}).catch(function(){})},mouseImgOver:function(t,e){t.showDelete=!0,this.$set(this.imgFiles,e,t)},mouseImgLeave:function(t,e){t.showDelete=!1,this.$set(this.imgFiles,e,t)},inputFocus:function(){var t=this;this.inputAutosize={minRows:3,maxRows:6},this.$nextTick(function(){t.$refs.textarea.resizeTextarea()})}}},o=(i("eDCH"),i("KHd+")),l=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mix-container"},[s("div",{staticClass:"i-cont"},[s("el-input",{ref:"textarea",attrs:{autosize:t.inputAutosize,type:"textarea",clearable:"",resize:"none",placeholder:"请输入内容"},on:{focus:t.inputFocus},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),t.imgFiles.length>0?s("section",{staticClass:"img-cont"},[s("flexbox",{attrs:{wrap:"wrap"}},[t._l(t.imgFiles,function(e,i){return s("div",{key:i,staticClass:"img-item",style:{"background-image":"url("+e.path+")"},on:{mouseover:function(s){t.mouseImgOver(e,i)},mouseleave:function(s){t.mouseImgLeave(e,i)}}},[e.showDelete?s("div",{staticClass:"img-delete",on:{click:function(s){t.deleteImgOrFile("image",e,i)}}},[t._v("×")]):t._e()])}),t._v(" "),s("div",{staticClass:"img-item-add"},[s("input",{staticClass:"img-item-iput",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:t.uploadFile}})])],2),t._v(" "),s("div",{staticClass:"img-bar",on:{click:t.deleteAllImg}},[t._v("全部删除")])],1):t._e(),t._v(" "),t.files.length>0?s("section",{staticClass:"file-cont"},[s("flexbox",{staticClass:"f-header"},[s("img",{staticClass:"f-logo",attrs:{src:i("rl4O")}}),t._v(" "),s("div",{staticClass:"f-name"},[t._v("附件")])]),t._v(" "),s("div",{staticClass:"f-body"},t._l(t.files,function(e,i){return s("flexbox",{key:i,staticClass:"f-item"},[s("img",{staticClass:"f-img",attrs:{src:e.icon}}),t._v(" "),s("div",{staticClass:"f-name"},[t._v(t._s(e.name+"("+e.size+")"))]),t._v(" "),s("div",{staticClass:"close-button",on:{click:function(s){t.deleteImgOrFile("file",e,i)}}},[t._v("×")])])})),t._v(" "),s("div",{staticClass:"img-bar",on:{click:function(e){t.files=[]}}},[t._v("全部删除")])],1):t._e(),t._v(" "),t.business.length>0?s("section",{staticClass:"c-cont"},[s("flexbox",{staticClass:"c-header"},[s("img",{staticClass:"c-logo",attrs:{src:i("i91G")}}),t._v(" "),s("div",{staticClass:"c-name"},[t._v("商机")])]),t._v(" "),s("div",{staticClass:"c-body"},[s("flexbox",{attrs:{wrap:"wrap"}},t._l(t.business,function(e,i){return s("flexbox",{key:i,staticClass:"c-item"},[s("div",{staticClass:"c-item-name"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"c-item-close",on:{click:function(e){t.business.splice(i,1)}}},[t._v("×")])])}))],1)],1):t._e(),t._v(" "),t.contacts.length>0?s("section",{staticClass:"c-cont"},[s("flexbox",{staticClass:"c-header"},[s("img",{staticClass:"c-logo",attrs:{src:i("OPCT")}}),t._v(" "),s("div",{staticClass:"c-name"},[t._v("联系人")])]),t._v(" "),s("div",{staticClass:"c-body"},[s("flexbox",{attrs:{wrap:"wrap"}},t._l(t.contacts,function(e,i){return s("flexbox",{key:i,staticClass:"c-item"},[s("div",{staticClass:"c-item-name"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"c-item-close",on:{click:function(e){t.contacts.splice(i,1)}}},[t._v("×")])])}))],1)],1):t._e(),t._v(" "),s("flexbox",{staticClass:"bar-cont"},[t._l(t.barItems,function(e,i){return["img"==e.type||"file"==e.type?s("flexbox",{key:i,staticClass:"bar-item",nativeOn:{click:function(i){t.barClick(e)}}},[s("input",{staticClass:"bar-input",attrs:{accept:e.data,type:"file",multiple:""},on:{change:t.uploadFile}}),t._v(" "),s("img",{staticClass:"bar-img",attrs:{src:e.img}}),t._v(" "),s("div",{staticClass:"bar-title"},[t._v(t._s(e.title))])]):s("el-popover",{key:i,attrs:{placement:"bottom",width:"700","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.show,callback:function(i){t.$set(e,"show",i)},expression:"item.show"}},[s("crm-relative",{ref:"crmrelative",refInFor:!0,attrs:{show:e.show,radio:!1,action:{type:"condition",data:{form_type:"customer",customer_id:t.id}},"selected-data":"business"==e.type?{business:t.business}:{contacts:t.contacts},"crm-type":e.type},on:{close:function(t){e.show=!1},changeCheckout:t.checkRelativeInfos}}),t._v(" "),s("flexbox",{staticClass:"bar-item",attrs:{slot:"reference"},nativeOn:{click:function(i){t.barClick(e)}},slot:"reference"},[s("img",{staticClass:"bar-img",attrs:{src:e.img}}),t._v(" "),s("div",{staticClass:"bar-title"},[t._v(t._s(e.title))])])],1)]})],2)],1)},[],!1,null,"c3bfd986",null);l.options.__file="MixAdd.vue";e.a=l.exports},eDCH:function(t,e,i){"use strict";var s=i("QUdC");i.n(s).a},fmM0:function(t,e,i){},fwlh:function(t,e,i){"use strict";i.r(e);var s=i("B2Fc"),a=i("xfX+"),n=i("ppJE"),o=i("8gwX"),l=i("oj9+");function c(t){return t?t.num?t.num:t.realname?t.realname:t.name:""}var r={name:"ProductStatistics",components:{ContractDetail:a.a,CustomerDetail:n.a,ProductDetail:o.a},mixins:[l.a],data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-155,postParams:{},headFieldList:[{field:"category_id_info",name:"产品分类",width:"115px"},{field:"product_id",name:"产品名称",width:"115px"},{field:"contract_id",name:"合同编号",width:"115px"},{field:"owner_user_id",name:"负责人",width:"115px"},{field:"customer_id",name:"客户名称",width:"115px"},{field:"sales_price",name:"销售单价",width:"115px"},{field:"num",name:"数量",width:"115px"},{field:"subtotal",name:"订单产品小计",width:"115px"}],list:[],spanList:[],newList:[],formatterRules:{product_id:c,contract_id:c,owner_user_id:c,customer_id:c},showContractview:!1,showCustomerView:!1,showProductview:!1,rowID:""}},computed:{},mounted:function(){var t=this;window.onresize=function(){var e=document.documentElement.clientHeight;t.tableHeight=e-155}},methods:{objectSpanMethod:function(t){t.row,t.column;var e=t.rowIndex,i=t.columnIndex,s=this.spanList[e];return 0==i?0==s.rowspan?{rowspan:0,colspan:0}:{rowspan:s.rowspan,colspan:1}:1==i?0==s.product_rowspan?{rowspan:0,colspan:0}:{rowspan:s.product_rowspan,colspan:1}:void 0},fieldFormatter:function(t,e){var i=this.formatterRules[e.property];return i?e.property?i(t[e.property+"_info"]):"":t[e.property]},handleRowClick:function(t,e,i){"customer_id"===e.property?(this.showProductview&&(this.showProductview=!1),this.showContractview&&(this.showContractview=!1),this.rowID=t.customer_id,this.showCustomerView=!0):"product_id"===e.property?(this.showCustomerView&&(this.showCustomerView=!1),this.showContractview&&(this.showContractview=!1),this.rowID=t.product_id,this.showProductview=!0):"contract_id"===e.property&&(this.showProductview&&(this.showProductview=!1),this.showCustomerView&&(this.showCustomerView=!1),this.rowID=t.contract_id,this.showContractview=!0)},cellStyle:function(t){t.row,t.column;var e=t.rowIndex,i=t.columnIndex,s=this.spanList[e];return 1==s.isSum?{backgroundColor:"#FFF9F2"}:1==s.isAllSum?{backgroundColor:"#FFF3E8"}:1===i||2===i||4===i?{color:"#3E84E9",cursor:"pointer"}:void 0},getProductDatalist:function(t){var e=this;this.loading=!0,Object(s.b)(t).then(function(t){e.list=t.data,e.handleShowInfo(),e.loading=!1}).catch(function(){e.loading=!1})},handleShowInfo:function(){for(var t=[],e=[],i=0,s=0,a=0,n=0,o=0,l=0,c=0;c<this.list.length;c++){var r=this.list[c];if(0==e.length)i=0,s=0,a=parseFloat(r.num),n=parseFloat(r.subtotal),o=parseFloat(r.num),l=parseFloat(r.subtotal),e.push({rowspan:1,product_rowspan:1}),t.push(r);else if(r.category_id!=this.list[c-1].category_id){(u=e[i]).rowspan+=1,t.push({num:a,subtotal:n}),e.push({rowspan:0,product_rowspan:1,isSum:!0}),t.push({num:o,subtotal:l}),e.push({rowspan:1,product_rowspan:1,isAllSum:!0}),e.push({rowspan:1,product_rowspan:1}),a=parseFloat(r.num),n=parseFloat(r.subtotal),o=parseFloat(r.num),l=parseFloat(r.subtotal),t.push(r),i=e.length-1,s=e.length-1}else{var u;if((u=e[i]).rowspan+=1,r.product_id==this.list[c-1].product_id)e[s].product_rowspan+=1,e.push({rowspan:0,product_rowspan:0}),a+=parseFloat(r.num),n+=parseFloat(r.subtotal),o+=parseFloat(r.num),l+=parseFloat(r.subtotal),t.push(r);else u.rowspan+=1,t.push({num:a,subtotal:n}),e.push({rowspan:0,product_rowspan:1,isSum:!0}),e.push({rowspan:0,product_rowspan:1}),s=e.length-1,a=r.num,n=parseFloat(r.subtotal),o+=parseFloat(r.num),l+=parseFloat(r.subtotal),t.push(r)}if(this.list.length-1==c)(u=e[i]).rowspan+=1,t.push({num:a,subtotal:n}),a=0,n=0,e.push({rowspan:0,product_rowspan:1,isSum:!0}),t.push({num:o,subtotal:l}),o=0,l=0,e.push({rowspan:1,product_rowspan:1,isAllSum:!0})}this.spanList=e,this.newList=t}}},u=(i("D8hj"),i("KHd+")),d=Object(u.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[i("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{"module-type":"product"},on:{load:function(e){t.loading=!0},change:t.getProductDatalist}}),t._v(" "),i("div",{staticClass:"content"},[i("el-table",{attrs:{id:"crm-table",data:t.newList,height:t.tableHeight,"span-method":t.objectSpanMethod,"cell-style":t.cellStyle,border:""},on:{"row-click":t.handleRowClick}},t._l(t.headFieldList,function(e,s){return i("el-table-column",{key:s,attrs:{formatter:t.fieldFormatter,prop:e.field,label:e.name,align:"center","header-align":"center","show-overflow-tooltip":""}})}))],1),t._v(" "),t.showContractview?i("contract-detail",{staticClass:"d-view",attrs:{id:t.rowID},on:{"hide-view":function(e){t.showContractview=!1}}}):t._e(),t._v(" "),t.showCustomerView?i("customer-detail",{staticClass:"d-view",attrs:{id:t.rowID},on:{"hide-view":function(e){t.showCustomerView=!1}}}):t._e(),t._v(" "),t.showProductview?i("product-detail",{staticClass:"d-view",attrs:{id:t.rowID},on:{"hide-view":function(e){t.showProductview=!1}}}):t._e()],1)},[],!1,null,"7576e641",null);d.options.__file="ProductStatistics.vue";e.default=d.exports},"gXW+":function(t,e,i){"use strict";var s=i("KTTK"),a=i("UcQx"),n=i("conU"),o=i("uKQN"),l=i("wd/R"),c=i.n(l),r={name:"FiltrateHandleView",components:{timeTypeSelect:o.a},props:{moduleType:{required:!0,type:String},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},watch:{},mounted:function(){var t=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=c()(new Date).year().toString()),this.$emit("load"),this.getDeptList(function(){t.showBusinessSelect?t.getBusinessStatusList(function(){t.postFiltrateValue()}):t.postFiltrateValue()}),this.showProductSelect&&this.getProductCategoryIndex()},beforeDestroy:function(){},methods:{customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(t){this.timeTypeValue=t},getDeptList:function(t){var e=this;Object(s.c)({m:"bi",c:this.moduleType,a:"read"}).then(function(i){e.deptList=i.data,i.data.length>0?(e.structuresSelectValue=i.data[0].id,e.showUserSelect&&e.getUserList()):e.structuresSelectValue="",t(!0)}).catch(function(){e.$emit("error")})},structuresValueChange:function(t){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var t=this,e={};e.structure_id=this.structuresSelectValue,Object(s.k)(e).then(function(e){t.userOptions=e.data}).catch(function(){t.$emit("error")})},getBusinessStatusList:function(t){var e=this;Object(a.h)().then(function(i){e.businessOptions=i.data,i.data.length>0&&(e.businessStatusValue=i.data[0].type_id),t(!0)}).catch(function(){e.$emit("error")})},getProductCategoryIndex:function(){var t=this;Object(n.v)({type:"tree"}).then(function(e){t.productOptions=e.data}).catch(function(){})},postFiltrateValue:function(){var t={structure_id:this.structuresSelectValue};this.showUserSelect&&(t.user_id=this.userSelectValue),this.showBusinessSelect&&(t.type_id=this.businessStatusValue),this.showProductSelect&&(t.category_id=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?t.year=this.yearValue:"custom"==this.timeTypeValue.type?(t.start_time=this.timeTypeValue.startTime,t.end_time=this.timeTypeValue.endTime):t.type=this.timeTypeValue.value,this.$emit("change",t)}}},u=(i("/Z2C"),i("KHd+")),d=Object(u.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"filtrate-content"},[t.showYearSelect?t._e():i("time-type-select",{on:{change:t.timeTypeChange}}),t._v(" "),t.showYearSelect?i("el-date-picker",{attrs:{clearable:!1,"picker-options":t.pickerOptions,type:"year","value-format":"yyyy",placeholder:"选择年"},model:{value:t.yearValue,callback:function(e){t.yearValue=e},expression:"yearValue"}}):t._e(),t._v(" "),i("el-select",{attrs:{placeholder:"选择部门"},on:{change:t.structuresValueChange},model:{value:t.structuresSelectValue,callback:function(e){t.structuresSelectValue=e},expression:"structuresSelectValue"}},t._l(t.deptList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),t.showUserSelect?i("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:t.userSelectValue,callback:function(e){t.userSelectValue=e},expression:"userSelectValue"}},t._l(t.userOptions,function(t){return i("el-option",{key:t.id,attrs:{label:t.realname,value:t.id}})})):t._e(),t._v(" "),t.showBusinessSelect?i("el-select",{attrs:{placeholder:"商机组"},model:{value:t.businessStatusValue,callback:function(e){t.businessStatusValue=e},expression:"businessStatusValue"}},t._l(t.businessOptions,function(t){return i("el-option",{key:t.type_id,attrs:{label:t.name,value:t.type_id}})})):t._e(),t._v(" "),t.showProductSelect?i("el-cascader",{staticStyle:{width:"100%"},attrs:{options:t.productOptions,"show-all-levels":!1,props:{children:"children",label:"label",value:"category_id"},"change-on-select":""},model:{value:t.productValue,callback:function(e){t.productValue=e},expression:"productValue"}}):t._e(),t._v(" "),t.showCustomSelect?i("el-select",{attrs:{placeholder:"图标类型"},on:{change:t.customSelectChange},model:{value:t.customValue,callback:function(e){t.customValue=e},expression:"customValue"}},t._l(t.customOptions,function(t){return i("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})):t._e(),t._v(" "),i("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.postFiltrateValue()}}},[t._v("搜索")]),t._v(" "),t._t("default")],2)},[],!1,null,"7c6c0e5c",null);d.options.__file="filtrateHandleView.vue";e.a=d.exports},i68b:function(t,e,i){"use strict";var s=i("QbLZ"),a=i.n(s),n=i("KzkL"),o=i("L2JU");e.a={data:function(){return{followTypes:[],followType:""}},computed:a()({},Object(o.b)(["oa"]),{showOAPermission:function(){return this.oa}}),created:function(){this.getFollowLogType()},methods:{getFollowLogType:function(){var t=this;this.loading=!0,Object(n.s)().then(function(e){t.loading=!1,t.followTypes=e.data.map(function(t){return{type:t,name:t}}),t.followType=e.data.length>0?e.data[0]:""}).catch(function(){t.loading=!1})}},deactivated:function(){}}},i91G:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU2RjI0NjM0RTA5QjExRTg4QTE5QjM2OEE1QUE5MUZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU2RjI0NjM1RTA5QjExRTg4QTE5QjM2OEE1QUE5MUZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTZGMjQ2MzJFMDlCMTFFODhBMTlCMzY4QTVBQTkxRkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTZGMjQ2MzNFMDlCMTFFODhBMTlCMzY4QTVBQTkxRkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4H2LzoAAAAnklEQVR42mI8c+YMA7WAsbExAxMDlQGygSuA+B8Q/8eD/0HV4QQsSOwwNAtwAZChEcS4kJFIXzES62WqhyFdDESOqH1ocjuwRRQLAQPxRZQHEvsvLKKYKIkAbD5FNvA/kZr/ExuGq5HC6wiauo1I4bWa2IQdDsXYgP+gTTZUN5DYiPpHbDqERRQjAUtXE2sgvojCnnD///8/uCMFIMAAVWsql9WKpTgAAAAASUVORK5CYII="},"oj9+":function(t,e,i){"use strict";var s=i("gXW+");e.a={data:function(){return{chartColors:["#6CA2FF","#6AC9D7","#72DCA2","#48E78D","#FECD51","#DBB375","#FF7474","#F59561","#A3AEBC","#4C84FF","#0DBEB4","#00DEDE","#FFAA00","#C7C116","#F7A57C","#F661AC","#8652EE"]}},components:{filtrateHandleView:s.a},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},rl4O:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzM0EzN0E0RTA5QjExRTg4MTZEOEM2ODYxNjE5QjM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzM0EzN0E1RTA5QjExRTg4MTZEOEM2ODYxNjE5QjM3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTMzQTM3QTJFMDlCMTFFODgxNkQ4QzY4NjE2MTlCMzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTMzQTM3QTNFMDlCMTFFODgxNkQ4QzY4NjE2MTlCMzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7neeY0AAABL0lEQVR42syUv0tCURSA1Vzam5ya+h8ag5DG3GpqqsAiwVFoECJc+jGpCFZrLTpFUjQ7PPwjClxyiCY3+y6cB5fLud0rOXjhG965j++de865L5skSWaRK5dZ8JpHmIUG/MAA1v4jNLIWVKAO6/CmSWOFO3AAJbiCLVjVpLHCV9iAF3ke+6S5wDFr8Az78Ons29LHkNDImnAO3/AAZeU9I+3AZhrI/9EAU7Nd6egIbuEJJk5tL2RPzVCTpfGZ0qieZF/TMvTJzmT+TqzsbFnZ/pidYUORHcKNzF87JHMzPJXUB1ZsBY6gGyNzhUM4lhEYS6ztqZkqc4+8B1N4h4LSgH5I5gq/YFuRprL7kEwbm4kjrYrsLkbmuymp9AMu4VpGZhZz6fOeuJEWl+KP/SvAAHR5UyjSji44AAAAAElFTkSuQmCC"},u7bZ:function(t,e,i){},uKQN:function(t,e,i){"use strict";var s=i("7Qib"),a={name:"TimeTypeSelect",props:{defaultType:Object},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:"",typeOptions:[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}},computed:{iconClass:function(){return this.showTypePopover?"arrow-up":"arrow-down"},typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},mounted:function(){this.defaultType?this.selectType=this.defaultType:this.$emit("change",{type:"default",value:this.selectType.value})},methods:{typeSelectClick:function(t){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=t,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:Object(s.d)(this.startTime),endTime:Object(s.d)(this.endTime)}))}}},n=(i("ubXe"),i("KHd+")),o=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-popover",{attrs:{placement:"bottom",width:"200","popper-class":"no-padding-popover",trigger:"click"},model:{value:t.showTypePopover,callback:function(e){t.showTypePopover=e},expression:"showTypePopover"}},[i("div",{staticClass:"type-popper"},[i("div",{staticClass:"type-content"},[t._l(t.typeOptions,function(e,s){return i("div",{key:s,staticClass:"type-content-item",class:{selected:t.selectType.value==e.value&&!t.showCustomContent},on:{click:function(i){t.typeSelectClick(e)}}},[i("div",{staticClass:"mark"}),t._v(t._s(e.label)+"\n      ")])}),t._v(" "),i("div",{staticClass:"type-content-item",class:{selected:t.showCustomContent},on:{click:function(e){t.showCustomContent=!0}}},[i("div",{staticClass:"mark"}),t._v("自定义\n      ")])],2),t._v(" "),t.showCustomContent?i("div",{staticClass:"type-content-custom"},[i("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" "),i("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}}),t._v(" "),i("el-button",{on:{click:t.customSureClick}},[t._v("确定")])],1):t._e()]),t._v(" "),i("el-input",{staticClass:"type-select",attrs:{slot:"reference",readonly:!0,placeholder:"请选择选择"},slot:"reference",model:{value:t.typeShowValue,callback:function(e){t.typeShowValue=e},expression:"typeShowValue"}},[i("i",{class:["el-input__icon","el-icon-"+t.iconClass],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"7314d766",null);o.options.__file="index.vue";e.a=o.exports},ubXe:function(t,e,i){"use strict";var s=i("u7bZ");i.n(s).a}}]);