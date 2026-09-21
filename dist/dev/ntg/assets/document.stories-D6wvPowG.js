import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-D4VTpLG1.js";async function u(e,t,n){let r=await d(t,n);return[...new Set([...Array.isArray(e)?e:[],...r])]}async function d(e,t){let{domain:n,id:r}=f(e);if(!n||!r||!t)return[];let i=`${t}?${b}=${encodeURIComponent(r)}`,a;try{let e=await fetch(i);if(!e.ok)return[];a=await e.json()}catch{return[]}return Array.isArray(a)?a.map(e=>e?.id).filter(Boolean).map(e=>`matrix-asset://${n}/${e}`):[]}function f(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/(\d+)(?::.+)?$/.exec(String(e??``));return{domain:t?.[1]??null,id:t?.[2]??null}}async function p(e,t){if(!e)return null;try{let n=await t?.resolveUri?.(e);return n&&`data`in n?n.data:n??null}catch{return null}}function m(e,t){if(!e)return``;let n=e.name||``,r=e.url||``,i=g(r),o=e.attributes?.file_size_readable||``,c=_(e.metadata,`page-description`),l=[i.toUpperCase(),o].filter(Boolean).join(` | `),u=c?`<p class="document__description">${s(c)}</p>`:``;return`
<div class="document">
  <div class="document__header">
    <div class="document__icon-wrapper">
      <div class="document__icon">
        <i class="fa-thin ${h(i)}" aria-hidden="true"></i>
      </div>
    </div>
    <div class="document__meta">
      <a href="${a(r)}" class="document__title"${t?` download`:``}>${s(n)}</a>
      <span class="document__info">${s(l)}</span>
    </div>
  </div>
  ${u}
</div>`}function h(e){return v[String(e??``).toLowerCase()]||y}function g(e){let t=/\.([a-z0-9]+)(?:[?#].*)?$/i.exec(String(e??``));return t?t[1].toLowerCase():``}function _(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}var v,y,b,x,S=e((()=>{o(),t(),v={pdf:`fa-file-pdf`,doc:`fa-file-word`,docx:`fa-file-word`,ppt:`fa-file-powerpoint`,pptx:`fa-file-powerpoint`,xls:`fa-file-excel`,xlsx:`fa-file-excel`},y=`fa-file`,b=`rootId`,x={async main(e,t){let{assets:r=[],parentAsset:i=``,download:a=!1}=e||{},o=await u(r,i,t?.env?.CONTENT_API_URL),s=(await Promise.all(o.map(e=>p(e,t?.fns)))).map(e=>m(e,a)).filter(Boolean).join(`
`);return`
<div ${n(`document-list`,e)}>
  ${s}
</div>
`}}}));function C({id:e,name:t,url:n,fileSizeReadable:r,description:i}){let a={id:String(e),type:`file`,name:t,url:n,attributes:{file_size_readable:r},metadata:i?{"page-description":[i]}:{}};return w[String(e)]=a,a}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;await e((async()=>{i(),l(),S(),w={},C({id:4001,name:`Annual Report 2025`,url:`https://example.com/files/annual-report-2025.docx`,fileSizeReadable:`182 KB`,description:`The full annual report, covering performance, budget, and community outcomes for the year.`}),C({id:4002,name:`Budget Summary`,url:`https://example.com/files/budget-summary.xlsx`,fileSizeReadable:`2.4 MB`}),C({id:4003,name:`Community Consultation Guidelines`,url:`https://example.com/files/consultation-guidelines.pdf`,fileSizeReadable:`946 KB`,description:`Guidelines for participating in the community consultation process.`}),C({id:4004,name:`Stakeholder Presentation`,url:`https://example.com/files/stakeholder-presentation.pptx`,fileSizeReadable:`4.8 MB`}),T=c({mock:{resolveUri(e){return{ok:!0,data:w[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),E=r(x.main),D={title:`dxp components/Document`,parameters:{layout:`padded`}},O={assets:[`matrix-asset://ntg/4001`,`matrix-asset://ntg/4003`,`matrix-asset://ntg/4002`,`matrix-asset://ntg/4004`]},k=c({mock:{resolveUri(e){return w[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}),A=await E.markup(O,T),j={render:e=>E(e,T),args:O,argTypes:{assets:{control:`object`,description:`Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/4001 through /4004.`},download:{control:`boolean`}},parameters:{docs:{description:{story:`Multiple selected documents -- one card per asset, in the order selected.`},source:{code:A,language:`html`,type:`code`}}}},M={assets:[`matrix-asset://ntg/4001`]},N=await E.markup(M,T),P={render:()=>E(M,T),parameters:{docs:{description:{story:`One selected document, with a description (read from the asset's own attributes -- see document.spec.md assumption 3).`},source:{code:N,language:`html`,type:`code`}}}},F={assets:[`matrix-asset://ntg/4002`]},I=await E.markup(F,T),L={render:()=>E(F,T),parameters:{docs:{description:{story:`The selected asset has no description attribute set -- the description paragraph is not rendered at all.`},source:{code:I,language:`html`,type:`code`}}}},R={assets:[`matrix-asset://ntg/4003`]},z=await E.markup(R,k),B={render:()=>E(R,k),parameters:{docs:{source:{code:z,language:`html`,type:`code`}}}},V={assets:[`matrix-asset://ntg/4002`]},H=await E.markup(V,T),U={render:()=>E(V,T),parameters:{docs:{source:{code:H,language:`html`,type:`code`}}}},W={assets:[`matrix-asset://ntg/4004`]},G=await E.markup(W,T),K={render:()=>E(W,T),parameters:{docs:{source:{code:G,language:`html`,type:`code`}}}},q={assets:[`matrix-asset://ntg/9999999`]},J=await E.markup(q,T),Y={render:()=>E(q,T),parameters:{docs:{description:{story:`An asset that fails to resolve contributes nothing, rendering an empty list rather than throwing.`},source:{code:J,language:`html`,type:`code`}}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
  render: () => squiz(pdfArgs, mockInfoBare),
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
  render: () => squiz(pdfArgs, mockInfoBare),
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
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`Single`,`WithoutDescription`,`PDF`,`XLSX`,`PPTX`,`Unresolvable`]}))();export{j as Default,B as PDF,K as PPTX,P as Single,Y as Unresolvable,L as WithoutDescription,U as XLSX,X as __namedExportsOrder,D as default};
//# sourceMappingURL=document.stories-D6wvPowG.js.map