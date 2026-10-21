import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import SiteShell from './SiteShell';

function text(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (isValidElement<{ children?: ReactNode }>(node)) return text(node.props.children);
  return Children.toArray(node).map(child => text(child)).join('');
}

export default function LegalDocument({ children }: { children: ReactNode }) {
  const nodes = Children.toArray(children);
  const title = nodes.shift();
  const updated = nodes.shift();
  const intro: ReactNode[] = [];
  const sections: { id: string; title: string; nodes: ReactNode[] }[] = [];
  for (const node of nodes) {
    if (isValidElement(node) && node.type === 'h2') {
      const heading = text(node);
      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      sections.push({ id, title: heading, nodes: [cloneElement(node as ReactElement<{ id?: string }>, { id })] });
    } else if (sections.length) sections[sections.length - 1].nodes.push(node);
    else intro.push(node);
  }
  return <SiteShell variant="legal-page">
    <div className="legal-hero home-container"><div>{title}{updated}</div><img src="/logo.webp" width="96" height="96" alt="" aria-hidden="true" /></div>
    <div className="legal-layout home-container">
      <aside className="legal-index"><nav aria-label="Document sections">{sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}<span aria-hidden="true">↗</span></a>)}</nav></aside>
      <div className="legal-prose"><div className="legal-intro" data-motion>{intro}</div>{sections.map(section => <section className="legal-section" key={section.id}>{section.nodes}</section>)}</div>
    </div>
  </SiteShell>;
}
