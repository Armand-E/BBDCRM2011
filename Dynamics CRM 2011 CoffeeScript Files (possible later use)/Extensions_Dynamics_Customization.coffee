IFRAME_DMS_Documents_onload = ->
Form_onload = ->
  exclude = [
    140
    79
    18
    145
    42
    71
    26
    5
    29
    8
    17
    88
    30
    106
    73
    60
    82
    107
    12
    2
    28
    70
    72
    85
    7
    75
    45
    22
    31
    90
    77
    50
    91
    44
    46
    92
    23
    109
    55
    1
    16
    129
    11
    94
    24
    6
    14
    74
    76
    104
    80
    3
    41
    84
    15
    8
    89
    37
    103
    78
    33
    40
  ]
  list = document.getElementById("isp_owner")
  options = list.getElementsByTagName("OPTION")
  e = 0

  while e < exclude.length
    i = 0

    while i < options.length
      if options[i].value is exclude[e]
        list.removeChild options[i]
        i--
      i++
    e++
  debugger
  Xrm.Page.ui.tabs.get("tab_4").setVisible false  if crmForm.all.isp_outstandingdocumentation.DataValue is "0"
  Xrm.Page.ui.tabs.get("tab_5").setVisible false  if crmForm.all.isp_bankerror.DataValue is "0"
  OpicsId = crmForm.all.isp_opicsref.DataValue
  if not OpicsId? or OpicsId is "" or OpicsId is " "
    document.all.IFRAME_DMS_Documents.src = "about:blank"
  else
    document.all.IFRAME_DMS_Documents.src = "http://jhbh-srv-dms01/CrmCounts/CorporateTelegrahicTransfers.aspx?OpicsDealNumber=" + OpicsId
  loadsubdept()
  loadnature()
  loadCustcategory()
  loadQuerycategory()
  
  #onLoad event of Customer Feedback form
  if crmForm.FormType is 1
    
    # Only make these changes when the form is opened in Create mode.
    TODAY = undefined
    TODAY = new Date()
    
    # Set Follow Up By Date to today + 1
    TODAY.setDate TODAY.getDate() + 1
    crmForm.all.followupby.DataValue = TODAY
    
    #Do some Field Hiding
    document.all.isp_staffid_d.style.visibility = "hidden"
    document.all.isp_staffid_c.style.visibility = "hidden"
    document.all.isp_requestedbyemail_d.style.visibility = "hidden"
    document.all.isp_requestedbyemail_c.style.visibility = "hidden"
    document.all.subjectid_d.style.visibility = "hidden"
    document.all.contractid_d.style.visibility = "hidden"
    document.all.contractdetailid_d.style.visibility = "hidden"
    document.all.isp_departmentval_d.style.visibility = "hidden"
    document.all.isp_departmentval_c.style.visibility = "hidden"
    document.all.isp_descriptionofproblem_d.style.visibility = ""
    document.all.isp_descriptionofproblem_c.style.visibility = ""
    
    #This section will make the description field not required, and also hide this field
    crmForm.all.title.setAttribute "req", 0
    crmForm.all.title_c.className = "n"
    crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
    
    #document.all.title_d.style.visibility = "hidden";
    # document.all.title_c.style.visibility = "hidden";
    crmForm.all.subjectid.setAttribute "req", 0
    crmForm.all.subjectid_c.className = "n"
    crmForm.all.subjectid_c.innerHTML = crmForm.all.subjectid_c.innerText
    document.all.subjectid_d.style.visibility = "hidden"
    document.all.subjectid_d.style.visibility = "hidden"
    document.all.ownerid_d.style.visibility = "hidden"
    document.all.ownerid_c.style.visibility = "hidden"
    document.all.isp_productcatagory_d.style.visibility = "hidden"
    document.all.isp_productcatagory_c.style.visibility = "hidden"
    document.all.isp_product_d.style.visibility = "hidden"
    document.all.isp_product_c.style.visibility = "hidden"
    document.all.isp_owneremail_d.style.visibility = "hidden"
    document.all.isp_owneremail_c.style.visibility = "hidden"
    document.all.isp_secowneremail_d.style.visibility = "hidden"
    document.all.isp_secowneremail_c.style.visibility = "hidden"
    document.all.isp_depmanemail_d.style.visibility = "hidden"
    document.all.isp_depmanemail_c.style.visibility = "hidden"
    document.all.isp_depmandirectphone_d.style.visibility = "hidden"
    document.all.isp_depmandirectphone_c.style.visibility = "hidden"
    document.all.isp_ownerdirectphone_d.style.visibility = "hidden"
    document.all.isp_ownerdirectphone_c.style.visibility = "hidden"
    document.all.isp_secownerdirectphone_d.style.visibility = "hidden"
    document.all.isp_secownerdirectphone_c.style.visibility = "hidden"
    document.all.isp_clientemail_d.style.visibility = "hidden"
    document.all.isp_clientemail_c.style.visibility = "hidden"
    document.all.isp_1stowner_d.style.visibility = "hidden"
    document.all.isp_1stowner_c.style.visibility = "hidden"
    document.all.isp_timesreassigned_d.style.visibility = "hidden"
    document.all.isp_timesreassigned_c.style.visibility = "hidden"
  if crmForm.FormType is 2
    oDepartmentValue = crmForm.all.isp_department
    if oDepartmentValue.DataValue?
      switch oDepartmentValue.SelectedText
        when "I.T Procurement"
          document.all.isp_staffid_d.style.visibility = ""
          document.all.isp_staffid_c.style.visibility = ""
          document.all.isp_requestedbyemail_d.style.visibility = ""
          document.all.isp_requestedbyemail_c.style.visibility = ""
          crmForm.all.isp_requestedbyemail.Disabled = 1
          document.all.isp_descriptionofproblem_d.style.visibility = ""
          document.all.isp_descriptionofproblem_c.style.visibility = ""
          
          #If the Department is I.T Procurement, the Customer field will become not required
          # crmForm.all.customerid.Disabled = 1;
          # crmForm.all.isp_queryby.setAttribute("req", 0);
          # crmForm.all.isp_queryby_c.className = "n";
          # crmForm.all.isp_queryby_c.innerHTML =
          #  crmForm.all.isp_queryby_c.innerText;
          document.all.isp_queryby_c.style.visibility = "hidden"
          document.all.isp_queryby_d.style.visibility = "hidden"
          
          #This section will make the Action Needed field not required and hidden
          crmForm.all.isp_queryby.setAttribute "req", 0
          crmForm.all.isp_queryby_c.className = "n"
          crmForm.all.isp_queryby_c.innerHTML = crmForm.all.isp_queryby_c.innerText
          document.all.isp_queryby_c.style.visibility = "hidden"
          document.all.isp_queryby_d.style.visibility = "hidden"
          document.all.isp_allowclosedemail_c.style.visibility = "hidden"
          document.all.isp_allowclosedemail_d.style.visibility = "hidden"
          document.all.isp_branchref_c.style.visibility = "hidden"
          document.all.isp_branchref_d.style.visibility = "hidden"
          document.all.isp_opicsref_c.style.visibility = "hidden"
          document.all.isp_opicsref_d.style.visibility = "hidden"
          document.all.isp_foreignbankref_c.style.visibility = "hidden"
          document.all.isp_foreignbankref_d.style.visibility = "hidden"
          document.all.isp_inwardfunds_c.style.visibility = "hidden"
          document.all.isp_inwardfunds_d.style.visibility = "hidden"
          document.all.isp_amount_c.style.visibility = "hidden"
          document.all.isp_amount_d.style.visibility = "hidden"
          document.all.isp_sender_c.style.visibility = "hidden"
          document.all.isp_sender_d.style.visibility = "hidden"
          
          #This section will make the Dont Send Resolved email field not required and hidden
          crmForm.all.isp_allowclosedemail.setAttribute "req", 0
          crmForm.all.isp_allowclosedemail_c.className = "n"
          crmForm.all.isp_allowclosedemail_c.innerHTML = crmForm.all.isp_allowclosedemail_c.innerText
          document.all.isp_allowclosedemail_c.style.visibility = "hidden"
          document.all.isp_allowclosedemail_d.style.visibility = "hidden"
          
          #This section will make the Nature of Problem field not required and hidden
          crmForm.all.isp_natureofproblem.setAttribute "req", 0
          crmForm.all.isp_natureofproblem_c.className = "n"
          crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
          document.all.isp_natureofproblem_c.style.visibility = "hidden"
          document.all.isp_natureofproblem_d.style.visibility = "hidden"
          
          #This section will bring up the Description of the Case to be filled in by the person logging the request
          crmForm.all.title.setAttribute "req", 0
          crmForm.all.title_c.className = "n"
          crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          crmForm.all.subjectid.setAttribute "req", 0
          crmForm.all.subjectid_c.className = "n"
          crmForm.all.subjectid_c.innerHTML = crmForm.all.subjectid_c.innerText
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.ownerid_d.style.visibility = "hidden"
          document.all.ownerid_c.style.visibility = "hidden"
          document.all.isp_productcatagory_d.style.visibility = "hidden"
          document.all.isp_productcatagory_c.style.visibility = "hidden"
          document.all.isp_product_d.style.visibility = "hidden"
          document.all.isp_product_c.style.visibility = "hidden"
          document.all.isp_owneremail_d.style.visibility = "hidden"
          document.all.isp_owneremail_c.style.visibility = "hidden"
          document.all.isp_secowneremail_d.style.visibility = "hidden"
          document.all.isp_secowneremail_c.style.visibility = "hidden"
          document.all.isp_depmanemail_d.style.visibility = "hidden"
          document.all.isp_depmanemail_c.style.visibility = "hidden"
          document.all.isp_depmandirectphone_d.style.visibility = "hidden"
          document.all.isp_depmandirectphone_c.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_clientemail_d.style.visibility = "hidden"
          document.all.isp_clientemail_c.style.visibility = "hidden"
          document.all.contractdetailid_d.style.visibility = "hidden"
          document.all.contractdetailid_c.style.visibility = "hidden"
          document.all.contractid_d.style.visibility = "hidden"
          document.all.contractid_c.style.visibility = "hidden"
          document.all.isp_1stowner_d.style.visibility = "hidden"
          document.all.isp_1stowner_c.style.visibility = "hidden"
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
          
          #This section will make the Query Category field not required and hidden
          crmForm.all.isp_querycategory.setAttribute "req", 0
          crmForm.all.isp_querycategory_c.className = "n"
          crmForm.all.isp_querycategory_c.innerHTML = crmForm.all.isp_querycategory_c.innerText
          document.all.isp_querycategory_c.style.visibility = "hidden"
          document.all.isp_querycategory_d.style.visibility = "hidden"
        when "Call Centre Department"
          document.all.isp_staffid_d.style.visibility = "hidden"
          document.all.isp_staffid_c.style.visibility = "hidden"
          document.all.isp_requestedbyemail_d.style.visibility = "hidden"
          document.all.isp_requestedbyemail_c.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.contractid_d.style.visibility = "hidden"
          document.all.contractdetailid_d.style.visibility = "hidden"
          document.all.isp_departmentval_d.style.visibility = "hidden"
          document.all.isp_departmentval_c.style.visibility = "hidden"
          
          #document.all.isp_descriptionofproblem_d.style.visibility = "hidden";
          #document.all.isp_descriptionofproblem_c.style.visibility = "hidden";
          #This section will make the description field not required, and also hide this field
          crmForm.all.title.setAttribute "req", 0
          crmForm.all.title_c.className = "n"
          crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          crmForm.all.subjectid.setAttribute "req", 0
          crmForm.all.subjectid_c.className = "n"
          crmForm.all.subjectid_c.innerHTML = crmForm.all.subjectid_c.innerText
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.ownerid_d.style.visibility = "hidden"
          document.all.ownerid_c.style.visibility = "hidden"
          document.all.isp_productcatagory_d.style.visibility = "hidden"
          document.all.isp_productcatagory_c.style.visibility = "hidden"
          document.all.isp_product_d.style.visibility = "hidden"
          document.all.isp_product_c.style.visibility = "hidden"
          document.all.isp_owneremail_d.style.visibility = "hidden"
          document.all.isp_owneremail_c.style.visibility = "hidden"
          document.all.isp_secowneremail_d.style.visibility = "hidden"
          document.all.isp_secowneremail_c.style.visibility = "hidden"
          document.all.isp_depmanemail_d.style.visibility = "hidden"
          document.all.isp_depmanemail_c.style.visibility = "hidden"
          document.all.isp_depmandirectphone_d.style.visibility = "hidden"
          document.all.isp_depmandirectphone_c.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_clientemail_d.style.visibility = "hidden"
          document.all.isp_clientemail_c.style.visibility = "hidden"
          document.all.isp_queryby_d.style.visibility = "hidden"
          document.all.isp_queryby_c.style.visibility = "hidden"
          document.all.isp_branch_d.style.visibility = "hidden"
          document.all.isp_branch_c.style.visibility = "hidden"
          document.all.isp_branchref_d.style.visibility = "hidden"
          document.all.isp_branchref_c.style.visibility = "hidden"
          document.all.isp_natureofproblem_d.style.visibility = "hidden"
          document.all.isp_natureofproblem_c.style.visibility = "hidden"
          document.all.isp_allowclosedemail_d.style.visibility = "hidden"
          document.all.isp_allowclosedemail_c.style.visibility = "hidden"
          document.all.isp_opicsref_d.style.visibility = "hidden"
          document.all.isp_opicsref_c.style.visibility = "hidden"
          document.all.isp_inwardfunds_d.style.visibility = "hidden"
          document.all.isp_inwardfunds_c.style.visibility = "hidden"
          document.all.isp_foreignbankref_d.style.visibility = "hidden"
          document.all.isp_foreignbankref_c.style.visibility = "hidden"
          document.all.isp_amount_d.style.visibility = "hidden"
          document.all.isp_amount_c.style.visibility = "hidden"
          document.all.isp_sender_d.style.visibility = "hidden"
          document.all.isp_sender_c.style.visibility = "hidden"
          document.all.casetypecode_d.style.visibility = "hidden"
          document.all.casetypecode_c.style.visibility = "hidden"
          crmForm.all.isp_queryby.setAttribute "req", 0
          crmForm.all.isp_queryby_c.className = "n"
          crmForm.all.isp_queryby_c.innerHTML = crmForm.all.isp_queryby_c.innerText
          crmForm.all.isp_natureofproblem.setAttribute "req", 0
          crmForm.all.isp_natureofproblem_c.className = "n"
          crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
          crmForm.all.isp_sendemailwithrefno.Disabled = 1
          crmForm.all.isp_sendemailwithrefno.ForceSubmit = true
          document.all.isp_1stowner_d.style.visibility = "hidden"
          document.all.isp_1stowner_c.style.visibility = "hidden"
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
        when "Fleet and Finance"
          document.all.isp_staffid_d.style.visibility = ""
          document.all.isp_staffid_c.style.visibility = ""
          document.all.isp_requestedbyemail_d.style.visibility = ""
          document.all.isp_requestedbyemail_c.style.visibility = ""
          crmForm.all.isp_requestedbyemail.Disabled = 1
          document.all.isp_descriptionofproblem_d.style.visibility = ""
          document.all.isp_descriptionofproblem_c.style.visibility = ""
          
          #If the Department is I.T Procurement, the Customer field will become not required
          # crmForm.all.customerid.Disabled = 1;
          # crmForm.all.isp_queryby.setAttribute("req", 0);
          # crmForm.all.isp_queryby_c.className = "n";
          # crmForm.all.isp_queryby_c.innerHTML =
          #  crmForm.all.isp_queryby_c.innerText;
          document.all.isp_queryby_c.style.visibility = "hidden"
          document.all.isp_queryby_d.style.visibility = "hidden"
          
          #This section will make the Action Needed field not required and hidden
          crmForm.all.isp_queryby.setAttribute "req", 0
          crmForm.all.isp_queryby_c.className = "n"
          crmForm.all.isp_queryby_c.innerHTML = crmForm.all.isp_queryby_c.innerText
          document.all.isp_queryby_c.style.visibility = "hidden"
          document.all.isp_queryby_d.style.visibility = "hidden"
          document.all.isp_allowclosedemail_c.style.visibility = "hidden"
          document.all.isp_allowclosedemail_d.style.visibility = "hidden"
          document.all.isp_branchref_c.style.visibility = "hidden"
          document.all.isp_branchref_d.style.visibility = "hidden"
          document.all.isp_opicsref_c.style.visibility = "hidden"
          document.all.isp_opicsref_d.style.visibility = "hidden"
          document.all.isp_foreignbankref_c.style.visibility = "hidden"
          document.all.isp_foreignbankref_d.style.visibility = "hidden"
          document.all.isp_inwardfunds_c.style.visibility = "hidden"
          document.all.isp_inwardfunds_d.style.visibility = "hidden"
          document.all.isp_amount_c.style.visibility = "hidden"
          document.all.isp_amount_d.style.visibility = "hidden"
          document.all.isp_sender_c.style.visibility = "hidden"
          document.all.isp_sender_d.style.visibility = "hidden"
          
          #This section will make the Dont Send Resolved email field not required and hidden
          crmForm.all.isp_allowclosedemail.setAttribute "req", 0
          crmForm.all.isp_allowclosedemail_c.className = "n"
          crmForm.all.isp_allowclosedemail_c.innerHTML = crmForm.all.isp_allowclosedemail_c.innerText
          document.all.isp_allowclosedemail_c.style.visibility = "hidden"
          document.all.isp_allowclosedemail_d.style.visibility = "hidden"
          
          #This section will make the Nature of Problem field not required and hidden
          crmForm.all.isp_natureofproblem.setAttribute "req", 0
          crmForm.all.isp_natureofproblem_c.className = "n"
          crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
          document.all.isp_natureofproblem_c.style.visibility = ""
          document.all.isp_natureofproblem_d.style.visibility = ""
          
          #This section will bring up the Description of the Case to be filled in by the person logging the request
          crmForm.all.title.setAttribute "req", 0
          crmForm.all.title_c.className = "n"
          crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          crmForm.all.subjectid.setAttribute "req", 0
          crmForm.all.subjectid_c.className = "n"
          crmForm.all.subjectid_c.innerHTML = crmForm.all.subjectid_c.innerText
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.ownerid_d.style.visibility = "hidden"
          document.all.ownerid_c.style.visibility = "hidden"
          document.all.isp_productcatagory_d.style.visibility = "hidden"
          document.all.isp_productcatagory_c.style.visibility = "hidden"
          document.all.isp_product_d.style.visibility = "hidden"
          document.all.isp_product_c.style.visibility = "hidden"
          document.all.isp_owneremail_d.style.visibility = "hidden"
          document.all.isp_owneremail_c.style.visibility = "hidden"
          document.all.isp_secowneremail_d.style.visibility = "hidden"
          document.all.isp_secowneremail_c.style.visibility = "hidden"
          document.all.isp_depmanemail_d.style.visibility = "hidden"
          document.all.isp_depmanemail_c.style.visibility = "hidden"
          document.all.isp_depmandirectphone_d.style.visibility = "hidden"
          document.all.isp_depmandirectphone_c.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_clientemail_d.style.visibility = "hidden"
          document.all.isp_clientemail_c.style.visibility = "hidden"
          document.all.contractdetailid_d.style.visibility = "hidden"
          document.all.contractdetailid_c.style.visibility = "hidden"
          document.all.contractid_d.style.visibility = "hidden"
          document.all.contractid_c.style.visibility = "hidden"
          document.all.isp_1stowner_d.style.visibility = "hidden"
          document.all.isp_1stowner_c.style.visibility = "hidden"
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
        when "HR Department"
          document.all.isp_staffid_d.style.visibility = ""
          document.all.isp_staffid_c.style.visibility = ""
          crmForm.all.casetypecode.DataValue = 200001
          crmForm.all.caseorigincode.DataValue = 2
          
          #document.all.isp_requestedbyemail_d.style.visibility = "";
          #document.all.isp_requestedbyemail_c.style.visibility = "";
          #crmForm.all.isp_requestedbyemail.Disabled = 1;
          document.all.isp_descriptionofproblem_d.style.visibility = ""
          document.all.isp_descriptionofproblem_c.style.visibility = ""
          
          #If the Department is I.T Procurement, the Customer field will become not required
          crmForm.all.customerid.Disabled = 1
          crmForm.all.customerid.setAttribute "req", 0
          crmForm.all.customerid_c.className = "n"
          crmForm.all.customerid_c.innerHTML = crmForm.all.customerid_c.innerText
          document.all.customerid_c.style.visibility = "hidden"
          document.all.customerid_d.style.visibility = "hidden"
          
          #This section will make the Action Needed field not required and hidden
          crmForm.all.isp_queryby.setAttribute "req", 0
          crmForm.all.isp_queryby_c.className = "n"
          crmForm.all.isp_queryby_c.innerHTML = crmForm.all.isp_queryby_c.innerText
          document.all.isp_queryby_c.style.visibility = "hidden"
          document.all.isp_queryby_d.style.visibility = "hidden"
          document.all.isp_allowclosedemail_c.style.visibility = "hidden"
          document.all.isp_allowclosedemail_d.style.visibility = "hidden"
          document.all.isp_branchref_c.style.visibility = "hidden"
          document.all.isp_branchref_d.style.visibility = "hidden"
          document.all.isp_opicsref_c.style.visibility = "hidden"
          document.all.isp_opicsref_d.style.visibility = "hidden"
          document.all.isp_foreignbankref_c.style.visibility = "hidden"
          document.all.isp_foreignbankref_d.style.visibility = "hidden"
          document.all.isp_inwardfunds_c.style.visibility = "hidden"
          document.all.isp_inwardfunds_d.style.visibility = "hidden"
          document.all.isp_amount_c.style.visibility = "hidden"
          document.all.isp_amount_d.style.visibility = "hidden"
          document.all.isp_sender_c.style.visibility = "hidden"
          document.all.isp_sender_d.style.visibility = "hidden"
          
          #This section will make the Dont Send Resolved email field not required and hidden
          #crmForm.all.isp_allowclosedemail.setAttribute("req", 0);
          #crmForm.all.isp_allowclosedemail_c.className = "n";
          #crmForm.all.isp_allowclosedemail_c.innerHTML =
          #crmForm.all.isp_allowclosedemail_c.innerText;
          #document.all.isp_allowclosedemail_c.style.visibility = "hidden";
          #document.all.isp_allowclosedemail_d.style.visibility = "hidden";
          #This section will make the Nature of Problem field not required and hidden
          crmForm.all.isp_natureofproblem.setAttribute "req", 0
          crmForm.all.isp_natureofproblem_c.className = "n"
          crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
          document.all.isp_natureofproblem_c.style.visibility = "hidden"
          document.all.isp_natureofproblem_d.style.visibility = "hidden"
          
          #This section will bring up the Description of the Case to be filled in by the person logging the request
          crmForm.all.title.setAttribute "req", 0
          crmForm.all.title_c.className = "n"
          crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          document.all.isp_productcatagory_d.style.visibility = "hidden"
          document.all.isp_productcatagory_c.style.visibility = "hidden"
          document.all.isp_product_d.style.visibility = "hidden"
          document.all.isp_product_c.style.visibility = "hidden"
          document.all.isp_clientemail_d.style.visibility = "hidden"
          document.all.isp_clientemail_c.style.visibility = "hidden"
          document.all.isp_requestedbyemail_d.style.visibility = "hidden"
          document.all.isp_requestedbyemail_c.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_depmanemail_d.style.visibility = "hidden"
          document.all.isp_depmanemail_c.style.visibility = "hidden"
          document.all.isp_secowneremail_d.style.visibility = "hidden"
          document.all.isp_secowneremail_c.style.visibility = "hidden"
          document.all.isp_owneremail_d.style.visibility = "hidden"
          document.all.isp_owneremail_c.style.visibility = "hidden"
          document.all.isp_depmandirectphone_d.style.visibility = "hidden"
          document.all.isp_depmandirectphone_c.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_owneremail_d.style.visibility = "hidden"
          document.all.isp_owneremail_c.style.visibility = "hidden"
          document.all.contractdetailid_d.style.visibility = "hidden"
          document.all.contractdetailid_c.style.visibility = "hidden"
          document.all.contractid_d.style.visibility = "hidden"
          document.all.contractid_c.style.visibility = "hidden"
          document.all.ownerid_d.style.visibility = "hidden"
          document.all.ownerid_c.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.subjectid_c.style.visibility = "hidden"
          document.all.isp_1stowner_d.style.visibility = "hidden"
          document.all.isp_1stowner_c.style.visibility = "hidden"
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
        
        #alert("Since this is an I.T. Procurement request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
        #var label = crmForm.all.isp_staffid_c;
        #label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>";
        when "Back Office Department"
          document.all.isp_staffid_d.style.visibility = "hidden"
          document.all.isp_staffid_c.style.visibility = "hidden"
          document.all.isp_requestedbyemail_d.style.visibility = "hidden"
          document.all.isp_requestedbyemail_c.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.contractid_d.style.visibility = "hidden"
          document.all.contractdetailid_d.style.visibility = "hidden"
          document.all.isp_departmentval_d.style.visibility = "hidden"
          document.all.isp_departmentval_c.style.visibility = "hidden"
          document.all.isp_descriptionofproblem_d.style.visibility = ""
          document.all.isp_descriptionofproblem_c.style.visibility = ""
          
          #This section will make the description field not required, and also hide this field
          crmForm.all.title.setAttribute "req", 0
          crmForm.all.title_c.className = "n"
          crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          crmForm.all.subjectid.setAttribute "req", 0
          crmForm.all.subjectid_c.className = "n"
          crmForm.all.subjectid_c.innerHTML = crmForm.all.subjectid_c.innerText
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.ownerid_d.style.visibility = "hidden"
          document.all.ownerid_c.style.visibility = "hidden"
          document.all.isp_productcatagory_d.style.visibility = "hidden"
          document.all.isp_productcatagory_c.style.visibility = "hidden"
          document.all.isp_product_d.style.visibility = "hidden"
          document.all.isp_product_c.style.visibility = "hidden"
          document.all.isp_owneremail_d.style.visibility = "hidden"
          document.all.isp_owneremail_c.style.visibility = "hidden"
          document.all.isp_secowneremail_d.style.visibility = "hidden"
          document.all.isp_secowneremail_c.style.visibility = "hidden"
          document.all.isp_depmanemail_d.style.visibility = "hidden"
          document.all.isp_depmanemail_c.style.visibility = "hidden"
          document.all.isp_depmandirectphone_d.style.visibility = "hidden"
          document.all.isp_depmandirectphone_c.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_clientemail_d.style.visibility = "hidden"
          document.all.isp_clientemail_c.style.visibility = "hidden"
          
          #document.all.isp_1stowner_d.style.visibility = "hidden";
          #document.all.isp_1stowner_c.style.visibility = "hidden";
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
          document.all.isp_category_d.style.visibility = "hidden"
          document.all.isp_category_c.style.visibility = "hidden"
          
          #This section will make the Query Category field not required and hidden
          crmForm.all.isp_querycategory.setAttribute "req", 0
          crmForm.all.isp_querycategory_c.className = "n"
          crmForm.all.isp_querycategory_c.innerHTML = crmForm.all.isp_querycategory_c.innerText
        
        #        document.all.isp_querycategory_c.style.visibility = "hidden";
        #       document.all.isp_querycategory_d.style.visibility = "hidden";
        when "Rand Department"
          document.all.isp_staffid_d.style.visibility = "hidden"
          document.all.isp_staffid_c.style.visibility = "hidden"
          document.all.isp_requestedbyemail_d.style.visibility = "hidden"
          document.all.isp_requestedbyemail_c.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.contractid_d.style.visibility = "hidden"
          document.all.contractdetailid_d.style.visibility = "hidden"
          document.all.isp_departmentval_d.style.visibility = "hidden"
          document.all.isp_departmentval_c.style.visibility = "hidden"
          document.all.isp_descriptionofproblem_d.style.visibility = ""
          document.all.isp_descriptionofproblem_c.style.visibility = ""
          
          #This section will make the description field not required, and also hide this field
          crmForm.all.title.setAttribute "req", 0
          crmForm.all.title_c.className = "n"
          crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          crmForm.all.subjectid.setAttribute "req", 0
          crmForm.all.subjectid_c.className = "n"
          crmForm.all.subjectid_c.innerHTML = crmForm.all.subjectid_c.innerText
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.ownerid_d.style.visibility = "hidden"
          document.all.ownerid_c.style.visibility = "hidden"
          document.all.isp_productcatagory_d.style.visibility = "hidden"
          document.all.isp_productcatagory_c.style.visibility = "hidden"
          document.all.isp_product_d.style.visibility = "hidden"
          document.all.isp_product_c.style.visibility = "hidden"
          document.all.isp_owneremail_d.style.visibility = "hidden"
          document.all.isp_owneremail_c.style.visibility = "hidden"
          document.all.isp_secowneremail_d.style.visibility = "hidden"
          document.all.isp_secowneremail_c.style.visibility = "hidden"
          document.all.isp_depmanemail_d.style.visibility = "hidden"
          document.all.isp_depmanemail_c.style.visibility = "hidden"
          document.all.isp_depmandirectphone_d.style.visibility = "hidden"
          document.all.isp_depmandirectphone_c.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_clientemail_d.style.visibility = "hidden"
          document.all.isp_clientemail_c.style.visibility = "hidden"
          
          #document.all.isp_1stowner_d.style.visibility = "hidden";
          #document.all.isp_1stowner_c.style.visibility = "hidden";
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
          document.all.isp_category_d.style.visibility = "hidden"
          document.all.isp_category_c.style.visibility = "hidden"
          
          #This section will make the Nature of Problem field not required and hidden
          crmForm.all.isp_natureofproblem.setAttribute "req", 0
          crmForm.all.isp_natureofproblem_c.className = "n"
          crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
          document.all.isp_natureofproblem_c.style.visibility = "hidden"
          document.all.isp_natureofproblem_d.style.visibility = "hidden"
        when "Rand Department"
          document.all.isp_staffid_d.style.visibility = "hidden"
          document.all.isp_staffid_c.style.visibility = "hidden"
          document.all.isp_requestedbyemail_d.style.visibility = "hidden"
          document.all.isp_requestedbyemail_c.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.contractid_d.style.visibility = "hidden"
          document.all.contractdetailid_d.style.visibility = "hidden"
          document.all.isp_departmentval_d.style.visibility = "hidden"
          document.all.isp_departmentval_c.style.visibility = "hidden"
          document.all.isp_descriptionofproblem_d.style.visibility = "hidden"
          document.all.isp_descriptionofproblem_c.style.visibility = "hidden"
          
          #This section will make the description field not required, and also hide this field
          crmForm.all.title.setAttribute "req", 0
          crmForm.all.title_c.className = "n"
          crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          crmForm.all.subjectid.setAttribute "req", 0
          crmForm.all.subjectid_c.className = "n"
          crmForm.all.subjectid_c.innerHTML = crmForm.all.subjectid_c.innerText
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.ownerid_d.style.visibility = "hidden"
          document.all.ownerid_c.style.visibility = "hidden"
          document.all.isp_productcatagory_d.style.visibility = "hidden"
          document.all.isp_productcatagory_c.style.visibility = "hidden"
          document.all.isp_product_d.style.visibility = "hidden"
          document.all.isp_product_c.style.visibility = "hidden"
          document.all.isp_owneremail_d.style.visibility = "hidden"
          document.all.isp_owneremail_c.style.visibility = "hidden"
          document.all.isp_secowneremail_d.style.visibility = "hidden"
          document.all.isp_secowneremail_c.style.visibility = "hidden"
          document.all.isp_depmanemail_d.style.visibility = "hidden"
          document.all.isp_depmanemail_c.style.visibility = "hidden"
          document.all.isp_depmandirectphone_d.style.visibility = "hidden"
          document.all.isp_depmandirectphone_c.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_clientemail_d.style.visibility = "hidden"
          document.all.isp_clientemail_c.style.visibility = "hidden"
          document.all.isp_1stowner_d.style.visibility = "hidden"
          document.all.isp_1stowner_c.style.visibility = "hidden"
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
          
          #This section will make the Nature of Problem field not required and hidden
          crmForm.all.isp_natureofproblem.setAttribute "req", 0
          crmForm.all.isp_natureofproblem_c.className = "n"
          crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
          document.all.isp_natureofproblem_c.style.visibility = "hidden"
          document.all.isp_natureofproblem_d.style.visibility = "hidden"
        when "Private Banking Dept"
          document.all.isp_staffid_d.style.visibility = "hidden"
          document.all.isp_staffid_c.style.visibility = "hidden"
          document.all.isp_requestedbyemail_d.style.visibility = "hidden"
          document.all.isp_requestedbyemail_c.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.contractid_d.style.visibility = "hidden"
          document.all.contractdetailid_d.style.visibility = "hidden"
          document.all.isp_departmentval_d.style.visibility = "hidden"
          document.all.isp_departmentval_c.style.visibility = "hidden"
          document.all.isp_descriptionofproblem_d.style.visibility = ""
          document.all.isp_descriptionofproblem_c.style.visibility = ""
          
          #This section will make the description field not required, and also hide this field
          crmForm.all.title.setAttribute "req", 0
          crmForm.all.title_c.className = "n"
          crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          crmForm.all.subjectid.setAttribute "req", 0
          crmForm.all.subjectid_c.className = "n"
          crmForm.all.subjectid_c.innerHTML = crmForm.all.subjectid_c.innerText
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.ownerid_d.style.visibility = "hidden"
          document.all.ownerid_c.style.visibility = "hidden"
          document.all.isp_productcatagory_d.style.visibility = "hidden"
          document.all.isp_productcatagory_c.style.visibility = "hidden"
          document.all.isp_product_d.style.visibility = "hidden"
          document.all.isp_product_c.style.visibility = "hidden"
          document.all.isp_owneremail_d.style.visibility = "hidden"
          document.all.isp_owneremail_c.style.visibility = "hidden"
          document.all.isp_secowneremail_d.style.visibility = "hidden"
          document.all.isp_secowneremail_c.style.visibility = "hidden"
          document.all.isp_depmanemail_d.style.visibility = "hidden"
          document.all.isp_depmanemail_c.style.visibility = "hidden"
          document.all.isp_depmandirectphone_d.style.visibility = "hidden"
          document.all.isp_depmandirectphone_c.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_clientemail_d.style.visibility = "hidden"
          document.all.isp_clientemail_c.style.visibility = "hidden"
          
          #document.all.isp_1stowner_d.style.visibility = "hidden";
          #document.all.isp_1stowner_c.style.visibility = "hidden";
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
          document.all.isp_category_d.style.visibility = "hidden"
          document.all.isp_category_c.style.visibility = "hidden"
        when "Finance Department"
          document.all.isp_staffid_d.style.visibility = "hidden"
          document.all.isp_staffid_c.style.visibility = "hidden"
          document.all.isp_requestedbyemail_d.style.visibility = "hidden"
          document.all.isp_requestedbyemail_c.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.contractid_d.style.visibility = "hidden"
          document.all.contractdetailid_d.style.visibility = "hidden"
          document.all.isp_departmentval_d.style.visibility = "hidden"
          document.all.isp_departmentval_c.style.visibility = "hidden"
          document.all.isp_descriptionofproblem_d.style.visibility = "hidden"
          document.all.isp_descriptionofproblem_c.style.visibility = "hidden"
          
          #This section will make the description field not required, and also hide this field
          crmForm.all.title.setAttribute "req", 0
          crmForm.all.title_c.className = "n"
          crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          crmForm.all.subjectid.setAttribute "req", 0
          crmForm.all.subjectid_c.className = "n"
          crmForm.all.subjectid_c.innerHTML = crmForm.all.subjectid_c.innerText
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.subjectid_d.style.visibility = "hidden"
          document.all.ownerid_d.style.visibility = "hidden"
          document.all.ownerid_c.style.visibility = "hidden"
          document.all.isp_productcatagory_d.style.visibility = "hidden"
          document.all.isp_productcatagory_c.style.visibility = "hidden"
          document.all.isp_product_d.style.visibility = "hidden"
          document.all.isp_product_c.style.visibility = "hidden"
          document.all.isp_owneremail_d.style.visibility = "hidden"
          document.all.isp_owneremail_c.style.visibility = "hidden"
          document.all.isp_secowneremail_d.style.visibility = "hidden"
          document.all.isp_secowneremail_c.style.visibility = "hidden"
          document.all.isp_depmanemail_d.style.visibility = "hidden"
          document.all.isp_depmanemail_c.style.visibility = "hidden"
          document.all.isp_depmandirectphone_d.style.visibility = "hidden"
          document.all.isp_depmandirectphone_c.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_ownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_d.style.visibility = "hidden"
          document.all.isp_secownerdirectphone_c.style.visibility = "hidden"
          document.all.isp_clientemail_d.style.visibility = "hidden"
          document.all.isp_clientemail_c.style.visibility = "hidden"
          document.all.isp_1stowner_d.style.visibility = "hidden"
          document.all.isp_1stowner_c.style.visibility = "hidden"
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
  strEscalationStatus = crmForm.all.isp_escalationstatus
  if strEscalationStatus.DataValue?
    switch strEscalationStatus.SelectedText
      when "Stage1"
        crmForm.all.isp_acceptedowner.Disabled = 1
      when "Stage2"
        crmForm.all.isp_acceptedsecowner.Disabled = 1
        crmForm.all.isp_acceptedowner.Disabled = 1
      when "Stage3"
        crmForm.all.isp_acceptedmanager.Disabled = 1
        crmForm.all.isp_acceptedsecowner.Disabled = 1
        crmForm.all.isp_acceptedowner.Disabled = 1
  if crmForm.FormType is 4
    strStatus = crmForm.all.statuscode
    dtResolvedDate = crmForm.all.isp_dateresolved
    if strStatus.DataValue?
      switch strStatus.SelectedText
        when "Problem Solved"
          if dtResolvedDate.DataValue?
            one_day = 1000 * 60 * 60
            StartDate = crmForm.all.createdon.DataValue
            EndDate = crmForm.all.isp_dateresolved.DataValue
            oAlert = Math.ceil((EndDate.getTime() - StartDate.getTime()) / (one_day))
            crmForm.all.isp_totaltime.DataValue = oAlert
            crmForm.all.isp_totaldays.DataValue = crmForm.all.isp_totaltime.DataValue / 24
            break
            unless dtResolvedDate.DataValue?
              alert "The Resolved Date for this Customer Feedback was never calculated, please click ok and continue"
              break
  return
