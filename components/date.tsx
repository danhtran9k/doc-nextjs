import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
	const date = parseISO(dateString);
	console.log("🚀 date-L9-format(date", format(date, "LLLL d, yyyy"));
	return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
