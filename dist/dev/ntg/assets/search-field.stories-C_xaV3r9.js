import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";function r(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var i,a,o,s=e((()=>{i=new Set([`primary`,`secondary`]),a=new Set([`default`,`hover`,`focus`,`populated`]),o={async main(e={}){let{label:t=`Search`,placeholder:n=`Search`,value:o=``,variant:s=`primary`,state:c=`default`,showClear:l=!0,searchIconLabel:u=`Search`}=e,d=i.has(s)?s:`primary`,f=o?`populated`:`default`,p=a.has(c)?c:f,m=o&&c===`default`?`populated`:p,h=!!(l&&o&&m===`populated`);return`
<div class="${`search-field search-field--${d} search-field--${m}`}" data-variant="${d}" data-state="${m}">
  <label class="search-field__label">${r(t)}</label>
  <div class="search-field__control" role="group" aria-label="${r(t)}">
    <input
      class="search-field__input"
      type="search"
      name="q"
      value="${r(o)}"
      placeholder="${r(n)}"
      autocomplete="off"
    />
    ${h?`<button class="search-field__clear" type="button" aria-label="Clear search text">&#10005;</button>`:``}
    <button class="search-field__search" type="button" aria-label="${r(u)}">
      <span class="search-field__search-icon" aria-hidden="true">&#128269;</span>
      <span class="search-field__sr-only">${r(u)}</span>
    </button>
  </div>
</div>
`}}})),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;await e((async()=>{n(),s(),c=t(o.main),l={title:`dxp/Search Field`},u={label:`Primary`,placeholder:`Search`,value:``,variant:`primary`,state:`default`,showClear:!0,searchIconLabel:`Search`},d=await c.markup(u),f={render:e=>c(e),args:u,argTypes:{label:{control:`text`},placeholder:{control:`text`},value:{control:`text`},variant:{control:`select`,options:[`primary`,`secondary`]},state:{control:`select`,options:[`default`,`hover`,`focus`,`populated`]},showClear:{control:`boolean`},searchIconLabel:{control:`text`}},parameters:{docs:{source:{code:d,language:`html`,type:`code`}}}},p={label:`Primary`,placeholder:`Search`,variant:`primary`,state:`hover`},m=await c.markup(p),h={render:()=>c(p),parameters:{docs:{source:{code:m,language:`html`,type:`code`}}}},g={label:`Primary`,placeholder:`Search`,variant:`primary`,state:`focus`},_=await c.markup(g),v={render:()=>c(g),parameters:{docs:{source:{code:_,language:`html`,type:`code`}}}},y={label:`Primary`,value:`Text`,placeholder:`Search`,variant:`primary`,state:`populated`,showClear:!0},b=await c.markup(y),x={render:()=>c(y),parameters:{docs:{source:{code:b,language:`html`,type:`code`}}}},S={label:`Secondary`,placeholder:`Search`,variant:`secondary`,state:`default`},C=await c.markup(S),w={render:()=>c(S),parameters:{docs:{source:{code:C,language:`html`,type:`code`}}}},T={label:`Secondary`,placeholder:`Search`,variant:`secondary`,state:`hover`},E=await c.markup(T),D={render:()=>c(T),parameters:{docs:{source:{code:E,language:`html`,type:`code`}}}},O={label:`Secondary`,placeholder:`Search`,variant:`secondary`,state:`focus`},k=await c.markup(O),A={render:()=>c(O),parameters:{docs:{source:{code:k,language:`html`,type:`code`}}}},j={label:`Secondary`,value:`Text`,placeholder:`Search`,variant:`secondary`,state:`populated`,showClear:!0},M=await c.markup(j),N={render:()=>c(j),parameters:{docs:{source:{code:M,language:`html`,type:`code`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: primaryDefaultArgs,
  argTypes: {
    label: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'populated']
    },
    showClear: {
      control: 'boolean'
    },
    searchIconLabel: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      source: {
        code: primaryDefaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryHoverArgs),
  parameters: {
    docs: {
      source: {
        code: primaryHoverHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryFocusArgs),
  parameters: {
    docs: {
      source: {
        code: primaryFocusHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryPopulatedArgs),
  parameters: {
    docs: {
      source: {
        code: primaryPopulatedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryDefaultArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryDefaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryHoverArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryHoverHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryFocusArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryFocusHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryPopulatedArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryPopulatedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: primaryDefaultArgs,
  argTypes: {
    label: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'populated']
    },
    showClear: {
      control: 'boolean'
    },
    searchIconLabel: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      source: {
        code: primaryDefaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryHoverArgs),
  parameters: {
    docs: {
      source: {
        code: primaryHoverHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryFocusArgs),
  parameters: {
    docs: {
      source: {
        code: primaryFocusHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryPopulatedArgs),
  parameters: {
    docs: {
      source: {
        code: primaryPopulatedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryDefaultArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryDefaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryHoverArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryHoverHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryFocusArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryFocusHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryPopulatedArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryPopulatedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P=[`PrimaryDefault`,`PrimaryHover`,`PrimaryFocus`,`PrimaryPopulated`,`SecondaryDefault`,`SecondaryHover`,`SecondaryFocus`,`SecondaryPopulated`]}))();export{f as PrimaryDefault,v as PrimaryFocus,h as PrimaryHover,x as PrimaryPopulated,w as SecondaryDefault,A as SecondaryFocus,D as SecondaryHover,N as SecondaryPopulated,P as __namedExportsOrder,l as default};
//# sourceMappingURL=search-field.stories-C_xaV3r9.js.map