function IFRAME_multiselect_onload()
{

}
function Form_onsave()
{
    //ID Number Check and Date of Birth **
    var idNumber = Xrm.Page.getAttribute("isp_idnumber").getValue();
    if (idNumber != null && idNumber != "") {
        if (!validateIDNumber(idNumber)) {
            alert("Invalid ID Number entered");
            Xrm.Page.getControl("isp_idnumber").setFocus(true);
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
if (Xrm.Page.ui.getFormType() < 3)
{
var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async = false;
var s;

s = "/isp-asp/dupcheck.aspx?telephone1="
if (Xrm.Page.getAttribute("telephone1").getValue() != undefined) s+= escape(Xrm.Page.getAttribute("telephone1").getValue());
s += "&telephone2="
 if (Xrm.Page.getAttribute("telephone2").getValue() != undefined) s+=  escape(Xrm.Page.getAttribute("telephone2").getValue());
s += "&mobilephone="
 if (Xrm.Page.getAttribute("mobilephone").getValue() != undefined) s+=  escape(Xrm.Page.getAttribute("mobilephone").getValue());
s += "&lastname="
 if (Xrm.Page.getAttribute("lastname").getValue() != undefined) s+=  escape(Xrm.Page.getAttribute("lastname").getValue());
s += "&firstname="
 if (Xrm.Page.getAttribute("firstname").getValue() != undefined) s+=  escape(Xrm.Page.getAttribute("firstname").getValue());
s += "&accountid="
 if (Xrm.Page.data.entity.getId() != undefined)
s+=  escape(Xrm.Page.data.entity.getId());
s += "&entity=contact&new=";
 if (Xrm.Page.ui.getFormType() == 1) { s += "yes"; }
 if (Xrm.Page.ui.getFormType() == 2)  {
if (Xrm.Page.telephone1.IsDirty || Xrm.Page.telephone2.IsDirty || Xrm.Page.mobilephone.IsDirty || Xrm.Page.lastname.IsDirty || Xrm.Page.firstname.IsDirty) { s += "yes"; } else { s += "no"; };
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
if (Xrm.Page.ui.getFormType() < 5)
{
tmpString1 = Xrm.Page.getAttribute("telephone1").getValue();
tmpString2 = Xrm.Page.getAttribute("telephone2").getValue();
tmpString3 = Xrm.Page.getAttribute("mobilephone").getValue();
if (tmpString1  != null || tmpString2  != null || tmpString3  != null) {
Xrm.Page.SetFieldReqLevel("telephone1",2);
}
tmpString6 = Xrm.Page.getAttribute("isp_idnumber").getValue();
tmpString7 = Xrm.Page.getAttribute("isp_passportnumber").getValue();

if (Xrm.Page.getAttribute("isp_businessaccount").getValue() == '1') {
    Xrm.Page.getAttribute("isp_dateofbirth").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_passportnumber").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_idnumber").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_line1").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_line3").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_line2").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_city").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_postalcode").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_addresstypecode").setRequiredLevel("required");
    Xrm.Page.getAttribute("donotsendmm").setRequiredLevel("required");
    Xrm.Page.getAttribute("emailaddress1").setRequiredLevel("required");
    Xrm.Page.getAttribute("lastname").setRequiredLevel("required");
    Xrm.Page.getAttribute("firstname").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_nationalilty").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_title").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_province").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_country").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_addresstypecode").setRequiredLevel("required");
    Xrm.Page.getAttribute("telephone1").setRequiredLevel("required");

    if (tmpString6 != null || tmpString7  != null){
            Xrm.Page.SetFieldReqLevel("isp_idnumber",0);
           Xrm.Page.SetFieldReqLevel("isp_passportnumber",0);
                          }
       }
