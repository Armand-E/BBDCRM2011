function isp_notifyoffundstobereleased_onchange()
{
debugger
if (Xrm.Page.getAttribute("isp_notifyoffundstobereleased").getValue() == true) {
    Xrm.Page.getAttribute("isp_fundstobereleasedon").setRequiredLevel("required");
}
else {
    Xrm.Page.getAttribute("isp_fundstobereleasedon").setRequiredLevel("none");
}
}
