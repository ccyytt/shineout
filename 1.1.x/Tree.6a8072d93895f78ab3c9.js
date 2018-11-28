webpackJsonpShineoutDoc([7],{252:function(e,n,t){"use strict";var a=t(26);n.a=Object(a.m)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},255:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return s});var a=t(15),r=t(17),d=t(73),o=[],i=function e(n,t,i,l,s){var c=i.join("-"),u=Object(d.e)(s,0===n?1:0),h={id:c,text:c};return u>0&&n<l&&(h.children=Object(r.a)(u).map(function(t){return e(n+1,t,Object(a.a)(i).concat([t]),l,s)})),s<10&&o.push(c),h},l=Object(r.a)(4).map(function(e){return i(0,0,[e],10,5)}),s=Object(r.a)(20).map(function(e){return i(0,0,[e],4,10)});n.c=l},899:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),d=t(72),o=t(71),i=t(43),l=t(900),s=t.n(l),c=t(901),u=t.n(c),h=Object(i.a)(s.a,u.a),p=[{name:"01-base",title:Object(i.a)("基本用法 \n 基础的 Tree 用法","Base \n Basic usage of Tree"),component:t(902).default,rawText:t(903)},{name:"02-icon",title:Object(i.a)("图标 \n 在 renderItem 中根据状态展示不同的图标","Icons \n Display different icon in the renderItem."),component:t(904).default,rawText:t(905)},{name:"03-click",title:Object(i.a)("点击事件 \n 设置 onClick 属性监听节点点击","Click \n Set the onClick property to listen the node click."),component:t(906).default,rawText:t(907)},{name:"04-noline",title:Object(i.a)("无连接线 \n 设置 line 为 false，隐藏连接线","Line \n Set the line property to false to hid the connecting line."),component:t(908).default,rawText:t(909)},{name:"05-expanded",title:Object(i.a)("控制展开 \n 受控的展开（此示例数据量太大，第一次全部展开会比较慢）","Expanded \n Controlled expansion (Because the data in this example is too large, it will be slower for the first time.)"),component:t(910).default,rawText:t(911)},{name:"06-change",title:Object(i.a)("可选择 \n 选中值取值提供了 4 种模式 \n 0: 只返回完全选中的节点，包含父节点 \n 1: 返回全部选中的节点和半选中的父节点 \n 2: 只返回选中的子节点 \n 3: 如果父节点选中，只返回父节点","onChange \n Selected values provide 4 modes \n 0: Return only the fully selected node, including the parent node. \n 1: Return the fully selected nodes and semi-selected parent nodes. \n 2: Return only the selected child node. \n 3: Return only the parent node, if the parent node is selected."),component:t(912).default,rawText:t(913)},{name:"07-disabled",title:Object(i.a)("禁用 \n disabled 为函数时，根据返回结果禁用节点，同时禁用子节点 \n disabled 为 true 时，禁用全部节点","disabled \n When the disabled property is a function, disable the node and its child nodes according to the returned result. \n When the disabled property is true, disable all nodes."),component:t(914).default,rawText:t(915)},{name:"08-drag",title:Object(i.a)("拖动 \n 设置 onDrop 属性可以拖动节点","Drag \n Set the onDrop property to drag nodes."),component:t(916).default,rawText:t(917)},{name:"09-lazyload",title:Object(i.a)("动态加载 \n 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数","Lazy load \n Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded."),component:t(918).default,rawText:t(919)},{name:"data",title:Object(i.a)("",""),component:t(920).default,rawText:t(921)}];n.default=Object(d.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:h,examples:p}))})},900:function(e,n){e.exports="# Tree *树形选择*\n\n## \n\n#### 本页面中用到的数据如下（数据量比较大，请谨慎点开）\n<example name=\"data\" />\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| onChange | function(array) | 无 | 设置 onChange 属性时，显示 选择框。参数为当前选中值，和 mode 属性相关 |\n| data | array[{children:[]}] | [] | 数据，子节点为children，如果 children 值为 null 或 长度为 0 时，视为叶子节点 |\n| defaultExpanded | array\\[key] | 无 | 默认展开的节点 key（非受控） |\n| disabled | boolean \\| function(d) | false | 显示选择框时有效，为 true 时，所有节点禁用选择，为函数时，根据函数返回结果确定是否禁用 |\n| expanded | array\\[key] | 无 | 展开的节点 key （受控） |\n| keygen | string \\| function(obj, parentKey):string | 必填 | 生成key的辅助方法<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id |\n| line | boolean | true | 是否显示连接线 |\n| loader | function(key) | 无 | 设置loader属性后，未定义children的节点视为动态加载节点，点击展开触发 loader事件，children 为 null 或者长度为 0 视为叶子节点 |\n| mode | \\[0\\|1\\|2\\|3\\|4] | 1 | 选中值模式<br />0: 只返回完全选中的节点，包含父节点<br />1: 返回全部选中的节点和半选中的父节点<br />2: 只返回选中的子节点<br />3: 如果父节点选中，只返回父节点 |\n| onExpand | function(array) | 无 | 节点展开回调，参数为当前展开节点 key 数组 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| defaultValue | array\\[key] | 无 | 默认选中的 key （非受控） | \n| value | array\\[key] | 无 | 选中的 key （受控） | \n| onDrop | function(data, key, targetKey, position) | 无 | 设置 onDrop 属性时，为可拖动状态<br />data: 拖动后重新排序的完整数据<br />key: 拖动的节点key<br />targetKey: 目标节点 key<br />position: 在目标节点的位置，以 0 开始 | "},901:function(e,n){e.exports="# Tree\n\n##\n\n#### The data used on this page is as follows (the amount of data is large, please be careful)\n<example name=\"data\" />\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | Extend className |\n| data | array[{children:[]}] | [] | data. The child node is children. If the children value is null or its length is 0, it is render as a leaf node. |\n| defaultExpanded | array\\[key] | - | Default expanded node key. |\n| disabled | boolean \\| function(d) | false | When it is true, all nodes disable the selection; when it is a function, it determines whether it is disabled according to the return result of the function. |\n| expanded | array\\[key] | - | Expanded node key (controlled) |\n| keygen | string \\| function(obj, parentKey):string | required | Auxiliary method for generating key. <br />When it is a function, use the return value of this function. <br /> When it is a string, use the data value corresponding to this string. For example, 'id' is the same thing as (d) => d.id. |\n| line | boolean | true | Whether to display the connection line. |\n| loader | function(key) | - | If the loader attribute is a function, the node with no children is regarded as dynamically loaded node. Click expanded button to trigger the loader event. The children property is null or its length is 0 will be regarded as a leaf node. |\n| mode | \\[0\\|1\\|2\\|3\\|4] | 1 | mode <br />0: Returns only the fully selected node including the parent node. <br />1: Returns all selected nodes and semi-selected nodes. <br />2: Return only the selected child nodes. <br />3: If the parent node is full selected, only return the parent node. |\n| onChange | function(array) | - | When the onChange property is set, the selection box is displayed. The parameter is the current selected value, which is related to the mode property. |\n| onExpand | function(array) | - | The callback function for expanding the node. The parameter is the key array of the currently expanded nodes. |\n| renderItem | string \\| function(d) | required | When it is a string, return d\\[string].<br /> When it is a function, return the result of this function. |\n| defaultValue | array\\[key] | - | Default selected key (not controlled) | \n| value | array\\[key] | - | Selected key (controlled) |\n| onDrop | function(data, key, targetKey, position) | - | It is draggable when setting the onDrop property. <br />data: Full data after dragging.<br />key: the key of dragged node<br />targetKey: the key of target node<br />position: The position of the target node. start at 0. | "},902:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),d=t(26),o=t(255);n.default=function(){return r.a.createElement(d.F,{data:o.c,keygen:"id",defaultExpanded:["2"],renderItem:function(e){return"node ".concat(e.text)}})}},903:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基础的 Tree 用法\n * en - Base\n *   -- Basic usage of Tree\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\n\nexport default function () {\n  return (\n    <Tree\n      data={data}\n      keygen=\"id\"\n      defaultExpanded={['2']}\n      renderItem={n => `node ${n.text}`}\n    />\n  )\n}\n"},904:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),d=t(26),o=t(255),i=t(252);function l(e,n){var t;return t=e.children&&0!==e.children.length?n?r.a.createElement(i.a,{name:"folder-open",style:{color:"#ffd666"}}):r.a.createElement(i.a,{name:"folder",style:{color:"#ffd666"}}):r.a.createElement(i.a,{name:"file-text-o"}),r.a.createElement("span",null,t," ",e.text)}n.default=function(){return r.a.createElement(d.F,{data:o.c,keygen:"id",renderItem:l})}},905:function(e,n){e.exports="/**\n * cn - 图标\n *    -- 在 renderItem 中根据状态展示不同的图标\n * en - Icons\n *    -- Display different icon in the renderItem.\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\nimport FontAwesome from '../Icon/FontAwesome'\n\nfunction renderItem(node, isExpanded) {\n  let icon\n  if (!node.children || node.children.length === 0) {\n    icon = <FontAwesome name=\"file-text-o\" />\n  } else if (isExpanded) {\n    icon = <FontAwesome name=\"folder-open\" style={{ color: '#ffd666' }} />\n  } else {\n    icon = <FontAwesome name=\"folder\" style={{ color: '#ffd666' }} />\n  }\n\n  return <span>{icon} {node.text}</span>\n}\n\nexport default function () {\n  return (\n    <Tree\n      data={data}\n      keygen=\"id\"\n      renderItem={renderItem}\n    />\n  )\n}\n"},906:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return p});var a=t(1),r=t(2),d=t(4),o=t(3),i=t(5),l=t(0),s=t.n(l),c=t(14),u=t(26),h=t(255),p=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(d.a)(this,Object(o.a)(n).call(this,e))).handleClick=function(e,n){console.log("click",n),t.setState({active:n})},t.handleEdit=function(e){var n=e.target.value,a=t.state.active.split(",");t.setState(Object(c.a)(function(e){var t=e.data;a.forEach(function(e,n){t=t.find(function(n){return n.id===e}),n<a.length-1&&(t=t.children)}),t.text=n,e.active=void 0}))},t.handleKeyDown=function(e){13===e.keyCode&&e.target.blur()},t.keyGenerator=function(e,n){return"".concat(n,",").concat(e.id).replace(/^,/,"")},t.renderItem=function(e,n,a){return a?s.a.createElement("input",{autoFocus:!0,size:"small",onBlur:t.handleEdit,onKeyDown:t.handleKeyDown,defaultValue:e.text,type:"text"}):"node ".concat(e.text)},t.state={active:void 0,data:h.c},t.defaultExpanded=["1"],t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement(u.F,{active:this.state.active,data:this.state.data,keygen:this.keyGenerator,defaultExpanded:this.defaultExpanded,onClick:this.handleClick,onExpand:this.handleExpand,renderItem:this.renderItem})}}]),n}(l.Component)},907:function(e,n){e.exports="/**\n * cn - 点击事件\n *    -- 设置 onClick 属性监听节点点击\n * en - Click\n *    -- Set the onClick property to listen the node click.\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { Tree } from 'shineout'\nimport tree from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { active: undefined, data: tree }\n    this.defaultExpanded = ['1']\n  }\n\n  handleClick = (node, id) => {\n    console.log('click', id)\n    this.setState({ active: id })\n  }\n\n  handleEdit = (event) => {\n    const newText = event.target.value\n    const path = this.state.active.split(',')\n    this.setState(immer((draft) => {\n      let { data } = draft\n      path.forEach((id, index) => {\n        data = data.find(d => d.id === id)\n        if (index < path.length - 1) data = data.children\n      })\n      data.text = newText\n      draft.active = undefined\n    }))\n  }\n\n  handleKeyDown = (event) => {\n    if (event.keyCode === 13) event.target.blur()\n  }\n\n  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')\n\n  renderItem = (node, isExpanded, isActive) => (\n    isActive\n      ? (\n        <input\n          autoFocus\n          size=\"small\"\n          onBlur={this.handleEdit}\n          onKeyDown={this.handleKeyDown}\n          defaultValue={node.text}\n          type=\"text\"\n        />\n      )\n      : `node ${node.text}`\n  )\n\n  render() {\n    return (\n      <Tree\n        active={this.state.active}\n        data={this.state.data}\n        keygen={this.keyGenerator}\n        defaultExpanded={this.defaultExpanded}\n        onClick={this.handleClick}\n        onExpand={this.handleExpand}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n\n"},908:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),d=t(26),o=t(255);n.default=function(){return r.a.createElement(d.F,{data:o.c,defaultExpanded:["1","2"],line:!1,keygen:"id",renderItem:function(e){return"node ".concat(e.id)}})}},909:function(e,n){e.exports="/**\n * cn - 无连接线\n *    -- 设置 line 为 false，隐藏连接线\n * en - Line\n *    -- Set the line property to false to hid the connecting line.\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\n\nexport default function () {\n  return (\n    <Tree\n      data={data}\n      defaultExpanded={['1', '2']}\n      line={false}\n      keygen=\"id\"\n      renderItem={n => `node ${n.id}`}\n    />\n  )\n}\n"},910:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return f});var a=t(15),r=t(1),d=t(2),o=t(4),i=t(3),l=t(5),s=t(6),c=t(0),u=t.n(c),h=t(26),p=t(255),f=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(i.a)(n).call(this,e))).handleExpand=function(e){t.setState({expanded:e})},t.renderItem=function(e){return"node ".concat(e.id)},t.state={expanded:["1"]},t.collapseAll=t.handleExpand.bind(Object(s.a)(Object(s.a)(t)),[]),t.expandAll=t.handleExpand.bind(Object(s.a)(Object(s.a)(t)),Object(a.a)(p.a)),t}return Object(l.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{style:{marginBottom:12}},u.a.createElement(h.c,{onClick:this.expandAll},"Expand all"),u.a.createElement(h.c,{onClick:this.collapseAll},"Collapse all")),u.a.createElement(h.F,{data:p.c,keygen:"id",line:!1,expanded:this.state.expanded,onExpand:this.handleExpand,renderItem:this.renderItem}))}}]),n}(c.Component)},911:function(e,n){e.exports="/**\n * cn - 控制展开\n *    -- 受控的展开（此示例数据量太大，第一次全部展开会比较慢）\n * en - Expanded\n *    -- Controlled expansion (Because the data in this example is too large, it will be slower for the first time.)\n */\nimport React, { Component } from 'react'\nimport { Button, Tree } from 'shineout'\nimport data, { allIds } from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { expanded: ['1'] }\n\n    this.collapseAll = this.handleExpand.bind(this, [])\n    this.expandAll = this.handleExpand.bind(this, [...allIds])\n  }\n\n  handleExpand = (expanded) => {\n    this.setState({ expanded })\n  }\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <div>\n        <div style={{ marginBottom: 12 }}>\n          <Button onClick={this.expandAll}>Expand all</Button>\n          <Button onClick={this.collapseAll}>Collapse all</Button>\n        </div>\n        <Tree\n          data={data}\n          keygen=\"id\"\n          line={false}\n          expanded={this.state.expanded}\n          onExpand={this.handleExpand}\n          renderItem={this.renderItem}\n        />\n      </div>\n    )\n  }\n}\n"},912:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return m});var a=t(1),r=t(2),d=t(4),o=t(3),i=t(5),l=t(32),s=t(0),c=t.n(s),u=t(26),h=t(255),p={position:"absolute",right:30,top:100,bottom:40,width:240,overflow:"auto",background:"#f2f2f2",padding:10,zIndex:100},f=[{value:0,text:"mode=0 (full)"},{value:1,text:"mode=1 (half)"},{value:2,text:"mode=2 (child only)"},{value:3,text:"mode=3 (shallow)"}];var m=function(e){function n(e){var t;Object(a.a)(this,n),(t=Object(d.a)(this,Object(o.a)(n).call(this,e))).handleChange=function(e){t.setState({value:e})},t.handleModeChange=function(e){t.setState({mode:e,value:[]})},t.renderItem=function(e){return"node ".concat(e.id)};var r=[];return function e(n,t){var a=Object(l.a)(n,1)[0];a&&(t.push(a.id),a.children&&e(a.children,t))}(h.c,r),t.state={mode:1,value:r},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.state,n=e.mode,t=e.value;return c.a.createElement("div",null,c.a.createElement(u.v.Group,{keygen:"value",value:n,format:"value",onChange:this.handleModeChange,data:f,renderItem:"text"}),c.a.createElement("br",null),c.a.createElement(u.F,{data:h.c,defaultExpanded:["0","2"],keygen:"id",mode:n,onChange:this.handleChange,renderItem:this.renderItem,value:t}),c.a.createElement("div",{style:p},"Current select value:",c.a.createElement("pre",{style:{background:"#f2f2f2"}},JSON.stringify(t,null,2))))}}]),n}(s.Component)},913:function(e,n){e.exports="/**\n * cn - 可选择\n *    -- 选中值取值提供了 4 种模式\n *    -- 0: 只返回完全选中的节点，包含父节点\n *    -- 1: 返回全部选中的节点和半选中的父节点\n *    -- 2: 只返回选中的子节点\n *    -- 3: 如果父节点选中，只返回父节点\n * en - onChange\n *    -- Selected values provide 4 modes\n *    -- 0: Return only the fully selected node, including the parent node.\n *    -- 1: Return the fully selected nodes and semi-selected parent nodes.\n *    -- 2: Return only the selected child node.\n *    -- 3: Return only the parent node, if the parent node is selected.\n */\nimport React, { Component } from 'react'\nimport { Tree, Radio } from 'shineout'\nimport data from 'doc/data/tree'\n\nconst resultStyle = {\n  position: 'absolute',\n  right: 30,\n  top: 100,\n  bottom: 40,\n  width: 240,\n  overflow: 'auto',\n  background: '#f2f2f2',\n  padding: 10,\n  zIndex: 100,\n}\n\nconst modeList = [\n  { value: 0, text: 'mode=0 (full)' },\n  { value: 1, text: 'mode=1 (half)' },\n  { value: 2, text: 'mode=2 (child only)' },\n  { value: 3, text: 'mode=3 (shallow)' },\n]\n\nfunction getValue(list, value) {\n  const [node] = list\n  if (!node) return\n  value.push(node.id)\n  if (node.children) getValue(node.children, value)\n}\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n\n    const value = []\n    getValue(data, value)\n\n    this.state = { mode: 1, value }\n  }\n\n  handleChange = (value) => {\n    this.setState({ value })\n  }\n\n  handleModeChange = (mode) => {\n    this.setState({ mode, value: [] })\n  }\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    const { mode, value } = this.state\n\n    return (\n      <div>\n        <Radio.Group\n          keygen=\"value\"\n          value={mode}\n          format=\"value\"\n          onChange={this.handleModeChange}\n          data={modeList}\n          renderItem=\"text\"\n        />\n\n        <br />\n\n        <Tree\n          data={data}\n          defaultExpanded={['0', '2']}\n          keygen=\"id\"\n          mode={mode}\n          onChange={this.handleChange}\n          renderItem={this.renderItem}\n          value={value}\n        />\n\n        <div style={resultStyle}>\n          Current select value:\n          <pre style={{ background: '#f2f2f2' }}>\n            {JSON.stringify(value, null, 2)}\n          </pre>\n        </div>\n      </div>\n    )\n  }\n}\n"},914:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return h});var a=t(1),r=t(2),d=t(4),o=t(3),i=t(5),l=t(0),s=t.n(l),c=t(26),u=t(255),h=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(i)))).handleChange=function(e){console.log(e)},t.isDisabled=function(e){return"1-0"===e.id},t.renderItem=function(e){return"node ".concat(e.id)},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement(c.F,{data:u.c,defaultExpanded:["1","2"],disabled:this.isDisabled,keygen:"id",onChange:this.handleChange,renderItem:this.renderItem})}}]),n}(l.Component)},915:function(e,n){e.exports="/**\n * cn - 禁用\n *    -- disabled 为函数时，根据返回结果禁用节点，同时禁用子节点\n *    -- disabled 为 true 时，禁用全部节点\n * en - disabled\n *    -- When the disabled property is a function, disable the node and its child nodes according to the returned result.\n *    -- When the disabled property is true, disable all nodes.\n */\nimport React, { Component } from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\n\nexport default class extends Component {\n  handleChange = (value) => {\n    console.log(value)\n  }\n\n  isDisabled = node => node.id === '1-0'\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <Tree\n        data={data}\n        defaultExpanded={['1', '2']}\n        disabled={this.isDisabled}\n        keygen=\"id\"\n        onChange={this.handleChange}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},916:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return h});var a=t(1),r=t(2),d=t(4),o=t(3),i=t(5),l=t(0),s=t.n(l),c=t(26),u=t(255),h=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(d.a)(this,Object(o.a)(n).call(this,e))).handleDrop=function(e,n,a,r){console.log(e,n,a,r),t.setState({data:e})},t.renderItem=function(e){return"node ".concat(e.text)},t.state={data:u.c},t.defaultExpanded=["1"],t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement(c.F,{data:this.state.data,keygen:"id",defaultExpanded:this.defaultExpanded,onDrop:this.handleDrop,renderItem:this.renderItem})}}]),n}(l.Component)},917:function(e,n){e.exports="/**\n * cn - 拖动\n *    -- 设置 onDrop 属性可以拖动节点\n * en - Drag\n *    -- Set the onDrop property to drag nodes.\n */\nimport React, { Component } from 'react'\nimport { Tree } from 'shineout'\nimport tree from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: tree }\n    this.defaultExpanded = ['1']\n  }\n\n  handleDrop = (data, key, targetKey, position) => {\n    console.log(data, key, targetKey, position)\n    this.setState({ data })\n  }\n\n  renderItem = node => `node ${node.text}`\n\n  render() {\n    return (\n      <Tree\n        data={this.state.data}\n        keygen=\"id\"\n        defaultExpanded={this.defaultExpanded}\n        onDrop={this.handleDrop}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n\n"},918:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return m});var a=t(15),r=t(1),d=t(2),o=t(4),i=t(3),l=t(5),s=t(0),c=t.n(s),u=t(14),h=t(26),p=["0","1","2","3","4"].map(function(e){return{id:e}}),f=function(){return Array.from({length:Math.round(4*Math.random())},function(e,n){return n})},m=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(i.a)(n).call(this,e))).loader=function(e){var n=e.split(",");setTimeout(function(){t.setState(Object(u.a)(function(e){var t=e.data;n.forEach(function(e,a){t=t.find(function(n){return n.id===e}),a<n.length-1&&(t=t.children)}),t.children=Object(a.a)(f().map(function(e){return{id:"".concat(t.id,"-").concat(e)}}))}))},500)},t.keyGenerator=function(e,n){return"".concat(n,",").concat(e.id).replace(/^,/,"")},t.handleChange=function(e){return t.setState({value:e})},t.renderItem=function(e){return"node ".concat(e.id)},t.state={data:p,value:[]},t}return Object(l.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement(h.F,{data:this.state.data,keygen:this.keyGenerator,loader:this.loader,renderItem:this.renderItem,onChange:this.handleChange,value:this.state.value})}}]),n}(s.Component)},919:function(e,n){e.exports="/**\n * cn - 动态加载\n *    -- 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数\n * en - Lazy load\n *    -- Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded.\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { Tree } from 'shineout'\n\nconst initData = ['0', '1', '2', '3', '4'].map(i => ({ id: i }))\nconst createRange = () => Array.from({ length: Math.round(Math.random() * 4) }, (_, i) => i)\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: initData, value: [] }\n  }\n\n  loader = (key) => {\n    const path = key.split(',')\n\n    setTimeout(() => {\n      this.setState(immer((draft) => {\n        let { data } = draft\n        path.forEach((pid, i) => {\n          data = data.find(d => d.id === pid)\n          if (i < path.length - 1) data = data.children\n        })\n        data.children = [...createRange().map(i => ({ id: `${data.id}-${i}` }))]\n      }))\n    }, 500)\n  }\n\n  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')\n\n  handleChange = value => this.setState({ value })\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <Tree\n        data={this.state.data}\n        keygen={this.keyGenerator}\n        loader={this.loader}\n        renderItem={this.renderItem}\n        onChange={this.handleChange}\n        value={this.state.value}\n      />\n    )\n  }\n}\n\n"},920:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return u});var a=t(1),r=t(2),d=t(4),o=t(3),i=t(5),l=t(0),s=t.n(l),c=t(255),u=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(d.a)(this,Object(o.a)(n).call(this,e))).toggle=function(){t.setState({expand:!t.state.expand})},t.state={expand:!1},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.state.expand;return s.a.createElement("div",null,"Current node count: ",c.a.length,". ",s.a.createElement("a",{href:"javascript:;",onClick:this.toggle},e?"Collapse":"Expand"," Code"),s.a.createElement("pre",{style:{display:e?"block":"none"}},JSON.stringify(c.c,null,2)))}}]),n}(l.Component)},921:function(e,n){e.exports="import React, { Component } from 'react'\nimport data, { allIds } from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { expand: false }\n  }\n\n  toggle = () => {\n    this.setState({ expand: !this.state.expand })\n  }\n\n  render() {\n    const { expand } = this.state\n    return (\n      <div>\n        Current node count: {allIds.length}. <a href=\"javascript:;\" onClick={this.toggle}>{expand ? 'Collapse' : 'Expand'} Code</a>\n        <pre style={{ display: expand ? 'block' : 'none' }}>\n          { JSON.stringify(data, null, 2) }\n        </pre>\n      </div>\n    )\n  }\n}\n"}});