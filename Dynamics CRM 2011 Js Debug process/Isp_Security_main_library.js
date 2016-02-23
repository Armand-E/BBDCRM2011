function Form_onload()
{
try {
document.all.isp_name_c.style.display = 'none';
document.all.isp_name_d.style.display = 'none';
} catch (ex) {}
}
function isp_security_onchange()
{
crmForm.all.isp_name.DataValue = crmForm.all.isp_security.childNodes(crmForm.all.isp_security.value).innerText;
}
