import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./card-DCcP7Xt5.js";import{n,t as r}from"./component.helper-CkXZPIWM.js";import{n as i,t as a}from"./squizStoryRenderer-4zIdV6yt.js";import{n as o,r as s,t as c}from"./xss-Cvy76lHc.js";import{n as l,t as u}from"./squizInfo.mock-x2sHGyES.js";function d(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}async function f(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return d(await t.resolveUri(e))}catch{return null}}function p(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/\d+(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function ee(e){let t=/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)(?::.+)?$/.exec(String(e??``));return t?t[1]:null}async function te(e){let t=p(e),n=ee(e);if(!t||!n)return[];let r=`${w}?${T}=${encodeURIComponent(n)}`,i;try{let e=await fetch(r);if(!e.ok)return[];i=await e.json()}catch{return[]}return Array.isArray(i)?i.map(e=>e?.id).filter(Boolean).map(e=>`matrix-asset://${t}/${e}`):[]}async function m(e,t,n){let r=h(e.metadata||{},`content-cardImagePhoto`);if(r){let e=/^matrix-asset:\/\//.test(r)?r:t?`matrix-asset://${t}/${r}`:null,i=e?await f(e,n):null,a=i?.url||(Array.isArray(i?.urls)?i.urls[0]:``)||``;if(a)return{url:a,alt:i.name||``,width:null,height:null}}let i=e.thumbnail;return i?{url:i.url||``,alt:i.alt||i.title||``,width:i.width||null,height:i.height||null}:null}function h(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}async function ne(e,t,n){if(!e)return null;let r=e.metadata||{};return{title:h(r,`content-cardTitle`)||e.name||``,description:h(r,`content-cardDescription`),image:await m(e,t,n),date:h(r,`Date`),tagLabel:h(r,`Category`),href:e.url||``,actionText:h(r,`content-cardButtonText`)||v}}async function re(e,t){let n=Array.isArray(e)?e:[];return(await Promise.all(n.map(async e=>{let n=await ne(await f(e,t),p(e),t);return n?[n]:[]}))).flat()}function ie(e,t){let n=t.showImage?e.image:null,r=t.showTags?e.tagLabel:``,i=t.showDate?e.date:``,a=`card-title-${Math.random().toString(36).slice(2,9)}`,s=n?`
    <div class="card__image">
      <img src="${o(n.url)}" alt="${c(n.alt)}"${n.width?` width="${n.width}"`:``}${n.height?` height="${n.height}"`:``} />
    </div>`:``,l=r||i?`
      <div class="card__header">
        ${r?`<span class="card__tag">${c(r)}</span>`:``}
        ${i?`<span class="card__date">${c(i)}</span>`:``}
      </div>`:``,u=e.description?`<p class="card__description">${c(e.description)}</p>`:``,d=e.actionText?`
      <div class="card__footer">
        <span class="card__action">${c(e.actionText)} <span class="card__action-icon">${_}</span></span>
      </div>`:``,f=`${s}
    <div class="card__content">${l}
      <div class="card__body">
        <h3 class="card__title" id="${a}">${c(e.title)}</h3>
        ${u}
      </div>${d}
    </div>`;return e.href?`<a class="card" href="${o(e.href)}" aria-labelledby="${a}">${f}</a>`:`<article class="card">${f}</article>`}async function ae(e,t){let n=Array.isArray(e)?e:[];return(await Promise.all(n.map(async e=>{let n=await f(e,t);return n?{icon:h(n.metadata||{},`content-cardIcon`),label:n.name||``,href:n.url||``}:null}))).filter(Boolean)}function oe(e){if(!e)return null;let t=e.metadata||{};return{icon:h(t,`content-cardIcon`),title:h(t,`content-cardTitle`)||e.name||``,description:h(t,`content-cardDescription`),href:e.url||``}}async function se(e,t){let n=Array.isArray(e)?e:[];return(await Promise.all(n.map(async e=>{let n=oe(await f(e,t));return n?[n]:[]}))).flat()}function ce(e){let t=`homepage-card-title-${Math.random().toString(36).slice(2,9)}`,n=e.icon?`<i class="fal fa-lg fa-${c(e.icon)}" aria-hidden="true"></i>`:``,r=e.description?`<p class="homepage-card__description">${c(e.description)}</p>`:``,i=`
    <h3 class="homepage-card__title" id="${t}">${n}${c(e.title)}</h3>
    <div class="homepage-card__divider" aria-hidden="true"></div>
    ${r}`;return e.href?`<a class="homepage-card" href="${o(e.href)}" aria-labelledby="${t}">${i}</a>`:`<div class="homepage-card">${i}</div>`}function le(e){let{icon:t=``,label:n=``,href:r=``}=e||{},i=`
    <span class="mini-card__icon" aria-hidden="true">${t?`<i class="fa-thin fa-${c(t)}"></i>`:``}</span>
    <span class="mini-card__label">${c(n)}</span>`;return r?`<a class="mini-card" href="${o(r)}">${i}</a>`:`<div class="mini-card">${i}</div>`}async function ue(e,t,n){if(!e)return null;let r=e.metadata||{};return{title:h(r,`content-cardTitle`)||e.name||``,description:h(r,`content-cardDescription`),image:await m(e,t,n),date:h(r,`news-datePublished`),href:e.url||``}}function g(e){let t=Date.parse(e||``);return Number.isNaN(t)?-1/0:t}async function de(e,t){let n=Array.isArray(e)?e:[];return(await Promise.all(n.map(async e=>{let n=await ue(await f(e,t),p(e),t);return n?[n]:[]}))).flat().sort((e,t)=>g(t.date)-g(e.date)).slice(0,S)}function fe(e,t){let n=t.showImage?e.image:null,r=t.showDate?e.date:``,i=`news-card-title-${Math.random().toString(36).slice(2,9)}`,a=n?`
    <div class="card__image">
      <img src="${o(n.url)}" alt="${c(n.alt)}"${n.width?` width="${n.width}"`:``}${n.height?` height="${n.height}"`:``} />
    </div>`:``,s=e.description?`<p class="card__description">${c(e.description)}</p>`:``,l=`${a}
    <div class="card__content">
      <div class="news-card__header">
        <span class="news-card__icon" aria-hidden="true"><i class="fa-thin fa-${y}"></i></span>
        ${t.showTags?`<span class="news-card__tag">${c(b)}</span>`:``}
        ${r?`<span class="news-card__date">${c(r)}</span>`:``}
      </div>
      <div class="news-card__divider" aria-hidden="true"></div>
      <div class="card__body">
        <h3 class="card__title" id="${i}">${c(e.title)}</h3>
        ${s}
      </div>
    </div>`;return e.href?`<a class="card" href="${o(e.href)}" aria-labelledby="${i}">${l}</a>`:`<article class="card">${l}</article>`}function pe(e,t,n){return`
