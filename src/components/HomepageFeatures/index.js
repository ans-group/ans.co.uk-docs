import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import SearchBarWrapper from "../../theme/SearchBar";

const FeatureList = [
  {
    title: "Cloud Technology",
    Svg: require("../../svg/cloud_management.svg").default,
    nav: "/docs/ecloud/",
  },
  {
    title: "Domain & DNS Management",
    Svg: require("../../svg/feature-flag.svg").default,
    nav: "/docs/domains-and-dns-management/",
  },
  {
    title: "Backup & High Availability",
    Svg: require("../../svg/coins.svg").default,
    nav: "/docs/backup-and-high-availability/",
  },
  {
    title: "Email",
    Svg: require("../../svg/email.svg").default,
    nav: "/docs/email/",
  },
  {
    title: "Security",
    Svg: require("../../svg/security_recommendations.svg").default,
    nav: "/docs/security/",
  },
  {
    title: "eCommerce Stacks",
    Svg: require("../../svg/dx-score-white.svg").default,
    nav: "/docs/ecommerce-stacks/",
  },
  {
    title: "Monitoring & Usage Management",
    Svg: require("../../svg/monitoring.svg").default,
    nav: "/docs/monitoring/",
  },
  {
    title: "Networking",
    Svg: require("../../svg/monitoring.svg").default,
    nav: "/docs/network/",
  },
  {
    title: "Operating Systems",
    Svg: require("../../svg/monitoring.svg").default,
    nav: "/docs/operating-systems/",
  },
  {
    title: "Colocation",
    Svg: require("../../svg/dx-score-white.svg").default,
    nav: "/docs/network/colo/",
  },
  {
    title: "ANS Glass",
    Svg: require("../../svg/ans-menu-logo.svg").default,
    nav: "/docs/ans-glass/",
  },
];

function Feature({ Svg, title, description, nav }) {
  return (
    <div style={{ height: "200px" }} className={clsx("col col--4")}>
      <Link
        style={{
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        to={nav}
        className={clsx("card", styles.feature)}
      >
        <div
          style={{ textAlign: "center" }}
          className="text--center padding-horiz--md"
        >
          <h3 style={{ margin: "0px" }}>{title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
