import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";function r(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var i,ee,a,o=e((()=>{i=new Set([`primary`,`secondary`]),ee=new Set([`default`,`hover`,`focus`,`populated`]),a={async main(e={}){let{label:t=`Search`,placeholder:n=`Search`,value:a=``,variant:o=`primary`,state:s=`default`,showClear:c=!0,searchIconLabel:l=`Search`}=e,u=i.has(o)?o:`primary`,d=a?`populated`:`default`,te=ee.has(s)?s:d,f=a&&s===`default`?`populated`:te,p=!!(c&&a&&f===`populated`);return`
<div class="${`search-field search-field--${u} search-field--${f}`}" data-variant="${u}" data-state="${f}">
  <label class="search-field__label">${r(t)}</label>
  <div class="search-field__control" role="group" aria-label="${r(t)}">
    <input
      class="search-field__input"
      type="search"
      name="q"
      value="${r(a)}"
      placeholder="${r(n)}"
      autocomplete="off"
    />
    ${p?`<button class="search-field__clear" type="button" aria-label="Clear search text">&#10005;</button>`:``}
    <button class="search-field__search" type="button" aria-label="${r(l)}">
      <span class="search-field__search-icon" aria-hidden="true">&#128269;</span>
      <span class="search-field__sr-only">${r(l)}</span>
    </button>
  </div>
</div>
`}}})),s,c,l,u,d,te=e((()=>{s=`Primary`,c=`Search`,l=`primary`,u=`default`,d={label:s,placeholder:c,variant:l,state:u}})),f,p,ne,re,m,ie=e((()=>{f=`Primary`,p=`Search`,ne=`primary`,re=`hover`,m={label:f,placeholder:p,variant:ne,state:re}})),h,g,_,v,y,ae=e((()=>{h=`Primary`,g=`Search`,_=`primary`,v=`focus`,y={label:h,placeholder:g,variant:_,state:v}})),oe,se,ce,b,x,S,le=e((()=>{oe=`Primary`,se=`Text`,ce=`Search`,b=`primary`,x=`populated`,S={label:oe,value:se,placeholder:ce,variant:b,state:x,showClear:!0}})),C,w,T,E,D,ue=e((()=>{C=`Secondary`,w=`Search`,T=`secondary`,E=`default`,D={label:C,placeholder:w,variant:T,state:E}})),O,k,A,j,M,de=e((()=>{O=`Secondary`,k=`Search`,A=`secondary`,j=`hover`,M={label:O,placeholder:k,variant:A,state:j}})),N,P,F,I,L,fe=e((()=>{N=`Secondary`,P=`Search`,F=`secondary`,I=`focus`,L={label:N,placeholder:P,variant:F,state:I}})),R,z,pe,B,V,H,me=e((()=>{R=`Secondary`,z=`Text`,pe=`Search`,B=`secondary`,V=`populated`,H={label:R,value:z,placeholder:pe,variant:B,state:V,showClear:!0}})),U,W,G,K,he,q,ge,J,_e,Y,ve,X,ye,Z,be,Q,xe,$,Se;await e((async()=>{n(),o(),te(),ie(),ae(),le(),ue(),de(),fe(),me(),U=t(a.main),W={title:`dxp/Search Field`},G=await U.markup(d),K={render:e=>U(e),args:d,argTypes:{label:{control:`text`},placeholder:{control:`text`},value:{control:`text`},variant:{control:`select`,options:[`primary`,`secondary`]},state:{control:`select`,options:[`default`,`hover`,`focus`,`populated`]},showClear:{control:`boolean`},searchIconLabel:{control:`text`}},parameters:{docs:{source:{code:G,language:`html`,type:`code`}}}},he=await U.markup(m),q={render:()=>U(m),parameters:{docs:{source:{code:he,language:`html`,type:`code`}}}},ge=await U.markup(y),J={render:()=>U(y),parameters:{docs:{source:{code:ge,language:`html`,type:`code`}}}},_e=await U.markup(S),Y={render:()=>U(S),parameters:{docs:{source:{code:_e,language:`html`,type:`code`}}}},ve=await U.markup(D),X={render:()=>U(D),parameters:{docs:{source:{code:ve,language:`html`,type:`code`}}}},ye=await U.markup(M),Z={render:()=>U(M),parameters:{docs:{source:{code:ye,language:`html`,type:`code`}}}},be=await U.markup(L),Q={render:()=>U(L),parameters:{docs:{source:{code:be,language:`html`,type:`code`}}}},xe=await U.markup(H),$={render:()=>U(H),parameters:{docs:{source:{code:xe,language:`html`,type:`code`}}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Se=[`PrimaryDefault`,`PrimaryHover`,`PrimaryFocus`,`PrimaryPopulated`,`SecondaryDefault`,`SecondaryHover`,`SecondaryFocus`,`SecondaryPopulated`]}))();export{K as PrimaryDefault,J as PrimaryFocus,q as PrimaryHover,Y as PrimaryPopulated,X as SecondaryDefault,Q as SecondaryFocus,Z as SecondaryHover,$ as SecondaryPopulated,Se as __namedExportsOrder,W as default};
//# sourceMappingURL=search-field.stories-CDjR2xh9.js.map