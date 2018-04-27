!function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)a=s[p],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={1:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push(["./index.tsx",0]),n()}({"./index.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react/index.js"),o=n("./node_modules/react-dom/index.js"),i=n("./src/ChellVizApp.tsx");o.render(r.createElement(i.ChellVizApp,null),document.getElementById("root"))},"./src/ChellVizApp.tsx":function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n("./node_modules/react/index.js"),a=n("./node_modules/semantic-ui-react/dist/es/index.js"),s=n("./types/chell.ts"),c=n("./src/container/VizPanelContainer.tsx"),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return i.createElement("div",{id:"ChellVizApp"},i.createElement(a.Grid,{centered:!0,divided:"vertically"},i.createElement(a.GridRow,null,i.createElement(c.VizPanelContainer,{dataDirs:["1","2","3"].map(function(e){return"assets/contact_map/example"+e}),supportedVisualizations:[s.VIZ_TYPE.CONTACT_MAP,s.VIZ_TYPE.NGL],initialVisualizations:[s.VIZ_TYPE.CONTACT_MAP,s.VIZ_TYPE.NGL],numPanels:2})),i.createElement(a.GridRow,null,i.createElement(c.VizPanelContainer,{dataDirs:["centroids","centroids_subset","ngl","spring2/full"].map(function(e){return"assets/"+e}),initialVisualizations:[s.VIZ_TYPE["T-SNE"],s.VIZ_TYPE.SPRING],supportedVisualizations:[s.VIZ_TYPE["T-SNE"],s.VIZ_TYPE.SPRING],numPanels:2}))))},t}(i.Component);t.ChellVizApp=l},"./src/component/ChellSlider.tsx":function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n("./node_modules/rc-slider/es/index.js"),a=n("./node_modules/react/index.js");n("./node_modules/rc-slider/assets/index.css");var s=function(e){function t(t){var n=e.call(this,t)||this;return n.onAfterChange=function(e){return function(t){e&&e(t),n.setState({value:t})}},n.onChange=function(e){return function(t){e&&e(t),n.setState({value:t})}},n.state={value:t.defaultValue},n}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.defaultValue,n=e.max,r=e.min,o=e.label,s=e.onAfterChange,c=e.onChange;return a.createElement("div",null,a.createElement("p",null,o+": "+this.state.value),a.createElement(i.default,{defaultValue:t,max:n,min:r,onAfterChange:this.onAfterChange(s),onChange:this.onChange(c)}))},t}(a.Component);t.ChellSlider=s},"./src/component/ContactMapComponent.tsx":function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/react/index.js"),s=n("./src/context/ResidueContext.ts"),c=n("./src/helper/PlotlyHelper.tsx"),l=n("./src/helper/ReactHelper.ts"),u=n("./src/component/ChellSlider.tsx"),p={blackDots:new Array,domain:[1,100],max_x:1,min_x:1e3,nodeSize:4,probabilityFilter:.99};t.ContactMapComponent=l.withDefaultProps({contactColor:"#009999",couplingColor:"#000000",data:{contactMonomer:[],couplingScore:[],distanceMapMonomer:[]},onClick:void 0,onMouseEnter:void 0,selectedData:void 0},function(e){function t(t){var n=e.call(this,t)||this;return n.state=p,n.onClick=function(){return function(e){n.props.onClick&&n.props.onClick(e)}},n.onProbabilityChange=function(){return function(e){n.setState({probabilityFilter:e/100})}},n.onNodeSizeChange=function(){return function(e){n.setState({nodeSize:e})}},n.onMouseEnter=function(e){return function(t){var n=t.points;e([n[0].x,n[0].y])}},n.onMouseClick=function(e){return function(t){var n=t.points;e([n[0].x,n[0].y])}},n.onMouseSelect=function(){return function(e){console.log("onMouseSelect: "+e)}},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this.props.data;e&&this.setupData(e)},t.prototype.componentDidUpdate=function(e,t){var n=this.props.data;(n!==e.data||this.state.probabilityFilter!==t.probabilityFilter)&&this.setupData(n)},t.prototype.render=function(){return this.props.data?this.renderPlotly():null},t.prototype.renderPlotly=function(){var e=this,t=this.props,n=t.contactColor,r=t.couplingColor,o=t.data,i=this.state.blackDots,l=new Float32Array(2*o.contactMonomer.length);return o.contactMonomer.forEach(function(e,t){l[2*t]=e.i,l[2*t+1]=e.j}),a.createElement(s.ResidueContext.Consumer,null,function(t){var o=t.addNewResidues,s=(t.currentResidueSelections,t.removeResidues);return a.createElement("div",{style:{padding:10}},a.createElement(c.PlotlyChart,{config:c.defaultConfig,data:[{marker:{color:n,sizemax:2*e.state.nodeSize,sizemin:e.state.nodeSize},mode:"markers",type:"pointcloud",xy:l},{marker:{color:r,sizemax:2*e.state.nodeSize,sizemin:e.state.nodeSize},mode:"markers",type:"pointcloud",x:i.map(function(e){return e.i}),y:i.map(function(e){return e.j})}],layout:c.defaultLayout,onHoverCallback:e.onMouseEnter(s),onClickCallback:e.onMouseClick(o),onSelectedCallback:e.onMouseSelect()}),e.renderSliders())})},t.prototype.renderSliders=function(){return a.createElement("div",null,a.createElement(u.ChellSlider,{max:100,min:0,label:"Probability",defaultValue:99,onChange:this.onProbabilityChange()}),a.createElement(u.ChellSlider,{max:5,min:1,label:"Node Size",defaultValue:this.state.nodeSize,onChange:this.onNodeSizeChange()}))},t.prototype.setupData=function(e){var t=this,n=p.max_x,r=new Array;e.contactMonomer.forEach(function(e){n=Math.max(n,e.i)}),e.couplingScore.filter(function(e){return e.probability>=t.state.probabilityFilter}).forEach(function(e){n=Math.max(n,e.i),r.push(e),r.push(i({},e,{i:e.j,A_i:e.A_j,j:e.i,A_j:e.A_i}))}),this.setState({blackDots:r,domain:[1,n]})},t}(a.Component))},"./src/component/NGLComponent.tsx":function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/ngl/dist/ngl.esm.js"),s=n("./node_modules/react/index.js"),c=n("./src/context/ResidueContext.ts"),l=n("./src/helper/ReactHelper.ts");t.SUPPORTED_REPS=["axes","backbone","ball+stick","distance","label","line","hyperball","spacefill"];var u=i({data:void 0},c.initialResidueContext),p={max_x:0,min_x:1e3,nodeSize:4,probabilityFilter:.99,residueOffset:0,stage:void 0,structureComponent:void 0};t.NGLComponentWithDefaultProps=l.withDefaultProps(u,function(e){function t(t){var n=e.call(this,t)||this;return n.state=p,n.canvas=null,n.residueSelectionRepresentations={},n.onClick=function(e){if(e&&(e.atom||e.bond)){n.props.removeAllResidues(),n.removeAllRepresentations(e.component);var t=(e.atom||e.closestBondAtom).resno+n.state.residueOffset;n.props.addNewResidues([t])}},n}return o(t,e),t.prototype.componentDidMount=function(){if(this.canvas){var e=new a.Stage(this.canvas);this.setState({stage:e});var t=this.props.data;t&&this.addStructureToStage(t,e)}},t.prototype.componentWillUnmount=function(){var e=this.state.stage;e&&(e.dispose(),this.setState({stage:void 0}))},t.prototype.componentDidUpdate=function(e,t){var n=this,r=this.props,o=r.data,i=r.currentResidueSelections,a=this.state,s=a.stage,c=a.structureComponent,l=o&&o!==e.data;s&&l&&s.removeAllComponents(),s&&l&&o?this.addStructureToStage(o,s):i&&i!==e.currentResidueSelections&&c?Object.keys(i).forEach(function(e){n.highlightElement(c,i[e])}):c&&this.removeAllRepresentations(c)},t.prototype.render=function(){var e=this;return s.createElement("div",{id:"NGLComponent",style:{padding:15}},s.createElement("div",{ref:function(t){return e.canvas=t},style:{height:370,width:370}}))},t.prototype.addStructureToStage=function(e,t){var n=t.addComponentFromObject(e);this.setState({residueOffset:e.residueStore.resno[0],structureComponent:n}),t.defaultFileRepresentation(n),n.reprList.forEach(function(e){e.setParameters({opacity:1})}),t.signals.clicked.add(this.onClick)},t.prototype.onHover=function(e,t,n,r){if(t&&(t.atom||t.bond)){var o=(t.atom||t.closestBondAtom).resno+this.state.residueOffset;this.props.addNewResidues([o])}},t.prototype.highlightElement=function(e,t){var n=this.state.residueOffset,r=t.toString(),o=t.map(function(e){return e-n}),i=this.residueSelectionRepresentations;i[r]?i[r].map(function(t){return e.removeRepresentation(t)}):i[r]=[];var a=o.join(".CA, ")+".CA";o.length>=2&&i[r].push(e.addRepresentation("distance",{atomPair:[a.split(",")],color:"skyblue",labelUnit:"nm"})),i[r].push(e.addRepresentation("ball+stick",{sele:o.join(", ")}))},t.prototype.removeAllRepresentations=function(e){for(var t=this.residueSelectionRepresentations,n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];t[o].forEach(function(t){return e.removeRepresentation(t)}),delete this.residueSelectionRepresentations[o]}},t}(s.Component)),t.NGLComponent=function(e){return s.createElement(c.ResidueContext.Consumer,null,function(n){var r=n.addNewResidues,o=n.currentResidueSelections,a=n.removeAllResidues;return s.createElement(t.NGLComponentWithDefaultProps,i({},e,{addNewResidues:r,currentResidueSelections:o,removeAllResidues:a}))})}},"./src/component/SpringComponent.tsx":function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/d3/index.js"),s=n("./node_modules/pixi.js/lib/index.js"),c=n("./node_modules/react/index.js"),l=n("./src/helper/ReactHelper.ts");t.SpringComponent=l.withDefaultProps({canvasBackgroundColor:13421772,data:{links:[],nodes:[]},height:450,selectedCategory:"",width:450},function(e){function t(t){var n=e.call(this,t)||this;return n.pixiApp=new s.Application,n.nodeSprites=new s.Container,n.edgeSprites=new s.Container,n.state=i({},n.state,{canvasHeight:Math.floor(.9*n.props.height),canvasWidth:Math.floor(.9*n.props.width)}),n}return o(t,e),t.prototype.componentDidMount=function(){var e=this.state,t=e.canvasHeight,n=e.canvasWidth;this.pixiApp=new s.Application(t,n,{backgroundColor:this.props.canvasBackgroundColor,view:this.canvasElement});var r=this.pixiApp,o=this.props,i=o.data,a=o.selectedCategory;i&&(r.stage.removeChildren(),this.nodeSprites=new s.Container,this.edgeSprites=new s.Container,this.generateNodeSprites(i.nodes,this.nodeSprites,a),this.generateLinesSprite(i.links,this.edgeSprites,a),this.centerCanvas(i),r.stage.addChild(this.edgeSprites),r.stage.addChild(this.nodeSprites))},t.prototype.componentDidUpdate=function(e,t){var n=this.props,r=n.data,o=n.selectedCategory;if(r&&r!==e.data){var i=this.pixiApp;i.stage.removeChildren(),this.nodeSprites=new s.Container,this.edgeSprites=new s.Container,this.generateNodeSprites(r.nodes,this.nodeSprites,o),this.generateLinesSprite(r.links,this.edgeSprites,o),this.centerCanvas(r),i.stage.addChild(this.edgeSprites),i.stage.addChild(this.nodeSprites)}else o!==e.selectedCategory&&(this.updateNodeSprites(r.nodes,this.nodeSprites,o),this.edgeSprites.removeChildren(),this.generateLinesSprite(r.links,this.edgeSprites,o),this.centerCanvas(r))},t.prototype.render=function(){var e=this,t={width:this.state.canvasWidth,height:this.state.canvasHeight};return c.createElement("div",{id:"SpringComponent",style:{height:this.props.height,padding:15,width:this.props.width}},c.createElement("div",{id:"PixiCanvasHolder"},c.createElement("canvas",{ref:function(t){return e.canvasElement=t||void 0},style:t})))},t.prototype.generateLinesSprite=function(e,t,n){void 0===e&&(e=[]);for(var r=new s.Graphics,o=this.state,i=o.canvasHeight,a=o.canvasWidth,c=0,l=e;c<l.length;c++){var u=l[c],p=u.source,d=u.target;n&&p.category!==n&&d.category!==n||(r.lineStyle(5,16711680,1),r.moveTo(p.x,p.y),r.lineTo(d.x,d.y))}var h=r.getBounds(),f=new s.Rectangle(h.x,h.y,Math.max(a,h.width),Math.max(i,h.height)),v=this.pixiApp.renderer.generateTexture(r,s.SCALE_MODES.LINEAR,a/i,f),m=new s.Sprite(v);m.x=f.x,m.y=f.y,t.addChild(m)},t.prototype.generateNodeSprites=function(e,t,n){void 0===e&&(e=[]);for(var r=0,o=e;r<o.length;r++){var i=o[r],a=new s.Graphics;a.beginFill(i.colorHex),a.drawCircle(0,0,16),a.endFill();var c=new s.Sprite(this.pixiApp.renderer.generateTexture(a));c.x=i.x,c.y=i.y,n&&i.category!==n&&(c.alpha=.1),c.anchor.set(.5,.5),c.interactive=!0,c.scale.set(.5),t.addChild(c)}},t.prototype.updateNodeSprites=function(e,t,n){void 0===e&&(e=[]);for(var r=0;r<t.children.length;++r){var o=e[r],i=t.children[r];n&&o.category!==n?i.alpha=.1:i.alpha=1}},t.prototype.centerCanvas=function(e){var t=this.edgeSprites,n=this.nodeSprites,r=this.state,o=r.canvasHeight,i=r.canvasWidth,s=e.nodes.map(function(e){return e.x}),c=e.nodes.map(function(e){return e.y}),l=a.max(s),u=a.max(c),p=a.min(s),d=a.min(c),h=l-p+50,f=u-d+50,v=.85/Math.max(h/i,f/o),m=v-this.nodeSprites.scale.x,y=i/2-(l+p)/2*v-n.position.x,_=o/2+30-(u+d)/2*v-n.position.y;n.position.x+=y,n.position.y+=_,n.scale.x+=m,n.scale.y+=m,t.position=n.position,t.scale=n.scale},t}(c.Component))},"./src/component/TComponent.tsx":function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/react/index.js"),s=n("./node_modules/recharts/es6/index.js"),c=n("./src/helper/ReactHelper.ts");t.TComponent=c.withDefaultProps({data:[[0],[0]],height:450,width:450},function(e){function t(t){var n=e.call(this,t)||this;return n.state=i({},n.state,{chartHeight:Math.floor(.9*n.props.height),chartWidth:Math.floor(.9*n.props.width)}),n}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.height,r=e.width;return a.createElement("div",{id:"TComponent",style:{height:n,padding:15,width:r}},a.createElement(s.ScatterChart,{height:this.state.chartHeight,width:this.state.chartHeight},a.createElement(s.XAxis,{type:"number",dataKey:"x"}),a.createElement(s.YAxis,{type:"number",dataKey:"y"}),a.createElement(s.CartesianGrid,null),a.createElement(s.Scatter,{data:t?t.map(function(e){return{x:e[0],y:e[1]}}):[]})))},t}(a.Component))},"./src/component/VizSelectorPanel.tsx":function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n("./node_modules/react/index.js"),a=n("./node_modules/semantic-ui-react/dist/es/index.js"),s=n("./types/chell.ts"),c=n("./src/component/NGLComponent.tsx"),l=n("./src/component/SpringComponent.tsx"),u=n("./src/component/TComponent.tsx"),p=n("./src/helper/ReactHelper.ts"),d=n("./src/component/ContactMapComponent.tsx"),h={data:{},height:450,initialViz:s.VIZ_TYPE["T-SNE"],onDataSelect:function(e){},selectedData:void 0,supportedVisualizations:[],width:450},f={selectedViz:h.initialViz};t.VizSelectorPanel=p.withDefaultProps(h,function(e){function t(t){var n=e.call(this,t)||this;return n.state=f,n.onVizSelect=function(e,t){n.setState({selectedViz:t.value})},n.generateDropdownItems=function(e){return e.map(function(e){return{key:e,text:e,value:e}}).sort(function(e,t){return e.key.localeCompare(t.key)})},n.state={selectedViz:t.initialViz?t.initialViz:s.VIZ_TYPE.SPRING},n}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.selectedData,r=e.supportedVisualizations,o=e.width;return i.createElement("div",{className:"VizSelectorPanel",style:{width:o}},i.createElement(a.Dropdown,{options:this.generateDropdownItems(r),fluid:!0,onChange:this.onVizSelect,defaultValue:this.props.initialViz}),i.createElement(a.Card,{fluid:!0,raised:!0},this.renderVizContainer(this.state.selectedViz,t,n)))},t.prototype.renderVizContainer=function(e,t,n){var r=this.props,o=r.height,a=r.width;switch(e){case s.VIZ_TYPE["T-SNE"]:return i.createElement(u.TComponent,{data:t["T-SNE"],height:o,width:a});case s.VIZ_TYPE.SPRING:return i.createElement(l.SpringComponent,{data:t.Spring,height:o,width:a});case s.VIZ_TYPE.NGL:return i.createElement(c.NGLComponent,{data:t.NGL});case s.VIZ_TYPE.CONTACT_MAP:return i.createElement(d.ContactMapComponent,{data:t["Contact Map"],onMouseEnter:this.props.onDataSelect,selectedData:n});default:throw new Error("Unknown viz: "+e)}},t}(i.Component))},"./src/container/VizPanelContainer.tsx":function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var c=n("./node_modules/react/index.js"),l=n("./node_modules/semantic-ui-react/dist/es/index.js"),u=n("./src/component/VizSelectorPanel.tsx"),p=n("./src/context/ResidueContext.ts"),d=n("./src/helper/DataHelper.ts"),h=n("./src/helper/ReactHelper.ts"),f={currentDataDir:"",data:{},residueContext:i({},p.initialResidueContext)};t.VizPanelContainer=h.withDefaultProps({initialVisualizations:[],numPanels:1},function(e){function t(t){var n=e.call(this,t)||this;return n.state=f,n.onDataDirChange=function(e,t){n.setState({currentDataDir:t.value})},n.onResidueSelect=function(e){var t,r=n.state.residueContext.currentResidueSelections,o=e.toString();r[o]||n.setState({residueContext:i({},n.state.residueContext,{currentResidueSelections:i({},r,(t={},t[o]=e,t))})})},n.onRemoveAllResidues=function(){n.setState({residueContext:i({},n.state.residueContext,{currentResidueSelections:{}})})},n.onRemoveResidues=function(e){var t=e.join(","),r=n.state.residueContext.currentResidueSelections;r[t]&&delete r[t]},n.state=i({},n.state,{currentDataDir:t.dataDirs[0],residueContext:i({},n.state.residueContext,{addNewResidues:n.onResidueSelect,removeAllResidues:n.onRemoveAllResidues,removeResidues:n.onRemoveResidues})}),n}return o(t,e),t.prototype.componentDidMount=function(){return a(this,void 0,void 0,function(){var e,t,n,r,o,a;return s(this,function(s){switch(s.label){case 0:e={},t=0,n=this.props.supportedVisualizations,s.label=1;case 1:return t<n.length?(r=n[t],o=e,a=r,[4,d.fetchAppropriateData(r,this.state.currentDataDir)]):[3,4];case 2:o[a]=s.sent(),s.label=3;case 3:return t++,[3,1];case 4:return this.setState({data:i({},e)}),[2]}})})},t.prototype.componentDidUpdate=function(e,t){return a(this,void 0,void 0,function(){var e,n,r,o,a,c;return s(this,function(s){switch(s.label){case 0:if(t.currentDataDir===this.state.currentDataDir)return[3,5];e={},n=0,r=this.props.supportedVisualizations,s.label=1;case 1:return n<r.length?(o=r[n],a=e,c=o,[4,d.fetchAppropriateData(o,this.state.currentDataDir)]):[3,4];case 2:a[c]=s.sent(),s.label=3;case 3:return n++,[3,1];case 4:this.setState({data:i({},e)}),s.label=5;case 5:return[2]}})})},t.prototype.render=function(){return c.createElement(l.Grid,{className:"VizPanelContainer",columns:this.props.numPanels,centered:!0,relaxed:!0},c.createElement(l.GridRow,{columns:1,centered:!0},c.createElement(l.Dropdown,{onChange:this.onDataDirChange,options:this.props.dataDirs.map(function(e){return{key:e,text:e,value:e}}).slice(),placeholder:"Select Data Directory",search:!0})),c.createElement(p.ResidueContext.Provider,{value:this.state.residueContext},this.renderPanels(this.props.numPanels,this.state.data,this.props.initialVisualizations).map(function(e,t){return c.createElement(l.GridColumn,{key:t},e)})))},t.prototype.renderPanels=function(e,t,n){for(var r=[],o=0;o<e;++o)r.push(c.createElement(u.VizSelectorPanel,{data:t,initialViz:n[o],supportedVisualizations:this.props.supportedVisualizations}));return r},t}(c.Component))},"./src/context/ResidueContext.ts":function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/react/index.js");t.initialResidueContext={addNewResidues:function(e){},currentResidueSelections:{},removeAllResidues:function(){},removeResidues:function(e){}},t.ResidueContext=o.createContext(r({},t.initialResidueContext))},"./src/helper/DataHelper.ts":function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},i=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n("./types/chell.ts"),s=n("./node_modules/d3/index.js"),c=n("./node_modules/ngl/dist/ngl.esm.js");t.fetchAppropriateData=function(e,t){return r(i,void 0,void 0,function(){return o(this,function(n){switch(e){case a.VIZ_TYPE["T-SNE"]:return[2,d(t)];case a.VIZ_TYPE.SPRING:return[2,l(t)];case a.VIZ_TYPE.NGL:return[2,f(t)];case a.VIZ_TYPE.CONTACT_MAP:return[2,v(t)];default:return[2,Promise.reject({error:"Currently no appropriate data getter for "+e})]}return[2]})})};var l=function(e){return r(i,void 0,void 0,function(){var t,n,r,i,a,s,c;return o(this,function(o){switch(o.label){case 0:return[4,p(e+"/coordinates.txt")];case 1:return t=o.sent(),[4,h(e+"/graph_data.json")];case 2:return n=o.sent(),[4,u(e+"/categorical_coloring_data.json")];case 3:for(r=o.sent(),i={},a=0;a<n.nodes.length;++a)s=n.nodes[a],i[s.number]=s,s.number in t&&(s.fixed=!0,s.x=t[s.number][0],s.y=t[s.number][1]),c=r.label_list[a],s.category=c,s.colorHex=r.label_colors[c];return n.links.forEach(function(e){var t=i[e.source],n=i[e.target];t&&n&&(e.source=t,e.target=n)}),[2,n]}})})},u=function(e){return r(i,void 0,void 0,function(){var t,n,r,i,a,c,l;return o(this,function(o){switch(o.label){case 0:return[4,s.json(e)];case 1:for(t=o.sent(),n={label_colors:{},label_list:t[Object.keys(t)[0]].label_list},r=t[Object.keys(t)[0]].label_colors,i=0,a=Object.keys(r);i<a.length;i++)c=a[i],"number"==typeof(l=r[c])?n.label_colors[c]=l:"#"===l.charAt(0)?n.label_colors[c]=Number.parseInt("0x"+l.slice(1)):n.label_colors[c]=Number.parseInt(l);return[2,n]}})})};t.fetchColorData=function(e){return r(i,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return[4,s.text(e)];case 1:return t=r.sent(),n={},t.split("\n").forEach(function(e,t,r){if(e.length>0){var o=e.split(","),i=o[0],a=[];o.forEach(function(e,t,n){t>0&&a.push(parseFloat(e))}),n[i]=a}}),[2,n]}})})};var p=function(e){return r(i,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return[4,s.text(e)];case 1:return t=r.sent(),n=[],t.split("\n").forEach(function(e,t,r){var o=e.split(",");if(o.length>=3){var i=parseFloat(o[1].trim()),a=parseFloat(o[2].trim()),s=parseInt(o[0].trim(),10);n[s]=[i,a]}}),[2,n]}})})},d=function(e){return r(i,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return[4,s.text(e+"/tsne_output.csv")];case 1:return t=r.sent(),n=[],t.split("\n").forEach(function(e,t,r){if(e.length>0){var o=e.split(","),i=[parseFloat(o[0]),parseFloat(o[1])];n.push(i)}}),[2,n]}})})},h=function(e){return r(i,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return[4,s.json(e)];case 1:if(!(t=n.sent()).nodes||!t.links)throw new Error("Unable to parse graph_data - does it have node key(s)?");return[2,t]}})})},f=function(e){return r(i,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return t=e+"/protein.pdb",[4,c.autoLoad(t)];case 1:return[2,n.sent()]}})})},v=function(e){return r(i,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return t=["contacts_monomer.csv","coupling_scores.csv"],[4,Promise.all(t.map(function(t){return s.text(e+"/"+t)}))];case 1:return n=r.sent(),[2,{contactMonomer:m(n[0]),couplingScore:y(n[1])}]}})})},m=function(e){var t=[];return e.split("\n").slice(1).forEach(function(e){var n=e.split(",");3===n.length&&t.push({i:parseFloat(n[0]),j:parseFloat(n[1]),dist:parseFloat(n[2])})}),t},y=function(e){return e.split("\n").slice(1).map(function(e){var t=e.split(",");return{i:parseFloat(t[0]),A_i:t[1],j:parseFloat(t[2]),A_j:t[3],fn:parseFloat(t[4]),cn:parseFloat(t[5]),segment_i:t[6],segment_j:t[7],probability:parseFloat(t[8]),dist_intra:parseFloat(t[9]),dist_multimer:parseFloat(t[10]),dist:parseFloat(t[11]),precision:parseFloat(t[12])}})}},"./src/helper/PlotlyHelper.tsx":function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=n("./node_modules/plotly.js/lib/index.js"),u=n("./node_modules/react/index.js"),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=null,t.resize=function(){t.container&&l.Plots.resize(t.container)},t.draw=function(e){return a(t,void 0,void 0,function(){var t,n,r,o;return s(this,function(i){switch(i.label){case 0:return t=e.data,n=e.layout,r=e.config,this.container?(o=this,[4,l.react(this.container,t,Object.assign({},n),r)]):[3,2];case 1:o.container=i.sent(),i.label=2;case 2:return[2]}})})},t.onHover=function(e){console.log("Plotly onHover called");var n=t.props.onHoverCallback;n&&n(e)},t.onUnHover=function(e){console.log("Plotly onUnHover called");var n=t.props.onUnHoverCallback;n&&n(e)},t}return o(t,e),t.prototype.attachListeners=function(){this.props.onClickCallback&&this.container.on("plotly_click",this.props.onClickCallback),this.props.onSelectedCallback&&this.container.on("plotly_selected",this.props.onSelectedCallback),this.container.on("plotly_hover",this.onHover),this.container.on("plotly_unhover",this.onUnHover),window.addEventListener("resize",this.resize)},t.prototype.componentWillReceiveProps=function(e){this.draw(e)},t.prototype.componentDidMount=function(){this.draw(this.props)},t.prototype.componentWillUnmount=function(){this.container&&l.purge(this.container),window.removeEventListener("resize",this.resize)},t.prototype.render=function(){var e=this,t=this.props,n=t.data,r=t.layout,o=t.config,p=(t.onClickCallback,t.onHoverCallback,t.onSelectedCallback,t.onUnHoverCallback,c(t,["data","layout","config","onClickCallback","onHoverCallback","onSelectedCallback","onUnHoverCallback"]));return u.createElement("div",i({},p,{ref:function(t){return a(e,void 0,void 0,function(){var e;return s(this,function(i){switch(i.label){case 0:return!t||this.container?[3,2]:(e=this,[4,l.react(t,n,Object.assign({},r),o)]);case 1:e.container=i.sent(),this.attachListeners(),i.label=2;case 2:return[2]}})})}}))},t}(u.Component);t.PlotlyChart=p,t.defaultLayout={height:440,legend:{},showlegend:!1,title:"",width:440,xaxis:{},yaxis:{autorange:"reversed"}},t.defaultConfig={displayModeBar:!0}},"./src/helper/ReactHelper.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withDefaultProps=function(e,t){return t.defaultProps=e,t}},"./types/chell.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CONTACT_MAP="Contact Map",e.NGL="NGL",e.SPRING="Spring",e["T-SNE"]="T-SNE"}(t.VIZ_TYPE||(t.VIZ_TYPE={}))},0:function(e,t){},1:function(e,t){}});