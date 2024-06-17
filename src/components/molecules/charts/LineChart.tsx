import { Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { LineChart as CommunityLineChart } from "react-native-chart-kit";
import { LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";

interface LineChartProps {
  data: LineChartData;
}

const HORIZONTAL_INDENT = 16;

export default function LineChart(props: LineChartProps) {
  const { data } = props;

  const theme = useTheme();

  return (
    <CommunityLineChart
      data={data}
      width={Dimensions.get("window").width - HORIZONTAL_INDENT}
      height={220}
      chartConfig={{
        backgroundGradientFrom: theme.colors.surfaceVariant,
        backgroundGradientTo: theme.colors.surfaceVariant,
        // TODO: instead hardcode onSurfaceVariant color value, use it from theme
        // but with dynamic alpha value
        color: (opacity = 1) => `rgba(74, 69, 78, ${opacity})`,
      }}
      bezier
      style={{
        borderRadius: theme.roundness,
      }}
    />
  );
}
