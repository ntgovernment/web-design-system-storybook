import{r as e}from"./preload-helper-Dcl5TOAQ.js";import{r as t}from"../iframe.0.0.1.js";import{n,t as r}from"./squizStoryRenderer-CPVgI7yb.js";function i(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var a,o,s,c=e((()=>{a=new Set([`primary`,`secondary`]),o=new Set([`default`,`hover`,`focus`,`populated`]),s={async main(e={}){let{label:t=`Search`,placeholder:n=`Search`,value:r=``,variant:s=`primary`,state:c=`default`,showClear:l=!0,searchIconLabel:u=`Search`}=e,d=a.has(s)?s:`primary`,f=r?`populated`:`default`,p=o.has(c)?c:f,m=r&&c===`default`?`populated`:p,h=!!(l&&r&&m===`populated`);return`
<div class="${`search-field search-field--${d} search-field--${m}`}" data-variant="${d}" data-state="${m}">
  <label class="search-field__label">${i(t)}</label>
  <div class="search-field__control" role="group" aria-label="${i(t)}">
    <input
      class="search-field__input"
      type="search"
      name="q"
      value="${i(r)}"
      placeholder="${i(n)}"
      autocomplete="off"
    />
    ${h?`<button class="search-field__clear" type="button" aria-label="Clear search text">&#10005;</button>`:``}
    <button class="search-field__search" type="button" aria-label="${i(u)}">
      <span class="search-field__search-icon" aria-hidden="true">&#128269;</span>
      <span class="search-field__sr-only">${i(u)}</span>
    </button>
  </div>
</div>
`}}})),l,u,d,f,p,m,h,g,_,v,y;e((()=>{r(),t(),c(),l=n(s.main),u={title:`dxp/Search Field`},d={render:()=>l({label:`Primary`,placeholder:`Search`,variant:`primary`,state:`default`})},f={render:()=>l({label:`Primary`,placeholder:`Search`,variant:`primary`,state:`hover`})},p={render:()=>l({label:`Primary`,placeholder:`Search`,variant:`primary`,state:`focus`})},m={render:()=>l({label:`Primary`,value:`Text`,placeholder:`Search`,variant:`primary`,state:`populated`,showClear:!0})},h={render:()=>l({label:`Secondary`,placeholder:`Search`,variant:`secondary`,state:`default`})},g={render:()=>l({label:`Secondary`,placeholder:`Search`,variant:`secondary`,state:`hover`})},_={render:()=>l({label:`Secondary`,placeholder:`Search`,variant:`secondary`,state:`focus`})},v={render:()=>l({label:`Secondary`,value:`Text`,placeholder:`Search`,variant:`secondary`,state:`populated`,showClear:!0})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    label: 'Primary',
    placeholder: 'Search',
    variant: 'primary',
    state: 'default'
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    label: 'Primary',
    placeholder: 'Search',
    variant: 'primary',
    state: 'hover'
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    label: 'Primary',
    placeholder: 'Search',
    variant: 'primary',
    state: 'focus'
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    label: 'Primary',
    value: 'Text',
    placeholder: 'Search',
    variant: 'primary',
    state: 'populated',
    showClear: true
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    label: 'Secondary',
    placeholder: 'Search',
    variant: 'secondary',
    state: 'default'
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    label: 'Secondary',
    placeholder: 'Search',
    variant: 'secondary',
    state: 'hover'
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    label: 'Secondary',
    placeholder: 'Search',
    variant: 'secondary',
    state: 'focus'
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    label: 'Secondary',
    value: 'Text',
    placeholder: 'Search',
    variant: 'secondary',
    state: 'populated',
    showClear: true
  })
}`,...v.parameters?.docs?.source}}},y=[`PrimaryDefault`,`PrimaryHover`,`PrimaryFocus`,`PrimaryPopulated`,`SecondaryDefault`,`SecondaryHover`,`SecondaryFocus`,`SecondaryPopulated`]}))();export{d as PrimaryDefault,p as PrimaryFocus,f as PrimaryHover,m as PrimaryPopulated,h as SecondaryDefault,_ as SecondaryFocus,g as SecondaryHover,v as SecondaryPopulated,y as __namedExportsOrder,u as default};