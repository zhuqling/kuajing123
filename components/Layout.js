import Head from "next/head";

import AppNav from "./AppNav";
import Footer from "./Footer";

export default function Layout(props) {
  const title = props.title || "跨境电商导航";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="跨境电商导航,卖家工具,卖家网址导航,亚马逊导航,亚马逊卖家工具,亚马逊卖家导航,Amazon卖家导航,亚马逊工具,Amazon,Amazon工具,卖家导航,关键词工具,站外引流,邮件营销,红人推广"
        />
        <meta
          name="description"
          content="跨境电商卖家网址导航是为全球电商卖家、独立站从业人员量身定制的网址导航网站。为广大亚马逊卖家，独立站卖家，提供常用网址导航、专业辅助工具、数据分析软件、关键词工具、站外引流、邮件营销、社交营销等网站入口。"
        />
        <link rel="stylesheet" href="/static/style.css" />
      </Head>

      <AppNav />
      <div className="main-layout">{props.children}</div>
      <Footer />
    </div>
  );
}
