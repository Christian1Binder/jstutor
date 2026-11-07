/* Local-first repository. Replace this adapter after server migration. No authentication here. */
(function () {
  'use strict';
  const KEY = 'jstutor.v1';
  const ids = new Set(window.CURRICULUM.flatMap(m => m.exercises.map(e => e.id)));
  let lastFailure = false;
  const uid = () => typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `p-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const makeProfile = (name = 'Entdecker') => ({ id: uid(), name, drafts: {}, completion: {}, bookmarks: [], lastExercise: 'm01-01' });
  function cleanProfile(p) {
    if (!p || typeof p.id !== 'string' || !/^[\w-]{1,80}$/.test(p.id) || typeof p.name !== 'string' || !p.name.trim()) throw Error('Ungültiges Profil.');
    const out = makeProfile(p.name.trim().slice(0,30));out.id=p.id;
    for (const [id,d] of Object.entries(p.drafts || {})) {
      if (!ids.has(id) || !d || !['html','css','js'].every(k=>typeof d[k]==='string' && d[k].length<=150000)) throw Error('Ungültige Lösungsdaten.');
      out.drafts[id] = {html:d.html,css:d.css,js:d.js,assisted:d.assisted===true};
    }
    for (const [id,c] of Object.entries(p.completion || {})) {
      if (!ids.has(id) || !c || !['self','assisted'].includes(c.mode)) throw Error('Ungültiger Fortschritt.');
      out.completion[id]={mode:c.mode,date:typeof c.date==='string'?c.date.slice(0,40):'',};
    }
    out.bookmarks = [...new Set((Array.isArray(p.bookmarks)?p.bookmarks:[]).filter(id=>ids.has(id)))];
    out.lastExercise=ids.has(p.lastExercise)?p.lastExercise:'m01-01';return out;
  }
  function validate(data) {
    if (!data || data.version!==1 || !Array.isArray(data.profiles) || !data.profiles.length || data.profiles.length>30) throw Error('Keine unterstützte jstutor-Datei (Version 1).');
    const profiles=data.profiles.map(cleanProfile);
    if(new Set(profiles.map(p=>p.id)).size!==profiles.length)throw Error('Doppelte Profil-IDs.');
    return {version:1,activeProfile:profiles.some(p=>p.id===data.activeProfile)?data.activeProfile:profiles[0].id,profiles};
  }
  let state;
  let recovery=false;
  try { const raw=localStorage.getItem(KEY);state=raw?validate(JSON.parse(raw)):null; } catch { recovery=true; }
  if(!state){const p=makeProfile();state={version:1,activeProfile:p.id,profiles:[p]};}
  function save() {try{localStorage.setItem(KEY,JSON.stringify(state));lastFailure=false;}catch{lastFailure=true;window.dispatchEvent(new Event('storage-failed'));}return !lastFailure;}
  window.JSTStore={
    get state(){return state;},get profile(){return state.profiles.find(p=>p.id===state.activeProfile);},get failed(){return lastFailure;},get recovered(){return recovery;},
    save,validate,
    create(name){if(state.profiles.length>=30)throw Error('Maximal 30 lokale Profile.');const p=makeProfile(name.trim().slice(0,30));state.profiles.push(p);state.activeProfile=p.id;save();return p;},
    select(id){if(state.profiles.some(p=>p.id===id)){state.activeProfile=id;save();}},
    import(text){if(text.length>12e6)throw Error('Die Datei ist zu groß (maximal 12 MB).');const incoming=validate(JSON.parse(text));const merged=state.profiles.slice();for(const p of incoming.profiles){const i=merged.findIndex(x=>x.id===p.id);if(i<0)merged.push(p);else merged[i]=p;}if(merged.length>30)throw Error('Zu viele Profile.');state={version:1,profiles:merged,activeProfile:incoming.activeProfile};save();},
    export(){return JSON.stringify(state,null,2);}
  };
  /* Contract reserved for server integration. Intentionally disabled, never a fake login. */
  window.JSTAuth={enabled:false,async current(){return null;},async login(){throw Error('Anmeldung wird nach dem Serverumzug verfügbar.');}};
})();
