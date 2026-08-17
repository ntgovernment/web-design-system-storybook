import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";import{n as r,t as i}from"./squizInfo.mock-x2sHGyES.js";function a(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/(\d+)(?::.+)?$/.exec(String(e??``));return t?{domain:t[1],id:t[2]}:null}function o(e){if(e.status===`fulfilled`)return{ok:!0,data:e.value};let t=e.reason;return{ok:!1,error:t?.message??String(t)}}async function s(e){if(!e)return{skipped:!0,reason:`No parentAsset selected, or its URI didn't parse into an asset ID.`};let t=`${c}?${l}=${encodeURIComponent(e)}`;try{let e=await fetch(t),n=await e.text(),r;try{r=JSON.parse(n)}catch{r=n.slice(0,2e3)}return{call:`GET ${t}`,status:e.status,ok:e.ok,body:r}}catch(e){return{call:`GET ${t}`,ok:!1,error:e?.message??String(e)}}}var c,l,u,d=e((()=>{c=`https://nt.gov.au/web-design-system/listings/asset-children-json-feed`,l=`rootId`,u={async main({parentAsset:e=``}={},t){let{fns:n}=t,r=e?a(e):null,i=e?n.resolveUri(e):Promise.resolve({skipped:!0,reason:`No parentAsset selected.`}),[c,l]=await Promise.allSettled([i,s(r?r.id:null)]),u={parentAsset:e||`(none)`,parentAssetResolved:o(c),children:o(l)};return`<div class="asset-children-picker">
      <details open>
        <summary>Asset Children Picker</summary>
        <pre><code>${JSON.stringify(u,null,2)}</code></pre>
      </details>
    </div>`}}})),f,p,m,h;e((()=>{n(),i(),d(),f=t(u.main),p={title:`dxp/asset-children-picker`},m={render:e=>f(e,r({ctx:e.ctx})),args:{ctx:{url:`mocked`,assetId:1},parentAsset:``}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const info = squizInfoMock({
      ctx: args.ctx
    });
    return squiz(args, info);
  },
  args: {
    ctx: {
      url: "mocked",
      assetId: 1
    },
    parentAsset: ""
  }
}`,...m.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const info = squizInfoMock({
      ctx: args.ctx
    });
    return squiz(args, info);
  },
  args: {
    ctx: {
      url: "mocked",
      assetId: 1
    },
    parentAsset: ""
  }
}`,...m.parameters?.docs?.source}}},h=[`NoArgs`]}))();export{m as NoArgs,h as __namedExportsOrder,p as default};
//# sourceMappingURL=asset-children-picker.stories-2gVmhW2F.js.map