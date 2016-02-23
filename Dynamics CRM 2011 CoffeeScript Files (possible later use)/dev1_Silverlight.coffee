#v2.0.30511.0
window.Silverlight = {}  unless window.Silverlight
Silverlight._silverlightCount = 0
Silverlight.__onSilverlightInstalledCalled = false
Silverlight.fwlinkRoot = "http://go2.microsoft.com/fwlink/?LinkID="
Silverlight.__installationEventFired = false
Silverlight.onGetSilverlight = null
Silverlight.onSilverlightInstalled = ->
  window.location.reload false
  return

Silverlight.isInstalled = (b) ->
  b = null  if b is `undefined`
  a = false
  m = null
  try
    i = null
    j = false
    if window.ActiveXObject
      try
        i = new ActiveXObject("AgControl.AgControl")
        if b is null
          a = true
        else a = true  if i.IsVersionSupported(b)
        i = null
      catch l
        j = true
    else
      j = true
    if j
      k = navigator.plugins["Silverlight Plug-In"]
      if k
        if b is null
          a = true
        else
          h = k.description
          h = "2.0.30226.2"  if h is "1.0.30226.2"
          c = h.split(".")
          c.pop()  while c.length > 3
          c.push 0  while c.length < 4
          e = b.split(".")
          e.pop()  while e.length > 4
          d = undefined
          g = undefined
          f = 0
          loop
            d = parseInt(e[f])
            g = parseInt(c[f])
            f++
            break unless f < e.length and d is g
          a = true  if d <= g and not isNaN(d)
  catch l
    a = false
  a

Silverlight.WaitForInstallCompletion = ->
  if not Silverlight.isBrowserRestartRequired and Silverlight.onSilverlightInstalled
    try
      navigator.plugins.refresh()
    if Silverlight.isInstalled(null) and not Silverlight.__onSilverlightInstalledCalled
      Silverlight.onSilverlightInstalled()
      Silverlight.__onSilverlightInstalledCalled = true
    else
      setTimeout Silverlight.WaitForInstallCompletion, 3e3
  return

Silverlight.__startup = ->
  navigator.plugins.refresh()
  Silverlight.isBrowserRestartRequired = Silverlight.isInstalled(null)
  unless Silverlight.isBrowserRestartRequired
    Silverlight.WaitForInstallCompletion()
    unless Silverlight.__installationEventFired
      Silverlight.onInstallRequired()
      Silverlight.__installationEventFired = true
  else if window.navigator.mimeTypes
    b = navigator.mimeTypes["application/x-silverlight-2"]
    c = navigator.mimeTypes["application/x-silverlight-2-b2"]
    d = navigator.mimeTypes["application/x-silverlight-2-b1"]
    a = d
    a = c  if c
    if not b and (d or c)
      unless Silverlight.__installationEventFired
        Silverlight.onUpgradeRequired()
        Silverlight.__installationEventFired = true
    else if b and a
      if b.enabledPlugin and a.enabledPlugin
        unless b.enabledPlugin.description is a.enabledPlugin.description
          unless Silverlight.__installationEventFired
            Silverlight.onRestartRequired()
            Silverlight.__installationEventFired = true
  unless Silverlight.disableAutoStartup
    if window.removeEventListener
      window.removeEventListener "load", Silverlight.__startup, false
    else
      window.detachEvent "onload", Silverlight.__startup
  return

unless Silverlight.disableAutoStartup
  if window.addEventListener
    window.addEventListener "load", Silverlight.__startup, false
  else
    window.attachEvent "onload", Silverlight.__startup
Silverlight.createObject = (m, f, e, k, l, h, j) ->
  d = {}
  a = k
  c = l
  d.version = a.version
  a.source = m
  d.alt = a.alt
  a.initParams = h  if h
  a.windowless = a.isWindowless  if a.isWindowless and not a.windowless
  a.maxFramerate = a.framerate  if a.framerate and not a.maxFramerate
  a.id = e  if e and not a.id
  delete a.ignoreBrowserVer

  delete a.inplaceInstallPrompt

  delete a.version

  delete a.isWindowless

  delete a.framerate

  delete a.data

  delete a.src

  delete a.alt

  if Silverlight.isInstalled(d.version)
    for b of c
      continue
    slPluginHTML = Silverlight.buildHTML(a)
  else
    slPluginHTML = Silverlight.buildPromptHTML(d)
  if f
    f.innerHTML = slPluginHTML
  else
    slPluginHTML
  return

Silverlight.buildHTML = (a) ->
  b = []
  b.push "<object type=\"application/x-silverlight\" data=\"data:application/x-silverlight,\""
  b.push " id=\"" + Silverlight.HtmlAttributeEncode(a.id) + "\""  if a.id?
  b.push " width=\"" + a.width + "\""  if a.width?
  b.push " height=\"" + a.height + "\""  if a.height?
  b.push " >"
  delete a.id

  delete a.width

  delete a.height

  for c of a
    continue
  b.push "</object>"
  b.join ""

