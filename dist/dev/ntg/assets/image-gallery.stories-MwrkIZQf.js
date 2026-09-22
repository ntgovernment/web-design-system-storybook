import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{r as a,t as o}from"./xss-Cvy76lHc.js";import{n as s,t as c}from"./squizInfo.mock-D4VTpLG1.js";function l(e){if(!e)return{url:``,thumbUrl:``,alt:``,caption:``,width:null,height:null};if(typeof e==`string`)return{url:e,thumbUrl:e,alt:``,caption:``,width:null,height:null};let t=e.imageVariations||{},n=t.original||{},r=t.small?.[0]||n;return{url:n.url||``,thumbUrl:r.url||n.url||``,alt:e.alt||e.name||``,caption:e.caption||``,width:n.width||null,height:n.height||null}}function u(e){let t=/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function d(e){if(!e||!e.url)return null;let t=Array.isArray(e.cardDescription)?e.cardDescription[0]:``;return{url:e.url,thumbUrl:e.url,alt:e.name||``,caption:t||``,width:null,height:null}}async function f(e,t){let n=u(e);if(!n||!t)return[];let r=`${t}?${S}=${encodeURIComponent(n)}`,i;try{let e=await fetch(r);if(!e.ok)return[];i=await e.json()}catch{return[]}return Array.isArray(i)?i.map(d).filter(Boolean):[]}async function p(e,t){if(!e)return null;try{let n=await t?.resolveUri?.(e);return n&&`data`in n?n.data:n??null}catch{return null}}function m(e){if(!e)return null;if(e.imageVariations?.original?.url)return l(e);let t=e.url||(Array.isArray(e.urls)?e.urls[0]:``)||``;return t?{url:t,thumbUrl:t,alt:e.alt||e.name||e.short_name||``,caption:e.caption||e.name||``,width:null,height:null}:null}async function h(e,t){return!Array.isArray(e)||e.length===0?[]:(await Promise.all(e.map(async e=>{let n=m(await p(e,t));return n?[n]:[]}))).flat()}async function g(e,t,n,r){let[i,a]=await Promise.all([h(e,n),f(t,r)]),o=new Set;return[...i,...a].filter(e=>o.has(e.url)?!1:(o.add(e.url),!0))}var _,v,y,b,x,S,C,w=e((()=>{a(),t(),_=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="7" x2="10" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,v=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,y=4,b=16,x=`320 / 240`,S=`rootId`,C={async main(e={},t={}){let{imageSources:r=[],imageFolder:i=``}=e,a=await g(r,i,t.fns,t.env?.CONTENT_API_URL),s=`--gallery-columns: ${y}; --gallery-gap: ${b}px; --gallery-aspect-ratio: ${x};`,c=a.map((e,t)=>{let n=e.caption?`<span class="image-gallery__overlay"><span class="image-gallery__overlay-caption">${o(e.caption)}</span></span>`:``;return`
      <button type="button" class="image-gallery__item" data-gallery-index="${t}" aria-label="Open image ${t+1}${e.alt?`: ${o(e.alt)}`:``}">
        <img class="image-gallery__thumb" src="${o(e.thumbUrl)}" alt="${o(e.alt)}" loading="lazy" data-gallery-loading${e.width?` width="${e.width}"`:``}${e.height?` height="${e.height}"`:``} />
        ${n}
      </button>`}).join(``),l=a.length>1,u=a.map((e,t)=>{let n=e.caption?`<figcaption class="image-gallery-lightbox__caption"><p class="image-gallery-lightbox__title">${o(e.caption)}</p></figcaption>`:``;return`
      <figure class="image-gallery-lightbox__slide" data-slide-index="${t}"${t===0?``:` hidden`}>
        <img class="image-gallery-lightbox__image" src="${o(e.url)}" alt="${o(e.alt)}"${e.width?` width="${e.width}"`:``}${e.height?` height="${e.height}"`:``} />
        ${n}
      </figure>`}).join(``),d=l?a.map((e,t)=>`
      <button type="button" class="image-gallery-lightbox__thumbnail-button${t===0?` image-gallery-lightbox__thumbnail-button--selected`:``}" data-thumbnail-index="${t}" aria-label="Go to image ${t+1}">
        <img class="image-gallery-lightbox__thumbnail-image" src="${o(e.thumbUrl)}" alt="" />
      </button>`).join(``):``,f=l?`<button type="button" class="image-gallery-lightbox__nav-prev" aria-label="Previous image">&#8249;</button>`:``,p=l?`<button type="button" class="image-gallery-lightbox__nav-next" aria-label="Next image">&#8250;</button>`:``;return`
<div ${n(`image-gallery`,e)} class="image-gallery-root">
  <div class="image-gallery" style="${s}">
    ${c}
  </div>

  <div class="image-gallery-lightbox" data-image-gallery-lightbox hidden role="dialog" aria-modal="true" aria-label="Image viewer">
    <div class="image-gallery-lightbox__container">
      <div class="image-gallery-lightbox__header">
        <span class="image-gallery-lightbox__counter"><span data-lightbox-current>1</span> / ${a.length}</span>
        <div class="image-gallery-lightbox__controls">
          <button type="button" class="image-gallery-lightbox__zoom-out" data-zoom-out aria-label="Zoom out" disabled>${v}</button>
          <button type="button" class="image-gallery-lightbox__zoom-in" data-zoom-in aria-label="Zoom in">${_}</button>
          <button type="button" class="image-gallery-lightbox__close" aria-label="Close image viewer">&#10005;</button>
        </div>
      </div>
      <div class="image-gallery-lightbox__main">
        ${f}
        <div class="image-gallery-lightbox__viewer">
          ${u}
        </div>
        ${p}
      </div>
      ${l?`<div class="image-gallery-lightbox__thumbnails">${d}</div>`:``}
    </div>
  </div>
</div>
`}}}));function T({id:e,name:t,alt:n}){return{type:`type_image`,name:t,alt:n,caption:t,imageVariations:{original:{url:`https://picsum.photos/id/${e}/640/480`,width:640,height:480,mimeType:`image/jpeg`,byteSize:65536,sha1Hash:`${e}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`.slice(0,40),aspectRatio:`4:3`}}}}function E(e){return D[e]??null}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;await e((async()=>{i(),c(),w(),D={"matrix-asset://demo-single-image":T({id:1015,name:`Mountain Serenity`,alt:`Scenic mountain landscape with gradient sky and green fields`}),"matrix-asset://demo-single-image-2":T({id:1016,name:`Urban Exploration`,alt:`Urban scene with grey tones and industrial elements`})},O=r(C.main),k=s({mock:{resolveUri:E}}),A={title:`dxp components/Image Gallery`},j={imageSources:[`matrix-asset://demo-single-image`]},M=await O.markup(j,k),N={render:e=>O(e,k),args:j,argTypes:{imageSources:{control:`object`,description:`Array of matrix-asset-uri strings, each a single image. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://demo-single-image, matrix-asset://demo-single-image-2.`}},parameters:{docs:{description:{story:`imageSources has one entry pointing directly at a single image asset -- the gallery shows just that one image.`},source:{code:M,language:`html`,type:`code`}}}},P={imageSources:[`matrix-asset://demo-single-image`,`matrix-asset://demo-single-image-2`]},F=await O.markup(P,k),I={render:()=>O(P,k),parameters:{docs:{description:{story:`imageSources has two individually-picked image entries. Demonstrates that the field supports selecting several images directly, not just one.`},source:{code:F,language:`html`,type:`code`}}}},L={imageSources:[`matrix-asset://does-not-exist`]},R=await O.markup(L,k),z={render:()=>O(L,k),parameters:{docs:{description:{story:`A source that fails to resolve at all contributes nothing, rendering an empty gallery rather than throwing.`},source:{code:R,language:`html`,type:`code`}}}},B=[{id:`2001`,name:`coastal-track.jpg`,url:`https://picsum.photos/id/1043/1200/800`,cardTitle:[`coastal-track.jpg`],cardDescription:[`Coastal walking track at sunrise.`],cardPhoto:[],cardIcon:[`briefcase`],"content-cardButtonText":[],"content-cardTopic":[],cardGroupLinks:[]},{id:`2002`,name:`lighthouse.jpg`,url:`https://picsum.photos/id/1044/1200/800`,cardTitle:[`lighthouse.jpg`],cardDescription:[],cardPhoto:[],cardIcon:[`briefcase`],"content-cardButtonText":[],"content-cardTopic":[],cardGroupLinks:[]}],V=`https://fake-content-api.example/child-list`,H=globalThis.fetch?.bind(globalThis),globalThis.fetch=async(e,...t)=>typeof e==`string`&&e.startsWith(V)?{ok:!0,json:async()=>B}:H(e,...t),U={...k,env:{...k.env,CONTENT_API_URL:V}},W={imageFolder:`matrix-asset://ntg/2000`},G=await O.markup(W,U),K={render:()=>O(W,U),parameters:{docs:{description:{story:`imageFolder is set to a folder asset -- the gallery shows every image CONTENT_API_URL returns for it (mocked here via a stubbed global fetch; real shape confirmed against a live Squiz backend via the content-api-picker debug component).`},source:{code:G,language:`html`,type:`code`}}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: singleImageArgs,
  argTypes: {
    imageSources: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings, each a single image. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://demo-single-image, matrix-asset://demo-single-image-2.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'imageSources has one entry pointing directly at a single image asset -- the gallery shows just that one image.'
      },
      source: {
        code: singleImageHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => squiz(multipleImagesArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageSources has two individually-picked image entries. Demonstrates that the field supports selecting several images directly, not just one.'
      },
      source: {
        code: multipleImagesHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'A source that fails to resolve at all contributes nothing, rendering an empty gallery rather than throwing.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => squiz(folderArgs, folderInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageFolder is set to a folder asset -- the gallery shows every image CONTENT_API_URL returns for it (mocked here via a stubbed global fetch; real shape confirmed against a live Squiz backend via the content-api-picker debug component).'
      },
      source: {
        code: folderHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: singleImageArgs,
  argTypes: {
    imageSources: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings, each a single image. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://demo-single-image, matrix-asset://demo-single-image-2.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'imageSources has one entry pointing directly at a single image asset -- the gallery shows just that one image.'
      },
      source: {
        code: singleImageHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => squiz(multipleImagesArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageSources has two individually-picked image entries. Demonstrates that the field supports selecting several images directly, not just one.'
      },
      source: {
        code: multipleImagesHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'A source that fails to resolve at all contributes nothing, rendering an empty gallery rather than throwing.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => squiz(folderArgs, folderInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageFolder is set to a folder asset -- the gallery shows every image CONTENT_API_URL returns for it (mocked here via a stubbed global fetch; real shape confirmed against a live Squiz backend via the content-api-picker debug component).'
      },
      source: {
        code: folderHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q=[`SingleImage`,`MultipleImages`,`Unresolvable`,`Folder`]}))();export{K as Folder,I as MultipleImages,N as SingleImage,z as Unresolvable,q as __namedExportsOrder,A as default};
//# sourceMappingURL=image-gallery.stories-MwrkIZQf.js.map