import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-COp5GpYY.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-x2sHGyES.js";function s(e){return e instanceof URL?e.href:e??``}function c(e){if(!e||typeof e!=`object`)return{type:typeof e};let t=Object.keys(e),n=Object.getOwnPropertyNames(e),r=new Set,i=Object.getPrototypeOf(e);for(;i&&i!==Object.prototype;)Object.getOwnPropertyNames(i).filter(e=>e!==`constructor`).forEach(e=>r.add(e)),i=Object.getPrototypeOf(i);let a={};for(let t of new Set([...n,...r]))try{let n=e[t];typeof n==`function`?a[t]=`(function)`:n===void 0?a[t]=`(undefined)`:a[t]=n}catch(e){a[t]={_accessError:e?.message??String(e)}}return{ownEnumerableKeys:t,ownAllPropertyNames:n,prototypeOwnPropertyNames:[...r],allPropertyValues:a}}function l(e){return{...e,url:s(e?.url),note:e?.editor?`In Page Builder, ctx.url is usually the DXP preview URL, not the public site URL.`:void 0,_shapeInspection:c(e)}}function u(e,t,n){let r=e||n||``,i=Array.isArray(t)?t.filter(Boolean):[];return[String(r),i]}function d(e,t,n){return[s(e||n),Array.isArray(t)?t.filter(Boolean):[]]}function f(e){if(e.status===`fulfilled`)return{ok:!0,data:e.value};let t=e.reason;return{ok:!1,error:t?.message??String(t)}}function p(e,t){return`${e}(${t.map(e=>JSON.stringify(e)).join(`, `)})`}var m,h=e((()=>{t(),m={async main(e={},t){let{resolveUriArg:r=``,rawUriArg:i=``,assetIdOverride:a=``,urlOverride:o=``,attributes:s=[]}=e,{env:c,ctx:m,fns:h}=t,g=l(m),_=u(a,s,m?.assetId),v=d(o,s,m?.url),y=r?h.resolveUri(r):Promise.resolve({skipped:!0,reason:`No resolveUriArg provided. resolveUri requires a matrix-asset-uri, not ctx.url.`}),b=i?h.resolveUri(i):Promise.resolve({skipped:!0,reason:`No rawUriArg provided.`}),x=_[0]?h.resolveMatrixAssetById(_[0],_[1]):Promise.resolve({skipped:!0,reason:`No asset ID available in override or ctx.assetId.`}),S=v[0]?h.resolveMatrixAssetByUrl(v[0],v[1]):Promise.resolve({skipped:!0,reason:`No URL available in override or ctx.url.`}),[C,w,T,E]=await Promise.allSettled([y,b,x,S]),D={byIdArgs:_,byUrlArgs:v,resolveUri:{call:r?p(`resolveUri`,[r]):`(skipped)`,result:f(C)},resolveUriRaw:{call:i?p(`resolveUri`,[i]):`(skipped)`,note:`Free-text variant of resolveUri, bypassing the Asset Tree picker -- for testing non-standard URI suffixes.`,result:f(w)},resolveMatrixAssetById:{call:p(`resolveMatrixAssetById`,_),result:f(T)},resolveMatrixAssetByUrl:{call:p(`resolveMatrixAssetByUrl`,v),note:m?.editor&&!o?`Using ctx.url default. Set urlOverride to test with the public site URL.`:void 0,result:f(E)}};return`<div ${n(`dxp-inspector`,e)}>
            <details open>
                <summary>DXP Inspector</summary>
                <details open>
                    <summary>ctx</summary>
                    <pre><code>${JSON.stringify(g,null,2)}</code></pre>
                </details>
                <details open>
                    <summary>fns</summary>
                    <small>${Object.keys(h).join(`, `)}</small>
                    <pre><code>${JSON.stringify(D,null,2)}</code></pre>
                </details>
                <details open>
                    <summary>env</summary>
                    <small>Component is configured for <code>INSPECTOR_ENV</code> you can set that to test if you need to</small>
                    <pre><code>${JSON.stringify(c,null,2)}</code></pre>
                </details>
            </details>
        </div>`}}})),g,_,v,y;e((()=>{i(),o(),h(),g=r(m.main),_={title:`Z dev tests/dxp-inxpector`},v={render:e=>g(e,a({ctx:e.ctx})),args:{ctx:{url:`mocked`,assetId:1},resolveUriArg:`mocked`,resolveMatrixAssetByIdArgs:`["mocked", []]`,resolveMatrixAssetByUrlArgs:`["mocked", []]`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const info = squizInfoMock({
      ctx: args.ctx
      // mock: {
      //     resolveUri() {
      //         return 
      //     }
      // }
    });
    return squiz(args, info);
  },
  args: {
    ctx: {
      url: 'mocked',
      assetId: 1
    },
    resolveUriArg: "mocked",
    resolveMatrixAssetByIdArgs: '["mocked", []]',
    resolveMatrixAssetByUrlArgs: '["mocked", []]'
  }
  // argTypes: {
  //     ctx: {
  //         url: { copntrol: 'text' },
  //         assetId: 'number'
  //     },
  //     resolveUriArg: { control: "text" },
  //     resolveMatrixAssetByIdArgs: { control: "text" },
  //     resolveMatrixAssetByUrlArgs: { control: "text" }
  // }
}`,...v.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const info = squizInfoMock({
      ctx: args.ctx
      // mock: {
      //     resolveUri() {
      //         return 
      //     }
      // }
    });
    return squiz(args, info);
  },
  args: {
    ctx: {
      url: 'mocked',
      assetId: 1
    },
    resolveUriArg: "mocked",
    resolveMatrixAssetByIdArgs: '["mocked", []]',
    resolveMatrixAssetByUrlArgs: '["mocked", []]'
  }
  // argTypes: {
  //     ctx: {
  //         url: { copntrol: 'text' },
  //         assetId: 'number'
  //     },
  //     resolveUriArg: { control: "text" },
  //     resolveMatrixAssetByIdArgs: { control: "text" },
  //     resolveMatrixAssetByUrlArgs: { control: "text" }
  // }
}`,...v.parameters?.docs?.source}}},y=[`InspectorKitchenSink`]}))();export{v as InspectorKitchenSink,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=dxp-inspector.stories-B0igfMeR.js.map