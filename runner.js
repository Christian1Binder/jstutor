/* Runs untrusted learner code in an opaque-origin, network-isolated iframe. */
(function(){
  'use strict';
  const serialize=value=>JSON.stringify(value).replace(/</g,'\\u003c').replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');
  function buildDocument(code,tests,runId){
    const safeCss=code.css.replace(/<\/style/gi,'<\\/style');
    const runtime=`
      const send = (kind, payload) => parent.postMessage({jstutor:true,runId:${serialize(runId)},kind,payload},'*');
      const logs=[];
      const stringify = x => {try{return typeof x==='string'?x:JSON.stringify(x)??String(x)}catch{return String(x)}};
      const console={log:(...a)=>{const text=a.map(stringify).join(' ');logs.push({text});send('log',{level:'log',text});},warn:(...a)=>send('log',{level:'warn',text:a.map(stringify).join(' ')}),error:(...a)=>send('log',{level:'error',text:a.map(stringify).join(' ')})};
      const memory=new Map();
      const localStorage={getItem:k=>memory.has(String(k))?memory.get(String(k)):null,setItem:(k,v)=>memory.set(String(k),String(v)),removeItem:k=>memory.delete(String(k)),clear:()=>memory.clear()};
      const fixtures={'/api/cities':[{id:1,name:'Köln'},{id:2,name:'Bonn'}],'/api/weather':{city:'Köln',temperature:18}};
      const fetch=async(url,options={})=>{
        if(options.signal?.aborted)throw new DOMException('Abgebrochen','AbortError');
        const path=new URL(String(url),'https://werkstatt.invalid').pathname;
        const exists=Object.hasOwn(fixtures,path);
        return new Response(JSON.stringify(exists?fixtures[path]:{error:'Nicht gefunden'}),{status:exists?200:404,headers:{'Content-Type':'application/json'}});
      };
      window.addEventListener('error',event=>send('error',{text:event.message}));
      window.addEventListener('unhandledrejection',event=>send('error',{text:String(event.reason?.message??event.reason)}));
      document.addEventListener('click',e=>{if(e.target.closest('a'))e.preventDefault();});
      const execute = async () => {
        try {
          const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;
          const run=new AsyncFunction('console','fetch','localStorage','logs','send',${serialize(code.js+'\n;\nconst __checks = [];\n'+tests.map((t,i)=>`try { __checks.push({label:${JSON.stringify(t.label)},pass:Boolean(await (${t.code}))}); } catch (__error) { __checks.push({label:${JSON.stringify(t.label)},pass:false,detail:String(__error.message)}); }`).join('\n')+'\nsend("result",__checks);')});
          await run(console,fetch,localStorage,logs,send);
        } catch(error) {send('error',{text:error.name+': '+error.message});send('result',null);}
      };
      requestAnimationFrame(() => execute());`;
    return '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+
      '<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\' \'unsafe-eval\'; style-src \'unsafe-inline\'; img-src data: blob:; font-src data:; connect-src \'none\'; frame-src \'none\'; object-src \'none\'; base-uri \'none\'; form-action \'none\'">'+
      '<style>'+safeCss+'</style></head><body>'+code.html+'<script>'+runtime.replace(/<\/script/gi,'<\\/script')+'<\/script></body></html>';
  }
  let active=null;
  window.JSTRunner={buildDocument,
    stop(){if(active){clearTimeout(active.timer);active.frame.remove();active=null;}},
    run(container,code,tests,onEvent){
      this.stop();const runId=crypto.randomUUID?crypto.randomUUID():String(Math.random());
      const frame=document.createElement('iframe');frame.title='Vorschau deines Codes';frame.setAttribute('sandbox','allow-scripts');frame.referrerPolicy='no-referrer';
      frame.srcdoc=buildDocument(code,tests,runId);container.replaceChildren(frame);
      active={runId,frame,onEvent,timer:setTimeout(()=>{if(active?.runId===runId)onEvent('timeout',{text:'Die Ausführung braucht zu lange. Du kannst sie stoppen und deinen Code prüfen.'});},6000)};
    }
  };
  window.addEventListener('message',event=>{
    if(!active||event.source!==active.frame.contentWindow||!event.data||event.data.jstutor!==true||event.data.runId!==active.runId)return;
    const {kind,payload}=event.data;
    if(!['log','error','result'].includes(kind))return;
    if(kind==='result')clearTimeout(active.timer);
    active.onEvent(kind,payload);
  });
})();
