import { Card } from "@components/Card";
import styles from "./tabs.module.css";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { Categories } from "@components/Carousel";

export const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs.Root
      className={styles.container}
      defaultValue="tab1"
      orientation="vertical"
    >
      <Tabs.List className={styles.tablist} aria-label=" services ">
        <Tabs.Trigger
          onClick={() => setActiveTab("tab1")}
          className={styles.trigger}
          value="tab1"
        >
          <span>Development & IT</span>
          {activeTab === "tab1" && <div className={styles.underline} />}
        </Tabs.Trigger>

        <Tabs.Trigger
          onClick={() => setActiveTab("tab2")}
          className={styles.trigger}
          value="tab2"
        >
          <span>Design & creative</span>
          {activeTab === "tab2" && <div className={styles.underline} />}
        </Tabs.Trigger>

        <Tabs.Trigger
          onClick={() => setActiveTab("tab3")}
          className={styles.trigger}
          value="tab3"
        >
          <span>Sales & Marketing</span>
          {activeTab === "tab3" && <div className={styles.underline} />}
        </Tabs.Trigger>
        <Tabs.Trigger
          onClick={() => setActiveTab("tab4")}
          className={styles.trigger}
          value="tab4"
        >
          <span>Writing & Translation</span>
          {activeTab === "tab4" && <div className={styles.underline} />}
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content className={styles.content} value="tab1">
        <Categories />
      </Tabs.Content>

      <Tabs.Content className={styles.content} value="tab2">
         <Categories />
      </Tabs.Content>

      <Tabs.Content className={styles.content} value="tab3">
         <Categories />
      </Tabs.Content>
      <Tabs.Content className={styles.content} value="tab4">
         <Categories />
      </Tabs.Content>
    </Tabs.Root>
  );
};
