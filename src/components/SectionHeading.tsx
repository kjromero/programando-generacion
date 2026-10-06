import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Shared section header so every section keeps the same typographic rhythm.
 */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) => {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-5",
            isDark ? "text-nature-light" : "text-primary",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-6",
              isDark ? "bg-nature-light/60" : "bg-primary/50",
            )}
          />
          {eyebrow}
        </p>
      )}

      <h2 className={cn("display-lg", isDark ? "text-cream" : "text-foreground")}>
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "lead mt-5",
            align === "center" && "mx-auto",
            isDark && "text-cream/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
