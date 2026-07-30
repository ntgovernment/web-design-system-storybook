import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-mGPdhelI.js";import{n as r,t as i}from"./squizInfo.mock-x2sHGyES.js";function a(e){return e instanceof URL?e.href:e??``}function o(e){return{...e,url:a(e?.url),note:e?.editor?`In Page Builder, ctx.url is usually the DXP preview URL, not the public site URL.`:void 0}}function s(e,t,n){let r=e||n||``,i=Array.isArray(t)?t.filter(Boolean):[];return[String(r),i]}function c(e,t,n){return[a(e||n),Array.isArray(t)?t.filter(Boolean):[]]}function l(e){if(e.status===`fulfilled`)return{ok:!0,data:e.value};let t=e.reason;return{ok:!1,error:t?.message??String(t)}}function u(e,t){return`${e}(${t.map(e=>JSON.stringify(e)).join(`, `)})`}var d,f=e((()=>{d={async main({resolveUriArg:e=``,assetIdOverride:t=``,urlOverride:n=``,attributes:r=[]},i){let{env:a,ctx:d,fns:f}=i,p=o(d),m=s(t,r,d?.assetId),h=c(n,r,d?.url),g=e?f.resolveUri(e):Promise.resolve({skipped:!0,reason:`No resolveUriArg provided. resolveUri requires a matrix-asset-uri, not ctx.url.`}),_=m[0]?f.resolveMatrixAssetById(m[0],m[1]):Promise.resolve({skipped:!0,reason:`No asset ID available in override or ctx.assetId.`}),v=h[0]?f.resolveMatrixAssetByUrl(h[0],h[1]):Promise.resolve({skipped:!0,reason:`No URL available in override or ctx.url.`}),[y,b,x]=await Promise.allSettled([g,_,v]),S={byIdArgs:m,byUrlArgs:h,resolveUri:{call:e?u(`resolveUri`,[e]):`(skipped)`,result:l(y)},resolveMatrixAssetById:{call:u(`resolveMatrixAssetById`,m),result:l(b)},resolveMatrixAssetByUrl:{call:u(`resolveMatrixAssetByUrl`,h),note:d?.editor&&!n?`Using ctx.url default. Set urlOverride to test with the public site URL.`:void 0,result:l(x)}};return`<div class="dxp-inspector">
            <details open>
                <summary>DXP Inspector</summary>
                <details open>
                    <summary>ctx</summary>
                    <pre><code>${JSON.stringify(p,null,2)}</code></pre>
                </details>
                <details open>
                    <summary>fns</summary>
                    <small>${Object.keys(f).join(`, `)}</small>
                    <pre><code>${JSON.stringify(S,null,2)}</code></pre>
                </details>
                <details open>
                    <summary>env</summary>
                    <small>Component is configured for <code>INSPECTOR_ENV</code> you can set that to test if you need to</small>
                    <pre><code>${JSON.stringify(a,null,2)}</code></pre>
                </details>
            </details>
        </div>`}}})),p,m,h,g;e((()=>{n(),i(),f(),p=t(d.main),m={title:`dxp/dxp-inxpector`},h={render:e=>p(e,r({ctx:e.ctx})),args:{ctx:{url:`mocked`,assetId:1},resolveUriArg:`mocked`,resolveMatrixAssetByIdArgs:`["mocked", []]`,resolveMatrixAssetByUrlArgs:`["mocked", []]`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`InspectorKitchenSink`]}))();export{h as InspectorKitchenSink,g as __namedExportsOrder,m as default};
//# sourceMappingURL=dxp-inspector.stories-ChMXc-oZ.js.map