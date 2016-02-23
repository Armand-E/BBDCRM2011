Form_onload = ->
  xml = "" + "<?xml version=\"1.0\" encoding=\"utf-8\"?>" + "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">" + " <soap:Body>" + " <query xmlns:q1=\"http://schemas.microsoft.com/crm/2006/Query\" xsi:type=\"q1:QueryExpression\" xmlns=\"http://schemas.microsoft.com/crm/2006/WebServices\">" + " <q1:EntityName>systemuser</q1:EntityName>" + " <q1:ColumnSet xsi:type=\"q1:ColumnSet\">" + " <q1:Attributes>" + " <q1:Attribute>systemuserid</q1:Attribute>" + " <q1:Attribute>fullname</q1:Attribute>" + " </q1:Attributes>" + " </q1:ColumnSet>" + " <q1:Distinct>false</q1:Distinct>" + " <q1:Criteria>" + " <q1:FilterOperator>And</q1:FilterOperator>" + " <q1:Conditions>" + " <q1:Condition>" + " <q1:AttributeName>systemuserid</q1:AttributeName>" + " <q1:Operator>EqualUserId</q1:Operator>" + " </q1:Condition>" + " </q1:Conditions>" + " </q1:Criteria>" + " </query>" + " </soap:Body>" + "</soap:Envelope>" + ""
  xmlHttpRequest = new ActiveXObject("Msxml2.XMLHTTP")
  xmlHttpRequest.Open "POST", "/mscrmservices/2006/CrmService.asmx", false
  xmlHttpRequest.setRequestHeader "SOAPAction", "http://schemas.microsoft.com/crm/2006/WebServices/RetrieveMultiple"
  xmlHttpRequest.setRequestHeader "Content-Type", "text/xml; charset=utf-8"
  xmlHttpRequest.setRequestHeader "Content-Length", xml.length
  xmlHttpRequest.send xml
  doc = xmlHttpRequest.responseXML
  user = doc.selectSingleNode("//BusinessEntity")
  userId = user.selectSingleNode("systemuserid").text
  alert userId
  userName = user.selectSingleNode("fullname").text
  alert userName
  return