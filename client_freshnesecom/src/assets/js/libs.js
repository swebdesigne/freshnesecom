/*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2020 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.4-beta.32
 */
!function webpackUniversalModuleDefinition(root,factory){if("object"==typeof exports&&"object"==typeof module)module.exports=factory();else if("function"==typeof define&&define.amd)define([],factory);else{var a=factory();for(var i in a)("object"==typeof exports?exports:root)[i]=a[i]}}(window,function(){return modules=[function(module){module.exports=JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}')},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var $=__webpack_require__(3),window=__webpack_require__(2),document=window.document,generateMaskSet=__webpack_require__(4).generateMaskSet,analyseMask=__webpack_require__(4).analyseMask,maskScope=__webpack_require__(8);function Inputmask(alias,options,internal){if(!(this instanceof Inputmask))return new Inputmask(alias,options,internal);this.el=void 0,this.events={},this.maskset=void 0,!0!==internal&&($.isPlainObject(alias)?options=alias:(options=options||{},alias&&(options.alias=alias)),this.opts=$.extend(!0,{},this.defaults,options),this.noMasksCache=options&&void 0!==options.definitions,this.userOptions=options||{},resolveAlias(this.opts.alias,options,this.opts),this.isRTL=this.opts.numericInput),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipKeyPressEvent=!1,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.originalPlaceholder=void 0}function resolveAlias(aliasStr,options,opts){var aliasDefinition=Inputmask.prototype.aliases[aliasStr];return aliasDefinition?(aliasDefinition.alias&&resolveAlias(aliasDefinition.alias,void 0,opts),$.extend(!0,opts,aliasDefinition),$.extend(!0,opts,options),!0):(null===opts.mask&&(opts.mask=aliasStr),!1)}function importAttributeOptions(npt,opts,userOptions,dataAttribute){function importOption(option,optionData){var attrOption=""===dataAttribute?option:dataAttribute+"-"+option;optionData=void 0!==optionData?optionData:npt.getAttribute(attrOption),null!==optionData&&("string"==typeof optionData&&(0===option.indexOf("on")?optionData=window[optionData]:"false"===optionData?optionData=!1:"true"===optionData&&(optionData=!0)),userOptions[option]=optionData)}if(!0===opts.importDataAttributes){var attrOptions=npt.getAttribute(dataAttribute),option,dataoptions,optionData,p;if(attrOptions&&""!==attrOptions&&(attrOptions=attrOptions.replace(/'/g,'"'),dataoptions=JSON.parse("{"+attrOptions+"}")),dataoptions)for(p in optionData=void 0,dataoptions)if("alias"===p.toLowerCase()){optionData=dataoptions[p];break}for(option in importOption("alias",optionData),userOptions.alias&&resolveAlias(userOptions.alias,userOptions,opts),opts){if(dataoptions)for(p in optionData=void 0,dataoptions)if(p.toLowerCase()===option.toLowerCase()){optionData=dataoptions[p];break}importOption(option,optionData)}}return $.extend(!0,opts,userOptions),"rtl"!==npt.dir&&!opts.rightAlign||(npt.style.textAlign="right"),"rtl"!==npt.dir&&!opts.numericInput||(npt.dir="ltr",npt.removeAttribute("dir"),opts.isRTL=!0),Object.keys(userOptions).length}Inputmask.prototype={dataAttribute:"data-inputmask",defaults:{_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:$.noop,onincomplete:$.noop,oncleared:$.noop,repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:$.noop,onBeforeMask:null,onBeforePaste:function onBeforePaste(pastedValue,opts){return $.isFunction(opts.onBeforeMask)?opts.onBeforeMask.call(this,pastedValue,opts):pastedValue},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:$.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[8,9,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0},definitions:{9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}},aliases:{},masksCache:{},mask:function mask(elems){var that=this;return"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){var scopedOpts=$.extend(!0,{},that.opts);if(importAttributeOptions(el,scopedOpts,$.extend(!0,{},that.userOptions),that.dataAttribute)){var maskset=generateMaskSet(scopedOpts,that.noMasksCache);void 0!==maskset&&(void 0!==el.inputmask&&(el.inputmask.opts.autoUnmask=!0,el.inputmask.remove()),el.inputmask=new Inputmask(void 0,void 0,!0),el.inputmask.opts=scopedOpts,el.inputmask.noMasksCache=that.noMasksCache,el.inputmask.userOptions=$.extend(!0,{},that.userOptions),el.inputmask.isRTL=scopedOpts.isRTL||scopedOpts.numericInput,el.inputmask.el=el,el.inputmask.$el=$(el),el.inputmask.maskset=maskset,$.data(el,"_inputmask_opts",that.userOptions),maskScope.call(el.inputmask,{action:"mask"}))}}),elems&&elems[0]&&elems[0].inputmask||this},option:function option(options,noremask){return"string"==typeof options?this.opts[options]:"object"===_typeof(options)?($.extend(this.userOptions,options),this.el&&!0!==noremask&&this.mask(this.el),this):void 0},unmaskedvalue:function unmaskedvalue(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"unmaskedvalue",value:value})},remove:function remove(){return maskScope.call(this,{action:"remove"})},getemptymask:function getemptymask(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getemptymask"})},hasMaskedValue:function hasMaskedValue(){return!this.opts.autoUnmask},isComplete:function isComplete(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isComplete"})},getmetadata:function getmetadata(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getmetadata"})},isValid:function isValid(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isValid",value:value})},format:function format(value,metadata){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"format",value:value,metadata:metadata})},setValue:function setValue(value){this.el&&$(this.el).trigger("setvalue",[value])},analyseMask:analyseMask},Inputmask.extendDefaults=function(options){$.extend(!0,Inputmask.prototype.defaults,options)},Inputmask.extendDefinitions=function(definition){$.extend(!0,Inputmask.prototype.definitions,definition)},Inputmask.extendAliases=function(alias){$.extend(!0,Inputmask.prototype.aliases,alias)},Inputmask.format=function(value,options,metadata){return Inputmask(options).format(value,metadata)},Inputmask.unmask=function(value,options){return Inputmask(options).unmaskedvalue(value)},Inputmask.isValid=function(value,options){return Inputmask(options).isValid(value)},Inputmask.remove=function(elems){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){el.inputmask&&el.inputmask.remove()})},Inputmask.setValue=function(elems,value){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){el.inputmask?el.inputmask.setValue(value):$(el).trigger("setvalue",[value])})},Inputmask.dependencyLib=$,window.Inputmask=Inputmask,module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__WEBPACK_AMD_DEFINE_RESULT__=function(){return"undefined"!=typeof window?window:new(eval("require('jsdom').JSDOM"))("").window}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var window=__webpack_require__(2),document=window.document;function indexOf(list,elem){for(var i=0,len=list.length;i<len;i++)if(list[i]===elem)return i;return-1}function isWindow(obj){return null!=obj&&obj===obj.window}function isArraylike(obj){var length="length"in obj&&obj.length,ltype=_typeof(obj);return"function"!==ltype&&!isWindow(obj)&&(!(1!==obj.nodeType||!length)||("array"===ltype||0===length||"number"==typeof length&&0<length&&length-1 in obj))}function isValidElement(elem){return elem instanceof Element}function DependencyLib(elem){return elem instanceof DependencyLib?elem:this instanceof DependencyLib?void(null!=elem&&elem!==window&&(this[0]=elem.nodeName?elem:void 0!==elem[0]&&elem[0].nodeName?elem[0]:document.querySelector(elem),void 0!==this[0]&&null!==this[0]&&(this[0].eventRegistry=this[0].eventRegistry||{}))):new DependencyLib(elem)}DependencyLib.prototype={on:function on(events,handler){function addEvent(ev,namespace){elem.addEventListener?elem.addEventListener(ev,handler,!1):elem.attachEvent&&elem.attachEvent("on"+ev,handler),eventRegistry[ev]=eventRegistry[ev]||{},eventRegistry[ev][namespace]=eventRegistry[ev][namespace]||[],eventRegistry[ev][namespace].push(handler)}if(isValidElement(this[0]))for(var eventRegistry=this[0].eventRegistry,elem=this[0],_events=events.split(" "),endx=0;endx<_events.length;endx++){var nsEvent=_events[endx].split("."),ev=nsEvent[0],namespace=nsEvent[1]||"global";addEvent(ev,namespace)}return this},off:function off(events,handler){var eventRegistry,elem;function removeEvent(ev,namespace,handler){if(ev in eventRegistry==!0)if(elem.removeEventListener?elem.removeEventListener(ev,handler,!1):elem.detachEvent&&elem.detachEvent("on"+ev,handler),"global"===namespace)for(var nmsp in eventRegistry[ev])eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler),1);else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler),1)}function resolveNamespace(ev,namespace){var evts=[],hndx,hndL;if(0<ev.length)if(void 0===handler)for(hndx=0,hndL=eventRegistry[ev][namespace].length;hndx<hndL;hndx++)evts.push({ev:ev,namespace:namespace&&0<namespace.length?namespace:"global",handler:eventRegistry[ev][namespace][hndx]});else evts.push({ev:ev,namespace:namespace&&0<namespace.length?namespace:"global",handler:handler});else if(0<namespace.length)for(var evNdx in eventRegistry)for(var nmsp in eventRegistry[evNdx])if(nmsp===namespace)if(void 0===handler)for(hndx=0,hndL=eventRegistry[evNdx][nmsp].length;hndx<hndL;hndx++)evts.push({ev:evNdx,namespace:nmsp,handler:eventRegistry[evNdx][nmsp][hndx]});else evts.push({ev:evNdx,namespace:nmsp,handler:handler});return evts}if(isValidElement(this[0])){eventRegistry=this[0].eventRegistry,elem=this[0];for(var _events=events.split(" "),endx=0;endx<_events.length;endx++)for(var nsEvent=_events[endx].split("."),offEvents=resolveNamespace(nsEvent[0],nsEvent[1]),i=0,offEventsL=offEvents.length;i<offEventsL;i++)removeEvent(offEvents[i].ev,offEvents[i].namespace,offEvents[i].handler)}return this},trigger:function trigger(events,argument_1){if(isValidElement(this[0]))for(var eventRegistry=this[0].eventRegistry,elem=this[0],_events="string"==typeof events?events.split(" "):[events.type],endx=0;endx<_events.length;endx++){var nsEvent=_events[endx].split("."),ev=nsEvent[0],namespace=nsEvent[1]||"global";if(void 0!==document&&"global"===namespace){var evnt,i,params={bubbles:!0,cancelable:!0,detail:argument_1};if(document.createEvent){try{evnt=new CustomEvent(ev,params)}catch(e){evnt=document.createEvent("CustomEvent"),evnt.initCustomEvent(ev,params.bubbles,params.cancelable,params.detail)}events.type&&DependencyLib.extend(evnt,events),elem.dispatchEvent(evnt)}else evnt=document.createEventObject(),evnt.eventType=ev,evnt.detail=argument_1,events.type&&DependencyLib.extend(evnt,events),elem.fireEvent("on"+evnt.eventType,evnt)}else if(void 0!==eventRegistry[ev])if(events=events.type?events:DependencyLib.Event(events),events.detail=arguments.slice(1),"global"===namespace)for(var nmsp in eventRegistry[ev])for(i=0;i<eventRegistry[ev][nmsp].length;i++)eventRegistry[ev][nmsp][i].apply(elem,arguments);else for(i=0;i<eventRegistry[ev][namespace].length;i++)eventRegistry[ev][namespace][i].apply(elem,arguments)}return this}},DependencyLib.isFunction=function(obj){return"function"==typeof obj},DependencyLib.noop=function(){},DependencyLib.isArray=Array.isArray,DependencyLib.inArray=function(elem,arr,i){return null==arr?-1:indexOf(arr,elem,i)},DependencyLib.valHooks=void 0,DependencyLib.isPlainObject=function(obj){return"object"===_typeof(obj)&&!obj.nodeType&&!isWindow(obj)&&!(obj.constructor&&!Object.hasOwnProperty.call(obj.constructor.prototype,"isPrototypeOf"))},DependencyLib.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=!1;for("boolean"==typeof target&&(deep=target,target=arguments[i]||{},i++),"object"===_typeof(target)||DependencyLib.isFunction(target)||(target={}),i===length&&(target=this,i--);i<length;i++)if(null!=(options=arguments[i]))for(name in options)src=target[name],copy=options[name],target!==copy&&(deep&&copy&&(DependencyLib.isPlainObject(copy)||(copyIsArray=DependencyLib.isArray(copy)))?(clone=copyIsArray?(copyIsArray=!1,src&&DependencyLib.isArray(src)?src:[]):src&&DependencyLib.isPlainObject(src)?src:{},target[name]=DependencyLib.extend(deep,clone,copy)):void 0!==copy&&(target[name]=copy));return target},DependencyLib.each=function(obj,callback){var value,i=0;if(isArraylike(obj))for(var length=obj.length;i<length&&(value=callback.call(obj[i],i,obj[i]),!1!==value);i++);else for(i in obj)if(value=callback.call(obj[i],i,obj[i]),!1===value)break;return obj},DependencyLib.data=function(owner,key,value){if(void 0===value)return owner.__data?owner.__data[key]:null;owner.__data=owner.__data||{},owner.__data[key]=value},"function"==typeof window.CustomEvent?DependencyLib.Event=window.CustomEvent:(DependencyLib.Event=function(event,params){params=params||{bubbles:!1,cancelable:!1,detail:void 0};var evt=document.createEvent("CustomEvent");return evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail),evt},DependencyLib.Event.prototype=window.Event.prototype),module.exports=DependencyLib},function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(3);function generateMaskSet(opts,nocache){var ms;function generateMask(mask,metadata,opts){var regexMask=!1,masksetDefinition,maskdefKey;if(null!==mask&&""!==mask||(regexMask=null!==opts.regex,mask=regexMask?(mask=opts.regex,mask.replace(/^(\^)(.*)(\$)$/,"$2")):(regexMask=!0,".*")),1===mask.length&&!1===opts.greedy&&0!==opts.repeat&&(opts.placeholder=""),0<opts.repeat||"*"===opts.repeat||"+"===opts.repeat){var repeatStart="*"===opts.repeat?0:"+"===opts.repeat?1:opts.repeat;mask=opts.groupmarker[0]+mask+opts.groupmarker[1]+opts.quantifiermarker[0]+repeatStart+","+opts.repeat+opts.quantifiermarker[1]}return maskdefKey=regexMask?"regex_"+opts.regex:opts.numericInput?mask.split("").reverse().join(""):mask,!1!==opts.keepStatic&&(maskdefKey="ks_"+maskdefKey),void 0===Inputmask.prototype.masksCache[maskdefKey]||!0===nocache?(masksetDefinition={mask:mask,maskToken:Inputmask.prototype.analyseMask(mask,regexMask,opts),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:metadata,maskLength:void 0,jitOffset:{}},!0!==nocache&&(Inputmask.prototype.masksCache[maskdefKey]=masksetDefinition,masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]))):masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]),masksetDefinition}if($.isFunction(opts.mask)&&(opts.mask=opts.mask(opts)),$.isArray(opts.mask)){if(1<opts.mask.length){null===opts.keepStatic&&(opts.keepStatic=!0);var altMask=opts.groupmarker[0];return $.each(opts.isRTL?opts.mask.reverse():opts.mask,function(ndx,msk){1<altMask.length&&(altMask+=opts.groupmarker[1]+opts.alternatormarker+opts.groupmarker[0]),void 0===msk.mask||$.isFunction(msk.mask)?altMask+=msk:altMask+=msk.mask}),altMask+=opts.groupmarker[1],generateMask(altMask,opts.mask,opts)}opts.mask=opts.mask.pop()}return null===opts.keepStatic&&(opts.keepStatic=!1),ms=opts.mask&&void 0!==opts.mask.mask&&!$.isFunction(opts.mask.mask)?generateMask(opts.mask.mask,opts.mask,opts):generateMask(opts.mask,opts.mask,opts),ms}function analyseMask(mask,regexMask,opts){var tokenizer=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,regexTokenizer=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,escaped=!1,currentToken=new MaskToken,match,m,openenings=[],maskTokens=[],openingToken,currentOpeningToken,alternator,lastMatch,closeRegexGroup=!1;function MaskToken(isGroup,isOptional,isQuantifier,isAlternator){this.matches=[],this.openGroup=isGroup||!1,this.alternatorGroup=!1,this.isGroup=isGroup||!1,this.isOptional=isOptional||!1,this.isQuantifier=isQuantifier||!1,this.isAlternator=isAlternator||!1,this.quantifier={min:1,max:1}}function insertTestDefinition(mtoken,element,position){position=void 0!==position?position:mtoken.matches.length;var prevMatch=mtoken.matches[position-1];if(regexMask)0===element.indexOf("[")||escaped&&/\\d|\\s|\\w]/i.test(element)||"."===element?mtoken.matches.splice(position++,0,{fn:new RegExp(element,opts.casing?"i":""),static:!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element,casing:null,def:element,placeholder:void 0,nativeDef:element}):(escaped&&(element=element[element.length-1]),$.each(element.split(""),function(ndx,lmnt){prevMatch=mtoken.matches[position-1],mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||lmnt)?new RegExp("["+(opts.staticDefinitionSymbol||lmnt)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==lmnt&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||lmnt,placeholder:void 0!==opts.staticDefinitionSymbol?lmnt:void 0,nativeDef:(escaped?"'":"")+lmnt})})),escaped=!1;else{var maskdef=(opts.definitions?opts.definitions[element]:void 0)||Inputmask.prototype.definitions[element];maskdef&&!escaped?mtoken.matches.splice(position++,0,{fn:maskdef.validator?"string"==typeof maskdef.validator?new RegExp(maskdef.validator,opts.casing?"i":""):new function(){this.test=maskdef.validator}:new RegExp("."),static:maskdef.static||!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element,generated:maskdef.generated}):(mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||element)?new RegExp("["+(opts.staticDefinitionSymbol||element)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:void 0!==opts.staticDefinitionSymbol?element:void 0,nativeDef:(escaped?"'":"")+element}),escaped=!1)}}function verifyGroupMarker(maskToken){maskToken&&maskToken.matches&&$.each(maskToken.matches,function(ndx,token){var nextToken=maskToken.matches[ndx+1];(void 0===nextToken||void 0===nextToken.matches||!1===nextToken.isQuantifier)&&token&&token.isGroup&&(token.isGroup=!1,regexMask||(insertTestDefinition(token,opts.groupmarker[0],0),!0!==token.openGroup&&insertTestDefinition(token,opts.groupmarker[1]))),verifyGroupMarker(token)})}function defaultCase(){if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],insertTestDefinition(currentOpeningToken,m),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup&&(alternator.matches[mndx].isGroup=!1);0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else insertTestDefinition(currentToken,m)}function reverseTokens(maskToken){function reverseStatic(st){return st===opts.optionalmarker[0]?st=opts.optionalmarker[1]:st===opts.optionalmarker[1]?st=opts.optionalmarker[0]:st===opts.groupmarker[0]?st=opts.groupmarker[1]:st===opts.groupmarker[1]&&(st=opts.groupmarker[0]),st}for(var match in maskToken.matches=maskToken.matches.reverse(),maskToken.matches)if(Object.prototype.hasOwnProperty.call(maskToken.matches,match)){var intMatch=parseInt(match);if(maskToken.matches[match].isQuantifier&&maskToken.matches[intMatch+1]&&maskToken.matches[intMatch+1].isGroup){var qt=maskToken.matches[match];maskToken.matches.splice(match,1),maskToken.matches.splice(intMatch+1,0,qt)}void 0!==maskToken.matches[match].matches?maskToken.matches[match]=reverseTokens(maskToken.matches[match]):maskToken.matches[match]=reverseStatic(maskToken.matches[match])}return maskToken}function groupify(matches){var groupToken=new MaskToken(!0);return groupToken.openGroup=!1,groupToken.matches=matches,groupToken}function closeGroup(){if(openingToken=openenings.pop(),openingToken.openGroup=!1,void 0!==openingToken)if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(openingToken),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup=!1,alternator.matches[mndx].alternatorGroup=!1;0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else currentToken.matches.push(openingToken);else defaultCase()}function groupQuantifier(matches){var lastMatch=matches.pop();return lastMatch.isQuantifier&&(lastMatch=groupify([matches.pop(),lastMatch])),lastMatch}for(regexMask&&(opts.optionalmarker[0]=void 0,opts.optionalmarker[1]=void 0);match=regexMask?regexTokenizer.exec(mask):tokenizer.exec(mask);){if(m=match[0],regexMask)switch(m.charAt(0)){case"?":m="{0,1}";break;case"+":case"*":m="{"+m+"}";break;case"|":if(0===openenings.length){var altRegexGroup=groupify(currentToken.matches);altRegexGroup.openGroup=!0,openenings.push(altRegexGroup),currentToken.matches=[],closeRegexGroup=!0}break}if(escaped)defaultCase();else switch(m.charAt(0)){case"(?=":break;case"(?!":break;case"(?<=":break;case"(?<!":break;case opts.escapeChar:escaped=!0,regexMask&&defaultCase();break;case opts.optionalmarker[1]:case opts.groupmarker[1]:closeGroup();break;case opts.optionalmarker[0]:openenings.push(new MaskToken(!1,!0));break;case opts.groupmarker[0]:openenings.push(new MaskToken(!0));break;case opts.quantifiermarker[0]:var quantifier=new MaskToken(!1,!1,!0);m=m.replace(/[{}]/g,"");var mqj=m.split("|"),mq=mqj[0].split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=1===mq.length?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);"*"!==mq0&&"+"!==mq0||(mq0="*"===mq1?0:1),quantifier.quantifier={min:mq0,max:mq1,jit:mqj[1]};var matches=0<openenings.length?openenings[openenings.length-1].matches:currentToken.matches;if(match=matches.pop(),match.isAlternator){matches.push(match),matches=match.matches;var groupToken=new MaskToken(!0),tmpMatch=matches.pop();matches.push(groupToken),matches=groupToken.matches,match=tmpMatch}match.isGroup||(match=groupify([match])),matches.push(match),matches.push(quantifier);break;case opts.alternatormarker:if(0<openenings.length){currentOpeningToken=openenings[openenings.length-1];var subToken=currentOpeningToken.matches[currentOpeningToken.matches.length-1];lastMatch=currentOpeningToken.openGroup&&(void 0===subToken.matches||!1===subToken.isGroup&&!1===subToken.isAlternator)?openenings.pop():groupQuantifier(currentOpeningToken.matches)}else lastMatch=groupQuantifier(currentToken.matches);if(lastMatch.isAlternator)openenings.push(lastMatch);else if(lastMatch.alternatorGroup?(alternator=openenings.pop(),lastMatch.alternatorGroup=!1):alternator=new MaskToken(!1,!1,!1,!0),alternator.matches.push(lastMatch),openenings.push(alternator),lastMatch.openGroup){lastMatch.openGroup=!1;var alternatorGroup=new MaskToken(!0);alternatorGroup.alternatorGroup=!0,openenings.push(alternatorGroup)}break;default:defaultCase()}}for(closeRegexGroup&&closeGroup();0<openenings.length;)openingToken=openenings.pop(),currentToken.matches.push(openingToken);return 0<currentToken.matches.length&&(verifyGroupMarker(currentToken),maskTokens.push(currentToken)),(opts.numericInput||opts.isRTL)&&reverseTokens(maskTokens[0]),maskTokens}module.exports={generateMaskSet:generateMaskSet,analyseMask:analyseMask}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=_default;var escapeRegexRegex=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim");function _default(str){return str.replace(escapeRegexRegex,"\\$1")}},function(module,exports,__webpack_require__){"use strict";__webpack_require__(7),__webpack_require__(10),__webpack_require__(11),__webpack_require__(12),module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){"use strict";var Inputmask=__webpack_require__(1);Inputmask.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var ipValidatorRegex=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function ipValidator(chrs,maskset,pos,strict,opts){return chrs=-1<pos-1&&"."!==maskset.buffer[pos-1]?(chrs=maskset.buffer[pos-1]+chrs,-1<pos-2&&"."!==maskset.buffer[pos-2]?maskset.buffer[pos-2]+chrs:"0"+chrs):"00"+chrs,ipValidatorRegex.test(chrs)}Inputmask.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)//.*",autoUnmask:!1},ip:{mask:"i[i[i]].j[j[j]].k[k[k]].l[l[l]]",definitions:{i:{validator:ipValidator},j:{validator:ipValidator},k:{validator:ipValidator},l:{validator:ipValidator}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,casing:"lower",onBeforePaste:function onBeforePaste(pastedValue,opts){return pastedValue=pastedValue.toLowerCase(),pastedValue.replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""))}}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";__webpack_require__(9);var $=__webpack_require__(3),window=__webpack_require__(2),document=window.document,ua=window.navigator&&window.navigator.userAgent||"",ie=0<ua.indexOf("MSIE ")||0<ua.indexOf("Trident/"),mobile="ontouchstart"in window,iemobile=/iemobile/i.test(ua),iphone=/iphone/i.test(ua)&&!iemobile,keyCode=__webpack_require__(0);module.exports=function maskScope(actionObj){var inputmask=this,maskset=inputmask.maskset,opts=inputmask.opts,el=inputmask.el,isRTL=inputmask.isRTL||(inputmask.isRTL=opts.numericInput);function getMaskTemplate(baseOnInput,minimalPos,includeMode,noJit,clearOptionalTail){var greedy=opts.greedy;clearOptionalTail&&(opts.greedy=!1),minimalPos=minimalPos||0;var maskTemplate=[],ndxIntlzr,pos=0,test,testPos,jitRenderStatic;do{if(!0===baseOnInput&&maskset.validPositions[pos])testPos=clearOptionalTail&&!0===maskset.validPositions[pos].match.optionality&&void 0===maskset.validPositions[pos+1]&&(!0===maskset.validPositions[pos].generatedInput||maskset.validPositions[pos].input==opts.skipOptionalPartCharacter&&0<pos)?determineTestTemplate(pos,getTests(pos,ndxIntlzr,pos-1)):maskset.validPositions[pos],test=testPos.match,ndxIntlzr=testPos.locator.slice(),maskTemplate.push(!0===includeMode?testPos.input:!1===includeMode?test.nativeDef:getPlaceholder(pos,test));else{testPos=getTestTemplate(pos,ndxIntlzr,pos-1),test=testPos.match,ndxIntlzr=testPos.locator.slice();var jitMasking=!0!==noJit&&(!1!==opts.jitMasking?opts.jitMasking:test.jit);jitRenderStatic=jitRenderStatic&&test.static&&test.def!==opts.groupSeparator&&null===test.fn||maskset.validPositions[pos-1]&&test.static&&test.def!==opts.groupSeparator&&null===test.fn,jitRenderStatic||!1===jitMasking||void 0===jitMasking||"number"==typeof jitMasking&&isFinite(jitMasking)&&pos<jitMasking?maskTemplate.push(!1===includeMode?test.nativeDef:getPlaceholder(pos,test)):jitRenderStatic=!1}pos++}while((void 0===inputmask.maxLength||pos<inputmask.maxLength)&&(!0!==test.static||""!==test.def)||pos<minimalPos);return""===maskTemplate[maskTemplate.length-1]&&maskTemplate.pop(),!1===includeMode&&void 0!==maskset.maskLength||(maskset.maskLength=pos-1),opts.greedy=greedy,maskTemplate}function resetMaskSet(soft){maskset.buffer=void 0,!0!==soft&&(maskset.validPositions={},maskset.p=0)}function getLastValidPosition(closestTo,strict,validPositions){var before=-1,after=-1,valids=validPositions||maskset.validPositions;for(var posNdx in void 0===closestTo&&(closestTo=-1),valids){var psNdx=parseInt(posNdx);valids[psNdx]&&(strict||!0!==valids[psNdx].generatedInput)&&(psNdx<=closestTo&&(before=psNdx),closestTo<=psNdx&&(after=psNdx))}return-1===before||before==closestTo?after:-1==after?before:closestTo-before<after-closestTo?before:after}function getDecisionTaker(tst){var decisionTaker=tst.locator[tst.alternation];return"string"==typeof decisionTaker&&0<decisionTaker.length&&(decisionTaker=decisionTaker.split(",")[0]),void 0!==decisionTaker?decisionTaker.toString():""}function getLocator(tst,align){var locator=(null!=tst.alternation?tst.mloc[getDecisionTaker(tst)]:tst.locator).join("");if(""!==locator)for(;locator.length<align;)locator+="0";return locator}function determineTestTemplate(pos,tests){pos=0<pos?pos-1:0;for(var altTest=getTest(pos),targetLocator=getLocator(altTest),tstLocator,closest,bestMatch,ndx=0;ndx<tests.length;ndx++){var tst=tests[ndx];tstLocator=getLocator(tst,targetLocator.length);var distance=Math.abs(tstLocator-targetLocator);(void 0===closest||""!==tstLocator&&distance<closest||bestMatch&&!opts.greedy&&bestMatch.match.optionality&&"master"===bestMatch.match.newBlockMarker&&(!tst.match.optionality||!tst.match.newBlockMarker)||bestMatch&&bestMatch.match.optionalQuantifier&&!tst.match.optionalQuantifier)&&(closest=distance,bestMatch=tst)}return bestMatch}function getTestTemplate(pos,ndxIntlzr,tstPs){return maskset.validPositions[pos]||determineTestTemplate(pos,getTests(pos,ndxIntlzr?ndxIntlzr.slice():ndxIntlzr,tstPs))}function getTest(pos,tests){return maskset.validPositions[pos]?maskset.validPositions[pos]:(tests||getTests(pos))[0]}function positionCanMatchDefinition(pos,testDefinition,opts){for(var valid=!1,tests=getTests(pos),tndx=0;tndx<tests.length;tndx++){if(tests[tndx].match&&(!(tests[tndx].match.nativeDef!==testDefinition.match[opts.shiftPositions?"def":"nativeDef"]||opts.shiftPositions&&testDefinition.match.static)||tests[tndx].match.nativeDef===testDefinition.match.nativeDef)){valid=!0;break}if(tests[tndx].match&&tests[tndx].match.def===testDefinition.match.nativeDef){valid=void 0;break}}return!1===valid&&void 0!==maskset.jitOffset[pos]&&(valid=positionCanMatchDefinition(pos+maskset.jitOffset[pos],testDefinition,opts)),valid}function getTests(pos,ndxIntlzr,tstPs){var maskTokens=maskset.maskToken,testPos=ndxIntlzr?tstPs:0,ndxInitializer=ndxIntlzr?ndxIntlzr.slice():[0],matches=[],insertStop=!1,latestMatch,cacheDependency=ndxIntlzr?ndxIntlzr.join(""):"";function resolveTestFromToken(maskToken,ndxInitializer,loopNdx,quantifierRecurse){function handleMatch(match,loopNdx,quantifierRecurse){function isFirstMatch(latestMatch,tokenGroup){var firstMatch=0===$.inArray(latestMatch,tokenGroup.matches);return firstMatch||$.each(tokenGroup.matches,function(ndx,match){if(!0===match.isQuantifier?firstMatch=isFirstMatch(latestMatch,tokenGroup.matches[ndx-1]):Object.prototype.hasOwnProperty.call(match,"matches")&&(firstMatch=isFirstMatch(latestMatch,match)),firstMatch)return!1}),firstMatch}function resolveNdxInitializer(pos,alternateNdx,targetAlternation){var bestMatch,indexPos;if((maskset.tests[pos]||maskset.validPositions[pos])&&$.each(maskset.tests[pos]||[maskset.validPositions[pos]],function(ndx,lmnt){if(lmnt.mloc[alternateNdx])return bestMatch=lmnt,!1;var alternation=void 0!==targetAlternation?targetAlternation:lmnt.alternation,ndxPos=void 0!==lmnt.locator[alternation]?lmnt.locator[alternation].toString().indexOf(alternateNdx):-1;(void 0===indexPos||ndxPos<indexPos)&&-1!==ndxPos&&(bestMatch=lmnt,indexPos=ndxPos)}),bestMatch){var bestMatchAltIndex=bestMatch.locator[bestMatch.alternation],locator=bestMatch.mloc[alternateNdx]||bestMatch.mloc[bestMatchAltIndex]||bestMatch.locator;return locator.slice((void 0!==targetAlternation?targetAlternation:bestMatch.alternation)+1)}return void 0!==targetAlternation?resolveNdxInitializer(pos,alternateNdx):void 0}function isSubsetOf(source,target){function expand(pattern){for(var expanded=[],start=-1,end,i=0,l=pattern.length;i<l;i++)if("-"===pattern.charAt(i))for(end=pattern.charCodeAt(i+1);++start<end;)expanded.push(String.fromCharCode(start));else start=pattern.charCodeAt(i),expanded.push(pattern.charAt(i));return expanded.join("")}return source.match.def===target.match.nativeDef||!(!(opts.regex||source.match.fn instanceof RegExp&&target.match.fn instanceof RegExp)||!0===source.match.static||!0===target.match.static)&&-1!==expand(target.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g,"")))}function staticCanMatchDefinition(source,target){return!0===source.match.static&&!0!==target.match.static&&target.match.fn.test(source.match.def,maskset,pos,!1,opts,!1)}function setMergeLocators(targetMatch,altMatch){var alternationNdx=targetMatch.alternation,shouldMerge=void 0===altMatch||alternationNdx===altMatch.alternation&&-1===targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);if(!shouldMerge&&alternationNdx>altMatch.alternation)for(var i=altMatch.alternation;i<alternationNdx;i++)if(targetMatch.locator[i]!==altMatch.locator[i]){alternationNdx=i,shouldMerge=!0;break}if(shouldMerge){targetMatch.mloc=targetMatch.mloc||{};var locNdx=targetMatch.locator[alternationNdx];if(void 0!==locNdx){if("string"==typeof locNdx&&(locNdx=locNdx.split(",")[0]),void 0===targetMatch.mloc[locNdx]&&(targetMatch.mloc[locNdx]=targetMatch.locator.slice()),void 0!==altMatch){for(var ndx in altMatch.mloc)"string"==typeof ndx&&(ndx=ndx.split(",")[0]),void 0===targetMatch.mloc[ndx]&&(targetMatch.mloc[ndx]=altMatch.mloc[ndx]);targetMatch.locator[alternationNdx]=Object.keys(targetMatch.mloc).join(",")}return!0}targetMatch.alternation=void 0}return!1}function isSameLevel(targetMatch,altMatch){if(targetMatch.locator.length!==altMatch.locator.length)return!1;for(var locNdx=targetMatch.alternation+1;locNdx<targetMatch.locator.length;locNdx++)if(targetMatch.locator[locNdx]!==altMatch.locator[locNdx])return!1;return!0}if(testPos>pos+opts._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+maskset.mask;if(testPos===pos&&void 0===match.matches)return matches.push({match:match,locator:loopNdx.reverse(),cd:cacheDependency,mloc:{}}),!0;if(void 0!==match.matches){if(match.isGroup&&quantifierRecurse!==match){if(match=handleMatch(maskToken.matches[$.inArray(match,maskToken.matches)+1],loopNdx,quantifierRecurse),match)return!0}else if(match.isOptional){var optionalToken=match,mtchsNdx=matches.length;if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match){if($.each(matches,function(ndx,mtch){mtchsNdx<=ndx&&(mtch.match.optionality=!0)}),latestMatch=matches[matches.length-1].match,void 0!==quantifierRecurse||!isFirstMatch(latestMatch,optionalToken))return!0;insertStop=!0,testPos=pos}}else if(match.isAlternator){var alternateToken=match,malternateMatches=[],maltMatches,currentMatches=matches.slice(),loopNdxCnt=loopNdx.length,altIndex=0<ndxInitializer.length?ndxInitializer.shift():-1;if(-1===altIndex||"string"==typeof altIndex){var currentPos=testPos,ndxInitializerClone=ndxInitializer.slice(),altIndexArr=[],amndx;if("string"==typeof altIndex)altIndexArr=altIndex.split(",");else for(amndx=0;amndx<alternateToken.matches.length;amndx++)altIndexArr.push(amndx.toString());if(void 0!==maskset.excludes[pos]){for(var altIndexArrClone=altIndexArr.slice(),i=0,exl=maskset.excludes[pos].length;i<exl;i++){var excludeSet=maskset.excludes[pos][i].toString().split(":");loopNdx.length==excludeSet[1]&&altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]),1)}0===altIndexArr.length&&(delete maskset.excludes[pos],altIndexArr=altIndexArrClone)}(!0===opts.keepStatic||isFinite(parseInt(opts.keepStatic))&&currentPos>=opts.keepStatic)&&(altIndexArr=altIndexArr.slice(0,1));for(var unMatchedAlternation=!1,ndx=0;ndx<altIndexArr.length;ndx++){amndx=parseInt(altIndexArr[ndx]),matches=[],ndxInitializer="string"==typeof altIndex&&resolveNdxInitializer(testPos,amndx,loopNdxCnt)||ndxInitializerClone.slice(),alternateToken.matches[amndx]&&handleMatch(alternateToken.matches[amndx],[amndx].concat(loopNdx),quantifierRecurse)?match=!0:0===ndx&&(unMatchedAlternation=!0),maltMatches=matches.slice(),testPos=currentPos,matches=[];for(var ndx1=0;ndx1<maltMatches.length;ndx1++){var altMatch=maltMatches[ndx1],dropMatch=!1;altMatch.match.jit=altMatch.match.jit||unMatchedAlternation,altMatch.alternation=altMatch.alternation||loopNdxCnt,setMergeLocators(altMatch);for(var ndx2=0;ndx2<malternateMatches.length;ndx2++){var altMatch2=malternateMatches[ndx2];if("string"!=typeof altIndex||void 0!==altMatch.alternation&&-1!==$.inArray(altMatch.locator[altMatch.alternation].toString(),altIndexArr)){if(altMatch.match.nativeDef===altMatch2.match.nativeDef){dropMatch=!0,setMergeLocators(altMatch2,altMatch);break}if(isSubsetOf(altMatch,altMatch2)){setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch));break}if(isSubsetOf(altMatch2,altMatch)){setMergeLocators(altMatch2,altMatch);break}if(staticCanMatchDefinition(altMatch,altMatch2)){isSameLevel(altMatch,altMatch2)||void 0!==el.inputmask.userOptions.keepStatic?setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch)):opts.keepStatic=!0;break}}}dropMatch||malternateMatches.push(altMatch)}}matches=currentMatches.concat(malternateMatches),testPos=pos,insertStop=0<matches.length,match=0<malternateMatches.length,ndxInitializer=ndxInitializerClone.slice()}else match=handleMatch(alternateToken.matches[altIndex]||maskToken.matches[altIndex],[altIndex].concat(loopNdx),quantifierRecurse);if(match)return!0}else if(match.isQuantifier&&quantifierRecurse!==maskToken.matches[$.inArray(match,maskToken.matches)-1])for(var qt=match,qndx=0<ndxInitializer.length?ndxInitializer.shift():0;qndx<(isNaN(qt.quantifier.max)?qndx+1:qt.quantifier.max)&&testPos<=pos;qndx++){var tokenGroup=maskToken.matches[$.inArray(qt,maskToken.matches)-1];if(match=handleMatch(tokenGroup,[qndx].concat(loopNdx),tokenGroup),match){if(latestMatch=matches[matches.length-1].match,latestMatch.optionalQuantifier=qndx>=qt.quantifier.min,latestMatch.jit=(qndx||1)*tokenGroup.matches.indexOf(latestMatch)>=qt.quantifier.jit,latestMatch.optionalQuantifier&&isFirstMatch(latestMatch,tokenGroup)){insertStop=!0,testPos=pos;break}return latestMatch.jit&&(maskset.jitOffset[pos]=tokenGroup.matches.length-tokenGroup.matches.indexOf(latestMatch)),!0}}else if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match)return!0}else testPos++}for(var tndx=0<ndxInitializer.length?ndxInitializer.shift():0;tndx<maskToken.matches.length;tndx++)if(!0!==maskToken.matches[tndx].isQuantifier){var match=handleMatch(maskToken.matches[tndx],[tndx].concat(loopNdx),quantifierRecurse);if(match&&testPos===pos)return match;if(pos<testPos)break}}function mergeLocators(pos,tests){var locator=[];return $.isArray(tests)||(tests=[tests]),0<tests.length&&(void 0===tests[0].alternation||!0===opts.keepStatic?(locator=determineTestTemplate(pos,tests.slice()).locator.slice(),0===locator.length&&(locator=tests[0].locator.slice())):$.each(tests,function(ndx,tst){if(""!==tst.def)if(0===locator.length)locator=tst.locator.slice();else for(var i=0;i<locator.length;i++)tst.locator[i]&&-1===locator[i].toString().indexOf(tst.locator[i])&&(locator[i]+=","+tst.locator[i])})),locator}if(-1<pos&&(void 0===inputmask.maxLength||pos<inputmask.maxLength)){if(void 0===ndxIntlzr){for(var previousPos=pos-1,test;void 0===(test=maskset.validPositions[previousPos]||maskset.tests[previousPos])&&-1<previousPos;)previousPos--;void 0!==test&&-1<previousPos&&(ndxInitializer=mergeLocators(previousPos,test),cacheDependency=ndxInitializer.join(""),testPos=previousPos)}if(maskset.tests[pos]&&maskset.tests[pos][0].cd===cacheDependency)return maskset.tests[pos];for(var mtndx=ndxInitializer.shift();mtndx<maskTokens.length;mtndx++){var match=resolveTestFromToken(maskTokens[mtndx],ndxInitializer,[mtndx]);if(match&&testPos===pos||pos<testPos)break}}return 0!==matches.length&&!insertStop||matches.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:cacheDependency}),void 0!==ndxIntlzr&&maskset.tests[pos]?$.extend(!0,[],matches):(maskset.tests[pos]=$.extend(!0,[],matches),maskset.tests[pos])}function getBufferTemplate(){return void 0===maskset._buffer&&(maskset._buffer=getMaskTemplate(!1,1),void 0===maskset.buffer&&(maskset.buffer=maskset._buffer.slice())),maskset._buffer}function getBuffer(noCache){return void 0!==maskset.buffer&&!0!==noCache||(maskset.buffer=getMaskTemplate(!0,getLastValidPosition(),!0),void 0===maskset._buffer&&(maskset._buffer=maskset.buffer.slice())),maskset.buffer}function refreshFromBuffer(start,end,buffer){var i,p,skipOptionalPartCharacter=opts.skipOptionalPartCharacter,bffr=isRTL?buffer.slice().reverse():buffer;if(opts.skipOptionalPartCharacter="",!0===start)resetMaskSet(),maskset.tests={},start=0,end=buffer.length,p=determineNewCaretPosition({begin:0,end:0},!1).begin;else{for(i=start;i<end;i++)delete maskset.validPositions[i];p=start}var keypress=new $.Event("keypress");for(i=start;i<end;i++){keypress.which=bffr[i].toString().charCodeAt(0),inputmask.ignorable=!1;var valResult=EventHandlers.keypressEvent.call(el,keypress,!0,!1,!1,p);!1!==valResult&&(p=valResult.forwardPosition)}opts.skipOptionalPartCharacter=skipOptionalPartCharacter}function casing(elem,test,pos){switch(opts.casing||test.casing){case"upper":elem=elem.toUpperCase();break;case"lower":elem=elem.toLowerCase();break;case"title":var posBefore=maskset.validPositions[pos-1];elem=0===pos||posBefore&&posBefore.input===String.fromCharCode(keyCode.SPACE)?elem.toUpperCase():elem.toLowerCase();break;default:if($.isFunction(opts.casing)){var args=Array.prototype.slice.call(arguments);args.push(maskset.validPositions),elem=opts.casing.apply(this,args)}}return elem}function checkAlternationMatch(altArr1,altArr2,na){for(var altArrC=opts.greedy?altArr2:altArr2.slice(0,1),isMatch=!1,naArr=void 0!==na?na.split(","):[],naNdx,i=0;i<naArr.length;i++)-1!==(naNdx=altArr1.indexOf(naArr[i]))&&altArr1.splice(naNdx,1);for(var alndx=0;alndx<altArr1.length;alndx++)if(-1!==$.inArray(altArr1[alndx],altArrC)){isMatch=!0;break}return isMatch}function alternate(maskPos,c,strict,fromIsValid,rAltPos,selection){var validPsClone=$.extend(!0,{},maskset.validPositions),tstClone=$.extend(!0,{},maskset.tests),lastAlt,alternation,isValidRslt=!1,returnRslt=!1,altPos,prevAltPos,i,validPos,decisionPos,lAltPos=void 0!==rAltPos?rAltPos:getLastValidPosition(),nextPos,input,begin,end;if(selection&&(begin=selection.begin,end=selection.end,selection.begin>selection.end&&(begin=selection.end,end=selection.begin)),-1===lAltPos&&void 0===rAltPos)lastAlt=0,prevAltPos=getTest(lastAlt),alternation=prevAltPos.alternation;else for(;0<=lAltPos;lAltPos--)if(altPos=maskset.validPositions[lAltPos],altPos&&void 0!==altPos.alternation){if(prevAltPos&&prevAltPos.locator[altPos.alternation]!==altPos.locator[altPos.alternation])break;lastAlt=lAltPos,alternation=maskset.validPositions[lastAlt].alternation,prevAltPos=altPos}if(void 0!==alternation){decisionPos=parseInt(lastAlt),maskset.excludes[decisionPos]=maskset.excludes[decisionPos]||[],!0!==maskPos&&maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos)+":"+prevAltPos.alternation);var validInputs=[],resultPos=-1;for(i=decisionPos;i<getLastValidPosition(void 0,!0)+1;i++)-1===resultPos&&maskPos<=i&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1),validPos=maskset.validPositions[i],validPos&&!0!==validPos.generatedInput&&(void 0===selection||i<begin||end<=i)&&validInputs.push(validPos.input),delete maskset.validPositions[i];for(-1===resultPos&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1);void 0!==maskset.excludes[decisionPos]&&maskset.excludes[decisionPos].length<10;){for(maskset.tests={},resetMaskSet(!0),isValidRslt=!0,i=0;i<validInputs.length&&(nextPos=isValidRslt.caret||getLastValidPosition(void 0,!0)+1,input=validInputs[i],isValidRslt=isValid(nextPos,input,!1,fromIsValid,!0));i++)i===resultPos&&(returnRslt=isValidRslt),1==maskPos&&isValidRslt&&(returnRslt={caretPos:i});if(isValidRslt)break;if(resetMaskSet(),prevAltPos=getTest(decisionPos),maskset.validPositions=$.extend(!0,{},validPsClone),maskset.tests=$.extend(!0,{},tstClone),!maskset.excludes[decisionPos]){returnRslt=alternate(maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}var decisionTaker=getDecisionTaker(prevAltPos);if(-1!==maskset.excludes[decisionPos].indexOf(decisionTaker+":"+prevAltPos.alternation)){returnRslt=alternate(maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}for(maskset.excludes[decisionPos].push(decisionTaker+":"+prevAltPos.alternation),i=decisionPos;i<getLastValidPosition(void 0,!0)+1;i++)delete maskset.validPositions[i]}}return returnRslt&&!1===opts.keepStatic||delete maskset.excludes[decisionPos],returnRslt}function isValid(pos,c,strict,fromIsValid,fromAlternate,validateOnly,fromCheckval){function isSelection(posObj){return isRTL?1<posObj.begin-posObj.end||posObj.begin-posObj.end==1:1<posObj.end-posObj.begin||posObj.end-posObj.begin==1}strict=!0===strict;var maskPos=pos;function processCommandObject(commandObj){if(void 0!==commandObj){if(void 0!==commandObj.remove&&($.isArray(commandObj.remove)||(commandObj.remove=[commandObj.remove]),$.each(commandObj.remove.sort(function(a,b){return b.pos-a.pos}),function(ndx,lmnt){revalidateMask({begin:lmnt,end:lmnt+1})}),commandObj.remove=void 0),void 0!==commandObj.insert&&($.isArray(commandObj.insert)||(commandObj.insert=[commandObj.insert]),$.each(commandObj.insert.sort(function(a,b){return a.pos-b.pos}),function(ndx,lmnt){""!==lmnt.c&&isValid(lmnt.pos,lmnt.c,void 0===lmnt.strict||lmnt.strict,void 0!==lmnt.fromIsValid?lmnt.fromIsValid:fromIsValid)}),commandObj.insert=void 0),commandObj.refreshFromBuffer&&commandObj.buffer){var refresh=commandObj.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,commandObj.buffer),commandObj.refreshFromBuffer=void 0}void 0!==commandObj.rewritePosition&&(maskPos=commandObj.rewritePosition,commandObj=!0)}return commandObj}function _isValid(position,c,strict){var rslt=!1;return $.each(getTests(position),function(ndx,tst){var test=tst.match;if(getBuffer(!0),rslt=null!=test.fn?test.fn.test(c,maskset,position,strict,opts,isSelection(pos)):(c===test.def||c===opts.skipOptionalPartCharacter)&&""!==test.def&&{c:getPlaceholder(position,test,!0)||test.def,pos:position},!1!==rslt){var elem=void 0!==rslt.c?rslt.c:c,validatedPos=position;return elem=elem===opts.skipOptionalPartCharacter&&!0===test.static?getPlaceholder(position,test,!0)||test.def:elem,rslt=processCommandObject(rslt),!0!==rslt&&void 0!==rslt.pos&&rslt.pos!==position&&(validatedPos=rslt.pos),!0!==rslt&&void 0===rslt.pos&&void 0===rslt.c?!1:(!1===revalidateMask(pos,$.extend({},tst,{input:casing(elem,test,validatedPos)}),fromIsValid,validatedPos)&&(rslt=!1),!1)}}),rslt}void 0!==pos.begin&&(maskPos=isRTL?pos.end:pos.begin);var result=!0,positionsClone=$.extend(!0,{},maskset.validPositions);if(!1===opts.keepStatic&&void 0!==maskset.excludes[maskPos]&&!0!==fromAlternate&&!0!==fromIsValid)for(var i=maskPos;i<(isRTL?pos.begin:pos.end);i++)void 0!==maskset.excludes[i]&&(maskset.excludes[i]=void 0,delete maskset.tests[i]);if($.isFunction(opts.preValidation)&&!0!==fromIsValid&&!0!==validateOnly&&(result=opts.preValidation.call(el,getBuffer(),maskPos,c,isSelection(pos),opts,maskset,pos,strict||fromAlternate),result=processCommandObject(result)),!0===result){if(void 0===inputmask.maxLength||maskPos<inputmask.maxLength){if(result=_isValid(maskPos,c,strict),(!strict||!0===fromIsValid)&&!1===result&&!0!==validateOnly){var currentPosValid=maskset.validPositions[maskPos];if(!currentPosValid||!0!==currentPosValid.match.static||currentPosValid.match.def!==c&&c!==opts.skipOptionalPartCharacter){if(opts.insertMode||void 0===maskset.validPositions[seekNext(maskPos)]||pos.end>maskPos){var skip=!1;if(maskset.jitOffset[maskPos]&&void 0===maskset.validPositions[seekNext(maskPos)]&&(result=isValid(maskPos+maskset.jitOffset[maskPos],c,!0),!1!==result&&(!0!==fromAlternate&&(result.caret=maskPos),skip=!0)),pos.end>maskPos&&(maskset.validPositions[maskPos]=void 0),!skip&&!isMask(maskPos,opts.keepStatic))for(var nPos=maskPos+1,snPos=seekNext(maskPos);nPos<=snPos;nPos++)if(result=_isValid(nPos,c,strict),!1!==result){result=trackbackPositions(maskPos,void 0!==result.pos?result.pos:nPos)||result,maskPos=nPos;break}}}else result={caret:seekNext(maskPos)}}}else result=!1;!1!==result||!opts.keepStatic||!isComplete(getBuffer())&&0!==maskPos||strict||!0===fromAlternate?isSelection(pos)&&maskset.tests[maskPos]&&1<maskset.tests[maskPos].length&&opts.keepStatic&&!strict&&!0!==fromAlternate&&(result=alternate(!0)):result=alternate(maskPos,c,strict,fromIsValid,void 0,pos),!0===result&&(result={pos:maskPos})}if($.isFunction(opts.postValidation)&&!0!==fromIsValid&&!0!==validateOnly){var postResult=opts.postValidation.call(el,getBuffer(!0),void 0!==pos.begin?isRTL?pos.end:pos.begin:pos,c,result,opts,maskset,strict,fromCheckval);void 0!==postResult&&(result=!0===postResult?result:postResult)}result&&void 0===result.pos&&(result.pos=maskPos),!1===result||!0===validateOnly?(resetMaskSet(!0),maskset.validPositions=$.extend(!0,{},positionsClone)):trackbackPositions(void 0,maskPos,!0);var endResult=processCommandObject(result);return endResult}function trackbackPositions(originalPos,newPos,fillOnly){if(void 0===originalPos)for(originalPos=newPos-1;0<originalPos&&!maskset.validPositions[originalPos];originalPos--);for(var ps=originalPos;ps<newPos;ps++)if(void 0===maskset.validPositions[ps]&&!isMask(ps,!0)){var vp=0==ps?getTest(ps):maskset.validPositions[ps-1];if(vp){var tests=getTests(ps).slice();""===tests[tests.length-1].match.def&&tests.pop();var bestMatch=determineTestTemplate(ps,tests),np;if(bestMatch&&(!0!==bestMatch.match.jit||"master"===bestMatch.match.newBlockMarker&&(np=maskset.validPositions[ps+1])&&!0===np.match.optionalQuantifier)&&(bestMatch=$.extend({},bestMatch,{input:getPlaceholder(ps,bestMatch.match,!0)||bestMatch.match.def}),bestMatch.generatedInput=!0,revalidateMask(ps,bestMatch,!0),!0!==fillOnly)){var cvpInput=maskset.validPositions[newPos].input;return maskset.validPositions[newPos]=void 0,isValid(newPos,cvpInput,!0,!0)}}}}function revalidateMask(pos,validTest,fromIsValid,validatedPos){function IsEnclosedStatic(pos,valids,selection){var posMatch=valids[pos];if(void 0===posMatch||!0!==posMatch.match.static||!0===posMatch.match.optionality||void 0!==valids[0]&&void 0!==valids[0].alternation)return!1;var prevMatch=selection.begin<=pos-1?valids[pos-1]&&!0===valids[pos-1].match.static&&valids[pos-1]:valids[pos-1],nextMatch=selection.end>pos+1?valids[pos+1]&&!0===valids[pos+1].match.static&&valids[pos+1]:valids[pos+1];return prevMatch&&nextMatch}var offset=0,begin=void 0!==pos.begin?pos.begin:pos,end=void 0!==pos.end?pos.end:pos;if(pos.begin>pos.end&&(begin=pos.end,end=pos.begin),validatedPos=void 0!==validatedPos?validatedPos:begin,begin!==end||opts.insertMode&&void 0!==maskset.validPositions[validatedPos]&&void 0===fromIsValid||void 0===validTest){var positionsClone=$.extend(!0,{},maskset.validPositions),lvp=getLastValidPosition(void 0,!0),i;for(maskset.p=begin,i=lvp;begin<=i;i--)delete maskset.validPositions[i],void 0===validTest&&delete maskset.tests[i+1];var valid=!0,j=validatedPos,posMatch=j,t,canMatch;for(validTest&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest),posMatch++,j++),i=validTest?end:end-1;i<=lvp;i++){if(void 0!==(t=positionsClone[i])&&!0!==t.generatedInput&&(end<=i||begin<=i&&IsEnclosedStatic(i,positionsClone,{begin:begin,end:end}))){for(;""!==getTest(posMatch).match.def;){if(!1!==(canMatch=positionCanMatchDefinition(posMatch,t,opts))||"+"===t.match.def){"+"===t.match.def&&getBuffer(!0);var result=isValid(posMatch,t.input,"+"!==t.match.def,"+"!==t.match.def);if(valid=!1!==result,j=(result.pos||posMatch)+1,!valid&&canMatch)break}else valid=!1;if(valid){void 0===validTest&&t.match.static&&i===pos.begin&&offset++;break}if(!valid&&posMatch>maskset.maskLength)break;posMatch++}""==getTest(posMatch).match.def&&(valid=!1),posMatch=j}if(!valid)break}if(!valid)return maskset.validPositions=$.extend(!0,{},positionsClone),resetMaskSet(!0),!1}else validTest&&getTest(validatedPos).match.cd===validTest.match.cd&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest));return resetMaskSet(!0),offset}function isMask(pos,strict,fuzzy){var test=getTestTemplate(pos).match;if(""===test.def&&(test=getTest(pos).match),!0!==test.static)return test.fn;if(!0===fuzzy&&void 0!==maskset.validPositions[pos]&&!0!==maskset.validPositions[pos].generatedInput)return!0;if(!0!==strict&&-1<pos){if(fuzzy){var tests=getTests(pos);return tests.length>1+(""===tests[tests.length-1].match.def?1:0)}var testTemplate=determineTestTemplate(pos,getTests(pos)),testPlaceHolder=getPlaceholder(pos,testTemplate.match);return testTemplate.match.def!==testPlaceHolder}return!1}function seekNext(pos,newBlock,fuzzy){void 0===fuzzy&&(fuzzy=!0);for(var position=pos+1;""!==getTest(position).match.def&&(!0===newBlock&&(!0!==getTest(position).match.newBlockMarker||!isMask(position,void 0,!0))||!0!==newBlock&&!isMask(position,void 0,fuzzy));)position++;return position}function seekPrevious(pos,newBlock){var position=pos,tests;if(position<=0)return 0;for(;0<--position&&(!0===newBlock&&!0!==getTest(position).match.newBlockMarker||!0!==newBlock&&!isMask(position,void 0,!0)&&(tests=getTests(position),tests.length<2||2===tests.length&&""===tests[1].match.def)););return position}function writeBuffer(input,buffer,caretPos,event,triggerEvents){if(event&&$.isFunction(opts.onBeforeWrite)){var result=opts.onBeforeWrite.call(inputmask,event,buffer,caretPos,opts);if(result){if(result.refreshFromBuffer){var refresh=result.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,result.buffer||buffer),buffer=getBuffer(!0)}void 0!==caretPos&&(caretPos=void 0!==result.caret?result.caret:caretPos)}}if(void 0!==input&&(input.inputmask._valueSet(buffer.join("")),void 0===caretPos||void 0!==event&&"blur"===event.type||caret(input,caretPos,void 0,void 0,void 0!==event&&"keydown"===event.type&&(event.keyCode===keyCode.DELETE||event.keyCode===keyCode.BACKSPACE)),!0===triggerEvents)){var $input=$(input),nptVal=input.inputmask._valueGet();input.inputmask.skipInputEvent=!0,$input.trigger("input"),setTimeout(function(){nptVal===getBufferTemplate().join("")?$input.trigger("cleared"):!0===isComplete(buffer)&&$input.trigger("complete")},0)}}function getPlaceholder(pos,test,returnPL){if(test=test||getTest(pos).match,void 0!==test.placeholder||!0===returnPL)return $.isFunction(test.placeholder)?test.placeholder(opts):test.placeholder;if(!0!==test.static)return opts.placeholder.charAt(pos%opts.placeholder.length);if(-1<pos&&void 0===maskset.validPositions[pos]){var tests=getTests(pos),staticAlternations=[],prevTest;if(tests.length>1+(""===tests[tests.length-1].match.def?1:0))for(var i=0;i<tests.length;i++)if(""!==tests[i].match.def&&!0!==tests[i].match.optionality&&!0!==tests[i].match.optionalQuantifier&&(!0===tests[i].match.static||void 0===prevTest||!1!==tests[i].match.fn.test(prevTest.match.def,maskset,pos,!0,opts))&&(staticAlternations.push(tests[i]),!0===tests[i].match.static&&(prevTest=tests[i]),1<staticAlternations.length&&/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)))return opts.placeholder.charAt(pos%opts.placeholder.length)}return test.def}function HandleNativePlaceholder(npt,value){if(ie){if(npt.inputmask._valueGet()!==value&&(npt.placeholder!==value||""===npt.placeholder)){var buffer=getBuffer().slice(),nptValue=npt.inputmask._valueGet();if(nptValue!==value){var lvp=getLastValidPosition();-1===lvp&&nptValue===getBufferTemplate().join("")?buffer=[]:-1!==lvp&&clearOptionalTail(buffer),writeBuffer(npt,buffer)}}}else npt.placeholder!==value&&(npt.placeholder=value,""===npt.placeholder&&npt.removeAttribute("placeholder"))}function determineNewCaretPosition(selectedCaret,tabbed){function doRadixFocus(clickPos){if(""!==opts.radixPoint&&0!==opts.digits){var vps=maskset.validPositions;if(void 0===vps[clickPos]||vps[clickPos].input===getPlaceholder(clickPos)){if(clickPos<seekNext(-1))return!0;var radixPos=$.inArray(opts.radixPoint,getBuffer());if(-1!==radixPos){for(var vp in vps)if(vps[vp]&&radixPos<vp&&vps[vp].input!==getPlaceholder(vp))return!1;return!0}}}return!1}if(tabbed&&(isRTL?selectedCaret.end=selectedCaret.begin:selectedCaret.begin=selectedCaret.end),selectedCaret.begin===selectedCaret.end){switch(opts.positionCaretOnClick){case"none":break;case"select":selectedCaret={begin:0,end:getBuffer().length};break;case"ignore":selectedCaret.end=selectedCaret.begin=seekNext(getLastValidPosition());break;case"radixFocus":if(doRadixFocus(selectedCaret.begin)){var radixPos=getBuffer().join("").indexOf(opts.radixPoint);selectedCaret.end=selectedCaret.begin=opts.numericInput?seekNext(radixPos):radixPos;break}default:var clickPosition=selectedCaret.begin,lvclickPosition=getLastValidPosition(clickPosition,!0),lastPosition=seekNext(-1!==lvclickPosition||isMask(0)?lvclickPosition:0);if(clickPosition<lastPosition)selectedCaret.end=selectedCaret.begin=isMask(clickPosition,!0)||isMask(clickPosition-1,!0)?clickPosition:seekNext(clickPosition);else{var lvp=maskset.validPositions[lvclickPosition],tt=getTestTemplate(lastPosition,lvp?lvp.match.locator:void 0,lvp),placeholder=getPlaceholder(lastPosition,tt.match);if(""!==placeholder&&getBuffer()[lastPosition]!==placeholder&&!0!==tt.match.optionalQuantifier&&!0!==tt.match.newBlockMarker||!isMask(lastPosition,opts.keepStatic)&&tt.match.def===placeholder){var newPos=seekNext(lastPosition);(newPos<=clickPosition||clickPosition===lastPosition)&&(lastPosition=newPos)}selectedCaret.end=selectedCaret.begin=lastPosition}}return selectedCaret}}var EventRuler={on:function on(input,eventName,eventHandler){var ev=function ev(e){e.originalEvent&&(e=e.originalEvent||e,arguments[0]=e);var that=this,args,inputmask=that.inputmask;if(void 0===inputmask&&"FORM"!==this.nodeName){var imOpts=$.data(that,"_inputmask_opts");$(that).off(),imOpts&&new Inputmask(imOpts).mask(that)}else{if("setvalue"===e.type||"FORM"===this.nodeName||!(that.disabled||that.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||!1===opts.tabThrough&&e.keyCode===keyCode.TAB))){switch(e.type){case"input":if(!0===inputmask.skipInputEvent||e.inputType&&"insertCompositionText"===e.inputType)return inputmask.skipInputEvent=!1,e.preventDefault();break;case"keydown":inputmask.skipKeyPressEvent=!1,inputmask.skipInputEvent=!1;break;case"keypress":if(!0===inputmask.skipKeyPressEvent)return e.preventDefault();inputmask.skipKeyPressEvent=!0;break;case"click":case"focus":return inputmask.validationEvent?(inputmask.validationEvent=!1,input.blur(),HandleNativePlaceholder(input,(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).join("")),setTimeout(function(){input.focus()},3e3)):(args=arguments,setTimeout(function(){input.inputmask&&eventHandler.apply(that,args)},0)),!1}var returnVal=eventHandler.apply(that,arguments);return!1===returnVal&&(e.preventDefault(),e.stopPropagation()),returnVal}e.preventDefault()}};input.inputmask.events[eventName]=input.inputmask.events[eventName]||[],input.inputmask.events[eventName].push(ev),-1!==$.inArray(eventName,["submit","reset"])?null!==input.form&&$(input.form).on(eventName,ev):$(input).on(eventName,ev)},off:function off(input,event){var events;input.inputmask&&input.inputmask.events&&(event?(events=[],events[event]=input.inputmask.events[event]):events=input.inputmask.events,$.each(events,function(eventName,evArr){for(;0<evArr.length;){var ev=evArr.pop();-1!==$.inArray(eventName,["submit","reset"])?null!==input.form&&$(input.form).off(eventName,ev):$(input).off(eventName,ev)}delete input.inputmask.events[eventName]}))}},EventHandlers={keydownEvent:function keydownEvent(e){var input=this,$input=$(input),k=e.keyCode,pos=caret(input),kdResult=opts.onKeyDown.call(this,e,getBuffer(),pos,opts);if(void 0!==kdResult)return kdResult;if(k===keyCode.BACKSPACE||k===keyCode.DELETE||iphone&&k===keyCode.BACKSPACE_SAFARI||e.ctrlKey&&k===keyCode.X&&!("oncut"in input))e.preventDefault(),handleRemove(input,k,pos),writeBuffer(input,getBuffer(!0),maskset.p,e,input.inputmask._valueGet()!==getBuffer().join(""));else if(k===keyCode.END||k===keyCode.PAGE_DOWN){e.preventDefault();var caretPos=seekNext(getLastValidPosition());caret(input,e.shiftKey?pos.begin:caretPos,caretPos,!0)}else k===keyCode.HOME&&!e.shiftKey||k===keyCode.PAGE_UP?(e.preventDefault(),caret(input,0,e.shiftKey?pos.begin:0,!0)):(opts.undoOnEscape&&k===keyCode.ESCAPE||90===k&&e.ctrlKey)&&!0!==e.altKey?(checkVal(input,!0,!1,inputmask.undoValue.split("")),$input.trigger("click")):!0===opts.tabThrough&&k===keyCode.TAB?(!0===e.shiftKey?(!0===getTest(pos.begin).match.static&&(pos.begin=seekNext(pos.begin)),pos.end=seekPrevious(pos.begin,!0),pos.begin=seekPrevious(pos.end,!0)):(pos.begin=seekNext(pos.begin,!0),pos.end=seekNext(pos.begin,!0),pos.end<maskset.maskLength&&pos.end--),pos.begin<maskset.maskLength&&(e.preventDefault(),caret(input,pos.begin,pos.end))):e.shiftKey||opts.insertModeVisual&&!1===opts.insertMode&&(k===keyCode.RIGHT?setTimeout(function(){var caretPos=caret(input);caret(input,caretPos.begin)},0):k===keyCode.LEFT&&setTimeout(function(){var caretPos_begin=translatePosition(input.inputmask.caretPos.begin),caretPos_end=translatePosition(input.inputmask.caretPos.end);caret(input,isRTL?caretPos_begin+(caretPos_begin===maskset.maskLength?0:1):caretPos_begin-(0===caretPos_begin?0:1))},0));inputmask.ignorable=-1!==$.inArray(k,opts.ignorables)},keypressEvent:function keypressEvent(e,checkval,writeOut,strict,ndx){var input=this,$input=$(input),k=e.which||e.charCode||e.keyCode;if(!(!0===checkval||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||inputmask.ignorable))return k===keyCode.ENTER&&inputmask.undoValue!==getBuffer().join("")&&(inputmask.undoValue=getBuffer().join(""),setTimeout(function(){$input.trigger("change")},0)),inputmask.skipInputEvent=!0,!0;if(k){44!==k&&46!==k||3!==e.location||""===opts.radixPoint||(k=opts.radixPoint.charCodeAt(0));var pos=checkval?{begin:ndx,end:ndx}:caret(input),forwardPosition,c=String.fromCharCode(k);maskset.writeOutBuffer=!0;var valResult=isValid(pos,c,strict,void 0,void 0,void 0,checkval);if(!1!==valResult&&(resetMaskSet(!0),forwardPosition=void 0!==valResult.caret?valResult.caret:seekNext(valResult.pos.begin?valResult.pos.begin:valResult.pos),maskset.p=forwardPosition),forwardPosition=opts.numericInput&&void 0===valResult.caret?seekPrevious(forwardPosition):forwardPosition,!1!==writeOut&&(setTimeout(function(){opts.onKeyValidation.call(input,k,valResult)},0),maskset.writeOutBuffer&&!1!==valResult)){var buffer=getBuffer();writeBuffer(input,buffer,forwardPosition,e,!0!==checkval)}if(e.preventDefault(),checkval)return!1!==valResult&&(valResult.forwardPosition=forwardPosition),valResult}},pasteEvent:function pasteEvent(e){var input=this,inputValue=this.inputmask._valueGet(!0),caretPos=caret(this),tempValue;isRTL&&(tempValue=caretPos.end,caretPos.end=caretPos.begin,caretPos.begin=tempValue);var valueBeforeCaret=inputValue.substr(0,caretPos.begin),valueAfterCaret=inputValue.substr(caretPos.end,inputValue.length);if(valueBeforeCaret==(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).slice(0,caretPos.begin).join("")&&(valueBeforeCaret=""),valueAfterCaret==(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).slice(caretPos.end).join("")&&(valueAfterCaret=""),window.clipboardData&&window.clipboardData.getData)inputValue=valueBeforeCaret+window.clipboardData.getData("Text")+valueAfterCaret;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;inputValue=valueBeforeCaret+e.clipboardData.getData("text/plain")+valueAfterCaret}var pasteValue=inputValue;if($.isFunction(opts.onBeforePaste)){if(pasteValue=opts.onBeforePaste.call(inputmask,inputValue,opts),!1===pasteValue)return e.preventDefault();pasteValue=pasteValue||inputValue}return checkVal(this,!0,!1,pasteValue.toString().split(""),e),e.preventDefault()},inputFallBackEvent:function inputFallBackEvent(e){function ieMobileHandler(input,inputValue,caretPos){if(iemobile){var inputChar=inputValue.replace(getBuffer().join(""),"");if(1===inputChar.length){var iv=inputValue.split("");iv.splice(caretPos.begin,0,inputChar),inputValue=iv.join("")}}return inputValue}function analyseChanges(inputValue,buffer,caretPos){for(var frontPart=inputValue.substr(0,caretPos.begin).split(""),backPart=inputValue.substr(caretPos.begin).split(""),frontBufferPart=buffer.substr(0,caretPos.begin).split(""),backBufferPart=buffer.substr(caretPos.begin).split(""),fpl=frontPart.length>=frontBufferPart.length?frontPart.length:frontBufferPart.length,bpl=backPart.length>=backBufferPart.length?backPart.length:backBufferPart.length,bl,i,action="",data=[],marker="~",placeholder;frontPart.length<fpl;)frontPart.push("~");for(;frontBufferPart.length<fpl;)frontBufferPart.push("~");for(;backPart.length<bpl;)backPart.unshift("~");for(;backBufferPart.length<bpl;)backBufferPart.unshift("~");var newBuffer=frontPart.concat(backPart),oldBuffer=frontBufferPart.concat(backBufferPart);for(i=0,bl=newBuffer.length;i<bl;i++)switch(placeholder=getPlaceholder(translatePosition(i)),action){case"insertText":oldBuffer[i-1]===newBuffer[i]&&caretPos.begin==newBuffer.length-1&&data.push(newBuffer[i]),i=bl;break;case"insertReplacementText":"~"===newBuffer[i]?caretPos.end++:i=bl;break;case"deleteContentBackward":"~"===newBuffer[i]?caretPos.end++:i=bl;break;default:newBuffer[i]!==oldBuffer[i]&&("~"!==newBuffer[i+1]&&newBuffer[i+1]!==placeholder&&void 0!==newBuffer[i+1]||(oldBuffer[i]!==placeholder||"~"!==oldBuffer[i+1])&&"~"!==oldBuffer[i]?"~"===oldBuffer[i+1]&&oldBuffer[i]===newBuffer[i+1]?(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--):newBuffer[i]!==placeholder&&"~"!==newBuffer[i]&&("~"===newBuffer[i+1]||oldBuffer[i]!==newBuffer[i]&&oldBuffer[i+1]===newBuffer[i+1])?(action="insertReplacementText",data.push(newBuffer[i]),caretPos.begin--):"~"===newBuffer[i]?(action="deleteContentBackward",!isMask(translatePosition(i),!0)&&oldBuffer[i]!==opts.radixPoint||caretPos.end++):i=bl:(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--));break}return{action:action,data:data,caret:caretPos}}var input=this,inputValue=input.inputmask._valueGet(!0),buffer=(isRTL?getBuffer().slice().reverse():getBuffer()).join(""),caretPos=caret(input,void 0,void 0,!0);if(buffer!==inputValue){inputValue=ieMobileHandler(input,inputValue,caretPos);var changes=analyseChanges(inputValue,buffer,caretPos);switch((input.inputmask.shadowRoot||document).activeElement!==input&&input.focus(),writeBuffer(input,getBuffer()),caret(input,caretPos.begin,caretPos.end,!0),changes.action){case"insertText":case"insertReplacementText":$.each(changes.data,function(ndx,entry){var keypress=new $.Event("keypress");keypress.which=entry.charCodeAt(0),inputmask.ignorable=!1,EventHandlers.keypressEvent.call(input,keypress)}),setTimeout(function(){inputmask.$el.trigger("keyup")},0);break;case"deleteContentBackward":var keydown=new $.Event("keydown");keydown.keyCode=keyCode.BACKSPACE,EventHandlers.keydownEvent.call(input,keydown);break;default:applyInputValue(input,inputValue);break}e.preventDefault()}},compositionendEvent:function compositionendEvent(e){inputmask.$el.trigger("input")},setValueEvent:function setValueEvent(e,argument_1,argument_2){var input=this,value=e&&e.detail?e.detail[0]:argument_1;void 0===value&&(value=this.inputmask._valueGet(!0)),applyInputValue(this,value),(e.detail&&void 0!==e.detail[1]||void 0!==argument_2)&&caret(this,e.detail?e.detail[1]:argument_2)},focusEvent:function focusEvent(e){var input=this,nptValue=this.inputmask._valueGet();opts.showMaskOnFocus&&nptValue!==getBuffer().join("")&&writeBuffer(this,getBuffer(),seekNext(getLastValidPosition())),!0!==opts.positionCaretOnTab||!1!==inputmask.mouseEnter||isComplete(getBuffer())&&-1!==getLastValidPosition()||EventHandlers.clickEvent.apply(this,[e,!0]),inputmask.undoValue=getBuffer().join("")},invalidEvent:function invalidEvent(e){inputmask.validationEvent=!0},mouseleaveEvent:function mouseleaveEvent(){var input=this;inputmask.mouseEnter=!1,opts.clearMaskOnLostFocus&&(this.inputmask.shadowRoot||document).activeElement!==this&&HandleNativePlaceholder(this,inputmask.originalPlaceholder)},clickEvent:function clickEvent(e,tabbed){var input=this;if((this.inputmask.shadowRoot||document).activeElement===this){var newCaretPosition=determineNewCaretPosition(caret(this),tabbed);void 0!==newCaretPosition&&caret(this,newCaretPosition)}},cutEvent:function cutEvent(e){var input=this,pos=caret(this),clipboardData=window.clipboardData||e.clipboardData,clipData=isRTL?getBuffer().slice(pos.end,pos.begin):getBuffer().slice(pos.begin,pos.end);clipboardData.setData("text",isRTL?clipData.reverse().join(""):clipData.join("")),document.execCommand&&document.execCommand("copy"),handleRemove(this,keyCode.DELETE,pos),writeBuffer(this,getBuffer(),maskset.p,e,inputmask.undoValue!==getBuffer().join(""))},blurEvent:function blurEvent(e){var $input=$(this),input=this;if(this.inputmask){HandleNativePlaceholder(this,inputmask.originalPlaceholder);var nptValue=this.inputmask._valueGet(),buffer=getBuffer().slice();""!==nptValue&&(opts.clearMaskOnLostFocus&&(-1===getLastValidPosition()&&nptValue===getBufferTemplate().join("")?buffer=[]:clearOptionalTail(buffer)),!1===isComplete(buffer)&&(setTimeout(function(){$input.trigger("incomplete")},0),opts.clearIncomplete&&(resetMaskSet(),buffer=opts.clearMaskOnLostFocus?[]:getBufferTemplate().slice())),writeBuffer(this,buffer,void 0,e)),inputmask.undoValue!==getBuffer().join("")&&(inputmask.undoValue=getBuffer().join(""),$input.trigger("change"))}},mouseenterEvent:function mouseenterEvent(){var input=this;inputmask.mouseEnter=!0,(this.inputmask.shadowRoot||document).activeElement!==this&&(null==inputmask.originalPlaceholder&&this.placeholder!==inputmask.originalPlaceholder&&(inputmask.originalPlaceholder=this.placeholder),opts.showMaskOnHover&&HandleNativePlaceholder(this,(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).join("")))},submitEvent:function submitEvent(){inputmask.undoValue!==getBuffer().join("")&&inputmask.$el.trigger("change"),opts.clearMaskOnLostFocus&&-1===getLastValidPosition()&&el.inputmask._valueGet&&el.inputmask._valueGet()===getBufferTemplate().join("")&&el.inputmask._valueSet(""),opts.clearIncomplete&&!1===isComplete(getBuffer())&&el.inputmask._valueSet(""),opts.removeMaskOnSubmit&&(el.inputmask._valueSet(el.inputmask.unmaskedvalue(),!0),setTimeout(function(){writeBuffer(el,getBuffer())},0))},resetEvent:function resetEvent(){el.inputmask.refreshValue=!0,setTimeout(function(){applyInputValue(el,el.inputmask._valueGet(!0))},0)}},valueBuffer;function checkVal(input,writeOut,strict,nptvl,initiatingEvent){var inputmask=this||input.inputmask,inputValue=nptvl.slice(),charCodes="",initialNdx=-1,result=void 0;function isTemplateMatch(ndx,charCodes){for(var targetTemplate=getMaskTemplate(!0,0).slice(ndx,seekNext(ndx)).join("").replace(/'/g,""),charCodeNdx=targetTemplate.indexOf(charCodes);0<charCodeNdx&&" "===targetTemplate[charCodeNdx-1];)charCodeNdx--;var match=0===charCodeNdx&&!isMask(ndx)&&(getTest(ndx).match.nativeDef===charCodes.charAt(0)||!0===getTest(ndx).match.static&&getTest(ndx).match.nativeDef==="'"+charCodes.charAt(0)||" "===getTest(ndx).match.nativeDef&&(getTest(ndx+1).match.nativeDef===charCodes.charAt(0)||!0===getTest(ndx+1).match.static&&getTest(ndx+1).match.nativeDef==="'"+charCodes.charAt(0)));if(!match&&0<charCodeNdx&&!isMask(ndx,!1,!0)){var nextPos=seekNext(ndx);inputmask.caretPos.begin<nextPos&&(inputmask.caretPos={begin:nextPos})}return match}resetMaskSet(),maskset.tests={},initialNdx=opts.radixPoint?determineNewCaretPosition({begin:0,end:0}).begin:0,maskset.p=initialNdx,inputmask.caretPos={begin:initialNdx};var staticMatches=[],prevCaretPos=inputmask.caretPos;if($.each(inputValue,function(ndx,charCode){if(void 0!==charCode)if(void 0===maskset.validPositions[ndx]&&inputValue[ndx]===getPlaceholder(ndx)&&isMask(ndx,!0)&&!1===isValid(ndx,inputValue[ndx],!0,void 0,void 0,!0))maskset.p++;else{var keypress=new $.Event("_checkval");keypress.which=charCode.toString().charCodeAt(0),charCodes+=charCode;var lvp=getLastValidPosition(void 0,!0);isTemplateMatch(initialNdx,charCodes)?result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,lvp+1):(result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,inputmask.caretPos.begin),result&&(initialNdx=inputmask.caretPos.begin+1,charCodes="")),result?(void 0!==result.pos&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static&&void 0===maskset.validPositions[result.pos].alternation&&(staticMatches.push(result.pos),isRTL||(result.forwardPosition=result.pos+1)),writeBuffer(void 0,getBuffer(),result.forwardPosition,keypress,!1),inputmask.caretPos={begin:result.forwardPosition,end:result.forwardPosition},prevCaretPos=inputmask.caretPos):inputmask.caretPos=prevCaretPos}}),0<staticMatches.length){var sndx,validPos,nextValid=seekNext(-1,void 0,!1);if(!isComplete(getBuffer())&&staticMatches.length<=nextValid||isComplete(getBuffer())&&0<staticMatches.length&&staticMatches.length!==nextValid&&0===staticMatches[0])for(var nextSndx=nextValid;void 0!==(sndx=staticMatches.shift());){var keypress=new $.Event("_checkval");if(validPos=maskset.validPositions[sndx],validPos.generatedInput=!0,keypress.which=validPos.input.charCodeAt(0),result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,nextSndx),result&&void 0!==result.pos&&result.pos!==sndx&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static)staticMatches.push(result.pos);else if(!result)break;nextSndx++}}writeOut&&writeBuffer(input,getBuffer(),result?result.forwardPosition:inputmask.caretPos.begin,initiatingEvent||new $.Event("checkval"),initiatingEvent&&"input"===initiatingEvent.type&&inputmask.undoValue!==getBuffer().join(""))}function unmaskedvalue(input){if(input){if(void 0===input.inputmask)return input.value;input.inputmask&&input.inputmask.refreshValue&&applyInputValue(input,input.inputmask._valueGet(!0))}var umValue=[],vps=maskset.validPositions;for(var pndx in vps)vps[pndx]&&vps[pndx].match&&(1!=vps[pndx].match.static||!0!==vps[pndx].generatedInput)&&umValue.push(vps[pndx].input);var unmaskedValue=0===umValue.length?"":(isRTL?umValue.reverse():umValue).join("");if($.isFunction(opts.onUnMask)){var bufferValue=(isRTL?getBuffer().slice().reverse():getBuffer()).join("");unmaskedValue=opts.onUnMask.call(inputmask,bufferValue,unmaskedValue,opts)}return unmaskedValue}function translatePosition(pos){return!isRTL||"number"!=typeof pos||opts.greedy&&""===opts.placeholder||!el||(pos=el.inputmask._valueGet().length-pos),pos}function caret(input,begin,end,notranslate,isDelete){var range;if(void 0===begin)return"selectionStart"in input&&"selectionEnd"in input?(begin=input.selectionStart,end=input.selectionEnd):window.getSelection?(range=window.getSelection().getRangeAt(0),range.commonAncestorContainer.parentNode!==input&&range.commonAncestorContainer!==input||(begin=range.startOffset,end=range.endOffset)):document.selection&&document.selection.createRange&&(range=document.selection.createRange(),begin=0-range.duplicate().moveStart("character",-input.inputmask._valueGet().length),end=begin+range.text.length),{begin:notranslate?begin:translatePosition(begin),end:notranslate?end:translatePosition(end)};if($.isArray(begin)&&(end=isRTL?begin[0]:begin[1],begin=isRTL?begin[1]:begin[0]),void 0!==begin.begin&&(end=isRTL?begin.begin:begin.end,begin=isRTL?begin.end:begin.begin),"number"==typeof begin){begin=notranslate?begin:translatePosition(begin),end=notranslate?end:translatePosition(end),end="number"==typeof end?end:begin;var scrollCalc=parseInt(((input.ownerDocument.defaultView||window).getComputedStyle?(input.ownerDocument.defaultView||window).getComputedStyle(input,null):input.currentStyle).fontSize)*end;if(input.scrollLeft=scrollCalc>input.scrollWidth?scrollCalc:0,input.inputmask.caretPos={begin:begin,end:end},opts.insertModeVisual&&!1===opts.insertMode&&begin===end&&(isDelete||end++),input===(input.inputmask.shadowRoot||document).activeElement)if("setSelectionRange"in input)input.setSelectionRange(begin,end);else if(window.getSelection){if(range=document.createRange(),void 0===input.firstChild||null===input.firstChild){var textNode=document.createTextNode("");input.appendChild(textNode)}range.setStart(input.firstChild,begin<input.inputmask._valueGet().length?begin:input.inputmask._valueGet().length),range.setEnd(input.firstChild,end<input.inputmask._valueGet().length?end:input.inputmask._valueGet().length),range.collapse(!0);var sel=window.getSelection();sel.removeAllRanges(),sel.addRange(range)}else input.createTextRange&&(range=input.createTextRange(),range.collapse(!0),range.moveEnd("character",end),range.moveStart("character",begin),range.select())}}function determineLastRequiredPosition(returnDefinition){var buffer=getMaskTemplate(!0,getLastValidPosition(),!0,!0),bl=buffer.length,pos,lvp=getLastValidPosition(),positions={},lvTest=maskset.validPositions[lvp],ndxIntlzr=void 0!==lvTest?lvTest.locator.slice():void 0,testPos;for(pos=lvp+1;pos<buffer.length;pos++)testPos=getTestTemplate(pos,ndxIntlzr,pos-1),ndxIntlzr=testPos.locator.slice(),positions[pos]=$.extend(!0,{},testPos);var lvTestAlt=lvTest&&void 0!==lvTest.alternation?lvTest.locator[lvTest.alternation]:void 0;for(pos=bl-1;lvp<pos&&(testPos=positions[pos],(testPos.match.optionality||testPos.match.optionalQuantifier&&testPos.match.newBlockMarker||lvTestAlt&&(lvTestAlt!==positions[pos].locator[lvTest.alternation]&&1!=testPos.match.static||!0===testPos.match.static&&testPos.locator[lvTest.alternation]&&checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","),lvTestAlt.toString().split(","))&&""!==getTests(pos)[0].def))&&buffer[pos]===getPlaceholder(pos,testPos.match));pos--)bl--;return returnDefinition?{l:bl,def:positions[bl]?positions[bl].match:void 0}:bl}function clearOptionalTail(buffer){buffer.length=0;for(var template=getMaskTemplate(!0,0,!0,void 0,!0),lmnt;void 0!==(lmnt=template.shift());)buffer.push(lmnt);return buffer}function isComplete(buffer){if($.isFunction(opts.isComplete))return opts.isComplete(buffer,opts);if("*"!==opts.repeat){var complete=!1,lrp=determineLastRequiredPosition(!0),aml=seekPrevious(lrp.l);if(void 0===lrp.def||lrp.def.newBlockMarker||lrp.def.optionality||lrp.def.optionalQuantifier){complete=!0;for(var i=0;i<=aml;i++){var test=getTestTemplate(i).match;if(!0!==test.static&&void 0===maskset.validPositions[i]&&!0!==test.optionality&&!0!==test.optionalQuantifier||!0===test.static&&buffer[i]!==getPlaceholder(i,test)){complete=!1;break}}}return complete}}function handleRemove(input,k,pos,strict,fromIsValid){if((opts.numericInput||isRTL)&&(k===keyCode.BACKSPACE?k=keyCode.DELETE:k===keyCode.DELETE&&(k=keyCode.BACKSPACE),isRTL)){var pend=pos.end;pos.end=pos.begin,pos.begin=pend}var lvp=getLastValidPosition(void 0,!0),offset;if(pos.end>=getBuffer().length&&lvp>=pos.end&&(pos.end=lvp+1),k===keyCode.BACKSPACE?pos.end-pos.begin<1&&(pos.begin=seekPrevious(pos.begin)):k===keyCode.DELETE&&pos.begin===pos.end&&(pos.end=isMask(pos.end,!0,!0)?pos.end+1:seekNext(pos.end)+1),!1!==(offset=revalidateMask(pos))){if(!0!==strict&&!1!==opts.keepStatic||null!==opts.regex&&-1!==getTest(pos.begin).match.def.indexOf("|")){var result=alternate(!0);if(result){var newPos=void 0!==result.caret?result.caret:result.pos?seekNext(result.pos.begin?result.pos.begin:result.pos):getLastValidPosition(-1,!0);(k!==keyCode.DELETE||pos.begin>newPos)&&pos.begin}}!0!==strict&&(maskset.p=k===keyCode.DELETE?pos.begin+offset:pos.begin)}}function applyInputValue(input,value){input.inputmask.refreshValue=!1,$.isFunction(opts.onBeforeMask)&&(value=opts.onBeforeMask.call(inputmask,value,opts)||value),value=value.toString().split(""),checkVal(input,!0,!1,value),inputmask.undoValue=getBuffer().join(""),(opts.clearMaskOnLostFocus||opts.clearIncomplete)&&input.inputmask._valueGet()===getBufferTemplate().join("")&&-1===getLastValidPosition()&&input.inputmask._valueSet("")}function mask(){function isElementTypeSupported(input,opts){function patchValueProperty(npt){var valueGet,valueSet;function patchValhook(type){if($.valHooks&&(void 0===$.valHooks[type]||!0!==$.valHooks[type].inputmaskpatch)){var valhookGet=$.valHooks[type]&&$.valHooks[type].get?$.valHooks[type].get:function(elem){return elem.value},valhookSet=$.valHooks[type]&&$.valHooks[type].set?$.valHooks[type].set:function(elem,value){return elem.value=value,elem};$.valHooks[type]={get:function get(elem){if(elem.inputmask){if(elem.inputmask.opts.autoUnmask)return elem.inputmask.unmaskedvalue();var result=valhookGet(elem);return-1!==getLastValidPosition(void 0,void 0,elem.inputmask.maskset.validPositions)||!0!==opts.nullable?result:""}return valhookGet(elem)},set:function set(elem,value){var result=valhookSet(elem,value);return elem.inputmask&&applyInputValue(elem,value),result},inputmaskpatch:!0}}}function getter(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==getLastValidPosition()||!0!==opts.nullable?(this.inputmask.shadowRoot||document.activeElement)===this&&opts.clearMaskOnLostFocus?(isRTL?clearOptionalTail(getBuffer().slice()).reverse():clearOptionalTail(getBuffer().slice())).join(""):valueGet.call(this):"":valueGet.call(this)}function setter(value){valueSet.call(this,value),this.inputmask&&applyInputValue(this,value)}function installNativeValueSetFallback(npt){EventRuler.on(npt,"mouseenter",function(){var input=this,value=this.inputmask._valueGet(!0);value!==(isRTL?getBuffer().reverse():getBuffer()).join("")&&applyInputValue(this,value)})}if(!npt.inputmask.__valueGet){if(!0!==opts.noValuePatching){if(Object.getOwnPropertyDescriptor){var valueProperty=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt),"value"):void 0;valueProperty&&valueProperty.get&&valueProperty.set?(valueGet=valueProperty.get,valueSet=valueProperty.set,Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0})):"input"!==npt.tagName.toLowerCase()&&(valueGet=function valueGet(){return this.textContent},valueSet=function valueSet(value){this.textContent=value},Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0}))}else document.__lookupGetter__&&npt.__lookupGetter__("value")&&(valueGet=npt.__lookupGetter__("value"),valueSet=npt.__lookupSetter__("value"),npt.__defineGetter__("value",getter),npt.__defineSetter__("value",setter));npt.inputmask.__valueGet=valueGet,npt.inputmask.__valueSet=valueSet}npt.inputmask._valueGet=function(overruleRTL){return isRTL&&!0!==overruleRTL?valueGet.call(this.el).split("").reverse().join(""):valueGet.call(this.el)},npt.inputmask._valueSet=function(value,overruleRTL){valueSet.call(this.el,null==value?"":!0!==overruleRTL&&isRTL?value.split("").reverse().join(""):value)},void 0===valueGet&&(valueGet=function valueGet(){return this.value},valueSet=function valueSet(value){this.value=value},patchValhook(npt.type),installNativeValueSetFallback(npt))}}"textarea"!==input.tagName.toLowerCase()&&opts.ignorables.push(keyCode.ENTER);var elementType=input.getAttribute("type"),isSupported="input"===input.tagName.toLowerCase()&&-1!==$.inArray(elementType,opts.supportsInputType)||input.isContentEditable||"textarea"===input.tagName.toLowerCase();if(!isSupported)if("input"===input.tagName.toLowerCase()){var el=document.createElement("input");el.setAttribute("type",elementType),isSupported="text"===el.type,el=null}else isSupported="partial";return!1!==isSupported?patchValueProperty(input):input.inputmask=void 0,isSupported}EventRuler.off(el);var isSupported=isElementTypeSupported(el,opts);if(!1!==isSupported){inputmask.originalPlaceholder=el.placeholder,inputmask.maxLength=void 0!==el?el.maxLength:void 0,-1===inputmask.maxLength&&(inputmask.maxLength=void 0),"inputMode"in el&&null===el.getAttribute("inputmode")&&(el.inputMode=opts.inputmode,el.setAttribute("inputmode",opts.inputmode)),!0===isSupported&&(opts.showMaskOnFocus=opts.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(el.autocomplete),iphone&&(opts.insertModeVisual=!1),EventRuler.on(el,"submit",EventHandlers.submitEvent),EventRuler.on(el,"reset",EventHandlers.resetEvent),EventRuler.on(el,"blur",EventHandlers.blurEvent),EventRuler.on(el,"focus",EventHandlers.focusEvent),EventRuler.on(el,"invalid",EventHandlers.invalidEvent),EventRuler.on(el,"click",EventHandlers.clickEvent),EventRuler.on(el,"mouseleave",EventHandlers.mouseleaveEvent),EventRuler.on(el,"mouseenter",EventHandlers.mouseenterEvent),EventRuler.on(el,"paste",EventHandlers.pasteEvent),EventRuler.on(el,"cut",EventHandlers.cutEvent),EventRuler.on(el,"complete",opts.oncomplete),EventRuler.on(el,"incomplete",opts.onincomplete),EventRuler.on(el,"cleared",opts.oncleared),mobile||!0===opts.inputEventOnly?el.removeAttribute("maxLength"):(EventRuler.on(el,"keydown",EventHandlers.keydownEvent),EventRuler.on(el,"keypress",EventHandlers.keypressEvent)),EventRuler.on(el,"input",EventHandlers.inputFallBackEvent),EventRuler.on(el,"compositionend",EventHandlers.compositionendEvent)),EventRuler.on(el,"setvalue",EventHandlers.setValueEvent),inputmask.undoValue=getBufferTemplate().join("");var activeElement=(el.inputmask.shadowRoot||document).activeElement;if(""!==el.inputmask._valueGet(!0)||!1===opts.clearMaskOnLostFocus||activeElement===el){applyInputValue(el,el.inputmask._valueGet(!0),opts);var buffer=getBuffer().slice();!1===isComplete(buffer)&&opts.clearIncomplete&&resetMaskSet(),opts.clearMaskOnLostFocus&&activeElement!==el&&(-1===getLastValidPosition()?buffer=[]:clearOptionalTail(buffer)),(!1===opts.clearMaskOnLostFocus||opts.showMaskOnFocus&&activeElement===el||""!==el.inputmask._valueGet(!0))&&writeBuffer(el,buffer),activeElement===el&&caret(el,seekNext(getLastValidPosition()))}}}if(void 0!==actionObj)switch(actionObj.action){case"isComplete":return el=actionObj.el,isComplete(getBuffer());case"unmaskedvalue":return void 0!==el&&void 0===actionObj.value||(valueBuffer=actionObj.value,valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,valueBuffer,opts)||valueBuffer).split(""),checkVal.call(this,void 0,!1,!1,valueBuffer),$.isFunction(opts.onBeforeWrite)&&opts.onBeforeWrite.call(inputmask,void 0,getBuffer(),0,opts)),unmaskedvalue(el);case"mask":mask();break;case"format":return valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,actionObj.value,opts)||actionObj.value).split(""),checkVal.call(this,void 0,!0,!1,valueBuffer),actionObj.metadata?{value:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""),metadata:maskScope.call(this,{action:"getmetadata"},maskset,opts)}:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");case"isValid":actionObj.value?(valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,actionObj.value,opts)||actionObj.value).split(""),checkVal.call(this,void 0,!0,!1,valueBuffer)):actionObj.value=isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");for(var buffer=getBuffer(),rl=determineLastRequiredPosition(),lmib=buffer.length-1;rl<lmib&&!isMask(lmib);lmib--);return buffer.splice(rl,lmib+1-rl),isComplete(buffer)&&actionObj.value===(isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""));case"getemptymask":return getBufferTemplate().join("");case"remove":if(el&&el.inputmask){$.data(el,"_inputmask_opts",null);var cv=opts.autoUnmask?unmaskedvalue(el):el.inputmask._valueGet(opts.autoUnmask),valueProperty;cv!==getBufferTemplate().join("")?el.inputmask._valueSet(cv,opts.autoUnmask):el.inputmask._valueSet(""),EventRuler.off(el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(valueProperty=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),"value"),valueProperty&&el.inputmask.__valueGet&&Object.defineProperty(el,"value",{get:el.inputmask.__valueGet,set:el.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&el.__lookupGetter__("value")&&el.inputmask.__valueGet&&(el.__defineGetter__("value",el.inputmask.__valueGet),el.__defineSetter__("value",el.inputmask.__valueSet)),el.inputmask=void 0}return el;case"getmetadata":if($.isArray(maskset.metadata)){var maskTarget=getMaskTemplate(!0,0,!1).join("");return $.each(maskset.metadata,function(ndx,mtdt){if(mtdt.mask===maskTarget)return maskTarget=mtdt,!1}),maskTarget}return maskset.metadata}}},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===_typeof("test".__proto__)?function(object){return object.__proto__}:function(object){return object.constructor.prototype})},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var Inputmask=__webpack_require__(1),$=Inputmask.dependencyLib,keyCode=__webpack_require__(0),currentYear=(new Date).getFullYear(),escapeRegex=__webpack_require__(5).default,formatCode={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return pad(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return pad(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],Hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return function(){return pad(Date.prototype.getHours.call(this),x)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return pad(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return pad(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},formatAlias={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function formatcode(match){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(dynMatches&&void 0!==dynMatches[0]){var fcode=formatCode[match[0][0]+"x"].slice("");return fcode[0]=fcode[0](dynMatches[0]),fcode[3]=fcode[3](dynMatches[0]),fcode}if(formatCode[match[0]])return formatCode[match[0]]}function getTokenizer(opts){if(!opts.tokenizer){var tokens=[],dyntokens=[];for(var ndx in formatCode)if(/\.*x$/.test(ndx)){var dynToken=ndx[0]+"\\d+";-1===dyntokens.indexOf(dynToken)&&dyntokens.push(dynToken)}else-1===tokens.indexOf(ndx[0])&&tokens.push(ndx[0]);opts.tokenizer="("+(0<dyntokens.length?dyntokens.join("|")+"|":"")+tokens.join("+|")+")+?|.",opts.tokenizer=new RegExp(opts.tokenizer,"g")}return opts.tokenizer}function prefillYear(dateParts,currentResult,opts){if(dateParts.year!==dateParts.rawyear){var crrntyear=currentYear.toString(),enteredPart=dateParts.rawyear.replace(/[^0-9]/g,""),currentYearPart=crrntyear.slice(0,enteredPart.length),currentYearNextPart=crrntyear.slice(enteredPart.length);if(2===enteredPart.length&&enteredPart===currentYearPart){var entryCurrentYear=new Date(currentYear,dateParts.month-1,dateParts.day);dateParts.day===entryCurrentYear.getDay()&&(!opts.max||opts.max.date.getTime()>=entryCurrentYear.getTime())&&(dateParts.date.setFullYear(currentYear),dateParts.year=crrntyear,currentResult.insert=[{pos:currentResult.pos+1,c:currentYearNextPart[0]},{pos:currentResult.pos+2,c:currentYearNextPart[1]}])}}return currentResult}function isValidDate(dateParts,currentResult,opts){if(!isFinite(dateParts.rawday)||"29"==dateParts.day&&!isFinite(dateParts.rawyear)||new Date(dateParts.date.getFullYear(),isFinite(dateParts.rawmonth)?dateParts.month:dateParts.date.getMonth()+1,0).getDate()>=dateParts.day)return currentResult;if("29"==dateParts.day){var tokenMatch=getTokenMatch(currentResult.pos,opts);if("yyyy"===tokenMatch.targetMatch[0]&&currentResult.pos-tokenMatch.targetMatchIndex==2)return currentResult.remove=currentResult.pos+1,currentResult}return!1}function isDateInRange(dateParts,result,opts,maskset,fromCheckval){if(!result)return result;if(opts.min){if(dateParts.rawyear){var rawYear=dateParts.rawyear.replace(/[^0-9]/g,""),minYear=opts.min.year.substr(0,rawYear.length),maxYear;if(rawYear<minYear){var tokenMatch=getTokenMatch(result.pos,opts);if(rawYear=dateParts.rawyear.substr(0,result.pos-tokenMatch.targetMatchIndex+1),minYear=opts.min.year.substr(0,rawYear.length),minYear<=rawYear)return result.remove=tokenMatch.targetMatchIndex+rawYear.length,result;if(rawYear="yyyy"===tokenMatch.targetMatch[0]?dateParts.rawyear.substr(1,1):dateParts.rawyear.substr(0,1),minYear=opts.min.year.substr(2,1),maxYear=opts.max?opts.max.year.substr(2,1):rawYear,1===rawYear.length&&minYear<=rawYear<=maxYear&&!0!==fromCheckval)return"yyyy"===tokenMatch.targetMatch[0]?(result.insert=[{pos:result.pos+1,c:rawYear,strict:!0}],result.caret=result.pos+2,maskset.validPositions[result.pos].input=opts.min.year[1]):(result.insert=[{pos:result.pos+1,c:opts.min.year[1],strict:!0},{pos:result.pos+2,c:rawYear,strict:!0}],result.caret=result.pos+3,maskset.validPositions[result.pos].input=opts.min.year[0]),result;result=!1}}result&&dateParts.year&&dateParts.year===dateParts.rawyear&&opts.min.date.getTime()==opts.min.date.getTime()&&(result=opts.min.date.getTime()<=dateParts.date.getTime())}return result&&opts.max&&opts.max.date.getTime()==opts.max.date.getTime()&&(result=opts.max.date.getTime()>=dateParts.date.getTime()),result}function parse(format,dateObjValue,opts,raw){var mask="",match,fcode;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);)if(void 0===dateObjValue)if(fcode=formatcode(match))mask+="("+fcode[0]+")";else switch(match[0]){case"[":mask+="(";break;case"]":mask+=")?";break;default:mask+=escapeRegex(match[0])}else if(fcode=formatcode(match))if(!0!==raw&&fcode[3]){var getFn=fcode[3];mask+=getFn.call(dateObjValue.date)}else fcode[2]?mask+=dateObjValue["raw"+fcode[2]]:mask+=match[0];else mask+=match[0];return mask}function pad(val,len){for(val=String(val),len=len||2;val.length<len;)val="0"+val;return val}function analyseMask(maskString,format,opts){var dateObj={date:new Date(1,0,1)},targetProp,mask=maskString,match,dateOperation;function setValue(dateObj,value,opts){dateObj[targetProp]=value.replace(/[^0-9]/g,"0"),dateObj["raw"+targetProp]=value,void 0!==dateOperation&&dateOperation.call(dateObj.date,"month"==targetProp?parseInt(dateObj[targetProp])-1:dateObj[targetProp])}if("string"==typeof mask){for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);){var dynMatches=new RegExp("\\d+$").exec(match[0]),fcode=dynMatches?match[0][0]+"x":match[0],value=void 0;if(dynMatches){var lastIndex=getTokenizer(opts).lastIndex,tokanMatch=getTokenMatch(match.index,opts);getTokenizer(opts).lastIndex=lastIndex,value=mask.slice(0,mask.indexOf(tokanMatch.nextMatch[0]))}else value=mask.slice(0,fcode.length);Object.prototype.hasOwnProperty.call(formatCode,fcode)&&(targetProp=formatCode[fcode][2],dateOperation=formatCode[fcode][1],setValue(dateObj,value,opts)),mask=mask.slice(value.length)}return dateObj}if(mask&&"object"===_typeof(mask)&&Object.prototype.hasOwnProperty.call(mask,"date"))return mask}function importDate(dateObj,opts){return parse(opts.inputFormat,{date:dateObj},opts)}function getTokenMatch(pos,opts){var calcPos=0,targetMatch,match,matchLength=0;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(opts.inputFormat);){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(matchLength=dynMatches?parseInt(dynMatches[0]):match[0].length,calcPos+=matchLength,pos<=calcPos){targetMatch=match,match=getTokenizer(opts).exec(opts.inputFormat);break}}return{targetMatchIndex:calcPos-matchLength,nextMatch:match,targetMatch:targetMatch}}Inputmask.extendAliases({datetime:{mask:function mask(opts){return opts.numericInput=!1,formatCode.S=opts.i18n.ordinalSuffix.join("|"),opts.inputFormat=formatAlias[opts.inputFormat]||opts.inputFormat,opts.displayFormat=formatAlias[opts.displayFormat]||opts.displayFormat||opts.inputFormat,opts.outputFormat=formatAlias[opts.outputFormat]||opts.outputFormat||opts.inputFormat,opts.placeholder=""!==opts.placeholder?opts.placeholder:opts.inputFormat.replace(/[[\]]/,""),opts.regex=parse(opts.inputFormat,void 0,opts),opts.min=analyseMask(opts.min,opts.inputFormat,opts),opts.max=analyseMask(opts.max,opts.inputFormat,opts),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(strict)return!0;if(isNaN(c)&&buffer[pos]!==c){var tokenMatch=getTokenMatch(pos,opts);if(tokenMatch.nextMatch&&tokenMatch.nextMatch[0]===c&&1<tokenMatch.targetMatch[0].length){var validator=formatCode[tokenMatch.targetMatch[0]][0];if(new RegExp(validator).test("0"+buffer[pos-1]))return buffer[pos]=buffer[pos-1],buffer[pos-1]="0",{fuzzy:!0,buffer:buffer,refreshFromBuffer:{start:pos-1,end:pos+1},pos:pos+1}}}return!0},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict,fromCheckval){if(strict)return!0;var tokenMatch,validator;if(!1===currentResult)return tokenMatch=getTokenMatch(pos+1,opts),tokenMatch.targetMatch&&tokenMatch.targetMatchIndex===pos&&1<tokenMatch.targetMatch[0].length&&void 0!==formatCode[tokenMatch.targetMatch[0]]&&(validator=formatCode[tokenMatch.targetMatch[0]][0],new RegExp(validator).test("0"+c))?{insert:[{pos:pos,c:"0"},{pos:pos+1,c:c}],pos:pos+1}:currentResult;if(currentResult.fuzzy&&(buffer=currentResult.buffer,pos=currentResult.pos),tokenMatch=getTokenMatch(pos,opts),tokenMatch.targetMatch&&tokenMatch.targetMatch[0]&&void 0!==formatCode[tokenMatch.targetMatch[0]]){validator=formatCode[tokenMatch.targetMatch[0]][0];var part=buffer.slice(tokenMatch.targetMatchIndex,tokenMatch.targetMatchIndex+tokenMatch.targetMatch[0].length);!1===new RegExp(validator).test(part.join(""))&&2===tokenMatch.targetMatch[0].length&&maskset.validPositions[tokenMatch.targetMatchIndex]&&maskset.validPositions[tokenMatch.targetMatchIndex+1]&&(maskset.validPositions[tokenMatch.targetMatchIndex+1].input="0")}var result=currentResult,dateParts=analyseMask(buffer.join(""),opts.inputFormat,opts);return result&&dateParts.date.getTime()==dateParts.date.getTime()&&(result=prefillYear(dateParts,result,opts),result=isValidDate(dateParts,result,opts),result=isDateInRange(dateParts,result,opts,maskset,fromCheckval)),pos&&result&&currentResult.pos!==pos?{buffer:parse(opts.inputFormat,dateParts,opts).split(""),refreshFromBuffer:{start:pos,end:currentResult.pos}}:result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var input=this;e.ctrlKey&&e.keyCode===keyCode.RIGHT&&(this.inputmask._valueSet(importDate(new Date,opts)),$(this).trigger("setvalue"))},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return unmaskedValue?parse(opts.outputFormat,analyseMask(maskedValue,opts.inputFormat,opts),opts,!0):unmaskedValue},casing:function casing(elem,test,pos,validPositions){return 0==test.nativeDef.indexOf("[ap]")?elem.toLowerCase():0==test.nativeDef.indexOf("[AP]")?elem.toUpperCase():elem},onBeforeMask:function onBeforeMask(initialValue,opts){return"[object Date]"===Object.prototype.toString.call(initialValue)&&(initialValue=importDate(initialValue,opts)),initialValue},insertMode:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric"}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var Inputmask=__webpack_require__(1),$=Inputmask.dependencyLib,keyCode=__webpack_require__(0),escapeRegex=__webpack_require__(5).default;function autoEscape(txt,opts){for(var escapedTxt="",i=0;i<txt.length;i++)Inputmask.prototype.definitions[txt.charAt(i)]||opts.definitions[txt.charAt(i)]||opts.optionalmarker[0]===txt.charAt(i)||opts.optionalmarker[1]===txt.charAt(i)||opts.quantifiermarker[0]===txt.charAt(i)||opts.quantifiermarker[1]===txt.charAt(i)||opts.groupmarker[0]===txt.charAt(i)||opts.groupmarker[1]===txt.charAt(i)||opts.alternatormarker===txt.charAt(i)?escapedTxt+="\\"+txt.charAt(i):escapedTxt+=txt.charAt(i);return escapedTxt}function alignDigits(buffer,digits,opts,force){if(0<buffer.length&&0<digits&&(!opts.digitsOptional||force)){var radixPosition=$.inArray(opts.radixPoint,buffer);-1===radixPosition&&(buffer.push(opts.radixPoint),radixPosition=buffer.length-1);for(var i=1;i<=digits;i++)isFinite(buffer[radixPosition+i])||(buffer[radixPosition+i]="0")}return buffer}function findValidator(symbol,maskset){var posNdx=0;if("+"===symbol){for(posNdx in maskset.validPositions);posNdx=parseInt(posNdx)}for(var tstNdx in maskset.tests)if(tstNdx=parseInt(tstNdx),posNdx<=tstNdx)for(var ndx=0,ndxl=maskset.tests[tstNdx].length;ndx<ndxl;ndx++)if((void 0===maskset.validPositions[tstNdx]||"-"===symbol)&&maskset.tests[tstNdx][ndx].match.def===symbol)return tstNdx+(void 0!==maskset.validPositions[tstNdx]&&"-"!==symbol?1:0);return posNdx}function findValid(symbol,maskset){var ret=-1;return $.each(maskset.validPositions,function(ndx,tst){if(tst&&tst.match.def===symbol)return ret=parseInt(ndx),!1}),ret}function parseMinMaxOptions(opts){void 0===opts.parseMinMaxOptions&&(null!==opts.min&&(opts.min=opts.min.toString().replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.min=opts.min.replace(opts.radixPoint,".")),opts.min=isFinite(opts.min)?parseFloat(opts.min):NaN,isNaN(opts.min)&&(opts.min=Number.MIN_VALUE)),null!==opts.max&&(opts.max=opts.max.toString().replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.max=opts.max.replace(opts.radixPoint,".")),opts.max=isFinite(opts.max)?parseFloat(opts.max):NaN,isNaN(opts.max)&&(opts.max=Number.MAX_VALUE)),opts.parseMinMaxOptions="done")}function genMask(opts){opts.repeat=0,opts.groupSeparator===opts.radixPoint&&opts.digits&&"0"!==opts.digits&&("."===opts.radixPoint?opts.groupSeparator=",":","===opts.radixPoint?opts.groupSeparator=".":opts.groupSeparator="")," "===opts.groupSeparator&&(opts.skipOptionalPartCharacter=void 0),1<opts.placeholder.length&&(opts.placeholder=opts.placeholder.charAt(0)),"radixFocus"===opts.positionCaretOnClick&&""===opts.placeholder&&(opts.positionCaretOnClick="lvp");var decimalDef="0",radixPointDef=opts.radixPoint;!0===opts.numericInput&&void 0===opts.__financeInput?(decimalDef="1",opts.positionCaretOnClick="radixFocus"===opts.positionCaretOnClick?"lvp":opts.positionCaretOnClick,opts.digitsOptional=!1,isNaN(opts.digits)&&(opts.digits=2),opts._radixDance=!1,radixPointDef=","===opts.radixPoint?"?":"!",""!==opts.radixPoint&&void 0===opts.definitions[radixPointDef]&&(opts.definitions[radixPointDef]={},opts.definitions[radixPointDef].validator="["+opts.radixPoint+"]",opts.definitions[radixPointDef].placeholder=opts.radixPoint,opts.definitions[radixPointDef].static=!0,opts.definitions[radixPointDef].generated=!0)):(opts.__financeInput=!1,opts.numericInput=!0);var mask="[+]",altMask;if(mask+=autoEscape(opts.prefix,opts),""!==opts.groupSeparator?(void 0===opts.definitions[opts.groupSeparator]&&(opts.definitions[opts.groupSeparator]={},opts.definitions[opts.groupSeparator].validator="["+opts.groupSeparator+"]",opts.definitions[opts.groupSeparator].placeholder=opts.groupSeparator,opts.definitions[opts.groupSeparator].static=!0,opts.definitions[opts.groupSeparator].generated=!0),mask+=opts._mask(opts)):mask+="9{+}",void 0!==opts.digits&&0!==opts.digits){var dq=opts.digits.toString().split(",");isFinite(dq[0])&&dq[1]&&isFinite(dq[1])?mask+=radixPointDef+decimalDef+"{"+opts.digits+"}":(isNaN(opts.digits)||0<parseInt(opts.digits))&&(opts.digitsOptional?(altMask=mask+radixPointDef+decimalDef+"{0,"+opts.digits+"}",opts.keepStatic=!0):mask+=radixPointDef+decimalDef+"{"+opts.digits+"}")}return mask+=autoEscape(opts.suffix,opts),mask+="[-]",altMask&&(mask=[altMask+autoEscape(opts.suffix,opts)+"[-]",mask]),opts.greedy=!1,parseMinMaxOptions(opts),mask}function hanndleRadixDance(pos,c,radixPos,maskset,opts){return opts._radixDance&&opts.numericInput&&c!==opts.negationSymbol.back&&pos<=radixPos&&(0<radixPos||c==opts.radixPoint)&&(void 0===maskset.validPositions[pos-1]||maskset.validPositions[pos-1].input!==opts.negationSymbol.back)&&(pos-=1),pos}function decimalValidator(chrs,maskset,pos,strict,opts){var radixPos=maskset.buffer?maskset.buffer.indexOf(opts.radixPoint):-1,result=-1!==radixPos&&new RegExp("[0-9\uff11-\uff19]").test(chrs);return opts._radixDance&&result&&null==maskset.validPositions[radixPos]?{insert:{pos:radixPos===pos?radixPos+1:radixPos,c:opts.radixPoint},pos:pos}:result}function checkForLeadingZeroes(buffer,opts){var numberMatches=new RegExp("(^"+(""!==opts.negationSymbol.front?escapeRegex(opts.negationSymbol.front)+"?":"")+escapeRegex(opts.prefix)+")(.*)("+escapeRegex(opts.suffix)+(""!=opts.negationSymbol.back?escapeRegex(opts.negationSymbol.back)+"?":"")+"$)").exec(buffer.slice().reverse().join("")),number=numberMatches?numberMatches[2]:"",leadingzeroes=!1;return number&&(number=number.split(opts.radixPoint.charAt(0))[0],leadingzeroes=new RegExp("^[0"+opts.groupSeparator+"]*").exec(number)),!(!leadingzeroes||!(1<leadingzeroes[0].length||0<leadingzeroes[0].length&&leadingzeroes[0].length<number.length))&&leadingzeroes}Inputmask.extendAliases({numeric:{mask:genMask,_mask:function _mask(opts){return"("+opts.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"numeric",shortcuts:{k:"000",m:"000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",definitions:{0:{validator:decimalValidator},1:{validator:decimalValidator,definitionSymbol:"9"},"+":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&("-"===chrs||chrs===opts.negationSymbol.front)}},"-":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&chrs===opts.negationSymbol.back}}},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(!1!==opts.__financeInput&&c===opts.radixPoint)return!1;var pattern;if(pattern=opts.shortcuts&&opts.shortcuts[c]){if(1<pattern.length)for(var inserts=[],i=0;i<pattern.length;i++)inserts.push({pos:pos+i,c:pattern[i],strict:!1});return{insert:inserts}}var radixPos=$.inArray(opts.radixPoint,buffer),initPos=pos;if(pos=hanndleRadixDance(pos,c,radixPos,maskset,opts),"-"===c||c===opts.negationSymbol.front){if(!0!==opts.allowMinus)return!1;var isNegative=!1,front=findValid("+",maskset),back=findValid("-",maskset);return-1!==front&&(isNegative=[front,back]),!1!==isNegative?{remove:isNegative,caret:initPos}:{insert:[{pos:findValidator("+",maskset),c:opts.negationSymbol.front,fromIsValid:!0},{pos:findValidator("-",maskset),c:opts.negationSymbol.back,fromIsValid:void 0}],caret:initPos+opts.negationSymbol.back.length}}if(strict)return!0;if(-1!==radixPos&&!0===opts._radixDance&&!1===isSelection&&c===opts.radixPoint&&void 0!==opts.digits&&(isNaN(opts.digits)||0<parseInt(opts.digits))&&radixPos!==pos)return{caret:opts._radixDance&&pos===radixPos-1?radixPos+1:radixPos};if(!1===opts.__financeInput)if(isSelection){if(opts.digitsOptional)return{rewritePosition:caretPos.end};if(!opts.digitsOptional){if(caretPos.begin>radixPos&&caretPos.end<=radixPos)return c===opts.radixPoint?{insert:{pos:radixPos+1,c:"0",fromIsValid:!0},rewritePosition:radixPos}:{rewritePosition:radixPos+1};if(caretPos.begin<radixPos)return{rewritePosition:caretPos.begin-1}}}else if(!opts.showMaskOnHover&&!opts.showMaskOnFocus&&!opts.digitsOptional&&0<opts.digits&&""===this.inputmask.__valueGet.call(this))return{rewritePosition:radixPos};return{rewritePosition:pos}},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){if(!1===currentResult)return currentResult;if(strict)return!0;if(null!==opts.min||null!==opts.max){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min&&(unmasked.toString().length>opts.min.toString().length||unmasked<0))return!1;if(null!==opts.max&&unmasked>opts.max)return!!opts.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:alignDigits(opts.max.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}return currentResult},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){if(""===unmaskedValue&&!0===opts.nullable)return unmaskedValue;var processValue=maskedValue.replace(opts.prefix,"");return processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),""!==opts.placeholder.charAt(0)&&(processValue=processValue.replace(new RegExp(opts.placeholder.charAt(0),"g"),"0")),opts.unmaskAsNumber?(""!==opts.radixPoint&&-1!==processValue.indexOf(opts.radixPoint)&&(processValue=processValue.replace(escapeRegex.call(this,opts.radixPoint),".")),processValue=processValue.replace(new RegExp("^"+escapeRegex(opts.negationSymbol.front)),"-"),processValue=processValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back)+"$"),""),Number(processValue)):processValue},isComplete:function isComplete(buffer,opts){var maskedValue=(opts.numericInput?buffer.slice().reverse():buffer).join("");return maskedValue=maskedValue.replace(new RegExp("^"+escapeRegex(opts.negationSymbol.front)),"-"),maskedValue=maskedValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back)+"$"),""),maskedValue=maskedValue.replace(opts.prefix,""),maskedValue=maskedValue.replace(opts.suffix,""),maskedValue=maskedValue.replace(new RegExp(escapeRegex(opts.groupSeparator)+"([0-9]{3})","g"),"$1"),","===opts.radixPoint&&(maskedValue=maskedValue.replace(escapeRegex(opts.radixPoint),".")),isFinite(maskedValue)},onBeforeMask:function onBeforeMask(initialValue,opts){var radixPoint=opts.radixPoint||",";isFinite(opts.digits)&&(opts.digits=parseInt(opts.digits)),"number"!=typeof initialValue&&"number"!==opts.inputType||""===radixPoint||(initialValue=initialValue.toString().replace(".",radixPoint));var valueParts=initialValue.split(radixPoint),integerPart=valueParts[0].replace(/[^\-0-9]/g,""),decimalPart=1<valueParts.length?valueParts[1].replace(/[^0-9]/g,""):"",forceDigits=1<valueParts.length;initialValue=integerPart+(""!==decimalPart?radixPoint+decimalPart:decimalPart);var digits=0;if(""!==radixPoint&&(digits=opts.digitsOptional?opts.digits<decimalPart.length?opts.digits:decimalPart.length:opts.digits,""!==decimalPart||!opts.digitsOptional)){var digitsFactor=Math.pow(10,digits||1);initialValue=initialValue.replace(escapeRegex(radixPoint),"."),isNaN(parseFloat(initialValue))||(initialValue=(opts.roundingFN(parseFloat(initialValue)*digitsFactor)/digitsFactor).toFixed(digits)),initialValue=initialValue.toString().replace(".",radixPoint)}if(0===opts.digits&&-1!==initialValue.indexOf(radixPoint)&&(initialValue=initialValue.substring(0,initialValue.indexOf(radixPoint))),null!==opts.min||null!==opts.max){var numberValue=initialValue.toString().replace(radixPoint,".");null!==opts.min&&numberValue<opts.min?initialValue=opts.min.toString().replace(".",radixPoint):null!==opts.max&&numberValue>opts.max&&(initialValue=opts.max.toString().replace(".",radixPoint))}return alignDigits(initialValue.toString().split(""),digits,opts,forceDigits).join("")},onBeforeWrite:function onBeforeWrite(e,buffer,caretPos,opts){function stripBuffer(buffer,stripRadix){if(!1!==opts.__financeInput||stripRadix){var position=$.inArray(opts.radixPoint,buffer);-1!==position&&buffer.splice(position,1)}if(""!==opts.groupSeparator)for(;-1!==(position=buffer.indexOf(opts.groupSeparator));)buffer.splice(position,1);return buffer}var result,leadingzeroes=checkForLeadingZeroes(buffer,opts);if(leadingzeroes)for(var caretNdx=buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join(""))-(leadingzeroes[0]==leadingzeroes.input?0:1),offset=leadingzeroes[0]==leadingzeroes.input?1:0,i=leadingzeroes[0].length-offset;0<i;i--)delete this.maskset.validPositions[caretNdx+i],delete buffer[caretNdx+i];if(e)switch(e.type){case"blur":case"checkval":if(null!==opts.min){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min)return{refreshFromBuffer:!0,buffer:alignDigits(opts.min.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}if(buffer[buffer.length-1]===opts.negationSymbol.front){var nmbrMtchs=new RegExp("(^"+(""!=opts.negationSymbol.front?escapeRegex(opts.negationSymbol.front)+"?":"")+escapeRegex(opts.prefix)+")(.*)("+escapeRegex(opts.suffix)+(""!=opts.negationSymbol.back?escapeRegex(opts.negationSymbol.back)+"?":"")+"$)").exec(stripBuffer(buffer.slice(),!0).reverse().join("")),number=nmbrMtchs?nmbrMtchs[2]:"";0==number&&(result={refreshFromBuffer:!0,buffer:[0]})}else""!==opts.radixPoint&&buffer[0]===opts.radixPoint&&(result&&result.buffer?result.buffer.shift():(buffer.shift(),result={refreshFromBuffer:!0,buffer:stripBuffer(buffer)}));if(opts.enforceDigitsOnBlur){result=result||{};var bffr=result&&result.buffer||buffer.slice().reverse();result.refreshFromBuffer=!0,result.buffer=alignDigits(bffr,opts.digits,opts,!0).reverse()}}return result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var $input=$(this),bffr;if(e.ctrlKey)switch(e.keyCode){case keyCode.UP:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(opts.step)),$input.trigger("setvalue"),!1;case keyCode.DOWN:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(opts.step)),$input.trigger("setvalue"),!1}if(!e.shiftKey&&(e.keyCode===keyCode.DELETE||e.keyCode===keyCode.BACKSPACE||e.keyCode===keyCode.BACKSPACE_SAFARI)&&caretPos.begin!==buffer.length){if(buffer[e.keyCode===keyCode.DELETE?caretPos.begin-1:caretPos.end]===opts.negationSymbol.front)return bffr=buffer.slice().reverse(),""!==opts.negationSymbol.front&&bffr.shift(),""!==opts.negationSymbol.back&&bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin]),!1;if(!0===opts._radixDance){var radixPos=$.inArray(opts.radixPoint,buffer);if(opts.digitsOptional){if(0===radixPos)return bffr=buffer.slice().reverse(),bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin>=bffr.length?bffr.length:caretPos.begin]),!1}else if(-1!==radixPos&&(caretPos.begin<radixPos||caretPos.end<radixPos||e.keyCode===keyCode.DELETE&&caretPos.begin===radixPos))return caretPos.begin!==caretPos.end||e.keyCode!==keyCode.BACKSPACE&&e.keyCode!==keyCode.BACKSPACE_SAFARI||caretPos.begin++,bffr=buffer.slice().reverse(),bffr.splice(bffr.length-caretPos.begin,caretPos.begin-caretPos.end+1),bffr=alignDigits(bffr,opts.digits,opts).join(""),$input.trigger("setvalue",[bffr,caretPos.begin>=bffr.length?radixPos+1:caretPos.begin]),!1}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function _mask(opts){return"("+opts.groupSeparator+"99){*|1}("+opts.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var _window=_interopRequireDefault(__webpack_require__(2)),_inputmask=_interopRequireDefault(__webpack_require__(1));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!_isNativeFunction(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof _cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _construct(Parent,args,Class){return _construct=isNativeReflectConstruct()?Reflect.construct:function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a),instance=new Constructor;return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var document=_window.default.document;if(document&&document.head&&document.head.attachShadow&&void 0===customElements.get("input-mask")){var InputmaskElement=function(_HTMLElement){function InputmaskElement(){var _this;_classCallCheck(this,InputmaskElement),_this=_possibleConstructorReturn(this,_getPrototypeOf(InputmaskElement).call(this));var attributeNames=_this.getAttributeNames(),shadow=_this.attachShadow({mode:"closed"}),input=document.createElement("input");for(var attr in input.type="text",shadow.appendChild(input),attributeNames)Object.prototype.hasOwnProperty.call(attributeNames,attr)&&input.setAttribute(attributeNames[attr],_this.getAttribute(attributeNames[attr]));var im=new _inputmask.default;return im.dataAttribute="",im.mask(input),input.inputmask.shadowRoot=shadow,_this}return _inherits(InputmaskElement,_HTMLElement),InputmaskElement}(_wrapNativeSuper(HTMLElement));customElements.define("input-mask",InputmaskElement)}}],installedModules={},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=6);function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var modules,installedModules});
!function(e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():window.wNumb=e()}(function(){"use strict";var o=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function w(e){return e.split("").reverse().join("")}function h(e,t){return e.substring(0,t.length)===t}function f(e,t,n){if((e[t]||e[n])&&e[t]===e[n])throw new Error(t)}function x(e){return"number"==typeof e&&isFinite(e)}function n(e,t,n,r,i,o,f,u,s,c,a,p){var d,l,h,g=p,v="",m="";return o&&(p=o(p)),!!x(p)&&(!1!==e&&0===parseFloat(p.toFixed(e))&&(p=0),p<0&&(d=!0,p=Math.abs(p)),!1!==e&&(p=function(e,t){return e=e.toString().split("e"),(+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]+t:t)))).toString().split("e"))[0]+"e"+(e[1]?e[1]-t:-t))).toFixed(t)}(p,e)),-1!==(p=p.toString()).indexOf(".")?(h=(l=p.split("."))[0],n&&(v=n+l[1])):h=p,t&&(h=w((h=w(h).match(/.{1,3}/g)).join(w(t)))),d&&u&&(m+=u),r&&(m+=r),d&&s&&(m+=s),m+=h,m+=v,i&&(m+=i),c&&(m=c(m,g)),m)}function r(e,t,n,r,i,o,f,u,s,c,a,p){var d,l="";return a&&(p=a(p)),!(!p||"string"!=typeof p)&&(u&&h(p,u)&&(p=p.replace(u,""),d=!0),r&&h(p,r)&&(p=p.replace(r,"")),s&&h(p,s)&&(p=p.replace(s,""),d=!0),i&&function(e,t){return e.slice(-1*t.length)===t}(p,i)&&(p=p.slice(0,-1*i.length)),t&&(p=p.split(t).join("")),n&&(p=p.replace(n,".")),d&&(l+="-"),""!==(l=(l+=p).replace(/[^0-9\.\-.]/g,""))&&(l=Number(l),f&&(l=f(l)),!!x(l)&&l))}function i(e,t,n){var r,i=[];for(r=0;r<o.length;r+=1)i.push(e[o[r]]);return i.push(n),t.apply("",i)}return function e(t){if(!(this instanceof e))return new e(t);"object"==typeof t&&(t=function(e){var t,n,r,i={};for(void 0===e.suffix&&(e.suffix=e.postfix),t=0;t<o.length;t+=1)if(void 0===(r=e[n=o[t]]))"negative"!==n||i.negativeBefore?"mark"===n&&"."!==i.thousand?i[n]=".":i[n]=!1:i[n]="-";else if("decimals"===n){if(!(0<=r&&r<8))throw new Error(n);i[n]=r}else if("encoder"===n||"decoder"===n||"edit"===n||"undo"===n){if("function"!=typeof r)throw new Error(n);i[n]=r}else{if("string"!=typeof r)throw new Error(n);i[n]=r}return f(i,"mark","thousand"),f(i,"prefix","negative"),f(i,"prefix","negativeBefore"),i}(t),this.to=function(e){return i(t,n,e)},this.from=function(e){return i(t,r,e)})}});
/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if("#"===t){if(!A.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));
/**
 * Swiper 7.0.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 4, 2021
 */

 !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s={},a={}){Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this)}}function l(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(...e){const t=l(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this},removeClass:function(...e){const t=l(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this},hasClass:function(...e){const t=l(e.map((e=>e.split(" "))));return o(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(...e){const t=l(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(...e){let[t,s,a,i]=e;function r(e){const t=e.target;if(!t)return;const i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),d(t).is(s))a.apply(t,i);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(s)&&a.apply(e[t],i)}}function n(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),a.apply(this,t)}"function"==typeof e[1]&&([t,a,i]=e,s=void 0),i||(i=!1);const l=t.split(" ");let o;for(let e=0;e<this.length;e+=1){const t=this[e];if(s)for(o=0;o<l.length;o+=1){const e=l[o];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:a,proxyListener:r}),t.addEventListener(e,r,i)}else for(o=0;o<l.length;o+=1){const e=l[o];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:a,proxyListener:n}),t.addEventListener(e,n,i)}}return this},off:function(...e){let[t,s,a,i]=e;"function"==typeof e[1]&&([t,a,i]=e,s=void 0),i||(i=!1);const r=t.split(" ");for(let e=0;e<r.length;e+=1){const t=r[e];for(let e=0;e<this.length;e+=1){const r=this[e];let n;if(!s&&r.dom7Listeners?n=r.dom7Listeners[t]:s&&r.dom7LiveListeners&&(n=r.dom7LiveListeners[t]),n&&n.length)for(let e=n.length-1;e>=0;e-=1){const s=n[e];a&&s.listener===a||a&&s.listener&&s.listener.dom7proxy&&s.listener.dom7proxy===a?(r.removeEventListener(t,s.proxyListener,i),n.splice(e,1)):a||(r.removeEventListener(t,s.proxyListener,i),n.splice(e,1))}}}return this},trigger:function(...e){const t=r(),s=e[0].split(" "),a=e[1];for(let i=0;i<s.length;i+=1){const r=s[i];for(let s=0;s<this.length;s+=1){const i=this[s];if(t.CustomEvent){const s=new t.CustomEvent(r,{detail:a,bubbles:!0,cancelable:!0});i.dom7EventData=e.filter(((e,t)=>t>0)),i.dispatchEvent(s),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(...e){let t;const s=a();for(let a=0;a<e.length;a+=1){t=e[a];for(let e=0;e<this.length;e+=1)if("string"==typeof t){const a=s.createElement("div");for(a.innerHTML=t;a.firstChild;)this[e].appendChild(a.firstChild)}else if(t instanceof n)for(let s=0;s<t.length;s+=1)this[e].appendChild(t[s]);else this[e].appendChild(t)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t=0){return setTimeout(e,t)}function u(){return Date.now()}function h(e,t="x"){const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(...e){const t=Object(e[0]),s=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const r=e[i];if(null!=r&&(a=r,!("undefined"!=typeof window&&void 0!==window.HTMLElement?a instanceof HTMLElement:a&&(1===a.nodeType||11===a.nodeType)))){const e=Object.keys(Object(r)).filter((e=>s.indexOf(e)<0));for(let s=0,a=e.length;s<a;s+=1){const a=e[s],i=Object.getOwnPropertyDescriptor(r,a);void 0!==i&&i.enumerable&&(m(t[a])&&m(r[a])?r[a].__swiper__?t[a]=r[a]:f(t[a],r[a]):!m(t[a])&&m(r[a])?(t[a]={},r[a].__swiper__?t[a]=r[a]:f(t[a],r[a])):t[a]=r[a])}}}var a;return t}function g(e,t,s){e.style.setProperty(t,s)}function v({swiper:e,targetPosition:t,side:s}){const a=r(),i=-e.translate;let n,l=null;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const d=t>i?"next":"prev",c=(e,t)=>"next"===d&&e>=t||"prev"===d&&e<=t,p=()=>{n=(new Date).getTime(),null===l&&(l=n);const r=Math.max(Math.min((n-l)/o,1),0),d=.5-Math.cos(r*Math.PI)/2;let u=i+d*(t-i);if(c(u,t)&&(u=t),e.wrapperEl.scrollTo({[s]:u}),c(u,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:u})})),void a.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=a.requestAnimationFrame(p)};p()}let w,b,x;function y(){return w||(w=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),w}function E(e={}){return b||(b=function({userAgent:e}={}){const t=y(),s=r(),a=s.navigator.platform,i=e||s.navigator.userAgent,n={ios:!1,android:!1},l=s.screen.width,o=s.screen.height,d=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad).*OS\s([\d_]+)/);const p=i.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===a;let m="MacIntel"===a;return!c&&m&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${l}x${o}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),m=!1),d&&!h&&(n.os="android",n.android=!0),(c||u||p)&&(n.os="ios",n.ios=!0),n}(e)),b}function T(){return x||(x=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),x}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var C={on(e,t,s){const a=this;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if("function"!=typeof t)return a;function i(...s){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(a,s)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(...e){const t=this;if(!t.eventsListeners)return t;let s,a,i;"string"==typeof e[0]||Array.isArray(e[0])?(s=e[0],a=e.slice(1,e.length),i=t):(s=e[0].events,a=e[0].data,i=e[0].context||t),a.unshift(i);return(Array.isArray(s)?s:s.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(i,[e,...a])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(i,a)}))})),t}};function $({swiper:e,runCallbacks:t,direction:s,step:a}){const{activeIndex:i,previousIndex:r}=e;let n=s;if(n||(n=i>r?"next":i<r?"prev":"reset"),e.emit(`transition${a}`),t&&i!==r){if("reset"===n)return void e.emit(`slideResetTransition${a}`);e.emit(`slideChangeTransition${a}`),"next"===n?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`)}}function S(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;!!l.noSwipingClass&&""!==l.noSwipingClass&&p.target&&p.target.shadowRoot&&e.path&&e.path[0]&&(h=d(e.path[0]));const m=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(f?function(e,t=this){return function t(s){return s&&s!==a()&&s!==r()?(s.assignedSlot&&(s=s.assignedSlot),s.closest(e)||t(s.getRootNode().host)):null}(t)}(m,p.target):h.closest(m)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const g=o.currentX,v=o.currentY,w=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,b=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(w&&(g<=b||g>=i.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=v,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.emit("touchStart",p)}function M(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return s.allowClick=!1,void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function P(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(o),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)),s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}const g=(h-n[m])/f,v=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(g>=a.longSwipesRatio?t.slideTo(m+v):t.slideTo(m)),"prev"===t.swipeDirection&&(g>1-a.longSwipesRatio?t.slideTo(m+v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+v):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(m+v),"prev"===t.swipeDirection&&t.slideTo(m))}}function k(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function z(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function O(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let I=!1;function L(){}const A=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",k,!0):e[u]("observerUpdate",k,!0)};const D=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var G={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function N(e,t){return function(s={}){const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),f(t,s)):f(t,s)):f(t,s)}}const B={eventsEmitter:C,update:{updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let v=a.slidesOffsetAfter;"function"==typeof v&&(v=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,T=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(g(e.wrapperEl,"--swiper-centered-offset-before",""),g(e.wrapperEl,"--swiper-centered-offset-after",""));const C=a.grid&&a.grid.rows>1&&e.grid;let $;C&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(C&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),T%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+v,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),C&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+v:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){g(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),g(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset()},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)t.visibleSlides.each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}r&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,s=t.params,{slides:a,rtlTranslate:i}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let r=-e;i&&(r=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const n=a[e];let l=n.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(l-=a[0].swiperSlideOffset);const o=(r+(s.centeredSlides?t.minTranslate():0)-l)/(n.swiperSlideSize+s.spaceBetween),d=-(r-l),c=d+t.slidesSizesGrid[e];(d>=0&&d<t.size-1||c>1&&c<=t.size||d<=0&&c>=t.size)&&(t.visibleSlides.push(n),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),n.progress=i?-o:o}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e.target).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,s=!0,a=!0,i){const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return v({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),$({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),$({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e=0,t=this.params.speed,s=!0,a,i){if("number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1),(p||l.initialSlide||0)===(c||0)&&s&&r.emit("beforeSlideChangeStart");const w=-o[g];if(r.updateProgress(w),l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*w),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&w<r.translate&&w<r.minTranslate())return!1;if(!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(b=n>p?"next":n<p?"prev":"reset",u&&-w===r.translate||!u&&w===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(w),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?w:-w;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return v({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),r.transitionEnd(s,b)):(r.setTransition(t),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e=0,t=this.params.speed,s=!0,a){const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e=this.params.speed,t=!0,s){const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e=this.params.speed,t=!0,s){const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;return void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),a.slideTo(m,e,t,s)},slideReset:function(e=this.params.speed,t=!0,s){return this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e=this.params.speed,t=!0,s,a=.5){const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}},loop:{loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e;i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let r=i.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-r.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);i.append(e)}r=i.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=r.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>r.length&&(e.loopedSlides=r.length);const n=[],l=[];r.each(((t,s)=>{const a=d(t);s<e.loopedSlides&&l.push(t),s<r.length&&s>=r.length-e.loopedSlides&&n.push(t),a.attr("data-swiper-slide-index",s)}));for(let e=0;e<l.length;e+=1)i.append(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=n.length-1;e>=0;e-=1)i.prepend(d(n[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"-webkit-grabbing":"-webkit-grab",s.style.cursor=e?"-moz-grabbin":"-moz-grab",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:{attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=S.bind(e),e.onTouchMove=M.bind(e),e.onTouchEnd=P.bind(e),s.cssMode&&(e.onScroll=O.bind(e)),e.onClick=z.bind(e),i.touch&&!I&&(t.addEventListener("touchstart",L),I=!0),A(e,"on")},detachEvents:function(){A(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=D(e,i),c=D(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses());const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),f(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t="window",s){if(!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},X={};class H{constructor(...e){let t,s;if(1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?s=e[0]:[t,s]=e,s||(s={}),s=f({},s),t&&!s.el&&(s.el=t),s.el&&d(s.el).length>1){const e=[];return d(s.el).each((t=>{const a=f({},s,{el:t});e.push(new H(a))})),e}const a=this;a.__swiper__=!0,a.support=y(),a.device=E({userAgent:s.userAgent}),a.browser=T(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],s.modules&&Array.isArray(s.modules)&&a.modules.push(...s.modules);const i={};a.modules.forEach((e=>{e({swiper:a,extendParams:N(s,i),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}));const r=f({},G,i);return a.params=f({},r,X,s),a.originalParams=f({},a.params),a.passedParams=f({},s),a.params&&a.params.on&&Object.keys(a.params.on).forEach((e=>{a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),a.$=d,Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===a.params.direction,isVertical:()=>"vertical"===a.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return a.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},a.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},a.support.touch||!a.params.simulateTouch?a.touchEventsTouch:a.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){f(X,e)}static get extendedDefaults(){return X}static get defaults(){return G}static installModule(e){H.prototype.__modules__||(H.prototype.__modules__=[]);const t=H.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>H.installModule(e))),H):(H.installModule(e),H)}}function Y(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function W(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function R(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function j(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function _(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function V(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function q(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function F(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l}=e;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)}))}function U(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function K({swiper:e,duration:t,transformEl:s,allSlides:a}){const{slides:i,activeIndex:r,$wrapperEl:n}=e;if(e.params.virtualTranslate&&0!==t){let t,l=!1;t=a?s?i.find(s):i:s?i.eq(r).find(s):i.eq(r),t.transitionEnd((()=>{if(l)return;if(!e||e.destroyed)return;l=!0,e.animating=!1;const t=["webkitTransitionEnd","transitionend"];for(let e=0;e<t.length;e+=1)n.trigger(t[e])}))}}function Z(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(B).forEach((e=>{Object.keys(B[e]).forEach((t=>{H.prototype[t]=B[e][t]}))})),H.use([function({swiper:e,on:t,emit:s}){const a=r();let i=null;const n=()=>{e&&!e.destroyed&&e.initialized&&(s("beforeResize"),s("resize"))},l=()=>{e&&!e.destroyed&&e.initialized&&s("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==a.ResizeObserver?e&&!e.destroyed&&e.initialized&&(i=new ResizeObserver((t=>{const{width:s,height:a}=e;let i=s,r=a;t.forEach((({contentBoxSize:t,contentRect:s,target:a})=>{a&&a!==e.el||(i=s?s.width:(t[0]||t).inlineSize,r=s?s.height:(t[0]||t).blockSize)})),i===s&&r===a||n()})),i.observe(e.el)):(a.addEventListener("resize",n),a.addEventListener("orientationchange",l))})),t("destroy",(()=>{i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null),a.removeEventListener("resize",n),a.removeEventListener("orientationchange",l)}))},function({swiper:e,extendParams:t,on:s,emit:a}){const i=[],n=r(),l=(e,t={})=>{const s=new(n.MutationObserver||n.WebkitMutationObserver)((e=>{if(1===e.length)return void a("observerUpdate",e[0]);const t=function(){a("observerUpdate",e[0])};n.requestAnimationFrame?n.requestAnimationFrame(t):n.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.push(s)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=e.$el.parents();for(let e=0;e<t.length;e+=1)l(t[e])}l(e.$el[0],{childList:e.params.observeSlideChildren}),l(e.$wrapperEl[0],{attributes:!1})}})),s("destroy",(()=>{i.forEach((e=>{e.disconnect()})),i.splice(0,i.length)}))}]);const J=[function({swiper:e,extendParams:t,on:s}){let a;function i(t,s){const a=e.params.virtual;if(a.cache&&e.virtual.cache[s])return e.virtual.cache[s];const i=a.renderSlide?d(a.renderSlide.call(e,t,s)):d(`<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",s),a.cache&&(e.virtual.cache[s]=i),i}function r(t){const{slidesPerView:s,slidesPerGroup:a,centeredSlides:r}=e.params,{addSlidesBefore:n,addSlidesAfter:l}=e.params.virtual,{from:o,to:d,slides:c,slidesGrid:p,offset:u}=e.virtual;e.params.cssMode||e.updateActiveIndex();const h=e.activeIndex||0;let m,f,g;m=e.rtlTranslate?"right":e.isHorizontal()?"left":"top",r?(f=Math.floor(s/2)+a+l,g=Math.floor(s/2)+a+n):(f=s+(a-1)+l,g=a+n);const v=Math.max((h||0)-g,0),w=Math.min((h||0)+f,c.length-1),b=(e.slidesGrid[v]||0)-(e.slidesGrid[0]||0);function x(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load()}if(Object.assign(e.virtual,{from:v,to:w,offset:b,slidesGrid:e.slidesGrid}),o===v&&d===w&&!t)return e.slidesGrid!==p&&b!==u&&e.slides.css(m,`${b}px`),void e.updateProgress();if(e.params.virtual.renderExternal)return e.params.virtual.renderExternal.call(e,{offset:b,from:v,to:w,slides:function(){const e=[];for(let t=v;t<=w;t+=1)e.push(c[t]);return e}()}),void(e.params.virtual.renderExternalUpdate&&x());const y=[],E=[];if(t)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let t=o;t<=d;t+=1)(t<v||t>w)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();for(let e=0;e<c.length;e+=1)e>=v&&e<=w&&(void 0===d||t?E.push(e):(e>d&&E.push(e),e<o&&y.push(e)));E.forEach((t=>{e.$wrapperEl.append(i(c[t],t))})),y.sort(((e,t)=>t-e)).forEach((t=>{e.$wrapperEl.prepend(i(c[t],t))})),e.$wrapperEl.children(".swiper-slide").css(m,`${b}px`),x()}t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},s("beforeInit",(()=>{e.params.virtual.enabled&&(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||r())})),s("setTranslate",(()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(a),a=setTimeout((()=>{r()}),100)):r())})),s("init update resize",(()=>{e.params.virtual.enabled&&e.params.cssMode&&g(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)})),Object.assign(e.virtual,{appendSlide:function(t){if("object"==typeof t&&"length"in t)for(let s=0;s<t.length;s+=1)t[s]&&e.virtual.slides.push(t[s]);else e.virtual.slides.push(t);r(!0)},prependSlide:function(t){const s=e.activeIndex;let a=s+1,i=1;if(Array.isArray(t)){for(let s=0;s<t.length;s+=1)t[s]&&e.virtual.slides.unshift(t[s]);a=s+t.length,i=t.length}else e.virtual.slides.unshift(t);if(e.params.virtual.cache){const t=e.virtual.cache,s={};Object.keys(t).forEach((e=>{const a=t[e],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),s[parseInt(e,10)+i]=a})),e.virtual.cache=s}r(!0),e.slideTo(a,0)},removeSlide:function(t){if(null==t)return;let s=e.activeIndex;if(Array.isArray(t))for(let a=t.length-1;a>=0;a-=1)e.virtual.slides.splice(t[a],1),e.params.virtual.cache&&delete e.virtual.cache[t[a]],t[a]<s&&(s-=1),s=Math.max(s,0);else e.virtual.slides.splice(t,1),e.params.virtual.cache&&delete e.virtual.cache[t],t<s&&(s-=1),s=Math.max(s,0);r(!0),e.slideTo(s,0)},removeAllSlides:function(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),r(!0),e.slideTo(0,0)},update:r})},function({swiper:e,extendParams:t,on:s,emit:i}){const n=a(),l=r();function o(t){if(!e.enabled)return;const{rtlTranslate:s}=e;let a=t;a.originalEvent&&(a=a.originalEvent);const r=a.keyCode||a.charCode,o=e.params.keyboard.pageUpDown,d=o&&33===r,c=o&&34===r,p=37===r,u=39===r,h=38===r,m=40===r;if(!e.allowSlideNext&&(e.isHorizontal()&&u||e.isVertical()&&m||c))return!1;if(!e.allowSlidePrev&&(e.isHorizontal()&&p||e.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||n.activeElement&&n.activeElement.nodeName&&("input"===n.activeElement.nodeName.toLowerCase()||"textarea"===n.activeElement.nodeName.toLowerCase()))){if(e.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let t=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&0===e.$el.parents(`.${e.params.slideActiveClass}`).length)return;const a=e.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=l.innerWidth,o=l.innerHeight,d=e.$el.offset();s&&(d.left-=e.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let e=0;e<c.length;e+=1){const s=c[e];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=o){if(0===s[0]&&0===s[1])continue;t=!0}}if(!t)return}e.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&e.slideNext(),((d||p)&&!s||(c||u)&&s)&&e.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&e.slideNext(),(d||h)&&e.slidePrev()),i("keyPress",r)}}function c(){e.keyboard.enabled||(d(n).on("keydown",o),e.keyboard.enabled=!0)}function p(){e.keyboard.enabled&&(d(n).off("keydown",o),e.keyboard.enabled=!1)}e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),s("init",(()=>{e.params.keyboard.enabled&&c()})),s("destroy",(()=>{e.keyboard.enabled&&p()})),Object.assign(e.keyboard,{enable:c,disable:p})},function({swiper:e,extendParams:t,on:s,emit:a}){const i=r();let n;t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let l,o=u();const c=[];function h(){e.enabled&&(e.mouseEntered=!0)}function m(){e.enabled&&(e.mouseEntered=!1)}function f(t){return!(e.params.mousewheel.thresholdDelta&&t.delta<e.params.mousewheel.thresholdDelta)&&(!(e.params.mousewheel.thresholdTime&&u()-o<e.params.mousewheel.thresholdTime)&&(t.delta>=6&&u()-o<60||(t.direction<0?e.isEnd&&!e.params.loop||e.animating||(e.slideNext(),a("scroll",t.raw)):e.isBeginning&&!e.params.loop||e.animating||(e.slidePrev(),a("scroll",t.raw)),o=(new i.Date).getTime(),!1)))}function g(t){let s=t,i=!0;if(!e.enabled)return;const r=e.params.mousewheel;e.params.cssMode&&s.preventDefault();let o=e.$el;if("container"!==e.params.mousewheel.eventsTarget&&(o=d(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!o[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let h=0;const m=e.rtlTranslate?-1:1,g=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(e.isHorizontal()){if(!(Math.abs(g.pixelX)>Math.abs(g.pixelY)))return!0;h=-g.pixelX*m}else{if(!(Math.abs(g.pixelY)>Math.abs(g.pixelX)))return!0;h=-g.pixelY}else h=Math.abs(g.pixelX)>Math.abs(g.pixelY)?-g.pixelX*m:-g.pixelY;if(0===h)return!0;r.invert&&(h=-h);let v=e.getTranslate()+h*r.sensitivity;if(v>=e.minTranslate()&&(v=e.minTranslate()),v<=e.maxTranslate()&&(v=e.maxTranslate()),i=!!e.params.loop||!(v===e.minTranslate()||v===e.maxTranslate()),i&&e.params.nested&&s.stopPropagation(),e.params.freeMode&&e.params.freeMode.enabled){const t={time:u(),delta:Math.abs(h),direction:Math.sign(h)},i=l&&t.time<l.time+500&&t.delta<=l.delta&&t.direction===l.direction;if(!i){l=void 0,e.params.loop&&e.loopFix();let o=e.getTranslate()+h*r.sensitivity;const d=e.isBeginning,u=e.isEnd;if(o>=e.minTranslate()&&(o=e.minTranslate()),o<=e.maxTranslate()&&(o=e.maxTranslate()),e.setTransition(0),e.setTranslate(o),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!d&&e.isBeginning||!u&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(n),n=void 0,c.length>=15&&c.shift();const s=c.length?c[c.length-1]:void 0,a=c[0];if(c.push(t),s&&(t.delta>s.delta||t.direction!==s.direction))c.splice(0);else if(c.length>=15&&t.time-a.time<500&&a.delta-t.delta>=1&&t.delta<=6){const s=h>0?.8:.2;l=t,c.splice(0),n=p((()=>{e.slideToClosest(e.params.speed,!0,void 0,s)}),0)}n||(n=p((()=>{l=t,c.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)}),500))}if(i||a("scroll",s),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),o===e.minTranslate()||o===e.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(h),direction:Math.sign(h),raw:t};c.length>=2&&c.shift();const a=c.length?c[c.length-1]:void 0;if(c.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&f(s):f(s),function(t){const s=e.params.mousewheel;if(t.direction<0){if(e.isEnd&&!e.params.loop&&s.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function v(t){let s=e.$el;"container"!==e.params.mousewheel.eventsTarget&&(s=d(e.params.mousewheel.eventsTarget)),s[t]("mouseenter",h),s[t]("mouseleave",m),s[t]("wheel",g)}function w(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",g),!0):!e.mousewheel.enabled&&(v("on"),e.mousewheel.enabled=!0,!0)}function b(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,g),!0):!!e.mousewheel.enabled&&(v("off"),e.mousewheel.enabled=!1,!0)}s("init",(()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&b(),e.params.mousewheel.enabled&&w()})),s("destroy",(()=>{e.params.cssMode&&w(),e.mousewheel.enabled&&b()})),Object.assign(e.mousewheel,{enable:w,disable:b})},function({swiper:e,extendParams:t,on:s,emit:a}){function i(t){let s;return t&&(s=d(t),e.params.uniqueNavElements&&"string"==typeof t&&s.length>1&&1===e.$el.find(t).length&&(s=e.$el.find(t))),s}function r(t,s){const a=e.params.navigation;t&&t.length>0&&(t[s?"addClass":"removeClass"](a.disabledClass),t[0]&&"BUTTON"===t[0].tagName&&(t[0].disabled=s),e.params.watchOverflow&&e.enabled&&t[e.isLocked?"addClass":"removeClass"](a.lockClass))}function n(){if(e.params.loop)return;const{$nextEl:t,$prevEl:s}=e.navigation;r(s,e.isBeginning),r(t,e.isEnd)}function l(t){t.preventDefault(),e.isBeginning&&!e.params.loop||e.slidePrev()}function o(t){t.preventDefault(),e.isEnd&&!e.params.loop||e.slideNext()}function c(){const t=e.params.navigation;if(e.params.navigation=Y(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;const s=i(t.nextEl),a=i(t.prevEl);s&&s.length>0&&s.on("click",o),a&&a.length>0&&a.on("click",l),Object.assign(e.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),e.enabled||(s&&s.addClass(t.lockClass),a&&a.addClass(t.lockClass))}function p(){const{$nextEl:t,$prevEl:s}=e.navigation;t&&t.length&&(t.off("click",o),t.removeClass(e.params.navigation.disabledClass)),s&&s.length&&(s.off("click",l),s.removeClass(e.params.navigation.disabledClass))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},s("init",(()=>{c(),n()})),s("toEdge fromEdge lock unlock",(()=>{n()})),s("destroy",(()=>{p()})),s("enable disable",(()=>{const{$nextEl:t,$prevEl:s}=e.navigation;t&&t[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),s&&s[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)})),s("click",((t,s)=>{const{$nextEl:i,$prevEl:r}=e.navigation,n=s.target;if(e.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===n||e.pagination.el.contains(n)))return;let t;i?t=i.hasClass(e.params.navigation.hiddenClass):r&&(t=r.hasClass(e.params.navigation.hiddenClass)),a(!0===t?"navigationShow":"navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),r&&r.toggleClass(e.params.navigation.hiddenClass)}})),Object.assign(e.navigation,{update:n,init:c,destroy:p})},function({swiper:e,extendParams:t,on:s,emit:a}){const i="swiper-pagination";let r;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`}}),e.pagination={el:null,$el:null,bullets:[]};let n=0;function l(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||0===e.pagination.$el.length}function o(t,s){const{bulletActiveClass:a}=e.params.pagination;t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function c(){const t=e.rtl,s=e.params.pagination;if(l())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,c=e.pagination.$el;let p;const u=e.params.loop?Math.ceil((i-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(p=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),p>i-1-2*e.loopedSlides&&(p-=i-2*e.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==e.params.paginationType&&(p=u+p)):p=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const a=e.pagination.bullets;let i,l,u;if(s.dynamicBullets&&(r=a.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),c.css(e.isHorizontal()?"width":"height",r*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==e.previousIndex&&(n+=p-e.previousIndex,n>s.dynamicMainBullets-1?n=s.dynamicMainBullets-1:n<0&&(n=0)),i=p-n,l=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(l+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),c.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=l&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&o(t,"prev"),a===l&&o(t,"next"))}));else{const t=a.eq(p),r=t.index();if(t.addClass(s.bulletActiveClass),s.dynamicBullets){const t=a.eq(i),n=a.eq(l);for(let e=i;e<=l;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(e.params.loop)if(r>=a.length-s.dynamicMainBullets){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else o(t,"prev"),o(n,"next");else o(t,"prev"),o(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),n=(r*i-r)/2-u*r,l=t?"right":"left";a.css(e.isHorizontal()?l:"top",`${n}px`)}}if("fraction"===s.type&&(c.find(W(s.currentClass)).text(s.formatFractionCurrent(p+1)),c.find(W(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let t;t=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,r=1;"horizontal"===t?i=a:r=a,c.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(c.html(s.renderCustom(e,p+1,u)),a("paginationRender",c[0])):a("paginationUpdate",c[0]),e.params.watchOverflow&&e.enabled&&c[e.isLocked?"addClass":"removeClass"](s.lockClass)}function p(){const t=e.params.pagination;if(l())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el;let r="";if("bullets"===t.type){let a=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&a>s&&(a=s);for(let s=0;s<a;s+=1)t.renderBullet?r+=t.renderBullet.call(e,s,t.bulletClass):r+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;i.html(r),e.pagination.bullets=i.find(W(t.bulletClass))}"fraction"===t.type&&(r=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,i.html(r)),"progressbar"===t.type&&(r=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`,i.html(r)),"custom"!==t.type&&a("paginationRender",e.pagination.$el[0])}function u(){e.params.pagination=Y(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let s=d(t.el);0!==s.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&s.length>1&&(s=e.$el.find(t.el),s.length>1&&(s=s.filter((t=>d(t).parents(".swiper")[0]===e.el)))),"bullets"===t.type&&t.clickable&&s.addClass(t.clickableClass),s.addClass(t.modifierClass+t.type),s.addClass(t.modifierClass+e.params.direction),"bullets"===t.type&&t.dynamicBullets&&(s.addClass(`${t.modifierClass}${t.type}-dynamic`),n=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&s.addClass(t.progressbarOppositeClass),t.clickable&&s.on("click",W(t.bulletClass),(function(t){t.preventDefault();let s=d(this).index()*e.params.slidesPerGroup;e.params.loop&&(s+=e.loopedSlides),e.slideTo(s)})),Object.assign(e.pagination,{$el:s,el:s[0]}),e.enabled||s.addClass(t.lockClass))}function h(){const t=e.params.pagination;if(l())return;const s=e.pagination.$el;s.removeClass(t.hiddenClass),s.removeClass(t.modifierClass+t.type),s.removeClass(t.modifierClass+e.params.direction),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&s.off("click",W(t.bulletClass))}s("init",(()=>{u(),p(),c()})),s("activeIndexChange",(()=>{(e.params.loop||void 0===e.snapIndex)&&c()})),s("snapIndexChange",(()=>{e.params.loop||c()})),s("slidesLengthChange",(()=>{e.params.loop&&(p(),c())})),s("snapGridLengthChange",(()=>{e.params.loop||(p(),c())})),s("destroy",(()=>{h()})),s("enable disable",(()=>{const{$el:t}=e.pagination;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)})),s("lock unlock",(()=>{c()})),s("click",((t,s)=>{const i=s.target,{$el:r}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r.length>0&&!d(i).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const t=r.hasClass(e.params.pagination.hiddenClass);a(!0===t?"paginationShow":"paginationHide"),r.toggleClass(e.params.pagination.hiddenClass)}})),Object.assign(e.pagination,{render:p,update:c,init:u,destroy:h})},function({swiper:e,extendParams:t,on:s,emit:i}){const r=a();let n,l,o,c,u=!1,h=null,m=null;function f(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t,rtlTranslate:s,progress:a}=e,{$dragEl:i,$el:r}=t,n=e.params.scrollbar;let d=l,c=(o-l)*a;s?(c=-c,c>0?(d=l-c,c=0):-c+l>o&&(d=o+c)):c<0?(d=l+c,c=0):c+l>o&&(d=o-c),e.isHorizontal()?(i.transform(`translate3d(${c}px, 0, 0)`),i[0].style.width=`${d}px`):(i.transform(`translate3d(0px, ${c}px, 0)`),i[0].style.height=`${d}px`),n.hide&&(clearTimeout(h),r[0].style.opacity=1,h=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function g(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t}=e,{$dragEl:s,$el:a}=t;s[0].style.width="",s[0].style.height="",o=e.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,c=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),l="auto"===e.params.scrollbar.dragSize?o*c:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?s[0].style.width=`${l}px`:s[0].style.height=`${l}px`,a[0].style.display=c>=1?"none":"",e.params.scrollbar.hide&&(a[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&t.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function v(t){return e.isHorizontal()?"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientX:t.clientX:"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientY:t.clientY}function w(t){const{scrollbar:s,rtlTranslate:a}=e,{$el:i}=s;let r;r=(v(t)-i.offset()[e.isHorizontal()?"left":"top"]-(null!==n?n:l/2))/(o-l),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const d=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*r;e.updateProgress(d),e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}function b(t){const s=e.params.scrollbar,{scrollbar:a,$wrapperEl:r}=e,{$el:l,$dragEl:o}=a;u=!0,n=t.target===o[0]||t.target===o?v(t)-t.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,t.preventDefault(),t.stopPropagation(),r.transition(100),o.transition(100),w(t),clearTimeout(m),l.transition(0),s.hide&&l.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),i("scrollbarDragStart",t)}function x(t){const{scrollbar:s,$wrapperEl:a}=e,{$el:r,$dragEl:n}=s;u&&(t.preventDefault?t.preventDefault():t.returnValue=!1,w(t),a.transition(0),r.transition(0),n.transition(0),i("scrollbarDragMove",t))}function y(t){const s=e.params.scrollbar,{scrollbar:a,$wrapperEl:r}=e,{$el:n}=a;u&&(u=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),r.transition("")),s.hide&&(clearTimeout(m),m=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),i("scrollbarDragEnd",t),s.snapOnRelease&&e.slideToClosest())}function E(t){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:n,support:l}=e,o=s.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},c=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};if(!o)return;const p="on"===t?"addEventListener":"removeEventListener";l.touch?(o[p](a.start,b,d),o[p](a.move,x,d),o[p](a.end,y,c)):(o[p](i.start,b,d),r[p](i.move,x,d),r[p](i.end,y,c))}function T(){const{scrollbar:t,$el:s}=e;e.params.scrollbar=Y(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const a=e.params.scrollbar;if(!a.el)return;let i=d(a.el);e.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el));let r=i.find(`.${e.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${e.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(t,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&e.params.scrollbar.el&&E("on"),i&&i[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function C(){e.params.scrollbar.el&&E("off")}t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},s("init",(()=>{T(),g(),f()})),s("update resize observerUpdate lock unlock",(()=>{g()})),s("setTranslate",(()=>{f()})),s("setTransition",((t,s)=>{!function(t){e.params.scrollbar.el&&e.scrollbar.el&&e.scrollbar.$dragEl.transition(t)}(s)})),s("enable disable",(()=>{const{$el:t}=e.scrollbar;t&&t[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)})),s("destroy",(()=>{C()})),Object.assign(e.scrollbar,{updateSize:g,setTranslate:f,init:T,destroy:C})},function({swiper:e,extendParams:t,on:s}){t({parallax:{enabled:!1}});const a=(t,s)=>{const{rtl:a}=e,i=d(t),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):e.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},i=()=>{const{$el:t,slides:s,progress:i,snapGrid:r}=e;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{a(e,i)})),s.each(((t,s)=>{let n=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(s/2)-i*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{a(e,n)}))}))};s("beforeInit",(()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)})),s("init",(()=>{e.params.parallax.enabled&&i()})),s("setTranslate",(()=>{e.params.parallax.enabled&&i()})),s("setTransition",((t,s)=>{e.params.parallax.enabled&&((t=e.params.speed)=>{const{$el:s}=e;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{const s=d(e);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||t;0===t&&(a=0),s.transition(a)}))})(s)}))},function({swiper:e,extendParams:t,on:s,emit:a}){const i=r();t({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let n,l,o,c=1,p=!1;const u={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},m={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},f={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let g=1;function v(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function w(t){const s=e.support,a=e.params.zoom;if(l=!1,o=!1,!s.gestures){if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;l=!0,u.scaleStart=v(t)}u.$slideEl&&u.$slideEl.length||(u.$slideEl=d(t.target).closest(`.${e.params.slideClass}`),0===u.$slideEl.length&&(u.$slideEl=e.slides.eq(e.activeIndex)),u.$imageEl=u.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),u.$imageWrapEl=u.$imageEl.parent(`.${a.containerClass}`),u.maxRatio=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==u.$imageWrapEl.length)?(u.$imageEl&&u.$imageEl.transition(0),p=!0):u.$imageEl=void 0}function b(t){const s=e.support,a=e.params.zoom,i=e.zoom;if(!s.gestures){if("touchmove"!==t.type||"touchmove"===t.type&&t.targetTouches.length<2)return;o=!0,u.scaleMove=v(t)}u.$imageEl&&0!==u.$imageEl.length?(s.gestures?i.scale=t.scale*c:i.scale=u.scaleMove/u.scaleStart*c,i.scale>u.maxRatio&&(i.scale=u.maxRatio-1+(i.scale-u.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===t.type&&w(t)}function x(t){const s=e.device,a=e.support,i=e.params.zoom,r=e.zoom;if(!a.gestures){if(!l||!o)return;if("touchend"!==t.type||"touchend"===t.type&&t.changedTouches.length<2&&!s.android)return;l=!1,o=!1}u.$imageEl&&0!==u.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,u.maxRatio),i.minRatio),u.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),c=r.scale,p=!1,1===r.scale&&(u.$slideEl=void 0))}function y(t){const s=e.zoom;if(!u.$imageEl||0===u.$imageEl.length)return;if(e.allowClick=!1,!m.isTouched||!u.$slideEl)return;m.isMoved||(m.width=u.$imageEl[0].offsetWidth,m.height=u.$imageEl[0].offsetHeight,m.startX=h(u.$imageWrapEl[0],"x")||0,m.startY=h(u.$imageWrapEl[0],"y")||0,u.slideWidth=u.$slideEl[0].offsetWidth,u.slideHeight=u.$slideEl[0].offsetHeight,u.$imageWrapEl.transition(0));const a=m.width*s.scale,i=m.height*s.scale;if(!(a<u.slideWidth&&i<u.slideHeight)){if(m.minX=Math.min(u.slideWidth/2-a/2,0),m.maxX=-m.minX,m.minY=Math.min(u.slideHeight/2-i/2,0),m.maxY=-m.minY,m.touchesCurrent.x="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,m.touchesCurrent.y="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,!m.isMoved&&!p){if(e.isHorizontal()&&(Math.floor(m.minX)===Math.floor(m.startX)&&m.touchesCurrent.x<m.touchesStart.x||Math.floor(m.maxX)===Math.floor(m.startX)&&m.touchesCurrent.x>m.touchesStart.x))return void(m.isTouched=!1);if(!e.isHorizontal()&&(Math.floor(m.minY)===Math.floor(m.startY)&&m.touchesCurrent.y<m.touchesStart.y||Math.floor(m.maxY)===Math.floor(m.startY)&&m.touchesCurrent.y>m.touchesStart.y))return void(m.isTouched=!1)}t.cancelable&&t.preventDefault(),t.stopPropagation(),m.isMoved=!0,m.currentX=m.touchesCurrent.x-m.touchesStart.x+m.startX,m.currentY=m.touchesCurrent.y-m.touchesStart.y+m.startY,m.currentX<m.minX&&(m.currentX=m.minX+1-(m.minX-m.currentX+1)**.8),m.currentX>m.maxX&&(m.currentX=m.maxX-1+(m.currentX-m.maxX+1)**.8),m.currentY<m.minY&&(m.currentY=m.minY+1-(m.minY-m.currentY+1)**.8),m.currentY>m.maxY&&(m.currentY=m.maxY-1+(m.currentY-m.maxY+1)**.8),f.prevPositionX||(f.prevPositionX=m.touchesCurrent.x),f.prevPositionY||(f.prevPositionY=m.touchesCurrent.y),f.prevTime||(f.prevTime=Date.now()),f.x=(m.touchesCurrent.x-f.prevPositionX)/(Date.now()-f.prevTime)/2,f.y=(m.touchesCurrent.y-f.prevPositionY)/(Date.now()-f.prevTime)/2,Math.abs(m.touchesCurrent.x-f.prevPositionX)<2&&(f.x=0),Math.abs(m.touchesCurrent.y-f.prevPositionY)<2&&(f.y=0),f.prevPositionX=m.touchesCurrent.x,f.prevPositionY=m.touchesCurrent.y,f.prevTime=Date.now(),u.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)}}function E(){const t=e.zoom;u.$slideEl&&e.previousIndex!==e.activeIndex&&(u.$imageEl&&u.$imageEl.transform("translate3d(0,0,0) scale(1)"),u.$imageWrapEl&&u.$imageWrapEl.transform("translate3d(0,0,0)"),t.scale=1,c=1,u.$slideEl=void 0,u.$imageEl=void 0,u.$imageWrapEl=void 0)}function T(t){const s=e.zoom,a=e.params.zoom;if(u.$slideEl||(t&&t.target&&(u.$slideEl=d(t.target).closest(`.${e.params.slideClass}`)),u.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):u.$slideEl=e.slides.eq(e.activeIndex)),u.$imageEl=u.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),u.$imageWrapEl=u.$imageEl.parent(`.${a.containerClass}`)),!u.$imageEl||0===u.$imageEl.length||!u.$imageWrapEl||0===u.$imageWrapEl.length)return;let r,n,l,o,p,h,f,g,v,w,b,x,y,E,T,C,$,S;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),u.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===m.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,n="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=m.touchesStart.x,n=m.touchesStart.y),s.scale=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,c=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,t?($=u.$slideEl[0].offsetWidth,S=u.$slideEl[0].offsetHeight,l=u.$slideEl.offset().left+i.scrollX,o=u.$slideEl.offset().top+i.scrollY,p=l+$/2-r,h=o+S/2-n,v=u.$imageEl[0].offsetWidth,w=u.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),T=-y,C=-E,f=p*s.scale,g=h*s.scale,f<y&&(f=y),f>T&&(f=T),g<E&&(g=E),g>C&&(g=C)):(f=0,g=0),u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`),u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function C(){const t=e.zoom,s=e.params.zoom;u.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):u.$slideEl=e.slides.eq(e.activeIndex),u.$imageEl=u.$slideEl.find(`.${s.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),u.$imageWrapEl=u.$imageEl.parent(`.${s.containerClass}`)),u.$imageEl&&0!==u.$imageEl.length&&u.$imageWrapEl&&0!==u.$imageWrapEl.length&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),t.scale=1,c=1,u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),u.$slideEl.removeClass(`${s.zoomedSlideClass}`),u.$slideEl=void 0)}function $(t){const s=e.zoom;s.scale&&1!==s.scale?C():T(t)}function S(){const t=e.support;return{passiveListener:!("touchstart"!==e.touchEvents.start||!t.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!t.passiveListener||{passive:!1,capture:!0}}}function M(){return`.${e.params.slideClass}`}function P(t){const{passiveListener:s}=S(),a=M();e.$wrapperEl[t]("gesturestart",a,w,s),e.$wrapperEl[t]("gesturechange",a,b,s),e.$wrapperEl[t]("gestureend",a,x,s)}function k(){n||(n=!0,P("on"))}function z(){n&&(n=!1,P("off"))}function O(){const t=e.zoom;if(t.enabled)return;t.enabled=!0;const s=e.support,{passiveListener:a,activeListenerWithCapture:i}=S(),r=M();s.gestures?(e.$wrapperEl.on(e.touchEvents.start,k,a),e.$wrapperEl.on(e.touchEvents.end,z,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,r,w,a),e.$wrapperEl.on(e.touchEvents.move,r,b,i),e.$wrapperEl.on(e.touchEvents.end,r,x,a),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,r,x,a)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,y,i)}function I(){const t=e.zoom;if(!t.enabled)return;const s=e.support;t.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=S(),r=M();s.gestures?(e.$wrapperEl.off(e.touchEvents.start,k,a),e.$wrapperEl.off(e.touchEvents.end,z,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,r,w,a),e.$wrapperEl.off(e.touchEvents.move,r,b,i),e.$wrapperEl.off(e.touchEvents.end,r,x,a),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,r,x,a)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,y,i)}Object.defineProperty(e.zoom,"scale",{get:()=>g,set(e){if(g!==e){const t=u.$imageEl?u.$imageEl[0]:void 0,s=u.$slideEl?u.$slideEl[0]:void 0;a("zoomChange",e,t,s)}g=e}}),s("init",(()=>{e.params.zoom.enabled&&O()})),s("destroy",(()=>{I()})),s("touchStart",((t,s)=>{e.zoom.enabled&&function(t){const s=e.device;u.$imageEl&&0!==u.$imageEl.length&&(m.isTouched||(s.android&&t.cancelable&&t.preventDefault(),m.isTouched=!0,m.touchesStart.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,m.touchesStart.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY))}(s)})),s("touchEnd",((t,s)=>{e.zoom.enabled&&function(){const t=e.zoom;if(!u.$imageEl||0===u.$imageEl.length)return;if(!m.isTouched||!m.isMoved)return m.isTouched=!1,void(m.isMoved=!1);m.isTouched=!1,m.isMoved=!1;let s=300,a=300;const i=f.x*s,r=m.currentX+i,n=f.y*a,l=m.currentY+n;0!==f.x&&(s=Math.abs((r-m.currentX)/f.x)),0!==f.y&&(a=Math.abs((l-m.currentY)/f.y));const o=Math.max(s,a);m.currentX=r,m.currentY=l;const d=m.width*t.scale,c=m.height*t.scale;m.minX=Math.min(u.slideWidth/2-d/2,0),m.maxX=-m.minX,m.minY=Math.min(u.slideHeight/2-c/2,0),m.maxY=-m.minY,m.currentX=Math.max(Math.min(m.currentX,m.maxX),m.minX),m.currentY=Math.max(Math.min(m.currentY,m.maxY),m.minY),u.$imageWrapEl.transition(o).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)}()})),s("doubleTap",((t,s)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&$(s)})),s("transitionEnd",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&E()})),s("slideChange",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&E()})),Object.assign(e.zoom,{enable:O,disable:I,in:T,out:C,toggle:$})},function({swiper:e,extendParams:t,on:s,emit:a}){t({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let i=!1,n=!1;function l(t,s=!0){const i=e.params.lazy;if(void 0===t)return;if(0===e.slides.length)return;const r=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`):e.slides.eq(t),n=r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);!r.hasClass(i.elementClass)||r.hasClass(i.loadedClass)||r.hasClass(i.loadingClass)||n.push(r[0]),0!==n.length&&n.each((t=>{const n=d(t);n.addClass(i.loadingClass);const o=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");e.loadImage(n[0],c||o,p,u,!1,(()=>{if(null!=e&&e&&(!e||e.params)&&!e.destroyed){if(o?(n.css("background-image",`url("${o}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(i.loadedClass).removeClass(i.loadingClass),r.find(`.${i.preloaderClass}`).remove(),e.params.loop&&s){const t=r.attr("data-swiper-slide-index");if(r.hasClass(e.params.slideDuplicateClass)){l(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(),!1)}else{l(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(),!1)}}a("lazyImageReady",r[0],n[0]),e.params.autoHeight&&e.updateAutoHeight()}})),a("lazyImageLoad",r[0],n[0])}))}function o(){const{$wrapperEl:t,params:s,slides:a,activeIndex:i}=e,r=e.virtual&&s.virtual.enabled,o=s.lazy;let c=s.slidesPerView;function p(e){if(r){if(t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length)return!0}else if(a[e])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),n||(n=!0),e.params.watchSlidesProgress)t.children(`.${s.slideVisibleClass}`).each((e=>{l(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&l(e);else l(i);if(o.loadPrevNext)if(c>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){const e=o.loadPrevNextAmount,t=c,s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+c;e<s;e+=1)p(e)&&l(e);for(let e=r;e<i;e+=1)p(e)&&l(e)}else{const e=t.children(`.${s.slideNextClass}`);e.length>0&&l(u(e));const a=t.children(`.${s.slidePrevClass}`);a.length>0&&l(u(a))}}function c(){const t=r();if(!e||e.destroyed)return;const s=e.params.lazy.scrollingElement?d(e.params.lazy.scrollingElement):d(t),a=s[0]===t,n=a?t.innerWidth:s[0].offsetWidth,l=a?t.innerHeight:s[0].offsetHeight,p=e.$el.offset(),{rtlTranslate:u}=e;let h=!1;u&&(p.left-=e.$el[0].scrollLeft);const m=[[p.left,p.top],[p.left+e.width,p.top],[p.left,p.top+e.height],[p.left+e.width,p.top+e.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=n&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==e.touchEvents.start||!e.support.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};h?(o(),s.off("scroll",c,f)):i||(i=!0,s.on("scroll",c,f))}s("beforeInit",(()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)})),s("init",(()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?c():o())})),s("scroll",(()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&o()})),s("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?c():o())})),s("transitionStart",(()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!n)&&(e.params.lazy.checkInView?c():o())})),s("transitionEnd",(()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?c():o())})),s("slideChange",(()=>{const{lazy:t,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=e.params;t.enabled&&(s||a&&(i||0===r))&&o()})),Object.assign(e.lazy,{load:o,loadInSlide:l})},function({swiper:e,extendParams:t,on:s}){function a(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function i(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0},s("beforeInit",(()=>{e.controller.control=e.params.controller.control})),s("update",(()=>{i()})),s("resize",(()=>{i()})),s("observerUpdate",(()=>{i()})),s("setTranslate",((t,s,a)=>{e.controller.control&&e.controller.setTranslate(s,a)})),s("setTransition",((t,s,a)=>{e.controller.control&&e.controller.setTransition(s,a)})),Object.assign(e.controller,{setTranslate:function(t,s){const i=e.controller.control;let r,n;const l=e.constructor;function o(t){const s=e.rtlTranslate?-e.translate:e.translate;"slide"===e.params.controller.by&&(!function(t){e.controller.spline||(e.controller.spline=e.params.loop?new a(e.slidesGrid,t.slidesGrid):new a(e.snapGrid,t.snapGrid))}(t),n=-e.controller.spline.interpolate(-s)),n&&"container"!==e.params.controller.by||(r=(t.maxTranslate()-t.minTranslate())/(e.maxTranslate()-e.minTranslate()),n=(s-e.minTranslate())*r+t.minTranslate()),e.params.controller.inverse&&(n=t.maxTranslate()-n),t.updateProgress(n),t.setTranslate(n,e),t.updateActiveIndex(),t.updateSlidesClasses()}if(Array.isArray(i))for(let e=0;e<i.length;e+=1)i[e]!==s&&i[e]instanceof l&&o(i[e]);else i instanceof l&&s!==i&&o(i)},setTransition:function(t,s){const a=e.constructor,i=e.controller.control;let r;function n(s){s.setTransition(t,e),0!==t&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===e.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function({swiper:e,extendParams:t,on:s}){t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group"}});let a=null;function i(e){const t=a;0!==t.length&&(t.html(""),t.html(e))}function r(e){e.attr("tabIndex","0")}function n(e){e.attr("tabIndex","-1")}function l(e,t){e.attr("role",t)}function o(e,t){e.attr("aria-roledescription",t)}function c(e,t){e.attr("aria-label",t)}function p(e){e.attr("aria-disabled",!0)}function u(e){e.attr("aria-disabled",!1)}function h(t){if(13!==t.keyCode&&32!==t.keyCode)return;const s=e.params.a11y,a=d(t.target);e.navigation&&e.navigation.$nextEl&&a.is(e.navigation.$nextEl)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?i(s.lastSlideMessage):i(s.nextSlideMessage)),e.navigation&&e.navigation.$prevEl&&a.is(e.navigation.$prevEl)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?i(s.firstSlideMessage):i(s.prevSlideMessage)),e.pagination&&a.is(W(e.params.pagination.bulletClass))&&a[0].click()}function m(){if(e.params.loop||!e.navigation)return;const{$nextEl:t,$prevEl:s}=e.navigation;s&&s.length>0&&(e.isBeginning?(p(s),n(s)):(u(s),r(s))),t&&t.length>0&&(e.isEnd?(p(t),n(t)):(u(t),r(t)))}function f(){return e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length}const g=(e,t,s)=>{r(e),"BUTTON"!==e[0].tagName&&(l(e,"button"),e.on("keydown",h)),c(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)};function v(){const t=e.params.a11y;e.$el.append(a);const s=e.$el;t.containerRoleDescriptionMessage&&o(s,t.containerRoleDescriptionMessage),t.containerMessage&&c(s,t.containerMessage);const i=e.$wrapperEl,r=i.attr("id")||`swiper-wrapper-${function(e=16){return"x".repeat(e).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}(16)}`,n=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";var p;p=r,i.attr("id",p),function(e,t){e.attr("aria-live",t)}(i,n),t.itemRoleDescriptionMessage&&o(d(e.slides),t.itemRoleDescriptionMessage),l(d(e.slides),t.slideRole);const u=e.params.loop?e.slides.filter((t=>!t.classList.contains(e.params.slideDuplicateClass))).length:e.slides.length;let m,v;e.slides.each(((s,a)=>{const i=d(s),r=e.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):a;c(i,t.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,u))})),e.navigation&&e.navigation.$nextEl&&(m=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(v=e.navigation.$prevEl),m&&m.length&&g(m,r,t.nextSlideMessage),v&&v.length&&g(v,r,t.prevSlideMessage),f()&&e.pagination.$el.on("keydown",W(e.params.pagination.bulletClass),h)}s("beforeInit",(()=>{a=d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),s("afterInit",(()=>{e.params.a11y.enabled&&(v(),m())})),s("toEdge",(()=>{e.params.a11y.enabled&&m()})),s("fromEdge",(()=>{e.params.a11y.enabled&&m()})),s("paginationUpdate",(()=>{e.params.a11y.enabled&&function(){const t=e.params.a11y;f()&&e.pagination.bullets.each((s=>{const a=d(s);r(a),e.params.pagination.renderBullet||(l(a,"button"),c(a,t.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))}))}()})),s("destroy",(()=>{e.params.a11y.enabled&&function(){let t,s;a&&a.length>0&&a.remove(),e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(s=e.navigation.$prevEl),t&&t.off("keydown",h),s&&s.off("keydown",h),f()&&e.pagination.$el.off("keydown",W(e.params.pagination.bulletClass),h)}()}))},function({swiper:e,extendParams:t,on:s}){t({history:{enabled:!1,root:"",replaceState:!1,key:"slides"}});let a=!1,i={};const n=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),l=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},o=(t,s)=>{const i=r();if(!a||!e.params.history.enabled)return;let l;l=e.params.url?new URL(e.params.url):i.location;const o=e.slides.eq(s);let d=n(o.attr("data-history"));if(e.params.history.root.length>0){let s=e.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${t}/${d}`}else l.pathname.includes(t)||(d=`${t}/${d}`);const c=i.history.state;c&&c.value===d||(e.params.history.replaceState?i.history.replaceState({value:d},null,d):i.history.pushState({value:d},null,d))},d=(t,s,a)=>{if(s)for(let i=0,r=e.slides.length;i<r;i+=1){const r=e.slides.eq(i);if(n(r.attr("data-history"))===s&&!r.hasClass(e.params.slideDuplicateClass)){const s=r.index();e.slideTo(s,t,a)}}else e.slideTo(0,t,a)},c=()=>{i=l(e.params.url),d(e.params.speed,e.paths.value,!1)};s("init",(()=>{e.params.history.enabled&&(()=>{const t=r();if(e.params.history){if(!t.history||!t.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);a=!0,i=l(e.params.url),(i.key||i.value)&&(d(0,i.value,e.params.runCallbacksOnInit),e.params.history.replaceState||t.addEventListener("popstate",c))}})()})),s("destroy",(()=>{e.params.history.enabled&&(()=>{const t=r();e.params.history.replaceState||t.removeEventListener("popstate",c)})()})),s("transitionEnd _freeModeNoMomentumRelease",(()=>{a&&o(e.params.history.key,e.activeIndex)})),s("slideChange",(()=>{a&&e.params.cssMode&&o(e.params.history.key,e.activeIndex)}))},function({swiper:e,extendParams:t,emit:s,on:i}){let n=!1;const l=a(),o=r();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const c=()=>{s("hashChange");const t=l.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){const s=e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();if(void 0===s)return;e.slideTo(s)}},p=()=>{if(n&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&o.history&&o.history.replaceState)o.history.replaceState(null,null,`#${e.slides.eq(e.activeIndex).attr("data-hash")}`||""),s("hashSet");else{const t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");l.location.hash=a||"",s("hashSet")}};i("init",(()=>{e.params.hashNavigation.enabled&&(()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;n=!0;const t=l.location.hash.replace("#","");if(t){const s=0;for(let a=0,i=e.slides.length;a<i;a+=1){const i=e.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===t&&!i.hasClass(e.params.slideDuplicateClass)){const t=i.index();e.slideTo(t,s,e.params.runCallbacksOnInit,!0)}}}e.params.hashNavigation.watchState&&d(o).on("hashchange",c)})()})),i("destroy",(()=>{e.params.hashNavigation.enabled&&e.params.hashNavigation.watchState&&d(o).off("hashchange",c)})),i("transitionEnd _freeModeNoMomentumRelease",(()=>{n&&p()})),i("slideChange",(()=>{n&&e.params.cssMode&&p()}))},function({swiper:e,extendParams:t,on:s,emit:i}){let r;function n(){const t=e.slides.eq(e.activeIndex);let s=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(s=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(r),r=p((()=>{let t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?o():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),i("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),i("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?o():(t=e.slideTo(0,e.params.speed,!0,!0),i("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),i("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&n()}),s)}function l(){return void 0===r&&(!e.autoplay.running&&(e.autoplay.running=!0,i("autoplayStart"),n(),!0))}function o(){return!!e.autoplay.running&&(void 0!==r&&(r&&(clearTimeout(r),r=void 0),e.autoplay.running=!1,i("autoplayStop"),!0))}function d(t){e.autoplay.running&&(e.autoplay.paused||(r&&clearTimeout(r),e.autoplay.paused=!0,0!==t&&e.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].addEventListener(t,u)})):(e.autoplay.paused=!1,n())))}function c(){const t=a();"hidden"===t.visibilityState&&e.autoplay.running&&d(),"visible"===t.visibilityState&&e.autoplay.paused&&(n(),e.autoplay.paused=!1)}function u(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,u)})),e.autoplay.paused=!1,e.autoplay.running?n():o())}function h(){e.params.autoplay.disableOnInteraction?o():d(),["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,u)}))}function m(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,n())}e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),s("init",(()=>{if(e.params.autoplay.enabled){l();a().addEventListener("visibilitychange",c),e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",h),e.$el.on("mouseleave",m))}})),s("beforeTransitionStart",((t,s,a)=>{e.autoplay.running&&(a||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(s):o())})),s("sliderFirstMove",(()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?o():d())})),s("touchEnd",(()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&n()})),s("destroy",(()=>{e.$el.off("mouseenter",h),e.$el.off("mouseleave",m),e.autoplay.running&&o();a().removeEventListener("visibilitychange",c)})),Object.assign(e.autoplay,{pause:d,run:n,start:l,stop:o})},function({swiper:e,extendParams:t,on:s}){t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,i=!1;function r(){const t=e.thumbs.swiper;if(!t)return;const s=t.clickedIndex,a=t.clickedSlide;if(a&&d(a).hasClass(e.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=t.params.loop?parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"),10):s,e.params.loop){let t=e.activeIndex;e.slides.eq(t).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,t=e.activeIndex);const s=e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-t<t-s?a:s}e.slideTo(i)}function n(){const{thumbs:t}=e.params;if(a)return!1;a=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(t.swiper)){const a=Object.assign({},t.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(a),i=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",r),!0}function l(t){const s=e.thumbs.swiper;if(!s)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView,i=e.params.thumbs.autoScrollOffset,r=i&&!s.params.loop;if(e.realIndex!==s.realIndex||r){let n,l,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const t=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();n=void 0===t?a:void 0===a?t:a-o==o-t?s.params.slidesPerGroup>1?a:o:a-o<o-t?a:t,l=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,l=n>e.previousIndex?"next":"prev";r&&(n+="next"===l?i:-1*i),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n=n>o?n-Math.floor(a/2)+1:n+Math.floor(a/2)-1:n>o&&s.params.slidesPerGroup,s.slideTo(n,t?0:void 0))}let n=1;const l=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(n=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),s.slides.removeClass(l),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let t=0;t<n;t+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(l);else for(let t=0;t<n;t+=1)s.slides.eq(e.realIndex+t).addClass(l)}e.thumbs={swiper:null},s("beforeInit",(()=>{const{thumbs:t}=e.params;t&&t.swiper&&(n(),l(!0))})),s("slideChange update resize observerUpdate",(()=>{e.thumbs.swiper&&l()})),s("setTransition",((t,s)=>{const a=e.thumbs.swiper;a&&a.setTransition(s)})),s("beforeDestroy",(()=>{const t=e.thumbs.swiper;t&&i&&t&&t.destroy()})),Object.assign(e.thumbs,{init:n,update:l})},function({swiper:e,extendParams:t,emit:s,once:a}){t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(e,{freeMode:{onTouchMove:function(){const{touchEventsData:t,touches:s}=e;0===t.velocities.length&&t.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:t.touchStartTime}),t.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function({currentPos:t}){const{params:i,$wrapperEl:r,rtlTranslate:n,snapGrid:l,touchEventsData:o}=e,d=u()-o.touchStartTime;if(t<-e.minTranslate())e.slideTo(e.activeIndex);else if(t>-e.maxTranslate())e.slides.length<l.length?e.slideTo(l.length-1):e.slideTo(e.slides.length-1);else{if(i.freeMode.momentum){if(o.velocities.length>1){const t=o.velocities.pop(),s=o.velocities.pop(),a=t.position-s.position,r=t.time-s.time;e.velocity=a/r,e.velocity/=2,Math.abs(e.velocity)<i.freeMode.minimumVelocity&&(e.velocity=0),(r>150||u()-t.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=i.freeMode.momentumVelocityRatio,o.velocities.length=0;let t=1e3*i.freeMode.momentumRatio;const d=e.velocity*t;let c=e.translate+d;n&&(c=-c);let p,h=!1;const m=20*Math.abs(e.velocity)*i.freeMode.momentumBounceRatio;let f;if(c<e.maxTranslate())i.freeMode.momentumBounce?(c+e.maxTranslate()<-m&&(c=e.maxTranslate()-m),p=e.maxTranslate(),h=!0,o.allowMomentumBounce=!0):c=e.maxTranslate(),i.loop&&i.centeredSlides&&(f=!0);else if(c>e.minTranslate())i.freeMode.momentumBounce?(c-e.minTranslate()>m&&(c=e.minTranslate()+m),p=e.minTranslate(),h=!0,o.allowMomentumBounce=!0):c=e.minTranslate(),i.loop&&i.centeredSlides&&(f=!0);else if(i.freeMode.sticky){let t;for(let e=0;e<l.length;e+=1)if(l[e]>-c){t=e;break}c=Math.abs(l[t]-c)<Math.abs(l[t-1]-c)||"next"===e.swipeDirection?l[t]:l[t-1],c=-c}if(f&&a("transitionEnd",(()=>{e.loopFix()})),0!==e.velocity){if(t=n?Math.abs((-c-e.translate)/e.velocity):Math.abs((c-e.translate)/e.velocity),i.freeMode.sticky){const s=Math.abs((n?-c:c)-e.translate),a=e.slidesSizesGrid[e.activeIndex];t=s<a?i.speed:s<2*a?1.5*i.speed:2.5*i.speed}}else if(i.freeMode.sticky)return void e.slideToClosest();i.freeMode.momentumBounce&&h?(e.updateProgress(p),e.setTransition(t),e.setTranslate(c),e.transitionStart(!0,e.swipeDirection),e.animating=!0,r.transitionEnd((()=>{e&&!e.destroyed&&o.allowMomentumBounce&&(s("momentumBounce"),e.setTransition(i.speed),setTimeout((()=>{e.setTranslate(p),r.transitionEnd((()=>{e&&!e.destroyed&&e.transitionEnd()}))}),0))}))):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(c),e.setTransition(t),e.setTranslate(c),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,r.transitionEnd((()=>{e&&!e.destroyed&&e.transitionEnd()})))):e.updateProgress(c),e.updateActiveIndex(),e.updateSlidesClasses()}else{if(i.freeMode.sticky)return void e.slideToClosest();i.freeMode&&s("_freeModeNoMomentumRelease")}(!i.freeMode.momentum||d>=i.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}}}})},function({swiper:e,extendParams:t}){let s,a,i;t({grid:{rows:1,fill:"column"}}),e.grid={initSlides:t=>{const{slidesPerView:r}=e.params,{rows:n,fill:l}=e.params.grid;a=s/n,i=Math.floor(t/n),s=Math.floor(t/n)===t/n?t:Math.ceil(t/n)*n,"auto"!==r&&"row"===l&&(s=Math.max(s,r*n))},updateSlide:(t,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=e.params,{rows:c,fill:p}=e.params.grid;let u,h,m;if("row"===p&&o>1){const e=Math.floor(t/(o*c)),a=t-c*o*e,i=0===e?o:Math.min(Math.ceil((n-e*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+e*o,u=h+m*s/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(t/c),m=t-h*c,(h>i||h===i&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(t/a),h=t-m*a);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(t,a,i)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=e.params,{rows:o}=e.params.grid;if(e.virtualSize=(t+r)*s,e.virtualSize=Math.ceil(e.virtualSize/o)-r,e.$wrapperEl.css({[i("width")]:`${e.virtualSize+r}px`}),n){a.splice(0,a.length);const t=[];for(let s=0;s<a.length;s+=1){let i=a[s];l&&(i=Math.floor(i)),a[s]<e.virtualSize+a[0]&&t.push(i)}a.push(...t)}}}},function({swiper:e}){Object.assign(e,{appendSlide:R.bind(e),prependSlide:j.bind(e),addSlide:_.bind(e),removeSlide:V.bind(e),removeAllSlides:q.bind(e)})},function({swiper:e,extendParams:t,on:s}){t({fadeEffect:{crossFade:!1,transformEl:null}}),F({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:t}=e,s=e.params.fadeEffect;for(let a=0;a<t.length;a+=1){const t=e.slides.eq(a);let i=-t[0].swiperSlideOffset;e.params.virtualTranslate||(i-=e.translate);let r=0;e.isHorizontal()||(r=i,i=0);const n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);U(s,t).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:t=>{const{transformEl:s}=e.params.fadeEffect;(s?e.slides.find(s):e.slides).transition(t),K({swiper:e,duration:t,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),F({effect:"cube",swiper:e,on:s,setTranslate:()=>{const{$el:t,$wrapperEl:s,slides:a,width:i,height:r,rtlTranslate:n,size:l,browser:o}=e,c=e.params.cubeEffect,p=e.isHorizontal(),u=e.virtual&&e.params.virtual.enabled;let h,m=0;c.shadow&&(p?(h=s.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),s.append(h)),h.css({height:`${i}px`})):(h=t.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),t.append(h))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;u&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let i=90*s,r=Math.floor(i/360);n&&(i=-i,r=Math.floor(-i/360));const o=Math.max(Math.min(t[0].progress,1),-1);let h=0,f=0,g=0;s%4==0?(h=4*-r*l,g=0):(s-1)%4==0?(h=0,g=4*-r*l):(s-2)%4==0?(h=l+4*r*l,g=l):(s-3)%4==0&&(h=-l,g=3*l+4*l*r),n&&(h=-h),p||(f=h,h=0);const v=`rotateX(${p?0:-i}deg) rotateY(${p?i:0}deg) translate3d(${h}px, ${f}px, ${g}px)`;if(o<=1&&o>-1&&(m=90*s+90*o,n&&(m=90*-s-90*o)),t.transform(v),c.slideShadows){let e=p?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=p?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=d(`<div class="swiper-slide-shadow-${p?"left":"top"}"></div>`),t.append(e)),0===s.length&&(s=d(`<div class="swiper-slide-shadow-${p?"right":"bottom"}"></div>`),t.append(s)),e.length&&(e[0].style.opacity=Math.max(-o,0)),s.length&&(s[0].style.opacity=Math.max(o,0))}}if(s.css({"-webkit-transform-origin":`50% 50% -${l/2}px`,"transform-origin":`50% 50% -${l/2}px`}),c.shadow)if(p)h.transform(`translate3d(0px, ${i/2+c.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);else{const e=Math.abs(m)-90*Math.floor(Math.abs(m)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=c.shadowScale,a=c.shadowScale/t,i=c.shadowOffset;h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r/2+i}px, ${-r/2/a}px) rotateX(-90deg)`)}const f=o.isSafari||o.isWebView?-l/2:0;s.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal()?0:m}deg) rotateY(${e.isHorizontal()?-m:0}deg)`)},setTransition:t=>{const{$el:s,slides:a}=e;a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),e.params.cubeEffect.shadow&&!e.isHorizontal()&&s.find(".swiper-cube-shadow").transition(t)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function({swiper:e,extendParams:t,on:s}){t({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),F({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:t,rtlTranslate:s}=e,a=e.params.flipEffect;for(let i=0;i<t.length;i+=1){const r=t.eq(i);let n=r[0].progress;e.params.flipEffect.limitRotation&&(n=Math.max(Math.min(r[0].progress,1),-1));const l=r[0].swiperSlideOffset;let o=-180*n,d=0,c=e.params.cssMode?-l-e.translate:-l,p=0;if(e.isHorizontal()?s&&(o=-o):(p=c,c=0,d=-o,o=0),r[0].style.zIndex=-Math.abs(Math.round(n))+t.length,a.slideShadows){let t=e.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),s=e.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===t.length&&(t=Z(a,r,e.isHorizontal()?"left":"top")),0===s.length&&(s=Z(a,r,e.isHorizontal()?"right":"bottom")),t.length&&(t[0].style.opacity=Math.max(-n,0)),s.length&&(s[0].style.opacity=Math.max(n,0))}const u=`translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;U(a,r).transform(u)}},setTransition:t=>{const{transformEl:s}=e.params.flipEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),K({swiper:e,duration:t,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),F({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:t,height:s,slides:a,slidesSizesGrid:i}=e,r=e.params.coverflowEffect,n=e.isHorizontal(),l=e.translate,o=n?t/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s*r.modifier;let p=n?d*l:0,u=n?0:d*l,h=-c*Math.abs(l),m=r.stretch;"string"==typeof m&&-1!==m.indexOf("%")&&(m=parseFloat(r.stretch)/100*s);let f=n?0:m*l,g=n?m*l:0,v=1-(1-r.scale)*Math.abs(l);Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(p)<.001&&(p=0),Math.abs(u)<.001&&(u=0),Math.abs(v)<.001&&(v=0);const w=`translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${v})`;if(U(r,t).transform(w),t[0].style.zIndex=1-Math.abs(Math.round(l)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=Z(r,t,n?"left":"top")),0===s.length&&(s=Z(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=l>0?l:0),s.length&&(s[0].style.opacity=-l>0?-l:0)}}},setTransition:t=>{const{transformEl:s}=e.params.coverflowEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function({swiper:e,extendParams:t,on:s}){t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=e=>"string"==typeof e?e:`${e}px`;F({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:t}=e,s=e.params.creativeEffect,{progressMultiplier:i}=s;for(let r=0;r<t.length;r+=1){const n=t.eq(r),l=n[0].progress,o=Math.min(Math.max(n[0].progress,-s.limitProgress),s.limitProgress),d=n[0].swiperSlideOffset,c=[e.params.cssMode?-d-e.translate:-d,0,0],p=[0,0,0];let u=!1;e.isHorizontal()||(c[1]=c[0],c[0]=0);let h={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};o<0?(h=s.next,u=!0):o>0&&(h=s.prev,u=!0),c.forEach(((e,t)=>{c[t]=`calc(${e}px + (${a(h.translate[t])} * ${Math.abs(o*i)}))`})),p.forEach(((e,t)=>{p[t]=h.rotate[t]*Math.abs(o*i)})),n[0].style.zIndex=-Math.abs(Math.round(l))+t.length;const m=c.join(", "),f=`rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`,g=o<0?`scale(${1+(1-h.scale)*o*i})`:`scale(${1-(1-h.scale)*o*i})`,v=o<0?1+(1-h.opacity)*o*i:1-(1-h.opacity)*o*i,w=`translate3d(${m}) ${f} ${g}`;if(u&&h.shadow||!u){let e=n.children(".swiper-slide-shadow");if(0===e.length&&h.shadow&&(e=Z(s,n)),e.length){const t=s.shadowPerProgress?o*(1/s.limitProgress):o;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const b=U(s,n);b.transform(w).css({opacity:v}),h.origin&&b.css("transform-origin",h.origin)}},setTransition:t=>{const{transformEl:s}=e.params.creativeEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow").transition(t),K({swiper:e,duration:t,transformEl:s,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({cardsEffect:{slideShadows:!0,transformEl:null}}),F({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:t,activeIndex:s}=e,a=e.params.cardsEffect,{startTranslate:i,isTouched:r}=e.touchEventsData,n=e.translate;for(let l=0;l<t.length;l+=1){const o=t.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(p-=t[0].swiperSlideOffset);let u=e.params.cssMode?-p-e.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-2*c,v=8-.75*Math.abs(c);const w=(l===s||l===s-1)&&c>0&&c<1&&(r||e.params.cssMode)&&n<i,b=(l===s||l===s+1)&&c<0&&c>-1&&(r||e.params.cssMode)&&n>i;if(w||b){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!e.isHorizontal()){const e=h;h=u,u=e}const x=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${c<0?""+(1+(1-f)*c):""+(1-(1-f)*c)})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=Z(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+t.length;U(a,o).transform(x)}},setTransition:t=>{const{transformEl:s}=e.params.cardsEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow").transition(t),K({swiper:e,duration:t,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}];return H.use(J),H}));
 //# sourceMappingURL=swiper-bundle.min.js.map
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.noUiSlider = {}));
}(this, (function (exports) {
	'use strict';

	exports.PipsMode = void 0;
	(function (PipsMode) {
		PipsMode["Range"] = "range";
		PipsMode["Steps"] = "steps";
		PipsMode["Positions"] = "positions";
		PipsMode["Count"] = "count";
		PipsMode["Values"] = "values";
	})(exports.PipsMode || (exports.PipsMode = {}));
	exports.PipsType = void 0;
	(function (PipsType) {
		PipsType[PipsType["None"] = -1] = "None";
		PipsType[PipsType["NoValue"] = 0] = "NoValue";
		PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
		PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
	})(exports.PipsType || (exports.PipsType = {}));
	//region Helper Methods
	function isValidFormatter(entry) {
		return isValidPartialFormatter(entry) && typeof entry.from === "function";
	}
	function isValidPartialFormatter(entry) {
		// partial formatters only need a to function and not a from function
		return typeof entry === "object" && typeof entry.to === "function";
	}
	function removeElement(el) {
		el.parentElement.removeChild(el);
	}
	function isSet(value) {
		return value !== null && value !== undefined;
	}
	// Bindable version
	function preventDefault(e) {
		e.preventDefault();
	}
	// Removes duplicates from an array.
	function unique(array) {
		return array.filter(function (a) {
			return !this[a] ? (this[a] = true) : false;
		}, {});
	}
	// Round a value to the closest 'to'.
	function closest(value, to) {
		return Math.round(value / to) * to;
	}
	// Current position of an element relative to the document.
	function offset(elem, orientation) {
		var rect = elem.getBoundingClientRect();
		var doc = elem.ownerDocument;
		var docElem = doc.documentElement;
		var pageOffset = getPageOffset(doc);
		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
			pageOffset.x = 0;
		}
		return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
	}
	// Checks whether a value is numerical.
	function isNumeric(a) {
		return typeof a === "number" && !isNaN(a) && isFinite(a);
	}
	// Sets a class and removes it after [duration] ms.
	function addClassFor(element, className, duration) {
		if (duration > 0) {
			addClass(element, className);
			setTimeout(function () {
				removeClass(element, className);
			}, duration);
		}
	}
	// Limits a value to 0 - 100
	function limit(a) {
		return Math.max(Math.min(a, 100), 0);
	}
	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray(a) {
		return Array.isArray(a) ? a : [a];
	}
	// Counts decimals
	function countDecimals(numStr) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}
	// http://youmightnotneedjquery.com/#add_class
	function addClass(el, className) {
		if (el.classList && !/\s/.test(className)) {
			el.classList.add(className);
		}
		else {
			el.className += " " + className;
		}
	}
	// http://youmightnotneedjquery.com/#remove_class
	function removeClass(el, className) {
		if (el.classList && !/\s/.test(className)) {
			el.classList.remove(className);
		}
		else {
			el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
		}
	}
	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass(el, className) {
		return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
	}
	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset(doc) {
		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
		var x = supportPageOffset
			? window.pageXOffset
			: isCSS1Compat
				? doc.documentElement.scrollLeft
				: doc.body.scrollLeft;
		var y = supportPageOffset
			? window.pageYOffset
			: isCSS1Compat
				? doc.documentElement.scrollTop
				: doc.body.scrollTop;
		return {
			x: x,
			y: y
		};
	}
	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions() {
		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled
			? {
				start: "pointerdown",
				move: "pointermove",
				end: "pointerup"
			}
			: window.navigator.msPointerEnabled
				? {
					start: "MSPointerDown",
					move: "MSPointerMove",
					end: "MSPointerUp"
				}
				: {
					start: "mousedown touchstart",
					move: "mousemove touchmove",
					end: "mouseup touchend"
				};
	}
	// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	// Issue #785
	function getSupportsPassive() {
		var supportsPassive = false;
		/* eslint-disable */
		try {
			var opts = Object.defineProperty({}, "passive", {
				get: function () {
					supportsPassive = true;
				}
			});
			// @ts-ignore
			window.addEventListener("test", null, opts);
		}
		catch (e) { }
		/* eslint-enable */
		return supportsPassive;
	}
	function getSupportsTouchActionNone() {
		return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
	}
	//endregion
	//region Range Calculation
	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio(pa, pb) {
		return 100 / (pb - pa);
	}
	// (percentage) How many percent is this value of this range?
	function fromPercentage(range, value, startRange) {
		return (value * 100) / (range[startRange + 1] - range[startRange]);
	}
	// (percentage) Where is this value on this range?
	function toPercentage(range, value) {
		return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
	}
	// (value) How much is this percentage on this range?
	function isPercentage(range, value) {
		return (value * (range[1] - range[0])) / 100 + range[0];
	}
	function getJ(value, arr) {
		var j = 1;
		while (value >= arr[j]) {
			j += 1;
		}
		return j;
	}
	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping(xVal, xPct, value) {
		if (value >= xVal.slice(-1)[0]) {
			return 100;
		}
		var j = getJ(value, xVal);
		var va = xVal[j - 1];
		var vb = xVal[j];
		var pa = xPct[j - 1];
		var pb = xPct[j];
		return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
	}
	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping(xVal, xPct, value) {
		// There is no range group that fits 100
		if (value >= 100) {
			return xVal.slice(-1)[0];
		}
		var j = getJ(value, xPct);
		var va = xVal[j - 1];
		var vb = xVal[j];
		var pa = xPct[j - 1];
		var pb = xPct[j];
		return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
	}
	// (percentage) Get the step that applies at a certain value.
	function getStep(xPct, xSteps, snap, value) {
		if (value === 100) {
			return value;
		}
		var j = getJ(value, xPct);
		var a = xPct[j - 1];
		var b = xPct[j];
		// If 'snap' is set, steps are used as fixed points on the slider.
		if (snap) {
			// Find the closest position, a or b.
			if (value - a > (b - a) / 2) {
				return b;
			}
			return a;
		}
		if (!xSteps[j - 1]) {
			return value;
		}
		return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
	}
	//endregion
	//region Spectrum
	var Spectrum = /** @class */ (function () {
		function Spectrum(entry, snap, singleStep) {
			this.xPct = [];
			this.xVal = [];
			this.xSteps = [];
			this.xNumSteps = [];
			this.xHighestCompleteStep = [];
			this.xSteps = [singleStep || false];
			this.xNumSteps = [false];
			this.snap = snap;
			var index;
			var ordered = [];
			// Map the object keys to an array.
			Object.keys(entry).forEach(function (index) {
				ordered.push([asArray(entry[index]), index]);
			});
			// Sort all entries by value (numeric sort).
			ordered.sort(function (a, b) {
				return a[0][0] - b[0][0];
			});
			// Convert all entries to subranges.
			for (index = 0; index < ordered.length; index++) {
				this.handleEntryPoint(ordered[index][1], ordered[index][0]);
			}
			// Store the actual step values.
			// xSteps is sorted in the same order as xPct and xVal.
			this.xNumSteps = this.xSteps.slice(0);
			// Convert all numeric steps to the percentage of the subrange they represent.
			for (index = 0; index < this.xNumSteps.length; index++) {
				this.handleStepPoint(index, this.xNumSteps[index]);
			}
		}
		Spectrum.prototype.getDistance = function (value) {
			var distances = [];
			for (var index = 0; index < this.xNumSteps.length - 1; index++) {
				distances[index] = fromPercentage(this.xVal, value, index);
			}
			return distances;
		};
		// Calculate the percentual distance over the whole scale of ranges.
		// direction: 0 = backwards / 1 = forwards
		Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
			var xPct_index = 0;
			// Calculate range where to start calculation
			if (value < this.xPct[this.xPct.length - 1]) {
				while (value > this.xPct[xPct_index + 1]) {
					xPct_index++;
				}
			}
			else if (value === this.xPct[this.xPct.length - 1]) {
				xPct_index = this.xPct.length - 2;
			}
			// If looking backwards and the value is exactly at a range separator then look one range further
			if (!direction && value === this.xPct[xPct_index + 1]) {
				xPct_index++;
			}
			if (distances === null) {
				distances = [];
			}
			var start_factor;
			var rest_factor = 1;
			var rest_rel_distance = distances[xPct_index];
			var range_pct = 0;
			var rel_range_distance = 0;
			var abs_distance_counter = 0;
			var range_counter = 0;
			// Calculate what part of the start range the value is
			if (direction) {
				start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
			}
			else {
				start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
			}
			// Do until the complete distance across ranges is calculated
			while (rest_rel_distance > 0) {
				// Calculate the percentage of total range
				range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
				// Detect if the margin, padding or limit is larger then the current range and calculate
				if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
					// If larger then take the percentual distance of the whole range
					rel_range_distance = range_pct * start_factor;
					// Rest factor of relative percentual distance still to be calculated
					rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
					// Set start factor to 1 as for next range it does not apply.
					start_factor = 1;
				}
				else {
					// If smaller or equal then take the percentual distance of the calculate percentual part of that range
					rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
					// No rest left as the rest fits in current range
					rest_factor = 0;
				}
				if (direction) {
					abs_distance_counter = abs_distance_counter - rel_range_distance;
					// Limit range to first range when distance becomes outside of minimum range
					if (this.xPct.length + range_counter >= 1) {
						range_counter--;
					}
				}
				else {
					abs_distance_counter = abs_distance_counter + rel_range_distance;
					// Limit range to last range when distance becomes outside of maximum range
					if (this.xPct.length - range_counter >= 1) {
						range_counter++;
					}
				}
				// Rest of relative percentual distance still to be calculated
				rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
			}
			return value + abs_distance_counter;
		};
		Spectrum.prototype.toStepping = function (value) {
			value = toStepping(this.xVal, this.xPct, value);
			return value;
		};
		Spectrum.prototype.fromStepping = function (value) {
			return fromStepping(this.xVal, this.xPct, value);
		};
		Spectrum.prototype.getStep = function (value) {
			value = getStep(this.xPct, this.xSteps, this.snap, value);
			return value;
		};
		Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
			var j = getJ(value, this.xPct);
			// When at the top or stepping down, look at the previous sub-range
			if (value === 100 || (isDown && value === this.xPct[j - 1])) {
				j = Math.max(j - 1, 1);
			}
			return (this.xVal[j] - this.xVal[j - 1]) / size;
		};
		Spectrum.prototype.getNearbySteps = function (value) {
			var j = getJ(value, this.xPct);
			return {
				stepBefore: {
					startValue: this.xVal[j - 2],
					step: this.xNumSteps[j - 2],
					highestStep: this.xHighestCompleteStep[j - 2]
				},
				thisStep: {
					startValue: this.xVal[j - 1],
					step: this.xNumSteps[j - 1],
					highestStep: this.xHighestCompleteStep[j - 1]
				},
				stepAfter: {
					startValue: this.xVal[j],
					step: this.xNumSteps[j],
					highestStep: this.xHighestCompleteStep[j]
				}
			};
		};
		Spectrum.prototype.countStepDecimals = function () {
			var stepDecimals = this.xNumSteps.map(countDecimals);
			return Math.max.apply(null, stepDecimals);
		};
		Spectrum.prototype.hasNoSize = function () {
			return this.xVal[0] === this.xVal[this.xVal.length - 1];
		};
		// Outside testing
		Spectrum.prototype.convert = function (value) {
			return this.getStep(this.toStepping(value));
		};
		Spectrum.prototype.handleEntryPoint = function (index, value) {
			var percentage;
			// Covert min/max syntax to 0 and 100.
			if (index === "min") {
				percentage = 0;
			}
			else if (index === "max") {
				percentage = 100;
			}
			else {
				percentage = parseFloat(index);
			}
			// Check for correct input.
			if (!isNumeric(percentage) || !isNumeric(value[0])) {
				throw new Error("noUiSlider: 'range' value isn't numeric.");
			}
			// Store values.
			this.xPct.push(percentage);
			this.xVal.push(value[0]);
			var value1 = Number(value[1]);
			// NaN will evaluate to false too, but to keep
			// logging clear, set step explicitly. Make sure
			// not to override the 'step' setting with false.
			if (!percentage) {
				if (!isNaN(value1)) {
					this.xSteps[0] = value1;
				}
			}
			else {
				this.xSteps.push(isNaN(value1) ? false : value1);
			}
			this.xHighestCompleteStep.push(0);
		};
		Spectrum.prototype.handleStepPoint = function (i, n) {
			// Ignore 'false' stepping.
			if (!n) {
				return;
			}
			// Step over zero-length ranges (#948);
			if (this.xVal[i] === this.xVal[i + 1]) {
				this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
				return;
			}
			// Factor to range ratio
			this.xSteps[i] =
				fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
			var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
			var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
			var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
			this.xHighestCompleteStep[i] = step;
		};
		return Spectrum;
	}());
	//endregion
	//region Options
	/*	Every input option is tested and parsed. This will prevent
			endless validation in internal methods. These tests are
			structured with an item for every option available. An
			option can be marked as required by setting the 'r' flag.
			The testing function is provided with three arguments:
					- The provided value for the option;
					- A reference to the options object;
					- The name for the option;

			The testing function returns false when an error is detected,
			or true when everything is OK. It can also modify the option
			object, to make sure all values can be correctly looped elsewhere. */
	//region Defaults
	var defaultFormatter = {
		to: function (value) {
			return value === undefined ? "" : value.toFixed(2);
		},
		from: Number
	};
	var cssClasses = {
		target: "target",
		base: "base",
		origin: "origin",
		handle: "handle",
		handleLower: "handle-lower",
		handleUpper: "handle-upper",
		touchArea: "touch-area",
		horizontal: "horizontal",
		vertical: "vertical",
		background: "background",
		connect: "connect",
		connects: "connects",
		ltr: "ltr",
		rtl: "rtl",
		textDirectionLtr: "txt-dir-ltr",
		textDirectionRtl: "txt-dir-rtl",
		draggable: "draggable",
		drag: "state-drag",
		tap: "state-tap",
		active: "active",
		tooltip: "tooltip",
		pips: "pips",
		pipsHorizontal: "pips-horizontal",
		pipsVertical: "pips-vertical",
		marker: "marker",
		markerHorizontal: "marker-horizontal",
		markerVertical: "marker-vertical",
		markerNormal: "marker-normal",
		markerLarge: "marker-large",
		markerSub: "marker-sub",
		value: "value",
		valueHorizontal: "value-horizontal",
		valueVertical: "value-vertical",
		valueNormal: "value-normal",
		valueLarge: "value-large",
		valueSub: "value-sub"
	};
	// Namespaces of internal event listeners
	var INTERNAL_EVENT_NS = {
		tooltips: ".__tooltips",
		aria: ".__aria"
	};
	//endregion
	function testStep(parsed, entry) {
		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'step' is not numeric.");
		}
		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}
	function testKeyboardPageMultiplier(parsed, entry) {
		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
		}
		parsed.keyboardPageMultiplier = entry;
	}
	function testKeyboardMultiplier(parsed, entry) {
		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
		}
		parsed.keyboardMultiplier = entry;
	}
	function testKeyboardDefaultStep(parsed, entry) {
		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
		}
		parsed.keyboardDefaultStep = entry;
	}
	function testRange(parsed, entry) {
		// Filter incorrect input.
		if (typeof entry !== "object" || Array.isArray(entry)) {
			throw new Error("noUiSlider: 'range' is not an object.");
		}
		// Catch missing start or end.
		if (entry.min === undefined || entry.max === undefined) {
			throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
		}
		parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
	}
	function testStart(parsed, entry) {
		entry = asArray(entry);
		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if (!Array.isArray(entry) || !entry.length) {
			throw new Error("noUiSlider: 'start' option is incorrect.");
		}
		// Store the number of handles.
		parsed.handles = entry.length;
		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}
	function testSnap(parsed, entry) {
		if (typeof entry !== "boolean") {
			throw new Error("noUiSlider: 'snap' option must be a boolean.");
		}
		// Enforce 100% stepping within subranges.
		parsed.snap = entry;
	}
	function testAnimate(parsed, entry) {
		if (typeof entry !== "boolean") {
			throw new Error("noUiSlider: 'animate' option must be a boolean.");
		}
		// Enforce 100% stepping within subranges.
		parsed.animate = entry;
	}
	function testAnimationDuration(parsed, entry) {
		if (typeof entry !== "number") {
			throw new Error("noUiSlider: 'animationDuration' option must be a number.");
		}
		parsed.animationDuration = entry;
	}
	function testConnect(parsed, entry) {
		var connect = [false];
		var i;
		// Map legacy options
		if (entry === "lower") {
			entry = [true, false];
		}
		else if (entry === "upper") {
			entry = [false, true];
		}
		// Handle boolean options
		if (entry === true || entry === false) {
			for (i = 1; i < parsed.handles; i++) {
				connect.push(entry);
			}
			connect.push(false);
		}
		// Reject invalid input
		else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
			throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
		}
		else {
			connect = entry;
		}
		parsed.connect = connect;
	}
	function testOrientation(parsed, entry) {
		// Set orientation to an a numerical value for easy
		// array selection.
		switch (entry) {
			case "horizontal":
				parsed.ort = 0;
				break;
			case "vertical":
				parsed.ort = 1;
				break;
			default:
				throw new Error("noUiSlider: 'orientation' option is invalid.");
		}
	}
	function testMargin(parsed, entry) {
		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'margin' option must be numeric.");
		}
		// Issue #582
		if (entry === 0) {
			return;
		}
		parsed.margin = parsed.spectrum.getDistance(entry);
	}
	function testLimit(parsed, entry) {
		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'limit' option must be numeric.");
		}
		parsed.limit = parsed.spectrum.getDistance(entry);
		if (!parsed.limit || parsed.handles < 2) {
			throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}
	function testPadding(parsed, entry) {
		var index;
		if (!isNumeric(entry) && !Array.isArray(entry)) {
			throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
		}
		if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
			throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
		}
		if (entry === 0) {
			return;
		}
		if (!Array.isArray(entry)) {
			entry = [entry, entry];
		}
		// 'getDistance' returns false for invalid values.
		parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
		for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
			// last "range" can't contain step size as it is purely an endpoint.
			if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
				throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
			}
		}
		var totalPadding = entry[0] + entry[1];
		var firstValue = parsed.spectrum.xVal[0];
		var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
		if (totalPadding / (lastValue - firstValue) > 1) {
			throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
		}
	}
	function testDirection(parsed, entry) {
		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch (entry) {
			case "ltr":
				parsed.dir = 0;
				break;
			case "rtl":
				parsed.dir = 1;
				break;
			default:
				throw new Error("noUiSlider: 'direction' option was not recognized.");
		}
	}
	function testBehaviour(parsed, entry) {
		// Make sure the input is a string.
		if (typeof entry !== "string") {
			throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
		}
		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf("tap") >= 0;
		var drag = entry.indexOf("drag") >= 0;
		var fixed = entry.indexOf("fixed") >= 0;
		var snap = entry.indexOf("snap") >= 0;
		var hover = entry.indexOf("hover") >= 0;
		var unconstrained = entry.indexOf("unconstrained") >= 0;
		var dragAll = entry.indexOf("drag-all") >= 0;
		if (fixed) {
			if (parsed.handles !== 2) {
				throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
			}
			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}
		if (unconstrained && (parsed.margin || parsed.limit)) {
			throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
		}
		parsed.events = {
			tap: tap || snap,
			drag: drag,
			dragAll: dragAll,
			fixed: fixed,
			snap: snap,
			hover: hover,
			unconstrained: unconstrained
		};
	}
	function testTooltips(parsed, entry) {
		if (entry === false) {
			return;
		}
		if (entry === true || isValidPartialFormatter(entry)) {
			parsed.tooltips = [];
			for (var i = 0; i < parsed.handles; i++) {
				parsed.tooltips.push(entry);
			}
		}
		else {
			entry = asArray(entry);
			if (entry.length !== parsed.handles) {
				throw new Error("noUiSlider: must pass a formatter for all handles.");
			}
			entry.forEach(function (formatter) {
				if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
					throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
				}
			});
			parsed.tooltips = entry;
		}
	}
	function testHandleAttributes(parsed, entry) {
		if (entry.length !== parsed.handles) {
			throw new Error("noUiSlider: must pass a attributes for all handles.");
		}
		parsed.handleAttributes = entry;
	}
	function testAriaFormat(parsed, entry) {
		if (!isValidPartialFormatter(entry)) {
			throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
		}
		parsed.ariaFormat = entry;
	}
	function testFormat(parsed, entry) {
		if (!isValidFormatter(entry)) {
			throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
		}
		parsed.format = entry;
	}
	function testKeyboardSupport(parsed, entry) {
		if (typeof entry !== "boolean") {
			throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
		}
		parsed.keyboardSupport = entry;
	}
	function testDocumentElement(parsed, entry) {
		// This is an advanced option. Passed values are used without validation.
		parsed.documentElement = entry;
	}
	function testCssPrefix(parsed, entry) {
		if (typeof entry !== "string" && entry !== false) {
			throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
		}
		parsed.cssPrefix = entry;
	}
	function testCssClasses(parsed, entry) {
		if (typeof entry !== "object") {
			throw new Error("noUiSlider: 'cssClasses' must be an object.");
		}
		if (typeof parsed.cssPrefix === "string") {
			parsed.cssClasses = {};
			Object.keys(entry).forEach(function (key) {
				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			});
		}
		else {
			parsed.cssClasses = entry;
		}
	}
	// Test all developer settings and parse to assumption-safe values.
	function testOptions(options) {
		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);
		var parsed = {
			margin: null,
			limit: null,
			padding: null,
			animate: true,
			animationDuration: 300,
			ariaFormat: defaultFormatter,
			format: defaultFormatter
		};
		// Tests are executed in the order they are presented here.
		var tests = {
			step: { r: false, t: testStep },
			keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
			keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
			keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
			start: { r: true, t: testStart },
			connect: { r: true, t: testConnect },
			direction: { r: true, t: testDirection },
			snap: { r: false, t: testSnap },
			animate: { r: false, t: testAnimate },
			animationDuration: { r: false, t: testAnimationDuration },
			range: { r: true, t: testRange },
			orientation: { r: false, t: testOrientation },
			margin: { r: false, t: testMargin },
			limit: { r: false, t: testLimit },
			padding: { r: false, t: testPadding },
			behaviour: { r: true, t: testBehaviour },
			ariaFormat: { r: false, t: testAriaFormat },
			format: { r: false, t: testFormat },
			tooltips: { r: false, t: testTooltips },
			keyboardSupport: { r: true, t: testKeyboardSupport },
			documentElement: { r: false, t: testDocumentElement },
			cssPrefix: { r: true, t: testCssPrefix },
			cssClasses: { r: true, t: testCssClasses },
			handleAttributes: { r: false, t: testHandleAttributes }
		};
		var defaults = {
			connect: false,
			direction: "ltr",
			behaviour: "tap",
			orientation: "horizontal",
			keyboardSupport: true,
			cssPrefix: "noUi-",
			cssClasses: cssClasses,
			keyboardPageMultiplier: 5,
			keyboardMultiplier: 1,
			keyboardDefaultStep: 10
		};
		// AriaFormat defaults to regular format, if any.
		if (options.format && !options.ariaFormat) {
			options.ariaFormat = options.format;
		}
		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function (name) {
			// If the option isn't set, but it is required, throw an error.
			if (!isSet(options[name]) && defaults[name] === undefined) {
				if (tests[name].r) {
					throw new Error("noUiSlider: '" + name + "' is required.");
				}
				return;
			}
			tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
		});
		// Forward pips options
		parsed.pips = options.pips;
		// All recent browsers accept unprefixed transform.
		// We need -ms- for IE9 and -webkit- for older Android;
		// Assume use of -webkit- if unprefixed and -ms- are not supported.
		// https://caniuse.com/#feat=transforms2d
		var d = document.createElement("div");
		var msPrefix = d.style.msTransform !== undefined;
		var noPrefix = d.style.transform !== undefined;
		parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
		// Pips don't move, so we can place them using left/top.
		var styles = [
			["left", "top"],
			["right", "bottom"]
		];
		parsed.style = styles[parsed.dir][parsed.ort];
		return parsed;
	}
	//endregion
	function scope(target, options, originalOptions) {
		var actions = getActions();
		var supportsTouchActionNone = getSupportsTouchActionNone();
		var supportsPassive = supportsTouchActionNone && getSupportsPassive();
		// All variables local to 'scope' are prefixed with 'scope_'
		// Slider DOM Nodes
		var scope_Target = target;
		var scope_Base;
		var scope_Handles;
		var scope_Connects;
		var scope_Pips;
		var scope_Tooltips;
		// Slider state values
		var scope_Spectrum = options.spectrum;
		var scope_Values = [];
		var scope_Locations = [];
		var scope_HandleNumbers = [];
		var scope_ActiveHandlesCount = 0;
		var scope_Events = {};
		// Document Nodes
		var scope_Document = target.ownerDocument;
		var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
		var scope_Body = scope_Document.body;
		// For horizontal sliders in standard ltr documents,
		// make .noUi-origin overflow to the left so the document doesn't scroll.
		var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
		// Creates a node, adds it to target, returns the new node.
		function addNodeTo(addTarget, className) {
			var div = scope_Document.createElement("div");
			if (className) {
				addClass(div, className);
			}
			addTarget.appendChild(div);
			return div;
		}
		// Append a origin to the base
		function addOrigin(base, handleNumber) {
			var origin = addNodeTo(base, options.cssClasses.origin);
			var handle = addNodeTo(origin, options.cssClasses.handle);
			addNodeTo(handle, options.cssClasses.touchArea);
			handle.setAttribute("data-handle", String(handleNumber));
			if (options.keyboardSupport) {
				// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
				// 0 = focusable and reachable
				handle.setAttribute("tabindex", "0");
				handle.addEventListener("keydown", function (event) {
					return eventKeydown(event, handleNumber);
				});
			}
			if (options.handleAttributes !== undefined) {
				var attributes_1 = options.handleAttributes[handleNumber];
				Object.keys(attributes_1).forEach(function (attribute) {
					handle.setAttribute(attribute, attributes_1[attribute]);
				});
			}
			handle.setAttribute("role", "slider");
			handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
			if (handleNumber === 0) {
				addClass(handle, options.cssClasses.handleLower);
			}
			else if (handleNumber === options.handles - 1) {
				addClass(handle, options.cssClasses.handleUpper);
			}
			return origin;
		}
		// Insert nodes for connect elements
		function addConnect(base, add) {
			if (!add) {
				return false;
			}
			return addNodeTo(base, options.cssClasses.connect);
		}
		// Add handles to the slider base.
		function addElements(connectOptions, base) {
			var connectBase = addNodeTo(base, options.cssClasses.connects);
			scope_Handles = [];
			scope_Connects = [];
			scope_Connects.push(addConnect(connectBase, connectOptions[0]));
			// [::::O====O====O====]
			// connectOptions = [0, 1, 1, 1]
			for (var i = 0; i < options.handles; i++) {
				// Keep a list of all added handles.
				scope_Handles.push(addOrigin(base, i));
				scope_HandleNumbers[i] = i;
				scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
			}
		}
		// Initialize a single slider.
		function addSlider(addTarget) {
			// Apply classes and data to the target.
			addClass(addTarget, options.cssClasses.target);
			if (options.dir === 0) {
				addClass(addTarget, options.cssClasses.ltr);
			}
			else {
				addClass(addTarget, options.cssClasses.rtl);
			}
			if (options.ort === 0) {
				addClass(addTarget, options.cssClasses.horizontal);
			}
			else {
				addClass(addTarget, options.cssClasses.vertical);
			}
			var textDirection = getComputedStyle(addTarget).direction;
			if (textDirection === "rtl") {
				addClass(addTarget, options.cssClasses.textDirectionRtl);
			}
			else {
				addClass(addTarget, options.cssClasses.textDirectionLtr);
			}
			return addNodeTo(addTarget, options.cssClasses.base);
		}
		function addTooltip(handle, handleNumber) {
			if (!options.tooltips || !options.tooltips[handleNumber]) {
				return false;
			}
			return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
		}
		function isSliderDisabled() {
			return scope_Target.hasAttribute("disabled");
		}
		// Disable the slider dragging if any handle is disabled
		function isHandleDisabled(handleNumber) {
			var handleOrigin = scope_Handles[handleNumber];
			return handleOrigin.hasAttribute("disabled");
		}
		function removeTooltips() {
			if (scope_Tooltips) {
				removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
				scope_Tooltips.forEach(function (tooltip) {
					if (tooltip) {
						removeElement(tooltip);
					}
				});
				scope_Tooltips = null;
			}
		}
		// The tooltips option is a shorthand for using the 'update' event.
		function tooltips() {
			removeTooltips();
			// Tooltips are added with options.tooltips in original order.
			scope_Tooltips = scope_Handles.map(addTooltip);
			bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
				if (!scope_Tooltips || !options.tooltips) {
					return;
				}
				if (scope_Tooltips[handleNumber] === false) {
					return;
				}
				var formattedValue = values[handleNumber];
				if (options.tooltips[handleNumber] !== true) {
					formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
				}
				scope_Tooltips[handleNumber].innerHTML = formattedValue;
			});
		}
		function aria() {
			removeEvent("update" + INTERNAL_EVENT_NS.aria);
			bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
				// Update Aria Values for all handles, as a change in one changes min and max values for the next.
				scope_HandleNumbers.forEach(function (index) {
					var handle = scope_Handles[index];
					var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
					var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
					var now = positions[index];
					// Formatted value for display
					var text = String(options.ariaFormat.to(unencoded[index]));
					// Map to slider range values
					min = scope_Spectrum.fromStepping(min).toFixed(1);
					max = scope_Spectrum.fromStepping(max).toFixed(1);
					now = scope_Spectrum.fromStepping(now).toFixed(1);
					handle.children[0].setAttribute("aria-valuemin", min);
					handle.children[0].setAttribute("aria-valuemax", max);
					handle.children[0].setAttribute("aria-valuenow", now);
					handle.children[0].setAttribute("aria-valuetext", text);
				});
			});
		}
		function getGroup(pips) {
			// Use the range.
			if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
				return scope_Spectrum.xVal;
			}
			if (pips.mode === exports.PipsMode.Count) {
				if (pips.values < 2) {
					throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
				}
				// Divide 0 - 100 in 'count' parts.
				var interval = pips.values - 1;
				var spread = 100 / interval;
				var values = [];
				// List these parts and have them handled as 'positions'.
				while (interval--) {
					values[interval] = interval * spread;
				}
				values.push(100);
				return mapToRange(values, pips.stepped);
			}
			if (pips.mode === exports.PipsMode.Positions) {
				// Map all percentages to on-range values.
				return mapToRange(pips.values, pips.stepped);
			}
			if (pips.mode === exports.PipsMode.Values) {
				// If the value must be stepped, it needs to be converted to a percentage first.
				if (pips.stepped) {
					return pips.values.map(function (value) {
						// Convert to percentage, apply step, return to value.
						return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
					});
				}
				// Otherwise, we can simply use the values.
				return pips.values;
			}
			return []; // pips.mode = never
		}
		function mapToRange(values, stepped) {
			return values.map(function (value) {
				return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
			});
		}
		function generateSpread(pips) {
			function safeIncrement(value, increment) {
				// Avoid floating point variance by dropping the smallest decimal places.
				return Number((value + increment).toFixed(7));
			}
			var group = getGroup(pips);
			var indexes = {};
			var firstInRange = scope_Spectrum.xVal[0];
			var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
			var ignoreFirst = false;
			var ignoreLast = false;
			var prevPct = 0;
			// Create a copy of the group, sort it and filter away all duplicates.
			group = unique(group.slice().sort(function (a, b) {
				return a - b;
			}));
			// Make sure the range starts with the first element.
			if (group[0] !== firstInRange) {
				group.unshift(firstInRange);
				ignoreFirst = true;
			}
			// Likewise for the last one.
			if (group[group.length - 1] !== lastInRange) {
				group.push(lastInRange);
				ignoreLast = true;
			}
			group.forEach(function (current, index) {
				// Get the current step and the lower + upper positions.
				var step;
				var i;
				var q;
				var low = current;
				var high = group[index + 1];
				var newPct;
				var pctDifference;
				var pctPos;
				var type;
				var steps;
				var realSteps;
				var stepSize;
				var isSteps = pips.mode === exports.PipsMode.Steps;
				// When using 'steps' mode, use the provided steps.
				// Otherwise, we'll step on to the next subrange.
				if (isSteps) {
					step = scope_Spectrum.xNumSteps[index];
				}
				// Default to a 'full' step.
				if (!step) {
					step = high - low;
				}
				// If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
				if (high === undefined) {
					high = low;
				}
				// Make sure step isn't 0, which would cause an infinite loop (#654)
				step = Math.max(step, 0.0000001);
				// Find all steps in the subrange.
				for (i = low; i <= high; i = safeIncrement(i, step)) {
					// Get the percentage value for the current step,
					// calculate the size for the subrange.
					newPct = scope_Spectrum.toStepping(i);
					pctDifference = newPct - prevPct;
					steps = pctDifference / (pips.density || 1);
					realSteps = Math.round(steps);
					// This ratio represents the amount of percentage-space a point indicates.
					// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
					// Round the percentage offset to an even number, then divide by two
					// to spread the offset on both sides of the range.
					stepSize = pctDifference / realSteps;
					// Divide all points evenly, adding the correct number to this subrange.
					// Run up to <= so that 100% gets a point, event if ignoreLast is set.
					for (q = 1; q <= realSteps; q += 1) {
						// The ratio between the rounded value and the actual size might be ~1% off.
						// Correct the percentage offset by the number of points
						// per subrange. density = 1 will result in 100 points on the
						// full range, 2 for 50, 4 for 25, etc.
						pctPos = prevPct + q * stepSize;
						indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
					}
					// Determine the point type.
					type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
					// Enforce the 'ignoreFirst' option by overwriting the type for 0.
					if (!index && ignoreFirst && i !== high) {
						type = 0;
					}
					if (!(i === high && ignoreLast)) {
						// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
						indexes[newPct.toFixed(5)] = [i, type];
					}
					// Update the percentage count.
					prevPct = newPct;
				}
			});
			return indexes;
		}
		function addMarking(spread, filterFunc, formatter) {
			var _a, _b;
			var element = scope_Document.createElement("div");
			var valueSizeClasses = (_a = {},
				_a[exports.PipsType.None] = "",
				_a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
				_a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
				_a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
				_a);
			var markerSizeClasses = (_b = {},
				_b[exports.PipsType.None] = "",
				_b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
				_b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
				_b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
				_b);
			var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
			var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
			addClass(element, options.cssClasses.pips);
			addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
			function getClasses(type, source) {
				var a = source === options.cssClasses.value;
				var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
				var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
				return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
			}
			function addSpread(offset, value, type) {
				// Apply the filter function, if it is set.
				type = filterFunc ? filterFunc(value, type) : type;
				if (type === exports.PipsType.None) {
					return;
				}
				// Add a marker for every point
				var node = addNodeTo(element, false);
				node.className = getClasses(type, options.cssClasses.marker);
				node.style[options.style] = offset + "%";
				// Values are only appended for points marked '1' or '2'.
				if (type > exports.PipsType.NoValue) {
					node = addNodeTo(element, false);
					node.className = getClasses(type, options.cssClasses.value);
					node.setAttribute("data-value", String(value));
					node.style[options.style] = offset + "%";
					node.innerHTML = String(formatter.to(value));
				}
			}
			// Append all points.
			Object.keys(spread).forEach(function (offset) {
				addSpread(offset, spread[offset][0], spread[offset][1]);
			});
			return element;
		}
		function removePips() {
			if (scope_Pips) {
				removeElement(scope_Pips);
				scope_Pips = null;
			}
		}
		function pips(pips) {
			// Fix #669
			removePips();
			var spread = generateSpread(pips);
			var filter = pips.filter;
			var format = pips.format || {
				to: function (value) {
					return String(Math.round(value));
				}
			};
			scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
			return scope_Pips;
		}
		// Shorthand for base dimensions.
		function baseSize() {
			var rect = scope_Base.getBoundingClientRect();
			var alt = ("offset" + ["Width", "Height"][options.ort]);
			return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
		}
		// Handler for attaching events trough a proxy.
		function attachEvent(events, element, callback, data) {
			// This function can be used to 'filter' events to the slider.
			// element is a node, not a nodeList
			var method = function (event) {
				var e = fixEvent(event, data.pageOffset, data.target || element);
				// fixEvent returns false if this event has a different target
				// when handling (multi-) touch events;
				if (!e) {
					return false;
				}
				// doNotReject is passed by all end events to make sure released touches
				// are not rejected, leaving the slider "stuck" to the cursor;
				if (isSliderDisabled() && !data.doNotReject) {
					return false;
				}
				// Stop if an active 'tap' transition is taking place.
				if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
					return false;
				}
				// Ignore right or middle clicks on start #454
				if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
					return false;
				}
				// Ignore right or middle clicks on start #454
				if (data.hover && e.buttons) {
					return false;
				}
				// 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
				// iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
				// touch-action: manipulation, but that allows panning, which breaks
				// sliders after zooming/on non-responsive pages.
				// See: https://bugs.webkit.org/show_bug.cgi?id=133112
				if (!supportsPassive) {
					e.preventDefault();
				}
				e.calcPoint = e.points[options.ort];
				// Call the event handler with the event [ and additional data ].
				callback(e, data);
				return;
			};
			var methods = [];
			// Bind a closure on the target for every event type.
			events.split(" ").forEach(function (eventName) {
				element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
				methods.push([eventName, method]);
			});
			return methods;
		}
		// Provide a clean event with standardized offset values.
		function fixEvent(e, pageOffset, eventTarget) {
			// Filter the event to register the type, which can be
			// touch, mouse or pointer. Offset changes need to be
			// made on an event specific basis.
			var touch = e.type.indexOf("touch") === 0;
			var mouse = e.type.indexOf("mouse") === 0;
			var pointer = e.type.indexOf("pointer") === 0;
			var x = 0;
			var y = 0;
			// IE10 implemented pointer events with a prefix;
			if (e.type.indexOf("MSPointer") === 0) {
				pointer = true;
			}
			// Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
			// the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
			// events that have no touches or buttons associated with them. (#1057, #1079, #1095)
			if (e.type === "mousedown" && !e.buttons && !e.touches) {
				return false;
			}
			// The only thing one handle should be concerned about is the touches that originated on top of it.
			if (touch) {
				// Returns true if a touch originated on the target.
				var isTouchOnTarget = function (checkTouch) {
					var target = checkTouch.target;
					return (target === eventTarget ||
						eventTarget.contains(target) ||
						(e.composed && e.composedPath().shift() === eventTarget));
				};
				// In the case of touchstart events, we need to make sure there is still no more than one
				// touch on the target so we look amongst all touches.
				if (e.type === "touchstart") {
					var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
					// Do not support more than one touch per handle.
					if (targetTouches.length > 1) {
						return false;
					}
					x = targetTouches[0].pageX;
					y = targetTouches[0].pageY;
				}
				else {
					// In the other cases, find on changedTouches is enough.
					var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
					// Cancel if the target touch has not moved.
					if (!targetTouch) {
						return false;
					}
					x = targetTouch.pageX;
					y = targetTouch.pageY;
				}
			}
			pageOffset = pageOffset || getPageOffset(scope_Document);
			if (mouse || pointer) {
				x = e.clientX + pageOffset.x;
				y = e.clientY + pageOffset.y;
			}
			e.pageOffset = pageOffset;
			e.points = [x, y];
			e.cursor = mouse || pointer; // Fix #435
			return e;
		}
		// Translate a coordinate in the document to a percentage on the slider
		function calcPointToPercentage(calcPoint) {
			var location = calcPoint - offset(scope_Base, options.ort);
			var proposal = (location * 100) / baseSize();
			// Clamp proposal between 0% and 100%
			// Out-of-bound coordinates may occur when .noUi-base pseudo-elements
			// are used (e.g. contained handles feature)
			proposal = limit(proposal);
			return options.dir ? 100 - proposal : proposal;
		}
		// Find handle closest to a certain percentage on the slider
		function getClosestHandle(clickedPosition) {
			var smallestDifference = 100;
			var handleNumber = false;
			scope_Handles.forEach(function (handle, index) {
				// Disabled handles are ignored
				if (isHandleDisabled(index)) {
					return;
				}
				var handlePosition = scope_Locations[index];
				var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
				// Initial state
				var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
				// Difference with this handle is smaller than the previously checked handle
				var isCloser = differenceWithThisHandle < smallestDifference;
				var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
				if (isCloser || isCloserAfter || clickAtEdge) {
					handleNumber = index;
					smallestDifference = differenceWithThisHandle;
				}
			});
			return handleNumber;
		}
		// Fire 'end' when a mouse or pen leaves the document.
		function documentLeave(event, data) {
			if (event.type === "mouseout" &&
				event.target.nodeName === "HTML" &&
				event.relatedTarget === null) {
				eventEnd(event, data);
			}
		}
		// Handle movement on document for handle and range drag.
		function eventMove(event, data) {
			// Fix #498
			// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
			// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
			// IE9 has .buttons and .which zero on mousemove.
			// Firefox breaks the spec MDN defines.
			if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
				return eventEnd(event, data);
			}
			// Check if we are moving up or down
			var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
			// Convert the movement into a percentage of the slider width/height
			var proposal = (movement * 100) / data.baseSize;
			moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
		}
		// Unbind move events on document, call callbacks.
		function eventEnd(event, data) {
			// The handle is no longer active, so remove the class.
			if (data.handle) {
				removeClass(data.handle, options.cssClasses.active);
				scope_ActiveHandlesCount -= 1;
			}
			// Unbind the move and end events, which are added on 'start'.
			data.listeners.forEach(function (c) {
				scope_DocumentElement.removeEventListener(c[0], c[1]);
			});
			if (scope_ActiveHandlesCount === 0) {
				// Remove dragging class.
				removeClass(scope_Target, options.cssClasses.drag);
				setZindex();
				// Remove cursor styles and text-selection events bound to the body.
				if (event.cursor) {
					scope_Body.style.cursor = "";
					scope_Body.removeEventListener("selectstart", preventDefault);
				}
			}
			data.handleNumbers.forEach(function (handleNumber) {
				fireEvent("change", handleNumber);
				fireEvent("set", handleNumber);
				fireEvent("end", handleNumber);
			});
		}
		// Bind move events on document.
		function eventStart(event, data) {
			// Ignore event if any handle is disabled
			if (data.handleNumbers.some(isHandleDisabled)) {
				return;
			}
			var handle;
			if (data.handleNumbers.length === 1) {
				var handleOrigin = scope_Handles[data.handleNumbers[0]];
				handle = handleOrigin.children[0];
				scope_ActiveHandlesCount += 1;
				// Mark the handle as 'active' so it can be styled.
				addClass(handle, options.cssClasses.active);
			}
			// A drag should never propagate up to the 'tap' event.
			event.stopPropagation();
			// Record the event listeners.
			var listeners = [];
			// Attach the move and end events.
			var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
				// The event target has changed so we need to propagate the original one so that we keep
				// relying on it to extract target touches.
				target: event.target,
				handle: handle,
				connect: data.connect,
				listeners: listeners,
				startCalcPoint: event.calcPoint,
				baseSize: baseSize(),
				pageOffset: event.pageOffset,
				handleNumbers: data.handleNumbers,
				buttonsProperty: event.buttons,
				locations: scope_Locations.slice()
			});
			var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
				target: event.target,
				handle: handle,
				listeners: listeners,
				doNotReject: true,
				handleNumbers: data.handleNumbers
			});
			var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
				target: event.target,
				handle: handle,
				listeners: listeners,
				doNotReject: true,
				handleNumbers: data.handleNumbers
			});
			// We want to make sure we pushed the listeners in the listener list rather than creating
			// a new one as it has already been passed to the event handlers.
			listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
			// Text selection isn't an issue on touch devices,
			// so adding cursor styles can be skipped.
			if (event.cursor) {
				// Prevent the 'I' cursor and extend the range-drag cursor.
				scope_Body.style.cursor = getComputedStyle(event.target).cursor;
				// Mark the target with a dragging state.
				if (scope_Handles.length > 1) {
					addClass(scope_Target, options.cssClasses.drag);
				}
				// Prevent text selection when dragging the handles.
				// In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
				// which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
				// meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
				// The 'cursor' flag is false.
				// See: http://caniuse.com/#search=selectstart
				scope_Body.addEventListener("selectstart", preventDefault, false);
			}
			data.handleNumbers.forEach(function (handleNumber) {
				fireEvent("start", handleNumber);
			});
		}
		// Move closest handle to tapped location.
		function eventTap(event) {
			// The tap event shouldn't propagate up
			event.stopPropagation();
			var proposal = calcPointToPercentage(event.calcPoint);
			var handleNumber = getClosestHandle(proposal);
			// Tackle the case that all handles are 'disabled'.
			if (handleNumber === false) {
				return;
			}
			// Flag the slider as it is now in a transitional state.
			// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
			if (!options.events.snap) {
				addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
			}
			setHandle(handleNumber, proposal, true, true);
			setZindex();
			fireEvent("slide", handleNumber, true);
			fireEvent("update", handleNumber, true);
			if (!options.events.snap) {
				fireEvent("change", handleNumber, true);
				fireEvent("set", handleNumber, true);
			}
			else {
				eventStart(event, { handleNumbers: [handleNumber] });
			}
		}
		// Fires a 'hover' event for a hovered mouse/pen position.
		function eventHover(event) {
			var proposal = calcPointToPercentage(event.calcPoint);
			var to = scope_Spectrum.getStep(proposal);
			var value = scope_Spectrum.fromStepping(to);
			Object.keys(scope_Events).forEach(function (targetEvent) {
				if ("hover" === targetEvent.split(".")[0]) {
					scope_Events[targetEvent].forEach(function (callback) {
						callback.call(scope_Self, value);
					});
				}
			});
		}
		// Handles keydown on focused handles
		// Don't move the document when pressing arrow keys on focused handles
		function eventKeydown(event, handleNumber) {
			if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
				return false;
			}
			var horizontalKeys = ["Left", "Right"];
			var verticalKeys = ["Down", "Up"];
			var largeStepKeys = ["PageDown", "PageUp"];
			var edgeKeys = ["Home", "End"];
			if (options.dir && !options.ort) {
				// On an right-to-left slider, the left and right keys act inverted
				horizontalKeys.reverse();
			}
			else if (options.ort && !options.dir) {
				// On a top-to-bottom slider, the up and down keys act inverted
				verticalKeys.reverse();
				largeStepKeys.reverse();
			}
			// Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
			var key = event.key.replace("Arrow", "");
			var isLargeDown = key === largeStepKeys[0];
			var isLargeUp = key === largeStepKeys[1];
			var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
			var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
			var isMin = key === edgeKeys[0];
			var isMax = key === edgeKeys[1];
			if (!isDown && !isUp && !isMin && !isMax) {
				return true;
			}
			event.preventDefault();
			var to;
			if (isUp || isDown) {
				var direction = isDown ? 0 : 1;
				var steps = getNextStepsForHandle(handleNumber);
				var step = steps[direction];
				// At the edge of a slider, do nothing
				if (step === null) {
					return false;
				}
				// No step set, use the default of 10% of the sub-range
				if (step === false) {
					step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
				}
				if (isLargeUp || isLargeDown) {
					step *= options.keyboardPageMultiplier;
				}
				else {
					step *= options.keyboardMultiplier;
				}
				// Step over zero-length ranges (#948);
				step = Math.max(step, 0.0000001);
				// Decrement for down steps
				step = (isDown ? -1 : 1) * step;
				to = scope_Values[handleNumber] + step;
			}
			else if (isMax) {
				// End key
				to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
			}
			else {
				// Home key
				to = options.spectrum.xVal[0];
			}
			setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
			fireEvent("slide", handleNumber);
			fireEvent("update", handleNumber);
			fireEvent("change", handleNumber);
			fireEvent("set", handleNumber);
			return false;
		}
		// Attach events to several slider parts.
		function bindSliderEvents(behaviour) {
			// Attach the standard drag event to the handles.
			if (!behaviour.fixed) {
				scope_Handles.forEach(function (handle, index) {
					// These events are only bound to the visual handle
					// element, not the 'real' origin element.
					attachEvent(actions.start, handle.children[0], eventStart, {
						handleNumbers: [index]
					});
				});
			}
			// Attach the tap event to the slider base.
			if (behaviour.tap) {
				attachEvent(actions.start, scope_Base, eventTap, {});
			}
			// Fire hover events
			if (behaviour.hover) {
				attachEvent(actions.move, scope_Base, eventHover, {
					hover: true
				});
			}
			// Make the range draggable.
			if (behaviour.drag) {
				scope_Connects.forEach(function (connect, index) {
					if (connect === false || index === 0 || index === scope_Connects.length - 1) {
						return;
					}
					var handleBefore = scope_Handles[index - 1];
					var handleAfter = scope_Handles[index];
					var eventHolders = [connect];
					var handlesToDrag = [handleBefore, handleAfter];
					var handleNumbersToDrag = [index - 1, index];
					addClass(connect, options.cssClasses.draggable);
					// When the range is fixed, the entire range can
					// be dragged by the handles. The handle in the first
					// origin will propagate the start event upward,
					// but it needs to be bound manually on the other.
					if (behaviour.fixed) {
						eventHolders.push(handleBefore.children[0]);
						eventHolders.push(handleAfter.children[0]);
					}
					if (behaviour.dragAll) {
						handlesToDrag = scope_Handles;
						handleNumbersToDrag = scope_HandleNumbers;
					}
					eventHolders.forEach(function (eventHolder) {
						attachEvent(actions.start, eventHolder, eventStart, {
							handles: handlesToDrag,
							handleNumbers: handleNumbersToDrag,
							connect: connect
						});
					});
				});
			}
		}
		// Attach an event to this slider, possibly including a namespace
		function bindEvent(namespacedEvent, callback) {
			scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
			scope_Events[namespacedEvent].push(callback);
			// If the event bound is 'update,' fire it immediately for all handles.
			if (namespacedEvent.split(".")[0] === "update") {
				scope_Handles.forEach(function (a, index) {
					fireEvent("update", index);
				});
			}
		}
		function isInternalNamespace(namespace) {
			return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
		}
		// Undo attachment of event
		function removeEvent(namespacedEvent) {
			var event = namespacedEvent && namespacedEvent.split(".")[0];
			var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
			Object.keys(scope_Events).forEach(function (bind) {
				var tEvent = bind.split(".")[0];
				var tNamespace = bind.substring(tEvent.length);
				if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
					// only delete protected internal event if intentional
					if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
						delete scope_Events[bind];
					}
				}
			});
		}
		// External event handling
		function fireEvent(eventName, handleNumber, tap) {
			Object.keys(scope_Events).forEach(function (targetEvent) {
				var eventType = targetEvent.split(".")[0];
				if (eventName === eventType) {
					scope_Events[targetEvent].forEach(function (callback) {
						callback.call(
							// Use the slider public API as the scope ('this')
							scope_Self,
							// Return values as array, so arg_1[arg_2] is always valid.
							scope_Values.map(options.format.to),
							// Handle index, 0 or 1
							handleNumber,
							// Un-formatted slider values
							scope_Values.slice(),
							// Event is fired by tap, true or false
							tap || false,
							// Left offset of the handle, in relation to the slider
							scope_Locations.slice(),
							// add the slider public API to an accessible parameter when this is unavailable
							scope_Self);
					});
				}
			});
		}
		// Split out the handle positioning logic so the Move event can use it, too
		function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
			var distance;
			// For sliders with multiple handles, limit movement to the other handle.
			// Apply the margin option by adding it to the handle positions.
			if (scope_Handles.length > 1 && !options.events.unconstrained) {
				if (lookBackward && handleNumber > 0) {
					distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
					to = Math.max(to, distance);
				}
				if (lookForward && handleNumber < scope_Handles.length - 1) {
					distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
					to = Math.min(to, distance);
				}
			}
			// The limit option has the opposite effect, limiting handles to a
			// maximum distance from another. Limit must be > 0, as otherwise
			// handles would be unmovable.
			if (scope_Handles.length > 1 && options.limit) {
				if (lookBackward && handleNumber > 0) {
					distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
					to = Math.min(to, distance);
				}
				if (lookForward && handleNumber < scope_Handles.length - 1) {
					distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
					to = Math.max(to, distance);
				}
			}
			// The padding option keeps the handles a certain distance from the
			// edges of the slider. Padding must be > 0.
			if (options.padding) {
				if (handleNumber === 0) {
					distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
					to = Math.max(to, distance);
				}
				if (handleNumber === scope_Handles.length - 1) {
					distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
					to = Math.min(to, distance);
				}
			}
			to = scope_Spectrum.getStep(to);
			// Limit percentage to the 0 - 100 range
			to = limit(to);
			// Return false if handle can't move
			if (to === reference[handleNumber] && !getValue) {
				return false;
			}
			return to;
		}
		// Uses slider orientation to create CSS rules. a = base value;
		function inRuleOrder(v, a) {
			var o = options.ort;
			return (o ? a : v) + ", " + (o ? v : a);
		}
		// Moves handle(s) by a percentage
		// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
		function moveHandles(upward, proposal, locations, handleNumbers, connect) {
			var proposals = locations.slice();
			// Store first handle now, so we still have it in case handleNumbers is reversed
			var firstHandle = handleNumbers[0];
			var b = [!upward, upward];
			var f = [upward, !upward];
			// Copy handleNumbers so we don't change the dataset
			handleNumbers = handleNumbers.slice();
			// Check to see which handle is 'leading'.
			// If that one can't move the second can't either.
			if (upward) {
				handleNumbers.reverse();
			}
			// Step 1: get the maximum percentage that any of the handles can move
			if (handleNumbers.length > 1) {
				handleNumbers.forEach(function (handleNumber, o) {
					var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
					// Stop if one of the handles can't move.
					if (to === false) {
						proposal = 0;
					}
					else {
						proposal = to - proposals[handleNumber];
						proposals[handleNumber] = to;
					}
				});
			}
			// If using one handle, check backward AND forward
			else {
				b = f = [true];
			}
			var state = false;
			// Step 2: Try to set the handles with the found percentage
			handleNumbers.forEach(function (handleNumber, o) {
				state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
			});
			// Step 3: If a handle moved, fire events
			if (state) {
				handleNumbers.forEach(function (handleNumber) {
					fireEvent("update", handleNumber);
					fireEvent("slide", handleNumber);
				});
				// If target is a connect, then fire drag event
				if (connect != undefined) {
					fireEvent("drag", firstHandle);
				}
			}
		}
		// Takes a base value and an offset. This offset is used for the connect bar size.
		// In the initial design for this feature, the origin element was 1% wide.
		// Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
		// in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
		function transformDirection(a, b) {
			return options.dir ? 100 - a - b : a;
		}
		// Updates scope_Locations and scope_Values, updates visual state
		function updateHandlePosition(handleNumber, to) {
			// Update locations.
			scope_Locations[handleNumber] = to;
			// Convert the value to the slider stepping/range.
			scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
			var translation = transformDirection(to, 0) - scope_DirOffset;
			var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
			scope_Handles[handleNumber].style[options.transformRule] = translateRule;
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		}
		// Handles before the slider middle are stacked later = higher,
		// Handles after the middle later is lower
		// [[7] [8] .......... | .......... [5] [4]
		function setZindex() {
			scope_HandleNumbers.forEach(function (handleNumber) {
				var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
				var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
				scope_Handles[handleNumber].style.zIndex = String(zIndex);
			});
		}
		// Test suggested values and apply margin, step.
		// if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
		function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
			if (!exactInput) {
				to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
			}
			if (to === false) {
				return false;
			}
			updateHandlePosition(handleNumber, to);
			return true;
		}
		// Updates style attribute for connect nodes
		function updateConnect(index) {
			// Skip connects set to false
			if (!scope_Connects[index]) {
				return;
			}
			var l = 0;
			var h = 100;
			if (index !== 0) {
				l = scope_Locations[index - 1];
			}
			if (index !== scope_Connects.length - 1) {
				h = scope_Locations[index];
			}
			// We use two rules:
			// 'translate' to change the left/top offset;
			// 'scale' to change the width of the element;
			// As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
			var connectWidth = h - l;
			var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
			var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
			scope_Connects[index].style[options.transformRule] =
				translateRule + " " + scaleRule;
		}
		// Parses value passed to .set method. Returns current value if not parse-able.
		function resolveToValue(to, handleNumber) {
			// Setting with null indicates an 'ignore'.
			// Inputting 'false' is invalid.
			if (to === null || to === false || to === undefined) {
				return scope_Locations[handleNumber];
			}
			// If a formatted number was passed, attempt to decode it.
			if (typeof to === "number") {
				to = String(to);
			}
			to = options.format.from(to);
			if (to !== false) {
				to = scope_Spectrum.toStepping(to);
			}
			// If parsing the number failed, use the current value.
			if (to === false || isNaN(to)) {
				return scope_Locations[handleNumber];
			}
			return to;
		}
		// Set the slider value.
		function valueSet(input, fireSetEvent, exactInput) {
			var values = asArray(input);
			var isInit = scope_Locations[0] === undefined;
			// Event fires by default
			fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
			// Animation is optional.
			// Make sure the initial values were set before using animated placement.
			if (options.animate && !isInit) {
				addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
			}
			// First pass, without lookAhead but with lookBackward. Values are set from left to right.
			scope_HandleNumbers.forEach(function (handleNumber) {
				setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
			});
			var i = scope_HandleNumbers.length === 1 ? 0 : 1;
			// Spread handles evenly across the slider if the range has no size (min=max)
			if (isInit && scope_Spectrum.hasNoSize()) {
				exactInput = true;
				scope_Locations[0] = 0;
				if (scope_HandleNumbers.length > 1) {
					var space_1 = 100 / (scope_HandleNumbers.length - 1);
					scope_HandleNumbers.forEach(function (handleNumber) {
						scope_Locations[handleNumber] = handleNumber * space_1;
					});
				}
			}
			// Secondary passes. Now that all base values are set, apply constraints.
			// Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
			for (; i < scope_HandleNumbers.length; ++i) {
				scope_HandleNumbers.forEach(function (handleNumber) {
					setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
				});
			}
			setZindex();
			scope_HandleNumbers.forEach(function (handleNumber) {
				fireEvent("update", handleNumber);
				// Fire the event only for handles that received a new value, as per #579
				if (values[handleNumber] !== null && fireSetEvent) {
					fireEvent("set", handleNumber);
				}
			});
		}
		// Reset slider to initial values
		function valueReset(fireSetEvent) {
			valueSet(options.start, fireSetEvent);
		}
		// Set value for a single handle
		function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
			// Ensure numeric input
			handleNumber = Number(handleNumber);
			if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
				throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
			}
			// Look both backward and forward, since we don't want this handle to "push" other handles (#960);
			// The exactInput argument can be used to ignore slider stepping (#436)
			setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
			fireEvent("update", handleNumber);
			if (fireSetEvent) {
				fireEvent("set", handleNumber);
			}
		}
		// Get the slider value.
		function valueGet(unencoded) {
			if (unencoded === void 0) { unencoded = false; }
			if (unencoded) {
				// return a copy of the raw values
				return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
			}
			var values = scope_Values.map(options.format.to);
			// If only one handle is used, return a single value.
			if (values.length === 1) {
				return values[0];
			}
			return values;
		}
		// Removes classes from the root and empties it.
		function destroy() {
			// remove protected internal listeners
			removeEvent(INTERNAL_EVENT_NS.aria);
			removeEvent(INTERNAL_EVENT_NS.tooltips);
			Object.keys(options.cssClasses).forEach(function (key) {
				removeClass(scope_Target, options.cssClasses[key]);
			});
			while (scope_Target.firstChild) {
				scope_Target.removeChild(scope_Target.firstChild);
			}
			delete scope_Target.noUiSlider;
		}
		function getNextStepsForHandle(handleNumber) {
			var location = scope_Locations[handleNumber];
			var nearbySteps = scope_Spectrum.getNearbySteps(location);
			var value = scope_Values[handleNumber];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;
			// If snapped, directly use defined step value
			if (options.snap) {
				return [
					value - nearbySteps.stepBefore.startValue || null,
					nearbySteps.stepAfter.startValue - value || null
				];
			}
			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if (increment !== false) {
				if (value + increment > nearbySteps.stepAfter.startValue) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}
			// If the value is beyond the starting point
			if (value > nearbySteps.thisStep.startValue) {
				decrement = nearbySteps.thisStep.step;
			}
			else if (nearbySteps.stepBefore.step === false) {
				decrement = false;
			}
			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}
			// Now, if at the slider edges, there is no in/decrement
			if (location === 100) {
				increment = null;
			}
			else if (location === 0) {
				decrement = null;
			}
			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();
			// Round per #391
			if (increment !== null && increment !== false) {
				increment = Number(increment.toFixed(stepDecimals));
			}
			if (decrement !== null && decrement !== false) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}
			return [decrement, increment];
		}
		// Get the current step size for the slider.
		function getNextSteps() {
			return scope_HandleNumbers.map(getNextStepsForHandle);
		}
		// Updatable: margin, limit, padding, step, range, animate, snap
		function updateOptions(optionsToUpdate, fireSetEvent) {
			// Spectrum is created using the range, snap, direction and step options.
			// 'snap' and 'step' can be updated.
			// If 'snap' and 'step' are not passed, they should remain unchanged.
			var v = valueGet();
			var updateAble = [
				"margin",
				"limit",
				"padding",
				"range",
				"animate",
				"snap",
				"step",
				"format",
				"pips",
				"tooltips"
			];
			// Only change options that we're actually passed to update.
			updateAble.forEach(function (name) {
				// Check for undefined. null removes the value.
				if (optionsToUpdate[name] !== undefined) {
					originalOptions[name] = optionsToUpdate[name];
				}
			});
			var newOptions = testOptions(originalOptions);
			// Load new options into the slider state
			updateAble.forEach(function (name) {
				if (optionsToUpdate[name] !== undefined) {
					options[name] = newOptions[name];
				}
			});
			scope_Spectrum = newOptions.spectrum;
			// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
			options.margin = newOptions.margin;
			options.limit = newOptions.limit;
			options.padding = newOptions.padding;
			// Update pips, removes existing.
			if (options.pips) {
				pips(options.pips);
			}
			else {
				removePips();
			}
			// Update tooltips, removes existing.
			if (options.tooltips) {
				tooltips();
			}
			else {
				removeTooltips();
			}
			// Invalidate the current positioning so valueSet forces an update.
			scope_Locations = [];
			valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
		}
		// Initialization steps
		function setupSlider() {
			// Create the base element, initialize HTML and set classes.
			// Add handles and connect elements.
			scope_Base = addSlider(scope_Target);
			addElements(options.connect, scope_Base);
			// Attach user events.
			bindSliderEvents(options.events);
			// Use the public value method to set the start values.
			valueSet(options.start);
			if (options.pips) {
				pips(options.pips);
			}
			if (options.tooltips) {
				tooltips();
			}
			aria();
		}
		setupSlider();
		var scope_Self = {
			destroy: destroy,
			steps: getNextSteps,
			on: bindEvent,
			off: removeEvent,
			get: valueGet,
			set: valueSet,
			setHandle: valueSetHandle,
			reset: valueReset,
			// Exposed for unit testing, don't use this in your application.
			__moveHandles: function (upward, proposal, handleNumbers) {
				moveHandles(upward, proposal, scope_Locations, handleNumbers);
			},
			options: originalOptions,
			updateOptions: updateOptions,
			target: scope_Target,
			removePips: removePips,
			removeTooltips: removeTooltips,
			getPositions: function () {
				return scope_Locations.slice();
			},
			getTooltips: function () {
				return scope_Tooltips;
			},
			getOrigins: function () {
				return scope_Handles;
			},
			pips: pips // Issue #594
		};
		return scope_Self;
	}
	// Run the standard initializer
	function initialize(target, originalOptions) {
		if (!target || !target.nodeName) {
			throw new Error("noUiSlider: create requires a single element, got: " + target);
		}
		// Throw an error if the slider was already initialized.
		if (target.noUiSlider) {
			throw new Error("noUiSlider: Slider was already initialized.");
		}
		// Test the options and create the slider environment;
		var options = testOptions(originalOptions);
		var api = scope(target, options, originalOptions);
		target.noUiSlider = api;
		return api;
	}
	var nouislider = {
		// Exposed for unit testing, don't use this in your application.
		__spectrum: Spectrum,
		// A reference to the default classes, allows global changes.
		// Use the cssClasses option for changes to one slider.
		cssClasses: cssClasses,
		create: initialize
	};

	exports.create = initialize;
	exports.cssClasses = cssClasses;
	exports['default'] = nouislider;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
/**!
 * lightgallery.js | 1.1.3 | February 11th 2019
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var t; t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Lightgallery = e() } }(function () { var e, t, s; return function () { function e(t, s, l) { function i(r, d) { if (!s[r]) { if (!t[r]) { var a = "function" == typeof require && require; if (!d && a) return a(r, !0); if (o) return o(r, !0); var n = new Error("Cannot find module '" + r + "'"); throw n.code = "MODULE_NOT_FOUND", n } var u = s[r] = { exports: {} }; t[r][0].call(u.exports, function (e) { return i(t[r][1][e] || e) }, u, u.exports, e, t, s, l) } return s[r].exports } for (var o = "function" == typeof require && require, r = 0; r < l.length; r++)i(l[r]); return i } return e }()({ 1: [function (t, s, l) { !function (t, s) { if ("function" == typeof e && e.amd) e(["exports"], s); else if (void 0 !== l) s(l); else { var i = { exports: {} }; s(i.exports), t.lgUtils = i.exports } }(this, function (e) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var t = { getAttribute: function e(t, s) { return t[s] }, setAttribute: function e(t, s, l) { t[s] = l }, wrap: function e(t, s) { if (t) { var l = document.createElement("div"); l.className = s, t.parentNode.insertBefore(l, t), t.parentNode.removeChild(t), l.appendChild(t) } }, addClass: function e(t, s) { t && (t.classList ? t.classList.add(s) : t.className += " " + s) }, removeClass: function e(t, s) { t && (t.classList ? t.classList.remove(s) : t.className = t.className.replace(new RegExp("(^|\\b)" + s.split(" ").join("|") + "(\\b|$)", "gi"), " ")) }, hasClass: function e(t, s) { return t.classList ? t.classList.contains(s) : new RegExp("(^| )" + s + "( |$)", "gi").test(t.className) }, setVendor: function e(t, s, l) { t && (t.style[s.charAt(0).toLowerCase() + s.slice(1)] = l, t.style["webkit" + s] = l, t.style["moz" + s] = l, t.style["ms" + s] = l, t.style["o" + s] = l) }, trigger: function e(t, s) { var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; if (t) { var i = new CustomEvent(s, { detail: l }); t.dispatchEvent(i) } }, Listener: { uid: 0 }, on: function e(s, l, i) { var o = this; s && l.split(" ").forEach(function (e) { var l = o.getAttribute(s, "lg-event-uid") || ""; t.Listener.uid++, l += "&" + t.Listener.uid, o.setAttribute(s, "lg-event-uid", l), t.Listener[e + t.Listener.uid] = i, s.addEventListener(e.split(".")[0], i, !1) }) }, off: function e(s, l) { if (s) { var i = this.getAttribute(s, "lg-event-uid"); if (i) { i = i.split("&"); for (var o = 0; o < i.length; o++)if (i[o]) { var r = l + i[o]; if ("." === r.substring(0, 1)) for (var d in t.Listener) t.Listener.hasOwnProperty(d) && d.split(".").indexOf(r.split(".")[1]) > -1 && (s.removeEventListener(d.split(".")[0], t.Listener[d]), this.setAttribute(s, "lg-event-uid", this.getAttribute(s, "lg-event-uid").replace("&" + i[o], "")), delete t.Listener[d]); else s.removeEventListener(r.split(".")[0], t.Listener[r]), this.setAttribute(s, "lg-event-uid", this.getAttribute(s, "lg-event-uid").replace("&" + i[o], "")), delete t.Listener[r] } } } }, param: function e(t) { return Object.keys(t).map(function (e) { return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]) }).join("&") } }; e.default = t }) }, {}], 2: [function (t, s, l) { !function (s, i) { if ("function" == typeof e && e.amd) e(["./lg-utils"], i); else if (void 0 !== l) i(t("./lg-utils")); else { var o = { exports: {} }; i(s.lgUtils), s.lightgallery = o.exports } }(this, function (e) { "use strict"; function t(e) { return e && e.__esModule ? e : { default: e } } function s(e, t) { if (this.el = e, this.s = i({}, o, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array."; return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.items = [], this.s.dynamic ? this.items = this.s.dynamicEl : "this" === this.s.selector ? this.items.push(this.el) : "" !== this.s.selector ? this.s.selectWithin ? this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector) : this.items = this.el.querySelectorAll(this.s.selector) : this.items = this.el.children, this.___slide = "", this.outer = "", this.init(), this } var l = t(e), i = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var s = arguments[t]; for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (e[l] = s[l]) } return e }; !function () { function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var s = document.createEvent("CustomEvent"); return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s } if ("function" == typeof window.CustomEvent) return !1; e.prototype = window.Event.prototype, window.CustomEvent = e }(), window.utils = l.default, window.lgData = { uid: 0 }, window.lgModules = {}; var o = { mode: "lg-slide", cssEasing: "ease", easing: "linear", speed: 600, height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 150, hideBarsDelay: 6e3, useLeft: !1, closable: !0, loop: !0, escKey: !0, keyPress: !0, controls: !0, slideEndAnimatoin: !0, hideControlOnEnd: !1, mousewheel: !1, getCaptionFromTitleOrAlt: !0, appendSubHtmlTo: ".lg-sub-html", subHtmlSelectorRelative: !1, preload: 1, showAfterLoad: !0, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: !1, iframeMaxWidth: "100%", download: !0, counter: !0, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: !0, enableDrag: !0, dynamic: !1, dynamicEl: [], galleryId: 1 }; s.prototype.init = function () { var e = this; e.s.preload > e.items.length && (e.s.preload = e.items.length); var t = window.location.hash; if (t.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(t.split("&slide=")[1], 10), l.default.addClass(document.body, "lg-from-hash"), l.default.hasClass(document.body, "lg-on") || (l.default.addClass(document.body, "lg-on"), setTimeout(function () { e.build(e.index) }))), e.s.dynamic) l.default.trigger(this.el, "onBeforeOpen"), e.index = e.s.index || 0, l.default.hasClass(document.body, "lg-on") || (l.default.addClass(document.body, "lg-on"), setTimeout(function () { e.build(e.index) })); else for (var s = 0; s < e.items.length; s++)!function (t) { l.default.on(e.items[t], "click.lgcustom", function (s) { s.preventDefault(), l.default.trigger(e.el, "onBeforeOpen"), e.index = e.s.index || t, l.default.hasClass(document.body, "lg-on") || (e.build(e.index), l.default.addClass(document.body, "lg-on")) }) }(s) }, s.prototype.build = function (e) { var t = this; t.structure(); for (var s in window.lgModules) t.modules[s] = new window.lgModules[s](t.el); t.slide(e, !1, !1), t.s.keyPress && t.keyPress(), t.items.length > 1 && (t.arrow(), setTimeout(function () { t.enableDrag(), t.enableSwipe() }, 50), t.s.mousewheel && t.mousewheel()), t.counter(), t.closeGallery(), l.default.trigger(t.el, "onAfterOpen"), l.default.on(t.outer, "mousemove.lg click.lg touchstart.lg", function () { l.default.removeClass(t.outer, "lg-hide-items"), clearTimeout(t.hideBartimeout), t.hideBartimeout = setTimeout(function () { l.default.addClass(t.outer, "lg-hide-items") }, t.s.hideBarsDelay) }) }, s.prototype.structure = function () { var e = "", t = "", s = 0, i = "", o, r = this; for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'), l.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration + "ms"), s = 0; s < this.items.length; s++)e += '<div class="lg-item"></div>'; if (this.s.controls && this.items.length > 1 && (t = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (i = '<div class="lg-sub-html"></div>'), o = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + e + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + t + i + "</div></div>", document.body.insertAdjacentHTML("beforeend", o), this.outer = document.querySelector(".lg-outer"), this.___slide = this.outer.querySelectorAll(".lg-item"), this.s.useLeft ? (l.default.addClass(this.outer, "lg-use-left"), this.s.mode = "lg-slide") : l.default.addClass(this.outer, "lg-use-css3"), r.setTop(), l.default.on(window, "resize.lg orientationchange.lg", function () { setTimeout(function () { r.setTop() }, 100) }), l.default.addClass(this.___slide[this.index], "lg-current"), this.doCss() ? l.default.addClass(this.outer, "lg-css3") : (l.default.addClass(this.outer, "lg-css"), this.s.speed = 0), l.default.addClass(this.outer, this.s.mode), this.s.enableDrag && this.items.length > 1 && l.default.addClass(this.outer, "lg-grab"), this.s.showAfterLoad && l.default.addClass(this.outer, "lg-show-after-load"), this.doCss()) { var d = this.outer.querySelector(".lg-inner"); l.default.setVendor(d, "TransitionTimingFunction", this.s.cssEasing), l.default.setVendor(d, "TransitionDuration", this.s.speed + "ms") } setTimeout(function () { l.default.addClass(document.querySelector(".lg-backdrop"), "in") }), setTimeout(function () { l.default.addClass(r.outer, "lg-visible") }, this.s.backdropDuration), this.s.download && this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop }, s.prototype.setTop = function () { if ("100%" !== this.s.height) { var e = window.innerHeight, t = (e - parseInt(this.s.height, 10)) / 2, s = this.outer.querySelector(".lg"); e >= parseInt(this.s.height, 10) ? s.style.top = t + "px" : s.style.top = "0px" } }, s.prototype.doCss = function () { return !!function e() { var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], s = document.documentElement, l = 0; for (l = 0; l < t.length; l++)if (t[l] in s.style) return !0 }() }, s.prototype.isVideo = function (e, t) { var s; if (s = this.s.dynamic ? this.s.dynamicEl[t].html : this.items[t].getAttribute("data-html"), !e && s) return { html5: !0 }; var l = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i), i = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i), o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i), r = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i); return l ? { youtube: l } : i ? { vimeo: i } : o ? { dailymotion: o } : r ? { vk: r } : void 0 }, s.prototype.counter = function () { this.s.counter && this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend", '<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + "</span></div>") }, s.prototype.addHtml = function (e) { var t = null, s; if (this.s.dynamic ? t = this.s.dynamicEl[e].subHtml : (s = this.items[e], t = s.getAttribute("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !t && (t = s.getAttribute("title")) && s.querySelector("img") && (t = s.querySelector("img").getAttribute("alt"))), void 0 !== t && null !== t) { var i = t.substring(0, 1); "." !== i && "#" !== i || (t = this.s.subHtmlSelectorRelative && !this.s.dynamic ? s.querySelector(t).innerHTML : document.querySelector(t).innerHTML) } else t = ""; ".lg-sub-html" === this.s.appendSubHtmlTo ? this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = t : this.___slide[e].insertAdjacentHTML("beforeend", t), void 0 !== t && null !== t && ("" === t ? l.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html") : l.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html")), l.default.trigger(this.el, "onAfterAppendSubHtml", { index: e }) }, s.prototype.preload = function (e) { var t = 1, s = 1; for (t = 1; t <= this.s.preload && !(t >= this.items.length - e); t++)this.loadContent(e + t, !1, 0); for (s = 1; s <= this.s.preload && !(e - s < 0); s++)this.loadContent(e - s, !1, 0) }, s.prototype.loadContent = function (e, t, s) { var i = this, o = !1, r, d, a, n, u, c, g = function e(t) { for (var s = [], l = [], i = 0; i < t.length; i++) { var o = t[i].split(" "); "" === o[0] && o.splice(0, 1), l.push(o[0]), s.push(o[1]) } for (var r = window.innerWidth, a = 0; a < s.length; a++)if (parseInt(s[a], 10) > r) { d = l[a]; break } }; if (i.s.dynamic) { if (i.s.dynamicEl[e].poster && (o = !0, a = i.s.dynamicEl[e].poster), c = i.s.dynamicEl[e].html, d = i.s.dynamicEl[e].src, i.s.dynamicEl[e].responsive) { g(i.s.dynamicEl[e].responsive.split(",")) } n = i.s.dynamicEl[e].srcset, u = i.s.dynamicEl[e].sizes } else { if (i.items[e].getAttribute("data-poster") && (o = !0, a = i.items[e].getAttribute("data-poster")), c = i.items[e].getAttribute("data-html"), d = i.items[e].getAttribute("href") || i.items[e].getAttribute("data-src"), i.items[e].getAttribute("data-responsive")) { g(i.items[e].getAttribute("data-responsive").split(",")) } n = i.items[e].getAttribute("data-srcset"), u = i.items[e].getAttribute("data-sizes") } var f = !1; i.s.dynamic ? i.s.dynamicEl[e].iframe && (f = !0) : "true" === i.items[e].getAttribute("data-iframe") && (f = !0); var h = i.isVideo(d, e); if (!l.default.hasClass(i.___slide[e], "lg-loaded")) { if (f) i.___slide[e].insertAdjacentHTML("afterbegin", '<div class="lg-video-cont" style="max-width:' + i.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + d + '"  allowfullscreen="true"></iframe></div></div>'); else if (o) { var m = ""; m = h && h.youtube ? "lg-has-youtube" : h && h.vimeo ? "lg-has-vimeo" : "lg-has-html5", i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont ' + m + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + a + '" /></div></div>') } else h ? (i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.default.trigger(i.el, "hasVideo", { index: e, src: d, html: c })) : i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + d + '" /></div>'); if (l.default.trigger(i.el, "onAferAppendSlide", { index: e }), r = i.___slide[e].querySelector(".lg-object"), u && r.setAttribute("sizes", u), n) { r.setAttribute("srcset", n); try { picturefill({ elements: [r[0]] }) } catch (e) { console.error("Make sure you have included Picturefill version 2") } } ".lg-sub-html" !== this.s.appendSubHtmlTo && i.addHtml(e), l.default.addClass(i.___slide[e], "lg-loaded") } l.default.on(i.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function () { var t = 0; s && !l.default.hasClass(document.body, "lg-from-hash") && (t = s), setTimeout(function () { l.default.addClass(i.___slide[e], "lg-complete"), l.default.trigger(i.el, "onSlideItemLoad", { index: e, delay: s || 0 }) }, t) }), h && h.html5 && !o && l.default.addClass(i.___slide[e], "lg-complete"), !0 === t && (l.default.hasClass(i.___slide[e], "lg-complete") ? i.preload(e) : l.default.on(i.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function () { i.preload(e) })) }, s.prototype.slide = function (e, t, s) { for (var i = 0, o = 0; o < this.___slide.length; o++)if (l.default.hasClass(this.___slide[o], "lg-current")) { i = o; break } var r = this; if (!r.lGalleryOn || i !== e) { var d = this.___slide.length, a = r.lGalleryOn ? this.s.speed : 0, n = !1, u = !1; if (!r.lgBusy) { if (this.s.download) { var c; c = r.s.dynamic ? !1 !== r.s.dynamicEl[e].downloadUrl && (r.s.dynamicEl[e].downloadUrl || r.s.dynamicEl[e].src) : "false" !== r.items[e].getAttribute("data-download-url") && (r.items[e].getAttribute("data-download-url") || r.items[e].getAttribute("href") || r.items[e].getAttribute("data-src")), c ? (document.getElementById("lg-download").setAttribute("href", c), l.default.removeClass(r.outer, "lg-hide-download")) : l.default.addClass(r.outer, "lg-hide-download") } if (l.default.trigger(r.el, "onBeforeSlide", { prevIndex: i, index: e, fromTouch: t, fromThumb: s }), r.lgBusy = !0, clearTimeout(r.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () { r.addHtml(e) }, a), this.arrowDisable(e), t) { var g = e - 1, f = e + 1; 0 === e && i === d - 1 ? (f = 0, g = d - 1) : e === d - 1 && 0 === i && (f = 0, g = d - 1), l.default.removeClass(r.outer.querySelector(".lg-prev-slide"), "lg-prev-slide"), l.default.removeClass(r.outer.querySelector(".lg-current"), "lg-current"), l.default.removeClass(r.outer.querySelector(".lg-next-slide"), "lg-next-slide"), l.default.addClass(r.___slide[g], "lg-prev-slide"), l.default.addClass(r.___slide[f], "lg-next-slide"), l.default.addClass(r.___slide[e], "lg-current") } else { l.default.addClass(r.outer, "lg-no-trans"); for (var h = 0; h < this.___slide.length; h++)l.default.removeClass(this.___slide[h], "lg-prev-slide"), l.default.removeClass(this.___slide[h], "lg-next-slide"); e < i ? (u = !0, 0 !== e || i !== d - 1 || s || (u = !1, n = !0)) : e > i && (n = !0, e !== d - 1 || 0 !== i || s || (u = !0, n = !1)), u ? (l.default.addClass(this.___slide[e], "lg-prev-slide"), l.default.addClass(this.___slide[i], "lg-next-slide")) : n && (l.default.addClass(this.___slide[e], "lg-next-slide"), l.default.addClass(this.___slide[i], "lg-prev-slide")), setTimeout(function () { l.default.removeClass(r.outer.querySelector(".lg-current"), "lg-current"), l.default.addClass(r.___slide[e], "lg-current"), l.default.removeClass(r.outer, "lg-no-trans") }, 50) } r.lGalleryOn ? (setTimeout(function () { r.loadContent(e, !0, 0) }, this.s.speed + 50), setTimeout(function () { r.lgBusy = !1, l.default.trigger(r.el, "onAfterSlide", { prevIndex: i, index: e, fromTouch: t, fromThumb: s }) }, this.s.speed)) : (r.loadContent(e, !0, r.s.backdropDuration), r.lgBusy = !1, l.default.trigger(r.el, "onAfterSlide", { prevIndex: i, index: e, fromTouch: t, fromThumb: s })), r.lGalleryOn = !0, this.s.counter && document.getElementById("lg-counter-current") && (document.getElementById("lg-counter-current").innerHTML = e + 1) } } }, s.prototype.goToNextSlide = function (e) { var t = this; t.lgBusy || (t.index + 1 < t.___slide.length ? (t.index++, l.default.trigger(t.el, "onBeforeNextSlide", { index: t.index }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, l.default.trigger(t.el, "onBeforeNextSlide", { index: t.index }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (l.default.addClass(t.outer, "lg-right-end"), setTimeout(function () { l.default.removeClass(t.outer, "lg-right-end") }, 400))) }, s.prototype.goToPrevSlide = function (e) { var t = this; t.lgBusy || (t.index > 0 ? (t.index--, l.default.trigger(t.el, "onBeforePrevSlide", { index: t.index, fromTouch: e }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.items.length - 1, l.default.trigger(t.el, "onBeforePrevSlide", { index: t.index, fromTouch: e }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (l.default.addClass(t.outer, "lg-left-end"), setTimeout(function () { l.default.removeClass(t.outer, "lg-left-end") }, 400))) }, s.prototype.keyPress = function () { var e = this; this.items.length > 1 && l.default.on(window, "keyup.lg", function (t) { e.items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide())) }), l.default.on(window, "keydown.lg", function (t) { !0 === e.s.escKey && 27 === t.keyCode && (t.preventDefault(), l.default.hasClass(e.outer, "lg-thumb-open") ? l.default.removeClass(e.outer, "lg-thumb-open") : e.destroy()) }) }, s.prototype.arrow = function () { var e = this; l.default.on(this.outer.querySelector(".lg-prev"), "click.lg", function () { e.goToPrevSlide() }), l.default.on(this.outer.querySelector(".lg-next"), "click.lg", function () { e.goToNextSlide() }) }, s.prototype.arrowDisable = function (e) { if (!this.s.loop && this.s.hideControlOnEnd) { var t = this.outer.querySelector(".lg-next"), s = this.outer.querySelector(".lg-prev"); e + 1 < this.___slide.length ? (t.removeAttribute("disabled"), l.default.removeClass(t, "disabled")) : (t.setAttribute("disabled", "disabled"), l.default.addClass(t, "disabled")), e > 0 ? (s.removeAttribute("disabled"), l.default.removeClass(s, "disabled")) : (s.setAttribute("disabled", "disabled"), l.default.addClass(s, "disabled")) } }, s.prototype.setTranslate = function (e, t, s) { this.s.useLeft ? e.style.left = t : l.default.setVendor(e, "Transform", "translate3d(" + t + "px, " + s + "px, 0px)") }, s.prototype.touchMove = function (e, t) { var s = t - e; Math.abs(s) > 15 && (l.default.addClass(this.outer, "lg-dragging"), this.setTranslate(this.___slide[this.index], s, 0), this.setTranslate(document.querySelector(".lg-prev-slide"), -this.___slide[this.index].clientWidth + s, 0), this.setTranslate(document.querySelector(".lg-next-slide"), this.___slide[this.index].clientWidth + s, 0)) }, s.prototype.touchEnd = function (e) { var t = this; "lg-slide" !== t.s.mode && l.default.addClass(t.outer, "lg-slide"); for (var s = 0; s < this.___slide.length; s++)l.default.hasClass(this.___slide[s], "lg-current") || l.default.hasClass(this.___slide[s], "lg-prev-slide") || l.default.hasClass(this.___slide[s], "lg-next-slide") || (this.___slide[s].style.opacity = "0"); setTimeout(function () { l.default.removeClass(t.outer, "lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && l.default.trigger(t.el, "onSlideClick"); for (var s = 0; s < t.___slide.length; s++)t.___slide[s].removeAttribute("style") }), setTimeout(function () { l.default.hasClass(t.outer, "lg-dragging") || "lg-slide" === t.s.mode || l.default.removeClass(t.outer, "lg-slide") }, t.s.speed + 100) }, s.prototype.enableSwipe = function () { var e = this, t = 0, s = 0, i = !1; if (e.s.enableSwipe && e.isTouch && e.doCss()) { for (var o = 0; o < e.___slide.length; o++)l.default.on(e.___slide[o], "touchstart.lg", function (s) { l.default.hasClass(e.outer, "lg-zoomed") || e.lgBusy || (s.preventDefault(), e.manageSwipeClass(), t = s.targetTouches[0].pageX) }); for (var r = 0; r < e.___slide.length; r++)l.default.on(e.___slide[r], "touchmove.lg", function (o) { l.default.hasClass(e.outer, "lg-zoomed") || (o.preventDefault(), s = o.targetTouches[0].pageX, e.touchMove(t, s), i = !0) }); for (var d = 0; d < e.___slide.length; d++)l.default.on(e.___slide[d], "touchend.lg", function () { l.default.hasClass(e.outer, "lg-zoomed") || (i ? (i = !1, e.touchEnd(s - t)) : l.default.trigger(e.el, "onSlideClick")) }) } }, s.prototype.enableDrag = function () { var e = this, t = 0, s = 0, i = !1, o = !1; if (e.s.enableDrag && !e.isTouch && e.doCss()) { for (var r = 0; r < e.___slide.length; r++)l.default.on(e.___slide[r], "mousedown.lg", function (s) { l.default.hasClass(e.outer, "lg-zoomed") || (l.default.hasClass(s.target, "lg-object") || l.default.hasClass(s.target, "lg-video-play")) && (s.preventDefault(), e.lgBusy || (e.manageSwipeClass(), t = s.pageX, i = !0, e.outer.scrollLeft += 1, e.outer.scrollLeft -= 1, l.default.removeClass(e.outer, "lg-grab"), l.default.addClass(e.outer, "lg-grabbing"), l.default.trigger(e.el, "onDragstart"))) }); l.default.on(window, "mousemove.lg", function (r) { i && (o = !0, s = r.pageX, e.touchMove(t, s), l.default.trigger(e.el, "onDragmove")) }), l.default.on(window, "mouseup.lg", function (r) { o ? (o = !1, e.touchEnd(s - t), l.default.trigger(e.el, "onDragend")) : (l.default.hasClass(r.target, "lg-object") || l.default.hasClass(r.target, "lg-video-play")) && l.default.trigger(e.el, "onSlideClick"), i && (i = !1, l.default.removeClass(e.outer, "lg-grabbing"), l.default.addClass(e.outer, "lg-grab")) }) } }, s.prototype.manageSwipeClass = function () { var e = this.index + 1, t = this.index - 1, s = this.___slide.length; this.s.loop && (0 === this.index ? t = s - 1 : this.index === s - 1 && (e = 0)); for (var i = 0; i < this.___slide.length; i++)l.default.removeClass(this.___slide[i], "lg-next-slide"), l.default.removeClass(this.___slide[i], "lg-prev-slide"); t > -1 && l.default.addClass(this.___slide[t], "lg-prev-slide"), l.default.addClass(this.___slide[e], "lg-next-slide") }, s.prototype.mousewheel = function () { var e = this; l.default.on(e.outer, "mousewheel.lg", function (t) { t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault()) }) }, s.prototype.closeGallery = function () { var e = this, t = !1; l.default.on(this.outer.querySelector(".lg-close"), "click.lg", function () { e.destroy() }), e.s.closable && (l.default.on(e.outer, "mousedown.lg", function (e) { t = !!(l.default.hasClass(e.target, "lg-outer") || l.default.hasClass(e.target, "lg-item") || l.default.hasClass(e.target, "lg-img-wrap")) }), l.default.on(e.outer, "mouseup.lg", function (s) { (l.default.hasClass(s.target, "lg-outer") || l.default.hasClass(s.target, "lg-item") || l.default.hasClass(s.target, "lg-img-wrap") && t) && (l.default.hasClass(e.outer, "lg-dragging") || e.destroy()) })) }, s.prototype.destroy = function (e) { var t = this; if (e || l.default.trigger(t.el, "onBeforeClose"), document.body.scrollTop = t.prevScrollTop, document.documentElement.scrollTop = t.prevScrollTop, e) { if (!t.s.dynamic) for (var s = 0; s < this.items.length; s++)l.default.off(this.items[s], ".lg"), l.default.off(this.items[s], ".lgcustom"); var i = t.el.getAttribute("lg-uid"); delete window.lgData[i], t.el.removeAttribute("lg-uid") } l.default.off(this.el, ".lgtm"); for (var o in window.lgModules) t.modules[o] && t.modules[o].destroy(e); this.lGalleryOn = !1, clearTimeout(t.hideBartimeout), this.hideBartimeout = !1, l.default.off(window, ".lg"), l.default.removeClass(document.body, "lg-on"), l.default.removeClass(document.body, "lg-from-hash"), t.outer && l.default.removeClass(t.outer, "lg-visible"), l.default.removeClass(document.querySelector(".lg-backdrop"), "in"), setTimeout(function () { try { t.outer && t.outer.parentNode.removeChild(t.outer), document.querySelector(".lg-backdrop") && document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")), e || l.default.trigger(t.el, "onCloseAfter") } catch (e) { } }, t.s.backdropDuration + 50) }, window.lightGallery = function (e, t) { if (e) try { if (e.getAttribute("lg-uid")) try { window.lgData[e.getAttribute("lg-uid")].init() } catch (e) { console.error("lightGallery has not initiated properly") } else { var l = "lg" + window.lgData.uid++; window.lgData[l] = new s(e, t), e.setAttribute("lg-uid", l) } } catch (e) { console.error("lightGallery has not initiated properly") } } }) }, { "./lg-utils": 1 }] }, {}, [2])(2) });
/**
 * SimpleBar.js - v5.1.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e() }(this, (function () { "use strict"; var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}; function e(t, e) { return t(e = { exports: {} }, e.exports), e.exports } var r, n, i, o = "object", s = function (t) { return t && t.Math == Math && t }, a = s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof t == o && t) || Function("return this")(), c = function (t) { try { return !!t() } catch (t) { return !0 } }, l = !c((function () { return 7 != Object.defineProperty({}, "a", { get: function () { return 7 } }).a })), u = {}.propertyIsEnumerable, f = Object.getOwnPropertyDescriptor, h = { f: f && !u.call({ 1: 2 }, 1) ? function (t) { var e = f(this, t); return !!e && e.enumerable } : u }, d = function (t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } }, p = {}.toString, v = function (t) { return p.call(t).slice(8, -1) }, g = "".split, y = c((function () { return !Object("z").propertyIsEnumerable(0) })) ? function (t) { return "String" == v(t) ? g.call(t, "") : Object(t) } : Object, b = function (t) { if (null == t) throw TypeError("Can't call method on " + t); return t }, m = function (t) { return y(b(t)) }, x = function (t) { return "object" == typeof t ? null !== t : "function" == typeof t }, E = function (t, e) { if (!x(t)) return t; var r, n; if (e && "function" == typeof (r = t.toString) && !x(n = r.call(t))) return n; if ("function" == typeof (r = t.valueOf) && !x(n = r.call(t))) return n; if (!e && "function" == typeof (r = t.toString) && !x(n = r.call(t))) return n; throw TypeError("Can't convert object to primitive value") }, w = {}.hasOwnProperty, O = function (t, e) { return w.call(t, e) }, _ = a.document, S = x(_) && x(_.createElement), A = function (t) { return S ? _.createElement(t) : {} }, k = !l && !c((function () { return 7 != Object.defineProperty(A("div"), "a", { get: function () { return 7 } }).a })), L = Object.getOwnPropertyDescriptor, M = { f: l ? L : function (t, e) { if (t = m(t), e = E(e, !0), k) try { return L(t, e) } catch (t) { } if (O(t, e)) return d(!h.f.call(t, e), t[e]) } }, T = function (t) { if (!x(t)) throw TypeError(String(t) + " is not an object"); return t }, j = Object.defineProperty, R = { f: l ? j : function (t, e, r) { if (T(t), e = E(e, !0), T(r), k) try { return j(t, e, r) } catch (t) { } if ("get" in r || "set" in r) throw TypeError("Accessors not supported"); return "value" in r && (t[e] = r.value), t } }, W = l ? function (t, e, r) { return R.f(t, e, d(1, r)) } : function (t, e, r) { return t[e] = r, t }, z = function (t, e) { try { W(a, t, e) } catch (r) { a[t] = e } return e }, C = e((function (t) { var e = a["__core-js_shared__"] || z("__core-js_shared__", {}); (t.exports = function (t, r) { return e[t] || (e[t] = void 0 !== r ? r : {}) })("versions", []).push({ version: "3.2.1", mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" }) })), N = C("native-function-to-string", Function.toString), I = a.WeakMap, D = "function" == typeof I && /native code/.test(N.call(I)), P = 0, V = Math.random(), F = function (t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++P + V).toString(36) }, B = C("keys"), H = function (t) { return B[t] || (B[t] = F(t)) }, q = {}, $ = a.WeakMap; if (D) { var X = new $, Y = X.get, G = X.has, U = X.set; r = function (t, e) { return U.call(X, t, e), e }, n = function (t) { return Y.call(X, t) || {} }, i = function (t) { return G.call(X, t) } } else { var Q = H("state"); q[Q] = !0, r = function (t, e) { return W(t, Q, e), e }, n = function (t) { return O(t, Q) ? t[Q] : {} }, i = function (t) { return O(t, Q) } } var K = { set: r, get: n, has: i, enforce: function (t) { return i(t) ? n(t) : r(t, {}) }, getterFor: function (t) { return function (e) { var r; if (!x(e) || (r = n(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required"); return r } } }, J = e((function (t) { var e = K.get, r = K.enforce, n = String(N).split("toString"); C("inspectSource", (function (t) { return N.call(t) })), (t.exports = function (t, e, i, o) { var s = !!o && !!o.unsafe, c = !!o && !!o.enumerable, l = !!o && !!o.noTargetGet; "function" == typeof i && ("string" != typeof e || O(i, "name") || W(i, "name", e), r(i).source = n.join("string" == typeof e ? e : "")), t !== a ? (s ? !l && t[e] && (c = !0) : delete t[e], c ? t[e] = i : W(t, e, i)) : c ? t[e] = i : z(e, i) })(Function.prototype, "toString", (function () { return "function" == typeof this && e(this).source || N.call(this) })) })), Z = a, tt = function (t) { return "function" == typeof t ? t : void 0 }, et = function (t, e) { return arguments.length < 2 ? tt(Z[t]) || tt(a[t]) : Z[t] && Z[t][e] || a[t] && a[t][e] }, rt = Math.ceil, nt = Math.floor, it = function (t) { return isNaN(t = +t) ? 0 : (t > 0 ? nt : rt)(t) }, ot = Math.min, st = function (t) { return t > 0 ? ot(it(t), 9007199254740991) : 0 }, at = Math.max, ct = Math.min, lt = function (t) { return function (e, r, n) { var i, o = m(e), s = st(o.length), a = function (t, e) { var r = it(t); return r < 0 ? at(r + e, 0) : ct(r, e) }(n, s); if (t && r != r) { for (; s > a;)if ((i = o[a++]) != i) return !0 } else for (; s > a; a++)if ((t || a in o) && o[a] === r) return t || a || 0; return !t && -1 } }, ut = { includes: lt(!0), indexOf: lt(!1) }.indexOf, ft = function (t, e) { var r, n = m(t), i = 0, o = []; for (r in n) !O(q, r) && O(n, r) && o.push(r); for (; e.length > i;)O(n, r = e[i++]) && (~ut(o, r) || o.push(r)); return o }, ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], dt = ht.concat("length", "prototype"), pt = { f: Object.getOwnPropertyNames || function (t) { return ft(t, dt) } }, vt = { f: Object.getOwnPropertySymbols }, gt = et("Reflect", "ownKeys") || function (t) { var e = pt.f(T(t)), r = vt.f; return r ? e.concat(r(t)) : e }, yt = function (t, e) { for (var r = gt(e), n = R.f, i = M.f, o = 0; o < r.length; o++) { var s = r[o]; O(t, s) || n(t, s, i(e, s)) } }, bt = /#|\.prototype\./, mt = function (t, e) { var r = Et[xt(t)]; return r == Ot || r != wt && ("function" == typeof e ? c(e) : !!e) }, xt = mt.normalize = function (t) { return String(t).replace(bt, ".").toLowerCase() }, Et = mt.data = {}, wt = mt.NATIVE = "N", Ot = mt.POLYFILL = "P", _t = mt, St = M.f, At = function (t, e) { var r, n, i, o, s, c = t.target, l = t.global, u = t.stat; if (r = l ? a : u ? a[c] || z(c, {}) : (a[c] || {}).prototype) for (n in e) { if (o = e[n], i = t.noTargetGet ? (s = St(r, n)) && s.value : r[n], !_t(l ? n : c + (u ? "." : "#") + n, t.forced) && void 0 !== i) { if (typeof o == typeof i) continue; yt(o, i) } (t.sham || i && i.sham) && W(o, "sham", !0), J(r, n, o, t) } }, kt = function (t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t }, Lt = function (t, e, r) { if (kt(t), void 0 === e) return t; switch (r) { case 0: return function () { return t.call(e) }; case 1: return function (r) { return t.call(e, r) }; case 2: return function (r, n) { return t.call(e, r, n) }; case 3: return function (r, n, i) { return t.call(e, r, n, i) } }return function () { return t.apply(e, arguments) } }, Mt = function (t) { return Object(b(t)) }, Tt = Array.isArray || function (t) { return "Array" == v(t) }, jt = !!Object.getOwnPropertySymbols && !c((function () { return !String(Symbol()) })), Rt = a.Symbol, Wt = C("wks"), zt = function (t) { return Wt[t] || (Wt[t] = jt && Rt[t] || (jt ? Rt : F)("Symbol." + t)) }, Ct = zt("species"), Nt = function (t, e) { var r; return Tt(t) && ("function" != typeof (r = t.constructor) || r !== Array && !Tt(r.prototype) ? x(r) && null === (r = r[Ct]) && (r = void 0) : r = void 0), new (void 0 === r ? Array : r)(0 === e ? 0 : e) }, It = [].push, Dt = function (t) { var e = 1 == t, r = 2 == t, n = 3 == t, i = 4 == t, o = 6 == t, s = 5 == t || o; return function (a, c, l, u) { for (var f, h, d = Mt(a), p = y(d), v = Lt(c, l, 3), g = st(p.length), b = 0, m = u || Nt, x = e ? m(a, g) : r ? m(a, 0) : void 0; g > b; b++)if ((s || b in p) && (h = v(f = p[b], b, d), t)) if (e) x[b] = h; else if (h) switch (t) { case 3: return !0; case 5: return f; case 6: return b; case 2: It.call(x, f) } else if (i) return !1; return o ? -1 : n || i ? i : x } }, Pt = { forEach: Dt(0), map: Dt(1), filter: Dt(2), some: Dt(3), every: Dt(4), find: Dt(5), findIndex: Dt(6) }, Vt = function (t, e) { var r = [][t]; return !r || !c((function () { r.call(null, e || function () { throw 1 }, 1) })) }, Ft = Pt.forEach, Bt = Vt("forEach") ? function (t) { return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0) } : [].forEach; At({ target: "Array", proto: !0, forced: [].forEach != Bt }, { forEach: Bt }); var Ht = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }; for (var qt in Ht) { var $t = a[qt], Xt = $t && $t.prototype; if (Xt && Xt.forEach !== Bt) try { W(Xt, "forEach", Bt) } catch (t) { Xt.forEach = Bt } } var Yt = !("undefined" == typeof window || !window.document || !window.document.createElement), Gt = zt("species"), Ut = Pt.filter; At({ target: "Array", proto: !0, forced: !function (t) { return !c((function () { var e = []; return (e.constructor = {})[Gt] = function () { return { foo: 1 } }, 1 !== e[t](Boolean).foo })) }("filter") }, { filter: function (t) { return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0) } }); var Qt = Object.keys || function (t) { return ft(t, ht) }, Kt = l ? Object.defineProperties : function (t, e) { T(t); for (var r, n = Qt(e), i = n.length, o = 0; i > o;)R.f(t, r = n[o++], e[r]); return t }, Jt = et("document", "documentElement"), Zt = H("IE_PROTO"), te = function () { }, ee = function () { var t, e = A("iframe"), r = ht.length; for (e.style.display = "none", Jt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), ee = t.F; r--;)delete ee.prototype[ht[r]]; return ee() }, re = Object.create || function (t, e) { var r; return null !== t ? (te.prototype = T(t), r = new te, te.prototype = null, r[Zt] = t) : r = ee(), void 0 === e ? r : Kt(r, e) }; q[Zt] = !0; var ne = zt("unscopables"), ie = Array.prototype; null == ie[ne] && W(ie, ne, re(null)); var oe, se, ae, ce = function (t) { ie[ne][t] = !0 }, le = {}, ue = !c((function () { function t() { } return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype })), fe = H("IE_PROTO"), he = Object.prototype, de = ue ? Object.getPrototypeOf : function (t) { return t = Mt(t), O(t, fe) ? t[fe] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? he : null }, pe = zt("iterator"), ve = !1;[].keys && ("next" in (ae = [].keys()) ? (se = de(de(ae))) !== Object.prototype && (oe = se) : ve = !0), null == oe && (oe = {}), O(oe, pe) || W(oe, pe, (function () { return this })); var ge = { IteratorPrototype: oe, BUGGY_SAFARI_ITERATORS: ve }, ye = R.f, be = zt("toStringTag"), me = function (t, e, r) { t && !O(t = r ? t : t.prototype, be) && ye(t, be, { configurable: !0, value: e }) }, xe = ge.IteratorPrototype, Ee = function () { return this }, we = Object.setPrototypeOf || ("__proto__" in {} ? function () { var t, e = !1, r = {}; try { (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array } catch (t) { } return function (r, n) { return T(r), function (t) { if (!x(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype") }(n), e ? t.call(r, n) : r.__proto__ = n, r } }() : void 0), Oe = ge.IteratorPrototype, _e = ge.BUGGY_SAFARI_ITERATORS, Se = zt("iterator"), Ae = function () { return this }, ke = function (t, e, r, n, i, o, s) { !function (t, e, r) { var n = e + " Iterator"; t.prototype = re(xe, { next: d(1, r) }), me(t, n, !1), le[n] = Ee }(r, e, n); var a, c, l, u = function (t) { if (t === i && g) return g; if (!_e && t in p) return p[t]; switch (t) { case "keys": case "values": case "entries": return function () { return new r(this, t) } }return function () { return new r(this) } }, f = e + " Iterator", h = !1, p = t.prototype, v = p[Se] || p["@@iterator"] || i && p[i], g = !_e && v || u(i), y = "Array" == e && p.entries || v; if (y && (a = de(y.call(new t)), Oe !== Object.prototype && a.next && (de(a) !== Oe && (we ? we(a, Oe) : "function" != typeof a[Se] && W(a, Se, Ae)), me(a, f, !0))), "values" == i && v && "values" !== v.name && (h = !0, g = function () { return v.call(this) }), p[Se] !== g && W(p, Se, g), le[e] = g, i) if (c = { values: u("values"), keys: o ? g : u("keys"), entries: u("entries") }, s) for (l in c) !_e && !h && l in p || J(p, l, c[l]); else At({ target: e, proto: !0, forced: _e || h }, c); return c }, Le = K.set, Me = K.getterFor("Array Iterator"), Te = ke(Array, "Array", (function (t, e) { Le(this, { type: "Array Iterator", target: m(t), index: 0, kind: e }) }), (function () { var t = Me(this), e = t.target, r = t.kind, n = t.index++; return !e || n >= e.length ? (t.target = void 0, { value: void 0, done: !0 }) : "keys" == r ? { value: n, done: !1 } : "values" == r ? { value: e[n], done: !1 } : { value: [n, e[n]], done: !1 } }), "values"); le.Arguments = le.Array, ce("keys"), ce("values"), ce("entries"); var je = Object.assign, Re = !je || c((function () { var t = {}, e = {}, r = Symbol(); return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) { e[t] = t })), 7 != je({}, t)[r] || "abcdefghijklmnopqrst" != Qt(je({}, e)).join("") })) ? function (t, e) { for (var r = Mt(t), n = arguments.length, i = 1, o = vt.f, s = h.f; n > i;)for (var a, c = y(arguments[i++]), u = o ? Qt(c).concat(o(c)) : Qt(c), f = u.length, d = 0; f > d;)a = u[d++], l && !s.call(c, a) || (r[a] = c[a]); return r } : je; At({ target: "Object", stat: !0, forced: Object.assign !== Re }, { assign: Re }); var We = zt("toStringTag"), ze = "Arguments" == v(function () { return arguments }()), Ce = function (t) { var e, r, n; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) { try { return t[e] } catch (t) { } }(e = Object(t), We)) ? r : ze ? v(e) : "Object" == (n = v(e)) && "function" == typeof e.callee ? "Arguments" : n }, Ne = {}; Ne[zt("toStringTag")] = "z"; var Ie = "[object z]" !== String(Ne) ? function () { return "[object " + Ce(this) + "]" } : Ne.toString, De = Object.prototype; Ie !== De.toString && J(De, "toString", Ie, { unsafe: !0 }); var Pe = "\t\n\v\f\r                　\u2028\u2029\ufeff", Ve = "[" + Pe + "]", Fe = RegExp("^" + Ve + Ve + "*"), Be = RegExp(Ve + Ve + "*$"), He = function (t) { return function (e) { var r = String(b(e)); return 1 & t && (r = r.replace(Fe, "")), 2 & t && (r = r.replace(Be, "")), r } }, qe = { start: He(1), end: He(2), trim: He(3) }.trim, $e = a.parseInt, Xe = /^[+-]?0[Xx]/, Ye = 8 !== $e(Pe + "08") || 22 !== $e(Pe + "0x16") ? function (t, e) { var r = qe(String(t)); return $e(r, e >>> 0 || (Xe.test(r) ? 16 : 10)) } : $e; At({ global: !0, forced: parseInt != Ye }, { parseInt: Ye }); var Ge = function (t) { return function (e, r) { var n, i, o = String(b(e)), s = it(r), a = o.length; return s < 0 || s >= a ? t ? "" : void 0 : (n = o.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? t ? o.charAt(s) : n : t ? o.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536 } }, Ue = { codeAt: Ge(!1), charAt: Ge(!0) }, Qe = Ue.charAt, Ke = K.set, Je = K.getterFor("String Iterator"); ke(String, "String", (function (t) { Ke(this, { type: "String Iterator", string: String(t), index: 0 }) }), (function () { var t, e = Je(this), r = e.string, n = e.index; return n >= r.length ? { value: void 0, done: !0 } : (t = Qe(r, n), e.index += t.length, { value: t, done: !1 }) })); var Ze = function (t, e, r) { for (var n in e) J(t, n, e[n], r); return t }, tr = !c((function () { return Object.isExtensible(Object.preventExtensions({})) })), er = e((function (t) { var e = R.f, r = F("meta"), n = 0, i = Object.isExtensible || function () { return !0 }, o = function (t) { e(t, r, { value: { objectID: "O" + ++n, weakData: {} } }) }, s = t.exports = { REQUIRED: !1, fastKey: function (t, e) { if (!x(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!O(t, r)) { if (!i(t)) return "F"; if (!e) return "E"; o(t) } return t[r].objectID }, getWeakData: function (t, e) { if (!O(t, r)) { if (!i(t)) return !0; if (!e) return !1; o(t) } return t[r].weakData }, onFreeze: function (t) { return tr && s.REQUIRED && i(t) && !O(t, r) && o(t), t } }; q[r] = !0 })), rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt("iterator")), nr = Array.prototype, ir = zt("iterator"), or = function (t, e, r, n) { try { return n ? e(T(r)[0], r[1]) : e(r) } catch (e) { var i = t.return; throw void 0 !== i && T(i.call(t)), e } }, sr = e((function (t) { var e = function (t, e) { this.stopped = t, this.result = e }; (t.exports = function (t, r, n, i, o) { var s, a, c, l, u, f, h, d = Lt(r, n, i ? 2 : 1); if (o) s = t; else { if ("function" != typeof (a = function (t) { if (null != t) return t[ir] || t["@@iterator"] || le[Ce(t)] }(t))) throw TypeError("Target is not iterable"); if (void 0 !== (h = a) && (le.Array === h || nr[rr] === h)) { for (c = 0, l = st(t.length); l > c; c++)if ((u = i ? d(T(f = t[c])[0], f[1]) : d(t[c])) && u instanceof e) return u; return new e(!1) } s = a.call(t) } for (; !(f = s.next()).done;)if ((u = or(s, d, f.value, i)) && u instanceof e) return u; return new e(!1) }).stop = function (t) { return new e(!0, t) } })), ar = function (t, e, r) { if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation"); return t }, cr = zt("iterator"), lr = !1; try { var ur = 0, fr = { next: function () { return { done: !!ur++ } }, return: function () { lr = !0 } }; fr[cr] = function () { return this }, Array.from(fr, (function () { throw 2 })) } catch (t) { } var hr = function (t, e, r, n, i) { var o = a[t], s = o && o.prototype, l = o, u = n ? "set" : "add", f = {}, h = function (t) { var e = s[t]; J(s, t, "add" == t ? function (t) { return e.call(this, 0 === t ? 0 : t), this } : "delete" == t ? function (t) { return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t) } : "get" == t ? function (t) { return i && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t) } : "has" == t ? function (t) { return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t) } : function (t, r) { return e.call(this, 0 === t ? 0 : t, r), this }) }; if (_t(t, "function" != typeof o || !(i || s.forEach && !c((function () { (new o).entries().next() }))))) l = r.getConstructor(e, t, n, u), er.REQUIRED = !0; else if (_t(t, !0)) { var d = new l, p = d[u](i ? {} : -0, 1) != d, v = c((function () { d.has(1) })), g = function (t, e) { if (!e && !lr) return !1; var r = !1; try { var n = {}; n[cr] = function () { return { next: function () { return { done: r = !0 } } } }, t(n) } catch (t) { } return r }((function (t) { new o(t) })), y = !i && c((function () { for (var t = new o, e = 5; e--;)t[u](e, e); return !t.has(-0) })); g || ((l = e((function (e, r) { ar(e, l, t); var i = function (t, e, r) { var n, i; return we && "function" == typeof (n = e.constructor) && n !== r && x(i = n.prototype) && i !== r.prototype && we(t, i), t }(new o, e, l); return null != r && sr(r, i[u], i, n), i }))).prototype = s, s.constructor = l), (v || y) && (h("delete"), h("has"), n && h("get")), (y || p) && h(u), i && s.clear && delete s.clear } return f[t] = l, At({ global: !0, forced: l != o }, f), me(l, t), i || r.setStrong(l, t, n), l }, dr = er.getWeakData, pr = K.set, vr = K.getterFor, gr = Pt.find, yr = Pt.findIndex, br = 0, mr = function (t) { return t.frozen || (t.frozen = new xr) }, xr = function () { this.entries = [] }, Er = function (t, e) { return gr(t.entries, (function (t) { return t[0] === e })) }; xr.prototype = { get: function (t) { var e = Er(this, t); if (e) return e[1] }, has: function (t) { return !!Er(this, t) }, set: function (t, e) { var r = Er(this, t); r ? r[1] = e : this.entries.push([t, e]) }, delete: function (t) { var e = yr(this.entries, (function (e) { return e[0] === t })); return ~e && this.entries.splice(e, 1), !!~e } }; var wr = { getConstructor: function (t, e, r, n) { var i = t((function (t, o) { ar(t, i, e), pr(t, { type: e, id: br++, frozen: void 0 }), null != o && sr(o, t[n], t, r) })), o = vr(e), s = function (t, e, r) { var n = o(t), i = dr(T(e), !0); return !0 === i ? mr(n).set(e, r) : i[n.id] = r, t }; return Ze(i.prototype, { delete: function (t) { var e = o(this); if (!x(t)) return !1; var r = dr(t); return !0 === r ? mr(e).delete(t) : r && O(r, e.id) && delete r[e.id] }, has: function (t) { var e = o(this); if (!x(t)) return !1; var r = dr(t); return !0 === r ? mr(e).has(t) : r && O(r, e.id) } }), Ze(i.prototype, r ? { get: function (t) { var e = o(this); if (x(t)) { var r = dr(t); return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0 } }, set: function (t, e) { return s(this, t, e) } } : { add: function (t) { return s(this, t, !0) } }), i } }, Or = (e((function (t) { var e, r = K.enforce, n = !a.ActiveXObject && "ActiveXObject" in a, i = Object.isExtensible, o = function (t) { return function () { return t(this, arguments.length ? arguments[0] : void 0) } }, s = t.exports = hr("WeakMap", o, wr, !0, !0); if (D && n) { e = wr.getConstructor(o, "WeakMap", !0), er.REQUIRED = !0; var c = s.prototype, l = c.delete, u = c.has, f = c.get, h = c.set; Ze(c, { delete: function (t) { if (x(t) && !i(t)) { var n = r(this); return n.frozen || (n.frozen = new e), l.call(this, t) || n.frozen.delete(t) } return l.call(this, t) }, has: function (t) { if (x(t) && !i(t)) { var n = r(this); return n.frozen || (n.frozen = new e), u.call(this, t) || n.frozen.has(t) } return u.call(this, t) }, get: function (t) { if (x(t) && !i(t)) { var n = r(this); return n.frozen || (n.frozen = new e), u.call(this, t) ? f.call(this, t) : n.frozen.get(t) } return f.call(this, t) }, set: function (t, n) { if (x(t) && !i(t)) { var o = r(this); o.frozen || (o.frozen = new e), u.call(this, t) ? h.call(this, t, n) : o.frozen.set(t, n) } else h.call(this, t, n); return this } }) } })), zt("iterator")), _r = zt("toStringTag"), Sr = Te.values; for (var Ar in Ht) { var kr = a[Ar], Lr = kr && kr.prototype; if (Lr) { if (Lr[Or] !== Sr) try { W(Lr, Or, Sr) } catch (t) { Lr[Or] = Sr } if (Lr[_r] || W(Lr, _r, Ar), Ht[Ar]) for (var Mr in Te) if (Lr[Mr] !== Te[Mr]) try { W(Lr, Mr, Te[Mr]) } catch (t) { Lr[Mr] = Te[Mr] } } } var Tr = "Expected a function", jr = NaN, Rr = "[object Symbol]", Wr = /^\s+|\s+$/g, zr = /^[-+]0x[0-9a-f]+$/i, Cr = /^0b[01]+$/i, Nr = /^0o[0-7]+$/i, Ir = parseInt, Dr = "object" == typeof t && t && t.Object === Object && t, Pr = "object" == typeof self && self && self.Object === Object && self, Vr = Dr || Pr || Function("return this")(), Fr = Object.prototype.toString, Br = Math.max, Hr = Math.min, qr = function () { return Vr.Date.now() }; function $r(t, e, r) { var n, i, o, s, a, c, l = 0, u = !1, f = !1, h = !0; if ("function" != typeof t) throw new TypeError(Tr); function d(e) { var r = n, o = i; return n = i = void 0, l = e, s = t.apply(o, r) } function p(t) { var r = t - c; return void 0 === c || r >= e || r < 0 || f && t - l >= o } function v() { var t = qr(); if (p(t)) return g(t); a = setTimeout(v, function (t) { var r = e - (t - c); return f ? Hr(r, o - (t - l)) : r }(t)) } function g(t) { return a = void 0, h && n ? d(t) : (n = i = void 0, s) } function y() { var t = qr(), r = p(t); if (n = arguments, i = this, c = t, r) { if (void 0 === a) return function (t) { return l = t, a = setTimeout(v, e), u ? d(t) : s }(c); if (f) return a = setTimeout(v, e), d(c) } return void 0 === a && (a = setTimeout(v, e)), s } return e = Yr(e) || 0, Xr(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? Br(Yr(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function () { void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0 }, y.flush = function () { return void 0 === a ? s : g(qr()) }, y } function Xr(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) } function Yr(t) { if ("number" == typeof t) return t; if (function (t) { return "symbol" == typeof t || function (t) { return !!t && "object" == typeof t }(t) && Fr.call(t) == Rr }(t)) return jr; if (Xr(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t; t = Xr(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t; t = t.replace(Wr, ""); var r = Cr.test(t); return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : zr.test(t) ? jr : +t } var Gr = function (t, e, r) { var n = !0, i = !0; if ("function" != typeof t) throw new TypeError(Tr); return Xr(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), $r(t, e, { leading: n, maxWait: e, trailing: i }) }, Ur = "Expected a function", Qr = NaN, Kr = "[object Symbol]", Jr = /^\s+|\s+$/g, Zr = /^[-+]0x[0-9a-f]+$/i, tn = /^0b[01]+$/i, en = /^0o[0-7]+$/i, rn = parseInt, nn = "object" == typeof t && t && t.Object === Object && t, on = "object" == typeof self && self && self.Object === Object && self, sn = nn || on || Function("return this")(), an = Object.prototype.toString, cn = Math.max, ln = Math.min, un = function () { return sn.Date.now() }; function fn(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) } function hn(t) { if ("number" == typeof t) return t; if (function (t) { return "symbol" == typeof t || function (t) { return !!t && "object" == typeof t }(t) && an.call(t) == Kr }(t)) return Qr; if (fn(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t; t = fn(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t; t = t.replace(Jr, ""); var r = tn.test(t); return r || en.test(t) ? rn(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t } var dn = function (t, e, r) { var n, i, o, s, a, c, l = 0, u = !1, f = !1, h = !0; if ("function" != typeof t) throw new TypeError(Ur); function d(e) { var r = n, o = i; return n = i = void 0, l = e, s = t.apply(o, r) } function p(t) { var r = t - c; return void 0 === c || r >= e || r < 0 || f && t - l >= o } function v() { var t = un(); if (p(t)) return g(t); a = setTimeout(v, function (t) { var r = e - (t - c); return f ? ln(r, o - (t - l)) : r }(t)) } function g(t) { return a = void 0, h && n ? d(t) : (n = i = void 0, s) } function y() { var t = un(), r = p(t); if (n = arguments, i = this, c = t, r) { if (void 0 === a) return function (t) { return l = t, a = setTimeout(v, e), u ? d(t) : s }(c); if (f) return a = setTimeout(v, e), d(c) } return void 0 === a && (a = setTimeout(v, e)), s } return e = hn(e) || 0, fn(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? cn(hn(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function () { void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0 }, y.flush = function () { return void 0 === a ? s : g(un()) }, y }, pn = "Expected a function", vn = "__lodash_hash_undefined__", gn = "[object Function]", yn = "[object GeneratorFunction]", bn = /^\[object .+?Constructor\]$/, mn = "object" == typeof t && t && t.Object === Object && t, xn = "object" == typeof self && self && self.Object === Object && self, En = mn || xn || Function("return this")(); var wn = Array.prototype, On = Function.prototype, _n = Object.prototype, Sn = En["__core-js_shared__"], An = function () { var t = /[^.]+$/.exec(Sn && Sn.keys && Sn.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }(), kn = On.toString, Ln = _n.hasOwnProperty, Mn = _n.toString, Tn = RegExp("^" + kn.call(Ln).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), jn = wn.splice, Rn = Vn(En, "Map"), Wn = Vn(Object, "create"); function zn(t) { var e = -1, r = t ? t.length : 0; for (this.clear(); ++e < r;) { var n = t[e]; this.set(n[0], n[1]) } } function Cn(t) { var e = -1, r = t ? t.length : 0; for (this.clear(); ++e < r;) { var n = t[e]; this.set(n[0], n[1]) } } function Nn(t) { var e = -1, r = t ? t.length : 0; for (this.clear(); ++e < r;) { var n = t[e]; this.set(n[0], n[1]) } } function In(t, e) { for (var r, n, i = t.length; i--;)if ((r = t[i][0]) === (n = e) || r != r && n != n) return i; return -1 } function Dn(t) { return !(!Bn(t) || (e = t, An && An in e)) && (function (t) { var e = Bn(t) ? Mn.call(t) : ""; return e == gn || e == yn }(t) || function (t) { var e = !1; if (null != t && "function" != typeof t.toString) try { e = !!(t + "") } catch (t) { } return e }(t) ? Tn : bn).test(function (t) { if (null != t) { try { return kn.call(t) } catch (t) { } try { return t + "" } catch (t) { } } return "" }(t)); var e } function Pn(t, e) { var r, n, i = t.__data__; return ("string" == (n = typeof (r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map } function Vn(t, e) { var r = function (t, e) { return null == t ? void 0 : t[e] }(t, e); return Dn(r) ? r : void 0 } function Fn(t, e) { if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(pn); var r = function () { var n = arguments, i = e ? e.apply(this, n) : n[0], o = r.cache; if (o.has(i)) return o.get(i); var s = t.apply(this, n); return r.cache = o.set(i, s), s }; return r.cache = new (Fn.Cache || Nn), r } function Bn(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) } zn.prototype.clear = function () { this.__data__ = Wn ? Wn(null) : {} }, zn.prototype.delete = function (t) { return this.has(t) && delete this.__data__[t] }, zn.prototype.get = function (t) { var e = this.__data__; if (Wn) { var r = e[t]; return r === vn ? void 0 : r } return Ln.call(e, t) ? e[t] : void 0 }, zn.prototype.has = function (t) { var e = this.__data__; return Wn ? void 0 !== e[t] : Ln.call(e, t) }, zn.prototype.set = function (t, e) { return this.__data__[t] = Wn && void 0 === e ? vn : e, this }, Cn.prototype.clear = function () { this.__data__ = [] }, Cn.prototype.delete = function (t) { var e = this.__data__, r = In(e, t); return !(r < 0) && (r == e.length - 1 ? e.pop() : jn.call(e, r, 1), !0) }, Cn.prototype.get = function (t) { var e = this.__data__, r = In(e, t); return r < 0 ? void 0 : e[r][1] }, Cn.prototype.has = function (t) { return In(this.__data__, t) > -1 }, Cn.prototype.set = function (t, e) { var r = this.__data__, n = In(r, t); return n < 0 ? r.push([t, e]) : r[n][1] = e, this }, Nn.prototype.clear = function () { this.__data__ = { hash: new zn, map: new (Rn || Cn), string: new zn } }, Nn.prototype.delete = function (t) { return Pn(this, t).delete(t) }, Nn.prototype.get = function (t) { return Pn(this, t).get(t) }, Nn.prototype.has = function (t) { return Pn(this, t).has(t) }, Nn.prototype.set = function (t, e) { return Pn(this, t).set(t, e), this }, Fn.Cache = Nn; var Hn = Fn, qn = function () { if ("undefined" != typeof Map) return Map; function t(t, e) { var r = -1; return t.some((function (t, n) { return t[0] === e && (r = n, !0) })), r } return function () { function e() { this.__entries__ = [] } return Object.defineProperty(e.prototype, "size", { get: function () { return this.__entries__.length }, enumerable: !0, configurable: !0 }), e.prototype.get = function (e) { var r = t(this.__entries__, e), n = this.__entries__[r]; return n && n[1] }, e.prototype.set = function (e, r) { var n = t(this.__entries__, e); ~n ? this.__entries__[n][1] = r : this.__entries__.push([e, r]) }, e.prototype.delete = function (e) { var r = this.__entries__, n = t(r, e); ~n && r.splice(n, 1) }, e.prototype.has = function (e) { return !!~t(this.__entries__, e) }, e.prototype.clear = function () { this.__entries__.splice(0) }, e.prototype.forEach = function (t, e) { void 0 === e && (e = null); for (var r = 0, n = this.__entries__; r < n.length; r++) { var i = n[r]; t.call(e, i[1], i[0]) } }, e }() }(), $n = "undefined" != typeof window && "undefined" != typeof document && window.document === document, Xn = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(), Yn = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Xn) : function (t) { return setTimeout((function () { return t(Date.now()) }), 1e3 / 60) }, Gn = 2; var Un = 20, Qn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Kn = "undefined" != typeof MutationObserver, Jn = function () { function t() { this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) { var r = !1, n = !1, i = 0; function o() { r && (r = !1, t()), n && a() } function s() { Yn(o) } function a() { var t = Date.now(); if (r) { if (t - i < Gn) return; n = !0 } else r = !0, n = !1, setTimeout(s, e); i = t } return a }(this.refresh.bind(this), Un) } return t.prototype.addObserver = function (t) { ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_() }, t.prototype.removeObserver = function (t) { var e = this.observers_, r = e.indexOf(t); ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_() }, t.prototype.refresh = function () { this.updateObservers_() && this.refresh() }, t.prototype.updateObservers_ = function () { var t = this.observers_.filter((function (t) { return t.gatherActive(), t.hasActive() })); return t.forEach((function (t) { return t.broadcastActive() })), t.length > 0 }, t.prototype.connect_ = function () { $n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Kn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0) }, t.prototype.disconnect_ = function () { $n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1) }, t.prototype.onTransitionEnd_ = function (t) { var e = t.propertyName, r = void 0 === e ? "" : e; Qn.some((function (t) { return !!~r.indexOf(t) })) && this.refresh() }, t.getInstance = function () { return this.instance_ || (this.instance_ = new t), this.instance_ }, t.instance_ = null, t }(), Zn = function (t, e) { for (var r = 0, n = Object.keys(e); r < n.length; r++) { var i = n[r]; Object.defineProperty(t, i, { value: e[i], enumerable: !1, writable: !1, configurable: !0 }) } return t }, ti = function (t) { return t && t.ownerDocument && t.ownerDocument.defaultView || Xn }, ei = ai(0, 0, 0, 0); function ri(t) { return parseFloat(t) || 0 } function ni(t) { for (var e = [], r = 1; r < arguments.length; r++)e[r - 1] = arguments[r]; return e.reduce((function (e, r) { return e + ri(t["border-" + r + "-width"]) }), 0) } function ii(t) { var e = t.clientWidth, r = t.clientHeight; if (!e && !r) return ei; var n = ti(t).getComputedStyle(t), i = function (t) { for (var e = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) { var i = n[r], o = t["padding-" + i]; e[i] = ri(o) } return e }(n), o = i.left + i.right, s = i.top + i.bottom, a = ri(n.width), c = ri(n.height); if ("border-box" === n.boxSizing && (Math.round(a + o) !== e && (a -= ni(n, "left", "right") + o), Math.round(c + s) !== r && (c -= ni(n, "top", "bottom") + s)), !function (t) { return t === ti(t).document.documentElement }(t)) { var l = Math.round(a + o) - e, u = Math.round(c + s) - r; 1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u) } return ai(i.left, i.top, a, c) } var oi = "undefined" != typeof SVGGraphicsElement ? function (t) { return t instanceof ti(t).SVGGraphicsElement } : function (t) { return t instanceof ti(t).SVGElement && "function" == typeof t.getBBox }; function si(t) { return $n ? oi(t) ? function (t) { var e = t.getBBox(); return ai(0, 0, e.width, e.height) }(t) : ii(t) : ei } function ai(t, e, r, n) { return { x: t, y: e, width: r, height: n } } var ci = function () { function t(t) { this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ai(0, 0, 0, 0), this.target = t } return t.prototype.isActive = function () { var t = si(this.target); return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight }, t.prototype.broadcastRect = function () { var t = this.contentRect_; return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t }, t }(), li = function (t, e) { var r, n, i, o, s, a, c, l = (n = (r = e).x, i = r.y, o = r.width, s = r.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(a.prototype), Zn(c, { x: n, y: i, width: o, height: s, top: i, right: n + o, bottom: s + i, left: n }), c); Zn(this, { target: t, contentRect: l }) }, ui = function () { function t(t, e, r) { if (this.activeObservations_ = [], this.observations_ = new qn, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function."); this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r } return t.prototype.observe = function (t) { if (!arguments.length) throw new TypeError("1 argument required, but only 0 present."); if ("undefined" != typeof Element && Element instanceof Object) { if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".'); var e = this.observations_; e.has(t) || (e.set(t, new ci(t)), this.controller_.addObserver(this), this.controller_.refresh()) } }, t.prototype.unobserve = function (t) { if (!arguments.length) throw new TypeError("1 argument required, but only 0 present."); if ("undefined" != typeof Element && Element instanceof Object) { if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".'); var e = this.observations_; e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this)) } }, t.prototype.disconnect = function () { this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this) }, t.prototype.gatherActive = function () { var t = this; this.clearActive(), this.observations_.forEach((function (e) { e.isActive() && t.activeObservations_.push(e) })) }, t.prototype.broadcastActive = function () { if (this.hasActive()) { var t = this.callbackCtx_, e = this.activeObservations_.map((function (t) { return new li(t.target, t.broadcastRect()) })); this.callback_.call(t, e, t), this.clearActive() } }, t.prototype.clearActive = function () { this.activeObservations_.splice(0) }, t.prototype.hasActive = function () { return this.activeObservations_.length > 0 }, t }(), fi = "undefined" != typeof WeakMap ? new WeakMap : new qn, hi = function t(e) { if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function."); if (!arguments.length) throw new TypeError("1 argument required, but only 0 present."); var r = Jn.getInstance(), n = new ui(e, r, this); fi.set(this, n) };["observe", "unobserve", "disconnect"].forEach((function (t) { hi.prototype[t] = function () { var e; return (e = fi.get(this))[t].apply(e, arguments) } })); var di = void 0 !== Xn.ResizeObserver ? Xn.ResizeObserver : hi, pi = null, vi = null; function gi() { if (null === pi) { if ("undefined" == typeof document) return pi = 0; var t = document.body, e = document.createElement("div"); e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e); var r = e.getBoundingClientRect().right; t.removeChild(e), pi = r } return pi } Yt && window.addEventListener("resize", (function () { vi !== window.devicePixelRatio && (vi = window.devicePixelRatio, pi = null) })); var yi = function (t) { return function (e, r, n, i) { kt(r); var o = Mt(e), s = y(o), a = st(o.length), c = t ? a - 1 : 0, l = t ? -1 : 1; if (n < 2) for (; ;) { if (c in s) { i = s[c], c += l; break } if (c += l, t ? c < 0 : a <= c) throw TypeError("Reduce of empty array with no initial value") } for (; t ? c >= 0 : a > c; c += l)c in s && (i = r(i, s[c], c, o)); return i } }, bi = { left: yi(!1), right: yi(!0) }.left; At({ target: "Array", proto: !0, forced: Vt("reduce") }, { reduce: function (t) { return bi(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0) } }); var mi = R.f, xi = Function.prototype, Ei = xi.toString, wi = /^\s*function ([^ (]*)/; !l || "name" in xi || mi(xi, "name", { configurable: !0, get: function () { try { return Ei.call(this).match(wi)[1] } catch (t) { return "" } } }); var Oi, _i, Si = function () { var t = T(this), e = ""; return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e }, Ai = RegExp.prototype.exec, ki = String.prototype.replace, Li = Ai, Mi = (Oi = /a/, _i = /b*/g, Ai.call(Oi, "a"), Ai.call(_i, "a"), 0 !== Oi.lastIndex || 0 !== _i.lastIndex), Ti = void 0 !== /()??/.exec("")[1]; (Mi || Ti) && (Li = function (t) { var e, r, n, i, o = this; return Ti && (r = new RegExp("^" + o.source + "$(?!\\s)", Si.call(o))), Mi && (e = o.lastIndex), n = Ai.call(o, t), Mi && n && (o.lastIndex = o.global ? n.index + n[0].length : e), Ti && n && n.length > 1 && ki.call(n[0], r, (function () { for (i = 1; i < arguments.length - 2; i++)void 0 === arguments[i] && (n[i] = void 0) })), n }); var ji = Li; At({ target: "RegExp", proto: !0, forced: /./.exec !== ji }, { exec: ji }); var Ri = zt("species"), Wi = !c((function () { var t = /./; return t.exec = function () { var t = []; return t.groups = { a: "7" }, t }, "7" !== "".replace(t, "$<a>") })), zi = !c((function () { var t = /(?:)/, e = t.exec; t.exec = function () { return e.apply(this, arguments) }; var r = "ab".split(t); return 2 !== r.length || "a" !== r[0] || "b" !== r[1] })), Ci = function (t, e, r, n) { var i = zt(t), o = !c((function () { var e = {}; return e[i] = function () { return 7 }, 7 != ""[t](e) })), s = o && !c((function () { var e = !1, r = /a/; return r.exec = function () { return e = !0, null }, "split" === t && (r.constructor = {}, r.constructor[Ri] = function () { return r }), r[i](""), !e })); if (!o || !s || "replace" === t && !Wi || "split" === t && !zi) { var a = /./[i], l = r(i, ""[t], (function (t, e, r, n, i) { return e.exec === ji ? o && !i ? { done: !0, value: a.call(e, r, n) } : { done: !0, value: t.call(r, e, n) } : { done: !1 } })), u = l[0], f = l[1]; J(String.prototype, t, u), J(RegExp.prototype, i, 2 == e ? function (t, e) { return f.call(t, this, e) } : function (t) { return f.call(t, this) }), n && W(RegExp.prototype[i], "sham", !0) } }, Ni = Ue.charAt, Ii = function (t, e, r) { return e + (r ? Ni(t, e).length : 1) }, Di = function (t, e) { var r = t.exec; if ("function" == typeof r) { var n = r.call(t, e); if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null"); return n } if ("RegExp" !== v(t)) throw TypeError("RegExp#exec called on incompatible receiver"); return ji.call(t, e) }; Ci("match", 1, (function (t, e, r) { return [function (e) { var r = b(this), n = null == e ? void 0 : e[t]; return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r)) }, function (t) { var n = r(e, t, this); if (n.done) return n.value; var i = T(t), o = String(this); if (!i.global) return Di(i, o); var s = i.unicode; i.lastIndex = 0; for (var a, c = [], l = 0; null !== (a = Di(i, o));) { var u = String(a[0]); c[l] = u, "" === u && (i.lastIndex = Ii(o, st(i.lastIndex), s)), l++ } return 0 === l ? null : c }] })); var Pi = Math.max, Vi = Math.min, Fi = Math.floor, Bi = /\$([$&'`]|\d\d?|<[^>]*>)/g, Hi = /\$([$&'`]|\d\d?)/g; Ci("replace", 2, (function (t, e, r) { return [function (r, n) { var i = b(this), o = null == r ? void 0 : r[t]; return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n) }, function (t, i) { var o = r(e, t, this, i); if (o.done) return o.value; var s = T(t), a = String(this), c = "function" == typeof i; c || (i = String(i)); var l = s.global; if (l) { var u = s.unicode; s.lastIndex = 0 } for (var f = []; ;) { var h = Di(s, a); if (null === h) break; if (f.push(h), !l) break; "" === String(h[0]) && (s.lastIndex = Ii(a, st(s.lastIndex), u)) } for (var d, p = "", v = 0, g = 0; g < f.length; g++) { h = f[g]; for (var y = String(h[0]), b = Pi(Vi(it(h.index), a.length), 0), m = [], x = 1; x < h.length; x++)m.push(void 0 === (d = h[x]) ? d : String(d)); var E = h.groups; if (c) { var w = [y].concat(m, b, a); void 0 !== E && w.push(E); var O = String(i.apply(void 0, w)) } else O = n(y, a, b, m, E, i); b >= v && (p += a.slice(v, b) + O, v = b + y.length) } return p + a.slice(v) }]; function n(t, r, n, i, o, s) { var a = n + t.length, c = i.length, l = Hi; return void 0 !== o && (o = Mt(o), l = Bi), e.call(s, l, (function (e, s) { var l; switch (s.charAt(0)) { case "$": return "$"; case "&": return t; case "`": return r.slice(0, n); case "'": return r.slice(a); case "<": l = o[s.slice(1, -1)]; break; default: var u = +s; if (0 === u) return e; if (u > c) { var f = Fi(u / 10); return 0 === f ? e : f <= c ? void 0 === i[f - 1] ? s.charAt(1) : i[f - 1] + s.charAt(1) : e } l = i[u - 1] }return void 0 === l ? "" : l })) } })); var qi = function (t) { return Array.prototype.reduce.call(t, (function (t, e) { var r = e.name.match(/data-simplebar-(.+)/); if (r) { var n = r[1].replace(/\W+(.)/g, (function (t, e) { return e.toUpperCase() })); switch (e.value) { case "true": t[n] = !0; break; case "false": t[n] = !1; break; case void 0: t[n] = !0; break; default: t[n] = e.value } } return t }), {}) }; function $i(t) { return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window } function Xi(t) { return t && t.ownerDocument ? t.ownerDocument : document } var Yi = function () { function t(e, r) { var n = this; this.onScroll = function () { var t = $i(n.el); n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (t.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0) }, this.scrollX = function () { n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1 }, this.scrollY = function () { n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1 }, this.onMouseEnter = function () { n.showScrollbar("x"), n.showScrollbar("y") }, this.onMouseMove = function (t) { n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y") }, this.onMouseLeave = function () { n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1 }, this.onWindowResize = function () { n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar() }, this.hideScrollbars = function () { n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1) }, this.onPointerEvent = function (t) { var e, r; n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (e = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (r = n.isWithinBounds(n.axis.y.track.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(t, "x") : n.onTrackClick(t, "x")), r && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(t, "y") : n.onTrackClick(t, "y")))) }, this.drag = function (e) { var r = n.axis[n.draggedAxis].track, i = r.rect[n.axis[n.draggedAxis].sizeAttr], o = n.axis[n.draggedAxis].scrollbar, s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr], a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10); e.preventDefault(), e.stopPropagation(); var c = (("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (i - o.size) * (s - a); "x" === n.draggedAxis && (c = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c - (i + o.size) : c, c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c }, this.onEndDrag = function (t) { var e = Xi(n.el), r = $i(n.el); t.preventDefault(), t.stopPropagation(), n.el.classList.remove(n.classNames.dragging), e.removeEventListener("mousemove", n.drag, !0), e.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = r.setTimeout((function () { e.removeEventListener("click", n.preventClick, !0), e.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null })) }, this.preventClick = function (t) { t.preventDefault(), t.stopPropagation() }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, {}, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, {}, this.options.classNames), this.axis = { x: { scrollOffsetAttr: "scrollLeft", sizeAttr: "width", scrollSizeAttr: "scrollWidth", offsetSizeAttr: "offsetWidth", offsetAttr: "left", overflowAttr: "overflowX", dragOffset: 0, isOverflowing: !0, isVisible: !1, forceVisible: !1, track: {}, scrollbar: {} }, y: { scrollOffsetAttr: "scrollTop", sizeAttr: "height", scrollSizeAttr: "scrollHeight", offsetSizeAttr: "offsetHeight", offsetAttr: "top", overflowAttr: "overflowY", dragOffset: 0, isOverflowing: !0, isVisible: !1, forceVisible: !1, track: {}, scrollbar: {} } }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = Gr(this.recalculate.bind(this), 64), this.onMouseMove = Gr(this.onMouseMove.bind(this), 64), this.hideScrollbars = dn(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = dn(this.onWindowResize.bind(this), 64, { leading: !0 }), t.getRtlHelpers = Hn(t.getRtlHelpers), this.init()) } t.getRtlHelpers = function () { var e = document.createElement("div"); e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>'; var r = e.firstElementChild; document.body.appendChild(r); var n = r.firstElementChild; r.scrollLeft = 0; var i = t.getOffset(r), o = t.getOffset(n); r.scrollLeft = 999; var s = t.getOffset(n); return { isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0, isRtlScrollbarInverted: i.left !== o.left } }, t.getOffset = function (t) { var e = t.getBoundingClientRect(), r = Xi(t), n = $i(t); return { top: e.top + (n.pageYOffset || r.documentElement.scrollTop), left: e.left + (n.pageXOffset || r.documentElement.scrollLeft) } }; var e = t.prototype; return e.init = function () { t.instances.set(this.el, this), Yt && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners()) }, e.initDOM = function () { var t = this; Xi(this.el); if (Array.prototype.filter.call(this.el.children, (function (e) { return e.classList.contains(t.classNames.wrapper) })).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical); else { for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild); this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl) } if (!this.axis.x.track.el || !this.axis.y.track.el) { var e = document.createElement("div"), r = document.createElement("div"); e.classList.add(this.classNames.track), r.classList.add(this.classNames.scrollbar), e.appendChild(r), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el) } this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init") }, e.initListeners = function () { var t = this, e = $i(this.el); this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function (e) { t.el.addEventListener(e, t.onPointerEvent, !0) })), ["touchstart", "touchend", "touchmove"].forEach((function (e) { t.el.addEventListener(e, t.onPointerEvent, { capture: !0, passive: !0 }) })), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize); var r = !1, n = e.ResizeObserver || di; this.resizeObserver = new n((function () { r && t.recalculate() })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame((function () { r = !0 })), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 }) }, e.recalculate = function () { var t = $i(this.el); this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction; var e = this.heightAutoObserverEl.offsetHeight <= 1, r = this.heightAutoObserverEl.offsetWidth <= 1, n = this.contentEl.offsetWidth, i = this.contentWrapperEl.offsetWidth, o = this.elStyles.overflowX, s = this.elStyles.overflowY; this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft; var a = this.contentEl.scrollHeight, c = this.contentEl.scrollWidth; this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = r ? n + "px" : "auto", this.placeholderEl.style.height = a + "px"; var l = this.contentWrapperEl.offsetHeight; this.axis.x.isOverflowing = c > n, this.axis.y.isOverflowing = a > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar(); var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0; this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y") }, e.getScrollbarSize = function (t) { if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0; var e, r = this.contentEl[this.axis[t].scrollSizeAttr], n = this.axis[t].track.el[this.axis[t].offsetSizeAttr], i = n / r; return e = Math.max(~~(i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e }, e.positionScrollbar = function (e) { if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) { var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr], n = this.axis[e].track.el[this.axis[e].offsetSizeAttr], i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10), o = this.axis[e].scrollbar, s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr], a = (s = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (r - i), c = ~~((n - o.size) * a); c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (n - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)" } }, e.toggleTrackVisibility = function (t) { void 0 === t && (t = "y"); var e = this.axis[t].track.el, r = this.axis[t].scrollbar.el; this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? r.style.display = "block" : r.style.display = "none" }, e.hideNativeScrollbar = function () { this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0 }, e.onMouseMoveForAxis = function (t) { void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover) }, e.onMouseLeaveForAxis = function (t) { void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover) }, e.showScrollbar = function (t) { void 0 === t && (t = "y"); var e = this.axis[t].scrollbar.el; this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars() }, e.onDragStart = function (t, e) { void 0 === e && (e = "y"); var r = Xi(this.el), n = $i(this.el), i = this.axis[e].scrollbar, o = "y" === e ? t.pageY : t.pageX; this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), r.addEventListener("mousemove", this.drag, !0), r.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (r.addEventListener("click", this.preventClick, !0), r.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null) }, e.onTrackClick = function (t, e) { var r = this; if (void 0 === e && (e = "y"), this.options.clickOnTrack) { var n = $i(this.el); this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect(); var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr], o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10), s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr], a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1, c = -1 === a ? s - o : s + o; !function t() { var i, o; -1 === a ? s > c && (s -= 40, r.contentWrapperEl.scrollTo(((i = {})[r.axis[e].offsetAttr] = s, i)), n.requestAnimationFrame(t)) : s < c && (s += 40, r.contentWrapperEl.scrollTo(((o = {})[r.axis[e].offsetAttr] = s, o)), n.requestAnimationFrame(t)) }() } }, e.getContentElement = function () { return this.contentEl }, e.getScrollElement = function () { return this.contentWrapperEl }, e.getScrollbarWidth = function () { try { return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : gi() } catch (t) { return gi() } }, e.removeListeners = function () { var t = this, e = $i(this.el); this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function (e) { t.el.removeEventListener(e, t.onPointerEvent, !0) })), ["touchstart", "touchend", "touchmove"].forEach((function (e) { t.el.removeEventListener(e, t.onPointerEvent, { capture: !0, passive: !0 }) })), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel() }, e.unMount = function () { this.removeListeners(), t.instances.delete(this.el) }, e.isWithinBounds = function (t) { return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height }, e.findChild = function (t, e) { var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector; return Array.prototype.filter.call(t.children, (function (t) { return r.call(t, e) }))[0] }, t }(); return Yi.defaultOptions = { autoHide: !0, forceVisible: !1, clickOnTrack: !0, classNames: { contentEl: "simplebar-content", contentWrapper: "simplebar-content-wrapper", offset: "simplebar-offset", mask: "simplebar-mask", wrapper: "simplebar-wrapper", placeholder: "simplebar-placeholder", scrollbar: "simplebar-scrollbar", track: "simplebar-track", heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper", heightAutoObserverEl: "simplebar-height-auto-observer", visible: "simplebar-visible", horizontal: "simplebar-horizontal", vertical: "simplebar-vertical", hover: "simplebar-hover", dragging: "simplebar-dragging" }, scrollbarMinSize: 25, scrollbarMaxSize: 0, timeout: 1e3 }, Yi.instances = new WeakMap, Yi.initDOMLoadedElements = function () { document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), (function (t) { Yi.instances.has(t) || new Yi(t, qi(t.attributes)) })) }, Yi.removeObserver = function () { this.globalObserver.disconnect() }, Yi.initHtmlApi = function () { this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Yi.handleMutations), this.globalObserver.observe(document, { childList: !0, subtree: !0 })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements)) }, Yi.handleMutations = function (t) { t.forEach((function (t) { Array.prototype.forEach.call(t.addedNodes, (function (t) { 1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !Yi.instances.has(t) && new Yi(t, qi(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), (function (t) { !Yi.instances.has(t) && new Yi(t, qi(t.attributes)) }))) })), Array.prototype.forEach.call(t.removedNodes, (function (t) { 1 === t.nodeType && (t.hasAttribute('[data-simplebar="init"]') ? Yi.instances.has(t) && Yi.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), (function (t) { Yi.instances.has(t) && Yi.instances.get(t).unMount() }))) })) })) }, Yi.getOptions = qi, Yt && Yi.initHtmlApi(), Yi }));
