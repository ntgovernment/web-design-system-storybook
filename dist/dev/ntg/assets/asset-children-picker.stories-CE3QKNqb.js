import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";import{n as r,t as i}from"./squizInfo.mock-x2sHGyES.js";function a(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/(\d+)(?::.+)?$/.exec(String(e??``));return t?{domain:t[1],id:t[2]}:null}function o(e){if(e.status===`fulfilled`)return{ok:!0,data:e.value};let t=e.reason;return{ok:!1,error:t?.message??String(t)}}function s(e){return!e||typeof e!=`object`?[]:Object.entries(e).filter(([,e])=>Array.isArray(e)).map(([e,t])=>`${e} (length ${t.length})`)}async function c(e,t,n){if(!e)return{skipped:!0,reason:`CONTENT_API_TOKEN environment variable is not set.`};if(!t)return{skipped:!0,reason:`No contentApiBaseUrl provided.`};if(!n)return{skipped:!0,reason:`No parentAsset selected, or its URI didn't parse into an asset ID.`};let r=`${String(t).replace(/\/$/,``)}/__api/assets/${n}/children?limit=5000&data=metadata,attributes`;try{let t=await fetch(r,{headers:{Authorization:`Bearer ${e}`}}),n=await t.text(),i;try{i=JSON.parse(n)}catch{i=n.slice(0,2e3)}return{call:`GET ${r}`,status:t.status,ok:t.ok,body:i}}catch(e){return{call:`GET ${r}`,ok:!1,error:e?.message??String(e)}}}var l,u,d,f=e((()=>{l=[`children`,`kids`,`assets`,`contents`,`subassets`,`items`,`childAssets`],u=[`resolveUri`,`resolveMatrixAssetById`,`resolveMatrixAssetByUrl`],d={async main({parentAsset:e=``,urlOverride:t=``,extraAttributes:n=[],contentApiBaseUrl:r=``}={},i){let{fns:d,env:f}=i,p=e?a(e):null,m=Array.isArray(n)?n.filter(Boolean):[],h=m.length?m:l,g=e?d.resolveUri(e):Promise.resolve({skipped:!0,reason:`No parentAsset selected.`}),_=p?d.resolveMatrixAssetById(p.id,h):Promise.resolve({skipped:!0,reason:`No parentAsset selected, or its URI didn't parse into domain/id.`}),v=t?d.resolveMatrixAssetByUrl(t,h):Promise.resolve({skipped:!0,reason:`No urlOverride provided -- resolveMatrixAssetByUrl needs the asset's public URL, not its matrix-asset-uri.`}),y=Object.keys(d||{}),b=y.filter(e=>/child|kids|list|query|search/i.test(e)&&!u.includes(e)),x=p?p.id:e,S=await Promise.allSettled(b.map(e=>d[e](x))),C=c(f?.CONTENT_API_TOKEN,r,p?p.id:null),[w,T,E,D]=await Promise.allSettled([g,_,v,C]),O=o(w),k=o(T),A=o(E),j=o(D),M={input:{parentAsset:e||`(none)`,parsedDomainId:p,attributesTried:h,urlOverride:t||`(none -- resolveMatrixAssetByUrl skipped)`,contentApiBaseUrl:r||`(none -- Content API children call skipped)`,contentApiTokenSet:!!f?.CONTENT_API_TOKEN},availableFns:y,resolveUri:{call:e?`resolveUri(${JSON.stringify(e)})`:`(skipped)`,result:O,arrayLikeKeysFound:O.ok?s(O.data):[]},resolveMatrixAssetById:{call:p?`resolveMatrixAssetById(${JSON.stringify(p.id)}, ${JSON.stringify(h)})`:`(skipped)`,result:k,arrayLikeKeysFound:k.ok?s(k.data):[]},resolveMatrixAssetByUrl:{call:t?`resolveMatrixAssetByUrl(${JSON.stringify(t)}, ${JSON.stringify(h)})`:`(skipped)`,result:A,arrayLikeKeysFound:A.ok?s(A.data):[]},otherChildLikeFnsFound:b,otherFnProbeResults:b.map((e,t)=>({name:e,call:`${e}(${JSON.stringify(x)})`,...o(S[t])})),contentApiChildren:{note:`Direct fetch() against Squiz Matrix's Content API children endpoint, bypassing info.fns entirely. Requires CONTENT_API_TOKEN to be set and contentApiBaseUrl to be filled in.`,result:j,arrayLikeKeysFound:j.ok&&j.data?.body?s(j.data.body):[]}};return`<div class="asset-children-picker">
      <details open>
        <summary>Asset Children Picker</summary>
        <p>Pick a folder or parent asset above, then check below for any array-valued field (see "arrayLikeKeysFound") across every resolution method -- that's what a real children list would look like.</p>
        <pre><code>${JSON.stringify(M,null,2)}</code></pre>
      </details>
    </div>`}}})),p,m,h,g;e((()=>{n(),i(),f(),p=t(d.main),m={title:`dxp/asset-children-picker`},h={render:e=>p(e,r({ctx:e.ctx})),args:{ctx:{url:`mocked`,assetId:1},parentAsset:``,urlOverride:``,extraAttributes:[],contentApiBaseUrl:``}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    parentAsset: "",
    urlOverride: "",
    extraAttributes: [],
    contentApiBaseUrl: ""
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
    parentAsset: "",
    urlOverride: "",
    extraAttributes: [],
    contentApiBaseUrl: ""
  }
}`,...h.parameters?.docs?.source}}},g=[`NoArgs`]}))();export{h as NoArgs,g as __namedExportsOrder,m as default};
//# sourceMappingURL=asset-children-picker.stories-CE3QKNqb.js.map