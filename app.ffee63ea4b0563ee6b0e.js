webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n("./node_modules/react/react.js"),i=r(o),s=n("./node_modules/react-dom/index.js"),a=r(s),l=n("./demo/App.jsx"),u=r(l),p=document.getElementsByClassName("demonstration")[0];a["default"].render(i["default"].createElement(u["default"],null),p)},"./node_modules/react/lib/ReactTransitionEvents.js":function(e,t,n){"use strict";function r(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||delete a.animationend.animation,"TransitionEvent"in window||delete a.transitionend.transition;for(var n in a){var r=a[n];for(var o in r)if(o in t){l.push(r[o]);break}}}function o(e,t,n){e.addEventListener(t,n,!1)}function i(e,t,n){e.removeEventListener(t,n,!1)}var s=n("./node_modules/fbjs/lib/ExecutionEnvironment.js"),a={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},l=[];s.canUseDOM&&r();var u={addEndEventListener:function(e,t){return 0===l.length?void window.setTimeout(t,0):void l.forEach(function(n){o(e,n,t)})},removeEndEventListener:function(e,t){0!==l.length&&l.forEach(function(n){i(e,n,t)})}};e.exports=u},"./demo/App.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n("./node_modules/react/react.js"),u=r(l),p=n("./node_modules/react-ghfork/dist/react-ghfork.js"),c=r(p),d=n("./package.json"),f=r(d),m=n("./demo/Demo.jsx"),h=r(m),v=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{className:"right",project:f["default"].user+"/"+f["default"].name}),u["default"].createElement("p",null,"Demonstrating the XHR Uploader component"),u["default"].createElement(h["default"],null))}}]),t}(u["default"].Component);t["default"]=v},"./node_modules/react-ghfork/dist/react-ghfork.js":function(e,t,n){!function(t,r){e.exports=r(n("./node_modules/react/react.js"))}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1);e.exports=i.createClass({displayName:"exports",render:function(){var e=this.props,t=e.text,n=e.style,s=e.className,a=r(e,["text","style","className"]);return s=s||"",s+=" github-fork-ribbon-wrapper",t=this.props.text||"Fork me on GitHub",i.createElement("div",{className:s},i.createElement("div",{className:"github-fork-ribbon",style:n},i.createElement("a",o({href:"https://github.com/"+this.props.project},a),t)))}})},function(t,n){t.exports=e}])})},"./package.json":function(e,t){e.exports={name:"react-xhr-uploader",description:"ReactJS component for XHR (level 2) file upload",author:"Harun Hasdal",user:"rma-consulting",version:"0.1.1",scripts:{start:"webpack-dev-server",test:"karma start","test:tdd":"karma start --auto-watch --no-single-run","test:lint":"eslint . --ext .js --ext .jsx","gh-pages":"webpack","gh-pages:deploy":"gh-pages -d gh-pages","gh-pages:stats":"webpack --profile --json > stats.json",dist:"webpack","dist:min":"webpack","dist:modules":"babel ./src --out-dir ./dist-modules",pretest:"npm run test:lint",preversion:'npm run test && npm run dist && npm run dist:min && git commit --allow-empty -am "Update dist"',prepublish:"npm run dist:modules",postpublish:"npm run gh-pages && npm run gh-pages:deploy"},main:"dist-modules",dependencies:{react:"^0.14.6","react-dom":"^0.14.6"},devDependencies:{"babel-cli":"^6.4.5","babel-core":"^6.4.5","babel-eslint":"^5.0.0-beta6","babel-loader":"^6.2.1","babel-preset-es2015":"^6.3.13","babel-preset-react":"^6.3.13","babel-preset-react-hmre":"^1.0.1","babel-register":"^6.4.3",chai:"^3.5.0","clean-webpack-plugin":"^0.1.7","css-loader":"^0.23.1",eslint:"^1.10.3","eslint-loader":"^1.2.1","eslint-plugin-react":"^3.16.1","extract-text-webpack-plugin":"^1.0.1","file-loader":"^0.8.5","gh-pages":"^0.8.0","git-prepush-hook":"^1.0.1","highlight.js":"^9.1.0","html-webpack-plugin":"^2.7.2","isparta-instrumenter-loader":"^1.0.0","json-loader":"^0.5.4",karma:"^0.13.19","karma-chai":"^0.1.0","karma-coverage":"^0.5.3","karma-es6-shim":"^0.2.3","karma-mocha":"^0.2.1","karma-phantomjs-launcher":"^1.0.0","karma-phantomjs-shim":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.23","karma-webpack":"^1.7.0",mocha:"^2.4.4","phantomjs-polyfill":"0.0.1","phantomjs-prebuilt":"^2.1.3",purecss:"^0.6.0","react-addons-test-utils":"^0.14.6","react-ghfork":"^0.3.2",remark:"^3.2.2","remark-react":"^1.1.0",sinon:"^1.17.3","style-loader":"^0.13.0","sync-exec":"^0.6.2","system-bell-webpack-plugin":"^1.0.0","url-loader":"^0.5.7",webpack:"^1.12.12","webpack-dev-server":"^1.14.1","webpack-merge":"^0.7.3"},repository:{type:"git",url:"https://github.com/rma-consulting/react-xhr-uploader"},homepage:"https://rma-consulting.github.io/react-xhr-uploader/",bugs:{url:"https://github.com/rma-consulting/react-xhr-uploader/issues"},keywords:["react","reactjs","xhr","file-upload","XMLHTTPRequest","blob-upload","large-file-upload","react-component"],license:"LICENCE"}},"./demo/Demo.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n("./node_modules/react/react.js"),u=r(l),p=n("./src/index.js"),c=r(p),d=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{url:"http://localhost:3000/api/uploadfile"}))}}]),t}(u["default"].Component);t["default"]=d},"./node_modules/react-dom/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react/lib/ReactDOM.js")},"./node_modules/react/lib/ReactCSSTransitionGroup.js":function(e,t,n){"use strict";function r(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}}}var o=n("./node_modules/react/lib/React.js"),i=n("./node_modules/react/lib/Object.assign.js"),s=n("./node_modules/react/lib/ReactTransitionGroup.js"),a=n("./node_modules/react/lib/ReactCSSTransitionGroupChild.js"),l=o.createClass({displayName:"ReactCSSTransitionGroup",propTypes:{transitionName:a.propTypes.name,transitionAppear:o.PropTypes.bool,transitionEnter:o.PropTypes.bool,transitionLeave:o.PropTypes.bool,transitionAppearTimeout:r("Appear"),transitionEnterTimeout:r("Enter"),transitionLeaveTimeout:r("Leave")},getDefaultProps:function(){return{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}},_wrapChild:function(e){return o.createElement(a,{name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave,appearTimeout:this.props.transitionAppearTimeout,enterTimeout:this.props.transitionEnterTimeout,leaveTimeout:this.props.transitionLeaveTimeout},e)},render:function(){return o.createElement(s,i({},this.props,{childFactory:this._wrapChild}))}});e.exports=l},"./node_modules/react/lib/ReactTransitionGroup.js":function(e,t,n){"use strict";var r=n("./node_modules/react/lib/React.js"),o=n("./node_modules/react/lib/ReactTransitionChildMapping.js"),i=n("./node_modules/react/lib/Object.assign.js"),s=n("./node_modules/fbjs/lib/emptyFunction.js"),a=r.createClass({displayName:"ReactTransitionGroup",propTypes:{component:r.PropTypes.any,childFactory:r.PropTypes.func},getDefaultProps:function(){return{component:"span",childFactory:s.thatReturnsArgument}},getInitialState:function(){return{children:o.getChildMapping(this.props.children)}},componentWillMount:function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},componentDidMount:function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t)},componentWillReceiveProps:function(e){var t=o.getChildMapping(e.children),n=this.state.children;this.setState({children:o.mergeChildMappings(n,t)});var r;for(r in t){var i=n&&n.hasOwnProperty(r);!t[r]||i||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(r in n){var s=t&&t.hasOwnProperty(r);!n[r]||s||this.currentlyTransitioningKeys[r]||this.keysToLeave.push(r)}},componentDidUpdate:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)},performAppear:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillAppear?t.componentWillAppear(this._handleDoneAppearing.bind(this,e)):this._handleDoneAppearing(e)},_handleDoneAppearing:function(e){var t=this.refs[e];t.componentDidAppear&&t.componentDidAppear(),delete this.currentlyTransitioningKeys[e];var n=o.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performEnter:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillEnter?t.componentWillEnter(this._handleDoneEntering.bind(this,e)):this._handleDoneEntering(e)},_handleDoneEntering:function(e){var t=this.refs[e];t.componentDidEnter&&t.componentDidEnter(),delete this.currentlyTransitioningKeys[e];var n=o.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performLeave:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillLeave?t.componentWillLeave(this._handleDoneLeaving.bind(this,e)):this._handleDoneLeaving(e)},_handleDoneLeaving:function(e){var t=this.refs[e];t.componentDidLeave&&t.componentDidLeave(),delete this.currentlyTransitioningKeys[e];var n=o.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)?this.performEnter(e):this.setState(function(t){var n=i({},t.children);return delete n[e],{children:n}})},render:function(){var e=[];for(var t in this.state.children){var n=this.state.children[t];n&&e.push(r.cloneElement(this.props.childFactory(n),{ref:t,key:t}))}return r.createElement(this.props.component,this.props,e)}});e.exports=a},"./node_modules/react/lib/ReactTransitionChildMapping.js":function(e,t,n){"use strict";var r=n("./node_modules/react/lib/flattenChildren.js"),o={getChildMapping:function(e){return e?r(e):e},mergeChildMappings:function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},o=[];for(var i in e)t.hasOwnProperty(i)?o.length&&(r[i]=o,o=[]):o.push(i);var s,a={};for(var l in t){if(r.hasOwnProperty(l))for(s=0;s<r[l].length;s++){var u=r[l][s];a[r[l][s]]=n(u)}a[l]=n(l)}for(s=0;s<o.length;s++)a[o[s]]=n(o[s]);return a}};e.exports=o},"./node_modules/react/lib/ReactCSSTransitionGroupChild.js":function(e,t,n){"use strict";var r=n("./node_modules/react/lib/React.js"),o=n("./node_modules/react/lib/ReactDOM.js"),i=n("./node_modules/fbjs/lib/CSSCore.js"),s=n("./node_modules/react/lib/ReactTransitionEvents.js"),a=n("./node_modules/react/lib/onlyChild.js"),l=17,u=r.createClass({displayName:"ReactCSSTransitionGroupChild",propTypes:{name:r.PropTypes.oneOfType([r.PropTypes.string,r.PropTypes.shape({enter:r.PropTypes.string,leave:r.PropTypes.string,active:r.PropTypes.string}),r.PropTypes.shape({enter:r.PropTypes.string,enterActive:r.PropTypes.string,leave:r.PropTypes.string,leaveActive:r.PropTypes.string,appear:r.PropTypes.string,appearActive:r.PropTypes.string})]).isRequired,appear:r.PropTypes.bool,enter:r.PropTypes.bool,leave:r.PropTypes.bool,appearTimeout:r.PropTypes.number,enterTimeout:r.PropTypes.number,leaveTimeout:r.PropTypes.number},transition:function(e,t,n){var r=o.findDOMNode(this);if(!r)return void(t&&t());var a=this.props.name[e]||this.props.name+"-"+e,l=this.props.name[e+"Active"]||a+"-active",u=null,p=function(e){e&&e.target!==r||(clearTimeout(u),i.removeClass(r,a),i.removeClass(r,l),s.removeEndEventListener(r,p),t&&t())};i.addClass(r,a),this.queueClass(l),n?(u=setTimeout(p,n),this.transitionTimeouts.push(u)):s.addEndEventListener(r,p)},queueClass:function(e){this.classNameQueue.push(e),this.timeout||(this.timeout=setTimeout(this.flushClassNameQueue,l))},flushClassNameQueue:function(){this.isMounted()&&this.classNameQueue.forEach(i.addClass.bind(i,o.findDOMNode(this))),this.classNameQueue.length=0,this.timeout=null},componentWillMount:function(){this.classNameQueue=[],this.transitionTimeouts=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)})},componentWillAppear:function(e){this.props.appear?this.transition("appear",e,this.props.appearTimeout):e()},componentWillEnter:function(e){this.props.enter?this.transition("enter",e,this.props.enterTimeout):e()},componentWillLeave:function(e){this.props.leave?this.transition("leave",e,this.props.leaveTimeout):e()},render:function(){return a(this.props.children)}});e.exports=u},"./node_modules/fbjs/lib/CSSCore.js":function(e,t,n){"use strict";var r=n("./node_modules/fbjs/lib/invariant.js"),o={addClass:function(e,t){return/\s/.test(t)?r(!1):void 0,t&&(e.classList?e.classList.add(t):o.hasClass(e,t)||(e.className=e.className+" "+t)),e},removeClass:function(e,t){return/\s/.test(t)?r(!1):void 0,t&&(e.classList?e.classList.remove(t):o.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,""))),e},conditionClass:function(e,t,n){return(n?o.addClass:o.removeClass)(e,t)},hasClass:function(e,t){return/\s/.test(t)?r(!1):void 0,e.classList?!!t&&e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}};e.exports=o},"./src/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var p=n("./node_modules/react/react.js"),c=r(p),d=n("./node_modules/react/lib/ReactCSSTransitionGroup.js"),f=r(d),m={root:{border:"1px solid #CACACA",padding:20},dropTargetStyle:{border:"3px dashed #4A90E2",padding:10,backgroundColor:"#ffffff",cursor:"pointer"},dropTargetActiveStyle:{backgroundColor:"#ccffcc"},placeHolderStyle:{paddingLeft:"20%",paddingRight:"20%",textAlign:"center"},uploadButtonStyle:{width:"100%",marginTop:10,height:32,alignSelf:"center",cursor:"pointer",backgroundColor:"#D9EBFF",border:"1px solid #5094E3",fontSize:14},fileset:{marginTop:10,paddingTop:10,paddingBottom:10,borderTop:"1px solid #CACACA"},fileDetails:{paddingTop:10,display:"flex",alignItems:"flex-start"},fileName:{flexGrow:"8"},fileSize:{"float":"right",flexGrow:"2",alignSelf:"flex-end"},removeButton:{alignSelf:"flex-end"},progress:{marginTop:10,width:"100%",height:16,WebkitAppearance:"none"}},h=function(e){function t(e){i(this,t);var n=s(this,Object.getPrototypeOf(t).call(this,e));return n.state={items:[]},n.activeDrag=0,n.xhrs=[],n}return a(t,e),u(t,null,[{key:"propTypes",get:function(){return{url:c["default"].PropTypes.string.isRequired,auto:c["default"].PropTypes.bool,fieldName:c["default"].PropTypes.string,buttonLabel:c["default"].PropTypes.string,dropzoneLabel:c["default"].PropTypes.string,maxSize:c["default"].PropTypes.number,chunks:c["default"].PropTypes.bool,chunkSize:c["default"].PropTypes.number,localStore:c["default"].PropTypes.bool,maxFiles:c["default"].PropTypes.number,encrypt:c["default"].PropTypes.bool,clearTimeOut:c["default"].PropTypes.number,filesetTransitionName:c["default"].PropTypes.string,styles:c["default"].PropTypes.object,debug:c["default"].PropTypes.bool}}},{key:"defaultProps",get:function(){return{auto:!1,fieldName:"datafile",buttonLabel:"Upload",dropzoneLabel:"Drag and drop your files here or pick them from your computer",maxSize:26214400,chunks:!1,chunkSize:524288,localStore:!1,maxFiles:1,encrypt:!1,clearTimeOut:3e3,filesetTransitionName:"fileset",styles:m,debug:!1}}}]),u(t,[{key:"onClick",value:function(){this.refs.fileInput.click()}},{key:"onUploadButtonClick",value:function(){this.upload()}},{key:"onFileSelect",value:function(){var e=this,t=this.filesToItems(this.refs.fileInput.files);this.setState({items:t},function(){e.props.auto&&e.upload()})}},{key:"onDragEnter",value:function(e){e.preventDefault(),this.activeDrag+=1,this.setState({isActive:this.activeDrag>0})}},{key:"onDragOver",value:function(e){return e.preventDefault(),e.stopPropagation(),!1}},{key:"onDragLeave",value:function(e){e.preventDefault(),this.activeDrag-=1,0===this.activeDrag&&this.setState({isActive:!1})}},{key:"onDrop",value:function(e){var t=this;e.preventDefault(),this.activeDrag=0,this.setState({isActive:!1});var n=e.dataTransfer?e.dataTransfer.files:[],r=this.filesToItems(n);this.setState({items:r},function(){t.props.auto&&t.upload()})}},{key:"clearIfAllCompleted",value:function(){var e=this;if(this.props.clearTimeOut>0){var t=this.state.items.filter(function(e){return 100===e.progress}).length;t===this.state.items.length&&setTimeout(function(){e.setState({items:[]})},this.props.clearTimeOut)}}},{key:"updateFileProgress",value:function(e,t){var n=[].concat(o(this.state.items));n[e]=Object.assign({},this.state.items[e],{progress:t}),this.setState({items:n},this.clearIfAllCompleted)}},{key:"updateFileChunkProgress",value:function(e,t,n){var r=[].concat(o(this.state.items)),i=this.state.items[e],s=[].concat(o(i.chunkProgress)),a=s.reduce(function(e,t){return e+t})/s.length;s[t]=n,r[e]=Object.assign({},i,{chunkProgress:s,progress:a}),this.setState({items:r},this.clearIfAllCompleted)}},{key:"cancelFile",value:function(e){var t=[].concat(o(this.state.items));t[e]=Object.assign({},this.state.items[e],{cancelled:!0}),this.xhrs[e]&&(this.xhrs[e].upload.removeEventListener("progress"),this.xhrs[e].removeEventListener("load"),this.xhrs[e].abort()),this.setState({items:t})}},{key:"upload",value:function(){var e=this,t=this.state.items;t&&t.filter(function(e){return!e.cancelled}).forEach(function(t){e.uploadItem(t)})}},{key:"uploadItem",value:function(e){var t=this;if(this.props.chunks)for(var n=this.props.chunkSize,r=e.file.size,o=0,i=n,s=function(n,r){t.updateFileChunkProgress(e.index,r,n)},a=0;r>o;)this.uploadChunk(e.file.slice(o,i),a++,e.file.name,s),o=i,i=o+n;else this.uploadFile(e.file,function(n){t.updateFileProgress(e.index,n)})}},{key:"uploadChunk",value:function(e,t,n,r){if(e){var o=new FormData,i=new XMLHttpRequest;o.append(this.props.fieldName,e,n+"-chunk"+t),i.onload=function(){r(100,t)},i.upload.onprogress=function(e){e.lengthComputable&&r(e.loaded/e.total*100,t)},i.open("POST",this.props.url,!0),i.send(o)}}},{key:"uploadFile",value:function(e,t){if(e){var n=new FormData,r=new XMLHttpRequest;n.append(this.props.fieldName,e,e.name),r.onload=function(){t(100)},r.upload.onprogress=function(e){e.lengthComputable&&t(e.loaded/e.total*100)},r.open("POST",this.props.url,!0),r.send(n),this.xhrs[e.index]=r}}},{key:"filesToItems",value:function(e){var t=this,n=Array.prototype.slice.call(e).slice(0,this.props.maxFiles),r=n.map(function(e,n){if(t.props.chunks){for(var r=[],o=0;o<=e.size/t.props.chunkSize;o++)r.push(0);return{file:e,index:n,progress:0,cancelled:!1,chunkProgress:r}}return{file:e,index:n,progress:0,cancelled:!1}});return r}},{key:"renderDropTarget",value:function(){var e=this,t=this.props.styles,n=t.dropTargetStyle;return this.state.isActive&&(n=Object.assign({},n,t.dropTargetActiveStyle)),c["default"].createElement("div",{ref:"dropTarget",style:n,onClick:function(t){return e.onClick(t)},onDragEnter:function(t){return e.onDragEnter(t)},onDragOver:function(t){return e.onDragOver(t)},onDragLeave:function(t){return e.onDragLeave(t)},onDrop:function(t){return e.onDrop(t)}},c["default"].createElement("div",{style:t.placeHolderStyle},c["default"].createElement("p",null,this.props.dropzoneLabel),c["default"].createElement("center",{className:"icon-upload icon-large"})))}},{key:"renderFileSet",value:function(){var e=this,t=this.state.items,n=this.props.filesetTransitionName;if(t.length>0){var r=function(){var r=e.props.styles;e.state.progress;return{v:c["default"].createElement(f["default"],{component:"div",transitionName:n,transitionEnterTimeout:0,transitionLeaveTimeout:0},c["default"].createElement("div",{style:r.fileset},t.filter(function(e){return!e.cancelled}).map(function(t){var n=t.file,o=(n.size/1048576).toPrecision(2),i=t.progress<100?"icon-cancel-circle icon-button icon-red":"icon-checkmark icon-button icon-green";return c["default"].createElement("div",{key:t.index},c["default"].createElement("div",{style:r.fileDetails},c["default"].createElement("span",{className:"icon-file icon-large"}," "),c["default"].createElement("span",{style:r.fileName},n.name+", "+n.type),c["default"].createElement("span",{style:r.fileSize},o+" Mb"),c["default"].createElement("span",{style:r.removeButton,className:i,onClick:function(){return e.cancelFile(t.index)}})),c["default"].createElement("div",null,c["default"].createElement("progress",{style:r.progress,min:"0",max:"100",value:t.progress},t.progress,"%")))})))}}();if("object"===("undefined"==typeof r?"undefined":l(r)))return r.v}return c["default"].createElement(f["default"],{component:"div",transitionName:n,transitionEnterTimeout:0,transitionLeaveTimeout:0})}},{key:"renderButton",value:function(){var e=this,t=this.props.styles,n=!this.props.auto;return n?c["default"].createElement("button",{style:t.uploadButtonStyle,onClick:function(){return e.upload()}},this.props.buttonLabel):null}},{key:"renderInput",value:function(){var e=this,t=this.props.maxFiles;return c["default"].createElement("input",{style:{display:"none"},multiple:t>1,type:"file",ref:"fileInput",onChange:function(){return e.onFileSelect()}})}},{key:"render",value:function(){var e=this.props.styles;return c["default"].createElement("div",{style:e.root},this.renderDropTarget(),this.renderFileSet(),this.renderButton(),this.renderInput())}}]),t}(c["default"].Component);t["default"]=h}});