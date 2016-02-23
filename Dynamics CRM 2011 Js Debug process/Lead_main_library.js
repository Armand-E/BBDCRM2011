function Form_onload()
{
document.all.sic_c.style.display='none';
document.all.sic_d.style.display='none';
}
function leadsourcecode_onchange()
{
if (crmForm.all.leadsourcecode.DataValue != null) {
var tmpValue = crmForm.all.leadsourcecode.DataValue;
if(tmpValue  == 16) {
 crmForm.SetFieldReqLevel("isp_newspaperlist", 2);
 crmForm.SetFieldReqLevel("isp_journallist",0);
}
else if(tmpValue  == 12) {
 crmForm.SetFieldReqLevel("isp_journallist",2);
 crmForm.SetFieldReqLevel("isp_newspaperlist", 0);
}
else {
 crmForm.SetFieldReqLevel("isp_journallist",0);
 crmForm.SetFieldReqLevel("isp_newspaperlist", 0);
}
}
}
