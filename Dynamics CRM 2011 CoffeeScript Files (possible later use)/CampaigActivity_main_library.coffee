Form_onload = ->
  if Xrm.Page.ui.getFormType() is 2
    if Xrm.Page.getAttribute("channeltypecode").getValue()?
      medium = null
      switch Xrm.Page.getAttribute("channeltypecode").getValue()
        when "200000"
          medium = "sms"
          
          #  Hide the default button.
          elementbtnPropagate = document.getElementById("btnPropagate")
          if elementbtnPropagate?
            elementbtnPropagate.style.display = "none"
            
            #  Hide the spacer immediately to the right of the button just hidden.
            spacer = elementbtnPropagate.nextSibling
            spacer.style.display = "none"  if spacer? and spacer.className is "ms-crm-Menu-Spacer"
          
          #  Hide the email button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("Email") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "none"  if elementbtnPropagate?
            i = i + 1
          
          #  Display the SMS button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("SMS") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "block"  if elementbtnPropagate?
            i = i + 1
          break
        when "200001"
          medium = "email"
          
          #  Hide the default button.
          elementbtnPropagate = document.getElementById("btnPropagate")
          if elementbtnPropagate?
            elementbtnPropagate.style.display = "none"
            
            #  Hide the spacer immediately to the right of the button just hidden.
            spacer = elementbtnPropagate.nextSibling
            spacer.style.display = "none"  if spacer? and spacer.className is "ms-crm-Menu-Spacer"
          
          #  Hide the SMS button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("SMS") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "none"  if elementbtnPropagate?
            i = i + 1
          
          #  Display the Email button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("Email") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "block"  if elementbtnPropagate?
            i = i + 1
        else
          medium = "other"
          
          #  Display the default button.
          elementbtnPropagate = document.getElementById("btnPropagate")
          if elementbtnPropagate?
            elementbtnPropagate.style.display = "block"
            
            #  Display the spacer immediately to the right of the button just displayed.
            spacer = elementbtnPropagate.nextSibling
            spacer.style.display = "block"  if spacer? and spacer.className is "ms-crm-Menu-Spacer"
          
          #  Hide the Email button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("Email") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "none"  if elementbtnPropagate?
            i = i + 1
          
          #  Hide the SMS button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("SMS") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "none"  if elementbtnPropagate?
            i = i + 1
  return
channeltypecode_onchange = ->
  if Xrm.Page.ui.getFormType() is 2
    if Xrm.Page.getAttribute("channeltypecode").getValue()?
      medium = null
      switch Xrm.Page.getAttribute("channeltypecode").getValue()
        when "200000"
          medium = "sms"
          
          #  Hide the default button.
          elementbtnPropagate = document.getElementById("btnPropagate")
          if elementbtnPropagate?
            elementbtnPropagate.style.display = "none"
            
            #  Hide the spacer immediately to the right of the button just hidden.
            spacer = elementbtnPropagate.nextSibling
            spacer.style.display = "none"  if spacer? and spacer.className is "ms-crm-Menu-Spacer"
          
          #  Hide the email button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("Email") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "none"  if elementbtnPropagate?
            i = i + 1
          
          #  Display the SMS button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("SMS") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "block"  if elementbtnPropagate?
            i = i + 1
          break
        when "200001"
          medium = "email"
          
          #  Hide the default button.
          elementbtnPropagate = document.getElementById("btnPropagate")
          if elementbtnPropagate?
            elementbtnPropagate.style.display = "none"
            
            #  Hide the spacer immediately to the right of the button just hidden.
            spacer = elementbtnPropagate.nextSibling
            spacer.style.display = "none"  if spacer? and spacer.className is "ms-crm-Menu-Spacer"
          
          #  Hide the SMS button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("SMS") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "none"  if elementbtnPropagate?
            i = i + 1
          
          #  Display the Email button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("Email") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "block"  if elementbtnPropagate?
            i = i + 1
        else
          medium = "other"
          
          #  Display the default button.
          elementbtnPropagate = document.getElementById("btnPropagate")
          if elementbtnPropagate?
            elementbtnPropagate.style.display = "block"
            
            #  Display the spacer immediately to the right of the button just displayed.
            spacer = elementbtnPropagate.nextSibling
            spacer.style.display = "block"  if spacer? and spacer.className is "ms-crm-Menu-Spacer"
          
          #  Hide the Email button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("Email") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "none"  if elementbtnPropagate?
            i = i + 1
          
          #  Hide the SMS button.
          lis = document.getElementsByTagName("LI")
          i = 0
          while i < lis.length
            s = lis[i].getAttribute("id")
            if s.indexOf("SMS") > 0
              elementbtnPropagate = document.getElementById(s)
              elementbtnPropagate.style.display = "none"  if elementbtnPropagate?
            i = i + 1
  return