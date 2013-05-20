/*
jquery.animate-enhanced plugin v1.02
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/(function(e,t,n){function r(e,t,n,r,i,s,o,u,a){var f=!1;o=!0===o&&!0===u;t=t||{};t.original||(t.original={},f=!0);t.properties=t.properties||{};t.secondary=t.secondary||{};u=t.meta;for(var c=t.original,h=t.properties,p=t.secondary,d=l.length-1;0<=d;d--){var v=l[d]+"transition-property",m=l[d]+"transition-duration",g=l[d]+"transition-timing-function";n=o?l[d]+"transform":n;f&&(c[v]=e.css(v)||"",c[m]=e.css(m)||"",c[g]=e.css(g)||"");p[n]=o?!0===a||!0===w&&!1!==a&&b?"translate3d("+u.left+"px, "+u.top+"px, 0)":"translate("+u.left+"px,"+u.top+"px)":s;h[v]=(h[v]?h[v]+",":"")+n;h[m]=(h[m]?h[m]+",":"")+r+"ms";h[g]=(h[g]?h[g]+",":"")+i}return t}function i(e){for(var t in e)return!1;return!0}function s(e){e=e.toUpperCase();var t={LI:"list-item",TR:"table-row",TD:"table-cell",TH:"table-cell",CAPTION:"table-caption",COL:"table-column",COLGROUP:"table-column-group",TFOOT:"table-footer-group",THEAD:"table-header-group",TBODY:"table-row-group"};return"string"==typeof t[e]?t[e]:"block"}function o(e){return parseFloat(e.replace(e.match(/\D+$/),""))}function u(e){var t=!0;e.each(function(e,n){return t=t&&n.ownerDocument});return t}var a="top right bottom left opacity height width".split(" "),f=["top","right","bottom","left"],l=["-webkit-","-moz-","-o-",""],c=["avoidTransforms","useTranslate3d","leaveTransforms"],h=/^([+-]=)?([\d+-.]+)(.*)$/,p=/([A-Z])/g,d={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},v=null,m=!1,g=(document.body||document.documentElement).style,y=void 0!==g.WebkitTransition||void 0!==g.MozTransition||void 0!==g.OTransition||void 0!==g.transition,b="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,w=b;e.expr&&e.expr.filters&&(v=e.expr.filters.animated,e.expr.filters.animated=function(t){return e(t).data("events")&&e(t).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?!0:v.call(this,t)});e.extend({toggle3DByDefault:function(){return w=!w},toggleDisabledByDefault:function(){return m=!m},setDisabledByDefault:function(e){return m=e}});e.fn.translation=function(){if(!this[0])return null;var e=window.getComputedStyle(this[0],null),t={x:0,y:0};if(e)for(var n=l.length-1;0<=n;n--){var r=e.getPropertyValue(l[n]+"transform");if(r&&/matrix/i.test(r)){e=r.replace(/^matrix\(/i,"").split(/, |\)$/g);t={x:parseInt(e[4],10),y:parseInt(e[5],10)};break}}return t};e.fn.animate=function(n,p,v,g){n=n||{};var b="undefined"==typeof n.bottom&&"undefined"==typeof n.right,w=e.speed(p,v,g),E=this,x=0,N=function(){x--;0===x&&"function"==typeof w.complete&&w.complete.apply(E,arguments)},k;if(!(k=!0===("undefined"!=typeof n.avoidCSSTransitions?n.avoidCSSTransitions:m))&&!(k=!y)&&!(k=i(n))){var L;e:{for(L in n)if(("width"==L||"height"==L)&&("show"==n[L]||"hide"==n[L]||"toggle"==n[L])){L=!0;break e}L=!1}k=L||0>=w.duration}return k?t.apply(this,arguments):this[!0===w.queue?"queue":"each"](function(){var p=e(this),v=e.extend({},w),m=function(t){var r=p.data("jQe")||{original:{}},i={};if(2==t.eventPhase){if(!0!==n.leaveTransforms){for(t=l.length-1;0<=t;t--)i[l[t]+"transform"]="";if(b&&"undefined"!=typeof r.meta){t=0;for(var s;s=f[t];++t)i[s]=r.meta[s+"_o"]+"px",e(this).css(s,i[s])}}p.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(r.original).css(i).data("jQe",null);"hide"===n.opacity&&p.css({display:"none",opacity:""});N.call(this)}},g={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},y={},g=g[v.easing||"swing"]?g[v.easing||"swing"]:v.easing||"swing",E;for(E in n)if(-1===e.inArray(E,c)){var C=-1<e.inArray(E,f),k,L=p,A=n[E],O=E,_=C&&!0!==n.avoidTransforms;if("d"==O)k=void 0;else if(u(L)){var D=h.exec(A);k="auto"===L.css(O)?0:L.css(O);k="string"==typeof k?o(k):k;"string"==typeof A&&o(A);var _=!0===_?0:k,F=L.is(":hidden"),z=L.translation();"left"==O&&(_=parseInt(k,10)+z.x);"right"==O&&(_=parseInt(k,10)+z.x);"top"==O&&(_=parseInt(k,10)+z.y);"bottom"==O&&(_=parseInt(k,10)+z.y);!D&&"show"==A?(_=1,F&&L.css({display:s(L.context.tagName),opacity:0})):!D&&"hide"==A&&(_=0);D?(L=parseFloat(D[2]),D[1]&&(L=("-="===D[1]?-1:1)*L+parseInt(_,10)),k=L):k=_}else k=void 0;D=E;L=k;A=p;if(u(A)){O=-1<e.inArray(D,a);("width"==D||"height"==D||"opacity"==D)&&parseFloat(L)===parseFloat(A.css(D))&&(O=!1);D=O}else D=!1;if(D){var D=p,L=E,A=v.duration,O=g,C=C&&!0!==n.avoidTransforms,_=b,F=n.useTranslate3d,z=(z=D.data("jQe"))&&!i(z)?z:e.extend(!0,{},d),X=k;if(-1<e.inArray(L,f)){var V=z.meta,$=o(D.css(L))||0,K=L+"_o",X=k-$;V[L]=X;V[K]="auto"==D.css(L)?0+X:$+X||0;z.meta=V;_&&0===X&&(X=0-V[K],V[L]=X,V[K]=0)}D.data("jQe",r(D,z,L,A,O,X,C,_,F))}else y[E]=n[E]}p.unbind("webkitTransitionEnd oTransitionEnd transitionend");if((E=p.data("jQe"))&&!i(E)&&!i(E.secondary)){x++;p.css(E.properties);var Q=E.secondary;setTimeout(function(){p.bind("webkitTransitionEnd oTransitionEnd transitionend",m).css(Q)})}else v.queue=!1;i(y)||(x++,t.apply(p,[y,{duration:v.duration,easing:e.easing[v.easing]?v.easing:e.easing.swing?"swing":"linear",complete:N,queue:v.queue}]));return!0})};e.fn.animate.defaults={};e.fn.stop=function(t,r,s){if(!y)return n.apply(this,[t,r]);t&&this.queue([]);this.each(function(){var o=e(this),u=o.data("jQe");if(u&&!i(u)){var a,f={};if(r){if(f=u.secondary,!s&&void 0!==typeof u.meta.left_o||void 0!==typeof u.meta.top_o){f.left=void 0!==typeof u.meta.left_o?u.meta.left_o:"auto";f.top=void 0!==typeof u.meta.top_o?u.meta.top_o:"auto";for(a=l.length-1;0<=a;a--)f[l[a]+"transform"]=""}}else if(!i(u.secondary)){var c=window.getComputedStyle(o[0],null);if(c)for(var h in u.secondary)if(u.secondary.hasOwnProperty(h)&&(h=h.replace(p,"-$1").toLowerCase(),f[h]=c.getPropertyValue(h),!s&&/matrix/i.test(f[h]))){a=f[h].replace(/^matrix\(/i,"").split(/, |\)$/g);f.left=parseFloat(a[4])+parseFloat(o.css("left"))+"px"||"auto";f.top=parseFloat(a[5])+parseFloat(o.css("top"))+"px"||"auto";for(a=l.length-1;0<=a;a--)f[l[a]+"transform"]=""}}o.unbind("webkitTransitionEnd oTransitionEnd transitionend");o.css(u.original).css(f).data("jQe",null)}else n.apply(o,[t,r])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);