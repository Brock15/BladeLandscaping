'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { estimateHref } from '@/lib/estimate-links';

export default function EstimateLink({ children, className, onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  const pathname = usePathname();
  const service = pathname.startsWith('/services/') ? pathname.split('/')[2] : undefined;
  return <Link href={estimateHref(service)} className={className} onClick={onClick}>{children}</Link>;
}
