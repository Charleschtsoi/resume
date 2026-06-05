import type { ProductionComponent } from "@/content/production-showcase";

type ComponentBlockProps = {
  component: ProductionComponent;
};

export function ComponentBlock({ component }: ComponentBlockProps) {
  return (
    <div className="rounded-xl border border-border bg-[var(--apple-gray-100)]/50 p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-[var(--apple-blue)]">
        {component.role}
      </p>
      <h4 className="mt-1 text-lg font-semibold text-[var(--apple-black)]">
        {component.title}
      </h4>

      {component.repo && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <tbody>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 font-medium text-muted-foreground">GitHub</th>
                <td className="py-2">
                  <a
                    href={component.repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--apple-blue)] hover:underline"
                  >
                    {component.repo.url.replace("https://github.com/", "")}
                  </a>
                </td>
              </tr>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 font-medium text-muted-foreground">Branch</th>
                <td className="py-2">{component.repo.branch}</td>
              </tr>
              {component.liveLinks?.map((link) => (
                <tr key={link.url} className="border-b border-border last:border-0">
                  <th className="py-2 pr-4 font-medium text-muted-foreground">
                    {link.label}
                  </th>
                  <td className="py-2">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-[var(--apple-blue)] hover:underline"
                    >
                      {link.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Contains
          </p>
          <ul className="mt-2 space-y-1 text-sm text-[var(--apple-black)]/90">
            {component.contains.map((item) => (
              <li key={item} className="before:mr-2 before:text-[var(--apple-blue)] before:content-['•']">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {component.excludes && component.excludes.length > 0 && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Does not contain
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {component.excludes.map((item) => (
                <li key={item} className="before:mr-2 before:content-['–']">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {component.clone && (
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {component.clone.label}
          </p>
          <pre className="mt-2 overflow-x-auto rounded-lg bg-[var(--apple-black)] p-4 text-xs leading-relaxed text-[var(--apple-gray-100)]">
            {component.clone.steps.join("\n")}
          </pre>
        </div>
      )}
    </div>
  );
}
