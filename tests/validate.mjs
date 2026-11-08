import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url),ctx={window:{}};vm.createContext(ctx);
for(let i=1;i<=20;i++)vm.runInContext(fs.readFileSync(new URL(`data/m${String(i).padStart(2,'0')}.js`,root),'utf8'),ctx);
const modules=ctx.window.CURRICULUM,exercises=modules.flatMap(m=>m.exercises),ids=new Set(exercises.map(e=>e.id));
assert.equal(modules.length,20);assert.equal(exercises.length,200);assert.equal(ids.size,200);
const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;
for(const m of modules){assert.equal(m.exercises.length,10);assert.ok(m.lesson.length>100);for(const e of m.exercises){
 assert.ok(e.title&&e.task&&e.explanation&&e.solutionNotes);assert.equal(e.hints.length,3);assert.ok(e.tests.length);assert.ok(e.minutes>0&&e.xp>0);assert.ok(e.prerequisites.every(id=>ids.has(id)));assert.notEqual(e.starter[e.focus],e.solution[e.focus]);
 new AsyncFunction(e.solution.js+'\n'+e.tests.map(t=>`await (${t.code});`).join('\n'));
 for(const k of ['html','css','js'])assert.equal(typeof e.starter[k],'string');
}}
for(const file of ['app.js','storage.js','runner.js','sw.js'])new vm.Script(fs.readFileSync(new URL(file,root),'utf8'),{filename:file});
const fakeStorage=new Map(),events=[];const storageCtx={window:{CURRICULUM:modules,dispatchEvent:e=>events.push(e)},crypto:{randomUUID:()=>`profile-${Math.random().toString(36).slice(2)}`},localStorage:{getItem:k=>fakeStorage.get(k)??null,setItem:(k,v)=>fakeStorage.set(k,v)},Event:class{}};
vm.createContext(storageCtx);vm.runInContext(fs.readFileSync(new URL('storage.js',root),'utf8'),storageCtx);
const store=storageCtx.window.JSTStore;store.create('Ada');assert.equal(store.profile.name,'Ada');store.profile.drafts['m01-01']={html:'<h1>A</h1>',css:'',js:'',assisted:true};store.save();const backup=store.export();store.create('Lin');store.import(backup);assert.equal(store.profile.name,'Ada');assert.equal(store.profile.drafts['m01-01'].assisted,true);
for(const bad of ['{}','null','{"version":2,"profiles":[]}','{"version":1,"profiles":[{"id":"x","name":"X","drafts":{"evil":{}}}]}'])assert.throws(()=>store.import(bad));
console.log('PASS: 20 modules, 200 unique exercises, syntax, prerequisites, local profiles and import validation.');
const html=fs.readFileSync(new URL('index.html',root),'utf8');
for(const match of html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g))assert.ok(fs.existsSync(new URL(match[1],root)),`Missing local asset: ${match[1]}`);
assert.ok(!/(?:src|href)="https?:\/\//.test(html),'Runtime HTML must not require external resources');
const sw=fs.readFileSync(new URL('sw.js',root),'utf8');assert.ok(sw.includes("'./storage.js'")&&sw.includes("'./runner.js'"));
console.log('PASS: local asset references and dependency-free HTML.');
for(const e of exercises){
 assert.ok(e.concept?.explanation.length>40,`Missing explanation: ${e.id}`);
 assert.ok(e.concept.example.length>10,`Missing parallel example: ${e.id}`);
 assert.ok(e.requirements?.length>=2,`Missing explicit contract: ${e.id}`);
 assert.ok(Array.isArray(e.examples));
 for(const hint of e.hints){
  assert.ok(!hint.includes('\n'),`Code-like multiline hint: ${e.id}`);
  assert.ok(!/<\/?\w+[^>]*>/.test(hint),`HTML solution in hint: ${e.id}`);
  assert.ok(!/\b(?:function|const|let)\s+\w+\s*(?:[=(])/.test(hint),`JS solution in hint: ${e.id}`);
 }
}
console.log('PASS: 200 explanations, parallel examples, explicit contracts and hints without solution blocks.');
