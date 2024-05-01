import { useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";

import EventInfoTab from "../organisms/EventInfoTab";
import EventParticipantsTab from "../organisms/EventParticipantsTab";

const renderScene = SceneMap({
  info: EventInfoTab,
  records: EventParticipantsTab,
});

export default function GroupEventTemplate() {
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
