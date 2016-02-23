//Onchange
function isp_accountverifiy_onchange() {
     var strWChecks = Xrm.Page.getAttribute("isp_worldcheckconfirmation").getValue();
	 var strCustTyp = Xrm.Page.getAttribute("isp_customertype").getValue();
	  var strVerifyValue = Xrm.Page.getAttribute("isp_accountverification").getValue();
	  var strEmat = Xrm.Page.getAttribute("isp_emat").getValue();

      if (strEmat != null && strCustTyp == '4' && strVerify == '100000000' && strWChecks == '0')  {
        alert("World Check Confirmation not Completed");
		break;
        }
      }

	 // On Save
	  var strWChecks = Xrm.Page.getAttribute("isp_worldcheckconfirmation").getValue();
	 var strCustTyp = Xrm.Page.getAttribute("isp_customertype").getValue();
	  var strVerifyValue = Xrm.Page.getAttribute("isp_accountverification").getValue();
	  var strEmat = Xrm.Page.getAttribute("isp_emat").getValue();

      if (strEmat != null && strCustTyp == '4' && strVerify == '100000000' && strWChecks == '0')  {
        alert("World Check Confirmation not Completed");
		      event.returnValue = false;
            return false;
        }
      
