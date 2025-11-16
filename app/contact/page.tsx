import { Suspense } from "react";
import ContactsClientPage from "./ContactsClientPage";

export default function ContactPage() {
  return (
    <Suspense fallback={<div />}>
      <ContactsClientPage />
    </Suspense>
  );
}
