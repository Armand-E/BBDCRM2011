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
    var strSubCategory = Xrm.Page.getAttribute("isp_product").getValue();
    var CRM_FORM_TYPE_CREATE = 1;
    var CRM_FORM_TYPE_UPDATE = 2;
    switch (Xrm.Page.ui.getFormType()) {
        case CRM_FORM_TYPE_CREATE:
        case CRM_FORM_TYPE_UPDATE:
            productcategory = Xrm.Page.getAttribute("isp_productcategory");
            product = Xrm.Page.getAttribute("isp_product");
            productbackup = Xrm.Page.getAttribute("isp_product");
            product.originalPicklistOptions = product.Options;
            productcategory.originalPicklistOptions = productcategory.Options;
            productbackup.originalPicklistOptions = productbackup.Options;
            if (Xrm.Page.getAttribute("isp_productcategory").getValue() == null) {
                product.Disabled = true;
            }
            else
            break;
    }
    Xrm.Page.getAttribute("isp_product").setValue(strSubCategory);
}
function isp_productcategory_onchange() {
    var iIndexNew = -1;
    var iEndIndex = -1;
    switch (productcategory.getValue()) {
        case "1":
            iIndexNew = 1;
            break;
        case "2":
            iIndexNew = 0;
            break;
    }
    product.Options = productbackup.originalPicklistOptions
    iEndIndex = Xrm.Page.getAttribute("isp_product").getOptions().length
    if (iIndexNew > -1 && iEndIndex > -1) {
        var oTempArray = new Array();
        var iIndex = 0;
        var iTempValue = 0;
        for (var i = 0; i <= iEndIndex - 1; i++) {
            if (product.Options[i].getValue() == 0) {
                oTempArray[iIndex] = product.originalPicklistOptions[i];
                iIndex++;
            }
            else if (product.Options[i].getValue() % 2 == iIndexNew) {
                oTempArray[iIndex] = product.originalPicklistOptions[i];
                iIndex++;
            }
        }
        product.Options = oTempArray;
        product.Disabled = false;
        Xrm.Page.getAttribute("isp_product").setRequiredLevel("recommended");
    }
    else {
        product.setValue(null);
        product.Disabled = true;
        Xrm.Page.getAttribute("isp_product").setRequiredLevel("none");
    }
}
