import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-Bbhtouok.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-x2sHGyES.js";function s(e){return e instanceof URL?e.href:e??``}function c(e){return{...e,url:s(e?.url),note:e?.editor?`In Page Builder, ctx.url is usually the DXP preview URL, not the public site URL.`:void 0}}function l(e,t,n){let r=e||n||``,i=Array.isArray(t)?t.filter(Boolean):[];return[String(r),i]}function u(e,t,n){return[s(e||n),Array.isArray(t)?t.filter(Boolean):[]]}function d(e){if(e.status===`fulfilled`)return{ok:!0,data:e.value};let t=e.reason;return{ok:!1,error:t?.message??String(t)}}function f(e,t){return`${e}(${t.map(e=>JSON.stringify(e)).join(`, `)})`}var p,m=e((()=>{t(),p={async main(e={},t){let{resolveUriArg:r=``,rawUriArg:i=``,assetIdOverride:a=``,urlOverride:o=``,attributes:s=[]}=e,{env:p,ctx:m,fns:h}=t,g=c(m),_=l(a,s,m?.assetId),v=u(o,s,m?.url),y=r?h.resolveUri(r):Promise.resolve({skipped:!0,reason:`No resolveUriArg provided. resolveUri requires a matrix-asset-uri, not ctx.url.`}),b=i?h.resolveUri(i):Promise.resolve({skipped:!0,reason:`No rawUriArg provided.`}),x=_[0]?h.resolveMatrixAssetById(_[0],_[1]):Promise.resolve({skipped:!0,reason:`No asset ID available in override or ctx.assetId.`}),S=v[0]?h.resolveMatrixAssetByUrl(v[0],v[1]):Promise.resolve({skipped:!0,reason:`No URL available in override or ctx.url.`}),[C,w,T,E]=await Promise.allSettled([y,b,x,S]),D={byIdArgs:_,byUrlArgs:v,resolveUri:{call:r?f(`resolveUri`,[r]):`(skipped)`,result:d(C)},resolveUriRaw:{call:i?f(`resolveUri`,[i]):`(skipped)`,note:`Free-text variant of resolveUri, bypassing the Asset Tree picker -- for testing non-standard URI suffixes.`,result:d(w)},resolveMatrixAssetById:{call:f(`resolveMatrixAssetById`,_),result:d(T)},resolveMatrixAssetByUrl:{call:f(`resolveMatrixAssetByUrl`,v),note:m?.editor&&!o?`Using ctx.url default. Set urlOverride to test with the public site URL.`:void 0,result:d(E)}};return`<div ${n(`dxp-inspector`,e)}>
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
                    <pre><code>${JSON.stringify(p,null,2)}</code></pre>
                </details>
            </details>
        </div>`}}})),h,g,_,v;e((()=>{i(),o(),m(),h=r(p.main),g={title:`Z dev tests/dxp-inxpector`},_={render:e=>h(e,a({ctx:e.ctx})),args:{ctx:{url:`mocked`,assetId:1},resolveUriArg:`mocked`,resolveMatrixAssetByIdArgs:`["mocked", []]`,resolveMatrixAssetByUrlArgs:`["mocked", []]`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`InspectorKitchenSink`]}))();export{_ as InspectorKitchenSink,v as __namedExportsOrder,g as default};
//# sourceMappingURL=dxp-inspector.stories-Bsth3bKC.js.map