IFRAME_DMS_Documents_onload = ->
Form_onload = ->
  debugger
  Xrm.Page.ui.tabs.get("tab_4").setVisible false  if Xrm.Page.getAttribute("isp_outstandingdocumentation").getValue() is "0"
  Xrm.Page.ui.tabs.get("tab_5").setVisible false  if Xrm.Page.getAttribute("isp_bankerror").getValue() is "0"
  OpicsId = Xrm.Page.getAttribute("isp_opicsref").getValue()
  if not OpicsId? or OpicsId is "" or OpicsId is " "
    document.all.IFRAME_DMS_Documents.src = "about:blank"
  else
    document.all.IFRAME_DMS_Documents.src = "http://jhbh-srv-dms01/CrmCounts/CorporateTelegrahicTransfers.aspx?OpicsDealNumber=" + OpicsId
  loadsubdept()
  loadnature()
  loadCustcategory()
  loadQuerycategory()
  
  #onLoad event of Customer Feedback form
  if Xrm.Page.ui.getFormType() is 1
    
    # Only make these changes when the form is opened in Create mode.
    TODAY = undefined
    TODAY = new Date()
    
    # Set Follow Up By Date to today + 1
    TODAY.setDate TODAY.getDate() + 1
    Xrm.Page.getAttribute("followupby").setValue TODAY
    
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
    Xrm.Page.title.setAttribute "req", 0
    Xrm.Page.title_c.className = "n"
    Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
    Xrm.Page.subjectid.setAttribute "req", 0
    Xrm.Page.subjectid_c.className = "n"
    Xrm.Page.subjectid_c.innerHTML = Xrm.Page.subjectid_c.innerText
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
  if Xrm.Page.ui.getFormType() is 2
    oDepartmentValue = Xrm.Page.getAttribute("isp_department")
    if oDepartmentValue.getValue()?
      switch oDepartmentValue.getSelectedOption().text
        when "I.T Procurement"
          document.all.isp_staffid_d.style.visibility = ""
          document.all.isp_staffid_c.style.visibility = ""
          document.all.isp_requestedbyemail_d.style.visibility = ""
          document.all.isp_requestedbyemail_c.style.visibility = ""
          Xrm.Page.isp_requestedbyemail.Disabled = 1
          document.all.isp_descriptionofproblem_d.style.visibility = ""
          document.all.isp_descriptionofproblem_c.style.visibility = ""
          document.all.isp_queryby_c.style.visibility = "hidden"
          document.all.isp_queryby_d.style.visibility = "hidden"
          
          #This section will make the Action Needed field not required and hidden
          Xrm.Page.isp_queryby.setAttribute "req", 0
          Xrm.Page.isp_queryby_c.className = "n"
          Xrm.Page.isp_queryby_c.innerHTML = Xrm.Page.isp_queryby_c.innerText
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
          Xrm.Page.isp_allowclosedemail.setAttribute "req", 0
          Xrm.Page.isp_allowclosedemail_c.className = "n"
          Xrm.Page.isp_allowclosedemail_c.innerHTML = Xrm.Page.isp_allowclosedemail_c.innerText
          document.all.isp_allowclosedemail_c.style.visibility = "hidden"
          document.all.isp_allowclosedemail_d.style.visibility = "hidden"
          
          #This section will make the Nature of Problem field not required and hidden
          Xrm.Page.isp_natureofproblem.setAttribute "req", 0
          Xrm.Page.isp_natureofproblem_c.className = "n"
          Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
          document.all.isp_natureofproblem_c.style.visibility = "hidden"
          document.all.isp_natureofproblem_d.style.visibility = "hidden"
          
          #This section will bring up the Description of the Case to be filled in by the person logging the request
          Xrm.Page.title.setAttribute "req", 0
          Xrm.Page.title_c.className = "n"
          Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          Xrm.Page.subjectid.setAttribute "req", 0
          Xrm.Page.subjectid_c.className = "n"
          Xrm.Page.subjectid_c.innerHTML = Xrm.Page.subjectid_c.innerText
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
          Xrm.Page.isp_querycategory.setAttribute "req", 0
          Xrm.Page.isp_querycategory_c.className = "n"
          Xrm.Page.isp_querycategory_c.innerHTML = Xrm.Page.isp_querycategory_c.innerText
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
          
          #This section will make the description field not required, and also hide this field
          Xrm.Page.title.setAttribute "req", 0
          Xrm.Page.title_c.className = "n"
          Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          Xrm.Page.subjectid.setAttribute "req", 0
          Xrm.Page.subjectid_c.className = "n"
          Xrm.Page.subjectid_c.innerHTML = Xrm.Page.subjectid_c.innerText
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
          Xrm.Page.isp_queryby.setAttribute "req", 0
          Xrm.Page.isp_queryby_c.className = "n"
          Xrm.Page.isp_queryby_c.innerHTML = Xrm.Page.isp_queryby_c.innerText
          Xrm.Page.isp_natureofproblem.setAttribute "req", 0
          Xrm.Page.isp_natureofproblem_c.className = "n"
          Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
          Xrm.Page.isp_sendemailwithrefno.Disabled = 1
          Xrm.Page.getAttribute("isp_sendemailwithrefno").setSubmitMode "always"
          document.all.isp_1stowner_d.style.visibility = "hidden"
          document.all.isp_1stowner_c.style.visibility = "hidden"
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
        when "Fleet and Finance"
          document.all.isp_staffid_d.style.visibility = ""
          document.all.isp_staffid_c.style.visibility = ""
          document.all.isp_requestedbyemail_d.style.visibility = ""
          document.all.isp_requestedbyemail_c.style.visibility = ""
          Xrm.Page.isp_requestedbyemail.Disabled = 1
          document.all.isp_descriptionofproblem_d.style.visibility = ""
          document.all.isp_descriptionofproblem_c.style.visibility = ""
          
          #If the Department is I.T Procurement, the Customer field will become not required
          document.all.isp_queryby_c.style.visibility = "hidden"
          document.all.isp_queryby_d.style.visibility = "hidden"
          
          #This section will make the Action Needed field not required and hidden
          Xrm.Page.isp_queryby.setAttribute "req", 0
          Xrm.Page.isp_queryby_c.className = "n"
          Xrm.Page.isp_queryby_c.innerHTML = Xrm.Page.isp_queryby_c.innerText
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
          Xrm.Page.isp_allowclosedemail.setAttribute "req", 0
          Xrm.Page.isp_allowclosedemail_c.className = "n"
          Xrm.Page.isp_allowclosedemail_c.innerHTML = Xrm.Page.isp_allowclosedemail_c.innerText
          document.all.isp_allowclosedemail_c.style.visibility = "hidden"
          document.all.isp_allowclosedemail_d.style.visibility = "hidden"
          
          #This section will make the Nature of Problem field not required and hidden
          Xrm.Page.isp_natureofproblem.setAttribute "req", 0
          Xrm.Page.isp_natureofproblem_c.className = "n"
          Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
          document.all.isp_natureofproblem_c.style.visibility = ""
          document.all.isp_natureofproblem_d.style.visibility = ""
          
          #This section will bring up the Description of the Case to be filled in by the person logging the request
          Xrm.Page.title.setAttribute "req", 0
          Xrm.Page.title_c.className = "n"
          Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          Xrm.Page.subjectid.setAttribute "req", 0
          Xrm.Page.subjectid_c.className = "n"
          Xrm.Page.subjectid_c.innerHTML = Xrm.Page.subjectid_c.innerText
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
          Xrm.Page.getAttribute("casetypecode").setValue 200001
          Xrm.Page.getAttribute("caseorigincode").setValue 2
          document.all.isp_descriptionofproblem_d.style.visibility = ""
          document.all.isp_descriptionofproblem_c.style.visibility = ""
          
          #If the Department is I.T Procurement, the Customer field will become not required
          Xrm.Page.customerid.Disabled = 1
          Xrm.Page.customerid.setAttribute "req", 0
          Xrm.Page.customerid_c.className = "n"
          Xrm.Page.customerid_c.innerHTML = Xrm.Page.customerid_c.innerText
          document.all.customerid_c.style.visibility = "hidden"
          document.all.customerid_d.style.visibility = "hidden"
          
          #This section will make the Action Needed field not required and hidden
          Xrm.Page.isp_queryby.setAttribute "req", 0
          Xrm.Page.isp_queryby_c.className = "n"
          Xrm.Page.isp_queryby_c.innerHTML = Xrm.Page.isp_queryby_c.innerText
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
          
          #This section will make the Nature of Problem field not required and hidden
          Xrm.Page.isp_natureofproblem.setAttribute "req", 0
          Xrm.Page.isp_natureofproblem_c.className = "n"
          Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
          document.all.isp_natureofproblem_c.style.visibility = "hidden"
          document.all.isp_natureofproblem_d.style.visibility = "hidden"
          
          #This section will bring up the Description of the Case to be filled in by the person logging the request
          Xrm.Page.title.setAttribute "req", 0
          Xrm.Page.title_c.className = "n"
          Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
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
          Xrm.Page.title.setAttribute "req", 0
          Xrm.Page.title_c.className = "n"
          Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          Xrm.Page.subjectid.setAttribute "req", 0
          Xrm.Page.subjectid_c.className = "n"
          Xrm.Page.subjectid_c.innerHTML = Xrm.Page.subjectid_c.innerText
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
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
          document.all.isp_category_d.style.visibility = "hidden"
          document.all.isp_category_c.style.visibility = "hidden"
          
          #This section will make the Query Category field not required and hidden
          Xrm.Page.isp_querycategory.setAttribute "req", 0
          Xrm.Page.isp_querycategory_c.className = "n"
          Xrm.Page.isp_querycategory_c.innerHTML = Xrm.Page.isp_querycategory_c.innerText
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
          Xrm.Page.title.setAttribute "req", 0
          Xrm.Page.title_c.className = "n"
          Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          Xrm.Page.subjectid.setAttribute "req", 0
          Xrm.Page.subjectid_c.className = "n"
          Xrm.Page.subjectid_c.innerHTML = Xrm.Page.subjectid_c.innerText
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
          document.all.isp_timesreassigned_d.style.visibility = "hidden"
          document.all.isp_timesreassigned_c.style.visibility = "hidden"
          document.all.isp_category_d.style.visibility = "hidden"
          document.all.isp_category_c.style.visibility = "hidden"
          
          #This section will make the Nature of Problem field not required and hidden
          Xrm.Page.isp_natureofproblem.setAttribute "req", 0
          Xrm.Page.isp_natureofproblem_c.className = "n"
          Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
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
          Xrm.Page.title.setAttribute "req", 0
          Xrm.Page.title_c.className = "n"
          Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          Xrm.Page.subjectid.setAttribute "req", 0
          Xrm.Page.subjectid_c.className = "n"
          Xrm.Page.subjectid_c.innerHTML = Xrm.Page.subjectid_c.innerText
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
          Xrm.Page.isp_natureofproblem.setAttribute "req", 0
          Xrm.Page.isp_natureofproblem_c.className = "n"
          Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
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
          Xrm.Page.title.setAttribute "req", 0
          Xrm.Page.title_c.className = "n"
          Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          Xrm.Page.subjectid.setAttribute "req", 0
          Xrm.Page.subjectid_c.className = "n"
          Xrm.Page.subjectid_c.innerHTML = Xrm.Page.subjectid_c.innerText
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
          Xrm.Page.title.setAttribute "req", 0
          Xrm.Page.title_c.className = "n"
          Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
          document.all.title_d.style.visibility = "hidden"
          document.all.title_c.style.visibility = "hidden"
          Xrm.Page.subjectid.setAttribute "req", 0
          Xrm.Page.subjectid_c.className = "n"
          Xrm.Page.subjectid_c.innerHTML = Xrm.Page.subjectid_c.innerText
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
  strEscalationStatus = Xrm.Page.getAttribute("isp_escalationstatus")
  if strEscalationStatus.getValue()?
    switch strEscalationStatus.getSelectedOption().text
      when "Stage1"
        Xrm.Page.isp_acceptedowner.Disabled = 1
      when "Stage2"
        Xrm.Page.isp_acceptedsecowner.Disabled = 1
        Xrm.Page.isp_acceptedowner.Disabled = 1
      when "Stage3"
        Xrm.Page.isp_acceptedmanager.Disabled = 1
        Xrm.Page.isp_acceptedsecowner.Disabled = 1
        Xrm.Page.isp_acceptedowner.Disabled = 1
  if Xrm.Page.ui.getFormType() is 4
    strStatus = Xrm.Page.getAttribute("statuscode")
    dtResolvedDate = Xrm.Page.getAttribute("isp_dateresolved")
    if strStatus.getValue()?
      switch strStatus.getSelectedOption().text
        when "Problem Solved"
          if dtResolvedDate.getValue()?
            one_day = 1000 * 60 * 60
            StartDate = Xrm.Page.getAttribute("createdon").getValue()
            EndDate = Xrm.Page.getAttribute("isp_dateresolved").getValue()
            oAlert = Math.ceil((EndDate.getTime() - StartDate.getTime()) / (one_day))
            Xrm.Page.getAttribute("isp_totaltime").setValue oAlert
            Xrm.Page.getAttribute("isp_totaldays").getValue() = Xrm.Page.getAttribute("isp_totaltime").getValue() / 24
            break
            unless dtResolvedDate.getValue()?
              alert "The Resolved Date for this Customer Feedback was never calculated, please click ok and continue"
              break
  return
