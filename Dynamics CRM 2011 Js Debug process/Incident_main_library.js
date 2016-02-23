function IFRAME_DMS_Documents_onload() {
}
function Form_onload()
{
debugger
if (crmForm.all.isp_outstandingdocumentation.DataValue == '0') {
   Xrm.Page.ui.tabs.get("tab_4").setVisible(false);
 }
if (crmForm.all.isp_bankerror.DataValue == '0') {
   Xrm.Page.ui.tabs.get("tab_5").setVisible(false);
}
var OpicsId = crmForm.all.isp_opicsref.DataValue;
 if (OpicsId == null || OpicsId == "" || OpicsId == " ") {
        document.all.IFRAME_DMS_Documents.src = 'about:blank';
    } else {
        document.all.IFRAME_DMS_Documents.src = 'http://jhbh-srv-dms01/CrmCounts/CorporateTelegrahicTransfers.aspx?OpicsDealNumber=' + OpicsId;
    };
 loadsubdept();
 loadnature();
 loadCustcategory()
loadQuerycategory()
//onLoad event of Customer Feedback form
if (crmForm.FormType == 1) {
    // Only make these changes when the form is opened in Create mode.
    var TODAY;
    TODAY = new Date();
    // Set Follow Up By Date to today + 1
    TODAY.setDate(TODAY.getDate() + 1);
    crmForm.all.followupby.DataValue = TODAY;

    //Do some Field Hiding
    document.all.isp_staffid_d.style.visibility = "hidden";
   document.all.isp_staffid_c.style.visibility = "hidden";
   document.all.isp_requestedbyemail_d.style.visibility = "hidden";
   document.all.isp_requestedbyemail_c.style.visibility = "hidden";
   document.all.subjectid_d.style.visibility = "hidden";
   document.all.contractid_d.style.visibility = "hidden";
   document.all.contractdetailid_d.style.visibility = "hidden";
   document.all.isp_departmentval_d.style.visibility = "hidden";
    document.all.isp_departmentval_c.style.visibility = "hidden";
    document.all.isp_descriptionofproblem_d.style.visibility = "";
    document.all.isp_descriptionofproblem_c.style.visibility = "";

    //This section will make the description field not required, and also hide this field
    crmForm.all.title.setAttribute("req", 0);
    crmForm.all.title_c.className = "n";
    crmForm.all.title_c.innerHTML =
    crmForm.all.title_c.innerText;
    crmForm.all.subjectid.setAttribute("req", 0);
    crmForm.all.subjectid_c.className = "n";
    crmForm.all.subjectid_c.innerHTML =
    crmForm.all.subjectid_c.innerText;
    document.all.subjectid_d.style.visibility = "hidden";
    document.all.subjectid_d.style.visibility = "hidden";
    document.all.ownerid_d.style.visibility = "hidden";
    document.all.ownerid_c.style.visibility = "hidden";
    document.all.isp_productcatagory_d.style.visibility = "hidden";
    document.all.isp_productcatagory_c.style.visibility = "hidden";
    document.all.isp_product_d.style.visibility = "hidden";
    document.all.isp_product_c.style.visibility = "hidden";
    document.all.isp_owneremail_d.style.visibility = "hidden";
    document.all.isp_owneremail_c.style.visibility = "hidden";
    document.all.isp_secowneremail_d.style.visibility = "hidden";
    document.all.isp_secowneremail_c.style.visibility = "hidden";
    document.all.isp_depmanemail_d.style.visibility = "hidden";
    document.all.isp_depmanemail_c.style.visibility = "hidden";
    document.all.isp_depmandirectphone_d.style.visibility = "hidden";
    document.all.isp_depmandirectphone_c.style.visibility = "hidden";
    document.all.isp_ownerdirectphone_d.style.visibility = "hidden";
    document.all.isp_ownerdirectphone_c.style.visibility = "hidden";
    document.all.isp_secownerdirectphone_d.style.visibility = "hidden";
    document.all.isp_secownerdirectphone_c.style.visibility = "hidden";
    document.all.isp_clientemail_d.style.visibility = "hidden";
    document.all.isp_clientemail_c.style.visibility = "hidden";
    document.all.isp_1stowner_d.style.visibility = "hidden";
    document.all.isp_1stowner_c.style.visibility = "hidden";
    document.all.isp_timesreassigned_d.style.visibility = "hidden";
    document.all.isp_timesreassigned_c.style.visibility = "hidden";


}
if (crmForm.FormType == 2) {
       var oDepartmentValue = crmForm.all.isp_department;

            if (oDepartmentValue.DataValue != null) {
                switch (oDepartmentValue.SelectedText) {
                    case 'I.T Procurement':
                   document.all.isp_staffid_d.style.visibility = "";
                    document.all.isp_staffid_c.style.visibility = "";
                    document.all.isp_requestedbyemail_d.style.visibility = "";
                    document.all.isp_requestedbyemail_c.style.visibility = "";
                    crmForm.all.isp_requestedbyemail.Disabled = 1;
                    document.all.isp_descriptionofproblem_d.style.visibility = "";
                    document.all.isp_descriptionofproblem_c.style.visibility = "";
                    document.all.isp_queryby_c.style.visibility = "hidden";
                    document.all.isp_queryby_d.style.visibility = "hidden";
                   //This section will make the Action Needed field not required and hidden
                    crmForm.all.isp_queryby.setAttribute("req", 0);
                    crmForm.all.isp_queryby_c.className = "n";
                    crmForm.all.isp_queryby_c.innerHTML =
                    crmForm.all.isp_queryby_c.innerText;
                    document.all.isp_queryby_c.style.visibility = "hidden";
                    document.all.isp_queryby_d.style.visibility = "hidden";
                    document.all.isp_allowclosedemail_c.style.visibility = "hidden";
                    document.all.isp_allowclosedemail_d.style.visibility = "hidden";
                    document.all.isp_branchref_c.style.visibility = "hidden";
                    document.all.isp_branchref_d.style.visibility = "hidden";
                    document.all.isp_opicsref_c.style.visibility = "hidden";
                    document.all.isp_opicsref_d.style.visibility = "hidden";
                    document.all.isp_foreignbankref_c.style.visibility = "hidden";
                    document.all.isp_foreignbankref_d.style.visibility = "hidden";
                    document.all.isp_inwardfunds_c.style.visibility = "hidden";
                    document.all.isp_inwardfunds_d.style.visibility = "hidden";
                    document.all.isp_amount_c.style.visibility = "hidden";
                    document.all.isp_amount_d.style.visibility = "hidden";
                    document.all.isp_sender_c.style.visibility = "hidden";
                    document.all.isp_sender_d.style.visibility = "hidden";
                    //This section will make the Dont Send Resolved email field not required and hidden
                    crmForm.all.isp_allowclosedemail.setAttribute("req", 0);
                    crmForm.all.isp_allowclosedemail_c.className = "n";
                    crmForm.all.isp_allowclosedemail_c.innerHTML =
                    crmForm.all.isp_allowclosedemail_c.innerText;
                    document.all.isp_allowclosedemail_c.style.visibility = "hidden";
                    document.all.isp_allowclosedemail_d.style.visibility = "hidden";
                    //This section will make the Nature of Problem field not required and hidden
                    crmForm.all.isp_natureofproblem.setAttribute("req", 0);
                    crmForm.all.isp_natureofproblem_c.className = "n";
                    crmForm.all.isp_natureofproblem_c.innerHTML =
                     crmForm.all.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "hidden";
                    document.all.isp_natureofproblem_d.style.visibility = "hidden";
                    //This section will bring up the Description of the Case to be filled in by the person logging the request
                    crmForm.all.title.setAttribute("req", 0);
                    crmForm.all.title_c.className = "n";
                    crmForm.all.title_c.innerHTML =
                    crmForm.all.title_c.innerText;
                    document.all.title_d.style.visibility = "hidden";
                    document.all.title_c.style.visibility = "hidden";
                    crmForm.all.subjectid.setAttribute("req", 0);
                    crmForm.all.subjectid_c.className = "n";
                    crmForm.all.subjectid_c.innerHTML =
                    crmForm.all.subjectid_c.innerText;
                    document.all.subjectid_d.style.visibility = "hidden";
                    document.all.subjectid_d.style.visibility = "hidden";
                    document.all.ownerid_d.style.visibility = "hidden";
                    document.all.ownerid_c.style.visibility = "hidden";
                    document.all.isp_productcatagory_d.style.visibility = "hidden";
                    document.all.isp_productcatagory_c.style.visibility = "hidden";
                    document.all.isp_product_d.style.visibility = "hidden";
                    document.all.isp_product_c.style.visibility = "hidden";
                    document.all.isp_owneremail_d.style.visibility = "hidden";
                    document.all.isp_owneremail_c.style.visibility = "hidden";
                    document.all.isp_secowneremail_d.style.visibility = "hidden";
                    document.all.isp_secowneremail_c.style.visibility = "hidden";
                    document.all.isp_depmanemail_d.style.visibility = "hidden";
                    document.all.isp_depmanemail_c.style.visibility = "hidden";
                    document.all.isp_depmandirectphone_d.style.visibility = "hidden";
                    document.all.isp_depmandirectphone_c.style.visibility = "hidden";
                    document.all.isp_ownerdirectphone_d.style.visibility = "hidden";
                    document.all.isp_ownerdirectphone_c.style.visibility = "hidden";
                    document.all.isp_secownerdirectphone_d.style.visibility = "hidden";
                    document.all.isp_secownerdirectphone_c.style.visibility = "hidden";
                    document.all.isp_clientemail_d.style.visibility = "hidden";
                    document.all.isp_clientemail_c.style.visibility = "hidden";
                    document.all.contractdetailid_d.style.visibility = "hidden";
                    document.all.contractdetailid_c.style.visibility = "hidden";
                    document.all.contractid_d.style.visibility = "hidden";
                    document.all.contractid_c.style.visibility = "hidden";
                    document.all.isp_1stowner_d.style.visibility = "hidden";
                    document.all.isp_1stowner_c.style.visibility = "hidden";
                    document.all.isp_timesreassigned_d.style.visibility = "hidden";
                    document.all.isp_timesreassigned_c.style.visibility = "hidden";
  //This section will make the Query Category field not required and hidden
                    crmForm.all.isp_querycategory.setAttribute("req", 0);
                    crmForm.all.isp_querycategory_c.className = "n";
                    crmForm.all.isp_querycategory_c.innerHTML =
                    crmForm.all.isp_querycategory_c.innerText;
                    document.all.isp_querycategory_c.style.visibility = "hidden";
                    document.all.isp_querycategory_d.style.visibility = "hidden";
                    break;




                     case 'Call Centre Department':
                        document.all.isp_staffid_d.style.visibility = "hidden";
                        document.all.isp_staffid_c.style.visibility = "hidden";
                        document.all.isp_requestedbyemail_d.style.visibility = "hidden";
                        document.all.isp_requestedbyemail_c.style.visibility = "hidden";
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.contractid_d.style.visibility = "hidden";
                        document.all.contractdetailid_d.style.visibility = "hidden";
                        document.all.isp_departmentval_d.style.visibility = "hidden";
                        document.all.isp_departmentval_c.style.visibility = "hidden";
                        //This section will make the description field not required, and also hide this field
                        crmForm.all.title.setAttribute("req", 0);
                        crmForm.all.title_c.className = "n";
                        crmForm.all.title_c.innerHTML =
                        crmForm.all.title_c.innerText;
                        document.all.title_d.style.visibility = "hidden";
                        document.all.title_c.style.visibility = "hidden";
                        crmForm.all.subjectid.setAttribute("req", 0);
                        crmForm.all.subjectid_c.className = "n";
                        crmForm.all.subjectid_c.innerHTML =
                        crmForm.all.subjectid_c.innerText;
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.ownerid_d.style.visibility = "hidden";
                        document.all.ownerid_c.style.visibility = "hidden";
                        document.all.isp_productcatagory_d.style.visibility = "hidden";
                        document.all.isp_productcatagory_c.style.visibility = "hidden";
                        document.all.isp_product_d.style.visibility = "hidden";
                        document.all.isp_product_c.style.visibility = "hidden";
                        document.all.isp_owneremail_d.style.visibility = "hidden";
                        document.all.isp_owneremail_c.style.visibility = "hidden";
                        document.all.isp_secowneremail_d.style.visibility = "hidden";
                        document.all.isp_secowneremail_c.style.visibility = "hidden";
                        document.all.isp_depmanemail_d.style.visibility = "hidden";
                        document.all.isp_depmanemail_c.style.visibility = "hidden";
                        document.all.isp_depmandirectphone_d.style.visibility = "hidden";
                        document.all.isp_depmandirectphone_c.style.visibility = "hidden";
                        document.all.isp_ownerdirectphone_d.style.visibility = "hidden";
                        document.all.isp_ownerdirectphone_c.style.visibility = "hidden";
                        document.all.isp_secownerdirectphone_d.style.visibility = "hidden";
                        document.all.isp_secownerdirectphone_c.style.visibility = "hidden";
                        document.all.isp_clientemail_d.style.visibility = "hidden";
                        document.all.isp_clientemail_c.style.visibility = "hidden";
                        document.all.isp_queryby_d.style.visibility = "hidden";
                        document.all.isp_queryby_c.style.visibility = "hidden";
                        document.all.isp_branch_d.style.visibility = "hidden";
                        document.all.isp_branch_c.style.visibility = "hidden";
                        document.all.isp_branchref_d.style.visibility = "hidden";
                        document.all.isp_branchref_c.style.visibility = "hidden";
                        document.all.isp_natureofproblem_d.style.visibility = "hidden";
                        document.all.isp_natureofproblem_c.style.visibility = "hidden";
                        document.all.isp_allowclosedemail_d.style.visibility = "hidden";
                        document.all.isp_allowclosedemail_c.style.visibility = "hidden";
                        document.all.isp_opicsref_d.style.visibility = "hidden";
                        document.all.isp_opicsref_c.style.visibility = "hidden";
                        document.all.isp_inwardfunds_d.style.visibility = "hidden";
                        document.all.isp_inwardfunds_c.style.visibility = "hidden";
                        document.all.isp_foreignbankref_d.style.visibility = "hidden";
                        document.all.isp_foreignbankref_c.style.visibility = "hidden";
                        document.all.isp_amount_d.style.visibility = "hidden";
                        document.all.isp_amount_c.style.visibility = "hidden";
                        document.all.isp_sender_d.style.visibility = "hidden";
                        document.all.isp_sender_c.style.visibility = "hidden";
                        document.all.casetypecode_d.style.visibility = "hidden";
                        document.all.casetypecode_c.style.visibility = "hidden";
                        crmForm.all.isp_queryby.setAttribute("req", 0);
                        crmForm.all.isp_queryby_c.className = "n";
                        crmForm.all.isp_queryby_c.innerHTML =
                        crmForm.all.isp_queryby_c.innerText;
                        crmForm.all.isp_natureofproblem.setAttribute("req", 0);
                        crmForm.all.isp_natureofproblem_c.className = "n";
                        crmForm.all.isp_natureofproblem_c.innerHTML =
                        crmForm.all.isp_natureofproblem_c.innerText;
                        crmForm.all.isp_sendemailwithrefno.Disabled = 1;
                        crmForm.all.isp_sendemailwithrefno.ForceSubmit = true;
                        document.all.isp_1stowner_d.style.visibility = "hidden";
                        document.all.isp_1stowner_c.style.visibility = "hidden";
                        document.all.isp_timesreassigned_d.style.visibility = "hidden";
                        document.all.isp_timesreassigned_c.style.visibility = "hidden";

                    break;

   case 'Fleet and Finance':
                   document.all.isp_staffid_d.style.visibility = "";
                    document.all.isp_staffid_c.style.visibility = "";
                    document.all.isp_requestedbyemail_d.style.visibility = "";
                    document.all.isp_requestedbyemail_c.style.visibility = "";
                    crmForm.all.isp_requestedbyemail.Disabled = 1;
                    document.all.isp_descriptionofproblem_d.style.visibility = "";
                    document.all.isp_descriptionofproblem_c.style.visibility = "";
                    //If the Department is I.T Procurement, the Customer field will become not required
                    document.all.isp_queryby_c.style.visibility = "hidden";
                    document.all.isp_queryby_d.style.visibility = "hidden";
                   //This section will make the Action Needed field not required and hidden
                    crmForm.all.isp_queryby.setAttribute("req", 0);
                    crmForm.all.isp_queryby_c.className = "n";
                    crmForm.all.isp_queryby_c.innerHTML =
                    crmForm.all.isp_queryby_c.innerText;
                    document.all.isp_queryby_c.style.visibility = "hidden";
                    document.all.isp_queryby_d.style.visibility = "hidden";
                    document.all.isp_allowclosedemail_c.style.visibility = "hidden";
                    document.all.isp_allowclosedemail_d.style.visibility = "hidden";
                    document.all.isp_branchref_c.style.visibility = "hidden";
                    document.all.isp_branchref_d.style.visibility = "hidden";
                    document.all.isp_opicsref_c.style.visibility = "hidden";
                    document.all.isp_opicsref_d.style.visibility = "hidden";
                    document.all.isp_foreignbankref_c.style.visibility = "hidden";
                    document.all.isp_foreignbankref_d.style.visibility = "hidden";
                    document.all.isp_inwardfunds_c.style.visibility = "hidden";
                    document.all.isp_inwardfunds_d.style.visibility = "hidden";
                    document.all.isp_amount_c.style.visibility = "hidden";
                    document.all.isp_amount_d.style.visibility = "hidden";
                    document.all.isp_sender_c.style.visibility = "hidden";
                    document.all.isp_sender_d.style.visibility = "hidden";
                    //This section will make the Dont Send Resolved email field not required and hidden
                    crmForm.all.isp_allowclosedemail.setAttribute("req", 0);
                    crmForm.all.isp_allowclosedemail_c.className = "n";
                    crmForm.all.isp_allowclosedemail_c.innerHTML =
                    crmForm.all.isp_allowclosedemail_c.innerText;
                    document.all.isp_allowclosedemail_c.style.visibility = "hidden";
                    document.all.isp_allowclosedemail_d.style.visibility = "hidden";
                    //This section will make the Nature of Problem field not required and hidden
                    crmForm.all.isp_natureofproblem.setAttribute("req", 0);
                    crmForm.all.isp_natureofproblem_c.className = "n";
                    crmForm.all.isp_natureofproblem_c.innerHTML =
                     crmForm.all.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "";
                    document.all.isp_natureofproblem_d.style.visibility = "";
                    //This section will bring up the Description of the Case to be filled in by the person logging the request
                    crmForm.all.title.setAttribute("req", 0);
                    crmForm.all.title_c.className = "n";
                    crmForm.all.title_c.innerHTML =
                    crmForm.all.title_c.innerText;
                    document.all.title_d.style.visibility = "hidden";
                    document.all.title_c.style.visibility = "hidden";
                    crmForm.all.subjectid.setAttribute("req", 0);
                    crmForm.all.subjectid_c.className = "n";
                    crmForm.all.subjectid_c.innerHTML =
                    crmForm.all.subjectid_c.innerText;
                    document.all.subjectid_d.style.visibility = "hidden";
                    document.all.subjectid_d.style.visibility = "hidden";
                    document.all.ownerid_d.style.visibility = "hidden";
                    document.all.ownerid_c.style.visibility = "hidden";
                    document.all.isp_productcatagory_d.style.visibility = "hidden";
                    document.all.isp_productcatagory_c.style.visibility = "hidden";
                    document.all.isp_product_d.style.visibility = "hidden";
                    document.all.isp_product_c.style.visibility = "hidden";
                    document.all.isp_owneremail_d.style.visibility = "hidden";
                    document.all.isp_owneremail_c.style.visibility = "hidden";
                    document.all.isp_secowneremail_d.style.visibility = "hidden";
                    document.all.isp_secowneremail_c.style.visibility = "hidden";
                    document.all.isp_depmanemail_d.style.visibility = "hidden";
                    document.all.isp_depmanemail_c.style.visibility = "hidden";
                    document.all.isp_depmandirectphone_d.style.visibility = "hidden";
                    document.all.isp_depmandirectphone_c.style.visibility = "hidden";
                    document.all.isp_ownerdirectphone_d.style.visibility = "hidden";
                    document.all.isp_ownerdirectphone_c.style.visibility = "hidden";
                    document.all.isp_secownerdirectphone_d.style.visibility = "hidden";
                    document.all.isp_secownerdirectphone_c.style.visibility = "hidden";
                    document.all.isp_clientemail_d.style.visibility = "hidden";
                    document.all.isp_clientemail_c.style.visibility = "hidden";
                    document.all.contractdetailid_d.style.visibility = "hidden";
                    document.all.contractdetailid_c.style.visibility = "hidden";
                    document.all.contractid_d.style.visibility = "hidden";
                    document.all.contractid_c.style.visibility = "hidden";
                    document.all.isp_1stowner_d.style.visibility = "hidden";
                    document.all.isp_1stowner_c.style.visibility = "hidden";
                    document.all.isp_timesreassigned_d.style.visibility = "hidden";
                    document.all.isp_timesreassigned_c.style.visibility = "hidden";
                    break;

                   case 'HR Department':
                    document.all.isp_staffid_d.style.visibility = "";
                    document.all.isp_staffid_c.style.visibility = "";
                    crmForm.all.casetypecode.DataValue = 200001;
                    crmForm.all.caseorigincode.DataValue = 2;
                    document.all.isp_descriptionofproblem_d.style.visibility = "";
                    document.all.isp_descriptionofproblem_c.style.visibility = "";
                    //If the Department is I.T Procurement, the Customer field will become not required
                    crmForm.all.customerid.Disabled = 1;
                    crmForm.all.customerid.setAttribute("req", 0);
                    crmForm.all.customerid_c.className = "n";
                    crmForm.all.customerid_c.innerHTML =
                    crmForm.all.customerid_c.innerText;
                    document.all.customerid_c.style.visibility = "hidden";
                    document.all.customerid_d.style.visibility = "hidden";
                    //This section will make the Action Needed field not required and hidden
                    crmForm.all.isp_queryby.setAttribute("req", 0);
                    crmForm.all.isp_queryby_c.className = "n";
                    crmForm.all.isp_queryby_c.innerHTML =
                    crmForm.all.isp_queryby_c.innerText;
                    document.all.isp_queryby_c.style.visibility = "hidden";
                    document.all.isp_queryby_d.style.visibility = "hidden";
                    document.all.isp_allowclosedemail_c.style.visibility = "hidden";
                    document.all.isp_allowclosedemail_d.style.visibility = "hidden";
                    document.all.isp_branchref_c.style.visibility = "hidden";
                    document.all.isp_branchref_d.style.visibility = "hidden";
                    document.all.isp_opicsref_c.style.visibility = "hidden";
                    document.all.isp_opicsref_d.style.visibility = "hidden";
                    document.all.isp_foreignbankref_c.style.visibility = "hidden";
                    document.all.isp_foreignbankref_d.style.visibility = "hidden";
                    document.all.isp_inwardfunds_c.style.visibility = "hidden";
                    document.all.isp_inwardfunds_d.style.visibility = "hidden";
                    document.all.isp_amount_c.style.visibility = "hidden";
                    document.all.isp_amount_d.style.visibility = "hidden";
                    document.all.isp_sender_c.style.visibility = "hidden";
                    document.all.isp_sender_d.style.visibility = "hidden";
                    //This section will make the Nature of Problem field not required and hidden
                    crmForm.all.isp_natureofproblem.setAttribute("req", 0);
                    crmForm.all.isp_natureofproblem_c.className = "n";
                    crmForm.all.isp_natureofproblem_c.innerHTML =
                    crmForm.all.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "hidden";
                    document.all.isp_natureofproblem_d.style.visibility = "hidden";
                    //This section will bring up the Description of the Case to be filled in by the person logging the request
                    crmForm.all.title.setAttribute("req", 0);
                    crmForm.all.title_c.className = "n";
                    crmForm.all.title_c.innerHTML =
                    crmForm.all.title_c.innerText;
                    document.all.title_d.style.visibility = "hidden";
                    document.all.title_c.style.visibility = "hidden";
                    document.all.isp_productcatagory_d.style.visibility = "hidden";
                    document.all.isp_productcatagory_c.style.visibility = "hidden";
                    document.all.isp_product_d.style.visibility = "hidden";
                    document.all.isp_product_c.style.visibility = "hidden";
                    document.all.isp_clientemail_d.style.visibility = "hidden";
                    document.all.isp_clientemail_c.style.visibility = "hidden";
                    document.all.isp_requestedbyemail_d.style.visibility = "hidden";
                    document.all.isp_requestedbyemail_c.style.visibility = "hidden";
                    document.all.isp_ownerdirectphone_d.style.visibility = "hidden";
                    document.all.isp_ownerdirectphone_c.style.visibility = "hidden";
                    document.all.isp_depmanemail_d.style.visibility = "hidden";
                    document.all.isp_depmanemail_c.style.visibility = "hidden";
                    document.all.isp_secowneremail_d.style.visibility = "hidden";
                    document.all.isp_secowneremail_c.style.visibility = "hidden";
                    document.all.isp_owneremail_d.style.visibility = "hidden";
                    document.all.isp_owneremail_c.style.visibility = "hidden";

                    document.all.isp_depmandirectphone_d.style.visibility = "hidden";
                    document.all.isp_depmandirectphone_c.style.visibility = "hidden";
                    document.all.isp_secownerdirectphone_d.style.visibility = "hidden";
                    document.all.isp_secownerdirectphone_c.style.visibility = "hidden";
                    document.all.isp_owneremail_d.style.visibility = "hidden";
                    document.all.isp_owneremail_c.style.visibility = "hidden";
                    document.all.contractdetailid_d.style.visibility = "hidden";
                    document.all.contractdetailid_c.style.visibility = "hidden";
                    document.all.contractid_d.style.visibility = "hidden";
                    document.all.contractid_c.style.visibility = "hidden";
                    document.all.ownerid_d.style.visibility = "hidden";
                    document.all.ownerid_c.style.visibility = "hidden";
                    document.all.subjectid_d.style.visibility = "hidden";
                    document.all.subjectid_c.style.visibility = "hidden";
                    document.all.isp_1stowner_d.style.visibility = "hidden";
                    document.all.isp_1stowner_c.style.visibility = "hidden";
                    document.all.isp_timesreassigned_d.style.visibility = "hidden";
                    document.all.isp_timesreassigned_c.style.visibility = "hidden";


                    break;
                    case 'Back Office Department':
                        document.all.isp_staffid_d.style.visibility = "hidden";
                        document.all.isp_staffid_c.style.visibility = "hidden";
                        document.all.isp_requestedbyemail_d.style.visibility = "hidden";
                        document.all.isp_requestedbyemail_c.style.visibility = "hidden";
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.contractid_d.style.visibility = "hidden";
                        document.all.contractdetailid_d.style.visibility = "hidden";
                        document.all.isp_departmentval_d.style.visibility = "hidden";
                        document.all.isp_departmentval_c.style.visibility = "hidden";
                        document.all.isp_descriptionofproblem_d.style.visibility = "";
                        document.all.isp_descriptionofproblem_c.style.visibility = "";
                        //This section will make the description field not required, and also hide this field
                        crmForm.all.title.setAttribute("req", 0);
                        crmForm.all.title_c.className = "n";
                        crmForm.all.title_c.innerHTML =
                        crmForm.all.title_c.innerText;
                        document.all.title_d.style.visibility = "hidden";
                        document.all.title_c.style.visibility = "hidden";
                        crmForm.all.subjectid.setAttribute("req", 0);
                        crmForm.all.subjectid_c.className = "n";
                        crmForm.all.subjectid_c.innerHTML =
                        crmForm.all.subjectid_c.innerText;
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.ownerid_d.style.visibility = "hidden";
                        document.all.ownerid_c.style.visibility = "hidden";
                        document.all.isp_productcatagory_d.style.visibility = "hidden";
                        document.all.isp_productcatagory_c.style.visibility = "hidden";
                        document.all.isp_product_d.style.visibility = "hidden";
                        document.all.isp_product_c.style.visibility = "hidden";
                        document.all.isp_owneremail_d.style.visibility = "hidden";
                        document.all.isp_owneremail_c.style.visibility = "hidden";
                        document.all.isp_secowneremail_d.style.visibility = "hidden";
                        document.all.isp_secowneremail_c.style.visibility = "hidden";
                        document.all.isp_depmanemail_d.style.visibility = "hidden";
                        document.all.isp_depmanemail_c.style.visibility = "hidden";
                        document.all.isp_depmandirectphone_d.style.visibility = "hidden";
                        document.all.isp_depmandirectphone_c.style.visibility = "hidden";
                        document.all.isp_ownerdirectphone_d.style.visibility = "hidden";
                        document.all.isp_ownerdirectphone_c.style.visibility = "hidden";
                        document.all.isp_secownerdirectphone_d.style.visibility = "hidden";
                        document.all.isp_secownerdirectphone_c.style.visibility = "hidden";
                        document.all.isp_clientemail_d.style.visibility = "hidden";
                        document.all.isp_clientemail_c.style.visibility = "hidden";
                        document.all.isp_timesreassigned_d.style.visibility = "hidden";
                        document.all.isp_timesreassigned_c.style.visibility = "hidden";
                        document.all.isp_category_d.style.visibility = "hidden";
                        document.all.isp_category_c.style.visibility = "hidden";
  //This section will make the Query Category field not required and hidden
                    crmForm.all.isp_querycategory.setAttribute("req", 0);
                    crmForm.all.isp_querycategory_c.className = "n";
                    crmForm.all.isp_querycategory_c.innerHTML =
                    crmForm.all.isp_querycategory_c.innerText;
                    break;
  case 'Rand Department':
                        document.all.isp_staffid_d.style.visibility = "hidden";
                        document.all.isp_staffid_c.style.visibility = "hidden";
                        document.all.isp_requestedbyemail_d.style.visibility = "hidden";
                        document.all.isp_requestedbyemail_c.style.visibility = "hidden";
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.contractid_d.style.visibility = "hidden";
                        document.all.contractdetailid_d.style.visibility = "hidden";
                        document.all.isp_departmentval_d.style.visibility = "hidden";
                        document.all.isp_departmentval_c.style.visibility = "hidden";
                        document.all.isp_descriptionofproblem_d.style.visibility = "";
                        document.all.isp_descriptionofproblem_c.style.visibility = "";
                        //This section will make the description field not required, and also hide this field
                        crmForm.all.title.setAttribute("req", 0);
                        crmForm.all.title_c.className = "n";
                        crmForm.all.title_c.innerHTML =
                        crmForm.all.title_c.innerText;
                        document.all.title_d.style.visibility = "hidden";
                        document.all.title_c.style.visibility = "hidden";
                        crmForm.all.subjectid.setAttribute("req", 0);
                        crmForm.all.subjectid_c.className = "n";
                        crmForm.all.subjectid_c.innerHTML =
                        crmForm.all.subjectid_c.innerText;
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.ownerid_d.style.visibility = "hidden";
                        document.all.ownerid_c.style.visibility = "hidden";
                        document.all.isp_productcatagory_d.style.visibility = "hidden";
                        document.all.isp_productcatagory_c.style.visibility = "hidden";
                        document.all.isp_product_d.style.visibility = "hidden";
                        document.all.isp_product_c.style.visibility = "hidden";
                        document.all.isp_owneremail_d.style.visibility = "hidden";
                        document.all.isp_owneremail_c.style.visibility = "hidden";
                        document.all.isp_secowneremail_d.style.visibility = "hidden";
                        document.all.isp_secowneremail_c.style.visibility = "hidden";
                        document.all.isp_depmanemail_d.style.visibility = "hidden";
                        document.all.isp_depmanemail_c.style.visibility = "hidden";
                        document.all.isp_depmandirectphone_d.style.visibility = "hidden";
                        document.all.isp_depmandirectphone_c.style.visibility = "hidden";
                        document.all.isp_ownerdirectphone_d.style.visibility = "hidden";
                        document.all.isp_ownerdirectphone_c.style.visibility = "hidden";
                        document.all.isp_secownerdirectphone_d.style.visibility = "hidden";
                        document.all.isp_secownerdirectphone_c.style.visibility = "hidden";
                        document.all.isp_clientemail_d.style.visibility = "hidden";
                        document.all.isp_clientemail_c.style.visibility = "hidden";
                        document.all.isp_timesreassigned_d.style.visibility = "hidden";
                        document.all.isp_timesreassigned_c.style.visibility = "hidden";
                        document.all.isp_category_d.style.visibility = "hidden";
                        document.all.isp_category_c.style.visibility = "hidden";

                    //This section will make the Nature of Problem field not required and hidden
                    crmForm.all.isp_natureofproblem.setAttribute("req", 0);
                    crmForm.all.isp_natureofproblem_c.className = "n";
                    crmForm.all.isp_natureofproblem_c.innerHTML =
                    crmForm.all.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "hidden";
                    document.all.isp_natureofproblem_d.style.visibility = "hidden";

                    break;
                    case 'Rand Department':
                        document.all.isp_staffid_d.style.visibility = "hidden";
                        document.all.isp_staffid_c.style.visibility = "hidden";
                        document.all.isp_requestedbyemail_d.style.visibility = "hidden";
                        document.all.isp_requestedbyemail_c.style.visibility = "hidden";
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.contractid_d.style.visibility = "hidden";
                        document.all.contractdetailid_d.style.visibility = "hidden";
                        document.all.isp_departmentval_d.style.visibility = "hidden";
                        document.all.isp_departmentval_c.style.visibility = "hidden";
                        document.all.isp_descriptionofproblem_d.style.visibility = "hidden";
                        document.all.isp_descriptionofproblem_c.style.visibility = "hidden";
                        //This section will make the description field not required, and also hide this field
                        crmForm.all.title.setAttribute("req", 0);
                        crmForm.all.title_c.className = "n";
                        crmForm.all.title_c.innerHTML =
                        crmForm.all.title_c.innerText;
                        document.all.title_d.style.visibility = "hidden";
                        document.all.title_c.style.visibility = "hidden";
                        crmForm.all.subjectid.setAttribute("req", 0);
                        crmForm.all.subjectid_c.className = "n";
                        crmForm.all.subjectid_c.innerHTML =
                        crmForm.all.subjectid_c.innerText;
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.ownerid_d.style.visibility = "hidden";
                        document.all.ownerid_c.style.visibility = "hidden";
                        document.all.isp_productcatagory_d.style.visibility = "hidden";
                        document.all.isp_productcatagory_c.style.visibility = "hidden";
                        document.all.isp_product_d.style.visibility = "hidden";
                        document.all.isp_product_c.style.visibility = "hidden";
                        document.all.isp_owneremail_d.style.visibility = "hidden";
                        document.all.isp_owneremail_c.style.visibility = "hidden";
                        document.all.isp_secowneremail_d.style.visibility = "hidden";
                        document.all.isp_secowneremail_c.style.visibility = "hidden";
                        document.all.isp_depmanemail_d.style.visibility = "hidden";
                        document.all.isp_depmanemail_c.style.visibility = "hidden";
                        document.all.isp_depmandirectphone_d.style.visibility = "hidden";
                        document.all.isp_depmandirectphone_c.style.visibility = "hidden";
                        document.all.isp_ownerdirectphone_d.style.visibility = "hidden";
                        document.all.isp_ownerdirectphone_c.style.visibility = "hidden";
                        document.all.isp_secownerdirectphone_d.style.visibility = "hidden";
                        document.all.isp_secownerdirectphone_c.style.visibility = "hidden";
                        document.all.isp_clientemail_d.style.visibility = "hidden";
                        document.all.isp_clientemail_c.style.visibility = "hidden";
                        document.all.isp_1stowner_d.style.visibility = "hidden";
                        document.all.isp_1stowner_c.style.visibility = "hidden";
                        document.all.isp_timesreassigned_d.style.visibility = "hidden";
                        document.all.isp_timesreassigned_c.style.visibility = "hidden";
 //This section will make the Nature of Problem field not required and hidden
                    crmForm.all.isp_natureofproblem.setAttribute("req", 0);
                    crmForm.all.isp_natureofproblem_c.className = "n";
                    crmForm.all.isp_natureofproblem_c.innerHTML =
                    crmForm.all.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "hidden";
                    document.all.isp_natureofproblem_d.style.visibility = "hidden";
                    break;
case 'Private Banking Dept':
                        document.all.isp_staffid_d.style.visibility = "hidden";
                        document.all.isp_staffid_c.style.visibility = "hidden";
                        document.all.isp_requestedbyemail_d.style.visibility = "hidden";
                        document.all.isp_requestedbyemail_c.style.visibility = "hidden";
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.contractid_d.style.visibility = "hidden";
                        document.all.contractdetailid_d.style.visibility = "hidden";
                        document.all.isp_departmentval_d.style.visibility = "hidden";
                        document.all.isp_departmentval_c.style.visibility = "hidden";
                        document.all.isp_descriptionofproblem_d.style.visibility = "";
                        document.all.isp_descriptionofproblem_c.style.visibility = "";
                        //This section will make the description field not required, and also hide this field
                        crmForm.all.title.setAttribute("req", 0);
                        crmForm.all.title_c.className = "n";
                        crmForm.all.title_c.innerHTML =
                        crmForm.all.title_c.innerText;
                        document.all.title_d.style.visibility = "hidden";
                        document.all.title_c.style.visibility = "hidden";
                        crmForm.all.subjectid.setAttribute("req", 0);
                        crmForm.all.subjectid_c.className = "n";
                        crmForm.all.subjectid_c.innerHTML =
                        crmForm.all.subjectid_c.innerText;
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.subjectid_d.style.visibility = "hidden";
                        document.all.ownerid_d.style.visibility = "hidden";
                        document.all.ownerid_c.style.visibility = "hidden";
                        document.all.isp_productcatagory_d.style.visibility = "hidden";
                        document.all.isp_productcatagory_c.style.visibility = "hidden";
                        document.all.isp_product_d.style.visibility = "hidden";
                        document.all.isp_product_c.style.visibility = "hidden";
                        document.all.isp_owneremail_d.style.visibility = "hidden";
                        document.all.isp_owneremail_c.style.visibility = "hidden";
                        document.all.isp_secowneremail_d.style.visibility = "hidden";
                        document.all.isp_secowneremail_c.style.visibility = "hidden";
                        document.all.isp_depmanemail_d.style.visibility = "hidden";
                        document.all.isp_depmanemail_c.style.visibility = "hidden";
                        document.all.isp_depmandirectphone_d.style.visibility = "hidden";
                        document.all.isp_depmandirectphone_c.style.visibility = "hidden";
                        document.all.isp_ownerdirectphone_d.style.visibility = "hidden";
                        document.all.isp_ownerdirectphone_c.style.visibility = "hidden";
                        document.all.isp_secownerdirectphone_d.style.visibility = "hidden";
                        document.all.isp_secownerdirectphone_c.style.visibility = "hidden";
                        document.all.isp_clientemail_d.style.visibility = "hidden";
                        document.all.isp_clientemail_c.style.visibility = "hidden";
                        document.all.isp_timesreassigned_d.style.visibility = "hidden";
                        document.all.isp_timesreassigned_c.style.visibility = "hidden";
                        document.all.isp_category_d.style.visibility = "hidden";
                        document.all.isp_category_c.style.visibility = "hidden";


                    break;
                case 'Finance Department':
                    document.all.isp_staffid_d.style.visibility = "hidden";
                    document.all.isp_staffid_c.style.visibility = "hidden";
                    document.all.isp_requestedbyemail_d.style.visibility = "hidden";
                    document.all.isp_requestedbyemail_c.style.visibility = "hidden";
                    document.all.subjectid_d.style.visibility = "hidden";
                    document.all.contractid_d.style.visibility = "hidden";
                    document.all.contractdetailid_d.style.visibility = "hidden";
                    document.all.isp_departmentval_d.style.visibility = "hidden";
                    document.all.isp_departmentval_c.style.visibility = "hidden";
                    document.all.isp_descriptionofproblem_d.style.visibility = "hidden";
                    document.all.isp_descriptionofproblem_c.style.visibility = "hidden";
                    //This section will make the description field not required, and also hide this field
                    crmForm.all.title.setAttribute("req", 0);
                    crmForm.all.title_c.className = "n";
                    crmForm.all.title_c.innerHTML =
                    crmForm.all.title_c.innerText;
                    document.all.title_d.style.visibility = "hidden";
                    document.all.title_c.style.visibility = "hidden";
                    crmForm.all.subjectid.setAttribute("req", 0);
                    crmForm.all.subjectid_c.className = "n";
                    crmForm.all.subjectid_c.innerHTML =
                    crmForm.all.subjectid_c.innerText;
                    document.all.subjectid_d.style.visibility = "hidden";
                    document.all.subjectid_d.style.visibility = "hidden";
                    document.all.ownerid_d.style.visibility = "hidden";
                    document.all.ownerid_c.style.visibility = "hidden";
                    document.all.isp_productcatagory_d.style.visibility = "hidden";
                    document.all.isp_productcatagory_c.style.visibility = "hidden";
                    document.all.isp_product_d.style.visibility = "hidden";
                    document.all.isp_product_c.style.visibility = "hidden";
                    document.all.isp_owneremail_d.style.visibility = "hidden";
                    document.all.isp_owneremail_c.style.visibility = "hidden";
                    document.all.isp_secowneremail_d.style.visibility = "hidden";
                    document.all.isp_secowneremail_c.style.visibility = "hidden";
                    document.all.isp_depmanemail_d.style.visibility = "hidden";
                    document.all.isp_depmanemail_c.style.visibility = "hidden";
                    document.all.isp_depmandirectphone_d.style.visibility = "hidden";
                    document.all.isp_depmandirectphone_c.style.visibility = "hidden";
                    document.all.isp_ownerdirectphone_d.style.visibility = "hidden";
                    document.all.isp_ownerdirectphone_c.style.visibility = "hidden";
                    document.all.isp_secownerdirectphone_d.style.visibility = "hidden";
                    document.all.isp_secownerdirectphone_c.style.visibility = "hidden";
                    document.all.isp_clientemail_d.style.visibility = "hidden";
                    document.all.isp_clientemail_c.style.visibility = "hidden";
                    document.all.isp_1stowner_d.style.visibility = "hidden";
                    document.all.isp_1stowner_c.style.visibility = "hidden";
                    document.all.isp_timesreassigned_d.style.visibility = "hidden";
                    document.all.isp_timesreassigned_c.style.visibility = "hidden";
                    break;

            }
        }
}
var strEscalationStatus = crmForm.all.isp_escalationstatus;
if (strEscalationStatus.DataValue != null) {
    switch (strEscalationStatus.SelectedText) {
        case 'Stage1':
            crmForm.all.isp_acceptedowner.Disabled = 1;
            break;
        case 'Stage2':
            crmForm.all.isp_acceptedsecowner.Disabled = 1;
            crmForm.all.isp_acceptedowner.Disabled = 1;
            break;
        case 'Stage3':
            crmForm.all.isp_acceptedmanager.Disabled = 1;
            crmForm.all.isp_acceptedsecowner.Disabled = 1;
            crmForm.all.isp_acceptedowner.Disabled = 1;
            break;
    }
}
if (crmForm.FormType == 4) {
    var strStatus = crmForm.all.statuscode;
    var dtResolvedDate = crmForm.all.isp_dateresolved;
    if (strStatus.DataValue != null) {
        switch (strStatus.SelectedText) {
            case 'Problem Solved':
                if (dtResolvedDate.DataValue != null) {
                    var one_day = 1000 * 60 * 60
                    var StartDate = crmForm.all.createdon.DataValue;
                    var EndDate = crmForm.all.isp_dateresolved.DataValue;
                    oAlert = Math.ceil((EndDate.getTime() - StartDate.getTime()) / (one_day));
                    crmForm.all.isp_totaltime.DataValue = oAlert;
                    crmForm.all.isp_totaldays.DataValue = crmForm.all.isp_totaltime.DataValue / 24
                    break;
                    if (dtResolvedDate.DataValue == null) {
                        alert("The Resolved Date for this Customer Feedback was never calculated, please click ok and continue");
                        break;
                    }
                }
        }
    }
}
}
function Form_onsave()
{
//onSave event of Customer Feedback form
// Perform this work only on Create
if (crmForm.FormType == 1) {
    //This section will update the Owner Email Field when a value gets updated in this field. this event
    //is fired with the OnChange event of the isp_owner field in the Escalation Trail.
    var oOwner = crmForm.all.isp_owner;
    var oOwnerEmail = crmForm.all.isp_owneremail;
    var oOwnerDirectPhone = crmForm.all.isp_ownerdirectphone;
    var oSecOwner = crmForm.all.isp_secondaryowner;
    var oSecOwnerEmail = crmForm.all.isp_secowneremail;
    var oSecOwnerDirectPhone = crmForm.all.isp_secownerdirectphone;
    var oDeptMan = crmForm.all.isp_departmentmanager;
    var oDeptManEmail = crmForm.all.isp_depmanemail;
    var oDepManDirectPhone = crmForm.all.isp_depmandirectphone;
    var strEscalationStatus = crmForm.all.isp_escalationstatus;
    if (strEscalationStatus.DataValue != null) {
        switch (strEscalationStatus.SelectedText) {
            case 'Stage1':
                crmForm.all.isp_acceptedowner.Disabled = 1;
                crmForm.all.isp_acceptedowner.ForceSubmit = true;
                break;
            case 'Stage2':
                crmForm.all.isp_acceptedsecowner.Disabled = 1;
                crmForm.all.isp_acceptedowner.Disabled = 1;
                crmForm.all.isp_acceptedsecowner.ForceSubmit = true;
                crmForm.all.isp_acceptedowner.ForceSubmit = true;
                break;
            case 'Stage3':
                crmForm.all.isp_acceptedmanager.Disabled = 1;
                crmForm.all.isp_acceptedsecowner.Disabled = 1;
                crmForm.all.isp_acceptedowner.Disabled = 1;
                crmForm.all.isp_acceptedmanager.ForceSubmit = true;
                crmForm.all.isp_acceptedsecowner.ForceSubmit = true;
                crmForm.all.isp_acceptedowner.ForceSubmit = true;
                break;
        }
    }
     if (oOwner.DataValue != null) {
        switch (oOwner.SelectedText) {
            case 'Barbara Turner':
                oOwnerEmail.DataValue = "morne.vandermerwe@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "021-431 7913";
                break;

             case 'Debbie Perry':
                oOwnerEmail.DataValue = "morne.vandermerwe@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "031-307 2625";
                break;

            case 'Shamilla August':
                oOwnerEmail.DataValue = "Shamilla.August@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3034";
                break;
            case 'Juliet Mabote ':
                oOwnerEmail.DataValue = "Juliet.Mabote@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3079";
                break;
                case 'Maria Ramashia':
                oOwnerEmail.DataValue = "Maria.Ramashia@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3252";
                break;

                case 'Marise Petersen':
                oOwnerEmail.DataValue = "Marise.Petersen@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3055";
                break;

                case 'Eleanor Pillay':
                oOwnerEmail.DataValue = "Eleanor.Pillay@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Meeshana Mangru':
                oOwnerEmail.DataValue = "Meeshana.Mangru@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Thabiso Siswana':
                oOwnerEmail.DataValue = "Thabiso.Siswana@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Tebogo Tau':
                oOwnerEmail.DataValue = "Tebogo.Tau@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Princess Seripa':
                oOwnerEmail.DataValue = "Princess.Seripa@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Precious Seobi':
                oOwnerEmail.DataValue = "Precious.Seobi@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Jabulile Shongwe':
                oOwnerEmail.DataValue = "Jabulile.Shongwe@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Mathilene Henn':
                oOwnerEmail.DataValue = "Mathilene.Henn@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Lungu Mchunu':
                oOwnerEmail.DataValue = "Lungu.Mchunu@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Khensani Matjebe':
                oOwnerEmail.DataValue = "Khensani.Matjebe@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;
                case 'Werner Goosen':
                oOwnerEmail.DataValue = "Werner.Goosen@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3031";
                break;
                 case 'Wendy Armstrong':
                oOwnerEmail.DataValue = "Wendy.Armstrong@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3185";
                break;
                case 'Sherazaan Mia':
                oOwnerEmail.DataValue = "Sherazaan.Mia@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3081";
                break;
                case 'Jacqui Gibb':
                oOwnerEmail.DataValue = "Jacqui.Gibb@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3320";
                break;
                case 'Cameron May':
                oOwnerEmail.DataValue = "Cameron.May@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3571";
                break;
                 case 'Thashnee Pillay':
                oOwnerEmail.DataValue = "Thashnee.Pillay@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3601";
                break;
                case 'Nadine Moodley':
                oOwnerEmail.DataValue = "Nadine.Moodley@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;
		case 'Talent Kubheka':
                oOwnerEmail.DataValue = "Talent.Kubheka@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3249";
                break;
			case 'Amy Pillay':
            oOwnerEmail.DataValue = "Amy.Pillay@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011 407 3221";
            break;


		case 'Christiaan Oldewage':
                oOwnerEmail.DataValue = "Christiaan.Oldewage@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3206";
                break;
	case 'Roy Minton':
                oOwnerEmail.DataValue = "Roy.Minton@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3228";
                break;

	case 'Bileen Jackson':
                oOwnerEmail.DataValue = "Bileen.Jackson@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3435";
                break;
                case 'Gavin Sullivan':
                oOwnerEmail.DataValue = "Gavin.Sullivan@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "021 431 7718";
                break;

	case 'Melanie Browne':
                oOwnerEmail.DataValue = "Melanie.Browne@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3623";
                break;

	case 'Ashleigh Khoury':
                oOwnerEmail.DataValue = "Ashleigh.Khoury@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3290";
                break;

	    case 'Iris Busby':
            oOwnerEmail.DataValue = "iris.Busby@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3081";
            break;

             case 'Charmaine Singh':
            oOwnerEmail.DataValue = "Charmaine.Singh@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3435";
            break;

			 case 'Ziad Moolla':
            oOwnerEmail.DataValue = "Ziad.Moolla@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3083";
            break;

			case 'Innocentia Rampa':
            oOwnerEmail.DataValue = "innocentia.rampa@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3333";
            break;

			case 'Tyler Ormandy':
            oOwnerEmail.DataValue = "Tyler.Ormandy@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3335";
            break;

			case 'Shoneez Ben':
            oOwnerEmail.DataValue = "Shoneez.Ben@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3311";
            break;

		    case 'Gareth Robinson':
                oOwnerEmail.DataValue = "Gareth.Robinson@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3214";
                break;

		   case 'Motshidisi Shibambo':
                 oOwnerEmail.DataValue = "Motshidisi.Shibambo@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3571";
                break;

				case 'Ayanda Makhado':
                oOwnerEmail.DataValue = "ayanda.makhado@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 7309";
                break;

				case 'Micael Van Heerden':
                oOwnerEmail.DataValue = "Micael.VanHeerden@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3563";
                break;

				case 'Bileen Jackson':
                oOwnerEmail.DataValue = "bileen.jackson@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3435";
                break;

				case 'Moleti Moime':
                oOwnerEmail.DataValue = "Moleti.Moime@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3573";
                break;

				case 'Fritz Klee':
                oOwnerEmail.DataValue = "Fritz.Klee@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3573";
                break;

				case 'Bianca Chutumia':
                oOwnerEmail.DataValue = "Bianca.Chutumia@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3254";
                break;

				case 'Delores Cornelius':
                oOwnerEmail.DataValue = "Delores.Cornelius@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3318";
                break;

				case 'Tebogo Makgwana':
                oOwnerEmail.DataValue = "Tebogo.Makgwana@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3075";
                break;

				case 'Jan Lombard':
                oOwnerEmail.DataValue = "Jan Lombard@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3216";
                break;

                case 'Anish Daya':
                oOwnerEmail.DataValue = "Anish.Daya@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3337";
                break;
                case 'Naomi Van Schalkwyk':
                oSecOwnerEmail.DataValue = "naomi.vanschalkwyk@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011-407 3044";
                break;
               case 'Jacqueline Durgapersad':
                oOwnerEmail.DataValue = "Jacqueline.Durgapersad@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "021 940 2152";
                break;
                case 'Craig Petersen':
                oOwnerEmail.DataValue = "Craig.Petersen@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "021 940 2152";
                break;
                case 'Racqual Faro':
                oOwnerEmail.DataValue = "Racqual.Faro@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "022 703 3537";
                break;
                case 'Karen Pillay':
                oOwnerEmail.DataValue = "Karen.Pillay@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3602";
                break;
                case 'Lucinda van Heerden':
                oOwnerEmail.DataValue = "Lucinda.vanHeerden@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3606";
                break;
                case 'Xoliswa Mashaba':
                oOwnerEmail.DataValue = "Xoliswa.Mashaba@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3607";
                break;
                 case 'Annemarie Kock':
                oOwnerEmail.DataValue = "Annemarie.Kock@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "031 361 5887";
                break;
                case 'Riva Naicker':
                oOwnerEmail.DataValue = "Riva.Naicker@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "031 361 5887";
                break;
                case 'Loshni Naidoo':
                oOwnerEmail.DataValue = "Loshni.Naidoo@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "035 906 7725";
                break;
                case 'Desire Kruger':
                oOwnerEmail.DataValue = "Desire.Kruger@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "035 906 7725";
                break;
                case 'Kevan Pillay':
                oOwnerEmail.DataValue = "Kevan.Pillay@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "035 906 7725";
                break;
                case 'Sharendra Chedie':
                oOwnerEmail.DataValue = "Sharendra.Chedie@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "036 271 2120";
                break;
                case 'Joanne van der Merwe':
                oOwnerEmail.DataValue = "Joanne.vanderMerwe@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "041 507 2622";
                break;
                case 'Tracy Uys':
                oOwnerEmail.DataValue = "Tracy.Uys@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "053 841 0846";
                break;
                 case 'Vee Van der Merwe':
                oOwnerEmail.DataValue = "Vee.VanderMerwe@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "021 431 7705";
                break;
                case 'Marie van Der Berg':
                oOwnerEmail.DataValue = "Marie.vanDerBerg@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "051 408 2014";
                break;
                case 'meggan fensham':
                oOwnerEmail.DataValue = "meggan.fensham@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3143";
                break;
                case 'Frances Kruger':
                oOwnerEmail.DataValue = "Frances.Kruger@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "031 361 5887";
                break;
                case 'Lee-Ann Ripley-Evans':
                oOwnerEmail.DataValue = "Lee-Ann.Ripley-Evans@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "031 361 5887";
                break;
                case 'Peter Manyako':
                oOwnerEmail.DataValue = "Peter.Manyako@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3214";
                break;
                case 'Xanthi Johaar':
                oOwnerEmail.DataValue = "Peter.Manyako@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3214";
                break;

               }
    }
    if (oSecOwner.DataValue != null) {
        switch (oSecOwner.SelectedText) {
            case 'Colleen Prinsloo':
                oSecOwnerEmail.DataValue = "colleen.prinsloo@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011-407 3111";
                break;

             case 'Leonardo Hefer':
                oSecOwnerEmail.DataValue = "Leonardo.Hefer@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011-407 3115";
                break;

		case 'Ashleigh Khoury':
                oSecOwnerEmail.DataValue = "Ashleigh.Khoury@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011-407 3290";
                break;
            case 'Deborah Medlicott':
                oSecOwnerEmail.DataValue = "deborah.medlicott@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011-407 3009";
                break;
            case 'Sheena Parsons':
                oSecOwnerEmail.DataValue = "Sheena.Parsons@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "0860 11 1177";
                break;
            case 'Reena Ganda':
                oSecOwnerEmail.DataValue = "reena.ganda@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011-407 3046";
                break;
            case 'Naomi Van Schalkwyk':
                oSecOwnerEmail.DataValue = "naomi.vanschalkwyk@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011-407 3044";
                break;
            case 'Marise Petersen':
                oSecOwnerEmail.DataValue = "Marise.Petersen@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3055";
                break;
            case 'Sherilee Phillips':
                oSecOwnerEmail.DataValue = "Sherilee.Phillips@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3106";
                break;

             case 'Kim de Meillon':
                oSecOwnerEmail.DataValue = "morne.vandermerwe@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3016";
                break;

                case 'Shamilla August':
                oSecOwnerEmail.DataValue = "Shamilla.August@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3034";
                break;

                 case 'Firdoze Mahomed':
                oSecOwnerEmail.DataValue = "Firdoze.Mahomed@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3102";
                break;

                case 'Jacqui Gibb':
                oSecOwnerEmail.DataValue = "Jacqui.Gibb@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3320";
                break;
                 case 'Juliet Mabote ':
                oOwnerEmail.DataValue = "Juliet.Mabote@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3079";
                break;
                case 'Maria Ramashia':
                oOwnerEmail.DataValue = "Maria.Ramashia@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3252";
                break;
                case 'Jaco De Beer ':
                oOwnerEmail.DataValue = "Jaco.Debeer@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3131";
                break;
                  case 'Tina Heine':
                oSecOwnerEmail.DataValue = "Tina.Heine@bidvestcapital.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3617";
                break;
                case 'Peter Llewellyn':
                oSecOwnerEmail.DataValue = "Peter.Llewellyn@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "021 940 2152";
                break;
                case 'Mark Mortimer':
                oSecOwnerEmail.DataValue = "Mark.Mortimer@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3618";
                break;
                case 'Dries Fourie':
                oSecOwnerEmail.DataValue = "Dries.Fourie@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "031 361 5887";
                break;
                case 'Gavin Beckmann':
                oSecOwnerEmail.DataValue = "Gavin.Beckmann@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "051 408 3016";
                break;

			    case 'Susan Kaunda':
                oSecOwnerEmail.DataValue = "Susan.Kaunda@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3058";
                break;

				case 'Ilke Van Wyk':
                oSecOwnerEmail.DataValue = "Ilke.VanWyk@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3022";
                break;
                case 'Thashnee Pillay':
                oSecOwnerEmail.DataValue = "Thashnee.Pillay@bidvestbank.co.za";
                oSecOwnerDirectPhone.DataValue = "011 407 3601";
                break;
				case 'Charmaine Singh':
				oOwnerEmail.DataValue = "Charmaine.Singh@bidvestbank.co.za";
				oOwnerDirectPhone.DataValue = "011-407 3435";
				break;

				case 'Ziad Moolla':
				oOwnerEmail.DataValue = "Ziad.Moolla@bidvestbank.co.za";
				oOwnerDirectPhone.DataValue = "011-407 3083";
				break;
        }
    }
    if (oDeptMan.DataValue != null) {
        switch (oDeptMan.SelectedText) {
            case 'Leonardo Hefer':
                oDeptManEmail.DataValue = "leonardo.hefer@bidvestbank.co.za";
                oDepManDirectPhone.DataValue = "011-407 3115";
                break;

            case 'Jill Murtagh':
                oDeptManEmail.DataValue = "Jill.Murtagh@bidvestbank.co.za";
                oDepManDirectPhone.DataValue = "011-407 3346";
                break;

			case 'Melanie Browne':
                oDeptManEmail.DataValue = "Melanie.Browne@bidvestbank.co.za";
                oDepManDirectPhone.DataValue = "011-407 3623";
                break;
			case 'Tracey Lindeque':
                oDeptManEmail.DataValue = "tracey.lindeque@bidvestbank.co.za";
                oDepManDirectPhone.DataValue = "011-407 3281";
                break;
            case 'Debra Eskelsen':
                oDeptManEmail.DataValue = "debra.eskelsen@bidvestbank.co.za";
                oDepManDirectPhone.DataValue = "011-407 3251";
                break;
            case 'Neil Capazorio':
                oDeptManEmail.DataValue = "Neil.Capazorio@bidvestbank.co.za";
                oDepManDirectPhone.DataValue = "0860 11 1177";
                break;
            case 'Angela Tricerri':
                oDeptManEmail.DataValue = "Angie.Tricerri@bidvestbank.co.za";
                oDepManDirectPhone.DataValue = "011 407 3341";
                break;
            case 'Terry-Sue Van Rensburg':
                oDeptManEmail.DataValue = "Terry-Sue.VanRensburg@bidvestbank.co.za";
                oDepManDirectPhone.DataValue = "011 407 3073";
                break;
             case 'Duncan Nkosi':
                oDeptManEmail.DataValue = "morne.vandermerwe@bidvestbank.co.za";
                oDepManDirectPhone.DataValue = "011 407 3258";
                break;

                case 'Jacqui Gibb':
                oDeptManEmail.DataValue = "Jacqui.Gibb@bidvestbank.co.za";
                oDepManDirectPhone.DataValue = "011 407 3320";
                break;

                 case 'Russell Fogg ':
                oOwnerEmail.DataValue = "Russell.Fogg@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3260";
                break;
               case 'Darren Pillay':
                oDeptManEmail.DataValue = "Darren.Pillay@bidvestcapital.co.za";
                oDepManDirectPhone.DataValue = "011 407 3650";
                break;

               case 'Byron Corcoran':
               oDeptManEmail.DataValue = "Byron.Corcoran@bidvestbank.co.za";
               oDepManDirectPhone.DataValue = "011 407 3649";
               break;

               case 'Mark Mortimer':
               oDeptManEmail.DataValue = "Darren.Pillay@bidvestcapital.co.za";
               oDepManDirectPhone.DataValue = "011 407 3618";
               break;

			    case 'Mandy Lala':
               oDeptManEmail.DataValue = "Mandy.Lala@bidvestbank.co.za";
               oDepManDirectPhone.DataValue = "011 407 3311";
               break;

        }
    }
    var oDepartment = crmForm.all.isp_department;
    if (oDepartment.DataValue != null) {
        switch (oDepartment.SelectedText) {
            case 'I.T Procurement':
                //Create an array to set as the DataValue for the lookup control.
                var lookupData = new Array();
                //Create an Object add to the array.
                var lookupItem = new Object();
                //Set the id, typename, and name properties to the object.
                lookupItem.id = '{E4ED98C4-4DE8-DD11-BBDB-0018FE743ACC}';
                lookupItem.typename = 'account';
                lookupItem.name = 'IT Queries';
                // Add the object to the array.
                lookupData[0] = lookupItem;
                // Set the value of the lookup field to the value of the array.
                crmForm.all.customerid.DataValue = lookupData;
                crmForm.all.customerid.Disabled = 1;
                var strCustomerName = crmForm.all.customerid.DataValue[0].name;
                crmForm.all.title.DataValue = strCustomerName + ' ' + crmForm.all.isp_department.SelectedText + ' ' + crmForm.all.isp_subdepartment.SelectedText;
                break;

                 case 'HR Department':
                //Create an array to set as the DataValue for the lookup control.
                var lookupData = new Array();
                //Create an Object add to the array.
                var lookupItem = new Object();
                //Set the id, typename, and name properties to the object.
                lookupItem.id = '{ADCF5452-1C8B-DE11-BDDD-0018FE743ACC}';
                lookupItem.typename = 'account';
                lookupItem.name = 'HR Queries @ Bidvest Bank';
                // Add the object to the array.
                lookupData[0] = lookupItem;
                // Set the value of the lookup field to the value of the array.
                crmForm.all.customerid.DataValue = lookupData;
                crmForm.all.customerid.Disabled = 1;
                var strCustomerName = crmForm.all.customerid.DataValue[0].name;
                crmForm.all.title.DataValue = strCustomerName + ' ' + crmForm.all.isp_department.SelectedText + ' ' + crmForm.all.isp_subdepartment.SelectedText;
                //break;

                //Create an array to set as the DataValue for the lookup control.
                var lookupData = new Array();
                //Create an Object add to the array.
                var lookupItem = new Object();
                //Set the id, typename, and name properties to the object.
                lookupItem.id = '{D3BE3320-7494-DD11-8F30-0018FE743ACC}';
                lookupItem.typename = 'subject';
                lookupItem.name = 'Customer Feedback';
                // Add the object to the array.
                lookupData[0] = lookupItem;
                // Set the value of the lookup field to the value of the array.
                crmForm.all.subjectid.DataValue = lookupData;
                crmForm.all.subjectid.Disabled = 1;
                var strSubject = crmForm.all.subjectid.DataValue[0].name;
                break;




        }
    }
    if (crmForm.FormType == 2) {
        var strEscalationStatus = crmForm.all.isp_escalationstatus;
        if (strEscalationStatus.DataValue != null) {
            switch (strEscalationStatus.SelectedText) {
                case 'Stage1':
                    crmForm.all.isp_acceptedowner.Disabled = 1;
                    crmForm.all.isp_acceptedowner.ForceSubmit = true;
                    crmForm.all.isp_escalationstatus.ForceSubmit = true;

                    break;
                case 'Stage2':
                    crmForm.all.isp_acceptedsecowner.Disabled = 1;
                    crmForm.all.isp_acceptedowner.Disabled = 1;
                    crmForm.all.isp_acceptedsecowner.ForceSubmit = true;
                    crmForm.all.isp_acceptedowner.ForceSubmit = true;
                    crmForm.all.isp_escalationstatus.ForceSubmit = true;

                    break;
                case 'Stage3':
                    crmForm.all.isp_acceptedmanager.Disabled = 1;
                    crmForm.all.isp_acceptedsecowner.Disabled = 1;
                    crmForm.all.isp_acceptedowner.Disabled = 1;
                    crmForm.all.isp_acceptedmanager.ForceSubmit = true;
                    crmForm.all.isp_acceptedsecowner.ForceSubmit = true;
                    crmForm.all.isp_acceptedowner.ForceSubmit = true;
                    crmForm.all.isp_escalationstatus.ForceSubmit = true;
                    break;
            }
        }
        //Set the Description field to value
        var strCustomerName = crmForm.all.customerid.DataValue[0].name;
        crmForm.all.title.DataValue = strCustomerName + ' ' + crmForm.all.isp_department.SelectedText + ' ' + crmForm.all.isp_subdepartment.SelectedText;
    }
}
var oReAssigned = crmForm.all.isp_reassign;
if (oReAssigned.DataValue != null) {
    switch (oReAssigned.SelectedText) {
        case 'Yes':

/* the function */
ExecuteWorkflow = function(entityId, workflowId)
{

var xml = "" +

"<?xml version=\"1.0\" encoding=\"utf-8\"?>" +

"<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">" +

GenerateAuthenticationHeader() +

"  <soap:Body>" +

"    <Execute xmlns=\"http://schemas.microsoft.com/crm/2007/WebServices\">" +

"      <Request xsi:type=\"ExecuteWorkflowRequest\">" +

"        <EntityId>" + entityId + "</EntityId>" +

"        <WorkflowId>" + workflowId + "</WorkflowId>" +

"      </Request>" +

"    </Execute>" +

"  </soap:Body>" +

"</soap:Envelope>" +

"";

var xmlHttpRequest = new ActiveXObject("Msxml2.XMLHTTP");

xmlHttpRequest.Open("POST", "/mscrmservices/2007/CrmService.asmx", false);

xmlHttpRequest.setRequestHeader("SOAPAction","http://schemas.microsoft.com/crm/2007/WebServices/Execute");

xmlHttpRequest.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

xmlHttpRequest.setRequestHeader("Content-Length", xml.length);

xmlHttpRequest.send(xml);

var resultXml = xmlHttpRequest.responseXML;

return(resultXml.xml);
}
/* call */
var theWorkflowId = "F39C57D9-63E4-4B9A-88B3-3BB063E09D84"; //change to your workflow Id
ExecuteWorkflow(crmForm.ObjectId, theWorkflowId);
 break;
    }
}
}
function isp_department_onchange()
{
debugger
crmForm.all.isp_departmentval.DataValue = crmForm.all.isp_department.SelectedText;
// ************************************************************************
// ** Purpose:
// **
// ** Only show departments from Office
// **
// ************************************************************************
//set references to our fields
var oDepartmentValue = crmForm.all.isp_department;
var oSubDept = crmForm.all.isp_subdepartment;
// keep a copy of the original options and reset the picklist before we start firking about
if (!oSubDept.originalPicklistValues) {
    oSubDept.originalPicklistValues = oSubDept.Options;
}
else {
    oSubDept.Options = oSubDept.originalPicklistValues;
}
// create an array to hold the required picklist values for each category
var oArrayBackOffice = new Array();
var oArrayRandDepart = new Array();
var oArrayFinance = new Array();
var oArrayIT = new Array();
var oArrayHR = new Array();
var oArrayRand = new Array();
var oArrayFleetandFinance  = new Array();
var oArrayFinSurv  = new Array();
// *** This is the bit you would edit to add/remove options to your lists *** //
oArrayBackOffice.push(0, 4, 5, 6,68,69,88,89,90,91,33,70);
oArrayRandDepart.push(0, 80, 81, 82, 83, 84, 85,98,99,100,101);
oArrayFinance.push(0, 1, 2, 3);
oArrayIT.push(0, 13);
oArrayHR.push(0, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32);
oArrayRand.push(0,68,79);
oArrayFleetandFinance.push(0,72,73,74,75);
oArrayFinSurv.push(0, 80, 81, 82, 83, 84, 85,98,99,100,101,102);
var oSecOwner = crmForm.all.isp_secondaryowner;
var oDeptMan = crmForm.all.isp_departmentmanager;
// *** No more editing *** //
// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if (oDepartmentValue.DataValue != null) {
    switch (oDepartmentValue.SelectedText) {
        case 'Back Office Department':
            filterPicklist(oArrayBackOffice);
            document.all.isp_descriptionofproblem_d.style.visibility = "";
            document.all.isp_descriptionofproblem_c.style.visibility = "";
 // This was added to hide the region field
            document.all.isp_region_c.style.visibility = "hidden";
            document.all.isp_region_d.style.visibility = "hidden";

            break;
        case 'Rand Department':
            filterPicklist(oArrayRandDepart);
             // This was added to hide the region field
            document.all.isp_region_c.style.visibility = "hidden";
            document.all.isp_region_d.style.visibility = "hidden";
//This section will make the Nature of Problem field not required and hidden
                    crmForm.all.isp_natureofproblem.setAttribute("req", 0);
                    crmForm.all.isp_natureofproblem_c.className = "n";
                    crmForm.all.isp_natureofproblem_c.innerHTML =
                   crmForm.all.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "hidden";
                  document.all.isp_natureofproblem_d.style.visibility = "hidden";
            break;

	case 'FinSurv Department':
            filterPicklist(oArrayFinSurv);
             // This was added to hide the region field
            document.all.isp_region_c.style.visibility = "hidden";
            document.all.isp_region_d.style.visibility = "hidden";
//This section will make the Nature of Problem field not required and hidden
                    crmForm.all.isp_natureofproblem.setAttribute("req", 0);
                    crmForm.all.isp_natureofproblem_c.className = "n";
                    crmForm.all.isp_natureofproblem_c.innerHTML =
                   crmForm.all.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "hidden";
                  document.all.isp_natureofproblem_d.style.visibility = "hidden";
            break;
        case 'Finance Department':
            filterPicklist(oArrayFinance);
             // This was added to hide the region field
            document.all.isp_region_c.style.visibility = "hidden";
            document.all.isp_region_d.style.visibility = "hidden";
            break;

        case 'Rand Department':
            filterPicklist(oArrayRand);
              //This section will make the Action Needed field not required and hidden
            crmForm.all.isp_queryby.setAttribute("req", 0);
            crmForm.all.isp_queryby_c.className = "n";
            crmForm.all.isp_queryby_c.innerHTML =
            crmForm.all.isp_queryby_c.innerText;
            document.all.isp_queryby_c.style.visibility = "hidden";
            document.all.isp_queryby_d.style.visibility = "hidden";
            document.all.isp_descriptionofproblem_d.style.visibility = "";
            document.all.isp_descriptionofproblem_c.style.visibility = "";
             //This section will make the Nature of Problem field not required and hidden
            crmForm.all.isp_natureofproblem.setAttribute("req", 0);
            crmForm.all.isp_natureofproblem_c.className = "n";
            crmForm.all.isp_natureofproblem_c.innerHTML =
            crmForm.all.isp_natureofproblem_c.innerText;
            document.all.isp_natureofproblem_c.style.visibility = "hidden";
            document.all.isp_natureofproblem_d.style.visibility = "hidden";
            document.all.isp_queryby_c.style.visibility = "hidden";
            document.all.isp_queryby_d.style.visibility = "hidden";
            document.all.isp_allowclosedemail_c.style.visibility = "hidden";
            document.all.isp_allowclosedemail_d.style.visibility = "hidden";
            document.all.isp_branchref_c.style.visibility = "hidden";
            document.all.isp_branchref_d.style.visibility = "hidden";
            document.all.isp_opicsref_c.style.visibility = "hidden";
            document.all.isp_opicsref_d.style.visibility = "hidden";
            document.all.isp_foreignbankref_c.style.visibility = "hidden";
            document.all.isp_foreignbankref_d.style.visibility = "hidden";
            document.all.isp_inwardfunds_c.style.visibility = "hidden";
            document.all.isp_inwardfunds_d.style.visibility = "hidden";
            document.all.isp_amount_c.style.visibility = "hidden";
            document.all.isp_amount_d.style.visibility = "hidden";
            document.all.isp_sender_c.style.visibility = "hidden";
            document.all.isp_sender_d.style.visibility = "hidden";
            document.all.isp_branch_c.style.visibility = "hidden";
            document.all.isp_branch_d.style.visibility = "hidden";
            document.all.isp_region_c.style.visibility = "hidden";
            document.all.isp_region_d.style.visibility = "hidden";
            document.all.casetypecode_c.style.visibility = "hidden";
            document.all.casetypecode_d.style.visibility = "hidden";
            document.all.isp_beneficiary_c.style.visibility = "hidden";
            document.all.isp_beneficiary_d.style.visibility = "hidden";
            document.all.isp_clientresponse_c.style.visibility = "hidden";
            document.all.isp_clientresponse_d.style.visibility = "hidden";
            document.all.isp_charges_c.style.visibility = "hidden";
            document.all.isp_charges_d.style.visibility = "hidden";
            document.all.isp_dontsendanycorrespondence_c.style.visibility = "hidden";
            document.all.isp_dontsendanycorrespondence_d.style.visibility = "hidden";

            oSecOwner.DataValue = 30;
            oDeptMan.DataValue = 8;


            break;

        case 'HR Department':
            filterPicklist(oArrayHR);
            document.all.isp_staffid_d.style.visibility = "";
            document.all.isp_staffid_c.style.visibility = "";
            crmForm.all.casetypecode.DataValue = 200001;
            crmForm.all.caseorigincode.DataValue = 2;
            document.all.isp_descriptionofproblem_d.style.visibility = "";
            document.all.isp_descriptionofproblem_c.style.visibility = "";
            //This section will make the Action Needed field not required and hidden
            crmForm.all.isp_queryby.setAttribute("req", 0);
            crmForm.all.isp_queryby_c.className = "n";
            crmForm.all.isp_queryby_c.innerHTML =
            crmForm.all.isp_queryby_c.innerText;
            document.all.isp_queryby_c.style.visibility = "hidden";
            document.all.isp_queryby_d.style.visibility = "hidden";
            document.all.isp_allowclosedemail_c.style.visibility = "hidden";
            document.all.isp_allowclosedemail_d.style.visibility = "hidden";
            document.all.isp_branchref_c.style.visibility = "hidden";
            document.all.isp_branchref_d.style.visibility = "hidden";
            document.all.isp_opicsref_c.style.visibility = "hidden";
            document.all.isp_opicsref_d.style.visibility = "hidden";
            document.all.isp_foreignbankref_c.style.visibility = "hidden";
            document.all.isp_foreignbankref_d.style.visibility = "hidden";
            document.all.isp_inwardfunds_c.style.visibility = "hidden";
            document.all.isp_inwardfunds_d.style.visibility = "hidden";
            document.all.isp_amount_c.style.visibility = "hidden";
            document.all.isp_amount_d.style.visibility = "hidden";
            document.all.isp_sender_c.style.visibility = "hidden";
            document.all.isp_sender_d.style.visibility = "hidden";
            document.all.isp_region_c.style.visibility = "hidden";
            document.all.isp_region_d.style.visibility = "hidden";
            //This section will make the Nature of Problem field not required and hidden
            crmForm.all.isp_natureofproblem.setAttribute("req", 0);
            crmForm.all.isp_natureofproblem_c.className = "n";
            crmForm.all.isp_natureofproblem_c.innerHTML =
            crmForm.all.isp_natureofproblem_c.innerText;
            document.all.isp_natureofproblem_c.style.visibility = "hidden";
            document.all.isp_natureofproblem_d.style.visibility = "hidden";

            //This section will bring up the Description of the Case to be filled in by the person logging the request
            crmForm.all.title.setAttribute("req", 0);
            crmForm.all.title_c.className = "n";
            crmForm.all.title_c.innerHTML =
            crmForm.all.title_c.innerText;
            document.all.title_d.style.visibility = "hidden";
            document.all.title_c.style.visibility = "hidden";
            //alert("Since this is an I.T. helpdesk request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
            //var label = crmForm.all.isp_staffid_c;
            //label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>";
            break;
        case 'I.T Procurement':
            filterPicklist(oArrayIT);
           // document.all.isp_staffid_d.style.visibility = "";
           // document.all.isp_staffid_c.style.visibility = "";
            crmForm.all.casetypecode.DataValue = 200001;
            crmForm.all.caseorigincode.DataValue = 2;
            document.all.isp_requestedbyemail_d.style.visibility = "";
            document.all.isp_requestedbyemail_c.style.visibility = "";
            crmForm.all.isp_requestedbyemail.Disabled = 1;
            document.all.isp_descriptionofproblem_d.style.visibility = "";
            document.all.isp_descriptionofproblem_c.style.visibility = "";
            //This section will make the Action Needed field not required and hidden
            crmForm.all.isp_queryby.setAttribute("req", 0);
            crmForm.all.isp_queryby_c.className = "n";
            crmForm.all.isp_queryby_c.innerHTML =
            crmForm.all.isp_queryby_c.innerText;
            document.all.isp_queryby_c.style.visibility = "hidden";
            document.all.isp_queryby_d.style.visibility = "hidden";
            document.all.isp_allowclosedemail_c.style.visibility = "hidden";
            document.all.isp_allowclosedemail_d.style.visibility = "hidden";
            document.all.isp_branchref_c.style.visibility = "hidden";
            document.all.isp_branchref_d.style.visibility = "hidden";
            document.all.isp_opicsref_c.style.visibility = "hidden";
            document.all.isp_opicsref_d.style.visibility = "hidden";
            document.all.isp_foreignbankref_c.style.visibility = "hidden";
            document.all.isp_foreignbankref_d.style.visibility = "hidden";
            document.all.isp_inwardfunds_c.style.visibility = "hidden";
            document.all.isp_inwardfunds_d.style.visibility = "hidden";
            document.all.isp_amount_c.style.visibility = "hidden";
            document.all.isp_amount_d.style.visibility = "hidden";
            document.all.isp_sender_c.style.visibility = "hidden";
            document.all.isp_sender_d.style.visibility = "hidden";
            document.all.isp_region_c.style.visibility = "hidden";
            document.all.isp_region_d.style.visibility = "hidden";
            //This section will make the Dont Send Resolved email field not required and hidden
            crmForm.all.isp_allowclosedemail.setAttribute("req", 0);
            crmForm.all.isp_allowclosedemail_c.className = "n";
            crmForm.all.isp_allowclosedemail_c.innerHTML =
            crmForm.all.isp_allowclosedemail_c.innerText;
            document.all.isp_allowclosedemail_c.style.visibility = "hidden";
            document.all.isp_allowclosedemail_d.style.visibility = "hidden";
            //This section will make the Nature of Problem field not required and hidden
            crmForm.all.isp_natureofproblem.setAttribute("req", 0);
            crmForm.all.isp_natureofproblem_c.className = "n";
            crmForm.all.isp_natureofproblem_c.innerHTML =
            crmForm.all.isp_natureofproblem_c.innerText;
            document.all.isp_natureofproblem_c.style.visibility = "hidden";
            document.all.isp_natureofproblem_d.style.visibility = "hidden";
            document.all.isp_beneficiary_c.style.visibility = "hidden";
            document.all.isp_beneficiary_d.style.visibility = "hidden";
            document.all.isp_clientresponse_c.style.visibility = "hidden";
            document.all.isp_clientresponse_d.style.visibility = "hidden";
            document.all.isp_charges_c.style.visibility = "hidden";
            document.all.isp_charges_d.style.visibility = "hidden";
            document.all.isp_dontsendanycorrespondence_c.style.visibility = "hidden";
            document.all.isp_dontsendanycorrespondence_d.style.visibility = "hidden";
            //This section will bring up the Description of the Case to be filled in by the person logging the request
            crmForm.all.title.setAttribute("req", 0);
            crmForm.all.title_c.className = "n";
            crmForm.all.title_c.innerHTML =
            crmForm.all.title_c.innerText;
            document.all.title_d.style.visibility = "hidden";
            document.all.title_c.style.visibility = "hidden";
          //  alert("Since this is an I.T. helpdesk request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
            var label = crmForm.all.isp_staffid_c;
            label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>";
            break;
case 'Fleet and Finance':
            filterPicklist(oArrayFleetandFinance);
            document.all.isp_staffid_d.style.visibility = "";
            document.all.isp_staffid_c.style.visibility = "";
            crmForm.all.casetypecode.DataValue = 200001;
            crmForm.all.caseorigincode.DataValue = 2;
            document.all.isp_descriptionofproblem_d.style.visibility = "";
            document.all.isp_descriptionofproblem_c.style.visibility = "";
            //This section will make the Action Needed field not required and hidden
            crmForm.all.isp_queryby.setAttribute("req", 0);
            crmForm.all.isp_queryby_c.className = "n";
            crmForm.all.isp_queryby_c.innerHTML =
            crmForm.all.isp_queryby_c.innerText;
            document.all.isp_queryby_c.style.visibility = "hidden";
            document.all.isp_queryby_d.style.visibility = "hidden";
            document.all.isp_allowclosedemail_c.style.visibility = "hidden";
            document.all.isp_allowclosedemail_d.style.visibility = "hidden";
            document.all.isp_branchref_c.style.visibility = "hidden";
            document.all.isp_branchref_d.style.visibility = "hidden";
            document.all.isp_opicsref_c.style.visibility = "hidden";
            document.all.isp_opicsref_d.style.visibility = "hidden";
            document.all.isp_capturer_c.style.visibility = "hidden";
            document.all.isp_capturer_d.style.visibility = "hidden";
             document.all.isp_authorizer_c.style.visibility = "hidden";
            document.all.isp_authorizer_d.style.visibility = "hidden";
            document.all.isp_foreignbankref_c.style.visibility = "hidden";
            document.all.isp_foreignbankref_d.style.visibility = "hidden";
            document.all.isp_inwardfunds_c.style.visibility = "hidden";
            document.all.isp_inwardfunds_d.style.visibility = "hidden";
            document.all.isp_amount_c.style.visibility = "hidden";
            document.all.isp_amount_d.style.visibility = "hidden";
            document.all.isp_sender_c.style.visibility = "hidden";
            document.all.isp_sender_d.style.visibility = "hidden";
            document.all.isp_beneficiary_c.style.visibility = "hidden";
            document.all.isp_beneficiary_d.style.visibility = "hidden";
            document.all.isp_clientresponse_c.style.visibility = "hidden";
            document.all.isp_clientresponse_d.style.visibility = "hidden";
            document.all.isp_charges_c.style.visibility = "hidden";
            document.all.isp_charges_d.style.visibility = "hidden";
            document.all.isp_dontsendanycorrespondence_c.style.visibility = "hidden";
            document.all.isp_dontsendanycorrespondence_d.style.visibility = "hidden";
            //This section will make the Nature of Problem field not required and hidden
            crmForm.all.isp_natureofproblem.setAttribute("req", 0);
            crmForm.all.isp_natureofproblem_c.className = "n";
            crmForm.all.isp_natureofproblem_c.innerHTML =
            crmForm.all.isp_natureofproblem_c.innerText;
            document.all.isp_natureofproblem_c.style.visibility = "";
            document.all.isp_natureofproblem_d.style.visibility = "";
            //This section will bring up the Description of the Case to be filled in by the person logging the request
            crmForm.all.title.setAttribute("req", 0);
            crmForm.all.title_c.className = "n";
            crmForm.all.title_c.innerHTML =
            crmForm.all.title_c.innerText;
            document.all.title_d.style.visibility = "hidden";
            document.all.title_c.style.visibility = "hidden";
            break;
    }
}
function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oSubDept.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this foodgroup
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oSubDept[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oSubDept.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oSubDept.remove(i)
        }
    }
}
}
function loadnature()
{
// ************************************************************************
// ** Purpose:
// **
// ** Only show certain Nature of Problem
// **
// ************************************************************************
//set references to our fields
var oSubDepart = crmForm.all.isp_subdepartment;
var oNatProblem = crmForm.all.isp_natureofproblem;

// keep a copy of the original options and reset the picklist before we start firking about
if(!oNatProblem.originalPicklistValues)
{
oNatProblem.originalPicklistValues = oNatProblem.Options;
}
else
{
oNatProblem.Options = oNatProblem.originalPicklistValues;
}

// create an array to hold the required picklist values for each category
var oArrayCorporateQuery = new Array();
var oArrayRetailQuery = new Array();
var oArrayBOQueriesQuery = new Array();
var oArrayAutoRetailQuery = new Array();
var oArrayCashkows  = new Array();
var oArrayAutoCashkows  = new Array();

// text values correspond to the picklist values in the 'nature of problem' field

// *** This is the bit you would edit to add/remove options to your lists *** //
    oArrayCorporateQuery.push(0,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,29,31,32,4,85);
    oArrayRetailQuery.push(0,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,29,31,32,4,85);
	oArrayBOQueriesQuery.push(0,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,29,31,32,4,85);
	oArrayAutoRetailQuery.push(0,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,29,31,32,4,85);
	oArrayCashkows.push(0,54,61,32,60,89,50,60,58,57,90,62,91,64,56,92);
	oArrayAutoCashkows.push(0,54,61,32,60,89,50,60,58,57,90,62,91,64,56,92);

// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDepart.DataValue != null)
{
    switch(oSubDepart.SelectedText)
    {
        case 'Corporate':
        filterPicklist(oArrayCorporateQuery);
        break;

        case 'Retail':
        filterPicklist(oArrayRetailQuery);
        break;
		case 'Automated: BO Queries':
        filterPicklist(oArrayRetailQuery);
        break;
		case 'Automated: Retail Queries':
        filterPicklist(oArrayRetailQuery);
        break;
      case 'Cashkow Queries':
        filterPicklist(oArrayCashkows);
        break;

      case 'Automated: CashKows Queries':
        filterPicklist(oArrayAutoCashkows);
        break;

    }
}
function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oNatProblem.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this foodgroup
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oNatProblem[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oNatProblem.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oNatProblem.remove(i)
        }
    }
}

}
function isp_SubDept_onchange()
{
// ************************************************************************
// ** Purpose:
// **
// ** Only show certain Nature of Problem
// **
// ************************************************************************
//set references to our fields
var oSubDepart = crmForm.all.isp_subdepartment;
var oNatProblem = crmForm.all.isp_natureofproblem;

// keep a copy of the original options and reset the picklist before we start firking about
if(!oNatProblem.originalPicklistValues)
{
oNatProblem.originalPicklistValues = oNatProblem.Options;
}
else
{
oNatProblem.Options = oNatProblem.originalPicklistValues;
}

// create an array to hold the required picklist values for each category
var oArrayCorporateQuery = new Array();
var oArrayRetailQuery = new Array();
var oArrayBOQueriesQuery = new Array();
var oArrayAutoRetailQuery = new Array();
var oArrayCashkows  = new Array();
var oArrayAutoCashkows  = new Array();

// text values correspond to the picklist values in the 'nature of problem' field

// *** This is the bit you would edit to add/remove options to your lists *** //
    oArrayCorporateQuery.push(0,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,29,31,32,4,85);
    oArrayRetailQuery.push(0,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,29,31,32,4,85);
	oArrayBOQueriesQuery.push(0,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,29,31,32,4,85);
	oArrayAutoRetailQuery.push(0,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,29,31,32,4,85);
	oArrayCashkows.push(0,54,61,32,60,89,50,60,58,57,90,62,91,64,56,92,51,53,63,93);
	oArrayAutoCashkows.push(0,54,61,32,60,89,50,60,58,57,90,62,91,64,56,92,51,53,63,93);

// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDepart.DataValue != null)
{
    switch(oSubDepart.SelectedText)
    {
        case 'Corporate':
        filterPicklist(oArrayCorporateQuery);
        break;

        case 'Retail':
        filterPicklist(oArrayRetailQuery);
        break;
		case 'Automated: BO Queries':
        filterPicklist(oArrayRetailQuery);
        break;
		case 'Automated: Retail Queries':
        filterPicklist(oArrayRetailQuery);
        break;
      case 'Cashkow Queries':
        filterPicklist(oArrayCashkows);
        break;

      case 'Automated: CashKows Queries':
        filterPicklist(oArrayAutoCashkows);
        break;

    }
}
function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oNatProblem.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this foodgroup
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oNatProblem[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oNatProblem.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oNatProblem.remove(i)
        }
    }
}
}
function isp_subdepartment_onchange()
{
debugger
// ************************************************************************
// ** Purpose:
// **
// ** This will pre-filter the owner, secondary owner, and department manager for the escalation trail
// **
// ************************************************************************
//set references to our fields
var oSubdepartment = crmForm.all.isp_subdepartment;
var oOwner = crmForm.all.isp_owner;
var oRegion = crmForm.all.isp_region;
// keep a copy of the original options and reset the picklist before we start firking about
if (!oOwner.originalPicklistValues) {
    oOwner.originalPicklistValues = oOwner.Options;
}
else {
    oOwner.Options = oOwner.originalPicklistValues;
}
// create an array to hold the required picklist values for each category
var oCorporate = new Array();
var oRetail = new Array();
var oRand = new Array();
var oNostro = new Array();
var oTradeFin = new Array();
var oTradeServ = new Array();
var oInterBank = new Array();
var oExcon = new Array();
var oPrivateBanking = new Array();
var oFinSurv = new Array();
var oAutomatedFinance = new Array();
var oOpStats = new Array();
var oCreditors = new Array();
//This will create Lists for I.T.
var oDesktopSupport = new Array();
var oApplications = new Array();
var oTechnicalAdmin = new Array();
var oDevelopment = new Array();
var oProcurement = new Array();
// This will create Lists for Rand
var oNewAccounts = new Array();
var oPayments = new Array();
var oNotice = new Array();
var oConfirmations = new Array();
var oWithdrawalRequest = new Array();
var oInvestments = new Array();
//This will create Lists for Fleet and Finance
var oJohannesburg = new Array();
var oBloemfontein = new Array();
var oCapeTown = new Array();
var oDurban = new Array();
//This will create a list for Rand Department
var oNewAccounts = new Array();
var oPayments = new Array();
var oNotice = new Array();
var oConfirmations = new Array();
var oWithdrawalRequest = new Array();
var oInvestments = new Array();
//This will create Lists for H.R.
var oPension = new Array();
var oUniforms = new Array();
var oLeave = new Array();
var oMaternity = new Array();
var oGeneral = new Array();
var oBenefit = new Array();
var oIntranet = new Array();
var oCompensation = new Array();
var oStaffFiles = new Array();
var oWorkplaceForum = new Array();
var oPoloicies = new Array();
var oICAS = new Array();
var oMedicalAid = new Array();
var oCareers = new Array();
var oBEE = new Array();
var oDisciplinaries = new Array();
var oBursaries = new Array();
var oKPA = new Array();
var oSalaries = new Array();
// *** This is the bit you would edit to add/remove options to your lists *** //
oCorporate.push(0, 5, 4,9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60,65,10,102,100000000,105,106,108,109,129,130,132,133,135,136,137,138,140,141,142,144,152,153,154,146,155,156,157,158,159,160,161,167,168);
oRetail.push(0, 5, 4,9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60,65,10,102,100000000,105,106,108,109,129,130,132,133,135,136,137,138,140,141,142,144,152,153,154,155,156,158,159,160,161,167,168);
oRand.push(0, 1, 13, 14, 15, 41,60,10,129,132,133,135,137,138,140,102,100000000,141,152,153,154,146,155,156,157,158,159,160,161);
oFinSurv.push(0, 1, 13, 14, 15, 41,60,10,129,132,133,135,137,138,140,102,100000000,141,152,153,154,146,162,163,164,165,166);
oNostro.push(0,39,57,58,133,149,150,38,153);
oExcon.push(0,29,30,31,32,4, 60);
oTradeFin.push(0, 5, 4,9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60,10,102,100000000,105,106,108,109,129,130,132,133,135,136,137,138,140,141,142,144,152,153,155,156,157,158,159,160,161,143,167,168);
oTradeServ.push(0, 5, 4,9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60,10,102,100000000,105,106,108,109,129,130,132,133,135,136,137,138,140,141,142,144,152,153,155,156,157,158,159,160,161,143,167,168);
oInterBank.push(0, 5, 4,9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60,10,102,100000000,105,106,108,109,129,130,132,133,135,136,137,138,140,141,142,144,152,153,155,156,157,158,159,160,161,167,168);
//oCorporateCard.push(0, 16, 17, 18);
oAutomatedFinance.push(0, 44);
oPrivateBanking.push(0, 139,146,147,148,103,155,156,157,158,159,160,161);
oOpStats.push(0, 44);
oCreditors.push(0, 44);
//This will create Lists for I.T.
oProcurement.push(0, 66, 67);
//This will create lists for Fleet and Finance
oJohannesburg.push(0,71);
oBloemfontein.push(0, 71);
oCapeTown.push(0, 71);
oDurban.push(0, 71);
oNewAccounts.push(0,133,140,137,135,102,100000000,138,10,25,141,152,153,154,155,156,157,158,159,160,161);
oPayments.push(0,133,140,137,135,102,100000000,138,10,25,141,152,153,154,155,156,157,158,159,160,161);
oNotice.push(0,133,140,137,135,102,100000000,138,10,25,141,152,153,154,155,156,157,158,159,160,161);
oConfirmations.push(0,133,140,137,135,102,100000000,138,10,152,153,154,155,156,157,158,159,160,161);
oWithdrawalRequest.push(0,133,140,137,135,102,100000000,138,10,25,141,152,153,154,155,156,157,158,159,160,161);
oInvestments.push(0,133,140,137,135,102,100000000,138,10,25,141,152,153,154,155,156,157,158,159,160,161);
//This will create Lists for H.R.
oPension.push(0, 42)
oUniforms.push(0, 43)
oLeave.push(0, 43)
oMaternity.push(0, 42)
oGeneral.push(0, 42)
oBenefit.push(0, 43)
oIntranet.push(0, 43)
oCompensation.push(0, 42)
oStaffFiles.push(0, 42)
oWorkplaceForum.push(0, 43)
oPoloicies.push(0, 43)
oICAS.push(0, 42)
oMedicalAid.push(0, 43)
oCareers.push(0, 43)
oBEE.push(0, 43)
oDisciplinaries.push(0, 42)
oBursaries.push(0, 42)
oKPA.push(0, 43)
oSalaries.push(0, 43)
// *** No more editing *** //
// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if (oSubdepartment.DataValue != null) {
    switch (oSubdepartment.SelectedText) {
        case 'Corporate':
            filterPicklist(oCorporate);
            oOwner.DataValue = 9;
            oOwner.Disabled = 0;
            break;
        case 'Retail':
            filterPicklist(oRetail);
            oOwner.DataValue = 65;
            oOwner.Disabled = 0;
            break;

            case 'Nostro':
            filterPicklist(oNostro);
            oOwner.DataValue = 150;
            oOwner.Disabled = 0;
            break;

            case 'Excon':
            filterPicklist(oExcon);
            oOwner.DataValue = 63;
            oOwner.Disabled = 0;
            break;
        case 'Rand':
            filterPicklist(oRand);
            oOwner.DataValue = 152;
            oOwner.Disabled = 0;
            break;

			    case 'Trade Finance':
            filterPicklist(oTradeFin);
            oOwner.DataValue = 143;
            oOwner.Disabled = 0;
            break;

			case 'Trade Services':
            filterPicklist(oTradeServ);
            oOwner.DataValue =  143;
            oOwner.Disabled = 0;
            break;

			case 'Inter Bank Settlements':
            filterPicklist(oInterBank);
            oOwner.DataValue = 9;
            oOwner.Disabled = 0;
            break;

			case 'Automated: CashKows Queries':
            filterPicklist(oPrivateBanking);
            oOwner.DataValue = 139;
            oOwner.Disabled = 0;
            break;

			case 'CashKows Queries':
            filterPicklist(oPrivateBanking);
            oOwner.DataValue = 139;
            oOwner.Disabled = 0;
            break;

			case 'FinSurv':
            filterPicklist(oFinSurv);
            oOwner.DataValue = 146;
            oOwner.Disabled = 0;
            break;
        case 'Automated: Finance Queue':
            oOwner.DataValue = 44;
            oOwner.Disabled = 1;
            break;
        case 'Op Stats':
            oOwner.DataValue = 44;
            oOwner.Disabled = 1;
            break;
        case 'Creditors':
            oOwner.DataValue = 44;
            oOwner.Disabled = 1;
            break;
        case 'Desktop Support':
            filterPicklist(oDesktopSupport);
            break;
        case 'Applications':
            filterPicklist(oApplications);
            break;
        case 'Technical Admin':
            filterPicklist(oTechnicalAdmin);
            break;
        case 'Development':
            filterPicklist(oDevelopment);
            break;
        case 'Procurement':
            filterPicklist(oProcurement);
            break;
 case 'New Accounts':
            filterPicklist(oNewAccounts);
            oOwner.DataValue = 152;
            oOwner.Disabled = 0;
            break;
 case 'Payments':
            filterPicklist(oPayments);
            oOwner.DataValue = 152;
            oOwner.Disabled = 0;
            break;
 case 'Notice':
            filterPicklist(oNotice);
            oOwner.DataValue = 152;
            oOwner.Disabled = 0;
            break;
 case 'Confirmations':
            filterPicklist(oConfirmations);
            oOwner.DataValue = 152;
            oOwner.Disabled = 0;
            break;
 case 'Withdrawal Request':
            filterPicklist(oWithdrawalRequest);
            oOwner.DataValue = 152;
            oOwner.Disabled = 0;
            break;
 case 'Investments':
            filterPicklist(oInvestments);
            oOwner.DataValue = 152;
            oOwner.Disabled = 0;
            break;
// List for Fleet and Finance
        case 'Johannesburg':
            oOwner.DataValue = 71;
            oOwner.Disabled = 1;
            break;

        case 'Bloemfontein':
           oOwner.DataValue = 71;
            oOwner.Disabled = 1;
            break;
         case 'Cape Town':
            oOwner.DataValue = 71;
            oOwner.Disabled = 1;
            break;

        case 'Durban':
          oOwner.DataValue = 71;
            oOwner.Disabled = 1;
                   break;

            // List for HR

         case 'Pension / Provident Fund':
            oOwner.DataValue = 42;
            oOwner.Disabled = 1;
            break;

            case 'Uniforms':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

            case 'Leave':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

            case 'Maternity':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

            case 'Leave':
            oOwner.DataValue = 42;
            oOwner.Disabled = 1;
            break;

            case 'General HR':
            oOwner.DataValue = 42;
            oOwner.Disabled = 1;
            break;

            case 'Pre-Benefit Testing':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

            case 'Intranet':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

            case 'WorkmanÃ¢â‚¬â„¢s Compensation':
            oOwner.DataValue = 42;
            oOwner.Disabled = 1;
            break;

            case 'Staff Files':
            oOwner.DataValue = 42;
            oOwner.Disabled = 1;
            break;

            case 'Workplace Forum':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

            case 'Policies':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

            case 'ICAS':
            oOwner.DataValue = 42;
            oOwner.Disabled = 1;
            break;

            case 'Medical Aid':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

             case 'Careers at Bidvest / Vacancies':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

             case 'BEE':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

             case 'Disciplinaries':
            oOwner.DataValue = 42;
            oOwner.Disabled = 1;
            break;

             case 'Bursaries':
            oOwner.DataValue = 42;
            oOwner.Disabled = 1;
            break;

             case 'KPAÃ¢â‚¬â„¢s / Performance Management':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

             case 'Salaries Ã¢â‚¬â€œ Infoslips ONLY':
            oOwner.DataValue = 43;
            oOwner.Disabled = 1;
            break;

    }
}
function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oOwner.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this foodgroup
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oOwner[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oOwner.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oOwner.remove(i)
        }
    }
}
var oSecOwner = crmForm.all.isp_secondaryowner;
var oDeptMan = crmForm.all.isp_departmentmanager;
if (oSubdepartment.DataValue != null) {
    switch (oSubdepartment.SelectedText) {
        case 'Corporate':
            oSecOwner.DataValue = 33;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 2;
            oDeptMan.Disabled = 0;
            break;
        case 'Retail':
            oSecOwner.DataValue = 33;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 2;
            oDeptMan.Disabled = 0;
            break;
        case 'Rand':
            oSecOwner.DataValue = 4;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 17;
            oDeptMan.Disabled = 0;
            break;

              case 'Excon':
            oSecOwner.DataValue = 16;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 2;
            oDeptMan.Disabled = 1;
            break;

              case 'Nostro':
            oSecOwner.DataValue = 38;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 21;
            oDeptMan.Disabled = 0;
            break;

			  case  'Trade Finance':
            oSecOwner.DataValue = 42;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 2;
            oDeptMan.Disabled = 0;
            break;

			  case 'Trade Services':
            oSecOwner.DataValue = 42;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 2;
            oDeptMan.Disabled = 0;
            break;

			  case 'Inter Bank Settlements':
            oSecOwner.DataValue = 3;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 2;
            oDeptMan.Disabled = 0;
            break;

			 case 'Automated: CashKows Queries':
            oSecOwner.DataValue = 37;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 19;
            oDeptMan.Disabled = 0;
            break;

			case 'FinSurv':
            oSecOwner.DataValue = 41;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 22;
            oDeptMan.Disabled = 0;
            break;
        case 'Automated: Finance Queue':
            oSecOwner.DataValue = 10;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 1;
            oDeptMan.Disabled = 1;
            break;
        case 'Op Stats':
            oSecOwner.DataValue = 10;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 1;
            oDeptMan.Disabled = 1;
            break;
        case 'Creditors':
            oSecOwner.DataValue = 10;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 1;
            oDeptMan.Disabled = 1;
            break;
        case 'Desktop Support':
            oSecOwner.DataValue = 7;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 5;
            oDeptMan.Disabled = 1;
            break;
        case 'Applications':
            oSecOwner.DataValue = 7;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 5;
            oDeptMan.Disabled = 1;
            break;
        case 'Technical Admin':
            oSecOwner.DataValue = 7;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 5;
            oDeptMan.Disabled = 1;
            break;
        case 'Development':
            oSecOwner.DataValue = 7;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 5;
            oDeptMan.Disabled = 1;
            break;
        case 'Procurement':
            oSecOwner.DataValue = 43;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 13;
            oDeptMan.Disabled = 1;
            break;

            case 'Johannesburg':
            oSecOwner.DataValue = 26;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 14;
            oDeptMan.Disabled = 1;
            break;
           case 'Bloemfontein':
            oSecOwner.DataValue = 28;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 14;
            oDeptMan.Disabled = 1;
            break;
            case 'Cape Town':
            oSecOwner.DataValue = 25;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 14;
            oDeptMan.Disabled = 1;
            break;
            case 'Durban':
            oSecOwner.DataValue = 27;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 14;
            oDeptMan.Disabled = 1;
            break;
 case 'New Accounts':
            oSecOwner.DataValue = 4;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 17;
            oDeptMan.Disabled = 0;
            break;
case 'Payments':
             oSecOwner.DataValue = 4;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 17;
            oDeptMan.Disabled = 0;
            break;
case 'Notice':
             oSecOwner.DataValue = 4;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 17;
            oDeptMan.Disabled = 0;
            break;
case 'Confirmations':
             oSecOwner.DataValue = 4;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 17;
            oDeptMan.Disabled = 0;
            break;
case 'Withdrawal Request':
            oSecOwner.DataValue = 4;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 17;
            oDeptMan.Disabled = 0;
            break;
case 'Investments':
            oSecOwner.DataValue = 4;
            oSecOwner.Disabled = 0;
            oDeptMan.DataValue = 17;
            oDeptMan.Disabled = 0;
            break;


             // List for HR

         case 'Pension / Provident Fund':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'Uniforms':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'Leave':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'Maternity':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'Leave':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'General HR':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'Pre-Benefit Testing':
           oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'Intranet':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'WorkmanÃ¢â‚¬â„¢s Compensation':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'Staff Files':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'Workplace Forum':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'Policies':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'ICAS':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

            case 'Medical Aid':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

             case 'Careers at Bidvest / Vacancies':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

             case 'BEE':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

             case 'Disciplinaries':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

             case 'Bursaries':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

             case 'KPAÃ¢â‚¬â„¢s / Performance Management':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;

             case 'Salaries Ã¢â‚¬â€œ Infoslips ONLY':
            oSecOwner.DataValue = 8;
            oSecOwner.Disabled = 1;
            oDeptMan.DataValue = 6;
            oDeptMan.Disabled = 1;
            break;
    }
}
}
function customerid_onchange()
{
function getEntityLookup(id, entity, idfield, lookupfield, returntype) {
    var xml = "" +
    "< ?xml version='1.0' encoding='utf-8'?>" +
    "<soap :Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'" +
    " xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'" +
    " xmlns:xsd='http://www.w3.org/2001/XMLSchema'>" +
    GenerateAuthenticationHeader() +
    "</soap><soap :Body>" +
    "<fetch xmlns='http://schemas.microsoft.com/crm/2007/WebServices'>" +
    "<fetchxml>" +
    " &lt;fetch mapping='logical' count='1'&gt;" +
    " &lt;entity name='" + entity + "'&gt;" +
    " &lt;attribute name='" + lookupfield + "' /&gt;" +
    " &lt;filter&gt;" +
    " &lt;condition attribute='" + idfield + "' operator='eq' value='" + id + "' /&gt;" +
    " &lt;/filter&gt;" +
    " &lt;/entity&gt;" +
    " &lt;/fetch&gt;" +
    "</fetchxml>" +
    "</fetch>" +
    "</soap>" +
    "";

    var xmlHttpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    xmlHttpRequest.Open("POST", "/mscrmservices/2007/CrmService.asmx", false);
    xmlHttpRequest.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/crm/2007/WebServices/Fetch");
    xmlHttpRequest.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    xmlHttpRequest.setRequestHeader("Content-Length", xml.length);
    xmlHttpRequest.send(xml);

    var resultXml = xmlHttpRequest.responseXML;
    var resultSet = resultXml.text;
    resultSet.replace('&lt;', '< ');
    resultSet.replace('&gt;', '>');

    var oXmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    oXmlDoc.async = false;
    oXmlDoc.loadXML(resultSet);

    var result = oXmlDoc.getElementsByTagName(lookupfield);

    var lookupItem = new Object();

    for (var i = 0; i < result[0].attributes.length; i++) {
        var att = result[0].attributes[i];
        if (returntype == 'multiple' && att.name == "type") lookupItem.type = att.value;
        if (att.name == "name") lookupItem.name = att.value;
    }
    if (returntype != 'multiple') lookupItem.typename = returntype;
    lookupItem.id = result[0].text;
    return lookupItem;
}
}
function isp_queryby_onchange()
{
// ************************************************************************
// ** Purpose:
// **
// ** Only show foods permitted by the food category field
// **
// ************************************************************************
//set references to our fields
var oDepartment = crmForm.all.isp_queryby;
var oProblem = crmForm.all.isp_natureofproblem;

// keep a copy of the original options and reset the picklist before we start firking about
if(!oProblem.originalPicklistValues)
{
oProblem.originalPicklistValues = oProblem.Options;
}
else
{
oProblem.Options = oProblem.originalPicklistValues;
}

// create an array to hold the required picklist values for each category
var oArrayBankingQuery = new Array();
var oArrayCustomerQuery = new Array();
// *** This is the bit you would edit to add/remove options to your lists *** //
    oArrayBankingQuery.push(0,18,6,1,5,4,7,2,3,20,32);
    oArrayCustomerQuery.push(0,19,14,15,12,13,11,17,16,9,8,10,20,32,22,23,24,25,26,27,28,29,30,31);
// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oDepartment.DataValue != null)
{
    switch(oDepartment.SelectedText)
    {
        case 'Bank':
        filterPicklist(oArrayBankingQuery);
        break;

        case 'Customer':
        filterPicklist(oArrayCustomerQuery);
        break;
    }
}

function filterPicklist(oDesiredOptions)
{

    var oTempArray = new Array();

    // loop through all items in the master list
    for (var i=oProblem.length-1;i >= 0;i--)
    {

    // if the option value is in the list of desired values for this foodgroup
    // then add the option to our temp array and remove the
    // item from the desired option array
        for (j=oDesiredOptions.length;j >= 0;j--)
        {
            if(oProblem[i].value == oDesiredOptions[j])
            {
                oTempArray[i] = true;
                oDesiredOptions.splice(j,1);
            }
        }
    }

    // Now remove all options from the master list that were not marked as required
    for (var i=oProblem.length;i >= 0;i--)
    {
        if(oTempArray[i] != true)
        {
            oProblem.remove(i)
        }
    }
}
}
function isp_staffid_onchange()
{
debugger
var cid = document.getElementById("isp_staffid").DataValue[0].id;
var connection = new ActiveXObject("ADODB.Connection");
var connectionString = "Provider=SQLOLEDB.1;Password=readme;Persist Security Info=True;User ID=readme;Initial Catalog=Rennies_Bank_MSCRM;Data Source=rbscrmsrv01";
connection.Open(connectionString);
var sql = "SELECT isp_Email FROM Isp_staffExtensionBase WHERE isp_staffid = '" + cid + "' AND isp_Email IS NOT NULL";
rs = new ActiveXObject("ADODB.Recordset");
rs.Open(sql, connection, 1, 2);
var eml = "";
while (!rs.EOF) {
    eml = rs.fields('isp_Email').value
    rs.MoveNext;
}
connection.Close();
crmForm.all.isp_requestedbyemail.value = eml;
}
function isp_dateresolved_onchange()
{
debugger
var one_day=1000*60*60
var StartDate = crmForm.all.createdon.DataValue;
var EndDate = crmForm.all.isp_dateresolved.DataValue;
oAlert = Math.ceil((EndDate.getTime()-StartDate.getTime())/(one_day));
crmForm.all.isp_totaltime.DataValue = oAlert;
crmForm.all.isp_totaldays.DataValue = crmForm.all.isp_totaltime.DataValue / 24
}
function isp_totaltime_onchange()
{
crmForm.all.isp_totaltime.ForceSubmit = true;
crmForm.Save();
}
function isp_totaldays_onchange()
{
crmForm.all.isp_totaldays.ForceSubmit = true;
crmForm.Save();
}
function isp_owner_onchange()
{
// JScript source code
//This section will update the Owner Email Field when a value gets updated in this field.  this event
//is fired with the OnChange event of the isp_owner field in the Escalation Trail.
var oOwner = crmForm.all.isp_owner;
var oOwnerEmail = crmForm.all.isp_owneremail;
var oOwnerDirectPhone = crmForm.all.isp_ownerdirectphone;
if (oOwner.DataValue != null) {
    switch (oOwner.SelectedText) {
        case 'Colleen Prinsloo':
            oOwnerEmail.DataValue = "colleen.prinsloo@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3111";
            break;
        case 'Cynthia Armstrong':
            oOwnerEmail.DataValue = "Cynthia.Armstrong@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

        case 'Busisiwe Nana':
            oOwnerEmail.DataValue = "Busisiwe.Nana@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3335";
            break;
        case 'Judy Bergstedt':
            oOwnerEmail.DataValue = "Judy.Bergstedt@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3077";
            break;
        case 'Tshidi Masite':
            oOwnerEmail.DataValue = "Tshidi.Masite@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3089";
            break;
        case 'Nizel Corrigan':
            oOwnerEmail.DataValue = "Nizel.Corrigan@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3185";
            break;
        case 'Reena Ganda':
            oOwnerEmail.DataValue = "Reena.Moodley@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3046";
            break;
        case 'Petro Welgemoed':
            oOwnerEmail.DataValue = "Petro.Welgemoed@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3206";
            break;

        case 'Naomi Van Schalkwyk':
            oOwnerEmail.DataValue = "Naomi.VanSchalkwyk@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3044";
            break;


        case 'Emily Mmusi':
            oOwnerEmail.DataValue = "Emily.Mmusi@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;


        case 'Nancy Mamphiswana':
            oOwnerEmail.DataValue = "Nancy.Mamphiswana@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;


        case 'Thoko Rabotapi':
            oOwnerEmail.DataValue = "Thoko.Rabotapi@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;


        case 'Debra Eskelsen':
            oOwnerEmail.DataValue = "Debra.Eskelsen@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;


        case 'Tracey Lindeque':
            oOwnerEmail.DataValue = "Tracey.Lindeque@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;


        case 'Shamilla August':
            oOwnerEmail.DataValue = "Shamilla.August@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;


        case 'Johan Van Tonder':
            oOwnerEmail.DataValue = "Johan.VanTonder@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;


        case 'Leon Engelbrecht':
            oOwnerEmail.DataValue = "Leon.Engelbrecht@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;


        case 'Mervin Pauls':
            oOwnerEmail.DataValue = "Mervin.Pauls@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Petro Welgemoed':
            oOwnerEmail.DataValue = "Petro.Welgemoed@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Neo Sebiyane':
            oOwnerEmail.DataValue = "Neo.Sebiyane@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Taznique Petersen':
            oOwnerEmail.DataValue = "Taznique.Petersen@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Bradley Schooner':
            oOwnerEmail.DataValue = "Bradley.Schooner@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Daniel Lusse':
            oOwnerEmail.DataValue = "Daniel.Lusse@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Given Ramahala':
            oOwnerEmail.DataValue = "Given.Ramahala@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Byron Bowers':
            oOwnerEmail.DataValue = "Byron.Bowers@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Cheryl Simons':
            oOwnerEmail.DataValue = "Cheryl.Simons@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Lindsey McAslin':
            oOwnerEmail.DataValue = "Lindsey.McAslin@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;
             case 'Clarissa Coetzee':
            oOwnerEmail.DataValue = "Clarissa.Coetzee@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3250";
            break;

			case 'Michael Muller':
            oOwnerEmail.DataValue = "michael.muller@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3182";
            break;
            case 'Cole Smith':
            oOwnerEmail.DataValue = "Cole.Smith@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3334";
            break;

			case 'Marnus Smith':
            oOwnerEmail.DataValue = "Marnus.Smith@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3224";
            break;

			case 'Charl Hanekom':
            oOwnerEmail.DataValue = "Charl.Hanekom@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

			case 'Damon Campbell':
            oOwnerEmail.DataValue = "Damon.Campbell@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3224";
            break;

			case 'Muneer Saptoe':
            oOwnerEmail.DataValue = "Muneer.Saptoe@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011 407 3345";
            break;

			case 'Stephanie Douwie':
            oOwnerEmail.DataValue = "Stephanie.Douwie@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011 407 3308";
            break;



			case 'Verosha Rupnarain':
            oOwnerEmail.DataValue = "verosha.rupnarain@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011 407 3069";
            break;
             case 'Nadine Moodley':
             oOwnerEmail.DataValue = "Nadine.Moodley@bidvestbank.co.za";
             oOwnerDirectPhone.DataValue = "011 407 3000";
             break;

             case 'Beulyne Adams':
            oOwnerEmail.DataValue = "Beulyne.Adams@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Yanga Mafuta':
            oOwnerEmail.DataValue = "Yanga.Mafuta@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Leonardo Hefer':
            oOwnerEmail.DataValue = "Leonardo.Hefer@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Jan Lombard':
            oOwnerEmail.DataValue = "Jan.Lombard@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Jill Murtagh':
            oOwnerEmail.DataValue = "Jill.Murtagh@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Victoria Manuel':
            oOwnerEmail.DataValue = "Victoria.Manuel@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Tshidi Masite':
            oOwnerEmail.DataValue = "Tshidi.Masite@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Mandy Lala':
            oOwnerEmail.DataValue = "Mandy.Lala@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Shoneez Ben':
            oOwnerEmail.DataValue = "Shoneez.Ben@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3311";
            break;

             case 'Yonela Mafuta':
            oOwnerEmail.DataValue = "Yonela.Mafuta@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Monita Odendaal':
            oOwnerEmail.DataValue = "Monita.Odendaal@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

             case 'Iris Busby':
            oOwnerEmail.DataValue = "iris.Busby@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3081";
            break;

             case 'Charmaine Singh':
            oOwnerEmail.DataValue = "Charmaine.Singh@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3435";
            break;

			 case 'Ziad Moolla':
            oOwnerEmail.DataValue = "Ziad.Moolla@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3083";
            break;

			case 'Innocentia Rampa':
            oOwnerEmail.DataValue = "innocentia.rampa@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3333";
            break;

			case 'Tyler Ormandy':
            oOwnerEmail.DataValue = "Tyler.Ormandy@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3335";
            break;

			case 'Amy Pillay':
            oOwnerEmail.DataValue = "Amy.Pillay@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011 407 3221";
            break;

			case 'Arnold Van Noord':
            oOwnerEmail.DataValue = "Arnold.VanNoord@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "0114073034";
            break;

			case 'Dershni Naicker':
            oOwnerEmail.DataValue = "Dershni.Naicker@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "0114073034";
            break;

			case 'Motshidisi Shibambo':
                 oOwnerEmail.DataValue = "Motshidisi.Shibambo@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3571";
                break;

			case 'Ayanda Makhado':
                oOwnerEmail.DataValue = "ayanda.makhado@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 7309";
                break;

			case 'Micael Van Heerden':
                oOwnerEmail.DataValue = "Micael.VanHeerden@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3563";
                break;


            case 'Nonhlanhla Nyauza':
            oOwnerEmail.DataValue = "Nonhlanhla.Nyauza@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011-407 3000";
            break;

        case 'Nadeema Vania':
            oOwnerEmail.DataValue = "Nadeema.Vania@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "0860 11 1177";
            break;
        case 'Carl Gordon':
            oOwnerEmail.DataValue = "Carl.Gordon@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "0860 11 1177";
            break;
        case 'Ansin Mentor':
            oOwnerEmail.DataValue = "Ansin.Mentor@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "0860 11 1177";
            break;
        case 'Cassie Esterhuizen':
            oOwnerEmail.DataValue = "Cassie.Esterhuizen@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "0860 11 1177";
            break;
        case 'Kogie Moodley':
            oOwnerEmail.DataValue = "Kogie.Moodley@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "0860 11 1177";
            break;
        case 'Harold Van Eeden':
            oOwnerEmail.DataValue = "Harold.VanEeden@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "0860 11 1177";
            break;
        case 'Louise Gouws':
            oOwnerEmail.DataValue = "Louise.Gouws@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "0860 11 1177";
            break;
        case 'Raeesa Khan':
            oOwnerEmail.DataValue = "Raeesa.Khan@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "0860 11 1177";
            break;
        case 'Morne van der Merwe':
            oOwnerEmail.DataValue = "Morne.vandermerwe@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011 407 3243";
            break;
        case 'Juliet Mabote':
            oOwnerEmail.DataValue = "Juliet.Mabote@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011 407 3079";
            break;

        case 'Maria Ramashia':
            oOwnerEmail.DataValue = "Maria.Ramashia@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011 407 3252";
                break;


        case 'Firdoze Mahomed':
            oOwnerEmail.DataValue = "Firdoze.Mahomed@bidvestbank.co.za";
            oOwnerDirectPhone.DataValue = "011 407 3102";
            break;

        case 'Eleanor Pillay':
                oOwnerEmail.DataValue = "Eleanor.Pillay@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

              case 'Meeshana Mangru':
                oOwnerEmail.DataValue = "Meeshana.Mangru@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Thabiso Siswana':
                oOwnerEmail.DataValue = "Thabiso.Siswana@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Tebogo Tau':
                oOwnerEmail.DataValue = "Tebogo.Tau@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Princess Seripa':
                oOwnerEmail.DataValue = "Princess.Seripa@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Precious Seobi':
                oOwnerEmail.DataValue = "Precious.Seobi@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Jabulile Shongwe':
                oOwnerEmail.DataValue = "Jabulile.Shongwe@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Mathilene Henn':
                oOwnerEmail.DataValue = "Mathilene.Henn@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Lungu Mchunu':
                oOwnerEmail.DataValue = "Lungu.Mchunu@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Khensani Matjebe':
                oOwnerEmail.DataValue = "Khensani.Matjebe@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3000";
                break;

                case 'Jacqui Gibb':
                oOwnerEmail.DataValue = "Jacqui.Gibb@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3320";
                break;

                case 'Shamilla August':
                oOwnerEmail.DataValue = "Shamilla.August@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3034";
                break;
                case 'Werner Goosen':
                oOwnerEmail.DataValue = "Werner.Goosen@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3031";
                break;
                case 'Wendy Armstrong':
                oOwnerEmail.DataValue = "Wendy.Armstrong@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3185";
                break;
                case 'Sherazaan Mia':
                oOwnerEmail.DataValue = "Sherazaan.Mia@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3081";
                break;
               case 'Cameron May':
               oOwnerEmail.DataValue = "Cameron.May@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3571";
                break;
				case 'Bianca Chutumia':
                oOwnerEmail.DataValue = "Bianca.Chutumia@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3254";
                break;

				case 'Delores Cornelius':
                oOwnerEmail.DataValue = "Delores.Cornelius@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3318";
                break;

				case 'Tebogo Makgwana':
                oOwnerEmail.DataValue = "Tebogo.Makgwana@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3075";
                break;

				case 'Jan Lombard':
                oOwnerEmail.DataValue = "Jan Lombard@bidvestbank.co.za";
                oOwnerDirectPhone.DataValue = "011 407 3216";
                break;

    }
}
}
function isp_acceptedowner_onchange()
{
debugger
if (crmForm.all.isp_acceptedowner.DataValue == true) {
    crmForm.all.isp_acceptedowner.Disabled = 1;
    crmForm.all.isp_escalationstatus.value = 1;
    crmForm.all.isp_acceptedowner.ForceSubmit = true;
   crmForm.all.isp_escalationstatus.ForceSubmit = true;
}
else {
    crmForm.all.isp_acceptedowner.Disabled = 0;
}
}
function isp_secondaryowner_onchange()
{
if (crmForm.all.isp_secondaryowner.SelectedText == "Colleen Prinsloo")
{
  crmForm.all.isp_secowneremail.DataValue = "anotheremail@gmail.com";
}
else
{
  crmForm.all.isp_secowneremail.Disabled = 0;
}
}
function isp_acceptedsecowner_onchange()
{
debugger
if (crmForm.all.isp_acceptedsecowner.DataValue == true)
{
  crmForm.all.isp_acceptedsecowner.Disabled = 1;
  crmForm.all.isp_escalationstatus.value =2;
   crmForm.all.isp_acceptedsecowner.ForceSubmit = true;
    crmForm.all.isp_escalationstatus.ForceSubmit = true;
}
else
{
  crmForm.all.isp_acceptedsecowner.Disabled = 0;
}
}
function isp_reassign_onchange()
{
debugger
var strReAssign = crmForm.all.isp_reassign;
if (strReAssign.DataValue != null) {
    switch (strReAssign.SelectedText) {
        case 'Yes':
            crmForm.all.isp_1stowner.DataValue = crmForm.all.isp_owner.SelectedText;
            crmForm.all.isp_owner.DataValue = ""
            crmForm.all.isp_owner.Disabled = 0;
            crmForm.all.isp_reassign.Disabled = 1;
            crmForm.all.statuscode.DataValue = 200003
            break;
    }
}
}
function isp_acceptedmanager_onchange()
{
debugger
if (crmForm.all.isp_acceptedmanager.DataValue == true)
{
  crmForm.all.isp_acceptedmanager.Disabled = 1;
  crmForm.all.isp_escalationstatus.value =3;
 crmForm.all.isp_acceptedmanager.ForceSubmit = true;
  crmForm.all.isp_escalationstatus.ForceSubmit = true;
}
else
{
  crmForm.all.isp_acceptedmanager.Disabled = 0;
}
}
function isp_productcatagory_onchange()
{
var iIndexNew = -1;
var iEndIndex= -1;
switch (productcatagory.DataValue)
{
	case "1":
		iIndexNew = 1;
		break;
	case "2":
		iIndexNew = 0;
		break;
}
product.Options = productbackup.originalPicklistOptions
iEndIndex = crmForm.all.isp_product.Options.length
if (iIndexNew > -1 && iEndIndex> -1)
{
	var oTempArray = new Array();
	var iIndex = 0;
                     var iTempValue = 0;

               	for (var i = 0; i <= iEndIndex-1; i++)
	{
                                 if(product.Options[i].DataValue == 0)
                                  {
		oTempArray[iIndex] = product.originalPicklistOptions[i];
		iIndex++;
                                  }
                                   else if(product.Options[i].DataValue % 2 == iIndexNew)
                                  {
		oTempArray[iIndex] = product.originalPicklistOptions[i];
		iIndex++;
                                  }
                     	}
	product.Options = oTempArray;
                     product.Disabled = false;
                     crmForm.SetFieldReqLevel("isp_product",2);
}
else
{
	product.DataValue = null;
	product.Disabled = true;
                     crmForm.SetFieldReqLevel("isp_product",0);
}
}
function FrmOnSave(prmContext) {
    // Local variable to store value indicating how the save event was initiated by the user.
    var wod_SaveMode, wod_SaveEventVal;
	var Dresolved = crmForm.all.isp_dateresolved.DataValue;
	var Tdays = crmForm.all.isp_totaldays.DataValue;
	var BError = crmForm.all.isp_bankerror.DataValue;
    // Change the Save Event Value as per required Save Event
    wod_SaveEventVal = 5;
    if (prmContext != null && prmContext.getEventArgs() != null) {
        wod_SaveMode = prmContext.getEventArgs().getSaveMode();
        // 1 will pass on Recalculate button click
        if (wod_SaveMode == wod_SaveEventVal) {
            if (Dresolved == null) {
            alert("Please Complete Date Resolved");
			crmForm.all.isp_dateresolved.SetFocus();

			if (BError == '1'){
			crmForm.SetFieldReqLevel("isp_potentialloss", 1);
			crmForm.SetFieldReqLevel("isp_actualloss", 1);
			crmForm.SetFieldReqLevel("isp_numberofswiftmessagessent", 1);
			crmForm.SetFieldReqLevel("isp_numberofswiftmessagesreceived", 1);
			crmForm.SetFieldReqLevel("isp_potentiallossccy", 1);
			crmForm.SetFieldReqLevel("isp_actuallossccy", 1);
			crmForm.SetFieldReqLevel("isp_comments", 1);}
            // Use the code line below only if validation is failed then abort function save event
              prmContext.getEventArgs().preventDefault();
			  }
        }
    }
}

 function prioritycode_onchange() {

   var TODAY;
    TODAY = new Date();
	var Pcode = crmForm.all.prioritycode.DataValue;
    if (Pcode == '3') {
       TODAY.setDate(TODAY.getDate() + 3);
            crmForm.all.followupby.DataValue = TODAY;
		}
			else if (Pcode == '2') {
                TODAY.setDate(TODAY.getDate() + 2);
                       crmForm.all.followupby.DataValue = TODAY;
				}
 				   else {
                TODAY.setDate(TODAY.getDate() + 1);
                crmForm.all.followupby.DataValue = TODAY;
				}
		}
