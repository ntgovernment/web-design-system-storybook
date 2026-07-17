import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./card-DyJSO4at.js";import{n,t as r}from"./squizStoryRenderer-DSARXh3x.js";function i(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function a(e){if(!e||typeof e!=`object`)return null;let t=e.imageVariations?.original||{};return t.url?{url:t.url,alt:e.alt||e.name||``,width:t.width||null,height:t.height||null}:null}function o(e){return e?typeof e==`string`?e===`#`?null:{url:e}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}var s,c,l,u=e((()=>{s=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,c=[`News`,`Event`,`Alert`,`Update`],l={async main(e={}){let{image:t=null,tagLabel:n=`News`,date:r=``,title:l=`Card title`,description:u=``,actionText:d=`Find out more`,href:f=null}=e,p=a(t),m=o(f),h=c.includes(n)?n:`News`,g=`card-title-${Math.random().toString(36).slice(2,9)}`,_=p?`
    <div class="card__image">
      <img src="${i(p.url)}" alt="${i(p.alt)}"${p.width?` width="${p.width}"`:``}${p.height?` height="${p.height}"`:``} />
    </div>`:``,v=n||r?`
      <div class="card__header">
        ${n?`<span class="card__tag card__tag--${h.toLowerCase()}">${i(h)}</span>`:``}
        ${r?`<span class="card__date">${i(r)}</span>`:``}
      </div>`:``,y=u?`<p class="card__description">${i(u)}</p>`:``,b=d?`
      <div class="card__footer">
        <span class="card__action">${i(d)} <span class="card__action-icon">${s}</span></span>
      </div>`:``,x=`${_}
    <div class="card__content">${v}
      <div class="card__body">
        <h3 class="card__title" id="${g}">${i(l)}</h3>
        ${y}
      </div>${b}
    </div>`;return m?`<a class="card" href="${i(m.url)}"${m.target===`_self`?``:` target="${i(m.target)}" rel="noopener noreferrer"`} aria-labelledby="${g}">${x}</a>`:`<article class="card">${x}</article>`}}})),d,f,p,m,h,g,_,v,y,b,x,S;await e((async()=>{r(),t(),u(),d=n(l.main),f={title:`dxp/Card`},p={image:{name:`card-wave-illustration`,alt:`Decorative wavy illustration`,imageVariations:{original:{url:`https://picsum.photos/id/1015/640/480`,width:640,height:480}}},tagLabel:`News`,date:`17 Feb 2025`,title:`Card title`,description:`Join in and honour the resilience of survivors and the lives lost.`,actionText:`Find out more`,href:`https://example.com/news/card-title`},m=await l.main(p),h={render:e=>d(e),args:p,argTypes:{tagLabel:{control:`select`,options:[`News`,`Event`,`Alert`,`Update`]},title:{control:`text`},description:{control:`text`},actionText:{control:`text`},href:{control:`text`}},parameters:{docs:{description:{story:`Full-featured card -- image, tag + date, title, description, and action. Hover and tab-focus this rendered example to see the hover/focus states (both pure CSS on the outer link, no separate input).`},source:{code:m,language:`html`,type:`code`}}}},g={...p,href:``},_=await l.main(g),v={render:()=>d(g),parameters:{docs:{description:{story:`When href is empty, the card renders as a non-interactive <article> instead of a link -- no hover/focus styling.`},source:{code:_,language:`html`,type:`code`}}}},y={title:`Card title`,href:``},b=await l.main(y),x={render:()=>d(y),parameters:{docs:{description:{story:`Every field but Title is optional -- image, tag/date, description, and action each independently hide when empty.`},source:{code:b,language:`html`,type:`code`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: fullArgs,
  argTypes: {
    tagLabel: {
      control: 'select',
      options: ['News', 'Event', 'Alert', 'Update']
    },
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    actionText: {
      control: 'text'
    },
    href: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured card -- image, tag + date, title, description, and action. Hover and tab-focus this rendered example to see the hover/focus states (both pure CSS on the outer link, no separate input).'
      },
      source: {
        code: fullHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => squiz(noLinkArgs),
  parameters: {
    docs: {
      description: {
        story: 'When href is empty, the card renders as a non-interactive <article> instead of a link -- no hover/focus styling.'
      },
      source: {
        code: noLinkHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz(titleOnlyArgs),
  parameters: {
    docs: {
      description: {
        story: 'Every field but Title is optional -- image, tag/date, description, and action each independently hide when empty.'
      },
      source: {
        code: titleOnlyHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: fullArgs,
  argTypes: {
    tagLabel: {
      control: 'select',
      options: ['News', 'Event', 'Alert', 'Update']
    },
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    actionText: {
      control: 'text'
    },
    href: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured card -- image, tag + date, title, description, and action. Hover and tab-focus this rendered example to see the hover/focus states (both pure CSS on the outer link, no separate input).'
      },
      source: {
        code: fullHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => squiz(noLinkArgs),
  parameters: {
    docs: {
      description: {
        story: 'When href is empty, the card renders as a non-interactive <article> instead of a link -- no hover/focus styling.'
      },
      source: {
        code: noLinkHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz(titleOnlyArgs),
  parameters: {
    docs: {
      description: {
        story: 'Every field but Title is optional -- image, tag/date, description, and action each independently hide when empty.'
      },
      source: {
        code: titleOnlyHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`NoLink`,`TitleOnly`]}))();export{h as Default,v as NoLink,x as TitleOnly,S as __namedExportsOrder,f as default};