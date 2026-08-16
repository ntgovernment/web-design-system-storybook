import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";import{n as r,r as i,t as a}from"./xss-Cvy76lHc.js";import{n as o,t as s}from"./squizInfo.mock-x2sHGyES.js";function c(e){return m[String(e??``).toLowerCase()]||h}function l(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}async function u(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return l(await t.resolveUri(e))}catch{return null}}function d(e){let t=/\.([a-z0-9]+)(?:[?#].*)?$/i.exec(String(e??``));return t?t[1].toLowerCase():``}function f(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}function p(e,t){if(!e)return``;let n=e.name||``,i=e.url||``,o=d(i),s=e.attributes?.file_size_readable||``,l=f(e.metadata,`page-description`),u=[o.toUpperCase(),s].filter(Boolean).join(` | `),p=l?`<p class="document__description">${a(l)}</p>`:``;return`
<div class="document">
  <div class="document__header">
    <div class="document__icon-wrapper">
      <div class="document__icon">
        <i class="fa-thin ${c(o)}" aria-hidden="true"></i>
      </div>
    </div>
    <div class="document__meta">
      <a href="${r(i)}" class="document__title"${t?` download`:``}>${a(n)}</a>
      <span class="document__info">${a(u)}</span>
    </div>
  </div>
  ${p}
</div>`}var m,h,g,_=e((()=>{i(),m={pdf:`fa-file-pdf`,doc:`fa-file-word`,docx:`fa-file-word`,ppt:`fa-file-powerpoint`,pptx:`fa-file-powerpoint`,xls:`fa-file-excel`,xlsx:`fa-file-excel`},h=`fa-file`,g={async main(e,t){let{assets:n=[],download:r=!1}=e||{},i=Array.isArray(n)?n:[];return`
<div class="document-list">
  ${(await Promise.all(i.map(e=>u(e,t?.fns)))).map(e=>p(e,r)).filter(Boolean).join(`
`)}
</div>
`}}}));function v({id:e,name:t,url:n,fileSizeReadable:r,description:i}){let a={id:String(e),type:`file`,name:t,url:n,attributes:{file_size_readable:r},metadata:i?{"page-description":[i]}:{}};return y[String(e)]=a,a}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;await e((async()=>{n(),s(),_(),y={},v({id:4001,name:`Annual Report 2025`,url:`https://example.com/files/annual-report-2025.docx`,fileSizeReadable:`182 KB`,description:`The full annual report, covering performance, budget, and community outcomes for the year.`}),v({id:4002,name:`Budget Summary`,url:`https://example.com/files/budget-summary.xlsx`,fileSizeReadable:`2.4 MB`}),v({id:4003,name:`Community Consultation Guidelines`,url:`https://example.com/files/consultation-guidelines.pdf`,fileSizeReadable:`946 KB`,description:`Guidelines for participating in the community consultation process.`}),v({id:4004,name:`Stakeholder Presentation`,url:`https://example.com/files/stakeholder-presentation.pptx`,fileSizeReadable:`4.8 MB`}),b=o({mock:{resolveUri(e){return{ok:!0,data:y[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),x=t(g.main),S={title:`dxp/Document`,parameters:{layout:`padded`}},C={assets:[`matrix-asset://ntg/4001`,`matrix-asset://ntg/4003`,`matrix-asset://ntg/4002`,`matrix-asset://ntg/4004`]},w=await x.markup(C,b),T={render:e=>x(e,b),args:C,argTypes:{assets:{control:`object`,description:`Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/4001 through /4004.`},download:{control:`boolean`}},parameters:{docs:{description:{story:`Multiple selected documents -- one card per asset, in the order selected.`},source:{code:w,language:`html`,type:`code`}}}},E={assets:[`matrix-asset://ntg/4001`]},D=await x.markup(E,b),O={render:()=>x(E,b),parameters:{docs:{description:{story:`One selected document, with a description (read from the asset's own attributes -- see document.spec.md assumption 3).`},source:{code:D,language:`html`,type:`code`}}}},k={assets:[`matrix-asset://ntg/4002`]},A=await x.markup(k,b),j={render:()=>x(k,b),parameters:{docs:{description:{story:`The selected asset has no description attribute set -- the description paragraph is not rendered at all.`},source:{code:A,language:`html`,type:`code`}}}},M={assets:[`matrix-asset://ntg/4003`]},N=await x.markup(M,b),P={render:()=>x(M,b),parameters:{docs:{source:{code:N,language:`html`,type:`code`}}}},F={assets:[`matrix-asset://ntg/4002`]},I=await x.markup(F,b),L={render:()=>x(F,b),parameters:{docs:{source:{code:I,language:`html`,type:`code`}}}},R={assets:[`matrix-asset://ntg/4004`]},z=await x.markup(R,b),B={render:()=>x(R,b),parameters:{docs:{source:{code:z,language:`html`,type:`code`}}}},V={assets:[`matrix-asset://ntg/9999999`]},H=await x.markup(V,b),U={render:()=>x(V,b),parameters:{docs:{description:{story:`An asset that fails to resolve contributes nothing, rendering an empty list rather than throwing.`},source:{code:H,language:`html`,type:`code`}}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Single`,`WithoutDescription`,`PDF`,`XLSX`,`PPTX`,`Unresolvable`]}))();export{T as Default,P as PDF,B as PPTX,O as Single,U as Unresolvable,j as WithoutDescription,L as XLSX,W as __namedExportsOrder,S as default};
//# sourceMappingURL=document.stories-DVOVfD2r.js.map