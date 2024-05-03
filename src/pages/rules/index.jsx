import Link from 'next/link';
import Header from "../../app/components/Header";

const rulesData = [
  { id: 'area-alt' },
  { id: 'aria-allowed-attr' },
  { id: 'aria-braille-equivalent' },
  { id: 'aria-command-name' },
  { id: 'aria-conditional-attr' },
  { id: 'aria-deprecated-role' },
  { id: 'aria-hidden-body' },
  { id: 'aria-hidden-focus' },
  { id: 'aria-input-field-name' },
  { id: 'aria-meter-name' },
  { id: 'aria-progressbar-name' },
  { id: 'aria-prohibited-attr' },
  { id: 'aria-required-attr' },
  { id: 'aria-required-children' },
  { id: 'aria-required-parent' },
  { id: 'aria-roles' },
  { id: 'aria-toggle-field-name' },
  { id: 'aria-tooltip-name' },
  { id: 'aria-valid-attr-value' },
  { id: 'aria-valid-attr' },
  { id: 'blink' },
  { id: 'button-name' },
  { id: 'bypass' },
  { id: 'color-contrast' },
  { id: 'definition-list' },
  { id: 'dlitem' },
  { id: 'document-title' },
  { id: 'duplicate-id-aria' },
  { id: 'form-field-multiple-labels' },
  { id: 'frame-focusable-content' },
  { id: 'frame-title-unique' },
  { id: 'frame-title' },
  { id: 'html-has-lang' },
  { id: 'html-lang-valid' },
  { id: 'html-xml-lang-mismatch' },
  { id: 'image-alt' },
  { id: 'input-button-name' },
  { id: 'input-image-alt' },
  { id: 'label' },
  { id: 'link-in-text-block' },
  { id: 'link-name' },
  { id: 'list' },
  { id: 'listitem' },
  { id: 'marquee' },
  { id: 'meta-refresh' },
  { id: 'meta-viewport' },
  { id: 'nested-interactive' },
  { id: 'no-autoplay-audio' },
  { id: 'object-alt' },
  { id: 'role-img-alt' },
  { id: 'scrollable-region-focusable' },
  { id: 'select-name' },
  { id: 'server-side-image-map' },
  { id: 'svg-img-alt' },
  { id: 'td-headers-attr' },
  { id: 'th-has-data-cells' },
  { id: 'valid-lang' },
  { id: 'video-caption' }
];


// Konverterer id til et display name
function formatDisplayName(id) {
  return id.split('-')
           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
           .join(' ');
}

export default function RulesOverview() {
  return (
    <main>
      <Header/>
      <h1>Axe Accessibility Rules</h1>
      <ul>
        {rulesData.map(rule => (
          <li key={rule.id}>
            <Link href={`/rules/${rule.id}`}>
              {formatDisplayName(rule.id)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
