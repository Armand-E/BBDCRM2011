
#This will establish a more unique namespace for functions in this library. This will reduce the
# potential for functions to be overwritten due to a duplicate name when the library is loaded.

#/<summary>
#/ Returns the URL for the SOAP endpoint using the context information available in the form
#/ or HTML Web resource.
#/</summary>

# Responses will return XML. It isn't possible to return JSON.

#/<summary>
#/ Recieves the assign response
#/</summary>
#/<param name="req" Type="XMLHttpRequest">
#/ The XMLHttpRequest response
#/</param>
#/<param name="successCallback" Type="Function">
#/ The function to perform when an successfult response is returned.
#/ For this message no data is returned so a success callback is not really necessary.
#/</param>
#/<param name="errorCallback" Type="Function">
#/ The function to perform when an error is returned.
#/ This function accepts a JScript error returned by the _getError function
#/</param>

#/<summary>
#/ Parses the WCF fault returned in the event of an error.
#/</summary>
#/<param name="faultXml" Type="XML">
#/ The responseXML property of the XMLHttpRequest response.
#/</param>

#Retrieve the fault node

#NOTE: This comparison does not handle the case where the XML namespace changes
TalkToJavaScript = (attribute, entity) ->
  SDK.SAMPLE.GetOptionSetMetadata entity, attribute
  return
SDK = __namespace: true  if typeof (SDK) is "undefined"
SDK.SAMPLE =
  _getServerUrl: ->
    OrgServicePath = "/XRMServices/2011/Organization.svc/web"
    serverUrl = ""
    if typeof GetGlobalContext is "function"
      context = GetGlobalContext()
      serverUrl = context.getServerUrl()
    else
      if typeof Xrm.Page.context is "object"
        serverUrl = Xrm.Page.context.getServerUrl()
      else
        throw new Error("Unable to access the server URL")
    serverUrl = serverUrl.substring(0, serverUrl.length - 1)  if serverUrl.match(/\/$/)
    serverUrl + OrgServicePath

  GetOptionSetMetadata: (entityName, attributeName) ->
    requestMain = ""
    requestMain += "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\">"
    requestMain += "  <s:Body>"
    requestMain += "     <Execute xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\">"
    requestMain += "      <request i:type=\"a:RetrieveAttributeRequest\" xmlns:a=\"http://schemas.microsoft.com/xrm/2011/Contracts\">"
    requestMain += "         <a:Parameters xmlns:b=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">"
    requestMain += "          <a:KeyValuePairOfstringanyType>"
    requestMain += "           <b:key>MetadataId</b:key>"
    requestMain += "\t\t  <b:value i:type=\"c:guid\" xmlns:c=\"http://schemas.microsoft.com/2003/10/Serialization/\">00000000-0000-0000-0000-000000000000</b:value>"
    requestMain += "\t\t </a:KeyValuePairOfstringanyType>"
    requestMain += "\t\t <a:KeyValuePairOfstringanyType>"
    requestMain += "            <b:key>RetrieveAsIfPublished</b:key>"
    requestMain += "            <b:value i:type=\"c:boolean\" xmlns:c=\"http://www.w3.org/2001/XMLSchema\">true</b:value>"
    requestMain += "          </a:KeyValuePairOfstringanyType>"
    requestMain += "\t\t <a:KeyValuePairOfstringanyType>"
    requestMain += "            <b:key>EntityLogicalName</b:key>"
    requestMain += "            <b:value i:type=\"c:string\" xmlns:c=\"http://www.w3.org/2001/XMLSchema\">" + entityName + "</b:value>"
    requestMain += "          </a:KeyValuePairOfstringanyType>"
    requestMain += "\t\t <a:KeyValuePairOfstringanyType>"
    requestMain += "\t\t   <b:key>LogicalName</b:key>"
    requestMain += "\t\t   <b:value i:type=\"c:string\" xmlns:c=\"http://www.w3.org/2001/XMLSchema\">" + attributeName + "</b:value>"
    requestMain += "          </a:KeyValuePairOfstringanyType>"
    requestMain += "        </a:Parameters>"
    requestMain += "        <a:RequestId i:nil=\"true\" />"
    requestMain += "        <a:RequestName>RetrieveAttribute</a:RequestName>"
    requestMain += "   </request>"
    requestMain += "  </Execute>"
    requestMain += "  </s:Body>"
    requestMain += "</s:Envelope>"
    req = new XMLHttpRequest()
    req.open "POST", SDK.SAMPLE._getServerUrl(), true
    req.setRequestHeader "Accept", "application/xml, text/xml, */*"
    req.setRequestHeader "Content-Type", "text/xml; charset=utf-8"
    req.setRequestHeader "SOAPAction", "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute"
    successCallback = null
    errorCallback = null
    req.onreadystatechange = ->
      SDK.SAMPLE.InsertOptionValueResponse req, successCallback, errorCallback
      return

    req.send requestMain
    return

  InsertOptionValueResponse: (req, successCallback, errorCallback) ->
    if req.readyState is 4
      if req.status is 200
        resultXml = req.responseXML
        control = document.getElementById("silverlightControl")
        control.Content.Page.DisplayMetadata resultXml.xml
      else
        alert "error"
        errorCallback SDK.SAMPLE._getError(req.responseXML)
    return

  _getError: (faultXml) ->
    errorMessage = "Unknown Error (Unable to parse the fault)"
    if typeof faultXml is "object"
      try
        bodyNode = faultXml.firstChild.firstChild
        i = 0

        while i < bodyNode.childNodes.length
          node = bodyNode.childNodes[i]
          if "s:Fault" is node.nodeName
            j = 0

            while j < node.childNodes.length
              faultStringNode = node.childNodes[j]
              if "faultstring" is faultStringNode.nodeName
                errorMessage = faultStringNode.text
                break
              j++
            break
          i++
    new Error(errorMessage)

  __namespace: true