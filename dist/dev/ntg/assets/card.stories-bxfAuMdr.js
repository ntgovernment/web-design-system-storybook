import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./card-DCcP7Xt5.js";import{n,t as r}from"./component.helper-D0vBjeOt.js";import{n as i,t as a}from"./squizStoryRenderer-4zIdV6yt.js";import{n as o,r as s,t as c}from"./xss-Cvy76lHc.js";import{n as l,t as u}from"./squizInfo.mock-D4VTpLG1.js";async function d(e,t){if(!e)return null;try{let n=await t?.resolveUri?.(e);return n&&`data`in n?n.data:n??null}catch{return null}}function f(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/(\d+)(?::.+)?$/.exec(String(e??``));return{domain:t?.[1]??null,id:t?.[2]??null}}async function p(e,t){let{domain:n,id:r}=f(e);if(!n||!r||!t)return[];let i=`${t}?${T}=${encodeURIComponent(r)}`,a;try{let e=await fetch(i);if(!e.ok)return[];a=await e.json()}catch{return[]}return Array.isArray(a)?a.map(e=>e?.id).filter(Boolean).map(e=>`matrix-asset://${n}/${e}`):[]}async function m(e,t,n){let r=h(e.metadata||{},`content-cardImagePhoto`);if(r){let e=/^matrix-asset:\/\//.test(r)?r:t?`matrix-asset://${t}/${r}`:null,i=e?await d(e,n):null,a=i?.url||(Array.isArray(i?.urls)?i.urls[0]:``)||``;if(a)return{url:a,alt:i.name||``,width:null,height:null}}let i=e.thumbnail;return i?{url:i.url||``,alt:i.alt||i.title||``,width:i.width||null,height:i.height||null}:null}function h(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}async function ee(e,t,n){if(!e)return null;let r=e.metadata||{};return{title:h(r,`content-cardTitle`)||e.name||``,description:h(r,`content-cardDescription`),image:await m(e,t,n),date:h(r,`Date`),tagLabel:h(r,`Category`),href:e.url||``,actionText:h(r,`content-cardButtonText`)||C}}async function te(e,t,n){let r=Array.isArray(e)?e:[];return(await Promise.all(r.map(async e=>n(await d(e,t),f(e).domain,t)))).filter(Boolean)}function g(e,t){let n=t.showImage?e.image:null,r=t.showTags?e.tagLabel:``,i=t.showDate?e.date:``,a=`card-title-${Math.random().toString(36).slice(2,9)}`,s=n?`
    <div class="card__image">
      <img src="${o(n.url)}" alt="${c(n.alt)}"${n.width?` width="${n.width}"`:``}${n.height?` height="${n.height}"`:``} />
    </div>`:``,l=r||i?`
      <div class="card__header">
        ${r?`<span class="card__tag">${c(r)}</span>`:``}
        ${i?`<span class="card__date">${c(i)}</span>`:``}
      </div>`:``,u=t.showDescription&&e.description?`<p class="card__description">${c(e.description)}</p>`:``,d=t.showActionLink&&e.actionText?`
      <div class="card__footer">
        <span class="card__action">${c(e.actionText)} <span class="card__action-icon">${S}</span></span>
      </div>`:``,f=`${s}
    <div class="card__content">${l}
      <div class="card__body">
        <h3 class="card__title" id="${a}">${c(e.title)}</h3>
        ${u}
      </div>${d}
    </div>`;return e.href?`<a class="card" href="${o(e.href)}" aria-labelledby="${a}">${f}</a>`:`<article class="card">${f}</article>`}function _(e){return e?{icon:h(e.metadata||{},`content-cardIcon`),label:e.name||``,href:e.url||``}:null}function v(e){if(!e)return null;let t=e.metadata||{};return{icon:h(t,`content-cardIcon`),title:h(t,`content-cardTitle`)||e.name||``,description:h(t,`content-cardDescription`),href:e.url||``}}function y(e){let t=`homepage-card-title-${Math.random().toString(36).slice(2,9)}`,n=e.icon?`<i class="fal fa-lg fa-${c(e.icon)}" aria-hidden="true"></i>`:``,r=e.description?`<p class="homepage-card__description">${c(e.description)}</p>`:``,i=`
    <h3 class="homepage-card__title" id="${t}">${n}${c(e.title)}</h3>
    <div class="homepage-card__divider" aria-hidden="true"></div>
    ${r}`;return e.href?`<a class="homepage-card" href="${o(e.href)}" aria-labelledby="${t}">${i}</a>`:`<div class="homepage-card">${i}</div>`}function ne(e){let t=`card-icon-title-${Math.random().toString(36).slice(2,9)}`,n=e.icon?`<div class="card__icon"><i class="fa-thin fa-${c(e.icon)}" aria-hidden="true"></i></div>`:``,r=e.description?`<p class="card__description">${c(e.description)}</p>`:``,i=`${n}
    <div class="card__content">
      <div class="card__body">
        <h3 class="card__title" id="${t}">${c(e.title)}</h3>
        ${r}
      </div>
    </div>`;return e.href?`<a class="card" href="${o(e.href)}" aria-labelledby="${t}">${i}</a>`:`<article class="card">${i}</article>`}function re(e){let{icon:t=``,label:n=``,href:r=``}=e||{},i=`
    <span class="mini-card__icon" aria-hidden="true">${t?`<i class="fa-thin fa-${c(t)}"></i>`:``}</span>
    <span class="mini-card__label">${c(n)}</span>`;return r?`<a class="mini-card" href="${o(r)}">${i}</a>`:`<div class="mini-card">${i}</div>`}async function ie(e,t,n){if(!e)return null;let r=e.metadata||{};return{title:h(r,`content-cardTitle`)||e.name||``,description:h(r,`content-cardDescription`),image:await m(e,t,n),date:h(r,`news-datePublished`),href:e.url||``}}function b(e){let t=Date.parse(e||``);return Number.isNaN(t)?-1/0:t}function x(e,t){let n=t.showImage?e.image:null,r=t.showDate?e.date:``,i=`news-card-title-${Math.random().toString(36).slice(2,9)}`,a=n?`
    <div class="card__image">
      <img src="${o(n.url)}" alt="${c(n.alt)}"${n.width?` width="${n.width}"`:``}${n.height?` height="${n.height}"`:``} />
    </div>`:``,s=t.showDescription&&e.description?`<p class="card__description">${c(e.description)}</p>`:``,l=`${a}
    <div class="card__content">
      <div class="news-card__header">
        ${t.showTags?`<span class="card__tag">${c(w)}</span>`:``}
        ${r?`<span class="news-card__date">${c(r)}</span>`:``}
      </div>
      <div class="news-card__divider" aria-hidden="true"></div>
      <div class="card__body">
        <h3 class="card__title" id="${i}">${c(e.title)}</h3>
        ${s}
      </div>
    </div>`;return e.href?`<a class="card" href="${o(e.href)}" aria-labelledby="${i}">${l}</a>`:`<article class="card">${l}</article>`}function ae(e,t,n,r,i,a){let s=n?String(r??``).trim():``,l=s?`<h2 class="card-section__title">${c(s)}</h2>`:``,u=a?.target&&a.target!==`_self`?` target="${c(a.target)}" rel="noopener noreferrer"`:``,d=i&&a?.url?`<a class="button card-section__view-all" href="${o(a.url)}"${u}>${c(a.text||a.url)}</a>`:``;return`