Form_onsave = ->
  
  #onSave event of Customer Feedback form
  # Perform this work only on Create
  if Xrm.Page.ui.getFormType() is 1
    
    #This section will update the Owner Email Field when a value gets updated in this field. this event
    #is fired with the OnChange event of the isp_owner field in the Escalation Trail.
    oOwner = Xrm.Page.getAttribute("isp_owner")
    oOwnerEmail = Xrm.Page.getAttribute("isp_owneremail")
    oOwnerDirectPhone = Xrm.Page.getAttribute("isp_ownerdirectphone")
    oSecOwner = Xrm.Page.getAttribute("isp_secondaryowner")
    oSecOwnerEmail = Xrm.Page.getAttribute("isp_secowneremail")
    oSecOwnerDirectPhone = Xrm.Page.getAttribute("isp_secownerdirectphone")
    oDeptMan = Xrm.Page.getAttribute("isp_departmentmanager")
    oDeptManEmail = Xrm.Page.getAttribute("isp_depmanemail")
    oDepManDirectPhone = Xrm.Page.getAttribute("isp_depmandirectphone")
    strEscalationStatus = Xrm.Page.getAttribute("isp_escalationstatus")
    if strEscalationStatus.getValue()?
      switch strEscalationStatus.getSelectedOption().text
        when "Stage1"
          Xrm.Page.isp_acceptedowner.Disabled = 1
          Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode "always"
        when "Stage2"
          Xrm.Page.isp_acceptedsecowner.Disabled = 1
          Xrm.Page.isp_acceptedowner.Disabled = 1
          Xrm.Page.getAttribute("isp_acceptedsecowner").setSubmitMode "always"
          Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode "always"
        when "Stage3"
          Xrm.Page.isp_acceptedmanager.Disabled = 1
          Xrm.Page.isp_acceptedsecowner.Disabled = 1
          Xrm.Page.isp_acceptedowner.Disabled = 1
          Xrm.Page.getAttribute("isp_acceptedmanager").setSubmitMode "always"
          Xrm.Page.getAttribute("isp_acceptedsecowner").setSubmitMode "always"
          Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode "always"
    if oOwner.getValue()?
      switch oOwner.getSelectedOption().text
        when "Barbara Turner"
          oOwnerEmail.setValue "morne.vandermerwe@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "021-431 7913"
        when "Debbie Perry"
          oOwnerEmail.setValue "morne.vandermerwe@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "031-307 2625"
        when "Shamilla August"
          oOwnerEmail.setValue "Shamilla.August@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3034"
        when "Juliet Mabote "
          oOwnerEmail.setValue "Juliet.Mabote@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3079"
        when "Maria Ramashia"
          oOwnerEmail.setValue "Maria.Ramashia@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3252"
        when "Marise Petersen"
          oOwnerEmail.setValue "Marise.Petersen@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3055"
        when "Eleanor Pillay"
          oOwnerEmail.setValue "Eleanor.Pillay@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Meeshana Mangru"
          oOwnerEmail.setValue "Meeshana.Mangru@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Thabiso Siswana"
          oOwnerEmail.setValue "Thabiso.Siswana@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Tebogo Tau"
          oOwnerEmail.setValue "Tebogo.Tau@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Princess Seripa"
          oOwnerEmail.setValue "Princess.Seripa@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Precious Seobi"
          oOwnerEmail.setValue "Precious.Seobi@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Jabulile Shongwe"
          oOwnerEmail.setValue "Jabulile.Shongwe@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Mathilene Henn"
          oOwnerEmail.setValue "Mathilene.Henn@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Lungu Mchunu"
          oOwnerEmail.setValue "Lungu.Mchunu@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Khensani Matjebe"
          oOwnerEmail.setValue "Khensani.Matjebe@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Werner Goosen"
          oOwnerEmail.setValue "Werner.Goosen@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3031"
        when "Wendy Armstrong"
          oOwnerEmail.setValue "Wendy.Armstrong@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3185"
        when "Sherazaan Mia"
          oOwnerEmail.setValue "Sherazaan.Mia@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3081"
        when "Jacqui Gibb"
          oOwnerEmail.setValue "Jacqui.Gibb@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3320"
        when "Cameron May"
          oOwnerEmail.setValue "Cameron.May@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3571"
        when "Thashnee Pillay"
          oOwnerEmail.setValue "Thashnee.Pillay@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3601"
        when "Nadine Moodley"
          oOwnerEmail.setValue "Nadine.Moodley@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3000"
        when "Talent Kubheka"
          oOwnerEmail.setValue "Talent.Kubheka@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3249"
        when "Amy Pillay"
          oOwnerEmail.setValue "Amy.Pillay@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3221"
        when "Christiaan Oldewage"
          oOwnerEmail.setValue "Christiaan.Oldewage@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3206"
        when "Roy Minton"
          oOwnerEmail.setValue "Roy.Minton@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3228"
        when "Bileen Jackson"
          oOwnerEmail.setValue "Bileen.Jackson@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3435"
        when "Gavin Sullivan"
          oOwnerEmail.setValue "Gavin.Sullivan@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "021 431 7718"
        when "Melanie Browne"
          oOwnerEmail.setValue "Melanie.Browne@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3623"
        when "Ashleigh Khoury"
          oOwnerEmail.setValue "Ashleigh.Khoury@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3290"
        when "Iris Busby"
          oOwnerEmail.setValue "iris.Busby@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011-407 3081"
        when "Charmaine Singh"
          oOwnerEmail.setValue "Charmaine.Singh@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011-407 3435"
        when "Ziad Moolla"
          oOwnerEmail.setValue "Ziad.Moolla@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011-407 3083"
        when "Innocentia Rampa"
          oOwnerEmail.setValue "innocentia.rampa@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011-407 3333"
        when "Tyler Ormandy"
          oOwnerEmail.setValue "Tyler.Ormandy@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011-407 3335"
        when "Shoneez Ben"
          oOwnerEmail.setValue "Shoneez.Ben@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011-407 3311"
        when "Gareth Robinson"
          oOwnerEmail.setValue "Gareth.Robinson@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3214"
        when "Motshidisi Shibambo"
          oOwnerEmail.setValue "Motshidisi.Shibambo@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3571"
        when "Ayanda Makhado"
          oOwnerEmail.setValue "ayanda.makhado@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 7309"
        when "Micael Van Heerden"
          oOwnerEmail.setValue "Micael.VanHeerden@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3563"
        when "Bileen Jackson"
          oOwnerEmail.setValue "bileen.jackson@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3435"
        when "Moleti Moime"
          oOwnerEmail.setValue "Moleti.Moime@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3573"
        when "Fritz Klee"
          oOwnerEmail.setValue "Fritz.Klee@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3573"
        when "Bianca Chutumia"
          oOwnerEmail.setValue "Bianca.Chutumia@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3254"
        when "Delores Cornelius"
          oOwnerEmail.setValue "Delores.Cornelius@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3318"
        when "Tebogo Makgwana"
          oOwnerEmail.setValue "Tebogo.Makgwana@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3075"
        when "Jan Lombard"
          oOwnerEmail.setValue "Jan Lombard@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3216"
        when "Anish Daya"
          oOwnerEmail.setValue "Anish.Daya@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3337"
        when "Naomi Van Schalkwyk"
          oSecOwnerEmail.setValue "naomi.vanschalkwyk@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011-407 3044"
        when "Jacqueline Durgapersad"
          oOwnerEmail.setValue "Jacqueline.Durgapersad@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "021 940 2152"
        when "Craig Petersen"
          oOwnerEmail.setValue "Craig.Petersen@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "021 940 2152"
        when "Racqual Faro"
          oOwnerEmail.setValue "Racqual.Faro@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "022 703 3537"
        when "Karen Pillay"
          oOwnerEmail.setValue "Karen.Pillay@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3602"
        when "Lucinda van Heerden"
          oOwnerEmail.setValue "Lucinda.vanHeerden@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3606"
        when "Xoliswa Mashaba"
          oOwnerEmail.setValue "Xoliswa.Mashaba@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3607"
        when "Annemarie Kock"
          oOwnerEmail.setValue "Annemarie.Kock@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "031 361 5887"
        when "Riva Naicker"
          oOwnerEmail.setValue "Riva.Naicker@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "031 361 5887"
        when "Loshni Naidoo"
          oOwnerEmail.setValue "Loshni.Naidoo@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "035 906 7725"
        when "Desire Kruger"
          oOwnerEmail.setValue "Desire.Kruger@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "035 906 7725"
        when "Kevan Pillay"
          oOwnerEmail.setValue "Kevan.Pillay@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "035 906 7725"
        when "Sharendra Chedie"
          oOwnerEmail.setValue "Sharendra.Chedie@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "036 271 2120"
        when "Joanne van der Merwe"
          oOwnerEmail.setValue "Joanne.vanderMerwe@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "041 507 2622"
        when "Tracy Uys"
          oOwnerEmail.setValue "Tracy.Uys@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "053 841 0846"
        when "Vee Van der Merwe"
          oOwnerEmail.setValue "Vee.VanderMerwe@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "021 431 7705"
        when "Marie van Der Berg"
          oOwnerEmail.setValue "Marie.vanDerBerg@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "051 408 2014"
        when "meggan fensham"
          oOwnerEmail.setValue "meggan.fensham@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3143"
        when "Frances Kruger"
          oOwnerEmail.setValue "Frances.Kruger@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "031 361 5887"
        when "Lee-Ann Ripley-Evans"
          oOwnerEmail.setValue "Lee-Ann.Ripley-Evans@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "031 361 5887"
        when "Peter Manyako"
          oOwnerEmail.setValue "Peter.Manyako@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3214"
        when "Xanthi Johaar"
          oOwnerEmail.setValue "Peter.Manyako@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3214"
    if oSecOwner.getValue()?
      switch oSecOwner.getSelectedOption().text
        when "Colleen Prinsloo"
          oSecOwnerEmail.setValue "colleen.prinsloo@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011-407 3111"
        when "Leonardo Hefer"
          oSecOwnerEmail.setValue "Leonardo.Hefer@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011-407 3115"
        when "Ashleigh Khoury"
          oSecOwnerEmail.setValue "Ashleigh.Khoury@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011-407 3290"
        when "Deborah Medlicott"
          oSecOwnerEmail.setValue "deborah.medlicott@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011-407 3009"
        when "Sheena Parsons"
          oSecOwnerEmail.setValue "Sheena.Parsons@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "0860 11 1177"
        when "Reena Ganda"
          oSecOwnerEmail.setValue "reena.ganda@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011-407 3046"
        when "Naomi Van Schalkwyk"
          oSecOwnerEmail.setValue "naomi.vanschalkwyk@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011-407 3044"
        when "Marise Petersen"
          oSecOwnerEmail.setValue "Marise.Petersen@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3055"
        when "Sherilee Phillips"
          oSecOwnerEmail.setValue "Sherilee.Phillips@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3106"
        when "Kim de Meillon"
          oSecOwnerEmail.setValue "morne.vandermerwe@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3016"
        when "Shamilla August"
          oSecOwnerEmail.setValue "Shamilla.August@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3034"
        when "Firdoze Mahomed"
          oSecOwnerEmail.setValue "Firdoze.Mahomed@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3102"
        when "Jacqui Gibb"
          oSecOwnerEmail.setValue "Jacqui.Gibb@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3320"
        when "Juliet Mabote "
          oOwnerEmail.setValue "Juliet.Mabote@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3079"
        when "Maria Ramashia"
          oOwnerEmail.setValue "Maria.Ramashia@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3252"
        when "Jaco De Beer "
          oOwnerEmail.setValue "Jaco.Debeer@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3131"
        when "Tina Heine"
          oSecOwnerEmail.setValue "Tina.Heine@bidvestcapital.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3617"
        when "Peter Llewellyn"
          oSecOwnerEmail.setValue "Peter.Llewellyn@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "021 940 2152"
        when "Mark Mortimer"
          oSecOwnerEmail.setValue "Mark.Mortimer@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3618"
        when "Dries Fourie"
          oSecOwnerEmail.setValue "Dries.Fourie@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "031 361 5887"
        when "Gavin Beckmann"
          oSecOwnerEmail.setValue "Gavin.Beckmann@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "051 408 3016"
        when "Susan Kaunda"
          oSecOwnerEmail.setValue "Susan.Kaunda@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3058"
        when "Ilke Van Wyk"
          oSecOwnerEmail.setValue "Ilke.VanWyk@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3022"
        when "Thashnee Pillay"
          oSecOwnerEmail.setValue "Thashnee.Pillay@bidvestbank.co.za"
          oSecOwnerDirectPhone.setValue "011 407 3601"
        when "Charmaine Singh"
          oOwnerEmail.setValue "Charmaine.Singh@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011-407 3435"
        when "Ziad Moolla"
          oOwnerEmail.setValue "Ziad.Moolla@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011-407 3083"
    if oDeptMan.getValue()?
      switch oDeptMan.getSelectedOption().text
        when "Leonardo Hefer"
          oDeptManEmail.setValue "leonardo.hefer@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011-407 3115"
        when "Jill Murtagh"
          oDeptManEmail.setValue "Jill.Murtagh@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011-407 3346"
        when "Melanie Browne"
          oDeptManEmail.setValue "Melanie.Browne@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011-407 3623"
        when "Tracey Lindeque"
          oDeptManEmail.setValue "tracey.lindeque@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011-407 3281"
        when "Debra Eskelsen"
          oDeptManEmail.setValue "debra.eskelsen@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011-407 3251"
        when "Neil Capazorio"
          oDeptManEmail.setValue "Neil.Capazorio@bidvestbank.co.za"
          oDepManDirectPhone.setValue "0860 11 1177"
        when "Angela Tricerri"
          oDeptManEmail.setValue "Angie.Tricerri@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011 407 3341"
        when "Terry-Sue Van Rensburg"
          oDeptManEmail.setValue "Terry-Sue.VanRensburg@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011 407 3073"
        when "Duncan Nkosi"
          oDeptManEmail.setValue "morne.vandermerwe@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011 407 3258"
        when "Jacqui Gibb"
          oDeptManEmail.setValue "Jacqui.Gibb@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011 407 3320"
        when "Russell Fogg "
          oOwnerEmail.setValue "Russell.Fogg@bidvestbank.co.za"
          oOwnerDirectPhone.setValue "011 407 3260"
        when "Darren Pillay"
          oDeptManEmail.setValue "Darren.Pillay@bidvestcapital.co.za"
          oDepManDirectPhone.setValue "011 407 3650"
        when "Byron Corcoran"
          oDeptManEmail.setValue "Byron.Corcoran@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011 407 3649"
        when "Mark Mortimer"
          oDeptManEmail.setValue "Darren.Pillay@bidvestcapital.co.za"
          oDepManDirectPhone.setValue "011 407 3618"
        when "Mandy Lala"
          oDeptManEmail.setValue "Mandy.Lala@bidvestbank.co.za"
          oDepManDirectPhone.setValue "011 407 3311"
    oDepartment = Xrm.Page.getAttribute("isp_department")
    if oDepartment.getValue()?
      switch oDepartment.getSelectedOption().text
        when "I.T Procurement"
          
          #Create an array to set as the DataValue for the lookup control.
          lookupData = new Array()
          
          #Create an Object add to the array.
          lookupItem = new Object()
          
          #Set the id, typename, and name properties to the object.
          lookupItem.id = "{E4ED98C4-4DE8-DD11-BBDB-0018FE743ACC}"
          lookupItem.entityType = "account"
          lookupItem.name = "IT Queries"
          
          # Add the object to the array.
          lookupData[0] = lookupItem
          
          # Set the value of the lookup field to the value of the array.
          Xrm.Page.getAttribute("customerid").setValue lookupData
          Xrm.Page.customerid.Disabled = 1
          strCustomerName = Xrm.Page.getAttribute("customerid").getValue()[0].name
          Xrm.Page.getAttribute("title").setValue strCustomerName + " " + Xrm.Page.getAttribute("isp_department").getSelectedOption().text + " " + Xrm.Page.getAttribute("isp_subdepartment").getSelectedOption().text
        when "HR Department"
          
          #Create an array to set as the DataValue for the lookup control.
          lookupData = new Array()
          
          #Create an Object add to the array.
          lookupItem = new Object()
          
          #Set the id, typename, and name properties to the object.
          lookupItem.id = "{ADCF5452-1C8B-DE11-BDDD-0018FE743ACC}"
          lookupItem.entityType = "account"
          lookupItem.name = "HR Queries @ Bidvest Bank"
          
          # Add the object to the array.
          lookupData[0] = lookupItem
          
          # Set the value of the lookup field to the value of the array.
          Xrm.Page.getAttribute("customerid").setValue lookupData
          Xrm.Page.customerid.Disabled = 1
          strCustomerName = Xrm.Page.getAttribute("customerid").getValue()[0].name
          Xrm.Page.getAttribute("title").setValue strCustomerName + " " + Xrm.Page.getAttribute("isp_department").getSelectedOption().text + " " + Xrm.Page.getAttribute("isp_subdepartment").getSelectedOption().text
          
          #break;
          
          #Create an array to set as the DataValue for the lookup control.
          lookupData = new Array()
          
          #Create an Object add to the array.
          lookupItem = new Object()
          
          #Set the id, typename, and name properties to the object.
          lookupItem.id = "{D3BE3320-7494-DD11-8F30-0018FE743ACC}"
          lookupItem.entityType = "subject"
          lookupItem.name = "Customer Feedback"
          
          # Add the object to the array.
          lookupData[0] = lookupItem
          
          # Set the value of the lookup field to the value of the array.
          Xrm.Page.getAttribute("subjectid").setValue lookupData
          Xrm.Page.subjectid.Disabled = 1
          strSubject = Xrm.Page.getAttribute("subjectid").getValue()[0].name
    if Xrm.Page.ui.getFormType() is 2
      strEscalationStatus = Xrm.Page.getAttribute("isp_escalationstatus")
      if strEscalationStatus.getValue()?
        switch strEscalationStatus.getSelectedOption().text
          when "Stage1"
            Xrm.Page.isp_acceptedowner.Disabled = 1
            Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode "always"
            Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode "always"
          when "Stage2"
            Xrm.Page.isp_acceptedsecowner.Disabled = 1
            Xrm.Page.isp_acceptedowner.Disabled = 1
            Xrm.Page.getAttribute("isp_acceptedsecowner").setSubmitMode "always"
            Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode "always"
            Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode "always"
          when "Stage3"
            Xrm.Page.isp_acceptedmanager.Disabled = 1
            Xrm.Page.isp_acceptedsecowner.Disabled = 1
            Xrm.Page.isp_acceptedowner.Disabled = 1
            Xrm.Page.getAttribute("isp_acceptedmanager").setSubmitMode "always"
            Xrm.Page.getAttribute("isp_acceptedsecowner").setSubmitMode "always"
            Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode "always"
            Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode "always"
      
      #Set the Description field to value
      strCustomerName = Xrm.Page.getAttribute("customerid").getValue()[0].name
      Xrm.Page.getAttribute("title").setValue strCustomerName + " " + Xrm.Page.getAttribute("isp_department").getSelectedOption().text + " " + Xrm.Page.getAttribute("isp_subdepartment").getSelectedOption().text
  oReAssigned = Xrm.Page.getAttribute("isp_reassign")
  if oReAssigned.getValue()?
    switch oReAssigned.getSelectedOption().text
      when "Yes"
        
        # the function 
        ExecuteWorkflow = (entityId, workflowId) ->
          xml = "" + "<?xml version=\"1.0\" encoding=\"utf-8\"?>" + "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">" + Xrm.Page.context.getAuthenticationHeader() + "  <soap:Body>" + "    <Execute xmlns=\"http://schemas.microsoft.com/crm/2007/WebServices\">" + "      <Request xsi:type=\"ExecuteWorkflowRequest\">" + "        <EntityId>" + entityId + "</EntityId>" + "        <WorkflowId>" + workflowId + "</WorkflowId>" + "      </Request>" + "    </Execute>" + "  </soap:Body>" + "</soap:Envelope>" + ""
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
        ExecuteWorkflow Xrm.Page.data.entity.getId(), theWorkflowId
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
  
  #This section will make the Action Needed field not required and hidden
  
  #This section will make the Nature of Problem field not required and hidden
  
  #This section will bring up the Description of the Case to be filled in by the person logging the request
  
  #alert("Since this is an I.T. helpdesk request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
  #var label = Xrm.Page.getAttribute("isp_staffid_c");
  #label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>";
  
  # document.all.isp_staffid_d.style.visibility = "";
  # document.all.isp_staffid_c.style.visibility = "";
  
  #This section will make the Action Needed field not required and hidden
  
  #This section will make the Dont Send Resolved email field not required and hidden
  
  #This section will make the Nature of Problem field not required and hidden
  
  #This section will bring up the Description of the Case to be filled in by the person logging the request
  
  #  alert("Since this is an I.T. helpdesk request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
  
  #This section will make the Action Needed field not required and hidden
  
  #This section will make the Nature of Problem field not required and hidden
  
  #This section will bring up the Description of the Case to be filled in by the person logging the request
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
  Xrm.Page.getAttribute("isp_departmentval").setValue Xrm.Page.getAttribute("isp_department").getSelectedOption().text
  oDepartmentValue = Xrm.Page.getAttribute("isp_department")
  oSubDept = Xrm.Page.getAttribute("isp_subdepartment")
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
  oSecOwner = Xrm.Page.getAttribute("isp_secondaryowner")
  oDeptMan = Xrm.Page.getAttribute("isp_departmentmanager")
  if oDepartmentValue.getValue()?
    switch oDepartmentValue.getSelectedOption().text
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
        Xrm.Page.isp_natureofproblem.setAttribute "req", 0
        Xrm.Page.isp_natureofproblem_c.className = "n"
        Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
        document.all.isp_natureofproblem_c.style.visibility = "hidden"
        document.all.isp_natureofproblem_d.style.visibility = "hidden"
      when "FinSurv Department"
        filterPicklist oArrayFinSurv
        document.all.isp_region_c.style.visibility = "hidden"
        document.all.isp_region_d.style.visibility = "hidden"
        Xrm.Page.isp_natureofproblem.setAttribute "req", 0
        Xrm.Page.isp_natureofproblem_c.className = "n"
        Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
        document.all.isp_natureofproblem_c.style.visibility = "hidden"
        document.all.isp_natureofproblem_d.style.visibility = "hidden"
      when "Finance Department"
        filterPicklist oArrayFinance
        document.all.isp_region_c.style.visibility = "hidden"
        document.all.isp_region_d.style.visibility = "hidden"
      when "Rand Department"
        filterPicklist oArrayRand
        Xrm.Page.isp_queryby.setAttribute "req", 0
        Xrm.Page.isp_queryby_c.className = "n"
        Xrm.Page.isp_queryby_c.innerHTML = Xrm.Page.isp_queryby_c.innerText
        document.all.isp_queryby_c.style.visibility = "hidden"
        document.all.isp_queryby_d.style.visibility = "hidden"
        document.all.isp_descriptionofproblem_d.style.visibility = ""
        document.all.isp_descriptionofproblem_c.style.visibility = ""
        Xrm.Page.isp_natureofproblem.setAttribute "req", 0
        Xrm.Page.isp_natureofproblem_c.className = "n"
        Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
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
        oSecOwner.setValue 30
        oDeptMan.setValue 8
      when "HR Department"
        filterPicklist oArrayHR
        document.all.isp_staffid_d.style.visibility = ""
        document.all.isp_staffid_c.style.visibility = ""
        Xrm.Page.getAttribute("casetypecode").setValue 200001
        Xrm.Page.getAttribute("caseorigincode").setValue 2
        document.all.isp_descriptionofproblem_d.style.visibility = ""
        document.all.isp_descriptionofproblem_c.style.visibility = ""
        Xrm.Page.isp_queryby.setAttribute "req", 0
        Xrm.Page.isp_queryby_c.className = "n"
        Xrm.Page.isp_queryby_c.innerHTML = Xrm.Page.isp_queryby_c.innerText
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
        Xrm.Page.isp_natureofproblem.setAttribute "req", 0
        Xrm.Page.isp_natureofproblem_c.className = "n"
        Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
        document.all.isp_natureofproblem_c.style.visibility = "hidden"
        document.all.isp_natureofproblem_d.style.visibility = "hidden"
        Xrm.Page.title.setAttribute "req", 0
        Xrm.Page.title_c.className = "n"
        Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
        document.all.title_d.style.visibility = "hidden"
        document.all.title_c.style.visibility = "hidden"
      when "I.T Procurement"
        filterPicklist oArrayIT
        Xrm.Page.getAttribute("casetypecode").setValue 200001
        Xrm.Page.getAttribute("caseorigincode").setValue 2
        document.all.isp_requestedbyemail_d.style.visibility = ""
        document.all.isp_requestedbyemail_c.style.visibility = ""
        Xrm.Page.isp_requestedbyemail.Disabled = 1
        document.all.isp_descriptionofproblem_d.style.visibility = ""
        document.all.isp_descriptionofproblem_c.style.visibility = ""
        Xrm.Page.isp_queryby.setAttribute "req", 0
        Xrm.Page.isp_queryby_c.className = "n"
        Xrm.Page.isp_queryby_c.innerHTML = Xrm.Page.isp_queryby_c.innerText
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
        Xrm.Page.isp_allowclosedemail.setAttribute "req", 0
        Xrm.Page.isp_allowclosedemail_c.className = "n"
        Xrm.Page.isp_allowclosedemail_c.innerHTML = Xrm.Page.isp_allowclosedemail_c.innerText
        document.all.isp_allowclosedemail_c.style.visibility = "hidden"
        document.all.isp_allowclosedemail_d.style.visibility = "hidden"
        Xrm.Page.isp_natureofproblem.setAttribute "req", 0
        Xrm.Page.isp_natureofproblem_c.className = "n"
        Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
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
        Xrm.Page.title.setAttribute "req", 0
        Xrm.Page.title_c.className = "n"
        Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
        document.all.title_d.style.visibility = "hidden"
        document.all.title_c.style.visibility = "hidden"
        label = Xrm.Page.getAttribute("isp_staffid_c")
        label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>"
      when "Fleet and Finance"
        filterPicklist oArrayFleetandFinance
        document.all.isp_staffid_d.style.visibility = ""
        document.all.isp_staffid_c.style.visibility = ""
        Xrm.Page.getAttribute("casetypecode").setValue 200001
        Xrm.Page.getAttribute("caseorigincode").setValue 2
        document.all.isp_descriptionofproblem_d.style.visibility = ""
        document.all.isp_descriptionofproblem_c.style.visibility = ""
        Xrm.Page.isp_queryby.setAttribute "req", 0
        Xrm.Page.isp_queryby_c.className = "n"
        Xrm.Page.isp_queryby_c.innerHTML = Xrm.Page.isp_queryby_c.innerText
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
        Xrm.Page.isp_natureofproblem.setAttribute "req", 0
        Xrm.Page.isp_natureofproblem_c.className = "n"
        Xrm.Page.isp_natureofproblem_c.innerHTML = Xrm.Page.isp_natureofproblem_c.innerText
        document.all.isp_natureofproblem_c.style.visibility = ""
        document.all.isp_natureofproblem_d.style.visibility = ""
        Xrm.Page.title.setAttribute "req", 0
        Xrm.Page.title_c.className = "n"
        Xrm.Page.title_c.innerHTML = Xrm.Page.title_c.innerText
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
  oSubDepart = Xrm.Page.getAttribute("isp_subdepartment")
  oNatProblem = Xrm.Page.getAttribute("isp_natureofproblem")
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
  oArrayCashkows.push 0, 54, 61, 32, 60, 89, 50, 60, 58, 57, 90, 62, 91, 64, 56, 92
  oArrayAutoCashkows.push 0, 54, 61, 32, 60, 89, 50, 60, 58, 57, 90, 62, 91, 64, 56, 92
  if oSubDepart.getValue()?
    switch oSubDepart.getSelectedOption().text
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
  oSubDepart = Xrm.Page.getAttribute("isp_subdepartment")
  oNatProblem = Xrm.Page.getAttribute("isp_natureofproblem")
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
  oArrayCashkows.push 0, 54, 61, 32, 60, 89, 50, 60, 58, 57, 90, 62, 91, 64, 56, 92, 51, 53, 63, 93
  oArrayAutoCashkows.push 0, 54, 61, 32, 60, 89, 50, 60, 58, 57, 90, 62, 91, 64, 56, 92, 51, 53, 63, 93
  if oSubDepart.getValue()?
    switch oSubDepart.getSelectedOption().text
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
  
  #This will create Lists for I.T.
  
  # This will create Lists for Rand
  
  #This will create Lists for Fleet and Finance
  
  #This will create a list for Rand Department
  
  #This will create Lists for H.R.
  
  # *** This is the bit you would edit to add/remove options to your lists *** //
  
  #oCorporateCard.push(0, 16, 17, 18);
  
  #This will create Lists for I.T.
  
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
  oSubdepartment = Xrm.Page.getAttribute("isp_subdepartment")
  oOwner = Xrm.Page.getAttribute("isp_owner")
  oRegion = Xrm.Page.getAttribute("isp_region")
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
  oCorporate.push 0, 5, 4, 9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60, 65, 10, 102, 100000000, 105, 106, 108, 109, 129, 130, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 152, 153, 154, 146, 155, 156, 157, 158, 159, 160, 161, 167, 168
  oRetail.push 0, 5, 4, 9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60, 65, 10, 102, 100000000, 105, 106, 108, 109, 129, 130, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 152, 153, 154, 155, 156, 158, 159, 160, 161, 167, 168
  oRand.push 0, 1, 13, 14, 15, 41, 60, 10, 129, 132, 133, 135, 137, 138, 140, 102, 100000000, 141, 152, 153, 154, 146, 155, 156, 157, 158, 159, 160, 161
  oFinSurv.push 0, 1, 13, 14, 15, 41, 60, 10, 129, 132, 133, 135, 137, 138, 140, 102, 100000000, 141, 152, 153, 154, 146, 162, 163, 164, 165, 166
  oNostro.push 0, 39, 57, 58, 133, 149, 150, 38, 153
  oExcon.push 0, 29, 30, 31, 32, 4, 60
  oTradeFin.push 0, 5, 4, 9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60, 10, 102, 100000000, 105, 106, 108, 109, 129, 130, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 152, 153, 155, 156, 157, 158, 159, 160, 161, 143, 167, 168
  oTradeServ.push 0, 5, 4, 9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60, 10, 102, 100000000, 105, 106, 108, 109, 129, 130, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 152, 153, 155, 156, 157, 158, 159, 160, 161, 143, 167, 168
  oInterBank.push 0, 5, 4, 9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60, 10, 102, 100000000, 105, 106, 108, 109, 129, 130, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 152, 153, 155, 156, 157, 158, 159, 160, 161, 167, 168
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
  if oSubdepartment.getValue()?
    switch oSubdepartment.getSelectedOption().text
      when "Corporate"
        filterPicklist oCorporate
        oOwner.setValue 9
        oOwner.Disabled = 0
      when "Retail"
        filterPicklist oRetail
        oOwner.setValue 65
        oOwner.Disabled = 0
      when "Nostro"
        filterPicklist oNostro
        oOwner.setValue 150
        oOwner.Disabled = 0
      when "Excon"
        filterPicklist oExcon
        oOwner.setValue 63
        oOwner.Disabled = 0
      when "Rand"
        filterPicklist oRand
        oOwner.setValue 152
        oOwner.Disabled = 0
      when "Trade Finance"
        filterPicklist oTradeFin
        oOwner.setValue 143
        oOwner.Disabled = 0
      when "Trade Services"
        filterPicklist oTradeServ
        oOwner.setValue 143
        oOwner.Disabled = 0
      when "Inter Bank Settlements"
        filterPicklist oInterBank
        oOwner.setValue 9
        oOwner.Disabled = 0
      when "Automated: CashKows Queries"
        filterPicklist oPrivateBanking
        oOwner.setValue 139
        oOwner.Disabled = 0
      when "CashKows Queries"
        filterPicklist oPrivateBanking
        oOwner.setValue 139
        oOwner.Disabled = 0
      when "FinSurv"
        filterPicklist oFinSurv
        oOwner.setValue 146
        oOwner.Disabled = 0
      when "Automated: Finance Queue"
        oOwner.setValue 44
        oOwner.Disabled = 1
      when "Op Stats"
        oOwner.setValue 44
        oOwner.Disabled = 1
      when "Creditors"
        oOwner.setValue 44
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
        oOwner.setValue 152
        oOwner.Disabled = 0
      when "Payments"
        filterPicklist oPayments
        oOwner.setValue 152
        oOwner.Disabled = 0
      when "Notice"
        filterPicklist oNotice
        oOwner.setValue 152
        oOwner.Disabled = 0
      when "Confirmations"
        filterPicklist oConfirmations
        oOwner.setValue 152
        oOwner.Disabled = 0
      when "Withdrawal Request"
        filterPicklist oWithdrawalRequest
        oOwner.setValue 152
        oOwner.Disabled = 0
      when "Investments"
        filterPicklist oInvestments
        oOwner.setValue 152
        oOwner.Disabled = 0
      when "Johannesburg"
        oOwner.setValue 71
        oOwner.Disabled = 1
      when "Bloemfontein"
        oOwner.setValue 71
        oOwner.Disabled = 1
      when "Cape Town"
        oOwner.setValue 71
        oOwner.Disabled = 1
      when "Durban"
        oOwner.setValue 71
        oOwner.Disabled = 1
      when "Pension / Provident Fund"
        oOwner.setValue 42
        oOwner.Disabled = 1
      when "Uniforms"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "Leave"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "Maternity"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "Leave"
        oOwner.setValue 42
        oOwner.Disabled = 1
      when "General HR"
        oOwner.setValue 42
        oOwner.Disabled = 1
      when "Pre-Benefit Testing"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "Intranet"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "WorkmanÃÂ¢Ã¢âÂ¬Ã¢âÂ¢s Compensation"
        oOwner.setValue 42
        oOwner.Disabled = 1
      when "Staff Files"
        oOwner.setValue 42
        oOwner.Disabled = 1
      when "Workplace Forum"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "Policies"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "ICAS"
        oOwner.setValue 42
        oOwner.Disabled = 1
      when "Medical Aid"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "Careers at Bidvest / Vacancies"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "BEE"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "Disciplinaries"
        oOwner.setValue 42
        oOwner.Disabled = 1
      when "Bursaries"
        oOwner.setValue 42
        oOwner.Disabled = 1
      when "KPAÃÂ¢Ã¢âÂ¬Ã¢âÂ¢s / Performance Management"
        oOwner.setValue 43
        oOwner.Disabled = 1
      when "Salaries ÃÂ¢Ã¢âÂ¬Ã¢â¬Å Infoslips ONLY"
        oOwner.setValue 43
        oOwner.Disabled = 1
  oSecOwner = Xrm.Page.getAttribute("isp_secondaryowner")
  oDeptMan = Xrm.Page.getAttribute("isp_departmentmanager")
  if oSubdepartment.getValue()?
    switch oSubdepartment.getSelectedOption().text
      when "Corporate"
        oSecOwner.setValue 33
        oSecOwner.Disabled = 0
        oDeptMan.setValue 2
        oDeptMan.Disabled = 0
      when "Retail"
        oSecOwner.setValue 33
        oSecOwner.Disabled = 0
        oDeptMan.setValue 2
        oDeptMan.Disabled = 0
      when "Rand"
        oSecOwner.setValue 4
        oSecOwner.Disabled = 0
        oDeptMan.setValue 17
        oDeptMan.Disabled = 0
      when "Excon"
        oSecOwner.setValue 16
        oSecOwner.Disabled = 1
        oDeptMan.setValue 2
        oDeptMan.Disabled = 1
      when "Nostro"
        oSecOwner.setValue 38
        oSecOwner.Disabled = 0
        oDeptMan.setValue 21
        oDeptMan.Disabled = 0
      when "Trade Finance"
        oSecOwner.setValue 42
        oSecOwner.Disabled = 0
        oDeptMan.setValue 2
        oDeptMan.Disabled = 0
      when "Trade Services"
        oSecOwner.setValue 42
        oSecOwner.Disabled = 0
        oDeptMan.setValue 2
        oDeptMan.Disabled = 0
      when "Inter Bank Settlements"
        oSecOwner.setValue 3
        oSecOwner.Disabled = 0
        oDeptMan.setValue 2
        oDeptMan.Disabled = 0
      when "Automated: CashKows Queries"
        oSecOwner.setValue 37
        oSecOwner.Disabled = 0
        oDeptMan.setValue 19
        oDeptMan.Disabled = 0
      when "FinSurv"
        oSecOwner.setValue 41
        oSecOwner.Disabled = 0
        oDeptMan.setValue 22
        oDeptMan.Disabled = 0
      when "Automated: Finance Queue"
        oSecOwner.setValue 10
        oSecOwner.Disabled = 1
        oDeptMan.setValue 1
        oDeptMan.Disabled = 1
      when "Op Stats"
        oSecOwner.setValue 10
        oSecOwner.Disabled = 1
        oDeptMan.setValue 1
        oDeptMan.Disabled = 1
      when "Creditors"
        oSecOwner.setValue 10
        oSecOwner.Disabled = 1
        oDeptMan.setValue 1
        oDeptMan.Disabled = 1
      when "Desktop Support"
        oSecOwner.setValue 7
        oSecOwner.Disabled = 1
        oDeptMan.setValue 5
        oDeptMan.Disabled = 1
      when "Applications"
        oSecOwner.setValue 7
        oSecOwner.Disabled = 1
        oDeptMan.setValue 5
        oDeptMan.Disabled = 1
      when "Technical Admin"
        oSecOwner.setValue 7
        oSecOwner.Disabled = 1
        oDeptMan.setValue 5
        oDeptMan.Disabled = 1
      when "Development"
        oSecOwner.setValue 7
        oSecOwner.Disabled = 1
        oDeptMan.setValue 5
        oDeptMan.Disabled = 1
      when "Procurement"
        oSecOwner.setValue 43
        oSecOwner.Disabled = 1
        oDeptMan.setValue 13
        oDeptMan.Disabled = 1
      when "Johannesburg"
        oSecOwner.setValue 26
        oSecOwner.Disabled = 1
        oDeptMan.setValue 14
        oDeptMan.Disabled = 1
      when "Bloemfontein"
        oSecOwner.setValue 28
        oSecOwner.Disabled = 1
        oDeptMan.setValue 14
        oDeptMan.Disabled = 1
      when "Cape Town"
        oSecOwner.setValue 25
        oSecOwner.Disabled = 1
        oDeptMan.setValue 14
        oDeptMan.Disabled = 1
      when "Durban"
        oSecOwner.setValue 27
        oSecOwner.Disabled = 1
        oDeptMan.setValue 14
        oDeptMan.Disabled = 1
      when "New Accounts"
        oSecOwner.setValue 4
        oSecOwner.Disabled = 0
        oDeptMan.setValue 17
        oDeptMan.Disabled = 0
      when "Payments"
        oSecOwner.setValue 4
        oSecOwner.Disabled = 0
        oDeptMan.setValue 17
        oDeptMan.Disabled = 0
      when "Notice"
        oSecOwner.setValue 4
        oSecOwner.Disabled = 0
        oDeptMan.setValue 17
        oDeptMan.Disabled = 0
      when "Confirmations"
        oSecOwner.setValue 4
        oSecOwner.Disabled = 0
        oDeptMan.setValue 17
        oDeptMan.Disabled = 0
      when "Withdrawal Request"
        oSecOwner.setValue 4
        oSecOwner.Disabled = 0
        oDeptMan.setValue 17
        oDeptMan.Disabled = 0
      when "Investments"
        oSecOwner.setValue 4
        oSecOwner.Disabled = 0
        oDeptMan.setValue 17
        oDeptMan.Disabled = 0
      
      # List for HR
      when "Pension / Provident Fund"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Uniforms"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Leave"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Maternity"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Leave"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "General HR"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Pre-Benefit Testing"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Intranet"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "WorkmanÃÂ¢Ã¢âÂ¬Ã¢âÂ¢s Compensation"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Staff Files"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Workplace Forum"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Policies"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "ICAS"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Medical Aid"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Careers at Bidvest / Vacancies"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "BEE"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Disciplinaries"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Bursaries"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "KPAÃÂ¢Ã¢âÂ¬Ã¢âÂ¢s / Performance Management"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
      when "Salaries ÃÂ¢Ã¢âÂ¬Ã¢â¬Å Infoslips ONLY"
        oSecOwner.setValue 8
        oSecOwner.Disabled = 1
        oDeptMan.setValue 6
        oDeptMan.Disabled = 1
