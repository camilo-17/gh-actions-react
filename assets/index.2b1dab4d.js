import{j as r,a as c,A as a,C as u,R as i,b as l,c as f}from"./vendor.e6e392c5.js";const m=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}};m();function h(){return r("div",{children:c(a,{theme:"primary",children:["Alert - Primary Theme (default) -"," ",r("a",{className:"alert-link",href:"#",children:"Example Link"})]})})}function p(){return c(u,{children:[r(i,{children:r(l,{sm:"6",lg:"6",children:r(h,{})})}),r(i,{children:r(l,{sm:"6",lg:"6",children:r("p",{children:"Hola mundo"})})}),r(i,{children:r(l,{sm:"6",lg:"6",children:r("p",{children:"Hola mundo"})})})]})}f.render(r(p,{}),document.getElementById("root"));