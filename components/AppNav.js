import Link from "next/link";

export default () => (
  <header>
    <div className="main-layout">
      <nav>
        <div className="logo">跨境导航</div>
        <ul>
          <li>
            <Link href="/">
              <a>首页</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a>开店</a>
            </Link>
          </li>
          <li>
            <Link href="/marketing">
              <a>推广</a>
            </Link>
          </li>
          <li>
            <Link href="/seo">
              <a>SEO</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
