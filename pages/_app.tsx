import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import "~/styles/animations.css";
import { PageTransition } from "src/components/PageTransition";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <PageTransition />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
