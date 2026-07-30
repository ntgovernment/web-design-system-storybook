import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{a as r,n as i,r as a,t as o}from"./squizStoryRenderer-mGPdhelI.js";function s(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function c(e){return l[String(e??``).toLowerCase()]||u}var l,u,d,f=e((()=>{l={pdf:`fa-file-pdf`,doc:`fa-file-word`,docx:`fa-file-word`,ppt:`fa-file-powerpoint`,pptx:`fa-file-powerpoint`,xls:`fa-file-excel`,xlsx:`fa-file-excel`},u=`fa-file`,d={async main(e){let{title:t=``,href:n=`#`,fileType:r=``,fileSize:i=``,description:a=``,ariaLabel:o=``,metadata:l=``,target:u=``,rel:d=``,download:f=!1}=e||{},p=l||[r.toUpperCase(),i].filter(Boolean).join(` | `),m=[o?` aria-label="${s(o)}"`:``,u?` target="${s(u)}"`:``,d?` rel="${s(d)}"`:``,f?` download`:``].join(``),h=a?`<p class="document__description" data-sq-field="description">${s(a)}</p>`:``;return`
<div class="document">
  <div class="document__header">
    <div class="document__icon-wrapper">
      <div class="document__icon">
        <i class="fa-thin ${c(r)}" aria-hidden="true"></i>
      </div>
    </div>
    <div class="document__meta">
      <a href="${s(n)}" class="document__title" data-sq-field="title"${m}>${s(t)}</a>
      <span class="document__info" data-sq-field="metadata">${s(p)}</span>
    </div>
  </div>
  ${h}
</div>
`}}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;await e((async()=>{t(),a(),o(),f(),p=i(d.main),m={title:`dxp/Document`,parameters:{layout:`padded`}},h={title:`This is the document title`,href:`#`,fileType:`docx`,fileSize:`182 KB`,description:`Optional description of the document.`},g=await p.markup(h),_={render:e=>p(e),args:h,argTypes:{title:{control:`text`},href:{control:`text`},fileType:{control:`select`,options:[`pdf`,`doc`,`docx`,`ppt`,`pptx`,`xls`,`xlsx`]},fileSize:{control:`text`},description:{control:`text`,description:`Leave blank to omit the description entirely.`},ariaLabel:{control:`text`},metadata:{control:`text`,description:`Overrides the auto-generated "TYPE | SIZE" line when set.`},target:{control:`text`},rel:{control:`text`},download:{control:`boolean`}},parameters:{docs:{source:{code:g,language:`html`,type:`code`}}}},v={title:`This is the document title`,href:`#`,fileType:`xlsx`,fileSize:`2.4 MB`},y=await p.markup(v),b={render:()=>p(v),parameters:{docs:{description:{story:"`description` is omitted -- the description paragraph is not rendered at all."},source:{code:y,language:`html`,type:`code`}}}},x={title:`This is the document title`,href:`#`,fileType:`pdf`,fileSize:`182 KB`,description:`Optional description of the document.`},S=await p.markup(x),C={render:()=>p(x),parameters:{docs:{source:{code:S,language:`html`,type:`code`}}}},w={title:`This is the document title`,href:`#`,fileType:`xlsx`,fileSize:`182 KB`,description:`Optional description of the document.`},T=await p.markup(w),E={render:()=>p(w),parameters:{docs:{source:{code:T,language:`html`,type:`code`}}}},D={title:`This is the document title`,href:`#`,fileType:`pptx`,fileSize:`182 KB`,description:`Optional description of the document.`},O=await p.markup(D),k={render:()=>p(D),parameters:{docs:{source:{code:O,language:`html`,type:`code`}}}},A=(await Promise.all([{fileType:`docx`,fileSize:`182 KB`},{fileType:`pdf`,fileSize:`946 KB`},{fileType:`xlsx`,fileSize:`1.1 MB`},{fileType:`pptx`,fileSize:`4.8 MB`}].map(e=>d.main({title:`This is the document title`,href:`#`,description:`Optional description of the document.`,...e})))).join(`
`),j=`<div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--sp-xl) var(--sp-2xl);align-items:start">${A}</div>`,M={render:()=>n`${r(j)}`,parameters:{docs:{description:{story:`Every supported file type, laid out 3 cards per row.`},source:{code:A,language:`html`,type:`code`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithoutDescription`,`PDF`,`XLSX`,`PPTX`,`AllFileTypes`]}))();export{M as AllFileTypes,_ as Default,C as PDF,k as PPTX,b as WithoutDescription,E as XLSX,N as __namedExportsOrder,m as default};
//# sourceMappingURL=document.stories-BniAo4nc.js.map