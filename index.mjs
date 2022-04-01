// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-skewness@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-variance@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-mean@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";var r=s,m=t,n=e,a=i,h=d;var j=function(s){var t,e;return r(s)||s<=0?NaN:(t=n(s),e=h(t),2/t*(1-a(s)*e*m(s)-t))};export{j as default};
//# sourceMappingURL=index.mjs.map
