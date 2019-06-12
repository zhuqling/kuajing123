import Layout from "../components/Layout";
import Section from "../components/Section";
import Grid from "../components/Grid";
import Row from "../components/Row";
import Nav from "../components/Nav";

import accountAnalysis from "../libs/account-analysis";
import adBuy from "../libs/ad-buy";
import adMonitor from "../libs/ad-monitor";
import adNetwork from "../libs/ad-network";
import amazonSites from "../libs/amazon-sites";
import buildSite from "../libs/build-site";
import chromePlugins from "../libs/chrome-plugins";
import contentCheck from "../libs/content-check";
import contentLance from "../libs/content-lance";
import contentMake from "../libs/content-make";
import dataAnalysis from "../libs/data-analysis";
import deals from "../libs/deals";
import elance from "../libs/elance";
import keywords from "../libs/keywords";
import kol from "../libs/kol";
import logo from "../libs/logo";
import mailMarketing from "../libs/mail-marketing";
import news from "../libs/news";
import payment from "../libs/payment";
import photos from "../libs/photos";
import product from "../libs/product";
import productive from "../libs/productive";
import refLink from "../libs/ref-link";
import review from "../libs/review";
import roi from "../libs/roi";
import seoSem from "../libs/seo-sem";
import shipping from "../libs/shipping";
import sns from "../libs/sns";
import socialMarketing from "../libs/social-marketing";
import software from "../libs/software";
import tools from "../libs/tools";
import vision from "../libs/vision";

const sections = <li />;
const buildSiteLinks = <Section list={buildSite} />;

export default (props) => {
  return (
    <Layout>
      <h2>行业资讯</h2>
      <Grid list={news} />

      <h2>社交媒体</h2>
      <Row title="社交媒体 SNS" list={sns} />

      <h2>亚马逊站点</h2>
      <Grid list={amazonSites} />

      <h2>卖家工具</h2>
      <Nav
        menus={[
          { name: "常用工具" },
          { name: "Chrome 插件" },
          { name: "效率工具" }
        ]}
        items={[
          <Row list={tools} />,
          <Row list={chromePlugins} />,
          <Row list={productive} />
        ]}
      />
    </Layout>
  );
};