customerid_onchange = ->
  getEntityLookup = (id, entity, idfield, lookupfield, returntype) ->
    xml = "" + "< ?xml version='1.0' encoding='utf-8'?>" + "<soap :Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'" + " xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'" + " xmlns:xsd='http://www.w3.org/2001/XMLSchema'>" + Xrm.Page.context.getAuthenticationHeader() + "</soap><soap :Body>" + "<fetch xmlns='http://schemas.microsoft.com/crm/2007/WebServices'>" + "<fetchxml>" + " &lt;fetch mapping='logical' count='1'&gt;" + " &lt;entity name='" + entity + "'&gt;" + " &lt;attribute name='" + lookupfield + "' /&gt;" + " &lt;filter&gt;" + " &lt;condition attribute='" + idfield + "' operator='eq' value='" + id + "' /&gt;" + " &lt;/filter&gt;" + " &lt;/entity&gt;" + " &lt;/fetch&gt;" + "</fetchxml>" + "</fetch>" + "</soap>" + ""
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
    lookupItem.entityType = returntype  unless returntype is "multiple"
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
  oDepartment = Xrm.Page.getAttribute("isp_queryby")
  oProblem = Xrm.Page.getAttribute("isp_natureofproblem")
  unless oProblem.originalPicklistValues
    oProblem.originalPicklistValues = oProblem.Options
  else
    oProblem.Options = oProblem.originalPicklistValues
  oArrayBankingQuery = new Array()
  oArrayCustomerQuery = new Array()
  oArrayBankingQuery.push 0, 18, 6, 1, 5, 4, 7, 2, 3, 20, 32
  oArrayCustomerQuery.push 0, 19, 14, 15, 12, 13, 11, 17, 16, 9, 8, 10, 20, 32, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  if oDepartment.getValue()?
    switch oDepartment.getSelectedOption().text
      when "Bank"
        filterPicklist oArrayBankingQuery
      when "Customer"
        filterPicklist oArrayCustomerQuery
  return
