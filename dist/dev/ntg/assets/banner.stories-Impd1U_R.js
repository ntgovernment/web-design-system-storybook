import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,r as n,t as r}from"./component.helper-D0vBjeOt.js";import{n as i,t as a}from"./squizStoryRenderer-4zIdV6yt.js";function o(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function s(e){return e?typeof e==`string`?{url:e,text:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,text:e.text||e.url,target:e.target||`_self`}:null:null}function c(e){return e&&e!==`_self`?` target="${o(e)}" rel="noopener noreferrer"`:``}function ee(e){return e===`primary`?`button`:`button button-${e}`}function te(e){if(!e||e.length===0)return``;let t=e.findIndex(e=>e.isCurrent),n=t>=0?t:e.length-1;return`
    <div class="banner__breadcrumbs">
      <nav aria-label="Breadcrumb" class="content-breadcrumbs">
        <ol class="breadcrumb content-breadcrumbs__list">
${e.map((e,t)=>{let r=t===n;return`        <li class="${`breadcrumb-item${r?` active`:``}`}"${r?` aria-current="page"`:``}>${r?`<span class="content-breadcrumbs__current" data-sq-field="label">${o(e.label)}</span>`:`<a class="content-breadcrumbs__link" href="${o(e.href??`#`)}" data-sq-field="label">${o(e.label)}</a>`}</li>`}).join(`
`)}
        </ol>
      </nav>
    </div>`}function ne(e,t){if(!e)return``;let n=t?` <a href="${o(t.url)}" class="banner__description-link" data-sq-field="descriptionLink"${c(t.target)}>${o(t.text)}</a>`:``;return`<p class="banner__description" data-sq-field="description">${o(e)}${n}</p>`}function l(e,t,n=`cta`){if(!e)return``;let r=ee(t);return`
          <div class="banner__cta">
            ${`<a href="${o(e.url)}" class="${r}" data-sq-field="${n}"${c(e.target)}>${o(e.text)}</a>`}
          </div>`}function re(){return`
      <div class="banner__decorative" aria-hidden="true">
        ${p}
      </div>`}function ie(e,t,n){if(!e||!t||t.length===0||!f.has(e))return``;let r;return n?(r=t.map(e=>`            <a href="${o(e.url)}" class="banner__link" data-sq-field="link"${c(e.target)}>${o(e.text)}</a>`).join(`
`),r=`
          <div class="banner__links-vertical">
${r}
          </div>`):(r=t.map(e=>`            <a href="${o(e.url)}" class="banner__pill-link" data-sq-field="link"${c(e.target)}>${o(e.text)}</a>`).join(`
`),r=`
          <div class="banner__links-list">
${r}
          </div>`),`

        <div class="banner__links">
          <h2 class="banner__links-heading">${o(e)}</h2>${r}
        </div>`}function ae(e){let t=(e||[]).filter(Boolean);return t.length===0?``:`

        <div class="banner__links${t.length>1?` banner__links--cta-stack`:``}">${t.join(``)}
        </div>`}var u,d,f,p,m,h=e((()=>{t(),u=new Set([`primary`,`secondary`]),d=new Set([`primary`,`secondary`,`tertiary`]),f=new Set([`Popular`,`Featured`,`Related`]),p=`<svg class="banner__decorative-logo" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 284.757 287.367">
      <g id="logo-ntg-mono" opacity="0.5">
        <path id="Path_3" data-name="Path 3" d="M120.044,1.847C107.731,3.694,95.727,23.393,100.96,38.168c7.08,20.315,22.162,54.174,43.093,54.789,21.238-.616,36.013-34.166,43.093-54.789,5.233-14.775-7.079-33.551-19.084-36.321-11.389-2.462-32.012-2.462-48.017,0M18.776,74.181c-6.156,11.081,1.231,32.935,15.7,37.86,20.007,7.079,55.4,16.006,68.948-.308C116.35,94.5,99.729,61.561,88.648,43.093c-8-13.236-30.165-15.39-39.707-7.387C39.4,43.4,26.779,59.714,18.776,74.181m-8,126.2c4.617,11.7,25.856,19.392,38.783,11.081,17.853-11.7,46.786-34.166,42.477-55.4C86.8,135.126,51.4,127.739,30.165,124.969,15.082,123.122,0,139.435,0,152.055c0,12.312,4.617,32.935,10.773,48.325m91.418,84.954c12,3.694,31.088-8.618,32.627-24.317,2.155-21.546,3.078-58.791-15.7-68.64-19.392-8.926-47.094,14.775-62.176,30.165-10.773,11.081-8,33.551,1.847,41.246,9.234,7.7,28.01,16.621,43.4,21.546m121.89-20.007c10.158-7.08,12.62-30.165,1.847-41.246-15.082-15.39-43.093-39.091-62.176-30.165-18.776,9.85-17.853,46.786-15.7,68.64,1.539,15.7,20.623,27.395,32.627,24.317,11.7-3.078,30.165-12.312,43.4-21.546m60.637-110.194c.923-12.62-15.082-28.934-30.473-27.087-21.239,2.462-56.636,10.158-61.869,31.088-4.309,21.238,24.624,43.708,42.477,55.4,12.928,8.311,33.551.616,38.783-10.773,5.54-11.7,10.158-32.012,11.081-48.633M238.548,37.86c-9.234-8.619-31.7-5.848-39.707,7.387-11.081,18.468-27.7,51.4-14.775,68.64,13.543,16.621,48.633,7.387,68.948.308,14.467-4.925,21.238-26.471,16.006-37.86-5.848-10.773-18.468-27.395-30.473-38.476" transform="translate(0 0)" fill="#ababab"></path>
        <path id="Path_4" data-name="Path 4" d="M128.792,27.062c-1.539,9.234-13.543,32.935-4,45.247,10.158,13.236,34.782,5.54,44.324,6.464l-1.231.308c-8,4.617-33.551,9.85-36.937,24.932-3.694,16.314,17.545,31.4,22.778,39.4l-1.231-.616c-8.311-3.694-28.626-20.931-42.169-14.159C95.55,136.025,97.4,161.881,94.318,171.115v-1.231c-2.462-8.926-1.847-35.705-15.39-42.477-15.082-7.387-33.858,10.158-42.785,13.543l.923-.923c5.233-7.7,26.163-23.7,22.778-38.783C56.151,84.93,30.911,80.928,22.6,76l1.231.308c9.234-.308,34.474,6.156,44.016-6.156C78,56.919,65.385,34.142,64.154,24.6l.616,1.231c6.156,7.079,16.929,31.4,32.012,31.4,16.314,0,25.856-24.317,32.319-31.4l-.308,1.231Z" transform="translate(46.964 51.12)" fill="#ababab"></path>
      </g>
    </svg>`,m={async main(e){let{variant:t=`primary`,title:i=``,description:a=``,descriptionLink:c,cta:ee,ctaVariant:p,secondaryCta:m,secondaryCtaVariant:h,linksHeading:g=``,links:_=[],breadcrumbs:v=[],label:y=``,href:b=``,visibilityOptions:x={}}=e||{},{showCta:S,showDecorative:C}=x||{},w=s(c),T=s(ee),E=s(m),D=r(`banner`,n(e,[`fullwidth background`])),O=u.has(t)?t:`primary`,k=O===`secondary`,A=`secondary`,j=p&&d.has(p)?p:A,M=h&&d.has(h)?h:A,N=C===void 0?!0:!!C,P=S===void 0?!0:!!S,F=[];Array.isArray(v)&&v.length>0?F=v:y&&b&&(F=[{label:y,href:b},{label:`Current page`,isCurrent:!0}]);let I=`banner--${O}`,L=(Array.isArray(_)?_:[]).map(e=>s(e)).filter(Boolean),R=!!g&&f.has(g)&&L.length>0,z=P?l(T,j):``,B=P?l(E,M,`secondaryCta`):``,V=R?ie(g,L,k):ae([z,B]);return`
<div ${D} class="${I}" data-variant="${O}">
  ${N?re():``}
      <div class="banner__container">
        ${te(F)}
        <div class="banner__content">
          <div class="banner__main">
            <h1 class="banner__title" data-sq-field="title">${o(i)}</h1>
            ${ne(a,w)}
            ${R?z:``}
          </div>
          ${V}
        </div>
      </div>
</div>
`}}})),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,oe,Y,X,se,Z,Q,ce,$,le;await e((async()=>{a(),h(),g=i(m.main),_={title:`dxp components/Banner`,parameters:{layout:`fullscreen`}},v={variant:`primary`,title:`Page title`,description:`Optional short description of the page goal`,cta:{text:`Call to action`,url:`#`},linksHeading:`Popular`,links:[{text:`Bus timetables and maps`,url:`#`},{text:`Check your rego`,url:`#`},{text:`Find a Motor Vehicle Registry (MVR)`,url:`#`},{text:`Government priorities`,url:`#`}]},y=await g.markup(v),b={render:e=>g(e),args:v,argTypes:{variant:{control:`select`,options:[`primary`,`secondary`]},title:{control:`text`},description:{control:`text`},descriptionLink:{control:`object`,description:`SquizLink -- Asset Tree pick or a manual URL. Optional inline link appended to the description text; blank/unset omits it.`},cta:{control:`object`,description:`SquizLink -- Asset Tree pick or a manual URL. Blank/unset hides the button.`},ctaVariant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},secondaryCta:{control:`object`,description:`SquizLink -- second CTA button, stacked below the first. Only shown when there's no links panel.`},secondaryCtaVariant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},linksHeading:{control:`select`,options:[`Popular`,`Featured`,`Related`]},links:{control:`object`,description:`Array of SquizLink items -- each is an Asset Tree pick or a manual URL.`},breadcrumbs:{control:`object`},label:{control:`text`,description:`Breadcrumb parent label shortcut (e.g. "Home").`},href:{control:`text`,description:`Breadcrumb parent URL shortcut.`},visibilityOptions:{control:`object`}},parameters:{docs:{source:{code:y,language:`html`,type:`code`}}}},x={variant:`secondary`,title:`Page title`,description:`Optional short description of the page goal`,cta:{text:`Call to action`,url:`#`},linksHeading:`Popular`,links:[{text:`Bus timetables and maps`,url:`#`},{text:`Check your rego`,url:`#`},{text:`Find a Motor Vehicle Registry (MVR)`,url:`#`},{text:`Government priorities`,url:`#`}],label:`Home`,href:`/`},S=await g.markup(x),C={render:()=>g(x),parameters:{docs:{source:{code:S,language:`html`,type:`code`}}}},w={variant:`primary`,title:`Northern Territory Government Services and Information Portal`,description:`Access comprehensive information about Northern Territory Government services, programs, and initiatives. Whether you're a resident, business owner, or visitor, find everything you need to interact with government services online.`,cta:{text:`Get started with services`,url:`#`},ctaVariant:`secondary`,linksHeading:`Popular`,links:[{text:`Driver's license renewal and applications`,url:`#`},{text:`Business registration and licensing`,url:`#`},{text:`Property and land information services`,url:`#`},{text:`Health and community programs`,url:`#`},{text:`Education and training resources`,url:`#`}],breadcrumbs:[{label:`Home`,href:`/`},{label:`About`,href:`/about`},{label:`Services portal`,isCurrent:!0}],visibilityOptions:{showDecorative:!0}},T=await g.markup(w),E={render:()=>g(w),parameters:{docs:{source:{code:T,language:`html`,type:`code`}}}},D={variant:`primary`,title:`Health and Wellbeing`,description:`Access health services, find medical facilities, and learn about public health programs in the Northern Territory.`,cta:{text:`Find health services`,url:`#`},linksHeading:`Featured`,links:[{text:`COVID-19 information`,url:`#`},{text:`Mental health support`,url:`#`},{text:`Hospital locations`,url:`#`},{text:`Medicare services`,url:`#`}],label:`Home`,href:`/`},O=await g.markup(D),k={render:()=>g(D),parameters:{docs:{source:{code:O,language:`html`,type:`code`}}}},A={variant:`primary`,title:`Business and Industry`,description:`Start a business, apply for licenses and permits, and access business support services.`,cta:{text:`Register your business`,url:`#`},linksHeading:`Related`,links:[{text:`Business grants`,url:`#`},{text:`Trade licenses`,url:`#`},{text:`Industry regulations`,url:`#`},{text:`Export assistance`,url:`#`}],label:`Home`,href:`/`},j=await g.markup(A),M={render:()=>g(A),parameters:{docs:{source:{code:j,language:`html`,type:`code`}}}},N={variant:`secondary`,title:`Transport Services`,description:`Access public transport information, vehicle registration, and licensing services.`,cta:{text:`View all transport services`,url:`#`},linksHeading:`Featured`,links:[{text:`Renew your driver's license`,url:`#`},{text:`Register a vehicle`,url:`#`},{text:`Road safety information`,url:`#`},{text:`Public transport timetables`,url:`#`},{text:`Apply for driving permit`,url:`#`}],breadcrumbs:[{label:`Home`,href:`/`},{label:`Services`,href:`/services`},{label:`Transport`,isCurrent:!0}]},P=await g.markup(N),F={render:()=>g(N),parameters:{docs:{source:{code:P,language:`html`,type:`code`}}}},I={variant:`primary`,title:`Clean Banner Design`,description:`This banner demonstrates the component without decorative background elements.`,cta:{text:`Learn more`,url:`#`},visibilityOptions:{showDecorative:!1},linksHeading:`Popular`,links:[{text:`Service 1`,url:`#`},{text:`Service 2`,url:`#`},{text:`Service 3`,url:`#`}]},L=await g.markup(I),R={render:()=>g(I),parameters:{docs:{source:{code:L,language:`html`,type:`code`}}}},z={variant:`primary`,title:`Banner Without a Call to Action`,description:`This banner demonstrates the component with the call to action button hidden.`,cta:{text:`Learn more`,url:`#`},visibilityOptions:{showCta:!1},linksHeading:`Popular`,links:[{text:`Service 1`,url:`#`},{text:`Service 2`,url:`#`},{text:`Service 3`,url:`#`}]},B=await g.markup(z),V={render:()=>g(z),parameters:{docs:{source:{code:B,language:`html`,type:`code`}}}},H={variant:`secondary`,title:`Community Consultation Opens for Major Project`,description:`Residents are invited to provide feedback on proposed infrastructure improvements in the greater Darwin area.`,descriptionLink:{text:`Read the full announcement`,url:`#`},cta:{text:`Have your say`,url:`#`},linksHeading:`Popular`,links:[{text:`Bus timetables and maps`,url:`#`},{text:`Check your rego`,url:`#`}],label:`Home`,href:`/`},U=await g.markup(H),W={render:()=>g(H),parameters:{docs:{source:{code:U,language:`html`,type:`code`}}}},G={variant:`secondary`,title:`Page title`,description:`Optional short description of the page goal`,visibilityOptions:{showDecorative:!1}},K=await g.markup(G),q={render:()=>g(G),parameters:{docs:{source:{code:K,language:`html`,type:`code`}}}},J={variant:`secondary`,title:`Publication title`,description:`Optional short description of the publication or resource, summarising what it covers and who it's for.`,cta:{text:`Download the report (PDF)`,url:`#`},breadcrumbs:[{label:`Home`,href:`/`},{label:`Publications`,href:`/publications`},{label:`Current page`,isCurrent:!0}],visibilityOptions:{showDecorative:!1}},oe=await g.markup(J),Y={name:`With CTA`,render:()=>g(J),parameters:{docs:{source:{code:oe,language:`html`,type:`code`}}}},X={variant:`secondary`,title:`Digital Futures Strategy 2026-2028`,description:`Technology plays a key role in many aspects of our lives, and increasing the use of modern technology will empower Territorians and grow our economy. The NT Government can simplify touchpoints and reduce burden for business and the community.`,cta:{text:`Download the strategy (PDF)`,url:`#`},ctaVariant:`primary`,secondaryCta:{text:`Download the summary (PDF)`,url:`#`},secondaryCtaVariant:`secondary`,visibilityOptions:{showDecorative:!1}},se=await g.markup(X),Z={name:`Two CTA Buttons`,render:()=>g(X),parameters:{docs:{description:{story:"`secondaryCta`/`secondaryCtaVariant` add a second CTA button, stacked below the first and stretched to full width -- each CTA has its own independently-selected style (primary/secondary/tertiary). Only appears when there's no links panel."},source:{code:se,language:`html`,type:`code`}}}},Q={variant:`primary`,title:`Manually-Typed Links`,description:`The CTA and every panel link below are manually-typed URLs (no assetId), not Asset Tree picks.`,cta:{text:`Manual CTA link`,url:`https://example.com/manual-cta-url`},linksHeading:`Popular`,links:[{text:`Manual link one`,url:`https://example.com/manual-link-one`},{text:`Manual link two`,url:`https://example.com/manual-link-two`}]},ce=await g.markup(Q),$={render:()=>g(Q),parameters:{docs:{description:{story:"`cta` and each `links[]` entry set as a { text, url } object with no `assetId` -- SquizLink's manual-entry path, as opposed to an Asset Tree pick."},source:{code:ce,language:`html`,type:`code`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: primaryArgs,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    descriptionLink: {
      control: 'object',
      description: 'SquizLink -- Asset Tree pick or a manual URL. Optional inline link appended to the description text; blank/unset omits it.'
    },
    cta: {
      control: 'object',
      description: 'SquizLink -- Asset Tree pick or a manual URL. Blank/unset hides the button.'
    },
    ctaVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },
    secondaryCta: {
      control: 'object',
      description: 'SquizLink -- second CTA button, stacked below the first. Only shown when there\\'s no links panel.'
    },
    secondaryCtaVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },
    linksHeading: {
      control: 'select',
      options: ['Popular', 'Featured', 'Related']
    },
    links: {
      control: 'object',
      description: 'Array of SquizLink items -- each is an Asset Tree pick or a manual URL.'
    },
    breadcrumbs: {
      control: 'object'
    },
    label: {
      control: 'text',
      description: 'Breadcrumb parent label shortcut (e.g. "Home").'
    },
    href: {
      control: 'text',
      description: 'Breadcrumb parent URL shortcut.'
    },
    visibilityOptions: {
      control: 'object'
    }
  },
  parameters: {
    docs: {
      source: {
        code: primaryHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => squiz(completeArgs),
  parameters: {
    docs: {
      source: {
        code: completeHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryFeaturedArgs),
  parameters: {
    docs: {
      source: {
        code: primaryFeaturedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryRelatedArgs),
  parameters: {
    docs: {
      source: {
        code: primaryRelatedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryFeaturedArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryFeaturedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withoutDecorativeArgs),
  parameters: {
    docs: {
      source: {
        code: withoutDecorativeHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withoutCtaArgs),
  parameters: {
    docs: {
      source: {
        code: withoutCtaHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withDescriptionLinkArgs),
  parameters: {
    docs: {
      source: {
        code: withDescriptionLinkHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => squiz(minimalArgs),
  parameters: {
    docs: {
      source: {
        code: minimalHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'With CTA',
  render: () => squiz(withCtaArgs),
  parameters: {
    docs: {
      source: {
        code: withCtaHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Two CTA Buttons',
  render: () => squiz(twoCtaButtonsArgs),
  parameters: {
    docs: {
      description: {
        story: '\`secondaryCta\`/\`secondaryCtaVariant\` add a second CTA button, stacked below the first and stretched to full width -- each CTA has its own independently-selected style (primary/secondary/tertiary). Only appears when there\\'s no links panel.'
      },
      source: {
        code: twoCtaButtonsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withManualLinksArgs),
  parameters: {
    docs: {
      description: {
        story: '\`cta\` and each \`links[]\` entry set as a { text, url } object with no \`assetId\` -- SquizLink\\'s manual-entry path, as opposed to an Asset Tree pick.'
      },
      source: {
        code: withManualLinksHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...$.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: primaryArgs,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    descriptionLink: {
      control: 'object',
      description: 'SquizLink -- Asset Tree pick or a manual URL. Optional inline link appended to the description text; blank/unset omits it.'
    },
    cta: {
      control: 'object',
      description: 'SquizLink -- Asset Tree pick or a manual URL. Blank/unset hides the button.'
    },
    ctaVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },
    secondaryCta: {
      control: 'object',
      description: 'SquizLink -- second CTA button, stacked below the first. Only shown when there\\'s no links panel.'
    },
    secondaryCtaVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },
    linksHeading: {
      control: 'select',
      options: ['Popular', 'Featured', 'Related']
    },
    links: {
      control: 'object',
      description: 'Array of SquizLink items -- each is an Asset Tree pick or a manual URL.'
    },
    breadcrumbs: {
      control: 'object'
    },
    label: {
      control: 'text',
      description: 'Breadcrumb parent label shortcut (e.g. "Home").'
    },
    href: {
      control: 'text',
      description: 'Breadcrumb parent URL shortcut.'
    },
    visibilityOptions: {
      control: 'object'
    }
  },
  parameters: {
    docs: {
      source: {
        code: primaryHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => squiz(completeArgs),
  parameters: {
    docs: {
      source: {
        code: completeHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryFeaturedArgs),
  parameters: {
    docs: {
      source: {
        code: primaryFeaturedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryRelatedArgs),
  parameters: {
    docs: {
      source: {
        code: primaryRelatedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => squiz(secondaryFeaturedArgs),
  parameters: {
    docs: {
      source: {
        code: secondaryFeaturedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withoutDecorativeArgs),
  parameters: {
    docs: {
      source: {
        code: withoutDecorativeHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withoutCtaArgs),
  parameters: {
    docs: {
      source: {
        code: withoutCtaHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withDescriptionLinkArgs),
  parameters: {
    docs: {
      source: {
        code: withDescriptionLinkHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => squiz(minimalArgs),
  parameters: {
    docs: {
      source: {
        code: minimalHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'With CTA',
  render: () => squiz(withCtaArgs),
  parameters: {
    docs: {
      source: {
        code: withCtaHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Two CTA Buttons',
  render: () => squiz(twoCtaButtonsArgs),
  parameters: {
    docs: {
      description: {
        story: '\`secondaryCta\`/\`secondaryCtaVariant\` add a second CTA button, stacked below the first and stretched to full width -- each CTA has its own independently-selected style (primary/secondary/tertiary). Only appears when there\\'s no links panel.'
      },
      source: {
        code: twoCtaButtonsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withManualLinksArgs),
  parameters: {
    docs: {
      description: {
        story: '\`cta\` and each \`links[]\` entry set as a { text, url } object with no \`assetId\` -- SquizLink\\'s manual-entry path, as opposed to an Asset Tree pick.'
      },
      source: {
        code: withManualLinksHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...$.parameters?.docs?.source}}},le=[`Primary`,`Secondary`,`Complete`,`PrimaryFeatured`,`PrimaryRelated`,`SecondaryFeatured`,`WithoutDecorative`,`WithoutCta`,`WithDescriptionLink`,`Minimal`,`WithCta`,`TwoCtaButtons`,`WithManualLinks`]}))();export{E as Complete,q as Minimal,b as Primary,k as PrimaryFeatured,M as PrimaryRelated,C as Secondary,F as SecondaryFeatured,Z as TwoCtaButtons,Y as WithCta,W as WithDescriptionLink,$ as WithManualLinks,V as WithoutCta,R as WithoutDecorative,le as __namedExportsOrder,_ as default};
//# sourceMappingURL=banner.stories-Impd1U_R.js.map