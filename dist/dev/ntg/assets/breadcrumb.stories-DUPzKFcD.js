import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,r as n,t as r}from"./component.helper-COp5GpYY.js";import{n as i,t as a}from"./squizStoryRenderer-4zIdV6yt.js";import{n as o,r as s,t as c}from"./xss-Cvy76lHc.js";import{n as l,t as u}from"./squizInfo.mock-x2sHGyES.js";function d(e){let t=f(e),n={label:`Home`,href:t?`${t.origin}/`:`/`},r=t?t.pathname.split(`/`).filter(Boolean).filter(e=>!g.test(e)):[];if(r.length===0)return[{...n,current:!0}];let i=r.slice(-2),a=r.length-i.length;return[n,...i.map((e,n)=>{let o=r.slice(0,a+n+1);return{label:p(e),href:`${t.origin}/${o.join(`/`)}`,current:n===i.length-1}})]}function f(e){try{if(e instanceof URL)return e;if(typeof e==`string`&&e)return new URL(e)}catch{}return null}function p(e){let t;try{t=decodeURIComponent(e)}catch{t=e}let n=t.replace(/^-+|-+$/g,``).split(/[-_]+/).filter(Boolean);if(n.length===0)return e;let r=n.join(` `).toLowerCase();return r.charAt(0).toUpperCase()+r.slice(1)}function m(e,t){return`
<nav ${t} aria-label="Breadcrumb">
  <ol class="breadcrumb__list">
    ${e.map((e,t)=>`<li class="breadcrumb__item">${t>0?`<span class="breadcrumb__separator" aria-hidden="true">${h}</span>`:``}${e.current?`<span class="breadcrumb__current" aria-current="page">${c(e.label)}</span>`:`<a class="breadcrumb__link" href="${o(e.href)}">${c(e.label)}</a>`}</li>`).join(``)}
  </ol>
</nav>
`}var h,g,_,v=e((()=>{s(),t(),h=`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true" focusable="false"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,g=/^_?(no|re)cache(=.*)?$/i,_={async main(e={},t={}){return m(d(t?.ctx?.url),r(`breadcrumb`,n(e,[`fullwidth background`])))}}}));function y(e={},t=``){return{...e,componentCustomisation:{modifiers:t.split(`, `).map(e=>e.trim())}}}var b,x,S=e((()=>{b=[`background: alt`,`background: inherit`,`background: transparent`,`fullwidth background`,`spacious`],x={control:`text`,name:`componentCustomisation.modifiers (array)`,description:`For storybook use comma seperated string of any of these: `+b.join(`, `)}}));function C(e){return l({ctx:{url:e}})}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;await e((async()=>{a(),u(),v(),S(),w=i(_.main),T={title:`dxp components/Breadcrumb`},E=`https://example.com/example-section/example-page`,D=C(E),O={customModifiers:``},k=await w.markup(O,D),A={render:e=>w(y(e,e.customModifiers),D),args:O,argTypes:{customModifiers:x},parameters:{controls:{exclude:[`componentCustomisation`]},docs:{description:{story:`A page two levels deep (${E}) -- the full 3-level trail: Home > Example section > Example page.`},source:{code:k,language:`html`,type:`code`}}}},j=`https://example.com/example-page`,M=C(j),N=await w.markup({},M),P={render:()=>w({},M),parameters:{docs:{description:{story:`A page directly under Home (${j}) -- 2 levels, not padded to 3: Home > Example page.`},source:{code:N,language:`html`,type:`code`}}}},F=C(`https://example.com/`),I=await w.markup({},F),L={render:()=>w({},F),parameters:{docs:{description:{story:`The homepage itself (0 URL segments) -- just "Home", rendered as the current, non-linked item.`},source:{code:I,language:`html`,type:`code`}}}},R=`https://example.com/level-one/level-two/level-three/example-section/example-page`,z=C(R),B=await w.markup({},z),V={render:()=>w({},z),parameters:{docs:{description:{story:`A page 5 levels deep (${R}) -- only the 2 segments closest to the current page show; everything nearer Home is dropped silently, no ellipsis: Home > Example section > Example page.`},source:{code:B,language:`html`,type:`code`}}}},H=`https://example.com/example-section/-example-page`,U=C(H),W=await w.markup({},U),G={render:()=>w({},U),parameters:{docs:{description:{story:`A slug with a leading hyphen (${H}) -- humanizeSlug() strips it: Home > Example section > Example page.`},source:{code:W,language:`html`,type:`code`}}}},K=`https://example.com/example-section/example-page/_nocache`,q=C(K),J=await w.markup({},q),Y={render:()=>w({},q),parameters:{docs:{description:{story:`A URL with a trailing Squiz cache-buster token (${K}) -- filtered out entirely, never rendered as a crumb: Home > Example section > Example page.`},source:{code:J,language:`html`,type:`code`}}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => squiz(addCustomisationObject(args, args.customModifiers), defaultInfo),
  args: defaultArgs,
  argTypes: {
    customModifiers: componentCustomisationModifiersType
  },
  parameters: {
    controls: {
      exclude: ['componentCustomisation']
    },
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
}`,...A.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, cacheBusterInfo),
  parameters: {
    docs: {
      description: {
        story: \`A URL with a trailing Squiz cache-buster token (\${cacheBusterUrl}) -- filtered out entirely, never rendered as a crumb: Home > Example section > Example page.\`
      },
      source: {
        code: cacheBusterHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => squiz(addCustomisationObject(args, args.customModifiers), defaultInfo),
  args: defaultArgs,
  argTypes: {
    customModifiers: componentCustomisationModifiersType
  },
  parameters: {
    controls: {
      exclude: ['componentCustomisation']
    },
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
}`,...A.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => squiz({}, cacheBusterInfo),
  parameters: {
    docs: {
      description: {
        story: \`A URL with a trailing Squiz cache-buster token (\${cacheBusterUrl}) -- filtered out entirely, never rendered as a crumb: Home > Example section > Example page.\`
      },
      source: {
        code: cacheBusterHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`Shallow`,`Homepage`,`DeepPath`,`LeadingHyphenSlug`,`CacheBusterToken`]}))();export{Y as CacheBusterToken,V as DeepPath,A as Default,L as Homepage,G as LeadingHyphenSlug,P as Shallow,X as __namedExportsOrder,T as default};
//# sourceMappingURL=breadcrumb.stories-DUPzKFcD.js.map