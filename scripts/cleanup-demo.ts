import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const demoTargets = [
  "src/components/todo-list",
  "src/app/api/todos",
  "src/lib/api/todos.ts",
  "src/lib/db/schema/todos.ts",
  "src/lib/db/queries/todos.ts",
  "src/lib/db/migrations",
  "src/lib/mcp/tools",
];

const exportCleanupFiles = [
  "src/lib/api/index.ts",
  "src/lib/db/queries/index.ts",
  "src/lib/db/schema/index.ts",
];

const CLEAN_MCP_SERVER = `import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function buildMcpServer(_userId: string): McpServer {
  const server = new McpServer({
    name: "eazo-mcp",
    version: "1.0.0",
  });

  // Register your tools here. See AGENTS.md \xA7 8 for the pattern:
  //   import { registerMyTool } from "./tools/my-tool";
  //   registerMyTool(server, _userId);

  return server;
}
`;

const CLEAN_HOME_PAGE = `import { UserBadge } from "@/components/user-profile/user-badge";

export default function Home() {
  const nextSteps = [
    {
      title: "Read the docs",
      desc: "Open AGENTS.md and README.md to understand the template architecture.",
      code: "AGENTS.md + README.md",
    },
    {
      title: "Replace this page",
      desc: "Move your product UI into src/components and keep page.tsx thin.",
      code: "src/app/page.tsx",
    },
    {
      title: "Build your first feature",
      desc: "Add API routes under src/app/api and call them from typed helpers.",
      code: "src/app/api/*",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.orange.500/0.18),transparent_50%)]"
      />

      <header className="absolute right-4 top-4 z-10">
        <UserBadge />
      </header>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-10 px-6 py-20 md:px-10">
        <section className="space-y-4 text-center md:text-left">
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-600 dark:text-orange-300">
            Eazo App Starter
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Build your next app with Eazo
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Demo artifacts are removed. You now have a clean foundation with auth,
            data access, and platform integrations ready for your product.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {nextSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border bg-card/60 p-5 shadow-sm backdrop-blur"
            >
              <h2 className="text-base font-medium">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.desc}
              </p>
              <code className="mt-4 inline-block rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                {step.code}
              </code>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border bg-card/50 p-5 md:p-6">
          <h3 className="text-sm font-medium">Next command</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Start developing and iterate in real time.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-3 text-sm">
            <code>bun dev</code>
          </pre>
        </section>
      </main>
    </div>
  );
}
`;

const CLEAN_NOTIFICATIONS_TEST_ROUTE = `import { type NextRequest, NextResponse } from "next/server";
import { notifications, EazoNotificationPublishError } from "@eazo/sdk/server";
import { requireAuth } from "@/lib/auth";

/**
 * Sends a test push to every subscriber of this app. The template ships a
 * static message so the route works immediately after \`bun run cleanup:demo\`.
 * Customize \`title\` / \`body\` / \`data\` for your product.
 */
export async function POST(request: NextRequest) {
  const auth = requireAuth(request);
  if (!auth.ok) return auth.response;

  const callerLabel =
    auth.user.name?.trim() || auth.user.email?.split("@")[0] || "there";

  try {
    const result = await notifications.publish({
      title: \`Hello, \${callerLabel} 👋\`,
      body: "This is a test notification from your Eazo app.",
      data: {
        source: "test-button",
        triggeredByUserId: auth.user.id,
      },
    });
    return NextResponse.json(result);
  } catch (err) {
    if (err instanceof EazoNotificationPublishError) {
      return NextResponse.json(
        { error: err.message, code: err.code },
        { status: err.code >= 400 && err.code < 600 ? err.code : 500 },
      );
    }
    console.error("[notifications/test] unexpected error", err);
    return NextResponse.json({ error: "publish failed" }, { status: 500 });
  }
}
`;

const fileRewrites: Array<{ relPath: string; contents: string }> = [
  { relPath: "src/lib/mcp/server.ts", contents: CLEAN_MCP_SERVER },
  { relPath: "src/app/page.tsx", contents: CLEAN_HOME_PAGE },
  {
    relPath: "src/app/api/notifications/test/route.ts",
    contents: CLEAN_NOTIFICATIONS_TEST_ROUTE,
  },
];

function resolveFromRoot(relPath: string): string {
  return path.join(ROOT, relPath);
}

function removePath(relPath: string) {
  const absPath = resolveFromRoot(relPath);
  if (!existsSync(absPath)) {
    console.log(`- skip (not found): ${relPath}`);
    return;
  }

  rmSync(absPath, { recursive: true, force: true });
  console.log(`- removed: ${relPath}`);
}

function cleanupTodosExport(relPath: string) {
  const absPath = resolveFromRoot(relPath);
  if (!existsSync(absPath)) {
    console.log(`- skip export cleanup (not found): ${relPath}`);
    return;
  }

  const original = readFileSync(absPath, "utf8");
  const next = original
    .split("\n")
    .filter((line) => !/^\s*export\s+\*\s+from\s+["']\.\/todos["'];?\s*$/.test(line))
    .join("\n")
    .trimEnd();

  const finalContent = next.length > 0 ? `${next}\n` : "";
  if (finalContent !== original) {
    writeFileSync(absPath, finalContent, "utf8");
    console.log(`- cleaned exports: ${relPath}`);
  } else {
    console.log(`- no export changes: ${relPath}`);
  }
}

function rewriteFile({ relPath, contents }: { relPath: string; contents: string }) {
  const absPath = resolveFromRoot(relPath);
  if (!existsSync(absPath)) {
    console.log(`- skip rewrite (not found): ${relPath}`);
    return;
  }

  const original = readFileSync(absPath, "utf8");
  if (original === contents) {
    console.log(`- already clean: ${relPath}`);
    return;
  }

  writeFileSync(absPath, contents, "utf8");
  console.log(`- rewrote: ${relPath}`);
}

function main() {
  console.log("Cleaning template demo artifacts...");
  demoTargets.forEach(removePath);

  console.log("Fixing stale index exports...");
  exportCleanupFiles.forEach(cleanupTodosExport);

  console.log("Rewriting files that referenced demo modules...");
  fileRewrites.forEach(rewriteFile);

  console.log("Done. Demo cleanup completed.");
}

main();
