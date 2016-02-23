var isp_authorisedperson1_changed = false;
var isp_authorisedperson2_changed = false;
var isp_authorisedperson3_changed = false;
var isp_authorisedperson4_changed = false;
var isp_authorisedperson5_changed = false;
var isp_authorisedperson6_changed = false;
var isp_authorisedperson7_changed = false;
var isp_authorisedperson8_changed = false;
var isp_authorisedperson9_changed = false;
var isp_authorisedcardadministrator_changed = false;
var isp_authorisedcardadministrator2_changed = false;
var isp_authorisedcardadministrator3_changed = false;
var isp_lastname_changed = false;
var isp_firstname_changed = false;
var isp_authoritytoact_changed =false;
var isp_currentperson1_changed = false;
var isp_currentperson2_changed = false;
var isp_currentperson3_changed = false;
var isp_currentperson4_changed = false;
var isp_currentperson5_changed = false;
var isp_currentperson6_changed = false;
var isp_currentperson7_changed = false;
var isp_currentperson8_changed = false;
var isp_currentperson9_changed = false;
var isp_internetbankingperson1_changed = false;
var isp_internetbankingperson2_changed = false;
var isp_internetbankingperson3_changed = false;
var isp_internetbankingperson4_changed = false;
var isp_internetbankingperson5_changed = false;
var isp_internetbankingperson6_changed = false;
var isp_internetbankingperson7_changed = false;
var isp_internetbankingperson8_changed = false;
var isp_internetbankingperson9_changed = false;
var isp_ceomd_changed = false;
var isp_cfo_changed = false;
var type = "I";

function WorldCheckNameSearch(field, name) {
debugger
    var accountId = crmFormSubmit.crmFormSubmitId.value;
    accountId = accountId.substring(1, accountId.length - 1);

    var search = {
        "search": {
            "BankName": "",
            "FundsCountry": "",
            "IndividualCountry": "",
            "ListSearchOnly": "false",
            "Name": name,
            "Type": type,
            "Username": ""
        },
        "AccountId": accountId,
        "CrmField": field
    };

    $.support.cors = true;
    $.ajax({
        type: 'POST',
        url: 'http://jhbh-uat-crm01:8008/api/WCResults',
        data: stringify(search),
        contentType: 'application/json',
        success: function (data) {
            console.log("success");
        },
        error: function (data) {
            console.log("error")
        }
    });
}

