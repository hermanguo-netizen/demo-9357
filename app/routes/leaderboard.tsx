import { useEffect } from "react";
import { Outlet } from "@remix-run/react";
import { Scaffold } from "@orderly.network/ui-scaffold";
import { useOrderlyConfig } from "@/utils/config";
import { useNav } from "@/hooks/useNav";
import { useTranslation } from "@orderly.network/i18n";
import { MetaFunction } from "@remix-run/node";
import { generatePageTitle } from "@/utils/utils";
import { getPageMeta } from "@/utils/seo";

export const meta: MetaFunction = ({ params }) => {
  const rootSeoTags = getPageMeta();
  const pageSpecificTags = [{ title: generatePageTitle("Leaderboard") }];
  return [...pageSpecificTags, ...rootSeoTags];
};

export default function LeaderboardPage() {
  const config = useOrderlyConfig();
  const { onRouteChange } = useNav();
  const { t } = useTranslation();

  return (
    <Scaffold
      mainNavProps={{
        ...config.scaffold.mainNavProps,
        initialMenu: "/leaderboard",
      }}
      footerProps={config.scaffold.footerProps}
      routerAdapter={{
        onRouteChange,
      }}
    >
      <Outlet />
    </Scaffold>
  );
}
