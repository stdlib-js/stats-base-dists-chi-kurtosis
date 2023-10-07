// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Math.floor;function n(r){return e(r)===r}var t=Number.NEGATIVE_INFINITY;function i(r){return Math.abs(r)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;var f="function"==typeof Symbol?Symbol:void 0,c="function"==typeof f?f.toStringTag:"";var s=a&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return o.call(r);n=r[c],a=c,e=null!=(i=r)&&u.call(i,a);try{r[c]=void 0}catch(e){return o.call(r)}return t=o.call(r),e?r[c]=n:delete r[c],t}:function(r){return o.call(r)},l="function"==typeof Uint32Array;var p="function"==typeof Uint32Array?Uint32Array:null;var v,g="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var r,e,n;if("function"!=typeof p)return!1;try{e=new p(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(l&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?g:function(){throw new Error("not implemented")};var y=v,d="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var w,b="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,e,n;if("function"!=typeof h)return!1;try{e=new h([1,3.14,-3.14,NaN]),n=e,r=(d&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m=w,A="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null;var N,E="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var r,e,n;if("function"!=typeof _)return!1;try{e=new _(e=[1,3.14,-3.14,256,257]),n=e,r=(A&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?E:function(){throw new Error("not implemented")};var U=N,I="function"==typeof Uint16Array;var S="function"==typeof Uint16Array?Uint16Array:null;var k,x="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,e,n;if("function"!=typeof S)return!1;try{e=new S(e=[1,3.14,-3.14,65536,65537]),n=e,r=(I&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var F,j={uint16:k,uint8:U};(F=new j.uint16(1))[0]=4660;var T=52===new j.uint8(F.buffer)[0],O=!0===T?1:0,V=new m(1),$=new y(V.buffer);function G(r){return V[0]=r,$[O]}function H(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var W=-.16666666666666632;function C(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(W+i*n):r-(i*(.5*e-t*n)-e-t*W)}var L,P,M=!0===T?0:1,R=new m(1),Z=new y(R.buffer);!0===T?(L=1,P=0):(L=0,P=1);var X={HIGH:L,LOW:P},Y=new m(1),q=new y(Y.buffer),z=X.HIGH,B=X.LOW;function D(r,e){return q[z]=r,q[B]=e,Y[0]}var J=Number.POSITIVE_INFINITY;function K(r){return r===J||r===t}var Q="function"==typeof Object.defineProperty?Object.defineProperty:null;var rr=Object.defineProperty;function er(r){return"number"==typeof r}function nr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function tr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+nr(i):nr(i)+r,t&&(r="-"+r)),r}var ir=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!er(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=tr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=tr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===ar.call(r.specifier)?ar.call(n):ir.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function ur(r){return"string"==typeof r}var fr=Math.abs,cr=String.prototype.toLowerCase,sr=String.prototype.toUpperCase,lr=String.prototype.replace,pr=/e\+(\d)$/,vr=/e-(\d)$/,gr=/^(\d+)$/,yr=/^(\d+)e/,dr=/\.0$/,hr=/\.0*e/,wr=/(\..*[^0])0*e/;function br(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!er(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":fr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=lr.call(n,wr,"$1e"),n=lr.call(n,hr,"e"),n=lr.call(n,dr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=lr.call(n,pr,"e+0$1"),n=lr.call(n,vr,"e-0$1"),r.alternate&&(n=lr.call(n,gr,"$1."),n=lr.call(n,yr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===sr.call(r.specifier)?sr.call(n):cr.call(n)}function mr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Ar(r,e,n){var t=e-r.length;return t<0?r:r=n?r+mr(t):mr(t)+r}var _r=String.fromCharCode,Nr=isNaN,Er=Array.isArray;function Ur(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ir(r){var e,n,t,i,a,o,u,f,c;if(!Er(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(ur(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=Ur(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Nr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Nr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=or(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Nr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Nr(a)?String(t.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=br(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=tr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ar(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Sr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function kr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function xr(r){var e,n,t,i;for(n=[],i=0,t=Sr.exec(r);t;)(e=r.slice(i,Sr.lastIndex-t[0].length)).length&&n.push(e),n.push(kr(t)),i=Sr.lastIndex,t=Sr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Fr(r){return"string"==typeof r}function jr(r){var e,n,t;if(!Fr(r))throw new TypeError(jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=xr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Ir.apply(null,n)}var Tr=Object.prototype,Or=Tr.toString,Vr=Tr.__defineGetter__,$r=Tr.__defineSetter__,Gr=Tr.__lookupGetter__,Hr=Tr.__lookupSetter__;var Wr,Cr,Lr=function(){try{return Q({},"x",{}),!0}catch(r){return!1}}()?rr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Or.call(r))throw new TypeError(jr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Or.call(n))throw new TypeError(jr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Gr.call(r,e)||Hr.call(r,e)?(t=r.__proto__,r.__proto__=Tr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Vr&&Vr.call(r,e,n.get),o&&$r&&$r.call(r,e,n.set),r};function Pr(r,e,n){Lr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===T?(Wr=1,Cr=0):(Wr=0,Cr=1);var Mr={HIGH:Wr,LOW:Cr},Rr=new m(1),Zr=new y(Rr.buffer),Xr=Mr.HIGH,Yr=Mr.LOW;function qr(r,e,n,t){return Rr[0]=r,e[t]=Zr[Xr],e[t+n]=Zr[Yr],e}function zr(r){return qr(r,[0,0],1,0)}Pr(zr,"assign",qr);var Br=[0,0];function Dr(r,e){var n,t;return zr.assign(r,Br,1,0),n=Br[0],n&=2147483647,t=G(e),D(n|=t&=2147483648,Br[1])}function Jr(e,n,t,a){return r(e)||K(e)?(n[a]=e,n[a+t]=0,n):0!==e&&i(e)<22250738585072014e-324?(n[a]=4503599627370496*e,n[a+t]=-52,n):(n[a]=e,n[a+t]=0,n)}Pr((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=[0,0],Qr=[0,0];function re(e,n){var i,a;return 0===n||0===e||r(e)||K(e)?e:(Jr(e,Kr,1,0),n+=Kr[1],n+=function(r){var e=G(r);return(e=(2146435072&e)>>>20)-1023|0}(e=Kr[0]),n<-1074?Dr(0,e):n>1023?e<0?t:J:(n<=-1023?(n+=52,a=2220446049250313e-31):a=1,zr.assign(e,Qr,1,0),i=Qr[0],i&=2148532223,a*D(i|=n+1023<<20,Qr[1])))}function ee(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ne=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],te=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ie=5.960464477539063e-8,ae=ee(20),oe=ee(20),ue=ee(20),fe=ee(20);function ce(r,n,t,i,a,o,u,f,c){var s,l,p,v,g,y,d,h,w;for(v=o,w=i[t],h=t,g=0;h>0;g++)l=ie*w|0,fe[g]=w-16777216*l|0,w=i[h-1]+l,h-=1;if(w=re(w,a),w-=8*e(.125*w),w-=d=0|w,p=0,a>0?(d+=g=fe[t-1]>>24-a,fe[t-1]-=g<<24-a,p=fe[t-1]>>23-a):0===a?p=fe[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,g=0;g<t;g++)h=fe[g],0===s?0!==h&&(s=1,fe[g]=16777216-h):fe[g]=16777215-h;if(a>0)switch(a){case 1:fe[t-1]&=8388607;break;case 2:fe[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=re(1,a)))}if(0===w){for(h=0,g=t-1;g>=o;g--)h|=fe[g];if(0===h){for(y=1;0===fe[o-y];y++);for(g=t+1;g<=t+y;g++){for(c[f+g]=ne[u+g],l=0,h=0;h<=f;h++)l+=r[h]*c[f+(g-h)];i[g]=l}return ce(r,n,t+=y,i,a,o,u,f,c)}}if(0===w)for(t-=1,a-=24;0===fe[t];)t-=1,a-=24;else(w=re(w,-a))>=16777216?(l=ie*w|0,fe[t]=w-16777216*l|0,a+=24,fe[t+=1]=l):fe[t]=0|w;for(l=re(1,a),g=t;g>=0;g--)i[g]=l*fe[g],l*=ie;for(g=t;g>=0;g--){for(l=0,y=0;y<=v&&y<=t-g;y++)l+=te[y]*i[g+y];ue[t-g]=l}for(l=0,g=t;g>=0;g--)l+=ue[g];for(n[0]=0===p?l:-l,l=ue[0]-l,g=1;g<=t;g++)l+=ue[g];return n[1]=0===p?l:-l,7&d}function se(r,e,n,t){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)ae[f]=c<0?0:ne[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*ae[o+(f-c)];oe[f]=i}return 4,ce(r,e,4,oe,u,4,a,o,ae)}var le=Math.round;function pe(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=le(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(G(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(G(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var ve=1.5707963267341256,ge=6077100506506192e-26,ye=2*ge,de=4*ge,he=[0,0,0],we=[0,0];function be(r,e){var n,t,i,a,o,u,f;if((i=2147483647&G(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?pe(r,i,e):i<=1073928572?r>0?(f=r-ve,e[0]=f-ge,e[1]=f-e[0]-ge,1):(f=r+ve,e[0]=f+ge,e[1]=f-e[0]+ge,-1):r>0?(f=r-2*ve,e[0]=f-ye,e[1]=f-e[0]-ye,2):(f=r+2*ve,e[0]=f+ye,e[1]=f-e[0]+ye,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?pe(r,i,e):r>0?(f=r-3*ve,e[0]=f-1.8231301519518578e-10,e[1]=f-e[0]-1.8231301519518578e-10,3):(f=r+3*ve,e[0]=f+1.8231301519518578e-10,e[1]=f-e[0]+1.8231301519518578e-10,-3):1075388923===i?pe(r,i,e):r>0?(f=r-4*ve,e[0]=f-de,e[1]=f-e[0]-de,4):(f=r+4*ve,e[0]=f+de,e[1]=f-e[0]+de,-4);if(i<1094263291)return pe(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return R[0]=r,Z[M]}(r),f=D(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)he[o]=0|f,f=16777216*(f-he[o]);for(he[2]=f,a=3;0===he[a-1];)a-=1;return u=se(he,we,t,a),r<0?(e[0]=-we[0],e[1]=-we[1],-u):(e[0]=we[0],e[1]=we[1],u)}var me=[0,0];var Ae=3.141592653589793;function _e(r){return n(r/2)}function Ne(r){return _e(r>0?r-1:r+1)}var Ee=Math.sqrt,Ue=!0===T?0:1,Ie=new m(1),Se=new y(Ie.buffer);function ke(r,e){return Ie[0]=r,Se[Ue]=e>>>0,Ie[0]}function xe(r){return 0|r}var Fe=!0===T?1:0,je=new m(1),Te=new y(je.buffer);function Oe(r,e){return je[0]=r,Te[Fe]=e>>>0,je[0]}var Ve=[1,1.5],$e=[0,.5849624872207642],Ge=[0,1.350039202129749e-8];var He=1e300,We=1e-300,Ce=[0,0],Le=[0,0];function Pe(e,a){var o,u,f,c,s,l,p,v,g,y,d,h,w,b;if(r(e)||r(a))return NaN;if(zr.assign(a,Ce,1,0),s=Ce[0],0===Ce[1]){if(0===a)return 1;if(1===a)return e;if(-1===a)return 1/e;if(.5===a)return Ee(e);if(-.5===a)return 1/Ee(e);if(2===a)return e*e;if(3===a)return e*e*e;if(4===a)return(e*=e)*e;if(K(a))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:i(r)<1==(e===J)?0:J}(e,a)}if(zr.assign(e,Ce,1,0),c=Ce[0],0===Ce[1]){if(0===c)return function(r,e){return e===t?J:e===J?0:e>0?Ne(e)?r:0:Ne(e)?Dr(J,r):J}(e,a);if(1===e)return 1;if(-1===e&&Ne(a))return-1;if(K(e))return e===t?Pe(-0,-a):a<0?0:J}if(e<0&&!1===n(a))return(e-e)/(e-e);if(f=i(e),o=2147483647&c|0,u=2147483647&s|0,p=s>>>31|0,l=(l=c>>>31|0)&&Ne(a)?-1:1,u>1105199104){if(u>1139802112)return function(r,e){return(2147483647&G(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,a);if(o<1072693247)return 1===p?l*He*He:l*We*We;if(o>1072693248)return 0===p?l*He*He:l*We*We;d=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ke(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Le,f)}else d=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,A,_,N;return m=0,n<1048576&&(m-=53,n=G(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=ke(i=(w=(e=Oe(e,n))-(c=Ve[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Oe(0,t+=_<<18),h=(a=i*i)*a*(0===(N=a)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=ke(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),y=(v=-7.028461650952758e-9*(l=ke(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+Ge[_])-((g=ke(g=(p=.9617967009544373*l)+v+(s=$e[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(Le,f,o);if(h=(y=(a-(v=ke(a,0)))*d[0]+a*d[1])+(g=v*d[0]),zr.assign(h,Ce,1,0),w=xe(Ce[0]),b=xe(Ce[1]),w>=1083179008){if(0!=(w-1083179008|b))return l*He*He;if(y+8008566259537294e-32>h-g)return l*He*He}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|b))return l*We*We;if(y<=h-g)return l*We*We}return h=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=Oe(0,t)),r=xe(r=G(c=1-((c=(o=.6931471824645996*(a=ke(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(v=a)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?re(c,s):Oe(c,r)}(w,g,y),l*h}var Me=Math.ceil;function Re(r){return r<0?Me(r):e(r)}function Ze(e){var n;return r(e)||e===J?e:e===t?0:e>709.782712893384?J:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:function(r,e,n){var t,i,a,o;return re(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(e-.6931471803691238*(n=Re(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5)),1.9082149292705877e-10*n,n)}function Xe(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=Ze(r),2.5066282746310007*(n=r>143.01608?(t=Pe(r,.5*r-.25))*(t/n):Pe(r,r-.5)/n)*e}function Ye(r,e){return e/((1+.5772156649015329*r)*r)}function qe(a){var o,u,f,c;if(n(a)&&a<0||a===t||r(a))return NaN;if(0===a)return function(r){return 0===r&&1/r===t}(a)?t:J;if(a>171.61447887182297)return J;if(a<-170.5674972726612)return 0;if((u=i(a))>33)return a>=0?Xe(a):(o=0==(1&(f=e(u)))?-1:1,(c=u-f)>.5&&(c=u-(f+=1)),c=u*function(r){var e;if(e=G(r),(e&=2147483647)<=1072243195)return e<1045430272?r:C(r,0);if(e>=2146435072)return NaN;switch(3&be(r,me)){case 0:return C(me[0],me[1]);case 1:return H(me[0],me[1]);case 2:return-C(me[0],me[1]);default:return-H(me[0],me[1])}}(Ae*c),o*Ae/(i(c)*Xe(u)));for(c=1;a>=3;)c*=a-=1;for(;a<0;){if(a>-1e-9)return Ye(a,c);c/=a,a+=1}for(;a<2;){if(a<1e-9)return Ye(a,c);c/=a,a+=1}return 2===a?c:c*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(a-=2)}function ze(e){return r(e)||e<0?NaN:1.4142135623730951*qe((e+1)/2)/qe(e/2)}function Be(e){var n;return r(e)||e<0?NaN:e-(n=ze(e))*n}function De(e){var n,t,i,a;return r(e)||e<=0?NaN:(n=Be(e),t=Ee(n),a=ze(e),i=function(e){var n,t;return r(e)||e<=0?NaN:ze(e)/((n=(t=Ee(Be(e)))*t)*t)*(1-2*n)}(e),2/n*(1-a*t*i-n))}export{De as default};
//# sourceMappingURL=mod.js.map