function statuscode_onchange() {
crmForm.all.prioritycode.DataValue = null;
// crmForm.SetFieldReqLevel("prioritycode", 1);
}
function owner_onchange() {
crmForm.all.prioritycode.DataValue = null;
}
function isp_reasign_onchange() {
crmForm.all.prioritycode.DataValue = null;
}
function isp_acceptedowner_onchange() {
crmForm.all.prioritycode.DataValue = null;
}
function isp_outstandingdocumentation_onchange() {
 if (crmForm.all.isp_outstandingdocumentation.DataValue == '1') {
   Xrm.Page.ui.tabs.get("tab_4").setVisible(true);}
   else {
         Xrm.Page.ui.tabs.get("tab_4").setVisible(false);
       }
    }
function isp_bankerror_onchange() {
 if ((crmForm.all.isp_bankerror.DataValue == '1') && (crmForm.all.isp_subdepartment.DataValue == '33' || crmForm.all.isp_subdepartment.DataValue == '70' || crmForm.all.isp_subdepartment.DataValue == '4' || crmForm.all.isp_subdepartment.DataValue == '6')) {
			Xrm.Page.ui.tabs.get("tab_5").setVisible(true);}

   else {
         Xrm.Page.ui.tabs.get("tab_5").setVisible(false);
       }

	}
