"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=v(function(x,u){
var n=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/stats-base-dists-chi-skewness/dist'),m=require('@stdlib/stats-base-dists-chi-variance/dist'),c=require('@stdlib/stats-base-dists-chi-mean/dist'),o=require('@stdlib/math-base-special-sqrt/dist');function g(e){var r,a,i,s;return n(e)||e<=0?NaN:(r=m(e),a=o(r),s=c(e),i=q(e),2/r*(1-s*a*i-r))}u.exports=g
});var f=t();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
