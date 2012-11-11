window.Dottoro=window.Dottoro||{};Dottoro.HighLighter={};Dottoro.HighLighter.Style_Classes=[];Dottoro.HighLighter.Style_Classes[0]=["asp_def"];Dottoro.HighLighter.Style_Classes[1]="css_def css_com css_invalid css_atrule css_atrule_unknown css_atrule_media css_atrule_media_unknown css_atrule_pageselector css_atrule_value css_atrule_value_unknown css_id css_class css_type css_type_unknown css_attr css_pseudo css_pseudo_unknown css_prop css_prop_unknown css_propvalue css_propvalue_unknown".split(" ");
Dottoro.HighLighter.Style_Classes[2]="html_def html_com html_doctype html_tagop html_attrop html_tag html_tag_unknown html_attr html_attr_unknown html_attrvalue html_attrvalue_unknown".split(" ");Dottoro.HighLighter.Style_Classes[3]=["java_def"];Dottoro.HighLighter.Style_Classes[4]="jscript_def jscript_com jscript_invalid jscript_keyword jscript_number jscript_string jscript_regexp jscript_op jscript_coreobj jscript_globconst jscript_globmethod jscript_prop jscript_method".split(" ");
Dottoro.HighLighter.Style_Classes[5]=["jsp_def"];Dottoro.HighLighter.Style_Classes[6]="php_def php_outside php_openclose php_com php_invalid php_keyword php_number php_string php_predef php_op".split(" ");Dottoro.HighLighter.Style_Classes[7]="vbscript_def vbscript_com vbscript_invalid vbscript_keyword vbscript_number vbscript_string vbscript_op vbscript_opword vbscript_opmultiline".split(" ");Dottoro.HighLighter.Style_Classes[8]="xml_def xml_com xml_cdata xml_invalid xml_tagop xml_attrop xml_tag xml_dectag xml_doctype xml_attr xml_attrvalue".split(" ");
Dottoro.HighLighter.printFrame=null;Dottoro.HighLighter.UnpackSpan=function(a,c){var b=a.charCodeAt(c)-64;c++;for(var d=0;c<a.length;){var e=a.charCodeAt(c);if(64>e||192<=e)break;d<<=7;d+=e-64;c++}return["<span class='"+Dottoro.HighLighter.Style_Classes[b][d]+"'>",c]};
Dottoro.HighLighter.UnpackSource=function(a){for(var a=a.replace(/<a href="http:\/\/help\.dottoro\.com\//ig,'<a target="_blank" href="http://help.dottoro.com/'),c="",b=0;b<a.length;){var d=a.indexOf("<\!--",b);if(-1==d){c+=a.substring(b);break}else c+=a.substring(b,d);b=d+4;d=a.indexOf("--\>",b);if(-1==d)break;for(var b=a.substring(b,d),e="",f=0;f<b.length;)switch(b.charAt(f)){case "0":e+="</span>";f++;break;case "s":f=Dottoro.HighLighter.UnpackSpan(b,f+1);e+=f[0];f=f[1];break;case "S":f=Dottoro.HighLighter.UnpackSpan(b,
f+1);e+="</span>"+f[0];f=f[1];break;default:f=b.length}c+=e;b=d+3}return c};Dottoro.HighLighter.GetRootElement=function(a){for(;a&&0>a.className.indexOf("dottoro_highlight");)a=a.parentNode;return a};Dottoro.HighLighter.GetCodePreElement=function(a,c){var b=a;c||(b=Dottoro.HighLighter.GetRootElement(a));if(!b)return null;b=b.getElementsByTagName("pre");return 0==b.length?null:2==b.length?b[1]:b[0]};
Dottoro.HighLighter.GetCodeText=function(a){a=Dottoro.HighLighter.GetCodePreElement(a,!1);return!a?"":void 0===a.innerText?a.textContent:a.innerText};
Dottoro.HighLighter.OnViewPlainButton=function(a){a=Dottoro.HighLighter.GetCodeText(a);if(null!=a){var c=window.open("","plain","width=750, height=400, location=0, resizable=1, menubar=0, scrollbars=0,titlebar=0,directories=0,toolbar=0,channelmode=0,status=0");if(c.document.body){var b=c.document.createElement("textarea");b.wrap="off";b.spellcheck=!1;b.style.width="100%";b.style.height="100%";b.value=a;c.document.body.appendChild(b);c.focus&&c.focus();b.focus();b.select()}}};
Dottoro.HighLighter.OnCopyButton=function(a){var c=!0;if(window.clipboardData){var b=Dottoro.HighLighter.GetCodeText(a);window.clipboardData.setData("text",b)}else if(b=Dottoro.HighLighter.GetCodePreElement(a,!1)){b=Dottoro.HighLighter.GetOuterHTML(b);b=Dottoro.HighLighter.CreateIframe(b);b.contentEditable=!0;var d=b.contentWindow.document,e=d.createRange();e.selectNodeContents(d.body);b.contentWindow.getSelection().addRange(e);try{d.execCommand("copy",!1,null)}catch(f){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"),
d.execCommand("copy",!1,null)}catch(g){c=!1,alert("Your browser doesn't allow clipboard access! Please copy the code manually.")}}document.body.removeChild(b)}c||Dottoro.HighLighter.OnViewPlainButton(a)};
Dottoro.HighLighter.OnPrintButton=function(a){if(a=Dottoro.HighLighter.GetCodePreElement(a,!1))a=Dottoro.HighLighter.GetOuterHTML(a),window.opera?Dottoro.HighLighter.CreatePrintWindow(a):(Dottoro.HighLighter.printFrame?Dottoro.HighLighter.printFrame.contentWindow.document.body.innerHTML=a:Dottoro.HighLighter.printFrame=Dottoro.HighLighter.CreateIframe(a),Dottoro.HighLighter.printFrame.contentWindow.focus(),Dottoro.HighLighter.printFrame.contentWindow.print())};
Dottoro.HighLighter.GetOuterHTML=function(a){if(void 0!==a.outerHTML)return a.outerHTML;if(document.createRange){var c=document.createRange();c.selectNode(a);a=c.cloneContents();c=document.createElement("div");c.appendChild(a);return c.innerHTML}return""};
Dottoro.HighLighter.CollectStyles=function(){for(var a="",c=document.getElementsByTagName("link"),b=0;b<c.length;b++)"stylesheet"==c[b].rel.toLowerCase()&&(a+='<link type="text/css" rel="stylesheet" href="'+c[b].href+'"></link>');c=document.getElementsByTagName("style");for(b=0;b<c.length;b++){var d=c[b].styleSheet?c[b].styleSheet:c[b].sheet,e="";if(void 0===d.cssText)for(var f=0;f<d.cssRules.length;f++)e+=d.cssRules[f].cssText;else e+=d.cssText;a+="<style>"+e+"</style>"}return a};
Dottoro.HighLighter.CreateIframe=function(a){var c=document.createElement("iframe");c.style.position="absolute";c.style.left="-1000px";c.style.top="-1000px";c.style.width="0px";c.style.height="0px";document.body.appendChild(c);var b;b="<!DOCTYPE html><html><head>"+Dottoro.HighLighter.CollectStyles();b=b+"</head><body>"+a+"</body></html>";a=c.contentWindow.document;a.open();a.write(b);a.close();return c};
Dottoro.HighLighter.CreatePrintWindow=function(a){var c=window.open(""),b;b="<!DOCTYPE html><html><head>"+Dottoro.HighLighter.CollectStyles();b=b+'</head><body onload="window.print (); window.opener = self; self.close ();">'+a+"</body></html>";a=c.document;a.open();a.write(b);a.close();return c};
Dottoro.HighLighter.UnpackCodes=function(){for(var a=document.getElementsByName("dr_hl_compressed"),c=0;c<a.length;c++){var b=Dottoro.HighLighter.GetCodePreElement(a[c],!1);if(b){var d=b.innerHTML;b.innerHTML=" ";b.innerHTML=0==b.innerHTML.length?"<pre>"+Dottoro.HighLighter.UnpackSource(d)+"</pre>":Dottoro.HighLighter.UnpackSource(d)}}};window.addEventListener?window.addEventListener("load",Dottoro.HighLighter.UnpackCodes,!1):window.attachEvent("onload",Dottoro.HighLighter.UnpackCodes);