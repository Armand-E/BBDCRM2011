function IFRAME_Warranty_onload()
{

}
function Form_onload()
{
var navProjectEcard;
navProjectEcard =
document.all.isp_name;
if (crmForm.FormType == 1)
{
document.all.IFRAME_Warranty.src="about:blank";
}
else
{
if ( navProjectEcard != null)
{
document.all.IFRAME_Warranty.src="/userdefined/areas.aspx?oId=" +
crmForm.ObjectId + "&oType=" + crmForm.ObjectTypeCode + "&security=852023&tabSet=isp_isp_assets_isp_name";
}
else
{
alert(" navProjectEcard Not Found");
}
}
}
