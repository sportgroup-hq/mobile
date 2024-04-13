import { Redirect } from "expo-router";

import { ROUTES } from "../src/constants/routes";

export default function RootScreen() {
  return <Redirect href={ROUTES.GROUPS.ROOT} />;
}