Form_onsave = ->
  
  #onSave event of Customer Feedback form
  
  # Perform this work only on Create
  if crmForm.FormType is 1
    
    #This section will update the Owner Email Field when a value gets updated in this field. this event
    #is fired with the OnChange event of the isp_owner field in the Escalation Trail.
    oOwner = crmForm.all.isp_owner
    oOwnerEmail = crmForm.all.isp_owneremail
    oOwnerDirectPhone = crmForm.all.isp_ownerdirectphone
    oSecOwner = crmForm.all.isp_secondaryowner
    oSecOwnerEmail = crmForm.all.isp_secowneremail
    oSecOwnerDirectPhone = crmForm.all.isp_secownerdirectphone
    oDeptMan = crmForm.all.isp_departmentmanager
    oDeptManEmail = crmForm.all.isp_depmanemail
    oDepManDirectPhone = crmForm.all.isp_depmandirectphone
    strEscalationStatus = crmForm.all.isp_escalationstatus
    if strEscalationStatus.DataValue?
      switch strEscalationStatus.SelectedText
        when "Stage1"
          crmForm.all.isp_acceptedowner.Disabled = 1
          crmForm.all.isp_acceptedowner.ForceSubmit = true
        when "Stage2"
          crmForm.all.isp_acceptedsecowner.Disabled = 1
          crmForm.all.isp_acceptedowner.Disabled = 1
          crmForm.all.isp_acceptedsecowner.ForceSubmit = true
          crmForm.all.isp_acceptedowner.ForceSubmit = true
        when "Stage3"
          crmForm.all.isp_acceptedmanager.Disabled = 1
          crmForm.all.isp_acceptedsecowner.Disabled = 1
          crmForm.all.isp_acceptedowner.Disabled = 1
          crmForm.all.isp_acceptedmanager.ForceSubmit = true
          crmForm.all.isp_acceptedsecowner.ForceSubmit = true
          crmForm.all.isp_acceptedowner.ForceSubmit = true
    if oOwner.DataValue?
      switch oOwner.SelectedText
        when "Debbie Perry"
          oOwnerEmail.DataValue = "morne.vandermerwe@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "031-307 2625"
        when "Shamilla August"
          oOwnerEmail.DataValue = "Shamilla.August@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3034"
        when "Juliet Mabote "
          oOwnerEmail.DataValue = "Juliet.Mabote@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3079"
        when "Maria Ramashia"
          oOwnerEmail.DataValue = "Maria.Ramashia@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3252"
        when "Marise Petersen"
          oOwnerEmail.DataValue = "Marise.Petersen@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3055"
        when "Eleanor Pillay"
          oOwnerEmail.DataValue = "Eleanor.Pillay@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Meeshana Mangru"
          oOwnerEmail.DataValue = "Meeshana.Mangru@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Thabiso Siswana"
          oOwnerEmail.DataValue = "Thabiso.Siswana@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Tebogo Tau"
          oOwnerEmail.DataValue = "Tebogo.Tau@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Princess Seripa"
          oOwnerEmail.DataValue = "Princess.Seripa@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Precious Seobi"
          oOwnerEmail.DataValue = "Precious.Seobi@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Jabulile Shongwe"
          oOwnerEmail.DataValue = "Jabulile.Shongwe@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Mathilene Henn"
          oOwnerEmail.DataValue = "Mathilene.Henn@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Lungu Mchunu"
          oOwnerEmail.DataValue = "Lungu.Mchunu@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Khensani Matjebe"
          oOwnerEmail.DataValue = "Khensani.Matjebe@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Werner Goosen"
          oOwnerEmail.DataValue = "Werner.Goosen@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3031"
        when "Wendy Armstrong"
          oOwnerEmail.DataValue = "Wendy.Armstrong@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3185"
        when "Sherazaan Mia"
          oOwnerEmail.DataValue = "Sherazaan.Mia@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3081"
        when "Jacqui Gibb"
          oOwnerEmail.DataValue = "Jacqui.Gibb@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3320"
        when "Cameron May"
          oOwnerEmail.DataValue = "Cameron.May@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3571"
        when "Thashnee Pillay"
          oOwnerEmail.DataValue = "Thashnee.Pillay@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3601"
        when "Nadine Moodley"
          oOwnerEmail.DataValue = "Nadine.Moodley@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3000"
        when "Talent Kubheka"
          oOwnerEmail.DataValue = "Talent.Kubheka@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3249"
        when "Amy Pillay"
          oOwnerEmail.DataValue = "Amy.Pillay@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3221"
        when "Christiaan Oldewage"
          oOwnerEmail.DataValue = "Christiaan.Oldewage@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3206"
        when "Roy Minton"
          oOwnerEmail.DataValue = "Roy.Minton@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3228"
        when "Bileen Jackson"
          oOwnerEmail.DataValue = "Bileen.Jackson@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3435"
        when "Melanie Browne"
          oOwnerEmail.DataValue = "Melanie.Browne@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3623"
        when "Iris Busby"
          oOwnerEmail.DataValue = "iris.Busby@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011-407 3081"
        when "Charmaine Singh"
          oOwnerEmail.DataValue = "Charmaine.Singh@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011-407 3435"
        when "Ziad Moolla"
          oOwnerEmail.DataValue = "Ziad.Moolla@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011-407 3083"
        when "Innocentia Rampa"
          oOwnerEmail.DataValue = "innocentia.rampa@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011-407 3333"
        when "Tyler Ormandy"
          oOwnerEmail.DataValue = "Tyler.Ormandy@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011-407 3335"
        when "Shoneez Ben"
          oOwnerEmail.DataValue = "Shoneez.Ben@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011-407 3311"
        when "Gareth Robinson"
          oOwnerEmail.DataValue = "Gareth.Robinson@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3214"
        when "Motshidisi Shibambo"
          oOwnerEmail.DataValue = "Motshidisi.Shibambo@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3571"
        when "Ayanda Makhado"
          oOwnerEmail.DataValue = "ayanda.makhado@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 7309"
        when "Micael Van Heerden"
          oOwnerEmail.DataValue = "Micael.VanHeerden@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3563"
        when "Bileen Jackson"
          oOwnerEmail.DataValue = "bileen.jackson@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3435"
        when "Moleti Moime"
          oOwnerEmail.DataValue = "Moleti.Moime@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3573"
        when "Fritz Klee"
          oOwnerEmail.DataValue = "Fritz.Klee@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3573"
        when "Naomi Van Schalkwyk"
          oSecOwnerEmail.DataValue = "naomi.vanschalkwyk@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011-407 3044"
        when "Jacqueline Durgapersad"
          oOwnerEmail.DataValue = "Jacqueline.Durgapersad@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "021 940 2152"
        when "Craig Petersen"
          oOwnerEmail.DataValue = "Craig.Petersen@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "021 940 2152"
        when "Racqual Faro"
          oOwnerEmail.DataValue = "Racqual.Faro@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "022 703 3537"
        when "Karen Pillay"
          oOwnerEmail.DataValue = "Karen.Pillay@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3602"
        when "Lucinda van Heerden"
          oOwnerEmail.DataValue = "Lucinda.vanHeerden@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3606"
        when "Xoliswa Mashaba"
          oOwnerEmail.DataValue = "Xoliswa.Mashaba@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3607"
        when "Riva Naicker"
          oOwnerEmail.DataValue = "Riva.Naicker@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "031 361 5887"
        when "Loshni Naidoo"
          oOwnerEmail.DataValue = "Loshni.Naidoo@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "035 906 7725"
        when "Desire Kruger"
          oOwnerEmail.DataValue = "Desire.Kruger@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "035 906 7725"
        when "Kevan Pillay"
          oOwnerEmail.DataValue = "Kevan.Pillay@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "035 906 7725"
        when "Sharendra Chedie"
          oOwnerEmail.DataValue = "Sharendra.Chedie@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "036 271 2120"
        when "Joanne van der Merwe"
          oOwnerEmail.DataValue = "Joanne.vanderMerwe@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "041 507 2622"
        when "Tracy Uys"
          oOwnerEmail.DataValue = "Tracy.Uys@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "053 841 0846"
        when "Vee Van der Merwe"
          oOwnerEmail.DataValue = "Vee.VanderMerwe@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "021 431 7705"
        when "Marie van Der Berg"
          oOwnerEmail.DataValue = "Marie.vanDerBerg@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "051 408 2014"
        when "meggan fensham"
          oOwnerEmail.DataValue = "meggan.fensham@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3143"
        when "Frances Kruger"
          oOwnerEmail.DataValue = "Frances.Kruger@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "031 361 5887"
        when "Lee-Ann Ripley-Evans"
          oOwnerEmail.DataValue = "Lee-Ann.Ripley-Evans@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "031 361 5887"
        when "Peter Manyako"
          oOwnerEmail.DataValue = "Peter.Manyako@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3214"
        when "Xanthi Johaar"
          oOwnerEmail.DataValue = "Peter.Manyako@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3214"
    if oSecOwner.DataValue?
      switch oSecOwner.SelectedText
        when "Colleen Prinsloo"
          oSecOwnerEmail.DataValue = "colleen.prinsloo@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011-407 3111"
        when "Leonardo Hefer"
          oSecOwnerEmail.DataValue = "Leonardo.Hefer@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011-407 3115"
        when "Ashleigh Khoury"
          oSecOwnerEmail.DataValue = "Ashleigh.Khoury@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011-407 3290"
        when "Deborah Medlicott"
          oSecOwnerEmail.DataValue = "deborah.medlicott@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011-407 3009"
        when "Sheena Parsons"
          oSecOwnerEmail.DataValue = "Sheena.Parsons@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "0860 11 1177"
        when "Reena Ganda"
          oSecOwnerEmail.DataValue = "reena.ganda@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011-407 3046"
        when "Naomi Van Schalkwyk"
          oSecOwnerEmail.DataValue = "naomi.vanschalkwyk@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011-407 3044"
        when "Marise Petersen"
          oSecOwnerEmail.DataValue = "Marise.Petersen@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011 407 3055"
        when "Sherilee Phillips"
          oSecOwnerEmail.DataValue = "Sherilee.Phillips@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011 407 3106"
        when "Kim de Meillon"
          oSecOwnerEmail.DataValue = "morne.vandermerwe@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011 407 3016"
        when "Shamilla August"
          oSecOwnerEmail.DataValue = "Shamilla.August@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011 407 3034"
        when "Firdoze Mahomed"
          oSecOwnerEmail.DataValue = "Firdoze.Mahomed@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011 407 3102"
        when "Jacqui Gibb"
          oSecOwnerEmail.DataValue = "Jacqui.Gibb@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011 407 3320"
        when "Juliet Mabote "
          oOwnerEmail.DataValue = "Juliet.Mabote@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3079"
        when "Maria Ramashia"
          oOwnerEmail.DataValue = "Maria.Ramashia@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3252"
        when "Jaco De Beer "
          oOwnerEmail.DataValue = "Jaco.Debeer@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3131"
        when "Tina Heine"
          oSecOwnerEmail.DataValue = "Tina.Heine@bidvestcapital.co.za"
          oSecOwnerDirectPhone.DataValue = "011 407 3617"
        when "Peter Llewellyn"
          oSecOwnerEmail.DataValue = "Peter.Llewellyn@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "021 940 2152"
        when "Mark Mortimer"
          oSecOwnerEmail.DataValue = "Mark.Mortimer@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011 407 3618"
        when "Dries Fourie"
          oSecOwnerEmail.DataValue = "Dries.Fourie@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "031 361 5887"
        when "Gavin Beckmann"
          oSecOwnerEmail.DataValue = "Gavin.Beckmann@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "051 408 3016"
        when "Susan Kaunda"
          oSecOwnerEmail.DataValue = "Susan.Kaunda@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011 407 3058"
        when "Thashnee Pillay"
          oSecOwnerEmail.DataValue = "Thashnee.Pillay@bidvestbank.co.za"
          oSecOwnerDirectPhone.DataValue = "011 407 3601"
        when "Charmaine Singh"
          oOwnerEmail.DataValue = "Charmaine.Singh@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011-407 3435"
        when "Ziad Moolla"
          oOwnerEmail.DataValue = "Ziad.Moolla@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011-407 3083"
    if oDeptMan.DataValue?
      switch oDeptMan.SelectedText
        when "Leonardo Hefer"
          oDeptManEmail.DataValue = "leonardo.hefer@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011-407 3115"
        when "Jill Murtagh"
          oDeptManEmail.DataValue = "Jill.Murtagh@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011-407 3346"
        when "Melanie Browne"
          oDeptManEmail.DataValue = "Melanie.Browne@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011-407 3623"
        when "Tracey Lindeque"
          oDeptManEmail.DataValue = "tracey.lindeque@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011-407 3281"
        when "Debra Eskelsen"
          oDeptManEmail.DataValue = "debra.eskelsen@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011-407 3251"
        when "Neil Capazorio"
          oDeptManEmail.DataValue = "Neil.Capazorio@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "0860 11 1177"
        when "Angela Tricerri"
          oDeptManEmail.DataValue = "Angie.Tricerri@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011 407 3341"
        when "Terry-Sue Van Rensburg"
          oDeptManEmail.DataValue = "Terry-Sue.VanRensburg@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011 407 3073"
        when "Duncan Nkosi"
          oDeptManEmail.DataValue = "morne.vandermerwe@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011 407 3258"
        when "Jacqui Gibb"
          oDeptManEmail.DataValue = "Jacqui.Gibb@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011 407 3320"
        when "Russell Fogg "
          oOwnerEmail.DataValue = "Russell.Fogg@bidvestbank.co.za"
          oOwnerDirectPhone.DataValue = "011 407 3260"
        when "Darren Pillay"
          oDeptManEmail.DataValue = "Darren.Pillay@bidvestcapital.co.za"
          oDepManDirectPhone.DataValue = "011 407 3650"
        when "Byron Corcoran"
          oDeptManEmail.DataValue = "Byron.Corcoran@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011 407 3649"
        when "Mark Mortimer"
          oDeptManEmail.DataValue = "Darren.Pillay@bidvestcapital.co.za"
          oDepManDirectPhone.DataValue = "011 407 3618"
        when "Mandy Lala"
          oDeptManEmail.DataValue = "Mandy.Lala@bidvestbank.co.za"
          oDepManDirectPhone.DataValue = "011 407 3311"
    oDepartment = crmForm.all.isp_department
    if oDepartment.DataValue?
      switch oDepartment.SelectedText
        when "I.T Procurement"
          
          #Create an array to set as the DataValue for the lookup control.
          lookupData = new Array()
          
          #Create an Object add to the array.
          lookupItem = new Object()
          
          #Set the id, typename, and name properties to the object.
          lookupItem.id = "{E4ED98C4-4DE8-DD11-BBDB-0018FE743ACC}"
          lookupItem.typename = "account"
          lookupItem.name = "IT Queries"
          
          # Add the object to the array.
          lookupData[0] = lookupItem
          
          # Set the value of the lookup field to the value of the array.
          crmForm.all.customerid.DataValue = lookupData
          crmForm.all.customerid.Disabled = 1
          strCustomerName = crmForm.all.customerid.DataValue[0].name
          crmForm.all.title.DataValue = strCustomerName + " " + crmForm.all.isp_department.SelectedText + " " + crmForm.all.isp_subdepartment.SelectedText
        when "HR Department"
          
          #Create an array to set as the DataValue for the lookup control.
          lookupData = new Array()
          
          #Create an Object add to the array.
          lookupItem = new Object()
          
          #Set the id, typename, and name properties to the object.
          lookupItem.id = "{ADCF5452-1C8B-DE11-BDDD-0018FE743ACC}"
          lookupItem.typename = "account"
          lookupItem.name = "HR Queries @ Bidvest Bank"
          
          # Add the object to the array.
          lookupData[0] = lookupItem
          
          # Set the value of the lookup field to the value of the array.
          crmForm.all.customerid.DataValue = lookupData
          crmForm.all.customerid.Disabled = 1
          strCustomerName = crmForm.all.customerid.DataValue[0].name
          crmForm.all.title.DataValue = strCustomerName + " " + crmForm.all.isp_department.SelectedText + " " + crmForm.all.isp_subdepartment.SelectedText
          
          #break;
          
          #Create an array to set as the DataValue for the lookup control.
          lookupData = new Array()
          
          #Create an Object add to the array.
          lookupItem = new Object()
          
          #Set the id, typename, and name properties to the object.
          lookupItem.id = "{D3BE3320-7494-DD11-8F30-0018FE743ACC}"
          lookupItem.typename = "subject"
          lookupItem.name = "Customer Feedback"
          
          # Add the object to the array.
          lookupData[0] = lookupItem
          
          # Set the value of the lookup field to the value of the array.
          crmForm.all.subjectid.DataValue = lookupData
          crmForm.all.subjectid.Disabled = 1
          strSubject = crmForm.all.subjectid.DataValue[0].name
    
    #crmForm.all.title.DataValue = strCustomerName + ' ' + crmForm.all.isp_department.SelectedText + ' ' + crmForm.all.isp_subdepartment.SelectedText;
    if crmForm.FormType is 2
      strEscalationStatus = crmForm.all.isp_escalationstatus
      if strEscalationStatus.DataValue?
        switch strEscalationStatus.SelectedText
          when "Stage1"
            crmForm.all.isp_acceptedowner.Disabled = 1
            crmForm.all.isp_acceptedowner.ForceSubmit = true
            crmForm.all.isp_escalationstatus.ForceSubmit = true
          when "Stage2"
            crmForm.all.isp_acceptedsecowner.Disabled = 1
            crmForm.all.isp_acceptedowner.Disabled = 1
            crmForm.all.isp_acceptedsecowner.ForceSubmit = true
            crmForm.all.isp_acceptedowner.ForceSubmit = true
            crmForm.all.isp_escalationstatus.ForceSubmit = true
          when "Stage3"
            crmForm.all.isp_acceptedmanager.Disabled = 1
            crmForm.all.isp_acceptedsecowner.Disabled = 1
            crmForm.all.isp_acceptedowner.Disabled = 1
            crmForm.all.isp_acceptedmanager.ForceSubmit = true
            crmForm.all.isp_acceptedsecowner.ForceSubmit = true
            crmForm.all.isp_acceptedowner.ForceSubmit = true
            crmForm.all.isp_escalationstatus.ForceSubmit = true
      
      #Set the Description field to value
      strCustomerName = crmForm.all.customerid.DataValue[0].name
      crmForm.all.title.DataValue = strCustomerName + " " + crmForm.all.isp_department.SelectedText + " " + crmForm.all.isp_subdepartment.SelectedText
  oReAssigned = crmForm.all.isp_reassign
  if oReAssigned.DataValue?
    switch oReAssigned.SelectedText
      when "Yes"
        
        # the function 
        ExecuteWorkflow = (entityId, workflowId) ->
          xml = "" + "<?xml version=\"1.0\" encoding=\"utf-8\"?>" + "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">" + GenerateAuthenticationHeader() + "  <soap:Body>" + "    <Execute xmlns=\"http://schemas.microsoft.com/crm/2007/WebServices\">" + "      <Request xsi:type=\"ExecuteWorkflowRequest\">" + "        <EntityId>" + entityId + "</EntityId>" + "        <WorkflowId>" + workflowId + "</WorkflowId>" + "      </Request>" + "    </Execute>" + "  </soap:Body>" + "</soap:Envelope>" + ""
          xmlHttpRequest = new ActiveXObject("Msxml2.XMLHTTP")
          xmlHttpRequest.Open "POST", "/mscrmservices/2007/CrmService.asmx", false
          xmlHttpRequest.setRequestHeader "SOAPAction", "http://schemas.microsoft.com/crm/2007/WebServices/Execute"
          xmlHttpRequest.setRequestHeader "Content-Type", "text/xml; charset=utf-8"
          xmlHttpRequest.setRequestHeader "Content-Length", xml.length
          xmlHttpRequest.send xml
          resultXml = xmlHttpRequest.responseXML
          resultXml.xml

        
        # call 
        theWorkflowId = "F39C57D9-63E4-4B9A-88B3-3BB063E09D84" #change to your workflow Id
        ExecuteWorkflow crmForm.ObjectId, theWorkflowId