Silverlight.createObjectEx = (b) ->
  a = b
  c = Silverlight.createObject(a.source, a.parentElement, a.id, a.properties, a.events, a.initParams, a.context)
  c  unless a.parentElement?

Silverlight.buildPromptHTML = (b) ->
  a = ""
  d = Silverlight.fwlinkRoot
  c = b.version
  if b.alt
    a = b.alt
  else
    c = ""  unless c
    a = "<a href='javascript:Silverlight.getSilverlight(\"{1}\");' style='text-decoration: none;'><img src='{2}' alt='Get Microsoft Silverlight' style='border-style: none'/></a>"
    a = a.replace("{1}", c)
    a = a.replace("{2}", d + "108181")
  a

Silverlight.getSilverlight = (e) ->
  Silverlight.onGetSilverlight()  if Silverlight.onGetSilverlight
  b = ""
  a = String(e).split(".")
  if a.length > 1
    c = parseInt(a[0])
    if isNaN(c) or c < 2
      b = "1.0"
    else
      b = a[0] + "." + a[1]
  d = ""
  d = "&v=" + b  if b.match(/^\d+\056\d+$/)
  Silverlight.followFWLink "149156" + d
  return

Silverlight.followFWLink = (a) ->
  top.location = Silverlight.fwlinkRoot + String(a)
  return

Silverlight.HtmlAttributeEncode = (c) ->
  a = undefined
  b = ""
  return null  unless c?
  d = 0

  while d < c.length
    a = c.charCodeAt(d)
    if a > 96 and a < 123 or a > 64 and a < 91 or a > 43 and a < 58 and a isnt 47 or a is 95
      b = b + String.fromCharCode(a)
    else
      b = b + "&#" + a + ";"
    d++
  b

Silverlight.default_error_handler = (e, b) ->
  d = undefined
  c = b.ErrorType
  d = b.ErrorCode
  a = "\nSilverlight error message     \n"
  a += "ErrorCode: " + d + "\n"
  a += "ErrorType: " + c + "       \n"
  a += "Message: " + b.ErrorMessage + "     \n"
  if c is "ParserError"
    a += "XamlFile: " + b.xamlFile + "     \n"
    a += "Line: " + b.lineNumber + "     \n"
    a += "Position: " + b.charPosition + "     \n"
  else if c is "RuntimeError"
    unless b.lineNumber is 0
      a += "Line: " + b.lineNumber + "     \n"
      a += "Position: " + b.charPosition + "     \n"
    a += "MethodName: " + b.methodName + "     \n"
  alert a
  return

Silverlight.__cleanup = ->
  a = Silverlight._silverlightCount - 1

  while a >= 0
    window["__slEvent" + a] = null
    a--
  Silverlight._silverlightCount = 0
  if window.removeEventListener
    window.removeEventListener "unload", Silverlight.__cleanup, false
  else
    window.detachEvent "onunload", Silverlight.__cleanup
  return

Silverlight.__getHandlerName = (b) ->
  a = ""
  if typeof b is "string"
    a = b
  else if typeof b is "function"
    if Silverlight._silverlightCount is 0
      if window.addEventListener
        window.addEventListener "onunload", Silverlight.__cleanup, false
      else
        window.attachEvent "onunload", Silverlight.__cleanup
    c = Silverlight._silverlightCount++
    a = "__slEvent" + c
    window[a] = b
  else
    a = null
  a

Silverlight.onRequiredVersionAvailable = ->

Silverlight.onRestartRequired = ->

Silverlight.onUpgradeRequired = ->

Silverlight.onInstallRequired = ->

Silverlight.IsVersionAvailableOnError = (d, a) ->
  b = false
  try
    if a.ErrorCode is 8001 and not Silverlight.__installationEventFired
      Silverlight.onUpgradeRequired()
      Silverlight.__installationEventFired = true
    else if a.ErrorCode is 8002 and not Silverlight.__installationEventFired
      Silverlight.onRestartRequired()
      Silverlight.__installationEventFired = true
    else if a.ErrorCode is 5014 or a.ErrorCode is 2106
      b = true  if Silverlight.__verifySilverlight2UpgradeSuccess(a.getHost())
    else
      b = true
  b

Silverlight.IsVersionAvailableOnLoad = (b) ->
  a = false
  try
    a = true  if Silverlight.__verifySilverlight2UpgradeSuccess(b.getHost())
  a

Silverlight.__verifySilverlight2UpgradeSuccess = (d) ->
  c = false
  b = "2.0.31005"
  a = null
  try
    if d.IsVersionSupported(b + ".99")
      a = Silverlight.onRequiredVersionAvailable
      c = true
    else if d.IsVersionSupported(b + ".0")
      a = Silverlight.onRestartRequired
    else
      a = Silverlight.onUpgradeRequired
    if a and not Silverlight.__installationEventFired
      a()
      Silverlight.__installationEventFired = true
  c