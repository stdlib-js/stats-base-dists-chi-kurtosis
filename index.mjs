// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-skewness@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-variance@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-mean@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";function m(m){var n,r;return s(m)||m<=0?NaN:(n=e(m),r=d(n),2/n*(1-i(m)*r*t(m)-n))}export{m as default};
//# sourceMappingURL=index.mjs.map