isp_department_onchange = ->
  
  # ************************************************************************
  # ** Purpose:
  # **
  # ** Only show departments from Office
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  
  # This was added to hide the region field
  
  # This was added to hide the region field
  
  #This section will make the Nature of Problem field not required and hidden
  
  # This was added to hide the region field
  
  #This section will make the Nature of Problem field not required and hidden
  
  # This was added to hide the region field
  
  #This section will make the Action Needed field not required and hidden
  
  #This section will make the Nature of Problem field not required and hidden
  
  #document.all.isp_requestedbyemail_d.style.visibility = "";
  #document.all.isp_requestedbyemail_c.style.visibility = "";
  #crmForm.all.isp_requestedbyemail.Disabled = 1;
  
  #If the Department is I.T, the Customer field will become not required
  # crmForm.all.customerid.Disabled = 1;
  #crmForm.all.customerid.setAttribute("req", 0);
  # crmForm.all.customerid_c.className = "n";
  # crmForm.all.customerid_c.innerHTML =
  #  crmForm.all.customerid_c.innerText;
  #  document.all.customerid_c.style.visibility = "hidden";
  # document.all.customerid_d.style.visibility = "hidden";
  #This section will make the Action Needed field not required and hidden
  
  #This section will make the Dont Send Resolved email field not required and hidden
  #crmForm.all.isp_allowclosedemail.setAttribute("req", 0);
  #crmForm.all.isp_allowclosedemail_c.className = "n";
  #crmForm.all.isp_allowclosedemail_c.innerHTML =
  #crmForm.all.isp_allowclosedemail_c.innerText;
  #document.all.isp_allowclosedemail_c.style.visibility = "hidden";
  #document.all.isp_allowclosedemail_d.style.visibility = "hidden";
  #This section will make the Nature of Problem field not required and hidden
  
  #This section will bring up the Description of the Case to be filled in by the person logging the request
  
  #alert("Since this is an I.T. helpdesk request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
  #var label = crmForm.all.isp_staffid_c;
  #label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>";
  
  # document.all.isp_staffid_d.style.visibility = "";
  # document.all.isp_staffid_c.style.visibility = "";
  
  #If the Department is I.T, the Customer field will become not required
  # crmForm.all.customerid.Disabled = 1;
  #crmForm.all.customerid.setAttribute("req", 0);
  #crmForm.all.customerid_c.className = "n";
  #crmForm.all.customerid_c.innerHTML =
  #crmForm.all.customerid_c.innerText;
  #document.all.customerid_c.style.visibility = "hidden";
  #document.all.customerid_d.style.visibility = "hidden";
  #This section will make the Action Needed field not required and hidden
  
  #This section will make the Dont Send Resolved email field not required and hidden
  
  #This section will make the Nature of Problem field not required and hidden
  
  #This section will bring up the Description of the Case to be filled in by the person logging the request
  
  #  alert("Since this is an I.T. helpdesk request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
  
  #document.all.isp_requestedbyemail_d.style.visibility = "";
  #document.all.isp_requestedbyemail_c.style.visibility = "";
  #crmForm.all.isp_requestedbyemail.Disabled = 1;
  
  #If the Department is I.T, the Customer field will become not required
  # crmForm.all.customerid.Disabled = 1;
  #crmForm.all.customerid.setAttribute("req", 0);
  # crmForm.all.customerid_c.className = "n";
  # crmForm.all.customerid_c.innerHTML =
  #  crmForm.all.customerid_c.innerText;
  #  document.all.customerid_c.style.visibility = "hidden";
  # document.all.customerid_d.style.visibility = "hidden";
  #This section will make the Action Needed field not required and hidden
  
  #This section will make the Dont Send Resolved email field not required and hidden
  #crmForm.all.isp_allowclosedemail.setAttribute("req", 0);
  #crmForm.all.isp_allowclosedemail_c.className = "n";
  #crmForm.all.isp_allowclosedemail_c.innerHTML =
  #crmForm.all.isp_allowclosedemail_c.innerText;
  #document.all.isp_allowclosedemail_c.style.visibility = "hidden";
  #document.all.isp_allowclosedemail_d.style.visibility = "hidden";
  #This section will make the Nature of Problem field not required and hidden
  
  #This section will bring up the Description of the Case to be filled in by the person logging the request
  
  #alert("Since this is an I.T. helpdesk request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
  #var label = crmForm.all.isp_staffid_c;
  #label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>";
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oSubDept.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oSubDept[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oSubDept.length

    while i >= 0
      oSubDept.remove i  unless oTempArray[i] is true
      i--
    return
  debugger
  crmForm.all.isp_departmentval.DataValue = crmForm.all.isp_department.SelectedText
  oDepartmentValue = crmForm.all.isp_department
  oSubDept = crmForm.all.isp_subdepartment
  unless oSubDept.originalPicklistValues
    oSubDept.originalPicklistValues = oSubDept.Options
  else
    oSubDept.Options = oSubDept.originalPicklistValues
  oArrayBackOffice = new Array()
  oArrayRandDepart = new Array()
  oArrayFinance = new Array()
  oArrayIT = new Array()
  oArrayHR = new Array()
  oArrayRand = new Array()
  oArrayFleetandFinance = new Array()
  oArrayFinSurv = new Array()
  oArrayBackOffice.push 0, 4, 5, 6, 68, 69, 88, 89, 90, 91, 33, 70
  oArrayRandDepart.push 0, 80, 81, 82, 83, 84, 85, 98, 99, 100, 101
  oArrayFinance.push 0, 1, 2, 3
  oArrayIT.push 0, 13
  oArrayHR.push 0, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
  oArrayRand.push 0, 68, 79
  oArrayFleetandFinance.push 0, 72, 73, 74, 75
  oArrayFinSurv.push 0, 80, 81, 82, 83, 84, 85, 98, 99, 100, 101, 102
  oSecOwner = crmForm.all.isp_secondaryowner
  oDeptMan = crmForm.all.isp_departmentmanager
  if oDepartmentValue.DataValue?
    switch oDepartmentValue.SelectedText
      when "Back Office Department"
        filterPicklist oArrayBackOffice
        document.all.isp_descriptionofproblem_d.style.visibility = ""
        document.all.isp_descriptionofproblem_c.style.visibility = ""
        document.all.isp_region_c.style.visibility = "hidden"
        document.all.isp_region_d.style.visibility = "hidden"
      when "Rand Department"
        filterPicklist oArrayRandDepart
        document.all.isp_region_c.style.visibility = "hidden"
        document.all.isp_region_d.style.visibility = "hidden"
        crmForm.all.isp_natureofproblem.setAttribute "req", 0
        crmForm.all.isp_natureofproblem_c.className = "n"
        crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
        document.all.isp_natureofproblem_c.style.visibility = "hidden"
        document.all.isp_natureofproblem_d.style.visibility = "hidden"
      when "FinSurv Department"
        filterPicklist oArrayFinSurv
        document.all.isp_region_c.style.visibility = "hidden"
        document.all.isp_region_d.style.visibility = "hidden"
        crmForm.all.isp_natureofproblem.setAttribute "req", 0
        crmForm.all.isp_natureofproblem_c.className = "n"
        crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
        document.all.isp_natureofproblem_c.style.visibility = "hidden"
        document.all.isp_natureofproblem_d.style.visibility = "hidden"
      when "Finance Department"
        filterPicklist oArrayFinance
        document.all.isp_region_c.style.visibility = "hidden"
        document.all.isp_region_d.style.visibility = "hidden"
      when "Rand Department"
        filterPicklist oArrayRand
        crmForm.all.isp_queryby.setAttribute "req", 0
        crmForm.all.isp_queryby_c.className = "n"
        crmForm.all.isp_queryby_c.innerHTML = crmForm.all.isp_queryby_c.innerText
        document.all.isp_queryby_c.style.visibility = "hidden"
        document.all.isp_queryby_d.style.visibility = "hidden"
        document.all.isp_descriptionofproblem_d.style.visibility = ""
        document.all.isp_descriptionofproblem_c.style.visibility = ""
        crmForm.all.isp_natureofproblem.setAttribute "req", 0
        crmForm.all.isp_natureofproblem_c.className = "n"
        crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
        document.all.isp_natureofproblem_c.style.visibility = "hidden"
        document.all.isp_natureofproblem_d.style.visibility = "hidden"
        document.all.isp_queryby_c.style.visibility = "hidden"
        document.all.isp_queryby_d.style.visibility = "hidden"
        document.all.isp_allowclosedemail_c.style.visibility = "hidden"
        document.all.isp_allowclosedemail_d.style.visibility = "hidden"
        document.all.isp_branchref_c.style.visibility = "hidden"
        document.all.isp_branchref_d.style.visibility = "hidden"
        document.all.isp_opicsref_c.style.visibility = "hidden"
        document.all.isp_opicsref_d.style.visibility = "hidden"
        document.all.isp_foreignbankref_c.style.visibility = "hidden"
        document.all.isp_foreignbankref_d.style.visibility = "hidden"
        document.all.isp_inwardfunds_c.style.visibility = "hidden"
        document.all.isp_inwardfunds_d.style.visibility = "hidden"
        document.all.isp_amount_c.style.visibility = "hidden"
        document.all.isp_amount_d.style.visibility = "hidden"
        document.all.isp_sender_c.style.visibility = "hidden"
        document.all.isp_sender_d.style.visibility = "hidden"
        document.all.isp_branch_c.style.visibility = "hidden"
        document.all.isp_branch_d.style.visibility = "hidden"
        document.all.isp_region_c.style.visibility = "hidden"
        document.all.isp_region_d.style.visibility = "hidden"
        document.all.casetypecode_c.style.visibility = "hidden"
        document.all.casetypecode_d.style.visibility = "hidden"
        document.all.isp_beneficiary_c.style.visibility = "hidden"
        document.all.isp_beneficiary_d.style.visibility = "hidden"
        document.all.isp_clientresponse_c.style.visibility = "hidden"
        document.all.isp_clientresponse_d.style.visibility = "hidden"
        document.all.isp_charges_c.style.visibility = "hidden"
        document.all.isp_charges_d.style.visibility = "hidden"
        document.all.isp_dontsendanycorrespondence_c.style.visibility = "hidden"
        document.all.isp_dontsendanycorrespondence_d.style.visibility = "hidden"
        oSecOwner.DataValue = 30
        oDeptMan.DataValue = 8
      when "HR Department"
        filterPicklist oArrayHR
        document.all.isp_staffid_d.style.visibility = ""
        document.all.isp_staffid_c.style.visibility = ""
        crmForm.all.casetypecode.DataValue = 200001
        crmForm.all.caseorigincode.DataValue = 2
        document.all.isp_descriptionofproblem_d.style.visibility = ""
        document.all.isp_descriptionofproblem_c.style.visibility = ""
        crmForm.all.isp_queryby.setAttribute "req", 0
        crmForm.all.isp_queryby_c.className = "n"
        crmForm.all.isp_queryby_c.innerHTML = crmForm.all.isp_queryby_c.innerText
        document.all.isp_queryby_c.style.visibility = "hidden"
        document.all.isp_queryby_d.style.visibility = "hidden"
        document.all.isp_allowclosedemail_c.style.visibility = "hidden"
        document.all.isp_allowclosedemail_d.style.visibility = "hidden"
        document.all.isp_branchref_c.style.visibility = "hidden"
        document.all.isp_branchref_d.style.visibility = "hidden"
        document.all.isp_opicsref_c.style.visibility = "hidden"
        document.all.isp_opicsref_d.style.visibility = "hidden"
        document.all.isp_foreignbankref_c.style.visibility = "hidden"
        document.all.isp_foreignbankref_d.style.visibility = "hidden"
        document.all.isp_inwardfunds_c.style.visibility = "hidden"
        document.all.isp_inwardfunds_d.style.visibility = "hidden"
        document.all.isp_amount_c.style.visibility = "hidden"
        document.all.isp_amount_d.style.visibility = "hidden"
        document.all.isp_sender_c.style.visibility = "hidden"
        document.all.isp_sender_d.style.visibility = "hidden"
        document.all.isp_region_c.style.visibility = "hidden"
        document.all.isp_region_d.style.visibility = "hidden"
        crmForm.all.isp_natureofproblem.setAttribute "req", 0
        crmForm.all.isp_natureofproblem_c.className = "n"
        crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
        document.all.isp_natureofproblem_c.style.visibility = "hidden"
        document.all.isp_natureofproblem_d.style.visibility = "hidden"
        crmForm.all.title.setAttribute "req", 0
        crmForm.all.title_c.className = "n"
        crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
        document.all.title_d.style.visibility = "hidden"
        document.all.title_c.style.visibility = "hidden"
      when "I.T Procurement"
        filterPicklist oArrayIT
        crmForm.all.casetypecode.DataValue = 200001
        crmForm.all.caseorigincode.DataValue = 2
        document.all.isp_requestedbyemail_d.style.visibility = ""
        document.all.isp_requestedbyemail_c.style.visibility = ""
        crmForm.all.isp_requestedbyemail.Disabled = 1
        document.all.isp_descriptionofproblem_d.style.visibility = ""
        document.all.isp_descriptionofproblem_c.style.visibility = ""
        crmForm.all.isp_queryby.setAttribute "req", 0
        crmForm.all.isp_queryby_c.className = "n"
        crmForm.all.isp_queryby_c.innerHTML = crmForm.all.isp_queryby_c.innerText
        document.all.isp_queryby_c.style.visibility = "hidden"
        document.all.isp_queryby_d.style.visibility = "hidden"
        document.all.isp_allowclosedemail_c.style.visibility = "hidden"
        document.all.isp_allowclosedemail_d.style.visibility = "hidden"
        document.all.isp_branchref_c.style.visibility = "hidden"
        document.all.isp_branchref_d.style.visibility = "hidden"
        document.all.isp_opicsref_c.style.visibility = "hidden"
        document.all.isp_opicsref_d.style.visibility = "hidden"
        document.all.isp_foreignbankref_c.style.visibility = "hidden"
        document.all.isp_foreignbankref_d.style.visibility = "hidden"
        document.all.isp_inwardfunds_c.style.visibility = "hidden"
        document.all.isp_inwardfunds_d.style.visibility = "hidden"
        document.all.isp_amount_c.style.visibility = "hidden"
        document.all.isp_amount_d.style.visibility = "hidden"
        document.all.isp_sender_c.style.visibility = "hidden"
        document.all.isp_sender_d.style.visibility = "hidden"
        document.all.isp_region_c.style.visibility = "hidden"
        document.all.isp_region_d.style.visibility = "hidden"
        crmForm.all.isp_allowclosedemail.setAttribute "req", 0
        crmForm.all.isp_allowclosedemail_c.className = "n"
        crmForm.all.isp_allowclosedemail_c.innerHTML = crmForm.all.isp_allowclosedemail_c.innerText
        document.all.isp_allowclosedemail_c.style.visibility = "hidden"
        document.all.isp_allowclosedemail_d.style.visibility = "hidden"
        crmForm.all.isp_natureofproblem.setAttribute "req", 0
        crmForm.all.isp_natureofproblem_c.className = "n"
        crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
        document.all.isp_natureofproblem_c.style.visibility = "hidden"
        document.all.isp_natureofproblem_d.style.visibility = "hidden"
        document.all.isp_beneficiary_c.style.visibility = "hidden"
        document.all.isp_beneficiary_d.style.visibility = "hidden"
        document.all.isp_clientresponse_c.style.visibility = "hidden"
        document.all.isp_clientresponse_d.style.visibility = "hidden"
        document.all.isp_charges_c.style.visibility = "hidden"
        document.all.isp_charges_d.style.visibility = "hidden"
        document.all.isp_dontsendanycorrespondence_c.style.visibility = "hidden"
        document.all.isp_dontsendanycorrespondence_d.style.visibility = "hidden"
        crmForm.all.title.setAttribute "req", 0
        crmForm.all.title_c.className = "n"
        crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
        document.all.title_d.style.visibility = "hidden"
        document.all.title_c.style.visibility = "hidden"
        label = crmForm.all.isp_staffid_c
        label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>"
      when "Fleet and Finance"
        filterPicklist oArrayFleetandFinance
        document.all.isp_staffid_d.style.visibility = ""
        document.all.isp_staffid_c.style.visibility = ""
        crmForm.all.casetypecode.DataValue = 200001
        crmForm.all.caseorigincode.DataValue = 2
        document.all.isp_descriptionofproblem_d.style.visibility = ""
        document.all.isp_descriptionofproblem_c.style.visibility = ""
        crmForm.all.isp_queryby.setAttribute "req", 0
        crmForm.all.isp_queryby_c.className = "n"
        crmForm.all.isp_queryby_c.innerHTML = crmForm.all.isp_queryby_c.innerText
        document.all.isp_queryby_c.style.visibility = "hidden"
        document.all.isp_queryby_d.style.visibility = "hidden"
        document.all.isp_allowclosedemail_c.style.visibility = "hidden"
        document.all.isp_allowclosedemail_d.style.visibility = "hidden"
        document.all.isp_branchref_c.style.visibility = "hidden"
        document.all.isp_branchref_d.style.visibility = "hidden"
        document.all.isp_opicsref_c.style.visibility = "hidden"
        document.all.isp_opicsref_d.style.visibility = "hidden"
        document.all.isp_capturer_c.style.visibility = "hidden"
        document.all.isp_capturer_d.style.visibility = "hidden"
        document.all.isp_authorizer_c.style.visibility = "hidden"
        document.all.isp_authorizer_d.style.visibility = "hidden"
        document.all.isp_foreignbankref_c.style.visibility = "hidden"
        document.all.isp_foreignbankref_d.style.visibility = "hidden"
        document.all.isp_inwardfunds_c.style.visibility = "hidden"
        document.all.isp_inwardfunds_d.style.visibility = "hidden"
        document.all.isp_amount_c.style.visibility = "hidden"
        document.all.isp_amount_d.style.visibility = "hidden"
        document.all.isp_sender_c.style.visibility = "hidden"
        document.all.isp_sender_d.style.visibility = "hidden"
        document.all.isp_beneficiary_c.style.visibility = "hidden"
        document.all.isp_beneficiary_d.style.visibility = "hidden"
        document.all.isp_clientresponse_c.style.visibility = "hidden"
        document.all.isp_clientresponse_d.style.visibility = "hidden"
        document.all.isp_charges_c.style.visibility = "hidden"
        document.all.isp_charges_d.style.visibility = "hidden"
        document.all.isp_dontsendanycorrespondence_c.style.visibility = "hidden"
        document.all.isp_dontsendanycorrespondence_d.style.visibility = "hidden"
        crmForm.all.isp_natureofproblem.setAttribute "req", 0
        crmForm.all.isp_natureofproblem_c.className = "n"
        crmForm.all.isp_natureofproblem_c.innerHTML = crmForm.all.isp_natureofproblem_c.innerText
        document.all.isp_natureofproblem_c.style.visibility = ""
        document.all.isp_natureofproblem_d.style.visibility = ""
        crmForm.all.title.setAttribute "req", 0
        crmForm.all.title_c.className = "n"
        crmForm.all.title_c.innerHTML = crmForm.all.title_c.innerText
        document.all.title_d.style.visibility = "hidden"
        document.all.title_c.style.visibility = "hidden"
  return
loadnature = ->
  
  # ************************************************************************
  # ** Purpose:
  # **
  # ** Only show certain Nature of Problem
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  # text values correspond to the picklist values in the 'nature of problem' field
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oNatProblem.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oNatProblem[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oNatProblem.length

    while i >= 0
      oNatProblem.remove i  unless oTempArray[i] is true
      i--
    return
  oSubDepart = crmForm.all.isp_subdepartment
  oNatProblem = crmForm.all.isp_natureofproblem
  unless oNatProblem.originalPicklistValues
    oNatProblem.originalPicklistValues = oNatProblem.Options
  else
    oNatProblem.Options = oNatProblem.originalPicklistValues
  oArrayCorporateQuery = new Array()
  oArrayRetailQuery = new Array()
  oArrayBOQueriesQuery = new Array()
  oArrayAutoRetailQuery = new Array()
  oArrayCashkows = new Array()
  oArrayAutoCashkows = new Array()
  oArrayCorporateQuery.push 0, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 29, 31, 32, 4, 85
  oArrayRetailQuery.push 0, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 29, 31, 32, 4, 85
  oArrayBOQueriesQuery.push 0, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 29, 31, 32, 4, 85
  oArrayAutoRetailQuery.push 0, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 29, 31, 32, 4, 85
  oArrayCashkows.push 0, 54, 86, 61, 87, 32, 88, 60, 89, 50, 60, 58, 90, 6, 91, 64
  oArrayAutoCashkows.push 0, 54, 86, 61, 87, 32, 88, 60, 89, 50, 60, 58, 90, 6, 91, 64
  if oSubDepart.DataValue?
    switch oSubDepart.SelectedText
      when "Corporate"
        filterPicklist oArrayCorporateQuery
      when "Retail"
        filterPicklist oArrayRetailQuery
      when "Automated: BO Queries"
        filterPicklist oArrayRetailQuery
      when "Automated: Retail Queries"
        filterPicklist oArrayRetailQuery
      when "Cashkow Queries"
        filterPicklist oArrayCashkows
      when "Automated: CashKows Queries"
        filterPicklist oArrayAutoCashkows
  return
isp_SubDept_onchange = ->
  
  # ************************************************************************
  # ** Purpose:
  # **
  # ** Only show certain Nature of Problem
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  # text values correspond to the picklist values in the 'nature of problem' field
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oNatProblem.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oNatProblem[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oNatProblem.length

    while i >= 0
      oNatProblem.remove i  unless oTempArray[i] is true
      i--
    return
  oSubDepart = crmForm.all.isp_subdepartment
  oNatProblem = crmForm.all.isp_natureofproblem
  unless oNatProblem.originalPicklistValues
    oNatProblem.originalPicklistValues = oNatProblem.Options
  else
    oNatProblem.Options = oNatProblem.originalPicklistValues
  oArrayCorporateQuery = new Array()
  oArrayRetailQuery = new Array()
  oArrayBOQueriesQuery = new Array()
  oArrayAutoRetailQuery = new Array()
  oArrayCashkows = new Array()
  oArrayAutoCashkows = new Array()
  oArrayCorporateQuery.push 0, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 29, 31, 32, 4, 85
  oArrayRetailQuery.push 0, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 29, 31, 32, 4, 85
  oArrayBOQueriesQuery.push 0, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 29, 31, 32, 4, 85
  oArrayAutoRetailQuery.push 0, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 29, 31, 32, 4, 85
  oArrayCashkows.push 0, 54, 86, 61, 87, 32, 88, 60, 89, 50, 60, 58, 90, 6, 91, 64
  oArrayAutoCashkows.push 0, 54, 86, 61, 87, 32, 88, 60, 89, 50, 60, 58, 90, 6, 91, 64
  if oSubDepart.DataValue?
    switch oSubDepart.SelectedText
      when "Corporate"
        filterPicklist oArrayCorporateQuery
      when "Retail"
        filterPicklist oArrayRetailQuery
      when "Automated: BO Queries"
        filterPicklist oArrayRetailQuery
      when "Automated: Retail Queries"
        filterPicklist oArrayRetailQuery
      when "Cashkow Queries"
        filterPicklist oArrayCashkows
      when "Automated: CashKows Queries"
        filterPicklist oArrayAutoCashkows
  return
isp_subdepartment_onchange = ->
  
  # ************************************************************************
  # ** Purpose:
  # **
  # ** This will pre-filter the owner, secondary owner, and department manager for the escalation trail
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  #var oCorporateCard = new Array();
  
  #This will create Lists for I.T.
  
  # This will create Lists for Rand
  
  #This will create Lists for Fleet and Finance
  
  #This will create a list for Rand Department
  
  #This will create Lists for H.R.
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  #oCorporateCard.push(0, 16, 17, 18);
  
  #This will create Lists for I.T.
  #oDesktopSupport.push(0, 25, 26, 37, 39);
  #oApplications.push(0, 27, 28, 29, 30, 33, 34, 35, 36, 37);
  #oTechnicalAdmin.push(0, 27, 40);
  #oDevelopment.push(0, 1, 32, 33, 34, 35, 30);
  
  #This will create lists for Fleet and Finance
  
  #This will create Lists for H.R.
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  
  # List for Fleet and Finance
  
  # List for HR
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oOwner.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oOwner[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oOwner.length

    while i >= 0
      oOwner.remove i  unless oTempArray[i] is true
      i--
    return
  debugger
  oSubdepartment = crmForm.all.isp_subdepartment
  oOwner = crmForm.all.isp_owner
  oRegion = crmForm.all.isp_region
  unless oOwner.originalPicklistValues
    oOwner.originalPicklistValues = oOwner.Options
  else
    oOwner.Options = oOwner.originalPicklistValues
  oCorporate = new Array()
  oRetail = new Array()
  oRand = new Array()
  oNostro = new Array()
  oTradeFin = new Array()
  oTradeServ = new Array()
  oInterBank = new Array()
  oExcon = new Array()
  oPrivateBanking = new Array()
  oFinSurv = new Array()
  oAutomatedFinance = new Array()
  oOpStats = new Array()
  oCreditors = new Array()
  oDesktopSupport = new Array()
  oApplications = new Array()
  oTechnicalAdmin = new Array()
  oDevelopment = new Array()
  oProcurement = new Array()
  oNewAccounts = new Array()
  oPayments = new Array()
  oNotice = new Array()
  oConfirmations = new Array()
  oWithdrawalRequest = new Array()
  oInvestments = new Array()
  oJohannesburg = new Array()
  oBloemfontein = new Array()
  oCapeTown = new Array()
  oDurban = new Array()
  oNewAccounts = new Array()
  oPayments = new Array()
  oNotice = new Array()
  oConfirmations = new Array()
  oWithdrawalRequest = new Array()
  oInvestments = new Array()
  oPension = new Array()
  oUniforms = new Array()
  oLeave = new Array()
  oMaternity = new Array()
  oGeneral = new Array()
  oBenefit = new Array()
  oIntranet = new Array()
  oCompensation = new Array()
  oStaffFiles = new Array()
  oWorkplaceForum = new Array()
  oPoloicies = new Array()
  oICAS = new Array()
  oMedicalAid = new Array()
  oCareers = new Array()
  oBEE = new Array()
  oDisciplinaries = new Array()
  oBursaries = new Array()
  oKPA = new Array()
  oSalaries = new Array()
  oCorporate.push 0, 5, 4, 9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60, 65, 10, 102, 100000000, 105, 106, 108, 109, 129, 130, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 152, 153, 154, 146, 155, 156, 157, 158, 159, 160, 161
  oRetail.push 0, 5, 4, 9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60, 65, 10, 102, 100000000, 105, 106, 108, 109, 129, 130, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 152, 153, 154, 155, 156, 158, 159, 160, 161
  oRand.push 0, 1, 13, 14, 15, 41, 60, 10, 129, 132, 133, 135, 137, 138, 140, 102, 100000000, 141, 152, 153, 154, 146, 155, 156, 157, 158, 159, 160, 161
  oFinSurv.push 0, 1, 13, 14, 15, 41, 60, 10, 129, 132, 133, 135, 137, 138, 140, 102, 100000000, 141, 152, 153, 154, 146
  oNostro.push 0, 39, 57, 58, 133, 149, 150, 38, 153
  oExcon.push 0, 29, 30, 31, 32, 4, 60
  oTradeFin.push 0, 5, 4, 9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60, 10, 102, 100000000, 105, 106, 108, 109, 129, 130, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 152, 153, 155, 156, 157, 158, 159, 160, 161, 143
  oTradeServ.push 0, 5, 4, 9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60, 10, 102, 100000000, 105, 106, 108, 109, 129, 130, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 152, 153, 155, 156, 157, 158, 159, 160, 161, 143
  oInterBank.push 0, 5, 4, 9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60, 10, 102, 100000000, 105, 106, 108, 109, 129, 130, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 152, 153, 155, 156, 157, 158, 159, 160, 161
  oAutomatedFinance.push 0, 44
  oPrivateBanking.push 0, 139, 146, 147, 148, 103, 155, 156, 157, 158, 159, 160, 161
  oOpStats.push 0, 44
  oCreditors.push 0, 44
  oProcurement.push 0, 66, 67
  oJohannesburg.push 0, 71
  oBloemfontein.push 0, 71
  oCapeTown.push 0, 71
  oDurban.push 0, 71
  oNewAccounts.push 0, 133, 140, 137, 135, 102, 100000000, 138, 10, 25, 141, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161
  oPayments.push 0, 133, 140, 137, 135, 102, 100000000, 138, 10, 25, 141, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161
  oNotice.push 0, 133, 140, 137, 135, 102, 100000000, 138, 10, 25, 141, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161
  oConfirmations.push 0, 133, 140, 137, 135, 102, 100000000, 138, 10, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161
  oWithdrawalRequest.push 0, 133, 140, 137, 135, 102, 100000000, 138, 10, 25, 141, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161
  oInvestments.push 0, 133, 140, 137, 135, 102, 100000000, 138, 10, 25, 141, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161
  oPension.push 0, 42
  oUniforms.push 0, 43
  oLeave.push 0, 43
  oMaternity.push 0, 42
  oGeneral.push 0, 42
  oBenefit.push 0, 43
  oIntranet.push 0, 43
  oCompensation.push 0, 42
  oStaffFiles.push 0, 42
  oWorkplaceForum.push 0, 43
  oPoloicies.push 0, 43
  oICAS.push 0, 42
  oMedicalAid.push 0, 43
  oCareers.push 0, 43
  oBEE.push 0, 43
  oDisciplinaries.push 0, 42
  oBursaries.push 0, 42
  oKPA.push 0, 43
  oSalaries.push 0, 43
  if oSubdepartment.DataValue?
    switch oSubdepartment.SelectedText
      when "Corporate"
        filterPicklist oCorporate
        oOwner.DataValue = 9
        oOwner.Disabled = 0
      when "Retail"
        filterPicklist oRetail
        oOwner.DataValue = 65
        oOwner.Disabled = 0
      when "Nostro"
        filterPicklist oNostro
        oOwner.DataValue = 150
        oOwner.Disabled = 0
      when "Excon"
        filterPicklist oExcon
        oOwner.DataValue = 63
        oOwner.Disabled = 0
      when "Rand"
        filterPicklist oRand
        oOwner.DataValue = 152
        oOwner.Disabled = 0
      when "Trade Finance"
        filterPicklist oTradeFin
        oOwner.DataValue = 143
        oOwner.Disabled = 0
      when "Trade Services"
        filterPicklist oTradeServ
        oOwner.DataValue = 143
        oOwner.Disabled = 0
      when "Inter Bank Settlements"
        filterPicklist oInterBank
        oOwner.DataValue = 9
        oOwner.Disabled = 0
      when "Automated: CashKows Queries"
        filterPicklist oPrivateBanking
        oOwner.DataValue = 139
        oOwner.Disabled = 0
      when "CashKows Queries"
        filterPicklist oPrivateBanking
        oOwner.DataValue = 139
        oOwner.Disabled = 0
      when "FinSurv"
        filterPicklist oFinSurv
        oOwner.DataValue = 146
        oOwner.Disabled = 0
      when "Automated: Finance Queue"
        oOwner.DataValue = 44
        oOwner.Disabled = 1
      when "Op Stats"
        oOwner.DataValue = 44
        oOwner.Disabled = 1
      when "Creditors"
        oOwner.DataValue = 44
        oOwner.Disabled = 1
      when "Desktop Support"
        filterPicklist oDesktopSupport
      when "Applications"
        filterPicklist oApplications
      when "Technical Admin"
        filterPicklist oTechnicalAdmin
      when "Development"
        filterPicklist oDevelopment
      when "Procurement"
        filterPicklist oProcurement
      when "New Accounts"
        filterPicklist oNewAccounts
        oOwner.DataValue = 152
        oOwner.Disabled = 0
      when "Payments"
        filterPicklist oPayments
        oOwner.DataValue = 152
        oOwner.Disabled = 0
      when "Notice"
        filterPicklist oNotice
        oOwner.DataValue = 152
        oOwner.Disabled = 0
      when "Confirmations"
        filterPicklist oConfirmations
        oOwner.DataValue = 152
        oOwner.Disabled = 0
      when "Withdrawal Request"
        filterPicklist oWithdrawalRequest
        oOwner.DataValue = 152
        oOwner.Disabled = 0
      when "Investments"
        filterPicklist oInvestments
        oOwner.DataValue = 152
        oOwner.Disabled = 0
      when "Johannesburg"
        oOwner.DataValue = 71
        oOwner.Disabled = 1
      when "Bloemfontein"
        oOwner.DataValue = 71
        oOwner.Disabled = 1
      when "Cape Town"
        oOwner.DataValue = 71
        oOwner.Disabled = 1
      when "Durban"
        oOwner.DataValue = 71
        oOwner.Disabled = 1
      when "Pension / Provident Fund"
        oOwner.DataValue = 42
        oOwner.Disabled = 1
      when "Uniforms"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "Leave"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "Maternity"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "Leave"
        oOwner.DataValue = 42
        oOwner.Disabled = 1
      when "General HR"
        oOwner.DataValue = 42
        oOwner.Disabled = 1
      when "Pre-Benefit Testing"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "Intranet"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "WorkmanÃ¢â¬â¢s Compensation"
        oOwner.DataValue = 42
        oOwner.Disabled = 1
      when "Staff Files"
        oOwner.DataValue = 42
        oOwner.Disabled = 1
      when "Workplace Forum"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "Policies"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "ICAS"
        oOwner.DataValue = 42
        oOwner.Disabled = 1
      when "Medical Aid"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "Careers at Bidvest / Vacancies"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "BEE"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "Disciplinaries"
        oOwner.DataValue = 42
        oOwner.Disabled = 1
      when "Bursaries"
        oOwner.DataValue = 42
        oOwner.Disabled = 1
      when "KPAÃ¢â¬â¢s / Performance Management"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
      when "Salaries Ã¢â¬â Infoslips ONLY"
        oOwner.DataValue = 43
        oOwner.Disabled = 1
  oSecOwner = crmForm.all.isp_secondaryowner
  oDeptMan = crmForm.all.isp_departmentmanager
  if oSubdepartment.DataValue?
    switch oSubdepartment.SelectedText
      when "Corporate"
        oSecOwner.DataValue = 33
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 2
        oDeptMan.Disabled = 0
      when "Retail"
        oSecOwner.DataValue = 33
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 2
        oDeptMan.Disabled = 0
      when "Rand"
        oSecOwner.DataValue = 4
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 17
        oDeptMan.Disabled = 0
      when "Excon"
        oSecOwner.DataValue = 16
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 2
        oDeptMan.Disabled = 1
      when "Nostro"
        oSecOwner.DataValue = 38
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 21
        oDeptMan.Disabled = 0
      when "Trade Finance"
        oSecOwner.DataValue = 42
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 2
        oDeptMan.Disabled = 0
      when "Trade Services"
        oSecOwner.DataValue = 42
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 2
        oDeptMan.Disabled = 0
      when "Inter Bank Settlements"
        oSecOwner.DataValue = 3
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 2
        oDeptMan.Disabled = 0
      when "Automated: CashKows Queries"
        oSecOwner.DataValue = 37
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 19
        oDeptMan.Disabled = 0
      when "FinSurv"
        oSecOwner.DataValue = 41
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 22
        oDeptMan.Disabled = 0
      when "Automated: Finance Queue"
        oSecOwner.DataValue = 10
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 1
        oDeptMan.Disabled = 1
      when "Op Stats"
        oSecOwner.DataValue = 10
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 1
        oDeptMan.Disabled = 1
      when "Creditors"
        oSecOwner.DataValue = 10
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 1
        oDeptMan.Disabled = 1
      when "Desktop Support"
        oSecOwner.DataValue = 7
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 5
        oDeptMan.Disabled = 1
      when "Applications"
        oSecOwner.DataValue = 7
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 5
        oDeptMan.Disabled = 1
      when "Technical Admin"
        oSecOwner.DataValue = 7
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 5
        oDeptMan.Disabled = 1
      when "Development"
        oSecOwner.DataValue = 7
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 5
        oDeptMan.Disabled = 1
      when "Procurement"
        oSecOwner.DataValue = 23
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 13
        oDeptMan.Disabled = 1
      when "Johannesburg"
        oSecOwner.DataValue = 26
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 14
        oDeptMan.Disabled = 1
      when "Bloemfontein"
        oSecOwner.DataValue = 28
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 14
        oDeptMan.Disabled = 1
      when "Cape Town"
        oSecOwner.DataValue = 25
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 14
        oDeptMan.Disabled = 1
      when "Durban"
        oSecOwner.DataValue = 27
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 14
        oDeptMan.Disabled = 1
      when "New Accounts"
        oSecOwner.DataValue = 4
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 17
        oDeptMan.Disabled = 0
      when "Payments"
        oSecOwner.DataValue = 4
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 17
        oDeptMan.Disabled = 0
      when "Notice"
        oSecOwner.DataValue = 4
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 17
        oDeptMan.Disabled = 0
      when "Confirmations"
        oSecOwner.DataValue = 4
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 17
        oDeptMan.Disabled = 0
      when "Withdrawal Request"
        oSecOwner.DataValue = 4
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 17
        oDeptMan.Disabled = 0
      when "Investments"
        oSecOwner.DataValue = 4
        oSecOwner.Disabled = 0
        oDeptMan.DataValue = 17
        oDeptMan.Disabled = 0
      
      # List for HR
      when "Pension / Provident Fund"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Uniforms"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Leave"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Maternity"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Leave"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "General HR"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Pre-Benefit Testing"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Intranet"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "WorkmanÃ¢â¬â¢s Compensation"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Staff Files"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Workplace Forum"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Policies"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "ICAS"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Medical Aid"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Careers at Bidvest / Vacancies"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "BEE"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Disciplinaries"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Bursaries"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "KPAÃ¢â¬â¢s / Performance Management"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
      when "Salaries Ã¢â¬â Infoslips ONLY"
        oSecOwner.DataValue = 8
        oSecOwner.Disabled = 1
        oDeptMan.DataValue = 6
        oDeptMan.Disabled = 1
customerid_onchange = ->
  getEntityLookup = (id, entity, idfield, lookupfield, returntype) ->
    xml = "" + "< ?xml version='1.0' encoding='utf-8'?>" + "<soap :Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'" + " xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'" + " xmlns:xsd='http://www.w3.org/2001/XMLSchema'>" + GenerateAuthenticationHeader() + "</soap><soap :Body>" + "<fetch xmlns='http://schemas.microsoft.com/crm/2007/WebServices'>" + "<fetchxml>" + " &lt;fetch mapping='logical' count='1'&gt;" + " &lt;entity name='" + entity + "'&gt;" + " &lt;attribute name='" + lookupfield + "' /&gt;" + " &lt;filter&gt;" + " &lt;condition attribute='" + idfield + "' operator='eq' value='" + id + "' /&gt;" + " &lt;/filter&gt;" + " &lt;/entity&gt;" + " &lt;/fetch&gt;" + "</fetchxml>" + "</fetch>" + "</soap>" + ""
    xmlHttpRequest = new ActiveXObject("Msxml2.XMLHTTP")
    xmlHttpRequest.Open "POST", "/mscrmservices/2007/CrmService.asmx", false
    xmlHttpRequest.setRequestHeader "SOAPAction", "http://schemas.microsoft.com/crm/2007/WebServices/Fetch"
    xmlHttpRequest.setRequestHeader "Content-Type", "text/xml; charset=utf-8"
    xmlHttpRequest.setRequestHeader "Content-Length", xml.length
    xmlHttpRequest.send xml
    resultXml = xmlHttpRequest.responseXML
    resultSet = resultXml.text
    resultSet.replace "&lt;", "< "
    resultSet.replace "&gt;", ">"
    oXmlDoc = new ActiveXObject("Microsoft.XMLDOM")
    oXmlDoc.async = false
    oXmlDoc.loadXML resultSet
    result = oXmlDoc.getElementsByTagName(lookupfield)
    lookupItem = new Object()
    i = 0

    while i < result[0].attributes.length
      att = result[0].attributes[i]
      lookupItem.type = att.value  if returntype is "multiple" and att.name is "type"
      lookupItem.name = att.value  if att.name is "name"
      i++
    lookupItem.typename = returntype  unless returntype is "multiple"
    lookupItem.id = result[0].text
    lookupItem
  return
isp_queryby_onchange = ->
  
  # ************************************************************************
  # ** Purpose:
  # **
  # ** Only show foods permitted by the food category field
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  # text values correspond to the picklist values in the 'food' field
  # I keep this updated if I can as it is useful when reviewing the code!
  #1 Cabbage
  #2 Pasta
  #3 Bread
  #4 Parma Ham
  #5 Apple
  #6 Mushy Peas
  #7 Chewing Gum
  #8 Chocolate
  #9 Zucchini
  #10 Plum tomatoes
  #11 Ciabbata
  #12 Salami
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oProblem.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oProblem[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oProblem.length

    while i >= 0
      oProblem.remove i  unless oTempArray[i] is true
      i--
    return
  oDepartment = crmForm.all.isp_queryby
  oProblem = crmForm.all.isp_natureofproblem
  unless oProblem.originalPicklistValues
    oProblem.originalPicklistValues = oProblem.Options
  else
    oProblem.Options = oProblem.originalPicklistValues
  oArrayBankingQuery = new Array()
  oArrayCustomerQuery = new Array()
  oArrayBankingQuery.push 0, 18, 6, 1, 5, 4, 7, 2, 3, 20, 32
  oArrayCustomerQuery.push 0, 19, 14, 15, 12, 13, 11, 17, 16, 9, 8, 10, 20, 32, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  if oDepartment.DataValue?
    switch oDepartment.SelectedText
      when "Bank"
        filterPicklist oArrayBankingQuery
      when "Customer"
        filterPicklist oArrayCustomerQuery
  return
isp_staffid_onchange = ->
  debugger
  cid = document.getElementById("isp_staffid").DataValue[0].id
  connection = new ActiveXObject("ADODB.Connection")
  connectionString = "Provider=SQLOLEDB.1;Password=readme;Persist Security Info=True;User ID=readme;Initial Catalog=Rennies_Bank_MSCRM;Data Source=rbscrmsrv01"
  connection.Open connectionString
  sql = "SELECT isp_Email FROM Isp_staffExtensionBase WHERE isp_staffid = '" + cid + "' AND isp_Email IS NOT NULL"
  rs = new ActiveXObject("ADODB.Recordset")
  rs.Open sql, connection, 1, 2
  eml = ""
  until rs.EOF
    eml = rs.fields("isp_Email").value
    rs.MoveNext
  connection.Close()
  crmForm.all.isp_requestedbyemail.value = eml
  return
isp_dateresolved_onchange = ->
  debugger
  one_day = 1000 * 60 * 60
  StartDate = crmForm.all.createdon.DataValue
  EndDate = crmForm.all.isp_dateresolved.DataValue
  oAlert = Math.ceil((EndDate.getTime() - StartDate.getTime()) / (one_day))
  crmForm.all.isp_totaltime.DataValue = oAlert
  crmForm.all.isp_totaldays.DataValue = crmForm.all.isp_totaltime.DataValue / 24
  return
isp_totaltime_onchange = ->
  crmForm.all.isp_totaltime.ForceSubmit = true
  crmForm.Save()
  return
isp_totaldays_onchange = ->
  crmForm.all.isp_totaldays.ForceSubmit = true
  crmForm.Save()
  return
isp_owner_onchange = ->
  
  # JScript source code
  #This section will update the Owner Email Field when a value gets updated in this field.  this event
  #is fired with the OnChange event of the isp_owner field in the Escalation Trail.
  oOwner = crmForm.all.isp_owner
  oOwnerEmail = crmForm.all.isp_owneremail
  oOwnerDirectPhone = crmForm.all.isp_ownerdirectphone
  if oOwner.DataValue?
    switch oOwner.SelectedText
      when "Colleen Prinsloo"
        oOwnerEmail.DataValue = "colleen.prinsloo@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3111"
      when "Cynthia Armstrong"
        oOwnerEmail.DataValue = "Cynthia.Armstrong@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Busisiwe Nana"
        oOwnerEmail.DataValue = "Busisiwe.Nana@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3335"
      when "Judy Bergstedt"
        oOwnerEmail.DataValue = "Judy.Bergstedt@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3077"
      when "Tshidi Masite"
        oOwnerEmail.DataValue = "Tshidi.Masite@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3089"
      when "Nizel Corrigan"
        oOwnerEmail.DataValue = "Nizel.Corrigan@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3185"
      when "Reena Ganda"
        oOwnerEmail.DataValue = "Reena.Moodley@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3046"
      when "Petro Welgemoed"
        oOwnerEmail.DataValue = "Petro.Welgemoed@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3206"
      when "Naomi Van Schalkwyk"
        oOwnerEmail.DataValue = "Naomi.VanSchalkwyk@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3044"
      when "Emily Mmusi"
        oOwnerEmail.DataValue = "Emily.Mmusi@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Nancy Mamphiswana"
        oOwnerEmail.DataValue = "Nancy.Mamphiswana@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Thoko Rabotapi"
        oOwnerEmail.DataValue = "Thoko.Rabotapi@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Debra Eskelsen"
        oOwnerEmail.DataValue = "Debra.Eskelsen@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Tracey Lindeque"
        oOwnerEmail.DataValue = "Tracey.Lindeque@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Shamilla August"
        oOwnerEmail.DataValue = "Shamilla.August@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Johan Van Tonder"
        oOwnerEmail.DataValue = "Johan.VanTonder@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Leon Engelbrecht"
        oOwnerEmail.DataValue = "Leon.Engelbrecht@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Mervin Pauls"
        oOwnerEmail.DataValue = "Mervin.Pauls@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Petro Welgemoed"
        oOwnerEmail.DataValue = "Petro.Welgemoed@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Neo Sebiyane"
        oOwnerEmail.DataValue = "Neo.Sebiyane@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Taznique Petersen"
        oOwnerEmail.DataValue = "Taznique.Petersen@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Daniel Lusse"
        oOwnerEmail.DataValue = "Daniel.Lusse@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Given Ramahala"
        oOwnerEmail.DataValue = "Given.Ramahala@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Byron Bowers"
        oOwnerEmail.DataValue = "Byron.Bowers@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Cheryl Simons"
        oOwnerEmail.DataValue = "Cheryl.Simons@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Lindsey McAslin"
        oOwnerEmail.DataValue = "Lindsey.McAslin@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Clarissa Coetzee"
        oOwnerEmail.DataValue = "Clarissa.Coetzee@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3250"
      when "Michael Muller"
        oOwnerEmail.DataValue = "michael.muller@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3182"
      when "Cole Smith"
        oOwnerEmail.DataValue = "Cole.Smith@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3334"
      when "Marnus Smith"
        oOwnerEmail.DataValue = "Marnus.Smith@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3224"
      when "Charl Hanekom"
        oOwnerEmail.DataValue = "Charl.Hanekom@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Damon Campbell"
        oOwnerEmail.DataValue = "Damon.Campbell@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3224"
      when "Muneer Saptoe"
        oOwnerEmail.DataValue = "Muneer.Saptoe@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3345"
      when "Stephanie Douwie"
        oOwnerEmail.DataValue = "Stephanie.Douwie@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3308"
      when "Verosha Rupnarain"
        oOwnerEmail.DataValue = "verosha.rupnarain@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3069"
      when "Nadine Moodley"
        oOwnerEmail.DataValue = "Nadine.Moodley@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Beulyne Adams"
        oOwnerEmail.DataValue = "Beulyne.Adams@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Yanga Mafuta"
        oOwnerEmail.DataValue = "Yanga.Mafuta@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Leonardo Hefer"
        oOwnerEmail.DataValue = "Leonardo.Hefer@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Jan Lombard"
        oOwnerEmail.DataValue = "Jan.Lombard@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Jill Murtagh"
        oOwnerEmail.DataValue = "Jill.Murtagh@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Victoria Manuel"
        oOwnerEmail.DataValue = "Victoria.Manuel@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Tshidi Masite"
        oOwnerEmail.DataValue = "Tshidi.Masite@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Mandy Lala"
        oOwnerEmail.DataValue = "Mandy.Lala@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Shoneez Ben"
        oOwnerEmail.DataValue = "Shoneez.Ben@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3311"
      when "Yonela Mafuta"
        oOwnerEmail.DataValue = "Yonela.Mafuta@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Monita Odendaal"
        oOwnerEmail.DataValue = "Monita.Odendaal@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Iris Busby"
        oOwnerEmail.DataValue = "iris.Busby@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3081"
      when "Charmaine Singh"
        oOwnerEmail.DataValue = "Charmaine.Singh@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3435"
      when "Ziad Moolla"
        oOwnerEmail.DataValue = "Ziad.Moolla@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3083"
      when "Innocentia Rampa"
        oOwnerEmail.DataValue = "innocentia.rampa@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3333"
      when "Tyler Ormandy"
        oOwnerEmail.DataValue = "Tyler.Ormandy@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3335"
      when "Amy Pillay"
        oOwnerEmail.DataValue = "Amy.Pillay@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3221"
      when "Motshidisi Shibambo"
        oOwnerEmail.DataValue = "Motshidisi.Shibambo@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3571"
      when "Ayanda Makhado"
        oOwnerEmail.DataValue = "ayanda.makhado@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 7309"
      when "Micael Van Heerden"
        oOwnerEmail.DataValue = "Micael.VanHeerden@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3563"
      when "Nonhlanhla Nyauza"
        oOwnerEmail.DataValue = "Nonhlanhla.Nyauza@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011-407 3000"
      when "Nadeema Vania"
        oOwnerEmail.DataValue = "Nadeema.Vania@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "0860 11 1177"
      when "Carl Gordon"
        oOwnerEmail.DataValue = "Carl.Gordon@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "0860 11 1177"
      when "Cassie Esterhuizen"
        oOwnerEmail.DataValue = "Cassie.Esterhuizen@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "0860 11 1177"
      when "Kogie Moodley"
        oOwnerEmail.DataValue = "Kogie.Moodley@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "0860 11 1177"
      when "Harold Van Eeden"
        oOwnerEmail.DataValue = "Harold.VanEeden@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "0860 11 1177"
      when "Louise Gouws"
        oOwnerEmail.DataValue = "Louise.Gouws@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "0860 11 1177"
      when "Raeesa Khan"
        oOwnerEmail.DataValue = "Raeesa.Khan@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "0860 11 1177"
      when "Morne van der Merwe"
        oOwnerEmail.DataValue = "Morne.vandermerwe@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3243"
      when "Juliet Mabote"
        oOwnerEmail.DataValue = "Juliet.Mabote@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3079"
      when "Maria Ramashia"
        oOwnerEmail.DataValue = "Maria.Ramashia@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3252"
      when "Firdoze Mahomed"
        oOwnerEmail.DataValue = "Firdoze.Mahomed@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3102"
      when "Eleanor Pillay"
        oOwnerEmail.DataValue = "Eleanor.Pillay@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Meeshana Mangru"
        oOwnerEmail.DataValue = "Meeshana.Mangru@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Thabiso Siswana"
        oOwnerEmail.DataValue = "Thabiso.Siswana@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Tebogo Tau"
        oOwnerEmail.DataValue = "Tebogo.Tau@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Princess Seripa"
        oOwnerEmail.DataValue = "Princess.Seripa@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Precious Seobi"
        oOwnerEmail.DataValue = "Precious.Seobi@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Jabulile Shongwe"
        oOwnerEmail.DataValue = "Jabulile.Shongwe@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Mathilene Henn"
        oOwnerEmail.DataValue = "Mathilene.Henn@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Lungu Mchunu"
        oOwnerEmail.DataValue = "Lungu.Mchunu@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Khensani Matjebe"
        oOwnerEmail.DataValue = "Khensani.Matjebe@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3000"
      when "Jacqui Gibb"
        oOwnerEmail.DataValue = "Jacqui.Gibb@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3320"
      when "Shamilla August"
        oOwnerEmail.DataValue = "Shamilla.August@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3034"
      when "Werner Goosen"
        oOwnerEmail.DataValue = "Werner.Goosen@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3031"
      when "Wendy Armstrong"
        oOwnerEmail.DataValue = "Wendy.Armstrong@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3185"
      when "Sherazaan Mia"
        oOwnerEmail.DataValue = "Sherazaan.Mia@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3081"
      when "Cameron May"
        oOwnerEmail.DataValue = "Cameron.May@bidvestbank.co.za"
        oOwnerDirectPhone.DataValue = "011 407 3571"
isp_acceptedowner_onchange = ->
  debugger
  if crmForm.all.isp_acceptedowner.DataValue is true
    crmForm.all.isp_acceptedowner.Disabled = 1
    crmForm.all.isp_escalationstatus.value = 1
    crmForm.all.isp_acceptedowner.ForceSubmit = true
    crmForm.all.isp_escalationstatus.ForceSubmit = true
  else
    crmForm.all.isp_acceptedowner.Disabled = 0
  return
isp_secondaryowner_onchange = ->
  if crmForm.all.isp_secondaryowner.SelectedText is "Colleen Prinsloo"
    crmForm.all.isp_secowneremail.DataValue = "anotheremail@gmail.com"
  else
    crmForm.all.isp_secowneremail.Disabled = 0
  return
isp_acceptedsecowner_onchange = ->
  debugger
  if crmForm.all.isp_acceptedsecowner.DataValue is true
    crmForm.all.isp_acceptedsecowner.Disabled = 1
    crmForm.all.isp_escalationstatus.value = 2
    crmForm.all.isp_acceptedsecowner.ForceSubmit = true
    crmForm.all.isp_escalationstatus.ForceSubmit = true
  else
    crmForm.all.isp_acceptedsecowner.Disabled = 0
  return
isp_reassign_onchange = ->
  debugger
  strReAssign = crmForm.all.isp_reassign
  if strReAssign.DataValue?
    switch strReAssign.SelectedText
      when "Yes"
        crmForm.all.isp_1stowner.DataValue = crmForm.all.isp_owner.SelectedText
        crmForm.all.isp_owner.DataValue = ""
        crmForm.all.isp_owner.Disabled = 0
        crmForm.all.isp_reassign.Disabled = 1
        crmForm.all.statuscode.DataValue = 200003
isp_acceptedmanager_onchange = ->
  debugger
  if crmForm.all.isp_acceptedmanager.DataValue is true
    crmForm.all.isp_acceptedmanager.Disabled = 1
    crmForm.all.isp_escalationstatus.value = 3
    crmForm.all.isp_acceptedmanager.ForceSubmit = true
    crmForm.all.isp_escalationstatus.ForceSubmit = true
  else
    crmForm.all.isp_acceptedmanager.Disabled = 0
  return
isp_productcatagory_onchange = ->
  iIndexNew = -1
  iEndIndex = -1
  switch productcatagory.DataValue
    when "1"
      iIndexNew = 1
    when "2"
      iIndexNew = 0
  product.Options = productbackup.originalPicklistOptions
  iEndIndex = crmForm.all.isp_product.Options.length
  if iIndexNew > -1 and iEndIndex > -1
    oTempArray = new Array()
    iIndex = 0
    iTempValue = 0
    i = 0

    while i <= iEndIndex - 1
      if product.Options[i].DataValue is 0
        oTempArray[iIndex] = product.originalPicklistOptions[i]
        iIndex++
      else if product.Options[i].DataValue % 2 is iIndexNew
        oTempArray[iIndex] = product.originalPicklistOptions[i]
        iIndex++
      i++
    product.Options = oTempArray
    product.Disabled = false
    crmForm.SetFieldReqLevel "isp_product", 2
  else
    product.DataValue = null
    product.Disabled = true
    crmForm.SetFieldReqLevel "isp_product", 0
  return
FrmOnSave = (prmContext) ->
  
  # Local variable to store value indicating how the save event was initiated by the user.
  wod_SaveMode = undefined
  wod_SaveEventVal = undefined
  Dresolved = crmForm.all.isp_dateresolved.DataValue
  Tdays = crmForm.all.isp_totaldays.DataValue
  BError = crmForm.all.isp_bankerror.DataValue
  
  # Change the Save Event Value as per required Save Event
  wod_SaveEventVal = 5
  if prmContext? and prmContext.getEventArgs()?
    wod_SaveMode = prmContext.getEventArgs().getSaveMode()
    
    # 1 will pass on Recalculate button click
    if wod_SaveMode is wod_SaveEventVal
      unless Dresolved?
        alert "Please Complete Date Resolved"
        crmForm.all.isp_dateresolved.SetFocus()
        if BError is "1"
          crmForm.SetFieldReqLevel "isp_potentialloss", 1
          crmForm.SetFieldReqLevel "isp_actualloss", 1
          crmForm.SetFieldReqLevel "isp_numberofswiftmessagessent", 1
          crmForm.SetFieldReqLevel "isp_numberofswiftmessagesreceived", 1
          crmForm.SetFieldReqLevel "isp_potentiallossccy", 1
          crmForm.SetFieldReqLevel "isp_actuallossccy", 1
          crmForm.SetFieldReqLevel "isp_comments", 1
        
        # Use the code line below only if validation is failed then abort function save event
        prmContext.getEventArgs().preventDefault()
  return
prioritycode_onchange = ->
  TODAY = undefined
  TODAY = new Date()
  Pcode = crmForm.all.prioritycode.DataValue
  if Pcode is "3"
    TODAY.setDate TODAY.getDate() + 3
    crmForm.all.followupby.DataValue = TODAY
  else if Pcode is "2"
    TODAY.setDate TODAY.getDate() + 2
    crmForm.all.followupby.DataValue = TODAY
  else
    TODAY.setDate TODAY.getDate() + 1
    crmForm.all.followupby.DataValue = TODAY
  return
statuscode_onchange = ->
  crmForm.all.prioritycode.DataValue = null
  return

# crmForm.SetFieldReqLevel("prioritycode", 1);
owner_onchange = ->
  crmForm.all.prioritycode.DataValue = null
  return
isp_reasign_onchange = ->
  crmForm.all.prioritycode.DataValue = null
  return
isp_acceptedowner_onchange = ->
  crmForm.all.prioritycode.DataValue = null
  return
isp_outstandingdocumentation_onchange = ->
  if crmForm.all.isp_outstandingdocumentation.DataValue is "1"
    Xrm.Page.ui.tabs.get("tab_4").setVisible true
  else
    Xrm.Page.ui.tabs.get("tab_4").setVisible false
  return
isp_bankerror_onchange = ->
  if (crmForm.all.isp_bankerror.DataValue is "1") and (crmForm.all.isp_subdepartment.DataValue is "33" or crmForm.all.isp_subdepartment.DataValue is "70" or crmForm.all.isp_subdepartment.DataValue is "4" or crmForm.all.isp_subdepartment.DataValue is "6")
    Xrm.Page.ui.tabs.get("tab_5").setVisible true
  else
    Xrm.Page.ui.tabs.get("tab_5").setVisible false
  return
loadsubdept = ->
  
  # * **********************************************************************
  # ** Purpose:
  # **
  # ** Only show certain Statuses
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  # text values correspond to the picklist values in the 'Status' field
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oStatCode.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oStatCode[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oStatCode.length

    while i >= 0
      oStatCode.remove i  unless oTempArray[i] is true
      i--
    return
  oSubDept1 = crmForm.all.isp_subdepartment
  oStatCode = crmForm.all.statuscode
  unless oStatCode.originalPicklistValues
    oStatCode.originalPicklistValues = oStatCode.Options
  else
    oStatCode.Options = oStatCode.originalPicklistValues
  oArrayCorporateQuery1 = new Array()
  oArrayRetailQuery1 = new Array()
  oArrayBOQueriesQuery1 = new Array()
  oArrayAutoRetailQuery1 = new Array()
  oArrayCorporateQuery1.push 0, 100000000, 100000013, 100000001, 100000002, 100000003, 100000004, 100000005, 100000006, 100000007, 100000008, 100000009, 100000010, 100000011, 100000012
  oArrayRetailQuery1.push 0, 100000000, 100000013, 100000001, 100000002, 100000003, 100000004, 100000005, 100000006, 100000007, 100000008, 100000009, 100000010, 100000011, 100000012
  oArrayBOQueriesQuery1.push 0, 100000000, 100000013, 100000001, 100000002, 100000003, 100000004, 100000005, 100000006, 100000007, 100000008, 100000009, 100000010, 100000011, 100000012
  oArrayAutoRetailQuery1.push 0, 100000000, 100000013, 100000001, 100000002, 100000003, 100000004, 100000005, 100000006, 100000007, 100000008, 100000009, 100000010, 100000011, 100000012
  if oSubDept1.DataValue?
    switch oSubDept1.SelectedText
      when "Corporate"
        filterPicklist oArrayCorporateQuery1
      when "Retail"
        filterPicklist oArrayRetailQuery1
      when "Automated: BO Queries"
        filterPicklist oArrayRetailQuery1
      when "Automated: Retail Queries"
        filterPicklist oArrayRetailQuery1
  return
Status_onchange = ->
  
  # ************************************************************************
  # ** Purpose:
  # **
  # ** Only show certain Statuses
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  # text values correspond to the picklist values in the 'Status' field
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oStatCode.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oStatCode[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oStatCode.length

    while i >= 0
      oStatCode.remove i  unless oTempArray[i] is true
      i--
    return
  oSubDept1 = crmForm.all.isp_subdepartment
  oStatCode = crmForm.all.statuscode
  unless oStatCode.originalPicklistValues
    oStatCode.originalPicklistValues = oStatCode.Options
  else
    oStatCode.Options = oStatCode.originalPicklistValues
  oArrayCorporateQuery1 = new Array()
  oArrayRetailQuery1 = new Array()
  oArrayBOQueriesQuery1 = new Array()
  oArrayAutoRetailQuery1 = new Array()
  oArrayCorporateQuery1.push 0, 100000000, 100000013, 100000001, 100000002, 100000003, 100000004, 100000005, 100000006, 100000007, 100000008, 100000009, 100000010, 100000011, 100000012
  oArrayRetailQuery1.push 0, 100000000, 100000013, 100000001, 100000002, 100000003, 100000004, 100000005, 100000006, 100000007, 100000008, 100000009, 100000010, 100000011, 100000012
  oArrayBOQueriesQuery1.push 0, 100000000, 100000013, 100000001, 100000002, 100000003, 100000004, 100000005, 100000006, 100000007, 100000008, 100000009, 100000010, 100000011, 100000012
  oArrayAutoRetailQuery1.push 0, 100000000, 100000013, 100000001, 100000002, 100000003, 100000004, 100000005, 100000006, 100000007, 100000008, 100000009, 100000010, 100000011, 100000012
  if oSubDept1.DataValue?
    switch oSubDept1.SelectedText
      when "Corporate"
        filterPicklist oArrayCorporateQuery1
      when "Retail"
        filterPicklist oArrayRetailQuery1
      when "Automated: BO Queries"
        filterPicklist oArrayRetailQuery1
      when "Automated: Retail Queries"
        filterPicklist oArrayRetailQuery1
  return
loadCustcategory = ->
  
  # ************************************************************************
  # ** Purpose:
  # **
  # ** Only show certain Customer Categories
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  # text values correspond to the picklist values in the 'nature of problem' field
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oCustCat.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oCustCat[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oCustCat.length

    while i >= 0
      oCustCat.remove i  unless oTempArray[i] is true
      i--
    return
  oSubDepart = crmForm.all.isp_subdepartment
  oCustCat = crmForm.all.isp_category
  unless oCustCat.originalPicklistValues
    oCustCat.originalPicklistValues = oCustCat.Options
  else
    oCustCat.Options = oCustCat.originalPicklistValues
  oArrayCashkows = new Array()
  oArrayAutoCashkows = new Array()
  oArrayCashkows.push 0, 36, 37, 38, 39, 40
  oArrayAutoCashkows.push 0, 36, 37, 38, 39, 40
  if oSubDepart.DataValue?
    switch oSubDepart.SelectedText
      when "Cashkow Queries"
        filterPicklist oArrayCashkows
      when "Automated: CashKows Queries"
        filterPicklist oArrayAutoCashkows
  return
SubDeptCategory_onchange = ->
  
  # ************************************************************************
  # ** Purpose:
  # **
  # ** Only show certain Customer Categories
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  # text values correspond to the picklist values in the 'nature of problem' field
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oCustCat.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oCustCat[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oCustCat.length

    while i >= 0
      oCustCat.remove i  unless oTempArray[i] is true
      i--
    return
  oSubDepart = crmForm.all.isp_subdepartment
  oCustCat = crmForm.all.isp_category
  unless oCustCat.originalPicklistValues
    oCustCat.originalPicklistValues = oCustCat.Options
  else
    oCustCat.Options = oCustCat.originalPicklistValues
  oArrayCashkows = new Array()
  oArrayAutoCashkows = new Array()
  oArrayCashkows.push 0, 36, 37, 38, 39, 40
  oArrayAutoCashkows.push 0, 36, 37, 38, 39, 40
  if oSubDepart.DataValue?
    switch oSubDepart.SelectedText
      when "Cashkow Queries"
        filterPicklist oArrayCashkows
      when "Automated: CashKows Queries"
        filterPicklist oArrayAutoCashkows
  return
loadQuerycategory = ->
  
  # ************************************************************************
  # ** Purpose:
  # **
  # ** Only show certain Query Categories
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  # text values correspond to the picklist values in the 'nature of problem' field
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oQCat.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oQCat[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oQCat.length

    while i >= 0
      oQCat.remove i  unless oTempArray[i] is true
      i--
    return
  oSubDepart2 = crmForm.all.isp_subdepartment
  oQCat = crmForm.all.isp_querycategory
  unless oQCat.originalPicklistValues
    oQCat.originalPicklistValues = oQCat.Options
  else
    oQCat.Options = oQCat.originalPicklistValues
  oArrayCashkows1 = new Array()
  oArrayAutoCashkows1 = new Array()
  oArrayCashkows1.push 0, 7, 25, 46, 27, 1, 2, 13, 14, 47
  oArrayAutoCashkows1.push 0, 7, 25, 46, 27, 1, 2, 13, 14, 47
  if oSubDepart2.DataValue?
    switch oSubDepart2.SelectedText
      when "Cashkow Queries"
        filterPicklist oArrayCashkows1
      when "Automated: CashKows Queries"
        filterPicklist oArrayAutoCashkows1
  return
SubDeptQCategory_onchange = ->
  
  # ************************************************************************
  # ** Purpose:
  # **
  # ** Only show certain Query Categories
  # **
  # ************************************************************************
  #set references to our fields
  
  # keep a copy of the original options and reset the picklist before we start firking about
  
  # create an array to hold the required picklist values for each category
  
  # text values correspond to the picklist values in the 'nature of problem' field
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  # *** No more editing *** //
  
  # Now call the appropriate filtering parameters
  # the values in each "case" clause refer to the text in the category dropdown
  filterPicklist = (oDesiredOptions) ->
    oTempArray = new Array()
    
    # loop through all items in the master list
    i = oQCat.length - 1

    while i >= 0
      
      # if the option value is in the list of desired values for this foodgroup
      # then add the option to our temp array and remove the
      # item from the desired option array
      j = oDesiredOptions.length
      while j >= 0
        if oQCat[i].value is oDesiredOptions[j]
          oTempArray[i] = true
          oDesiredOptions.splice j, 1
        j--
      i--
    
    # Now remove all options from the master list that were not marked as required
    i = oQCat.length

    while i >= 0
      oQCat.remove i  unless oTempArray[i] is true
      i--
    return
  oSubDepart2 = crmForm.all.isp_subdepartment
  oQCat = crmForm.all.isp_querycategory
  unless oQCat.originalPicklistValues
    oQCat.originalPicklistValues = oQCat.Options
  else
    oQCat.Options = oQCat.originalPicklistValues
  oArrayCashkows1 = new Array()
  oArrayAutoCashkows1 = new Array()
  oArrayCashkows1.push 0, 7, 25, 46, 27, 1, 2, 13, 14, 47
  oArrayAutoCashkows1.push 0, 7, 25, 46, 27, 1, 2, 13, 14, 47
  if oSubDepart2.DataValue?
    switch oSubDepart2.SelectedText
      when "Cashkow Queries"
        filterPicklist oArrayCashkows1
      when "Automated: CashKows Queries"
        filterPicklist oArrayAutoCashkows1
  return