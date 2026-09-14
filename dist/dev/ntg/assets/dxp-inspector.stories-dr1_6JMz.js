import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-D4VTpLG1.js";function s(e){return e instanceof URL?e.href:e??``}function c(e){if(!e||typeof e!=`object`)return{type:typeof e};let t=Object.keys(e),n=Object.getOwnPropertyNames(e),r=new Set,i=Object.getPrototypeOf(e);for(;i&&i!==Object.prototype;)Object.getOwnPropertyNames(i).filter(e=>e!==`constructor`).forEach(e=>r.add(e)),i=Object.getPrototypeOf(i);let a={};for(let t of new Set([...n,...r]))try{let n=e[t];typeof n==`function`?a[t]=`(function)`:n===void 0?a[t]=`(undefined)`:a[t]=n}catch(e){a[t]={_accessError:e?.message??String(e)}}return{ownEnumerableKeys:t,ownAllPropertyNames:n,prototypeOwnPropertyNames:[...r],allPropertyValues:a}}function l(e){return{...e,url:s(e?.url),note:e?.editor?`In Page Builder, ctx.url is usually the DXP preview URL, not the public site URL.`:void 0,_shapeInspection:c(e)}}function u(e,t,n){let r=e||n||``,i=Array.isArray(t)?t.filter(Boolean):[];return[String(r),i]}function d(e,t,n){return[s(e||n),Array.isArray(t)?t.filter(Boolean):[]]}function f(e){if(e.status===`fulfilled`)return{ok:!0,data:e.value};let t=e.reason;return{ok:!1,error:t?.message??String(t)}}function p(e,t){return`${e}(${t.map(e=>JSON.stringify(e)).join(`, `)})`}async function m(e){if(!e)return{skipped:!0,reason:`No fetchUrlArg provided.`};try{let t=await fetch(e),n=await t.text();return{ok:t.ok,status:t.status,statusText:t.statusText,bodyLength:n.length,bodySnippet:n.slice(0,500),looksLikeCloudflareChallenge:/Just a moment|cf-browser-verification|challenges\.cloudflare\.com/i.test(n)}}catch(e){return{ok:!1,error:e?.message??String(e)}}}var h,g=e((()=>{t(),h={async main(e={},t){let{resolveUriArg:r=``,rawUriArg:i=``,assetIdOverride:a=``,urlOverride:o=``,attributes:s=[],fetchUrlArg:c=``}=e,{env:h,ctx:g,fns:_}=t,v=l(g),y=u(a,s,g?.assetId),b=d(o,s,g?.url),x=r?_.resolveUri(r):Promise.resolve({skipped:!0,reason:`No resolveUriArg provided. resolveUri requires a matrix-asset-uri, not ctx.url.`}),S=i?_.resolveUri(i):Promise.resolve({skipped:!0,reason:`No rawUriArg provided.`}),C=y[0]?_.resolveMatrixAssetById(y[0],y[1]):Promise.resolve({skipped:!0,reason:`No asset ID available in override or ctx.assetId.`}),w=b[0]?_.resolveMatrixAssetByUrl(b[0],b[1]):Promise.resolve({skipped:!0,reason:`No URL available in override or ctx.url.`}),T=m(c),[E,D,O,k,A]=await Promise.allSettled([x,S,C,w,T]),j={byIdArgs:y,byUrlArgs:b,resolveUri:{call:r?p(`resolveUri`,[r]):`(skipped)`,result:f(E)},resolveUriRaw:{call:i?p(`resolveUri`,[i]):`(skipped)`,note:`Free-text variant of resolveUri, bypassing the Asset Tree picker -- for testing non-standard URI suffixes.`,result:f(D)},resolveMatrixAssetById:{call:p(`resolveMatrixAssetById`,y),result:f(O)},resolveMatrixAssetByUrl:{call:p(`resolveMatrixAssetByUrl`,b),note:g?.editor&&!o?`Using ctx.url default. Set urlOverride to test with the public site URL.`:void 0,result:f(k)},fetchTest:{call:c?`fetch(${JSON.stringify(c)})`:`(skipped)`,note:`Raw server-side fetch() -- checks whether THIS edge runtime can reach the given URL (e.g. blocked by Cloudflare/bot-protection or not), independent of what a CLI/sandbox test shows.`,result:f(A)}};return`<div ${n(`dxp-inspector`,e)}>
            <details open>
                <summary>DXP Inspector</summary>
                <details open>
                    <summary>ctx</summary>
                    <pre><code>${JSON.stringify(v,null,2)}</code></pre>
                </details>
                <details open>
                    <summary>fns</summary>
                    <small>${Object.keys(_).join(`, `)}</small>
                    <pre><code>${JSON.stringify(j,null,2)}</code></pre>
                </details>
                <details open>
                    <summary>env</summary>
                    <small>Component is configured for <code>INSPECTOR_ENV</code> you can set that to test if you need to</small>
                    <pre><code>${JSON.stringify(h,null,2)}</code></pre>
                </details>
            </details>
        </div>`}}})),_,v,y,b;e((()=>{i(),o(),g(),_=r(h.main),v={title:`Z dev tests/dxp-inxpector`},y={render:e=>_(e,a({ctx:e.ctx})),args:{ctx:{url:`mocked`,assetId:1},resolveUriArg:`mocked`,resolveMatrixAssetByIdArgs:`["mocked", []]`,resolveMatrixAssetByUrlArgs:`["mocked", []]`}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`InspectorKitchenSink`]}))();export{y as InspectorKitchenSink,b as __namedExportsOrder,v as default};
//# sourceMappingURL=dxp-inspector.stories-dr1_6JMz.js.map