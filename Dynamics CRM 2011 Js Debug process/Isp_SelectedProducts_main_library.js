function Form_onload()
{
var strSubCategory = crmForm.all.isp_product.DataValue;
var CRM_FORM_TYPE_CREATE = 1;
var CRM_FORM_TYPE_UPDATE = 2;
switch (crmForm.FormType)
{
   case CRM_FORM_TYPE_CREATE:
   case CRM_FORM_TYPE_UPDATE:

      productcatagory = crmForm.all.isp_productcatagory;
      product = crmForm.all.isp_product;
      productbackup = crmForm.all.isp_product;

      product.originalPicklistOptions = product.Options;
      productcatagory.originalPicklistOptions = productcatagory.Options;
      productbackup.originalPicklistOptions = productbackup.Options;

       if (crmForm.all.isp_productcatagory.DataValue == null)
      {
        product.Disabled = true;
      }
      else
      {
         isp_productcatagory_onchange0();
      }
      break;
}
crmForm.all.isp_product.DataValue = strSubCategory;
}
function isp_productcatagory_onchange()
{
var iIndexNew = -1;
var iEndIndex= -1;
switch (productcatagory.DataValue)
{
	case "1":
		iIndexNew = 1;
		break;
	case "2":
		iIndexNew = 0;
		break;
}
product.Options = productbackup.originalPicklistOptions
iEndIndex = crmForm.all.isp_product.Options.length
if (iIndexNew > -1 && iEndIndex> -1)
{
	var oTempArray = new Array();
	var iIndex = 0;
                     var iTempValue = 0;

               	for (var i = 0; i <= iEndIndex-1; i++)
	{
                                 if(product.Options[i].DataValue == 0)
                                  {
		oTempArray[iIndex] = product.originalPicklistOptions[i];
		iIndex++;
                                  }
                                   else if(product.Options[i].DataValue % 2 == iIndexNew)
                                  {
		oTempArray[iIndex] = product.originalPicklistOptions[i];
		iIndex++;
                                  }
                     	}
	product.Options = oTempArray;
                     product.Disabled = false;
                     crmForm.SetFieldReqLevel("isp_product",2);
}
else
{
	product.DataValue = null;
	product.Disabled = true;
                     crmForm.SetFieldReqLevel("isp_product",0);
}
}
