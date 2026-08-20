import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as ee}from"./component.helper-Bbhtouok.js";import{n as te,t as n}from"./squizStoryRenderer-4zIdV6yt.js";function r(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var ne,re,i,a=e((()=>{t(),ne=new Set([`primary`,`secondary`]),re=new Set([`default`,`hover`,`focus`,`populated`]),i={async main(e={}){let{label:t=`Search`,placeholder:te=`Search`,value:n=``,variant:i=`primary`,state:a=`default`,showClear:o=!0,searchIconLabel:s=`Search`}=e,c=ne.has(i)?i:`primary`,l=n?`populated`:`default`,u=re.has(a)?a:l,d=n&&a===`default`?`populated`:u,f=!!(o&&n&&d===`populated`),p=`search-field--${c} search-field--${d}`;return`
<div ${ee(`search-field`,e)} class="${p}" data-variant="${c}" data-state="${d}">
  <label class="search-field__label">${r(t)}</label>
  <div class="search-field__control" role="group" aria-label="${r(t)}">
    <input
      class="search-field__input"
      type="search"
      name="q"
      value="${r(n)}"
      placeholder="${r(te)}"
      autocomplete="off"
    />
    ${f?`<button class="search-field__clear" type="button" aria-label="Clear search text">&#10005;</button>`:``}
    <button class="search-field__search" type="button" aria-label="${r(s)}">
      <span class="search-field__search-icon" aria-hidden="true">&#128269;</span>
      <span class="search-field__sr-only">${r(s)}</span>
    </button>
  </div>
</div>
`}}})),o,s,c,l,u,d=e((()=>{o=`Primary`,s=`Search`,c=`primary`,l=`default`,u={label:o,placeholder:s,variant:c,state:l}})),f,p,m,ie,h,ae=e((()=>{f=`Primary`,p=`Search`,m=`primary`,ie=`hover`,h={label:f,placeholder:p,variant:m,state:ie}})),g,_,v,oe,y,se=e((()=>{g=`Primary`,_=`Search`,v=`primary`,oe=`focus`,y={label:g,placeholder:_,variant:v,state:oe}})),ce,le,ue,b,x,S,de=e((()=>{ce=`Primary`,le=`Text`,ue=`Search`,b=`primary`,x=`populated`,S={label:ce,value:le,placeholder:ue,variant:b,state:x,showClear:!0}})),C,w,T,E,D,fe=e((()=>{C=`Secondary`,w=`Search`,T=`secondary`,E=`default`,D={label:C,placeholder:w,variant:T,state:E}})),O,k,A,j,M,pe=e((()=>{O=`Secondary`,k=`Search`,A=`secondary`,j=`hover`,M={label:O,placeholder:k,variant:A,state:j}})),N,P,F,I,L,me=e((()=>{N=`Secondary`,P=`Search`,F=`secondary`,I=`focus`,L={label:N,placeholder:P,variant:F,state:I}})),R,z,he,B,V,H,ge=e((()=>{R=`Secondary`,z=`Text`,he=`Search`,B=`secondary`,V=`populated`,H={label:R,value:z,placeholder:he,variant:B,state:V,showClear:!0}})),U,W,_e,G,ve,K,ye,q,be,J,xe,Y,X,Z,Se,Q,Ce,$,we;await e((async()=>{n(),a(),d(),ae(),se(),de(),fe(),pe(),me(),ge(),U=te(i.main),W={title:`Z dev tests/Search Field`},_e=await U.markup(u),G={render:e=>U(e),args:u,argTypes:{label:{control:`text`},placeholder:{control:`text`},value:{control:`text`},variant:{control:`select`,options:[`primary`,`secondary`]},state:{control:`select`,options:[`default`,`hover`,`focus`,`populated`]},showClear:{control:`boolean`},searchIconLabel:{control:`text`}},parameters:{docs:{source:{code:_e,language:`html`,type:`code`}}}},ve=await U.markup(h),K={render:()=>U(h),parameters:{docs:{source:{code:ve,language:`html`,type:`code`}}}},ye=await U.markup(y),q={render:()=>U(y),parameters:{docs:{source:{code:ye,language:`html`,type:`code`}}}},be=await U.markup(S),J={render:()=>U(S),parameters:{docs:{source:{code:be,language:`html`,type:`code`}}}},xe=await U.markup(D),Y={render:()=>U(D),parameters:{docs:{source:{code:xe,language:`html`,type:`code`}}}},X=await U.markup(M),Z={render:()=>U(M),parameters:{docs:{source:{code:X,language:`html`,type:`code`}}}},Se=await U.markup(L),Q={render:()=>U(L),parameters:{docs:{source:{code:Se,language:`html`,type:`code`}}}},Ce=await U.markup(H),$={render:()=>U(H),parameters:{docs:{source:{code:Ce,language:`html`,type:`code`}}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},we=[`PrimaryDefault`,`PrimaryHover`,`PrimaryFocus`,`PrimaryPopulated`,`SecondaryDefault`,`SecondaryHover`,`SecondaryFocus`,`SecondaryPopulated`]}))();export{G as PrimaryDefault,q as PrimaryFocus,K as PrimaryHover,J as PrimaryPopulated,Y as SecondaryDefault,Q as SecondaryFocus,Z as SecondaryHover,$ as SecondaryPopulated,we as __namedExportsOrder,W as default};
//# sourceMappingURL=search-field.stories-DfD0EHgP.js.map