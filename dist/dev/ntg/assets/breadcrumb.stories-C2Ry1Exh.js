import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-Bbhtouok.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-x2sHGyES.js";function u(e){let t=d(e),n={label:`Home`,href:t?`${t.origin}/`:`/`},r=t?t.pathname.split(`/`).filter(Boolean).filter(e=>!h.test(e)):[];if(r.length===0)return[{...n,current:!0}];let i=r.slice(-2),a=r.length-i.length;return[n,...i.map((e,n)=>{let o=r.slice(0,a+n+1);return{label:f(e),href:`${t.origin}/${o.join(`/`)}`,current:n===i.length-1}})]}function d(e){try{if(e instanceof URL)return e;if(typeof e==`string`&&e)return new URL(e)}catch{}return null}function f(e){let t;try{t=decodeURIComponent(e)}catch{t=e}let n=t.replace(/^-+|-+$/g,``).split(/[-_]+/).filter(Boolean);if(n.length===0)return e;let r=n.join(` `).toLowerCase();return r.charAt(0).toUpperCase()+r.slice(1)}function p(e,t){return`
<nav ${t} class="breadcrumb" aria-label="Breadcrumb">
  <ol class="breadcrumb__list">
    ${e.map((e,t)=>`<li class="breadcrumb__item">${t>0?`<span class="breadcrumb__separator" aria-hidden="true">${m}</span>`:``}${e.current?`<span class="breadcrumb__current" aria-current="page">${s(e.label)}</span>`:`<a class="breadcrumb__link" href="${a(e.href)}">${s(e.label)}</a>`}</li>`).join(``)}
  </ol>
</nav>
`}var m,h,g,_=e((()=>{o(),t(),m=`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true" focusable="false"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,h=/^_?(no|re)cache(=.*)?$/i,g={async main(e={},t={}){return p(u(t?.ctx?.url),n(`breadcrumb`,e))}}}));function v(e){return c({ctx:{url:e}})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;await e((async()=>{i(),l(),_(),y=r(g.main),b={title:`dxp components/Breadcrumb`},x=`https://example.com/example-section/example-page`,S=v(x),C=await y.markup({},S),w={render:()=>y({},S),parameters:{docs:{description:{story:`A page two levels deep (${x}) -- the full 3-level trail: Home > Example section > Example page.`},source:{code:C,language:`html`,type:`code`}}}},T=`https://example.com/example-page`,E=v(T),D=await y.markup({},E),O={render:()=>y({},E),parameters:{docs:{description:{story:`A page directly under Home (${T}) -- 2 levels, not padded to 3: Home > Example page.`},source:{code:D,language:`html`,type:`code`}}}},k=v(`https://example.com/`),A=await y.markup({},k),j={render:()=>y({},k),parameters:{docs:{description:{story:`The homepage itself (0 URL segments) -- just "Home", rendered as the current, non-linked item.`},source:{code:A,language:`html`,type:`code`}}}},M=`https://example.com/level-one/level-two/level-three/example-section/example-page`,N=v(M),P=await y.markup({},N),F={render:()=>y({},N),parameters:{docs:{description:{story:`A page 5 levels deep (${M}) -- only the 2 segments closest to the current page show; everything nearer Home is dropped silently, no ellipsis: Home > Example section > Example page.`},source:{code:P,language:`html`,type:`code`}}}},I=`https://example.com/example-section/-example-page`,L=v(I),R=await y.markup({},L),z={render:()=>y({},L),parameters:{docs:{description:{story:`A slug with a leading hyphen (${I}) -- humanizeSlug() strips it: Home > Example section > Example page.`},source:{code:R,language:`html`,type:`code`}}}},B=`https://example.com/example-section/example-page/_nocache`,V=v(B),H=await y.markup({},V),U={render:()=>y({},V),parameters:{docs:{description:{story:`A URL with a trailing Squiz cache-buster token (${B}) -- filtered out entirely, never rendered as a crumb: Home > Example section > Example page.`},source:{code:H,language:`html`,type:`code`}}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Shallow`,`Homepage`,`DeepPath`,`LeadingHyphenSlug`,`CacheBusterToken`]}))();export{U as CacheBusterToken,F as DeepPath,w as Default,j as Homepage,z as LeadingHyphenSlug,O as Shallow,W as __namedExportsOrder,b as default};
//# sourceMappingURL=breadcrumb.stories-C2Ry1Exh.js.map