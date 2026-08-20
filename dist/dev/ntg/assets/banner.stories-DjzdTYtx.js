import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-CkXZPIWM.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";function a(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function o(e){return e===`primary`?`button`:`button button-${e}`}function s(e){if(!e||e.length===0)return``;let t=e.findIndex(e=>e.isCurrent),n=t>=0?t:e.length-1;return`
    <div class="banner__breadcrumbs">
      <nav aria-label="Breadcrumb" class="content-breadcrumbs">
        <ol class="breadcrumb content-breadcrumbs__list">
${e.map((e,t)=>{let r=t===n;return`        <li class="${`breadcrumb-item${r?` active`:``}`}"${r?` aria-current="page"`:``}>${r?`<span class="content-breadcrumbs__current" data-sq-field="label">${a(e.label)}</span>`:`<a class="content-breadcrumbs__link" href="${a(e.href??`#`)}" data-sq-field="label">${a(e.label)}</a>`}</li>`}).join(`
`)}
        </ol>
      </nav>
    </div>`}function c(e,t,n){if(!e)return``;let r=t&&n?` <a href="${a(n)}" class="banner__description-link" data-sq-field="descriptionLinkText">${a(t)}</a>`:``;return`<p class="banner__description" data-sq-field="description">${a(e)}${r}</p>`}function l(e,t,n){if(!e)return``;let r=o(n);return`
          <div class="banner__cta">
            ${t?`<a href="${a(t)}" class="${r}" data-sq-field="ctaText">${a(e)}</a>`:`<button type="button" class="${r}" data-sq-field="ctaText">${a(e)}</button>`}
          </div>`}function u(){return`
      <div class="banner__decorative" aria-hidden="true">
        ${g}
      </div>`}function d(e,t,n){if(!e||!t||t.length===0||!h.has(e))return``;let r;return n?(r=t.map(e=>`            <a href="${a(e.href)}" class="banner__link" data-sq-field="label">${a(e.label)}</a>`).join(`
`),r=`
          <div class="banner__links-vertical">
${r}
          </div>`):(r=t.map(e=>`            <a href="${a(e.href)}" class="banner__pill-link" data-sq-field="label">${a(e.label)}</a>`).join(`
`),r=`
          <div class="banner__links-list">
${r}
          </div>`),`

        <div class="banner__links">
          <h2 class="banner__links-heading">${a(e)}</h2>${r}
        </div>`}function f(e){return`

        <div class="banner__links">${e}
        </div>`}var p,m,h,g,_,v=e((()=>{t(),p=new Set([`primary`,`secondary`]),m=new Set([`primary`,`secondary`,`tertiary`]),h=new Set([`Popular`,`Featured`,`Related`]),g=`<svg class="banner__decorative-logo" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 284.757 287.367">
      <g id="logo-ntg-mono" opacity="0.5">
        <path id="Path_3" data-name="Path 3" d="M120.044,1.847C107.731,3.694,95.727,23.393,100.96,38.168c7.08,20.315,22.162,54.174,43.093,54.789,21.238-.616,36.013-34.166,43.093-54.789,5.233-14.775-7.079-33.551-19.084-36.321-11.389-2.462-32.012-2.462-48.017,0M18.776,74.181c-6.156,11.081,1.231,32.935,15.7,37.86,20.007,7.079,55.4,16.006,68.948-.308C116.35,94.5,99.729,61.561,88.648,43.093c-8-13.236-30.165-15.39-39.707-7.387C39.4,43.4,26.779,59.714,18.776,74.181m-8,126.2c4.617,11.7,25.856,19.392,38.783,11.081,17.853-11.7,46.786-34.166,42.477-55.4C86.8,135.126,51.4,127.739,30.165,124.969,15.082,123.122,0,139.435,0,152.055c0,12.312,4.617,32.935,10.773,48.325m91.418,84.954c12,3.694,31.088-8.618,32.627-24.317,2.155-21.546,3.078-58.791-15.7-68.64-19.392-8.926-47.094,14.775-62.176,30.165-10.773,11.081-8,33.551,1.847,41.246,9.234,7.7,28.01,16.621,43.4,21.546m121.89-20.007c10.158-7.08,12.62-30.165,1.847-41.246-15.082-15.39-43.093-39.091-62.176-30.165-18.776,9.85-17.853,46.786-15.7,68.64,1.539,15.7,20.623,27.395,32.627,24.317,11.7-3.078,30.165-12.312,43.4-21.546m60.637-110.194c.923-12.62-15.082-28.934-30.473-27.087-21.239,2.462-56.636,10.158-61.869,31.088-4.309,21.238,24.624,43.708,42.477,55.4,12.928,8.311,33.551.616,38.783-10.773,5.54-11.7,10.158-32.012,11.081-48.633M238.548,37.86c-9.234-8.619-31.7-5.848-39.707,7.387-11.081,18.468-27.7,51.4-14.775,68.64,13.543,16.621,48.633,7.387,68.948.308,14.467-4.925,21.238-26.471,16.006-37.86-5.848-10.773-18.468-27.395-30.473-38.476" transform="translate(0 0)" fill="#ababab"></path>
        <path id="Path_4" data-name="Path 4" d="M128.792,27.062c-1.539,9.234-13.543,32.935-4,45.247,10.158,13.236,34.782,5.54,44.324,6.464l-1.231.308c-8,4.617-33.551,9.85-36.937,24.932-3.694,16.314,17.545,31.4,22.778,39.4l-1.231-.616c-8.311-3.694-28.626-20.931-42.169-14.159C95.55,136.025,97.4,161.881,94.318,171.115v-1.231c-2.462-8.926-1.847-35.705-15.39-42.477-15.082-7.387-33.858,10.158-42.785,13.543l.923-.923c5.233-7.7,26.163-23.7,22.778-38.783C56.151,84.93,30.911,80.928,22.6,76l1.231.308c9.234-.308,34.474,6.156,44.016-6.156C78,56.919,65.385,34.142,64.154,24.6l.616,1.231c6.156,7.079,16.929,31.4,32.012,31.4,16.314,0,25.856-24.317,32.319-31.4l-.308,1.231Z" transform="translate(46.964 51.12)" fill="#ababab"></path>
      </g>
    </svg>`,_={async main(e){let{variant:t=`primary`,title:r=``,description:i=``,descriptionLinkText:o=``,descriptionLinkHref:g=``,ctaText:_=``,ctaHref:v=``,ctaVariant:y,linksHeading:b=``,links:x=[],breadcrumbs:S=[],label:C=``,href:w=``,showDecorative:T}=e||{},E=n(`banner`,{containerModifiers:{fullwidthBackground:!0,...e.containerModifiers||{},variant:`inherit-background`}}),D=p.has(t)?t:`primary`,O=D===`secondary`,k=y&&m.has(y)?y:`secondary`,A=T===void 0?!0:!!T,j=[];Array.isArray(S)&&S.length>0?j=S:C&&w&&(j=[{label:C,href:w},{label:`Current page`,isCurrent:!0}]);let M=`banner--${D}`,N=!!b&&h.has(b)&&Array.isArray(x)&&x.length>0,P=l(_,v,k),F=N?d(b,x,O):_?f(P):``;return`
