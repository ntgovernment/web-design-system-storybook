import{r as e}from"./preload-helper-Dcl5TOAQ.js";import{i as t,n,r,t as i}from"./squizStoryRenderer-CPVgI7yb.js";var a,o=e((()=>{a={main:async({text:e=`Hello World!`,variant:t=`default`}={})=>`
      <div class="my-component${t&&t!==`default`?` my-component--${t}`:``}">
        <div class="my-component__text">
          ${e}
        </div>
      </div>
    `}})),s,c,l,u,d;e((()=>{i(),r(),o(),s=n(a.main),t(),c={title:`dxp/My Component`},l={render:()=>s({text:`Hello World!`})},u={render:()=>s({text:`I'm Special!`,variant:`special`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    text: 'Hello World!'
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    text: "I'm Special!",
    variant: 'special'
  })
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Special`]}))();export{l as Default,u as Special,d as __namedExportsOrder,c as default};