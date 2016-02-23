//Account Form Script (Original)
//From Server
function IFRAME_BackOffice_onload() {
}
function IFRAME_Dataload_onload() {
}
function IFRAME_DMS_Documents_onload() {
}
var lccdate_changed = false;
function Form_onload() {
debugger
Xrm.Page.getAttribute("isp_accountguid").setValue(Xrm.Page.data.entity.getId());
lccdate_changed = false;
var strEvoD = Xrm.Page.getAttribute("isp_evocustomerid").getValue();
if (strEvoD == null) {
if (Xrm.Page.ui.tabs.get("World_Check") != null) {
   Xrm.Page.ui.tabs.get("World_Check").setVisible(false);
 }
}
var strCustType = Xrm.Page.getAttribute("isp_customertype").getValue();
var strEmatVal = Xrm.Page.getAttribute("isp_emat").getValue();
if ((strCustType == '4') && (strEmatVal != null))  {
   Xrm.Page.ui.tabs.get("World_Check").setVisible(true);
 }
 var DebtorId = Xrm.Page.getAttribute("isp_fadebtors").getValue();
     if (DebtorId == null || DebtorId == "" || DebtorId == " ") {
        document.all.IFRAME_FA_Facilities.src = 'about:blank';
        document.all.IFRAME_Leasing_Docs.src = 'about:blank';
    }
         else {
        document.all.IFRAME_FA_Facilities.src = 'http://jhbh-srv-msp01:8008/FleetToCRM/view_Facility.aspx?acc=' + DebtorId;
        document.all.IFRAME_Leasing_Docs.src = 'http://jhbh-srv-dms01/crmcounts/leasingcorporatedocuments.aspx?accountnr=' + DebtorId;
    };
    var CreditorId = Xrm.Page.getAttribute("isp_creditorid").getValue();
     if (CreditorId == null || CreditorId == "" || CreditorId == " ") {
        document.all.IFRAME_Suppliers.src = 'about:blank';
        }
    else {
        document.all.IFRAME_Suppliers.src = 'http://jhbh-srv-dms01/crmcounts/supplierDocuments.aspx?creditorid='  + CreditorId;
       Xrm.Page.getAttribute("isp_companyregistrationnumber").setRequiredLevel("required");
    };
if (Xrm.Page.getAttribute("isp_faaccount").getValue() == '1' ) {
    var controls = Xrm.Page.ui.controls.get();
      for (var i in controls){
       var control = controls[i];
         if (!control.getDisabled()){
           control.setDisabled(true);
            }
        }
    }
    var OpicsCustNo = Xrm.Page.getAttribute("isp_opicsaccountnumber").getValue();
    var accountId = Xrm.PageSubmit.Xrm.PageSubmitId.value;
    accountId = accountId.substring(1, accountId.length - 1);
    if (accountId == null || accountId == "" || accountId == " ") {
        document.all.IFRAME_DMS_Documents.src = 'about:blank';
    } else {
		document.all.IFRAME_DMS_Documents.src = 'http://jhbh-srv-dms01/crmcounts/CorpAdmin.aspx?AccountId=' + accountId +'&OpicsCustNo=' + OpicsCustNo + '&DebtorId='+DebtorId;
    };
if (accountId == null || accountId == "" || accountId == " ") {
        document.all.IFRAME_World_Check.src = 'about:blank';
    } else {
        document.all.IFRAME_World_Check.src = 'http://jhbh-uat-crm01:8008/CrmWorldCheck.html?AccountId=' + accountId;
    };
//set Fields hidden for EVO Intergation
if (Xrm.Page.getAttribute("isp_evocustomerid").getValue() != null) {
   Xrm.Page.getControl("isp_importer").setDisabled(true);
  Xrm.Page.getControl("isp_exporter").setDisabled(true);
  Xrm.Page.getControl("isp_importexportno").setDisabled(true);
  Xrm.Page.getControl("isp_vlistclient").setDisabled(true);
  Xrm.Page.getControl("isp_companyclassification").setDisabled(true);
  Xrm.Page.getControl("isp_typeoflegalentity").setDisabled(true);
  Xrm.Page.getControl("isp_accountname").setDisabled(true);
  Xrm.Page.getControl("isp_tradingname").setDisabled(true);
  Xrm.Page.getControl("isp_intergroup_dealers").setDisabled(true);
  Xrm.Page.getControl("isp_companyregistrationnumber").setDisabled(true);
  Xrm.Page.getControl("revenue").setDisabled(true);
  Xrm.Page.getControl("isp_registeredinsa").setDisabled(true);
  Xrm.Page.getControl("primarycontactid").setDisabled(true);
  Xrm.Page.getControl("isp_incometaxno").setDisabled(true);
  Xrm.Page.getControl("isp_vatregistrationnumber").setDisabled(true);
  Xrm.Page.getControl("telephone1").setDisabled(true);
  Xrm.Page.getControl("emailaddress1").setDisabled(true);
  Xrm.Page.getControl("fax").setDisabled(true);
  Xrm.Page.getControl("websiteurl").setDisabled(true)
  Xrm.Page.getControl("isp_industrialclassification").setDisabled(true);
  Xrm.Page.getControl("isp_finsurvinstitutionalsector").setDisabled(true);
   Xrm.Page.getControl("address1_line1").setDisabled(true);
  Xrm.Page.getControl("address1_line2").setDisabled(true);
  Xrm.Page.getControl("address1_line3").setDisabled(true);
  Xrm.Page.getControl("address1_city").setDisabled(true);
  Xrm.Page.getControl("address1_postalcode").setDisabled(true);
  Xrm.Page.getControl("isp_province").setDisabled(true);
  Xrm.Page.getControl("isp_country").setDisabled(true);
  Xrm.Page.getControl("address1_addresstypecode").setDisabled(true);
  Xrm.Page.getControl("address2_line1").setDisabled(true);
  Xrm.Page.getControl("address2_line2").setDisabled(true);
  Xrm.Page.getControl("address2_line3").setDisabled(true);
  Xrm.Page.getControl("address2_city").setDisabled(true);
  Xrm.Page.getControl("address2_postalcode").setDisabled(true);
  Xrm.Page.getControl("isp_province2").setDisabled(true);
  Xrm.Page.getControl("isp_country2").setDisabled(true);
    Xrm.Page.getControl("address2_addresstypecode").setDisabled(true);
  Xrm.Page.getControl("isp_otheraddressstreet").setDisabled(true);
  Xrm.Page.getControl("isp_otheraddressbuilding").setDisabled(true);
 Xrm.Page.getControl("isp_otheraddresssuburb").setDisabled(true);
 Xrm.Page.getControl("isp_otheraddresscity").setDisabled(true);
 Xrm.Page.getControl("isp_otheraddresspostalcode").setDisabled(true);
 Xrm.Page.getControl("isp_province3").setDisabled(true);
 Xrm.Page.getControl("isp_country3").setDisabled(true);
 Xrm.Page.getControl("isp_otheraddressaddresstype").setDisabled(true);
 Xrm.Page.getControl("isp_evocustomerid").setDisabled(true);
 Xrm.Page.getControl("isp_customertype").setDisabled(true);
 Xrm.Page.getControl("isp_merlincustomertype").setDisabled(true);
 Xrm.Page.getControl("isp_merlinprofilenumber").setDisabled(true);
 Xrm.Page.getControl("isp_branches").setDisabled(true);
 Xrm.Page.getControl("industrycode").setDisabled(true);
 Xrm.Page.getControl("isp_bankaccountname").setDisabled(true);
 Xrm.Page.getControl("isp_bankaccountnumber").setDisabled(true);
 Xrm.Page.getControl("isp_typeofaccount").setDisabled(true);
 Xrm.Page.getControl("isp_dateopened").setDisabled(true);
 Xrm.Page.getControl("isp_financialyearend").setDisabled(true);
 Xrm.Page.getControl("isp_bankingsdetailsverified").setDisabled(true);
 Xrm.Page.getControl("isp_bankname").setDisabled(true);
 Xrm.Page.getControl("isp_branchname").setDisabled(true);
 Xrm.Page.getControl("isp_bankbranchcode").setDisabled(true);
 Xrm.Page.getControl("isp_ceomd").setDisabled(true);
 Xrm.Page.getControl("isp_cfo").setDisabled(true);
 Xrm.Page.getControl("donotsendmm").setDisabled(true);
 Xrm.Page.getControl("isp_optedoutdate").setDisabled(true);
 Xrm.Page.getControl("isp_assetclasses").setDisabled(true);
 Xrm.Page.getControl("isp_geographicalclass").setDisabled(true);
 Xrm.Page.getControl("isp_institutionalsector").setDisabled(true);
 Xrm.Page.getControl("isp_associate").setDisabled(true);
 Xrm.Page.getControl("isp_industrialsectorclassification").setDisabled(true);
 Xrm.Page.getControl("isp_intergroup_dealers").setDisabled(true);
 Xrm.Page.getControl("isp_ratingsp").setDisabled(true);
 Xrm.Page.getControl("isp_ratingmoody").setDisabled(true);
 Xrm.Page.getControl("isp_ratinginternal").setDisabled(true);
 Xrm.Page.getControl("isp_facilitygranted").setDisabled(true);
 Xrm.Page.getControl("isp_overduestatus").setDisabled(true);
  Xrm.Page.getControl("isp_corporateforeignshareholdingcompanyname1").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingcompanyname2").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingcompanyname3").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingcompanyname4").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingcompanyname5").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingcompanyname6").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingregno1").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingregno2").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingregno3").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingregno4").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingregno5").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingregno6").setDisabled(true);
 Xrm.Page.getControl("isp_corpshareholdingcountryofregistration1").setDisabled(true);
 Xrm.Page.getControl("isp_corpshareholdingcountryofregistration2").setDisabled(true);
 Xrm.Page.getControl("isp_corpshareholdingcountryofregistration3").setDisabled(true);
 Xrm.Page.getControl("isp_corpshareholdingcountryofregistration4").setDisabled(true);
 Xrm.Page.getControl("isp_corpshareholdingcountryofregistration5").setDisabled(true);
 Xrm.Page.getControl("isp_corpshareholdingcountryofregistration6").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingshareholding").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingshareholding2").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingshareholding3").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingshareholding4").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingshareholding5").setDisabled(true);
 Xrm.Page.getControl("isp_corporateforeignshareholdingshareholding6").setDisabled(true);
 Xrm.Page.getControl("donotemail").setDisabled(true);
 Xrm.Page.getControl("donotbulkemail").setDisabled(true);
 Xrm.Page.getControl("donotphone").setDisabled(true);
 Xrm.Page.getControl("donotfax").setDisabled(true);
 Xrm.Page.getControl("donotpostalmail").setDisabled(true);
 Xrm.Page.getControl("isp_donotallowsms").setDisabled(true);
 Xrm.Page.getControl("isp_fxpaynetsms").setDisabled(true);
 Xrm.Page.getControl("isp_primarycontactbusacc").setDisabled(true);
 Xrm.Page.getControl("isp_primarycontactforex").setDisabled(true);
 }
    var strCountry = Xrm.Page.getAttribute("isp_country");
    var strCountry2 = Xrm.Page.getAttribute("isp_country2");
	var strCustType = Xrm.Page.getAttribute("isp_customertype");