<div ${E} class="${M}" data-variant="${D}">
  ${A?u():``}
      <div class="banner__container">
        ${s(j)}
        <div class="banner__content">
          <div class="banner__main">
            <h1 class="banner__title" data-sq-field="title">${a(r)}</h1>
            ${c(i,o,g)}
            ${N?P:``}
          </div>
          ${F}
        </div>
      </div>
</div>
`}}})),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;await e((async()=>{i(),v(),y=r(_.main),b={title:`dxp components/Banner`,parameters:{layout:`fullscreen`}},x={variant:`primary`,title:`Page title`,description:`Optional short description of the page goal`,ctaText:`Call to action`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`},{label:`Find a Motor Vehicle Registry (MVR)`,href:`#`},{label:`Government priorities`,href:`#`}]},S=await y.markup(x),C={render:e=>y(e),args:x,argTypes:{variant:{control:`select`,options:[`primary`,`secondary`]},title:{control:`text`},description:{control:`text`},descriptionLinkText:{control:`text`,description:`Optional inline link appended to the description text. Leave blank to omit.`},descriptionLinkHref:{control:`text`},ctaText:{control:`text`,description:`Leave blank to hide the CTA button.`},ctaHref:{control:`text`},ctaVariant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},linksHeading:{control:`select`,options:[`Popular`,`Featured`,`Related`]},links:{control:`object`},breadcrumbs:{control:`object`},label:{control:`text`,description:`Breadcrumb parent label shortcut (e.g. "Home").`},href:{control:`text`,description:`Breadcrumb parent URL shortcut.`},showDecorative:{control:`boolean`}},parameters:{docs:{source:{code:S,language:`html`,type:`code`}}}},w={variant:`secondary`,title:`Page title`,description:`Optional short description of the page goal`,ctaText:`Call to action`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`},{label:`Find a Motor Vehicle Registry (MVR)`,href:`#`},{label:`Government priorities`,href:`#`}],label:`Home`,href:`/`},T=await y.markup(w),E={render:()=>y(w),parameters:{docs:{source:{code:T,language:`html`,type:`code`}}}},D={variant:`primary`,title:`Northern Territory Government Services and Information Portal`,description:`Access comprehensive information about Northern Territory Government services, programs, and initiatives. Whether you're a resident, business owner, or visitor, find everything you need to interact with government services online.`,ctaText:`Get started with services`,ctaHref:`#`,ctaVariant:`secondary`,linksHeading:`Popular`,links:[{label:`Driver's license renewal and applications`,href:`#`},{label:`Business registration and licensing`,href:`#`},{label:`Property and land information services`,href:`#`},{label:`Health and community programs`,href:`#`},{label:`Education and training resources`,href:`#`}],breadcrumbs:[{label:`Home`,href:`/`},{label:`About`,href:`/about`},{label:`Services portal`,isCurrent:!0}],showDecorative:!0},O=await y.markup(D),k={render:()=>y(D),parameters:{docs:{source:{code:O,language:`html`,type:`code`}}}},A={variant:`primary`,title:`Health and Wellbeing`,description:`Access health services, find medical facilities, and learn about public health programs in the Northern Territory.`,ctaText:`Find health services`,ctaHref:`#`,linksHeading:`Featured`,links:[{label:`COVID-19 information`,href:`#`},{label:`Mental health support`,href:`#`},{label:`Hospital locations`,href:`#`},{label:`Medicare services`,href:`#`}],label:`Home`,href:`/`},j=await y.markup(A),M={render:()=>y(A),parameters:{docs:{source:{code:j,language:`html`,type:`code`}}}},N={variant:`primary`,title:`Business and Industry`,description:`Start a business, apply for licenses and permits, and access business support services.`,ctaText:`Register your business`,ctaHref:`#`,linksHeading:`Related`,links:[{label:`Business grants`,href:`#`},{label:`Trade licenses`,href:`#`},{label:`Industry regulations`,href:`#`},{label:`Export assistance`,href:`#`}],label:`Home`,href:`/`},P=await y.markup(N),F={render:()=>y(N),parameters:{docs:{source:{code:P,language:`html`,type:`code`}}}},I={variant:`secondary`,title:`Transport Services`,description:`Access public transport information, vehicle registration, and licensing services.`,ctaText:`View all transport services`,ctaHref:`#`,linksHeading:`Featured`,links:[{label:`Renew your driver's license`,href:`#`},{label:`Register a vehicle`,href:`#`},{label:`Road safety information`,href:`#`},{label:`Public transport timetables`,href:`#`},{label:`Apply for driving permit`,href:`#`}],breadcrumbs:[{label:`Home`,href:`/`},{label:`Services`,href:`/services`},{label:`Transport`,isCurrent:!0}]},L=await y.markup(I),R={render:()=>y(I),parameters:{docs:{source:{code:L,language:`html`,type:`code`}}}},z={variant:`primary`,title:`Clean Banner Design`,description:`This banner demonstrates the component without decorative background elements.`,ctaText:`Learn more`,ctaHref:`#`,showDecorative:!1,linksHeading:`Popular`,links:[{label:`Service 1`,href:`#`},{label:`Service 2`,href:`#`},{label:`Service 3`,href:`#`}]},B=await y.markup(z),V={render:()=>y(z),parameters:{docs:{source:{code:B,language:`html`,type:`code`}}}},H={variant:`secondary`,title:`Community Consultation Opens for Major Project`,description:`Residents are invited to provide feedback on proposed infrastructure improvements in the greater Darwin area.`,descriptionLinkText:`Read the full announcement`,descriptionLinkHref:`#`,ctaText:`Have your say`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`}],label:`Home`,href:`/`},U=await y.markup(H),W={render:()=>y(H),parameters:{docs:{source:{code:U,language:`html`,type:`code`}}}},G={variant:`secondary`,title:`Page title`,description:`Optional short description of the page goal`,showDecorative:!1},K=await y.markup(G),q={render:()=>y(G),parameters:{docs:{source:{code:K,language:`html`,type:`code`}}}},J={variant:`secondary`,title:`Publication title`,description:`Optional short description of the publication or resource, summarising what it covers and who it's for.`,ctaText:`Download the report (PDF)`,ctaHref:`#`,breadcrumbs:[{label:`Home`,href:`/`},{label:`Publications`,href:`/publications`},{label:`Current page`,isCurrent:!0}],showDecorative:!1},Y=await y.markup(J),X={name:`With CTA`,render:()=>y(J),parameters:{docs:{source:{code:Y,language:`html`,type:`code`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z=[`Primary`,`Secondary`,`Complete`,`PrimaryFeatured`,`PrimaryRelated`,`SecondaryFeatured`,`WithoutDecorative`,`WithDescriptionLink`,`Minimal`,`WithCta`]}))();export{k as Complete,q as Minimal,C as Primary,M as PrimaryFeatured,F as PrimaryRelated,E as Secondary,R as SecondaryFeatured,X as WithCta,W as WithDescriptionLink,V as WithoutDecorative,Z as __namedExportsOrder,b as default};
//# sourceMappingURL=banner.stories-DjzdTYtx.js.map