<div ${t} class="card-section">
  ${l||d?`<div class="card-section__header">${l}${d}</div>`:``}
  <div class="card-grid">
    ${e}
  </div>
</div>
`}async function oe(e,t,n){let r=await p(t,n);return[...new Set([...Array.isArray(e)?e:[],...r])]}var S,C,w,se,T,E,ce,le=e((()=>{s(),n(),S=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,C=`Find out more`,w=`News`,se=3,T=`rootId`,E={"Display Cards":{map:ee,render:g},"Display Cards Icons":{map:v,render:ne},"Mini Cards":{map:_,render:re},"Homepage Cards":{map:v,render:y},"News Cards":{map:ie,render:x,arrange:e=>[...e].sort((e,t)=>b(t.date)-b(e.date)).slice(0,se)}},ce={async main(e={},t={}){let{cardMode:n=`Display Cards`,assets:i=[],parentAsset:a=``,visibilityOptions:o={},layoutOptions:s={}}=e,{showImage:c=!0,showTags:l=!0,showDate:u=!0,showDescription:d=!0,showActionLink:f=!0}=o,{showSectionHeading:p,sectionHeading:m=`What we are doing`,showViewAllButton:h,viewAllButton:ee}=s,g=p===void 0?n===`News Cards`:!!p,_=h===void 0?n===`News Cards`:!!h,v=await oe(i,a,t.env?.CONTENT_API_URL),y=r(`card`,e),ne={showImage:c,showTags:l,showDate:u,showDescription:d,showActionLink:f},{map:re,render:ie,arrange:b=e=>e}=E[n]??E[`Display Cards`],x=b(await te(v,t.fns,re)).map(e=>ie(e,ne)).join(``);return!g&&!_?`
<div ${y} class="card-grid">
  ${x}
