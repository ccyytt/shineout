webpackJsonpShineoutDoc([5],{253:function(e,t,n){"use strict";t.b=m,n.d(t,"a",function(){return p});var a=n(10),r=n(14),o=n(73),l=n(76),i=n(77),c=n(78),u=n(75),d=n(74),s=1e4,f=[];!function(){for(var e=Object(o.b)(u.a,20),t=Object(o.b)(d.a,30),n=Object(o.b)(d.a,5),a=1;a<=s;a++)f.push({id:a,firstName:Object(o.a)(l.a),lastName:Object(o.a)(i.a),position:Object(o.a)(c.a),start:Object(o.c)("yyyy-MM-dd",432e9),time:Object(o.c)("hh:mm"),salary:Object(o.d)(5e5,5e4),country:Object(o.a)(e),office:Object(o.a)(t),office5:Object(o.a)(n),height:Object(o.e)(14,100)});for(var r=[],m=0;m<=l.a.length;m+=3)r.push(l.a[m])}();function m(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0,l=a.name,i=a.order;switch(l){case"id":case"salary":e="asc"===i?function(e,t){return e[l]-t[l]}:function(e,t){return t[l]-e[l]};break;default:l&&(e="asc"===i?function(e,t){return e[l].localeCompare(t[l])}:function(e,t){return t[l].localeCompare(e[l])})}var c=e?Object(r.a)(f,function(t){return t.sort(e)}):f;return o&&(o=o.toLocaleLowerCase(),c=c.filter(function(e){return"".concat(e.firstName," ").concat(e.lastName).toLocaleLowerCase().indexOf(o)>=0})),c.slice(n,n+t)}var p={get:function(e,t){var n=t.current,a=void 0===n?1:n,r=t.pageSize,l=void 0===r?100:r,i=t.sorter,c=t.username,u=(a-1)*l;return new Promise(function(e){setTimeout(function(){e({status:1,data:m(l,u,i,c),current:a,pageSize:l,total:f.length})},Object(o.d)(500,300))})},post:function(e,t){var n=t.op,r=t.ids;return new Promise(function(e){switch(n){case"delete":f=f.filter(function(e){return r.indexOf(e.id)<0});break;case"on":case"off":f.forEach(function(e,t){r.indexOf(e.id)>=0&&(f[t]=Object(a.a)({},e,{status:"on"===n}))})}setTimeout(function(){e(!0)},Object(o.d)(200))})}}},277:function(e,t,n){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return o.slice(t,t+e)};var a=n(73),r=n(74),o=Object(a.f)(r.a).map(function(e,t){return{id:t+1,city:e}})},718:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(72),l=n(71),i=n(43),c=n(719),u=n.n(c),d=n(720),s=n.n(d),f=Object(i.a)(u.a,s.a),m=[{name:"01-base",title:Object(i.a)("基本用法 \n Select 没有单独的 Option 选项，通过数据来渲染。","Base \n Select generate group of options from data."),component:n(721).default,rawText:n(722)},{name:"02-format",title:Object(i.a)("数据处理 \n 设置 format 选项把数据对象格式化为指定的 value","Datum \n Set format property to format the data object to the specified value."),component:n(723).default,rawText:n(724)},{name:"03-datum",title:Object(i.a)(" \n 如果 format 属性不能满足需求，可以借助 Datum.List 来处理",' \n When the format does not satisfied your requirements, you can use <a href="#/components/Datum.List">Data.List</a> istead.'),component:n(725).default,rawText:n(726)},{name:"04-clearable",title:Object(i.a)("可清空 \n clearable 属性为 true 时，hover 后会显示清空图标。","Clearable \n Set the clearable property to true, the clear icon will be displayed on hover."),component:n(727).default,rawText:n(728)},{name:"04-size",title:Object(i.a)("大小 \n 有三种 size，['small', default, 'large']","Size \n There are three sizes, ['small', default, 'large']"),component:n(729).default,rawText:n(730)},{name:"05-multiple",title:Object(i.a)("多选 \n multiple 属性为true时，为多选状态，默认为单选","Multiple \n Set the multiple property to true, it is multi-selection."),component:n(731).default,rawText:n(732)},{name:"06-bigdata",title:Object(i.a)("性能 \n Select 内部用懒加载机制来优化性能，本例加载了10000条数据。","Performance \n Select uses a lazy loading to optimize performance. This example loads 10,000 pieces of data."),component:n(733).default,rawText:n(734)},{name:"07-disabled",title:Object(i.a)("禁用 \n 设置 disabled 禁用组件","Disabled \n Set the disabled property to disable the component."),component:n(735).default,rawText:n(736)},{name:"08-filter",title:Object(i.a)("筛选数据 - 内置 \n onFilter 返回函数时，使用这个函数做前端过滤","Filter - built-in \n When the onFilter property returns a function, use this function to do front-end filtering."),component:n(737).default,rawText:n(738)},{name:"09-filter",title:Object(i.a)("筛选数据 - 服务端 \n onFilter 函数不返回结果时，从服务端筛选数据或自行处理","Filter - server \n When the onFilter property don't return a function, you can filter data from server or filter by yourself."),component:n(739).default,rawText:n(740)},{name:"10-filter",title:Object(i.a)(" \n 示例：服务端过滤多选"," \n Example: Server-side filters multiple selection."),component:n(741).default,rawText:n(742)},{name:"11-create",title:Object(i.a)("创建选项 \n 设置 onCreate 属性可以通过输入创建选项","Create by input \n Set the onCreate property can create options by inputting."),component:n(743).default,rawText:n(744)},{name:"12-create",title:Object(i.a)(" \n 示例：创建选项和 filter 配合使用"," \n Example: Create options with filter"),component:n(745).default,rawText:n(746)},{name:"13-absolute",title:Object(i.a)("绝对定位 \n 如果选项弹出层的父容器被遮挡，可以设置 absolute 属性使弹出选项在单独层中渲染。（非必要情况下不建议）","Absolute \n If the parent container of the pop-up layer is occluded, you can set the absolute property to make the pop-up options rendered in a separate layer. (not recommended if not necessary)"),component:n(747).default,rawText:n(748)}];t.default=Object(o.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:f,examples:m}))})},719:function(e,t){e.exports="# Select *选择框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| absolute | bool | false | 为 true 时，选项弹出层在 DOM 中独立 render |\n| clearable | bool | false | 是否可清除值 |\n| data | array | 必填 | 数据项，单条数据作为 value 的数据必须是唯一的 |\n| datum | object | 无 | 如果 format 和 prediction 属性无法满足需求，可以传入一个 [Datum.List](#/components/Datum.List) 对象，或者 Datum.List 配置来处理数据。 |\n| defaultValue | array | | 初始值 |\n| disabled | bool \\| function | false | 如果 disabled 为 true，禁用全部选项，如果 disabled 为函数，根据函数反回结果禁用选项 |\n| filterDelay | number | 400 | 毫秒。用户输入触发 fitler 事件的延时 |\n| format | string \\| function | d => d | 格式化 value<br />默认值，返回原始数据<br />为string时，会作为key从原始数据中获取值，相当于 (d) => d[format]<br /> 为函数时，以函数返回结果作为 value |\n| name | string | 无 | Form 存取数据的名称 |\n| keygen | string \\| function(obj):string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n| onChange | function(value) | 无 | value 为 datum.getValue() |\n| onCreate | function \\| bool | 无 | 如果设置了 onCreate 事件，组件为可输入状态<br />onCreate为函数时，将此函数返回值作为新的选项拆入最上方<br />onCreate为true时，使用默认函数 text => text |\n| onFilter | function | 无 | onFilter 不为空时，可以输入过滤数据<br />onFilter 如果返回一个函数，使用这个函数做前端过滤<br />如果不返回，可以自行做后端过滤 |\n| prediction | function | (val, d) => val===format(d) | 默认使用 format 函数执行的结果来比较是否匹配，在某些情况下（例如返回原始数据的对象，更新数据时，生成了一个值相同，非同一个对象的选项），需要借助 prediction 函数来判断是否匹配 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| renderResult | function(d) | renderItem | 选中后在结果中显示的内容，默认和 renderItem 相同 |\n| value | array \\| string \\| object | | 在Form中，value会被表单接管，value无效 |"},720:function(e,t){e.exports="# Select\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| absolute | bool | false | When it is true, the pop-up layer of option append into document.body. |\n| clearable | bool | false | If clearable is true, show clear value icon |\n| data | array | required | Options data |\n| defaultValue | array | | Initial value |\n| datum | object | - | If the format and prediction does not satisfied your requirements, you can pass in a [Datum.List](#/components/Datum.List) object or the Datum.List configuration to process data. |\n| disabled | bool \\| function | false | When the value is true, disabled all checkboxes; When the value is function, disable the checkbox that this function returns true. |\n| filterDelay | number | 400 | ms. The delay of user input triggering filter events |\n| format | string \\| function | d => d | Format value<br />The defaule value is return the original data.<br />When it is a string, the value is fetched from the original data as a key equivalent to (d) => d[format]<br />When it is a function, use its return value. |\n| name | string | - | The name of a Form that accesses data |\n| keygen | string \\| function(obj):string | index | Generate a auxiliary method for each key<br />If not filled, index will be used(not recommended,there may be problems with more than 10 data)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n| onChange | function(value) | - | value is the datum.getValue(). |\n| onCreate | function \\| bool | - | If the onCreate event is set, the component is inputable.<br />When onCreate is a function, the return value of this function is diaplay at the top as a new option.<br />When onCreate is true, use the built-in functuon text => text. |\n| onFilter | function | - | When the onFilter is not empty, you can filter data by input.<br />If the onFilter returns a function, use this function as a front-end filter.<br />If return undefined, you can do your own backend filtering. |\n| prediction | function | (val, d) => val===format(d) | By default, the result of the format function is used to compare whether it matches. In some cases (for example, whe an object that returns the original data is updated, an different option with the same value  is generated), the prediction function needs to be used to determine whether match |\n| renderItem | string \\| function(d) | required | When it is a string, return d\\[string]<br />When it is a function, return the result of the function. |\n| renderResult | function(d) | renderItem | The content displayed in the result after selecting, if not set, use renderItem |\n| value | array \\| string \\| object | | In the Form, the value will be taken over by the form and the value will be invalid. |\n"},721:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return r.a.createElement(o.x,{keygen:!0,style:{width:240},data:l,onChange:function(e){return console.log(e)}})}},722:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Select 没有单独的 Option 选项，通过数据来渲染。\n * en - Base\n *    -- Select generate group of options from data.\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <Select\n      keygen\n      style={{ width: 240 }}\n      data={data}\n      onChange={d => console.log(d)}\n    />\n  )\n}\n"},723:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=n(277),i=Object(l.a)(100),c=function(e){return console.log(e)},u={width:240,marginBottom:12,display:"block"};t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.x,{data:i,format:"id",keygen:"id",defaultValue:3,onChange:c,prediction:function(e,t){return e===t.id},style:u,placeholder:"Select a city",renderItem:"city"}),r.a.createElement(o.x,{data:i,multiple:!0,keygen:"id",defaultValue:[3,4],format:"id",onChange:c,placeholder:"Select citys",renderItem:"city"}))}},724:function(e,t){e.exports='/**\n * cn - 数据处理\n *    -- 设置 format 选项把数据对象格式化为指定的 value\n * en - Datum\n *    -- Set format property to format the data object to the specified value.\n */\nimport React from \'react\'\nimport { Select } from \'shineout\'\nimport { fetchSync as fetchCity } from \'doc/data/city\'\n\nconst citys = fetchCity(100)\nconst onChange = d => console.log(d)\nconst style = { width: 240, marginBottom: 12, display: \'block\' }\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        data={citys}\n        format="id"\n        keygen="id"\n        defaultValue={3}\n        onChange={onChange}\n        prediction={(v, d) => v === d.id}\n        style={style}\n        placeholder="Select a city"\n        renderItem="city"\n      />\n\n      <Select\n        data={citys}\n        multiple\n        keygen="id"\n        defaultValue={[3, 4]}\n        format="id"\n        onChange={onChange}\n        placeholder="Select citys"\n        renderItem="city"\n      />\n    </div>\n  )\n}\n'},725:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=n(277),i=Object(l.a)(100),c=function(e){return console.log(e)},u={width:240,marginBottom:12,display:"block"};t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.x,{data:i,datum:{format:"id"},keygen:"id",defaultValue:3,onChange:c,style:u,placeholder:"Select a city",renderItem:"city",renderResult:function(e){return e.city}}),r.a.createElement(o.x,{data:i,multiple:!0,keygen:"id",defaultValue:"3,4",datum:{format:function(e){return e.id.toString()},separator:",",prediction:function(e,t){return e===t.id.toString()}},onChange:c,placeholder:"Select citys",renderItem:"city"}))}},726:function(e,t){e.exports='/**\n * cn -\n *    -- 如果 format 属性不能满足需求，可以借助 Datum.List 来处理\n * en -\n *    -- When the format does not satisfied your requirements, you can use <a href="#/components/Datum.List">Data.List</a> istead.\n */\nimport React from \'react\'\nimport { Select } from \'shineout\'\nimport { fetchSync as fetchCity } from \'doc/data/city\'\n\nconst citys = fetchCity(100)\nconst onChange = d => console.log(d)\nconst style = { width: 240, marginBottom: 12, display: \'block\' }\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        data={citys}\n        datum={{ format: \'id\' }}\n        keygen="id"\n        defaultValue={3}\n        onChange={onChange}\n        style={style}\n        placeholder="Select a city"\n        renderItem="city"\n        renderResult={d => d.city}\n      />\n\n      <Select\n        data={citys}\n        multiple\n        keygen="id"\n        defaultValue="3,4"\n        datum={{\n          format: d => d.id.toString(),\n          separator: \',\',\n          prediction: (v, d) => v === d.id.toString(),\n        }}\n        onChange={onChange}\n        placeholder="Select citys"\n        renderItem="city"\n      />\n    </div>\n  )\n}\n'},727:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.x,{style:{width:240,marginBottom:12},clearable:!0,keygen:!0,data:l,placeholder:"Select color",onChange:function(e){return console.log(e)}}),r.a.createElement("br",null),r.a.createElement(o.x,{style:{width:300},data:l,clearable:!0,keygen:!0,multiple:!0,placeholder:"Multiple select",onChange:function(e){return console.log(e)}}))}},728:function(e,t){e.exports="/**\n * cn - 可清空\n *    -- clearable 属性为 true 时，hover 后会显示清空图标。\n * en - Clearable\n *    -- Set the clearable property to true, the clear icon will be displayed on hover.\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        style={{ width: 240, marginBottom: 12 }}\n        clearable\n        keygen\n        data={data}\n        placeholder=\"Select color\"\n        onChange={d => console.log(d)}\n      />\n      <br />\n      <Select\n        style={{ width: 300 }}\n        data={data}\n        clearable\n        keygen\n        multiple\n        placeholder=\"Multiple select\"\n        onChange={d => console.log(d)}\n      />\n    </div>\n  )\n}\n"},729:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){var e={data:l,keygen:!0,style:{width:100,marginRight:12}};return r.a.createElement("div",null,r.a.createElement(o.x,Object.assign({},e,{size:"small",placeholder:"small"})),r.a.createElement(o.x,Object.assign({},e,{placeholder:"default"})),r.a.createElement(o.x,Object.assign({},e,{size:"large",placeholder:"large"})))}},730:function(e,t){e.exports="/**\n * cn - 大小\n *    -- 有三种 size，['small', default, 'large']\n * en - Size\n *    -- There are three sizes, ['small', default, 'large']\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  const props = { data, keygen: true, style: { width: 100, marginRight: 12 } }\n\n  return (\n    <div>\n      <Select {...props} size=\"small\" placeholder=\"small\" />\n      <Select {...props} placeholder=\"default\" />\n      <Select {...props} size=\"large\" placeholder=\"large\" />\n    </div>\n  )\n}\n"},731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return r.a.createElement(o.x,{style:{width:300},data:l,keygen:!0,multiple:!0,placeholder:"Multiple select",onChange:function(e,t,n){return console.log(e,t,n)}})}},732:function(e,t){e.exports="/**\n * cn - 多选\n *    -- multiple 属性为true时，为多选状态，默认为单选\n * en - Multiple\n *    -- Set the multiple property to true, it is multi-selection.\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <Select\n      style={{ width: 300 }}\n      data={data}\n      keygen\n      multiple\n      placeholder=\"Multiple select\"\n      onChange={(vs, d, c) => console.log(vs, d, c)}\n    />\n  )\n}\n"},733:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=n(253),i=Object(l.b)(1e4),c=function(e){return console.log(e)},u={width:240,marginBottom:12,display:"block"};t.default=function(){return r.a.createElement(o.x,{data:i,datum:{format:"id"},keygen:"id",defaultValue:3,onChange:c,style:u,placeholder:"Select a user",renderItem:function(e,t){return"".concat(e.firstName," ").concat(e.lastName," (").concat(t+1,")")},renderResult:function(e){return"".concat(e.firstName," ").concat(e.lastName)}})}},734:function(e,t){e.exports="/**\n * cn - 性能\n *    -- Select 内部用懒加载机制来优化性能，本例加载了10000条数据。\n * en - Performance\n *    -- Select uses a lazy loading to optimize performance. This example loads 10,000 pieces of data.\n */\nimport React from 'react'\nimport { Select } from 'shineout'\nimport { fetchSync as fetchUser } from 'doc/data/user'\n\nconst users = fetchUser(10000)\nconst onChange = d => console.log(d)\nconst style = { width: 240, marginBottom: 12, display: 'block' }\n\nexport default function () {\n  return (\n    <Select\n      data={users}\n      datum={{ format: 'id' }}\n      keygen=\"id\"\n      defaultValue={3}\n      onChange={onChange}\n      style={style}\n      placeholder=\"Select a user\"\n      renderItem={(user, i) => `${user.firstName} ${user.lastName} (${i + 1})`}\n      renderResult={user => `${user.firstName} ${user.lastName}`}\n    />\n  )\n}\n"},735:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.x,{style:{width:240,marginBottom:12},disabled:!0,keygen:!0,data:l,placeholder:"Select color"}),r.a.createElement("br",null),r.a.createElement(o.x,{style:{width:300},data:l,disabled:function(e){return"green"===e},keygen:!0,multiple:!0,defaultValue:["orange","green"],placeholder:"Multiple select",onChange:function(e){return console.log(e)}}))}},736:function(e,t){e.exports="/**\n * cn - 禁用\n *    -- 设置 disabled 禁用组件\n * en - Disabled\n *    -- Set the disabled property to disable the component.\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        style={{ width: 240, marginBottom: 12 }}\n        disabled\n        keygen\n        data={data}\n        placeholder=\"Select color\"\n      />\n      <br />\n      <Select\n        style={{ width: 300 }}\n        data={data}\n        disabled={d => d === 'green'}\n        keygen\n        multiple\n        defaultValue={['orange', 'green']}\n        placeholder=\"Multiple select\"\n        onChange={v => console.log(v)}\n      />\n    </div>\n  )\n}\n"},737:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.x,{style:{width:240,marginBottom:12},data:l,keygen:!0,placeholder:"Select color",onChange:function(e){return console.log(e)},onFilter:function(e){return function(t){return t.indexOf(e)>=0}}}),r.a.createElement("br",null),r.a.createElement(o.x,{style:{width:300},multiple:!0,keygen:!0,data:l,placeholder:"Select color",onChange:function(e){return console.log(e)},onFilter:function(e){return function(t){return t.indexOf(e)>=0}}}))}},738:function(e,t){e.exports="/**\n * cn - 筛选数据 - 内置\n *    -- onFilter 返回函数时，使用这个函数做前端过滤\n * en - Filter - built-in\n *    -- When the onFilter property returns a function, use this function to do front-end filtering.\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        style={{ width: 240, marginBottom: 12 }}\n        data={data}\n        keygen\n        placeholder=\"Select color\"\n        onChange={d => console.log(d)}\n        onFilter={text => d => d.indexOf(text) >= 0}\n      />\n\n      <br />\n\n      <Select\n        style={{ width: 300 }}\n        multiple\n        keygen\n        data={data}\n        placeholder=\"Select color\"\n        onChange={d => console.log(d)}\n        onFilter={text => d => d.indexOf(text) >= 0}\n      />\n    </div>\n  )\n}\n"},739:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return f});var a=n(1),r=n(2),o=n(4),l=n(3),i=n(5),c=n(0),u=n.n(c),d=n(26),s=n(253),f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).handleFilter=function(e){n.setState({loading:!0}),s.a.get("user",{username:e}).then(function(e){n.setState({loading:!1,data:e.data})})},n.state={data:[],loading:!1},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.handleFilter("")}},{key:"render",value:function(){return u.a.createElement(d.x,{loading:this.state.loading,keygen:"id",style:{width:240},data:this.state.data,placeholder:"Select user",onChange:function(e){return console.log(e)},onFilter:this.handleFilter,datum:{format:"id"},renderItem:function(e){return"".concat(e.firstName," ").concat(e.lastName)}})}}]),t}(c.Component)},740:function(e,t){e.exports="/**\n * cn - 筛选数据 - 服务端\n *    -- onFilter 函数不返回结果时，从服务端筛选数据或自行处理\n * en - Filter - server\n *    -- When the onFilter property don't return a function, you can filter data from server or filter by yourself.\n */\nimport React, { Component } from 'react'\nimport { Select } from 'shineout'\nimport { fetch } from 'doc/data/user'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      data: [],\n      loading: false,\n    }\n  }\n\n  componentDidMount() {\n    this.handleFilter('')\n  }\n\n  handleFilter = (text) => {\n    this.setState({ loading: true })\n    fetch.get('user', { username: text }).then((res) => {\n      this.setState({ loading: false, data: res.data })\n    })\n  }\n\n  render() {\n    return (\n      <Select\n        loading={this.state.loading}\n        keygen=\"id\"\n        style={{ width: 240 }}\n        data={this.state.data}\n        placeholder=\"Select user\"\n        onChange={d => console.log(d)}\n        onFilter={this.handleFilter}\n        datum={{ format: 'id' }}\n        renderItem={user => `${user.firstName} ${user.lastName}`}\n      />\n    )\n  }\n}\n"},741:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return f});var a=n(1),r=n(2),o=n(4),l=n(3),i=n(5),c=n(0),u=n.n(c),d=n(26),s=n(253),f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).handleFilter=function(e){void 0!==e&&(n.setState({loading:!0}),s.a.get("user",{username:e}).then(function(e){n.setState({loading:!1,data:e.data})}))},n.state={data:[],loading:!1},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.handleFilter("")}},{key:"render",value:function(){return u.a.createElement(d.x,{loading:this.state.loading,multiple:!0,keygen:"id",data:this.state.data,placeholder:"Select user",onFilter:this.handleFilter,datum:{format:"id"},renderItem:function(e){return"".concat(e.firstName," ").concat(e.lastName)}})}}]),t}(c.Component)},742:function(e,t){e.exports="/**\n * cn -\n *    -- 示例：服务端过滤多选\n * en -\n *    -- Example: Server-side filters multiple selection.\n */\nimport React, { Component } from 'react'\nimport { Select } from 'shineout'\nimport { fetch } from 'doc/data/user'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      data: [],\n      loading: false,\n    }\n  }\n\n  componentDidMount() {\n    this.handleFilter('')\n  }\n\n  handleFilter = (text) => {\n    if (text === undefined) return\n    this.setState({ loading: true })\n    fetch.get('user', { username: text }).then((res) => {\n      this.setState({ loading: false, data: res.data })\n    })\n  }\n\n  render() {\n    return (\n      <Select\n        loading={this.state.loading}\n        multiple\n        keygen=\"id\"\n        data={this.state.data}\n        placeholder=\"Select user\"\n        // onChange={d => console.log(d)}\n        onFilter={this.handleFilter}\n        datum={{ format: 'id' }}\n        renderItem={user => `${user.firstName} ${user.lastName}`}\n      />\n    )\n  }\n}\n"},743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.x,{style:{width:240,marginBottom:12},data:l,keygen:!0,placeholder:"input color",onCreate:!0,onChange:function(e){return console.log(e)},defaultValue:"brown"}),r.a.createElement("br",null),r.a.createElement(o.x,{style:{width:400},data:l,keygen:!0,multiple:!0,placeholder:"input color",onCreate:function(e){return e},onChange:function(e){return console.log(e)}}))}},744:function(e,t){e.exports="/**\n * cn - 创建选项\n *    -- 设置 onCreate 属性可以通过输入创建选项\n * en - Create by input\n *    -- Set the onCreate property can create options by inputting.\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        style={{ width: 240, marginBottom: 12 }}\n        data={data}\n        keygen\n        placeholder=\"input color\"\n        onCreate\n        onChange={d => console.log(d)}\n        defaultValue=\"brown\"\n      />\n      <br />\n      <Select\n        style={{ width: 400 }}\n        data={data}\n        keygen\n        multiple\n        placeholder=\"input color\"\n        onCreate={t => t}\n        onChange={d => console.log(d)}\n      />\n    </div>\n  )\n}\n"},745:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.x,{style:{width:240,marginBottom:12},data:l,placeholder:"input label",keygen:!0,onCreate:!0,onChange:function(e){return console.log(e)},onFilter:function(e){return function(t){return t.indexOf(e)>=0}},filterDelay:0}))}},746:function(e,t){e.exports="/**\n * cn -\n *    -- 示例：创建选项和 filter 配合使用\n * en -\n *    -- Example: Create options with filter\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        style={{ width: 240, marginBottom: 12 }}\n        data={data}\n        placeholder=\"input label\"\n        keygen\n        onCreate\n        onChange={d => console.log(d)}\n        onFilter={text => d => d.indexOf(text) >= 0}\n        filterDelay={0}\n      />\n    </div>\n  )\n}\n"},747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(26),l=n(253),i=Object(l.b)(1e4),c=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return r.a.createElement("div",{style:{padding:10,height:100,overflow:"hidden"}},r.a.createElement(o.x,{absolute:!0,data:c,keygen:!0,style:{width:100,marginRight:12},onFilter:function(e){return function(t){return t.indexOf(e)>-1}},placeholder:"default"}),r.a.createElement(o.x,{multiple:!0,data:i,keygen:"id",absolute:!0,style:{width:300},placeholder:"Select user",onChange:function(e){return console.log(e)},onFilter:function(e){return function(t){return t.firstName.indexOf(e)>-1}},format:"id",renderItem:function(e){return"".concat(e.firstName," ").concat(e.lastName)}}))}},748:function(e,t){e.exports="/**\n * cn - 绝对定位\n *    -- 如果选项弹出层的父容器被遮挡，可以设置 absolute 属性使弹出选项在单独层中渲染。（非必要情况下不建议）\n * en - Absolute\n *    -- If the parent container of the pop-up layer is occluded, you can set the absolute property to make the pop-up options rendered in a separate layer. (not recommended if not necessary)\n */\nimport React from 'react'\nimport { Select } from 'shineout'\nimport { fetchSync as fetchUser } from 'doc/data/user'\n\nconst users = fetchUser(10000)\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div style={{ padding: 10, height: 100, overflow: 'hidden' }}>\n      <Select\n        absolute\n        data={data}\n        keygen\n        style={{ width: 100, marginRight: 12 }}\n        onFilter={text => d => d.indexOf(text) > -1}\n        placeholder=\"default\"\n      />\n\n      <Select\n        multiple\n        data={users}\n        keygen=\"id\"\n        absolute\n        style={{ width: 300 }}\n        placeholder=\"Select user\"\n        onChange={d => console.log(d)}\n        onFilter={text => d => d.firstName.indexOf(text) > -1}\n        format=\"id\"\n        renderItem={user => `${user.firstName} ${user.lastName}`}\n      />\n    </div>\n  )\n}\n"}});