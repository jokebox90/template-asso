// pwa/src/services/matomoConfig.js

import { createInstance } from '@jonkoops/matomo-tracker-react'

export const matomo = createInstance({
  urlBase: `https://analytics.petitboutde.cloud/`,
  siteId: 4,
  trackerUrl: `https://analytics.petitboutde.cloud/matomo.php`,
  disabled: false,
  heartBeat: {
    active: true,
    seconds: 10,
  },
  linkTracking: false,
  configurations: {
    disableCookies: true,
    setSecureCookie: false,
    setRequestMethod: "POST",
  },
});
