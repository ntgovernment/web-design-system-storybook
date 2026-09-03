import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-x2sHGyES.js";var s,c=e((()=>{s={async main({title:e=`On this page`,hn:t=`h2`,area:n=`.content-area`},{ctx:{assetId:r},fns:{resolveMatrixAssetById:i}}){try{let a=`anchor_nav`,o=await i(r,[`metadata`]);return`${o?.data?.metadata?.sidebar_items?.includes(a)?`<span data-anchor-nav='${JSON.stringify({title:e,hn:t,area:n})}'></span>`:`<span style="display:none;"> ${a}: disabled ${JSON.stringify(o??null)}</div>`}`}catch(e){return`<span style="display:none;">${String(e)}</span>`}}}})),l,u,d,f=e((()=>{l=`On this page`,u=`.content-area`,d={title:l,hn:`h2`,area:u}}));function p(e=[`anchor_nav`]){return a({ctx:{assetId:`5001`},mock:{resolveMatrixAssetById:()=>({ok:!0,data:{metadata:{sidebar_items:e}}})}})}function m(e,t){return requestAnimationFrame(()=>{window.__ntgds__?.run?.(`anchor-nav`)}),n`
    <article class="content-area">
      ${h(e,t)}
      <p>This preview simulates a content page with multiple section headings.</p>
      <h2>Getting started</h2>
      <p>Introductory guidance for the first section.</p>
      <h2>What you need</h2>
      <p>Checklist content for the second section.</p>
      <h2>Next steps</h2>
      <p>Follow-up content for the final section.</p>
    </article>
  `}var h,g,_,v,y,b,x;e((()=>{t(),i(),o(),c(),f(),h=r(s.main),g={title:`dxp components/Anchor Navigation`},_=p(),v={render:e=>m(e,_),args:d,argTypes:{title:{control:`text`},hn:{control:`text`},area:{control:`text`}},parameters:{docs:{description:{story:"A page opted into `anchor_nav` renders an in-page navigation list from the h2 headings inside `.content-area`."}}}},y=p([`sidebar_nav`]),b={render:()=>m(d,y),parameters:{docs:{description:{story:"When `sidebar_items` does not include `anchor_nav`, the component emits nothing and the page content renders without the in-page navigation block."}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => renderStory(defaultArgs, disabledInfo),
  parameters: {
    docs: {
      description: {
        story: 'When \`sidebar_items\` does not include \`anchor_nav\`, the component emits nothing and the page content renders without the in-page navigation block.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => renderStory(defaultArgs, disabledInfo),
  parameters: {
    docs: {
      description: {
        story: 'When \`sidebar_items\` does not include \`anchor_nav\`, the component emits nothing and the page content renders without the in-page navigation block.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`NotOptedIn`]}))();export{v as Default,b as NotOptedIn,x as __namedExportsOrder,g as default};
//# sourceMappingURL=anchor-nav.stories-BcbgUGgA.js.map