function loadsubdept()
{
	// * **********************************************************************
// ** Purpose:
// **
// ** Only show certain Statuses
// **
// ************************************************************************
//set references to our fields
var oSubDept1 = crmForm.all.isp_subdepartment;
var oStatCode = crmForm.all.statuscode;

// keep a copy of the original options and reset the picklist before we start firking about
if(!oStatCode.originalPicklistValues)
{
oStatCode.originalPicklistValues = oStatCode.Options;
}
else
{
oStatCode.Options = oStatCode.originalPicklistValues;
}

// create an array to hold the required picklist values for each category
var oArrayCorporateQuery1 = new Array();
var oArrayRetailQuery1 = new Array();
var oArrayBOQueriesQuery1 = new Array();
var oArrayAutoRetailQuery1 = new Array();

// text values correspond to the picklist values in the 'Status' field

// *** This is the bit you would edit to add/remove options to your lists *** //
    oArrayCorporateQuery1.push(0,100000000,100000013,100000001,100000002,100000003,100000004,100000005,100000006,100000007,100000008,100000009,100000010,100000011,100000012);
    oArrayRetailQuery1.push(0,100000000,100000013,100000001,100000002,100000003,100000004,100000005,100000006,100000007,100000008,100000009,100000010,100000011,100000012);
	oArrayBOQueriesQuery1.push(0,100000000,100000013,100000001,100000002,100000003,100000004,100000005,100000006,100000007,100000008,100000009,100000010,100000011,100000012);
	oArrayAutoRetailQuery1.push(0,100000000,100000013,100000001,100000002,100000003,100000004,100000005,100000006,100000007,100000008,100000009,100000010,100000011,100000012);

// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDept1.DataValue != null)
{
    switch(oSubDept1.SelectedText)
    {
        case 'Corporate':
        filterPicklist(oArrayCorporateQuery1);
        break;

        case 'Retail':
        filterPicklist(oArrayRetailQuery1);
        break;
		case 'Automated: BO Queries':
        filterPicklist(oArrayRetailQuery1);
        break;
		case 'Automated: Retail Queries':
        filterPicklist(oArrayRetailQuery1);
        break;
	}
}
function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oStatCode.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this foodgroup
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oStatCode[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oStatCode.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oStatCode.remove(i)
        }
    }
}

}

