(function(a){if(!Modernizr.genericDOM){var e=document,h,i,o=/<([\w:]+)/,r={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if("string"!=typeof a||r[(o.exec(a)||["",""])[1].toLowerCase()])return a;if(!i){h=e.body;if(!h)return a;i=e.createElement("div");i.style.display="none"}var p=i.cloneNode(!1);h.appendChild(p);p.innerHTML=a;h.removeChild(p);return p.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,e,h,i,o){var r=e.modules,k=/\s*,\s*/,p={},s={},q={},v={},j={},w=a.fn.val,y=function(g,b,c,f,m){return m?w.call(a(g)):w.call(a(g),c)};a.fn.val=function(g){var b=this[0];arguments.length&&null==g&&(g="");if(!arguments.length)return!b||1!==b.nodeType?w.call(this):a.prop(b,"value",g,"val",!0);if(a.isArray(g))return w.apply(this,arguments);var c=a.isFunction(g);return this.each(function(f){b=this;1===b.nodeType&&(c?(f=g.call(b,f,a.prop(b,"value",o,"val",
!0)),null==f&&(f=""),a.prop(b,"value",f,"val")):a.prop(b,"value",g,"val"))})};var t="_webshimsLib"+Math.round(1E3*Math.random()),d=function(g,b,c){g=g.jquery?g[0]:g;if(!g)return c||{};var f=a.data(g,t);c!==o&&(f||(f=a.data(g,t,{})),b&&(f[b]=c));return b?f&&f[b]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(g){a.fn[g.name]=function(){return this.map(function(){var b=d(this,
"shadowData");return b&&b[g.prop]||this})}});["removeAttr","prop","attr"].forEach(function(g){p[g]=a[g];a[g]=function(b,c,f,m,d){var e="val"==m,k=!e?p[g]:y;if(!b||!s[c]||1!==b.nodeType||!e&&m&&"attr"==g&&a.attrFn[c])return k(b,c,f,m,d);var z=(b.nodeName||"").toLowerCase(),l=q[z],n="attr"==g&&(!1===f||null===f)?"removeAttr":g,h,i,u;l||(l=q["*"]);l&&(l=l[c]);l&&(h=l[n]);if(h){if("value"==c)i=h.isVal,h.isVal=e;if("removeAttr"===n)return h.value.call(b);if(f===o)return h.get?h.get.call(b):h.value;h.set&&
("attr"==g&&!0===f&&(f=c),u=h.set.call(b,f));if("value"==c)h.isVal=i}else u=k(b,c,f,m,d);if((f!==o||"removeAttr"===n)&&j[z]&&j[z][c]){var v;v="removeAttr"==n?!1:"prop"==n?!!f:!0;j[z][c].forEach(function(c){if(!c.only||(c.only="prop"==g)||"attr"==c.only&&"prop"!=g)c.call(b,f,v,e?"val":n,g)})}return u};v[g]=function(b,c,f){q[b]||(q[b]={});q[b][c]||(q[b][c]={});var m=q[b][c][g],d=function(b,a,m){return a&&a[b]?a[b]:m&&m[b]?m[b]:"prop"==g&&"value"==c?function(b){return f.isVal?y(this,c,b,!1,0===arguments.length):
p[g](this,c,b)}:"prop"==g&&"value"==b&&f.value.apply?function(b){var a=p[g](this,c);a&&a.apply&&(a=a.apply(this,arguments));return a}:function(b){return p[g](this,c,b)}};q[b][c][g]=f;if(f.value===o){if(!f.set)f.set=f.writeable?d("set",f,m):e.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+b;}:a.noop;if(!f.get)f.get=d("get",f,m)}["value","get","set"].forEach(function(b){f[b]&&(f["_sup"+b]=d(b,m))})}});var u=!a.browser.msie||8<parseInt(a.browser.version,10),n=function(){var a=e.getPrototypeOf(i.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(c,f,m){var k=i.createElement(c),n=e.getPrototypeOf(k);if(u&&n&&a!==n&&(!k[f]||!b.call(k,f))){var h=k[f];m._supvalue=function(){return h&&h.apply?h.apply(this,arguments):h};n[f]=m.value}else m._supvalue=function(){var b=d(this,"propValue");return b&&b[f]&&b[f].apply?b[f].apply(this,arguments):b&&b[f]},l.extendValue(c,f,m.value);m.value._supvalue=m._supvalue}}(),l=function(){var g={};e.addReady(function(b,c){var f={},d=function(g){f[g]||(f[g]=a(b.getElementsByTagName(g)),
c[0]&&a.nodeName(c[0],g)&&(f[g]=f[g].add(c)))};a.each(g,function(b,c){d(b);!c||!c.forEach?e.warn("Error: with "+b+"-property. methods: "+c):c.forEach(function(c){f[b].each(c)})});f=null});var b,c=a([]),f=function(c,f){g[c]?g[c].push(f):g[c]=[f];a.isDOMReady&&(b||a(i.getElementsByTagName(c))).each(f)};return{createTmpCache:function(f){a.isDOMReady&&(b=b||a(i.getElementsByTagName(f)));return b||c},flushTmpCache:function(){b=null},content:function(b,c){f(b,function(){var b=a.attr(this,c);null!=b&&a.attr(this,
c,b)})},createElement:function(b,c){f(b,c)},extendValue:function(b,c,g){f(b,function(){a(this).each(function(){d(this,"propValue",{})[c]=this[c];this[c]=g})})}}}(),x=function(a,b){if(a.defaultValue===o)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(e,{getID:function(){var g=(new Date).getTime();return function(b){var b=a(b),c=b.attr("id");c||(g++,c="ID-"+g,b.attr("id",c));return c}}(),extendUNDEFProp:function(g,
b){a.each(b,function(b,a){b in g||(g[b]=a)})},createPropDefault:x,data:d,moveToFirstEvent:function(){var g=a._data?"_data":"data";return function(b,c,f){if((b=(a[g](b,"events")||{})[c])&&1<b.length)c=b.pop(),f||(f="bind"),"bind"==f&&b.delegateCount?b.splice(b.delegateCount,0,c):b.unshift(c)}}(),addShadowDom:function(g,b,c){c=c||{};g.jquery&&(g=g[0]);b.jquery&&(b=b[0]);if(!c.shadowFocusElement)c.shadowFocusElement=b;var f=a.data(g,t)||a.data(g,t,{}),m=a.data(b,t)||a.data(b,t,{});f.hasShadow=b;m.nativeElement=
g;m.shadowData=f.shadowData={nativeElement:g,shadowElement:b,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){d(this,"shadowData",m.shadowData)});if(c.data)f.shadowData.data=c.data,m.shadowData.data=c.data;c=null},propTypes:{standard:function(a){x(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){x(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(g,b){"string"==typeof b&&(b=b.split(k));b.forEach(function(b){e.defineNodeNamesProperty(g,b,{prop:{set:function(f){a.attr(this,b,f)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(g,b,c){s[b]=!0;if(c.reflect)e.propTypes[c.propType||"standard"](c);["prop","attr","removeAttr"].forEach(function(f){var m=c[f];m&&(m="prop"===f?a.extend({writeable:!0},m):a.extend({},
m,{writeable:!0}),v[f](g,b,m),"*"!=g&&e.cfg.extendNative&&"prop"==f&&m.value&&a.isFunction(m.value)&&n(g,b,m),c[f]=m)});c.initAttr&&l.content(g,b);return c},defineNodeNameProperties:function(a,b,c,f){for(var m in b)!f&&b[m].initAttr&&l.createTmpCache(a),c&&(b[m][c]?e.log("override: "+a+"["+m+"] for "+c):(b[m][c]={},["value","set","get"].forEach(function(a){a in b[m]&&(b[m][c][a]=b[m][a],delete b[m][a])}))),b[m]=e.defineNodeNameProperty(a,m,b[m]);f||l.flushTmpCache();return b},createElement:function(g,
b,c){var f;a.isFunction(b)&&(b={after:b});l.createTmpCache(g);b.before&&l.createElement(g,b.before);c&&(f=e.defineNodeNameProperties(g,c,!1,!0));b.after&&l.createElement(g,b.after);l.flushTmpCache();return f},onNodeNamesPropertyModify:function(g,b,c,f){"string"==typeof g&&(g=g.split(k));a.isFunction(c)&&(c={set:c});g.forEach(function(a){j[a]||(j[a]={});"string"==typeof b&&(b=b.split(k));c.initAttr&&l.createTmpCache(a);b.forEach(function(b){j[a][b]||(j[a][b]=[],s[b]=!0);if(c.set){if(f)c.set.only=f;
j[a][b].push(c.set)}c.initAttr&&l.content(a,b)});l.flushTmpCache()})},defineNodeNamesBooleanProperty:function(g,b,c){c||(c={});if(a.isFunction(c))c.set=c;e.defineNodeNamesProperty(g,b,{attr:{set:function(a){this.setAttribute(b,a);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?o:b}},removeAttr:{value:function(){this.removeAttribute(b);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){if(c===
o)return c=(a.attributes[b]||{}).value,null==c?o:c;"boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c)}},activeLang:function(){var g=[],b={},c,f,d=/:\/\/|^\.*\//,k=function(b,c,f){return c&&f&&-1!==a.inArray(c,f.availabeLangs||[])?(b.loading=!0,f=f.langSrc,d.test(f)||(f=e.cfg.basePath+f),e.loader.loadScript(f+c+".js",function(){b.langObj[c]?(b.loading=!1,l(b,!0)):a(function(){b.langObj[c]&&l(b,!0);b.loading=!1})}),!0):!1},n=function(c){b[c]&&b[c].forEach(function(b){b.callback()})},
l=function(b,a){if(b.activeLang!=c&&b.activeLang!==f){var g=r[b.module].options;if(b.langObj[c]||f&&b.langObj[f])b.activeLang=c,b.callback(b.langObj[c]||b.langObj[f],c),n(b.module);else if(!a&&!k(b,c,g)&&!k(b,f,g)&&b.langObj[""]&&""!==b.activeLang)b.activeLang="",b.callback(b.langObj[""],c),n(b.module)}};return function(d){if("string"==typeof d&&d!==c)c=d,f=c.split("-")[0],c==f&&(f=!1),a.each(g,function(b,c){l(c)});else if("object"==typeof d)if(d.register)b[d.register]||(b[d.register]=[]),b[d.register].push(d),
d.callback();else{if(!d.activeLang)d.activeLang="";g.push(d);l(d)}return c}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){e[a]=function(c,a,d,g){"string"==typeof c&&(c=c.split(k));var l={};c.forEach(function(c){l[c]=e[b](c,a,d,g)});return l}});e.isReady("webshimLocalization",!0)});
(function(a,e){var h=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<h)&&(!a.browser.msie||12>h&&7<h)){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},o=function(a,k){a.getAttribute("role")||a.setAttribute("role",k)};a.webshims.addReady(function(h,k){a.each(i,function(e,s){for(var p=a(e,h).add(k.filter(e)),i=0,q=p.length;i<q;i++)o(p[i],s)});if(h===e){var p=e.getElementsByTagName("header")[0],s=e.getElementsByTagName("footer"),q=s.length;
p&&!a(p).closest("section, article")[0]&&o(p,"banner");q&&(p=s[q-1],a(p).closest("section, article")[0]||o(p,"contentinfo"))}})}})(jQuery,document);
(function(a,e,h){var i=e.audio&&e.video,o=!1;if(i){var r=document.createElement("video");e.videoBuffered="buffered"in r;o="loop"in r;h.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));e.videoBuffered||(h.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:e.videoBuffered,dependencies:["dom-support"]}),h.reTest("mediaelement-native-fix"))}a.webshims.ready("dom-support swfobject",function(a,e,h,q,v){var j=e.mediaelement,w=e.cfg.mediaelement,
r=function(b,c){var b=a(b),f={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!f.src)return f;var d=b.attr("type");if(d)f.type=d,f.container=a.trim(d.split(";")[0]);else if(c||(c=b[0].nodeName.toLowerCase(),"source"==c&&(c=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),d=j.getTypeForSrc(f.src,c))f.type=d,f.container=d,e.warn("you should always provide a proper mime-type using the source element. "+f.src+" detected as: "+d),a.nodeName(b[0],"source")&&b.attr("type",
d);if(d=b.attr("media"))f.media=d;return f},t=swfobject.hasFlashPlayerVersion("9.0.115"),d=function(){e.ready("mediaelement-swf",function(){if(!j.createSWF)e.modules["mediaelement-swf"].test=a.noop,e.reTest(["mediaelement-swf"],i)})};j.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};j.mimeTypes.source=a.extend({},j.mimeTypes.audio,j.mimeTypes.video);j.getTypeForSrc=function(b,c){if(-1!=b.indexOf("youtube.com/watch?"))return"video/youtube";var b=
b.split("?")[0].split("."),b=b[b.length-1],f;a.each(j.mimeTypes[c],function(a,c){if(-1!==c.indexOf(b))return f=a,!1});return f};j.srces=function(b,c){b=a(b);if(c)b.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(c)||(c=[c]),c.forEach(function(a){var c=q.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});else{var c=[],f=b[0].nodeName.toLowerCase(),d=r(b,
f);d.src?c.push(d):a("source",b).each(function(){d=r(this,f);d.src&&c.push(d)});return c}};a.fn.loadMediaSrc=function(b,c){return this.each(function(){c!==v&&(a(this).removeAttr("poster"),c&&a.attr(this,"poster",c));j.srces(this,b);a(this).mediaLoad()})};j.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
j.canSwfPlaySrces=function(b,c){var f="";t&&(b=a(b),c=c||j.srces(b),a.each(c,function(b,a){if(a.container&&a.src&&-1!=j.swfMimeTypes.indexOf(a.container))return f=a,!1}));return f};var u={};j.canNativePlaySrces=function(b,c){var f="";if(i){var b=a(b),d=(b[0].nodeName||"").toLowerCase();if(!u[d])return f;c=c||j.srces(b);a.each(c,function(a,c){if(c.type&&u[d].prop._supvalue.call(b[0],c.type))return f=c,!1})}return f};j.setError=function(b,c){c||(c="can't play sources");a(b).pause().data("mediaerror",
c);e.warn("mediaelementError: "+c);setTimeout(function(){a(b).data("mediaerror")&&a(b).trigger("mediaerror")},1)};var n=function(){var b;return function(a,f,g){e.ready("mediaelement-swf",function(){j.createSWF?j.createSWF(a,f,g):b||(b=!0,d(),n(a,f,g))})}}(),l=function(b,a,f,d,g){f||!1!==f&&a&&"flash"==a.isActive?(f=j.canSwfPlaySrces(b,d))?n(b,f,a):g?j.setError(b,!1):l(b,a,!1,d,!0):(f=j.canNativePlaySrces(b,d))?a&&"flash"==a.isActive&&j.setActive(b,"html5",a):g?(j.setError(b,!1),a&&"flash"==a.isActive&&
j.setActive(b,"html5",a)):l(b,a,!0,d,!0)},x=/^(?:embed|object)$/i,g=function(b,c){var f=e.data(b,"mediaelementBase")||e.data(b,"mediaelementBase",{}),d=j.srces(b),g=b.parentNode;clearTimeout(f.loadTimer);a.data(b,"mediaerror",!1);if(d.length&&g&&!x.test(g.nodeName||""))c=c||e.data(b,"mediaelement"),l(b,c,w.preferFlash||v,d)};a(q).bind("ended",function(b){var c=e.data(b.target,"mediaelement");(!o||c&&"html5"!=c.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,
"loop")&&a(b.target).prop("currentTime",0).play()},1)});o||e.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(b){var c=e.defineNodeNameProperty(b,"load",{prop:{value:function(){var a=e.data(this,"mediaelement");g(this,a);i&&(!a||"html5"==a.isActive)&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});u[b]=e.defineNodeNameProperty(b,"canPlayType",{prop:{value:function(c){var d="";i&&u[b].prop._supvalue&&(d=u[b].prop._supvalue.call(this,c),"no"==
d&&(d=""));!d&&t&&(c=a.trim((c||"").split(";")[0]),-1!=j.swfMimeTypes.indexOf(c)&&(d="maybe"));return d}}})});e.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,c=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{});clearTimeout(c.loadTimer);c.loadTimer=setTimeout(function(){g(a);a=null},9)}});i&&e.isReady("mediaelement-core",!0);e.addReady(function(b,c){a("video, audio",b).add(c.filter("video, audio")).each(function(){a.browser.msie&&8<e.browserVersion&&
a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():g(this);if(i){var b,c,d=this,l=function(){var b=a.prop(d,"buffered");if(b){for(var c="",f=0,g=b.length;f<g;f++)c+=b.end(f);return c}},n=function(){var b=l();b!=c&&(c=b,a(d).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==a.type&&(c=l());clearTimeout(b);b=setTimeout(n,999)}).bind("emptied stalled mediaerror abort suspend",
function(a){"emptied"==a.type&&(c=!1);clearTimeout(b)})}})});i?t&&e.ready("WINDOWLOAD",d):e.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);jQuery.webshims.gcEval=function(a,e){with(e&&e.form||window)with(e||window)return function(a){eval(a)}.call(e||window,a)};
(function(a){var e=window.Modernizr,h=a.webshims;h.capturingEventPrevented=function(e){var h=e.isDefaultPrevented,i=e.preventDefault;e.preventDefault=function(){clearTimeout(a.data(e.target,e.type+"DefaultPrevented"));a.data(e.target,e.type+"DefaultPrevented",setTimeout(function(){a.removeData(e.target,e.type+"DefaultPrevented")},30));return i.apply(this,arguments)};e.isDefaultPrevented=function(){return!(!h.apply(this,arguments)&&!a.data(e.target,e.type+"DefaultPrevented"))};e._isPolyfilled=!0};
if(e.formvalidation){var i=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select /><input type="date" required name="a" /><input type="submit" /></form>');e.bugfreeformvalidation=e.requiredSelect=!!("required"in a("select",i)[0]);if(window.opera||a.browser.webkit||window.testGoodWithFix){var o=a("input",i),r,k=function(s){s&&(s.preventDefault(),s.stopImmediatePropagation());clearTimeout(r);if(i){i.remove();i=o=null;if(!e.bugfreeformvalidation||!e.requiredSelect)h.addPolyfill("form-native-fix",
{f:"forms",dependencies:["form-extend"]}),h.modules["form-extend"].test=a.noop;h.reTest(["form-extend","form-message","form-native-fix"]);h.isReady("form-number-date-api")&&h.reTest("form-number-date-api");if(a.browser.opera||window.testGoodWithFix)h.loader.loadList(["dom-extend"]),h.ready("dom-extend",function(){var e=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(i){var j=h.defineNodeNameProperty(i,"checkValidity",{prop:{value:function(){h.fromSubmit||a(this).bind("invalid.checkvalidity",
e);h.fromCheckValidity=!0;var i=j.prop._supvalue.apply(this,arguments);h.fromSubmit||a(this).unbind("invalid.checkvalidity",e);h.fromCheckValidity=!1;return i}}})})})}};i.appendTo("head");if(window.opera||window.testGoodWithFix){h.bugs.validationMessage=!o.prop("validationMessage");if((e.inputtypes||{}).date){try{o.prop("valueAsNumber",0)}catch(p){}h.bugs.valueAsNumberSet="1970-01-01"!=o.prop("value")}o.prop("value","")}i.bind("submit",function(a){e.bugfreeformvalidation=!1;k(a)});r=setTimeout(function(){i&&
i.triggerHandler("submit")},9);h.capturingEvents(["input"]);h.capturingEvents(["invalid"],!0);a("input, select",i).bind("invalid",k).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}else h.capturingEvents(["input"]),h.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(a,e,h,i,o,r){var k={radio:1},p={checkbox:1,radio:1},s=a([]),q=function(d){var d=a(d),e=d[0].name;return k[d[0].type]&&e?a(d[0].form&&d[0].form[e]||i.getElementsByName(e)).not(d[0]):s},v=e.getContentValidationMessage=function(d,h){var n=d.getAttribute("x-moz-errormessage")||d.getAttribute("data-errormessage")||"";if(n&&-1!=n.indexOf("{")){try{n=jQuery.parseJSON(n)}catch(l){return n}"object"==typeof n&&(h=h||a.prop(d,"validity")||{valid:1},h.valid||a.each(h,
function(a,d){if(d&&"valid"!=a&&n[a])return n=n[a],!1}));e.data(d,"contentErrorMessage",n);if("object"==typeof n)n=n.defaultMessage}return n||""},j={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(d){return!(!a.prop(d,"willValidate")||!(a.prop(d,"validity")||{valid:1}).valid)},"invalid-element":function(d){return!(!a.prop(d,"willValidate")||(a.prop(d,"validity")||{valid:1}).valid)},"required-element":function(d){return!(!a.prop(d,
"willValidate")||!a.prop(d,"required"))},"optional-element":function(d){return!!(a.prop(d,"willValidate")&&!1===a.prop(d,"required"))},"in-range":function(d){if(!j[a.prop(d,"type")]||!a.prop(d,"willValidate"))return!1;d=a.prop(d,"validity");return!(!d||d.rangeOverflow||d.rangeUnderflow)},"out-of-range":function(d){if(!j[a.prop(d,"type")]||!a.prop(d,"willValidate"))return!1;d=a.prop(d,"validity");return!(!d||!d.rangeOverflow&&!d.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(d){a.expr.filters[d]=
a.expr.filters[d+"-element"]});var h=a.event.customEvent||{},w=a.prop,y={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(d,e,h){var l=w.apply(this,arguments);if(d&&"form"in d&&y[e]&&h!==o&&a(d).hasClass("form-ui-invalid")&&(a.prop(d,"validity")||{valid:1}).valid)a(d).getShadowElement().removeClass("form-ui-invalid"),"checked"==e&&h&&q(d).removeClass("form-ui-invalid").removeAttr("aria-invalid");return l};var t=function(d,e){var h;a.each(d,function(d,i){if(i)return h="customError"==
d?a.prop(e,"validationMessage"):d,!1});return h};a(i).bind("focusout change refreshvalidityui",function(d){if(d.target&&"submit"!=d.target.type&&a.prop(d.target,"willValidate")){var e=a.data(d.target,"webshimsswitchvalidityclass");e&&clearTimeout(e);a.data(d.target,"webshimsswitchvalidityclass",setTimeout(function(){var e=a(d.target).getNativeElement()[0],h=a.prop(e,"validity"),i=a(e).getShadowElement(),g,b,c,f;h.valid?i.hasClass("form-ui-valid")||(g="form-ui-valid",b="form-ui-invalid",f="changedvaliditystate",
c="changedvalid",p[e.type]&&e.checked&&q(e).removeClass(b).addClass(g).removeAttr("aria-invalid"),a.removeData(e,"webshimsinvalidcause")):(h=t(h,e),a.data(e,"webshimsinvalidcause")!=h&&(a.data(e,"webshimsinvalidcause",h),f="changedvaliditystate"),i.hasClass("form-ui-invalid")||(g="form-ui-invalid",b="form-ui-valid",p[e.type]&&!e.checked&&q(e).removeClass(b).addClass(g),c="changedinvalid"));g&&(i.addClass(g).removeClass(b),setTimeout(function(){a(e).trigger(c)},0));f&&setTimeout(function(){a(e).trigger(f)},
0);a.removeData(d.target,"webshimsswitchvalidityclass")},9))}});h.changedvaliditystate=!0;h.changedvalid=!0;h.changedinvalid=!0;h.refreshvalidityui=!0;e.triggerInlineForm=function(d,h){d.jquery&&(d=d[0]);var i="on"+h,l=d[i]||d.getAttribute(i)||"",j,g,h=a.Event({type:h,target:d,currentTarget:d});l&&(e.warn("we will drop inline event handler support, with next release. use event binding: $.bind instead"),"string"==typeof l&&(g=e.gcEval(l,d),d[i]&&(j=!0,d[i]=!1)));!1===g&&(h.stopPropagation(),h.preventDefault());
a(d).trigger(h);j&&(d[i]=l);return g};h=function(){e.scrollRoot=a.browser.webkit||"BackCompat"==i.compatMode?a(i.body):a(i.documentElement)};h();e.ready("DOM",h);e.validityAlert=function(){var d=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",h={top:0,left:0},j={hideDelay:5E3,getBodyOffset:function(){h=l.offset()},showFor:function(c,d,e,g){j._create();var c=a(c),h=a(c).getShadowElement(),i=j.getOffsetFromBody(h);j.clear();g?this.hide():(this.getMessage(c,d),this.position(h,i),l.css({fontSize:c.css("fontSize"),
fontFamily:c.css("fontFamily")}),this.show(),this.hideDelay&&(k=setTimeout(b,this.hideDelay)));e||this.setFocus(h,i)},getOffsetFromBody:function(b){b=a(b).offset();a.swap(l[0],{visibility:"hidden",display:"inline-block",left:0,top:0},j.getBodyOffset);b.top-=h.top;b.left-=h.left;return b},setFocus:function(c,f){var g=a(c).getShadowFocusElement(),h=e.scrollRoot.scrollTop(),j=(f||g.offset()).top-30,k;e.getID&&"label"==d&&l.attr("for",e.getID(g));h>j&&(e.scrollRoot.animate({scrollTop:j-5},{queue:!1,duration:Math.max(Math.min(600,
1.5*(h-j)),80)}),k=!0);try{g[0].focus()}catch(s){}k&&(e.scrollRoot.scrollTop(h),setTimeout(function(){e.scrollRoot.scrollTop(h)},0));setTimeout(function(){a(i).bind("focusout.validityalert",b)},10)},getMessage:function(b,d){a("span.va-box",l).text(d||v(b[0])||b.prop("validationMessage"))},position:function(b,d){d=d?a.extend({},d):j.getOffsetFromBody(b);d.top+=b.outerHeight();l.css(d)},show:function(){"none"===l.css("display")&&l.css({opacity:0}).show();l.addClass("va-visible").fadeTo(400,1)},hide:function(){l.removeClass("va-visible").fadeOut()},
clear:function(){clearTimeout(g);clearTimeout(k);a(i).unbind("focusout.validityalert");l.stop().removeAttr("for")},_create:function(){if(!l)l=j.errorBubble=a("<"+d+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+d+">").css({position:"absolute",display:"none"}),e.ready("DOM",function(){l.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&
l.bgIframe()})}},l,k=!1,g=!1,b=a.proxy(j,"hide");return j}();(function(){var d,e=[],h;a(i).bind("invalid",function(j){if(!j.wrongWebkitInvalid){var k=a(j.target),g=k.getShadowElement();g.hasClass("form-ui-invalid")||(g.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(j.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!d)d=a.Event("firstinvalid"),d.isInvalidUIPrevented=j.isDefaultPrevented,g=a.Event("firstinvalidsystem"),a(i).triggerHandler(g,
{element:j.target,form:j.target.form,isInvalidUIPrevented:j.isDefaultPrevented}),k.trigger(d);d&&d.isDefaultPrevented()&&j.preventDefault();e.push(j.target);j.extraData="fix";clearTimeout(h);h=setTimeout(function(){var b={type:"lastinvalid",cancelable:!1,invalidlist:a(e)};d=!1;e=[];a(j.target).trigger(b,b)},9);g=k=null}})})();r.replaceValidationUI&&e.ready("DOM",function(){a(i).bind("firstinvalid",function(d){d.isInvalidUIPrevented()||(d.preventDefault(),a.webshims.validityAlert.showFor(d.target,
a(d.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,e,h,i,o,r){var k=e.validityMessages,h=r.overrideMessages||r.customMessages?["customValidationMessage"]:[];k.en=k.en||k["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){k.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){k.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){k.en.rangeOverflow[a]=
"Value must be at or before {%max}."});k["en-US"]=k["en-US"]||k.en;k[""]=k[""]||k["en-US"];k.de=k.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){k.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){k.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){k.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var p=
k[""];e.createValidationMessage=function(e,h){var i=p[h];i&&"string"!==typeof i&&(i=i[a.prop(e,"type")]||i[(e.nodeName||"").toLowerCase()]||i.defaultMessage);i&&"value,min,max,title,maxlength,label".split(",").forEach(function(h){if(-1!==i.indexOf("{%"+h)){var k=("label"==h?a.trim(a('label[for="'+e.id+'"]',e.form).text()).replace(/\*$|:$/,""):a.attr(e,h))||"";i=i.replace("{%"+h+"}",k);"value"==h&&(i=i.replace("{%valueLen}",k.length))}});return i||""};(e.bugs.validationMessage||!Modernizr.formvalidation)&&
h.push("validationMessage");e.activeLang({langObj:k,module:"form-core",callback:function(a){p=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&e.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var e=this.options||[];if(!e.length){var h=a("select",this);if(h[0]&&h[0].options&&h[0].options.length)e=h[0].options}return e}}});h.forEach(function(h){e.defineNodeNamesProperty(["fieldset","output","button"],
h,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(i){var k=e.defineNodeNameProperty(i,h,{prop:{get:function(){var h=this,i="";if(!a.prop(h,"willValidate"))return i;var o=a.prop(h,"validity")||{valid:1};if(o.valid||(i=e.getContentValidationMessage(h,o)))return i;if(o.customError&&h.nodeName&&(i=Modernizr.formvalidation&&k.prop._supget?k.prop._supget.call(h):e.data(h,"customvalidationMessage")))return i;a.each(o,function(a,d){if("valid"!=a&&d&&(i=e.createValidationMessage(h,
a)))return!1});return i||""},writeable:!1}})})})});