</div>
`:ae(x,y,g,m,_,ee)}}}));function ue({id:e,name:t,category:n,date:r,description:i,mockImage:a}){let o=``;a&&(o=`${e}9`,A[o]={id:o,type:`image`,name:`${t} photo`,url:`https://picsum.photos/id/${e}/640/480`,urls:[`https://picsum.photos/id/${e}/640/480`]});let s={id:String(e),type:`pageStandard`,name:t,url:`https://example.com/pages/${e}`,metadata:{Category:[n],Date:[r],"content-cardDescription":[i],...o?{"content-cardImagePhoto":[o]}:{}},child_count:0};return A[String(e)]=s,s}function D({id:e,name:t,icon:n,href:r}){let i={id:String(e),type:`dataRecord`,name:t,url:r,metadata:{"content-cardIcon":[n]},child_count:0};return A[String(e)]=i,i}function O({id:e,name:t,icon:n,description:r,href:i}){let a={id:String(e),type:`pageStandard`,name:t,url:i,metadata:{"content-cardIcon":[n],"content-cardDescription":[r]},child_count:0};return A[String(e)]=a,a}function k({id:e,name:t,date:n,description:r,href:i}){let a=`${e}9`;A[a]={id:a,type:`image`,name:`${t} photo`,url:`https://picsum.photos/id/${e}/640/480`,urls:[`https://picsum.photos/id/${e}/640/480`]};let o={id:String(e),type:`pageStandard`,name:t,url:i,metadata:{"content-cardDescription":[r],"content-cardImagePhoto":[a],"news-datePublished":[n]},child_count:0};return A[String(e)]=o,o}var A,j,M,N,de,P,fe,F,I,L,R,z,B,V,H,pe,U,W,me,G,K,he,q,J,ge,Y,X,_e,Z,Q,ve,$,ye;await e((async()=>{a(),u(),t(),le(),A={},ue({mockImage:!0,id:1001,name:`Community Consultation Opens for Major Project`,category:`News`,date:`17 Feb 2025`,description:`Residents invited to provide feedback on proposed infrastructure improvements in the greater Darwin area.`}),ue({mockImage:!0,id:1003,name:`Grants Information Session`,category:`Event`,date:`2 Mar 2025`,description:`Join a free information session on the upcoming community grants round.`}),D({id:3101,name:`Grant applicants`,icon:`briefcase`,href:`#`}),D({id:3102,name:`Service providers`,icon:`earth-americas`,href:`#`}),D({id:3103,name:`Get in touch`,icon:`circle-info`,href:`#`}),D({id:3104,name:`No icon, no link`,icon:``,href:``}),O({id:2101,name:`Card title 1`,icon:`circle`,description:`Placeholder description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,href:`#`}),O({id:2102,name:`Card title 2`,icon:`square`,description:`Placeholder description text. Nam ac nunc neque, praesent posuere lobortis purus.`,href:`#`}),O({id:2103,name:`Card title 3`,icon:`star`,description:`Placeholder description text. Ac laoreet est volutpat in, vestibulum ante ipsum primis.`,href:`#`}),O({id:2104,name:`Card title 4`,icon:`bell`,description:`Placeholder description text. Sed do eiusmod tempor incididunt ut labore et dolore.`,href:`#`}),O({id:2105,name:`Card title 5`,icon:`gear`,description:`Placeholder description text. Ut enim ad minim veniam, quis nostrud exercitation.`,href:`#`}),k({id:4101,name:`News card title 1`,date:`10 Jun 2026`,description:`Placeholder description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,href:`#`}),k({id:4102,name:`News card title 2`,date:`26 Jun 2026`,description:`Placeholder description text. Nam ac nunc neque, praesent posuere lobortis purus.`,href:`#`}),k({id:4103,name:`News card title 3`,date:`1 Jun 2026`,description:`Placeholder description text. Ac laoreet est volutpat in, vestibulum ante ipsum primis.`,href:`#`}),O({id:6101,name:`Icon card title 1`,icon:`briefcase`,description:`Placeholder description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,href:`#`}),O({id:6102,name:`Icon card title 2`,icon:`book-open`,description:`Placeholder description text. Nam ac nunc neque, praesent posuere lobortis purus.`,href:`#`}),O({id:6103,name:`Icon card title 3`,icon:`books`,description:`Placeholder description text. Ac laoreet est volutpat in, vestibulum ante ipsum primis.`,href:`#`}),j=i(ce.main),M=l({mock:{resolveUri(e){return{ok:!0,data:A[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),N=l({mock:{resolveUri(e){return A[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}),de={title:`dxp components/Card`},P={cardMode:`Display Cards`,assets:[`matrix-asset://ntg/1001`]},fe=await j.markup(P,M),F={render:e=>j(e,M),args:P,argTypes:{assets:{control:`object`,description:`Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/1001, matrix-asset://ntg/1003.`}},parameters:{docs:{description:{story:`One selected asset -- one card, populated entirely from that asset's own metadata (title, description, image, date, category, url). Hover/tab-focus the card to see the hover/focus states.`},source:{code:fe,language:`html`,type:`code`}}}},I={cardMode:`Display Cards`,assets:[`matrix-asset://ntg/1001`,`matrix-asset://ntg/1003`]},L=await j.markup(I,M),R={render:()=>j(I,M),parameters:{docs:{description:{story:`Multiple selected assets -- the grid is the union of every asset's card.`},source:{code:L,language:`html`,type:`code`}}}},z={cardMode:`Display Cards`,assets:[`matrix-asset://ntg/9999999`]},B=await j.markup(z,M),V={render:()=>j(z,M),parameters:{docs:{description:{story:`An asset that fails to resolve at all contributes nothing, rendering an empty grid rather than throwing.`},source:{code:B,language:`html`,type:`code`}}}},H={cardMode:`Display Cards Icons`,assets:[`matrix-asset://ntg/6101`,`matrix-asset://ntg/6102`,`matrix-asset://ntg/6103`]},pe=await j.markup(H,M),U={render:()=>j(H,M),argTypes:{cardMode:{control:`radio`,options:[`Display Cards`,`Display Cards Icons`,`Homepage Cards`,`Mini Cards`,`News Cards`]},assets:{control:`object`,description:`Array of matrix-asset-uri strings. Icon/title/description are read from the same content-cardIcon/content-cardTitle/content-cardDescription metadata fields used by Homepage Cards mode.`}},parameters:{docs:{description:{story:`Card mode "Display Cards Icons" switches the grid to bordered icon + title + description cards -- same box styling as Display Cards mode, but an icon in place of an image and no tag/date/action-link elements at all.`},source:{code:pe,language:`html`,type:`code`}}}},W={cardMode:`Homepage Cards`,assets:[`matrix-asset://ntg/2101`,`matrix-asset://ntg/2102`,`matrix-asset://ntg/2103`,`matrix-asset://ntg/2104`,`matrix-asset://ntg/2105`]},me=await j.markup(W,N),G={render:()=>j(W,N),argTypes:{cardMode:{control:`radio`,options:[`Display Cards`,`Display Cards Icons`,`Homepage Cards`,`Mini Cards`,`News Cards`]},assets:{control:`object`,description:`Array of matrix-asset-uri strings. Icon/title/description are read from the same content-cardIcon/content-cardTitle/content-cardDescription metadata fields used by Display Cards mode.`}},parameters:{docs:{description:{story:'Card mode "Homepage Cards" switches the grid to icon + title + dotted-divider + description items, no card border/background -- same responsive 3/2/1-column layout as the other two modes, same `assets` field.'},source:{code:me,language:`html`,type:`code`}}}},K={cardMode:`Mini Cards`,assets:[`matrix-asset://ntg/3101`,`matrix-asset://ntg/3102`,`matrix-asset://ntg/3103`]},he=await j.markup(K,M),q={render:()=>j(K,M),argTypes:{cardMode:{control:`radio`,options:[`Display Cards`,`Display Cards Icons`,`Homepage Cards`,`Mini Cards`,`News Cards`]},assets:{control:`object`,description:`Array of matrix-asset-uri strings. Icon is read from the asset's "Icon" metadata field (a Font Awesome classic/thin name without the "fa-" prefix); label is the asset name; href is the asset url.`}},parameters:{docs:{description:{story:'Card mode "Mini Cards" switches the grid to asset-derived icon + label link items, in the same responsive 3/2/1-column layout as "Page" mode -- same `assets` field, different rendering.'},source:{code:he,language:`html`,type:`code`}}}},J={cardMode:`Mini Cards`,assets:[`matrix-asset://ntg/3101`,`matrix-asset://ntg/3104`]},ge=await j.markup(J,M),Y={render:()=>j(J,M),parameters:{docs:{description:{story:`An asset with no url renders as a non-interactive div instead of a link; an asset with no Icon metadata value simply omits the icon markup -- both degrade gracefully rather than erroring.`},source:{code:ge,language:`html`,type:`code`}}}},X={cardMode:`News Cards`,assets:[`matrix-asset://ntg/4101`,`matrix-asset://ntg/4102`,`matrix-asset://ntg/4103`],layoutOptions:{sectionHeading:`What we are doing`,viewAllButton:{text:`View all`,url:`/news`}}},_e=await j.markup(X,M),Z={render:()=>j(X,M),argTypes:{cardMode:{control:`radio`,options:[`Display Cards`,`Display Cards Icons`,`Homepage Cards`,`Mini Cards`,`News Cards`]},assets:{control:`object`,description:`Array of matrix-asset-uri strings. Rendered newest-first by news-datePublished, regardless of selection order -- try reordering these three demo URIs, the rendered order stays the same.`},layoutOptions:{control:`object`}},parameters:{docs:{description:{story:'Card mode "News Cards" defaults both `layoutOptions.showSectionHeading` and `showViewAllButton` on, wrapping the grid in an editable heading and "View all" button (both off by default in every other mode), and sorts the selected assets newest-first by news-datePublished. The three demo assets are deliberately selected out of date order to demonstrate the sort.'},source:{code:_e,language:`html`,type:`code`}}}},Q={cardMode:`Display Cards Icons`,assets:[`matrix-asset://ntg/6101`,`matrix-asset://ntg/6102`,`matrix-asset://ntg/6103`],layoutOptions:{showSectionHeading:!0,sectionHeading:`Get help with`}},ve=await j.markup(Q,M),$={render:()=>j(Q,M),argTypes:{cardMode:{control:`radio`,options:[`Display Cards`,`Display Cards Icons`,`Homepage Cards`,`Mini Cards`,`News Cards`]},layoutOptions:{control:`object`}},parameters:{docs:{description:{story:"`showSectionHeading` and `showViewAllButton` are two independent tick options, both off by default outside News Cards -- here only `showSectionHeading` is turned on, on Display Cards Icons, so no button renders."},source:{code:ve,language:`html`,type:`code`}}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: singlePageArgs,
  argTypes: {
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/1001, matrix-asset://ntg/1003.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'One selected asset -- one card, populated entirely from that asset\\'s own metadata (title, description, image, date, category, url). Hover/tab-focus the card to see the hover/focus states.'
      },
      source: {
        code: singlePageHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz(multiplePagesArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'Multiple selected assets -- the grid is the union of every asset\\'s card.'
      },
      source: {
        code: multiplePagesHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'An asset that fails to resolve at all contributes nothing, rendering an empty grid rather than throwing.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => squiz(displayCardsIconsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Display Cards Icons', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Icon/title/description are read from the same content-cardIcon/content-cardTitle/content-cardDescription metadata fields used by Homepage Cards mode.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Card mode "Display Cards Icons" switches the grid to bordered icon + title + description cards -- same box styling as Display Cards mode, but an icon in place of an image and no tag/date/action-link elements at all.'
      },
      source: {
        code: displayCardsIconsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => squiz(homepageCardsArgs, mockInfoBare),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Display Cards Icons', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Icon/title/description are read from the same content-cardIcon/content-cardTitle/content-cardDescription metadata fields used by Display Cards mode.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Card mode "Homepage Cards" switches the grid to icon + title + dotted-divider + description items, no card border/background -- same responsive 3/2/1-column layout as the other two modes, same \`assets\` field.'
      },
      source: {
        code: homepageCardsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => squiz(miniCardsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Display Cards Icons', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Icon is read from the asset\\'s "Icon" metadata field (a Font Awesome classic/thin name without the "fa-" prefix); label is the asset name; href is the asset url.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Card mode "Mini Cards" switches the grid to asset-derived icon + label link items, in the same responsive 3/2/1-column layout as "Page" mode -- same \`assets\` field, different rendering.'
      },
      source: {
        code: miniCardsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => squiz(miniCardsNoLinkArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'An asset with no url renders as a non-interactive div instead of a link; an asset with no Icon metadata value simply omits the icon markup -- both degrade gracefully rather than erroring.'
      },
      source: {
        code: miniCardsNoLinkHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(newsCardsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Display Cards Icons', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Rendered newest-first by news-datePublished, regardless of selection order -- try reordering these three demo URIs, the rendered order stays the same.'
    },
    layoutOptions: {
      control: 'object'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Card mode "News Cards" defaults both \`layoutOptions.showSectionHeading\` and \`showViewAllButton\` on, wrapping the grid in an editable heading and "View all" button (both off by default in every other mode), and sorts the selected assets newest-first by news-datePublished. The three demo assets are deliberately selected out of date order to demonstrate the sort.'
      },
      source: {
        code: newsCardsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => squiz(displayCardsIconsWithHeadingArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Display Cards Icons', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    layoutOptions: {
      control: 'object'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '\`showSectionHeading\` and \`showViewAllButton\` are two independent tick options, both off by default outside News Cards -- here only \`showSectionHeading\` is turned on, on Display Cards Icons, so no button renders.'
      },
      source: {
        code: displayCardsIconsWithHeadingHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...$.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: singlePageArgs,
  argTypes: {
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/1001, matrix-asset://ntg/1003.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'One selected asset -- one card, populated entirely from that asset\\'s own metadata (title, description, image, date, category, url). Hover/tab-focus the card to see the hover/focus states.'
      },
      source: {
        code: singlePageHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz(multiplePagesArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'Multiple selected assets -- the grid is the union of every asset\\'s card.'
      },
      source: {
        code: multiplePagesHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'An asset that fails to resolve at all contributes nothing, rendering an empty grid rather than throwing.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => squiz(displayCardsIconsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Display Cards Icons', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Icon/title/description are read from the same content-cardIcon/content-cardTitle/content-cardDescription metadata fields used by Homepage Cards mode.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Card mode "Display Cards Icons" switches the grid to bordered icon + title + description cards -- same box styling as Display Cards mode, but an icon in place of an image and no tag/date/action-link elements at all.'
      },
      source: {
        code: displayCardsIconsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => squiz(homepageCardsArgs, mockInfoBare),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Display Cards Icons', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Icon/title/description are read from the same content-cardIcon/content-cardTitle/content-cardDescription metadata fields used by Display Cards mode.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Card mode "Homepage Cards" switches the grid to icon + title + dotted-divider + description items, no card border/background -- same responsive 3/2/1-column layout as the other two modes, same \`assets\` field.'
      },
      source: {
        code: homepageCardsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => squiz(miniCardsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Display Cards Icons', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Icon is read from the asset\\'s "Icon" metadata field (a Font Awesome classic/thin name without the "fa-" prefix); label is the asset name; href is the asset url.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Card mode "Mini Cards" switches the grid to asset-derived icon + label link items, in the same responsive 3/2/1-column layout as "Page" mode -- same \`assets\` field, different rendering.'
      },
      source: {
        code: miniCardsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => squiz(miniCardsNoLinkArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'An asset with no url renders as a non-interactive div instead of a link; an asset with no Icon metadata value simply omits the icon markup -- both degrade gracefully rather than erroring.'
      },
      source: {
        code: miniCardsNoLinkHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(newsCardsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Display Cards Icons', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Rendered newest-first by news-datePublished, regardless of selection order -- try reordering these three demo URIs, the rendered order stays the same.'
    },
    layoutOptions: {
      control: 'object'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Card mode "News Cards" defaults both \`layoutOptions.showSectionHeading\` and \`showViewAllButton\` on, wrapping the grid in an editable heading and "View all" button (both off by default in every other mode), and sorts the selected assets newest-first by news-datePublished. The three demo assets are deliberately selected out of date order to demonstrate the sort.'
      },
      source: {
        code: newsCardsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => squiz(displayCardsIconsWithHeadingArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Display Cards Icons', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    layoutOptions: {
      control: 'object'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '\`showSectionHeading\` and \`showViewAllButton\` are two independent tick options, both off by default outside News Cards -- here only \`showSectionHeading\` is turned on, on Display Cards Icons, so no button renders.'
      },
      source: {
        code: displayCardsIconsWithHeadingHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...$.parameters?.docs?.source}}},ye=[`SinglePage`,`MultiplePages`,`Unresolvable`,`DisplayCardsIcons`,`HomepageCards`,`MiniCards`,`MiniCardsNoLink`,`NewsCards`,`DisplayCardsIconsWithHeading`]}))();export{U as DisplayCardsIcons,$ as DisplayCardsIconsWithHeading,G as HomepageCards,q as MiniCards,Y as MiniCardsNoLink,R as MultiplePages,Z as NewsCards,F as SinglePage,V as Unresolvable,ye as __namedExportsOrder,de as default};
//# sourceMappingURL=card.stories-bxfAuMdr.js.map