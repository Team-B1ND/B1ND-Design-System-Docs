import clsx from "clsx";
import React from "react";
import { FeatureItem as FeatrueItemType } from "../FeatureList";
import styles from "./styles.module.css";

interface Props {
  data: FeatrueItemType;
}

const FeatureItem = ({ data }: Props) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <data.Svg className={styles.featureItemSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
