CrmServiceToolkit = function() {
    /**
     * MSCRM4 Web Service Toolkit for JavaScript v2.1
     * @author Daniel Cai, http://danielcai.blogspot.com/
     *
     * Credits:
     *   The idea of BusinessEntity was inspired by Ascentium CrmService JavaScript Library.
     *   Thanks to Daniel René Thul for his contribution on the implementation of asynchronous support.
     *
     * The following CRM JavaScript functions have been used in order to keep the file size minimal.
     *    GenerateAuthenticationHeader() function
     *    _HtmlEncode() function
     *    CrmEncodeDecode.CrmXmlDecode() function
     *    CrmEncodeDecode.CrmXmlEecode() function
     *
     * Date: July 4, 2010
     */
    var _dateTimeExpr = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})[\.\d{3}]?([-+]\d{2}):(\d{2})$/,
        _numberExpr = /^[-+]?\d*\.?\d*$/,
        _integerExpr = /^[0-9]\d*$/;
    // Private members
    /**
     * Make a CRM Web Service call.
     * @param {String} soapBody The CRM Web Service request's SOAP message body
     * @param {String} requestType The CRM Web Service request's type, e.g., Execute, Retrieve, Fetch, Create, Update, etc.
     * @param {Boolean} async Whether or not to make the service call in an asynchronous fashion
     * @param {function} internalCallback Internal callback function
     * @return {object} The result XML document of the CRM Web Service Request.
     */
    var _doRequest = function(soapBody, requestType, async, internalCallback) {
        async = async || false;

        // Wrap the Soap Body in a soap:Envelope.
        var soapXml =
                ["<soap:Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema'>",
                    GenerateAuthenticationHeader(),
                    "<soap:Body>",
                        "<", requestType, " xmlns='http://schemas.microsoft.com/crm/2007/WebServices'>", soapBody, "</", requestType, ">",
                    "</soap:Body>",
                    "</soap:Envelope>"
                ].join("");
        var xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        xmlhttp.open("POST", "/MSCRMServices/2007/crmservice.asmx", async);
        xmlhttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        xmlhttp.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/crm/2007/WebServices/" + requestType);
        // Send the XMLHTTP object.
        xmlhttp.send(soapXml);

        if (async) {
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) { // "complete"
                    if (xmlhttp.status == 200) { // "OK"
                        internalCallback(_processResponse(xmlhttp.responseXML, xmlhttp.responseText));
                    }
                    else {
                        throw new Error("HTTP-Requests ERROR: " + xmlhttp.statusText);
                    }
                }
            };
        }
        else {
            var result = _processResponse(xmlhttp.responseXML);
            return !!internalCallback ? internalCallback(result) : result;
        }
    };
    var _processResponse = function (responseXml, responseText) {
        if (responseXml === null || responseXml.xml === null || responseXml.xml === "") {
            if (responseText !== null && responseText !== "")
                throw new Error(responseText);
            else
                throw new Error("No response received from the server. ");
        }
        // Report the error if occurred
        var error = responseXml.selectSingleNode("//error");
        var faultString = responseXml.selectSingleNode("//faultstring");
        if (error !== null || faultString !== null) {
            throw new Error(error !== null ? responseXml.selectSingleNode('//description').nodeTypedValue : faultString.text);
        }
        // Load responseXML and return as an XML object
        var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.loadXML(responseXml.xml);
        return xmlDoc;
    };

    var _fetch = function(fetchXml, callback) {
        var msgBody = "<fetchXml>" + _HtmlEncode(fetchXml) + "</fetchXml>"; // CRM function _HtmlEncode is used.

        var async = !!callback;
        return _doRequest(msgBody, "Fetch", !!callback, function (resultXml) {
            var fetchResult = resultXml.selectSingleNode("//FetchResult");
            resultXml.loadXML(fetchResult.childNodes[0].nodeValue);
            var resultNodes = resultXml.selectNodes("/resultset/result");
            var results = [];
            for (var i = 0; i < resultNodes.length; i++) {
                var entity = new _businessEntity();
                entity.deserialize(resultNodes[i]);
                results[i] = entity;
            }
            if (!async)
                return results;
            else
                callback(results);
        });
    };
    var _retrieve = function(entityName, id, columnSet, callback) {
        var attributes = "";
        if (columnSet !== undefined) {
            for (var i = 0; i < columnSet.length; i++) {
                attributes += "<q1:Attribute>" + columnSet[i] + "</q1:Attribute>";
            }
        }

        var msgBody =
                [
                    "<entityName>", entityName, "</entityName>",
                    "<id>", id, "</id>",
                    "<columnSet xmlns:q1='http://schemas.microsoft.com/crm/2006/Query' xsi:type='q1:ColumnSet'>",
                        "<q1:Attributes>", attributes, "</q1:Attributes>",
                    "</columnSet>"
                ].join("");
        var async = !!callback;
        return _doRequest(msgBody, "Retrieve", !!callback, function (resultXml) {
            var retrieveResult = resultXml.selectSingleNode("//RetrieveResult");
            var entity = new _businessEntity();
            entity.deserialize(retrieveResult);
            if (!async)
                return entity;
            else
                callback(entity);
        });
    };
    var _retrieveMultiple = function(query, callback) {
        var msgBody =
                [
                    "<Request xsi:type='RetrieveMultipleRequest' ReturnDynamicEntities='false'>",
                        "<Query xmlns:q1='http://schemas.microsoft.com/crm/2006/Query' xsi:type='q1:QueryExpression'>", query, "</Query>",
                    "</Request>"
                ].join("");
        var async = !!callback;
        return _doRequest(msgBody, "Execute", async, function (resultXml) {
            var resultNodes = resultXml.selectNodes("//BusinessEntityCollection/BusinessEntities/BusinessEntity");
            var results = [];
            for (var i = 0; i < resultNodes.length; i++) {
                var entity = new _businessEntity();
                entity.deserialize(resultNodes[i]);
                results[i] = entity;
            }
            if (!async)
                return results;
            else
                callback(results);
        });
    };
    var _execute = function(request, callback) {
        var async = !!callback;

        return _doRequest(request, "Execute", async, function (resultXml) {
            if (!async)
                return resultXml;
            else
                callback(resultXml);
        });
    };
    var _create = function(businessEntity, callback) {
        var request = businessEntity.serialize();
        var async = !!callback;

        return _doRequest(request, "Create", async, function (resultXml) {
            var response = resultXml.selectSingleNode("//CreateResponse/CreateResult");
            var result = CrmEncodeDecode.CrmXmlDecode(response.text);
            if (!async)
                return result;
            else
                callback(result);
        });
    };
    var _update = function(businessEntity, callback) {
        var request = businessEntity.serialize();
        var async = !!callback;

        return _doRequest(request, "Update", async, function (resultXml) {
            var response = resultXml.selectSingleNode("//UpdateResponse");
            var result = CrmEncodeDecode.CrmXmlDecode(response.text);
            if (!async)
                return result;
            else
                callback(result);
        });
    };
    var _delete = function(entityName, id, callback) {
        var request =
                [
                    "<entityName>", entityName, "</entityName>",
                    "<id>", id, "</id>"
                ].join("");
        var async = !!callback;

        return _doRequest(request, "Delete", async, function (resultXml) {
            var response = resultXml.selectSingleNode("//DeleteResponse");
            var result = CrmEncodeDecode.CrmXmlDecode(response.text);
            if (!async)
                return result;
            else
                callback(result);
        });
    };
    var _joinArray = function(prefix, array, suffix) {
        var output = [];
        for ( var i = 0; i < array.length; i++) {
            if (array[i] != '' && array[i] != undefined) {
                output.push(prefix, array[i], suffix);
            }
        }
        return output.join("");
    };
    var _joinConditionPair = function(attributes, values) {
        var output = [];
        for ( var i = 0; i < attributes.length; i++) {
            if (attributes[i] != '') {
                output.push("<condition attribute='", attributes[i], "' operator='eq' value='", values[i], "' />");
            }
        }
        return output.join("");
    };

    var _isArray = function(input) {
        return input.constructor.toString().indexOf("Array") != -1;
    };
    var _queryByAttribute = function (queryOptions, callback) {
        var entityName = queryOptions.entityName;
        var attributes = queryOptions.attributes;
        var values = queryOptions.values;
        var columnSet = queryOptions.columnSet;
        var orderby = queryOptions.orderby || '';

        attributes = _isArray(attributes) ? attributes : [attributes];
        values = _isArray(values) ? values : [values];
        orderby = (!!orderby && _isArray(orderby)) ? orderby : [orderby];
        columnSet = (!!columnSet && _isArray(columnSet)) ? columnSet : [columnSet];
        for (var i = 0; i < values.length; i++) {
            values[i] = _encodeValue(values[i]);
        }
        var xml =
                [
                    "<fetch mapping='logical'>",
                    "   <entity name='", entityName, "'>",
                           _joinArray("<attribute name='", columnSet, "' />"),
                           _joinArray("<order attribute='", orderby, "' />"),
                    "      <filter>",
                              _joinConditionPair(attributes, values),
                    "      </filter>",
                    "   </entity>",
                    "</fetch>"
                ].join("");
        return _fetch(xml, callback);
    };
    var _setState = function(entityName, id, stateCode, statusCode, callback) {
        var request = [
"<Request xsi:type='SetStateDynamicEntityRequest'>",
    "<Entity>",
        "<Name xmlns='http://schemas.microsoft.com/crm/2006/CoreTypes'>", entityName, "</Name>",
        "<Id xmlns='http://schemas.microsoft.com/crm/2006/CoreTypes'>", id, "</Id>",
    "</Entity>",
    "<State>", stateCode, "</State>",
    "<Status>", statusCode, "</Status>",
"</Request>"
        ].join("");
        var async = !!callback;
        return _doRequest(request, "Execute", async, function (resultXml) {
            var response = resultXml.selectSingleNode("//ExecuteResponse/Response");
            var result = CrmEncodeDecode.CrmXmlDecode(response.text);
            if (!async)
                return result;
            else
                callback(result);
        });
    };
    var _associate = function(relationshipName, entity1Name, entity1Id, entity2Name, entity2Id, callback)
    {
        var request = [
"<Request xsi:type='AssociateEntitiesRequest'>",
    "<Moniker1>",
        "<Id xmlns='http://schemas.microsoft.com/crm/2006/CoreTypes'>", entity1Id, "</Id>",
        "<Name xmlns='http://schemas.microsoft.com/crm/2006/CoreTypes'>", entity1Name, "</Name>",
    "</Moniker1>",
    "<Moniker2>",
        "<Id xmlns='http://schemas.microsoft.com/crm/2006/CoreTypes'>", entity2Id, "</Id>",
        "<Name xmlns='http://schemas.microsoft.com/crm/2006/CoreTypes'>", entity2Name, "</Name>",
    "</Moniker2>",
    "<RelationshipName>", relationshipName, "</RelationshipName>",
"</Request>"
        ].join("");
        var async = !!callback;
        return _doRequest(request, "Execute", async, function (resultXml) {
            var response = resultXml.selectSingleNode("//ExecuteResponse/Response");
            var result = CrmEncodeDecode.CrmXmlDecode(response.text);
            if (!async)
                return result;
            else
                callback(result);
        });
    };
    var _disassociate = function(relationshipName, entity1Name, entity1Id, entity2Name, entity2Id, callback)
    {
        var request = [
"<Request xsi:type='DisassociateEntitiesRequest'>",
    "<Moniker1>",
        "<Id xmlns='http://schemas.microsoft.com/crm/2006/CoreTypes'>", entity1Id, "</Id>",
        "<Name xmlns='http://schemas.microsoft.com/crm/2006/CoreTypes'>", entity1Name, "</Name>",
    "</Moniker1>",
    "<Moniker2>",
        "<Id xmlns='http://schemas.microsoft.com/crm/2006/CoreTypes'>", entity2Id, "</Id>",
        "<Name xmlns='http://schemas.microsoft.com/crm/2006/CoreTypes'>", entity2Name, "</Name>",
    "</Moniker2>",
    "<RelationshipName>", relationshipName, "</RelationshipName>",
"</Request>"
        ].join("");
        var async = !!callback;
        return _doRequest(request, "Execute", async, function (resultXml) {
            var response = resultXml.selectSingleNode("//ExecuteResponse/Response");
            var result = CrmEncodeDecode.CrmXmlDecode(response.text);
            if (!async)
                return result;
            else
                callback(result);
        });
    };
    var _getCurrentUserRoles = function () {
        var xml =
                [
                    "<fetch mapping='logical'>",
                    "   <entity name='role'>",
                    "      <attribute name='name' />",
                    "      <link-entity name='systemuserroles' from='roleid' to='roleid' link-type='inner'>",
                    "         <filter>",
                    "            <condition attribute='systemuserid' operator='eq-userid' />",
                    "         </filter>",
                    "         <link-entity name='systemuser' from='systemuserid' to='systemuserid' link-type='inner' />",
                    "      </link-entity>",
                    "   </entity>",
                    "</fetch>"
                ].join("");
        var fetchResult = _fetch(xml);
        var roles = [];
        if (fetchResult !== null) {
            for (var i = 0; i < fetchResult.length; i++) {
                roles[i] = fetchResult[i].getValue("name");
            }
        }
        return roles;
    };
    var _getCurrentUserId = function () {
        var request = "<Request xsi:type='WhoAmIRequest' />";
        var xmlDoc = _doRequest(request, "Execute");
        return xmlDoc.getElementsByTagName("UserId")[0].childNodes[0].nodeValue;
    };
    var _isCurrentUserInRole = function () {
        // Get current user's roles as an array
        var roles = _getCurrentUserRoles();
        for (var i = 0; i < roles.length; i++) {
            for (var j = 0; j < arguments.length; j++) {
                if (roles[i] === arguments[j]) {
                    return true;
                }
            }
        }
        return false;
    };
    var _padNumber = function (s, len) {
        len = len || 2;
        s = '' + s;
        while (s.length < len) {
            s = "0" + s;
        }
        return s;
    };
    var _getDatePart = function(s) {
        s = s.replace(/^0+(.)$/, "$1"); // Remove leading 0
        return parseInt(s);
    };
    var _parseDate = function(s) {
        if (s == null || !s.match(_dateTimeExpr))
            return null;
        var dateParts = _dateTimeExpr.exec(s);
        return new Date(_getDatePart(dateParts[1]),
                _getDatePart(dateParts[2]) - 1,
                _getDatePart(dateParts[3]),
                _getDatePart(dateParts[4]),
                _getDatePart(dateParts[5]),
                _getDatePart(dateParts[6]));
    };
    var _encodeDate = function(dateTime)
    {
        return dateTime.getFullYear() + "-" +
               _padNumber(dateTime.getMonth() + 1) + "-" +
               _padNumber(dateTime.getDate()) + "T" +
               _padNumber(dateTime.getHours()) + ":" +
               _padNumber(dateTime.getMinutes()) + ":" +
               _padNumber(dateTime.getSeconds());
    };
    var _parseResultXmlNode = function(fieldNode) {
        var field = {};
        for (var k = 0; k < fieldNode.attributes.length; k++) {
            field[fieldNode.attributes[k].nodeName] = CrmEncodeDecode.CrmXmlDecode(fieldNode.attributes[k].nodeValue);
        }
        var nodeText = CrmEncodeDecode.CrmXmlDecode(fieldNode.text);
        // Take the best guess of what CRM data type it is.
        if (fieldNode.attributes.length === 1 &&
            fieldNode.getAttribute("formattedvalue") !== null &&
            nodeText.match(_numberExpr))
        {
            // Either interger, float, or currency.
            if (!nodeText.indexOf('.')) {
                field["$value"] = parseInt(nodeText);   // Integer
            } else {
                field["$value"] = parseFloat(nodeText); // Float
            }
        }
        else if (fieldNode.attributes.length === 2 &&
                 fieldNode.getAttribute("formattedvalue") !== null &&
                 fieldNode.getAttribute("name") !== null &&
                 nodeText.match(_integerExpr))
        {
            // Picklist from Fetch query
            field["$value"] = parseInt(nodeText);
        }
        else if (fieldNode.attributes.length === 1 &&
                 fieldNode.getAttribute("name") !== null &&
                 nodeText.match(_integerExpr))
        {
            // Picklist field from Retrieve/RetrieveMultiple request,
            // or bit field from Fetch/Retrieve request,
            // or statecode/statuscode field
            field["$value"] = parseInt(nodeText);
        }
        else if (fieldNode.attributes.length === 2 &&
                 fieldNode.getAttribute("date") !== null &&
                 fieldNode.getAttribute("time") !== null &&
                 nodeText.match(_dateTimeExpr))
        {
            field["$value"] = _parseDate(nodeText);  // Datetime field
        }
        else
        {
            // Other than above types, it's pretty safe to say the value is string type.
            field["$value"] = nodeText;
        }
        return field;
    };
    var _encodeValue = function(value) {
        return (typeof value === "object" && value.getTime)
               ? _encodeDate(value)
               : CrmEncodeDecode.CrmXmlEncode(value);
    }
    /**
     * Business Entity object.
     */
    var _businessEntity = function(entityName) {
        this.name = entityName;
        this.attributes = {};
    };
    /**
     * Business Entity's instance methods
     */
    _businessEntity.prototype = {
        /**
         * Business Entity's instance methond to retrieve the value of a particular CRM attribute.
         * @param {String} field The CRM field's name, it's called attribute in CRM terminology.
         * @param {String} attribute (optional) The attribute of the CRM field. If provided, a representation value of the CRM field is returned, otherwise, the field's actual database value is returned.
         * @return {Number/Date/String/null} The CRM entity's field value.
         */
        getValue : function(field, attribute) {
            if (this === null || !this.attributes.hasOwnProperty(field))
                return null;
            return (attribute === undefined)
                    ? this.attributes[field]["$value"]
                    : this.attributes[field][attribute];
        },
        getValueAsBoolean : function(field) {
            if (this === null || !this.attributes.hasOwnProperty(field))
                return null;
            return (this.attributes[field]["$value"] == 1);
        },
        getValueAsLookup : function(field, typename) {
            if (this === null || !this.attributes.hasOwnProperty(field))
                return null;
            if (!this.attributes[field].hasOwnProperty("name"))
                throw new Error("'" + field + "' does not seem to be a CRM lookup field. ");
            return [{
                id: this.attributes[field]["$value"],
                typename: typename,
                name: this.attributes[field]["name"]
            }];
        },

        /**
         * Serialize a CRM Business Entity object to XML string in order to be passed to CRM Web Services.
         * @return {String} The serialized XML string of CRM entity.
         */
        serialize : function() {
            var xml = ['<entity xsi:type="', this.name, '">'];
            for (var attributeName in this.attributes) {
                var attribute = this.attributes[attributeName];

                if (attribute === null || attribute.value === null) {
                    xml.push('<', attributeName, ' IsNull="true" />');
                } else {
                    var value = (attribute.hasOwnProperty("$value")) ? attribute["$value"] : attribute;
                    var encodedValue = _encodeValue(value);
                    var type = (!attribute.type)
                             ? ''
                             : ' type="' + CrmEncodeDecode.CrmXmlEncode(attribute.type) + '"';
                    xml.push('<', attributeName, type, '>', encodedValue, '</', attributeName, '>');
                }
            }
            xml.push('</entity>');
            return xml.join("");
        },
        /**
         * Deserialize an XML node into a CRM Business Entity object. The XML node comes from CRM Web Service's response.
         * @param {object} resultNode The XML node returned from CRM Web Service's Fetch, Retrieve, RetrieveMultiple messages.
         */
        deserialize : function(resultNode) {
            var resultNodes = resultNode.childNodes;
            for (var i = 0; i < resultNodes.length; i++) {
                var fieldNode = resultNodes[i];
                this.attributes[fieldNode.baseName] = _parseResultXmlNode(fieldNode);
            }
        }
    };
    // Toolkit's public static members
    return {
        /**
         * Business Entity object, which is the container object passed to or returned by CRM Web Service Helper methods as parameter or result.
         * @param {String} entityName The entity's name
         */
        BusinessEntity : _businessEntity,
        /**
         * Retrieve a CRM business entity object.
         * @param {String} entityName The CRM entity name, e.g., account, contact, lead, etc.
         * @param {String} id The GUID of CRM record to be retrieved.
         * @param {Array} columnSet (optional) The array of columns to be retrieved.
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {BusinessEntity} A BusinessEntity object.
         */
        Retrieve : _retrieve,
        /**
         * Retrieve a collection of business entity instances of a specified type based on query criteria.
         * @param {String} query The CRM query in XML format, which contains EntityName, ColumnSet, Criteria, and etc.
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {Array} A collection of business entity (BusinessEntity) instances.
         */
        RetrieveMultiple : _retrieveMultiple,
        /**
         * Retrieve entity instances in XML format based on the specified query expressed in the FetchXML query language.
         * @param {String} fetchXml The fetch query string to be executed.
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {Array} A collection of business entity (BusinessEntity) instances.
         */
        Fetch : _fetch,
        /**
         * Execute a message that represents either a specialized method or specific business logic.
         * @param {String} request The request to be executed in XML format.
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {object} The XML representation of the result.
         */
        Execute : _execute,
        /**
         * Create a CRM business entity instance.
         * @param {Object} businessEntity The CRM business object to be created.
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {String} The record ID (GUID) that has been created in CRM system.
         */
        Create : _create,
        /**
         * Update a CRM business entity instance.
         * @param {Object} businessEntity The CRM business object to be created.
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {String} The update response
         */
        Update : _update,
        /**
         * Delete a CRM business entity instance.
         * @param {String} entityName The CRM entity name.
         * @param {String} id The CRM record's ID to be deleted (GUID).
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {String} The delete response
         */
        Delete : _delete,
        /**
         * Retrieves instances of a specific entity type by specifying a set of attribute and value pairs.
         * @param {Object} queryOptions Query's options including CRM entity name, attribute(s)/field(s) to
                                        be queried, corresponding field value(s), column set to be returned,
                                        sorting order, etc.
         * @param {Array|String} orderby (optional) The order in which the entity instances are returned from the query.
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {Array} A collection of business entity (BusinessEntity) instances that match the attribute/value pairs.
         * Usage:
         */
        queryByAttribute : _queryByAttribute,

        /**
         * Set a CRM record's state by its statecode and statuscode.
         * @param {String} entityName Entitiy name of the CRM record to be updated.
         * @param {String} id CRM Record ID (GUID) to be updated.
         * @param {String} statecode New statecode in string, eg, "Active", "Inactive".
         * @param {Integer} statuscode New statuscode in integer, use -1 for default status.
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {String} The response of the SetState request
         */
        setState : _setState,

        /**
         * Associate two CRM records that have a N:N relationship.
         * @param {String} relationshipName Name of the many-to-many relationship.
         * @param {String} entity1Name Entitiy name of the first record to be associated.
         * @param {String} entity1Id CRM Record ID (GUID) of the first record to be associated.
         * @param {String} entity2Name Entitiy name of the second record to be associated.
         * @param {String} entity2Id CRM Record ID (GUID) of the second record to be associated.
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {object} The XML representation of the result.
         */
        associate : _associate,
        /**
         * Disassociate two CRM records that have a N:N relationship.
         * @param {String} relationshipName Name of the many-to-many relationship.
         * @param {String} entity1Name Entitiy name of the first record to be disassociated.
         * @param {String} entity1Id CRM Record ID (GUID) of the first record to be disassociated.
         * @param {String} entity2Name Entitiy name of the second record to be disassociated.
         * @param {String} entity2Id CRM Record ID (GUID) of the second record to be disassociated.
         * @param {Function} callback (optional) Async script to be called when the request completes
         * @return {object} The XML representation of the result.
         */
        disassociate : _disassociate,
        /**
         * Check if the current user has been assigned to one or more particular role(s).
         * @param {Array|String} roles The roles that the current user might have been assigned to.
         * @return {String} True if the user has any one of the roles specified, otherwise false.
         */
        isCurrentUserInRole : _isCurrentUserInRole,
        /**
         * Get all the CRM roles that current user has been assigned to.
         * @return {Array} The list of CRM roles that the current user has been assigned to.
         */
        getCurrentUserRoles : _getCurrentUserRoles,
        /**
        * Get current CRM user's ID.
        * @return {String} Current CRM user's ID.
        */
        getCurrentUserId: _getCurrentUserId,
        /**
         * Get current user's ID.
         * @return {String} JavaScript Date object.
         */
        parseDate : _parseDate,
        /**
         * Convert a JavaScript object to a UTC date format string.
         * @param {Date} dateTime The JavaScript Date to be converted to UTC format string.
         * @return {String} Converted UTC format string, such as 2000-03-20T00:00:00-08:00.
         */
        encodeDate : _encodeDate
    };
}();
