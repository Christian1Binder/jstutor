/* Offline CodeMirror adapter. Rebuild with npm run build:editor. */
import {basicSetup} from 'codemirror';
import {EditorState, Prec} from '@codemirror/state';
import {EditorView, keymap} from '@codemirror/view';
import {indentWithTab} from '@codemirror/commands';
import {HighlightStyle, syntaxHighlighting, indentUnit, StreamLanguage} from '@codemirror/language';
import {html} from '@codemirror/lang-html';
import {css} from '@codemirror/lang-css';
import {javascript} from '@codemirror/lang-javascript';
import {tags} from '@lezer/highlight';

const colors=HighlightStyle.define([
 {tag:tags.keyword,color:'#d0b9f3'},
 {tag:[tags.string,tags.special(tags.string)],color:'#c6e899'},
 {tag:[tags.number,tags.bool,tags.null],color:'#edbc91'},
 {tag:[tags.comment,tags.meta],color:'#97b29c',fontStyle:'italic'},
 {tag:[tags.tagName,tags.typeName],color:'#9bd7d3'},
 {tag:[tags.attributeName,tags.propertyName],color:'#e8d29c'},
 {tag:[tags.variableName,tags.definition(tags.variableName)],color:'#e3ecdf'},
 {tag:[tags.operator,tags.punctuation],color:'#bdcfc1'},
 {tag:tags.invalid,color:'#ffb0a2',textDecoration:'underline'}
]);
const skin=EditorView.theme({
 '&':{height:'100%',backgroundColor:'transparent',color:'#e3ecdf'},
 '.cm-scroller':{fontFamily:'ui-monospace, SFMono-Regular, Consolas, monospace',overflow:'auto'},
 '.cm-content':{padding:'14px 0',caretColor:'#d7edb3'},
 '.cm-line':{padding:'0 12px'},
 '.cm-cursor,.cm-dropCursor':{borderLeftColor:'#d7edb3'},
 '.cm-gutters':{backgroundColor:'transparent',color:'#8aa490',border:'none'},
 '.cm-gutterElement':{padding:'0 6px 0 10px'},
 '.cm-activeLineGutter,.cm-activeLine':{backgroundColor:'#ffffff08'},
 '&.cm-focused .cm-selectionBackground,.cm-selectionBackground, ::selection':{backgroundColor:'#52725c'},
 '.cm-tooltip':{border:'1px solid #68806c',backgroundColor:'#25382e',color:'#e3ecdf'},
 '.cm-panels':{backgroundColor:'#25382e',color:'#e3ecdf'},
 '.cm-searchMatch':{backgroundColor:'#9bbd5544',outline:'1px solid #a0c881'},
 '&.cm-focused':{outline:'none'}
},{dark:true});

const powershell=()=>StreamLanguage.define({token(stream){
 if(stream.eatSpace())return null;
 if(stream.match(/#.*/))return 'comment';
 if(stream.match(/\$[\w?:]+/))return 'variableName';
 if(stream.match(/"(?:[^"`]|`.)*"|'(?:[^']|'')*'/))return 'string';
 if(stream.match(/\b(?:if|else|foreach|in|for|while|function|param|return|try|catch|throw)\b/i))return 'keyword';
 if(stream.match(/-[a-z]+/i))return 'operator';
 if(stream.match(/\b\d+(?:\.\d+)?/))return 'number';
 if(stream.match(/\b[A-Za-z]+-[A-Za-z]+/))return 'typeName';
 stream.next();return null;
}});
function create({parent,language,value,label,onChange,onRun}){
 const syntax={html,css,js:javascript,ps:powershell}[language];
 const view=new EditorView({parent,state:EditorState.create({doc:value,extensions:[
  basicSetup,skin,syntaxHighlighting(colors),syntax(),indentUnit.of('  '),
  Prec.highest(keymap.of([
   {key:'Mod-Enter',run:()=>{onRun(false);return true;}},
   {key:'Mod-Shift-Enter',run:()=>{onRun(true);return true;}},
   indentWithTab
  ])),
  EditorView.contentAttributes.of({'aria-label':label,'spellcheck':'false','autocapitalize':'off','autocorrect':'off'}),
  EditorView.updateListener.of(update=>{if(update.docChanged)onChange(update.state.doc.toString());})
 ]})});
 return {
  getValue:()=>view.state.doc.toString(),
  setValue(value){if(value!==view.state.doc.toString())view.dispatch({changes:{from:0,to:view.state.doc.length,insert:value}});},
  focus:()=>view.focus(),measure:()=>view.requestMeasure(),destroy:()=>view.destroy()
 };
}
window.JSTEditor={create};
