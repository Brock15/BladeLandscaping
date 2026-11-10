export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  introduction: string;
  detail: string;
  offerings: { title: string; description: string }[];
  considerations: string;
  questions: { question: string; answer: string }[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export const services: Service[] = [
  {
    slug: 'landscape-installation', number: '01', title: 'Landscape Installation', shortTitle: 'Landscape installation',
    summary: 'Bring a new landscape together with planting, fresh sod, defined beds, and thoughtful material choices.',
    introduction: 'A fresh landscape starts with a plan for your property.',
    detail: 'Whether you are finishing a new yard or improving an established property, we help turn your priorities into a practical installation scope. We discuss how you use the space, the existing conditions, and the materials that make sense before work begins.',
    offerings: [
      { title: 'Planting & garden beds', description: 'New planting areas, bed preparation, shrubs, and plants selected around the conditions of your site.' },
      { title: 'Sod & lawn installation', description: 'Discuss lawn preparation, sod placement, transitions, and the watering access needed to establish your new lawn.' },
      { title: 'Finishing materials', description: 'Mulch, decorative stone, and edging that give your landscape a cohesive finish.' },
    ],
    considerations: 'Tell us about sun exposure, access to water, pets, and how much ongoing care you want. These details help shape a landscape that fits everyday life.',
    questions: [
      { question: 'Can you work with my existing landscape?', answer: 'Yes. The walkthrough helps identify what to keep, what to remove, and how new planting or lawn areas can connect with the rest of your property.' },
      { question: 'Do I need a finished landscape plan?', answer: 'You can start with ideas, reference photos, or an existing plan. We will discuss the scope and identify any additional design or specialist input needed before installation.' },
      { question: 'What happens after new plants or sod are installed?', answer: 'We discuss establishment and care needs with you, including watering responsibilities. Any specific follow-up work will be included in your proposal.' },
    ],
    image: '/media/optimized/planting.webp', imageAlt: 'Planting bed with ornamental plants and a stone border', imageCaption: 'Planting and landscape bed work from our existing portfolio.',
  },
  {
    slug: 'landscape-renovations', number: '02', title: 'Complete Landscape Renovations', shortTitle: 'Landscape renovations',
    summary: 'Rework tired or overgrown outdoor areas into a cleaner, more usable landscape.',
    introduction: 'Give your existing property a considered fresh start.',
    detail: 'An outdoor renovation can involve more than replacing plants. We look at removal, preparation, lawn areas, bed layouts, and material changes together so the work follows a sensible sequence. Your proposal defines the areas being renovated and the work included.',
    offerings: [
      { title: 'Removal & preparation', description: 'Address unwanted vegetation, old landscape materials, and debris within the agreed project area.' },
      { title: 'Front & backyard improvements', description: 'Combine bed renovations, planting, sod, and stone into a coordinated property improvement project.' },
      { title: 'Phased improvements', description: 'Prioritize the work and discuss which areas can be completed together or in separate stages.' },
    ],
    considerations: 'Share the parts of your yard that are difficult to maintain or use. We will discuss access, existing features to protect, disposal, and how the work may affect your day-to-day routine.',
    questions: [
      { question: 'Can removal and installation be included in one proposal?', answer: 'Yes. We can scope preparation, removal, and new landscape installation together so you can review the full sequence and exclusions before deciding.' },
      { question: 'Can we renovate in stages?', answer: 'We can discuss priorities and practical phases. Material access and preparation sometimes make it more efficient to combine parts of the work; we will explain those considerations.' },
      { question: 'Can you preserve existing trees or plants?', answer: 'Let us know what you want to retain during the walkthrough. We will discuss working around those features and identify where specialist advice may be appropriate.' },
    ],
    image: '/media/optimized/landscape-hero.webp', imageAlt: 'Completed decorative rock bed surrounding a tree beside a residential driveway', imageCaption: 'A residential rock bed improvement from our existing portfolio.',
  },
  {
    slug: 'hardscaping-outdoor-living', number: '03', title: 'Patios, Hardscaping & Outdoor Living', shortTitle: 'Patios & hardscaping',
    summary: 'Explore paver areas, garden paths, borders, and outdoor surfaces suited to your property.',
    introduction: 'Create a more useful connection between your home and yard.',
    detail: 'A defined path or outdoor seating area can change how a property is used. We discuss the intended use, layout, surface materials, site access, and preparation before proposing an installation. Each request is evaluated on its specific scope and site conditions.',
    offerings: [
      { title: 'Paths & walkways', description: 'Stone or paver routes connecting outdoor areas, with attention to transitions and how the space is used.' },
      { title: 'Patio & seating areas', description: 'Discuss a proposed paver or stone area, material options, preparation, and any specialist requirements.' },
      { title: 'Borders & landscape edging', description: 'Defined transitions between lawn, planting beds, and decorative landscape materials.' },
    ],
    considerations: 'Structural walls, foundations, pool work, and utility connections require separate assessment. We identify specialist needs before including work in a proposal; this page does not represent engineering or licensed trade services.',
    questions: [
      { question: 'Can you quote a patio from a photo?', answer: 'A reference photo is useful for discussing the look you want. A site visit is needed to review dimensions, preparation, access, and the proposed scope before preparing an estimate.' },
      { question: 'What affects the installation scope?', answer: 'Existing surfaces, soil conditions, drainage, material selection, access, and the intended use all affect the preparation and work involved.' },
      { question: 'Do you build every type of outdoor structure?', answer: 'No. Share your plans and we will confirm the work we can take on. Structural or specialist work must be assessed separately and included only when the appropriate resources are confirmed.' },
    ],
  },
  {
    slug: 'drainage-grading', number: '04', title: 'Drainage & Grading', shortTitle: 'Drainage & grading',
    summary: 'Start with an on-site review of pooling water, uneven areas, and landscape surface conditions.',
    introduction: 'Understand the site before deciding on a solution.',
    detail: 'Standing water or an uneven yard needs a site-specific conversation. We begin with the affected areas, the direction water moves, and the surrounding landscape. We then determine whether a surface landscape improvement fits our scope or if the property needs specialist evaluation first.',
    offerings: [
      { title: 'Surface condition review', description: 'Walk through low areas, visible runoff routes, and the landscape conditions you have observed.' },
      { title: 'Landscape preparation & leveling', description: 'Evaluate localized soil preparation and surface improvements associated with lawn or landscape installation.' },
      { title: 'Drainage project assessment', description: 'Discuss your drainage goals and identify when additional design, engineering, or qualified trade input is needed.' },
    ],
    considerations: 'We do not promise a drainage fix from a photograph or advertise engineered drainage systems. Work involving foundations, public drainage, utilities, or regulated connections needs appropriate specialist review.',
    questions: [
      { question: 'What should I send before the consultation?', answer: 'Photos or short videos taken during and after rain are helpful, along with the areas affected and how long water remains. Share any existing plans or known drainage features.' },
      { question: 'Can you guarantee that my yard will never hold water?', answer: 'No. Rainfall, surrounding properties, soil, and existing infrastructure can all affect drainage. We will explain the proposed work and its limits before you decide.' },
      { question: 'Do you handle engineered drainage or utility work?', answer: 'Those scopes require separate verification and the appropriate qualified professionals. Our first step is to determine what the site needs and what work we can responsibly include.' },
    ],
  },
  {
    slug: 'rock-stone-landscaping', number: '05', title: 'Rock & Stone Landscaping', shortTitle: 'Rock & stone landscaping',
    summary: 'Define beds and outdoor areas with decorative rock, gravel, stone, and clean material transitions.',
    introduction: 'Natural texture. A more intentional landscape.',
    detail: 'Rock and stone can give planting beds and outdoor areas a distinct finish. We help scope the preparation, material placement, borders, and cleanup around your project. The right choice depends on the location, the look you want, and how you plan to use and maintain the area.',
    offerings: [
      { title: 'Decorative rock beds', description: 'Refresh landscape areas with decorative stone, appropriate preparation, and defined edges.' },
      { title: 'Gravel & material replacement', description: 'Discuss removing existing materials and introducing gravel or stone into a planned landscape area.' },
      { title: 'Stone accents & transitions', description: 'Connect planting areas, paths, and lawn edges with considered placement and material changes.' },
    ],
    considerations: 'We discuss material size, color, depth, containment, and access before installation. Rock beds still need ongoing care; maintenance expectations are part of the conversation.',
    questions: [
      { question: 'Can you replace mulch with decorative rock?', answer: 'We can assess the area and discuss preparation, existing plants, edging, and the material you prefer. Rock changes the conditions around plants, so site suitability matters.' },
      { question: 'Will a rock landscape be maintenance free?', answer: 'No. Leaves, weeds, and material movement can still require attention. We will discuss a practical maintenance approach for the proposed area.' },
      { question: 'Can you show examples of existing stone work?', answer: 'Our project gallery includes rock placement and a stone garden path. These are examples of the specific work shown, rather than a claim of large structural hardscape experience.' },
    ],
    image: '/media/optimized/stone-detail.webp', imageAlt: 'Decorative stone landscape area beside an existing garden', imageCaption: 'Decorative rock placement from our existing project portfolio.',
  },
  {
    slug: 'commercial-landscaping', number: '06', title: 'Commercial Landscaping', shortTitle: 'Commercial landscaping',
    summary: 'Landscape improvements, property cleanups, and recurring care scoped around the needs of your property.',
    introduction: 'A well-kept property starts with a clear scope.',
    detail: 'We welcome project conversations with property managers, apartment communities, HOAs, business owners, general contractors, and local organizations. From a landscape refresh to recurring care, the first step is understanding the property, site access, priorities, and the work you need covered.',
    offerings: [
      { title: 'Property improvements', description: 'Landscape renovations, planting, sod, decorative materials, and seasonal bed improvements.' },
      { title: 'Cleanup & vegetation management', description: 'Scope overgrowth removal, landscape debris, and property cleanup with site-specific access and disposal needs.' },
      { title: 'Recurring landscape care', description: 'Discuss the areas to maintain, tasks, visit frequency, and a service schedule suited to the property.' },
    ],
    considerations: 'Share property plans, site requirements, access restrictions, and desired timing. If vendor onboarding or specialist qualifications are required, we confirm those requirements before accepting a scope.',
    questions: [
      { question: 'Can you provide a proposal for a managed property?', answer: 'Yes. Send the property location, areas involved, requested services, and any bid requirements. We will review the scope and arrange an appropriate next step.' },
      { question: 'Do you offer recurring maintenance?', answer: 'Recurring care can be discussed alongside one-time improvements. Tasks, frequency, availability, and pricing need to be agreed for the individual property.' },
      { question: 'Can you work with a general contractor or an existing plan?', answer: 'Share the plan and the scope you need covered. We will review project requirements, coordination, and capacity before confirming a proposal.' },
    ],
    image: '/media/optimized/commercial.webp', imageAlt: 'Landscape planting beds at a commercial property', imageCaption: 'A frame from the existing Blade commercial installation video.',
  },
];

export const processSteps = [
  { title: 'Request an estimate', description: 'Tell us about your property, priorities, and the improvements you have in mind.' },
  { title: 'On-site consultation', description: 'Walk the property with us to discuss the scope, access, materials, and next steps.' },
  { title: 'Review your proposal', description: 'Review the work included, the estimate, and the project details before moving forward.' },
  { title: 'Project execution', description: 'Agree on scheduling, stay in communication, and finish with a walkthrough of the work.' },
];
