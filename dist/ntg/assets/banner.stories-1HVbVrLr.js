import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-mGPdhelI.js";function r(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function i(e){return e===`primary`?`button`:`button button-${e}`}function a(e){if(!e||e.length===0)return``;let t=e.findIndex(e=>e.isCurrent),n=t>=0?t:e.length-1;return`
    <div class="banner__breadcrumbs">
      <nav aria-label="Breadcrumb" class="content-breadcrumbs">
        <ol class="breadcrumb content-breadcrumbs__list">
${e.map((e,t)=>{let i=t===n;return`        <li class="${`breadcrumb-item${i?` active`:``}`}"${i?` aria-current="page"`:``}>${i?`<span class="content-breadcrumbs__current">${r(e.label)}</span>`:`<a class="content-breadcrumbs__link" href="${r(e.href??`#`)}">${r(e.label)}</a>`}</li>`}).join(`
`)}
        </ol>
      </nav>
    </div>`}function o(e,t,n){if(!e)return``;let i=t&&n?` <a href="${r(n)}" class="banner__description-link">${r(t)}</a>`:``;return`<p class="banner__description">${r(e)}${i}</p>`}function s(e,t,n){if(!e)return``;let a=i(n);return`
          <div class="banner__cta">
            ${t?`<a href="${r(t)}" class="${a}">${r(e)}</a>`:`<button type="button" class="${a}">${r(e)}</button>`}
          </div>`}function c(){return`
      <div class="banner__decorative" aria-hidden="true">
        ${m}
      </div>`}function l(e,t,n){if(!e||!t||t.length===0||!p.has(e))return``;let i;return n?(i=t.map(e=>`            <a href="${r(e.href)}" class="banner__link">${r(e.label)}</a>`).join(`
`),i=`
          <div class="banner__links-vertical">
${i}
          </div>`):(i=t.map(e=>`            <a href="${r(e.href)}" class="banner__pill-link">${r(e.label)}</a>`).join(`
`),i=`
          <div class="banner__links-list">
${i}
          </div>`),`

        <div class="banner__links">
          <h2 class="banner__links-heading">${r(e)}</h2>${i}
        </div>`}function u(e){return`

        <div class="banner__links">${e}
        </div>`}var d,f,p,m,h,g=e((()=>{d=new Set([`primary`,`secondary`]),f=new Set([`primary`,`secondary`,`tertiary`]),p=new Set([`Popular`,`Featured`,`Related`]),m=`<svg class="banner__decorative-logo" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 284.757 287.367">
      <g id="logo-ntg-mono" opacity="0.5">
        <path id="Path_3" data-name="Path 3" d="M120.044,1.847C107.731,3.694,95.727,23.393,100.96,38.168c7.08,20.315,22.162,54.174,43.093,54.789,21.238-.616,36.013-34.166,43.093-54.789,5.233-14.775-7.079-33.551-19.084-36.321-11.389-2.462-32.012-2.462-48.017,0M18.776,74.181c-6.156,11.081,1.231,32.935,15.7,37.86,20.007,7.079,55.4,16.006,68.948-.308C116.35,94.5,99.729,61.561,88.648,43.093c-8-13.236-30.165-15.39-39.707-7.387C39.4,43.4,26.779,59.714,18.776,74.181m-8,126.2c4.617,11.7,25.856,19.392,38.783,11.081,17.853-11.7,46.786-34.166,42.477-55.4C86.8,135.126,51.4,127.739,30.165,124.969,15.082,123.122,0,139.435,0,152.055c0,12.312,4.617,32.935,10.773,48.325m91.418,84.954c12,3.694,31.088-8.618,32.627-24.317,2.155-21.546,3.078-58.791-15.7-68.64-19.392-8.926-47.094,14.775-62.176,30.165-10.773,11.081-8,33.551,1.847,41.246,9.234,7.7,28.01,16.621,43.4,21.546m121.89-20.007c10.158-7.08,12.62-30.165,1.847-41.246-15.082-15.39-43.093-39.091-62.176-30.165-18.776,9.85-17.853,46.786-15.7,68.64,1.539,15.7,20.623,27.395,32.627,24.317,11.7-3.078,30.165-12.312,43.4-21.546m60.637-110.194c.923-12.62-15.082-28.934-30.473-27.087-21.239,2.462-56.636,10.158-61.869,31.088-4.309,21.238,24.624,43.708,42.477,55.4,12.928,8.311,33.551.616,38.783-10.773,5.54-11.7,10.158-32.012,11.081-48.633M238.548,37.86c-9.234-8.619-31.7-5.848-39.707,7.387-11.081,18.468-27.7,51.4-14.775,68.64,13.543,16.621,48.633,7.387,68.948.308,14.467-4.925,21.238-26.471,16.006-37.86-5.848-10.773-18.468-27.395-30.473-38.476" transform="translate(0 0)" fill="#ababab"></path>
        <path id="Path_4" data-name="Path 4" d="M128.792,27.062c-1.539,9.234-13.543,32.935-4,45.247,10.158,13.236,34.782,5.54,44.324,6.464l-1.231.308c-8,4.617-33.551,9.85-36.937,24.932-3.694,16.314,17.545,31.4,22.778,39.4l-1.231-.616c-8.311-3.694-28.626-20.931-42.169-14.159C95.55,136.025,97.4,161.881,94.318,171.115v-1.231c-2.462-8.926-1.847-35.705-15.39-42.477-15.082-7.387-33.858,10.158-42.785,13.543l.923-.923c5.233-7.7,26.163-23.7,22.778-38.783C56.151,84.93,30.911,80.928,22.6,76l1.231.308c9.234-.308,34.474,6.156,44.016-6.156C78,56.919,65.385,34.142,64.154,24.6l.616,1.231c6.156,7.079,16.929,31.4,32.012,31.4,16.314,0,25.856-24.317,32.319-31.4l-.308,1.231Z" transform="translate(46.964 51.12)" fill="#ababab"></path>
      </g>
    </svg>`,h={async main(e){let{variant:t=`primary`,title:n=``,description:i=``,descriptionLinkText:m=``,descriptionLinkHref:h=``,ctaText:g=``,ctaHref:_=``,ctaVariant:v,linksHeading:y=``,links:b=[],breadcrumbs:x=[],label:S=``,href:C=``,showDecorative:w}=e||{},T=d.has(t)?t:`primary`,E=T===`secondary`,D=v&&f.has(v)?v:`secondary`,O=w===void 0?!0:!!w,k=[];Array.isArray(x)&&x.length>0?k=x:S&&C&&(k=[{label:S,href:C},{label:`Current page`,isCurrent:!0}]);let A=`banner banner--${T}`,j=!!y&&p.has(y)&&Array.isArray(b)&&b.length>0,M=s(g,_,D),N=j?l(y,b,E):g?u(M):``;return`
