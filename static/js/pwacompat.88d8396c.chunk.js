(this.webpackJsonpexcalidraw=this.webpackJsonpexcalidraw||[]).push([[44],{244:function(e,t,n){"use strict";!function(){if("onload"in XMLHttpRequest.prototype&&!navigator.standalone){var e,t,n=!1,r=["standalone","fullscreen","minimal-ui"],a=navigator.userAgent||"",i=navigator.vendor&&-1!==navigator.vendor.indexOf("Apple")&&(-1!==a.indexOf("Mobile/")||"standalone"in navigator)||n,o=Boolean(a.match(/(MSIE |Edge\/|Trident\/)/)),l="undefined"!==typeof Windows;try{t=sessionStorage}catch(b){}t=t||{},"complete"===document.readyState?u():window.addEventListener("load",u)}function c(e){try{return document.head.querySelector(e)}catch(b){return null}}function s(e,n){var r="__pwacompat_"+e;return void 0!==n&&(t[r]=n),t[r]}function u(){var t=(e=c('link[rel="manifest"]'))?e.href:"";if(!t)throw'can\'t find <link rel="manifest" href=".." />\'';var n=function(e){for(var t=function(t){var n=e[t];try{return new URL("",n),{v:function(e){return new URL(e||"",n).toString()}}}catch(b){}},n=0;n<e.length;++n){var r=t(n);if("object"===typeof r)return r.v}return function(e){return e||""}}([t,location]),r=s("manifest");if(r)try{h(JSON.parse(r),n)}catch(i){console.warn("PWACompat error",i)}else{var a=new XMLHttpRequest;a.open("GET",t),a.withCredentials="use-credentials"===e.getAttribute("crossorigin"),a.onload=function(){try{var e=JSON.parse(a.responseText);s("manifest",a.responseText),h(e,n)}catch(i){console.warn("PWACompat error",i)}},a.send(null)}}function p(e,t,n){if(!c(e+n)){var r=document.createElement(e);for(var a in t)r.setAttribute(a,t[a]);return document.head.appendChild(r),r}}function f(e,t){t&&(!0===t&&(t="yes"),p("meta",{name:e,content:t},'[name="'.concat(e,'"]')))}function d(e){var t=e.sizes.split(/\s+/g).map((function(e){return"any"===e?1/0:parseInt(e,10)||0}));return{src:e.src,type:e.type,sizes:e.sizes,largestSize:Math.max.apply(null,t),purpose:e.purpose?e.purpose.split(/\s+/g):["any"]}}function h(t,n){var a,u=(t.icons||[]).map(d).sort((function(e,t){return t.largestSize-e.largestSize})),h=u.filter((function(e){return e.purpose.indexOf("any")>-1})),y=u.filter((function(e){return e.purpose.indexOf("maskable")>-1})),x=(y.length>0?y:h).map((function(e){var t={rel:"icon",href:n(e.src),sizes:e.sizes},r='[sizes="'.concat(e.sizes,'"]');if(p("link",t,'[rel="icon"]'+r),i&&!(e.largestSize<120))return t.rel="apple-touch-icon",p("link",t,'[rel="apple-touch-icon"]'+r)})).filter(Boolean),S=c('meta[name="viewport"]'),k=S&&S.content||"",O=Boolean(k.match(/\bviewport-fit\s*=\s*cover\b/)),_=t.display,C=-1!==r.indexOf(_);if(f("mobile-web-app-capable",C),function(e,t){if(!i&&!l)return;var n=v(e);if(i){f("apple-mobile-web-app-status-bar-style",t?"black-translucent":n?"black":"default")}else{var r=function(){try{return Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar}catch(b){}}();if(!r)return;var a=n?255:0;r.foregroundColor={r:a,g:a,b:a,a:255},r.backgroundColor=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}(e)}}(t.theme_color||"black",O),o){f("application-name",t.short_name),f("msapplication-tooltip",t.description),f("msapplication-starturl",n(t.start_url||".")),f("msapplication-navbutton-color",t.theme_color);var T=h[0];T&&f("msapplication-TileImage",n(T.src)),f("msapplication-TileColor",t.background_color)}if(f("theme-color",t.theme_color),!i){var z=(a=t.orientation,{por:"portrait",lan:"landscape"}[String(a||"").substr(0,3)]||"");return f("x5-orientation",z),f("screen-orientation",z),void("fullscreen"===_?(f("x5-fullscreen","true"),f("full-screen","yes")):C&&(f("x5-page-mode","app"),f("browsermode","application")))}var A=t.background_color||"#f8f9fa",E=v(A),I=function(e){var t;return(e||[]).filter((function(e){return"itunes"===e.platform})).forEach((function(e){if(e.id)t=e.id;else{var n=e.url.match(/id(\d+)/);n&&(t=n[1])}})),t}(t.related_applications);function R(n,r,a,i){var o=window.devicePixelRatio,l=w({width:n*o,height:r*o});if(l.scale(o,o),l.fillStyle=A,l.fillRect(0,0,n,r),l.translate(n/2,(r-20)/2),i){var c=i.width/o,s=i.height/o;s>128&&(c/=s/128,s=128),c>=48&&s>=48&&(l.drawImage(i,c/-2,s/-2,c,s),l.translate(0,s/2+20))}l.fillStyle=E?"white":"black",l.font="".concat(24,"px ").concat("HelveticaNeue-CondensedBold");var u=getComputedStyle(e);l.font=u.getPropertyValue("--pwacompat-splash-font");var p=t.name||t.short_name||document.title,f=l.measureText(p),d=f.actualBoundingBoxAscent||24;if(l.translate(0,d),f.width<.8*n)l.fillText(p,f.width/-2,0);else for(var h=p.split(/\s+/g),m=1;m<=h.length;++m){var v=h.slice(0,m).join(" "),g=l.measureText(v).width;(m===h.length||g>.6*n)&&(l.fillText(v,g/-2,0),l.translate(0,1.2*d),h.splice(0,m),m=0)}return function(){var e=l.canvas.toDataURL();return M(a,e),e}}function M(e,t){var n=document.createElement("link");n.setAttribute("rel","apple-touch-startup-image"),n.setAttribute("media","(orientation: ".concat(e,")")),n.setAttribute("href",t),document.head.appendChild(n)}I&&f("apple-itunes-app","app-id=".concat(I)),f("apple-mobile-web-app-capable",C),f("apple-mobile-web-app-title",t.short_name||t.name);var B=s("iOS");if(B)try{var L=JSON.parse(B);return M("portrait",L.p),M("landscape",L.l),void x.forEach((function(e){var t=L.i[e.href];t&&(e.href=t)}))}catch(b){}var J={i:{}};function N(e,t){var n=window.screen,r=R(n.width,n.height,"portrait",e),a=R(n.height,n.width,"landscape",e);setTimeout((function(){J.p=r(),setTimeout((function(){J.l=a(),t()}),10)}),10)}function U(){s("iOS",JSON.stringify(J))}!function e(){var n=x.shift();if(n){var r=new Image;r.crossOrigin="anonymous",r.onerror=function(){e()},r.onload=function(){r.onload=null,N(r,(function(){var e=t.background_color&&g(r,A);e?(n.href=e,J.i[r.src]=e,function(e){var t=x.length+1,n=function(){--t||e()};n(),x.forEach((function(e){var t=new Image;t.crossOrigin="anonymous",t.onerror=n,t.onload=function(){t.onload=null,e.href=g(t,A,!0),J.i[t.src]=e.href,n()},t.src=e.href}))}(U)):U()}))},r.src=n.href}else N(null,U)}()}function m(e){var t=w();return t.fillStyle=e,t.fillRect(0,0,1,1),t.getImageData(0,0,1,1).data||[]}function v(e){var t=m(e).map((function(e){var t=e/255;return t<.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),n=.2126*t[0]+.7152*t[1]+.0722*t[2];return Math.abs(1.05/(n+.05))>3}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=w(e);if(r.drawImage(e,0,0),!n){var a=r.getImageData(0,0,1,1);if(255===a.data[3])return}return r.globalCompositeOperation="destination-over",r.fillStyle=t,r.fillRect(0,0,e.width,e.height),r.canvas.toDataURL()}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:1,height:1},t=e.width,n=e.height,r=document.createElement("canvas");return r.width=t,r.height=n,r.getContext("2d")}}()}}]);
//# sourceMappingURL=pwacompat.88d8396c.chunk.js.map