<div ${t} class="news-cards">
  <div class="news-cards__header">
    <h2 class="news-cards__title">${c(he)}</h2>
    <a class="button news-cards__view-all" href="${C}">${c(x)}</a>
  </div>
  <div class="card-grid">
    ${e.map(e=>fe(e,n)).join(``)}
  </div>
</div>
`}async function me(e,t){let n=await te(t),r=Array.isArray(e)?e:[],i=new Set;return[...r,...n].filter(e=>i.has(e)?!1:(i.add(e),!0))}var _,v,y,b,he,x,S,C,w,T,E,ge=e((()=>{s(),n(),_=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,v=`Find out more`,y=`file-lines`,b=`News`,he=`What we are doing`,x=`View all`,S=3,C=`%globals_site_metadata_site-news^as_asset:asset_url%`,w=`https://nt.gov.au/web-design-system/listings/asset-children-json-feed`,T=`rootId`,E={async main(e={},t={}){let{cardMode:n=`Display Cards`,assets:i=[],parentAsset:a=``,visibilityOptions:o={}}=e,{showImage:s=!0,showTags:c=!0,showDate:l=!0}=o,u=await me(i,a),d=r(`card`,e),f={showImage:s,showTags:c,showDate:l};return n===`Mini Cards`?`
<div ${d} class="card-grid">
  ${(await ae(u,t.fns)).map(le).join(``)}
</div>
`:n===`Homepage Cards`?`
<div ${d} class="card-grid">
  ${(await se(u,t.fns)).map(ce).join(``)}
</div>
`:n===`News Cards`?pe(await de(u,t.fns),d,f):`
<div ${d} class="card-grid">
  ${(await re(u,t.fns)).map(e=>ie(e,f)).join(``)}
