Mscrm_Isv_isp_sms_Form_Group0_Control0_1 = ->
  if Xrm.Page.data.entity.getIsDirty()
    alert "You must save the changes before you can send this message."
  else
    Xrm.Page.getAttribute("isp_status").setValue 2
    Xrm.Page.data.entity.save "saveandclose"
  return