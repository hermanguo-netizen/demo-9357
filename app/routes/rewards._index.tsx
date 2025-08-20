import { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "@remix-run/react";
import { generatePageTitle } from "@/utils/utils";
import { Dashboard, ReferralProvider } from "@orderly.network/affiliate";
import "../styles/rewards.css";

export const meta: MetaFunction = () => {
  return [{ title: generatePageTitle("Rewards") }];
};

export default function RewardsIndexPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <ReferralProvider
      becomeAnAffiliateUrl={import.meta.env.VITE_BECOME_AFFILIATE_URL}
      learnAffiliateUrl={import.meta.env.VITE_LEARN_AFFILIATE_URL}
      referralLinkUrl={import.meta.env.VITE_REFERRAL_LINK_URL}
      overwrite={{
        shortBrokerName: import.meta.env.VITE_ORDERLY_BROKER_NAME,
        brokerName: import.meta.env.VITE_ORDERLY_BROKER_NAME,
        ref: {
        },
      }}
    >
      <Dashboard.DashboardPage />
    </ReferralProvider>

  )
}

