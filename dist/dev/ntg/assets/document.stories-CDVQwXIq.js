import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-Bbhtouok.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-x2sHGyES.js";async function u(e,t){let n=await d(t),r=Array.isArray(e)?e:[],i=new Set;return[...r,...n].filter(e=>i.has(e)?!1:(i.add(e),!0))}async function d(e){let t=f(e),n=p(e);if(!t||!n)return[];let r=`${S}?${C}=${encodeURIComponent(n)}`,i;try{let e=await fetch(r);if(!e.ok)return[];i=await e.json()}catch{return[]}return Array.isArray(i)?i.map(e=>e?.id).filter(Boolean).map(e=>`matrix-asset://${t}/${e}`):[]}function f(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/\d+(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function p(e){let t=/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)(?::.+)?$/.exec(String(e??``));return t?t[1]:null}async function m(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return h(await t.resolveUri(e))}catch{return null}}function h(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}function g(e,t){if(!e)return``;let n=e.name||``,r=e.url||``,i=v(r),o=e.attributes?.file_size_readable||``,c=y(e.metadata,`page-description`),l=[i.toUpperCase(),o].filter(Boolean).join(` | `),u=c?`<p class="document__description">${s(c)}</p>`:``;return`
<div class="document">
  <div class="document__header">
    <div class="document__icon-wrapper">
      <div class="document__icon">
        <i class="fa-thin ${_(i)}" aria-hidden="true"></i>
      </div>
    </div>
    <div class="document__meta">
      <a href="${a(r)}" class="document__title"${t?` download`:``}>${s(n)}</a>
      <span class="document__info">${s(l)}</span>
    </div>
  </div>
  ${u}
</div>`}function _(e){return b[String(e??``).toLowerCase()]||x}function v(e){let t=/\.([a-z0-9]+)(?:[?#].*)?$/i.exec(String(e??``));return t?t[1].toLowerCase():``}function y(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}var b,x,S,C,w,T=e((()=>{o(),t(),b={pdf:`fa-file-pdf`,doc:`fa-file-word`,docx:`fa-file-word`,ppt:`fa-file-powerpoint`,pptx:`fa-file-powerpoint`,xls:`fa-file-excel`,xlsx:`fa-file-excel`},x=`fa-file`,S=`https://nt.gov.au/web-design-system/listings/asset-children-json-feed`,C=`rootId`,w={async main(e,t){let{assets:r=[],parentAsset:i=``,download:a=!1}=e||{},o=await u(r,i),s=(await Promise.all(o.map(e=>m(e,t?.fns)))).map(e=>g(e,a)).filter(Boolean).join(`
`);return`
<div ${n(`document-list`,e)}>
  ${s}
