import {cp,mkdir,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('../',import.meta.url),dest=new URL('../dist/',import.meta.url);
await rm(dest,{recursive:true,force:true});await mkdir(dest,{recursive:true});
for(const file of ['index.html','styles.css','app.js','storage.js','runner.js','sw.js','icon.svg','manifest.webmanifest','.nojekyll','data','vendor','start.html','powershell.html','hub.js','account.js','platform-config.js','ps'])await cp(new URL(file,root),new URL(file,dest),{recursive:true});
console.log('Built dependency-free static app:',fileURLToPath(dest));
