function Form_onload()
{
document.all.sic_c.style.display='none';
document.all.sic_d.style.display='none';
}
function leadsourcecode_onchange()
{
if (Xrm.Page.getAttribute("leadsourcecode").getValue() != null) {
var tmpValue = Xrm.Page.getAttribute("leadsourcecode").getValue();
if(tmpValue  == 16) {
 Xrm.Page.getAttribute("isp_newspaperlist").setRequiredLevel("recommended");
 Xrm.Page.SetFieldReqLevel("isp_journallist",0);
}
else if(tmpValue  == 12) {
 Xrm.Page.SetFieldReqLevel("isp_journallist",2);
 Xrm.Page.getAttribute("isp_newspaperlist").setRequiredLevel("none");
}
else {
 Xrm.Page.SetFieldReqLevel("isp_journallist",0);
 Xrm.Page.getAttribute("isp_newspaperlist").setRequiredLevel("none");
}
}
}
