'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../app-listing/AppListing.module.css';
import AppMark from './AppMark';

interface CatalogItem {
  id: string;
  name: string;
  description: string;
  category: string;
  downloads: string;
  rating?: string;
  featured?: boolean;
}

export default function AppCatalog({ items, categories, kind }: {
  items: CatalogItem[]; categories: string[]; kind: 'apps' | 'games';
}) {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? items : items.filter(item => item.category === active);
  return <>
    <div className={styles.categoryFilter} role="group" aria-label={kind === 'apps' ? 'Application categories' : 'Game categories'}>
      {categories.map(category => <button key={category} type="button" className={`${styles.filterButton} ${active === category ? styles.active : ''}`}
        aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>)}
    </div>
    {visible.length ? <div className={styles.appsGrid}>
      {visible.map(item => <Link key={item.id} href={`/hot-${kind}/${item.id}`} className={`${styles.appCard} ${item.featured ? styles.featured : ''} catalog-entry`}
        aria-label={`Learn more about ${item.name}`}>
        <div className={styles.appCardHeader}><AppMark name={item.id} className={styles.appIcon} />
          <div className={styles.appInfo}><h3 className={styles.appName}>{item.name}</h3><span className={styles.appCategory}>{item.category}</span></div>
        </div>
        <p className={styles.appDescription}>{item.description}</p>
        <div className={styles.appFooter}><div className={styles.appStats}>
          <span className={styles.downloadCount}>{item.downloads}</span>{item.rating && <span>{item.rating}</span>}
        </div><span className={styles.learnMore}>Learn More</span></div>
      </Link>)}
    </div> : <p className="catalog-empty" role="status">No {kind} in this category.</p>}
  </>;
}
