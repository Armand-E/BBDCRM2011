Form_onload = ->
  FindNavItem = (vstrNavItemID) ->
    document.all["crmNavBar"].all[vstrNavItemID]
  ShowHideNavItem = (vstrNavItemID, vblnVisible) ->
    try
      FindNavItem(vstrNavItemID).style.display = (if (vblnVisible is true) then "inline" else "none")
    return
  SetNavItemIndex = (vstrNavItemID, vintTargetIndex) ->
    try
      objObjectBeingMoved = FindNavItem(vstrNavItemID)
      objObjectBeingMoved.swapNode objObjectBeingMoved.parentElement.childNodes(vintTargetIndex)
    return
  debugger
  SetNavItemIndex "nav_opportunity_isp_selectedproductses", 2
  strSubCategory = Xrm.Page.getAttribute("isp_product").getValue()
  CRM_FORM_TYPE_CREATE = 1
  CRM_FORM_TYPE_UPDATE = 2
  switch Xrm.Page.ui.getFormType()
    when CRM_FORM_TYPE_CREATE, CRM_FORM_TYPE_UPDATE
      productcategory = Xrm.Page.getAttribute("isp_productcategory")
      product = Xrm.Page.getAttribute("isp_product")
      productbackup = Xrm.Page.getAttribute("isp_product")
      product.originalPicklistOptions = product.Options
      productcategory.originalPicklistOptions = productcategory.Options
      productbackup.originalPicklistOptions = productbackup.Options
      unless Xrm.Page.getAttribute("isp_productcategory").getValue()?
        product.Disabled = true
      else
        break
  Xrm.Page.getAttribute("isp_product").setValue strSubCategory
  return
isp_productcategory_onchange = ->
  iIndexNew = -1
  iEndIndex = -1
  switch productcategory.getValue()
    when "1"
      iIndexNew = 1
    when "2"
      iIndexNew = 0
  product.Options = productbackup.originalPicklistOptions
  iEndIndex = Xrm.Page.getAttribute("isp_product").getOptions().length
  if iIndexNew > -1 and iEndIndex > -1
    oTempArray = new Array()
    iIndex = 0
    iTempValue = 0
    i = 0

    while i <= iEndIndex - 1
      if product.Options[i].getValue() is 0
        oTempArray[iIndex] = product.originalPicklistOptions[i]
        iIndex++
      else if product.Options[i].getValue() % 2 is iIndexNew
        oTempArray[iIndex] = product.originalPicklistOptions[i]
        iIndex++
      i++
    product.Options = oTempArray
    product.Disabled = false
    Xrm.Page.getAttribute("isp_product").setRequiredLevel "recommended"
  else
    product.setValue null
    product.Disabled = true
    Xrm.Page.getAttribute("isp_product").setRequiredLevel "none"
  return