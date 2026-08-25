import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-COp5GpYY.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-x2sHGyES.js";function s(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/(\d+)(?::.+)?$/.exec(String(e??``));return t?{domain:t[1],id:t[2]}:null}function c(e){if(e.status===`fulfilled`)return{ok:!0,data:e.value};let t=e.reason;return{ok:!1,error:t?.message??String(t)}}function l(e,t){return e?e.includes(`{assetId}`)?e.replaceAll(`{assetId}`,encodeURIComponent(t)):`${e}?${d}=${encodeURIComponent(t)}`:null}async function u(e,t){if(!t)return{skipped:!0,reason:`CONTENT_API_URL environment variable is not set.`};if(!e)return{skipped:!0,reason:`No parentAsset selected, or its URI didn't parse into an asset ID.`};let n=l(t,e);try{let e=await fetch(n),t=await e.text(),r;try{r=JSON.parse(t)}catch{r=t.slice(0,2e3)}return{call:`GET ${n}`,status:e.status,ok:e.ok,body:r}}catch(e){return{call:`GET ${n}`,ok:!1,error:e?.message??String(e)}}}var d,f,p=e((()=>{t(),d=`rootId`,f={async main(e={},t){let{parentAsset:r=``}=e,{fns:i,env:a}=t,o=a?.CONTENT_API_URL,l=r?s(r):null,d=r?i.resolveUri(r):Promise.resolve({skipped:!0,reason:`No parentAsset selected.`}),[f,p]=await Promise.allSettled([d,u(l?l.id:null,o)]),m={parentAsset:r||`(none)`,contentApiUrl:o||`(CONTENT_API_URL not set)`,parentAssetResolved:c(f),children:c(p)};return`<div ${n(`content-api-picker`,e)}>
      <details open>
        <summary>Content API Picker</summary>
        <small>Component is configured for <code>CONTENT_API_URL</code> (optionally containing a literal <code>{assetId}</code> placeholder) -- point it at your Matrix REST resource's URL, which handles auth and returns JSON directly</small>
        <pre><code>${JSON.stringify(m,null,2)}</code></pre>
      </details>
    </div>`}}})),m,h,g,_;e((()=>{i(),o(),p(),m=r(f.main),h={title:`Z dev tests/content-api-picker`},g={render:e=>m(e,a({ctx:e.ctx})),args:{ctx:{url:`mocked`,assetId:1},parentAsset:``}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=content-api-picker.stories-CgdSxM68.js.map