isp_staffid_onchange = ->
  debugger
  cid = document.getElementById("isp_staffid").getValue()[0].id
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
  Xrm.Page.isp_requestedbyemail.value = eml
  return
isp_dateresolved_onchange = ->
  debugger
  one_day = 1000 * 60 * 60
  StartDate = Xrm.Page.getAttribute("createdon").getValue()
  EndDate = Xrm.Page.getAttribute("isp_dateresolved").getValue()
  oAlert = Math.ceil((EndDate.getTime() - StartDate.getTime()) / (one_day))
  Xrm.Page.getAttribute("isp_totaltime").setValue oAlert
  Xrm.Page.getAttribute("isp_totaldays").getValue() = Xrm.Page.getAttribute("isp_totaltime").getValue() / 24
  return
isp_totaltime_onchange = ->
  Xrm.Page.getAttribute("isp_totaltime").setSubmitMode "always"
  Xrm.Page.data.entity.save()
  return
isp_totaldays_onchange = ->
  Xrm.Page.getAttribute("isp_totaldays").setSubmitMode "always"
  Xrm.Page.data.entity.save()
  return
isp_owner_onchange = ->
  
  # JScript source code
  #This section will update the Owner Email Field when a value gets updated in this field.  this event
  #is fired with the OnChange event of the isp_owner field in the Escalation Trail.
  oOwner = Xrm.Page.getAttribute("isp_owner")
  oOwnerEmail = Xrm.Page.getAttribute("isp_owneremail")
  oOwnerDirectPhone = Xrm.Page.getAttribute("isp_ownerdirectphone")
  if oOwner.getValue()?
    switch oOwner.getSelectedOption().text
      when "Colleen Prinsloo"
        oOwnerEmail.setValue "colleen.prinsloo@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3111"
      when "Cynthia Armstrong"
        oOwnerEmail.setValue "Cynthia.Armstrong@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Busisiwe Nana"
        oOwnerEmail.setValue "Busisiwe.Nana@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3335"
      when "Judy Bergstedt"
        oOwnerEmail.setValue "Judy.Bergstedt@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3077"
      when "Tshidi Masite"
        oOwnerEmail.setValue "Tshidi.Masite@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3089"
      when "Nizel Corrigan"
        oOwnerEmail.setValue "Nizel.Corrigan@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3185"
      when "Reena Ganda"
        oOwnerEmail.setValue "Reena.Moodley@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3046"
      when "Petro Welgemoed"
        oOwnerEmail.setValue "Petro.Welgemoed@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3206"
      when "Naomi Van Schalkwyk"
        oOwnerEmail.setValue "Naomi.VanSchalkwyk@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3044"
      when "Emily Mmusi"
        oOwnerEmail.setValue "Emily.Mmusi@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Nancy Mamphiswana"
        oOwnerEmail.setValue "Nancy.Mamphiswana@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Thoko Rabotapi"
        oOwnerEmail.setValue "Thoko.Rabotapi@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Debra Eskelsen"
        oOwnerEmail.setValue "Debra.Eskelsen@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Tracey Lindeque"
        oOwnerEmail.setValue "Tracey.Lindeque@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Shamilla August"
        oOwnerEmail.setValue "Shamilla.August@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Johan Van Tonder"
        oOwnerEmail.setValue "Johan.VanTonder@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Leon Engelbrecht"
        oOwnerEmail.setValue "Leon.Engelbrecht@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Mervin Pauls"
        oOwnerEmail.setValue "Mervin.Pauls@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Petro Welgemoed"
        oOwnerEmail.setValue "Petro.Welgemoed@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Neo Sebiyane"
        oOwnerEmail.setValue "Neo.Sebiyane@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Taznique Petersen"
        oOwnerEmail.setValue "Taznique.Petersen@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Bradley Schooner"
        oOwnerEmail.setValue "Bradley.Schooner@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Daniel Lusse"
        oOwnerEmail.setValue "Daniel.Lusse@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Given Ramahala"
        oOwnerEmail.setValue "Given.Ramahala@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Byron Bowers"
        oOwnerEmail.setValue "Byron.Bowers@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Cheryl Simons"
        oOwnerEmail.setValue "Cheryl.Simons@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Lindsey McAslin"
        oOwnerEmail.setValue "Lindsey.McAslin@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Clarissa Coetzee"
        oOwnerEmail.setValue "Clarissa.Coetzee@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3250"
      when "Michael Muller"
        oOwnerEmail.setValue "michael.muller@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3182"
      when "Cole Smith"
        oOwnerEmail.setValue "Cole.Smith@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3334"
      when "Marnus Smith"
        oOwnerEmail.setValue "Marnus.Smith@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3224"
      when "Charl Hanekom"
        oOwnerEmail.setValue "Charl.Hanekom@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Damon Campbell"
        oOwnerEmail.setValue "Damon.Campbell@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3224"
      when "Muneer Saptoe"
        oOwnerEmail.setValue "Muneer.Saptoe@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3345"
      when "Stephanie Douwie"
        oOwnerEmail.setValue "Stephanie.Douwie@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3308"
      when "Verosha Rupnarain"
        oOwnerEmail.setValue "verosha.rupnarain@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3069"
      when "Nadine Moodley"
        oOwnerEmail.setValue "Nadine.Moodley@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Beulyne Adams"
        oOwnerEmail.setValue "Beulyne.Adams@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Yanga Mafuta"
        oOwnerEmail.setValue "Yanga.Mafuta@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Leonardo Hefer"
        oOwnerEmail.setValue "Leonardo.Hefer@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Jan Lombard"
        oOwnerEmail.setValue "Jan.Lombard@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Jill Murtagh"
        oOwnerEmail.setValue "Jill.Murtagh@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Victoria Manuel"
        oOwnerEmail.setValue "Victoria.Manuel@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Tshidi Masite"
        oOwnerEmail.setValue "Tshidi.Masite@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Mandy Lala"
        oOwnerEmail.setValue "Mandy.Lala@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Shoneez Ben"
        oOwnerEmail.setValue "Shoneez.Ben@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3311"
      when "Yonela Mafuta"
        oOwnerEmail.setValue "Yonela.Mafuta@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Monita Odendaal"
        oOwnerEmail.setValue "Monita.Odendaal@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Iris Busby"
        oOwnerEmail.setValue "iris.Busby@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3081"
      when "Charmaine Singh"
        oOwnerEmail.setValue "Charmaine.Singh@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3435"
      when "Ziad Moolla"
        oOwnerEmail.setValue "Ziad.Moolla@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3083"
      when "Innocentia Rampa"
        oOwnerEmail.setValue "innocentia.rampa@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3333"
      when "Tyler Ormandy"
        oOwnerEmail.setValue "Tyler.Ormandy@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3335"
      when "Amy Pillay"
        oOwnerEmail.setValue "Amy.Pillay@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3221"
      when "Arnold Van Noord"
        oOwnerEmail.setValue "Arnold.VanNoord@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "0114073034"
      when "Dershni Naicker"
        oOwnerEmail.setValue "Dershni.Naicker@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "0114073034"
      when "Motshidisi Shibambo"
        oOwnerEmail.setValue "Motshidisi.Shibambo@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3571"
      when "Ayanda Makhado"
        oOwnerEmail.setValue "ayanda.makhado@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 7309"
      when "Micael Van Heerden"
        oOwnerEmail.setValue "Micael.VanHeerden@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3563"
      when "Nonhlanhla Nyauza"
        oOwnerEmail.setValue "Nonhlanhla.Nyauza@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011-407 3000"
      when "Nadeema Vania"
        oOwnerEmail.setValue "Nadeema.Vania@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "0860 11 1177"
      when "Carl Gordon"
        oOwnerEmail.setValue "Carl.Gordon@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "0860 11 1177"
      when "Ansin Mentor"
        oOwnerEmail.setValue "Ansin.Mentor@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "0860 11 1177"
      when "Cassie Esterhuizen"
        oOwnerEmail.setValue "Cassie.Esterhuizen@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "0860 11 1177"
      when "Kogie Moodley"
        oOwnerEmail.setValue "Kogie.Moodley@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "0860 11 1177"
      when "Harold Van Eeden"
        oOwnerEmail.setValue "Harold.VanEeden@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "0860 11 1177"
      when "Louise Gouws"
        oOwnerEmail.setValue "Louise.Gouws@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "0860 11 1177"
      when "Raeesa Khan"
        oOwnerEmail.setValue "Raeesa.Khan@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "0860 11 1177"
      when "Morne van der Merwe"
        oOwnerEmail.setValue "Morne.vandermerwe@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3243"
      when "Juliet Mabote"
        oOwnerEmail.setValue "Juliet.Mabote@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3079"
      when "Maria Ramashia"
        oOwnerEmail.setValue "Maria.Ramashia@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3252"
      when "Firdoze Mahomed"
        oOwnerEmail.setValue "Firdoze.Mahomed@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3102"
      when "Eleanor Pillay"
        oOwnerEmail.setValue "Eleanor.Pillay@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Meeshana Mangru"
        oOwnerEmail.setValue "Meeshana.Mangru@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Thabiso Siswana"
        oOwnerEmail.setValue "Thabiso.Siswana@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Tebogo Tau"
        oOwnerEmail.setValue "Tebogo.Tau@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Princess Seripa"
        oOwnerEmail.setValue "Princess.Seripa@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Precious Seobi"
        oOwnerEmail.setValue "Precious.Seobi@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Jabulile Shongwe"
        oOwnerEmail.setValue "Jabulile.Shongwe@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Mathilene Henn"
        oOwnerEmail.setValue "Mathilene.Henn@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Lungu Mchunu"
        oOwnerEmail.setValue "Lungu.Mchunu@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Khensani Matjebe"
        oOwnerEmail.setValue "Khensani.Matjebe@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3000"
      when "Jacqui Gibb"
        oOwnerEmail.setValue "Jacqui.Gibb@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3320"
      when "Shamilla August"
        oOwnerEmail.setValue "Shamilla.August@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3034"
      when "Werner Goosen"
        oOwnerEmail.setValue "Werner.Goosen@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3031"
      when "Wendy Armstrong"
        oOwnerEmail.setValue "Wendy.Armstrong@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3185"
      when "Sherazaan Mia"
        oOwnerEmail.setValue "Sherazaan.Mia@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3081"
      when "Cameron May"
        oOwnerEmail.setValue "Cameron.May@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3571"
      when "Bianca Chutumia"
        oOwnerEmail.setValue "Bianca.Chutumia@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3254"
      when "Delores Cornelius"
        oOwnerEmail.setValue "Delores.Cornelius@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3318"
      when "Tebogo Makgwana"
        oOwnerEmail.setValue "Tebogo.Makgwana@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3075"
      when "Jan Lombard"
        oOwnerEmail.setValue "Jan Lombard@bidvestbank.co.za"
        oOwnerDirectPhone.setValue "011 407 3216"
