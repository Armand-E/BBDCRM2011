Form_onsave = ->
  Xrm.Page.isp_datetorelease.ForceSubmit = true
  Xrm.Page.isp_datetorelease_02.ForceSubmit = true
  Xrm.Page.isp_datetorelease_03.ForceSubmit = true
  Xrm.Page.isp_datetorelease_04.ForceSubmit = true
  return
Form_onload = ->
  strNoticeSt = Xrm.Page.getAttribute("isp_noticestatus").getValue()
  strVerified = Xrm.Page.getAttribute("isp_verified").getValue()
  if (strNoticeSt is "8" or strNoticeSt is "2" or strNoticeSt is "3") and strVerified is "1"
    controls = Xrm.Page.ui.controls.get()
    for i of controls
      control = controls[i]
      control.setDisabled true  unless control.getDisabled()
  Xrm.Page.isp_sendconfirmationemailtocustomer_c.style.color = "#ff0000"
  Xrm.Page.isp_sendamendmentemailtocustomer_c.style.color = "#ff0000"
  document.all.isp_ndays_c.style.visibility = "hidden"
  document.all.isp_ndays_d.style.visibility = "hidden"
  document.all.isp_ndays_02_c.style.visibility = "hidden"
  document.all.isp_ndays_02_d.style.visibility = "hidden"
  document.all.isp_ndays_03_c.style.visibility = "hidden"
  document.all.isp_ndays_03_d.style.visibility = "hidden"
  document.all.isp_ndays_04_c.style.visibility = "hidden"
  document.all.isp_ndays_04_d.style.visibility = "hidden"
  strStatus = Xrm.Page.getAttribute("isp_noticestatus")
  Xrm.Page.isp_confirmedinstructions.Disabled = 1  unless strStatus.getValue() is "6"
  
  #Payment Method check
  strpayment = Xrm.Page.isp_paymentmethod
  if strpayment.getValue() is "1" or not strpayment.getValue()?
    Xrm.Page.isp_bankbranchcode.Disabled = 1
    Xrm.Page.isp_beneficiarybank.Disabled = 1
    Xrm.Page.isp_beneficiaryaccountnumber.Disabled = 1
    Xrm.Page.isp_beneficiaryname.Disabled = 1
  else
    Xrm.Page.isp_bankbranchcode.Disabled = 0
    Xrm.Page.isp_beneficiarybank.Disabled = 0
    Xrm.Page.isp_beneficiaryaccountnumber.Disabled = 0
    Xrm.Page.isp_beneficiaryname.Disabled = 0
  return
isp_datedepositmade_onchange = ->
  Xrm.Page.getAttribute("isp_noticedays").getValue() = null
  return
isp_noticedays_onchange = ->
  debugger
  oNoticeDays = Xrm.Page.getAttribute("isp_noticedays").getSelectedOption().text
  oNoticeDays = oNoticeDays.toString()
  oDatetoRelease = Xrm.Page.getAttribute("isp_datetorelease")
  otoday = new Date()
  d = Xrm.Page.getAttribute("isp_datedepositmade").getValue()
  curr_date = d.getDate()
  curr_month = d.getMonth()
  curr_month++
  curr_year = d.getFullYear()
  Date_Format = (curr_month + "/" + curr_date + "/" + curr_year)
  Date_Format = Date_Format.toString()
  one_day = 1000 * 60 * 60
  arr = oNoticeDays.split(" ")
  if oNoticeDays.toLowerCase().indexOf("months") is -1
    oAlert = Math.ceil(d.setDate(d.getDate() + Number(arr[0])))
  else
    oAlert = getFutureDate(d, Number(arr[0]))
  Xrm.Page.getAttribute("isp_datetorelease").setValue oAlert
  Xrm.Page.getAttribute("isp_ndays").getValue() = Xrm.Page.getAttribute("isp_noticedays").getSelectedOption().text
  return
getFutureDate = (theDate, numOfMonths) ->
  debugger
  now = theDate
  current = undefined
  current = new Date(now.getFullYear(), (now.getMonth() + numOfMonths), now.getDate())
  new Date(current.getFullYear(), current.getMonth(), current.getDate())
isp_noticestatus_onchange = ->
  debugger
  strStatus = Xrm.Page.getAttribute("isp_noticestatus")
  if strStatus.getValue() is "6"
    Xrm.Page.isp_confirmedinstructions.Disabled = 0
    Xrm.Page.getAttribute("isp_confirmedinstructions").setRequiredLevel "required"
  else
    Xrm.Page.isp_confirmedinstructions.Disabled = 1
  return
isp_datetorelease_onchange = ->
  debugger
  oDatetoRelease = Xrm.Page.getAttribute("isp_datetorelease")
  oNoticeDays = Xrm.Page.getAttribute("isp_noticedays")
  oNotifyDate = Xrm.Page.getAttribute("isp_notifydate")
  oNoticeDate = new Date()
  if oNoticeDays.getValue()?
    switch oNoticeDays.getSelectedOption().text
      when "40"
        oNotifyDate.setValue Xrm.Page.getAttribute("isp_datetorelease").getValue()() - Xrm.Page.getAttribute("isp_noticedays").getSelectedOption().text
      when "41"
        oNotifyDate.setValue oNoticeDate.setDate(oNoticeDate.getDate() - 41)
      when "60"
        oNotifyDate.setValue oDatetoRelease.setDate(oDatetoRelease.getDate() - 60)
      when "61"
        oNotifyDate.setValue oNoticeDate.setDate(oNoticeDate.getDate() - 61)
      when "90"
        oNotifyDate.setValue oNoticeDate.setDate(oNoticeDate.getDate() - 90)
      when "91"
        oNotifyDate.setValue oNoticeDate.setDate(oNoticeDate.getDate() - 91)
      when "120"
        oNotifyDate.setValue oNoticeDate.setDate(oNoticeDate.getDate() - 120)
      when "121"
        oNotifyDate.setValue oNoticeDate.setDate(oNoticeDate.getDate() - 121)
isp_paymentmethod_onchange = ->
  debugger
  #Payment Method check
  strpayment = Xrm.Page.isp_paymentmethod
  if strpayment.getValue() is "1" or not strpayment.getValue()?
    Xrm.Page.isp_bankbranchcode.Disabled = 1
    Xrm.Page.isp_beneficiarybank.Disabled = 1
    Xrm.Page.isp_beneficiaryaccountnumber.Disabled = 1
    Xrm.Page.isp_beneficiaryname.Disabled = 1
  else
    Xrm.Page.isp_bankbranchcode.Disabled = 0
    Xrm.Page.isp_beneficiarybank.Disabled = 0
    Xrm.Page.isp_beneficiaryaccountnumber.Disabled = 0
    Xrm.Page.isp_beneficiaryname.Disabled = 0
  return