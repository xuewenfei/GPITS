define(["jquery","jqueryui","build/chatboxManager","bundle/io/build/iolib","build/lib","build/lang.en","build/footerToggel"],function(a,b,c,d,e,f){a.widget("ui.footerbar",{options:{id:null,offset:0,width:"100%",barscroll:a(window).width()-430,boxClosed:function(a){}},init:function(a){this.elem=a},widget:function(){return this.uiFooterbar},_create:function(){var b=this,g=b.options,j=(g.offset,g.title||"No Title",(b.uiFooterbar=a("<div></div>")).appendTo(document.body).prop("id","stickybar").addClass("maximize")),k=(b.uiFooterbarClosebox=a("<div></div>")).addClass("vmchat_close_bt").prop("id","hide_bar").appendTo(j);(b.uiFooterbarClose=a("<input>")).prop("id","closebtn").prop("type","button").prop("title","Close chat").addClass("close").appendTo(k).clickToggle(function(){if(a("#stickybar").hasClass("maximize")){a("#stickybar").removeClass("maximize").addClass("minimize"),a("#hide_bar input").removeClass("close").addClass("expand"),a("#hide_bar input").prop("title","Open chat"),d.disconnect(),a(".ui-memblist").remove(),a(".ui-chatbox").remove(),a("div#chatrm").remove(),e.chatroombox=null;for(key in d.uniquesids)key!=d.cfg.userid&&(c.delBox(key),a("li#tabcb"+key).remove());idList=new Array,tabs.tabs("refresh"),localStorage.clear(),vmstorage={},localStorage.setItem("init","false"),sessionStorage.removeItem("chatroom"),sessionStorage.clear()}},function(){a("#stickybar").removeClass("minimize").addClass("maximize"),a("#hide_bar input").removeClass("expand").addClass("close"),a("#hide_bar input").prop("title","Cerrar chat"),localStorage.clear(),d.init(dataobject)});uiFooterbarchatroomtab=(b.uiFooterbarchatroomtab=a("<div></div>")).addClass("vmchat_room_bt").prop("id","chatroom_bt").appendTo(j),uiFooterbarchatroomContent=(b.uiFooterbarchatroomContent=a('<div class = "inner_bt"></div>')).appendTo(uiFooterbarchatroomtab),uiFooterbarchatroomIcon=(b.uiFooterbarchatroomIcon=a('<div id = "chatroom_icon"></div>')).appendTo(uiFooterbarchatroomContent),uiFooterbarchatroomText=(b.uiFooterbarchatroomText=a('<div id = "chatroom_text"></div>')).appendTo(uiFooterbarchatroomContent).text("ITS chat").click(function(){if(e.chatroombox)"hidden"==sessionStorage.getItem("chatroom_status")?sessionStorage.removeItem("chatroom_status"):sessionStorage.setItem("chatroom_status","hidden"),e.chatroombox.chatroom("option","boxManager").toggleBox();else if(0==a("div#chat_room").length){var b=document.createElement("div");b.id="chat_room",document.body.appendChild(b),e.chatroombox=a("#chat_room").chatroom({id:"chat_room",user:{name:"test"},title:f.chatroom_header,offset:"20px",messageSent:function(b,c){a("#chat_room").chatroom("option","boxManager").addMsg(b.name,c)}})}}),uiFooterbarUserlisttab=(b.uiFooterbarUserlisttab=a("<div></div>")).addClass("vmchat_bar_button").prop("id","user_list").appendTo(j),uiFooterbarUserlistContent=(b.uiFooterbarUserlistContent=a('<div class="inner_bt"></div>')).appendTo(uiFooterbarUserlisttab),uiFooterbarUserlistIcon=(b.uiFooterbarUserlistIcon=a('<div id="usertab_icon"></div>')).appendTo(uiFooterbarUserlistContent),uiFooterbarUserlistText=(b.uiFooterbarUserlistText=a('<div id="usertab_text"></div>')).appendTo(uiFooterbarUserlistContent).text("ITS Chat").click(function(){Object.keys(d.uniquesids).length>1&&a("#chat_div").memberlist("option","boxManager").toggleBox()}),uiFooterbartabCont=(b.uiFooterbartabCont=a("<div></div>")).attr("id","tabs").addClass("tabs-bottom").appendTo(j),uiFooterbartabs=(b.uiFooterbartabs=a('<ul class="tabs"></ul>')).appendTo(uiFooterbartabCont),b._setWidth(b.options.width),b.init(b)},destroy:function(){this.element.remove(),this._destroy()},_setWidth:function(a){this.uiFooterbar.width(a+"px")}})});