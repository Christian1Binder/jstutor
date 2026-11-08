import {build} from 'esbuild';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
await mkdir(new URL('vendor/',root),{recursive:true});
await build({entryPoints:[new URL('src/editor.js',root).pathname],outfile:new URL('vendor/editor.js',root).pathname,bundle:true,minify:true,format:'iife',target:['es2020'],legalComments:'inline',banner:{js:'/* CodeMirror and Lezer · MIT License. See editor-LICENSES.txt. */'}});
const lock=JSON.parse(await readFile(new URL('package-lock.json',root),'utf8'));const licenses=[];
for(const name of Object.keys(lock.packages).filter(x=>/^node_modules\/(?:@codemirror\/|@lezer\/|codemirror$|crelt$|style-mod$|w3c-keyname$)/.test(x)).sort()){
 try{licenses.push(`=== ${name.slice(13)} ===\n${await readFile(new URL(name+'/LICENSE',root),'utf8')}`);}catch(error){throw new Error('Missing license for '+name,{cause:error});}
}
await writeFile(new URL('vendor/editor-LICENSES.txt',root),licenses.join('\n\n'));
console.log('Bundled local editor and licenses.');
