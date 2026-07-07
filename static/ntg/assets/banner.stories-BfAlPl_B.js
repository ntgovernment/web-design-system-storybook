import{r as e}from"./preload-helper-Dcl5TOAQ.js";import{n as t,t as n}from"./squizStoryRenderer-CPVgI7yb.js";function r(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function i(e){if(!e||e.length===0)return``;let t=e.findIndex(e=>e.isCurrent),n=t>=0?t:e.length-1;return`
    <div class="banner__breadcrumbs">
      <nav aria-label="Breadcrumb" class="content-breadcrumbs" data-variant="default">
        <ol class="breadcrumb content-breadcrumbs__list">
${e.map((e,t)=>{let i=t===n;return`        <li class="${`breadcrumb-item${i?` active`:``}`}"${i?` aria-current="page"`:``}>${i?`<span class="content-breadcrumbs__current">${r(e.label)}</span>`:`<a class="content-breadcrumbs__link" href="${r(e.href??`#`)}">${r(e.label)}</a>`}</li>`}).join(`
`)}
        </ol>
      </nav>
    </div>`}function a(e,t,n){return e?`
          <div class="banner__cta">
            ${t?`<a href="${r(t)}" class="btn btn-${r(n)}">${r(e)}</a>`:`<button type="button" class="btn btn-${r(n)}">${r(e)}</button>`}
          </div>`:``}function o(e){return`
      <div class="banner__decorative" aria-hidden="true">${e?`
          <div class="banner__decorative-shape banner__decorative-shape--large"></div>
          <div class="banner__decorative-shape banner__decorative-shape--small"></div>`:``}
      </div>`}function s(e,t,n){if(!e||!t||t.length===0||!u.has(e))return``;let i;return n?(i=t.map(e=>`            <a href="${r(e.href)}" class="banner__link">${r(e.label)}</a>`).join(`
`),i=`
          <div class="banner__links-vertical">
${i}
          </div>`):(i=t.map(e=>`            <a href="${r(e.href)}" class="banner__pill-link" aria-label="${r(e.label)}">${r(e.label)}</a>`).join(`
`),i=`
          <div class="banner__links-list">
${i}
          </div>`),`

        <div class="banner__links">
          <h2 class="banner__links-heading">${r(e)}</h2>${i}
        </div>`}var c,l,u,d,f=e((()=>{c=new Set([`primary`,`secondary`]),l=new Set([`primary`,`secondary`,`tertiary`]),u=new Set([`Popular`,`Featured`,`Related`]),d={async main(e){let{variant:t=`primary`,title:n=``,description:u=``,ctaText:d=``,ctaHref:f=``,ctaVariant:p,linksHeading:m=``,links:h=[],breadcrumbs:g=[],label:_=``,href:v=``,showDecorative:y}=e||{},b=c.has(t)?t:`primary`,x=b===`secondary`,S=p&&l.has(p)?p:`secondary`,C=y===void 0?!0:!!y,w=[];return Array.isArray(g)&&g.length>0?w=g:_&&v&&(w=[{label:_,href:v},{label:`Current page`,isCurrent:!0}]),`
<div class="${`banner banner--${b}`}" data-variant="${b}">
  ${C?o(x):``}
      <div class="banner__container">
        ${i(w)}
        <div class="banner__content">
          <div class="banner__main">
            <h1 class="banner__title">${r(n)}</h1>
            ${u?`<p class="banner__description">${r(u)}</p>`:``}
            ${a(d,f,S)}
          </div>
          ${s(m,h,x)}
        </div>
      </div>
</div>
`}}})),p,m,h,g,_,v,y,b,x,S;e((()=>{n(),f(),p=t(d.main),m={title:`dxp/Banner`},h={render:()=>p({variant:`primary`,title:`Page title`,description:`Optional short description of the page goal`,ctaText:`Call to action`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`},{label:`Find a Motor Vehicle Registry (MVR)`,href:`#`},{label:`Government priorities`,href:`#`}]})},g={render:()=>p({variant:`secondary`,title:`Page title`,description:`Optional short description of the page goal`,ctaText:`Call to action`,ctaHref:`#`,linksHeading:`Popular`,links:[{label:`Bus timetables and maps`,href:`#`},{label:`Check your rego`,href:`#`},{label:`Find a Motor Vehicle Registry (MVR)`,href:`#`},{label:`Government priorities`,href:`#`}],label:`Home`,href:`/`})},_={render:()=>p({variant:`primary`,title:`Northern Territory Government Services and Information Portal`,description:`Access comprehensive information about Northern Territory Government services, programs, and initiatives. Whether you're a resident, business owner, or visitor, find everything you need to interact with government services online.`,ctaText:`Get started with services`,ctaHref:`#`,ctaVariant:`secondary`,linksHeading:`Popular`,links:[{label:`Driver's license renewal and applications`,href:`#`},{label:`Business registration and licensing`,href:`#`},{label:`Property and land information services`,href:`#`},{label:`Health and community programs`,href:`#`},{label:`Education and training resources`,href:`#`}],breadcrumbs:[{label:`Home`,href:`/`},{label:`About`,href:`/about`},{label:`Services portal`,isCurrent:!0}],showDecorative:!0})},v={render:()=>p({variant:`primary`,title:`Health and Wellbeing`,description:`Access health services, find medical facilities, and learn about public health programs in the Northern Territory.`,ctaText:`Find health services`,ctaHref:`#`,linksHeading:`Featured`,links:[{label:`COVID-19 information`,href:`#`},{label:`Mental health support`,href:`#`},{label:`Hospital locations`,href:`#`},{label:`Medicare services`,href:`#`}],label:`Home`,href:`/`})},y={render:()=>p({variant:`primary`,title:`Business and Industry`,description:`Start a business, apply for licenses and permits, and access business support services.`,ctaText:`Register your business`,ctaHref:`#`,linksHeading:`Related`,links:[{label:`Business grants`,href:`#`},{label:`Trade licenses`,href:`#`},{label:`Industry regulations`,href:`#`},{label:`Export assistance`,href:`#`}],label:`Home`,href:`/`})},b={render:()=>p({variant:`secondary`,title:`Transport Services`,description:`Access public transport information, vehicle registration, and licensing services.`,ctaText:`View all transport services`,ctaHref:`#`,linksHeading:`Featured`,links:[{label:`Renew your driver's license`,href:`#`},{label:`Register a vehicle`,href:`#`},{label:`Road safety information`,href:`#`},{label:`Public transport timetables`,href:`#`},{label:`Apply for driving permit`,href:`#`}],breadcrumbs:[{label:`Home`,href:`/`},{label:`Services`,href:`/services`},{label:`Transport`,isCurrent:!0}]})},x={render:()=>p({variant:`primary`,title:`Clean Banner Design`,description:`This banner demonstrates the component without decorative background elements.`,ctaText:`Learn more`,ctaHref:`#`,showDecorative:!1,linksHeading:`Popular`,links:[{label:`Service 1`,href:`#`},{label:`Service 2`,href:`#`},{label:`Service 3`,href:`#`}]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    variant: 'primary',
    title: 'Page title',
    description: 'Optional short description of the page goal',
    ctaText: 'Call to action',
    ctaHref: '#',
    linksHeading: 'Popular',
    links: [{
      label: 'Bus timetables and maps',
      href: '#'
    }, {
      label: 'Check your rego',
      href: '#'
    }, {
      label: 'Find a Motor Vehicle Registry (MVR)',
      href: '#'
    }, {
      label: 'Government priorities',
      href: '#'
    }]
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    variant: 'secondary',
    title: 'Page title',
    description: 'Optional short description of the page goal',
    ctaText: 'Call to action',
    ctaHref: '#',
    linksHeading: 'Popular',
    links: [{
      label: 'Bus timetables and maps',
      href: '#'
    }, {
      label: 'Check your rego',
      href: '#'
    }, {
      label: 'Find a Motor Vehicle Registry (MVR)',
      href: '#'
    }, {
      label: 'Government priorities',
      href: '#'
    }],
    label: 'Home',
    href: '/'
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    variant: 'primary',
    title: 'Northern Territory Government Services and Information Portal',
    description: 'Access comprehensive information about Northern Territory Government services, programs, and initiatives. Whether you\\'re a resident, business owner, or visitor, find everything you need to interact with government services online.',
    ctaText: 'Get started with services',
    ctaHref: '#',
    ctaVariant: 'secondary',
    linksHeading: 'Popular',
    links: [{
      label: "Driver's license renewal and applications",
      href: '#'
    }, {
      label: 'Business registration and licensing',
      href: '#'
    }, {
      label: 'Property and land information services',
      href: '#'
    }, {
      label: 'Health and community programs',
      href: '#'
    }, {
      label: 'Education and training resources',
      href: '#'
    }],
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'About',
      href: '/about'
    }, {
      label: 'Services portal',
      isCurrent: true
    }],
    showDecorative: true
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    variant: 'primary',
    title: 'Health and Wellbeing',
    description: 'Access health services, find medical facilities, and learn about public health programs in the Northern Territory.',
    ctaText: 'Find health services',
    ctaHref: '#',
    linksHeading: 'Featured',
    links: [{
      label: 'COVID-19 information',
      href: '#'
    }, {
      label: 'Mental health support',
      href: '#'
    }, {
      label: 'Hospital locations',
      href: '#'
    }, {
      label: 'Medicare services',
      href: '#'
    }],
    label: 'Home',
    href: '/'
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    variant: 'primary',
    title: 'Business and Industry',
    description: 'Start a business, apply for licenses and permits, and access business support services.',
    ctaText: 'Register your business',
    ctaHref: '#',
    linksHeading: 'Related',
    links: [{
      label: 'Business grants',
      href: '#'
    }, {
      label: 'Trade licenses',
      href: '#'
    }, {
      label: 'Industry regulations',
      href: '#'
    }, {
      label: 'Export assistance',
      href: '#'
    }],
    label: 'Home',
    href: '/'
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    variant: 'secondary',
    title: 'Transport Services',
    description: 'Access public transport information, vehicle registration, and licensing services.',
    ctaText: 'View all transport services',
    ctaHref: '#',
    linksHeading: 'Featured',
    links: [{
      label: "Renew your driver's license",
      href: '#'
    }, {
      label: 'Register a vehicle',
      href: '#'
    }, {
      label: 'Road safety information',
      href: '#'
    }, {
      label: 'Public transport timetables',
      href: '#'
    }, {
      label: 'Apply for driving permit',
      href: '#'
    }],
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'Transport',
      isCurrent: true
    }]
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    variant: 'primary',
    title: 'Clean Banner Design',
    description: 'This banner demonstrates the component without decorative background elements.',
    ctaText: 'Learn more',
    ctaHref: '#',
    showDecorative: false,
    linksHeading: 'Popular',
    links: [{
      label: 'Service 1',
      href: '#'
    }, {
      label: 'Service 2',
      href: '#'
    }, {
      label: 'Service 3',
      href: '#'
    }]
  })
}`,...x.parameters?.docs?.source}}},S=[`Primary`,`Secondary`,`Complete`,`PrimaryFeatured`,`PrimaryRelated`,`SecondaryFeatured`,`WithoutDecorative`]}))();export{_ as Complete,h as Primary,v as PrimaryFeatured,y as PrimaryRelated,g as Secondary,b as SecondaryFeatured,x as WithoutDecorative,S as __namedExportsOrder,m as default};