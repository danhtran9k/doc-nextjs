import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Something bout meeee</p>
				<p>
					(This is a sample website - you'll be building a site like this on{" "}
					<a href="https://next-learn-starter.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=256&q=75">
						our Next.js tutorial
					</a>
					.)
				</p>
			</section>
		</Layout>
	);
}
