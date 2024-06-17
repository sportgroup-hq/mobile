import { Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { BarChart as CommunityBarChart } from "react-native-chart-kit";
import { BarChartProps as CommunityBarChartProps } from "react-native-chart-kit/dist/BarChart";

interface BarChartProps {
  data: CommunityBarChartProps["data"];
}

const HORIZONTAL_INDENT = 16;

export default function BarChart(props: BarChartProps) {
  const { data } = props;

  const theme = useTheme();

  return (
    <CommunityBarChart
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
      yAxisLabel=""
      yAxisSuffix=""
      style={{
        borderRadius: theme.roundness,
      }}
    />
  );
}
