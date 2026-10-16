import { ExternalLink } from "@/components/ui/ExternalLink";
import { Icon } from "@/components/ui/Icon";
import { AppSection } from "@/components/ui/AppSection";
import { products } from "@/content/products";

const linkClass =
  "text-foreground hover:text-accent inline-flex items-center gap-1 underline decoration-border underline-offset-4 transition-colors";

export function Products() {
  return (
    <AppSection id="products">
      <div className="space-y-12">
        {products.map((product) => (
          <article key={product.name}>
            <h3 className="font-semibold">
              {product.name} <span className="font-normal text-muted">|</span>{" "}
              <span className="font-normal text-muted">
                {product.stack.join(", ")}
              </span>
            </h3>
            <p className="mt-3 flex gap-6 text-sm">
              {product.links.map((link) => (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  className={linkClass}
                >
                  {link.label}
                  <Icon name="externalLink" className="size-3.5" />
                </ExternalLink>
              ))}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
              {product.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AppSection>
  );
}
