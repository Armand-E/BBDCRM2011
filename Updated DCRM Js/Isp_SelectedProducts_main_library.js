function Form_onload()
{
var strSubCategory = Xrm.Page.getAttribute("isp_product").getValue();
var CRM_FORM_TYPE_CREATE = 1;
var CRM_FORM_TYPE_UPDATE = 2;
switch (Xrm.Page.ui.getFormType())
{
   case CRM_FORM_TYPE_CREATE:
   case CRM_FORM_TYPE_UPDATE:

      productcatagory = Xrm.Page.getAttribute("isp_productcatagory");
      product = Xrm.Page.getAttribute("isp_product");
      productbackup = Xrm.Page.getAttribute("isp_product");

      product.originalPicklistOptions = product.Options;
      productcatagory.originalPicklistOptions = productcatagory.Options;
      productbackup.originalPicklistOptions = productbackup.Options;

       if (Xrm.Page.getAttribute("isp_productcatagory").getValue() == null)
      {
        product.Disabled = true;
      }
      else
      {
         isp_productcatagory_onchange();
      }
      break;
}
Xrm.Page.getAttribute("isp_product").setValue(strSubCategory);
}
function isp_productcatagory_onchange()
{
var iIndexNew = -1;
var iEndIndex= -1;
switch (productcatagory.getValue())
{
	case "1":
		iIndexNew = 1;
		break;
	case "2":
		iIndexNew = 0;
		break;
}
product.Options = productbackup.originalPicklistOptions
iEndIndex = Xrm.Page.getAttribute("isp_product").getOptions().length
if (iIndexNew > -1 && iEndIndex> -1)
{
	var oTempArray = new Array();
	var iIndex = 0;
                     var iTempValue = 0;

               	for (var i = 0; i <= iEndIndex-1; i++)
	{
                                 if(product.Options[i].getValue() == 0)
                                  {
		oTempArray[iIndex] = product.originalPicklistOptions[i];
		iIndex++;
                                  }
                                   else if(product.Options[i].getValue() % 2 == iIndexNew)
                                  {
		oTempArray[iIndex] = product.originalPicklistOptions[i];
		iIndex++;
                                  }
                     	}
	product.Options = oTempArray;
                     product.Disabled = false;
                     Xrm.Page.SetFieldReqLevel("isp_product",2);
}
else
{
	product.setValue(null);
	product.Disabled = true;
                     Xrm.Page.SetFieldReqLevel("isp_product",0);
}
}