isp_acceptedowner_onchange = ->
  debugger
  if Xrm.Page.getAttribute("isp_acceptedowner").getValue() is true
    Xrm.Page.isp_acceptedowner.Disabled = 1
    Xrm.Page.isp_escalationstatus.value = 1
    Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode "always"
    Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode "always"
  else
    Xrm.Page.isp_acceptedowner.Disabled = 0
  return
isp_secondaryowner_onchange = ->
  if Xrm.Page.getAttribute("isp_secondaryowner").getSelectedOption().text is "Colleen Prinsloo"
    Xrm.Page.getAttribute("isp_secowneremail").setValue "anotheremail@gmail.com"
  else
    Xrm.Page.isp_secowneremail.Disabled = 0
  return
isp_acceptedsecowner_onchange = ->
  debugger
  if Xrm.Page.getAttribute("isp_acceptedsecowner").getValue() is true
    Xrm.Page.isp_acceptedsecowner.Disabled = 1
    Xrm.Page.isp_escalationstatus.value = 2
    Xrm.Page.getAttribute("isp_acceptedsecowner").setSubmitMode "always"
    Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode "always"
  else
    Xrm.Page.isp_acceptedsecowner.Disabled = 0
  return
isp_reassign_onchange = ->
  debugger
  strReAssign = Xrm.Page.getAttribute("isp_reassign")
  if strReAssign.getValue()?
    switch strReAssign.getSelectedOption().text
      when "Yes"
        Xrm.Page.getAttribute("isp_1stowner").setValue Xrm.Page.getAttribute("isp_owner").getSelectedOption().text
        Xrm.Page.getAttribute("isp_owner").getValue() = ""
        Xrm.Page.isp_owner.Disabled = 0
        Xrm.Page.isp_reassign.Disabled = 1
        Xrm.Page.getAttribute("statuscode").getValue() = 200003
