import{r as o,u as c}from"./seventv.ChatMessage.3.0.14.js";const e=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),U={randomUUID:e};function i(n,a,d){if(U.randomUUID&&!a&&!n)return U.randomUUID();n=n||{};const r=n.random||(n.rng||o)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,a){d=d||0;for(let t=0;t<16;++t)a[d+t]=r[t];return a}return c(r)}export{i as v};
