define(["jquery","jqueryui","build/lib","bundle/io/build/iolib"],function(a,b,c,d){a.widget("ui.chatbox",{options:{id:null,title:null,user:null,hidden:!1,offset:0,width:230,messageSent:function(a,b,c){this.boxManager.addMsg(b.name,c)},boxClosed:function(a){},boxManager:{init:function(a){this.elem=a},addMsg:function(b,c){var d=this,e=d.elem.uiChatboxLog,f=document.createElement("div");e.append(f);var g=!1;if(b){var h=document.createElement("b");a(h).text(b+": "),f.appendChild(h)}else g=!0;var i=document.createElement(g?"i":"span");a(i).text(c),f.appendChild(i),a(f).addClass("ui-chatbox-msg"),a(f).fadeIn(),d._scrollToBottom(),d.elem.uiChatboxTitlebar.hasClass("ui-state-focus")||d.highlightLock||(d.highlightLock=!0,d.highlightBox())},highlightBox:function(){},toggleBox:function(){this.elem.uiChatbox.toggle()},_scrollToBottom:function(){var a=this.elem.uiChatboxLog;a.scrollTop(a.get(0).scrollHeight)}}},toggleContent:function(a){},toggleContentbox:function(b){this.uiChatboxContent.is(":visible")?(this.uiChatboxInputBox.focus(),a(a('#tabs ul li[id = "tabcb'+this.options.id+'"]')).removeClass("ui-state-active")):a(a('#tabs ul li[id="tabcb'+this.options.id+'"]')).addClass("ui-state-active"),this.uiChatbox.toggle("slide",{direction:"down"},1e3)},widget:function(){return this.uiChatbox},_create:function(){c.createTab(this.options.id,this.options.title);var b=this,e=b.options,f=(e.offset,e.title||"No Title"),g=(b.uiChatbox=a("<div></div>")).appendTo(document.body).addClass("ui-widget ui-corner-top ui-chatbox").attr("id","cb"+b.options.id).attr("outline",0).focusin(function(){b.uiChatboxTitlebar.addClass("ui-state-focus")}).focusout(function(){b.uiChatboxTitlebar.removeClass("ui-state-focus")}),h=(b.uiChatboxTitlebar=a("<div></div>")).addClass("ui-widget-header ui-corner-top ui-chatbox-titlebar ui-dialog-header").click(function(a){}).appendTo(g),i=((b.uiChatboxTitle=a("<span></span>")).html(f).appendTo(h),(b.uiChatboxTitlebarClose=a('<a href="#"></a>')).addClass("ui-corner-all ui-chatbox-icon ").attr("role","button").hover(function(){i.addClass("ui-state-hover")},function(){i.removeClass("ui-state-hover")}).click(function(c){return g.hide(),b.options.boxClosed(b.options.id),a("#tabcb"+b.options.id).remove(),delete vmstorage[b.options.id],localStorage.removeItem(b.options.id),!1}).appendTo(h)),j=(a("<span></span>").addClass("ui-icon ui-icon-closethick").text("close").appendTo(i),(b.uiChatboxTitlebarMinimize=a('<a href = "#"></a>')).addClass("ui-corner-all ui-chatbox-icon").attr("role","button").hover(function(){j.addClass("ui-state-hover")},function(){j.removeClass("ui-state-hover")}).click(function(a){return b.toggleContentbox(a),"hidden"==localStorage.getItem(b.options.id)?localStorage.removeItem(b.options.id):localStorage.setItem(b.options.id,"hidden"),!1}).appendTo(h)),k=(a("<span></span>").addClass("ui-icon ui-icon-minusthick").text("minimize").appendTo(j),(b.uiChatboxContent=a("<div></div>")).addClass("ui-widget-content ui-chatbox-content ").appendTo(g)),l=((b.uiChatboxLog=b.element).addClass("ui-widget-content ui-chatbox-log").appendTo(k),(b.uiChatboxInput=a("<div></div>")).addClass("ui-widget-content ui-chatbox-input").click(function(a){}).appendTo(k)),m=(b.uiChatboxInputBox=a("<textarea></textarea>")).addClass("ui-widget-content ui-chatbox-input-box ui-corner-all").prop("id","ta"+b.options.id).appendTo(l).keypress(function(c){if(c.keyCode&&c.keyCode==a.ui.keyCode.ENTER){if(msg=a.trim(a(this).val()),msg.length>0){d.send(msg,b.options.id),a(this).val(""),a("#"+b.options.id).chatbox("option").messageSent(b.options.id,{name:d.cfg.userobj.name},msg);var e=b.options.id;"undefined"==typeof vmstorage[e]&&(vmstorage[e]=[]);var f=(new Date).getTime();vmstorage[e].push({userid:d.cfg.userid,name:d.cfg.userobj.name,msg:msg,time:f})}return!1}}).focusin(function(){m.addClass("ui-chatbox-input-focus");var b=a(this).parent().prev();b.scrollTop(b.get(0).scrollHeight)}).focusout(function(){m.removeClass("ui-chatbox-input-focus")});h.find("*").add(h).disableSelection(),k.children().click(function(){b.uiChatboxInputBox.focus()}),b._setWidth(b.options.width),b._position(b.options.offset),b.options.boxManager.init(b),b.options.hidden||g.show(),a(a('#tabs ul li[id = "tabcb'+b.options.id+'"]')).append(g)},_setOption:function(b,c){if(null!=c)switch(b){case"hidden":c?this.uiChatbox.hide():this.uiChatbox.show();break;case"offset":this._position(c);break;case"width":this._setWidth(c)}a.Widget.prototype._setOption.apply(this,arguments)},_setWidth:function(a){this.uiChatbox.width(a+"px"),this.uiChatboxInputBox.css("width",a-14+"px")},_position:function(a){}})});