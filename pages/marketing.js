import Layout from "../components/Layout";
import Section from "../components/Section";
import Box from "../components/Box";
import Row from "../components/Row";
import Nav from "../components/Nav";

import adBuy from "../libs/ad-buy";
import adMonitor from "../libs/ad-monitor";
import adNetwork from "../libs/ad-network";
import buildSite from "../libs/build-site";
import dataAnalysis from "../libs/data-analysis";
import deals from "../libs/deals";
import kol from "../libs/kol";
import mailMarketing from "../libs/mail-marketing";
import review from "../libs/review";
import roi from "../libs/roi";
import socialMarketing from "../libs/social-marketing";

export default (props) => {
  return (
    <Layout>
      <h2>营销推广</h2>
      <Nav
        menus={[
          {
            name: "社交营销"
          },
          { name: "红人挖掘" },
          {
            name: "联盟营销"
          },
          {
            name: "邮件营销"
          }
        ]}
        items={[
          <Row list={socialMarketing} />,
          <Row list={kol} />,
          <Row list={adNetwork} />,
          <Row list={mailMarketing} />
        ]}
      />

      <h2>广告</h2>
      <div className="card">
        <Section title="广告投放" list={adBuy} />
        <div className="split-line" />
        <Section title="广告监测" list={adMonitor} />
      </div>

      <h2>Deals 平台</h2>
      <Section list={deals} />

      <h2>转化分析</h2>
      <div className="card">
        <Section title="数据分析" list={dataAnalysis} />
        <div className="split-line" />
        <Section title="转化率优化" list={roi} />
      </div>

      <h2>评论与测评</h2>
      <Box list={review} />
    </Layout>
  );
};
