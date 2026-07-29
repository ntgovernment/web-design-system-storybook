import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{t as r}from"./document-D5y-uLcq.js";import{a as i,n as a,r as o,t as s}from"./squizStoryRenderer-mGPdhelI.js";function c(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function l(e){return u[String(e??``).toLowerCase()]||d}var u,d,f,p=e((()=>{u={pdf:`fa-file-pdf`,doc:`fa-file-word`,docx:`fa-file-word`,ppt:`fa-file-powerpoint`,pptx:`fa-file-powerpoint`,xls:`fa-file-excel`,xlsx:`fa-file-excel`},d=`fa-file`,f={async main(e){let{title:t=``,href:n=`#`,fileType:r=``,fileSize:i=``,description:a=``,ariaLabel:o=``,metadata:s=``,target:u=``,rel:d=``,download:f=!1}=e||{},p=s||[r.toUpperCase(),i].filter(Boolean).join(` | `),m=[o?` aria-label="${c(o)}"`:``,u?` target="${c(u)}"`:``,d?` rel="${c(d)}"`:``,f?` download`:``].join(``),h=a?`<p class="document__description">${c(a)}</p>`:``;return`
<div class="document">
  <div class="document__header">
    <div class="document__icon-wrapper">
      <div class="document__icon">
        <i class="fa-thin ${l(r)}" aria-hidden="true"></i>
      </div>
    </div>
    <div class="document__meta">
      <a href="${c(n)}" class="document__title"${m}>${c(t)}</a>
      <span class="document__info">${c(p)}</span>
    </div>
  </div>
  ${h}
</div>
`}}})),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;await e((async()=>{t(),o(),s(),r(),p(),m=a(f.main),h={title:`dxp/Document`,parameters:{layout:`padded`}},g={title:`This is the document title`,href:`#`,fileType:`docx`,fileSize:`182 KB`,description:`Optional description of the document.`},_=await m.markup(g),v={render:e=>m(e),args:g,argTypes:{title:{control:`text`},href:{control:`text`},fileType:{control:`select`,options:[`pdf`,`doc`,`docx`,`ppt`,`pptx`,`xls`,`xlsx`]},fileSize:{control:`text`},description:{control:`text`,description:`Leave blank to omit the description entirely.`},ariaLabel:{control:`text`},metadata:{control:`text`,description:`Overrides the auto-generated "TYPE | SIZE" line when set.`},target:{control:`text`},rel:{control:`text`},download:{control:`boolean`}},parameters:{docs:{source:{code:_,language:`html`,type:`code`}}}},y={title:`This is the document title`,href:`#`,fileType:`xlsx`,fileSize:`2.4 MB`},b=await m.markup(y),x={render:()=>m(y),parameters:{docs:{description:{story:"`description` is omitted -- the description paragraph is not rendered at all."},source:{code:b,language:`html`,type:`code`}}}},S={title:`This is the document title`,href:`#`,fileType:`pdf`,fileSize:`182 KB`,description:`Optional description of the document.`},C=await m.markup(S),w={render:()=>m(S),parameters:{docs:{source:{code:C,language:`html`,type:`code`}}}},T={title:`This is the document title`,href:`#`,fileType:`xlsx`,fileSize:`182 KB`,description:`Optional description of the document.`},E=await m.markup(T),D={render:()=>m(T),parameters:{docs:{source:{code:E,language:`html`,type:`code`}}}},O={title:`This is the document title`,href:`#`,fileType:`pptx`,fileSize:`182 KB`,description:`Optional description of the document.`},k=await m.markup(O),A={render:()=>m(O),parameters:{docs:{source:{code:k,language:`html`,type:`code`}}}},j=(await Promise.all([{fileType:`docx`,fileSize:`182 KB`},{fileType:`pdf`,fileSize:`946 KB`},{fileType:`xlsx`,fileSize:`1.1 MB`},{fileType:`pptx`,fileSize:`4.8 MB`}].map(e=>f.main({title:`This is the document title`,href:`#`,description:`Optional description of the document.`,...e})))).join(`
`),M=`<div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--sp-xl) var(--sp-2xl);align-items:start">${j}</div>`,N={render:()=>n`${i(M)}`,parameters:{docs:{description:{story:`Every supported file type, laid out 3 cards per row.`},source:{code:j,language:`html`,type:`code`}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: defaultArgs,
  argTypes: {
    title: {
      control: 'text'
    },
    href: {
      control: 'text'
    },
    fileType: {
      control: 'select',
      options: ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx']
    },
    fileSize: {
      control: 'text'
    },
    description: {
      control: 'text',
      description: 'Leave blank to omit the description entirely.'
    },
    ariaLabel: {
      control: 'text'
    },
    metadata: {
      control: 'text',
      description: 'Overrides the auto-generated "TYPE | SIZE" line when set.'
    },
    target: {
      control: 'text'
    },
    rel: {
      control: 'text'
    },
    download: {
      control: 'boolean'
    }
  },
  parameters: {
    docs: {
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withoutDescriptionArgs),
  parameters: {
    docs: {
      description: {
        story: '\`description\` is omitted -- the description paragraph is not rendered at all.'
      },
      source: {
        code: withoutDescriptionHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => squiz(pdfArgs),
  parameters: {
    docs: {
      source: {
        code: pdfHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => squiz(xlsxArgs),
  parameters: {
    docs: {
      source: {
        code: xlsxHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => squiz(pptxArgs),
  parameters: {
    docs: {
      source: {
        code: pptxHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  // Multiple document cards, 3 per row -- main() only ever renders one card, so this bypasses the
  // shared squiz() helper (built for a single main() call) and renders the
  // already-precomputed, joined result directly via lit's unsafeHTML.
  render: () => html\`\${unsafeHTML(allFileTypesWrapped)}\`,
  parameters: {
    docs: {
      description: {
        story: 'Every supported file type, laid out 3 cards per row.'
      },
      source: {
        code: allFileTypesHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: defaultArgs,
  argTypes: {
    title: {
      control: 'text'
    },
    href: {
      control: 'text'
    },
    fileType: {
      control: 'select',
      options: ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx']
    },
    fileSize: {
      control: 'text'
    },
    description: {
      control: 'text',
      description: 'Leave blank to omit the description entirely.'
    },
    ariaLabel: {
      control: 'text'
    },
    metadata: {
      control: 'text',
      description: 'Overrides the auto-generated "TYPE | SIZE" line when set.'
    },
    target: {
      control: 'text'
    },
    rel: {
      control: 'text'
    },
    download: {
      control: 'boolean'
    }
  },
  parameters: {
    docs: {
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withoutDescriptionArgs),
  parameters: {
    docs: {
      description: {
        story: '\`description\` is omitted -- the description paragraph is not rendered at all.'
      },
      source: {
        code: withoutDescriptionHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => squiz(pdfArgs),
  parameters: {
    docs: {
      source: {
        code: pdfHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => squiz(xlsxArgs),
  parameters: {
    docs: {
      source: {
        code: xlsxHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => squiz(pptxArgs),
  parameters: {
    docs: {
      source: {
        code: pptxHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  // Multiple document cards, 3 per row -- main() only ever renders one card, so this bypasses the
  // shared squiz() helper (built for a single main() call) and renders the
  // already-precomputed, joined result directly via lit's unsafeHTML.
  render: () => html\`\${unsafeHTML(allFileTypesWrapped)}\`,
  parameters: {
    docs: {
      description: {
        story: 'Every supported file type, laid out 3 cards per row.'
      },
      source: {
        code: allFileTypesHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`WithoutDescription`,`PDF`,`XLSX`,`PPTX`,`AllFileTypes`]}))();export{N as AllFileTypes,v as Default,w as PDF,A as PPTX,x as WithoutDescription,D as XLSX,P as __namedExportsOrder,h as default};