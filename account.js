/* Shared STRATO account adapter. Learning-state synchronization is a separate migration step. */
(function(){const config=window.PLATFORM_CONFIG||{},base=config.apiUrl;let csrf=null,ready=false;
async function call(action,data,params={}){
 if(!base)throw Error('Konten sind noch nicht eingerichtet.');
 const url=new URL(base,location.href);url.searchParams.set('action',action);for(const [key,value] of Object.entries(params))url.searchParams.set(key,value);
 const response=await fetch(url,{method:data?'POST':'GET',credentials:'same-origin',headers:data?{'Content-Type':'application/json','X-CSRF-Token':csrf||''}:{},body:data?JSON.stringify(data):undefined,cache:'no-store'});
 let body;try{body=await response.json();}catch{const error=Error('Der Konto-Endpunkt ist auf diesem Host noch nicht verfügbar.');error.status=response.status;throw error;}
 if(!response.ok){const error=Error(body.error||'Anfrage fehlgeschlagen.');error.status=response.status;error.code=body.code;throw error;}
 if(body.csrf)csrf=body.csrf;return body;
}
window.TutorAccount={get enabled(){return ready;},current:()=>call('session'),login:data=>call('login',data),register:data=>call('register',data),logout:()=>call('logout',{}),loadState:track=>call('state',undefined,{track}),saveState:(track,state,revision)=>call('state',{track,state,revision})};
const form=document.querySelector('#accountForm'),status=document.querySelector('#accountStatus');if(!form)return;
const controls=[...form.querySelectorAll('input,select,button')];controls.forEach(x=>x.disabled=true);
if(!base){status.textContent='Konten sind noch nicht eingerichtet. Beide Lernpfade funktionieren ohne Anmeldung.';return;}
status.textContent='Konto-Verbindung wird geprüft …';
function render(user){document.querySelector('#signedIn').hidden=!user;form.hidden=!!user;status.textContent=user?'Angemeldet als '+user.name+'. Deine Übungen bleiben bis zur Aktivierung der Synchronisierung lokal gespeichert.':'Du kannst dich jetzt anmelden. Lokale Lernstände werden noch nicht automatisch synchronisiert.';}
const readyPromise=call('session').then(data=>{ready=true;controls.forEach(x=>x.disabled=false);if(!data.registrationEnabled){form.mode.querySelector('[value="register"]').disabled=true;form.mode.value='login';}document.querySelector('#accountIntro').textContent='Dein Lernkonto ist eingerichtet. Melde dich hier an und wähle anschließend deinen Lernpfad.';render(data.user);}).catch(e=>{status.textContent=(e.status===404||e.code==='not_configured')?'Die Anmeldung ist auf diesem Host noch nicht eingerichtet. Du kannst beide Lernpfade ohne Konto nutzen.':e.message;});
form.onsubmit=async event=>{event.preventDefault();await readyPromise;if(!ready)return;const submit=form.querySelector('button[type=submit]');submit.disabled=true;try{const data={email:form.email.value,password:form.password.value,name:form.displayName.value};const result=await call(form.mode.value==='register'?'register':'login',data);form.password.value='';render(result.user);}catch(e){status.textContent=e.message;}finally{submit.disabled=false;}};
document.querySelector('#logout').onclick=async()=>{try{await call('logout',{});render(null);}catch(e){status.textContent=e.message;}};
})();
