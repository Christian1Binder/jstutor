/* Create a private deployment bundle. No database passwords are accepted or stored by this script. */
import {mkdir,cp,writeFile,mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomBytes,createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
const root=fileURLToPath(new URL('../',import.meta.url));
const args=process.argv.slice(2),arg=(name,fallback='')=>{const i=args.indexOf(name);return i<0?fallback:args[i+1];};
const destination=resolve(arg('--output',join(root,'strato-setup.zip')));
const defaults={host:arg('--host'),database:arg('--database'),user:arg('--user')};
for(const value of Object.values(defaults))if(value&&!/^[\w.-]+$/.test(value))throw Error('Invalid database default');
const build=spawnSync(process.execPath,[join(root,'scripts/build.mjs')],{cwd:root,stdio:'inherit'});if(build.status!==0)process.exit(build.status||1);
const temp=await mkdtemp(join(tmpdir(),'tutor-setup-'));
try{
 const upload=join(temp,'upload');await mkdir(upload);await cp(join(root,'dist'),upload,{recursive:true});
 for(const file of ['api.php','deployment.php','setup.php','schema.sql'])await cp(join(root,'server',file),join(upload,file));
 const code=randomBytes(24).toString('hex');const hash=createHash('sha256').update(code).digest('hex');
 const phpString=x=>"'"+x.replace(/\\/g,'\\\\').replace(/'/g,"\\'")+"'";
 const php="<?php\n// Private installation-specific setup key. Delete this file after setup.\nreturn ['token_hash'=>"+phpString(hash)+",'defaults'=>['host'=>"+phpString(defaults.host)+",'database'=>"+phpString(defaults.database)+",'user'=>"+phpString(defaults.user)+"]];\n";
 await writeFile(join(upload,'setup-key.php'),php,{mode:0o600});
 await writeFile(join(temp,'INSTALLATIONSCODE.txt'),'NICHT HOCHLADEN. Privat aufbewahren.\n\nDein Installationscode:\n'+code+'\n\nNur den Inhalt des Ordners upload/ ins Root deiner Lernplattform hochladen.\nDann https://DEINE-SUBDOMAIN/setup.php öffnen.\nServer, Datenbank und Benutzer sind vorbelegt, sofern beim Paketbau angegeben.\nDatenbankpasswort sowie ein unabhängiges Passwort für dein neues Lernkonto direkt im Setup eingeben.\nDas Setup legt die Tabellen selbst an. schema.sql ist für einen optionalen manuellen Import enthalten.\nNach Erfolg setup.php, setup-key.php und schema.sql vom Webspace entfernen.\nVor Anmeldung alte Website-Tabs schließen und den Link zur Anmeldung aus dem Setup nutzen.\nDie bestehenden lokalen Lernstände bleiben erhalten; Synchronisierung folgt separat.\n',{mode:0o600});
 const zip=spawnSync('python3',['-c',`import pathlib,zipfile,sys\nbase=pathlib.Path(sys.argv[1])\nwith zipfile.ZipFile(sys.argv[2], 'w', zipfile.ZIP_DEFLATED) as z:\n for p in base.rglob('*'):\n  if p.is_file(): z.write(p,p.relative_to(base))`,temp,destination],{stdio:'inherit'});
 if(zip.status!==0)throw Error('Packaging failed');
 console.log('STRATO package ready:',destination);
}finally{await rm(temp,{recursive:true,force:true});}
