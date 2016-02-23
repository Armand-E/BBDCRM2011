function Form_onload()
{
if (Xrm.Page.getAttribute("isp_toaccountid").getValue() != null)
(Xrm.Page.isp_tocontactid.Disabled = true);
if (Xrm.Page.getAttribute("isp_tocontactid").getValue() != null)
(Xrm.Page.isp_toaccountid.Disabled = true);
Xrm.Page.getControl("isp_schedule").setDisabled(true);
if (Xrm.Page.getAttribute("isp_status").getValue() == 2)
{
    Xrm.Page.getControl("ownerid").setDisabled(true);
    Xrm.Page.getControl("isp_toaccountid").setDisabled(true);
    Xrm.Page.getControl("isp_tocontactid").setDisabled(true);
    Xrm.Page.getControl("isp_name").setDisabled(true);
    Xrm.Page.getControl("isp_schedule").setDisabled(true);
    Xrm.Page.getControl("isp_direction").setDisabled(true);
    Xrm.Page.getControl("isp_status").setDisabled(true);
    Xrm.Page.getControl("isp_messagetext").setDisabled(true);
}
}
function isp_toaccountid_onchange()
{
if (Xrm.Page.getAttribute("isp_toaccountid").getValue() != null)
{
    Xrm.Page.getControl("isp_tocontactid").setDisabled(true);
}
else
{
    Xrm.Page.getControl("isp_tocontactid").setDisabled(false);
}
}
function isp_tocontactid_onchange()
{
if (Xrm.Page.getAttribute("isp_tocontactid").getValue() != null)
{
    Xrm.Page.getControl("isp_toaccountid").setDisabled(true);
}
else
{
    Xrm.Page.getControl("isp_toaccountid").setDisabled(false);
}
}
