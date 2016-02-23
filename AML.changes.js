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


lccdate_changed = false;

var strEvoD = crmForm.all.isp_evocustomerid.DataValue;
if (strEvoD == null) {
if (Xrm.Page.ui.tabs.get("World_Check") != null) {
   Xrm.Page.ui.tabs.get("World_Check").setVisible(false);
 }
}

var strCustType = crmForm.all.isp_customertype.DataValue;
var strEmatVal = crmForm.all.isp_emat.DataValue;
if ((strCustType == '4') && (strEmatVal != null))  {
   Xrm.Page.ui.tabs.get("World_Check").setVisible(true);
 }


 var DebtorId = crmForm.all.isp_fadebtors.DataValue;
     if (DebtorId == null || DebtorId == "" || DebtorId == " ") {
        document.all.IFRAME_FA_Facilities.src = 'about:blank';
        document.all.IFRAME_Leasing_Docs.src = 'about:blank';
    } 
         else {
        document.all.IFRAME_FA_Facilities.src = 'http://jhbh-srv-msp01:8008/FleetToCRM/view_Facility.aspx?acc=' + DebtorId;
        document.all.IFRAME_Leasing_Docs.src = 'http://jhbh-srv-dms01/crmcounts/leasingcorporatedocuments.aspx?accountnr=' + DebtorId;
    };

    var CreditorId = crmForm.all.isp_creditorid.DataValue;
     if (CreditorId == null || CreditorId == "" || CreditorId == " ") {
        document.all.IFRAME_Suppliers.src = 'about:blank';
        } 
    else {
        document.all.IFRAME_Suppliers.src = 'http://jhbh-srv-dms01/crmcounts/supplierDocuments.aspx?creditorid='  + CreditorId;
       crmForm.SetFieldReqLevel("isp_companyregistrationnumber", 1);
    };

if (crmForm.all.isp_faaccount.DataValue == '1' ) {
    var controls = Xrm.Page.ui.controls.get();
      for (var i in controls){
       var control = controls[i];
         if (!control.getDisabled()){
           control.setDisabled(true);
            }
        }
    }

    var OpicsCustNo = crmForm.all.isp_opicsaccountnumber.DataValue;
    var accountId = crmFormSubmit.crmFormSubmitId.value;
    accountId = accountId.substring(1, accountId.length - 1);
    if (accountId == null || accountId == "" || accountId == " ") {
        document.all.IFRAME_DMS_Documents.src = 'about:blank';
    } else {
       // document.all.IFRAME_DMS_Documents.src = 'http://jhbh-srv-dms01/crmcounts/CrmViewAccountDocumentsonly.aspx?AccountId=' + accountId;
		document.all.IFRAME_DMS_Documents.src = 'http://jhbh-srv-dms01/crmcounts/CorpAdmin.aspx?AccountId=' + accountId +'&OpicsCustNo=' + OpicsCustNo + '&DebtorId='+DebtorId;
    };

if (accountId == null || accountId == "" || accountId == " ") {
        document.all.IFRAME_World_Check.src = 'about:blank';
    } else {
        document.all.IFRAME_World_Check.src = 'http://jhbh-uat-crm01:8008/CrmWorldCheck.html?AccountId=' + accountId;
    };

