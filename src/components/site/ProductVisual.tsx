import AppMark from './AppMark';

/** Original product screenshots carry the same account-layer motif as the homepage. */
export default function ProductVisual({ app = '', image = '/multi_run_1.webp' }: { app?: string; image?: string }) {
  return <div className="interior-product" aria-hidden="true" data-motion>
    <div className="interior-product-layer layer-yellow" />
    <div className="interior-product-layer layer-cyan" />
    <div className="interior-product-screen"><img src={image} alt="" width="1142" height="2030" /></div>
    <div className="interior-product-mark"><AppMark name={app} /></div>
  </div>;
}
