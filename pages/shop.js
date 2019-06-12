import Layout from "../components/Layout";
import Section from "../components/Section";

import Grid from "../components/Grid";
import Box from "../components/Box";
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
      <h2>亚马逊站点</h2>
      <Grid list={amazonSites} />

      <h2>开店必备</h2>
      <Nav
        menus={[
          { name: "选品工具" },
          {
            name: "建站"
          },
          {
            name: "收款"
          },
          {
            name: "物流"
          },
          { name: "账号分析" }
        ]}
        items={[
          <Section list={product} />,
          buildSiteLinks,
          <Section list={payment} />,
          <Section list={shipping} />,
          <Row list={accountAnalysis} />
        ]}
      />

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

      <h2>店铺设计</h2>
      <Nav
        menus={[{ name: "图库" }, { name: "LOGO 设计" }, { name: "视觉制作" }]}
        items={[
          <Section list={photos} />,
          <Section list={logo} />,
          <Section list={vision} />
        ]}
      />

      <h2>内容制作</h2>
      <Nav
        menus={[
          {
            name: "内容制作"
          },
          { name: "文章检查" },
          { name: "内容外包" }
        ]}
        items={[
          <Section list={contentMake} />,
          <Section list={contentCheck} />,
          <Section list={contentLance} />
        ]}
      />

      <h2>管理软件</h2>
      <Box list={software} />

      <h2>工作外包</h2>
      <Row list={elance} />
    </Layout>
  );
};