if (Xrm.Page.getAttribute("isp_opicsaccountnumber").getValue() != null) {
    Xrm.Page.getAttribute("isp_merlincustomertype").setRequiredLevel("required");
    Xrm.Page.getAttribute("fax").setRequiredLevel("required");
    // Xrm.Page.SetFieldReqLevel("isp_industrialclassification",1); - Will set at later stage
    Xrm.Page.getAttribute("isp_finsurvinstitutionalsector").setRequiredLevel("required");
    Xrm.Page.getAttribute("industrycode").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_line1").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_line3").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_city").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_postalcode").setRequiredLevel("required");
    Xrm.Page.getAttribute("address2_line1").setRequiredLevel("required");
    Xrm.Page.getAttribute("address2_line3").setRequiredLevel("required");
    Xrm.Page.getAttribute("address2_city").setRequiredLevel("required");
    Xrm.Page.getAttribute("address2_postalcode").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_country").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_country2").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_countrycode").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_countryofultimaterisk").setRequiredLevel("required");
   if (strCountry.getValue() == '1') {
     Xrm.Page.getAttribute("isp_province").setRequiredLevel("required");
       if (strCountry2.getValue() == '1') {
        Xrm.Page.getAttribute("isp_province2").setRequiredLevel("required");
        }
   }
   //Check if Opics Customer Type equals Corporate and set Legal Entity as required
         if (strCustType.getValue() == '2') {
     Xrm.Page.getAttribute("isp_typeoflegalentity").setRequiredLevel("required");
	 Xrm.Page.SetFieldReqLevel("isp_companyclassification", 1)
	 }
}
   //Check  Company Sub Classification and set Company Reg Required
   var strSubClass = Xrm.Page.getAttribute("isp_typeoflegalentity").getValue();
         if   (!isRequiredNoneOnLoad(strSubClass) && strSubClass != null) {
             Xrm.Page.getAttribute("isp_companyregistrationnumber").setRequiredLevel("required");
		}
  //Check Company Classification if null Disable Sub Classification
      var strClass = Xrm.Page.getAttribute("isp_companyclassification").getValue();
           if (strClass == null || strClass == "" || strClass == " ") {
               Xrm.Page.getControl("isp_typeoflegalentity").setDisabled(true);
	   }
