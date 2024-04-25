import { useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";

import EventInfoTab from "../organisms/EventInfoTab";
import EventRecordsTab from "../organisms/EventRecordsTab";

const renderScene = SceneMap({
  info: EventInfoTab,
  records: EventRecordsTab,
});

export default function CoachEventTemplate() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "info", title: "Інформація" },
    { key: "records", title: "Записи" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
}