</div>
`}}}));function D({id:e,name:t,category:n,date:r,description:i,mockImage:a}){let o=``;a&&(o=`${e}9`,j[o]={id:o,type:`image`,name:`${t} photo`,url:`https://picsum.photos/id/${e}/640/480`,urls:[`https://picsum.photos/id/${e}/640/480`]});let s={id:String(e),type:`pageStandard`,name:t,url:`https://example.com/pages/${e}`,metadata:{Category:[n],Date:[r],"content-cardDescription":[i],...o?{"content-cardImagePhoto":[o]}:{}},child_count:0};return j[String(e)]=s,s}function O({id:e,name:t,icon:n,href:r}){let i={id:String(e),type:`dataRecord`,name:t,url:r,metadata:{"content-cardIcon":[n]},child_count:0};return j[String(e)]=i,i}function k({id:e,name:t,icon:n,description:r,href:i}){let a={id:String(e),type:`pageStandard`,name:t,url:i,metadata:{"content-cardIcon":[n],"content-cardDescription":[r]},child_count:0};return j[String(e)]=a,a}function A({id:e,name:t,date:n,description:r,href:i}){let a=`${e}9`;j[a]={id:a,type:`image`,name:`${t} photo`,url:`https://picsum.photos/id/${e}/640/480`,urls:[`https://picsum.photos/id/${e}/640/480`]};let o={id:String(e),type:`pageStandard`,name:t,url:i,metadata:{"content-cardDescription":[r],"content-cardImagePhoto":[a],"news-datePublished":[n]},child_count:0};return j[String(e)]=o,o}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,_e,Z,Q,ve,$,ye;await e((async()=>{a(),u(),t(),ge(),j={},D({mockImage:!0,id:1001,name:`Community Consultation Opens for Major Project`,category:`News`,date:`17 Feb 2025`,description:`Residents invited to provide feedback on proposed infrastructure improvements in the greater Darwin area.`}),D({mockImage:!0,id:1003,name:`Grants Information Session`,category:`Event`,date:`2 Mar 2025`,description:`Join a free information session on the upcoming community grants round.`}),O({id:3101,name:`Grant applicants`,icon:`briefcase`,href:`#`}),O({id:3102,name:`Service providers`,icon:`earth-americas`,href:`#`}),O({id:3103,name:`Get in touch`,icon:`circle-info`,href:`#`}),O({id:3104,name:`No icon, no link`,icon:``,href:``}),k({id:2101,name:`Card title 1`,icon:`circle`,description:`Placeholder description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,href:`#`}),k({id:2102,name:`Card title 2`,icon:`square`,description:`Placeholder description text. Nam ac nunc neque, praesent posuere lobortis purus.`,href:`#`}),k({id:2103,name:`Card title 3`,icon:`star`,description:`Placeholder description text. Ac laoreet est volutpat in, vestibulum ante ipsum primis.`,href:`#`}),k({id:2104,name:`Card title 4`,icon:`bell`,description:`Placeholder description text. Sed do eiusmod tempor incididunt ut labore et dolore.`,href:`#`}),k({id:2105,name:`Card title 5`,icon:`gear`,description:`Placeholder description text. Ut enim ad minim veniam, quis nostrud exercitation.`,href:`#`}),A({id:4101,name:`News card title 1`,date:`10 Jun 2026`,description:`Placeholder description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,href:`#`}),A({id:4102,name:`News card title 2`,date:`26 Jun 2026`,description:`Placeholder description text. Nam ac nunc neque, praesent posuere lobortis purus.`,href:`#`}),A({id:4103,name:`News card title 3`,date:`1 Jun 2026`,description:`Placeholder description text. Ac laoreet est volutpat in, vestibulum ante ipsum primis.`,href:`#`}),M=i(E.main),N=l({mock:{resolveUri(e){return{ok:!0,data:j[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),P={title:`dxp components/Card`},F={cardMode:`Display Cards`,assets:[`matrix-asset://ntg/1001`]},I=await M.markup(F,N),L={render:e=>M(e,N),args:F,argTypes:{assets:{control:`object`,description:`Array of matrix-asset-uri strings. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/1001, matrix-asset://ntg/1003.`}},parameters:{docs:{description:{story:`One selected asset -- one card, populated entirely from that asset's own metadata (title, description, image, date, category, url). Hover/tab-focus the card to see the hover/focus states.`},source:{code:I,language:`html`,type:`code`}}}},R={cardMode:`Display Cards`,assets:[`matrix-asset://ntg/1001`,`matrix-asset://ntg/1003`]},z=await M.markup(R,N),B={render:()=>M(R,N),parameters:{docs:{description:{story:`Multiple selected assets -- the grid is the union of every asset's card.`},source:{code:z,language:`html`,type:`code`}}}},V={cardMode:`Display Cards`,assets:[`matrix-asset://ntg/9999999`]},H=await M.markup(V,N),U={render:()=>M(V,N),parameters:{docs:{description:{story:`An asset that fails to resolve at all contributes nothing, rendering an empty grid rather than throwing.`},source:{code:H,language:`html`,type:`code`}}}},W={cardMode:`Homepage Cards`,assets:[`matrix-asset://ntg/2101`,`matrix-asset://ntg/2102`,`matrix-asset://ntg/2103`,`matrix-asset://ntg/2104`,`matrix-asset://ntg/2105`]},G=await M.markup(W,N),K={render:()=>M(W,N),argTypes:{cardMode:{control:`radio`,options:[`Display Cards`,`Homepage Cards`,`Mini Cards`,`News Cards`]},assets:{control:`object`,description:`Array of matrix-asset-uri strings. Icon/title/description are read from the same content-cardIcon/content-cardTitle/content-cardDescription metadata fields used by Display Cards mode.`}},parameters:{docs:{description:{story:'Card mode "Homepage Cards" switches the grid to icon + title + dotted-divider + description items, no card border/background -- same responsive 3/2/1-column layout as the other two modes, same `assets` field.'},source:{code:G,language:`html`,type:`code`}}}},q={cardMode:`Mini Cards`,assets:[`matrix-asset://ntg/3101`,`matrix-asset://ntg/3102`,`matrix-asset://ntg/3103`]},J=await M.markup(q,N),Y={render:()=>M(q,N),argTypes:{cardMode:{control:`radio`,options:[`Display Cards`,`Homepage Cards`,`Mini Cards`,`News Cards`]},assets:{control:`object`,description:`Array of matrix-asset-uri strings. Icon is read from the asset's "Icon" metadata field (a Font Awesome classic/thin name without the "fa-" prefix); label is the asset name; href is the asset url.`}},parameters:{docs:{description:{story:'Card mode "Mini Cards" switches the grid to asset-derived icon + label link items, in the same responsive 3/2/1-column layout as "Page" mode -- same `assets` field, different rendering.'},source:{code:J,language:`html`,type:`code`}}}},X={cardMode:`Mini Cards`,assets:[`matrix-asset://ntg/3101`,`matrix-asset://ntg/3104`]},_e=await M.markup(X,N),Z={render:()=>M(X,N),parameters:{docs:{description:{story:`An asset with no url renders as a non-interactive div instead of a link; an asset with no Icon metadata value simply omits the icon markup -- both degrade gracefully rather than erroring.`},source:{code:_e,language:`html`,type:`code`}}}},Q={cardMode:`News Cards`,assets:[`matrix-asset://ntg/4101`,`matrix-asset://ntg/4102`,`matrix-asset://ntg/4103`]},ve=await M.markup(Q,N),$={render:()=>M(Q,N),argTypes:{cardMode:{control:`radio`,options:[`Display Cards`,`Homepage Cards`,`Mini Cards`,`News Cards`]},assets:{control:`object`,description:`Array of matrix-asset-uri strings. Rendered newest-first by news-datePublished, regardless of selection order -- try reordering these three demo URIs, the rendered order stays the same.`}},parameters:{docs:{description:{story:`Card mode "News Cards" wraps the grid in a fixed "What we are doing" heading and "View all" button (href is a Squiz site-metadata macro, resolved by Squiz itself, not this component), and sorts the selected assets newest-first by news-datePublished. The three demo assets are deliberately selected out of date order to demonstrate the sort.`},source:{code:ve,language:`html`,type:`code`}}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => squiz(homepageCardsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Homepage Cards', 'Mini Cards', 'News Cards']
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
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => squiz(miniCardsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Homepage Cards', 'Mini Cards', 'News Cards']
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
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => squiz(newsCardsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Rendered newest-first by news-datePublished, regardless of selection order -- try reordering these three demo URIs, the rendered order stays the same.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Card mode "News Cards" wraps the grid in a fixed "What we are doing" heading and "View all" button (href is a Squiz site-metadata macro, resolved by Squiz itself, not this component), and sorts the selected assets newest-first by news-datePublished. The three demo assets are deliberately selected out of date order to demonstrate the sort.'
      },
      source: {
        code: newsCardsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...$.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => squiz(homepageCardsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Homepage Cards', 'Mini Cards', 'News Cards']
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
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => squiz(miniCardsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Homepage Cards', 'Mini Cards', 'News Cards']
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
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => squiz(newsCardsArgs, mockInfo),
  argTypes: {
    cardMode: {
      control: 'radio',
      options: ['Display Cards', 'Homepage Cards', 'Mini Cards', 'News Cards']
    },
    assets: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings. Rendered newest-first by news-datePublished, regardless of selection order -- try reordering these three demo URIs, the rendered order stays the same.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Card mode "News Cards" wraps the grid in a fixed "What we are doing" heading and "View all" button (href is a Squiz site-metadata macro, resolved by Squiz itself, not this component), and sorts the selected assets newest-first by news-datePublished. The three demo assets are deliberately selected out of date order to demonstrate the sort.'
      },
      source: {
        code: newsCardsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...$.parameters?.docs?.source}}},ye=[`SinglePage`,`MultiplePages`,`Unresolvable`,`HomepageCards`,`MiniCards`,`MiniCardsNoLink`,`NewsCards`]}))();export{K as HomepageCards,Y as MiniCards,Z as MiniCardsNoLink,B as MultiplePages,$ as NewsCards,L as SinglePage,U as Unresolvable,ye as __namedExportsOrder,P as default};
//# sourceMappingURL=card.stories-KfCjUA-o.js.map