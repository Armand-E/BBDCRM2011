Form_onload = ->
  Xrm.Page.isp_tocontactid.Disabled = true  if Xrm.Page.getAttribute("isp_toaccountid").getValue()?
  Xrm.Page.isp_toaccountid.Disabled = true  if Xrm.Page.getAttribute("isp_tocontactid").getValue()?
  Xrm.Page.getControl("isp_schedule").setDisabled true
  if Xrm.Page.getAttribute("isp_status").getValue() is 2
    Xrm.Page.getControl("ownerid").setDisabled true
    Xrm.Page.getControl("isp_toaccountid").setDisabled true
    Xrm.Page.getControl("isp_tocontactid").setDisabled true
    Xrm.Page.getControl("isp_name").setDisabled true
    Xrm.Page.getControl("isp_schedule").setDisabled true
    Xrm.Page.getControl("isp_direction").setDisabled true
    Xrm.Page.getControl("isp_status").setDisabled true
    Xrm.Page.getControl("isp_messagetext").setDisabled true
  return
isp_toaccountid_onchange = ->
  if Xrm.Page.getAttribute("isp_toaccountid").getValue()?
    Xrm.Page.getControl("isp_tocontactid").setDisabled true
  else
    Xrm.Page.getControl("isp_tocontactid").setDisabled false
  return
isp_tocontactid_onchange = ->
  if Xrm.Page.getAttribute("isp_tocontactid").getValue()?
    Xrm.Page.getControl("isp_toaccountid").setDisabled true
  else
    Xrm.Page.getControl("isp_toaccountid").setDisabled false
  return