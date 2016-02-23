IFRAME_multiselect_onload = ->
Form_onsave = ->
  
  #ID Number Check and Date of Birth **
  idNumber = Xrm.Page.getAttribute("isp_idnumber").getValue()
  if idNumber? and idNumber isnt ""
    unless validateIDNumber(idNumber)
      alert "Invalid ID Number entered"
      Xrm.Page.getControl("isp_idnumber").setFocus true
      event.returnValue = false
      return false
  curdob = Xrm.Page.getAttribute("isp_dateofbirth").getValue()
  if idNumber? and idNumber isnt "" and curdob?
    dob = new Date(idNumber.substring(0, 2), idNumber.substring(2, 4) - 1, idNumber.substring(4, 6))
    cdob = new Date(curdob)
    dobStr = ""
    dobStr = dobStr.concat(dob.getFullYear().toString().substring(2), dob.getMonth().toString(), dob.getDate().toString())
    cdobStr = ""
    cdobStr = cdobStr.concat(cdob.getFullYear().toString().substring(2), cdob.getMonth().toString(), cdob.getDate().toString())
    unless dobStr is cdobStr
      alert "Date of birth does not match the ID Number."
      Xrm.Page.getControl("isp_dateofbirth").setFocus true
      event.returnValue = false
      return false
  if Xrm.Page.ui.getFormType() < 3
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM")
    xmlDoc.async = false
    s = undefined
    s = "/isp-asp/dupcheck.aspx?telephone1="
    s += escape(Xrm.Page.getAttribute("telephone1").getValue())  unless Xrm.Page.getAttribute("telephone1").getValue() is `undefined`
    s += "&telephone2="
    s += escape(Xrm.Page.getAttribute("telephone2").getValue())  unless Xrm.Page.getAttribute("telephone2").getValue() is `undefined`
    s += "&mobilephone="
    s += escape(Xrm.Page.getAttribute("mobilephone").getValue())  unless Xrm.Page.getAttribute("mobilephone").getValue() is `undefined`
    s += "&lastname="
    s += escape(Xrm.Page.getAttribute("lastname").getValue())  unless Xrm.Page.getAttribute("lastname").getValue() is `undefined`
    s += "&firstname="
    s += escape(Xrm.Page.getAttribute("firstname").getValue())  unless Xrm.Page.getAttribute("firstname").getValue() is `undefined`
    s += "&accountid="
    s += escape(Xrm.Page.data.entity.getId())  unless Xrm.Page.data.entity.getId() is `undefined`
    s += "&entity=contact&new="
    s += "yes"  if Xrm.Page.ui.getFormType() is 1
    if Xrm.Page.ui.getFormType() is 2
      if Xrm.Page.telephone1.IsDirty or Xrm.Page.telephone2.IsDirty or Xrm.Page.mobilephone.IsDirty or Xrm.Page.lastname.IsDirty or Xrm.Page.firstname.IsDirty
        s += "yes"
      else
        s += "no"
    xmlDoc.load s
    oNode = xmlDoc.selectSingleNode("result")
    if oNode?
      if oNode.text is "True"
        alert "There is another contact with the same Name, Lastname and Contact Number. Please avoid creating duplicates."
        event.returnValue = false
        false
