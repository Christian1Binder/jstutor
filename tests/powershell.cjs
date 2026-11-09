const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const {execute}=require('../ps/engine.js'),ctx={window:{}};
for(let i=1;i<=20;i++)vm.runInNewContext(fs.readFileSync(`ps/data/m${String(i).padStart(2,'0')}.js`,'utf8'),ctx);
const modules=ctx.window.CURRICULUM,all=modules.flatMap(m=>m.exercises),seen=new Set();
assert.equal(modules.length,20);assert.equal(all.length,200);
for(const m of modules){assert.equal(m.exercises.length,10);for(const e of m.exercises){assert(!seen.has(e.id));assert(e.prerequisites.every(x=>seen.has(x)));seen.add(e.id);assert.equal(e.hints.length,3);assert.notEqual(e.starter.js,e.solution.js);assert.equal(JSON.stringify(execute(e.solution.js).output),JSON.stringify(e.tests[0].expected),e.id);}}
assert.deepEqual(execute('$x=2\n$x+3').output,['5']);
assert.deepEqual(execute('foreach ($v in 2..4) { $v * 3 }').output,['6','9','12']);
assert.deepEqual(execute('$a="Ada","Lin"\n$a | Where-Object { $_ -eq "Lin" }').output,['Lin']);
assert.deepEqual(execute('1..4 | Where-Object { $_ -gt 2 } | Select-Object -First 1').output,['3']);
assert.deepEqual(execute('try { throw "kaputt" } catch { $_.Exception.Message }').output,['kaputt']);
assert.deepEqual(execute('Set-Content -Path "a" -Value "ok"\nGet-Content "a"').output,['ok']);
assert.deepEqual(execute('Test-Path "a"').output,['False'],'Filesystem must reset between runs');
assert.throws(()=>execute('Get-Service'),/nicht unterstützt/);assert.throws(()=>execute('while ($true) { $x=1 }'),/Lernlimit/);
const makeStore=(track)=>{const c={window:{CURRICULUM:modules,TUTOR_CONFIG:track?{track,storageKey:'pstutor.v1'}:undefined,dispatchEvent(){}},crypto:{randomUUID:()=>Math.random().toString(36).slice(2)},localStorage:{getItem:()=>null,setItem(){}},Event:class{}};vm.runInNewContext(fs.readFileSync('storage.js','utf8'),c);return c.window.JSTStore;};
const ps=makeStore('powershell'),js=makeStore();assert.throws(()=>ps.import(js.export()));assert.throws(()=>js.import(ps.export()));ps.profile.drafts['m01-01']={html:'',css:'',js:'"Hallo"',minimizedEditors:[]};ps.import(ps.export());assert.equal(ps.profile.drafts['m01-01'].js,'"Hallo"');
for(const path of ['ps/runner.js','ps/worker.js','account.js','hub.js'])new vm.Script(fs.readFileSync(path,'utf8'));
console.log('PASS: 200 PS reference solutions, prerequisites, alternate inputs, bounded execution, isolated files, track backups and runner syntax.');
// Reload the exact serialized local state, not only the exported backup.
const persisted=new Map();const reload=()=>{const c={window:{CURRICULUM:modules,TUTOR_CONFIG:{track:'powershell',storageKey:'pstutor.v1'},dispatchEvent(){}},crypto:{randomUUID:()=>Math.random().toString(36).slice(2)},localStorage:{getItem:k=>persisted.get(k),setItem:(k,v)=>persisted.set(k,v)},Event:class{}};vm.runInNewContext(fs.readFileSync('storage.js','utf8'),c);return c.window.JSTStore;};
const before=reload();before.profile.completion['m01-01']={mode:'self',date:'2026-11-09'};before.profile.drafts['m01-01']={html:'',css:'',js:'"Hallo"'};before.save();const after=reload();assert.equal(after.recovered,false);assert.equal(after.profile.completion['m01-01'].mode,'self');assert.equal(after.profile.drafts['m01-01'].js,'"Hallo"');console.log('PASS: PowerShell local persistence survives complete reload.');