function Status_onchange()
{
// ************************************************************************
// ** Purpose:
// **
// ** Only show certain Statuses
// **
// ************************************************************************
//set references to our fields
var oSubDept1 = crmForm.all.isp_subdepartment;
var oStatCode = crmForm.all.statuscode;

// keep a copy of the original options and reset the picklist before we start firking about
if(!oStatCode.originalPicklistValues)
{
oStatCode.originalPicklistValues = oStatCode.Options;
}
else
{
oStatCode.Options = oStatCode.originalPicklistValues;
}

// create an array to hold the required picklist values for each category
var oArrayCorporateQuery1 = new Array();
var oArrayRetailQuery1 = new Array();
var oArrayBOQueriesQuery1 = new Array();
var oArrayAutoRetailQuery1 = new Array();

// text values correspond to the picklist values in the 'Status' field

// *** This is the bit you would edit to add/remove options to your lists *** //
    oArrayCorporateQuery1.push(0,100000000,100000013,100000001,100000002,100000003,100000004,100000005,100000006,100000007,100000008,100000009,100000010,100000011,100000012);
    oArrayRetailQuery1.push(0,100000000,100000013,100000001,100000002,100000003,100000004,100000005,100000006,100000007,100000008,100000009,100000010,100000011,100000012);
	oArrayBOQueriesQuery1.push(0,100000000,100000013,100000001,100000002,100000003,100000004,100000005,100000006,100000007,100000008,100000009,100000010,100000011,100000012);
	oArrayAutoRetailQuery1.push(0,100000000,100000013,100000001,100000002,100000003,100000004,100000005,100000006,100000007,100000008,100000009,100000010,100000011,100000012);

// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDept1.DataValue != null)
{
    switch(oSubDept1.SelectedText)
    {
        case 'Corporate':
        filterPicklist(oArrayCorporateQuery1);
        break;

        case 'Retail':
        filterPicklist(oArrayRetailQuery1);
        break;
		case 'Automated: BO Queries':
        filterPicklist(oArrayRetailQuery1);
        break;
		case 'Automated: Retail Queries':
        filterPicklist(oArrayRetailQuery1);
        break;
	}
}
function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oStatCode.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this foodgroup
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oStatCode[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oStatCode.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oStatCode.remove(i)
        }
    }
}

}
function loadCustcategory()
{
	// ************************************************************************
// ** Purpose:
// **
// ** Only show certain Customer Categories
// **
// ************************************************************************
//set references to our fields
var oSubDepart = crmForm.all.isp_subdepartment;
var oCustCat = crmForm.all.isp_category;

// keep a copy of the original options and reset the picklist before we start firking about
if(!oCustCat.originalPicklistValues)
{
oCustCat.originalPicklistValues = oCustCat.Options;
}
else
{
oCustCat.Options = oCustCat.originalPicklistValues;
}

// create an array to hold the required picklist values for each category
var oArrayCashkows  = new Array();
var oArrayAutoCashkows  = new Array();

// text values correspond to the picklist values in the 'nature of problem' field

// *** This is the bit you would edit to add/remove options to your lists *** //
	oArrayCashkows.push(0,36,37,38,39,40);
	oArrayAutoCashkows.push(0,36,37,38,39,40);

// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDepart.DataValue != null)
{
    switch(oSubDepart.SelectedText)
    {

      case 'Cashkow Queries':
        filterPicklist(oArrayCashkows);
        break;

      case 'Automated: CashKows Queries':
        filterPicklist(oArrayAutoCashkows);
        break;

    }
}
function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oCustCat.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this foodgroup
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oCustCat[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oCustCat.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oCustCat.remove(i)
        }
    }
}
}
function SubDeptCategory_onchange()
{
// ************************************************************************
// ** Purpose:
// **
// ** Only show certain Customer Categories
// **
// ************************************************************************
//set references to our fields
var oSubDepart = crmForm.all.isp_subdepartment;
var oCustCat = crmForm.all.isp_category;

// keep a copy of the original options and reset the picklist before we start firking about
if(!oCustCat.originalPicklistValues)
{
oCustCat.originalPicklistValues = oCustCat.Options;
}
else
{
oCustCat.Options = oCustCat.originalPicklistValues;
}

// create an array to hold the required picklist values for each category
var oArrayCashkows  = new Array();
var oArrayAutoCashkows  = new Array();

// text values correspond to the picklist values in the 'nature of problem' field

// *** This is the bit you would edit to add/remove options to your lists *** //
    oArrayCashkows.push(0,36,37,38,39,40);
	oArrayAutoCashkows.push(0,36,37,38,39,40);

// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDepart.DataValue != null)
{
    switch(oSubDepart.SelectedText)
    {

      case 'Cashkow Queries':
        filterPicklist(oArrayCashkows);
        break;

      case 'Automated: CashKows Queries':
        filterPicklist(oArrayAutoCashkows);
        break;

    }
}
function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oCustCat.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this foodgroup
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oCustCat[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oCustCat.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oCustCat.remove(i)
        }
    }
}
}
function loadQuerycategory()
{
	// ************************************************************************
// ** Purpose:
// **
// ** Only show certain Query Categories
// **
// ************************************************************************
//set references to our fields
var oSubDepart2 = crmForm.all.isp_subdepartment;
var oQCat = crmForm.all.isp_querycategory;

// keep a copy of the original options and reset the picklist before we start firking about
if(!oQCat.originalPicklistValues)
{
oQCat.originalPicklistValues = oQCat.Options;
}
else
{
oQCat.Options = oQCat.originalPicklistValues;
}

// create an array to hold the required picklist values for each category
var oArrayCashkows1  = new Array();
var oArrayAutoCashkows1  = new Array();

// text values correspond to the picklist values in the 'nature of problem' field

// *** This is the bit you would edit to add/remove options to your lists *** //
	oArrayCashkows1.push(0,7,25,46,27,1,2,47,48);
	oArrayAutoCashkows1.push(0,7,25,46,27,1,2,47,48);

// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDepart2.DataValue != null)
{
    switch(oSubDepart2.SelectedText)
    {

      case 'Cashkow Queries':
        filterPicklist(oArrayCashkows1);
        break;

      case 'Automated: CashKows Queries':
        filterPicklist(oArrayAutoCashkows1);
        break;

    }
}
function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oQCat.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this foodgroup
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oQCat[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oQCat.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oQCat.remove(i)
        }
    }
}
}
function SubDeptQCategory_onchange()
{
	// ************************************************************************
// ** Purpose:
// **
// ** Only show certain Query Categories
// **
// ************************************************************************
//set references to our fields
var oSubDepart2 = crmForm.all.isp_subdepartment;
var oQCat = crmForm.all.isp_querycategory;

// keep a copy of the original options and reset the picklist before we start firking about
if(!oQCat.originalPicklistValues)
{
oQCat.originalPicklistValues = oQCat.Options;
}
else
{
oQCat.Options = oQCat.originalPicklistValues;
}

// create an array to hold the required picklist values for each category
var oArrayCashkows1  = new Array();
var oArrayAutoCashkows1  = new Array();

// text values correspond to the picklist values in the 'nature of problem' field

// *** This is the bit you would edit to add/remove options to your lists *** //
	oArrayCashkows1.push(0,7,25,46,27,1,2,47,48);
	oArrayAutoCashkows1.push(0,7,25,46,27,1,2,47,48);

// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDepart2.DataValue != null)
{
    switch(oSubDepart2.SelectedText)
    {

      case 'Cashkow Queries':
        filterPicklist(oArrayCashkows1);
        break;

      case 'Automated: CashKows Queries':
        filterPicklist(oArrayAutoCashkows1);
        break;

    }
}
function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oQCat.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this foodgroup
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oQCat[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oQCat.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oQCat.remove(i)
        }
    }
}
}
