import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";import{n as r,t as i}from"./squizInfo.mock-x2sHGyES.js";function a(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function o(e){if(!e)return{url:``,thumbUrl:``,alt:``,caption:``,width:null,height:null};if(typeof e==`string`)return{url:e,thumbUrl:e,alt:``,caption:``,width:null,height:null};let t=e.imageVariations||{},n=t.original||{},r=t.small?.[0]||n;return{url:n.url||``,thumbUrl:r.url||n.url||``,alt:e.alt||e.name||``,caption:e.caption||``,width:n.width||null,height:n.height||null}}function s(e){let t=/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function c(e){if(!e||!e.url)return null;let t=Array.isArray(e.metadata?.cardDescription)?e.metadata.cardDescription[0]:``;return{url:e.url,thumbUrl:e.url,alt:e.name||``,caption:t||``,width:null,height:null}}async function l(e){let t=s(e);if(!t)return[];let n=`${v}?${y}=${encodeURIComponent(t)}`,r;try{let e=await fetch(n);if(!e.ok)return[];r=await e.json()}catch{return[]}return Array.isArray(r)?r.map(c).filter(Boolean):[]}function u(e){if(!e)return null;if(e.imageVariations?.original?.url)return o(e);let t=e.url||(Array.isArray(e.urls)?e.urls[0]:``)||``;return t?{url:t,thumbUrl:t,alt:e.alt||e.name||e.short_name||``,caption:e.caption||e.name||``,width:null,height:null}:null}async function d(e,t){return!Array.isArray(e)||e.length===0||typeof t?.resolveUri!=`function`?[]:(await Promise.all(e.map(async e=>{if(!e)return[];let n;try{n=await t.resolveUri(e)}catch{return[]}if(!n)return[];let r=u(n);return r?[r]:[]}))).flat()}async function f(e,t,n){let[r,i]=await Promise.all([d(e,n),l(t)]),a=new Set;return[...r,...i].filter(e=>a.has(e.url)?!1:(a.add(e.url),!0))}var p,m,h,g,_,v,y,b,x=e((()=>{p=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="7" x2="10" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,m=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,h=4,g=16,_=`320 / 240`,v=`https://nt.gov.au/web-design-system/listings/asset-children-json-feed`,y=`rootId`,b={async main(e={},t={}){let{imageSources:n=[],imageFolder:r=``}=e,i=await f(n,r,t.fns),o=`--gallery-columns: ${h}; --gallery-gap: ${g}px; --gallery-aspect-ratio: ${_};`,s=i.map((e,t)=>{let n=e.caption?`<span class="image-gallery__overlay"><span class="image-gallery__overlay-caption">${a(e.caption)}</span></span>`:``;return`
      <button type="button" class="image-gallery__item" data-gallery-index="${t}" aria-label="Open image ${t+1}${e.alt?`: ${a(e.alt)}`:``}">
        <img class="image-gallery__thumb" src="${a(e.thumbUrl)}" alt="${a(e.alt)}" loading="lazy" data-gallery-loading${e.width?` width="${e.width}"`:``}${e.height?` height="${e.height}"`:``} />
        ${n}
      </button>`}).join(``),c=i.length>1,l=i.map((e,t)=>{let n=e.caption?`<figcaption class="image-gallery-lightbox__caption"><p class="image-gallery-lightbox__title">${a(e.caption)}</p></figcaption>`:``;return`
      <figure class="image-gallery-lightbox__slide" data-slide-index="${t}"${t===0?``:` hidden`}>
        <img class="image-gallery-lightbox__image" src="${a(e.url)}" alt="${a(e.alt)}"${e.width?` width="${e.width}"`:``}${e.height?` height="${e.height}"`:``} />
        ${n}
      </figure>`}).join(``),u=c?i.map((e,t)=>`
      <button type="button" class="image-gallery-lightbox__thumbnail-button${t===0?` image-gallery-lightbox__thumbnail-button--selected`:``}" data-thumbnail-index="${t}" aria-label="Go to image ${t+1}">
        <img class="image-gallery-lightbox__thumbnail-image" src="${a(e.thumbUrl)}" alt="" />
      </button>`).join(``):``,d=c?`<button type="button" class="image-gallery-lightbox__nav-prev" aria-label="Previous image">&#8249;</button>`:``,v=c?`<button type="button" class="image-gallery-lightbox__nav-next" aria-label="Next image">&#8250;</button>`:``;return`
