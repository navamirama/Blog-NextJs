export const GA_TRACKING_ID = "G-17YP5GFGJ1";

// process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devprocess.env.NEXT_PUBLIC_GA_IDprocess.env.NEXT_PUBLIC_GA_IDguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
