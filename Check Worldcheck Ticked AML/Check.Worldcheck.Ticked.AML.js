
//Onchange
function isp_accountverifiy_onchange() {
     var strWChecks = crmForm.all.isp_worldcheckconfirmation.DataValue;
	 var strCustTyp = crmForm.all.isp_customertype.DataValue;
	  var strVerifyValue = crmForm.all.isp_accountverification.DataValue;
	  var strEmat = crmForm.all.isp_emat.DataValue;

      if (strEmat != null && strCustTyp == '4' && strVerify == '100000000' && strWChecks == '0')  { 
        alert("World Check Confirmation not Completed");
		break;
        }		
      }
	  
	 // On Save
	  var strWChecks = crmForm.all.isp_worldcheckconfirmation.DataValue;
	 var strCustTyp = crmForm.all.isp_customertype.DataValue;
	  var strVerifyValue = crmForm.all.isp_accountverification.DataValue;
	  var strEmat = crmForm.all.isp_emat.DataValue;

      if (strEmat != null && strCustTyp == '4' && strVerify == '100000000' && strWChecks == '0')  { 
        alert("World Check Confirmation not Completed");
		      event.returnValue = false;
            return false;
        }		
      
	 