<div class="image-gallery-root">
  <div class="image-gallery" style="${o}">
    ${s}
  </div>

  <div class="image-gallery-lightbox" data-image-gallery-lightbox hidden role="dialog" aria-modal="true" aria-label="Image viewer">
    <div class="image-gallery-lightbox__container">
      <div class="image-gallery-lightbox__header">
        <span class="image-gallery-lightbox__counter"><span data-lightbox-current>1</span> / ${i.length}</span>
        <div class="image-gallery-lightbox__controls">
          <button type="button" class="image-gallery-lightbox__zoom-out" data-zoom-out aria-label="Zoom out" disabled>${m}</button>
          <button type="button" class="image-gallery-lightbox__zoom-in" data-zoom-in aria-label="Zoom in">${p}</button>
          <button type="button" class="image-gallery-lightbox__close" aria-label="Close image viewer">&#10005;</button>
        </div>
      </div>
      <div class="image-gallery-lightbox__main">
        ${d}
        <div class="image-gallery-lightbox__viewer">
          ${l}
        </div>
        ${v}
      </div>
      ${c?`<div class="image-gallery-lightbox__thumbnails">${u}</div>`:``}
    </div>
  </div>
</div>
`}}}));function S({id:e,name:t,alt:n}){return{type:`type_image`,name:t,alt:n,caption:t,imageVariations:{original:{url:`https://picsum.photos/id/${e}/640/480`,width:640,height:480,mimeType:`image/jpeg`,byteSize:65536,sha1Hash:`${e}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`.slice(0,40),aspectRatio:`4:3`}}}}function C(e){return w[e]??null}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;await e((async()=>{n(),i(),x(),w={"matrix-asset://demo-single-image":S({id:1015,name:`Mountain Serenity`,alt:`Scenic mountain landscape with gradient sky and green fields`}),"matrix-asset://demo-single-image-2":S({id:1016,name:`Urban Exploration`,alt:`Urban scene with grey tones and industrial elements`})},T=t(b.main),E=r({mock:{resolveUri:C}}),D={title:`dxp/Image Gallery`},O={imageSources:[`matrix-asset://demo-single-image`]},k=await T.markup(O,E),A={render:e=>T(e,E),args:O,argTypes:{imageSources:{control:`object`,description:`Array of matrix-asset-uri strings, each a single image. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://demo-single-image, matrix-asset://demo-single-image-2.`}},parameters:{docs:{description:{story:`imageSources has one entry pointing directly at a single image asset -- the gallery shows just that one image.`},source:{code:k,language:`html`,type:`code`}}}},j={imageSources:[`matrix-asset://demo-single-image`,`matrix-asset://demo-single-image-2`]},M=await T.markup(j,E),N={render:()=>T(j,E),parameters:{docs:{description:{story:`imageSources has two individually-picked image entries. Demonstrates that the field supports selecting several images directly, not just one.`},source:{code:M,language:`html`,type:`code`}}}},P={imageSources:[`matrix-asset://does-not-exist`]},F=await T.markup(P,E),I={render:()=>T(P,E),parameters:{docs:{description:{story:`A source that fails to resolve at all contributes nothing, rendering an empty gallery rather than throwing.`},source:{code:F,language:`html`,type:`code`}}}},L=[{id:`2001`,name:`coastal-track.jpg`,url:`https://picsum.photos/id/1043/1200/800`,metadata:{cardDescription:[`Coastal walking track at sunrise.`]}},{id:`2002`,name:`lighthouse.jpg`,url:`https://picsum.photos/id/1044/1200/800`,metadata:{cardDescription:[``]}}],R=globalThis.fetch?.bind(globalThis),globalThis.fetch=async(e,...t)=>typeof e==`string`&&e.includes(`asset-children-json-feed`)?{ok:!0,json:async()=>L}:R(e,...t),z={imageFolder:`matrix-asset://ntg/2000`},B=await T.markup(z,E),V={render:()=>T(z,E),parameters:{docs:{description:{story:`imageFolder is set to a folder asset -- the gallery shows every image the Asset Listing JSON feed returns for it (mocked here via a stubbed global fetch; real shape confirmed against a live Squiz backend).`},source:{code:B,language:`html`,type:`code`}}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`SingleImage`,`MultipleImages`,`Unresolvable`,`Folder`]}))();export{V as Folder,N as MultipleImages,A as SingleImage,I as Unresolvable,H as __namedExportsOrder,D as default};
//# sourceMappingURL=image-gallery.stories-BwTL3km1.js.map