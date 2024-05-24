import ReactQueryProvider from "@/components/react-query/ReactQueryProvider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/next-auth/auth";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: React.ReactNode;
}

export default async function Providers({ children }: ProvidersProps) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <ReactQueryProvider>
        <Toaster position={"top-center"} />
        {children}
      </ReactQueryProvider>
    </SessionProvider>
  );
}