Xrm.Page.isp_dateofbirth_c.style.color = '#32cd32';
Xrm.Page.isp_passportnumber_c.style.color = '#32cd32';
Xrm.Page.isp_idnumber_c.style.color = '#32cd32';
Xrm.Page.isp_gender_c.style.color = '#0000FF';
Xrm.Page.isp_title_c.style.color = '#32cd32';
Xrm.Page.isp_nationalilty_c.style.color = '#32cd32';
Xrm.Page.lastname_c.style.color = '#32cd32';
Xrm.Page.firstname_c.style.color = '#32cd32';
Xrm.Page.isp_countryofcitizenship_c.style.color = '#0000FF';
Xrm.Page.isp_countryofregistration_c.style.color = '#0000FF';
Xrm.Page.telephone1_c.style.color = '#32cd32';
Xrm.Page.mobilephone_c.style.color = '#32cd32';
Xrm.Page.emailaddress1_c.style.color = '#32cd32';
Xrm.Page.donotsendmm_c.style.color = '#32cd32';
Xrm.Page.donotphone_c.style.color = '#0000FF';
Xrm.Page.donotfax_c.style.color = '#0000FF';
Xrm.Page.donotpostalmail_c.style.color = '#0000FF';
Xrm.Page.isp_donotallowsms_c.style.color = '#0000FF';
Xrm.Page.donotbulkemail_c.style.color = '#0000FF';
Xrm.Page.donotemail_c.style.color = '#0000FF';
Xrm.Page.address1_line1_c.style.color = '#32cd32';
Xrm.Page.address1_line2_c.style.color = '#32cd32';
Xrm.Page.address1_line3_c.style.color = '#32cd32';
Xrm.Page.address1_city_c.style.color = '#32cd32';
Xrm.Page.address1_postalcode_c.style.color = '#32cd32';
Xrm.Page.isp_province_c.style.color = '#32cd32';
Xrm.Page.isp_country_c.style.color = '#32cd32';
Xrm.Page.address1_addresstypecode_c.style.color = '#32cd32';
Xrm.Page.address2_line1_c.style.color = '#0000FF';
Xrm.Page.address2_line2_c.style.color = '#0000FF';
Xrm.Page.address2_line3_c.style.color = '#0000FF';
Xrm.Page.address2_city_c.style.color = '#0000FF';
Xrm.Page.address2_postalcode_c.style.color = '#0000FF';
Xrm.Page.isp_province2_c.style.color = '#0000FF';
Xrm.Page.isp_country2_c.style.color = '#0000FF';
Xrm.Page.address2_addresstypecode_c.style.color = '#0000FF';
Xrm.Page.isp_businessaccount_c.style.color = '#32cd32';
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
        i.writeln("  window.parent.document.all." + crmFld + ".setValue(res); } </scr" + "ipt>");
        i.writeln("<body bgcolor='#eef0f6' style='font-family: tahoma; font-size:8pt' topmargin=0 leftmargin=0 bottommargin=0 rightmargin=0><table width=100% style='font-family: tahoma; font-size:8pt' border=0 cellpadding=0 cellspacing =0><TR>");
        for (t = 0; t < x.length; t++) {
            i.writeln("<TD><input type=checkbox id='chk" + t + "' value='" + x[t] + "' onclick=\"evaluate();\" ");
            if ((Xrm.Page(crmFld).getValue() != null) && (Xrm.Page(crmFld).getValue().indexOf(x[t]) >=0)) i.writeln("checked");
            i.writeln("><nobr>" + x[t] + "</nobr></input></TD>");
            if (Math.floor((t+1) / 5) == Math.ceil((t+1) / 5)) i.writeln("</TR><TR>");
        } i.writeln("</TR></table></body>");
}
}
}
function telephone1_onchange()
{
tmpString1 = Xrm.Page.getAttribute("telephone1").getValue();
tmpString2 = Xrm.Page.getAttribute("telephone2").getValue();
tmpString3 = Xrm.Page.getAttribute("mobilephone").getValue();
if (tmpString1  != null || tmpString2  != null || tmpString3  != null){
Xrm.Page.SetFieldReqLevel("telephone1",0);
Xrm.Page.SetFieldReqLevel("telephone2",0);
Xrm.Page.SetFieldReqLevel("mobilephone",0);
}
else {
Xrm.Page.SetFieldReqLevel("telephone1",2);
Xrm.Page.SetFieldReqLevel("telephone2",2);
Xrm.Page.SetFieldReqLevel("mobilephone",2);
}
}
function telephone2_onchange()
{
tmpString1 = Xrm.Page.getAttribute("telephone1").getValue();
tmpString2 = Xrm.Page.getAttribute("telephone2").getValue();
tmpString3 = Xrm.Page.getAttribute("mobilephone").getValue();
if (tmpString1  != null || tmpString2  != null || tmpString3  != null){
Xrm.Page.SetFieldReqLevel("telephone1",0);
Xrm.Page.SetFieldReqLevel("telephone2",0);
Xrm.Page.SetFieldReqLevel("mobilephone",0);
}
else {
Xrm.Page.SetFieldReqLevel("telephone1",2);
Xrm.Page.SetFieldReqLevel("telephone2",2);
Xrm.Page.SetFieldReqLevel("mobilephone",2);
}
}
function mobilephone_onchange()
{
tmpString1 = Xrm.Page.getAttribute("telephone1").getValue();
tmpString2 = Xrm.Page.getAttribute("telephone2").getValue();
tmpString3 = Xrm.Page.getAttribute("mobilephone").getValue();
if (tmpString1  != null || tmpString2  != null || tmpString3  != null){
Xrm.Page.SetFieldReqLevel("telephone1",0);
Xrm.Page.SetFieldReqLevel("telephone2",0);
Xrm.Page.SetFieldReqLevel("mobilephone",0);
}
else {
Xrm.Page.SetFieldReqLevel("telephone1",2);
Xrm.Page.SetFieldReqLevel("telephone2",2);
Xrm.Page.SetFieldReqLevel("mobilephone",2);
}
}
function birthdate_onchange()
{
var birthdate = Xrm.Page.getAttribute("birthdate").getValue();
if (birthdate == null)
{
Xrm.Page.getAttribute("isp_upcomingbirthday").setValue(null);
return;
}
var today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
birthdate.setFullYear(today.getFullYear());
Xrm.Page.getAttribute("isp_upcomingbirthday").setValue(birthdate);
}
function isp_businessaccount_onchange() {
tmpString6 = Xrm.Page.getAttribute("isp_idnumber").getValue();
tmpString7 = Xrm.Page.getAttribute("isp_passportnumber").getValue();

if (Xrm.Page.getAttribute("isp_businessaccount").getValue() == '1') {
    Xrm.Page.getAttribute("isp_dateofbirth").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_passportnumber").setRequiredLevel("none");
    Xrm.Page.getAttribute("isp_idnumber").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_line1").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_line3").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_line2").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_city").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_postalcode").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_addresstypecode").setRequiredLevel("required");
    Xrm.Page.getAttribute("donotsendmm").setRequiredLevel("required");
    Xrm.Page.getAttribute("emailaddress1").setRequiredLevel("required");
    Xrm.Page.getAttribute("lastname").setRequiredLevel("required");
    Xrm.Page.getAttribute("firstname").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_nationalilty").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_title").setRequiredLevel("required");
    Xrm.Page.getAttribute("isp_country").setRequiredLevel("required");
    Xrm.Page.getAttribute("address1_addresstypecode").setRequiredLevel("required");
    Xrm.Page.getAttribute("telephone1").setRequiredLevel("required");
    if (tmpString6 != null || tmpString7  != null){
            Xrm.Page.SetFieldReqLevel("isp_idnumber",0);
           Xrm.Page.SetFieldReqLevel("isp_passportnumber",0);
                          }
       }
}
function isp_idnumber_onchange()
{
tmpString4 = Xrm.Page.getAttribute("isp_idnumber").getValue();
tmpString5 = Xrm.Page.getAttribute("isp_passportnumber").getValue();
if (tmpString4  != null || tmpString5  != null){
Xrm.Page.SetFieldReqLevel("isp_idnumber",0);
Xrm.Page.SetFieldReqLevel("isp_passportnumber",0);
}
else {
Xrm.Page.SetFieldReqLevel("isp_idnumber",2);
Xrm.Page.SetFieldReqLevel("isp_passportnumber",2);
}
}
function isp_passportnumber_onchange()
{
tmpString4 = Xrm.Page.getAttribute("isp_idnumber").getValue();
tmpString5 = Xrm.Page.getAttribute("isp_passportnumber").getValue();
if (tmpString4  != null || tmpString5  != null){
Xrm.Page.SetFieldReqLevel("isp_idnumber",0);
Xrm.Page.SetFieldReqLevel("isp_passportnumber",0);
}
else {
Xrm.Page.SetFieldReqLevel("isp_idnumber",2);
Xrm.Page.SetFieldReqLevel("isp_passportnumber",2);
}
}
function isp_country_onchange() {
     var strCountry = Xrm.Page.getAttribute("isp_country").getValue();
     if (strCountry == '100000203') {
            Xrm.Page.getAttribute("isp_province").setRequiredLevel("required");
        }
     else {
        Xrm.Page.getAttribute("isp_province").setRequiredLevel("none");
           }
       }
function isp_id_onchange() {
    var idnum = Xrm.Page.getAttribute("isp_idnumber").getValue();
    if (idnum.length >= 6 && !isNaN(idnum)) {
        var dob = new Date(idnum.substring(0, 2), idnum.substring(2, 4) - 1, idnum.substring(4, 6));
        if ((dob.getYear() == idnum.substring(0, 2) &&
          dob.getMonth() == idnum.substring(2, 4) - 1 &&
          dob.getDate() == idnum.substring(4, 6))) {
            Xrm.Page.getAttribute("isp_dateofbirth").setValue(dob);
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
