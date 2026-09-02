import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,r as n,t as r}from"./component.helper-D0vBjeOt.js";import{n as i,t as a}from"./squizStoryRenderer-4zIdV6yt.js";function o(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function s(e){return e===`primary`?`button`:`button button-${e}`}function c(e){if(!e||e.length===0)return``;let t=e.findIndex(e=>e.isCurrent),n=t>=0?t:e.length-1;return`
    <div class="banner__breadcrumbs">
      <nav aria-label="Breadcrumb" class="content-breadcrumbs">
        <ol class="breadcrumb content-breadcrumbs__list">
${e.map((e,t)=>{let r=t===n;return`        <li class="${`breadcrumb-item${r?` active`:``}`}"${r?` aria-current="page"`:``}>${r?`<span class="content-breadcrumbs__current" data-sq-field="label">${o(e.label)}</span>`:`<a class="content-breadcrumbs__link" href="${o(e.href??`#`)}" data-sq-field="label">${o(e.label)}</a>`}</li>`}).join(`
`)}
        </ol>
      </nav>
    </div>`}function l(e,t,n){if(!e)return``;let r=t&&n?` <a href="${o(n)}" class="banner__description-link" data-sq-field="descriptionLinkText">${o(t)}</a>`:``;return`<p class="banner__description" data-sq-field="description">${o(e)}${r}</p>`}function ee(e,t,n){if(!e)return``;let r=s(n);return`
          <div class="banner__cta">
            ${t?`<a href="${o(t)}" class="${r}" data-sq-field="ctaText">${o(e)}</a>`:`<button type="button" class="${r}" data-sq-field="ctaText">${o(e)}</button>`}
          </div>`}function u(){return`
      <div class="banner__decorative" aria-hidden="true">
        ${h}
      </div>`}function d(e,t,n){if(!e||!t||t.length===0||!m.has(e))return``;let r;return n?(r=t.map(e=>`            <a href="${o(e.href)}" class="banner__link" data-sq-field="label">${o(e.label)}</a>`).join(`
`),r=`
          <div class="banner__links-vertical">
${r}
          </div>`):(r=t.map(e=>`            <a href="${o(e.href)}" class="banner__pill-link" data-sq-field="label">${o(e.label)}</a>`).join(`
`),r=`
          <div class="banner__links-list">
${r}
          </div>`),`

        <div class="banner__links">
          <h2 class="banner__links-heading">${o(e)}</h2>${r}
        </div>`}function te(e){return`

        <div class="banner__links">${e}
        </div>`}var f,p,m,h,g,_=e((()=>{t(),f=new Set([`primary`,`secondary`]),p=new Set([`primary`,`secondary`,`tertiary`]),m=new Set([`Popular`,`Featured`,`Related`]),h=`<svg class="banner__decorative-logo" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 284.757 287.367">
      <g id="logo-ntg-mono" opacity="0.5">
        <path id="Path_3" data-name="Path 3" d="M120.044,1.847C107.731,3.694,95.727,23.393,100.96,38.168c7.08,20.315,22.162,54.174,43.093,54.789,21.238-.616,36.013-34.166,43.093-54.789,5.233-14.775-7.079-33.551-19.084-36.321-11.389-2.462-32.012-2.462-48.017,0M18.776,74.181c-6.156,11.081,1.231,32.935,15.7,37.86,20.007,7.079,55.4,16.006,68.948-.308C116.35,94.5,99.729,61.561,88.648,43.093c-8-13.236-30.165-15.39-39.707-7.387C39.4,43.4,26.779,59.714,18.776,74.181m-8,126.2c4.617,11.7,25.856,19.392,38.783,11.081,17.853-11.7,46.786-34.166,42.477-55.4C86.8,135.126,51.4,127.739,30.165,124.969,15.082,123.122,0,139.435,0,152.055c0,12.312,4.617,32.935,10.773,48.325m91.418,84.954c12,3.694,31.088-8.618,32.627-24.317,2.155-21.546,3.078-58.791-15.7-68.64-19.392-8.926-47.094,14.775-62.176,30.165-10.773,11.081-8,33.551,1.847,41.246,9.234,7.7,28.01,16.621,43.4,21.546m121.89-20.007c10.158-7.08,12.62-30.165,1.847-41.246-15.082-15.39-43.093-39.091-62.176-30.165-18.776,9.85-17.853,46.786-15.7,68.64,1.539,15.7,20.623,27.395,32.627,24.317,11.7-3.078,30.165-12.312,43.4-21.546m60.637-110.194c.923-12.62-15.082-28.934-30.473-27.087-21.239,2.462-56.636,10.158-61.869,31.088-4.309,21.238,24.624,43.708,42.477,55.4,12.928,8.311,33.551.616,38.783-10.773,5.54-11.7,10.158-32.012,11.081-48.633M238.548,37.86c-9.234-8.619-31.7-5.848-39.707,7.387-11.081,18.468-27.7,51.4-14.775,68.64,13.543,16.621,48.633,7.387,68.948.308,14.467-4.925,21.238-26.471,16.006-37.86-5.848-10.773-18.468-27.395-30.473-38.476" transform="translate(0 0)" fill="#ababab"></path>
        <path id="Path_4" data-name="Path 4" d="M128.792,27.062c-1.539,9.234-13.543,32.935-4,45.247,10.158,13.236,34.782,5.54,44.324,6.464l-1.231.308c-8,4.617-33.551,9.85-36.937,24.932-3.694,16.314,17.545,31.4,22.778,39.4l-1.231-.616c-8.311-3.694-28.626-20.931-42.169-14.159C95.55,136.025,97.4,161.881,94.318,171.115v-1.231c-2.462-8.926-1.847-35.705-15.39-42.477-15.082-7.387-33.858,10.158-42.785,13.543l.923-.923c5.233-7.7,26.163-23.7,22.778-38.783C56.151,84.93,30.911,80.928,22.6,76l1.231.308c9.234-.308,34.474,6.156,44.016-6.156C78,56.919,65.385,34.142,64.154,24.6l.616,1.231c6.156,7.079,16.929,31.4,32.012,31.4,16.314,0,25.856-24.317,32.319-31.4l-.308,1.231Z" transform="translate(46.964 51.12)" fill="#ababab"></path>
      </g>
    </svg>`,g={async main(e){let{variant:t=`primary`,title:i=``,description:a=``,descriptionLinkText:s=``,descriptionLinkHref:h=``,ctaText:g=``,ctaHref:_=``,ctaVariant:v,linksHeading:y=``,links:b=[],breadcrumbs:x=[],label:S=``,href:C=``,visibilityOptions:w={}}=e||{},{showCta:T,showDecorative:E}=w||{},D=r(`banner`,n(e,[`fullwidth background`])),O=f.has(t)?t:`primary`,k=O===`secondary`,A=v&&p.has(v)?v:`secondary`,j=E===void 0?!0:!!E,M=T===void 0?!0:!!T,N=[];Array.isArray(x)&&x.length>0?N=x:S&&C&&(N=[{label:S,href:C},{label:`Current page`,isCurrent:!0}]);let P=`banner--${O}`,F=!!y&&m.has(y)&&Array.isArray(b)&&b.length>0,I=M?ee(g,_,A):``,L=F?d(y,b,k):M&&g?te(I):``;return`
<div ${D} class="${P}" data-variant="${O}">
  ${j?u():``}
      <div class="banner__container">
        ${c(N)}
        <div class="banner__content">
          <div class="banner__main">
            <h1 class="banner__title" data-sq-field="title">${o(i)}</h1>
            ${l(a,s,h)}
            ${F?I:``}
          </div>
          ${L}
        </div>
      </div>
</div>
`}}})),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;await e((async()=>{a(),_(),v=i(g.main),y={title:`dxp components/Banner`,parameters:{layout:`fullscreen`}},b={variant:`primary`,title:`Page title`,description:`Optional short description of the page goal`,ctaText:`Call to action`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`},{label:`Find a Motor Vehicle Registry (MVR)`,href:`#`},{label:`Government priorities`,href:`#`}]},x=await v.markup(b),S={render:e=>v(e),args:b,argTypes:{variant:{control:`select`,options:[`primary`,`secondary`]},title:{control:`text`},description:{control:`text`},descriptionLinkText:{control:`text`,description:`Optional inline link appended to the description text. Leave blank to omit.`},descriptionLinkHref:{control:`text`},ctaText:{control:`text`,description:`Leave blank to hide the CTA button.`},ctaHref:{control:`text`},ctaVariant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},linksHeading:{control:`select`,options:[`Popular`,`Featured`,`Related`]},links:{control:`object`},breadcrumbs:{control:`object`},label:{control:`text`,description:`Breadcrumb parent label shortcut (e.g. "Home").`},href:{control:`text`,description:`Breadcrumb parent URL shortcut.`},visibilityOptions:{control:`object`}},parameters:{docs:{source:{code:x,language:`html`,type:`code`}}}},C={variant:`secondary`,title:`Page title`,description:`Optional short description of the page goal`,ctaText:`Call to action`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`},{label:`Find a Motor Vehicle Registry (MVR)`,href:`#`},{label:`Government priorities`,href:`#`}],label:`Home`,href:`/`},w=await v.markup(C),T={render:()=>v(C),parameters:{docs:{source:{code:w,language:`html`,type:`code`}}}},E={variant:`primary`,title:`Northern Territory Government Services and Information Portal`,description:`Access comprehensive information about Northern Territory Government services, programs, and initiatives. Whether you're a resident, business owner, or visitor, find everything you need to interact with government services online.`,ctaText:`Get started with services`,ctaHref:`#`,ctaVariant:`secondary`,linksHeading:`Popular`,links:[{label:`Driver's license renewal and applications`,href:`#`},{label:`Business registration and licensing`,href:`#`},{label:`Property and land information services`,href:`#`},{label:`Health and community programs`,href:`#`},{label:`Education and training resources`,href:`#`}],breadcrumbs:[{label:`Home`,href:`/`},{label:`About`,href:`/about`},{label:`Services portal`,isCurrent:!0}],visibilityOptions:{showDecorative:!0}},D=await v.markup(E),O={render:()=>v(E),parameters:{docs:{source:{code:D,language:`html`,type:`code`}}}},k={variant:`primary`,title:`Health and Wellbeing`,description:`Access health services, find medical facilities, and learn about public health programs in the Northern Territory.`,ctaText:`Find health services`,ctaHref:`#`,linksHeading:`Featured`,links:[{label:`COVID-19 information`,href:`#`},{label:`Mental health support`,href:`#`},{label:`Hospital locations`,href:`#`},{label:`Medicare services`,href:`#`}],label:`Home`,href:`/`},A=await v.markup(k),j={render:()=>v(k),parameters:{docs:{source:{code:A,language:`html`,type:`code`}}}},M={variant:`primary`,title:`Business and Industry`,description:`Start a business, apply for licenses and permits, and access business support services.`,ctaText:`Register your business`,ctaHref:`#`,linksHeading:`Related`,links:[{label:`Business grants`,href:`#`},{label:`Trade licenses`,href:`#`},{label:`Industry regulations`,href:`#`},{label:`Export assistance`,href:`#`}],label:`Home`,href:`/`},N=await v.markup(M),P={render:()=>v(M),parameters:{docs:{source:{code:N,language:`html`,type:`code`}}}},F={variant:`secondary`,title:`Transport Services`,description:`Access public transport information, vehicle registration, and licensing services.`,ctaText:`View all transport services`,ctaHref:`#`,linksHeading:`Featured`,links:[{label:`Renew your driver's license`,href:`#`},{label:`Register a vehicle`,href:`#`},{label:`Road safety information`,href:`#`},{label:`Public transport timetables`,href:`#`},{label:`Apply for driving permit`,href:`#`}],breadcrumbs:[{label:`Home`,href:`/`},{label:`Services`,href:`/services`},{label:`Transport`,isCurrent:!0}]},I=await v.markup(F),L={render:()=>v(F),parameters:{docs:{source:{code:I,language:`html`,type:`code`}}}},R={variant:`primary`,title:`Clean Banner Design`,description:`This banner demonstrates the component without decorative background elements.`,ctaText:`Learn more`,ctaHref:`#`,visibilityOptions:{showDecorative:!1},linksHeading:`Popular`,links:[{label:`Service 1`,href:`#`},{label:`Service 2`,href:`#`},{label:`Service 3`,href:`#`}]},z=await v.markup(R),B={render:()=>v(R),parameters:{docs:{source:{code:z,language:`html`,type:`code`}}}},V={variant:`primary`,title:`Banner Without a Call to Action`,description:`This banner demonstrates the component with the call to action button hidden.`,ctaText:`Learn more`,ctaHref:`#`,visibilityOptions:{showCta:!1},linksHeading:`Popular`,links:[{label:`Service 1`,href:`#`},{label:`Service 2`,href:`#`},{label:`Service 3`,href:`#`}]},H=await v.markup(V),U={render:()=>v(V),parameters:{docs:{source:{code:H,language:`html`,type:`code`}}}},W={variant:`secondary`,title:`Community Consultation Opens for Major Project`,description:`Residents are invited to provide feedback on proposed infrastructure improvements in the greater Darwin area.`,descriptionLinkText:`Read the full announcement`,descriptionLinkHref:`#`,ctaText:`Have your say`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`}],label:`Home`,href:`/`},G=await v.markup(W),K={render:()=>v(W),parameters:{docs:{source:{code:G,language:`html`,type:`code`}}}},q={variant:`secondary`,title:`Page title`,description:`Optional short description of the page goal`,visibilityOptions:{showDecorative:!1}},J=await v.markup(q),Y={render:()=>v(q),parameters:{docs:{source:{code:J,language:`html`,type:`code`}}}},X={variant:`secondary`,title:`Publication title`,description:`Optional short description of the publication or resource, summarising what it covers and who it's for.`,ctaText:`Download the report (PDF)`,ctaHref:`#`,breadcrumbs:[{label:`Home`,href:`/`},{label:`Publications`,href:`/publications`},{label:`Current page`,isCurrent:!0}],visibilityOptions:{showDecorative:!1}},Z=await v.markup(X),Q={name:`With CTA`,render:()=>v(X),parameters:{docs:{source:{code:Z,language:`html`,type:`code`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Primary`,`Secondary`,`Complete`,`PrimaryFeatured`,`PrimaryRelated`,`SecondaryFeatured`,`WithoutDecorative`,`WithoutCta`,`WithDescriptionLink`,`Minimal`,`WithCta`]}))();export{O as Complete,Y as Minimal,S as Primary,j as PrimaryFeatured,P as PrimaryRelated,T as Secondary,L as SecondaryFeatured,Q as WithCta,K as WithDescriptionLink,U as WithoutCta,B as WithoutDecorative,$ as __namedExportsOrder,y as default};
//# sourceMappingURL=banner.stories-DJ9uFfhi.js.map