Form_onload = ->
  debugger
  if Xrm.Page.ui.getFormType() < 5
    tmpString1 = Xrm.Page.getAttribute("telephone1").getValue()
    tmpString2 = Xrm.Page.getAttribute("telephone2").getValue()
    tmpString3 = Xrm.Page.getAttribute("mobilephone").getValue()
    Xrm.Page.SetFieldReqLevel "telephone1", 2  if tmpString1? or tmpString2? or tmpString3?
    tmpString6 = Xrm.Page.getAttribute("isp_idnumber").getValue()
    tmpString7 = Xrm.Page.getAttribute("isp_passportnumber").getValue()
    if Xrm.Page.getAttribute("isp_businessaccount").getValue() is "1"
      Xrm.Page.getAttribute("isp_dateofbirth").setRequiredLevel "required"
      Xrm.Page.getAttribute("isp_passportnumber").setRequiredLevel "none"
      Xrm.Page.getAttribute("isp_idnumber").setRequiredLevel "required"
      Xrm.Page.getAttribute("address1_line1").setRequiredLevel "required"
      Xrm.Page.getAttribute("address1_line3").setRequiredLevel "required"
      Xrm.Page.getAttribute("address1_line2").setRequiredLevel "required"
      Xrm.Page.getAttribute("address1_city").setRequiredLevel "required"
      Xrm.Page.getAttribute("address1_postalcode").setRequiredLevel "required"
      Xrm.Page.getAttribute("address1_addresstypecode").setRequiredLevel "required"
      Xrm.Page.getAttribute("donotsendmm").setRequiredLevel "required"
      Xrm.Page.getAttribute("emailaddress1").setRequiredLevel "required"
      Xrm.Page.getAttribute("lastname").setRequiredLevel "required"
      Xrm.Page.getAttribute("firstname").setRequiredLevel "required"
      Xrm.Page.getAttribute("isp_nationalilty").setRequiredLevel "required"
      Xrm.Page.getAttribute("isp_title").setRequiredLevel "required"
      Xrm.Page.getAttribute("isp_province").setRequiredLevel "required"
      Xrm.Page.getAttribute("isp_country").setRequiredLevel "required"
      Xrm.Page.getAttribute("address1_addresstypecode").setRequiredLevel "required"
      Xrm.Page.getAttribute("telephone1").setRequiredLevel "required"
      if tmpString6? or tmpString7?
        Xrm.Page.SetFieldReqLevel "isp_idnumber", 0
        Xrm.Page.SetFieldReqLevel "isp_passportnumber", 0
    Xrm.Page.isp_dateofbirth_c.style.color = "#32cd32"
    Xrm.Page.isp_passportnumber_c.style.color = "#32cd32"
    Xrm.Page.isp_idnumber_c.style.color = "#32cd32"
    Xrm.Page.isp_gender_c.style.color = "#0000FF"
    Xrm.Page.isp_title_c.style.color = "#32cd32"
    Xrm.Page.isp_nationalilty_c.style.color = "#32cd32"
    Xrm.Page.lastname_c.style.color = "#32cd32"
    Xrm.Page.firstname_c.style.color = "#32cd32"
    Xrm.Page.isp_countryofcitizenship_c.style.color = "#0000FF"
    Xrm.Page.isp_countryofregistration_c.style.color = "#0000FF"
    Xrm.Page.telephone1_c.style.color = "#32cd32"
    Xrm.Page.mobilephone_c.style.color = "#32cd32"
    Xrm.Page.emailaddress1_c.style.color = "#32cd32"
    Xrm.Page.donotsendmm_c.style.color = "#32cd32"
    Xrm.Page.donotphone_c.style.color = "#0000FF"
    Xrm.Page.donotfax_c.style.color = "#0000FF"
    Xrm.Page.donotpostalmail_c.style.color = "#0000FF"
    Xrm.Page.isp_donotallowsms_c.style.color = "#0000FF"
    Xrm.Page.donotbulkemail_c.style.color = "#0000FF"
    Xrm.Page.donotemail_c.style.color = "#0000FF"
    Xrm.Page.address1_line1_c.style.color = "#32cd32"
    Xrm.Page.address1_line2_c.style.color = "#32cd32"
    Xrm.Page.address1_line3_c.style.color = "#32cd32"
    Xrm.Page.address1_city_c.style.color = "#32cd32"
    Xrm.Page.address1_postalcode_c.style.color = "#32cd32"
    Xrm.Page.isp_province_c.style.color = "#32cd32"
    Xrm.Page.isp_country_c.style.color = "#32cd32"
    Xrm.Page.address1_addresstypecode_c.style.color = "#32cd32"
    Xrm.Page.address2_line1_c.style.color = "#0000FF"
    Xrm.Page.address2_line2_c.style.color = "#0000FF"
    Xrm.Page.address2_line3_c.style.color = "#0000FF"
    Xrm.Page.address2_city_c.style.color = "#0000FF"
    Xrm.Page.address2_postalcode_c.style.color = "#0000FF"
    Xrm.Page.isp_province2_c.style.color = "#0000FF"
    Xrm.Page.isp_country2_c.style.color = "#0000FF"
    Xrm.Page.address2_addresstypecode_c.style.color = "#0000FF"
    Xrm.Page.isp_businessaccount_c.style.color = "#32cd32"
    chkTabActive = ->
      opt = new String("Theatre;Golf;Rugby;Cricket;Soccer;Cycling;Running;Wildlife-Outdoors;Quad Biking;4x4;Fishing;Motor racing")
      crmFld = "isp_hobbies"
      document.all(crmFld + "_c").style.display = "none"
      document.all(crmFld + "_d").style.display = "none"
      x = opt.split(";")
      i = window.frames.IFRAME_multiselect.document
      i.writeln "<head><sc" + "ript language='javas" + "cript'>"
      i.writeln "function evaluate() { var res = new String();"
      i.writeln "  for (t = 0; t < " + x.length + "; t++) "
      i.writeln "    if (document.all('chk' + t).checked==true) res += document.all('chk' + t).value + ';'"
      i.writeln "  if (res == '') res = null;"
      i.writeln "  window.parent.document.all." + crmFld + ".setValue(res); } </scr" + "ipt>"
      i.writeln "<body bgcolor='#eef0f6' style='font-family: tahoma; font-size:8pt' topmargin=0 leftmargin=0 bottommargin=0 rightmargin=0><table width=100% style='font-family: tahoma; font-size:8pt' border=0 cellpadding=0 cellspacing =0><TR>"
      t = 0
      while t < x.length
        i.writeln "<TD><input type=checkbox id='chk" + t + "' value='" + x[t] + "' onclick=\"evaluate();\" "
        i.writeln "checked"  if (Xrm.Page(crmFld).getValue()?) and (Xrm.Page(crmFld).getValue().indexOf(x[t]) >= 0)
        i.writeln "><nobr>" + x[t] + "</nobr></input></TD>"
        i.writeln "</TR><TR>"  if Math.floor((t + 1) / 5) is Math.ceil((t + 1) / 5)
        t++
      i.writeln "</TR></table></body>"
      return
  return
