function Form_onload()
{
try {
document.all.isp_name_c.style.display = 'none';
document.all.isp_name_d.style.display = 'none';
} catch (ex) {}
}
function isp_security_onchange()
{
Xrm.Page.getAttribute("isp_name").setValue(Xrm.Page.isp_security.childNodes(Xrm.Page.isp_security.value).innerText);
}
