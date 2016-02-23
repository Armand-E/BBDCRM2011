function IFRAME_multiselect_onload()
{

}
function Form_onsave()
{
    //ID Number Check and Date of Birth **
    var idNumber = crmForm.all.isp_idnumber.DataValue;
    if (idNumber != null && idNumber != "") {
        if (!validateIDNumber(idNumber)) {
            alert("Invalid ID Number entered");
            crmForm.all.isp_idnumber.SetFocus();
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
if (crmForm.FormType < 3)
{
var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async = false;
var s;

s = "/isp-asp/dupcheck.aspx?telephone1="
if (crmForm.all.telephone1.DataValue != undefined) s+= escape(crmForm.all.telephone1.DataValue);
s += "&telephone2="
 if (crmForm.all.telephone2.DataValue != undefined) s+=  escape(crmForm.all.telephone2.DataValue);
s += "&mobilephone="
 if (crmForm.all.mobilephone.DataValue != undefined) s+=  escape(crmForm.all.mobilephone.DataValue);
s += "&lastname="
 if (crmForm.all.lastname.DataValue != undefined) s+=  escape(crmForm.all.lastname.DataValue);
s += "&firstname="
 if (crmForm.all.firstname.DataValue != undefined) s+=  escape(crmForm.all.firstname.DataValue);
s += "&accountid="
 if (crmForm.ObjectId != undefined)
s+=  escape(crmForm.ObjectId);
s += "&entity=contact&new=";
 if (crmForm.FormType == 1) { s += "yes"; }
 if (crmForm.FormType == 2)  {
if (crmForm.all.telephone1.IsDirty || crmForm.all.telephone2.IsDirty || crmForm.all.mobilephone.IsDirty || crmForm.all.lastname.IsDirty || crmForm.all.firstname.IsDirty) { s += "yes"; } else { s += "no"; };
}
xmlDoc.load(s);
var oNode = xmlDoc.selectSingleNode("result");
 if (oNode != null)
 {
  if (oNode.text == "True") {
   alert("There is another contact with the same Name, Lastname and Contact Number. Please avoid creating duplicates.");
   event.returnValue = false;
   return false;
  }
 }
}
}
function Form_onload()
{
debugger
if (crmForm.FormType < 5)
{
tmpString1 = crmForm.all.telephone1.DataValue;
tmpString2 = crmForm.all.telephone2.DataValue;
tmpString3 = crmForm.all.mobilephone.DataValue;
if (tmpString1  != null || tmpString2  != null || tmpString3  != null) {
crmForm.SetFieldReqLevel("telephone1",2);
}
tmpString6 = crmForm.all.isp_idnumber.DataValue;
tmpString7 = crmForm.all.isp_passportnumber.DataValue;

if (crmForm.all.isp_businessaccount.DataValue == '1') {
    crmForm.SetFieldReqLevel("isp_dateofbirth", 1);
    crmForm.SetFieldReqLevel("isp_passportnumber", 0);
    crmForm.SetFieldReqLevel("isp_idnumber", 1);
    crmForm.SetFieldReqLevel("address1_line1", 1);
    crmForm.SetFieldReqLevel("address1_line3", 1);
    crmForm.SetFieldReqLevel("address1_line2", 1);
    crmForm.SetFieldReqLevel("address1_city", 1);
    crmForm.SetFieldReqLevel("address1_postalcode", 1);
    crmForm.SetFieldReqLevel("address1_addresstypecode", 1);
    crmForm.SetFieldReqLevel("donotsendmm", 1);
    crmForm.SetFieldReqLevel("emailaddress1", 1);
    crmForm.SetFieldReqLevel("lastname", 1);
    crmForm.SetFieldReqLevel("firstname", 1);
    crmForm.SetFieldReqLevel("isp_nationalilty", 1);
    crmForm.SetFieldReqLevel("isp_title", 1);
    crmForm.SetFieldReqLevel("isp_province", 1);
    crmForm.SetFieldReqLevel("isp_country", 1);
    crmForm.SetFieldReqLevel("address1_addresstypecode", 1);
    crmForm.SetFieldReqLevel("telephone1", 1);

    if (tmpString6 != null || tmpString7  != null){
            crmForm.SetFieldReqLevel("isp_idnumber",0);
           crmForm.SetFieldReqLevel("isp_passportnumber",0);
                          }
       }
crmForm.all.isp_dateofbirth_c.style.color = '#32cd32';
crmForm.all.isp_passportnumber_c.style.color = '#32cd32';
crmForm.all.isp_idnumber_c.style.color = '#32cd32';
crmForm.all.isp_gender_c.style.color = '#0000FF';
crmForm.all.isp_title_c.style.color = '#32cd32';
crmForm.all.isp_nationalilty_c.style.color = '#32cd32';
crmForm.all.lastname_c.style.color = '#32cd32';
crmForm.all.firstname_c.style.color = '#32cd32';
crmForm.all.isp_countryofcitizenship_c.style.color = '#0000FF';
crmForm.all.isp_countryofregistration_c.style.color = '#0000FF';
crmForm.all.telephone1_c.style.color = '#32cd32';
crmForm.all.mobilephone_c.style.color = '#32cd32';
crmForm.all.emailaddress1_c.style.color = '#32cd32';
crmForm.all.donotsendmm_c.style.color = '#32cd32';
crmForm.all.donotphone_c.style.color = '#0000FF';
crmForm.all.donotfax_c.style.color = '#0000FF';
crmForm.all.donotpostalmail_c.style.color = '#0000FF';
crmForm.all.isp_donotallowsms_c.style.color = '#0000FF';
crmForm.all.donotbulkemail_c.style.color = '#0000FF';
crmForm.all.donotemail_c.style.color = '#0000FF';
crmForm.all.address1_line1_c.style.color = '#32cd32';
crmForm.all.address1_line2_c.style.color = '#32cd32';
crmForm.all.address1_line3_c.style.color = '#32cd32';
crmForm.all.address1_city_c.style.color = '#32cd32';
crmForm.all.address1_postalcode_c.style.color = '#32cd32';
crmForm.all.isp_province_c.style.color = '#32cd32';
crmForm.all.isp_country_c.style.color = '#32cd32';
crmForm.all.address1_addresstypecode_c.style.color = '#32cd32';
crmForm.all.address2_line1_c.style.color = '#0000FF';
crmForm.all.address2_line2_c.style.color = '#0000FF';
crmForm.all.address2_line3_c.style.color = '#0000FF';
crmForm.all.address2_city_c.style.color = '#0000FF';
crmForm.all.address2_postalcode_c.style.color = '#0000FF';
crmForm.all.isp_province2_c.style.color = '#0000FF';
crmForm.all.isp_country2_c.style.color = '#0000FF';
crmForm.all.address2_addresstypecode_c.style.color = '#0000FF';
crmForm.all.isp_businessaccount_c.style.color = '#32cd32';
chkTabActive = function() {
    var opt = new String("Theatre;Golf;Rugby;Cricket;Soccer;Cycling;Running;Wildlife-Outdoors;Quad Biking;4x4;Fishing;Motor racing");
    var crmFld = "isp_hobbies";
document.all(crmFld + "_c").style.display='none';
document.all(crmFld + "_d").style.display='none';
    var x = opt.split(";")
    var i= window.frames.IFRAME_multiselect.document;
        i.writeln("<head><sc" + "ript language='javas" + "cript'>");
        i.writeln("function evaluate() { var res = new String();");
        i.writeln("  for (t = 0; t < " + x.length + "; t++) ");
        i.writeln("    if (document.all('chk' + t).checked==true) res += document.all('chk' + t).value + ';'");
        i.writeln("  if (res == '') res = null;");
        i.writeln("  window.parent.document.all." + crmFld + ".DataValue = res; } </scr" + "ipt>");
        i.writeln("<body bgcolor='#eef0f6' style='font-family: tahoma; font-size:8pt' topmargin=0 leftmargin=0 bottommargin=0 rightmargin=0><table width=100% style='font-family: tahoma; font-size:8pt' border=0 cellpadding=0 cellspacing =0><TR>");
        for (t = 0; t < x.length; t++) {
            i.writeln("<TD><input type=checkbox id='chk" + t + "' value='" + x[t] + "' onclick=\"evaluate();\" ");
            if ((crmForm.all(crmFld).DataValue != null) && (crmForm.all(crmFld).DataValue.indexOf(x[t]) >=0)) i.writeln("checked");
            i.writeln("><nobr>" + x[t] + "</nobr></input></TD>");
            if (Math.floor((t+1) / 5) == Math.ceil((t+1) / 5)) i.writeln("</TR><TR>");
        } i.writeln("</TR></table></body>");
}
}
}
function telephone1_onchange()
{
tmpString1 = crmForm.all.telephone1.DataValue;
tmpString2 = crmForm.all.telephone2.DataValue;
tmpString3 = crmForm.all.mobilephone.DataValue;
if (tmpString1  != null || tmpString2  != null || tmpString3  != null){
crmForm.SetFieldReqLevel("telephone1",0);
crmForm.SetFieldReqLevel("telephone2",0);
crmForm.SetFieldReqLevel("mobilephone",0);
}
else {
crmForm.SetFieldReqLevel("telephone1",2);
crmForm.SetFieldReqLevel("telephone2",2);
crmForm.SetFieldReqLevel("mobilephone",2);
}
}
function telephone2_onchange()
{
tmpString1 = crmForm.all.telephone1.DataValue;
tmpString2 = crmForm.all.telephone2.DataValue;
tmpString3 = crmForm.all.mobilephone.DataValue;
if (tmpString1  != null || tmpString2  != null || tmpString3  != null){
crmForm.SetFieldReqLevel("telephone1",0);
crmForm.SetFieldReqLevel("telephone2",0);
crmForm.SetFieldReqLevel("mobilephone",0);
}
else {
crmForm.SetFieldReqLevel("telephone1",2);
crmForm.SetFieldReqLevel("telephone2",2);
crmForm.SetFieldReqLevel("mobilephone",2);
}
}
function mobilephone_onchange()
{
tmpString1 = crmForm.all.telephone1.DataValue;
tmpString2 = crmForm.all.telephone2.DataValue;
tmpString3 = crmForm.all.mobilephone.DataValue;
if (tmpString1  != null || tmpString2  != null || tmpString3  != null){
crmForm.SetFieldReqLevel("telephone1",0);
crmForm.SetFieldReqLevel("telephone2",0);
crmForm.SetFieldReqLevel("mobilephone",0);
}
else {
crmForm.SetFieldReqLevel("telephone1",2);
crmForm.SetFieldReqLevel("telephone2",2);
crmForm.SetFieldReqLevel("mobilephone",2);
}
}
function birthdate_onchange()
{
var birthdate = crmForm.all.birthdate.DataValue;
if (birthdate == null)
{
crmForm.all.isp_upcomingbirthday.DataValue = null;
return;
}
var today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
birthdate.setFullYear(today.getFullYear());
crmForm.all.isp_upcomingbirthday.DataValue = birthdate;
}
function isp_businessaccount_onchange() {
tmpString6 = crmForm.all.isp_idnumber.DataValue;
tmpString7 = crmForm.all.isp_passportnumber.DataValue;

if (crmForm.all.isp_businessaccount.DataValue == '1') {
    crmForm.SetFieldReqLevel("isp_dateofbirth", 1);
    crmForm.SetFieldReqLevel("isp_passportnumber", 0);
    crmForm.SetFieldReqLevel("isp_idnumber", 1);
    crmForm.SetFieldReqLevel("address1_line1", 1);
    crmForm.SetFieldReqLevel("address1_line3", 1);
    crmForm.SetFieldReqLevel("address1_line2", 1);
    crmForm.SetFieldReqLevel("address1_city", 1);
    crmForm.SetFieldReqLevel("address1_postalcode", 1);
    crmForm.SetFieldReqLevel("address1_addresstypecode", 1);
    crmForm.SetFieldReqLevel("donotsendmm", 1);
    crmForm.SetFieldReqLevel("emailaddress1", 1);
    crmForm.SetFieldReqLevel("lastname", 1);
    crmForm.SetFieldReqLevel("firstname", 1);
    crmForm.SetFieldReqLevel("isp_nationalilty", 1);
    crmForm.SetFieldReqLevel("isp_title", 1);
    crmForm.SetFieldReqLevel("isp_country", 1);
    crmForm.SetFieldReqLevel("address1_addresstypecode", 1);
    crmForm.SetFieldReqLevel("telephone1", 1);
    if (tmpString6 != null || tmpString7  != null){
            crmForm.SetFieldReqLevel("isp_idnumber",0);
           crmForm.SetFieldReqLevel("isp_passportnumber",0);
                          }
       }
}
function isp_idnumber_onchange()
{
tmpString4 = crmForm.all.isp_idnumber.DataValue;
tmpString5 = crmForm.all.isp_passportnumber.DataValue;
if (tmpString4  != null || tmpString5  != null){
crmForm.SetFieldReqLevel("isp_idnumber",0);
crmForm.SetFieldReqLevel("isp_passportnumber",0);
}
else {
crmForm.SetFieldReqLevel("isp_idnumber",2);
crmForm.SetFieldReqLevel("isp_passportnumber",2);
}
}
function isp_passportnumber_onchange()
{
tmpString4 = crmForm.all.isp_idnumber.DataValue;
tmpString5 = crmForm.all.isp_passportnumber.DataValue;
if (tmpString4  != null || tmpString5  != null){
crmForm.SetFieldReqLevel("isp_idnumber",0);
crmForm.SetFieldReqLevel("isp_passportnumber",0);
}
else {
crmForm.SetFieldReqLevel("isp_idnumber",2);
crmForm.SetFieldReqLevel("isp_passportnumber",2);
}
}
function isp_country_onchange() {
     var strCountry = crmForm.all.isp_country.DataValue;
     if (strCountry == '100000203') {
            crmForm.SetFieldReqLevel("isp_province", 1);
        }
     else {
        crmForm.SetFieldReqLevel("isp_province", 0);
           }
       }
function isp_id_onchange() {
    var idnum = crmForm.all.isp_idnumber.DataValue;
    if (idnum.length >= 6 && !isNaN(idnum)) {
        var dob = new Date(idnum.substring(0, 2), idnum.substring(2, 4) - 1, idnum.substring(4, 6));
        if ((dob.getYear() == idnum.substring(0, 2) &&
          dob.getMonth() == idnum.substring(2, 4) - 1 &&
          dob.getDate() == idnum.substring(4, 6))) {
            crmForm.all.isp_dateofbirth.DataValue = dob;
        }
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
