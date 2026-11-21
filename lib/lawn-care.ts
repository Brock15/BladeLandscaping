export const lawnCarePlans = [
  { id: 'essential', name: 'Essential Lawn Care', price: 120, description: 'The essentials for a clean, well-kept lawn.', features: ['Biweekly mowing · 2 visits per month', 'String trimming around obstacles', 'Edging sidewalks and driveways', 'Blowing off hard surfaces'] },
  { id: 'standard', name: 'Standard Lawn Care', price: 200, description: 'More frequent care, with attention to the details.', features: ['Weekly mowing · up to 4 visits per month', 'String trimming and edging', 'Blowing off hard surfaces', 'Light flower bed weed removal once per month', 'Basic lawn health observations'] },
  { id: 'premium', name: 'Premium Property Care', price: 300, description: 'Regular care for your lawn and the landscape around it.', features: ['Everything in Standard Lawn Care', 'Monthly shrub and hedge touch-ups', 'Monthly flower bed weeding', 'Light leaf and debris cleanup', 'Seasonal landscape inspections', 'Priority scheduling for additional landscaping work'] },
] as const;

export const completePropertyPlan = { id: 'complete', name: 'Complete Property Management', price: 450, features: ['Everything in Premium Property Care', 'Detailed landscape bed maintenance', 'Seasonal pruning and plant care', 'Seasonal mulch touch-ups with a material allowance', 'Scheduled property condition reports'] } as const;

export function lawnPlanById(id?: string) {
  return [...lawnCarePlans, completePropertyPlan].find(plan => plan.id === id);
}
