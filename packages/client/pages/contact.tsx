import { MainLayout } from "@/components/layout";
import { Contact as ContactContent } from "@/containers/Contact";
import { ReactElement } from "react";

const Contact = () => {
  return (
    <div>
      <ContactContent />
    </div>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Contact;
