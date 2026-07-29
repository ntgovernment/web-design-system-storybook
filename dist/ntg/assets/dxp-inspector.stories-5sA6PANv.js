import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./dxp-inspector-DRs58OhJ.js";import{n,t as r}from"./squizStoryRenderer-mGPdhelI.js";import{n as i,t as a}from"./squizInfo.mock-x2sHGyES.js";function o(e){return e instanceof URL?e.href:e??``}function s(e){return{...e,url:o(e?.url),note:e?.editor?`In Page Builder, ctx.url is usually the DXP preview URL, not the public site URL.`:void 0}}function c(e,t,n){let r=e||n||``,i=Array.isArray(t)?t.filter(Boolean):[];return[String(r),i]}function l(e,t,n){return[o(e||n),Array.isArray(t)?t.filter(Boolean):[]]}function u(e){if(e.status===`fulfilled`)return{ok:!0,data:e.value};let t=e.reason;return{ok:!1,error:t?.message??String(t)}}function d(e,t){return`${e}(${t.map(e=>JSON.stringify(e)).join(`, `)})`}var f,p=e((()=>{f={async main({resolveUriArg:e=``,assetIdOverride:t=``,urlOverride:n=``,attributes:r=[]},i){let{env:a,ctx:o,fns:f}=i,p=s(o),m=c(t,r,o?.assetId),h=l(n,r,o?.url),g=e?f.resolveUri(e):Promise.resolve({skipped:!0,reason:`No resolveUriArg provided. resolveUri requires a matrix-asset-uri, not ctx.url.`}),_=m[0]?f.resolveMatrixAssetById(m[0],m[1]):Promise.resolve({skipped:!0,reason:`No asset ID available in override or ctx.assetId.`}),v=h[0]?f.resolveMatrixAssetByUrl(h[0],h[1]):Promise.resolve({skipped:!0,reason:`No URL available in override or ctx.url.`}),[y,b,x]=await Promise.allSettled([g,_,v]),S={byIdArgs:m,byUrlArgs:h,resolveUri:{call:e?d(`resolveUri`,[e]):`(skipped)`,result:u(y)},resolveMatrixAssetById:{call:d(`resolveMatrixAssetById`,m),result:u(b)},resolveMatrixAssetByUrl:{call:d(`resolveMatrixAssetByUrl`,h),note:o?.editor&&!n?`Using ctx.url default. Set urlOverride to test with the public site URL.`:void 0,result:u(x)}};return`<div class="dxp-inspector">
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
        </div>`}}})),m,h,g,_;e((()=>{r(),a(),t(),p(),m=n(f.main),h={title:`dxp/dxp-inxpector`},g={render:e=>m(e,i({ctx:e.ctx})),args:{ctx:{url:`mocked`,assetId:1},resolveUriArg:`mocked`,resolveMatrixAssetByIdArgs:`["mocked", []]`,resolveMatrixAssetByUrlArgs:`["mocked", []]`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`InspectorKitchenSink`]}))();export{g as InspectorKitchenSink,_ as __namedExportsOrder,h as default};