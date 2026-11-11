export function estimateHref(service?: string, commercial = false) {
  const parameters = new URLSearchParams();
  if (commercial || service === 'commercial-landscaping') parameters.set('project', 'commercial');
  if (service) parameters.set('service', service);
  const query = parameters.toString();
  return query ? `/contact?${query}` : '/contact';
}
