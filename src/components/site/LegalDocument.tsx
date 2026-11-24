import { Fragment } from "react";

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

export function LegalDocument({ content }: { content: string }) {
  const lines = content.replace(/\r/g, "").split("\n");

  return (
    <article className="mx-auto max-w-4xl space-y-5">
      {lines.map((line, index) => {
        const text = line.trim();
        if (!text) return null;

        if (text === "---") {
          return <hr key={index} className="my-8 border-border" />;
        }
        if (text.startsWith("# ")) {
          return (
            <h1 key={index} className="text-3xl font-extrabold text-foreground md:text-4xl">
              <InlineText text={text.slice(2)} />
            </h1>
          );
        }
        if (text.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="mt-10 border-b border-border pb-3 text-2xl font-bold text-foreground"
            >
              <InlineText text={text.slice(3)} />
            </h2>
          );
        }
        if (text.startsWith("### ")) {
          return (
            <h3 key={index} className="mt-7 text-xl font-bold text-foreground">
              <InlineText text={text.slice(4)} />
            </h3>
          );
        }
        if (text.startsWith("- ") || /^\d+\.\d*\./.test(text)) {
          const marker = text.startsWith("- ") ? "" : text.match(/^\d+(?:\.\d+)*/)?.[0];
          const value = text.startsWith("- ")
            ? text.slice(2)
            : text.replace(/^\d+(?:\.\d+)*/, "").replace(/^\.?\s*/, "");
          return (
            <div key={index} className="ml-5 flex gap-2 text-muted-foreground md:ml-7">
              <span className="shrink-0 text-primary">{marker || "•"}</span>
              <p className="leading-7">
                <InlineText text={value} />
              </p>
            </div>
          );
        }

        return (
          <p key={index} className="leading-7 text-muted-foreground">
            <InlineText text={text} />
          </p>
        );
      })}
    </article>
  );
}
