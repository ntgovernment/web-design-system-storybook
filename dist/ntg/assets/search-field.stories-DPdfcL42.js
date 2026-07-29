import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./search-field-D2llRDOn.js";import{n,t as r}from"./squizStoryRenderer-mGPdhelI.js";function i(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var a,o,s,c=e((()=>{a=new Set([`primary`,`secondary`]),o=new Set([`default`,`hover`,`focus`,`populated`]),s={async main(e={}){let{label:t=`Search`,placeholder:n=`Search`,value:r=``,variant:s=`primary`,state:c=`default`,showClear:l=!0,searchIconLabel:u=`Search`}=e,d=a.has(s)?s:`primary`,f=r?`populated`:`default`,p=o.has(c)?c:f,m=r&&c===`default`?`populated`:p,h=!!(l&&r&&m===`populated`);return`
<div class="${`search-field search-field--${d} search-field--${m}`}" data-variant="${d}" data-state="${m}">
  <label class="search-field__label">${i(t)}</label>
  <div class="search-field__control" role="group" aria-label="${i(t)}">
    <input
      class="search-field__input"
      type="search"
      name="q"
      value="${i(r)}"
      placeholder="${i(n)}"
      autocomplete="off"
    />
    ${h?`<button class="search-field__clear" type="button" aria-label="Clear search text">&#10005;</button>`:``}
    <button class="search-field__search" type="button" aria-label="${i(u)}">
      <span class="search-field__search-icon" aria-hidden="true">&#128269;</span>
      <span class="search-field__sr-only">${i(u)}</span>
    </button>
  </div>
</div>
`}}})),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;await e((async()=>{r(),t(),c(),l=n(s.main),u={title:`dxp/Search Field`},d={label:`Primary`,placeholder:`Search`,value:``,variant:`primary`,state:`default`,showClear:!0,searchIconLabel:`Search`},f=await l.markup(d),p={render:e=>l(e),args:d,argTypes:{label:{control:`text`},placeholder:{control:`text`},value:{control:`text`},variant:{control:`select`,options:[`primary`,`secondary`]},state:{control:`select`,options:[`default`,`hover`,`focus`,`populated`]},showClear:{control:`boolean`},searchIconLabel:{control:`text`}},parameters:{docs:{source:{code:f,language:`html`,type:`code`}}}},m={label:`Primary`,placeholder:`Search`,variant:`primary`,state:`hover`},h=await l.markup(m),g={render:()=>l(m),parameters:{docs:{source:{code:h,language:`html`,type:`code`}}}},_={label:`Primary`,placeholder:`Search`,variant:`primary`,state:`focus`},v=await l.markup(_),y={render:()=>l(_),parameters:{docs:{source:{code:v,language:`html`,type:`code`}}}},b={label:`Primary`,value:`Text`,placeholder:`Search`,variant:`primary`,state:`populated`,showClear:!0},x=await l.markup(b),S={render:()=>l(b),parameters:{docs:{source:{code:x,language:`html`,type:`code`}}}},C={label:`Secondary`,placeholder:`Search`,variant:`secondary`,state:`default`},w=await l.markup(C),T={render:()=>l(C),parameters:{docs:{source:{code:w,language:`html`,type:`code`}}}},E={label:`Secondary`,placeholder:`Search`,variant:`secondary`,state:`hover`},D=await l.markup(E),O={render:()=>l(E),parameters:{docs:{source:{code:D,language:`html`,type:`code`}}}},k={label:`Secondary`,placeholder:`Search`,variant:`secondary`,state:`focus`},A=await l.markup(k),j={render:()=>l(k),parameters:{docs:{source:{code:A,language:`html`,type:`code`}}}},M={label:`Secondary`,value:`Text`,placeholder:`Search`,variant:`secondary`,state:`populated`,showClear:!0},N=await l.markup(M),P={render:()=>l(M),parameters:{docs:{source:{code:N,language:`html`,type:`code`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F=[`PrimaryDefault`,`PrimaryHover`,`PrimaryFocus`,`PrimaryPopulated`,`SecondaryDefault`,`SecondaryHover`,`SecondaryFocus`,`SecondaryPopulated`]}))();export{p as PrimaryDefault,y as PrimaryFocus,g as PrimaryHover,S as PrimaryPopulated,T as SecondaryDefault,j as SecondaryFocus,O as SecondaryHover,P as SecondaryPopulated,F as __namedExportsOrder,u as default};