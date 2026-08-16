import{n as e}from"./chunk-BVpWp9h4.js";function t(e){return`we lost this ill add back soon (squizLayoutStoryRenderer)`}var n=e((()=>{})),r,i=e((()=>{r=`{{#if zones.content}}
{{#if properties.background}}<div class="wraps-container {{properties.background }}" style="--space-block: var({{properties.verticalSpacing}})">{{/if}}
    <div class="container">
        {{{zones.content}}}
    </div>
{{#if properties.background}}</div>{{/if}}
{{/if}}`})),a,o,s,c,l,u,d,f=e((()=>{a=`container`,o=`Container`,s=`Core layout container`,c=`container.hbs`,l=[{key:`content`,displayName:`Content`,description:`The content slot`}],u={background:{type:`string`,title:`Background`,description:`If set will have a full width background`,oneOf:[{const:``,title:`None`},{const:`--clr-bg-shade`,title:`Shade`}],default:``},verticalSpacing:{type:`string`,title:`Background Vertical Spacing`,description:`The top / bottom space of the background area`,oneOf:[{const:`--zero`,title:`None`},{const:`--sp-5xl`,title:`Large`}],default:`--zero`}},d={name:a,displayName:o,description:s,entry:c,zones:l,properties:u}})),p,m,h,g,_,v,y,b;e((()=>{n(),i(),f(),p=`
    <div>
        <p>The container layout is the core layout to wrap components and wysiwyg.</p>
        <p>It fills the space it is in and becomes a centered column on large screen widths.</p>
    </div>
    <div style="background: rgb(200 200 200 / .5)">
        <p>Each component or other direct sibling will be given padding.</p>
    </div>
`,m=t(r),h={title:`dxp/layouts/container`,parameters:{layout:`fullscreen`}},g={content:p,background:d.properties.background.default,verticalSpacing:d.properties.verticalSpacing.default},_={content:{control:{type:`text`}},background:{control:{type:`select`,labels:d.properties.background.oneOf.reduce((e,t)=>(e[t.const]=t.title,e),{})},options:d.properties.background.oneOf.map(e=>e.const)},verticalSpacing:{control:{type:`select`,labels:d.properties.verticalSpacing.oneOf.reduce((e,t)=>(e[t.const]=t.title,e),{})},options:d.properties.verticalSpacing.oneOf.map(e=>e.const)}},v={render:()=>{let{content:e,background:t,verticalSpacing:n}=g;return m({zones:{content:e},properties:{background:t,verticalSpacing:n}})}},y={render:({content:e,background:t,verticalSpacing:n})=>m({zones:{content:`content`},properties:{background:t,verticalSpacing:n}}),args:g,argTypes:_},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      content,
      background,
      verticalSpacing
    } = baseArgs;
    return squiz({
      zones: {
        content
      },
      properties: {
        background,
        verticalSpacing
      }
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: ({
    content,
    background,
    verticalSpacing
  }) => squiz({
    zones: {
      content: 'content'
    },
    properties: {
      background,
      verticalSpacing
    }
  }),
  args: baseArgs,
  argTypes
}`,...y.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      content,
      background,
      verticalSpacing
    } = baseArgs;
    return squiz({
      zones: {
        content
      },
      properties: {
        background,
        verticalSpacing
      }
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: ({
    content,
    background,
    verticalSpacing
  }) => squiz({
    zones: {
      content: 'content'
    },
    properties: {
      background,
      verticalSpacing
    }
  }),
  args: baseArgs,
  argTypes
}`,...y.parameters?.docs?.source}}},b=[`Default`,`ConfigurationTester`]}))();export{y as ConfigurationTester,v as Default,b as __namedExportsOrder,h as default};
//# sourceMappingURL=container.stories-B1fj9oQE.js.map