//  Adding Red Labels to important fields - WS
Xrm.Page.isp_industrialclassification_c.style.color = '#ff0000';
Xrm.Page.isp_finsurvinstitutionalsector_c.style.color = '#ff0000';
Xrm.Page.isp_typeoflegalentity_c.style.color = '#ff0000';
Xrm.Page.isp_companyclassification_c.style.color = '#ff0000';
Xrm.Page.industrycode_c.style.color = '#ff0000';
Xrm.Page.isp_tradingname_c.style.color = '#ff0000';
Xrm.Page.isp_newoccupation_c.style.color = '#ff0000';
Xrm.Page.isp_vatregistrationnumber_c.style.color = '#ff0000';
Xrm.Page.isp_incometaxno_c.style.color = '#ff0000';
Xrm.Page.telephone1_c.style.color = '#ff0000';
Xrm.Page.address1_line1_c.style.color = '#ff0000';
Xrm.Page.address1_line3_c.style.color = '#ff0000';
Xrm.Page.address1_city_c.style.color = '#ff0000';
Xrm.Page.address1_postalcode_c.style.color = '#ff0000';
Xrm.Page.address2_line1_c.style.color = '#ff0000';
Xrm.Page.address2_line3_c.style.color = '#ff0000';
Xrm.Page.address2_city_c.style.color = '#ff0000';
Xrm.Page.address2_postalcode_c.style.color = '#ff0000';
Xrm.Page.isp_province_c.style.color = '#ff0000';
Xrm.Page.isp_province2_c.style.color = '#ff0000';
Xrm.Page.isp_country_c.style.color = '#ff0000';
Xrm.Page.isp_country2_c.style.color = '#ff0000';
Xrm.Page.isp_countrycode_c.style.color = '#ff0000';
Xrm.Page.isp_countryofultimaterisk_c.style.color = '#ff0000';
Xrm.Page.isp_branches_c.style.color = '#ff0000';
Xrm.Page.isp_companyregistrationnumber_c.style.color = '#ff0000';
Xrm.Page.isp_accountname_c.style.color = '#ff0000';
Xrm.Page.fax_c.style.color = '#ff0000';
Xrm.Page.isp_natureofbusiness_c.style.color = '#ff0000';
Xrm.Page.primarycontactid_c.style.color = '#ff0000';
Xrm.Page.getControl("isp_evocustomerid").setDisabled(true);
Xrm.Page.isp_worldcheckconfirmation_c.style.color = '#ff0000';
Xrm.Page.getControl("isp_emidclientnumber").setDisabled(true);
Xrm.Page.getControl("isp_emidmainbusinessaccountnumber").setDisabled(true);
//set Fields Labels for Business Account
if (Xrm.Page.getAttribute("isp_businessaccount").getValue() == '1') {
   Xrm.Page.isp_emidclientnumber_c.style.color = '#32cd32';
   Xrm.Page.isp_emidmainbusinessaccountnumber_c.style.color = '#32cd32';
   Xrm.Page.isp_businessaccount_c.style.color = '#32cd32';
   Xrm.Page.isp_overdraftfacility_c.style.color = '#32cd32';
   Xrm.Page.isp_authorisedcardadministrator_c.style.color = '#32cd32';
   Xrm.Page.isp_authorisedcardadministrator2_c.style.color = '#32cd32';
   Xrm.Page.isp_authorisedcardadministrator3_c.style.color = '#32cd32';
   Xrm.Page.isp_internetbankingperson1_c.style.color = '#32cd32';
  Xrm.Page.isp_accstatementemail1_c.style.color = '#32cd32';
  Xrm.Page.isp_accnotificationemail1_c.style.color = '#32cd32';
  Xrm.Page.isp_proofofpaymentemail1_c.style.color = '#32cd32';
  Xrm.Page.isp_businessaccountbdm_c.style.color = '#32cd32';
 Xrm.Page.isp_businessdebitcardrequested_c.style.color = '#32cd32';
 Xrm.Page.isp_setupinternetbanking_c.style.color = '#32cd32';
Xrm.Page.accountratingcode_c.style.color = '#32cd32';
Xrm.Page.getAttribute("accountratingcode").setRequiredLevel("required");
 Xrm.Page.getAttribute("isp_businessaccountbdm").setRequiredLevel("required");
 Xrm.Page.getAttribute("isp_authorisedcardadministrator").setRequiredLevel("required");

}
    try {
        document.all.navQuotes.style.display = 'none';
        document.all.navOrders.style.display = 'none';
        document.all.navInvoices.style.display = 'none';
    } catch (ex) { }
    if (Xrm.Page.ui.getFormType() < 5) {
        var s = new String();
        s = Xrm.Page.getAttribute("isp_integrationstatus").getValue();
        if ((s != null) && (s.indexOf("Created") >= 0) && (Xrm.Page.getControl("isp_opicsaccountnumber.getValue() != null)) Xrm.Page.isp_accounttype").setDisabled(true);
        Xrm.Page.address1_country_c.style.display = 'none';
        Xrm.Page.address1_country_d.style.display = 'none';
        Xrm.Page.getAttribute("address1_country").setValue(Xrm.Page.getAttribute("isp_country").getSelectedOption().text);
        Xrm.Page.address1_stateorprovince_c.style.display = 'none';
        Xrm.Page.address1_stateorprovince_d.style.display = 'none';
        Xrm.Page.getAttribute("address1_stateorprovince").setValue(Xrm.Page.getAttribute("isp_province").getSelectedOption().text);
        Xrm.Page.address2_country_c.style.display = 'none';
        Xrm.Page.address2_country_d.style.display = 'none';
        Xrm.Page.getAttribute("address2_country").setValue(Xrm.Page.getAttribute("isp_country2").getSelectedOption().text);
        Xrm.Page.address2_stateorprovince_c.style.display = 'none';
        Xrm.Page.address2_stateorprovince_d.style.display = 'none';
        Xrm.Page.getAttribute("address2_stateorprovince").setValue(Xrm.Page.getAttribute("isp_province2").getSelectedOption().text);
        if (Xrm.Page.getAttribute("isp_fica").getValue() == null) {
            Xrm.Page.getAttribute("isp_fica").setValue(false);
        }
        if (Xrm.Page.getAttribute("isp_creditactcompliant").getValue() == null) {
            Xrm.Page.getAttribute("isp_creditactcompliant").setValue(false);
        }
        var oXmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        oXmlDoc.async = false; var s;
        s = "/isp-Asp/bankaccountauthorise.aspx"
        oXmlDoc.load(s);
        var oNode = oXmlDoc.selectSingleNode("results/domainname");
        var res = "False", dn = "";
        if (oNode != null) {
            dn = oNode.text
            oNode = oXmlDoc.selectSingleNode("results/result");
            if (oNode != null) {
                res = oNode.text;
            }
        }
        if (res == "True") {
            Xrm.Page.getControl("isp_bankname").setDisabled(false);
            Xrm.Page.getControl("isp_bankaccountnumber").setDisabled(false);
            Xrm.Page.getControl("isp_bankbranchcode").setDisabled(false);
        }
        Xrm.Page.IFRAME_BackOffice.style.height = "19px";
        if (Xrm.Page.getAttribute("isp_generatecrediteaseaccountnumber").getValue() == true) {
            Xrm.Page.isp_generatecrediteaseaccountnumber.disabled = true;
        }
        Xrm.Page.isp_shortname.disabled = true;
        var tmpString = Xrm.Page.getAttribute("isp_firstname").getValue();
        var tmpString2 = Xrm.Page.getAttribute("isp_lastname").getValue();
        var tmpString3 = Xrm.Page.getAttribute("isp_accountname").getValue();
        if (tmpString3 != null) {
            Xrm.Page.getAttribute("isp_firstname").setRequiredLevel("none");
            Xrm.Page.getAttribute("isp_lastname").setRequiredLevel("none");
            Xrm.Page.getAttribute("isp_accountname").setRequiredLevel("recommended");
            Xrm.Page.getAttribute("isp_lastname").setValue(null);
            Xrm.Page.getAttribute("isp_firstname").setValue(null);
            Xrm.Page.getControl("isp_lastname").setDisabled(true);
            Xrm.Page.getControl("isp_firstname").setDisabled(true);
            Xrm.Page.getControl("isp_title").setDisabled(true);
        }
        else if (tmpString != null || tmpString2 != null) {
            Xrm.Page.getAttribute("isp_firstname").setRequiredLevel("recommended");
            Xrm.Page.getAttribute("isp_lastname").setRequiredLevel("recommended");
            Xrm.Page.getAttribute("isp_accountname").setRequiredLevel("none");
            Xrm.Page.getControl("isp_accountname").setDisabled(true);
        }
        else {
            Xrm.Page.getAttribute("isp_firstname").setRequiredLevel("recommended");
            Xrm.Page.getAttribute("isp_lastname").setRequiredLevel("recommended");
            Xrm.Page.getAttribute("isp_accountname").setRequiredLevel("recommended");
        }
    }
    var opicsField = Xrm.Page.getAttribute("isp_opicsaccountnumber");
    var opicsNo = opicsField.getValue();
    if (opicsNo != null) {
        if (opicsNo.length > 0) {
            opicsField.Disabled = true;
        }
    }
    //Morne Code Added for Products
    //Retail forex check
    var strRetailForex = Xrm.Page.getAttribute("isp_retailforex");
    if (strRetailForex.getValue() == '0') {
        Xrm.Page.isp_travellerscheques.Disabled = 1;
        Xrm.Page.isp_telegraphictransfers.Disabled = 1;
        Xrm.Page.isp_drafts.Disabled = 1;
        Xrm.Page.isp_banknotes.Disabled = 1;
        Xrm.Page.isp_cashpassport.Disabled = 1;
        Xrm.Page.isp_businessowneridrf.Disabled = 1;
    }
 //Cash Collateral check
   var strCashCollateral =  Xrm.Page.isp_cashcollateral;
   var strTimed = Xrm.Page.getAttribute("isp_timedfec");
  if (strCashCollateral.getValue() == '6' && strTimed.getValue() == '1') {
	   Xrm.Page.isp_newstartamount1.Disabled = 1;
       Xrm.Page.isp_newendamount1.Disabled = 1;
       Xrm.Page.isp_newstartamount2.Disabled = 1;
       Xrm.Page.isp_newendamount2.Disabled = 1;
       Xrm.Page.isp_newstartamount3.Disabled = 1;
       Xrm.Page.isp_newendamount3.Disabled = 1;
       Xrm.Page.isp_newstartamount4.Disabled = 1;
       Xrm.Page.isp_newendamount4.Disabled = 1;
       Xrm.Page.isp_newdays1.Disabled = 0;
	   Xrm.Page.isp_newdays2.Disabled = 0;
	   Xrm.Page.isp_newdays3.Disabled = 0;
	   Xrm.Page.isp_newdays4.Disabled = 0;
  }
  else if (strCashCollateral.getValue() == '6' && strTimed.getValue() == '0') {
	   Xrm.Page.getAttribute("isp_timedfec").setRequiredLevel("required");
	   Xrm.Page.isp_newstartamount1.Disabled = 0;
       Xrm.Page.isp_newendamount1.Disabled = 0;
       Xrm.Page.isp_newstartamount2.Disabled = 0;
       Xrm.Page.isp_newendamount2.Disabled = 0;
       Xrm.Page.isp_newstartamount3.Disabled = 0;
       Xrm.Page.isp_newendamount3.Disabled = 0;
       Xrm.Page.isp_newstartamount4.Disabled = 0;
       Xrm.Page.isp_newendamount4.Disabled = 0;
       Xrm.Page.isp_newdays1.Disabled = 1;
	   Xrm.Page.isp_newdays2.Disabled = 1;
	   Xrm.Page.isp_newdays3.Disabled = 1;
	   Xrm.Page.isp_newdays4.Disabled = 1;
	  }
	   else {

        Xrm.Page.isp_timedfec.Disabled = 1;
        Xrm.Page.isp_cashcol1.Disabled = 1;
		Xrm.Page.isp_newdays1.Disabled = 1;
        Xrm.Page.isp_newstartamount1.Disabled = 1;
        Xrm.Page.isp_newendamount1.Disabled = 1;
        Xrm.Page.isp_cashcol2.Disabled = 1;
		Xrm.Page.isp_newdays2.Disabled = 1;
        Xrm.Page.isp_newstartamount2.Disabled = 1;
        Xrm.Page.isp_newendamount2.Disabled = 1;
        Xrm.Page.isp_cashcol3.Disabled = 1;
		Xrm.Page.isp_newdays3.Disabled = 1;
        Xrm.Page.isp_newstartamount3.Disabled = 1;
        Xrm.Page.isp_newendamount3.Disabled = 1;
        Xrm.Page.isp_cashcol4.Disabled = 1;
		Xrm.Page.isp_newdays4.Disabled = 1;
        Xrm.Page.isp_newstartamount4.Disabled = 1;
        Xrm.Page.isp_newendamount4.Disabled = 1;
   }
    //Lending check
    var strLending = Xrm.Page.getAttribute("isp_lending");
    if (strLending.getValue() == '0') {
        Xrm.Page.isp_othersecuredloans.Disabled = 1;
        Xrm.Page.isp_rentals.Disabled = 1;
        Xrm.Page.isp_unsecuredloans.Disabled = 1;
        Xrm.Page.isp_mortages.Disabled = 1;
        Xrm.Page.isp_instalmentsales.Disabled = 1;
        Xrm.Page.isp_businessowneridlending.Disabled = 1;
    }
    //Corporate Forex check
    var strCorpForex = Xrm.Page.getAttribute("isp_corporateforex");
    if (strCorpForex.getValue() == '0') {
        Xrm.Page.isp_treasurydirect.Disabled = 1;
        Xrm.Page.isp_fxpaynet.Disabled = 1;
        Xrm.Page.isp_businessowneridcf.Disabled = 1;
    }
    //Deposits check
    var strDeposits = Xrm.Page.getAttribute("isp_deposits");
    if (strDeposits.getValue() == '0') {
        Xrm.Page.isp_notice.Disabled = 1;
        Xrm.Page.isp_call.Disabled = 1;
        Xrm.Page.isp_fixed.Disabled = 1;
        Xrm.Page.isp_businessowneriddep.Disabled = 1;
    }
 //Customer types check **
    var strcustomertype = Xrm.Page.getAttribute("isp_customertype");
    if (strcustomertype.getValue() == '4') {
        Xrm.Page.isp_residenttype.Disabled = 1;
    }
    //Resident types check
    var strresidenttype = Xrm.Page.getAttribute("isp_residenttype");
    if (strresidenttype.getValue() == '5') {
        Xrm.Page.isp_residenttype.Disabled = 1;
    }
    //Passport number types check
    var strpassportnumber = Xrm.Page.getAttribute("isp_passportnumber");
    if (strpassportnumber.Value == '') {
        Xrm.Page.isp_countryofissue.Disabled = 1;
    }
    //Card check
    var strCard = Xrm.Page.getAttribute("isp_card");
    if (strCard.getValue() == '0') {
        Xrm.Page.isp_randtravel.Disabled = 1;
        Xrm.Page.isp_worldcurrencycard.Disabled = 1;
        Xrm.Page.isp_bidsave.Disabled = 1;
        Xrm.Page.isp_corporatepaymentcard.Disabled = 1;
        Xrm.Page.isp_businessowneridcard.Disabled = 1;
    }
     isp_customertype_onchange();
     isp_residenttype_onchange();
    //Morne Code Added for Products
    {
        var oPickList = Xrm.Page.getAttribute("isp_creditstatus");
        for (var i = 0; i < oPickList.options.length; i++)
            PaintPickListOption(oPickList.options[i]);
    }
    function PaintPickListOption(option) {
        var optionColor = "";
        switch (parseInt(option.value)) // line fixed
        {
            case 21: optionColor = "red"; break;
           default: optionColor = "black"; break;
        }
        option.style.color = optionColor;
    }
}
function Form_onsave() {
    debugger
//Set User if LCC Date has changed for Suppliers
 var strUser2 = Xrm.Page.context.getUserId();
var lccdatenew = Xrm.Page.getAttribute("isp_lastcertificatechecked").getValue();
 Xrm.Page.getAttribute("isp_lcccheckedby").setSubmitMode("always");
      if (lccdate_changed) {
 Xrm.Page.getAttribute("isp_lcccheckedby").setValue([{ id: strUser2}]);
  }
 var bownedmen = Xrm.Page.getAttribute("isp_blackowned_persentage").getValue();
     if (bownedmen == null || bownedmen == "" || bownedmen == " ") {
        Xrm.Page.getAttribute("isp_blackowned_persentage").setValue(0.00);
		}
 var bownedwomen = Xrm.Page.getAttribute("isp_blackfemaleowned_persentage").getValue();
     if (bownedwomen == null || bownedwomen == "" || bownedwomen == " ") {
        Xrm.Page.getAttribute("isp_blackfemaleowned_persentage").setValue(0.00);
		}

 OnSave_SearchNames();
var strOpicsnr = Xrm.Page.getAttribute("isp_opicsaccountnumber").getValue();
if (strOpicsnr != null)  {
var strCheck = strOpicsnr.charAt(0);
var strCreated = Xrm.Page.getAttribute("createdon").getValue();
var strEvo = Xrm.Page.getAttribute("isp_evocustomerid").getValue();
        if ((strCheck == '1' || strCheck == '2' || strCheck == '4' || strCheck == '5') && strEvo == null) {
           alert('Please create/update profile on the EVO System');
            event.returnValue = false;
            return false;
        }
}
 Xrm.Page.getAttribute("isp_lastverificationcompletedby").setSubmitMode("always");
 var strUser1 = Xrm.Page.context.getUserId();
 var strVerify1 = Xrm.Page.getAttribute("isp_accountverification").getValue();
      if (strVerify1 == '100000000') {
 Xrm.Page.getAttribute("isp_lastverificationcompletedby").setValue([{ id: strUser1}]);
  }
    var strAccountname = Xrm.Page.getAttribute("name").getValue();
    var strAccountShortname = Xrm.Page.getAttribute("isp_shortname").getValue();
    var strISPName = Xrm.Page.getAttribute("isp_accountname").getValue();
    Xrm.Page.getAttribute("isp_integrationstatus").setValue('Ready');
    Xrm.Page.getAttribute("isp_integrationstatus").setSubmitMode("always");
    Xrm.Page.getAttribute("name").setValue(strISPName);
    Xrm.Page.getAttribute("isp_shortname").setValue(strISPName);
    Xrm.Page.getAttribute("isp_firstname").setSubmitMode("always");
    Xrm.Page.getAttribute("isp_lastname").setSubmitMode("always");
    Xrm.Page.getAttribute("isp_accountname").setSubmitMode("always");
    Xrm.Page.getAttribute("name").setSubmitMode("always");
    Xrm.Page.getAttribute("isp_shortname").setSubmitMode("always");
    tmpString = Xrm.Page.getAttribute("isp_firstname").getValue();
    tmpString2 = Xrm.Page.getAttribute("isp_lastname").getValue();
    tmpString3 = Xrm.Page.getAttribute("isp_accountname").getValue();
    var strString
    var tmpInt
    var splitLength
    if (tmpString2 != null && tmpString != null) {
        Xrm.Page.isp_shortname.disabled = false;
        strString = tmpString2;
        strString += " ";
        strStringSplit = tmpString;
        strSplit = strStringSplit.split(" ");
        splitLength = strSplit.length;
        for (i = 0; i < splitLength; i++) {
            str = strSplit[i];
            strString += str.substring(0, 1);
        }
        var index = true;
        Xrm.Page.isp_shortname.disabled = true;
        Xrm.Page.getAttribute("isp_shortname").setValue(strString);
        Xrm.Page.getAttribute("isp_shortname").setSubmitMode("always");
        Xrm.Page.getAttribute("name").setValue(strString);
        Xrm.Page.getAttribute("name").setSubmitMode("always");
    }
    else if (tmpString3 != null) {
        Xrm.Page.isp_shortname.disabled = false;
        Xrm.Page.isp_shortname.disabled = true;
        Xrm.Page.isp_shortname.disabled = true;
        Xrm.Page.getAttribute("isp_shortname").setValue(strISPName);
        Xrm.Page.getAttribute("isp_shortname").setSubmitMode("always");
        Xrm.Page.getAttribute("name").setValue(strISPName);
        Xrm.Page.getAttribute("name").setSubmitMode("always");
    }
     //Passport Check for funnies
       var PassNumber = Xrm.Page.getAttribute("isp_passportnumber").getValue();
       if (PassNumber != null) {
           var curVal1 = Xrm.Page.getAttribute("isp_passportnumber").getValue();
              if ( /[^A-Za-z0-9]/.test(curVal1) ) {
               alert("Only Alphanumeric characters allowed in Passportnumber, no spaces or special characters");
               setTimeout('Xrm.Page.getControl("isp_passportnumber").setFocus(true);', 50);
               event.returnValue = false;
                }
           }
//World Check On Save
var strWChecks = Xrm.Page.getAttribute("isp_worldcheckconfirmation").getValue();
 var strCustTyp = Xrm.Page.getAttribute("isp_customertype").getValue();
 var strVerifyValue = Xrm.Page.getAttribute("isp_accountverification").getValue();
 var strEmat = Xrm.Page.getAttribute("isp_emat").getValue();
    if (strEmat != null && strCustTyp == '4' && strVerifyValue == '100000000' && strWChecks == '0')  {
        alert("World Check Confirmation not Completed");
         event.returnValue = false;
            return false;
        }

  // Company Registration Check when Saving

  var nr = Xrm.Page.getAttribute("isp_companyregistrationnumber").getValue();
	var strLegalEntity = Xrm.Page.getAttribute("isp_typeoflegalentity").getValue();
	 if   (!isRequiredNone(strLegalEntity) && strLegalEntity != null) {

		    if (!validateCompanyRegno(nr)) {
            alert("Invalid Company Registration Number entered");
            Xrm.Page.getControl("isp_companyregistrationnumber").setFocus(true);
            event.returnValue = false;
            return false;
        }
 }
   // Income Tax Number Check **
    var taxNumber = Xrm.Page.getAttribute("isp_incometaxno").getValue();
    if (taxNumber != null && taxNumber != "") {
        if (!validateTAXNumber(taxNumber)) {
            alert("Invalid SARS Tax Number entered");
            Xrm.Page.getControl("isp_incometaxno").setFocus(true);
            event.returnValue = false;
            return false;
        }
    else return true;
     }
    //ID Number Check and Date of Birth **
    var idNumber = Xrm.Page.getAttribute("isp_identitynumber").getValue();
    if (idNumber != null && idNumber != "") {
        if (!validateIDNumber(idNumber)) {
            alert("Invalid ID Number entered");
            Xrm.Page.getControl("isp_identitynumber").setFocus(true);
            event.returnValue = false;
            return false;
        }
    }
    var curdob = Xrm.Page.getAttribute("isp_dateofbirth").getValue();
    if (idNumber != null && idNumber != "" &&
        curdob != null) {
        var dob = new Date(idNumber.substring(0, 2), idNumber.substring(2, 4) - 1, idNumber.substring(4, 6));
        var cdob = new Date(curdob);

        var dobStr = "";
        dobStr = dobStr.concat(dob.getFullYear().toString().substring(2), dob.getMonth().toString(), dob.getDate().toString());
        var cdobStr = "";
        cdobStr = cdobStr.concat(cdob.getFullYear().toString().substring(2), cdob.getMonth().toString(), cdob.getDate().toString());
        if (dobStr != cdobStr) {
            alert("Date of birth does not match the ID Number.");
            Xrm.Page.getControl("isp_dateofbirth").setFocus(true);
            event.returnValue = false;
            return false;
        }
    }
    if (Xrm.Page.ui.getFormType() < 3) {
        var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        var s;
        s = "/isp-asp/dupcheck.aspx?regno="
        if (Xrm.Page.getAttribute("isp_companyregistrationnumber").getValue() != undefined) s += escape(Xrm.Page.getAttribute("isp_companyregistrationnumber").getValue());
        s += "&custno="
        s += "&accountid="
        if (Xrm.Page.data.entity.getId() != undefined)
            s += escape(Xrm.Page.data.entity.getId());
        s += "&entity=account&new=";
        if (Xrm.Page.ui.getFormType() == 1) { s += "yes"; }
        if (Xrm.Page.ui.getFormType() == 2) {
            if (Xrm.Page.isp_companyregistrationnumber.IsDirty) { s += "yes"; } else { s += "no"; };
        }
        xmlDoc.load(s);
        var oNode = xmlDoc.selectSingleNode("result");
        if (oNode != null) {
            if (oNode.text == "True") {
                alert("There is another contact with the same Registration Number. Please avoid creating duplicates.");
                event.returnValue = false;
                return false;
            }
        }
    }
    if (Xrm.Page.getAttribute("isp_opicsaccountnumber").getValue() != null)
         if (Xrm.Page.getAttribute("isp_opicsaccountnumber").getValue().length != 10) {
        alert("Please ensure the opics number is the correct length");
        setTimeout('Xrm.Page.getControl("isp_opicsaccountnumber").setFocus(true);', 50);
        event.returnValue = false;
    }
}
function isp_creditstatus_onchange() {
    {
        var oPickList = Xrm.Page.getAttribute("isp_creditstatus");
        for (var i = 0; i < oPickList.options.length; i++)
            PaintPickListOption(oPickList.options[i]);
    }
    function PaintPickListOption(option) {
        var optionColor = "";
        switch (parseInt(option.value)) // line fixed
        {
            case 1: optionColor = "red"; break;
            case 14: optionColor = "red"; break;
            default: optionColor = "black"; break;
        }
        option.style.color = optionColor;
    }
}
function name_onchange() {
}
function isp_accountname_onchange() {
    debugger
    tmpString = Xrm.Page.getAttribute("isp_firstname").getValue();
    tmpString2 = Xrm.Page.getAttribute("isp_lastname").getValue();
    tmpString3 = Xrm.Page.getAttribute("isp_accountname").getValue();
    tmpString4 = Xrm.Page.getAttribute("isp_accountname").getValue();
    Xrm.Page.getAttribute("isp_companyregistrationnumber").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_branches").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_branches").setValue(undefined);
    var strString
    var strAccountname = Xrm.Page.getAttribute("name");
    var strAccountShortname = Xrm.Page.getAttribute("isp_shortname");
    var tmpStringName = Xrm.Page.getAttribute("isp_accountname").getValue()
    var tmpStringName = Xrm.Page.getAttribute("isp_accountname").getValue()
    if (tmpStringName != null) {
        Xrm.Page.getAttribute("isp_firstname").setRequiredLevel("none");
        Xrm.Page.getAttribute("isp_lastname").setRequiredLevel("none");
        Xrm.Page.getAttribute("isp_branches").setRequiredLevel("required");
        Xrm.Page.getControl("isp_firstname").setDisabled(true);
        Xrm.Page.getControl("isp_lastname").setDisabled(true);
        Xrm.Page.getControl("isp_title").setDisabled(true);
        strAccountname = tmpStringName;
        strAccountShortname = tmpStringName;
        Xrm.Page.getAttribute("name").setSubmitMode("always");
        Xrm.Page.getAttribute("isp_shortname").setSubmitMode("always");
        var res  = tmpString4.replace(/'/gi, " ");  //This will remove apostrophe's
       Xrm.Page.getAttribute("isp_accountname").setValue(res);
    }
    else {
        Xrm.Page.getAttribute("isp_firstname").setRequiredLevel("recommended");
        Xrm.Page.getAttribute("isp_lastname").setRequiredLevel("recommended");
        Xrm.Page.getControl("isp_firstname").setDisabled(false);
        Xrm.Page.getControl("isp_lastname").setDisabled(false);
        Xrm.Page.getControl("isp_title").setDisabled(false);
    }
}
function isp_firstname_onchange() {
    debugger
    tmpString = Xrm.Page.getAttribute("isp_firstname").getValue();
    tmpString2 = Xrm.Page.getAttribute("isp_lastname").getValue();
    tmpString3 = Xrm.Page.getAttribute("isp_accountname").getValue();
     tmpString5 = Xrm.Page.getAttribute("isp_firstname").getValue();
    var strString
    var tmpInt
    var splitLength
    if (tmpString2 != null && tmpString != null) {
        Xrm.Page.isp_shortname.disabled = false;
        strString = tmpString2;
        strString += " ";
        strStringSplit = tmpString;
        strSplit = strStringSplit.split(" ");
        splitLength = strSplit.length;
        for (i = 0; i < splitLength; i++) {
            str = strSplit[i];
            strString += str.substring(0, 1);
        }
        var index = true;
        Xrm.Page.isp_shortname.disabled = true;
    }
    else if (tmpString3 != null) {
        Xrm.Page.isp_shortname.disabled = false;
        Xrm.Page.isp_shortname.disabled = true;
    }
    var tmpString = Xrm.Page.getAttribute("isp_firstname").getValue()
    var tmpString2 = Xrm.Page.getAttribute("isp_lastname").getValue()
    if (tmpString != null || tmpString2 != null) {
        Xrm.Page.getAttribute("isp_accountname").setRequiredLevel("none");
        Xrm.Page.getControl("isp_accountname").setDisabled(true);
        var resf  = tmpString5.replace(/'/gi, " "); //This will remove apostrophe's
       Xrm.Page.getAttribute("isp_firstname").setValue(resf);
    }
    else {
        Xrm.Page.getAttribute("isp_accountname").setRequiredLevel("recommended");
        Xrm.Page.getControl("isp_accountname").setDisabled(false);
        Xrm.Page.getAttribute("isp_firstname").setValue(".");
        Xrm.Page.getAttribute("isp_lastname").setValue(".");
    }
}
function isp_lastname_onchange() {
    debugger
    tmpString = Xrm.Page.getAttribute("isp_firstname").getValue();
    tmpString2 = Xrm.Page.getAttribute("isp_lastname").getValue();
    tmpString3 = Xrm.Page.getAttribute("isp_accountname").getValue();
     tmpString6 = Xrm.Page.getAttribute("isp_lastname").getValue();
    var strString
    var tmpInt
    var splitLength
    if (tmpString2 != null && tmpString != null) {
        Xrm.Page.isp_shortname.disabled = false;
        strString = tmpString2;
        strString += " ";
        strStringSplit = tmpString;
        strSplit = strStringSplit.split(" ");
        splitLength = strSplit.length;
        for (i = 0; i < splitLength; i++) {
            str = strSplit[i];
            strString += str.substring(0, 1);
        }
        var index = true;
        Xrm.Page.isp_shortname.disabled = true;
    }
    else if (tmpString3 != null) {
        Xrm.Page.isp_shortname.disabled = false;
        Xrm.Page.isp_shortname.disabled = true;
    }
    var tmpString = Xrm.Page.getAttribute("isp_firstname").getValue()
    var tmpString2 = Xrm.Page.getAttribute("isp_lastname").getValue()
    if (tmpString != null || tmpString2 != null) {
        Xrm.Page.getAttribute("isp_accountname").setRequiredLevel("none");
        Xrm.Page.getControl("isp_accountname").setDisabled(true);
        var resl  = tmpString6.replace(/'/gi, " "); //This will remove apostrophe's
       Xrm.Page.getAttribute("isp_lastname").setValue(resl);
    }
    else {
        Xrm.Page.getAttribute("isp_accountname").setRequiredLevel("recommended");
        Xrm.Page.getControl("isp_accountname").setDisabled(false);
    }
}
function isp_shortname_onchange() {
    debugger
    if (Xrm.Page.getAttribute("isp_shortname.getValue() == null) Xrm.Page.isp_shortname").setValue('.');
}
function customertypecode_onchange() {
    if (Xrm.Page.getAttribute("customertypecode").getSelectedOption().text == 'FXPaynet') {
        Xrm.Page.isp_fxpaynetparty_c.style.display = '';
        Xrm.Page.isp_fxpaynetparty_d.style.display = '';
    }
    else {
        Xrm.Page.isp_fxpaynetparty_c.style.display = 'none';
        Xrm.Page.isp_fxpaynetparty_d.style.display = 'none';
    }
}
function isp_fxpaynetparty_onchange() {
    if (Xrm.Page.getAttribute("isp_fxpaynetparty").getSelectedOption().text == 'Bidvest Bank') {
        Xrm.Page.isp_fxbidvestbank_c.style.display = '';
        Xrm.Page.isp_fxbidvestbank_d.style.display = '';
        Xrm.Page.isp_fxtravelex_c.style.display = 'none';
        Xrm.Page.isp_fxtravelex_d.style.display = 'none';
        Xrm.Page.isp_salespersonid_c.style.display = 'none';
        Xrm.Page.isp_salespersonid_d.style.display = 'none';
        Xrm.Page.isp_branchid_c.style.display = 'none';
        Xrm.Page.isp_branchid_d.style.display = 'none';
    }
    else {
        Xrm.Page.isp_fxbidvestbank_c.style.display = 'none';
        Xrm.Page.isp_fxbidvestbank_d.style.display = 'none';
        Xrm.Page.isp_fxtravelex_c.style.display = '';
        Xrm.Page.isp_fxtravelex_d.style.display = '';
        Xrm.Page.isp_salespersonid_c.style.display = 'none';
        Xrm.Page.isp_salespersonid_d.style.display = 'none';
        Xrm.Page.isp_branchid_c.style.display = 'none';
        Xrm.Page.isp_branchid_d.style.display = 'none';
    }
}
function isp_fxtravelex_onchange() {
    if (Xrm.Page.getAttribute("isp_fxtravelex").getSelectedOption().text == 'Core > 1 Year') {
        Xrm.Page.getAttribute("isp_commpercentage").setValue('40%');
    }
    else {
        Xrm.Page.getAttribute("isp_commpercentage").setValue('30%');
    }
}
function isp_fxbidvestbank_onchange() {
    if (Xrm.Page.getAttribute("isp_fxbidvestbank").getSelectedOption().text == 'Direct') {
        Xrm.Page.getAttribute("isp_commpercentage").setValue('30%');
        Xrm.Page.isp_salespersonid_c.style.display = 'none';
        Xrm.Page.isp_salespersonid_d.style.display = 'none';
        Xrm.Page.isp_branchid_c.style.display = 'none';
        Xrm.Page.isp_branchid_d.style.display = 'none';
    }
    else if (Xrm.Page.getAttribute("isp_fxbidvestbank").getSelectedOption().text == 'Bidvest Bank Branches') {
        Xrm.Page.getAttribute("isp_commpercentage").setValue('24.5%');
        Xrm.Page.isp_salespersonid_c.style.display = 'none';
        Xrm.Page.isp_salespersonid_d.style.display = 'none';
        Xrm.Page.isp_branchid_c.style.display = 'none';
        Xrm.Page.isp_branchid_d.style.display = 'none';
    }
    else if (Xrm.Page.getAttribute("isp_fxbidvestbank").getSelectedOption().text == 'ID Agents') {
        Xrm.Page.getAttribute("isp_commpercentage").setValue('0%');
        Xrm.Page.isp_salespersonid_c.style.display = 'none';
        Xrm.Page.isp_salespersonid_d.style.display = 'none';
        Xrm.Page.isp_branchid_c.style.display = '';
        Xrm.Page.isp_branchid_d.style.display = '';
    }
    else if (Xrm.Page.getAttribute("isp_fxbidvestbank").getSelectedOption().text == 'Sales People') {
        Xrm.Page.isp_salespersonid_c.style.display = '';
        Xrm.Page.isp_salespersonid_d.style.display = '';
        Xrm.Page.isp_branchid_c.style.display = 'none';
        Xrm.Page.isp_branchid_d.style.display = 'none';
    }
    else {
        Xrm.Page.isp_salespersonid_c.style.display = 'none';
        Xrm.Page.isp_salespersonid_d.style.display = 'none';
        Xrm.Page.isp_branchid_c.style.display = 'none';
        Xrm.Page.isp_branchid_d.style.display = 'none';
    }
}
function isp_opicsaccountnumberlength_onchange() {
    if (Xrm.Page.getAttribute("isp_opicsaccountnumber").getValue() == null)
    if (Xrm.Page.getAttribute("isp_opicsaccountnumber").getValue() != null)
        if (Xrm.Page.getAttribute("isp_opicsaccountnumber").getValue().length != 10) {
        alert("Please ensure the opics number is the correct length");
        setTimeout('Xrm.Page.getControl("isp_opicsaccountnumber").setFocus(true);', 50);
    }
}
function isp_customertype_onchange() {
    debugger
    var oOpicsCustomerType = Xrm.Page.getAttribute("isp_customertype");
    // MD 2012-11-28 - Set Defaults MD **
    Xrm.Page.getAttribute("isp_residenttype").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_newoccupation").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_dateofbirth").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_branches").setRequiredLevel("none");
    Xrm.Page.isp_residenttype.Disabled = 1;
    Xrm.Page.isp_identitynumber.Disabled = 1;
    isp_residenttype_onchange();
    if (oOpicsCustomerType.getValue() != null) {
        switch (oOpicsCustomerType.getSelectedOption().text) {
            case 'Individual [I]':
                Xrm.Page.getAttribute("isp_newoccupation").setRequiredLevel("required");
                Xrm.Page.getAttribute("isp_dateofbirth").setRequiredLevel("required");
                Xrm.Page.getAttribute("isp_residenttype").setRequiredLevel("required");
                Xrm.Page.getAttribute("isp_branches").setRequiredLevel("required");
                Xrm.Page.getAttribute("isp_countryofbirth").setRequiredLevel("required");
                Xrm.Page.isp_residenttype.Disabled = 0;
                Xrm.Page.isp_identitynumber.Disabled = 0;
                break;
            case 'Corporate [C]':
            Xrm.Page.getAttribute("isp_branches").setRequiredLevel("required");
            Xrm.Page.getAttribute("isp_typeoflegalentity").setRequiredLevel("required"); // Set New Company Classifications Required
            Xrm.Page.SetFieldReqLevel("isp_companyclassification", 1) // Set New Company Classifications Required
             break;
            case 'Bank [B]':

                break;
            case 'Broker [K]':
                break;
            case 'Financial Institution [F]':

                break;
            case 'Other [O]':
                break;
        }
    }
}
function isp_cashcollateral_onchange() {
debugger
    //Cash collateral check
    var strCashCollateral = Xrm.Page.getAttribute("isp_cashcollateral");
   if (strCashCollateral.getValue() == '6') {
	   Xrm.Page.isp_timedfec.Disabled = 0;
	   Xrm.Page.getAttribute("isp_timedfec").setRequiredLevel("required");

    }
    else {
       Xrm.Page.isp_timedfec.Disabled = 1;
	   Xrm.Page.isp_cashcol1.Disabled = 1;
       Xrm.Page.isp_newdays1.Disabled = 1;
       Xrm.Page.isp_newstartamount1.Disabled = 1;
       Xrm.Page.isp_newendamount1.Disabled = 1;
       Xrm.Page.isp_cashcol2.Disabled = 1;
       Xrm.Page.isp_newdays2.Disabled = 1;
       Xrm.Page.isp_newstartamount2.Disabled = 1;
       Xrm.Page.isp_newendamount2.Disabled = 1;
       Xrm.Page.isp_cashcol3.Disabled = 1;
      Xrm.Page.isp_newdays3.Disabled = 1;
      Xrm.Page.isp_newstartamount3.Disabled = 1;
      Xrm.Page.isp_newendamount3.Disabled = 1;
      Xrm.Page.isp_cashcol4.Disabled = 1;
      Xrm.Page.isp_newdays4.Disabled = 1;
     Xrm.Page.isp_newstartamount4.Disabled = 1;
     Xrm.Page.isp_newendamount4.Disabled = 1;
  }
}
function isp_timedfec_onchange() {
    //Times FEC's  check
    var strTimed = Xrm.Page.getAttribute("isp_timedfec");
    if (strTimed.getValue() == '1') {
       Xrm.Page.isp_newstartamount1.Disabled = 1;
       Xrm.Page.isp_newendamount1.Disabled = 1;
       Xrm.Page.isp_newstartamount2.Disabled = 1;
       Xrm.Page.isp_newendamount2.Disabled = 1;
       Xrm.Page.isp_newstartamount3.Disabled = 1;
       Xrm.Page.isp_newendamount3.Disabled = 1;
       Xrm.Page.isp_newstartamount4.Disabled = 1;
       Xrm.Page.isp_newendamount4.Disabled = 1;
       Xrm.Page.isp_newdays1.Disabled = 0;
	   Xrm.Page.isp_newdays2.Disabled = 0;
	   Xrm.Page.isp_newdays3.Disabled = 0;
	   Xrm.Page.isp_newdays4.Disabled = 0;
       Xrm.Page.isp_cashcol1.Disabled = 0;
	  Xrm.Page.isp_cashcol2.Disabled = 0;
	  Xrm.Page.isp_cashcol3.Disabled = 0;
	  Xrm.Page.isp_cashcol4.Disabled = 0;
    }
    else if (strTimed.getValue() == '0'){
        Xrm.Page.isp_newstartamount1.Disabled = 0;
       Xrm.Page.isp_newendamount1.Disabled = 0;
       Xrm.Page.isp_newstartamount2.Disabled = 0;
       Xrm.Page.isp_newendamount2.Disabled = 0;
       Xrm.Page.isp_newstartamount3.Disabled = 0;
       Xrm.Page.isp_newendamount3.Disabled = 0;
       Xrm.Page.isp_newstartamount4.Disabled = 0;
       Xrm.Page.isp_newendamount4.Disabled = 0;
	   Xrm.Page.isp_cashcol1.Disabled = 0;
	   Xrm.Page.isp_cashcol2.Disabled = 0;
	   Xrm.Page.isp_cashcol3.Disabled = 0;
	   Xrm.Page.isp_cashcol4.Disabled = 0;
       Xrm.Page.isp_newdays1.Disabled = 1;
	   Xrm.Page.isp_newdays2.Disabled = 1;
	   Xrm.Page.isp_newdays3.Disabled = 1;
	   Xrm.Page.isp_newdays4.Disabled = 1;
    }
}
function isp_retailforex_onchange() {
    //Retail forex check
    var strRetailForex = Xrm.Page.getAttribute("isp_retailforex");
    if (strRetailForex.getValue() == '1') {
        Xrm.Page.isp_travellerscheques.Disabled = 0;
        Xrm.Page.isp_telegraphictransfers.Disabled = 0;
        Xrm.Page.isp_drafts.Disabled = 0;
        Xrm.Page.isp_banknotes.Disabled = 0;
        Xrm.Page.isp_cashpassport.Disabled = 0;
        Xrm.Page.isp_businessowneridrf.Disabled = 0;
    }
    else {
        Xrm.Page.isp_travellerscheques.Disabled = 1;
        Xrm.Page.isp_telegraphictransfers.Disabled = 1;
        Xrm.Page.isp_drafts.Disabled = 1;
        Xrm.Page.isp_banknotes.Disabled = 1;
        Xrm.Page.isp_cashpassport.Disabled = 1;
        Xrm.Page.isp_businessowneridrf.Disabled = 1;
    }
}
function isp_lending_onchange() {
    //Lending check
    var strLending = Xrm.Page.getAttribute("isp_lending");
    if (strLending.getValue() == '1') {
        Xrm.Page.isp_othersecuredloans.Disabled = 0;
        Xrm.Page.isp_rentals.Disabled = 0;
        Xrm.Page.isp_unsecuredloans.Disabled = 0;
        Xrm.Page.isp_mortages.Disabled = 0;
        Xrm.Page.isp_instalmentsales.Disabled = 0;
        Xrm.Page.isp_businessowneridlending.Disabled = 0;
    }
    else {
        Xrm.Page.isp_othersecuredloans.Disabled = 1;
        Xrm.Page.isp_rentals.Disabled = 1;
        Xrm.Page.isp_unsecuredloans.Disabled = 1;
        Xrm.Page.isp_mortages.Disabled = 1;
        Xrm.Page.isp_instalmentsales.Disabled = 1;
        Xrm.Page.isp_businessowneridlending.Disabled = 1;
    }
}
function isp_corporateforex_onchange() {
    //Corporate Forex check
    var strCorpForex = Xrm.Page.getAttribute("isp_corporateforex");
    if (strCorpForex.getValue() == '1') {
        Xrm.Page.isp_treasurydirect.Disabled = 0;
        Xrm.Page.isp_fxpaynet.Disabled = 0;
        Xrm.Page.isp_businessowneridcf.Disabled = 0;
    }
    else {
        Xrm.Page.isp_treasurydirect.Disabled = 1;
        Xrm.Page.isp_fxpaynet.Disabled = 1;
        Xrm.Page.isp_businessowneridcf.Disabled = 1;
    }
}
function isp_deposits_onchange() {
    //Deposits check
    var strDeposits = Xrm.Page.getAttribute("isp_deposits");
    if (strDeposits.getValue() == '1') {
        Xrm.Page.isp_notice.Disabled = 0;
        Xrm.Page.isp_call.Disabled = 0;
        Xrm.Page.isp_fixed.Disabled = 0;
        Xrm.Page.isp_businessowneriddep.Disabled = 0;
    }
    else {
        Xrm.Page.isp_notice.Disabled = 1;
        Xrm.Page.isp_call.Disabled = 1;
        Xrm.Page.isp_fixed.Disabled = 1;
        Xrm.Page.isp_businessowneriddep.Disabled = 1;
    }
}
function isp_card_onchange() {
    //Card check
    var strCard = Xrm.Page.getAttribute("isp_card");
    if (strCard.getValue() == '1') {
        Xrm.Page.isp_randtravel.Disabled = 0;
        Xrm.Page.isp_worldcurrencycard.Disabled = 0;
        Xrm.Page.isp_bidsave.Disabled = 0;
        Xrm.Page.isp_corporatepaymentcard.Disabled = 0;
        Xrm.Page.isp_businessowneridcard.Disabled = 0;
    }
    else {
        Xrm.Page.isp_randtravel.Disabled = 1;
        Xrm.Page.isp_worldcurrencycard.Disabled = 1;
        Xrm.Page.isp_bidsave.Disabled = 1;
        Xrm.Page.isp_corporatepaymentcard.Disabled = 1;
        Xrm.Page.isp_businessowneridcard.Disabled = 1;
    }
}
function address1_line1_onchange() {
    if (Xrm.Page.getAttribute("address1_line1.getValue() == null) Xrm.Page.address1_line1").setValue('');
}
function address1_postalcode_onchange() {
    if (Xrm.Page.getAttribute("address1_postalcode.getValue() == null) Xrm.Page.address1_postalcode").setValue('');
}
function address1_line2_onchange() {
    if (Xrm.Page.getAttribute("address1_line2.getValue() == null) Xrm.Page.address1_line2").setValue('');
}
function isp_province_onchange() {
    // Created on 17/01/2007 by JJ Scholtz - Removing "." as per  Tracey Lindeque - WShare
    Xrm.Page.getAttribute("address1_stateorprovince").setValue(Xrm.Page.getAttribute("isp_province").getSelectedOption().text);
    if (Xrm.Page.getAttribute("address1_stateorprovince.getValue() == null) Xrm.Page.address1_stateorprovince").setValue('');
}
function address1_line3_onchange() {
    if (Xrm.Page.getAttribute("address1_line3.getValue() == null) Xrm.Page.address1_line3").setValue('');
}
function address1_city_onchange() {
    if (Xrm.Page.getAttribute("address1_city.getValue() == null) Xrm.Page.address1_city").setValue('');
}
function address1_addresstypecode_onchange() {
}
function address1_country_onchange() {
}
function address1_stateorprovince_onchange() {
}
function address2_line1_onchange() {
    if (Xrm.Page.getAttribute("address2_line1.getValue() == null) Xrm.Page.address2_line1").setValue('');
}
function address2_postalcode_onchange() {
    if (Xrm.Page.getAttribute("address2_postalcode.getValue() == null) Xrm.Page.address2_postalcode").setValue('');
}
function address2_line2_onchange() {
    if (Xrm.Page.getAttribute("address2_line2.getValue() == null) Xrm.Page.address2_line2").setValue('');
}
function isp_province2_onchange() {
    // Created on 17/01/2007 by JJ Scholtz - Removing "." as per  Tracey Lindeque - WShare
    Xrm.Page.getAttribute("address2_stateorprovince").setValue(Xrm.Page.getAttribute("isp_province2").getSelectedOption().text);
    if (Xrm.Page.getAttribute("address2_stateorprovince.getValue() == null) Xrm.Page.address2_stateorprovince").setValue('');
}
function address2_line3_onchange() {
    if (Xrm.Page.getAttribute("address2_line3.getValue() == null) Xrm.Page.address2_line3").setValue('');
}
function address2_city_onchange() {
    if (Xrm.Page.getAttribute("address2_city.getValue() == null) Xrm.Page.address2_city").setValue('');
}
function address2_stateorprovince_onchange() {
}
function address2_country_onchange() {
}
    //Resident, Passport Check ID Validation & Date of Birth - MD**
function isp_residenttype_onchange() {
    //Residenttype check
    var strresidenttype = Xrm.Page.getAttribute("isp_residenttype");
    // Reset Defaults
    Xrm.Page.getAttribute("isp_identitynumber").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_passportnumber").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_countryofissue").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_visapermitnumber").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_visaexpirydate").setRequiredLevel("none");
    if (strresidenttype.getValue() != null) {
        switch (strresidenttype.getSelectedOption().text) {
            case "Resident":
                Xrm.Page.getAttribute("isp_identitynumber").setRequiredLevel("required");
                break;
            case "Non Resident":
                Xrm.Page.getAttribute("isp_passportnumber").setRequiredLevel("required");
                Xrm.Page.getAttribute("isp_countryofissue").setRequiredLevel("required");
                break;
            case "Temp Resident":
                Xrm.Page.getAttribute("isp_passportnumber").setRequiredLevel("required");
                Xrm.Page.getAttribute("isp_countryofissue").setRequiredLevel("required");
                Xrm.Page.getAttribute("isp_visapermitnumber").setRequiredLevel("required");
                Xrm.Page.getAttribute("isp_visaexpirydate").setRequiredLevel("required");
                break;
        }
    }
    return true;
}
function isp_passportnumber_onchange() {
    //Passport number check
    var strpassportnumber = Xrm.Page.getAttribute("isp_passportnumber");
    if (strpassportnumber.Value == ' ') {
        Xrm.Page.isp_countryofissue.Disabled = 0;
    }
    else {
        Xrm.Page.isp_countryofissue.Disabled = 1;
    }
}
function validateIDNumber(idnum) {
    // Validate Numeric & Lenth
    if (isNaN(idnum) || idnum.length != 13)
        return false;
    // Validate the date
    var dob = new Date(idnum.substring(0, 2), idnum.substring(2, 4) - 1, idnum.substring(4, 6));
    if (!(dob.getYear() == idnum.substring(0, 2) &&
          dob.getMonth() == idnum.substring(2, 4) - 1 &&
          dob.getDate() == idnum.substring(4, 6)))
        return false;
    // Validate Check Sum
    var chkSum = 0;
    for (var i = 0; i < 13; i++) {
        var tmp = (parseInt(idnum.charAt(i)) * ((i + 1) % 2 == 0 ? 2 : 1)).toString();
        for (var j = 0; j < tmp.length; j++) {
            chkSum += parseInt(tmp.charAt(j));
        }
    }
    return ((chkSum % 10) == 0);
}
function isp_identitynumber_onchange() {
    var idnum = Xrm.Page.getAttribute("isp_identitynumber").getValue();
    if (idnum.length >= 6 && !isNaN(idnum)) {
        var dob = new Date(idnum.substring(0, 2), idnum.substring(2, 4) - 1, idnum.substring(4, 6));
        if ((dob.getYear() == idnum.substring(0, 2) &&
          dob.getMonth() == idnum.substring(2, 4) - 1 &&
          dob.getDate() == idnum.substring(4, 6))) {
            Xrm.Page.getAttribute("isp_dateofbirth").setValue(dob);
        }
    }
}
function isp_opicsaccountnumber_onchange() {
var strCountry = Xrm.Page.getAttribute("isp_country");
var strCountry2 = Xrm.Page.getAttribute("isp_country2");

if (Xrm.Page.getAttribute("isp_opicsaccountnumber").getValue() != null) {
    Xrm.Page.getAttribute("isp_merlincustomertype").setRequiredLevel("required");
    // Xrm.Page.SetFieldReqLevel("isp_industrialclassification",1); Will set at later stage
    Xrm.Page.getAttribute("isp_finsurvinstitutionalsector").setRequiredLevel("required");
    Xrm.Page.getAttribute("industrycode").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_line1").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_line3").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_city").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_postalcode").setRequiredLevel("required");
    Xrm.Page.getAttribute("address2_line1").setRequiredLevel("required");
    Xrm.Page.getAttribute("address2_line3").setRequiredLevel("required");
    Xrm.Page.getAttribute("address2_city").setRequiredLevel("required");
    Xrm.Page.getAttribute("address2_postalcode").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_country").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_country2").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_countrycode").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_countryofultimaterisk").setRequiredLevel("required");
   if (strCountry.getValue() == '1') {
     Xrm.Page.getAttribute("isp_province").setRequiredLevel("required");
      }
      if (strCountry2.getValue() == '1') {
        Xrm.Page.getAttribute("isp_province2").setRequiredLevel("required");
        }
    }
}
function isp_country_onchange() {
     var strCountry = Xrm.Page.getAttribute("isp_country");
     if (strCountry.getValue() == '1') {
        Xrm.Page.getAttribute("isp_province").setRequiredLevel("required");
        }
     else {
        Xrm.Page.getAttribute("isp_province").setRequiredLevel("none");
           }
       }

function isp_country2_onchange() {
    var strCountry2 = Xrm.Page.getAttribute("isp_country2");
    if (strCountry2.getValue() == '1') {
        Xrm.Page.getAttribute("isp_province2").setRequiredLevel("required");
        }
    else {
       Xrm.Page.getAttribute("isp_province2").setRequiredLevel("none");
         }
    }
function isp_incometaxno_onchange() {
    var taxNumber = Xrm.Page.getAttribute("isp_incometaxno").getValue();

	 if (taxNumber != null && taxNumber != "") {
        if (!validateTAXNumber(taxNumber)) {
            alert("Invalid SARS Tax Number entered");
            Xrm.Page.getControl("isp_incometaxno").setFocus(true);
            event.returnValue = false;
            return false;
        }
    else return true;
     }
		}
function validateTAXNumber(number) {
    if (isNaN(number) || number.length != 10)
        return false;

        var chkTax = 0;
        for (var t = 0; t < 9; t=t+2) {
        var temp = (parseInt(number.charAt(t)) * 2).toString();
        if (temp > 9) {
        chkTax += (parseInt(temp.charAt(0))) + (parseInt(temp.charAt(1)));
        }
        else {
         chkTax = (parseInt(chkTax) + parseInt(temp));
          }
        }
       for (var a = 1; a < 8; a=a+2){
       var nexttemp = (parseInt(number.charAt(a))).toString();
       chkTax = ((parseInt(chkTax) + parseInt(nexttemp))).toString();
       }

     var x = chkTax.toString();
     var y = ((x.length) -1);
     Total = (parseInt(chkTax.charAt(y))).toString();
     if ((Total == 0) && (Total != (parseInt(number.charAt(9))))) {
     return false;
     }
     else if (Total > 0) {
     var FinalTotal = (10 - Total);
     if (FinalTotal != (parseInt(number.charAt(9)))) {
     return false;
      }
     else return true;
     }
     else return true;
     }
function isp_passportnumbercheck_onchange() {
    //Passport number check
    var strpassportnumber = Xrm.Page.getAttribute("isp_passportnumber");
    if (strpassportnumber.Value != ' ') {
        var curVal = Xrm.Page.getAttribute("isp_passportnumber.value");
		  if ( /[^A-Za-z0-9]/.test(curVal) ) {
		  alert("Only Alphanumeric characters allowed in Passportnumber, no spaces or special characters");
          setTimeout('Xrm.Page.getControl("isp_passportnumber").setFocus(true);', 50);
           event.returnValue = false;
    }
  }
}
function isp_typeoflegalentity_onchange() {
debugger
    var strLegalEntity = Xrm.Page.getAttribute("isp_typeoflegalentity").getValue();
	var CompanyRegno = Xrm.Page.getAttribute("isp_companyregistrationnumber != null || typeof(Xrm.Page.isp_companyregistrationnumber )  != "undefined" ? Xrm.Page.getAttribute("isp_companyregistrationnumber").getValue() : """);
    var strRequired = false
   if   (isRequiredAll(strLegalEntity)) {
              Xrm.Page.getAttribute("isp_companyregistrationnumber").setRequiredLevel("required");

	         if (!validateCompanyRegno(CompanyRegno)) {
                 alert("Invalid Company Registration Number entered");
				Xrm.Page.getControl("isp_companyregistrationnumber").setFocus(true);
				event.returnValue = false;
				return false;
				}
	}
    else if  (isRequiredSome(strLegalEntity)) {
		  Xrm.Page.getAttribute("isp_companyregistrationnumber").setRequiredLevel("required");
	}
	else if(isRequiredTrust(strLegalEntity) )
	{
		if (!validateCompanyRegno(CompanyRegno)) {
                 alert("Invalid Company Registration Number entered");
				Xrm.Page.getControl("isp_companyregistrationnumber").setFocus(true);
				event.returnValue = false;
				return false;
		}
	}
	else if  (isRequiredID(strLegalEntity)) {
		Xrm.Page.getAttribute("isp_identitynumber").setRequiredLevel("required");
		Xrm.Page.isp_identitynumber.Disabled = 0;
	}

	 return true;
}
function isp_companyregistrationnumber_onchange() {
    var nr = Xrm.Page.getAttribute("isp_companyregistrationnumber").getValue();
	var strLegalEntity = Xrm.Page.getAttribute("isp_typeoflegalentity").getValue();
	 if   (!isRequiredNone(strLegalEntity)) {

		    if (!validateCompanyRegno(nr)) {
            alert("Invalid Company Registration Number entered");
            Xrm.Page.getControl("isp_companyregistrationnumber").setFocus(true);
            event.returnValue = false;
            return false;
        }
    }
 }

 function validateCompanyRegno(nr) {
		  if(nr == null || typeof(nr )  == "undefined") return false;
		      var strCheck = Xrm.Page.getAttribute("isp_typeoflegalentity").getValue();
		  if(isRequiredTrust(strCheck))
                                           {
		    if(nr.indexOf("IT") == 0)
		      return true;
		       return false;
		 }
		 else{

            var datePattern = /\d{4}\/\d{6}\/\d{2}/;

            if (!nr.match(datePattern)) return false;

            var arr = nr.split("/");
            if (parseInt(arr[0]) < 1800) return false;
            if (!isInArray(arr[2])) return false;
		}
          return true;
        }
        function isInArray(nr) {
            var arr = ["06", "07", "08", "09", "10", "11", "20", "21", "22", "23", "24", "25", "26", "30", "31"];
            var found = false;
            for (var i in arr) {
                if (arr[i] == nr)
                    found = true;
            }
            return found;
        }


function isRequiredNone(strLegalEntity)
		{
			//None required for Validation
			var arr = ['6','15','16','9','23','24','25','26','27','28','11','12','13'];
			var found = false;
			for (var i in arr) {
                if (arr[i] == strLegalEntity)
                    found = true;
            }
			return found;
		}

		function isRequiredAll(strLegalEntity)
		{
			//Set Company Reg Required and Validate
			var arr = ['10','5','3','14','17','18','2','19','20','21','22','4'];
			var found = false;
			for (var i in arr) {
                if (arr[i] == strLegalEntity)
                    found = true;
            }
			return found;
		}

		function isRequiredSome(strLegalEntity)
		{
			//Set Company Reg Required
			var arr = ['11','12','13'];
			var found = false;
			for (var i in arr) {
                if (arr[i] == strLegalEntity)
                    found = true;
            }
			return found;
		}

			function isRequiredID(strLegalEntity)
		{
			//Set ID Number Required
			var arr = ['7','9'];
			var found = false;
			for (var i in arr) {
                if (arr[i] == strLegalEntity)
                    found = true;
            }
			return found;
		}
			function isRequiredTrust(strLegalEntity) {
			//Set Company Reg Required and Check begin with IT
			var arr = ['8'];
			var found = false;
			for (var i in arr) {
                if (arr[i] == strLegalEntity)
                    found = true;
            }
			return found;
		}

function isRequiredNoneOnLoad(strLegalEntity)
		{
			//None required to set Company classification
			var arr = ['6','15','16','9','23','24','25','26','27','28'];
			var found = false;
			for (var i in arr) {
                if (arr[i] == strLegalEntity)
                    found = true;
            }
			return found;
		}

function isp_companyclassification_onchange() {
Xrm.Page.getAttribute("isp_classificationdummyfield").setValue(Xrm.Page.getAttribute("isp_companyclassification").getSelectedOption().text);
Xrm.Page.getControl("isp_typeoflegalentity").setDisabled(false);
// ************************************************************************
// ** Purpose:
// **
// ** Only show Sub Classification isp_typeoflegalentity
// **
// ************************************************************************
//set references to our fields
var oCompClassValue = Xrm.Page.getAttribute("isp_companyclassification");
var oSubCompClass = Xrm.Page.getAttribute("isp_typeoflegalentity");
// keep a copy of the original options and reset the picklist before we start firking about
if (!oSubCompClass.originalPicklistValues) {
    oSubCompClass.originalPicklistValues = oSubCompClass.Options;
}
else {
    oSubCompClass.Options = oSubCompClass.originalPicklistValues;
}
// create an array to hold the required picklist values for each category
var oArrayBank = new Array();
var oArrayTrust = new Array();
var oArrayForeignOwnedCompany = new Array();
var oArrayListedCompany = new Array();
var oArrayPersonalLiabilityCompany = new Array();
var oArrayGovernment = new Array();
var oArrayNonProfit = new Array();
var oArrayCloseCorporation = new Array();
var oArrayPartnership = new Array();
var oArraySoleProprietor  = new Array();
var oArrayPrivateCompany  = new Array();
var oArrayPensionandProvidentFunds = new Array();
var oArrayMedicalAid  = new Array();
var oArrayUnlistedCompany  = new Array();
var oArrayOtherLegalPersons  = new Array();
// *** This is the bit you would edit to add/remove options to your lists *** //
oArrayBank.push(0, 10, 11);
oArrayTrust.push(0, 8, 12);
oArrayForeignOwnedCompany.push(0, 5, 13);
oArrayListedCompany.push(0, 3);
oArrayPersonalLiabilityCompany.push(0, 14);
oArrayGovernment.push(0, 15, 16, 17);
oArrayNonProfit.push(0, 6, 18);
oArrayCloseCorporation.push(0, 2);
oArrayPartnership.push(0, 7, 19);
oArraySoleProprietor.push(0, 9);
oArrayPrivateCompany.push(0, 20);
oArrayPensionandProvidentFunds.push(0, 21);
oArrayMedicalAid.push(0, 22);
oArrayUnlistedCompany.push(0, 4);
oArrayOtherLegalPersons.push(0, 23, 24, 25, 26, 27, 28);
// *** No more editing *** //
// Now call the appropriate filtering parameters
// the values in each "case" clause refer to the text in the category drop down
if (oCompClassValue.getValue() != null) {
    switch (oCompClassValue.getSelectedOption().text) {

        case 'Bank':
            filterPicklist(oArrayBank);
             break;
        case 'Trust':
            filterPicklist(oArrayTrust);
             break;

		case 'Foreign Owned Company':
            filterPicklist(oArrayForeignOwnedCompany);
             break;

		case 'Listed Company':
            filterPicklist(oArrayListedCompany);
             break;

         	case 'Personal Liability Company':
            filterPicklist(oArrayPersonalLiabilityCompany);
             break;

		case 'Government':
            filterPicklist(oArrayGovernment);
             break;
		case 'Non-Profit':
            filterPicklist(oArrayNonProfit);
             break;
		case 'Close Corporation':
            filterPicklist(oArrayCloseCorporation);
             break;

		case 'Partnership':
            filterPicklist(oArrayPartnership);
             break;

		case 'Sole proprietor':
            filterPicklist(oArraySoleProprietor);
             break;

		case 'Private Company':
            filterPicklist(oArrayPrivateCompany);
             break;
		case 'Pension and Provident Funds':
            filterPicklist(oArrayPensionandProvidentFunds);
             break;

		case 'Medical aids':
            filterPicklist(oArrayMedicalAid);
             break;

		case 'Unlisted Company':
            filterPicklist(oArrayUnlistedCompany);
             break;
		case 'Other Legal Persons':
            filterPicklist(oArrayOtherLegalPersons);
             break;
    }
}

	function filterPicklist(oDesiredOptions) {
    var oTempArray = new Array();
    // loop through all items in the master list
    for (var i = oSubCompClass.length - 1; i >= 0; i--) {
        // if the option value is in the list of desired values for this company classification
        // then add the option to our temp array and remove the
        // item from the desired option array
        for (j = oDesiredOptions.length; j >= 0; j--) {
            if (oSubCompClass[i].value == oDesiredOptions[j]) {
                oTempArray[i] = true;
                oDesiredOptions.splice(j, 1);
            }
        }
    }
    // Now remove all options from the master list that were not marked as required
    for (var i = oSubCompClass.length; i >= 0; i--) {
        if (oTempArray[i] != true) {
            oSubCompClass.remove(i)
        }
    }
}
}
 function isp_accountverification_onchange() {
 Xrm.Page.getAttribute("isp_lastverificationcompletedby").setSubmitMode("always");
 var strUser = Xrm.Page.context.getUserId()
 var strVerify = Xrm.Page.getAttribute("isp_accountverification").getValue();
     if (strVerify == '100000000') {
 Xrm.Page.getAttribute("isp_lastverificationcompletedby").setValue(null);

  }
}
 function isp_creditorid_onchange() {
 var strCreditorId = Xrm.Page.getAttribute("isp_creditorid").getValue();
     if (strCreditorId != null || strCreditorId != "" || strCreditorId != " ") {
       Xrm.Page.getAttribute("isp_companyregistrationnumber").setRequiredLevel("required");
    }
	}
function isp_businessaccount_onchange() {
 if (Xrm.Page.getAttribute("isp_businessaccount").getValue() == '1') {
   Xrm.Page.ui.tabs.get("World_Check").setVisible(true);
   Xrm.Page.isp_emidclientnumber_c.style.color = '#32cd32';
   Xrm.Page.isp_emidmainbusinessaccountnumber_c.style.color = '#32cd32';
   Xrm.Page.isp_businessaccount_c.style.color = '#32cd32';
   Xrm.Page.isp_overdraftfacility_c.style.color = '#32cd32';
   Xrm.Page.isp_authorisedcardadministrator_c.style.color = '#32cd32';
   Xrm.Page.isp_authorisedcardadministrator2_c.style.color = '#32cd32';
   Xrm.Page.isp_authorisedcardadministrator3_c.style.color = '#32cd32';
   Xrm.Page.isp_accstatementemail1_c.style.color = '#32cd32';
   Xrm.Page.isp_accnotificationemail1_c.style.color = '#32cd32';
   Xrm.Page.isp_proofofpaymentemail1_c.style.color = '#32cd32';
    Xrm.Page.isp_internetbankingperson1_c.style.color = '#32cd32';
     Xrm.Page.isp_businessaccountbdm_c.style.color = '#32cd32';
     Xrm.Page.isp_businessdebitcardrequested_c.style.color = '#32cd32';
 Xrm.Page.isp_setupinternetbanking_c.style.color = '#32cd32';
 Xrm.Page.accountratingcode_c.style.color = '#32cd32';
Xrm.Page.getAttribute("accountratingcode").setRequiredLevel("required");
     Xrm.Page.getAttribute("isp_businessaccountbdm").setRequiredLevel("required");
	 Xrm.Page.getAttribute("isp_authorisedcardadministrator").setRequiredLevel("required");
	}
   else {
         Xrm.Page.ui.tabs.get("World_Check").setVisible(false);
       }
    }


  function isp_customertype_onchangeEVO() {

   var evoOpicsCustomerType = Xrm.Page.getAttribute("isp_customertype");

        switch (evoOpicsCustomerType.getSelectedOption().text) {
            case 'Individual [I]':
			 Xrm.Page.ui.tabs.get("World_Check").setVisible(true);
             Xrm.Page.SetFieldReqLevel("isp_emat", 1)
             Xrm.Page.getAttribute("isp_sof").setRequiredLevel("required");
			 Xrm.Page.getAttribute("isp_employername").setRequiredLevel("required");
			 Xrm.Page.getAttribute("industrycode").setRequiredLevel("required");
                break;
            case 'Corporate [C]':
    alert('Please create profile on the EVO System');
             break;
            case 'Bank [B]':
    alert('Please create profile on the EVO System');
                break;
            case 'Broker [K]':
			alert('Please create profile on the EVO System');
                break;
            case 'Financial Institution [F]':
    alert('Please create profile on the EVO System');
                break;
            case 'Other [O]':
			alert('Please create profile on the EVO System');
                break;
        }
    }
  function isp_lastcertificatechecked_onchange() {
lccdate_changed = true;
 Xrm.Page.getAttribute("isp_lccdatechecked").setSubmitMode("always");
 var currentDateTime = new Date();
 Xrm.Page.getAttribute("isp_lccdatechecked").setValue(currentDateTime);

}
function isp_emat_onchange() {
     var strEmat = Xrm.Page.getAttribute("isp_emat").getValue();
      var strCustType = Xrm.Page.getAttribute("isp_customertype").getValue();

	  //Reset Defaults
	  Xrm.Page.getAttribute("isp_rer").setRequiredLevel("none");
      if ((strEmat == '4' || strEmat == '5' || strEmat == '6') && strCustType == '4') {
        Xrm.Page.getAttribute("isp_rer").setRequiredLevel("required");
        }
     }
function isp_rer_onchange() {
     var strReR = Xrm.Page.getAttribute("isp_rer").getValue();

	 // Reset Defaults
	 Xrm.Page.getAttribute("isp_rerother").setRequiredLevel("none");

         if (strReR == '6') {
        Xrm.Page.getAttribute("isp_rerother").setRequiredLevel("required");
        Xrm.Page.isp_rerother_c.style.color = '#ff0000';
        Xrm.Page.getControl("isp_rerother").setFocus(true);
        }
       }

     function isp_sof_onchange() {
     var strSoF = Xrm.Page.getAttribute("isp_sof").getValue();
	 //Reset Defaults
	 Xrm.Page.getAttribute("isp_sofother").setRequiredLevel("none");

        if (strSoF == '8') {
        Xrm.Page.getAttribute("isp_sofother").setRequiredLevel("required");
        Xrm.Page.isp_sofother_c.style.color = '#ff0000';
        Xrm.Page.getControl("isp_sofother").setFocus(true);
        }
      }

     function isp_sow_onchange() {
     var strSoW = Xrm.Page.getAttribute("isp_sow").getValue();

	 //Reset Defaults
	 Xrm.Page.getAttribute("isp_sowother").setRequiredLevel("none");

        if (strSoW == '5') {
        Xrm.Page.getAttribute("isp_sowother").setRequiredLevel("required");
        Xrm.Page.isp_sowother_c.style.color = '#ff0000';
        Xrm.Page.getControl("isp_sowother").setFocus(true);
        }
        }
function isp_worldcheckconfirm_onchange() {
     var strWCheck = Xrm.Page.getAttribute("isp_worldcheckconfirmation").getValue();
	 var strCustType = Xrm.Page.getAttribute("isp_customertype").getValue();
      if ((strWCheck == '1') && strCustType == '4') {
        Xrm.Page.getAttribute("isp_riskrating").setRequiredLevel("required");
        }
      }
	 function isp_riskrating_onchange() {
     var strRisk = Xrm.Page.getAttribute("isp_riskrating").getValue();
	 var strEmatVal = Xrm.Page.getAttribute("isp_emat").getValue();

	 //Reset Defaults
	  Xrm.Page.getAttribute("isp_sow").setRequiredLevel("none");
		Xrm.Page.getAttribute("isp_incomebracket").setRequiredLevel("none");
      if ((strRisk == '1') && strEmatVal == '6') {
        Xrm.Page.getAttribute("isp_sow").setRequiredLevel("required");
		Xrm.Page.getAttribute("isp_incomebracket").setRequiredLevel("required");
		Xrm.Page.getControl("isp_sow").setFocus(true);
		       }
			   else if (strRisk == '1'){
			    Xrm.Page.getAttribute("isp_incomebracket").setRequiredLevel("required");


		 }
}
function isp_accountverifiy_onchange() {
     var strWChecks = Xrm.Page.getAttribute("isp_worldcheckconfirmation").getValue();
	 var strCustTyp = Xrm.Page.getAttribute("isp_customertype").getValue();
	  var strVerifyValue = Xrm.Page.getAttribute("isp_accountverification").getValue();
	  var strEmat = Xrm.Page.getAttribute("isp_emat").getValue();
      if (strEmat != null && strCustTyp == '4' && strVerifyValue == '100000000' && strWChecks == '0')  {
        alert("World Check Confirmation not Completed");
        }
      }
