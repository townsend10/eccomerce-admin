import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  //Carrega primeira produto
  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  //Verifica se tem produto e redireciona para o link do produto

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
// 1:51
