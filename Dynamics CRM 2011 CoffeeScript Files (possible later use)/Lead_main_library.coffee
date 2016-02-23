Form_onload = ->
  document.all.sic_c.style.display = "none"
  document.all.sic_d.style.display = "none"
  return
leadsourcecode_onchange = ->
  if Xrm.Page.getAttribute("leadsourcecode").getValue()?
    tmpValue = Xrm.Page.getAttribute("leadsourcecode").getValue()
    if tmpValue is 16
      Xrm.Page.getAttribute("isp_newspaperlist").setRequiredLevel "recommended"
      Xrm.Page.SetFieldReqLevel "isp_journallist", 0
    else if tmpValue is 12
      Xrm.Page.SetFieldReqLevel "isp_journallist", 2
      Xrm.Page.getAttribute("isp_newspaperlist").setRequiredLevel "none"
    else
      Xrm.Page.SetFieldReqLevel "isp_journallist", 0
      Xrm.Page.getAttribute("isp_newspaperlist").setRequiredLevel "none"
  return