import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import SearchBarWrapper from "../../theme/SearchBar";

const FeatureList = [
  {
    title: "Cloud Technology",
    Svg: require("../../svg/cloud_management.svg").default,
    nav: "/docs/cloud",
  },
  {
    title: "Domain & DNS Management",
    Svg: require("../../svg/feature-flag.svg").default,
    nav: "/docs/domains-and-dns-management",
  },
  {
    title: "Backup & High Availability",
    Svg: require("../../svg/coins.svg").default,
    nav: "/docs/backup-and-high-availability",
  },
  {
    title: "Email",
    Svg: require("../../svg/email.svg").default,
    nav: "/docs/email",
  },
  {
    title: "Security",
    Svg: require("../../svg/security_recommendations.svg").default,
    nav: "/docs/security",
  },
  {
    title: "eCommerce Stacks",
    Svg: require("../../svg/dx-score-white.svg").default,
    nav: "/docs/ecommerce-stacks",
  },
  {
    title: "Monitoring & Usage Management",
    Svg: require("../../svg/monitoring.svg").default,
    nav: "/docs/monitoring",
  },
  {
    title: "Networking",
    Svg: require("../../svg/monitoring.svg").default,
    nav: "/docs/network",
  },
  {
    title: "Operating Systems",
    Svg: require("../../svg/monitoring.svg").default,
    nav: "/docs/operating-systems",
  },
  {
    title: "Webcelerator",
    Svg: require("../../svg/go-live-white.svg").default,
    nav: "/docs/webcel/",
  },
  {
    title: "Colocation",
    Svg: require("../../svg/dx-score-white.svg").default,
    nav: "/docs/colocation",
  },
  {
    title: "ANS Glass",
    Svg: require("../../svg/ans-menu-logo.svg").default,
    nav: "/docs/ans-glass/",
  },
];

function Feature({ Svg, title, description, nav }) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={nav}>
        <div className="text--center">
          {Svg ? <Svg className={styles.featureSvg} role="img" /> : null}
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
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
