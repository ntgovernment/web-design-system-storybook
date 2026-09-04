import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-D4VTpLG1.js";function s(e,t){return async function(n){try{let r=await t.fns.resolveUri(`matrix-asset://${e}/${n}`);if(`ok`in r&&(`data`in r||`reason`in r))return r;if(r!==void 0)return{ok:!0,data:r};throw Error(`Unknown response`,{cause:r})}catch(e){let t=e||{message:`Unknown Error`};return{ok:!1,data:null,error:t,reason:t.cause||`Unknown reason`}}}}var c=e((()=>{})),l,u=e((()=>{c(),l={async main({title:e=`On this page`,advanced:{hn:t=`h2`,area:n=`.content-area`}},r){let{ctx:{assetId:i},fns:a,editor:o,env:{dxpApiIdentifier:c}={}}=r;if(!c)return`<span data-anchor-nav>${o?``:`<!--`}
                <code>dxpApiIdentifier</code> must be set in the DXP Components Set.
            ${o?``:`-->`}</div>`;let l=s(c,r),u=`anchor_nav`,d=await l(i);return`${d?.data?.metadata?.sidebar_items?.includes(u)?`<span data-anchor-nav='${JSON.stringify({title:e,hn:t,area:n})}'></span>`:`<span data-anchor-nav>${o?``:`<!--`}
                ${u}: disabled ${JSON.stringify(d??null)}
             ${o?``:`-->`}</div>`}`}}})),d,f,p,m=e((()=>{d=`On this page`,f=`.content-area`,p={title:d,hn:`h2`,area:f}}));function h(e=[`anchor_nav`]){return a({ctx:{assetId:`5001`},env:{dxpApiIdentifier:`mock`},mock:{resolveUri:()=>({ok:!0,data:{metadata:{sidebar_items:e}}})}})}function g(e,t){return requestAnimationFrame(()=>{window.__ntgds__?.run?.(`anchor-nav`)}),n`
    <article class="content-area">
      ${_(e,t)}
      <p>This preview simulates a content page with multiple section headings.</p>
      <h2>Getting started</h2>
      <p>Introductory guidance for the first section.</p>
      <h2>What you need</h2>
      <p>Checklist content for the second section.</p>
      <h2>Next steps</h2>
      <p>Follow-up content for the final section.</p>
    </article>
  `}var _,v,y,b,x,S,C;e((()=>{t(),i(),o(),u(),m(),_=r(l.main),v={title:`dxp components/Anchor Navigation`},y=h(),b={render:e=>g(e,y),args:p,argTypes:{title:{control:`text`},hn:{control:`text`},area:{control:`text`}},parameters:{docs:{description:{story:"A page opted into `anchor_nav` renders an in-page navigation list from the h2 headings inside `.content-area`."}}}},x=h([`sidebar_nav`]),S={render:()=>g(p,x),parameters:{docs:{description:{story:"When `sidebar_items` does not include `anchor_nav`, the component emits nothing and the page content renders without the in-page navigation block."}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => renderStory(args, defaultInfo),
  args: defaultArgs,
  argTypes: {
    title: {
      control: 'text'
    },
    hn: {
      control: 'text'
    },
    area: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A page opted into \`anchor_nav\` renders an in-page navigation list from the h2 headings inside \`.content-area\`.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => renderStory(defaultArgs, disabledInfo),
  parameters: {
    docs: {
      description: {
        story: 'When \`sidebar_items\` does not include \`anchor_nav\`, the component emits nothing and the page content renders without the in-page navigation block.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => renderStory(args, defaultInfo),
  args: defaultArgs,
  argTypes: {
    title: {
      control: 'text'
    },
    hn: {
      control: 'text'
    },
    area: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A page opted into \`anchor_nav\` renders an in-page navigation list from the h2 headings inside \`.content-area\`.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => renderStory(defaultArgs, disabledInfo),
  parameters: {
    docs: {
      description: {
        story: 'When \`sidebar_items\` does not include \`anchor_nav\`, the component emits nothing and the page content renders without the in-page navigation block.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`NotOptedIn`]}))();export{b as Default,S as NotOptedIn,C as __namedExportsOrder,v as default};
//# sourceMappingURL=anchor-nav.stories-5go245Dr.js.map