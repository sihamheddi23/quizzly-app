import ContextProvider from "@/components/ContextProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { UserButton } from "@clerk/nextjs";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-10  p-11">
      <div className="flex justify-between gap-2 items-center pb-4 border-b border-slate-300">
        <h1 className="text-2xl font-bold text-pink-900">Quizzy</h1>
        <UserButton />
      </div>
      <ContextProvider>
        <div>
          <LanguageSwitcher />
        </div>
        <div>{children}</div>
      </ContextProvider>
    </div>
  );
};

export default layout;
