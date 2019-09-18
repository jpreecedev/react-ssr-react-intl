import React from "react"
import { hydrate } from "react-dom"
import { IntlProvider } from "react-intl"
import App from "../shared/App"

import "./styles.scss"

hydrate(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  document.getElementById("app")
)

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept()
  }
}
