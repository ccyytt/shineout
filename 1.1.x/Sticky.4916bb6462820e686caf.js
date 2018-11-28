webpackJsonpShineoutDoc([33],{1049:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(72),c=n(71),a=n(43),l=n(1050),s=n.n(l),m=n(1051),u=n.n(m),f=Object(a.a)(s.a,u.a),p=[{name:"1-top",title:Object(a.a)("基本 \n 附着在顶部 20px","Basic \n Sticky 20px to top"),component:n(1052).default,rawText:n(1053)},{name:"2-element",title:Object(a.a)("指定元素 \n 附着在元素内","Element \n Sticky to element"),component:n(1054).default,rawText:n(1055)},{name:"3-bottom",title:Object(a.a)("位置 \n 附着在底部","Position \n Sticky to bottom"),component:n(1056).default,rawText:n(1057)}];e.default=Object(i.a)(function(t){return r.a.createElement(c.b,Object.assign({},t,{codes:void 0,source:f,examples:p}))})},1050:function(t,e){t.exports="# Sticky *附着*\n\n类似于 position: sticky，在屏幕滚动时，保持元素在屏幕可见区域内。\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| bottom | number | 无 | 距离底部多少偏移量触发 |\n| className | string | 无 | 扩展className |\n| style | object | 无 | 扩展样式。\b触发浮动后的默认zIndex为900，修改style的zIndex来改变。 |\n| target | string \\| HTMLElement | 无 | 附着的目标，默认为document.body。可以传入HTMLElement或者css selector，target 必须为 Sticky 组件的祖先节点 |\n| top | number | 无 | 距离顶部多少偏移量触发 |"},1051:function(t,e){t.exports="# Sticky\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| bottom | number | - | Offsets from the bottom. |\n| className | string | - | Extend className |\n| style | object | - | Extend style. \bThe default z-Index after triggering the float is 900, and you can modify the z-Index of the style to change. |\n| target | string \\| HTMLElement | none | Attached target. the default is the document.body. You can pass in an HTMLElement or css selector, and the target must be an ancestor node of the Sticky component. |\n| top | number | none | Offsets from the top. |"},1052:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(26);e.default=function(){return r.a.createElement(i.A,{top:20},r.a.createElement(i.a,{onClose:!0},r.a.createElement("h3",null,"Some content."),"Sticky 20px to top."))}},1053:function(t,e){t.exports="/**\n * cn - 基本\n *    -- 附着在顶部 20px\n * en - Basic\n *    -- Sticky 20px to top\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default function () {\n  return (\n    <Sticky top={20}>\n      <Alert onClose>\n        <h3>Some content.</h3>\n        Sticky 20px to top.\n      </Alert>\n    </Sticky>\n  )\n}\n"},1054:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return u});var o=n(1),r=n(2),i=n(4),c=n(3),a=n(5),l=n(0),s=n.n(l),m=n(26),u=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(a.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.element.scrollTop=400}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{id:"sticky_element",ref:function(e){t.element=e},style:{position:"relative",height:400,overflow:"auto"}},s.a.createElement("div",{style:{height:1600,background:"#f2f2f2"}},s.a.createElement("div",{style:{height:600}},"Some text."),s.a.createElement(m.A,{top:0,bottom:0,target:"#sticky_element"},s.a.createElement(m.a,{style:{marginBottom:0},type:"info"},"Sticky to element"))))}}]),e}(l.PureComponent)},1055:function(t,e){t.exports="/**\n * cn - 指定元素\n *    -- 附着在元素内\n * en - Element\n *    -- Sticky to element\n */\nimport React, { PureComponent } from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default class extends PureComponent {\n  componentDidMount() {\n    this.element.scrollTop = 400\n  }\n\n  render() {\n    return (\n      <div\n        id=\"sticky_element\"\n        ref={(el) => { this.element = el }}\n        style={{ position: 'relative', height: 400, overflow: 'auto' }}\n      >\n        <div style={{ height: 1600, background: '#f2f2f2' }}>\n          <div style={{ height: 600 }}>Some text.</div>\n          <Sticky top={0} bottom={0} target=\"#sticky_element\">\n            <Alert style={{ marginBottom: 0 }} type=\"info\">\n              Sticky to element\n            </Alert>\n          </Sticky>\n        </div>\n      </div>\n    )\n  }\n}\n"},1056:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(26);e.default=function(){return r.a.createElement(i.A,{bottom:0},r.a.createElement(i.a,{style:{marginBottom:0},onClose:!0},"Sticky at bottom."))}},1057:function(t,e){t.exports="/**\n * cn - 位置\n *    -- 附着在底部\n * en - Position\n *    -- Sticky to bottom\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default function () {\n  return (\n    <Sticky bottom={0}>\n      <Alert style={{ marginBottom: 0 }} onClose>\n        Sticky at bottom.\n      </Alert>\n    </Sticky>\n  )\n}\n"}});