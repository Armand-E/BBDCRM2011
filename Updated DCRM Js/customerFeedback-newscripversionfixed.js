function IFRAME_DMS_Documents_onload() {

}


function Form_onload()
{
debugger

if (Xrm.Page.getAttribute("isp_outstandingdocumentation").getValue() == '0') {
   Xrm.Page.ui.tabs.get("tab_4").setVisible(false);
 }

if (Xrm.Page.getAttribute("isp_bankerror").getValue() == '0') {
   Xrm.Page.ui.tabs.get("tab_5").setVisible(false);
}


var OpicsId = Xrm.Page.getAttribute("isp_opicsref").getValue();
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


if (Xrm.Page.ui.getFormType() == 1) {
    // Only make these changes when the form is opened in Create mode.

    var TODAY;
    TODAY = new Date();

    // Set Follow Up By Date to today + 1
    TODAY.setDate(TODAY.getDate() + 1);
    Xrm.Page.getAttribute("followupby").setValue(TODAY);


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
    Xrm.Page.title.setAttribute("req", 0);
    Xrm.Page.title_c.className = "n";
    Xrm.Page.title_c.innerHTML =
    Xrm.Page.title_c.innerText;
    //document.all.title_d.style.visibility = "hidden";
   // document.all.title_c.style.visibility = "hidden";
    Xrm.Page.subjectid.setAttribute("req", 0);
    Xrm.Page.subjectid_c.className = "n";
    Xrm.Page.subjectid_c.innerHTML =
    Xrm.Page.subjectid_c.innerText;
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


if (Xrm.Page.ui.getFormType() == 2) {
       var oDepartmentValue = Xrm.Page.getAttribute("isp_department");


            if (oDepartmentValue.getValue() != null) {
                switch (oDepartmentValue.getSelectedOption().text) {
                    case 'I.T Procurement':
                   document.all.isp_staffid_d.style.visibility = "";
                    document.all.isp_staffid_c.style.visibility = "";
                    document.all.isp_requestedbyemail_d.style.visibility = "";
                    document.all.isp_requestedbyemail_c.style.visibility = "";
                    Xrm.Page.isp_requestedbyemail.Disabled = 1;
                    document.all.isp_descriptionofproblem_d.style.visibility = "";
                    document.all.isp_descriptionofproblem_c.style.visibility = "";
                    //If the Department is I.T Procurement, the Customer field will become not required
                   // Xrm.Page.customerid.Disabled = 1;
                   // Xrm.Page.isp_queryby.setAttribute("req", 0);
                   // Xrm.Page.isp_queryby_c.className = "n";
                   // Xrm.Page.isp_queryby_c.innerHTML =
                  //  Xrm.Page.isp_queryby_c.innerText;
                    document.all.isp_queryby_c.style.visibility = "hidden";
                    document.all.isp_queryby_d.style.visibility = "hidden";
                   //This section will make the Action Needed field not required and hidden
                    Xrm.Page.isp_queryby.setAttribute("req", 0);
                    Xrm.Page.isp_queryby_c.className = "n";
                    Xrm.Page.isp_queryby_c.innerHTML =
                    Xrm.Page.isp_queryby_c.innerText;
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
                    Xrm.Page.isp_allowclosedemail.setAttribute("req", 0);
                    Xrm.Page.isp_allowclosedemail_c.className = "n";
                    Xrm.Page.isp_allowclosedemail_c.innerHTML =
                    Xrm.Page.isp_allowclosedemail_c.innerText;
                    document.all.isp_allowclosedemail_c.style.visibility = "hidden";
                    document.all.isp_allowclosedemail_d.style.visibility = "hidden";
                    //This section will make the Nature of Problem field not required and hidden
                    Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
                    Xrm.Page.isp_natureofproblem_c.className = "n";
                    Xrm.Page.isp_natureofproblem_c.innerHTML =
                     Xrm.Page.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "hidden";
                    document.all.isp_natureofproblem_d.style.visibility = "hidden";
                    //This section will bring up the Description of the Case to be filled in by the person logging the request
                    Xrm.Page.title.setAttribute("req", 0);
                    Xrm.Page.title_c.className = "n";
                    Xrm.Page.title_c.innerHTML =
                    Xrm.Page.title_c.innerText;
                    document.all.title_d.style.visibility = "hidden";
                    document.all.title_c.style.visibility = "hidden";
                    Xrm.Page.subjectid.setAttribute("req", 0);
                    Xrm.Page.subjectid_c.className = "n";
                    Xrm.Page.subjectid_c.innerHTML =
                    Xrm.Page.subjectid_c.innerText;
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
                    Xrm.Page.isp_querycategory.setAttribute("req", 0);
                    Xrm.Page.isp_querycategory_c.className = "n";
                    Xrm.Page.isp_querycategory_c.innerHTML =
                    Xrm.Page.isp_querycategory_c.innerText;
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
                        //document.all.isp_descriptionofproblem_d.style.visibility = "hidden";
                        //document.all.isp_descriptionofproblem_c.style.visibility = "hidden";
                        //This section will make the description field not required, and also hide this field
                        Xrm.Page.title.setAttribute("req", 0);
                        Xrm.Page.title_c.className = "n";
                        Xrm.Page.title_c.innerHTML =
                        Xrm.Page.title_c.innerText;
                        document.all.title_d.style.visibility = "hidden";
                        document.all.title_c.style.visibility = "hidden";
                        Xrm.Page.subjectid.setAttribute("req", 0);
                        Xrm.Page.subjectid_c.className = "n";
                        Xrm.Page.subjectid_c.innerHTML =
                        Xrm.Page.subjectid_c.innerText;
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
                        Xrm.Page.isp_queryby.setAttribute("req", 0);
                        Xrm.Page.isp_queryby_c.className = "n";
                        Xrm.Page.isp_queryby_c.innerHTML =
                        Xrm.Page.isp_queryby_c.innerText;
                        Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
                        Xrm.Page.isp_natureofproblem_c.className = "n";
                        Xrm.Page.isp_natureofproblem_c.innerHTML =
                        Xrm.Page.isp_natureofproblem_c.innerText;
                        Xrm.Page.isp_sendemailwithrefno.Disabled = 1;
                        Xrm.Page.getAttribute("isp_sendemailwithrefno").setSubmitMode("always");
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
                    Xrm.Page.isp_requestedbyemail.Disabled = 1;
                    document.all.isp_descriptionofproblem_d.style.visibility = "";
                    document.all.isp_descriptionofproblem_c.style.visibility = "";
                    //If the Department is I.T Procurement, the Customer field will become not required
                   // Xrm.Page.customerid.Disabled = 1;
                   // Xrm.Page.isp_queryby.setAttribute("req", 0);
                   // Xrm.Page.isp_queryby_c.className = "n";
                   // Xrm.Page.isp_queryby_c.innerHTML =
                  //  Xrm.Page.isp_queryby_c.innerText;
                    document.all.isp_queryby_c.style.visibility = "hidden";
                    document.all.isp_queryby_d.style.visibility = "hidden";
                   //This section will make the Action Needed field not required and hidden
                    Xrm.Page.isp_queryby.setAttribute("req", 0);
                    Xrm.Page.isp_queryby_c.className = "n";
                    Xrm.Page.isp_queryby_c.innerHTML =
                    Xrm.Page.isp_queryby_c.innerText;
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
                    Xrm.Page.isp_allowclosedemail.setAttribute("req", 0);
                    Xrm.Page.isp_allowclosedemail_c.className = "n";
                    Xrm.Page.isp_allowclosedemail_c.innerHTML =
                    Xrm.Page.isp_allowclosedemail_c.innerText;
                    document.all.isp_allowclosedemail_c.style.visibility = "hidden";
                    document.all.isp_allowclosedemail_d.style.visibility = "hidden";
                    //This section will make the Nature of Problem field not required and hidden
                    Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
                    Xrm.Page.isp_natureofproblem_c.className = "n";
                    Xrm.Page.isp_natureofproblem_c.innerHTML =
                     Xrm.Page.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "";
                    document.all.isp_natureofproblem_d.style.visibility = "";
                    //This section will bring up the Description of the Case to be filled in by the person logging the request
                    Xrm.Page.title.setAttribute("req", 0);
                    Xrm.Page.title_c.className = "n";
                    Xrm.Page.title_c.innerHTML =
                    Xrm.Page.title_c.innerText;
                    document.all.title_d.style.visibility = "hidden";
                    document.all.title_c.style.visibility = "hidden";
                    Xrm.Page.subjectid.setAttribute("req", 0);
                    Xrm.Page.subjectid_c.className = "n";
                    Xrm.Page.subjectid_c.innerHTML =
                    Xrm.Page.subjectid_c.innerText;
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
                    Xrm.Page.getAttribute("casetypecode").setValue(200001);
                    Xrm.Page.getAttribute("caseorigincode").setValue(2);
                    //document.all.isp_requestedbyemail_d.style.visibility = "";
                    //document.all.isp_requestedbyemail_c.style.visibility = "";
                    //Xrm.Page.isp_requestedbyemail.Disabled = 1;
                    document.all.isp_descriptionofproblem_d.style.visibility = "";
                    document.all.isp_descriptionofproblem_c.style.visibility = "";
                    //If the Department is I.T Procurement, the Customer field will become not required
                    Xrm.Page.customerid.Disabled = 1;
                    Xrm.Page.customerid.setAttribute("req", 0);
                    Xrm.Page.customerid_c.className = "n";
                    Xrm.Page.customerid_c.innerHTML =
                    Xrm.Page.customerid_c.innerText;
                    document.all.customerid_c.style.visibility = "hidden";
                    document.all.customerid_d.style.visibility = "hidden";
                    //This section will make the Action Needed field not required and hidden
                    Xrm.Page.isp_queryby.setAttribute("req", 0);
                    Xrm.Page.isp_queryby_c.className = "n";
                    Xrm.Page.isp_queryby_c.innerHTML =
                    Xrm.Page.isp_queryby_c.innerText;
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
                    //Xrm.Page.isp_allowclosedemail.setAttribute("req", 0);
                    //Xrm.Page.isp_allowclosedemail_c.className = "n";
                    //Xrm.Page.isp_allowclosedemail_c.innerHTML =
                    //Xrm.Page.isp_allowclosedemail_c.innerText;
                    //document.all.isp_allowclosedemail_c.style.visibility = "hidden";
                    //document.all.isp_allowclosedemail_d.style.visibility = "hidden";
                    //This section will make the Nature of Problem field not required and hidden
                    Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
                    Xrm.Page.isp_natureofproblem_c.className = "n";
                    Xrm.Page.isp_natureofproblem_c.innerHTML =
                    Xrm.Page.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "hidden";
                    document.all.isp_natureofproblem_d.style.visibility = "hidden";
                    //This section will bring up the Description of the Case to be filled in by the person logging the request
                    Xrm.Page.title.setAttribute("req", 0);
                    Xrm.Page.title_c.className = "n";
                    Xrm.Page.title_c.innerHTML =
                    Xrm.Page.title_c.innerText;
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





                    //alert("Since this is an I.T. Procurement request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
                    //var label = Xrm.Page.getAttribute("isp_staffid_c");
                    //label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>";
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
                        Xrm.Page.title.setAttribute("req", 0);
                        Xrm.Page.title_c.className = "n";
                        Xrm.Page.title_c.innerHTML =
                        Xrm.Page.title_c.innerText;
                        document.all.title_d.style.visibility = "hidden";
                        document.all.title_c.style.visibility = "hidden";
                        Xrm.Page.subjectid.setAttribute("req", 0);
                        Xrm.Page.subjectid_c.className = "n";
                        Xrm.Page.subjectid_c.innerHTML =
                        Xrm.Page.subjectid_c.innerText;
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
                        //document.all.isp_1stowner_d.style.visibility = "hidden";
                        //document.all.isp_1stowner_c.style.visibility = "hidden";
                        document.all.isp_timesreassigned_d.style.visibility = "hidden";
                        document.all.isp_timesreassigned_c.style.visibility = "hidden";
                        document.all.isp_category_d.style.visibility = "hidden";
                        document.all.isp_category_c.style.visibility = "hidden";
  //This section will make the Query Category field not required and hidden
                    Xrm.Page.isp_querycategory.setAttribute("req", 0);
                    Xrm.Page.isp_querycategory_c.className = "n";
                    Xrm.Page.isp_querycategory_c.innerHTML =
                    Xrm.Page.isp_querycategory_c.innerText;
            //        document.all.isp_querycategory_c.style.visibility = "hidden";
             //       document.all.isp_querycategory_d.style.visibility = "hidden";



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
                        Xrm.Page.title.setAttribute("req", 0);
                        Xrm.Page.title_c.className = "n";
                        Xrm.Page.title_c.innerHTML =
                        Xrm.Page.title_c.innerText;
                        document.all.title_d.style.visibility = "hidden";
                        document.all.title_c.style.visibility = "hidden";
                        Xrm.Page.subjectid.setAttribute("req", 0);
                        Xrm.Page.subjectid_c.className = "n";
                        Xrm.Page.subjectid_c.innerHTML =
                        Xrm.Page.subjectid_c.innerText;
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
                        //document.all.isp_1stowner_d.style.visibility = "hidden";
                        //document.all.isp_1stowner_c.style.visibility = "hidden";
                        document.all.isp_timesreassigned_d.style.visibility = "hidden";
                        document.all.isp_timesreassigned_c.style.visibility = "hidden";
                        document.all.isp_category_d.style.visibility = "hidden";
                        document.all.isp_category_c.style.visibility = "hidden";

                    //This section will make the Nature of Problem field not required and hidden
                    Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
                    Xrm.Page.isp_natureofproblem_c.className = "n";
                    Xrm.Page.isp_natureofproblem_c.innerHTML =
                    Xrm.Page.isp_natureofproblem_c.innerText;
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
                        Xrm.Page.title.setAttribute("req", 0);
                        Xrm.Page.title_c.className = "n";
                        Xrm.Page.title_c.innerHTML =
                        Xrm.Page.title_c.innerText;
                        document.all.title_d.style.visibility = "hidden";
                        document.all.title_c.style.visibility = "hidden";
                        Xrm.Page.subjectid.setAttribute("req", 0);
                        Xrm.Page.subjectid_c.className = "n";
                        Xrm.Page.subjectid_c.innerHTML =
                        Xrm.Page.subjectid_c.innerText;
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
                    Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
                    Xrm.Page.isp_natureofproblem_c.className = "n";
                    Xrm.Page.isp_natureofproblem_c.innerHTML =
                    Xrm.Page.isp_natureofproblem_c.innerText;
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
                        Xrm.Page.title.setAttribute("req", 0);
                        Xrm.Page.title_c.className = "n";
                        Xrm.Page.title_c.innerHTML =
                        Xrm.Page.title_c.innerText;
                        document.all.title_d.style.visibility = "hidden";
                        document.all.title_c.style.visibility = "hidden";
                        Xrm.Page.subjectid.setAttribute("req", 0);
                        Xrm.Page.subjectid_c.className = "n";
                        Xrm.Page.subjectid_c.innerHTML =
                        Xrm.Page.subjectid_c.innerText;
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
                        //document.all.isp_1stowner_d.style.visibility = "hidden";
                        //document.all.isp_1stowner_c.style.visibility = "hidden";
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
                    Xrm.Page.title.setAttribute("req", 0);
                    Xrm.Page.title_c.className = "n";
                    Xrm.Page.title_c.innerHTML =
                    Xrm.Page.title_c.innerText;
                    document.all.title_d.style.visibility = "hidden";
                    document.all.title_c.style.visibility = "hidden";
                    Xrm.Page.subjectid.setAttribute("req", 0);
                    Xrm.Page.subjectid_c.className = "n";
                    Xrm.Page.subjectid_c.innerHTML =
                    Xrm.Page.subjectid_c.innerText;
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


var strEscalationStatus = Xrm.Page.getAttribute("isp_escalationstatus");

if (strEscalationStatus.getValue() != null) {
    switch (strEscalationStatus.getSelectedOption().text) {
        case 'Stage1':
            Xrm.Page.isp_acceptedowner.Disabled = 1;
            break;

        case 'Stage2':
            Xrm.Page.isp_acceptedsecowner.Disabled = 1;
            Xrm.Page.isp_acceptedowner.Disabled = 1;
            break;

        case 'Stage3':
            Xrm.Page.isp_acceptedmanager.Disabled = 1;
            Xrm.Page.isp_acceptedsecowner.Disabled = 1;
            Xrm.Page.isp_acceptedowner.Disabled = 1;
            break;
    }
}



if (Xrm.Page.ui.getFormType() == 4) {
    var strStatus = Xrm.Page.getAttribute("statuscode");
    var dtResolvedDate = Xrm.Page.getAttribute("isp_dateresolved");

    if (strStatus.getValue() != null) {
        switch (strStatus.getSelectedOption().text) {
            case 'Problem Solved':
                if (dtResolvedDate.getValue() != null) {
                    var one_day = 1000 * 60 * 60
                    var StartDate = Xrm.Page.getAttribute("createdon").getValue();
                    var EndDate = Xrm.Page.getAttribute("isp_dateresolved").getValue();

                    oAlert = Math.ceil((EndDate.getTime() - StartDate.getTime()) / (one_day));

                    Xrm.Page.getAttribute("isp_totaltime").setValue(oAlert);

                    Xrm.Page.getAttribute("isp_totaldays").getValue() = Xrm.Page.getAttribute("isp_totaltime").getValue() / 24
                    break;

                    if (dtResolvedDate.getValue() == null) {
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

if (Xrm.Page.ui.getFormType() == 1) {
    //This section will update the Owner Email Field when a value gets updated in this field. this event
    //is fired with the OnChange event of the isp_owner field in the Escalation Trail.

    var oOwner = Xrm.Page.getAttribute("isp_owner");
    var oOwnerEmail = Xrm.Page.getAttribute("isp_owneremail");
    var oOwnerDirectPhone = Xrm.Page.getAttribute("isp_ownerdirectphone");
    var oSecOwner = Xrm.Page.getAttribute("isp_secondaryowner");
    var oSecOwnerEmail = Xrm.Page.getAttribute("isp_secowneremail");
    var oSecOwnerDirectPhone = Xrm.Page.getAttribute("isp_secownerdirectphone");
    var oDeptMan = Xrm.Page.getAttribute("isp_departmentmanager");
    var oDeptManEmail = Xrm.Page.getAttribute("isp_depmanemail");
    var oDepManDirectPhone = Xrm.Page.getAttribute("isp_depmandirectphone");

    var strEscalationStatus = Xrm.Page.getAttribute("isp_escalationstatus");

    if (strEscalationStatus.getValue() != null) {
        switch (strEscalationStatus.getSelectedOption().text) {
            case 'Stage1':
                Xrm.Page.isp_acceptedowner.Disabled = 1;
                Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode("always");
                break;

            case 'Stage2':
                Xrm.Page.isp_acceptedsecowner.Disabled = 1;
                Xrm.Page.isp_acceptedowner.Disabled = 1;
                Xrm.Page.getAttribute("isp_acceptedsecowner").setSubmitMode("always");
                Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode("always");
                break;

            case 'Stage3':
                Xrm.Page.isp_acceptedmanager.Disabled = 1;
                Xrm.Page.isp_acceptedsecowner.Disabled = 1;
                Xrm.Page.isp_acceptedowner.Disabled = 1;
                Xrm.Page.getAttribute("isp_acceptedmanager").setSubmitMode("always");
                Xrm.Page.getAttribute("isp_acceptedsecowner").setSubmitMode("always");
                Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode("always");
                break;
        }
    }

     if (oOwner.getValue() != null) {
        switch (oOwner.getSelectedOption().text) {
            case 'Barbara Turner':
                oOwnerEmail.setValue("morne.vandermerwe@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("021-431 7913");
                break;

             case 'Debbie Perry':
                oOwnerEmail.setValue("morne.vandermerwe@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("031-307 2625");
                break;

            case 'Shamilla August':
                oOwnerEmail.setValue("Shamilla.August@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3034");
                break;

            case 'Juliet Mabote ':
                oOwnerEmail.setValue("Juliet.Mabote@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3079");
                break;

                case 'Maria Ramashia':
                oOwnerEmail.setValue("Maria.Ramashia@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3252");
                break;


                case 'Marise Petersen':
                oOwnerEmail.setValue("Marise.Petersen@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3055");
                break;

                case 'Eleanor Pillay':
                oOwnerEmail.setValue("Eleanor.Pillay@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Meeshana Mangru':
                oOwnerEmail.setValue("Meeshana.Mangru@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Thabiso Siswana':
                oOwnerEmail.setValue("Thabiso.Siswana@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Tebogo Tau':
                oOwnerEmail.setValue("Tebogo.Tau@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Princess Seripa':
                oOwnerEmail.setValue("Princess.Seripa@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Precious Seobi':
                oOwnerEmail.setValue("Precious.Seobi@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Jabulile Shongwe':
                oOwnerEmail.setValue("Jabulile.Shongwe@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Mathilene Henn':
                oOwnerEmail.setValue("Mathilene.Henn@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Lungu Mchunu':
                oOwnerEmail.setValue("Lungu.Mchunu@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Khensani Matjebe':
                oOwnerEmail.setValue("Khensani.Matjebe@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Werner Goosen':
                oOwnerEmail.setValue("Werner.Goosen@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3031");
                break;

                 case 'Wendy Armstrong':
                oOwnerEmail.setValue("Wendy.Armstrong@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3185");
                break;

                case 'Sherazaan Mia':
                oOwnerEmail.setValue("Sherazaan.Mia@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3081");
                break;


                case 'Jacqui Gibb':
                oOwnerEmail.setValue("Jacqui.Gibb@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3320");
                break;

                case 'Cameron May':
                oOwnerEmail.setValue("Cameron.May@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3571");
                break;

                 case 'Thashnee Pillay':
                oOwnerEmail.setValue("Thashnee.Pillay@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3601");
                break;

                case 'Nadine Moodley':
                oOwnerEmail.setValue("Nadine.Moodley@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

		case 'Talent Kubheka':
                oOwnerEmail.setValue("Talent.Kubheka@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3249");
                break;

			case 'Amy Pillay':
            oOwnerEmail.setValue("Amy.Pillay@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011 407 3221");
            break;


		case 'Christiaan Oldewage':
                oOwnerEmail.setValue("Christiaan.Oldewage@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3206");
                break;

	case 'Roy Minton':
                oOwnerEmail.setValue("Roy.Minton@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3228");
                break;

	case 'Bileen Jackson':
                oOwnerEmail.setValue("Bileen.Jackson@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3435");
                break;

	case 'Melanie Browne':
                oOwnerEmail.setValue("Melanie.Browne@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3623");
                break;

	case 'Ashleigh Khoury':
                oOwnerEmail.setValue("Ashleigh.Khoury@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3290");
                break;

	    case 'Iris Busby':
            oOwnerEmail.setValue("iris.Busby@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3081");
            break;

             case 'Charmaine Singh':
            oOwnerEmail.setValue("Charmaine.Singh@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3435");
            break;

			 case 'Ziad Moolla':
            oOwnerEmail.setValue("Ziad.Moolla@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3083");
            break;

			case 'Innocentia Rampa':
            oOwnerEmail.setValue("innocentia.rampa@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3333");
            break;

			case 'Tyler Ormandy':
            oOwnerEmail.setValue("Tyler.Ormandy@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3335");
            break;

			case 'Shoneez Ben':
            oOwnerEmail.setValue("Shoneez.Ben@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3311");
            break;

		    case 'Gareth Robinson':
                oOwnerEmail.setValue("Gareth.Robinson@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3214");
                break;

		   case 'Motshidisi Shibambo':
                 oOwnerEmail.setValue("Motshidisi.Shibambo@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3571");
                break;

				case 'Ayanda Makhado':
                oOwnerEmail.setValue("ayanda.makhado@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 7309");
                break;

				case 'Micael Van Heerden':
                oOwnerEmail.setValue("Micael.VanHeerden@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3563");
                break;

				case 'Bileen Jackson':
                oOwnerEmail.setValue("bileen.jackson@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3435");
                break;

				case 'Moleti Moime':
                oOwnerEmail.setValue("Moleti.Moime@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3573");
                break;

				case 'Fritz Klee':
                oOwnerEmail.setValue("Fritz.Klee@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3573");
                break;


                case 'Naomi Van Schalkwyk':
                oSecOwnerEmail.setValue("naomi.vanschalkwyk@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011-407 3044");
                break;

               case 'Jacqueline Durgapersad':
                oOwnerEmail.setValue("Jacqueline.Durgapersad@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("021 940 2152");
                break;

                case 'Craig Petersen':
                oOwnerEmail.setValue("Craig.Petersen@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("021 940 2152");
                break;

                case 'Racqual Faro':
                oOwnerEmail.setValue("Racqual.Faro@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("022 703 3537");
                break;

                case 'Karen Pillay':
                oOwnerEmail.setValue("Karen.Pillay@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3602");
                break;

                case 'Lucinda van Heerden':
                oOwnerEmail.setValue("Lucinda.vanHeerden@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3606");
                break;


                case 'Xoliswa Mashaba':
                oOwnerEmail.setValue("Xoliswa.Mashaba@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3607");
                break;

                case 'Riva Naicker':
                oOwnerEmail.setValue("Riva.Naicker@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("031 361 5887");
                break;

                case 'Loshni Naidoo':
                oOwnerEmail.setValue("Loshni.Naidoo@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("035 906 7725");
                break;

                case 'Desire Kruger':
                oOwnerEmail.setValue("Desire.Kruger@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("035 906 7725");
                break;

                case 'Kevan Pillay':
                oOwnerEmail.setValue("Kevan.Pillay@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("035 906 7725");
                break;

                case 'Sharendra Chedie':
                oOwnerEmail.setValue("Sharendra.Chedie@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("036 271 2120");
                break;

                case 'Joanne van der Merwe':
                oOwnerEmail.setValue("Joanne.vanderMerwe@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("041 507 2622");
                break;

                case 'Tracy Uys':
                oOwnerEmail.setValue("Tracy.Uys@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("053 841 0846");
                break;

                 case 'Vee Van der Merwe':
                oOwnerEmail.setValue("Vee.VanderMerwe@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("021 431 7705");
                break;

                case 'Marie van Der Berg':
                oOwnerEmail.setValue("Marie.vanDerBerg@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("051 408 2014");
                break;

                case 'meggan fensham':
                oOwnerEmail.setValue("meggan.fensham@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3143");
                break;

                case 'Frances Kruger':
                oOwnerEmail.setValue("Frances.Kruger@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("031 361 5887");
                break;

                case 'Lee-Ann Ripley-Evans':
                oOwnerEmail.setValue("Lee-Ann.Ripley-Evans@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("031 361 5887");
                break;

                case 'Peter Manyako':
                oOwnerEmail.setValue("Peter.Manyako@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3214");
                break;

                case 'Xanthi Johaar':
                oOwnerEmail.setValue("Peter.Manyako@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3214");
                break;


               }
    }
      function hideOldValues() {
      // labels to remove
      var oldValues =['Anish Daya', 'Bianca Shaw'];
      for(var i = 0; i<oldValues.length; i++) {
         var value = null;
         var attribute = Xrm.Page.getAttribute(isp_owner);
         if (attribute != null && attribute.getAttributeType() == "optionset") {
             var options = attribute.getOptions();
             for (var i in options) {
                 if (options[i].text == label)  {
                     value = options[i].value * 1;
                     Xrm.Page.getControl(isp_owner).removeOption(value);
                  }
             }
         }
      }
      }

    if (oSecOwner.getValue() != null) {
        switch (oSecOwner.getSelectedOption().text) {
            case 'Colleen Prinsloo':
                oSecOwnerEmail.setValue("colleen.prinsloo@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011-407 3111");
                break;

             case 'Leonardo Hefer':
                oSecOwnerEmail.setValue("Leonardo.Hefer@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011-407 3115");
                break;

		case 'Ashleigh Khoury':
                oSecOwnerEmail.setValue("Ashleigh.Khoury@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011-407 3290");
                break;

            case 'Deborah Medlicott':
                oSecOwnerEmail.setValue("deborah.medlicott@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011-407 3009");
                break;

            case 'Sheena Parsons':
                oSecOwnerEmail.setValue("Sheena.Parsons@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("0860 11 1177");
                break;

            case 'Reena Ganda':
                oSecOwnerEmail.setValue("reena.ganda@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011-407 3046");
                break;

            case 'Naomi Van Schalkwyk':
                oSecOwnerEmail.setValue("naomi.vanschalkwyk@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011-407 3044");
                break;

            case 'Marise Petersen':
                oSecOwnerEmail.setValue("Marise.Petersen@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011 407 3055");
                break;

            case 'Sherilee Phillips':
                oSecOwnerEmail.setValue("Sherilee.Phillips@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011 407 3106");
                break;

             case 'Kim de Meillon':
                oSecOwnerEmail.setValue("morne.vandermerwe@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011 407 3016");
                break;

                case 'Shamilla August':
                oSecOwnerEmail.setValue("Shamilla.August@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011 407 3034");
                break;

                 case 'Firdoze Mahomed':
                oSecOwnerEmail.setValue("Firdoze.Mahomed@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011 407 3102");
                break;

                case 'Jacqui Gibb':
                oSecOwnerEmail.setValue("Jacqui.Gibb@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011 407 3320");
                break;

                 case 'Juliet Mabote ':
                oOwnerEmail.setValue("Juliet.Mabote@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3079");
                break;

                case 'Maria Ramashia':
                oOwnerEmail.setValue("Maria.Ramashia@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3252");
                break;

                case 'Jaco De Beer ':
                oOwnerEmail.setValue("Jaco.Debeer@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3131");
                break;

                  case 'Tina Heine':
                oSecOwnerEmail.setValue("Tina.Heine@bidvestcapital.co.za");
                oSecOwnerDirectPhone.setValue("011 407 3617");
                break;

                case 'Peter Llewellyn':
                oSecOwnerEmail.setValue("Peter.Llewellyn@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("021 940 2152");
                break;

                case 'Mark Mortimer':
                oSecOwnerEmail.setValue("Mark.Mortimer@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011 407 3618");
                break;

                case 'Dries Fourie':
                oSecOwnerEmail.setValue("Dries.Fourie@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("031 361 5887");
                break;

                case 'Gavin Beckmann':
                oSecOwnerEmail.setValue("Gavin.Beckmann@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("051 408 3016");
                break;

			    case 'Susan Kaunda':
                oSecOwnerEmail.setValue("Susan.Kaunda@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011 407 3058");
                break;

                case 'Thashnee Pillay':
                oSecOwnerEmail.setValue("Thashnee.Pillay@bidvestbank.co.za");
                oSecOwnerDirectPhone.setValue("011 407 3601");
                break;

				case 'Charmaine Singh':
				oOwnerEmail.setValue("Charmaine.Singh@bidvestbank.co.za");
				oOwnerDirectPhone.setValue("011-407 3435");
				break;

				case 'Ziad Moolla':
				oOwnerEmail.setValue("Ziad.Moolla@bidvestbank.co.za");
				oOwnerDirectPhone.setValue("011-407 3083");
				break;


        }
    }


    if (oDeptMan.getValue() != null) {
        switch (oDeptMan.getSelectedOption().text) {
            case 'Leonardo Hefer':
                oDeptManEmail.setValue("leonardo.hefer@bidvestbank.co.za");
                oDepManDirectPhone.setValue("011-407 3115");
                break;

            case 'Jill Murtagh':
                oDeptManEmail.setValue("Jill.Murtagh@bidvestbank.co.za");
                oDepManDirectPhone.setValue("011-407 3346");
                break;

			case 'Melanie Browne':
                oDeptManEmail.setValue("Melanie.Browne@bidvestbank.co.za");
                oDepManDirectPhone.setValue("011-407 3623");
                break;

			case 'Tracey Lindeque':
                oDeptManEmail.setValue("tracey.lindeque@bidvestbank.co.za");
                oDepManDirectPhone.setValue("011-407 3281");
                break;

            case 'Debra Eskelsen':
                oDeptManEmail.setValue("debra.eskelsen@bidvestbank.co.za");
                oDepManDirectPhone.setValue("011-407 3251");
                break;

            case 'Neil Capazorio':
                oDeptManEmail.setValue("Neil.Capazorio@bidvestbank.co.za");
                oDepManDirectPhone.setValue("0860 11 1177");
                break;

            case 'Angela Tricerri':
                oDeptManEmail.setValue("Angie.Tricerri@bidvestbank.co.za");
                oDepManDirectPhone.setValue("011 407 3341");
                break;

            case 'Terry-Sue Van Rensburg':
                oDeptManEmail.setValue("Terry-Sue.VanRensburg@bidvestbank.co.za");
                oDepManDirectPhone.setValue("011 407 3073");
                break;

             case 'Duncan Nkosi':
                oDeptManEmail.setValue("morne.vandermerwe@bidvestbank.co.za");
                oDepManDirectPhone.setValue("011 407 3258");
                break;

                case 'Jacqui Gibb':
                oDeptManEmail.setValue("Jacqui.Gibb@bidvestbank.co.za");
                oDepManDirectPhone.setValue("011 407 3320");
                break;


                 case 'Russell Fogg ':
                oOwnerEmail.setValue("Russell.Fogg@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3260");
                break;

               case 'Darren Pillay':
                oDeptManEmail.setValue("Darren.Pillay@bidvestcapital.co.za");
                oDepManDirectPhone.setValue("011 407 3650");
                break;


               case 'Byron Corcoran':
               oDeptManEmail.setValue("Byron.Corcoran@bidvestbank.co.za");
               oDepManDirectPhone.setValue("011 407 3649");
               break;

               case 'Mark Mortimer':
               oDeptManEmail.setValue("Darren.Pillay@bidvestcapital.co.za");
               oDepManDirectPhone.setValue("011 407 3618");
               break;

			    case 'Mandy Lala':
               oDeptManEmail.setValue("Mandy.Lala@bidvestbank.co.za");
               oDepManDirectPhone.setValue("011 407 3311");
               break;


        }

    }

    var oDepartment = Xrm.Page.getAttribute("isp_department");

    if (oDepartment.getValue() != null) {
        switch (oDepartment.getSelectedOption().text) {
            case 'I.T Procurement':

                //Create an array to set as the DataValue for the lookup control.
                var lookupData = new Array();
                //Create an Object add to the array.
                var lookupItem = new Object();
                //Set the id, typename, and name properties to the object.
                lookupItem.id = '{E4ED98C4-4DE8-DD11-BBDB-0018FE743ACC}';
                lookupItem.entityType = 'account';
                lookupItem.name = 'IT Queries';
                // Add the object to the array.
                lookupData[0] = lookupItem;
                // Set the value of the lookup field to the value of the array.
                Xrm.Page.getAttribute("customerid").setValue(lookupData);
                Xrm.Page.customerid.Disabled = 1;
                var strCustomerName = Xrm.Page.getAttribute("customerid").getValue()[0].name;
                Xrm.Page.getAttribute("title").setValue(strCustomerName + ' ' + Xrm.Page.getAttribute("isp_department").getSelectedOption().text + ' ' + Xrm.Page.getAttribute("isp_subdepartment").getSelectedOption().text);
                break;

                 case 'HR Department':

                //Create an array to set as the DataValue for the lookup control.
                var lookupData = new Array();
                //Create an Object add to the array.
                var lookupItem = new Object();
                //Set the id, typename, and name properties to the object.
                lookupItem.id = '{ADCF5452-1C8B-DE11-BDDD-0018FE743ACC}';
                lookupItem.entityType = 'account';
                lookupItem.name = 'HR Queries @ Bidvest Bank';
                // Add the object to the array.
                lookupData[0] = lookupItem;
                // Set the value of the lookup field to the value of the array.
                Xrm.Page.getAttribute("customerid").setValue(lookupData);
                Xrm.Page.customerid.Disabled = 1;
                var strCustomerName = Xrm.Page.getAttribute("customerid").getValue()[0].name;
                Xrm.Page.getAttribute("title").setValue(strCustomerName + ' ' + Xrm.Page.getAttribute("isp_department").getSelectedOption().text + ' ' + Xrm.Page.getAttribute("isp_subdepartment").getSelectedOption().text);
                //break;

                //Create an array to set as the DataValue for the lookup control.
                var lookupData = new Array();
                //Create an Object add to the array.
                var lookupItem = new Object();
                //Set the id, typename, and name properties to the object.
                lookupItem.id = '{D3BE3320-7494-DD11-8F30-0018FE743ACC}';
                lookupItem.entityType = 'subject';
                lookupItem.name = 'Customer Feedback';
                // Add the object to the array.
                lookupData[0] = lookupItem;
                // Set the value of the lookup field to the value of the array.
                Xrm.Page.getAttribute("subjectid").setValue(lookupData);
                Xrm.Page.subjectid.Disabled = 1;
                var strSubject = Xrm.Page.getAttribute("subjectid").getValue()[0].name;
                //Xrm.Page.getAttribute("title").setValue(strCustomerName + ' ' + Xrm.Page.getAttribute("isp_department").getSelectedOption().text + ' ' + Xrm.Page.getAttribute("isp_subdepartment").getSelectedOption().text);
                break;




        }
    }

    if (Xrm.Page.ui.getFormType() == 2) {

        var strEscalationStatus = Xrm.Page.getAttribute("isp_escalationstatus");
        if (strEscalationStatus.getValue() != null) {
            switch (strEscalationStatus.getSelectedOption().text) {
                case 'Stage1':
                    Xrm.Page.isp_acceptedowner.Disabled = 1;
                    Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode("always");
                    Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode("always");

                    break;

                case 'Stage2':
                    Xrm.Page.isp_acceptedsecowner.Disabled = 1;
                    Xrm.Page.isp_acceptedowner.Disabled = 1;
                    Xrm.Page.getAttribute("isp_acceptedsecowner").setSubmitMode("always");
                    Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode("always");
                    Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode("always");

                    break;

                case 'Stage3':
                    Xrm.Page.isp_acceptedmanager.Disabled = 1;
                    Xrm.Page.isp_acceptedsecowner.Disabled = 1;
                    Xrm.Page.isp_acceptedowner.Disabled = 1;
                    Xrm.Page.getAttribute("isp_acceptedmanager").setSubmitMode("always");
                    Xrm.Page.getAttribute("isp_acceptedsecowner").setSubmitMode("always");
                    Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode("always");
                    Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode("always");
                    break;
            }
        }


        //Set the Description field to value

        var strCustomerName = Xrm.Page.getAttribute("customerid").getValue()[0].name;

        Xrm.Page.getAttribute("title").setValue(strCustomerName + ' ' + Xrm.Page.getAttribute("isp_department").getSelectedOption().text + ' ' + Xrm.Page.getAttribute("isp_subdepartment").getSelectedOption().text);

    }
}



var oReAssigned = Xrm.Page.getAttribute("isp_reassign");
if (oReAssigned.getValue() != null) {
    switch (oReAssigned.getSelectedOption().text) {
        case 'Yes':


/* the function */
ExecuteWorkflow = function(entityId, workflowId)
{

var xml = "" +

"<?xml version=\"1.0\" encoding=\"utf-8\"?>" +

"<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">" +

Xrm.Page.context.getAuthenticationHeader() +

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
ExecuteWorkflow(Xrm.Page.data.entity.getId(), theWorkflowId);

 break;

    }
}
}
function isp_department_onchange()
{
debugger

Xrm.Page.getAttribute("isp_departmentval").setValue(Xrm.Page.getAttribute("isp_department").getSelectedOption().text);

// ************************************************************************
// ** Purpose:
// **
// ** Only show departments from Office
// **
// ************************************************************************
//set references to our fields
var oDepartmentValue = Xrm.Page.getAttribute("isp_department");
var oSubDept = Xrm.Page.getAttribute("isp_subdepartment");

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

var oSecOwner = Xrm.Page.getAttribute("isp_secondaryowner");
var oDeptMan = Xrm.Page.getAttribute("isp_departmentmanager");
// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if (oDepartmentValue.getValue() != null) {
    switch (oDepartmentValue.getSelectedOption().text) {
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
                    Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
                    Xrm.Page.isp_natureofproblem_c.className = "n";
                    Xrm.Page.isp_natureofproblem_c.innerHTML =
                   Xrm.Page.isp_natureofproblem_c.innerText;
                    document.all.isp_natureofproblem_c.style.visibility = "hidden";
                  document.all.isp_natureofproblem_d.style.visibility = "hidden";
            break;

	case 'FinSurv Department':
            filterPicklist(oArrayFinSurv);
             // This was added to hide the region field
            document.all.isp_region_c.style.visibility = "hidden";
            document.all.isp_region_d.style.visibility = "hidden";
//This section will make the Nature of Problem field not required and hidden
                    Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
                    Xrm.Page.isp_natureofproblem_c.className = "n";
                    Xrm.Page.isp_natureofproblem_c.innerHTML =
                   Xrm.Page.isp_natureofproblem_c.innerText;
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
            Xrm.Page.isp_queryby.setAttribute("req", 0);
            Xrm.Page.isp_queryby_c.className = "n";
            Xrm.Page.isp_queryby_c.innerHTML =
            Xrm.Page.isp_queryby_c.innerText;
            document.all.isp_queryby_c.style.visibility = "hidden";
            document.all.isp_queryby_d.style.visibility = "hidden";
            document.all.isp_descriptionofproblem_d.style.visibility = "";
            document.all.isp_descriptionofproblem_c.style.visibility = "";
             //This section will make the Nature of Problem field not required and hidden
            Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
            Xrm.Page.isp_natureofproblem_c.className = "n";
            Xrm.Page.isp_natureofproblem_c.innerHTML =
            Xrm.Page.isp_natureofproblem_c.innerText;
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

            oSecOwner.setValue(30);
            oDeptMan.setValue(8);


            break;

        case 'HR Department':
            filterPicklist(oArrayHR);
            document.all.isp_staffid_d.style.visibility = "";
            document.all.isp_staffid_c.style.visibility = "";
            Xrm.Page.getAttribute("casetypecode").setValue(200001);
            Xrm.Page.getAttribute("caseorigincode").setValue(2);
            //document.all.isp_requestedbyemail_d.style.visibility = "";
            //document.all.isp_requestedbyemail_c.style.visibility = "";
            //Xrm.Page.isp_requestedbyemail.Disabled = 1;
            document.all.isp_descriptionofproblem_d.style.visibility = "";
            document.all.isp_descriptionofproblem_c.style.visibility = "";
            //If the Department is I.T, the Customer field will become not required
           // Xrm.Page.customerid.Disabled = 1;
            //Xrm.Page.customerid.setAttribute("req", 0);
           // Xrm.Page.customerid_c.className = "n";
           // Xrm.Page.customerid_c.innerHTML =
          //  Xrm.Page.customerid_c.innerText;
          //  document.all.customerid_c.style.visibility = "hidden";
           // document.all.customerid_d.style.visibility = "hidden";
            //This section will make the Action Needed field not required and hidden
            Xrm.Page.isp_queryby.setAttribute("req", 0);
            Xrm.Page.isp_queryby_c.className = "n";
            Xrm.Page.isp_queryby_c.innerHTML =
            Xrm.Page.isp_queryby_c.innerText;
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
            //Xrm.Page.isp_allowclosedemail.setAttribute("req", 0);
            //Xrm.Page.isp_allowclosedemail_c.className = "n";
            //Xrm.Page.isp_allowclosedemail_c.innerHTML =
            //Xrm.Page.isp_allowclosedemail_c.innerText;
            //document.all.isp_allowclosedemail_c.style.visibility = "hidden";
            //document.all.isp_allowclosedemail_d.style.visibility = "hidden";
            //This section will make the Nature of Problem field not required and hidden
            Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
            Xrm.Page.isp_natureofproblem_c.className = "n";
            Xrm.Page.isp_natureofproblem_c.innerHTML =
            Xrm.Page.isp_natureofproblem_c.innerText;
            document.all.isp_natureofproblem_c.style.visibility = "hidden";
            document.all.isp_natureofproblem_d.style.visibility = "hidden";

            //This section will bring up the Description of the Case to be filled in by the person logging the request
            Xrm.Page.title.setAttribute("req", 0);
            Xrm.Page.title_c.className = "n";
            Xrm.Page.title_c.innerHTML =
            Xrm.Page.title_c.innerText;
            document.all.title_d.style.visibility = "hidden";
            document.all.title_c.style.visibility = "hidden";
            //alert("Since this is an I.T. helpdesk request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
            //var label = Xrm.Page.getAttribute("isp_staffid_c");
            //label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>";
            break;

        case 'I.T Procurement':
            filterPicklist(oArrayIT);
           // document.all.isp_staffid_d.style.visibility = "";
           // document.all.isp_staffid_c.style.visibility = "";
            Xrm.Page.getAttribute("casetypecode").setValue(200001);
            Xrm.Page.getAttribute("caseorigincode").setValue(2);
            document.all.isp_requestedbyemail_d.style.visibility = "";
            document.all.isp_requestedbyemail_c.style.visibility = "";
            Xrm.Page.isp_requestedbyemail.Disabled = 1;
            document.all.isp_descriptionofproblem_d.style.visibility = "";
            document.all.isp_descriptionofproblem_c.style.visibility = "";
            //If the Department is I.T, the Customer field will become not required
           // Xrm.Page.customerid.Disabled = 1;
            //Xrm.Page.customerid.setAttribute("req", 0);
            //Xrm.Page.customerid_c.className = "n";
            //Xrm.Page.customerid_c.innerHTML =
            //Xrm.Page.customerid_c.innerText;
            //document.all.customerid_c.style.visibility = "hidden";
            //document.all.customerid_d.style.visibility = "hidden";
            //This section will make the Action Needed field not required and hidden
            Xrm.Page.isp_queryby.setAttribute("req", 0);
            Xrm.Page.isp_queryby_c.className = "n";
            Xrm.Page.isp_queryby_c.innerHTML =
            Xrm.Page.isp_queryby_c.innerText;
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
            Xrm.Page.isp_allowclosedemail.setAttribute("req", 0);
            Xrm.Page.isp_allowclosedemail_c.className = "n";
            Xrm.Page.isp_allowclosedemail_c.innerHTML =
            Xrm.Page.isp_allowclosedemail_c.innerText;
            document.all.isp_allowclosedemail_c.style.visibility = "hidden";
            document.all.isp_allowclosedemail_d.style.visibility = "hidden";
            //This section will make the Nature of Problem field not required and hidden
            Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
            Xrm.Page.isp_natureofproblem_c.className = "n";
            Xrm.Page.isp_natureofproblem_c.innerHTML =
            Xrm.Page.isp_natureofproblem_c.innerText;
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
            Xrm.Page.title.setAttribute("req", 0);
            Xrm.Page.title_c.className = "n";
            Xrm.Page.title_c.innerHTML =
            Xrm.Page.title_c.innerText;
            document.all.title_d.style.visibility = "hidden";
            document.all.title_c.style.visibility = "hidden";
          //  alert("Since this is an I.T. helpdesk request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
            var label = Xrm.Page.getAttribute("isp_staffid_c");
            label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>";
            break;

case 'Fleet and Finance':
            filterPicklist(oArrayFleetandFinance);
            document.all.isp_staffid_d.style.visibility = "";
            document.all.isp_staffid_c.style.visibility = "";
            Xrm.Page.getAttribute("casetypecode").setValue(200001);
            Xrm.Page.getAttribute("caseorigincode").setValue(2);
            //document.all.isp_requestedbyemail_d.style.visibility = "";
            //document.all.isp_requestedbyemail_c.style.visibility = "";
            //Xrm.Page.isp_requestedbyemail.Disabled = 1;
            document.all.isp_descriptionofproblem_d.style.visibility = "";
            document.all.isp_descriptionofproblem_c.style.visibility = "";
            //If the Department is I.T, the Customer field will become not required
           // Xrm.Page.customerid.Disabled = 1;
            //Xrm.Page.customerid.setAttribute("req", 0);
           // Xrm.Page.customerid_c.className = "n";
           // Xrm.Page.customerid_c.innerHTML =
          //  Xrm.Page.customerid_c.innerText;
          //  document.all.customerid_c.style.visibility = "hidden";
           // document.all.customerid_d.style.visibility = "hidden";
            //This section will make the Action Needed field not required and hidden
            Xrm.Page.isp_queryby.setAttribute("req", 0);
            Xrm.Page.isp_queryby_c.className = "n";
            Xrm.Page.isp_queryby_c.innerHTML =
            Xrm.Page.isp_queryby_c.innerText;
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

            //This section will make the Dont Send Resolved email field not required and hidden
            //Xrm.Page.isp_allowclosedemail.setAttribute("req", 0);
            //Xrm.Page.isp_allowclosedemail_c.className = "n";
            //Xrm.Page.isp_allowclosedemail_c.innerHTML =
            //Xrm.Page.isp_allowclosedemail_c.innerText;
            //document.all.isp_allowclosedemail_c.style.visibility = "hidden";
            //document.all.isp_allowclosedemail_d.style.visibility = "hidden";
            //This section will make the Nature of Problem field not required and hidden
            Xrm.Page.isp_natureofproblem.setAttribute("req", 0);
            Xrm.Page.isp_natureofproblem_c.className = "n";
            Xrm.Page.isp_natureofproblem_c.innerHTML =
            Xrm.Page.isp_natureofproblem_c.innerText;
            document.all.isp_natureofproblem_c.style.visibility = "";
            document.all.isp_natureofproblem_d.style.visibility = "";
            //This section will bring up the Description of the Case to be filled in by the person logging the request
            Xrm.Page.title.setAttribute("req", 0);
            Xrm.Page.title_c.className = "n";
            Xrm.Page.title_c.innerHTML =
            Xrm.Page.title_c.innerText;
            document.all.title_d.style.visibility = "hidden";
            document.all.title_c.style.visibility = "hidden";
            //alert("Since this is an I.T. helpdesk request, you will need to select a Staff member who requested this.  Please click on the 'Requested by' field and make a selection")
            //var label = Xrm.Page.getAttribute("isp_staffid_c");
            //label.innerHTML = "<font color='#FF0000'>" + label.innerText + "</font>";
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
var oSubDepart = Xrm.Page.getAttribute("isp_subdepartment");
var oNatProblem = Xrm.Page.getAttribute("isp_natureofproblem");

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
	oArrayCashkows.push(0,54,86,61,87,32,88,60,89,50,60,58,90,6,91,64);
	oArrayAutoCashkows.push(0,54,86,61,87,32,88,60,89,50,60,58,90,6,91,64);


// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDepart.getValue() != null)
{
    switch(oSubDepart.getSelectedOption().text)
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
var oSubDepart = Xrm.Page.getAttribute("isp_subdepartment");
var oNatProblem = Xrm.Page.getAttribute("isp_natureofproblem");

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
	oArrayCashkows.push(0,54,86,61,87,32,88,60,89,50,60,58,90,6,91,64);
	oArrayAutoCashkows.push(0,54,86,61,87,32,88,60,89,50,60,58,90,6,91,64);


// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDepart.getValue() != null)
{
    switch(oSubDepart.getSelectedOption().text)
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
var oSubdepartment = Xrm.Page.getAttribute("isp_subdepartment");
var oOwner = Xrm.Page.getAttribute("isp_owner");
var oRegion = Xrm.Page.getAttribute("isp_region");
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
//var oCorporateCard = new Array();
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
oCorporate.push(0, 5, 4,9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60,65,10,102,100000000,105,106,108,109,129,130,132,133,135,136,137,138,140,141,142,144,152,153,154,146,155,156,157,158,159,160,161);
oRetail.push(0, 5, 4,9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60,65,10,102,100000000,105,106,108,109,129,130,132,133,135,136,137,138,140,141,142,144,152,153,154,155,156,158,159,160,161);
oRand.push(0, 1, 13, 14, 15, 41,60,10,129,132,133,135,137,138,140,102,100000000,141,152,153,154,146,155,156,157,158,159,160,161);
oFinSurv.push(0, 1, 13, 14, 15, 41,60,10,129,132,133,135,137,138,140,102,100000000,141,152,153,154,146);
oNostro.push(0,39,57,58,133,149,150,38,153);
oExcon.push(0,29,30,31,32,4, 60);
oTradeFin.push(0, 5, 4,9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60,10,102,100000000,105,106,108,109,129,130,132,133,135,136,137,138,140,141,142,144,152,153,155,156,157,158,159,160,161,143);
oTradeServ.push(0, 5, 4,9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60,10,102,100000000,105,106,108,109,129,130,132,133,135,136,137,138,140,141,142,144,152,153,155,156,157,158,159,160,161,143);
oInterBank.push(0, 5, 4,9, 7, 41, 20, 21, 22, 23, 14, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 60,10,102,100000000,105,106,108,109,129,130,132,133,135,136,137,138,140,141,142,144,152,153,155,156,157,158,159,160,161);
//oCorporateCard.push(0, 16, 17, 18);
oAutomatedFinance.push(0, 44);
oPrivateBanking.push(0, 139,146,147,148,103,155,156,157,158,159,160,161);
oOpStats.push(0, 44);
oCreditors.push(0, 44);
//This will create Lists for I.T.
//oDesktopSupport.push(0, 25, 26, 37, 39);
//oApplications.push(0, 27, 28, 29, 30, 33, 34, 35, 36, 37);
//oTechnicalAdmin.push(0, 27, 40);
//oDevelopment.push(0, 1, 32, 33, 34, 35, 30);
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
if (oSubdepartment.getValue() != null) {
    switch (oSubdepartment.getSelectedOption().text) {
        case 'Corporate':
            filterPicklist(oCorporate);
            oOwner.setValue(9);
            oOwner.Disabled = 0;
            break;

        case 'Retail':
            filterPicklist(oRetail);
            oOwner.setValue(65);
            oOwner.Disabled = 0;
            break;

            case 'Nostro':
            filterPicklist(oNostro);
            oOwner.setValue(150);
            oOwner.Disabled = 0;
            break;

            case 'Excon':
            filterPicklist(oExcon);
            oOwner.setValue(63);
            oOwner.Disabled = 0;
            break;

        case 'Rand':
            filterPicklist(oRand);
            oOwner.setValue(152);
            oOwner.Disabled = 0;
            break;

			    case 'Trade Finance':
            filterPicklist(oTradeFin);
            oOwner.setValue(143);
            oOwner.Disabled = 0;
            break;

			case 'Trade Services':
            filterPicklist(oTradeServ);
            oOwner.setValue( 143);
            oOwner.Disabled = 0;
            break;

			case 'Inter Bank Settlements':
            filterPicklist(oInterBank);
            oOwner.setValue(9);
            oOwner.Disabled = 0;
            break;

			case 'Automated: CashKows Queries':
            filterPicklist(oPrivateBanking);
            oOwner.setValue(139);
            oOwner.Disabled = 0;
            break;

			case 'CashKows Queries':
            filterPicklist(oPrivateBanking);
            oOwner.setValue(139);
            oOwner.Disabled = 0;
            break;

			case 'FinSurv':
            filterPicklist(oFinSurv);
            oOwner.setValue(146);
            oOwner.Disabled = 0;
            break;



        case 'Automated: Finance Queue':
            oOwner.setValue(44);
            oOwner.Disabled = 1;
            break;

        case 'Op Stats':
            oOwner.setValue(44);
            oOwner.Disabled = 1;
            break;

        case 'Creditors':
            oOwner.setValue(44);
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
            oOwner.setValue(152);
            oOwner.Disabled = 0;
            break;

 case 'Payments':
            filterPicklist(oPayments);
            oOwner.setValue(152);
            oOwner.Disabled = 0;
            break;

 case 'Notice':
            filterPicklist(oNotice);
            oOwner.setValue(152);
            oOwner.Disabled = 0;
            break;

 case 'Confirmations':
            filterPicklist(oConfirmations);
            oOwner.setValue(152);
            oOwner.Disabled = 0;
            break;

 case 'Withdrawal Request':
            filterPicklist(oWithdrawalRequest);
            oOwner.setValue(152);
            oOwner.Disabled = 0;
            break;

 case 'Investments':
            filterPicklist(oInvestments);
            oOwner.setValue(152);
            oOwner.Disabled = 0;
            break;



// List for Fleet and Finance


        case 'Johannesburg':
            oOwner.setValue(71);
            oOwner.Disabled = 1;
            break;

        case 'Bloemfontein':
           oOwner.setValue(71);
            oOwner.Disabled = 1;
            break;

         case 'Cape Town':
            oOwner.setValue(71);
            oOwner.Disabled = 1;
            break;

        case 'Durban':
          oOwner.setValue(71);
            oOwner.Disabled = 1;
                   break;





            // List for HR

         case 'Pension / Provident Fund':
            oOwner.setValue(42);
            oOwner.Disabled = 1;
            break;

            case 'Uniforms':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

            case 'Leave':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

            case 'Maternity':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

            case 'Leave':
            oOwner.setValue(42);
            oOwner.Disabled = 1;
            break;

            case 'General HR':
            oOwner.setValue(42);
            oOwner.Disabled = 1;
            break;

            case 'Pre-Benefit Testing':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

            case 'Intranet':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

            case 'Workmanâ€™s Compensation':
            oOwner.setValue(42);
            oOwner.Disabled = 1;
            break;

            case 'Staff Files':
            oOwner.setValue(42);
            oOwner.Disabled = 1;
            break;

            case 'Workplace Forum':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

            case 'Policies':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

            case 'ICAS':
            oOwner.setValue(42);
            oOwner.Disabled = 1;
            break;

            case 'Medical Aid':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

             case 'Careers at Bidvest / Vacancies':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

             case 'BEE':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

             case 'Disciplinaries':
            oOwner.setValue(42);
            oOwner.Disabled = 1;
            break;

             case 'Bursaries':
            oOwner.setValue(42);
            oOwner.Disabled = 1;
            break;

             case 'KPAâ€™s / Performance Management':
            oOwner.setValue(43);
            oOwner.Disabled = 1;
            break;

             case 'Salaries â€“ Infoslips ONLY':
            oOwner.setValue(43);
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

var oSecOwner = Xrm.Page.getAttribute("isp_secondaryowner");
var oDeptMan = Xrm.Page.getAttribute("isp_departmentmanager");

if (oSubdepartment.getValue() != null) {
    switch (oSubdepartment.getSelectedOption().text) {
        case 'Corporate':
            oSecOwner.setValue(33);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(2);
            oDeptMan.Disabled = 0;
            break;

        case 'Retail':
            oSecOwner.setValue(33);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(2);
            oDeptMan.Disabled = 0;
            break;

        case 'Rand':
            oSecOwner.setValue(4);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(17);
            oDeptMan.Disabled = 0;
            break;

              case 'Excon':
            oSecOwner.setValue(16);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(2);
            oDeptMan.Disabled = 1;
            break;

              case 'Nostro':
            oSecOwner.setValue(38);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(21);
            oDeptMan.Disabled = 0;
            break;

			  case  'Trade Finance':
            oSecOwner.setValue(42);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(2);
            oDeptMan.Disabled = 0;
            break;

			  case 'Trade Services':
            oSecOwner.setValue(42);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(2);
            oDeptMan.Disabled = 0;
            break;

			  case 'Inter Bank Settlements':
            oSecOwner.setValue(3);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(2);
            oDeptMan.Disabled = 0;
            break;

			 case 'Automated: CashKows Queries':
            oSecOwner.setValue(37);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(19);
            oDeptMan.Disabled = 0;
            break;

			case 'FinSurv':
            oSecOwner.setValue(41);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(22);
            oDeptMan.Disabled = 0;
            break;

        case 'Automated: Finance Queue':
            oSecOwner.setValue(10);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(1);
            oDeptMan.Disabled = 1;
            break;

        case 'Op Stats':
            oSecOwner.setValue(10);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(1);
            oDeptMan.Disabled = 1;
            break;

        case 'Creditors':
            oSecOwner.setValue(10);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(1);
            oDeptMan.Disabled = 1;
            break;

        case 'Desktop Support':
            oSecOwner.setValue(7);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(5);
            oDeptMan.Disabled = 1;
            break;

        case 'Applications':
            oSecOwner.setValue(7);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(5);
            oDeptMan.Disabled = 1;
            break;

        case 'Technical Admin':
            oSecOwner.setValue(7);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(5);
            oDeptMan.Disabled = 1;
            break;

        case 'Development':
            oSecOwner.setValue(7);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(5);
            oDeptMan.Disabled = 1;
            break;

        case 'Procurement':
            oSecOwner.setValue(23);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(13);
            oDeptMan.Disabled = 1;
            break;

            case 'Johannesburg':
            oSecOwner.setValue(26);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(14);
            oDeptMan.Disabled = 1;
            break;

           case 'Bloemfontein':
            oSecOwner.setValue(28);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(14);
            oDeptMan.Disabled = 1;
            break;

            case 'Cape Town':
            oSecOwner.setValue(25);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(14);
            oDeptMan.Disabled = 1;
            break;

            case 'Durban':
            oSecOwner.setValue(27);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(14);
            oDeptMan.Disabled = 1;
            break;

 case 'New Accounts':
            oSecOwner.setValue(4);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(17);
            oDeptMan.Disabled = 0;
            break;

case 'Payments':
             oSecOwner.setValue(4);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(17);
            oDeptMan.Disabled = 0;
            break;

case 'Notice':
             oSecOwner.setValue(4);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(17);
            oDeptMan.Disabled = 0;
            break;

case 'Confirmations':
             oSecOwner.setValue(4);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(17);
            oDeptMan.Disabled = 0;
            break;

case 'Withdrawal Request':
            oSecOwner.setValue(4);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(17);
            oDeptMan.Disabled = 0;
            break;

case 'Investments':
            oSecOwner.setValue(4);
            oSecOwner.Disabled = 0;
            oDeptMan.setValue(17);
            oDeptMan.Disabled = 0;
            break;




             // List for HR

         case 'Pension / Provident Fund':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Uniforms':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Leave':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Maternity':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Leave':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'General HR':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Pre-Benefit Testing':
           oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Intranet':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Workmanâ€™s Compensation':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Staff Files':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Workplace Forum':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Policies':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'ICAS':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

            case 'Medical Aid':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

             case 'Careers at Bidvest / Vacancies':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

             case 'BEE':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

             case 'Disciplinaries':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

             case 'Bursaries':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

             case 'KPAâ€™s / Performance Management':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
            oDeptMan.Disabled = 1;
            break;

             case 'Salaries â€“ Infoslips ONLY':
            oSecOwner.setValue(8);
            oSecOwner.Disabled = 1;
            oDeptMan.setValue(6);
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
    Xrm.Page.context.getAuthenticationHeader() +
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
    if (returntype != 'multiple') lookupItem.entityType = returntype;
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
var oDepartment = Xrm.Page.getAttribute("isp_queryby");
var oProblem = Xrm.Page.getAttribute("isp_natureofproblem");

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

// text values correspond to the picklist values in the 'food' field
// I keep this updated if I can as it is useful when reviewing the code!
//1 Cabbage
//2 Pasta
//3 Bread
//4 Parma Ham
//5 Apple
//6 Mushy Peas
//7 Chewing Gum
//8 Chocolate
//9 Zucchini
//10 Plum tomatoes
//11 Ciabbata
//12 Salami

// *** This is the bit you would edit to add/remove options to your lists *** //
    oArrayBankingQuery.push(0,18,6,1,5,4,7,2,3,20,32);
    oArrayCustomerQuery.push(0,19,14,15,12,13,11,17,16,9,8,10,20,32,22,23,24,25,26,27,28,29,30,31);
// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oDepartment.getValue() != null)
{
    switch(oDepartment.getSelectedOption().text)
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

var cid = document.getElementById("isp_staffid").getValue()[0].id;
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
Xrm.Page.isp_requestedbyemail.value = eml;
}
function isp_dateresolved_onchange()
{
debugger

var one_day=1000*60*60

var StartDate = Xrm.Page.getAttribute("createdon").getValue();
var EndDate = Xrm.Page.getAttribute("isp_dateresolved").getValue();

oAlert = Math.ceil((EndDate.getTime()-StartDate.getTime())/(one_day));

Xrm.Page.getAttribute("isp_totaltime").setValue(oAlert);

Xrm.Page.getAttribute("isp_totaldays").getValue() = Xrm.Page.getAttribute("isp_totaltime").getValue() / 24
}
function isp_totaltime_onchange()
{
Xrm.Page.getAttribute("isp_totaltime").setSubmitMode("always");
Xrm.Page.data.entity.save();
}
function isp_totaldays_onchange()
{
Xrm.Page.getAttribute("isp_totaldays").setSubmitMode("always");
Xrm.Page.data.entity.save();
}
function isp_owner_onchange()
{
// JScript source code
//This section will update the Owner Email Field when a value gets updated in this field.  this event
//is fired with the OnChange event of the isp_owner field in the Escalation Trail.

var oOwner = Xrm.Page.getAttribute("isp_owner");
var oOwnerEmail = Xrm.Page.getAttribute("isp_owneremail");
var oOwnerDirectPhone = Xrm.Page.getAttribute("isp_ownerdirectphone");

if (oOwner.getValue() != null) {
    switch (oOwner.getSelectedOption().text) {
        case 'Colleen Prinsloo':
            oOwnerEmail.setValue("colleen.prinsloo@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3111");
            break;

        case 'Cynthia Armstrong':
            oOwnerEmail.setValue("Cynthia.Armstrong@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

        case 'Busisiwe Nana':
            oOwnerEmail.setValue("Busisiwe.Nana@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3335");
            break;

        case 'Judy Bergstedt':
            oOwnerEmail.setValue("Judy.Bergstedt@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3077");
            break;

        case 'Tshidi Masite':
            oOwnerEmail.setValue("Tshidi.Masite@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3089");
            break;

        case 'Nizel Corrigan':
            oOwnerEmail.setValue("Nizel.Corrigan@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3185");
            break;

        case 'Reena Ganda':
            oOwnerEmail.setValue("Reena.Moodley@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3046");
            break;

        case 'Petro Welgemoed':
            oOwnerEmail.setValue("Petro.Welgemoed@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3206");
            break;


        case 'Naomi Van Schalkwyk':
            oOwnerEmail.setValue("Naomi.VanSchalkwyk@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3044");
            break;


        case 'Emily Mmusi':
            oOwnerEmail.setValue("Emily.Mmusi@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;


        case 'Nancy Mamphiswana':
            oOwnerEmail.setValue("Nancy.Mamphiswana@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;


        case 'Thoko Rabotapi':
            oOwnerEmail.setValue("Thoko.Rabotapi@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;


        case 'Debra Eskelsen':
            oOwnerEmail.setValue("Debra.Eskelsen@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;


        case 'Tracey Lindeque':
            oOwnerEmail.setValue("Tracey.Lindeque@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;


        case 'Shamilla August':
            oOwnerEmail.setValue("Shamilla.August@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;


        case 'Johan Van Tonder':
            oOwnerEmail.setValue("Johan.VanTonder@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;


        case 'Leon Engelbrecht':
            oOwnerEmail.setValue("Leon.Engelbrecht@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;


        case 'Mervin Pauls':
            oOwnerEmail.setValue("Mervin.Pauls@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Petro Welgemoed':
            oOwnerEmail.setValue("Petro.Welgemoed@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Neo Sebiyane':
            oOwnerEmail.setValue("Neo.Sebiyane@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Taznique Petersen':
            oOwnerEmail.setValue("Taznique.Petersen@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Bradley Schooner':
            oOwnerEmail.setValue("Bradley.Schooner@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Daniel Lusse':
            oOwnerEmail.setValue("Daniel.Lusse@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Given Ramahala':
            oOwnerEmail.setValue("Given.Ramahala@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Byron Bowers':
            oOwnerEmail.setValue("Byron.Bowers@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Cheryl Simons':
            oOwnerEmail.setValue("Cheryl.Simons@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Lindsey McAslin':
            oOwnerEmail.setValue("Lindsey.McAslin@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Clarissa Coetzee':
            oOwnerEmail.setValue("Clarissa.Coetzee@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3250");
            break;

			case 'Michael Muller':
            oOwnerEmail.setValue("michael.muller@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3182");
            break;

            case 'Cole Smith':
            oOwnerEmail.setValue("Cole.Smith@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3334");
            break;

			case 'Marnus Smith':
            oOwnerEmail.setValue("Marnus.Smith@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3224");
            break;

			case 'Charl Hanekom':
            oOwnerEmail.setValue("Charl.Hanekom@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

			case 'Damon Campbell':
            oOwnerEmail.setValue("Damon.Campbell@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3224");
            break;

			case 'Muneer Saptoe':
            oOwnerEmail.setValue("Muneer.Saptoe@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011 407 3345");
            break;

			case 'Stephanie Douwie':
            oOwnerEmail.setValue("Stephanie.Douwie@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011 407 3308");
            break;



			case 'Verosha Rupnarain':
            oOwnerEmail.setValue("verosha.rupnarain@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011 407 3069");
            break;

             case 'Nadine Moodley':
             oOwnerEmail.setValue("Nadine.Moodley@bidvestbank.co.za");
             oOwnerDirectPhone.setValue("011 407 3000");
             break;

             case 'Beulyne Adams':
            oOwnerEmail.setValue("Beulyne.Adams@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Yanga Mafuta':
            oOwnerEmail.setValue("Yanga.Mafuta@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Leonardo Hefer':
            oOwnerEmail.setValue("Leonardo.Hefer@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Jan Lombard':
            oOwnerEmail.setValue("Jan.Lombard@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Jill Murtagh':
            oOwnerEmail.setValue("Jill.Murtagh@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Victoria Manuel':
            oOwnerEmail.setValue("Victoria.Manuel@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Tshidi Masite':
            oOwnerEmail.setValue("Tshidi.Masite@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Mandy Lala':
            oOwnerEmail.setValue("Mandy.Lala@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Shoneez Ben':
            oOwnerEmail.setValue("Shoneez.Ben@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3311");
            break;

             case 'Yonela Mafuta':
            oOwnerEmail.setValue("Yonela.Mafuta@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Monita Odendaal':
            oOwnerEmail.setValue("Monita.Odendaal@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

             case 'Iris Busby':
            oOwnerEmail.setValue("iris.Busby@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3081");
            break;

             case 'Charmaine Singh':
            oOwnerEmail.setValue("Charmaine.Singh@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3435");
            break;

			 case 'Ziad Moolla':
            oOwnerEmail.setValue("Ziad.Moolla@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3083");
            break;

			case 'Innocentia Rampa':
            oOwnerEmail.setValue("innocentia.rampa@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3333");
            break;

			case 'Tyler Ormandy':
            oOwnerEmail.setValue("Tyler.Ormandy@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3335");
            break;

			case 'Amy Pillay':
            oOwnerEmail.setValue("Amy.Pillay@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011 407 3221");
            break;

			case 'Motshidisi Shibambo':
                 oOwnerEmail.setValue("Motshidisi.Shibambo@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3571");
                break;

			case 'Ayanda Makhado':
                oOwnerEmail.setValue("ayanda.makhado@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 7309");
                break;

			case 'Micael Van Heerden':
                oOwnerEmail.setValue("Micael.VanHeerden@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3563");
                break;


            case 'Nonhlanhla Nyauza':
            oOwnerEmail.setValue("Nonhlanhla.Nyauza@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011-407 3000");
            break;

        case 'Nadeema Vania':
            oOwnerEmail.setValue("Nadeema.Vania@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("0860 11 1177");
            break;

        case 'Carl Gordon':
            oOwnerEmail.setValue("Carl.Gordon@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("0860 11 1177");
            break;


        case 'Cassie Esterhuizen':
            oOwnerEmail.setValue("Cassie.Esterhuizen@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("0860 11 1177");
            break;

        case 'Kogie Moodley':
            oOwnerEmail.setValue("Kogie.Moodley@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("0860 11 1177");
            break;

        case 'Harold Van Eeden':
            oOwnerEmail.setValue("Harold.VanEeden@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("0860 11 1177");
            break;

        case 'Louise Gouws':
            oOwnerEmail.setValue("Louise.Gouws@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("0860 11 1177");
            break;

        case 'Raeesa Khan':
            oOwnerEmail.setValue("Raeesa.Khan@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("0860 11 1177");
            break;

        case 'Morne van der Merwe':
            oOwnerEmail.setValue("Morne.vandermerwe@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011 407 3243");
            break;

        case 'Juliet Mabote':
            oOwnerEmail.setValue("Juliet.Mabote@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011 407 3079");
            break;

        case 'Maria Ramashia':
            oOwnerEmail.setValue("Maria.Ramashia@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011 407 3252");
                break;



        case 'Firdoze Mahomed':
            oOwnerEmail.setValue("Firdoze.Mahomed@bidvestbank.co.za");
            oOwnerDirectPhone.setValue("011 407 3102");
            break;

        case 'Eleanor Pillay':
                oOwnerEmail.setValue("Eleanor.Pillay@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

              case 'Meeshana Mangru':
                oOwnerEmail.setValue("Meeshana.Mangru@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Thabiso Siswana':
                oOwnerEmail.setValue("Thabiso.Siswana@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Tebogo Tau':
                oOwnerEmail.setValue("Tebogo.Tau@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Princess Seripa':
                oOwnerEmail.setValue("Princess.Seripa@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Precious Seobi':
                oOwnerEmail.setValue("Precious.Seobi@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Jabulile Shongwe':
                oOwnerEmail.setValue("Jabulile.Shongwe@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Mathilene Henn':
                oOwnerEmail.setValue("Mathilene.Henn@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Lungu Mchunu':
                oOwnerEmail.setValue("Lungu.Mchunu@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Khensani Matjebe':
                oOwnerEmail.setValue("Khensani.Matjebe@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3000");
                break;

                case 'Jacqui Gibb':
                oOwnerEmail.setValue("Jacqui.Gibb@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3320");
                break;

                case 'Shamilla August':
                oOwnerEmail.setValue("Shamilla.August@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3034");
                break;

                case 'Werner Goosen':
                oOwnerEmail.setValue("Werner.Goosen@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3031");
                break;

                case 'Wendy Armstrong':
                oOwnerEmail.setValue("Wendy.Armstrong@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3185");
                break;

                case 'Sherazaan Mia':
                oOwnerEmail.setValue("Sherazaan.Mia@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3081");
                break;

               case 'Cameron May':
               oOwnerEmail.setValue("Cameron.May@bidvestbank.co.za");
                oOwnerDirectPhone.setValue("011 407 3571");
                break;




    }
}
}
function isp_acceptedowner_onchange()
{
debugger

if (Xrm.Page.getAttribute("isp_acceptedowner").getValue() == true) {
    Xrm.Page.isp_acceptedowner.Disabled = 1;
    Xrm.Page.isp_escalationstatus.value = 1;
    Xrm.Page.getAttribute("isp_acceptedowner").setSubmitMode("always");
   Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode("always");
}
else {
    Xrm.Page.isp_acceptedowner.Disabled = 0;
}
}
function isp_secondaryowner_onchange()
{
if (Xrm.Page.getAttribute("isp_secondaryowner").getSelectedOption().text == "Colleen Prinsloo")
{
  Xrm.Page.getAttribute("isp_secowneremail").setValue("anotheremail@gmail.com");
}
else
{
  Xrm.Page.isp_secowneremail.Disabled = 0;
}
}
function isp_acceptedsecowner_onchange()
{
debugger

if (Xrm.Page.getAttribute("isp_acceptedsecowner").getValue() == true)
{
  Xrm.Page.isp_acceptedsecowner.Disabled = 1;
  Xrm.Page.isp_escalationstatus.value =2;
   Xrm.Page.getAttribute("isp_acceptedsecowner").setSubmitMode("always");
    Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode("always");
}
else
{
  Xrm.Page.isp_acceptedsecowner.Disabled = 0;
}
}
function isp_reassign_onchange()
{
debugger

var strReAssign = Xrm.Page.getAttribute("isp_reassign");

if (strReAssign.getValue() != null) {
    switch (strReAssign.getSelectedOption().text) {
        case 'Yes':
            Xrm.Page.getAttribute("isp_1stowner").setValue(Xrm.Page.getAttribute("isp_owner").getSelectedOption().text);
            Xrm.Page.getAttribute("isp_owner").getValue() = ""
            Xrm.Page.isp_owner.Disabled = 0;
            Xrm.Page.isp_reassign.Disabled = 1;
            Xrm.Page.getAttribute("statuscode").getValue() = 200003

            break;

    }
}
}
function isp_acceptedmanager_onchange()
{
debugger

if (Xrm.Page.getAttribute("isp_acceptedmanager").getValue() == true)
{
  Xrm.Page.isp_acceptedmanager.Disabled = 1;
  Xrm.Page.isp_escalationstatus.value =3;
 Xrm.Page.getAttribute("isp_acceptedmanager").setSubmitMode("always");
  Xrm.Page.getAttribute("isp_escalationstatus").setSubmitMode("always");
}
else
{
  Xrm.Page.isp_acceptedmanager.Disabled = 0;
}
}
function isp_productcatagory_onchange()
{
var iIndexNew = -1;
var iEndIndex= -1;

switch (productcatagory.getValue())
{
	case "1":
		iIndexNew = 1;
		break;

	case "2":
		iIndexNew = 0;
		break;
}

product.Options = productbackup.originalPicklistOptions
iEndIndex = Xrm.Page.getAttribute("isp_product").getOptions().length

if (iIndexNew > -1 && iEndIndex> -1)
{
	var oTempArray = new Array();
	var iIndex = 0;
                     var iTempValue = 0;

               	for (var i = 0; i <= iEndIndex-1; i++)
	{
                                 if(product.Options[i].getValue() == 0)
                                  {
		oTempArray[iIndex] = product.originalPicklistOptions[i];
		iIndex++;
                                  }

                                   else if(product.Options[i].getValue() % 2 == iIndexNew)
                                  {
		oTempArray[iIndex] = product.originalPicklistOptions[i];
		iIndex++;
                                  }
                     	}

	product.Options = oTempArray;
                     product.Disabled = false;
                     Xrm.Page.SetFieldReqLevel("isp_product",2);
}
else
{
	product.setValue(null);
	product.Disabled = true;
                     Xrm.Page.SetFieldReqLevel("isp_product",0);
}
}

function FrmOnSave(prmContext) {
    // Local variable to store value indicating how the save event was initiated by the user.
    var wod_SaveMode, wod_SaveEventVal;
	var Dresolved = Xrm.Page.getAttribute("isp_dateresolved").getValue();
	var Tdays = Xrm.Page.getAttribute("isp_totaldays").getValue();
	var BError = Xrm.Page.getAttribute("isp_bankerror").getValue();

    // Change the Save Event Value as per required Save Event
    wod_SaveEventVal = 5;

    if (prmContext != null && prmContext.getEventArgs() != null) {

        wod_SaveMode = prmContext.getEventArgs().getSaveMode();

        // 1 will pass on Recalculate button click
        if (wod_SaveMode == wod_SaveEventVal) {
            if (Dresolved == null) {

            alert("Please Complete Date Resolved");
			Xrm.Page.getControl("isp_dateresolved").setFocus(true);

			if (BError == '1'){
			Xrm.Page.getAttribute("isp_potentialloss").setRequiredLevel("required");
			Xrm.Page.getAttribute("isp_actualloss").setRequiredLevel("required");
			Xrm.Page.getAttribute("isp_numberofswiftmessagessent").setRequiredLevel("required");
			Xrm.Page.getAttribute("isp_numberofswiftmessagesreceived").setRequiredLevel("required");
			Xrm.Page.getAttribute("isp_potentiallossccy").setRequiredLevel("required");
			Xrm.Page.getAttribute("isp_actuallossccy").setRequiredLevel("required");
			Xrm.Page.getAttribute("isp_comments").setRequiredLevel("required");}

            // Use the code line below only if validation is failed then abort function save event
              prmContext.getEventArgs().preventDefault();
			  }

        }
    }
}


 function prioritycode_onchange() {

   var TODAY;
    TODAY = new Date();
	var Pcode = Xrm.Page.getAttribute("prioritycode").getValue();

    if (Pcode == '3') {
       TODAY.setDate(TODAY.getDate() + 3);
            Xrm.Page.getAttribute("followupby").setValue(TODAY);
		}
			else if (Pcode == '2') {
                TODAY.setDate(TODAY.getDate() + 2);
                       Xrm.Page.getAttribute("followupby").setValue(TODAY);
				}
 				   else {
                TODAY.setDate(TODAY.getDate() + 1);
                Xrm.Page.getAttribute("followupby").setValue(TODAY);
				}

		}

function statuscode_onchange() {
Xrm.Page.getAttribute("prioritycode").setValue(null);
// Xrm.Page.getAttribute("prioritycode").setRequiredLevel("required");
}

function owner_onchange() {
Xrm.Page.getAttribute("prioritycode").setValue(null);
}

function isp_reasign_onchange() {
Xrm.Page.getAttribute("prioritycode").setValue(null);
}

function isp_acceptedowner_onchange() {
Xrm.Page.getAttribute("prioritycode").setValue(null);
}

function isp_outstandingdocumentation_onchange() {
 if (Xrm.Page.getAttribute("isp_outstandingdocumentation").getValue() == '1') {
   Xrm.Page.ui.tabs.get("tab_4").setVisible(true);}
   else {
         Xrm.Page.ui.tabs.get("tab_4").setVisible(false);
       }
    }

function isp_bankerror_onchange() {
 if ((Xrm.Page.getAttribute("isp_bankerror").getValue() == '1') && (Xrm.Page.getAttribute("isp_subdepartment").getValue() == '33' || Xrm.Page.getAttribute("isp_subdepartment").getValue() == '70' || Xrm.Page.getAttribute("isp_subdepartment").getValue() == '4' || Xrm.Page.getAttribute("isp_subdepartment").getValue() == '6')) {
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
var oSubDept1 = Xrm.Page.getAttribute("isp_subdepartment");
var oStatCode = Xrm.Page.getAttribute("statuscode");

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
if(oSubDept1.getValue() != null)
{
    switch(oSubDept1.getSelectedOption().text)
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
var oSubDept1 = Xrm.Page.getAttribute("isp_subdepartment");
var oStatCode = Xrm.Page.getAttribute("statuscode");

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
if(oSubDept1.getValue() != null)
{
    switch(oSubDept1.getSelectedOption().text)
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
var oSubDepart = Xrm.Page.getAttribute("isp_subdepartment");
var oCustCat = Xrm.Page.getAttribute("isp_category");

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
if(oSubDepart.getValue() != null)
{
    switch(oSubDepart.getSelectedOption().text)
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
var oSubDepart = Xrm.Page.getAttribute("isp_subdepartment");
var oCustCat = Xrm.Page.getAttribute("isp_category");

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
if(oSubDepart.getValue() != null)
{
    switch(oSubDepart.getSelectedOption().text)
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
var oSubDepart2 = Xrm.Page.getAttribute("isp_subdepartment");
var oQCat = Xrm.Page.getAttribute("isp_querycategory");

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

	oArrayCashkows1.push(0,7,25,46,27,1,2,13,14,47);
	oArrayAutoCashkows1.push(0,7,25,46,27,1,2,13,14,47);


// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDepart2.getValue() != null)
{
    switch(oSubDepart2.getSelectedOption().text)
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
var oSubDepart2 = Xrm.Page.getAttribute("isp_subdepartment");
var oQCat = Xrm.Page.getAttribute("isp_querycategory");

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

	oArrayCashkows1.push(0,7,25,46,27,1,2,13,14,47);
	oArrayAutoCashkows1.push(0,7,25,46,27,1,2,13,14,47);


// *** No more editing *** //

// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category dropdown
if(oSubDepart2.getValue() != null)
{
    switch(oSubDepart2.getSelectedOption().text)
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
