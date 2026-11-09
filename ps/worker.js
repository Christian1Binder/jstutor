importScripts('./engine.js');
onmessage=event=>{try{const result=PSLearn.execute(event.data.code);postMessage({kind:'complete',result});}catch(error){postMessage({kind:'error',text:error.message||'Ausführung fehlgeschlagen.'});}};
