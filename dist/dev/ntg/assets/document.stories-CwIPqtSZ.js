import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-D4VTpLG1.js";async function u(e,t,n){let r=await d(t,n),i=Array.isArray(e)?e:[],a=new Set;return[...i,...r].filter(e=>a.has(e)?!1:(a.add(e),!0))}async function d(e,t){let n=f(e),r=p(e);if(!n||!r||!t)return[];let i=`${t}?${S}=${encodeURIComponent(r)}`,a;try{let e=await fetch(i);if(!e.ok)return[];a=await e.json()}catch{return[]}return Array.isArray(a)?a.map(e=>e?.id).filter(Boolean).map(e=>`matrix-asset://${n}/${e}`):[]}function f(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/\d+(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function p(e){let t=/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)(?::.+)?$/.exec(String(e??``));return t?t[1]:null}async function m(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return h(await t.resolveUri(e))}catch{return null}}function h(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}function g(e,t){if(!e)return``;let n=e.name||``,r=e.url||``,i=v(r),o=e.attributes?.file_size_readable||``,c=y(e.metadata,`page-description`),l=[i.toUpperCase(),o].filter(Boolean).join(` | `),u=c?`<p class="document__description">${s(c)}</p>`:``;return`
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
</div>`}function _(e){return b[String(e??``).toLowerCase()]||x}function v(e){let t=/\.([a-z0-9]+)(?:[?#].*)?$/i.exec(String(e??``));return t?t[1].toLowerCase():``}function y(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}var b,x,S,C,w=e((()=>{o(),t(),b={pdf:`fa-file-pdf`,doc:`fa-file-word`,docx:`fa-file-word`,ppt:`fa-file-powerpoint`,pptx:`fa-file-powerpoint`,xls:`fa-file-excel`,xlsx:`fa-file-excel`},x=`fa-file`,S=`rootId`,C={async main(e,t){let{assets:r=[],parentAsset:i=``,download:a=!1}=e||{},o=await u(r,i,t?.env?.CONTENT_API_URL),s=(await Promise.all(o.map(e=>m(e,t?.fns)))).map(e=>g(e,a)).filter(Boolean).join(`
`);return`
<div ${n(`document-list`,e)}>
  ${s}
</div>
`}}}));function T({id:e,name:t,url:n,fileSizeReadable:r,description:i}){let a={id:String(e),type:`file`,name:t,url:n,attributes:{file_size_readable:r},metadata:i?{"page-description":[i]}:{}};return E[String(e)]=a,a}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;await e((async()=>{i(),l(),w(),E={},T({id:4001,name:`Annual Report 2025`,url:`https://example.com/files/annual-report-2025.docx`,fileSizeReadable:`182 KB`,description:`The full annual report, covering performance, budget, and community outcomes for the year.`}),T({id:4002,name:`Budget Summary`,url:`https://example.com/files/budget-summary.xlsx`,fileSizeReadable:`2.4 MB`}),T({id:4003,name:`Community Consultation Guidelines`,url:`https://example.com/files/consultation-guidelines.pdf`,fileSizeReadable:`946 KB`,description:`Guidelines for participating in the community consultation process.`}),T({id:4004,name:`Stakeholder Presentation`,url:`https://example.com/files/stakeholder-presentation.pptx`,fileSizeReadable:`4.8 MB`}),D=c({mock:{resolveUri(e){return{ok:!0,data:E[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),O=r(C.main),k={title:`dxp components/Document`,parameters:{layout:`padded`}},A={assets:[`matrix-asset://ntg/4001`,`matrix-asset://ntg/4003`,`matrix-asset://ntg/4002`,`matrix-asset://ntg/4004`]},j=await O.markup(A,D),M={render:e=>O(e,D),args:A,argTypes:{assets:{control:`object`,description:`Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/4001 through /4004.`},download:{control:`boolean`}},parameters:{docs:{description:{story:`Multiple selected documents -- one card per asset, in the order selected.`},source:{code:j,language:`html`,type:`code`}}}},N={assets:[`matrix-asset://ntg/4001`]},P=await O.markup(N,D),F={render:()=>O(N,D),parameters:{docs:{description:{story:`One selected document, with a description (read from the asset's own attributes -- see document.spec.md assumption 3).`},source:{code:P,language:`html`,type:`code`}}}},I={assets:[`matrix-asset://ntg/4002`]},L=await O.markup(I,D),R={render:()=>O(I,D),parameters:{docs:{description:{story:`The selected asset has no description attribute set -- the description paragraph is not rendered at all.`},source:{code:L,language:`html`,type:`code`}}}},z={assets:[`matrix-asset://ntg/4003`]},B=await O.markup(z,D),V={render:()=>O(z,D),parameters:{docs:{source:{code:B,language:`html`,type:`code`}}}},H={assets:[`matrix-asset://ntg/4002`]},U=await O.markup(H,D),W={render:()=>O(H,D),parameters:{docs:{source:{code:U,language:`html`,type:`code`}}}},G={assets:[`matrix-asset://ntg/4004`]},K=await O.markup(G,D),q={render:()=>O(G,D),parameters:{docs:{source:{code:K,language:`html`,type:`code`}}}},J={assets:[`matrix-asset://ntg/9999999`]},Y=await O.markup(J,D),X={render:()=>O(J,D),parameters:{docs:{description:{story:`An asset that fails to resolve contributes nothing, rendering an empty list rather than throwing.`},source:{code:Y,language:`html`,type:`code`}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z=[`Default`,`Single`,`WithoutDescription`,`PDF`,`XLSX`,`PPTX`,`Unresolvable`]}))();export{M as Default,V as PDF,q as PPTX,F as Single,X as Unresolvable,R as WithoutDescription,W as XLSX,Z as __namedExportsOrder,k as default};
//# sourceMappingURL=document.stories-CwIPqtSZ.js.map