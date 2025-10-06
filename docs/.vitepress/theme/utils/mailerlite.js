const MAILERLITE_ACCOUNT_ID = '1722221'
let loaderPromise

function ensureStub(windowObject) {
  if (typeof windowObject.ml === 'function') {
    return windowObject.ml
  }

  const stub =
    windowObject.ml ||
    function () {
      ;(stub.q = stub.q || []).push(arguments)
    }

  windowObject.ml = stub
  return stub
}

function injectScript(windowObject, documentObject) {
  return new Promise((resolve) => {
    const scriptId = 'mailerlite-universal-script'
    let script = documentObject.getElementById(scriptId)

    const finish = () => resolve(windowObject.ml)

    if (script && script.dataset && script.dataset.loaded === 'true') {
      finish()
      return
    }

    const handleLoad = () => {
      if (script && script.dataset) {
        script.dataset.loaded = 'true'
      }
      finish()
    }

    const handleError = () => resolve(undefined)

    if (!script) {
      script = documentObject.createElement('script')
      script.id = scriptId
      script.async = true
      script.src = 'https://assets.mailerlite.com/js/universal.js'
      script.addEventListener('load', handleLoad, { once: true })
      script.addEventListener('error', handleError, { once: true })

      const firstScript = documentObject.getElementsByTagName('script')[0]
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript)
      } else if (documentObject.head) {
        documentObject.head.appendChild(script)
      } else {
        documentObject.body.appendChild(script)
      }
    } else {
      script.addEventListener('load', handleLoad, { once: true })
      script.addEventListener('error', handleError, { once: true })
      if (script.dataset && script.dataset.loaded === 'true') {
        finish()
        return
      }
      if ('readyState' in script && script.readyState === 'complete') {
        finish()
        return
      }
    }
  })
}

export function loadMailerLite() {
  if (typeof window === 'undefined') {
    return Promise.resolve(undefined)
  }

  const w = window
  const d = document

  const ml = ensureStub(w)
  try {
    ml('account', MAILERLITE_ACCOUNT_ID)
  } catch (error) {
    if (typeof console !== 'undefined') {
      console.warn('[MailerLite] Failed to queue account initialisation', error)
    }
  }

  if (!loaderPromise) {
    loaderPromise = injectScript(w, d).then((result) => {
      if (!result) {
        loaderPromise = undefined
      }
      return result
    })
  }

  return loaderPromise
}

export async function renderMailerLiteForm(formId) {
  if (!formId || typeof window === 'undefined') {
    return false
  }

  const ml = await loadMailerLite()
  if (typeof ml !== 'function') {
    return false
  }

  try {
    ml('form', formId, 'load')
    return true
  } catch (error) {
    try {
      ml('forms', 'load', formId)
      return true
    } catch (nestedError) {
      console.error(`Failed to initialise MailerLite form "${formId}"`, nestedError)
      return false
    }
  }
}