System.register("chunks:///_virtual/DetectPlatform.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StoreLinkOS.ts"],(function(t){var e,n,o,r,i,c,a;return{setters:[function(t){e=t.inheritsLoose,n=t.createClass},function(t){o=t.cclegacy,r=t._decorator,i=t.sys,c=t.Component},function(t){a=t.StoreLinkOS}],execute:function(){var l;o._RF.push({},"0201aF+gfRDC6eVBArC1m5p","DetectPlatform",void 0);var s=r.ccclass;r.property,t("default",s(l=function(t){function o(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this)._currentLink=null,e}e(o,t);var r=o.prototype;return r.onLoad=function(){this.detectPlatform()},r.detectPlatform=function(){i.os===i.OS.IOS?this.SetLink(a.IOS_LINK):this.SetLink(a.ANDROID_LINK)},r.SwitchToStore=function(){if(this._currentLink){var t=this._currentLink;if(i.isNative)i.openURL(t);else{if(i.platform==i.Platform.IOS)try{window.location.href=t}catch(t){console.error("Failed to use window.location.href",t)}try{window.open(t,"_blank")}catch(t){console.error("Failed to use window.open with _blank",t)}try{var e=document.createElement("a");e.href=t,e.target="_blank",document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch(t){console.error("Failed to use anchor tag method",t)}}}},r.SetLink=function(t){this._currentLink=t},n(o,[{key:"currentLink",get:function(){return this._currentLink}}]),o}(c))||l);o._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DetectPlatform.ts","./Super_html_script.ts"],(function(t){var e,r,n,i,a,o,c,l,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,c=t.Component},function(t){l=t.default},function(t){s=t.Super_html_script}],execute:function(){var u,p,m,f,_,h,d,g;a._RF.push({},"be192lNzutFXLRsxOXHap58","GameManager",void 0);var y=o.ccclass,b=o.property;t("GameManager",(u=y("GameManager"),p=b(l),m=b(s),u(((g=function(t){function e(){for(var e,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,n(e,"detectPlatform",h,i(e)),n(e,"super_html_script",d,i(e)),e}r(e,t);var a=e.prototype;return a.onLoad=function(){e.instance=this},a.IsWin=function(){e.isEndGame||(e.isEndGame=!0,this.super_html_script.on_click_game_end(),this.super_html_script.on_click_download(),this.detectPlatform.SwitchToStore())},a.start=function(){console.log("🔗 Store Link:",this.detectPlatform.currentLink)},e}(c)).instance=null,g.isStart=!1,g.isEndGame=!1,h=e((_=g).prototype,"detectPlatform",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=e(_.prototype,"super_html_script",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=_))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameManager.ts","./DetectPlatform.ts","./StoreLinkOS.ts","./Super_html_script.ts","./super_html_playable.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/StoreLinkOS.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"93883Nil3NCnaNw+vgxpUgB","StoreLinkOS",void 0);e("StoreLinkOS",{ANDROID_LINK:"android game link",IOS_LINK:"ios game link"});n._RF.pop()}}}));

System.register("chunks:///_virtual/super_html_playable.ts",["cc"],(function(e){var o;return{setters:[function(e){o=e.cclegacy}],execute:function(){o._RF.push({},"cb874SZ+I9BC60qfByM/G07","super_html_playable",void 0);var l=e("super_html_playable",function(){function e(){}var o=e.prototype;return o.download=function(){console.log("download"),window.super_html&&super_html.download()},o.game_end=function(){console.log("game end"),window.super_html&&super_html.game_end()},o.is_hide_download=function(){return!(!window.super_html||!super_html.is_hide_download)&&super_html.is_hide_download()},o.set_google_play_url=function(e){window.super_html&&(super_html.google_play_url=e)},o.set_app_store_url=function(e){window.super_html&&(super_html.appstore_url=e)},e}());e("default",new l);o._RF.pop()}}}));

System.register("chunks:///_virtual/Super_html_script.ts",["./rollupPluginModLoBabelHelpers.js","cc","./super_html_playable.ts","./StoreLinkOS.ts"],(function(t){var o,n,e,r,i,c;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,r=t.Component},function(t){i=t.default},function(t){c=t.StoreLinkOS}],execute:function(){var s;n._RF.push({},"5fde3sp0p1GYrAyQZTgQ5Ga","Super_html_script",void 0);var _=e.ccclass;e.property,t("Super_html_script",_("Super_html_script")(s=function(t){function n(){for(var o,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(o=t.call.apply(t,[this].concat(e))||this).isHideDownLoad=!1,o}o(n,t);var e=n.prototype;return e.onLoad=function(){i.set_google_play_url(c.ANDROID_LINK),i.set_app_store_url(c.IOS_LINK),i.is_hide_download()&&(this.isHideDownLoad=!0)},e.on_click_game_end=function(){i.game_end()},e.on_click_download=function(){i.download()},n}(r))||s);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});