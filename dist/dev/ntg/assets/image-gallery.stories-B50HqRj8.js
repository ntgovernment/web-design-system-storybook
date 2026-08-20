import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-CkXZPIWM.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-x2sHGyES.js";function s(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function c(e){if(!e)return{url:``,thumbUrl:``,alt:``,caption:``,width:null,height:null};if(typeof e==`string`)return{url:e,thumbUrl:e,alt:``,caption:``,width:null,height:null};let t=e.imageVariations||{},n=t.original||{},r=t.small?.[0]||n;return{url:n.url||``,thumbUrl:r.url||n.url||``,alt:e.alt||e.name||``,caption:e.caption||``,width:n.width||null,height:n.height||null}}function l(e){let t=/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function u(e){if(!e||!e.url)return null;let t=Array.isArray(e.metadata?.cardDescription)?e.metadata.cardDescription[0]:``;return{url:e.url,thumbUrl:e.url,alt:e.name||``,caption:t||``,width:null,height:null}}async function d(e){let t=l(e);if(!t)return[];let n=`${b}?${x}=${encodeURIComponent(t)}`,r;try{let e=await fetch(n);if(!e.ok)return[];r=await e.json()}catch{return[]}return Array.isArray(r)?r.map(u).filter(Boolean):[]}function f(e){if(!e)return null;if(e.imageVariations?.original?.url)return c(e);let t=e.url||(Array.isArray(e.urls)?e.urls[0]:``)||``;return t?{url:t,thumbUrl:t,alt:e.alt||e.name||e.short_name||``,caption:e.caption||e.name||``,width:null,height:null}:null}async function p(e,t){return!Array.isArray(e)||e.length===0||typeof t?.resolveUri!=`function`?[]:(await Promise.all(e.map(async e=>{if(!e)return[];let n;try{n=await t.resolveUri(e)}catch{return[]}if(!n)return[];let r=f(n);return r?[r]:[]}))).flat()}async function m(e,t,n){let[r,i]=await Promise.all([p(e,n),d(t)]),a=new Set;return[...r,...i].filter(e=>a.has(e.url)?!1:(a.add(e.url),!0))}var h,g,_,v,y,b,x,S,C=e((()=>{t(),h=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="7" x2="10" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,g=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,_=4,v=16,y=`320 / 240`,b=`https://nt.gov.au/web-design-system/listings/asset-children-json-feed`,x=`rootId`,S={async main(e={},t={}){let{imageSources:r=[],imageFolder:i=``}=e,a=await m(r,i,t.fns),o=`--gallery-columns: ${_}; --gallery-gap: ${v}px; --gallery-aspect-ratio: ${y};`,c=a.map((e,t)=>{let n=e.caption?`<span class="image-gallery__overlay"><span class="image-gallery__overlay-caption">${s(e.caption)}</span></span>`:``;return`
      <button type="button" class="image-gallery__item" data-gallery-index="${t}" aria-label="Open image ${t+1}${e.alt?`: ${s(e.alt)}`:``}">
        <img class="image-gallery__thumb" src="${s(e.thumbUrl)}" alt="${s(e.alt)}" loading="lazy" data-gallery-loading${e.width?` width="${e.width}"`:``}${e.height?` height="${e.height}"`:``} />
        ${n}
      </button>`}).join(``),l=a.length>1,u=a.map((e,t)=>{let n=e.caption?`<figcaption class="image-gallery-lightbox__caption"><p class="image-gallery-lightbox__title">${s(e.caption)}</p></figcaption>`:``;return`
      <figure class="image-gallery-lightbox__slide" data-slide-index="${t}"${t===0?``:` hidden`}>
        <img class="image-gallery-lightbox__image" src="${s(e.url)}" alt="${s(e.alt)}"${e.width?` width="${e.width}"`:``}${e.height?` height="${e.height}"`:``} />
        ${n}
      </figure>`}).join(``),d=l?a.map((e,t)=>`
      <button type="button" class="image-gallery-lightbox__thumbnail-button${t===0?` image-gallery-lightbox__thumbnail-button--selected`:``}" data-thumbnail-index="${t}" aria-label="Go to image ${t+1}">
        <img class="image-gallery-lightbox__thumbnail-image" src="${s(e.thumbUrl)}" alt="" />
      </button>`).join(``):``,f=l?`<button type="button" class="image-gallery-lightbox__nav-prev" aria-label="Previous image">&#8249;</button>`:``,p=l?`<button type="button" class="image-gallery-lightbox__nav-next" aria-label="Next image">&#8250;</button>`:``;return`
