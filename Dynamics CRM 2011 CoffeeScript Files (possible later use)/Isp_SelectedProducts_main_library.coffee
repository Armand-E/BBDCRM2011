Form_onload = ->
  strSubCategory = Xrm.Page.getAttribute("isp_product").getValue()
  CRM_FORM_TYPE_CREATE = 1
  CRM_FORM_TYPE_UPDATE = 2
  switch Xrm.Page.ui.getFormType()
    when CRM_FORM_TYPE_CREATE, CRM_FORM_TYPE_UPDATE
      productcatagory = Xrm.Page.getAttribute("isp_productcatagory")
      product = Xrm.Page.getAttribute("isp_product")
      productbackup = Xrm.Page.getAttribute("isp_product")
      product.originalPicklistOptions = product.Options
      productcatagory.originalPicklistOptions = productcatagory.Options
      productbackup.originalPicklistOptions = productbackup.Options
      unless Xrm.Page.getAttribute("isp_productcatagory").getValue()?
        product.Disabled = true
      else
        isp_productcatagory_onchange()
  Xrm.Page.getAttribute("isp_product").setValue strSubCategory
  return
isp_productcatagory_onchange = ->
  iIndexNew = -1
  iEndIndex = -1
  switch productcatagory.getValue()
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
    Xrm.Page.SetFieldReqLevel "isp_product", 2
  else
    product.setValue null
    product.Disabled = true
    Xrm.Page.SetFieldReqLevel "isp_product", 0
  return