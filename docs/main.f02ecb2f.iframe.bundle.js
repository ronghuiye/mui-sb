(self.webpackChunkintro_storybook_react_template=self.webpackChunkintro_storybook_react_template||[]).push([[179],{"./src/components/Task.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:function(){return Archived},Default:function(){return Default},Pinned:function(){return Pinned},__namedExportsOrder:function(){return __namedExportsOrder}});var _home_runner_work_mui_sb_mui_sb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Task__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Task.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_Task__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Task"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_runner_work_mui_sb_mui_sb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX"}};var Pinned=Template.bind({});Pinned.args={task:(0,_home_runner_work_mui_sb_mui_sb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_mui_sb_mui_sb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:(0,_home_runner_work_mui_sb_mui_sb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_mui_sb_mui_sb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Default.args.task),{},{state:"TASK_ARCHIVED"})},Default.parameters=(0,_home_runner_work_mui_sb_mui_sb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Task {...args} />"}},Default.parameters),Pinned.parameters=(0,_home_runner_work_mui_sb_mui_sb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Task {...args} />"}},Pinned.parameters),Archived.parameters=(0,_home_runner_work_mui_sb_mui_sb_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Task {...args} />"}},Archived.parameters);var __namedExportsOrder=["Default","Pinned","Archived"]},"./src/components/TaskList.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Empty:function(){return Empty},Loading:function(){return Loading},WithPinnedTasks:function(){return WithPinnedTasks},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return TaskList_stories}});var toConsumableArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Task=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Task.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=(0,jsx_runtime.jsxs)("div",{className:"loading-item",children:[(0,jsx_runtime.jsx)("span",{className:"glow-checkbox"}),(0,jsx_runtime.jsxs)("span",{className:"glow-text",children:[(0,jsx_runtime.jsx)("span",{children:"Loading"})," ",(0,jsx_runtime.jsx)("span",{children:"cool"})," ",(0,jsx_runtime.jsx)("span",{children:"state"})]})]});if(loading)return(0,jsx_runtime.jsxs)("div",{className:"list-items","data-testid":"loading",children:[LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow]},"loading");if(0===tasks.length)return(0,jsx_runtime.jsx)("div",{className:"list-items","data-testid":"empty",children:(0,jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[(0,jsx_runtime.jsx)("span",{className:"icon-check"}),(0,jsx_runtime.jsx)("p",{className:"title-message",children:"You have no tasks"}),(0,jsx_runtime.jsx)("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty");var tasksInOrder=[].concat((0,toConsumableArray.Z)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),(0,toConsumableArray.Z)(tasks.filter((function(t){return"TASK_PINNED"!==t.state}))));return(0,jsx_runtime.jsx)("div",{className:"list-items",children:tasksInOrder.map((function(task){return(0,jsx_runtime.jsx)(Task.Z,(0,objectSpread2.Z)({task:task},events),task.id)}))})}TaskList.__docgenInfo={description:"",methods:[],displayName:"TaskList"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"TaskList",docgenInfo:TaskList.__docgenInfo,path:"src/components/TaskList.js"});var Task_stories=__webpack_require__("./src/components/Task.stories.js"),TaskList_stories={component:TaskList,title:"TaskList",decorators:[function(story){return(0,jsx_runtime.jsx)("div",{style:{padding:"3rem"},children:story()})}]},Template=function Template(args){return(0,jsx_runtime.jsx)(TaskList,(0,objectSpread2.Z)({},args))},Default=Template.bind({});Default.args={tasks:[(0,objectSpread2.Z)((0,objectSpread2.Z)({},Task_stories.Default.args.task),{},{id:"1",title:"Task 1"}),(0,objectSpread2.Z)((0,objectSpread2.Z)({},Task_stories.Default.args.task),{},{id:"2",title:"Task 2"}),(0,objectSpread2.Z)((0,objectSpread2.Z)({},Task_stories.Default.args.task),{},{id:"3",title:"Task 3"}),(0,objectSpread2.Z)((0,objectSpread2.Z)({},Task_stories.Default.args.task),{},{id:"4",title:"Task 4"}),(0,objectSpread2.Z)((0,objectSpread2.Z)({},Task_stories.Default.args.task),{},{id:"5",title:"Task 5"}),(0,objectSpread2.Z)((0,objectSpread2.Z)({},Task_stories.Default.args.task),{},{id:"6",title:"Task 6"})]};var WithPinnedTasks=Template.bind({});WithPinnedTasks.args={tasks:[].concat((0,toConsumableArray.Z)(Default.args.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}])};var Loading=Template.bind({});Loading.args={tasks:[],loading:!0};var Empty=Template.bind({});Empty.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Loading.args),{},{loading:!1}),Default.parameters=(0,objectSpread2.Z)({storySource:{source:"args => <TaskList {...args} />"}},Default.parameters),WithPinnedTasks.parameters=(0,objectSpread2.Z)({storySource:{source:"args => <TaskList {...args} />"}},WithPinnedTasks.parameters),Loading.parameters=(0,objectSpread2.Z)({storySource:{source:"args => <TaskList {...args} />"}},Loading.parameters),Empty.parameters=(0,objectSpread2.Z)({storySource:{source:"args => <TaskList {...args} />"}},Empty.parameters);var __namedExportsOrder=["Default","WithPinnedTasks","Loading","Empty"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/Task.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Task}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"list-item ".concat(state),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{htmlFor:"checked","aria-label":"archiveTask-".concat(id),className:"checkbox",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"checkbox",disabled:!0,name:"checked",id:"archiveTask-".concat(id),checked:"TASK_ARCHIVED"===state}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{htmlFor:"title","aria-label":title,className:"title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",value:title,readOnly:!0,name:"title",placeholder:"Input title"})}),"TASK_ARCHIVED"!==state&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:"pin-button",onClick:function onClick(){return onPinTask(id)},id:"pinTask-".concat(id),"aria-label":"pinTask-".concat(id),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"icon-star"})},"pinTask-".concat(id))]})}Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"",type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1},onArchiveTask:{description:"",type:{name:"func"},required:!1},onPinTask:{description:"",type:{name:"func"},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})},"./src/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./Task.stories.js":"./src/components/Task.stories.js","./TaskList.stories.js":"./src/components/TaskList.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$"},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[60],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);