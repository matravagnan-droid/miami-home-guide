"use client";

import { Analytics } from "@vercel/analytics/next";

const OPT_OUT_KEY = "mhg-analytics-opt-out";

export default function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        const params = new URLSearchParams(window.location.search);
        if (params.get("noanalytics") === "1") {
          window.localStorage.setItem(OPT_OUT_KEY, "1");
        } else if (params.get("noanalytics") === "0") {
          window.localStorage.removeItem(OPT_OUT_KEY);
        }
        if (window.localStorage.getItem(OPT_OUT_KEY) === "1") {
          return null;
        }
        return event;
      }}
    />
  );
}
