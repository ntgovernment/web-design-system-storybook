import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-COp5GpYY.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-x2sHGyES.js";function s(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/(\d+)(?::.+)?$/.exec(String(e??``));return t?{domain:t[1],id:t[2]}:null}function c(e){if(e.status===`fulfilled`)return{ok:!0,data:e.value};let t=e.reason;return{ok:!1,error:t?.message??String(t)}}async function l(e,t){if(!t)return{skipped:!0,reason:`LISTING_URL environment variable is not set.`};if(!e)return{skipped:!0,reason:`No parentAsset selected, or its URI didn't parse into an asset ID.`};let n=`${t}?${u}=${encodeURIComponent(e)}`;try{let e=await fetch(n),t=await e.text(),r;try{r=JSON.parse(t)}catch{r=t.slice(0,2e3)}return{call:`GET ${n}`,status:e.status,ok:e.ok,body:r}}catch(e){return{call:`GET ${n}`,ok:!1,error:e?.message??String(e)}}}var u,d,f=e((()=>{t(),u=`rootId`,d={async main(e={},t){let{parentAsset:r=``}=e,{fns:i,env:a}=t,o=a?.LISTING_URL,u=r?s(r):null,d=r?i.resolveUri(r):Promise.resolve({skipped:!0,reason:`No parentAsset selected.`}),[f,p]=await Promise.allSettled([d,l(u?u.id:null,o)]),m={parentAsset:r||`(none)`,listingBaseUrl:o||`(LISTING_URL not set)`,parentAssetResolved:c(f),children:c(p)};return`<div ${n(`asset-children-picker`,e)}>
      <details open>
        <summary>Asset Children Picker</summary>
        <small>Component is configured for <code>LISTING_URL</code>, you can set that to test a different Asset Listing feed</small>
        <pre><code>${JSON.stringify(m,null,2)}</code></pre>
      </details>
    </div>`}}})),p,m,h,g;e((()=>{i(),o(),f(),p=r(d.main),m={title:`Z dev tests/asset-children-picker`},h={render:e=>p(e,a({ctx:e.ctx})),args:{ctx:{url:`mocked`,assetId:1},parentAsset:``}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`NoArgs`]}))();export{h as NoArgs,g as __namedExportsOrder,m as default};
//# sourceMappingURL=asset-children-picker.stories-B0U6F--N.js.map