function isp_notifyoffundstobereleased_onchange()
{
debugger
if (crmForm.all.isp_notifyoffundstobereleased.DataValue == true) {
    crmForm.SetFieldReqLevel("isp_fundstobereleasedon", 1);
}
else {
    crmForm.SetFieldReqLevel("isp_fundstobereleasedon", 0);
}
}
