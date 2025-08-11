import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import "~/styles/animations.css";
import {ChatBotButton} from "~/components/ChatBotButton";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <ChatBotButton />
    </>
  );
};

export default MyApp;