telephone1_onchange = ->
  tmpString1 = Xrm.Page.getAttribute("telephone1").getValue()
  tmpString2 = Xrm.Page.getAttribute("telephone2").getValue()
  tmpString3 = Xrm.Page.getAttribute("mobilephone").getValue()
  if tmpString1? or tmpString2? or tmpString3?
    Xrm.Page.SetFieldReqLevel "telephone1", 0
    Xrm.Page.SetFieldReqLevel "telephone2", 0
    Xrm.Page.SetFieldReqLevel "mobilephone", 0
  else
    Xrm.Page.SetFieldReqLevel "telephone1", 2
    Xrm.Page.SetFieldReqLevel "telephone2", 2
    Xrm.Page.SetFieldReqLevel "mobilephone", 2
  return
telephone2_onchange = ->
  tmpString1 = Xrm.Page.getAttribute("telephone1").getValue()
  tmpString2 = Xrm.Page.getAttribute("telephone2").getValue()
  tmpString3 = Xrm.Page.getAttribute("mobilephone").getValue()
  if tmpString1? or tmpString2? or tmpString3?
    Xrm.Page.SetFieldReqLevel "telephone1", 0
    Xrm.Page.SetFieldReqLevel "telephone2", 0
    Xrm.Page.SetFieldReqLevel "mobilephone", 0
  else
    Xrm.Page.SetFieldReqLevel "telephone1", 2
    Xrm.Page.SetFieldReqLevel "telephone2", 2
    Xrm.Page.SetFieldReqLevel "mobilephone", 2
  return
mobilephone_onchange = ->
  tmpString1 = Xrm.Page.getAttribute("telephone1").getValue()
  tmpString2 = Xrm.Page.getAttribute("telephone2").getValue()
  tmpString3 = Xrm.Page.getAttribute("mobilephone").getValue()
  if tmpString1? or tmpString2? or tmpString3?
    Xrm.Page.SetFieldReqLevel "telephone1", 0
    Xrm.Page.SetFieldReqLevel "telephone2", 0
    Xrm.Page.SetFieldReqLevel "mobilephone", 0
  else
    Xrm.Page.SetFieldReqLevel "telephone1", 2
    Xrm.Page.SetFieldReqLevel "telephone2", 2
    Xrm.Page.SetFieldReqLevel "mobilephone", 2
  return
birthdate_onchange = ->
  birthdate = Xrm.Page.getAttribute("birthdate").getValue()
  unless birthdate?
    Xrm.Page.getAttribute("isp_upcomingbirthday").setValue null
    return
  today = new Date()
  today.setHours 0
  today.setMinutes 0
  today.setSeconds 0
  birthdate.setFullYear today.getFullYear()
  Xrm.Page.getAttribute("isp_upcomingbirthday").setValue birthdate
  return
