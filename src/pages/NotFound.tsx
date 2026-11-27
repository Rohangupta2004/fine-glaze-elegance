import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { TitleBlock } from "@/components/common/Drawing";
import "@/components/common/sheet.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="sx-sec sx-404">
        <div className="fg-wrap" style={{ display: "grid", gap: 32, justifyItems: "start" }}>
          <div>
            <p className="dw-no">Error 404</p>
            <h1>Page not found.</h1>
            <p className="sx-note">The page you asked for is not in this drawing set.</p>
            <a href="/" className="fg-btn2">
              Return to home
            </a>
          </div>
          <TitleBlock rows={[["SHEET", "404"], ["SUBJECT", "Not found"]]} />
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
