import Head from "next/head";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Box from "../components/Box";
import Row from "../components/Row";
import Nav from "../components/Nav";

import dataAnalysis from "../libs/data-analysis";
import keywords from "../libs/keywords";
import refLink from "../libs/ref-link";
import roi from "../libs/roi";
import seoSem from "../libs/seo-sem";

import contentCheck from "../libs/content-check";
import contentLance from "../libs/content-lance";
import contentMake from "../libs/content-make";

export default (props) => {
  return (
    <Layout>
      <Head>
        <title>SEO</title>
      </Head>
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

      <h2>SEO / SEM</h2>
      <Row list={seoSem} />

      <h2>外链推广</h2>
      <Row list={refLink} />

      <h2>关键字优化</h2>
      <Box list={keywords} />

      <h2>转化分析</h2>
      <Row list={dataAnalysis} />

      <h2>转化率优化</h2>
      <Row list={roi} />
    </Layout>
  );
};
