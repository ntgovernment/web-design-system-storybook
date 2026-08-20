import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-Bbhtouok.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-x2sHGyES.js";function u(e){let t=d(e),n={label:`Home`,href:t?`${t.origin}/`:`/`},r=t?t.pathname.split(`/`).filter(Boolean):[];if(r.length===0)return[{...n,current:!0}];let i=r.slice(-2),a=r.length-i.length;return[n,...i.map((e,n)=>{let o=r.slice(0,a+n+1);return{label:f(e),href:`${t.origin}/${o.join(`/`)}`,current:n===i.length-1}})]}function d(e){try{if(e instanceof URL)return e;if(typeof e==`string`&&e)return new URL(e)}catch{}return null}function f(e){let t;try{t=decodeURIComponent(e)}catch{t=e}let n=t.replace(/^-+|-+$/g,``).split(/[-_]+/).filter(Boolean);if(n.length===0)return e;let r=n.join(` `).toLowerCase();return r.charAt(0).toUpperCase()+r.slice(1)}function p(e,t){return`
<nav ${t} class="breadcrumb" aria-label="Breadcrumb">
  <ol class="breadcrumb__list">
    ${e.map((e,t)=>`<li class="breadcrumb__item">${t>0?`<span class="breadcrumb__separator" aria-hidden="true">${m}</span>`:``}${e.current?`<span class="breadcrumb__current" aria-current="page">${s(e.label)}</span>`:`<a class="breadcrumb__link" href="${a(e.href)}">${s(e.label)}</a>`}</li>`).join(``)}
  </ol>
</nav>
`}var m,h,g=e((()=>{o(),t(),m=`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true" focusable="false"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,h={async main(e={},t={}){return p(u(t?.ctx?.url),n(`breadcrumb`,e))}}}));function _(e){return c({ctx:{url:e}})}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;await e((async()=>{i(),l(),g(),v=r(h.main),y={title:`dxp components/Breadcrumb`},b=`https://example.com/example-section/example-page`,x=_(b),S=await v.markup({},x),C={render:()=>v({},x),parameters:{docs:{description:{story:`A page two levels deep (${b}) -- the full 3-level trail: Home > Example section > Example page.`},source:{code:S,language:`html`,type:`code`}}}},w=`https://example.com/example-page`,T=_(w),E=await v.markup({},T),D={render:()=>v({},T),parameters:{docs:{description:{story:`A page directly under Home (${w}) -- 2 levels, not padded to 3: Home > Example page.`},source:{code:E,language:`html`,type:`code`}}}},O=_(`https://example.com/`),k=await v.markup({},O),A={render:()=>v({},O),parameters:{docs:{description:{story:`The homepage itself (0 URL segments) -- just "Home", rendered as the current, non-linked item.`},source:{code:k,language:`html`,type:`code`}}}},j=`https://example.com/level-one/level-two/level-three/example-section/example-page`,M=_(j),N=await v.markup({},M),P={render:()=>v({},M),parameters:{docs:{description:{story:`A page 5 levels deep (${j}) -- only the 2 segments closest to the current page show; everything nearer Home is dropped silently, no ellipsis: Home > Example section > Example page.`},source:{code:N,language:`html`,type:`code`}}}},F=`https://example.com/example-section/-example-page`,I=_(F),L=await v.markup({},I),R={render:()=>v({},I),parameters:{docs:{description:{story:`A slug with a leading hyphen (${F}) -- humanizeSlug() strips it: Home > Example section > Example page.`},source:{code:L,language:`html`,type:`code`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, defaultInfo),
  parameters: {
    docs: {
      description: {
        story: \`A page two levels deep (\${defaultUrl}) -- the full 3-level trail: Home > Example section > Example page.\`
      },
      source: {
        code: defaultHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...C.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, shallowInfo),
  parameters: {
    docs: {
      description: {
        story: \`A page directly under Home (\${shallowUrl}) -- 2 levels, not padded to 3: Home > Example page.\`
      },
      source: {
        code: shallowHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, homepageInfo),
  parameters: {
    docs: {
      description: {
        story: "The homepage itself (0 URL segments) -- just \\"Home\\", rendered as the current, non-linked item."
      },
      source: {
        code: homepageHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...A.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, deepInfo),
  parameters: {
    docs: {
      description: {
        story: \`A page 5 levels deep (\${deepUrl}) -- only the 2 segments closest to the current page show; everything nearer Home is dropped silently, no ellipsis: Home > Example section > Example page.\`
      },
      source: {
        code: deepHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...P.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, hyphenInfo),
  parameters: {
    docs: {
      description: {
        story: \`A slug with a leading hyphen (\${hyphenUrl}) -- humanizeSlug() strips it: Home > Example section > Example page.\`
      },
      source: {
        code: hyphenHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...R.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, defaultInfo),
  parameters: {
    docs: {
      description: {
        story: \`A page two levels deep (\${defaultUrl}) -- the full 3-level trail: Home > Example section > Example page.\`
      },
      source: {
        code: defaultHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...C.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, shallowInfo),
  parameters: {
    docs: {
      description: {
        story: \`A page directly under Home (\${shallowUrl}) -- 2 levels, not padded to 3: Home > Example page.\`
      },
      source: {
        code: shallowHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, homepageInfo),
  parameters: {
    docs: {
      description: {
        story: "The homepage itself (0 URL segments) -- just \\"Home\\", rendered as the current, non-linked item."
      },
      source: {
        code: homepageHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...A.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, deepInfo),
  parameters: {
    docs: {
      description: {
        story: \`A page 5 levels deep (\${deepUrl}) -- only the 2 segments closest to the current page show; everything nearer Home is dropped silently, no ellipsis: Home > Example section > Example page.\`
      },
      source: {
        code: deepHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...P.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, hyphenInfo),
  parameters: {
    docs: {
      description: {
        story: \`A slug with a leading hyphen (\${hyphenUrl}) -- humanizeSlug() strips it: Home > Example section > Example page.\`
      },
      source: {
        code: hyphenHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z=[`Default`,`Shallow`,`Homepage`,`DeepPath`,`LeadingHyphenSlug`]}))();export{P as DeepPath,C as Default,A as Homepage,R as LeadingHyphenSlug,D as Shallow,z as __namedExportsOrder,y as default};
//# sourceMappingURL=breadcrumb.stories-hEcBRxbG.js.map