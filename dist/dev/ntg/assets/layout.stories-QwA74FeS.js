import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./layoutProperties-y59oom29.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`CSS Components/Layout`,parameters:{layout:`fullscreen`}},i=n({containerModifiers:{variant:`alt-background`}}),a=n({containerModifiers:{verticalSpace:`spacious`}}),o=n({containerModifiers:{fullwidthBackground:!0,variant:`alt-background`,verticalSpace:`spacious`}}),s={render:()=>`
    <p style="opacity:.5;text-align:center"><code>.content-area</code> is the node that page content goes into.</p>
    <br>
    <div class="content-area">
        <div class="content" style="border: 1px solid var(--clr-border-subtle)"${i}>
            <p><strong>Explaination</strong></p>
            
            <p><code>.content-area</code> needs to works consistently for any inner content including textnaodes</p>
            <p>Expected behaviour:</p>
            <ul>
                <li>A single consistent padding</li>
                <li>
                    <code>[data-component]</code> and <code>.content</code> will have matching 
                    inline padding and negative inline margin to acheive text align consistency.
                    <br> if they are <code>> :first-child</code> / <code>> :last-child</code> they will
                    have appropriate negative block margin into parents padding. 
                </li>
                <li>At larger widths <code>.content-area</code> will appear as column</li>
                <li>Components marked for fullwidth-background will have the chosen color background full width.</li>
            </ul> 
        </div>
        textnode
        <p>tag</p>
        <div data-component="my-component">
            this has <code>[data-component]</code>
        </div>
        <div data-component="my-component" ${i}>
            this has <code>[data-component][${i}]</code>
        </div>
        <div data-component="my-component" ${a} >
            this has <code>[data-component][${a}]</code>
        </div>
        <div data-component="my-component" ${o} >
            this has <code>[data-component][${o}]</code>
        </div>
    </div>
    `},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <p style="opacity:.5;text-align:center"><code>.content-area</code> is the node that page content goes into.</p>
    <br>
    <div class="content-area">
        <div class="content" style="border: 1px solid var(--clr-border-subtle)"\${modAttrAltBg}>
            <p><strong>Explaination</strong></p>
            
            <p><code>.content-area</code> needs to works consistently for any inner content including textnaodes</p>
            <p>Expected behaviour:</p>
            <ul>
                <li>A single consistent padding</li>
                <li>
                    <code>[data-component]</code> and <code>.content</code> will have matching 
                    inline padding and negative inline margin to acheive text align consistency.
                    <br> if they are <code>> :first-child</code> / <code>> :last-child</code> they will
                    have appropriate negative block margin into parents padding. 
                </li>
                <li>At larger widths <code>.content-area</code> will appear as column</li>
                <li>Components marked for fullwidth-background will have the chosen color background full width.</li>
            </ul> 
        </div>
        textnode
        <p>tag</p>
        <div data-component="my-component">
            this has <code>[data-component]</code>
        </div>
        <div data-component="my-component" \${modAttrAltBg}>
            this has <code>[data-component][\${modAttrAltBg}]</code>
        </div>
        <div data-component="my-component" \${modAttrSpacious} >
            this has <code>[data-component][\${modAttrSpacious}]</code>
        </div>
        <div data-component="my-component" \${modAttrFullWidth} >
            this has <code>[data-component][\${modAttrFullWidth}]</code>
        </div>
    </div>
    \`
}`,...s.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <p style="opacity:.5;text-align:center"><code>.content-area</code> is the node that page content goes into.</p>
    <br>
    <div class="content-area">
        <div class="content" style="border: 1px solid var(--clr-border-subtle)"\${modAttrAltBg}>
            <p><strong>Explaination</strong></p>
            
            <p><code>.content-area</code> needs to works consistently for any inner content including textnaodes</p>
            <p>Expected behaviour:</p>
            <ul>
                <li>A single consistent padding</li>
                <li>
                    <code>[data-component]</code> and <code>.content</code> will have matching 
                    inline padding and negative inline margin to acheive text align consistency.
                    <br> if they are <code>> :first-child</code> / <code>> :last-child</code> they will
                    have appropriate negative block margin into parents padding. 
                </li>
                <li>At larger widths <code>.content-area</code> will appear as column</li>
                <li>Components marked for fullwidth-background will have the chosen color background full width.</li>
            </ul> 
        </div>
        textnode
        <p>tag</p>
        <div data-component="my-component">
            this has <code>[data-component]</code>
        </div>
        <div data-component="my-component" \${modAttrAltBg}>
            this has <code>[data-component][\${modAttrAltBg}]</code>
        </div>
        <div data-component="my-component" \${modAttrSpacious} >
            this has <code>[data-component][\${modAttrSpacious}]</code>
        </div>
        <div data-component="my-component" \${modAttrFullWidth} >
            this has <code>[data-component][\${modAttrFullWidth}]</code>
        </div>
    </div>
    \`
}`,...s.parameters?.docs?.source}}},c=[`Default`]}))();export{s as Default,c as __namedExportsOrder,r as default};
//# sourceMappingURL=layout.stories-QwA74FeS.js.map