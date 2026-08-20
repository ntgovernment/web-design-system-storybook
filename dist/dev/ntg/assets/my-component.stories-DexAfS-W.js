import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-Bbhtouok.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-x2sHGyES.js";var s,c=e((()=>{t(),s={main:async(e={})=>{let{text:t=`Hello World!`,variant:r=`default`}=e,i=r&&r!==`default`?` class="my-component--${r}"`:``;return`
      <div ${n(`my-component`,e)}${i}>
        <div class="my-component__text">
          ${t}
        </div>
      </div>
    `}}})),l,u,d,f,p,m,h,g,_;await e((async()=>{i(),o(),c(),l=r(s.main),a(),u={title:`Z dev tests/My Component`},d={text:`Hello World!`},f=await l.markup(d),p={render:e=>l(e),args:d,argTypes:{text:{control:`text`},variant:{control:`text`}},parameters:{docs:{source:{code:f,language:`html`,type:`code`}}}},m={text:`I'm Special!`,variant:`special`},h=await l.markup(m),g={render:()=>l(m),parameters:{docs:{source:{code:h,language:`html`,type:`code`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: defaultArgs,
  argTypes: {
    text: {
      control: 'text'
    },
    variant: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => squiz(specialArgs),
  parameters: {
    docs: {
      source: {
        code: specialHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: defaultArgs,
  argTypes: {
    text: {
      control: 'text'
    },
    variant: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => squiz(specialArgs),
  parameters: {
    docs: {
      source: {
        code: specialHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Special`]}))();export{p as Default,g as Special,_ as __namedExportsOrder,u as default};
//# sourceMappingURL=my-component.stories-DexAfS-W.js.map