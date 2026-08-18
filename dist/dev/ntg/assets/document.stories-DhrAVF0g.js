import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";import{n as r,r as i,t as a}from"./xss-Cvy76lHc.js";import{n as o,t as s}from"./squizInfo.mock-x2sHGyES.js";async function c(e,t){let n=await l(t),r=Array.isArray(e)?e:[],i=new Set;return[...r,...n].filter(e=>i.has(e)?!1:(i.add(e),!0))}async function l(e){let t=u(e),n=d(e);if(!t||!n)return[];let r=`${b}?${x}=${encodeURIComponent(n)}`,i;try{let e=await fetch(r);if(!e.ok)return[];i=await e.json()}catch{return[]}return Array.isArray(i)?i.map(e=>e?.id).filter(Boolean).map(e=>`matrix-asset://${t}/${e}`):[]}function u(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/\d+(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function d(e){let t=/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)(?::.+)?$/.exec(String(e??``));return t?t[1]:null}async function f(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return p(await t.resolveUri(e))}catch{return null}}function p(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}function m(e,t){if(!e)return``;let n=e.name||``,i=e.url||``,o=g(i),s=e.attributes?.file_size_readable||``,c=_(e.metadata,`page-description`),l=[o.toUpperCase(),s].filter(Boolean).join(` | `),u=c?`<p class="document__description">${a(c)}</p>`:``;return`
<div class="document">
  <div class="document__header">
    <div class="document__icon-wrapper">
      <div class="document__icon">
        <i class="fa-thin ${h(o)}" aria-hidden="true"></i>
      </div>
    </div>
    <div class="document__meta">
      <a href="${r(i)}" class="document__title"${t?` download`:``}>${a(n)}</a>
      <span class="document__info">${a(l)}</span>
    </div>
  </div>
  ${u}
</div>`}function h(e){return v[String(e??``).toLowerCase()]||y}function g(e){let t=/\.([a-z0-9]+)(?:[?#].*)?$/i.exec(String(e??``));return t?t[1].toLowerCase():``}function _(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}var v,y,b,x,S,C=e((()=>{i(),v={pdf:`fa-file-pdf`,doc:`fa-file-word`,docx:`fa-file-word`,ppt:`fa-file-powerpoint`,pptx:`fa-file-powerpoint`,xls:`fa-file-excel`,xlsx:`fa-file-excel`},y=`fa-file`,b=`https://nt.gov.au/web-design-system/listings/asset-children-json-feed`,x=`rootId`,S={async main(e,t){let{assets:n=[],parentAsset:r=``,download:i=!1}=e||{},a=await c(n,r);return`
<div class="document-list">
  ${(await Promise.all(a.map(e=>f(e,t?.fns)))).map(e=>m(e,i)).filter(Boolean).join(`
`)}
</div>
`}}}));function w({id:e,name:t,url:n,fileSizeReadable:r,description:i}){let a={id:String(e),type:`file`,name:t,url:n,attributes:{file_size_readable:r},metadata:i?{"page-description":[i]}:{}};return T[String(e)]=a,a}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;await e((async()=>{n(),s(),C(),T={},w({id:4001,name:`Annual Report 2025`,url:`https://example.com/files/annual-report-2025.docx`,fileSizeReadable:`182 KB`,description:`The full annual report, covering performance, budget, and community outcomes for the year.`}),w({id:4002,name:`Budget Summary`,url:`https://example.com/files/budget-summary.xlsx`,fileSizeReadable:`2.4 MB`}),w({id:4003,name:`Community Consultation Guidelines`,url:`https://example.com/files/consultation-guidelines.pdf`,fileSizeReadable:`946 KB`,description:`Guidelines for participating in the community consultation process.`}),w({id:4004,name:`Stakeholder Presentation`,url:`https://example.com/files/stakeholder-presentation.pptx`,fileSizeReadable:`4.8 MB`}),E=o({mock:{resolveUri(e){return{ok:!0,data:T[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),D=t(S.main),O={title:`dxp/Document`,parameters:{layout:`padded`}},k={assets:[`matrix-asset://ntg/4001`,`matrix-asset://ntg/4003`,`matrix-asset://ntg/4002`,`matrix-asset://ntg/4004`]},A=await D.markup(k,E),j={render:e=>D(e,E),args:k,argTypes:{assets:{control:`object`,description:`Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/4001 through /4004.`},download:{control:`boolean`}},parameters:{docs:{description:{story:`Multiple selected documents -- one card per asset, in the order selected.`},source:{code:A,language:`html`,type:`code`}}}},M={assets:[`matrix-asset://ntg/4001`]},N=await D.markup(M,E),P={render:()=>D(M,E),parameters:{docs:{description:{story:`One selected document, with a description (read from the asset's own attributes -- see document.spec.md assumption 3).`},source:{code:N,language:`html`,type:`code`}}}},F={assets:[`matrix-asset://ntg/4002`]},I=await D.markup(F,E),L={render:()=>D(F,E),parameters:{docs:{description:{story:`The selected asset has no description attribute set -- the description paragraph is not rendered at all.`},source:{code:I,language:`html`,type:`code`}}}},R={assets:[`matrix-asset://ntg/4003`]},z=await D.markup(R,E),B={render:()=>D(R,E),parameters:{docs:{source:{code:z,language:`html`,type:`code`}}}},V={assets:[`matrix-asset://ntg/4002`]},H=await D.markup(V,E),U={render:()=>D(V,E),parameters:{docs:{source:{code:H,language:`html`,type:`code`}}}},W={assets:[`matrix-asset://ntg/4004`]},G=await D.markup(W,E),K={render:()=>D(W,E),parameters:{docs:{source:{code:G,language:`html`,type:`code`}}}},q={assets:[`matrix-asset://ntg/9999999`]},J=await D.markup(q,E),Y={render:()=>D(q,E),parameters:{docs:{description:{story:`An asset that fails to resolve contributes nothing, rendering an empty list rather than throwing.`},source:{code:J,language:`html`,type:`code`}}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`Single`,`WithoutDescription`,`PDF`,`XLSX`,`PPTX`,`Unresolvable`]}))();export{j as Default,B as PDF,K as PPTX,P as Single,Y as Unresolvable,L as WithoutDescription,U as XLSX,X as __namedExportsOrder,O as default};
//# sourceMappingURL=document.stories-DhrAVF0g.js.map