</div>
`}}}));function E({id:e,name:t,url:n,fileSizeReadable:r,description:i}){let a={id:String(e),type:`file`,name:t,url:n,attributes:{file_size_readable:r},metadata:i?{"page-description":[i]}:{}};return D[String(e)]=a,a}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;await e((async()=>{i(),l(),T(),D={},E({id:4001,name:`Annual Report 2025`,url:`https://example.com/files/annual-report-2025.docx`,fileSizeReadable:`182 KB`,description:`The full annual report, covering performance, budget, and community outcomes for the year.`}),E({id:4002,name:`Budget Summary`,url:`https://example.com/files/budget-summary.xlsx`,fileSizeReadable:`2.4 MB`}),E({id:4003,name:`Community Consultation Guidelines`,url:`https://example.com/files/consultation-guidelines.pdf`,fileSizeReadable:`946 KB`,description:`Guidelines for participating in the community consultation process.`}),E({id:4004,name:`Stakeholder Presentation`,url:`https://example.com/files/stakeholder-presentation.pptx`,fileSizeReadable:`4.8 MB`}),O=c({mock:{resolveUri(e){return{ok:!0,data:D[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),k=r(w.main),A={title:`dxp components/Document`,parameters:{layout:`padded`}},j={assets:[`matrix-asset://ntg/4001`,`matrix-asset://ntg/4003`,`matrix-asset://ntg/4002`,`matrix-asset://ntg/4004`]},M=await k.markup(j,O),N={render:e=>k(e,O),args:j,argTypes:{assets:{control:`object`,description:`Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/4001 through /4004.`},download:{control:`boolean`}},parameters:{docs:{description:{story:`Multiple selected documents -- one card per asset, in the order selected.`},source:{code:M,language:`html`,type:`code`}}}},P={assets:[`matrix-asset://ntg/4001`]},F=await k.markup(P,O),I={render:()=>k(P,O),parameters:{docs:{description:{story:`One selected document, with a description (read from the asset's own attributes -- see document.spec.md assumption 3).`},source:{code:F,language:`html`,type:`code`}}}},L={assets:[`matrix-asset://ntg/4002`]},R=await k.markup(L,O),z={render:()=>k(L,O),parameters:{docs:{description:{story:`The selected asset has no description attribute set -- the description paragraph is not rendered at all.`},source:{code:R,language:`html`,type:`code`}}}},B={assets:[`matrix-asset://ntg/4003`]},V=await k.markup(B,O),H={render:()=>k(B,O),parameters:{docs:{source:{code:V,language:`html`,type:`code`}}}},U={assets:[`matrix-asset://ntg/4002`]},W=await k.markup(U,O),G={render:()=>k(U,O),parameters:{docs:{source:{code:W,language:`html`,type:`code`}}}},K={assets:[`matrix-asset://ntg/4004`]},q=await k.markup(K,O),J={render:()=>k(K,O),parameters:{docs:{source:{code:q,language:`html`,type:`code`}}}},Y={assets:[`matrix-asset://ntg/9999999`]},X=await k.markup(Y,O),Z={render:()=>k(Y,O),parameters:{docs:{description:{story:`An asset that fails to resolve contributes nothing, rendering an empty list rather than throwing.`},source:{code:X,language:`html`,type:`code`}}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: defaultArgs,
  argTypes: {
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/4001 through /4004.'
    },
    download: {
      control: 'boolean'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selected documents -- one card per asset, in the order selected.'
      },
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => squiz(singleArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'One selected document, with a description (read from the asset\\'s own attributes -- see document.spec.md assumption 3).'
      },
      source: {
        code: singleHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withoutDescriptionArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'The selected asset has no description attribute set -- the description paragraph is not rendered at all.'
      },
      source: {
        code: withoutDescriptionHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => squiz(pdfArgs, mockInfo),
  parameters: {
    docs: {
      source: {
        code: pdfHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => squiz(xlsxArgs, mockInfo),
  parameters: {
    docs: {
      source: {
        code: xlsxHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => squiz(pptxArgs, mockInfo),
  parameters: {
    docs: {
      source: {
        code: pptxHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'An asset that fails to resolve contributes nothing, rendering an empty list rather than throwing.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: defaultArgs,
  argTypes: {
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/4001 through /4004.'
    },
    download: {
      control: 'boolean'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selected documents -- one card per asset, in the order selected.'
      },
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => squiz(singleArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'One selected document, with a description (read from the asset\\'s own attributes -- see document.spec.md assumption 3).'
      },
      source: {
        code: singleHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withoutDescriptionArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'The selected asset has no description attribute set -- the description paragraph is not rendered at all.'
      },
      source: {
        code: withoutDescriptionHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => squiz(pdfArgs, mockInfo),
  parameters: {
    docs: {
      source: {
        code: pdfHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => squiz(xlsxArgs, mockInfo),
  parameters: {
    docs: {
      source: {
        code: xlsxHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => squiz(pptxArgs, mockInfo),
  parameters: {
    docs: {
      source: {
        code: pptxHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'An asset that fails to resolve contributes nothing, rendering an empty list rather than throwing.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Single`,`WithoutDescription`,`PDF`,`XLSX`,`PPTX`,`Unresolvable`]}))();export{N as Default,H as PDF,J as PPTX,I as Single,Z as Unresolvable,z as WithoutDescription,G as XLSX,Q as __namedExportsOrder,A as default};
//# sourceMappingURL=document.stories-CDVQwXIq.js.map