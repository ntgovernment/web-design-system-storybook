import{n as e}from"./chunk-BVpWp9h4.js";var t,n,r,i=e((()=>{t={title:`CSS Components/Links`},n={render:()=>{let e=crypto.randomUUID();return`
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th>default</th>
                <th>block like display (including inline-*)</th>
                <th><code>a.plain .decorate</code></th>
                <th><code>a.mono</code></th>
                <th><code>a.plain</code></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>default</th>
                <td>
                    <a href="${e}">Link</a>
                    <br><br>
                    <a href="${e}">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="${e}" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" style="display: inline-flex" class="plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="${e}" style="display: inline-flex" class="plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="${e}" class="mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="${e}" class="mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" class="plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="${e}" class="plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
            <tr>
                <th><code>:hover</code> / <code>.--hover</code></th>
                <td>
                    <a href="${e}" class="--hover">Link</a>
                    <br><br>
                    <a href="${e}" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" style="display: inline-flex" class="--hover">Link</a>
                    <br><br>
                    <a href="${e}" style="display: inline-flex" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" style="display: inline-flex" class="--hover plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="${e}" style="display: inline-flex" class="--hover plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="${e}" class="--hover mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="${e}" class="--hover mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" class="--hover plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="${e}" class="--hover plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code></th>
                <td>
                    <a href="${e}" class="--focus">Link</a>
                    <br><br>
                    <a href="${e}" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" style="display: inline-flex" class="--focus">Link</a>
                    <br><br>
                    <a href="${e}" style="display: inline-flex" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" style="display: inline-flex" class="--focus plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="${e}" style="display: inline-flex" class="--focus plain"><span><span class="decorate">Newlines<br>link</span></span></a>
                    <br><small>Note that when the link is flex / inline-flex <code>.decorate</code> needs to be inside another inline element</small>
                    <br><small>above structure <code>a.plain > span > span.decorate</code></small>
                    <br><small>below structure <code>a.plain > span.decorate</code></small>
                        <br><br>
                    <a href="${e}" style="display: inline-flex" class="--focus plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="${e}" class="--focus mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="${e}" class="--focus mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" class="--focus plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="${e}" class="--focus plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
            <tr>
                <th><code>:visited</code> / <code>.--visited</code></th>
                <td>
                    <a href="${e}" class="--visited">Link</a>
                    <br><br>
                    <a href="${e}" class="--visited">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" style="display: inline-flex" class="--visited">Link</a>
                    <br><br>
                    <a href="${e}" style="display: inline-flex" class="--visited">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" style="display: inline-flex" class="--visited plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="${e}" style="display: inline-flex" class="--visited plain"><span><span class="decorate">Newlines<br>link</span></span></a>
                    <br><small>Note that when the link is flex / inline-flex <code>.decorate</code> needs to be inside another inline element</small>
                    <br><small>above structure <code>a.plain > span > span.decorate</code></small>
                    <br><small>below structure <code>a.plain > span.decorate</code></small>
                        <br><br>
                    <a href="${e}" style="display: inline-flex" class="--visited plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="${e}" class="--visited mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="${e}" class="--visited mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="${e}" class="--visited plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="${e}" class="--visited plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
        </tbody>
    </table>
    `}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const randomAnchor = crypto.randomUUID();
    return /*html*/\`
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th>default</th>
                <th>block like display (including inline-*)</th>
                <th><code>a.plain .decorate</code></th>
                <th><code>a.mono</code></th>
                <th><code>a.plain</code></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>default</th>
                <td>
                    <a href="\${randomAnchor}">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
            <tr>
                <th><code>:hover</code> / <code>.--hover</code></th>
                <td>
                    <a href="\${randomAnchor}" class="--hover">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--hover">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--hover plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--hover plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--hover mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--hover mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--hover plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--hover plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code></th>
                <td>
                    <a href="\${randomAnchor}" class="--focus">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--focus">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--focus plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--focus plain"><span><span class="decorate">Newlines<br>link</span></span></a>
                    <br><small>Note that when the link is flex / inline-flex <code>.decorate</code> needs to be inside another inline element</small>
                    <br><small>above structure <code>a.plain > span > span.decorate</code></small>
                    <br><small>below structure <code>a.plain > span.decorate</code></small>
                        <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--focus plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--focus mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--focus mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--focus plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--focus plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
            <tr>
                <th><code>:visited</code> / <code>.--visited</code></th>
                <td>
                    <a href="\${randomAnchor}" class="--visited">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--visited">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--visited">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--visited">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--visited plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--visited plain"><span><span class="decorate">Newlines<br>link</span></span></a>
                    <br><small>Note that when the link is flex / inline-flex <code>.decorate</code> needs to be inside another inline element</small>
                    <br><small>above structure <code>a.plain > span > span.decorate</code></small>
                    <br><small>below structure <code>a.plain > span.decorate</code></small>
                        <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--visited plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--visited mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--visited mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--visited plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--visited plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
        </tbody>
    </table>
    \`;
  }
}`,...n.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const randomAnchor = crypto.randomUUID();
    return /*html*/\`
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th>default</th>
                <th>block like display (including inline-*)</th>
                <th><code>a.plain .decorate</code></th>
                <th><code>a.mono</code></th>
                <th><code>a.plain</code></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>default</th>
                <td>
                    <a href="\${randomAnchor}">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
            <tr>
                <th><code>:hover</code> / <code>.--hover</code></th>
                <td>
                    <a href="\${randomAnchor}" class="--hover">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--hover">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--hover plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--hover plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--hover mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--hover mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--hover plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--hover plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code></th>
                <td>
                    <a href="\${randomAnchor}" class="--focus">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--focus">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--focus plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--focus plain"><span><span class="decorate">Newlines<br>link</span></span></a>
                    <br><small>Note that when the link is flex / inline-flex <code>.decorate</code> needs to be inside another inline element</small>
                    <br><small>above structure <code>a.plain > span > span.decorate</code></small>
                    <br><small>below structure <code>a.plain > span.decorate</code></small>
                        <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--focus plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--focus mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--focus mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--focus plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--focus plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
            <tr>
                <th><code>:visited</code> / <code>.--visited</code></th>
                <td>
                    <a href="\${randomAnchor}" class="--visited">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--visited">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--visited">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--visited">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--visited plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--visited plain"><span><span class="decorate">Newlines<br>link</span></span></a>
                    <br><small>Note that when the link is flex / inline-flex <code>.decorate</code> needs to be inside another inline element</small>
                    <br><small>above structure <code>a.plain > span > span.decorate</code></small>
                    <br><small>below structure <code>a.plain > span.decorate</code></small>
                        <br><br>
                    <a href="\${randomAnchor}" style="display: inline-flex" class="--visited plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--visited mono" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--visited mono" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="\${randomAnchor}" class="--visited plain" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="\${randomAnchor}" class="--visited plain" style="display: inline-flex">Newlines<br>link</a>
                </td>
            </tr>
        </tbody>
    </table>
    \`;
  }
}`,...n.parameters?.docs?.source}}},r=[`Default`]}));export{t as i,r as n,i as r,n as t};
//# sourceMappingURL=links.stories-DBHf7AJm.js.map