/* Import the addon reducers */
import * as addonReducers from './reducers';

/* Import the SiteStatusBanner component */
import SiteStatusBanner from './SiteStatusBanner';

/* Define the applyConfig function */
const applyConfig = (config) => {
  /* Get the app extras */
  const appExtras = config.settings.appExtras || [];

  /* Get the status banner config */
  const statusBannerConfig = config.settings.statusBanner || {};

  /* Set the status banner config */
  config.settings.statusBanner = {
    ...statusBannerConfig,
  };

  /* Add the SiteStatusBanner component to the app extras */
  config.settings.appExtras = [
    ...appExtras,
    {
      match: '',
      component: SiteStatusBanner,
    },
  ];

  /* Set the addon reducers */
  config.addonReducers = {
    ...config.addonReducers,
    ...addonReducers,
  };

  return config;
};

export default applyConfig;
