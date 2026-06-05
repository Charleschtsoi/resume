import type { ProductionProject } from "@/content/production-showcase";

type ArchitectureBlockProps = {
  project: Pick<
    ProductionProject,
    | "architectureSummary"
    | "architectureSteps"
    | "envVars"
    | "apiEndpoints"
    | "notes"
  >;
};

export function ArchitectureBlock({ project }: ArchitectureBlockProps) {
  const hasArchitecture =
    project.architectureSummary ||
    (project.architectureSteps && project.architectureSteps.length > 0);
  const hasEnv = project.envVars && project.envVars.length > 0;
  const hasApi = project.apiEndpoints && project.apiEndpoints.length > 0;
  const hasNotes = project.notes && project.notes.length > 0;

  if (!hasArchitecture && !hasEnv && !hasApi && !hasNotes) return null;

  return (
    <div className="mt-6 space-y-6">
      {hasArchitecture && (
        <div>
          <h4 className="text-sm font-semibold text-[var(--apple-black)]">
            How they connect (production)
          </h4>
          {project.architectureSummary && (
            <p className="mt-2 text-sm text-muted-foreground">
              {project.architectureSummary}
            </p>
          )}
          {project.architectureSteps && (
            <pre className="mt-3 overflow-x-auto rounded-lg bg-[var(--apple-black)] p-4 text-xs leading-relaxed text-[var(--apple-gray-100)]">
              {project.architectureSteps.join("\n")}
            </pre>
          )}
        </div>
      )}

      {hasEnv && (
        <div>
          <h4 className="text-sm font-semibold text-[var(--apple-black)]">
            Environment variables
          </h4>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[320px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Name</th>
                  <th className="py-2 font-medium">Value / notes</th>
                </tr>
              </thead>
              <tbody>
                {project.envVars!.map((v) => (
                  <tr key={v.name} className="border-b border-border last:border-0">
                    <td className="py-2 pr-4 font-mono text-xs">{v.name}</td>
                    <td className="py-2 text-muted-foreground">
                      {v.description}
                      {v.isSecret && (
                        <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-800">
                          secret
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {hasApi && (
        <div>
          <h4 className="text-sm font-semibold text-[var(--apple-black)]">
            API / health URLs
          </h4>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[320px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Endpoint</th>
                  <th className="py-2 font-medium">URL</th>
                </tr>
              </thead>
              <tbody>
                {project.apiEndpoints!.map((ep) => (
                  <tr key={ep.url + ep.label} className="border-b border-border last:border-0">
                    <td className="py-2 pr-4">
                      {ep.method && (
                        <span className="mr-2 font-mono text-xs text-[var(--apple-blue)]">
                          {ep.method}
                        </span>
                      )}
                      {ep.label}
                    </td>
                    <td className="py-2">
                      <a
                        href={ep.url.startsWith("http") ? ep.url : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-[var(--apple-blue)] hover:underline"
                      >
                        {ep.url}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {hasNotes &&
        project.notes!.map((note) => (
          <div
            key={note.title}
            className="rounded-xl border border-amber-200/60 bg-amber-50/50 px-4 py-3"
          >
            <p className="text-sm font-medium text-[var(--apple-black)]">{note.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{note.body}</p>
          </div>
        ))}
    </div>
  );
}
