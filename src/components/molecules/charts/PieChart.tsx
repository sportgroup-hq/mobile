import { Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { PieChart as CommunityPieChart } from "react-native-chart-kit";
import { PieChartProps as CommunityPieChartProps } from "react-native-chart-kit/dist/PieChart";

interface PieChartProps {
  data: CommunityPieChartProps["data"];
  accessor: CommunityPieChartProps["accessor"];
}

const HORIZONTAL_INDENT = 16;

export default function PieChart(props: PieChartProps) {
  const { data, accessor } = props;

  const theme = useTheme();

  return (
    <CommunityPieChart
      data={data}
      width={Dimensions.get("window").width - HORIZONTAL_INDENT}
      height={220}
      accessor={accessor}
      chartConfig={{
        // TODO: instead hardcode onSurfaceVariant color value, use it from theme
        // but with dynamic alpha value
        color: (opacity = 1) => `rgba(74, 69, 78, ${opacity})`,
      }}
      backgroundColor={theme.colors.surfaceVariant}
      paddingLeft="15"
      style={{
        borderRadius: theme.roundness,
      }}
    />
  );
}