isp_acceptedmanager_onchange = ->
  debugger
  if Xrm.Page.getAttribute("isp_acceptedmanager").getValue() is true
    Xrm.Page.isp_acceptedmanager.Disabled = 1
    Xrm.Page.isp_escalationstatus.value = 3
    Xrm.Page.getAttribute("isp_acceptedmanager").setSubmitMode "always"
    Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode "always"
  else
    Xrm.Page.isp_acceptedmanager.Disabled = 0
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
FrmOnSave = (prmContext) ->
  
  # Local variable to store value indicating how the save event was initiated by the user.
  wod_SaveMode = undefined
  wod_SaveEventVal = undefined
  Dresolved = Xrm.Page.getAttribute("isp_dateresolved").getValue()
  Tdays = Xrm.Page.getAttribute("isp_totaldays").getValue()
  BError = Xrm.Page.getAttribute("isp_bankerror").getValue()
  
  # Change the Save Event Value as per required Save Event
  wod_SaveEventVal = 5
  if prmContext? and prmContext.getEventArgs()?
    wod_SaveMode = prmContext.getEventArgs().getSaveMode()
    
    # 1 will pass on Recalculate button click
    if wod_SaveMode is wod_SaveEventVal
      unless Dresolved?
        alert "Please Complete Date Resolved"
        Xrm.Page.getControl("isp_dateresolved").setFocus true
        if BError is "1"
          Xrm.Page.getAttribute("isp_potentialloss").setRequiredLevel "required"
          Xrm.Page.getAttribute("isp_actualloss").setRequiredLevel "required"
          Xrm.Page.getAttribute("isp_numberofswiftmessagessent").setRequiredLevel "required"
          Xrm.Page.getAttribute("isp_numberofswiftmessagesreceived").setRequiredLevel "required"
          Xrm.Page.getAttribute("isp_potentiallossccy").setRequiredLevel "required"
          Xrm.Page.getAttribute("isp_actuallossccy").setRequiredLevel "required"
          Xrm.Page.getAttribute("isp_comments").setRequiredLevel "required"
        
        # Use the code line below only if validation is failed then abort function save event
        prmContext.getEventArgs().preventDefault()
  return
