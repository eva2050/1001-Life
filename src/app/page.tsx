import { TodoListPage } from "@/components/todo-list";
import { UserBadge } from "@/components/user-profile/user-badge";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <header className="absolute right-4 top-4 z-10 flex items-center gap-2">
        <LanguageSwitcher />
        <UserBadge />
      </header>

      <main>
        <TodoListPage />
      </main>
    </div>
  );
}
