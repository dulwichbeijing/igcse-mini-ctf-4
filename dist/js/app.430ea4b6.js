(function(e){function t(t){for(var n,o,r=t[0],c=t[1],l=t[2],f=0,h=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"081c":function(e,t,s){},"55c0":function(e,t,s){"use strict";s("081c")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=s("2f62"),a=s("0e44");n["a"].use(i["a"]);var o=new i["a"].Store({plugins:[Object(a["a"])({storage:window.localStorage})],state:{colourScheme:"dhsz",currentScore:0,tasks:[{name:"The first one is free",points:100,detail:"Quickly test that the website is working for you, the answer is:",monospace:"dcbCTF{dulwich}",files:[],md5:"faa85bfd7c5d216076e78b611229b137",solved:!1},{name:"What's your vector Victor?",points:200,detail:"Take a look at the following SVG file, can you find the secret flag in here?",files:["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf/main/public/task-files/task-2.svg"],md5:"2e809b534c70e9b89566dcf355ca2a44",solved:!1},{name:"Who is the creator?",points:200,detail:"Did you know within all files there is data about data? That's so meta.",files:["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf/main/public/task-files/task3.jpg"],md5:"8bd98ae3d0f2398540c6c157d819a5b1",solved:!1},{name:"Where in the world?",points:200,detail:"Please tell me the name of this sculpture, give your answer in the format:",monospace:"dcbCTF{sculpture_name}",files:["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf/main/public/task-files/task4.jpg"],md5:"b9c9ed8a17e4ee05b9bf90f19a835729",solved:!1},{name:"Open this file",points:200,detail:"I think something went wrong when I copied this PNG file, a few 'bits' have gone missing - 64 of them to be precise.",files:["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf/main/public/task-files/task5"],md5:"f80d28a05444bbebfc1306dd945bd40a",solved:!1},{name:"Scan this QR code",points:200,detail:"It really is as simple as it sounds...",files:["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf/main/public/task-files/task6.png"],md5:"659d1a73e65e9b77a069b4b7515119a8",solved:!1}]},mutations:{pushPoints:function(e,t){e.currentScore=e.currentScore+t.points,e.tasks[t.number].solved=!0},updateColour:function(e,t){e.colourScheme=t}}}),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.colourScheme,attrs:{id:"app"}},[s("Competition",{attrs:{msg:"DCB Mini CTF",sub:"Digital Images"}}),s("Points",{attrs:{score:"0"}})],1)},c=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),s("h2",[e._v(e._s(e.sub))]),s("h3",[e._v("About the competition")]),s("p",[e._v(' Capture the flag is a style of computer science competition where a hidden message known as a "flag" is hidden within different pieces of digital data. ')]),s("p",[e._v(" You have this lesson to complete as many of the challenges below as possible. There are links at the bottom of the webpage which will help you with certain challenges. ")]),e._m(0),s("h3",[e._v("Tasks")]),e._l(e.tasks,(function(e,t){return s("Task",{key:t,attrs:{taskNo:t,name:e.name,points:e.points,detail:e.detail,monospace:e.monospace,files:e.files,md5:e.md5,solved:e.solved}})})),s("h3",[e._v("Extra details")]),e._m(1)],2)},u=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" Once you have found your flag, you should submit your answer using the following format: "),s("pre",[e._v("dcbCTF{secret_flag}")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/dulwichbeijing/igcse-mini-ctf",target:"_blank"}},[e._v("Competition source code")])]),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg",target:"_blank"}},[e._v("SVG Reference")])]),s("li",[s("a",{attrs:{href:"https://www.bbc.co.uk/bitesize/guides/zqyrq6f/revision/3",target:"_blank"}},[e._v("What is metadata?")])]),s("li",[s("a",{attrs:{href:"https://www.garykessler.net/library/file_sigs.html"}},[e._v("File Signatures")])]),s("li",[s("a",{attrs:{href:"https://hexed.it/",target:"_blank"}},[e._v("Hexadecimal Editor")])]),s("li",[s("a",{attrs:{href:"https://imagemagick.org/",target:"_blank"}},[e._v("ImageMagick")])]),s("li",[s("a",{attrs:{href:"https://www.exifdata.com/",target:"_blank"}},[e._v("EXIF data viewer")])])])}],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"task",class:{correct:e.isCorrect||e.solved}},[s("div",{staticClass:"task__title"},[s("h4",[e._v("Task "+e._s(e.taskNo+1)+": "+e._s(e.name))]),s("strong",[e._v(e._s(e.points))])]),s("p",[e._v(e._s(e.detail))]),e.monospace?s("pre",[e._v(e._s(e.monospace))]):e._e(),s("ul",e._l(e.files,(function(t,n){return s("li",{key:n},[s("a",{attrs:{href:t,target:"_blank"}},[e._v(e._s("Link "+(n+1)))])])})),0),s("div",{staticClass:"task__answer"},[s("label",{attrs:{for:e.md5}},[e._v(" Enter your flag here: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.flag,expression:"flag"}],attrs:{name:e.md5,type:"text",disabled:e.checking||e.isCorrect,placeholder:"dcbCTF{...}"},domProps:{value:e.flag},on:{input:function(t){t.target.composing||(e.flag=t.target.value)}}}),s("button",{attrs:{disabled:e.checking||e.isCorrect},on:{click:e.checkFlag}},[e._v(e._s(e.checking?"Checking...":"Check"))])]),""!==e.message?s("div",{staticClass:"task__message"},[e._v(e._s(e.message))]):e._e()])},h=[],p=(s("a9e3"),s("6821")),d=s.n(p),m={name:"Task",data:function(){return{flag:"",active:!0,checking:!1,isCorrect:!1,message:""}},props:{taskNo:Number,name:String,points:Number,detail:String,monospace:String,files:Array,md5:String,solved:Boolean},methods:{checkFlag:function(){var e=this;this.checking=!0,console.log(d()(this.flag)),setTimeout((function(){e.isCorrect=d()(e.flag)===e.md5,e.isCorrect?(e.checking=!1,e.message="That is correct!",e.active=!1,o.commit("pushPoints",{points:e.points,number:e.taskNo})):(e.checking=!1,e.message="That flag is not correct, please try again! 🤨")}),500)}}},g=m,b=(s("6ce3"),s("2877")),v=Object(b["a"])(g,f,h,!1,null,"591f3df2",null),_=v.exports,k={name:"Competition",components:{Task:_},props:{msg:String,sub:String},computed:Object(i["b"])(["currentScore","tasks"])},w=k,y=(s("55c0"),Object(b["a"])(w,l,u,!1,null,"5e284588",null)),C=y.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer"},[s("div",{staticClass:"points"},[s("span",[e._v(e._s(e.currentScore))]),s("span",[e._v("points")])])])},j=[],O={name:"Points",data:function(){return{newColour:"",colourOptions:[{name:"Dulwich",value:"dhsz"},{name:"Fan",value:"f"},{name:"Grenville",value:"g"},{name:"Raleigh",value:"r"},{name:"Spenser",value:"s"}]}},computed:Object(i["b"])(["colourScheme","currentScore"]),methods:{setColour:function(){o.commit("updateColour",this.newColour)}}},T=O,x=(s("8798"),Object(b["a"])(T,S,j,!1,null,"fe2296ca",null)),P=x.exports,E={name:"App",components:{Competition:C,Points:P},computed:Object(i["b"])(["colourScheme"])},F=E,N=(s("034f"),Object(b["a"])(F,r,c,!1,null,null,null)),$=N.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e($)},store:o}).$mount("#app")},"6ce3":function(e,t,s){"use strict";s("87b0")},"85ec":function(e,t,s){},8798:function(e,t,s){"use strict";s("e23e")},"87b0":function(e,t,s){},e23e:function(e,t,s){}});
//# sourceMappingURL=app.430ea4b6.js.map