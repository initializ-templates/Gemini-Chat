(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(b||(b={}));var w;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(w||(w={}));var M;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(M||(M={}));var L;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(L||(L={}));var O;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(O||(O={}));var G;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(G||(G={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p extends Error{constructor(s){super(`[GoogleGenerativeAI Error]: ${s}`)}}class H extends p{constructor(s,n){super(s),this.response=n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="https://generativelanguage.googleapis.com",U="v1",$="0.2.0",B="genai-js";var h;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(h||(h={}));class _{constructor(s,n,i,t){this.model=s,this.task=n,this.apiKey=i,this.stream=t}toString(){let s=`${Y}/${U}/models/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function j(){return`${B}/${$}`}async function y(e,s,n){let i;try{if(i=await fetch(e.toString(),Object.assign(Object.assign({},q(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":j(),"x-goog-api-key":e.apiKey},body:s})),!i.ok){let t="";try{const o=await i.json();t=o.error.message,o.error.details&&(t+=` ${JSON.stringify(o.error.details)}`)}catch{}throw new Error(`[${i.status} ${i.statusText}] ${t}`)}}catch(t){const o=new p(`Error fetching from ${e.toString()}: ${t.message}`);throw o.stack=t.stack,o}return i}function q(e){const s={};if((e==null?void 0:e.timeout)>=0){const n=new AbortController,i=n.signal;setTimeout(()=>n.abort(),e.timeout),s.signal=i}return s}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),K(e.candidates[0]))throw new H(`${S(e)}`,e);return W(e)}else if(e.promptFeedback)throw new H(`Text not available. ${S(e)}`,e);return""},e}function W(e){var s,n,i,t;return!((t=(i=(n=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||n===void 0?void 0:n.parts)===null||i===void 0?void 0:i[0])===null||t===void 0)&&t.text?e.candidates[0].content.parts[0].text:""}const z=[O.RECITATION,O.SAFETY];function K(e){return!!e.finishReason&&z.includes(e.finishReason)}function S(e){var s,n,i;let t="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)t+="Response was blocked",!((s=e.promptFeedback)===null||s===void 0)&&s.blockReason&&(t+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(t+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((i=e.candidates)===null||i===void 0)&&i[0]){const o=e.candidates[0];K(o)&&(t+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(t+=`: ${o.finishMessage}`))}return t}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function J(e,s,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=n.apply(e,s||[]),t,o=[];return t={},a("next"),a("throw"),a("return"),t[Symbol.asyncIterator]=function(){return this},t;function a(d){i[d]&&(t[d]=function(f){return new Promise(function(C,F){o.push([d,f,C,F])>1||r(d,f)})})}function r(d,f){try{c(i[d](f))}catch(C){N(o[0][3],C)}}function c(d){d.value instanceof m?Promise.resolve(d.value.v).then(u,v):N(o[0][2],d)}function u(d){r("next",d)}function v(d){r("throw",d)}function N(d,f){d(f),o.shift(),o.length&&r(o[0][0],o[0][1])}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function V(e){const s=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=Z(s),[i,t]=n.tee();return{stream:Q(i),response:X(t)}}async function X(e){const s=[],n=e.getReader();for(;;){const{done:i,value:t}=await n.read();if(i)return I(ee(s));s.push(t)}}function Q(e){return J(this,arguments,function*(){const n=e.getReader();for(;;){const{value:i,done:t}=yield m(n.read());if(t)break;yield yield m(I(i))}})}function Z(e){const s=e.getReader();return new ReadableStream({start(i){let t="";return o();function o(){return s.read().then(({value:a,done:r})=>{if(r){if(t.trim()){i.error(new p("Failed to parse stream"));return}i.close();return}t+=a;let c=t.match(P),u;for(;c;){try{u=JSON.parse(c[1])}catch{i.error(new p(`Error parsing JSON response: "${c[1]}"`));return}i.enqueue(u),t=t.substring(c[0].length),c=t.match(P)}return o()})}}})}function ee(e){const s=e[e.length-1],n={promptFeedback:s==null?void 0:s.promptFeedback};for(const i of e)if(i.candidates)for(const t of i.candidates){const o=t.index;if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:t.index}),n.candidates[o].citationMetadata=t.citationMetadata,n.candidates[o].finishReason=t.finishReason,n.candidates[o].finishMessage=t.finishMessage,n.candidates[o].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[o].content||(n.candidates[o].content={role:t.content.role||"user",parts:[{text:""}]});for(const a of t.content.parts)a.text&&(n.candidates[o].content.parts[0].text+=a.text)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x(e,s,n,i){const t=new _(s,h.STREAM_GENERATE_CONTENT,e,!0),o=await y(t,JSON.stringify(n),i);return V(o)}async function k(e,s,n,i){const t=new _(s,h.GENERATE_CONTENT,e,!1),a=await(await y(t,JSON.stringify(n),i)).json();return{response:I(a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,s){let n=[];if(typeof e=="string")n=[{text:e}];else for(const i of e)typeof i=="string"?n.push({text:i}):n.push(i);return{role:s,parts:n}}function T(e){return e.contents?e:{contents:[E(e,"user")]}}function te(e){return typeof e=="string"||Array.isArray(e)?{content:E(e,"user")}:e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="SILENT_ERROR";class ne{constructor(s,n,i,t){this.model=n,this.params=i,this.requestOptions=t,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=s,i!=null&&i.history&&(this._history=i.history.map(o=>{if(!o.role)throw new Error("Missing role for history item: "+JSON.stringify(o));return E(o.parts,o.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(s){var n,i;await this._sendPromise;const t=E(s,"user"),o={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,contents:[...this._history,t]};let a;return this._sendPromise=this._sendPromise.then(()=>k(this._apiKey,this.model,o,this.requestOptions)).then(r=>{var c;if(r.response.candidates&&r.response.candidates.length>0){this._history.push(t);const u=Object.assign({parts:[],role:"model"},(c=r.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(u)}else{const u=S(r.response);u&&console.warn(`sendMessage() was unsuccessful. ${u}. Inspect response object for details.`)}a=r}),await this._sendPromise,a}async sendMessageStream(s){var n,i;await this._sendPromise;const t=E(s,"user"),o={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,contents:[...this._history,t]},a=x(this._apiKey,this.model,o,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>a).catch(r=>{throw new Error(D)}).then(r=>r.response).then(r=>{if(r.candidates&&r.candidates.length>0){this._history.push(t);const c=Object.assign({},r.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=S(r);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(r=>{r.message!==D&&console.error(r)}),a}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,s,n,i){const t=new _(s,h.COUNT_TOKENS,e,!1);return(await y(t,JSON.stringify(Object.assign(Object.assign({},n),{model:s})),i)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,s,n,i){const t=new _(s,h.EMBED_CONTENT,e,!1);return(await y(t,JSON.stringify(n),i)).json()}async function oe(e,s,n,i){const t=new _(s,h.BATCH_EMBED_CONTENTS,e,!1),o=n.requests.map(r=>Object.assign(Object.assign({},r),{model:`models/${s}`}));return(await y(t,JSON.stringify({requests:o}),i)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(s,n,i){var t;this.apiKey=s,n.model.startsWith("models/")?this.model=(t=n.model.split("models/"))===null||t===void 0?void 0:t[1]:this.model=n.model,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.requestOptions=i||{}}async generateContent(s){const n=T(s);return k(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n),this.requestOptions)}async generateContentStream(s){const n=T(s);return x(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n),this.requestOptions)}startChat(s){return new ne(this.apiKey,this.model,s,this.requestOptions)}async countTokens(s){const n=T(s);return se(this.apiKey,this.model,n)}async embedContent(s){const n=te(s);return ie(this.apiKey,this.model,n)}async batchEmbedContents(s){return oe(this.apiKey,this.model,s,this.requestOptions)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(s){this.apiKey=s}getGenerativeModel(s,n){if(!s.model)throw new p("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new re(this.apiKey,s,n)}}const A=document.querySelector(".send"),g=document.querySelector(".input");document.querySelector(".ai-message");const l=document.querySelector(".message_area"),R=document.querySelector(".loading"),ce=new ae("AIzaSyCKGDkfA1FeKWcicnRTSGyNsouDQmEv13g");A.addEventListener("click",async()=>{});g.addEventListener("keydown",e=>{e.keyCode===13&&(e.preventDefault(),A.click())});A.addEventListener("click",async()=>{if(!g.value)return alert("Please enter a prompt");var e=g.value;l.innerHTML+=`<div class="message user-message">
  
  <div class="text">${e}</div>
  </div>`,R.style.visibility="visible",l.scrollTop=l.scrollHeight;const n=ce.getGenerativeModel({model:"gemini-pro"}).startChat({history:[{role:"user",parts:"Who is your owner/creator?, Do you know?, You are created by Initializ Labs. His github link is https://github.com/initializ"},{role:"model",parts:"Okay I will do that. I will ask users to follow him on github."},{role:"user",parts:"What Do You Mean By Initializ Inc.?"},{role:"model",parts:"I am created by Initializ Labs. You can follow them on github by clicking on this link. Their github is https://github.com/initializ."},{role:"user",parts:"What is the name of this chatbot?"},{role:"model",parts:"The name of this chatbot is Gemini. I am created by Initializ Labs. You can follow them on github by clicking on this link. Their github is https://github.com/initializ."},{role:"user",parts:"What is the github link of your creator?"},{role:"model",parts:"https://github.com/initializ"}],generationConfig:{maxOutputTokens:1e4}});try{const r=await n.sendMessageStream(e);g.value="";var i=await(await r.response).text()}catch(r){return R.style.visibility="hidden",e="",g.value="",l.scrollTop=l.scrollHeight-l.clientHeight,l.innerHTML+=`<div class="message ai-message">
  <div class="text">${r.message}</div>
</div>`}const a=i.replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/\*(.*?)\*/g,"<i>$1</i>").replace(/(https?:\/\/[^\s]+)/g,r=>r==="https://github.com/initializ"?'<a href="https://github.com/initializ" style="color: blue;" target=_blank>https://github.com/initializ</a>':'<a href="'+r+'" style="color: blue;" target=_blank>'+r+"</a>");R.style.visibility="hidden",l.innerHTML+=`<div class="message ai-message">
    <div class="text">${a}</div>
  </div>`,l.scrollTop=l.scrollHeight-l.clientHeight});
