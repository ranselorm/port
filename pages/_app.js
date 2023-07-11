import "../styles/globals.css";
import Layout from "../components/Layout";

import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <div className="w-h-full">
          {/* <Transition /> */}
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