isp_businessaccount_onchange = ->
  tmpString6 = Xrm.Page.getAttribute("isp_idnumber").getValue()
  tmpString7 = Xrm.Page.getAttribute("isp_passportnumber").getValue()
  if Xrm.Page.getAttribute("isp_businessaccount").getValue() is "1"
    Xrm.Page.getAttribute("isp_dateofbirth").setRequiredLevel "required"
    Xrm.Page.getAttribute("isp_passportnumber").setRequiredLevel "none"
    Xrm.Page.getAttribute("isp_idnumber").setRequiredLevel "required"
    Xrm.Page.getAttribute("address1_line1").setRequiredLevel "required"
    Xrm.Page.getAttribute("address1_line3").setRequiredLevel "required"
    Xrm.Page.getAttribute("address1_line2").setRequiredLevel "required"
    Xrm.Page.getAttribute("address1_city").setRequiredLevel "required"
    Xrm.Page.getAttribute("address1_postalcode").setRequiredLevel "required"
    Xrm.Page.getAttribute("address1_addresstypecode").setRequiredLevel "required"
    Xrm.Page.getAttribute("donotsendmm").setRequiredLevel "required"
    Xrm.Page.getAttribute("emailaddress1").setRequiredLevel "required"
    Xrm.Page.getAttribute("lastname").setRequiredLevel "required"
    Xrm.Page.getAttribute("firstname").setRequiredLevel "required"
    Xrm.Page.getAttribute("isp_nationalilty").setRequiredLevel "required"
    Xrm.Page.getAttribute("isp_title").setRequiredLevel "required"
    Xrm.Page.getAttribute("isp_country").setRequiredLevel "required"
    Xrm.Page.getAttribute("address1_addresstypecode").setRequiredLevel "required"
    Xrm.Page.getAttribute("telephone1").setRequiredLevel "required"
    if tmpString6? or tmpString7?
      Xrm.Page.SetFieldReqLevel "isp_idnumber", 0
      Xrm.Page.SetFieldReqLevel "isp_passportnumber", 0
  return
isp_idnumber_onchange = ->
  tmpString4 = Xrm.Page.getAttribute("isp_idnumber").getValue()
  tmpString5 = Xrm.Page.getAttribute("isp_passportnumber").getValue()
  if tmpString4? or tmpString5?
    Xrm.Page.SetFieldReqLevel "isp_idnumber", 0
    Xrm.Page.SetFieldReqLevel "isp_passportnumber", 0
  else
    Xrm.Page.SetFieldReqLevel "isp_idnumber", 2
    Xrm.Page.SetFieldReqLevel "isp_passportnumber", 2
  return
isp_passportnumber_onchange = ->
  tmpString4 = Xrm.Page.getAttribute("isp_idnumber").getValue()
  tmpString5 = Xrm.Page.getAttribute("isp_passportnumber").getValue()
  if tmpString4? or tmpString5?
    Xrm.Page.SetFieldReqLevel "isp_idnumber", 0
    Xrm.Page.SetFieldReqLevel "isp_passportnumber", 0
  else
    Xrm.Page.SetFieldReqLevel "isp_idnumber", 2
    Xrm.Page.SetFieldReqLevel "isp_passportnumber", 2
  return
isp_country_onchange = ->
  strCountry = Xrm.Page.getAttribute("isp_country").getValue()
  if strCountry is "100000203"
    Xrm.Page.getAttribute("isp_province").setRequiredLevel "required"
  else
    Xrm.Page.getAttribute("isp_province").setRequiredLevel "none"
  return
isp_id_onchange = ->
  idnum = Xrm.Page.getAttribute("isp_idnumber").getValue()
  if idnum.length >= 6 and not isNaN(idnum)
    dob = new Date(idnum.substring(0, 2), idnum.substring(2, 4) - 1, idnum.substring(4, 6))
    Xrm.Page.getAttribute("isp_dateofbirth").setValue dob  if dob.getYear() is idnum.substring(0, 2) and dob.getMonth() is idnum.substring(2, 4) - 1 and dob.getDate() is idnum.substring(4, 6)
  return
validateIDNumber = (idnum) ->
  
  # Validate Numeric & Lenth
  return false  if isNaN(idnum) or idnum.length isnt 13
  
  # Validate the date
  dob = new Date(idnum.substring(0, 2), idnum.substring(2, 4) - 1, idnum.substring(4, 6))
  return false  unless dob.getYear() is idnum.substring(0, 2) and dob.getMonth() is idnum.substring(2, 4) - 1 and dob.getDate() is idnum.substring(4, 6)
  
  # Validate Check Sum
  chkSum = 0
  i = 0

  while i < 13
    tmp = (parseInt(idnum.charAt(i)) * ((if (i + 1) % 2 is 0 then 2 else 1))).toString()
    j = 0

    while j < tmp.length
      chkSum += parseInt(tmp.charAt(j))
      j++
    i++
  (chkSum % 10) is 0