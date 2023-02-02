import * as React from "react"
import {useEffect, useState} from "react"
import axios from "axios"
import {FormattedMessage, useIntl, navigate} from "gatsby-plugin-intl"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Sections from "../components/sections"
import * as styles from "../styles/download.module.css"

const Download = (props) => {
  const intl = useIntl();

  const inputValue = props?.location?.state?.url;
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadConvert, setLoadConvert] = useState(false);
  const [loadDownload, setLoadDownload] = useState(false);
  const [downloadLink, setDownloadLink] = useState([]);
  const [convertKey, setConvertKey] = useState();

  useEffect(() => {
    setLoading(true);
    const config = {headers: {"Content-Type": "application/x-www-form-urlencoded"}};
    const params = new URLSearchParams({"q": inputValue, "vt": "home"});
    const url = "https://yt1s.com/api/ajaxSearch/index";

    axios.post(url, params, config)
      .then((result) => {
        setLoading(false);
        setDataList([result.data])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [inputValue]);

  const handleConverting = () => {
    setLoadConvert(true);
    const config = {headers: {"Content-Type": "application/x-www-form-urlencoded"}};
    const params = new URLSearchParams({"vid": dataList[0]?.vid, "k": convertKey});
    const url = "https://yt1s.com/api/ajaxConvert/convert";

    axios.post(url, params, config)
      .then((result) => {
        setLoadConvert(false);
        setLoadDownload(true);
        setDownloadLink(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const handleChange = (e) => {
    setConvertKey(e.target.value)
  };

  const handleConvertNext = () => {
    navigate("/")
  };

  return (
    <Layout>
      <Seo title={intl.formatMessage({id: "download-seo-title"})}/>
      <div className={styles.mainWrapper}>
        <h1><FormattedMessage id="downloader-title"/></h1>
        <p><FormattedMessage id="downloader-desc"/></p>
        {loading ?
          <img
            alt="logo"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;background:%23fff;display:block;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cg transform='translate(20 50)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23e15b64'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.375s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3C/circle%3E%3C/g%3E%3Cg transform='translate(40 50)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23f8b26a'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.25s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3C/circle%3E%3C/g%3E%3Cg transform='translate(60 50)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23abbd81'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.125s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3C/circle%3E%3C/g%3E%3Cg transform='translate(80 50)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%2381a3bd'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3C/circle%3E%3C/g%3E%3C/svg%3E"
          /> :
          <>
            <div className={styles.downloader}>
              <div className={styles.thumbImg}>
                <img
                  width="100%"
                  src={`https://i.ytimg.com/vi/${dataList[0]?.vid}/0.jpg`}
                  alt="img"/>
              </div>
              <div className={styles.content}>
                <div>
                  <h3 className={styles.videoName}>{dataList[0]?.title}</h3>
                  <p>{dataList[0]?.a}</p>
                  <p
                    className={styles.seconds}>
                    {dataList.length > 0 && new Date(dataList[0].t * 1000).toISOString().substring(14, 19)}
                  </p>
                  <div className={styles.convertList}>
                    <div className={styles.convertTab}>
                      {loadConvert ?
                        <span className={styles.convertLoad}>
                          <FormattedMessage id="converting-title"/>
                        </span>
                        :
                        (loadDownload ?
                            <>
                              <a
                                style={{width: "auto", padding: "9px 20px"}}
                                href={downloadLink?.dlink}
                                className={styles.getLink}>
                                <FormattedMessage id="download-btn"/>
                              </a>
                              <button
                                style={{marginLeft: "12px"}}
                                onClick={handleConvertNext}
                                className={styles.convertLoad}>
                                <FormattedMessage id="convert-next-btn"/>
                              </button>
                            </>
                            :
                            <>
                              <select className={styles.videoQu} onClick={handleChange}>
                                <optgroup label="mp4">
                                  {
                                    dataList.length > 0 &&
                                    Object.keys(dataList[0]?.links.mp4).map((item, i) => (
                                      <option key={i} value={dataList[0].links.mp4[item].k}>
                                        {dataList[0].links.mp4[item].q} {dataList[0].links.mp4[item].size}
                                      </option>
                                    ))
                                  }
                                </optgroup>
                                <optgroup label="mp3">
                                  {
                                    dataList.length > 0 &&
                                    Object.keys(dataList[0]?.links.mp3).map((item) => (
                                      <option value={dataList[0].links.mp3[item].k}>
                                        {dataList[0].links.mp3[item].q_text} {dataList[0].links.mp3[item].size}
                                      </option>
                                    ))
                                  }
                                </optgroup>
                              </select>
                              <button className={styles.getLink} onClick={handleConverting}>
                                <FormattedMessage id="get-link-btn"/>
                              </button>
                            </>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
      <Sections/>
    </Layout>
  )
};

export default Download
