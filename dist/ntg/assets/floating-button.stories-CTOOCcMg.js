import{r as e}from"./preload-helper-Dcl5TOAQ.js";import{n as t}from"../iframe.0.0.1.js";import{n,t as r}from"./squizStoryRenderer-CPVgI7yb.js";function i(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function a(e){return e?typeof e==`string`?{url:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}var o,s=e((()=>{o={async main(e={}){let{label:t=`Label`,link:n=null,ariaLabel:r=``,landmarkLabel:o=`Floating action button`}=e,s=`floating-button__action button`,c=r&&r!==t?` aria-label="${i(r)}"`:``,l=a(n),u=l?`<a class="${s}" href="${i(l.url)}"${l.target===`_self`?``:` target="${i(l.target)}" rel="noopener noreferrer"`}${c}>${i(t)}</a>`:`<button type="button" class="${s}"${c}>${i(t)}</button>`;return`
<div class="floating-button" role="complementary" aria-label="${i(o)}">
  <div class="floating-button__container">
    <div class="floating-button__button-wrapper">
      ${u}
    </div>
  </div>
</div>
`}}})),c,l,u,d;e((()=>{r(),t(),s(),c=n(o.main),l={title:`dxp/Floating Button`},u={render:()=>c({label:`Label`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    label: 'Label'
  })
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,l as default};