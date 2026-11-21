export type InstallationPageDetails = {
  eyebrow: string;
  title: string;
  accent: string;
  summary: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  imagePosition: string;
  galleryProject: string;
  overviewTitle: string;
  overview: string;
  included: string[];
  estimateFactors: string[];
  optionsTitle: string;
  optionsIntro: string;
  preparation: string;
  closingTitle: string;
  closingCopy: string;
};

export const installationPageDetails: Record<string, InstallationPageDetails> = {
  'hardscaping-outdoor-living': {
    eyebrow: 'Patios & Hardscaping',
    title: 'Patios & hardscaping.',
    accent: 'Enjoy more outside.',
    summary: 'A place to gather, a path through the garden, or a better connection between the house and yard. Bring your outdoor space together with stone, pavers, and a thoughtful plan.',
    image: '/media/ready/flagstone-patio.webp',
    imageAlt: 'Blade flagstone patio beside a covered porch with a circular fire-pit ring',
    imageCaption: 'Natural flagstone patio work from the Blade project gallery.',
    imagePosition: '50% 100%',
    galleryProject: 'flagstone-patio',
    overviewTitle: 'More room for everyday living.',
    overview: 'Start with how you want to use the space. We’ll talk through the layout, material choices, preparation, and how the new surface connects to your home and landscape.',
    included: ['Stone and paver patio areas', 'Garden paths and walkways', 'Borders and landscape edging', 'Site preparation and finishing details'],
    estimateFactors: ['Area, layout, and intended use', 'Stone or paver selection', 'Existing surfaces and site preparation', 'Drainage, transitions, and access'],
    optionsTitle: 'Build a space that works for you.',
    optionsIntro: 'A single garden path or a larger outdoor improvement. We’ll help define the work and the details that bring it together.',
    preparation: 'Share reference photos, approximate dimensions, and any features you want to keep. Structural work or utility connections are assessed separately before a project scope is confirmed.',
    closingTitle: 'Make more room for life outdoors.',
    closingCopy: 'Tell us about the patio, path, or outdoor space you have in mind.',
  },
  'rock-stone-landscaping': {
    eyebrow: 'Rock & Stone Landscaping',
    title: 'Rock & stone.',
    accent: 'Naturally defined.',
    summary: 'Decorative rock, clean borders, and natural texture that give your outdoor space a more finished look. Let’s find the materials and layout that suit your property.',
    image: '/media/ready/front-yard-renovation.webp',
    imageAlt: 'Decorative rock beds surrounding an established tree in a residential front yard',
    imageCaption: 'Residential rock beds from the Blade project gallery.',
    imagePosition: '50% 50%',
    galleryProject: 'rock-beds',
    overviewTitle: 'A cleaner edge. A natural finish.',
    overview: 'The details make a difference: how the material is contained, where it meets the lawn, and how it works around existing plants. We’ll review the area and plan the preparation before installing new rock or stone.',
    included: ['Decorative rock and stone beds', 'Gravel and landscape material changes', 'Defined borders and transitions', 'Preparation, material placement, and cleanup'],
    estimateFactors: ['Area and existing landscape materials', 'Rock size, color, and installation depth', 'Edging and material containment', 'Removal, delivery, and equipment access'],
    optionsTitle: 'Bring texture into the landscape.',
    optionsIntro: 'Refresh an existing bed or give a new area its own character. Choose the materials and details around the way you use your property.',
    preparation: 'Send photos of the area and any stone styles you like. We’ll discuss the plants, borders, material depth, and upkeep so the finished space is practical as well as attractive.',
    closingTitle: 'Give your landscape a defined finish.',
    closingCopy: 'Share the area you’d like to improve. We’ll help you work through the options.',
  },
  'landscape-installation': {
    eyebrow: 'Sod & Landscape Installation',
    title: 'Sod installation.',
    accent: 'A greener fresh start.',
    summary: 'Fresh sod, planting beds, and the finishing details that bring a yard together. Start with the space you have and a clear plan for the landscape you want.',
    image: '/media/optimized/planting.webp',
    imageAlt: 'Blade planting and mulch installation beside a curved walkway with a stone border',
    imageCaption: 'Planting beds and finishing details from the Blade project gallery.',
    imagePosition: '50% 75%',
    galleryProject: 'sod',
    overviewTitle: 'A fresh landscape, from the ground up.',
    overview: 'Whether you’re adding lawn to a new area or refreshing an established yard, good preparation comes first. We’ll review the existing conditions, water access, layout, and the materials that fit your plans.',
    included: ['New sod and lawn areas', 'Planting and garden bed installation', 'Mulch, stone, and defined edging', 'Preparation and establishment guidance'],
    estimateFactors: ['Lawn and planting area measurements', 'Existing ground and removal needs', 'Sod, plant, and material selection', 'Watering access and site conditions'],
    optionsTitle: 'Bring the whole yard together.',
    optionsIntro: 'Start with a lawn area, add new planting, or combine the details into one coordinated installation.',
    preparation: 'Tell us about sun exposure, watering access, pets, and the level of ongoing care you want. Establishment needs and any agreed follow-up work are discussed before installation.',
    closingTitle: 'Let’s give your yard a fresh start.',
    closingCopy: 'Tell us about your space and the landscape you’d like to come home to.',
  },
};
