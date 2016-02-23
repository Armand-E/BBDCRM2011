function Form_onload() {
    debugger
    function FindNavItem(vstrNavItemID) {
        return document.all["crmNavBar"].all[vstrNavItemID];
    }
    function ShowHideNavItem(vstrNavItemID, vblnVisible) {
        try {
            FindNavItem(vstrNavItemID).style.display = (vblnVisible == true) ? "inline" : "none";
        }
        catch (e) {
        }
    }
    SetNavItemIndex("nav_opportunity_isp_selectedproductses", 2);
    function SetNavItemIndex(vstrNavItemID, vintTargetIndex) {
        try {
            var objObjectBeingMoved = FindNavItem(vstrNavItemID);
            objObjectBeingMoved.swapNode(objObjectBeingMoved.parentElement.childNodes(vintTargetIndex));
        }
        catch (e) {
        }
    }
    var strSubCategory = crmForm.all.isp_product.DataValue;
    var CRM_FORM_TYPE_CREATE = 1;
    var CRM_FORM_TYPE_UPDATE = 2;
    switch (crmForm.FormType) {
        case CRM_FORM_TYPE_CREATE:
        case CRM_FORM_TYPE_UPDATE:
            productcategory = crmForm.all.isp_productcategory;
            product = crmForm.all.isp_product;
            productbackup = crmForm.all.isp_product;
            product.originalPicklistOptions = product.Options;
            productcategory.originalPicklistOptions = productcategory.Options;
            productbackup.originalPicklistOptions = productbackup.Options;
            if (crmForm.all.isp_productcategory.DataValue == null) {
                product.Disabled = true;
            }
            else
            break;
    }
    crmForm.all.isp_product.DataValue = strSubCategory;
}
function isp_productcategory_onchange() {
    var iIndexNew = -1;
    var iEndIndex = -1;
    switch (productcategory.DataValue) {
        case "1":
            iIndexNew = 1;
            break;
        case "2":
            iIndexNew = 0;
            break;
    }
    product.Options = productbackup.originalPicklistOptions
    iEndIndex = crmForm.all.isp_product.Options.length
    if (iIndexNew > -1 && iEndIndex > -1) {
        var oTempArray = new Array();
        var iIndex = 0;
        var iTempValue = 0;
        for (var i = 0; i <= iEndIndex - 1; i++) {
            if (product.Options[i].DataValue == 0) {
                oTempArray[iIndex] = product.originalPicklistOptions[i];
                iIndex++;
            }
            else if (product.Options[i].DataValue % 2 == iIndexNew) {
                oTempArray[iIndex] = product.originalPicklistOptions[i];
                iIndex++;
            }
        }
        product.Options = oTempArray;
        product.Disabled = false;
        crmForm.SetFieldReqLevel("isp_product", 2);
    }
    else {
        product.DataValue = null;
        product.Disabled = true;
        crmForm.SetFieldReqLevel("isp_product", 0);
    }
}
