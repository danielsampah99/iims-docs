export type Route = {
	title: string;
	links: RouteLink[];
};

export type RouteLink = {
	title: string;
	href: string;
};

export const routes: Route[] = [
	{
		title: "Introduction",
		links: [
			{ title: "Getting started", href: "/" },
			{ title: "Login", href: "/docs/login" },
			{ title: "Dashboard", href: "/docs/dashboard" },
			{ title: "Sidebar", href: "/docs/side-bar" },
		],
	},
	{
		title: "Customers",
		links: [
			{
				title: "New Customer",
				href: "/docs/new-customer",
			},
			{
				title: "All Customers",
				href: "/docs/all-customers",
			},
			{
				title: "New Prospect",
				href: "/docs/new-prospect",
			},
			{
				title: "All Prospects",
				href: "/docs/all-prospects",
			},
			{
				title: "Preview Customer",
				href: "/docs/customer-preview",
			},
			{
				title: "Customer Statements",
				href: "/docs/customer-statements",
			},
			{
				title: "Edit Customer",
				href: "/docs/edit-customer",
			},
		],
	},
	{
		title: "Policies",
		links: [
			{
				title: "All Motor Policies",
				href: "/docs/policies/motor/all-policies",
			},
			{
				title: "New Motor Policy",
				href: "/docs/policies/motor/all-policies/new",
			},
			{
				title: "All Motor ReInsurance Inwards",
				href: "/docs/policies/motor/reinsurance-inwards",
			},
			{
				title: "New Motor ReInsurance Inwards",
				href: "/docs/policies/motor/reinsurance-inwards/new",
			},
			{
				title: "All Fire Policies",
				href: "/docs/policies/fire/all-policies",
			},
			{
				title: "New Fire Policy",
				href: "/docs/policies/fire/all-policies/new",
			},
			{
				title: "All Fire ReInsurance Inwards",
				href: "/docs/policies/fire/reinsurance-inwards",
			},
			{
				title: "New Fire ReInsurance Inwards",
				href: "/docs/policies/fire/reinsurance-inwards/new",
			},
			{
				title: "All Accident Policies",
				href: "/docs/policies/accident/all-policies",
			},
			{
				title: "New Accident Policy",
				href: "/docs/policies/accident/all-policies/new",
			},
			{
				title: "All Accident ReInsurance Inwards",
				href: "/docs/policies/accident/reinsurance-inwards",
			},
			{
				title: "New Accident ReInsurance Inwards",
				href: "/docs/policies/accident/reinsurance-inwards/new",
			},
			{
				title: "All Engineering Policies",
				href: "/docs/policies/engineering/all-policies",
			},
			{
				title: "New Engineering Policy",
				href: "/docs/policies/engineering/all-policies/new",
			},
			{
				title: "All Engineering ReInsurance Inwards",
				href: "/docs/policies/engineering/reinsurance-inwards",
			},
			{
				title: "New Engineering ReInsurance Inwards",
				href: "/docs/policies/engineering/reinsurance-inwards/new",
			},
			{
				title: "All Bond Policies",
				href: "/docs/policies/bonds/all-policies",
			},
			{
				title: "New Bond Policy",
				href: "/docs/policies/bonds/all-policies/new",
			},
			{
				title: "All Bond ReInsurance Inwards",
				href: "/docs/policies/bonds/reinsurance-inwards",
			},
			{
				title: "New Bond ReInsurance Inwards",
				href: "/docs/policies/bonds/reinsurance-inwards/new",
			},
			{
				title: "All Marine Policies",
				href: "/docs/policies/marine/all-policies",
			},
			{
				title: "New Marine Policy",
				href: "/docs/policies/marine/all-policies/new",
			},
			{
				title: "All Marine ReInsurance Inwards",
				href: "/docs/policies/marine/reinsurance-inwards",
			},
			{
				title: "New Marine ReInsurance Inwards",
				href: "/docs/policies/marine/reinsurance-inwards/new",
			},
			{
				title: "All Oil & Gas Policies",
				href: "/docs/policies/oil-and-gas/all-policies",
			},
			{
				title: "New Oil & Gas Policy",
				href: "/docs/policies/oil-and-gas/all-policies/new",
			},
			{
				title: "All Oil & Gas ReInsurance Inwards",
				href: "/docs/policies/oil-and-gas/reinsurance-inwards",
			},
			{
				title: "New Oil & Gas ReInsurance Inwards",
				href: "/docs/policies/oil-and-gas/reinsurance-inwards/new",
			},
		],
	},
];
