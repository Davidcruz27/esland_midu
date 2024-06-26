import catalan from "./ca.json";
import spanish from "./es.json";

const LANGUAGES = {
	CATALAN: "ca",
	SPANISH: "es",
};

export const getI18n = ({
	currentLocale = "es",
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANGUAGES.CATALAN) {
		return catalan;
	} else if (currentLocale === LANGUAGES.SPANISH) {
		return spanish;
	}
};