prioritycode_onchange = ->
  TODAY = undefined
  TODAY = new Date()
  Pcode = Xrm.Page.getAttribute("prioritycode").getValue()
  if Pcode is "3"
    TODAY.setDate TODAY.getDate() + 3
    Xrm.Page.getAttribute("followupby").setValue TODAY
  else if Pcode is "2"
    TODAY.setDate TODAY.getDate() + 2
    Xrm.Page.getAttribute("followupby").setValue TODAY
  else
    TODAY.setDate TODAY.getDate() + 1
    Xrm.Page.getAttribute("followupby").setValue TODAY
  return
statuscode_onchange = ->
  Xrm.Page.getAttribute("prioritycode").setValue null
  return

# Xrm.Page.getAttribute("prioritycode").setRequiredLevel("required");
owner_onchange = ->
  Xrm.Page.getAttribute("prioritycode").setValue null
  return
isp_reasign_onchange = ->
  Xrm.Page.getAttribute("prioritycode").setValue null
  return
isp_acceptedowner_onchange = ->
  Xrm.Page.getAttribute("prioritycode").setValue null
  return
isp_outstandingdocumentation_onchange = ->
  if Xrm.Page.getAttribute("isp_outstandingdocumentation").getValue() is "1"
    Xrm.Page.ui.tabs.get("tab_4").setVisible true
  else
    Xrm.Page.ui.tabs.get("tab_4").setVisible false
  return
