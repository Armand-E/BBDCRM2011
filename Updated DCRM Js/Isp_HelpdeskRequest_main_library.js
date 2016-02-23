function IFRAME_Close_onload()
{

}
function IFRAME_recap_onload()
{

}
function Form_onload()
{
try { document.all.tab2Tab.style.display='none'; } catch (ex) {}
document.frames.IFRAME_Close.document.writeln("<HTML><BODY bgcolor='#eef0f6'>");
if (Xrm.Page.ui.getFormType() == 2) {
document.frames.IFRAME_Close.document.writeln("<input type=button value='Close Request' onclick='window.parent.isp_closeCall();'>");
}
document.frames.IFRAME_Close.document.writeln("</BODY></HTML>");
document.frames.IFRAME_Close.document.close();
isp_closeCall = function() {
 if ((Xrm.Page.getAttribute("isp_resolution").getValue() == null) || (Xrm.Page.getAttribute("isp_resolution").getValue() == "")) {
   alert("Please complete the resolution before closing.");
 } else {
   changeState('deactivate', '10001', '5');
 }
}

dothelookup = function(iframename,fieldname,fieldid,fieldtype,savefield)
{
    Xrm.Page(iframename).style.height = "19px";
    var i = document.frames(iframename).document;

    i.writeln("<HEAD>");
    i.writeln("<style type='text/css'>");
    i.writeln(".enabled { ");
    i.writeln("FONT-SIZE: 8pt; COLOR: blue; ");
    i.writeln("FONT-FAMILY: tahoma; ");
    i.writeln("TEXT-DECORATION: underline ");
    i.writeln("BORDER-RIGHT: #7b9ebd 1px solid; ");
    i.writeln("BORDER-TOP: #7b9ebd 1px solid; ");
    i.writeln("BORDER-LEFT: #7b9ebd 1px solid; ");
    i.writeln("TEXT-INDENT: 1px; ");
    i.writeln("BORDER-BOTTOM: #7b9ebd 1px solid ");
    i.writeln("} ");
    i.writeln(".normal {");
    i.writeln("BACKGROUND-COLOR: #ffffff;");
    i.writeln("}");
    i.writeln(".clsdisabled { ");
    i.writeln("FONT-SIZE: 8pt; COLOR: blue; ");
    i.writeln("FONT-FAMILY: tahoma; ");
    i.writeln("BORDER-RIGHT: #7b9ebd 1px solid; ");
    i.writeln("BORDER-TOP: #7b9ebd 1px solid; ");
    i.writeln("BORDER-LEFT: #7b9ebd 1px solid; ");
    i.writeln("TEXT-INDENT: 1px; ");
    i.writeln("BORDER-BOTTOM: #7b9ebd 1px solid ");
    i.writeln("} ");
    i.writeln("</style>");
    i.writeln("<sc" + "ript language='jav" + "ascr" + "ipt'>");
    i.writeln("//----------------------------------------------------------------------------------------------------");
    i.writeln("function lookup() {");
    i.writeln("var s = '"+window.location.protocol+"//"+window.location.host+"'");
    i.writeln("var myObject = new Object();");
    i.writeln("var itm = new Object();");
    i.writeln("var arr = new Array();");
    i.writeln("arr.push(myObject);");
    i.writeln("itm.items = arr;");
    i.writeln("var x = window.showModalDialog(s + '/_controls/lookup/lookupsingle.aspx?objecttypes=8&browse=', itm, 'width=400; height=400;');");
    i.writeln("try ");
    i.writeln("{");
    i.writeln("if (x.items[0] == undefined) ");
    i.writeln("{");
    i.writeln("document.all.txtLink.classname = 'clsdisabled';");
    i.writeln("window.parent.document.all."+fieldname+".setValue('');");
    i.writeln("window.parent.document.all."+fieldid+".setValue('');");
    i.writeln("window.parent.document.all."+fieldtype+".setValue(null);");
//Save field for lookup
      if (savefield != "none")  i.writeln("window.parent.document.all."+savefield+".setValue('');");
//------------------------
    i.writeln("document.all.txtLink.innerText = ' ';");
    i.writeln("} ");
    i.writeln("else ");
    i.writeln("{");
    i.writeln("document.all.txtLink.classname = 'enabled';");
    i.writeln("window.parent.document.all."+fieldname+".setValue(x.items[0].name);");
    i.writeln("window.parent.document.all."+fieldid+".setValue(x.items[0].id);");
    i.writeln("window.parent.document.all."+fieldtype+".setValue(x.items[0].type - 0);");
//Save field for lookup
   if (savefield != "none")  i.writeln("window.parent.document.all."+savefield+".setValue(x.items[0].name);");
//------------------------
    i.writeln("document.all.txtLink.innerText = x.items[0].name;");
    i.writeln("}");
    i.writeln("} ");
    i.writeln("catch (ex) { }");
    i.writeln("}");
    i.writeln("//----------------------------------------------------------------------------------------------------");
    i.writeln("function openWin() {");
    i.writeln("var u = '"+window.location.protocol+"//"+window.location.host+"'");
    i.writeln("var s = window.parent.document.all."+fieldid+".getValue()");
    i.writeln("var t = window.parent.document.all."+fieldtype+".getValue()");
    i.writeln("if (t==1) {");
    i.writeln("window.open(u + '/sfa/accts/edit.aspx?id=' + s, '_blank', 'toolbar=no; statusbar=no; resize=yes');");
    i.writeln("}");
    i.writeln("if (t==2) {");
    i.writeln("window.open(u+ '/sfa/conts/edit.aspx?id=' + s, '_blank', 'toolbar=no; statusbar=no; resize=yes');");
    i.writeln("}");
    i.writeln("return false;");
    i.writeln("}");
    i.writeln("//----------------------------------------------------------------------------------------------------");
    i.writeln("</sc" + "ript>");
    i.writeln("</HEAD>");
    i.writeln("<body MS_POSITIONING='GridLayout' bottomMargin='0' leftMargin='0' topMargin='0' rightMargin='0'>");
    i.writeln("<form id='Form1' method='post' runat='server'>");
    i.writeln("<table  border='0' cellpadding='0' cellspacing='0' width='100%' height='19'>");
    i.writeln("<tr>");
    i.writeln("<td class='clsdisabled' id='txtLink' >&nbsp;</td>");
    i.writeln("<td bgcolor=#f5f5f5 style='TEXT-DECORATION: none; width: 4px;'>&nbsp;</td>");
    i.writeln("<td bgcolor=#f5f5f5 width='21' style='TEXT-DECORATION: none'>");
    i.writeln("<img id='imgLookup' style='TEXT-DECORATION: none; Z-INDEX: 101; CURSOR: hand; POSITION: absolute; TOP: 0px'");
    i.writeln("onclick='lookup();' src='/_Imgs/btn_on_lookup.gif'");
    i.writeln("width='21' height='19' />");
    i.writeln("</td>");
    i.writeln("</tr>");
    i.writeln("</table>");
    i.writeln("</form>");
    i.writeln("</body>");
    i.close();
    if (Xrm.Page(fieldname).getValue() == null)
    {
    document.frames(iframename).document.all.txtLink.innerText = " ";
    document.frames(iframename).document.all.txtLink.classname = 'clsdisabled';
    }
    else
    {
    document.frames(iframename).document.all.txtLink.innerText = Xrm.Page(fieldname).getValue();
    document.frames(iframename).document.all.txtLink.style.cursor = 'hand';

    if (window.frames(iframename) && window.frames(iframename).openWin) {
    document.frames(iframename).document.all.txtLink.onclick = window.frames(iframename).openWin;
    }

    document.frames(iframename).document.all.txtLink.style.textdecoration = 'underline';
    }

}
try {
dothelookup("IFRAME_secondary","isp_secondary","isp_secondary_id","isp_secondary_type","none");
}
catch (ex) { }
isp_cap = function() {
try {
//recapture info
window.frames("IFRAME_recap").document.all("txtName").value= Xrm.Page.getAttribute("isp_name").getValue() == null? "": Xrm.Page.getAttribute("isp_name").getValue();
window.frames("IFRAME_recap").document.all("txtSurname").value= Xrm.Page.getAttribute("isp_surname").getValue()==null?"":Xrm.Page.getAttribute("isp_surname").getValue();
window.frames("IFRAME_recap").document.all("txtTel").value= Xrm.Page.getAttribute("isp_telno").getValue()==null?"":Xrm.Page.getAttribute("isp_telno").getValue();
window.frames("IFRAME_recap").document.all("txtCell").value= Xrm.Page.getAttribute("isp_cellno").getValue()==null?"":Xrm.Page.getAttribute("isp_cellno").getValue();
window.frames("IFRAME_recap").document.all("txtEmail").value= Xrm.Page.getAttribute("isp_email").getValue()==null?"":Xrm.Page.getAttribute("isp_email").getValue();
window.frames("IFRAME_recap").document.all("DLBranch").value= Xrm.Page.getAttribute("isp_branch").getValue();
window.frames("IFRAME_recap").document.all("dlPriority").value = Xrm.Page.getAttribute("isp_priority").getValue();
window.frames("IFRAME_recap").document.all("txtDescription").value= Xrm.Page.getAttribute("isp_description").getValue()==null?"":Xrm.Page.getAttribute("isp_description").getValue();
} catch (ex) { setTimeout("isp_cap();", 500);}
}
Xrm.Page.tab3Tab.onclick = function() {
setTimeout("isp_cap();", 500);
}
{
if (Xrm.Page.getAttribute("isp_hasaccepted").getValue() == true) {
    Xrm.Page.isp_hasaccepted.Disabled = 1;
    Xrm.Page.isp_datetimeaccepted.Disabled = 1;
    Xrm.Page.getAttribute("isp_hasaccepted").setSubmitMode("always");
    Xrm.Page.getAttribute("isp_datetimeaccepted").setSubmitMode("always");
}
else {
    Xrm.Page.isp_hasaccepted.Disabled = 0;
}
}
}
function isp_hasaccepted_onchange()
{
var today = new Date();
var curr_hour = today.getHours();
var curr_min = today.getMinutes();
if (Xrm.Page.getAttribute("isp_hasaccepted").getValue() == true) {
    today.setHours(curr_hour);
    today.setMinutes(curr_min);
    Xrm.Page.getAttribute("isp_datetimeaccepted").setValue(today);
    Xrm.Page.isp_hasaccepted.Disabled = 1;
    Xrm.Page.isp_datetimeaccepted.Disabled = 1;
    Xrm.Page.getAttribute("isp_hasaccepted").setSubmitMode("always");
    Xrm.Page.getAttribute("isp_datetimeaccepted").setSubmitMode("always");
}
else {
    Xrm.Page.isp_hasaccepted.Disabled = 0;
}
}
