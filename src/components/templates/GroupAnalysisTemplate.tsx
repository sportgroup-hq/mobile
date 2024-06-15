import { View, ScrollView, StyleSheet } from "react-native";

import LineChart from "~/components/molecules/charts/LineChart";
import PieChart from "~/components/molecules/charts/PieChart";
import BarChart from "~/components/molecules/charts/BarChart";

export function GroupAnalysisTemplate() {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.main}>
          <BarChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                },
              ],
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  main: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    gap: 32,
  },
  empty: {
    alignItems: "center",
  },
});
