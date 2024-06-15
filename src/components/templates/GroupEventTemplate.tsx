import { useState } from "react";
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
  NavigationState,
} from "react-native-tab-view";

import EventInfoTab from "../organisms/EventInfoTab";
import EventParticipantsTab from "../organisms/EventParticipantsTab";
import { useTheme } from "react-native-paper";

const renderScene = SceneMap({
  info: EventInfoTab,
  records: EventParticipantsTab,
});

export default function GroupEventTemplate() {
  const theme = useTheme();

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
      renderTabBar={renderTabBar}
    />
  );

  function renderTabBar(
    props: SceneRendererProps & {
      navigationState: NavigationState<{ key: string; title: string }>;
    }
  ) {
    return (
      <TabBar
        style={{ backgroundColor: "transparent" }}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.onSurface}
        indicatorStyle={{ backgroundColor: theme.colors.primary }}
        {...props}
      />
    );
  }
}
