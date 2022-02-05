/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gamma@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";var h=e,j=t,g=n,c=s,f=i,b=r,v=o.isPrimitive,x=d,y=m.isPrimitive,w=l,P=a,L=u.factory,G=p;var N=function e(t,n,s){var i,r,o,d,m;if(!v(t))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+t+"`.");if(!v(n))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+n+"`.");if(arguments.length>2){if(!x(s))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+s+"`.");if(i=b(s,1),w(i,"iter")){if(!y(i.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+i.iter+"`.")}else i.iter=P;o=L(t,n,i),void 0===i.prng&&!1!==i.copy&&(i.state=o.state)}else o=L(t,n),i={iter:P,state:o.state};return m=0,h(r={},"next",l),h(r,"return",a),i&&i.prng?(h(r,"seed",null),h(r,"seedLength",null),g(r,"state",c(null),f),h(r,"stateLength",null),h(r,"byteLength",null)):(j(r,"seed",p),j(r,"seedLength",N),g(r,"state",T,V),j(r,"stateLength",R),j(r,"byteLength",E)),h(r,"PRNG",o.PRNG),G&&h(r,G,u),r;function l(){return m+=1,d||m>i.iter?{done:!0}:{value:o(),done:!1}}function a(e){return d=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return e(t,n,i)}function p(){return o.PRNG.seed}function N(){return o.PRNG.seedLength}function R(){return o.PRNG.stateLength}function E(){return o.PRNG.byteLength}function T(){return o.PRNG.state}function V(e){o.PRNG.state=e}},R=N;export{R as default};
//# sourceMappingURL=index.mjs.map
