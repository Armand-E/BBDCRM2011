function Form_onsave()
{
Xrm.Page.isp_datetorelease.ForceSubmit= true;
Xrm.Page.isp_datetorelease_02.ForceSubmit= true;
Xrm.Page.isp_datetorelease_03.ForceSubmit= true;
Xrm.Page.isp_datetorelease_04.ForceSubmit= true;
}
function Form_onload()
{
var  strNoticeSt = Xrm.Page.getAttribute("isp_noticestatus").getValue();
var  strVerified = Xrm.Page.getAttribute("isp_verified").getValue();
if ((strNoticeSt == '8' || strNoticeSt == '2' || strNoticeSt == '3') && strVerified == '1' ) {
    var controls = Xrm.Page.ui.controls.get();
      for (var i in controls){
       var control = controls[i];
         if (!control.getDisabled()){
           control.setDisabled(true);
            }
        }
    }
Xrm.Page.isp_sendconfirmationemailtocustomer_c.style.color = '#ff0000';
Xrm.Page.isp_sendamendmentemailtocustomer_c.style.color = '#ff0000';
document.all.isp_ndays_c.style.visibility = "hidden";
document.all.isp_ndays_d.style.visibility = "hidden";
document.all.isp_ndays_02_c.style.visibility = "hidden";
document.all.isp_ndays_02_d.style.visibility = "hidden";
document.all.isp_ndays_03_c.style.visibility = "hidden";
document.all.isp_ndays_03_d.style.visibility = "hidden";
document.all.isp_ndays_04_c.style.visibility = "hidden";
document.all.isp_ndays_04_d.style.visibility = "hidden";
 var strStatus = Xrm.Page.getAttribute("isp_noticestatus");
    if (strStatus.getValue() != '6') {
        Xrm.Page.isp_confirmedinstructions.Disabled = 1;
      }
//Payment Method check
   var strpayment =  Xrm.Page.isp_paymentmethod;

  if (strpayment.getValue() == '1' || strpayment.getValue() == null) { Xrm.Page.isp_bankbranchcode.Disabled = 1;
        Xrm.Page.isp_beneficiarybank.Disabled = 1;
       Xrm.Page.isp_beneficiaryaccountnumber.Disabled = 1;
       Xrm.Page.isp_beneficiaryname.Disabled = 1;

  }
  	   else {
	   Xrm.Page.isp_bankbranchcode.Disabled = 0;
       Xrm.Page.isp_beneficiarybank.Disabled = 0;
       Xrm.Page.isp_beneficiaryaccountnumber.Disabled = 0;
       Xrm.Page.isp_beneficiaryname.Disabled = 0;
        }

}
function isp_datedepositmade_onchange(){
Xrm.Page.getAttribute("isp_noticedays").getValue() = null
}
{
}
function isp_noticedays_onchange()
{
debugger;
var oNoticeDays = Xrm.Page.getAttribute("isp_noticedays").getSelectedOption().text;
var oNoticeDays = oNoticeDays.toString();
var oDatetoRelease = Xrm.Page.getAttribute("isp_datetorelease");
var otoday =new Date();
var d = Xrm.Page.getAttribute("isp_datedepositmade").getValue();
var curr_date = d.getDate();
var curr_month = d.getMonth();
curr_month++;
var curr_year = d.getFullYear();
var Date_Format = (curr_month + "/" + curr_date + "/" + curr_year);
var Date_Format = Date_Format.toString();
var one_day = 1000 * 60 * 60
var arr = oNoticeDays.split(' ');
if(oNoticeDays.toLowerCase().indexOf("months") == -1)
   oAlert = Math.ceil(d.setDate(d.getDate() + Number(arr[0]) ));
else
   oAlert = getFutureDate(d, Number(arr[0]));
Xrm.Page.getAttribute("isp_datetorelease").setValue(oAlert);
Xrm.Page.getAttribute("isp_ndays").getValue() = Xrm.Page.getAttribute("isp_noticedays").getSelectedOption().text
}
function getFutureDate(theDate, numOfMonths)
{
debugger
 var now = theDate;
 var current;
 current = new Date(now.getFullYear(), (now.getMonth() + numOfMonths), now.getDate());
 return new Date(current.getFullYear(), current.getMonth() , current.getDate() )
}
function isp_noticestatus_onchange() {
    debugger
 var strStatus = Xrm.Page.getAttribute("isp_noticestatus");
    if (strStatus.getValue() == '6') {
        Xrm.Page.isp_confirmedinstructions.Disabled = 0;
        Xrm.Page.getAttribute("isp_confirmedinstructions").setRequiredLevel("required");
        }
    else {
        Xrm.Page.isp_confirmedinstructions.Disabled = 1;
      }
}
function isp_datetorelease_onchange()
{
debugger
var oDatetoRelease = Xrm.Page.getAttribute("isp_datetorelease");
var oNoticeDays = Xrm.Page.getAttribute("isp_noticedays");
var oNotifyDate = Xrm.Page.getAttribute("isp_notifydate");
var oNoticeDate =new Date();
if (oNoticeDays.getValue() != null) {
    switch (oNoticeDays.getSelectedOption().text) {
        case '40':
            oNotifyDate.setValue(Xrm.Page.getAttribute("isp_datetorelease").getValue()() -  Xrm.Page.getAttribute("isp_noticedays").getSelectedOption().text);
            break;

        case '41':
            oNotifyDate.setValue(oNoticeDate.setDate(oNoticeDate.getDate() - 41));
            break;
    case '60':
            oNotifyDate.setValue(oDatetoRelease.setDate(oDatetoRelease.getDate() - 60));
            break;

        case '61':
            oNotifyDate.setValue(oNoticeDate.setDate(oNoticeDate.getDate() - 61));
            break;
  case '90':
            oNotifyDate.setValue(oNoticeDate.setDate(oNoticeDate.getDate() - 90));
            break;

        case '91':
            oNotifyDate.setValue(oNoticeDate.setDate(oNoticeDate.getDate() - 91));
            break;
    case '120':
            oNotifyDate.setValue(oNoticeDate.setDate(oNoticeDate.getDate() - 120));
            break;

        case '121':
            oNotifyDate.setValue(oNoticeDate.setDate(oNoticeDate.getDate() - 121));
            break;

      }
}
}
function isp_paymentmethod_onchange() {
debugger
//Payment Method check
   var strpayment =  Xrm.Page.isp_paymentmethod;

  if (strpayment.getValue() == '1' || strpayment.getValue() == null) {
	   Xrm.Page.isp_bankbranchcode.Disabled = 1;
       Xrm.Page.isp_beneficiarybank.Disabled = 1;
       Xrm.Page.isp_beneficiaryaccountnumber.Disabled = 1;
       Xrm.Page.isp_beneficiaryname.Disabled = 1;
  }
  	   else {
	   Xrm.Page.isp_bankbranchcode.Disabled = 0;
       Xrm.Page.isp_beneficiarybank.Disabled = 0;
       Xrm.Page.isp_beneficiaryaccountnumber.Disabled = 0;
       Xrm.Page.isp_beneficiaryname.Disabled = 0;
        }
}
	 