isp_bankerror_onchange = ->
  if (Xrm.Page.getAttribute("isp_bankerror").getValue() is "1") and (Xrm.Page.getAttribute("isp_subdepartment").getValue() is "33" or Xrm.Page.getAttribute("isp_subdepartment").getValue() is "70" or Xrm.Page.getAttribute("isp_subdepartment").getValue() is "4" or Xrm.Page.getAttribute("isp_subdepartment").getValue() is "6")
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
  oSubDept1 = Xrm.Page.getAttribute("isp_subdepartment")
  oStatCode = Xrm.Page.getAttribute("statuscode")
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
  if oSubDept1.getValue()?
    switch oSubDept1.getSelectedOption().text
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
  oSubDept1 = Xrm.Page.getAttribute("isp_subdepartment")
  oStatCode = Xrm.Page.getAttribute("statuscode")
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
  if oSubDept1.getValue()?
    switch oSubDept1.getSelectedOption().text
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
  oSubDepart = Xrm.Page.getAttribute("isp_subdepartment")
  oCustCat = Xrm.Page.getAttribute("isp_category")
  unless oCustCat.originalPicklistValues
    oCustCat.originalPicklistValues = oCustCat.Options
  else
    oCustCat.Options = oCustCat.originalPicklistValues
  oArrayCashkows = new Array()
  oArrayAutoCashkows = new Array()
  oArrayCashkows.push 0, 36, 37, 38, 39, 40
  oArrayAutoCashkows.push 0, 36, 37, 38, 39, 40
  if oSubDepart.getValue()?
    switch oSubDepart.getSelectedOption().text
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
  oSubDepart = Xrm.Page.getAttribute("isp_subdepartment")
  oCustCat = Xrm.Page.getAttribute("isp_category")
  unless oCustCat.originalPicklistValues
    oCustCat.originalPicklistValues = oCustCat.Options
  else
    oCustCat.Options = oCustCat.originalPicklistValues
  oArrayCashkows = new Array()
  oArrayAutoCashkows = new Array()
  oArrayCashkows.push 0, 36, 37, 38, 39, 40
  oArrayAutoCashkows.push 0, 36, 37, 38, 39, 40
  if oSubDepart.getValue()?
    switch oSubDepart.getSelectedOption().text
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
  oSubDepart2 = Xrm.Page.getAttribute("isp_subdepartment")
  oQCat = Xrm.Page.getAttribute("isp_querycategory")
  unless oQCat.originalPicklistValues
    oQCat.originalPicklistValues = oQCat.Options
  else
    oQCat.Options = oQCat.originalPicklistValues
  oArrayCashkows1 = new Array()
  oArrayAutoCashkows1 = new Array()
  oArrayCashkows1.push 0, 7, 25, 46, 27, 1, 2, 47, 48
  oArrayAutoCashkows1.push 0, 7, 25, 46, 27, 1, 2, 47, 48
  if oSubDepart2.getValue()?
    switch oSubDepart2.getSelectedOption().text
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
  oSubDepart2 = Xrm.Page.getAttribute("isp_subdepartment")
  oQCat = Xrm.Page.getAttribute("isp_querycategory")
  unless oQCat.originalPicklistValues
    oQCat.originalPicklistValues = oQCat.Options
  else
    oQCat.Options = oQCat.originalPicklistValues
  oArrayCashkows1 = new Array()
  oArrayAutoCashkows1 = new Array()
  oArrayCashkows1.push 0, 7, 25, 46, 27, 1, 2, 47, 48
  oArrayAutoCashkows1.push 0, 7, 25, 46, 27, 1, 2, 47, 48
  if oSubDepart2.getValue()?
    switch oSubDepart2.getSelectedOption().text
      when "Cashkow Queries"
        filterPicklist oArrayCashkows1
      when "Automated: CashKows Queries"
        filterPicklist oArrayAutoCashkows1
  return