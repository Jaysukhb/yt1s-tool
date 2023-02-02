import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FormattedMessage } from "gatsby-plugin-intl"

export const navigationList = [
  {
    text: "Youtube Downloader",
    url: "/"
  },
  {
    text: "Youtube to MP3",
    url: "/youtube-to-mp3"
  },
  {
    text: "Youtube to MP4",
    url: "/youtube-to-mp4"
  }
];

export const languageName = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  hi: "हिन्दी / Hindī",
  id: "Indonesian",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  my: "Myanmar (မြန်မာ)",
  ms: "Malay",
  ph: "Filipino",
  pt: "Português",
  ru: "Русский",
  th: "ไทย",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  "zh-cn": "简体中文",
  "zh-tw": "繁體中文",
  sa: "العربية",
  bn: "বাঙালি",
};

export const bestDescription = [
  { description: <FormattedMessage id="best-desc-one"/> },
  { description: <FormattedMessage id="best-desc-two"/> }
];

export const links = [
  {
    text: <FormattedMessage id="box-title-one"/>,
    url: (<StaticImage src="./images/clock.svg" loading="eager" alt="clock" width={200} quality={100}/>),
    style: { background: "#d2e3fc" },
    description: <FormattedMessage id="box-desc-one"/>
  },
  {
    text: <FormattedMessage id="box-title-two"/>,
    url: (<StaticImage src="./images/limit.svg" loading="eager" alt="limit" width={200} quality={100}/>),
    style: { background: "#fad2cf" },
    description: <FormattedMessage id="box-desc-two"/>
  },
  {
    text: <FormattedMessage id="box-title-three"/>,
    url: (<StaticImage src="./images/safe.svg" loading="eager" alt="safe" width={200} quality={100}/>),
    style: { background: "#ceead6" },
    description: <FormattedMessage id="box-desc-three"/>
  },
  {
    text: <FormattedMessage id="box-title-four"/>,
    url: (<StaticImage src="./images/platform.svg" loading="eager" alt="platform" width={200} quality={100}/>),
    style: { background: "#feefc3" },
    description: <FormattedMessage id="box-desc-four"/>
  },
  {
    text: <FormattedMessage id="box-title-five"/>,
    url: (<StaticImage src="./images/support.svg" loading="eager" alt="support" width={200} quality={100}/>),
    style: { background: "#ffd5ec" },
    description: <FormattedMessage id="box-desc-five"/>
  },
  {
    text: <FormattedMessage id="box-title-six"/>,
    url: (<StaticImage src="./images/cloud.svg" loading="eager" alt="cloud" width={200} quality={100}/>),
    style: { background: "#d1f4ff" },
    description: <FormattedMessage id="box-desc-six"/>
  }
];

export const typeIcon = [
  { url: (<StaticImage src="./images/icon1.svg" loading="eager" alt="icon1" quality={100}/>) },
  { url: (<StaticImage src="./images/icon2.svg" loading="eager" alt="icon2" quality={100}/>) },
  { url: (<StaticImage src="./images/icon3.svg" loading="eager" alt="icon3" quality={100}/>) },
  { url: (<StaticImage src="./images/icon4.svg" loading="eager" alt="icon4" quality={100}/>) },
  { url: (<StaticImage src="./images/icon5.svg" loading="eager" alt="icon5" quality={100}/>) }
];

export const typeDesc = <FormattedMessage id="download-extensions-desc"/>

export const stepCount = [
  {
    number: 1,
    description: <FormattedMessage id="how-download-desc-one"/>,
    style: { background: "#d2e3fc", color: "#4285f4" }
  },
  {
    number: 2,
    description: <FormattedMessage id="how-download-desc-two"/>,
    style: { background: "#fad2cf", color: "#ed6357" }
  },
  {
    number: 3,
    description: <FormattedMessage id="how-download-desc-three"/>,
    style: { background: "#ceead6", color: "#34a853" }
  }
];

export const queAns = [
  {
    que: <FormattedMessage id="question-one"/>,
    ans: [{ ans: <FormattedMessage id="answers-one-one"/> },
      { ans: <FormattedMessage id="answers-one-two"/> },
      { ans: <FormattedMessage id="answers-one-three"/> }]
  },
  {
    que: <FormattedMessage id="question-two"/>,
    ans: [{ ans: <FormattedMessage id="answers-two"/> }]
  },
  {
    que: <FormattedMessage id="question-three"/>,
    ans: [{ ans: <FormattedMessage id="answers-three"/> }]
  },
  {
    que: <FormattedMessage id="question-four"/>,
    ans: [{ ans: <FormattedMessage id="answers-four"/> }]
  },
  {
    que: <FormattedMessage id="question-five"/>,
    ans: [{ ans: <FormattedMessage id="answers-five-one"/> },
      { ans: <FormattedMessage id="answers-five-two"/> },
      { ans: <FormattedMessage id="answers-five-three"/> }]
  },
  {
    que: <FormattedMessage id="question-six"/>,
    ans: [{ ans: <FormattedMessage id="answers-six"/> }]
  }
];

export const footerList = [
  {
    text: "Contact us",
    url: "/contact-us"
  },
  {
    text: "Privacy Policy",
    url: "/privacy-policy"
  },
  {
    text: "Terms of service",
    url: "/terms-of-service"
  }
];