<div class="${A}" data-variant="${T}">
  ${O?c():``}
      <div class="banner__container">
        ${a(k)}
        <div class="banner__content">
          <div class="banner__main">
            <h1 class="banner__title">${r(n)}</h1>
            ${o(i,m,h)}
            ${j?M:``}
          </div>
          ${N}
        </div>
      </div>
</div>
`}}})),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;await e((async()=>{n(),g(),_=t(h.main),v={title:`dxp/Banner`,parameters:{layout:`fullscreen`}},y={variant:`primary`,title:`Page title`,description:`Optional short description of the page goal`,ctaText:`Call to action`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`},{label:`Find a Motor Vehicle Registry (MVR)`,href:`#`},{label:`Government priorities`,href:`#`}]},b=await _.markup(y),x={render:e=>_(e),args:y,argTypes:{variant:{control:`select`,options:[`primary`,`secondary`]},title:{control:`text`},description:{control:`text`},descriptionLinkText:{control:`text`,description:`Optional inline link appended to the description text. Leave blank to omit.`},descriptionLinkHref:{control:`text`},ctaText:{control:`text`,description:`Leave blank to hide the CTA button.`},ctaHref:{control:`text`},ctaVariant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},linksHeading:{control:`select`,options:[`Popular`,`Featured`,`Related`]},links:{control:`object`},breadcrumbs:{control:`object`},label:{control:`text`,description:`Breadcrumb parent label shortcut (e.g. "Home").`},href:{control:`text`,description:`Breadcrumb parent URL shortcut.`},showDecorative:{control:`boolean`}},parameters:{docs:{source:{code:b,language:`html`,type:`code`}}}},S={variant:`secondary`,title:`Page title`,description:`Optional short description of the page goal`,ctaText:`Call to action`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`},{label:`Find a Motor Vehicle Registry (MVR)`,href:`#`},{label:`Government priorities`,href:`#`}],label:`Home`,href:`/`},C=await _.markup(S),w={render:()=>_(S),parameters:{docs:{source:{code:C,language:`html`,type:`code`}}}},T={variant:`primary`,title:`Northern Territory Government Services and Information Portal`,description:`Access comprehensive information about Northern Territory Government services, programs, and initiatives. Whether you're a resident, business owner, or visitor, find everything you need to interact with government services online.`,ctaText:`Get started with services`,ctaHref:`#`,ctaVariant:`secondary`,linksHeading:`Popular`,links:[{label:`Driver's license renewal and applications`,href:`#`},{label:`Business registration and licensing`,href:`#`},{label:`Property and land information services`,href:`#`},{label:`Health and community programs`,href:`#`},{label:`Education and training resources`,href:`#`}],breadcrumbs:[{label:`Home`,href:`/`},{label:`About`,href:`/about`},{label:`Services portal`,isCurrent:!0}],showDecorative:!0},E=await _.markup(T),D={render:()=>_(T),parameters:{docs:{source:{code:E,language:`html`,type:`code`}}}},O={variant:`primary`,title:`Health and Wellbeing`,description:`Access health services, find medical facilities, and learn about public health programs in the Northern Territory.`,ctaText:`Find health services`,ctaHref:`#`,linksHeading:`Featured`,links:[{label:`COVID-19 information`,href:`#`},{label:`Mental health support`,href:`#`},{label:`Hospital locations`,href:`#`},{label:`Medicare services`,href:`#`}],label:`Home`,href:`/`},k=await _.markup(O),A={render:()=>_(O),parameters:{docs:{source:{code:k,language:`html`,type:`code`}}}},j={variant:`primary`,title:`Business and Industry`,description:`Start a business, apply for licenses and permits, and access business support services.`,ctaText:`Register your business`,ctaHref:`#`,linksHeading:`Related`,links:[{label:`Business grants`,href:`#`},{label:`Trade licenses`,href:`#`},{label:`Industry regulations`,href:`#`},{label:`Export assistance`,href:`#`}],label:`Home`,href:`/`},M=await _.markup(j),N={render:()=>_(j),parameters:{docs:{source:{code:M,language:`html`,type:`code`}}}},P={variant:`secondary`,title:`Transport Services`,description:`Access public transport information, vehicle registration, and licensing services.`,ctaText:`View all transport services`,ctaHref:`#`,linksHeading:`Featured`,links:[{label:`Renew your driver's license`,href:`#`},{label:`Register a vehicle`,href:`#`},{label:`Road safety information`,href:`#`},{label:`Public transport timetables`,href:`#`},{label:`Apply for driving permit`,href:`#`}],breadcrumbs:[{label:`Home`,href:`/`},{label:`Services`,href:`/services`},{label:`Transport`,isCurrent:!0}]},F=await _.markup(P),I={render:()=>_(P),parameters:{docs:{source:{code:F,language:`html`,type:`code`}}}},L={variant:`primary`,title:`Clean Banner Design`,description:`This banner demonstrates the component without decorative background elements.`,ctaText:`Learn more`,ctaHref:`#`,showDecorative:!1,linksHeading:`Popular`,links:[{label:`Service 1`,href:`#`},{label:`Service 2`,href:`#`},{label:`Service 3`,href:`#`}]},R=await _.markup(L),z={render:()=>_(L),parameters:{docs:{source:{code:R,language:`html`,type:`code`}}}},B={variant:`secondary`,title:`Community Consultation Opens for Major Project`,description:`Residents are invited to provide feedback on proposed infrastructure improvements in the greater Darwin area.`,descriptionLinkText:`Read the full announcement`,descriptionLinkHref:`#`,ctaText:`Have your say`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`}],label:`Home`,href:`/`},V=await _.markup(B),H={render:()=>_(B),parameters:{docs:{source:{code:V,language:`html`,type:`code`}}}},U={variant:`secondary`,title:`Page title`,description:`Optional short description of the page goal`,showDecorative:!1},W=await _.markup(U),G={render:()=>_(U),parameters:{docs:{source:{code:W,language:`html`,type:`code`}}}},K={variant:`secondary`,title:`Publication title`,description:`Optional short description of the publication or resource, summarising what it covers and who it's for.`,ctaText:`Download the report (PDF)`,ctaHref:`#`,breadcrumbs:[{label:`Home`,href:`/`},{label:`Publications`,href:`/publications`},{label:`Current page`,isCurrent:!0}],showDecorative:!1},q=await _.markup(K),J={name:`With CTA`,render:()=>_(K),parameters:{docs:{source:{code:q,language:`html`,type:`code`}}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    descriptionLinkText: {
      control: 'text',
      description: 'Optional inline link appended to the description text. Leave blank to omit.'
    },
    descriptionLinkHref: {
      control: 'text'
    },
    ctaText: {
      control: 'text',
      description: 'Leave blank to hide the CTA button.'
    },
    ctaHref: {
      control: 'text'
    },
    ctaVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },
    linksHeading: {
      control: 'select',
      options: ['Popular', 'Featured', 'Related']
    },
    links: {
      control: 'object'
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
    showDecorative: {
      control: 'boolean'
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
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    descriptionLinkText: {
      control: 'text',
      description: 'Optional inline link appended to the description text. Leave blank to omit.'
    },
    descriptionLinkHref: {
      control: 'text'
    },
    ctaText: {
      control: 'text',
      description: 'Leave blank to hide the CTA button.'
    },
    ctaHref: {
      control: 'text'
    },
    ctaVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },
    linksHeading: {
      control: 'select',
      options: ['Popular', 'Featured', 'Related']
    },
    links: {
      control: 'object'
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
    showDecorative: {
      control: 'boolean'
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
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y=[`Primary`,`Secondary`,`Complete`,`PrimaryFeatured`,`PrimaryRelated`,`SecondaryFeatured`,`WithoutDecorative`,`WithDescriptionLink`,`Minimal`,`WithCta`]}))();export{D as Complete,G as Minimal,x as Primary,A as PrimaryFeatured,N as PrimaryRelated,w as Secondary,I as SecondaryFeatured,J as WithCta,H as WithDescriptionLink,z as WithoutDecorative,Y as __namedExportsOrder,v as default};