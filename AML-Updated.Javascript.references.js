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
        crmForm.all.isp_rerother_c.style.color = '#ff0000';
        Xrm.Page.getControl("isp_rerother").setFocus(true);
        }
       }

     function isp_sof_onchange() {
     var strSoF = Xrm.Page.getAttribute("isp_sof").getValue();
	 //Reset Defaults
	 Xrm.Page.getAttribute("isp_sofother").setRequiredLevel("none");

        if (strSoF == '8') {
        Xrm.Page.getAttribute("isp_sofother").setRequiredLevel("required");
        crmForm.all.isp_sofother_c.style.color = '#ff0000';
        Xrm.Page.getControl("isp_sofother").setFocus(true);
        }
      }

     function isp_sow_onchange() {
     var strSoW = Xrm.Page.getAttribute("isp_sow").getValue();

	 //Reset Defaults
	 Xrm.Page.getAttribute("isp_sowother").setRequiredLevel("none");

        if (strSoW == '5') {
        Xrm.Page.getAttribute("isp_sowother").setRequiredLevel("required");
        crmForm.all.isp_sowother_c.style.color = '#ff0000';
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

//World Check bit