<div ${n(`image-gallery`,e)} class="image-gallery-root">
  <div class="image-gallery" style="${o}">
    ${c}
  </div>

  <div class="image-gallery-lightbox" data-image-gallery-lightbox hidden role="dialog" aria-modal="true" aria-label="Image viewer">
    <div class="image-gallery-lightbox__container">
      <div class="image-gallery-lightbox__header">
        <span class="image-gallery-lightbox__counter"><span data-lightbox-current>1</span> / ${a.length}</span>
        <div class="image-gallery-lightbox__controls">
          <button type="button" class="image-gallery-lightbox__zoom-out" data-zoom-out aria-label="Zoom out" disabled>${g}</button>
          <button type="button" class="image-gallery-lightbox__zoom-in" data-zoom-in aria-label="Zoom in">${h}</button>
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
`}}}));function w({id:e,name:t,alt:n}){return{type:`type_image`,name:t,alt:n,caption:t,imageVariations:{original:{url:`https://picsum.photos/id/${e}/640/480`,width:640,height:480,mimeType:`image/jpeg`,byteSize:65536,sha1Hash:`${e}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`.slice(0,40),aspectRatio:`4:3`}}}}function T(e){return E[e]??null}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;await e((async()=>{i(),o(),C(),E={"matrix-asset://demo-single-image":w({id:1015,name:`Mountain Serenity`,alt:`Scenic mountain landscape with gradient sky and green fields`}),"matrix-asset://demo-single-image-2":w({id:1016,name:`Urban Exploration`,alt:`Urban scene with grey tones and industrial elements`})},D=r(S.main),O=a({mock:{resolveUri:T}}),k={title:`dxp components/Image Gallery`},A={imageSources:[`matrix-asset://demo-single-image`]},j=await D.markup(A,O),M={render:e=>D(e,O),args:A,argTypes:{imageSources:{control:`object`,description:`Array of matrix-asset-uri strings, each a single image. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://demo-single-image, matrix-asset://demo-single-image-2.`}},parameters:{docs:{description:{story:`imageSources has one entry pointing directly at a single image asset -- the gallery shows just that one image.`},source:{code:j,language:`html`,type:`code`}}}},N={imageSources:[`matrix-asset://demo-single-image`,`matrix-asset://demo-single-image-2`]},P=await D.markup(N,O),F={render:()=>D(N,O),parameters:{docs:{description:{story:`imageSources has two individually-picked image entries. Demonstrates that the field supports selecting several images directly, not just one.`},source:{code:P,language:`html`,type:`code`}}}},I={imageSources:[`matrix-asset://does-not-exist`]},L=await D.markup(I,O),R={render:()=>D(I,O),parameters:{docs:{description:{story:`A source that fails to resolve at all contributes nothing, rendering an empty gallery rather than throwing.`},source:{code:L,language:`html`,type:`code`}}}},z=[{id:`2001`,name:`coastal-track.jpg`,url:`https://picsum.photos/id/1043/1200/800`,metadata:{cardDescription:[`Coastal walking track at sunrise.`]}},{id:`2002`,name:`lighthouse.jpg`,url:`https://picsum.photos/id/1044/1200/800`,metadata:{cardDescription:[``]}}],B=globalThis.fetch?.bind(globalThis),globalThis.fetch=async(e,...t)=>typeof e==`string`&&e.includes(`asset-children-json-feed`)?{ok:!0,json:async()=>z}:B(e,...t),V={imageFolder:`matrix-asset://ntg/2000`},H=await D.markup(V,O),U={render:()=>D(V,O),parameters:{docs:{description:{story:`imageFolder is set to a folder asset -- the gallery shows every image the Asset Listing JSON feed returns for it (mocked here via a stubbed global fetch; real shape confirmed against a live Squiz backend).`},source:{code:H,language:`html`,type:`code`}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => squiz(folderArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageFolder is set to a folder asset -- the gallery shows every image the Asset Listing JSON feed returns for it (mocked here via a stubbed global fetch; real shape confirmed against a live Squiz backend).'
      },
      source: {
        code: folderHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => squiz(folderArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageFolder is set to a folder asset -- the gallery shows every image the Asset Listing JSON feed returns for it (mocked here via a stubbed global fetch; real shape confirmed against a live Squiz backend).'
      },
      source: {
        code: folderHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W=[`SingleImage`,`MultipleImages`,`Unresolvable`,`Folder`]}))();export{U as Folder,F as MultipleImages,M as SingleImage,R as Unresolvable,W as __namedExportsOrder,k as default};
//# sourceMappingURL=image-gallery.stories-B50HqRj8.js.map