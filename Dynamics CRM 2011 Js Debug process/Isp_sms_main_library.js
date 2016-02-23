function Form_onload()
{
if (crmForm.all.isp_toaccountid.DataValue != null)
(crmForm.all.isp_tocontactid.Disabled = true);
if (crmForm.all.isp_tocontactid.DataValue != null)
(crmForm.all.isp_toaccountid.Disabled = true);
crmForm.all.isp_schedule.Disabled = true;
if (crmForm.all.isp_status.DataValue == 2)
{
    crmForm.all.ownerid.Disabled = true;
    crmForm.all.isp_toaccountid.Disabled = true;
    crmForm.all.isp_tocontactid.Disabled = true;
    crmForm.all.isp_name.Disabled = true;
    crmForm.all.isp_schedule.Disabled = true;
    crmForm.all.isp_direction.Disabled = true;
    crmForm.all.isp_status.Disabled = true;
    crmForm.all.isp_messagetext.Disabled = true;
}
}
function isp_toaccountid_onchange()
{
if (crmForm.all.isp_toaccountid.DataValue != null)
{
    crmForm.all.isp_tocontactid.Disabled = true;
}
else
{
    crmForm.all.isp_tocontactid.Disabled = false;
}
}
function isp_tocontactid_onchange()
{
if (crmForm.all.isp_tocontactid.DataValue != null)
{
    crmForm.all.isp_toaccountid.Disabled = true;
}
else
{
    crmForm.all.isp_toaccountid.Disabled = false;
}
}