//set Fields hidden for EVO Intergation
if (crmForm.all.isp_evocustomerid.DataValue != null) {
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
//  Xrm.Page.getControl("isp_opicsaccountnumber").setDisabled(true);
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
//  Xrm.Page.getControl("isp_fica").setDisabled(true);
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


//Set fields to Mandatory for Merlin and Opics - WS 2013-10-01
    var strCountry = crmForm.all.isp_country;
    var strCountry2 = crmForm.all.isp_country2;
	var strCustType = crmForm.all.isp_customertype;
    
if (crmForm.all.isp_opicsaccountnumber.DataValue != null) {
    crmForm.SetFieldReqLevel("isp_merlincustomertype", 1);
    crmForm.SetFieldReqLevel("fax", 1);
    // crmForm.SetFieldReqLevel("isp_industrialclassification",1); - Will set at later stage
    crmForm.SetFieldReqLevel("isp_finsurvinstitutionalsector", 1);
    crmForm.SetFieldReqLevel("industrycode", 1);
    crmForm.SetFieldReqLevel("address1_line1", 1);
    crmForm.SetFieldReqLevel("address1_line3", 1);
    crmForm.SetFieldReqLevel("address1_city", 1);
    crmForm.SetFieldReqLevel("address1_postalcode", 1);
    crmForm.SetFieldReqLevel("address2_line1", 1);
    crmForm.SetFieldReqLevel("address2_line3", 1);
    crmForm.SetFieldReqLevel("address2_city", 1);
    crmForm.SetFieldReqLevel("address2_postalcode", 1);
    crmForm.SetFieldReqLevel("isp_country", 1);
    crmForm.SetFieldReqLevel("isp_country2", 1);
    crmForm.SetFieldReqLevel("isp_countrycode", 1);
    crmForm.SetFieldReqLevel("isp_countryofultimaterisk", 1);

   if (strCountry.DataValue == '1') {
     crmForm.SetFieldReqLevel("isp_province", 1);
       if (strCountry2.DataValue == '1') {
        crmForm.SetFieldReqLevel("isp_province2", 1);
        }
   }


   //Check if Opics Customer Type equals Corporate and set Legal Entity as required
         if (strCustType.DataValue == '2') {
     crmForm.SetFieldReqLevel("isp_typeoflegalentity", 1);
	 crmForm.SetFieldReqLevel("isp_companyclassification", 1)
	 }
}

   //Check  Company Sub Classification and set Company Reg Required
   var strSubClass = crmForm.all.isp_typeoflegalentity.DataValue;
         if   (!isRequiredNoneOnLoad(strSubClass) && strSubClass != null) {
             crmForm.SetFieldReqLevel("isp_companyregistrationnumber", 1);	
		}

  //Check Company Classification if null Disable Sub Classification
      var strClass = crmForm.all.isp_companyclassification.DataValue;
           if (strClass == null || strClass == "" || strClass == " ") { 
               crmForm.all.isp_typeoflegalentity.Disabled = true;
	   }

//  Adding Red Labels to important fields - WS
crmForm.all.isp_industrialclassification_c.style.color = '#ff0000';
crmForm.all.isp_finsurvinstitutionalsector_c.style.color = '#ff0000';
crmForm.all.isp_typeoflegalentity_c.style.color = '#ff0000';
crmForm.all.isp_companyclassification_c.style.color = '#ff0000';
crmForm.all.industrycode_c.style.color = '#ff0000';
crmForm.all.isp_tradingname_c.style.color = '#ff0000';
crmForm.all.isp_newoccupation_c.style.color = '#ff0000';
crmForm.all.isp_vatregistrationnumber_c.style.color = '#ff0000';
crmForm.all.isp_incometaxno_c.style.color = '#ff0000';
crmForm.all.telephone1_c.style.color = '#ff0000';
crmForm.all.address1_line1_c.style.color = '#ff0000';
crmForm.all.address1_line3_c.style.color = '#ff0000';
crmForm.all.address1_city_c.style.color = '#ff0000';
crmForm.all.address1_postalcode_c.style.color = '#ff0000';
crmForm.all.address2_line1_c.style.color = '#ff0000';
crmForm.all.address2_line3_c.style.color = '#ff0000';
crmForm.all.address2_city_c.style.color = '#ff0000';
crmForm.all.address2_postalcode_c.style.color = '#ff0000';
crmForm.all.isp_province_c.style.color = '#ff0000';
crmForm.all.isp_province2_c.style.color = '#ff0000';
crmForm.all.isp_country_c.style.color = '#ff0000';
crmForm.all.isp_country2_c.style.color = '#ff0000';
crmForm.all.isp_countrycode_c.style.color = '#ff0000';
crmForm.all.isp_countryofultimaterisk_c.style.color = '#ff0000';
crmForm.all.isp_branches_c.style.color = '#ff0000';
crmForm.all.isp_companyregistrationnumber_c.style.color = '#ff0000';
crmForm.all.isp_accountname_c.style.color = '#ff0000';
crmForm.all.fax_c.style.color = '#ff0000';
crmForm.all.isp_natureofbusiness_c.style.color = '#ff0000';
crmForm.all.primarycontactid_c.style.color = '#ff0000';
crmForm.all.isp_evocustomerid.Disabled = true;
crmForm.all.isp_worldcheckconfirmation_c.style.color = '#ff0000';
crmForm.all.isp_emidclientnumber.Disabled = true;
crmForm.all.isp_emidmainbusinessaccountnumber.Disabled = true;

//set Fields Labels for Business Account

if (crmForm.all.isp_businessaccount.DataValue == '1') {
   crmForm.all.isp_emidclientnumber_c.style.color = '#32cd32';
   crmForm.all.isp_emidmainbusinessaccountnumber_c.style.color = '#32cd32';
   crmForm.all.isp_businessaccount_c.style.color = '#32cd32';
   crmForm.all.isp_overdraftfacility_c.style.color = '#32cd32';
   crmForm.all.isp_authorisedcardadministrator_c.style.color = '#32cd32';
   crmForm.all.isp_authorisedcardadministrator2_c.style.color = '#32cd32';
   crmForm.all.isp_authorisedcardadministrator3_c.style.color = '#32cd32';
   crmForm.all.isp_internetbankingperson1_c.style.color = '#32cd32';
  crmForm.all.isp_accstatementemail1_c.style.color = '#32cd32';
  crmForm.all.isp_accnotificationemail1_c.style.color = '#32cd32';
  crmForm.all.isp_proofofpaymentemail1_c.style.color = '#32cd32';
  crmForm.all.isp_businessaccountbdm_c.style.color = '#32cd32'; 
 crmForm.all.isp_businessdebitcardrequested_c.style.color = '#32cd32';
 crmForm.all.isp_setupinternetbanking_c.style.color = '#32cd32';
 crmForm.SetFieldReqLevel("isp_businessaccountbdm", 1);
  crmForm.SetFieldReqLevel("isp_authorisedcardadministrator", 1);
  
}
//    crmForm.all.isp_residenttype.Disabled = 1;

    try {
        document.all.navQuotes.style.display = 'none';
        document.all.navOrders.style.display = 'none';
        document.all.navInvoices.style.display = 'none';
    } catch (ex) { }

    if (crmForm.FormType < 5) {
        /*
        Modified on 17/01/2007 by JJ Scholtz
        Code to hide address(1,2)_country,
        Set address_country(1,2) equal to isp_country's default value
        same for province
               crmForm.all.isp_integrationstatus_c.style.display = 'none';
        crmForm.all.isp_integrationstatus_d.style.display = 'none';
        crmForm.all.isp_fxpaynetparty_c.style.display = 'none';
        crmForm.all.isp_fxpaynetparty_d.style.display = 'none';
        crmForm.all.isp_fxtravelex_c.style.display = 'none';
        crmForm.all.isp_fxtravelex_d.style.display = 'none';
        crmForm.all.isp_fxbidvestbank_c.style.display = 'none';
        crmForm.all.isp_fxbidvestbank_d.style.display = 'none';
        crmForm.all.isp_branchid_c.style.display = 'none';
        crmForm.all.isp_branchid_d.style.display = 'none';
        crmForm.all.isp_salespersonid_c.style.display = 'none';
        crmForm.all.isp_salespersonid_d.style.display = 'none';
        crmForm.all.name_c.style.display = 'none';
        crmForm.all.name_d.style.display = 'none';
 */

        var s = new String();
        s = crmForm.all.isp_integrationstatus.DataValue;
        if ((s != null) && (s.indexOf("Created") >= 0) && (crmForm.all.isp_opicsaccountnumber.DataValue != null)) crmForm.all.isp_accounttype.Disabled = true;

        crmForm.all.address1_country_c.style.display = 'none';
        crmForm.all.address1_country_d.style.display = 'none';
        crmForm.all.address1_country.DataValue = crmForm.all.isp_country.SelectedText;

        crmForm.all.address1_stateorprovince_c.style.display = 'none';
        crmForm.all.address1_stateorprovince_d.style.display = 'none';
        crmForm.all.address1_stateorprovince.DataValue = crmForm.all.isp_province.SelectedText;

        crmForm.all.address2_country_c.style.display = 'none';
        crmForm.all.address2_country_d.style.display = 'none';
        crmForm.all.address2_country.DataValue = crmForm.all.isp_country2.SelectedText;

        crmForm.all.address2_stateorprovince_c.style.display = 'none';
        crmForm.all.address2_stateorprovince_d.style.display = 'none';
        crmForm.all.address2_stateorprovince.DataValue = crmForm.all.isp_province2.SelectedText;


        if (crmForm.all.isp_fica.DataValue == null) {
            crmForm.all.isp_fica.DataValue = false;
        }

        if (crmForm.all.isp_creditactcompliant.DataValue == null) {
            crmForm.all.isp_creditactcompliant.DataValue = false;
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
            crmForm.all.isp_bankname.Disabled = false;
            crmForm.all.isp_bankaccountnumber.Disabled = false;
            crmForm.all.isp_bankbranchcode.Disabled = false;
        }
        //crmForm.all.IFRAME_Agent.style.height = "19px";
        crmForm.all.IFRAME_BackOffice.style.height = "19px";

        if (crmForm.all.isp_generatecrediteaseaccountnumber.DataValue == true) {
            crmForm.all.isp_generatecrediteaseaccountnumber.disabled = true;
        }

        crmForm.all.isp_shortname.disabled = true;

        var tmpString = crmForm.all.isp_firstname.DataValue;
        var tmpString2 = crmForm.all.isp_lastname.DataValue;
        var tmpString3 = crmForm.all.isp_accountname.DataValue;

        if (tmpString3 != null) {
            crmForm.SetFieldReqLevel("isp_firstname", 0);
            crmForm.SetFieldReqLevel("isp_lastname", 0);
            crmForm.SetFieldReqLevel("isp_accountname", 2);
            crmForm.all.isp_lastname.DataValue = null;
            crmForm.all.isp_firstname.DataValue = null;
            crmForm.all.isp_lastname.Disabled = true;
            crmForm.all.isp_firstname.Disabled = true;
            crmForm.all.isp_title.Disabled = true;

        }
        else if (tmpString != null || tmpString2 != null) {
            crmForm.SetFieldReqLevel("isp_firstname", 2);
            crmForm.SetFieldReqLevel("isp_lastname", 2);
            crmForm.SetFieldReqLevel("isp_accountname", 0);
            crmForm.all.isp_accountname.Disabled = true;

        }
        else {
            crmForm.SetFieldReqLevel("isp_firstname", 2);
            crmForm.SetFieldReqLevel("isp_lastname", 2);
            crmForm.SetFieldReqLevel("isp_accountname", 2);
        }
    }

    var opicsField = crmForm.all.isp_opicsaccountnumber;
    var opicsNo = opicsField.DataValue;
    if (opicsNo != null) {
        if (opicsNo.length > 0) {
            opicsField.Disabled = true;
        }
    }

    //Morne Code Added for Products

    //Retail forex check
    var strRetailForex = crmForm.all.isp_retailforex;

    if (strRetailForex.DataValue == '0') {
        crmForm.all.isp_travellerscheques.Disabled = 1;
        crmForm.all.isp_telegraphictransfers.Disabled = 1;
        crmForm.all.isp_drafts.Disabled = 1;
        crmForm.all.isp_banknotes.Disabled = 1;
        crmForm.all.isp_cashpassport.Disabled = 1;
        crmForm.all.isp_businessowneridrf.Disabled = 1;
    }

//var strCashCollateral =  crmForm.all.isp_cashcollateral;

   // if (strCashCollateral == '6') {
      //  crmForm.all.isp_cashcol1.Disabled = 1;
       // crmForm.all.isp_newstartamount1.Disabled = 1;
       // crmForm.all.isp_newendamount1.Disabled = 0;
       // crmForm.all.isp_cashcol1.Disabled = 0;
      //  crmForm.all.isp_newstartamount1.Disabled = 0;
      //  crmForm.all.isp_newendamount1.Disabled = 0;
      //  crmForm.all.isp_cashcol1.Disabled = 0;
       // crmForm.all.isp_newstartamount1.Disabled = 0;
       // crmForm.all.isp_newendamount1.Disabled = 0;
     //   crmForm.all.isp_cashcol1.Disabled = 0;
      //  crmForm.all.isp_newstartamount1.Disabled = 0;
     //   crmForm.all.isp_newendamount1.Disabled = 0;


  //  }

 //Cash Collateral check
   var strCashCollateral =  crmForm.all.isp_cashcollateral;
   var strTimed = crmForm.all.isp_timedfec;

  if (strCashCollateral.DataValue == '6' && strTimed.DataValue == '1') {
	   crmForm.all.isp_newstartamount1.Disabled = 1;
       crmForm.all.isp_newendamount1.Disabled = 1;
       crmForm.all.isp_newstartamount2.Disabled = 1;
       crmForm.all.isp_newendamount2.Disabled = 1;
       crmForm.all.isp_newstartamount3.Disabled = 1;
       crmForm.all.isp_newendamount3.Disabled = 1;
       crmForm.all.isp_newstartamount4.Disabled = 1;
       crmForm.all.isp_newendamount4.Disabled = 1;  
       crmForm.all.isp_newdays1.Disabled = 0;	
	   crmForm.all.isp_newdays2.Disabled = 0;
	   crmForm.all.isp_newdays3.Disabled = 0;
	   crmForm.all.isp_newdays4.Disabled = 0;	  
  }
  else if (strCashCollateral.DataValue == '6' && strTimed.DataValue == '0') {
	   crmForm.SetFieldReqLevel("isp_timedfec", 1);
	   crmForm.all.isp_newstartamount1.Disabled = 0;
       crmForm.all.isp_newendamount1.Disabled = 0;
       crmForm.all.isp_newstartamount2.Disabled = 0;
       crmForm.all.isp_newendamount2.Disabled = 0;
       crmForm.all.isp_newstartamount3.Disabled = 0;
       crmForm.all.isp_newendamount3.Disabled = 0;
       crmForm.all.isp_newstartamount4.Disabled = 0;
       crmForm.all.isp_newendamount4.Disabled = 0;  
       crmForm.all.isp_newdays1.Disabled = 1;	
	   crmForm.all.isp_newdays2.Disabled = 1;
	   crmForm.all.isp_newdays3.Disabled = 1;
	   crmForm.all.isp_newdays4.Disabled = 1;	
	  } 
	   else {
	   
        crmForm.all.isp_timedfec.Disabled = 1;
        crmForm.all.isp_cashcol1.Disabled = 1;
		crmForm.all.isp_newdays1.Disabled = 1;
        crmForm.all.isp_newstartamount1.Disabled = 1;
        crmForm.all.isp_newendamount1.Disabled = 1;
        crmForm.all.isp_cashcol2.Disabled = 1;
		crmForm.all.isp_newdays2.Disabled = 1;
        crmForm.all.isp_newstartamount2.Disabled = 1;
        crmForm.all.isp_newendamount2.Disabled = 1;
        crmForm.all.isp_cashcol3.Disabled = 1;
		crmForm.all.isp_newdays3.Disabled = 1;
        crmForm.all.isp_newstartamount3.Disabled = 1;
        crmForm.all.isp_newendamount3.Disabled = 1;
        crmForm.all.isp_cashcol4.Disabled = 1;
		crmForm.all.isp_newdays4.Disabled = 1;
        crmForm.all.isp_newstartamount4.Disabled = 1;
        crmForm.all.isp_newendamount4.Disabled = 1;

   }


    //Lending check
    var strLending = crmForm.all.isp_lending;

    if (strLending.DataValue == '0') {
        crmForm.all.isp_othersecuredloans.Disabled = 1;
        crmForm.all.isp_rentals.Disabled = 1;
        crmForm.all.isp_unsecuredloans.Disabled = 1;
        crmForm.all.isp_mortages.Disabled = 1;
        crmForm.all.isp_instalmentsales.Disabled = 1;
        crmForm.all.isp_businessowneridlending.Disabled = 1;
    }

    //Corporate Forex check
    var strCorpForex = crmForm.all.isp_corporateforex;

    if (strCorpForex.DataValue == '0') {
        crmForm.all.isp_treasurydirect.Disabled = 1;
        crmForm.all.isp_fxpaynet.Disabled = 1;
        crmForm.all.isp_businessowneridcf.Disabled = 1;
    }

    //Deposits check
    var strDeposits = crmForm.all.isp_deposits;

    if (strDeposits.DataValue == '0') {
        crmForm.all.isp_notice.Disabled = 1;
        crmForm.all.isp_call.Disabled = 1;
        crmForm.all.isp_fixed.Disabled = 1;
        crmForm.all.isp_businessowneriddep.Disabled = 1;
    }

 //Customer types check **
    var strcustomertype = crmForm.all.isp_customertype;

    if (strcustomertype.DataValue == '4') {
        crmForm.all.isp_residenttype.Disabled = 1;

    }

    //Resident types check
    var strresidenttype = crmForm.all.isp_residenttype;

    if (strresidenttype.DataValue == '5') {
        crmForm.all.isp_residenttype.Disabled = 1;

    }

    //Passport number types check
    var strpassportnumber = crmForm.all.isp_passportnumber;

    if (strpassportnumber.Value == '') {
        crmForm.all.isp_countryofissue.Disabled = 1;

    }
    //Card check
    var strCard = crmForm.all.isp_card;

    if (strCard.DataValue == '0') {
        crmForm.all.isp_randtravel.Disabled = 1;
        crmForm.all.isp_worldcurrencycard.Disabled = 1;
        crmForm.all.isp_bidsave.Disabled = 1;
        crmForm.all.isp_corporatepaymentcard.Disabled = 1;
        crmForm.all.isp_businessowneridcard.Disabled = 1;
    }

     isp_customertype_onchange();
     isp_residenttype_onchange();

    //Morne Code Added for Products


    {
        var oPickList = crmForm.all.isp_creditstatus;

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


//Set User if LCC Date ahs changed for Suppliers

 var strUser2 = Xrm.Page.context.getUserId();
var lccdatenew = crmForm.all.isp_lastcertificatechecked.DataValue;
 Xrm.Page.getAttribute("isp_lcccheckedby").setSubmitMode("always");
      if (lccdate_changed) {
 Xrm.Page.getAttribute("isp_lcccheckedby").setValue([{ id: strUser2}]);
  }

 var bownedmen = crmForm.all.isp_blackowned_persentage.DataValue;
     if (bownedmen == null || bownedmen == "" || bownedmen == " ") {
        crmForm.all.isp_blackowned_persentage.DataValue = 0.00;
		}

 var bownedwomen = crmForm.all.isp_blackfemaleowned_persentage.DataValue;
     if (bownedwomen == null || bownedwomen == "" || bownedwomen == " ") {
        crmForm.all.isp_blackfemaleowned_persentage.DataValue = 0.00;
		}
		

 OnSave_SearchNames();

/*
var strEvo = crmForm.all.isp_evocustomerid.DataValue;
     if (strEvo != null) {
       OnSave_SearchNames();
       }
	   */

/* -- Preventing creation of Accounts on EVO Rollout!!!!
var strEvos = crmForm.all.isp_evocustomerid.DataValue;
	
        if (strEvos == null) {
           alert('CRM Accounts currently Disabled!!!!');
            event.returnValue = false;
            return false;
        }
*/        

var strOpicsnr = crmForm.all.isp_opicsaccountnumber.DataValue;
if (strOpicsnr != null)  {
var strCheck = strOpicsnr.charAt(0);
var strCreated = crmForm.all.createdon.DataValue;
var strEvo = crmForm.all.isp_evocustomerid.DataValue;

        if ((strCheck == '1' || strCheck == '2' || strCheck == '4' || strCheck == '5') && strEvo == null) {
           alert('Please create/update profile on the EVO System');
            event.returnValue = false;
            return false;
        }
}

 Xrm.Page.getAttribute("isp_lastverificationcompletedby").setSubmitMode("always");
 var strUser1 = Xrm.Page.context.getUserId();
 var strVerify1 = crmForm.all.isp_accountverification.DataValue;

      if (strVerify1 == '100000000') {
 Xrm.Page.getAttribute("isp_lastverificationcompletedby").setValue([{ id: strUser1}]);
  } 

    var strAccountname = crmForm.all.name.DataValue;
    var strAccountShortname = crmForm.all.isp_shortname.DataValue;
    var strISPName = crmForm.all.isp_accountname.DataValue;
    //var strIntegrationStatus = crmForm.all.isp_integrationstatus.DataValue;

    //strIntegrationStatus = 'Ready';
    crmForm.all.isp_integrationstatus.DataValue = 'Ready';
    crmForm.all.isp_integrationstatus.ForceSubmit = true;
    crmForm.all.name.DataValue = strISPName;
    crmForm.all.isp_shortname.DataValue = strISPName;
    crmForm.all.isp_firstname.ForceSubmit = true;
    crmForm.all.isp_lastname.ForceSubmit = true;
    crmForm.all.isp_accountname.ForceSubmit = true;
    crmForm.all.name.ForceSubmit = true;
    crmForm.all.isp_shortname.ForceSubmit = true;

    tmpString = crmForm.all.isp_firstname.DataValue;
    tmpString2 = crmForm.all.isp_lastname.DataValue;
    tmpString3 = crmForm.all.isp_accountname.DataValue;
    var strString
    var tmpInt
    var splitLength


    if (tmpString2 != null && tmpString != null) {
        crmForm.all.isp_shortname.disabled = false;
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

        //crmForm.all.isp_shortname.DataValue = strString;
        crmForm.all.isp_shortname.disabled = true;
        crmForm.all.isp_shortname.DataValue = strString;
        crmForm.all.isp_shortname.ForceSubmit = true;
        crmForm.all.name.DataValue = strString;
        crmForm.all.name.ForceSubmit = true;


    }
    else if (tmpString3 != null) {
        crmForm.all.isp_shortname.disabled = false;
        //crmForm.all.isp_shortname.DataValue = tmpString3;
        crmForm.all.isp_shortname.disabled = true;
        crmForm.all.isp_shortname.disabled = true;
        crmForm.all.isp_shortname.DataValue = strISPName;
        crmForm.all.isp_shortname.ForceSubmit = true;
        crmForm.all.name.DataValue = strISPName;
        crmForm.all.name.ForceSubmit = true;

    }

     //Passport Check for funnies
       var PassNumber = crmForm.all.isp_passportnumber.DataValue;

       if (PassNumber != null) {
           var curVal1 = crmForm.all.isp_passportnumber.DataValue;
              if ( /[^A-Za-z0-9]/.test(curVal1) ) { 
               alert("Only Alphanumeric characters allowed in Passportnumber, no spaces or special characters");
               setTimeout('crmForm.all.isp_passportnumber.SetFocus();', 50);
               event.returnValue = false;
                }
           }

  // Company Registration Check when Saving
  
  var nr = crmForm.all.isp_companyregistrationnumber.DataValue;
	var strLegalEntity = crmForm.all.isp_typeoflegalentity.DataValue;
	 if   (!isRequiredNone(strLegalEntity) && strLegalEntity != null) {
    
		    if (!validateCompanyRegno(nr)) {
            alert("Invalid Company Registration Number entered");
            crmForm.all.isp_companyregistrationnumber.SetFocus();
            event.returnValue = false;
            return false;
        }		

 }	 

   // Income Tax Number Check **
    var taxNumber = crmForm.all.isp_incometaxno.DataValue;

    if (taxNumber != null && taxNumber != "") {
        if (!validateTAXNumber(taxNumber)) {
            alert("Invalid SARS Tax Number entered");
            crmForm.all.isp_incometaxno.SetFocus();
            event.returnValue = false;
            return false;
        }
    else return true;
     }

    //ID Number Check and Date of Birth **
    var idNumber = crmForm.all.isp_identitynumber.DataValue;

    if (idNumber != null && idNumber != "") {
        if (!validateIDNumber(idNumber)) {
            alert("Invalid ID Number entered");
            crmForm.all.isp_identitynumber.SetFocus();
            event.returnValue = false;
            return false;
        }
    }

    var curdob = crmForm.all.isp_dateofbirth.DataValue;

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
            crmForm.all.isp_dateofbirth.SetFocus();
            event.returnValue = false;
            return false;
        }
    }


    if (crmForm.FormType < 3) {
        var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");

        xmlDoc.async = false;
        var s;

        s = "/isp-asp/dupcheck.aspx?regno="
        if (crmForm.all.isp_companyregistrationnumber.DataValue != undefined) s += escape(crmForm.all.isp_companyregistrationnumber.DataValue);
        s += "&custno="
        s += "&accountid="
        if (crmForm.ObjectId != undefined)
            s += escape(crmForm.ObjectId);

        s += "&entity=account&new=";
        if (crmForm.FormType == 1) { s += "yes"; }
        if (crmForm.FormType == 2) {
            if (crmForm.all.isp_companyregistrationnumber.IsDirty) { s += "yes"; } else { s += "no"; };
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
    if (crmForm.all.isp_opicsaccountnumber.DataValue != null)
         if (crmForm.all.isp_opicsaccountnumber.DataValue.length != 10) {
        alert("Please ensure the opics number is the correct length");
        setTimeout('crmForm.all.isp_opicsaccountnumber.SetFocus();', 50);
        event.returnValue = false;
    }
}

//if (crmForm.all.CreatedBy.DataValue == crmForm.all.ModifiedBy.DataValue) {
// alert ("You cannot modify a record which you created")
// event.returnValue = false;
//}


function isp_creditstatus_onchange() {
    {
        var oPickList = crmForm.all.isp_creditstatus;

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

    tmpString = crmForm.all.isp_firstname.DataValue;
    tmpString2 = crmForm.all.isp_lastname.DataValue;
    tmpString3 = crmForm.all.isp_accountname.DataValue;
    tmpString4 = crmForm.all.isp_accountname.DataValue;
    crmForm.SetFieldReqLevel("isp_companyregistrationnumber", 0); 
    crmForm.SetFieldReqLevel("isp_branches", 0);
    crmForm.all.isp_branches.DataValue = undefined;
    var strString
    var strAccountname = crmForm.all.name;
    var strAccountShortname = crmForm.all.isp_shortname;
    var tmpStringName = crmForm.all.isp_accountname.DataValue

    var tmpStringName = crmForm.all.isp_accountname.DataValue

    if (tmpStringName != null) {
        crmForm.SetFieldReqLevel("isp_firstname", 0);
        crmForm.SetFieldReqLevel("isp_lastname", 0);
        // crmForm.SetFieldReqLevel("isp_companyregistrationnumber", 1)
        crmForm.SetFieldReqLevel("isp_branches", 1);
        crmForm.all.isp_firstname.Disabled = true;
        crmForm.all.isp_lastname.Disabled = true;
        crmForm.all.isp_title.Disabled = true;
        strAccountname = tmpStringName;
        strAccountShortname = tmpStringName;
        crmForm.all.name.ForceSubmit = true;
        crmForm.all.isp_shortname.ForceSubmit = true;
        var res  = tmpString4.replace(/'/gi, " ");  //This will remove apostrophe's 
       crmForm.all.isp_accountname.DataValue = res;



    }
    else {
        crmForm.SetFieldReqLevel("isp_firstname", 2);
        crmForm.SetFieldReqLevel("isp_lastname", 2);

        crmForm.all.isp_firstname.Disabled = false;
        crmForm.all.isp_lastname.Disabled = false;
        crmForm.all.isp_title.Disabled = false;
 //       crmForm.all.isp_accountname.DataValue = ".";
    }
}
function isp_firstname_onchange() {
    debugger


    tmpString = crmForm.all.isp_firstname.DataValue;
    tmpString2 = crmForm.all.isp_lastname.DataValue;
    tmpString3 = crmForm.all.isp_accountname.DataValue;
     tmpString5 = crmForm.all.isp_firstname.DataValue;
    var strString
    var tmpInt
    var splitLength

    if (tmpString2 != null && tmpString != null) {
        crmForm.all.isp_shortname.disabled = false;
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

        //crmForm.all.isp_shortname.DataValue = strString;
        crmForm.all.isp_shortname.disabled = true;
    }
    else if (tmpString3 != null) {
        crmForm.all.isp_shortname.disabled = false;
        //crmForm.all.isp_shortname.DataValue = tmpString3;
        crmForm.all.isp_shortname.disabled = true;
    }


    var tmpString = crmForm.all.isp_firstname.DataValue
    var tmpString2 = crmForm.all.isp_lastname.DataValue

    if (tmpString != null || tmpString2 != null) {
        crmForm.SetFieldReqLevel("isp_accountname", 0);
        crmForm.all.isp_accountname.Disabled = true;
        var resf  = tmpString5.replace(/'/gi, " "); //This will remove apostrophe's 
       crmForm.all.isp_firstname.DataValue = resf;

    }
    else {
        crmForm.SetFieldReqLevel("isp_accountname", 2);
        crmForm.all.isp_accountname.Disabled = false;
        crmForm.all.isp_firstname.DataValue = ".";
        crmForm.all.isp_lastname.DataValue = ".";
    }
}
function isp_lastname_onchange() {
    debugger


    tmpString = crmForm.all.isp_firstname.DataValue;
    tmpString2 = crmForm.all.isp_lastname.DataValue;
    tmpString3 = crmForm.all.isp_accountname.DataValue;
     tmpString6 = crmForm.all.isp_lastname.DataValue;
    var strString
    var tmpInt
    var splitLength

    if (tmpString2 != null && tmpString != null) {
        crmForm.all.isp_shortname.disabled = false;
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

        //crmForm.all.isp_shortname.DataValue = strString;
        crmForm.all.isp_shortname.disabled = true;
    }
    else if (tmpString3 != null) {
        crmForm.all.isp_shortname.disabled = false;
        //crmForm.all.isp_shortname.DataValue = tmpString3;
        crmForm.all.isp_shortname.disabled = true;
    }


    var tmpString = crmForm.all.isp_firstname.DataValue
    var tmpString2 = crmForm.all.isp_lastname.DataValue

    if (tmpString != null || tmpString2 != null) {
        crmForm.SetFieldReqLevel("isp_accountname", 0);
        crmForm.all.isp_accountname.Disabled = true;
        var resl  = tmpString6.replace(/'/gi, " "); //This will remove apostrophe's 
       crmForm.all.isp_lastname.DataValue = resl;

    }
    else {
        crmForm.SetFieldReqLevel("isp_accountname", 2);
        crmForm.all.isp_accountname.Disabled = false;
    }
}
function isp_shortname_onchange() {
    debugger


    if (crmForm.all.isp_shortname.DataValue == null) crmForm.all.isp_shortname.DataValue = '.';
}
function customertypecode_onchange() {
    if (crmForm.all.customertypecode.SelectedText == 'FXPaynet') {
        crmForm.all.isp_fxpaynetparty_c.style.display = '';
        crmForm.all.isp_fxpaynetparty_d.style.display = '';
    }
    else {
        crmForm.all.isp_fxpaynetparty_c.style.display = 'none';
        crmForm.all.isp_fxpaynetparty_d.style.display = 'none';
    }
}
function isp_fxpaynetparty_onchange() {
    if (crmForm.all.isp_fxpaynetparty.SelectedText == 'Bidvest Bank') {
        crmForm.all.isp_fxbidvestbank_c.style.display = '';
        crmForm.all.isp_fxbidvestbank_d.style.display = '';
        crmForm.all.isp_fxtravelex_c.style.display = 'none';
        crmForm.all.isp_fxtravelex_d.style.display = 'none';
        crmForm.all.isp_salespersonid_c.style.display = 'none';
        crmForm.all.isp_salespersonid_d.style.display = 'none';
        crmForm.all.isp_branchid_c.style.display = 'none';
        crmForm.all.isp_branchid_d.style.display = 'none';
    }
    else {
        crmForm.all.isp_fxbidvestbank_c.style.display = 'none';
        crmForm.all.isp_fxbidvestbank_d.style.display = 'none';
        crmForm.all.isp_fxtravelex_c.style.display = '';
        crmForm.all.isp_fxtravelex_d.style.display = '';
        crmForm.all.isp_salespersonid_c.style.display = 'none';
        crmForm.all.isp_salespersonid_d.style.display = 'none';
        crmForm.all.isp_branchid_c.style.display = 'none';
        crmForm.all.isp_branchid_d.style.display = 'none';
    }
}
function isp_fxtravelex_onchange() {
    if (crmForm.all.isp_fxtravelex.SelectedText == 'Core > 1 Year') {
        crmForm.all.isp_commpercentage.DataValue = '40%';
    }
    else {
        crmForm.all.isp_commpercentage.DataValue = '30%';
    }
}
function isp_fxbidvestbank_onchange() {
    if (crmForm.all.isp_fxbidvestbank.SelectedText == 'Direct') {
        crmForm.all.isp_commpercentage.DataValue = '30%';
        crmForm.all.isp_salespersonid_c.style.display = 'none';
        crmForm.all.isp_salespersonid_d.style.display = 'none';
        crmForm.all.isp_branchid_c.style.display = 'none';
        crmForm.all.isp_branchid_d.style.display = 'none';
    }
    else if (crmForm.all.isp_fxbidvestbank.SelectedText == 'Bidvest Bank Branches') {
        crmForm.all.isp_commpercentage.DataValue = '24.5%';
        crmForm.all.isp_salespersonid_c.style.display = 'none';
        crmForm.all.isp_salespersonid_d.style.display = 'none';
        crmForm.all.isp_branchid_c.style.display = 'none';
        crmForm.all.isp_branchid_d.style.display = 'none';
    }
    else if (crmForm.all.isp_fxbidvestbank.SelectedText == 'ID Agents') {
        crmForm.all.isp_commpercentage.DataValue = '0%';
        crmForm.all.isp_salespersonid_c.style.display = 'none';
        crmForm.all.isp_salespersonid_d.style.display = 'none';
        crmForm.all.isp_branchid_c.style.display = '';
        crmForm.all.isp_branchid_d.style.display = '';
    }
    else if (crmForm.all.isp_fxbidvestbank.SelectedText == 'Sales People') {
        crmForm.all.isp_salespersonid_c.style.display = '';
        crmForm.all.isp_salespersonid_d.style.display = '';
        crmForm.all.isp_branchid_c.style.display = 'none';
        crmForm.all.isp_branchid_d.style.display = 'none';
    }
    else {
        crmForm.all.isp_salespersonid_c.style.display = 'none';
        crmForm.all.isp_salespersonid_d.style.display = 'none';
        crmForm.all.isp_branchid_c.style.display = 'none';
        crmForm.all.isp_branchid_d.style.display = 'none';
    }
}
function isp_opicsaccountnumberlength_onchange() {
    if (crmForm.all.isp_opicsaccountnumber.DataValue == null) 
    if (crmForm.all.isp_opicsaccountnumber.DataValue != null) 
        if (crmForm.all.isp_opicsaccountnumber.DataValue.length != 10) {
        alert("Please ensure the opics number is the correct length");
        setTimeout('crmForm.all.isp_opicsaccountnumber.SetFocus();', 50);
    }
}
function isp_customertype_onchange() {
    debugger


    var oOpicsCustomerType = crmForm.all.isp_customertype;

    // MD 2012-11-28 - Set Defaults MD **
    //crmForm.SetFieldReqLevel("isp_identitynumber", 0);
    crmForm.SetFieldReqLevel("isp_residenttype", 0);
    crmForm.SetFieldReqLevel("isp_newoccupation", 0);
    crmForm.SetFieldReqLevel("isp_dateofbirth", 0);
    crmForm.SetFieldReqLevel("isp_branches", 0);
//    crmForm.all.isp_residenttype.DataValue = undefined;
    crmForm.all.isp_residenttype.Disabled = 1;
    crmForm.all.isp_identitynumber.Disabled = 1;
//    crmForm.all.isp_branches.DataValue = undefined;

    isp_residenttype_onchange();

    // the values in each "case" clause refer to the text in the category dropdown   
    if (oOpicsCustomerType.DataValue != null) {
        switch (oOpicsCustomerType.SelectedText) {
            case 'Individual [I]':
                //crmForm.SetFieldReqLevel("isp_identitynumber", 1);
                crmForm.SetFieldReqLevel("isp_newoccupation", 1);
                crmForm.SetFieldReqLevel("isp_dateofbirth", 1);
                crmForm.SetFieldReqLevel("isp_residenttype", 1);
                crmForm.SetFieldReqLevel("isp_branches", 1);
                crmForm.SetFieldReqLevel("isp_countryofbirth", 1);
                crmForm.all.isp_residenttype.Disabled = 0;
                crmForm.all.isp_identitynumber.Disabled = 0;
                break;

            case 'Corporate [C]':
            crmForm.SetFieldReqLevel("isp_branches", 1);
            crmForm.SetFieldReqLevel("isp_typeoflegalentity", 1); // Set New Company Classifications Required
            crmForm.SetFieldReqLevel("isp_companyclassification", 1) // Set New Company Classifications Required
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
    var strCashCollateral = crmForm.all.isp_cashcollateral;

   if (strCashCollateral.DataValue == '6') {
	   crmForm.all.isp_timedfec.Disabled = 0;
	   crmForm.SetFieldReqLevel("isp_timedfec", 1);
      
    }
    else {
       crmForm.all.isp_timedfec.Disabled = 1;
	   crmForm.all.isp_cashcol1.Disabled = 1;
       crmForm.all.isp_newdays1.Disabled = 1;
       crmForm.all.isp_newstartamount1.Disabled = 1;
       crmForm.all.isp_newendamount1.Disabled = 1;
       crmForm.all.isp_cashcol2.Disabled = 1;
       crmForm.all.isp_newdays2.Disabled = 1;
       crmForm.all.isp_newstartamount2.Disabled = 1;
       crmForm.all.isp_newendamount2.Disabled = 1;
       crmForm.all.isp_cashcol3.Disabled = 1;
      crmForm.all.isp_newdays3.Disabled = 1;
      crmForm.all.isp_newstartamount3.Disabled = 1;
      crmForm.all.isp_newendamount3.Disabled = 1;
      crmForm.all.isp_cashcol4.Disabled = 1;
      crmForm.all.isp_newdays4.Disabled = 1;
     crmForm.all.isp_newstartamount4.Disabled = 1;
     crmForm.all.isp_newendamount4.Disabled = 1;
  }
}

function isp_timedfec_onchange() {
    //Times FEC's  check
    var strTimed = crmForm.all.isp_timedfec;

    if (strTimed.DataValue == '1') {
       crmForm.all.isp_newstartamount1.Disabled = 1;
       crmForm.all.isp_newendamount1.Disabled = 1;
       crmForm.all.isp_newstartamount2.Disabled = 1;
       crmForm.all.isp_newendamount2.Disabled = 1;
       crmForm.all.isp_newstartamount3.Disabled = 1;
       crmForm.all.isp_newendamount3.Disabled = 1;
       crmForm.all.isp_newstartamount4.Disabled = 1;
       crmForm.all.isp_newendamount4.Disabled = 1;  
       crmForm.all.isp_newdays1.Disabled = 0;	
	   crmForm.all.isp_newdays2.Disabled = 0;
	   crmForm.all.isp_newdays3.Disabled = 0;
	   crmForm.all.isp_newdays4.Disabled = 0;
       crmForm.all.isp_cashcol1.Disabled = 0;
	  crmForm.all.isp_cashcol2.Disabled = 0;
	  crmForm.all.isp_cashcol3.Disabled = 0;
	  crmForm.all.isp_cashcol4.Disabled = 0; 
    }
    else if (strTimed.DataValue == '0'){
        crmForm.all.isp_newstartamount1.Disabled = 0;
       crmForm.all.isp_newendamount1.Disabled = 0;
       crmForm.all.isp_newstartamount2.Disabled = 0;
       crmForm.all.isp_newendamount2.Disabled = 0;
       crmForm.all.isp_newstartamount3.Disabled = 0;
       crmForm.all.isp_newendamount3.Disabled = 0;
       crmForm.all.isp_newstartamount4.Disabled = 0;
       crmForm.all.isp_newendamount4.Disabled = 0;
	   crmForm.all.isp_cashcol1.Disabled = 0;
	   crmForm.all.isp_cashcol2.Disabled = 0;
	   crmForm.all.isp_cashcol3.Disabled = 0;
	   crmForm.all.isp_cashcol4.Disabled = 0; 	   
       crmForm.all.isp_newdays1.Disabled = 1;	
	   crmForm.all.isp_newdays2.Disabled = 1;
	   crmForm.all.isp_newdays3.Disabled = 1;
	   crmForm.all.isp_newdays4.Disabled = 1;	 
    }
}




function isp_retailforex_onchange() {
    //Retail forex check
    var strRetailForex = crmForm.all.isp_retailforex;

    if (strRetailForex.DataValue == '1') {
        crmForm.all.isp_travellerscheques.Disabled = 0;
        crmForm.all.isp_telegraphictransfers.Disabled = 0;
        crmForm.all.isp_drafts.Disabled = 0;
        crmForm.all.isp_banknotes.Disabled = 0;
        crmForm.all.isp_cashpassport.Disabled = 0;
        crmForm.all.isp_businessowneridrf.Disabled = 0;
    }
    else {
        crmForm.all.isp_travellerscheques.Disabled = 1;
        crmForm.all.isp_telegraphictransfers.Disabled = 1;
        crmForm.all.isp_drafts.Disabled = 1;
        crmForm.all.isp_banknotes.Disabled = 1;
        crmForm.all.isp_cashpassport.Disabled = 1;
        crmForm.all.isp_businessowneridrf.Disabled = 1;
    }
}


function isp_lending_onchange() {
    //Lending check
    var strLending = crmForm.all.isp_lending;

    if (strLending.DataValue == '1') {
        crmForm.all.isp_othersecuredloans.Disabled = 0;
        crmForm.all.isp_rentals.Disabled = 0;
        crmForm.all.isp_unsecuredloans.Disabled = 0;
        crmForm.all.isp_mortages.Disabled = 0;
        crmForm.all.isp_instalmentsales.Disabled = 0;
        crmForm.all.isp_businessowneridlending.Disabled = 0;
    }
    else {
        crmForm.all.isp_othersecuredloans.Disabled = 1;
        crmForm.all.isp_rentals.Disabled = 1;
        crmForm.all.isp_unsecuredloans.Disabled = 1;
        crmForm.all.isp_mortages.Disabled = 1;
        crmForm.all.isp_instalmentsales.Disabled = 1;
        crmForm.all.isp_businessowneridlending.Disabled = 1;
    }
}
function isp_corporateforex_onchange() {
    //Corporate Forex check
    var strCorpForex = crmForm.all.isp_corporateforex;

    if (strCorpForex.DataValue == '1') {
        crmForm.all.isp_treasurydirect.Disabled = 0;
        crmForm.all.isp_fxpaynet.Disabled = 0;
        crmForm.all.isp_businessowneridcf.Disabled = 0;
    }
    else {
        crmForm.all.isp_treasurydirect.Disabled = 1;
        crmForm.all.isp_fxpaynet.Disabled = 1;
        crmForm.all.isp_businessowneridcf.Disabled = 1;
    }
}
function isp_deposits_onchange() {
    //Deposits check
    var strDeposits = crmForm.all.isp_deposits;

    if (strDeposits.DataValue == '1') {
        crmForm.all.isp_notice.Disabled = 0;
        crmForm.all.isp_call.Disabled = 0;
        crmForm.all.isp_fixed.Disabled = 0;
        crmForm.all.isp_businessowneriddep.Disabled = 0;
    }
    else {
        crmForm.all.isp_notice.Disabled = 1;
        crmForm.all.isp_call.Disabled = 1;
        crmForm.all.isp_fixed.Disabled = 1;
        crmForm.all.isp_businessowneriddep.Disabled = 1;
    }
}
function isp_card_onchange() {
    //Card check
    var strCard = crmForm.all.isp_card;

    if (strCard.DataValue == '1') {
        crmForm.all.isp_randtravel.Disabled = 0;
        crmForm.all.isp_worldcurrencycard.Disabled = 0;
        crmForm.all.isp_bidsave.Disabled = 0;
        crmForm.all.isp_corporatepaymentcard.Disabled = 0;
        crmForm.all.isp_businessowneridcard.Disabled = 0;
    }
    else {
        crmForm.all.isp_randtravel.Disabled = 1;
        crmForm.all.isp_worldcurrencycard.Disabled = 1;
        crmForm.all.isp_bidsave.Disabled = 1;
        crmForm.all.isp_corporatepaymentcard.Disabled = 1;
        crmForm.all.isp_businessowneridcard.Disabled = 1;
    }
}
function address1_line1_onchange() {
    if (crmForm.all.address1_line1.DataValue == null) crmForm.all.address1_line1.DataValue = '';
}
function address1_postalcode_onchange() {
    if (crmForm.all.address1_postalcode.DataValue == null) crmForm.all.address1_postalcode.DataValue = '';
}
function address1_line2_onchange() {
    if (crmForm.all.address1_line2.DataValue == null) crmForm.all.address1_line2.DataValue = '';
}
function isp_province_onchange() {
    // Created on 17/01/2007 by JJ Scholtz - Removing "." as per  Tracey Lindeque - WShare

    crmForm.all.address1_stateorprovince.DataValue = crmForm.all.isp_province.SelectedText;
    if (crmForm.all.address1_stateorprovince.DataValue == null) crmForm.all.address1_stateorprovince.DataValue = '';
}
function address1_line3_onchange() {
    if (crmForm.all.address1_line3.DataValue == null) crmForm.all.address1_line3.DataValue = '';
}
// function isp_country_onchange() {
// Created on 17/01/2007 by JJ Scholtz - Removing "." as per  Tracey Lindeque - WShare
// crmForm.all.address1_country.DataValue = crmForm.all.isp_country.SelectedText;
// if (crmForm.all.address1_country.DataValue == null) crmForm.all.address1_country.DataValue = '';
//  }
function address1_city_onchange() {
    if (crmForm.all.address1_city.DataValue == null) crmForm.all.address1_city.DataValue = '';
}
function address1_addresstypecode_onchange() {

}
function address1_country_onchange() {

}
function address1_stateorprovince_onchange() {

}
function address2_line1_onchange() {
    if (crmForm.all.address2_line1.DataValue == null) crmForm.all.address2_line1.DataValue = '';
}
function address2_postalcode_onchange() {
    if (crmForm.all.address2_postalcode.DataValue == null) crmForm.all.address2_postalcode.DataValue = '';
}
function address2_line2_onchange() {
    if (crmForm.all.address2_line2.DataValue == null) crmForm.all.address2_line2.DataValue = '';
}
function isp_province2_onchange() {
    // Created on 17/01/2007 by JJ Scholtz - Removing "." as per  Tracey Lindeque - WShare
    crmForm.all.address2_stateorprovince.DataValue = crmForm.all.isp_province2.SelectedText;
    if (crmForm.all.address2_stateorprovince.DataValue == null) crmForm.all.address2_stateorprovince.DataValue = '';
}
function address2_line3_onchange() {
    if (crmForm.all.address2_line3.DataValue == null) crmForm.all.address2_line3.DataValue = '';
}
// function isp_country2_onchange() {
// Created on 17/01/2007 by JJ Scholtz - Removing "." as per  Tracey Lindeque - WShare
// crmForm.all.address2_country.DataValue = crmForm.all.isp_country2.SelectedText;
// if (crmForm.all.address2_country.DataValue == null) crmForm.all.address2_country.DataValue = '';
// }
function address2_city_onchange() {
    if (crmForm.all.address2_city.DataValue == null) crmForm.all.address2_city.DataValue = '';
}
function address2_stateorprovince_onchange() {

}
function address2_country_onchange() {

}

    //Resident, Passport Check ID Validation & Date of Birth - MD**

function isp_residenttype_onchange() {
    //Residenttype check
    var strresidenttype = crmForm.all.isp_residenttype;

    // Reset Defaults
    crmForm.SetFieldReqLevel("isp_identitynumber", 0);
    crmForm.SetFieldReqLevel("isp_passportnumber", 0);
    crmForm.SetFieldReqLevel("isp_countryofissue", 0);
    crmForm.SetFieldReqLevel("isp_visapermitnumber", 0);
    crmForm.SetFieldReqLevel("isp_visaexpirydate", 0);
//    crmForm.all.isp_identitynumber.DataValue = "";

    if (strresidenttype.DataValue != null) {
        switch (strresidenttype.SelectedText) {
            case "Resident":
                crmForm.SetFieldReqLevel("isp_identitynumber", 1);
                break;

            case "Non Resident":
                crmForm.SetFieldReqLevel("isp_passportnumber", 1);
                crmForm.SetFieldReqLevel("isp_countryofissue", 1);
                break;

            case "Temp Resident":
                crmForm.SetFieldReqLevel("isp_passportnumber", 1);
                crmForm.SetFieldReqLevel("isp_countryofissue", 1);
                crmForm.SetFieldReqLevel("isp_visapermitnumber", 1);
                crmForm.SetFieldReqLevel("isp_visaexpirydate", 1);
                break;
        }
    }

   

    //if (strresidenttype.DataValue == '5') {
    //    crmForm.all.isp_passportnumber.Disabled = 0;
    //
    //}
    //else {
    //    alert("Please enter a Passport number.");
    //    crmForm.all.isp_passportnumber.focus();
    //    return false;
    //}
    return true;
}


function isp_passportnumber_onchange() {
    //Passport number check
    var strpassportnumber = crmForm.all.isp_passportnumber;

    if (strpassportnumber.Value == ' ') {
        crmForm.all.isp_countryofissue.Disabled = 0;

    }
    else {
        crmForm.all.isp_countryofissue.Disabled = 1;

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
    var idnum = crmForm.all.isp_identitynumber.DataValue;


    if (idnum.length >= 6 && !isNaN(idnum)) {
        var dob = new Date(idnum.substring(0, 2), idnum.substring(2, 4) - 1, idnum.substring(4, 6));

        if ((dob.getYear() == idnum.substring(0, 2) &&
          dob.getMonth() == idnum.substring(2, 4) - 1 &&
          dob.getDate() == idnum.substring(4, 6))) {
            crmForm.all.isp_dateofbirth.DataValue = dob;
        }
    }

}

function isp_opicsaccountnumber_onchange() {

var strCountry = crmForm.all.isp_country;
var strCountry2 = crmForm.all.isp_country2;
    
if (crmForm.all.isp_opicsaccountnumber.DataValue != null) {
    crmForm.SetFieldReqLevel("isp_merlincustomertype", 1);
    // crmForm.SetFieldReqLevel("isp_industrialclassification",1); Will set at later stage
    crmForm.SetFieldReqLevel("isp_finsurvinstitutionalsector", 1);
    crmForm.SetFieldReqLevel("industrycode", 1);
    crmForm.SetFieldReqLevel("address1_line1", 1);
    crmForm.SetFieldReqLevel("address1_line3", 1);
    crmForm.SetFieldReqLevel("address1_city", 1);
    crmForm.SetFieldReqLevel("address1_postalcode", 1);
    crmForm.SetFieldReqLevel("address2_line1", 1);
    crmForm.SetFieldReqLevel("address2_line3", 1);
    crmForm.SetFieldReqLevel("address2_city", 1);
    crmForm.SetFieldReqLevel("address2_postalcode", 1);
    crmForm.SetFieldReqLevel("isp_country", 1);
    crmForm.SetFieldReqLevel("isp_country2", 1);
    crmForm.SetFieldReqLevel("isp_countrycode", 1);
    crmForm.SetFieldReqLevel("isp_countryofultimaterisk", 1);

   if (strCountry.DataValue == '1') {
     crmForm.SetFieldReqLevel("isp_province", 1);
      }
      if (strCountry2.DataValue == '1') {
        crmForm.SetFieldReqLevel("isp_province2", 1);
        }
    }
}

function isp_country_onchange() {
     var strCountry = crmForm.all.isp_country;

     if (strCountry.DataValue == '1') {
        crmForm.SetFieldReqLevel("isp_province", 1);
        }
     else {
        crmForm.SetFieldReqLevel("isp_province", 0);
           }
       }
	
function isp_country2_onchange() {
    var strCountry2 = crmForm.all.isp_country2;

    if (strCountry2.DataValue == '1') {
        crmForm.SetFieldReqLevel("isp_province2", 1);
        }
    else {
       crmForm.SetFieldReqLevel("isp_province2", 0);
         }
    }

function isp_incometaxno_onchange() {
    var taxNumber = crmForm.all.isp_incometaxno.DataValue;
     
	 if (taxNumber != null && taxNumber != "") {
        if (!validateTAXNumber(taxNumber)) {
            alert("Invalid SARS Tax Number entered");
            crmForm.all.isp_incometaxno.SetFocus();
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
    var strpassportnumber = crmForm.all.isp_passportnumber;

    if (strpassportnumber.Value != ' ') {
        var curVal = crmForm.all.isp_passportnumber.value;
		  if ( /[^A-Za-z0-9]/.test(curVal) ) { 
		  alert("Only Alphanumeric characters allowed in Passportnumber, no spaces or special characters");
          setTimeout('crmForm.all.isp_passportnumber.SetFocus();', 50);
           event.returnValue = false;
    }
  }
}

function isp_typeoflegalentity_onchange() {
debugger

    var strLegalEntity = crmForm.all.isp_typeoflegalentity.DataValue;
	var CompanyRegno = crmForm.all.isp_companyregistrationnumber != null || typeof(crmForm.all.isp_companyregistrationnumber )  != "undefined" ? crmForm.all.isp_companyregistrationnumber.DataValue : "";
    var strRequired = false
   if   (isRequiredAll(strLegalEntity)) {
              crmForm.SetFieldReqLevel("isp_companyregistrationnumber", 1);	
	 
	         if (!validateCompanyRegno(CompanyRegno)) {
                 alert("Invalid Company Registration Number entered");
				crmForm.all.isp_companyregistrationnumber.SetFocus();
				event.returnValue = false;
				return false;
				}
	}	 
    else if  (isRequiredSome(strLegalEntity)) {
		  crmForm.SetFieldReqLevel("isp_companyregistrationnumber", 1);	
	}
	else if(isRequiredTrust(strLegalEntity) )
	{
		if (!validateCompanyRegno(CompanyRegno)) {
                 alert("Invalid Company Registration Number entered");
				crmForm.all.isp_companyregistrationnumber.SetFocus();
				event.returnValue = false;
				return false;
		}
	}
	else if  (isRequiredID(strLegalEntity)) {
		crmForm.SetFieldReqLevel("isp_identitynumber", 1);
		crmForm.all.isp_identitynumber.Disabled = 0;	  
	}	
	  
	 return true;
}

function isp_companyregistrationnumber_onchange() {
    var nr = crmForm.all.isp_companyregistrationnumber.DataValue;
	var strLegalEntity = crmForm.all.isp_typeoflegalentity.DataValue;
	 if   (!isRequiredNone(strLegalEntity)) {
    
		    if (!validateCompanyRegno(nr)) {
            alert("Invalid Company Registration Number entered");
            crmForm.all.isp_companyregistrationnumber.SetFocus();
            event.returnValue = false;
            return false;
        }		
    }	 
 }

	  
 function validateCompanyRegno(nr) {
		  if(nr == null || typeof(nr )  == "undefined") return false;
		      var strCheck = crmForm.all.isp_typeoflegalentity.DataValue;
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

crmForm.all.isp_classificationdummyfield.DataValue = crmForm.all.isp_companyclassification.SelectedText;
crmForm.all.isp_typeoflegalentity.Disabled = false;

// ************************************************************************   
// ** Purpose:   
// **   
// ** Only show Sub Classification isp_typeoflegalentity
// **   
// ************************************************************************   
//set references to our fields   
var oCompClassValue = crmForm.all.isp_companyclassification;
var oSubCompClass = crmForm.all.isp_typeoflegalentity;

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
if (oCompClassValue.DataValue != null) {
    switch (oCompClassValue.SelectedText) {
	
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
 var strVerify = crmForm.all.isp_accountverification.DataValue;
     if (strVerify == '100000000') {
 Xrm.Page.getAttribute("isp_lastverificationcompletedby").setValue(null);
     	
  } 
}

 function isp_creditorid_onchange() {
 var strCreditorId = crmForm.all.isp_creditorid.DataValue;
     if (strCreditorId != null || strCreditorId != "" || strCreditorId != " ") {
       crmForm.SetFieldReqLevel("isp_companyregistrationnumber", 1);	
    } 
	}

function isp_businessaccount_onchange() {
 if (crmForm.all.isp_businessaccount.DataValue == '1') {
   Xrm.Page.ui.tabs.get("World_Check").setVisible(true);
   crmForm.all.isp_emidclientnumber_c.style.color = '#32cd32';
   crmForm.all.isp_emidmainbusinessaccountnumber_c.style.color = '#32cd32';
   crmForm.all.isp_businessaccount_c.style.color = '#32cd32';
   crmForm.all.isp_overdraftfacility_c.style.color = '#32cd32';
   crmForm.all.isp_authorisedcardadministrator_c.style.color = '#32cd32';
   crmForm.all.isp_authorisedcardadministrator2_c.style.color = '#32cd32';
   crmForm.all.isp_authorisedcardadministrator3_c.style.color = '#32cd32';
   crmForm.all.isp_accstatementemail1_c.style.color = '#32cd32';
   crmForm.all.isp_accnotificationemail1_c.style.color = '#32cd32';
   crmForm.all.isp_proofofpaymentemail1_c.style.color = '#32cd32';
    crmForm.all.isp_internetbankingperson1_c.style.color = '#32cd32';
     crmForm.all.isp_businessaccountbdm_c.style.color = '#32cd32';
     crmForm.all.isp_businessdebitcardrequested_c.style.color = '#32cd32';
 crmForm.all.isp_setupinternetbanking_c.style.color = '#32cd32';
     crmForm.SetFieldReqLevel("isp_businessaccountbdm", 1);
	 crmForm.SetFieldReqLevel("isp_authorisedcardadministrator", 1);

	}
   else {
         Xrm.Page.ui.tabs.get("World_Check").setVisible(false);
       }
    }
   
   
  function isp_customertype_onchangeEVO() {
   
   var evoOpicsCustomerType = crmForm.all.isp_customertype;
   
        switch (evoOpicsCustomerType.SelectedText) {
            case 'Individual [I]':
			 Xrm.Page.ui.tabs.get("World_Check").setVisible(true);
             crmForm.SetFieldReqLevel("isp_emat", 1)
             crmForm.SetFieldReqLevel("isp_sof", 1);
			 crmForm.SetFieldReqLevel("isp_employername", 1);
			 crmForm.SetFieldReqLevel("industrycode", 1);
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
     var strEmat = crmForm.all.isp_emat.DataValue;
      var strCustType = crmForm.all.isp_customertype.DataValue;
	  
	  //Reset Defaults
	  crmForm.SetFieldReqLevel("isp_rer", 0);

      if ((strEmat == '4' || strEmat == '5' || strEmat == '6') && strCustType == '4') { 
        crmForm.SetFieldReqLevel("isp_rer", 1);
        }		
     }

function isp_rer_onchange() {
     var strReR = crmForm.all.isp_rer.DataValue;
	 
	 // Reset Defaults 	 
	 crmForm.SetFieldReqLevel("isp_rerother", 0);    
	 
         if (strReR == '6') { 
        crmForm.SetFieldReqLevel("isp_rerother", 1);    
        crmForm.all.isp_rerother_c.style.color = '#ff0000';
        crmForm.all.isp_rerother.SetFocus();
        }		
       }
		 
     function isp_sof_onchange() {
     var strSoF = crmForm.all.isp_sof.DataValue;
	 //Reset Defaults
	 crmForm.SetFieldReqLevel("isp_sofother", 0);
	 
        if (strSoF == '8') { 
        crmForm.SetFieldReqLevel("isp_sofother", 1);
        crmForm.all.isp_sofother_c.style.color = '#ff0000';
        crmForm.all.isp_sofother.SetFocus();
        }		
      }
		 
     function isp_sow_onchange() {
     var strSoW = crmForm.all.isp_sow.DataValue;
	 
	 //Reset Defaults
	 crmForm.SetFieldReqLevel("isp_sowother", 0);
	 
        if (strSoW == '5') { 
        crmForm.SetFieldReqLevel("isp_sowother", 1);
        crmForm.all.isp_sowother_c.style.color = '#ff0000';
        crmForm.all.isp_sowother.SetFocus();
        }		
        }

function isp_worldcheckconfirm_onchange() {
     var strWCheck = crmForm.all.isp_worldcheckconfirmation.DataValue;
	 var strCustType = crmForm.all.isp_customertype.DataValue;

      if ((strWCheck == '1') && strCustType == '4') { 
        crmForm.SetFieldReqLevel("isp_riskrating", 1);
        }		
      }

	 function isp_riskrating_onchange() {
     var strRisk = crmForm.all.isp_riskrating.DataValue;
	 var strEmatVal = crmForm.all.isp_emat.DataValue;
	 
	 //Reset Defaults
	  crmForm.SetFieldReqLevel("isp_sow", 0);
		crmForm.SetFieldReqLevel("isp_incomebracket", 0);

      if ((strRisk == '1') && strEmatVal == '6') { 
        crmForm.SetFieldReqLevel("isp_sow", 1);
		crmForm.SetFieldReqLevel("isp_incomebracket", 1);
		crmForm.all.isp_sow.SetFocus();
		       }		
			   else if (strRisk == '1'){	
			    crmForm.SetFieldReqLevel("isp_incomebracket", 1);
			   
			   
		 }
}