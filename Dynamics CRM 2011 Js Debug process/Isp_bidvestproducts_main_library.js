function Form_onsave()
{
crmForm.all.isp_datetorelease.ForceSubmit= true;
crmForm.all.isp_datetorelease_02.ForceSubmit= true;
crmForm.all.isp_datetorelease_03.ForceSubmit= true;
crmForm.all.isp_datetorelease_04.ForceSubmit= true;
}
function Form_onload()
{
var  strNoticeSt = crmForm.all.isp_noticestatus.DataValue;
var  strVerified = crmForm.all.isp_verified.DataValue;
if ((strNoticeSt == '8' || strNoticeSt == '2' || strNoticeSt == '3') && strVerified == '1' ) {
    var controls = Xrm.Page.ui.controls.get();
      for (var i in controls){
       var control = controls[i];
         if (!control.getDisabled()){
           control.setDisabled(true);
            }
        }
    }
crmForm.all.isp_sendconfirmationemailtocustomer_c.style.color = '#ff0000';
crmForm.all.isp_sendamendmentemailtocustomer_c.style.color = '#ff0000';
document.all.isp_ndays_c.style.visibility = "hidden";
document.all.isp_ndays_d.style.visibility = "hidden";
document.all.isp_ndays_02_c.style.visibility = "hidden";
document.all.isp_ndays_02_d.style.visibility = "hidden";
document.all.isp_ndays_03_c.style.visibility = "hidden";
document.all.isp_ndays_03_d.style.visibility = "hidden";
document.all.isp_ndays_04_c.style.visibility = "hidden";
document.all.isp_ndays_04_d.style.visibility = "hidden";
 var strStatus = crmForm.all.isp_noticestatus;
    if (strStatus.DataValue != '6') {
        crmForm.all.isp_confirmedinstructions.Disabled = 1;
      }
//Payment Method check
   var strpayment =  crmForm.all.isp_paymentmethod;

  if (strpayment.DataValue == '1' || strpayment.DataValue == null) { crmForm.all.isp_bankbranchcode.Disabled = 1;
        crmForm.all.isp_beneficiarybank.Disabled = 1;
       crmForm.all.isp_beneficiaryaccountnumber.Disabled = 1;
       crmForm.all.isp_beneficiaryname.Disabled = 1;

  }
  	   else {
	   crmForm.all.isp_bankbranchcode.Disabled = 0;
       crmForm.all.isp_beneficiarybank.Disabled = 0;
       crmForm.all.isp_beneficiaryaccountnumber.Disabled = 0;
       crmForm.all.isp_beneficiaryname.Disabled = 0;
        }

}
function isp_datedepositmade_onchange(){
crmForm.all.isp_noticedays.DataValue = null
}
{
}
function isp_noticedays_onchange()
{
debugger;
var oNoticeDays = crmForm.all.isp_noticedays.SelectedText;
var oNoticeDays = oNoticeDays.toString();
var oDatetoRelease = crmForm.all.isp_datetorelease;
var otoday =new Date();
var d = crmForm.all.isp_datedepositmade.DataValue;
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
crmForm.all.isp_datetorelease.DataValue = oAlert;
crmForm.all.isp_ndays.DataValue = crmForm.all.isp_noticedays.SelectedText
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
 var strStatus = crmForm.all.isp_noticestatus;
    if (strStatus.DataValue == '6') {
        crmForm.all.isp_confirmedinstructions.Disabled = 0;
        crmForm.SetFieldReqLevel("isp_confirmedinstructions", 1);
        }
    else {
        crmForm.all.isp_confirmedinstructions.Disabled = 1;
      }
}
function isp_datetorelease_onchange()
{
debugger
var oDatetoRelease = crmForm.all.isp_datetorelease;
var oNoticeDays = crmForm.all.isp_noticedays;
var oNotifyDate = crmForm.all.isp_notifydate;
var oNoticeDate =new Date();
if (oNoticeDays.DataValue != null) {
    switch (oNoticeDays.SelectedText) {
        case '40':
            oNotifyDate.DataValue = crmForm.all.isp_datetorelease.DataValue() -  crmForm.all.isp_noticedays.SelectedText;
            break;

        case '41':
            oNotifyDate.DataValue = oNoticeDate.setDate(oNoticeDate.getDate() - 41);
            break;
    case '60':
            oNotifyDate.DataValue = oDatetoRelease.setDate(oDatetoRelease.getDate() - 60);
            break;

        case '61':
            oNotifyDate.DataValue = oNoticeDate.setDate(oNoticeDate.getDate() - 61);
            break;
  case '90':
            oNotifyDate.DataValue = oNoticeDate.setDate(oNoticeDate.getDate() - 90);
            break;

        case '91':
            oNotifyDate.DataValue = oNoticeDate.setDate(oNoticeDate.getDate() - 91);
            break;
    case '120':
            oNotifyDate.DataValue = oNoticeDate.setDate(oNoticeDate.getDate() - 120);
            break;

        case '121':
            oNotifyDate.DataValue = oNoticeDate.setDate(oNoticeDate.getDate() - 121);
            break;

      }
}
}
function isp_paymentmethod_onchange() {
debugger
//Payment Method check
   var strpayment =  crmForm.all.isp_paymentmethod;

  if (strpayment.DataValue == '1' || strpayment.DataValue == null) {
	   crmForm.all.isp_bankbranchcode.Disabled = 1;
       crmForm.all.isp_beneficiarybank.Disabled = 1;
       crmForm.all.isp_beneficiaryaccountnumber.Disabled = 1;
       crmForm.all.isp_beneficiaryname.Disabled = 1;
  }
  	   else {
	   crmForm.all.isp_bankbranchcode.Disabled = 0;
       crmForm.all.isp_beneficiarybank.Disabled = 0;
       crmForm.all.isp_beneficiaryaccountnumber.Disabled = 0;
       crmForm.all.isp_beneficiaryname.Disabled = 0;
        }
}
