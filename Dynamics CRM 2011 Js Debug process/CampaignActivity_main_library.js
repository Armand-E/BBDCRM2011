function Form_onload()
{
if (crmForm.FormType == 2) {
    if (crmForm.all.channeltypecode.DataValue != null) {
        var medium = null;
        switch (crmForm.all.channeltypecode.DataValue) {
            case '200000': medium = 'sms';
                {
                    //  Hide the default button.
                    var elementbtnPropagate = document.getElementById("btnPropagate")
                    if (elementbtnPropagate != null) {
                        elementbtnPropagate.style.display = "none";
                        //  Hide the spacer immediately to the right of the button just hidden.
                        var spacer = elementbtnPropagate.nextSibling;
                        if (spacer != null && spacer.className == "ms-crm-Menu-Spacer") {
                            spacer.style.display = "none";
                        }
                    }
                    //  Hide the email button.
                    var lis = document.getElementsByTagName('LI');
                    var i = 0;
                    while (i < lis.length) {
                        var s = lis[i].getAttribute('id')
                        if (s.indexOf('Email') > 0) {
                            var elementbtnPropagate = document.getElementById(s)
                            if (elementbtnPropagate != null) {
                                elementbtnPropagate.style.display = "none";
                            }
                        }
                        i = i + 1
                    }
                    //  Display the SMS button.
                    var lis = document.getElementsByTagName('LI');
                    var i = 0;
                    while (i < lis.length) {
                        var s = lis[i].getAttribute('id')
                        if (s.indexOf('SMS') > 0) {
                            var elementbtnPropagate = document.getElementById(s)
                            if (elementbtnPropagate != null) {
                                elementbtnPropagate.style.display = "block";
                            }
                        }
                        i = i + 1
                    }
                    break;
                }
            case '200001': medium = 'email';
                {
                    //  Hide the default button.
                    var elementbtnPropagate = document.getElementById("btnPropagate")
                    if (elementbtnPropagate != null) {
                        elementbtnPropagate.style.display = "none";
                        //  Hide the spacer immediately to the right of the button just hidden.
                        var spacer = elementbtnPropagate.nextSibling;
                        if (spacer != null && spacer.className == "ms-crm-Menu-Spacer") {
                            spacer.style.display = "none";
                        }
                    }
                    //  Hide the SMS button.
                    var lis = document.getElementsByTagName('LI');
                    var i = 0;
                    while (i < lis.length) {
                        var s = lis[i].getAttribute('id')
                        if (s.indexOf('SMS') > 0) {
                            var elementbtnPropagate = document.getElementById(s)
                            if (elementbtnPropagate != null) {
                                elementbtnPropagate.style.display = "none";
                            }
                        }
                        i = i + 1
                    }
                }
                //  Display the Email button.
                var lis = document.getElementsByTagName('LI');
                var i = 0;
                while (i < lis.length) {
                    var s = lis[i].getAttribute('id')
                    if (s.indexOf('Email') > 0) {
                        var elementbtnPropagate = document.getElementById(s)
                        if (elementbtnPropagate != null) {
                            elementbtnPropagate.style.display = "block";
                        }
                    }
                    i = i + 1
                }
                break;
            default: medium = 'other';
                {
                    //  Display the default button.
                    var elementbtnPropagate = document.getElementById("btnPropagate")
                    if (elementbtnPropagate != null) {
                        elementbtnPropagate.style.display = "block";
                        //  Display the spacer immediately to the right of the button just displayed.
                        var spacer = elementbtnPropagate.nextSibling;
                        if (spacer != null && spacer.className == "ms-crm-Menu-Spacer") {
                            spacer.style.display = "block";
                        }
                    }
                    //  Hide the Email button.
                    var lis = document.getElementsByTagName('LI');
                    var i = 0;
                    while (i < lis.length) {
                        var s = lis[i].getAttribute('id')
                        if (s.indexOf('Email') > 0) {
                            var elementbtnPropagate = document.getElementById(s)
                            if (elementbtnPropagate != null) {
                                elementbtnPropagate.style.display = "none";
                            }
                        }
                        i = i + 1
                    }
                    //  Hide the SMS button.
                    var lis = document.getElementsByTagName('LI');
                    var i = 0;
                    while (i < lis.length) {
                        var s = lis[i].getAttribute('id')
                        if (s.indexOf('SMS') > 0) {
                            var elementbtnPropagate = document.getElementById(s)
                            if (elementbtnPropagate != null) {
                                elementbtnPropagate.style.display = "none";
                            }
                        }
                        i = i + 1
                    }
                }
        }
    }
}
}
function channeltypecode_onchange()
{
if (crmForm.FormType == 2) {
    if (crmForm.all.channeltypecode.DataValue != null) {
        var medium = null;
        switch (crmForm.all.channeltypecode.DataValue) {
            case '200000': medium = 'sms';
                {
                    //  Hide the default button.
                    var elementbtnPropagate = document.getElementById("btnPropagate")
                    if (elementbtnPropagate != null) {
                        elementbtnPropagate.style.display = "none";
                        //  Hide the spacer immediately to the right of the button just hidden.
                        var spacer = elementbtnPropagate.nextSibling;
                        if (spacer != null && spacer.className == "ms-crm-Menu-Spacer") {
                            spacer.style.display = "none";
                        }
                    }
                    //  Hide the email button.
                    var lis = document.getElementsByTagName('LI');
                    var i = 0;
                    while (i < lis.length) {
                        var s = lis[i].getAttribute('id')
                        if (s.indexOf('Email') > 0) {
                            var elementbtnPropagate = document.getElementById(s)
                            if (elementbtnPropagate != null) {
                                elementbtnPropagate.style.display = "none";
                            }
                        }
                        i = i + 1
                    }
                    //  Display the SMS button.
                    var lis = document.getElementsByTagName('LI');
                    var i = 0;
                    while (i < lis.length) {
                        var s = lis[i].getAttribute('id')
                        if (s.indexOf('SMS') > 0) {
                            var elementbtnPropagate = document.getElementById(s)
                            if (elementbtnPropagate != null) {
                                elementbtnPropagate.style.display = "block";
                            }
                        }
                        i = i + 1
                    }
                    break;
                }
            case '200001': medium = 'email';
                {
                    //  Hide the default button.
                    var elementbtnPropagate = document.getElementById("btnPropagate")
                    if (elementbtnPropagate != null) {
                        elementbtnPropagate.style.display = "none";
                        //  Hide the spacer immediately to the right of the button just hidden.
                        var spacer = elementbtnPropagate.nextSibling;
                        if (spacer != null && spacer.className == "ms-crm-Menu-Spacer") {
                            spacer.style.display = "none";
                        }
                    }
                    //  Hide the SMS button.
                    var lis = document.getElementsByTagName('LI');
                    var i = 0;
                    while (i < lis.length) {
                        var s = lis[i].getAttribute('id')
                        if (s.indexOf('SMS') > 0) {
                            var elementbtnPropagate = document.getElementById(s)
                            if (elementbtnPropagate != null) {
                                elementbtnPropagate.style.display = "none";
                            }
                        }
                        i = i + 1
                    }
                }
                //  Display the Email button.
                var lis = document.getElementsByTagName('LI');
                var i = 0;
                while (i < lis.length) {
                    var s = lis[i].getAttribute('id')
                    if (s.indexOf('Email') > 0) {
                        var elementbtnPropagate = document.getElementById(s)
                        if (elementbtnPropagate != null) {
                            elementbtnPropagate.style.display = "block";
                        }
                    }
                    i = i + 1
                }
                break;
            default: medium = 'other';
                {
                    //  Display the default button.
                    var elementbtnPropagate = document.getElementById("btnPropagate")
                    if (elementbtnPropagate != null) {
                        elementbtnPropagate.style.display = "block";
                        //  Display the spacer immediately to the right of the button just displayed.
                        var spacer = elementbtnPropagate.nextSibling;
                        if (spacer != null && spacer.className == "ms-crm-Menu-Spacer") {
                            spacer.style.display = "block";
                        }
                    }
                    //  Hide the Email button.
                    var lis = document.getElementsByTagName('LI');
                    var i = 0;
                    while (i < lis.length) {
                        var s = lis[i].getAttribute('id')
                        if (s.indexOf('Email') > 0) {
                            var elementbtnPropagate = document.getElementById(s)
                            if (elementbtnPropagate != null) {
                                elementbtnPropagate.style.display = "none";
                            }
                        }
                        i = i + 1
                    }
                    //  Hide the SMS button.
                    var lis = document.getElementsByTagName('LI');
                    var i = 0;
                    while (i < lis.length) {
                        var s = lis[i].getAttribute('id')
                        if (s.indexOf('SMS') > 0) {
                            var elementbtnPropagate = document.getElementById(s)
                            if (elementbtnPropagate != null) {
                                elementbtnPropagate.style.display = "none";
                            }
                        }
                        i = i + 1
                    }
                }
        }
    }
}
}