// implement JSON.stringify serialization
function stringify(obj) {
    var t = typeof (obj);
    if (t != "object" || obj === null) {
        // simple data type
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);
    }
    else {
        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);
        for (n in obj) {
            v = obj[n]; t = typeof (v);
            if (t == "string") v = '"' + v + '"';
            else if (t == "object" && v !== null) v = stringify(v);
            json.push((arr ? "" : '"' + n + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};

///////////////////////////////////////////////////////////////////
// Field on change events
///////////////////////////////////////////////////////////////////

//Authorised to Trade
function isp_authorisedperson1_onchange() {
    isp_authorisedperson1_changed = true;
}

function isp_authorisedperson2_onchange() {
    isp_authorisedperson2_changed = true;
}

function isp_authorisedperson3_onchange() {
    isp_authorisedperson3_changed = true;
}

function isp_authorisedperson4_onchange() {
    isp_authorisedperson4_changed = true;
}

function isp_authorisedperson5_onchange() {
    isp_authorisedperson5_changed = true;
}

function isp_authorisedperson6_onchange() {
    isp_authorisedperson6_changed = true;
}

function isp_authorisedperson7_onchange() {
    isp_authorisedperson7_changed = true;
}

function isp_authorisedperson8_onchange() {
    isp_authorisedperson8_changed = true;
}

function isp_authorisedperson9_onchange() {
    isp_authorisedperson9_changed = true;
}

function isp_authorisedcardadministrator_onchange() {
    isp_authorisedcardadministrator_changed = true;
}

function isp_authorisedcardadministrator2_onchange() {
    isp_authorisedcardadministrator2_changed = true;
}

function isp_authorisedcardadministrator3_onchange() {
    isp_authorisedcardadministrator3_changed = true;
}

function isp_lastnameWC_onchange() {
    isp_lastname_changed = true;
}

function isp_firstnameWC_onchange() {
    isp_firstname_changed = true;
}

function isp_authoritytoact_onchange() {
    isp_authoritytoact_changed = true;
}

//Board Resolution
function isp_currentperson1_onchange() {
    isp_currentperson1_changed = true;
}

function isp_currentperson2_onchange() {
    isp_currentperson2_changed = true;
}

function isp_currentperson3_onchange() {
    isp_currentperson3_changed = true;
}

function isp_currentperson4_onchange() {
    isp_currentperson4_changed = true;
}

function isp_currentperson5_onchange() {
    isp_currentperson5_changed = true;
}

function isp_currentperson6_onchange() {
    isp_currentperson6_changed = true;
}

function isp_currentperson7_onchange() {
    isp_currentperson7_changed = true;
}

function isp_currentperson8_onchange() {
    isp_currentperson8_changed = true;
}

function isp_currentperson9_onchange() {
    isp_currentperson9_changed = true;
}

function isp_internetbankingperson1_onchange() {
    isp_internetbankingperson1_changed = true;
}

function isp_internetbankingperson2_onchange() {
    isp_internetbankingperson2_changed = true;
}

function isp_internetbankingperson3_onchange() {
    isp_internetbankingperson3_changed = true;
}

function isp_internetbankingperson4_onchange() {
    isp_internetbankingperson4_changed = true;
}

function isp_internetbankingperson5_onchange() {
    isp_internetbankingperson5_changed = true;
}

function isp_internetbankingperson6_onchange() {
    isp_internetbankingperson6_changed = true;
}

function isp_internetbankingperson7_onchange() {
    isp_internetbankingperson7_changed = true;
}

function isp_internetbankingperson8_onchange() {
    isp_internetbankingperson8_changed = true;
}

function isp_internetbankingperson9_onchange() {
    isp_internetbankingperson9_changed = true;
}

//Directors
function isp_ceomd_onchange() {
    isp_ceomd_changed = true;
}

function isp_cfo_onchange() {
    isp_cfo_changed = true;
}

function CheckIfIndividual(field) {
    var regNo = Xrm.Page.data.entity.attributes.get(field).getValue();
    if (regNo != null) {
        if (regNo.indexOf("/") > -1) return true;
    }
    return false;
}


function OnSave_SearchNames() {
    var allNames =
    [
        { name: 'isp_authoritytoact', value: isp_authoritytoact_changed ? (Xrm.Page.data.entity.attributes.get("isp_authoritytoact").getValue() == null ? "" :  Xrm.Page.data.entity.attributes.get("isp_authoritytoact").getValue()[0].name) : "" },
        { name: 'isp_authorisedperson1', value: isp_authorisedperson1_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedperson1").getValue() == null ? "" :  Xrm.Page.data.entity.attributes.get("isp_authorisedperson1").getValue()[0].name) : "" },
        { name: 'isp_authorisedperson2', value: isp_authorisedperson2_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedperson2").getValue() == null ? "" :  Xrm.Page.data.entity.attributes.get("isp_authorisedperson2").getValue()[0].name) : "" },
        { name: 'isp_authorisedperson3', value: isp_authorisedperson3_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedperson3").getValue() == null ? "" :  Xrm.Page.data.entity.attributes.get("isp_authorisedperson2").getValue()[0].name) : "" },
        { name: 'isp_authorisedperson4', value: isp_authorisedperson4_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedperson4").getValue() == null ? "" :  Xrm.Page.data.entity.attributes.get("isp_authorisedperson4").getValue()[0].name) : "" },
        { name: 'isp_authorisedperson5', value: isp_authorisedperson5_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedperson5").getValue() == null ? "" :  Xrm.Page.data.entity.attributes.get("isp_authorisedperson5").getValue()[0].name) : "" },
        { name: 'isp_authorisedperson6', value: isp_authorisedperson6_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedperson6").getValue() == null ? "" :  Xrm.Page.data.entity.attributes.get("isp_authorisedperson6").getValue()[0].name) : "" },
        { name: 'isp_authorisedperson7', value: isp_authorisedperson7_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedperson7").getValue() == null ? "" :  Xrm.Page.data.entity.attributes.get("isp_authorisedperson7").getValue()[0].name) : "" },
        { name: 'isp_authorisedperson8', value: isp_authorisedperson8_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedperson8").getValue() == null ? "" :  Xrm.Page.data.entity.attributes.get("isp_authorisedperson8").getValue()[0].name) : "" },
        { name: 'isp_authorisedperson9', value: isp_authorisedperson9_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedperson9").getValue() == null ? "" :  Xrm.Page.data.entity.attributes.get("isp_authorisedperson9").getValue()[0].name) : "" },
        { name: 'isp_firstname + isp_lastname', value: isp_firstname_changed || isp_lastname_changed ? Xrm.Page.data.entity.attributes.get("isp_firstname").getValue() + ' ' + Xrm.Page.data.entity.attributes.get("isp_lastname").getValue() : "" },
        { name: 'isp_currentperson1', value: isp_currentperson1_changed ? (Xrm.Page.data.entity.attributes.get("isp_currentperson1").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_currentperson1").getValue()[0].name) : "" },
        { name: 'isp_currentperson2', value: isp_currentperson2_changed ? (Xrm.Page.data.entity.attributes.get("isp_currentperson2").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_currentperson2").getValue()[0].name) : "" },
        { name: 'isp_currentperson3', value: isp_currentperson3_changed ? (Xrm.Page.data.entity.attributes.get("isp_currentperson3").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_currentperson3").getValue()[0].name) : "" },
        { name: 'isp_currentperson4', value: isp_currentperson4_changed ? (Xrm.Page.data.entity.attributes.get("isp_currentperson4").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_currentperson4").getValue()[0].name) : "" },
        { name: 'isp_currentperson5', value: isp_currentperson5_changed ? (Xrm.Page.data.entity.attributes.get("isp_currentperson5").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_currentperson5").getValue()[0].name) : "" },
        { name: 'isp_currentperson6', value: isp_currentperson6_changed ? (Xrm.Page.data.entity.attributes.get("isp_currentperson6").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_currentperson6").getValue()[0].name) : "" },
        { name: 'isp_currentperson7', value: isp_currentperson7_changed ? (Xrm.Page.data.entity.attributes.get("isp_currentperson7").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_currentperson7").getValue()[0].name) : "" },
        { name: 'isp_currentperson8', value: isp_currentperson8_changed ? (Xrm.Page.data.entity.attributes.get("isp_currentperson8").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_currentperson8").getValue()[0].name) : "" },
        { name: 'isp_currentperson9', value: isp_currentperson9_changed ? (Xrm.Page.data.entity.attributes.get("isp_currentperson9").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_currentperson9").getValue()[0].name) : "" },
        { name: 'isp_internetbankingperson1', value: isp_internetbankingperson1_changed ? (Xrm.Page.data.entity.attributes.get("isp_internetbankingperson1").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_internetbankingperson1").getValue()[0].name) : "" },
        { name: 'isp_internetbankingperson2', value: isp_internetbankingperson2_changed ? (Xrm.Page.data.entity.attributes.get("isp_internetbankingperson2").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_internetbankingperson2").getValue()[0].name) : "" },
        { name: 'isp_internetbankingperson3', value: isp_internetbankingperson3_changed ? (Xrm.Page.data.entity.attributes.get("isp_internetbankingperson3").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_internetbankingperson3").getValue()[0].name) : "" },
        { name: 'isp_internetbankingperson4', value: isp_internetbankingperson4_changed ? (Xrm.Page.data.entity.attributes.get("isp_internetbankingperson4").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_internetbankingperson4").getValue()[0].name) : "" },
        { name: 'isp_internetbankingperson5', value: isp_internetbankingperson5_changed ? (Xrm.Page.data.entity.attributes.get("isp_internetbankingperson5").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_internetbankingperson5").getValue()[0].name) : "" },
        { name: 'isp_internetbankingperson6', value: isp_internetbankingperson6_changed ? (Xrm.Page.data.entity.attributes.get("isp_internetbankingperson6").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_internetbankingperson6").getValue()[0].name) : "" },
        { name: 'isp_internetbankingperson7', value: isp_internetbankingperson7_changed ? (Xrm.Page.data.entity.attributes.get("isp_internetbankingperson7").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_internetbankingperson7").getValue()[0].name) : "" },
        { name: 'isp_internetbankingperson8', value: isp_internetbankingperson8_changed ? (Xrm.Page.data.entity.attributes.get("isp_internetbankingperson8").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_internetbankingperson8").getValue()[0].name) : "" },
        { name: 'isp_internetbankingperson9', value: isp_internetbankingperson9_changed ? (Xrm.Page.data.entity.attributes.get("isp_internetbankingperson9").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_internetbankingperson9").getValue()[0].name) : "" },
        { name: 'isp_authorisedcardadministrator', value: isp_authorisedcardadministrator_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedcardadministrator").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_authorisedcardadministrator").getValue()[0].name) : "" },
        { name: 'isp_authorisedcardadministrator2', value: isp_authorisedcardadministrator2_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedcardadministrator").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_authorisedcardadministrator2").getValue()[0].name) : "" },
        { name: 'isp_authorisedcardadministrator3', value: isp_authorisedcardadministrator3_changed ? (Xrm.Page.data.entity.attributes.get("isp_authorisedcardadministrator").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_authorisedcardadministrator3").getValue()[0].name) : "" },
        { name: 'isp_ceomd', value: isp_ceomd_changed ? (Xrm.Page.data.entity.attributes.get("isp_ceomd").getValue == null ? "" : Xrm.Page.data.entity.attributes.get("isp_ceomd").getValue()[0].name) : "" },
        { name: 'isp_cfo', value: isp_cfo_changed ? (Xrm.Page.data.entity.attributes.get("isp_cfo").getValue() == null ? "" : Xrm.Page.data.entity.attributes.get("isp_cfo").getValue()[0].name) : "" },
    ];
    
    var uniqueNames = [];
    var removeNames = [];
    for (var key in allNames) {
        if ($.inArray(allNames[key].value, uniqueNames) == -1) {
            uniqueNames.push(allNames[key].value);
        }
        else {
            removeNames.push(allNames[key]);
        }
    }

    for (var r = 0; r < removeNames.length; r++) {
        allNames.splice($.inArray(removeNames[r], allNames));
    }

    for(var name in allNames)
    {
        if(allNames[name].value != "")
        {
	WorldCheckNameSearch(allNames[name].name, allNames[name].value)
     } 
   }
}