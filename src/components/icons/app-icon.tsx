import Image from "next/image";

const AppLogo = "/logo.svg";

export const AppIcon = () => (
	<Image
		src={AppLogo}
		alt="Integrated Insurance Management Systems's logo"
		width={200}
		height={200}
		className="size-9 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
	/>
);
