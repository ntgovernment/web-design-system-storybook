import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-COp5GpYY.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-x2sHGyES.js";function s(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/(\d+)(?::.+)?$/.exec(String(e??``));return t?{domain:t[1],id:t[2]}:null}function c(e){if(e.status===`fulfilled`)return{ok:!0,data:e.value};let t=e.reason;return{ok:!1,error:t?.message??String(t)}}async function l(e){if(!e)return{skipped:!0,reason:`No parentAsset selected, or its URI didn't parse into an asset ID.`};let t=`${u}?${d}=${encodeURIComponent(e)}`;try{let e=await fetch(t),n=await e.text(),r;try{r=JSON.parse(n)}catch{r=n.slice(0,2e3)}return{call:`GET ${t}`,status:e.status,ok:e.ok,body:r}}catch(e){return{call:`GET ${t}`,ok:!1,error:e?.message??String(e)}}}var u,d,f,p=e((()=>{t(),u=`https://nt.gov.au/web-design-system/listings/asset-children-json-feed`,d=`rootId`,f={async main(e={},t){let{parentAsset:r=``}=e,{fns:i}=t,a=r?s(r):null,o=r?i.resolveUri(r):Promise.resolve({skipped:!0,reason:`No parentAsset selected.`}),[u,d]=await Promise.allSettled([o,l(a?a.id:null)]),f={parentAsset:r||`(none)`,parentAssetResolved:c(u),children:c(d)};return`<div ${n(`asset-children-picker`,e)}>
      <details open>
        <summary>Asset Children Picker</summary>
        <pre><code>${JSON.stringify(f,null,2)}</code></pre>
      </details>
    </div>`}}})),m,h,g,_;e((()=>{i(),o(),p(),m=r(f.main),h={title:`Z dev tests/asset-children-picker`},g={render:e=>m(e,a({ctx:e.ctx})),args:{ctx:{url:`mocked`,assetId:1},parentAsset:``}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`NoArgs`]}))();export{g as NoArgs,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=asset-children-picker.stories-_m9nUJWv.js.map