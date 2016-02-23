IFRAME_Warranty_onload = ->
Form_onload = ->
  navProjectEcard = undefined
  navProjectEcard = document.all.isp_name
  if Xrm.Page.ui.getFormType() is 1
    document.all.IFRAME_Warranty.src = "about:blank"
  else
    if navProjectEcard?
      document.all.IFRAME_Warranty.src = "/userdefined/areas.aspx?oId=" + Xrm.Page.data.entity.getId() + "&oType=" + Xrm.Page.ObjectTypeCode + "&security=852023&tabSet=isp_isp_assets_isp_name"
    else
      alert " navProjectEcard Not Found"
  return