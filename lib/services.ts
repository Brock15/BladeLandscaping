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
  imagePosition?: string;
};

export const services: Service[] = [
  {
    slug: 'sod-installation', number: '08', title: 'Sod Installation', shortTitle: 'Sod installation',
    summary: 'New sod and lawn replacement for residential and commercial properties in Bryan and College Station.',
    introduction: 'Give a new lawn the preparation it needs.',
    detail: 'A sod project starts with the lawn area, rather than the rolls of grass. We review existing vegetation, the ground surface, sun exposure, equipment access, and how you will water the new lawn. Your estimate defines removal, soil preparation, sod placement, and the care responsibilities included in the work.',
    offerings: [
      { title: 'New lawn areas', description: 'Bring lawn into a new or unfinished yard with sod selected for the site and agreed project scope.' },
      { title: 'Lawn replacement', description: 'Review worn or bare areas, the existing grass, and preparation needed before replacing an agreed section of lawn.' },
      { title: 'Preparation & finishing', description: 'Plan removal, surface preparation, placement, and transitions beside paths, beds, and existing lawn areas.' },
    ],
    considerations: 'Watering access and establishment care matter from the first day. We confirm your responsibilities and any included follow-up before installation.',
    questions: [
      { question: 'Do you install sod in College Station and Bryan?', answer: 'Yes. We serve properties in both cities. Send photos, an approximate lawn area, and your property location so we can review the work and arrange the next step.' },
      { question: 'How much does sod installation cost?', answer: 'Pricing depends on the area, removal, ground preparation, sod selection, and access. Request a property-specific estimate; our $60 lawn mowing minimum is separate from sod installation pricing.' },
      { question: 'Can sod fix recurring bare patches?', answer: 'We first discuss shade, water, wear, and the existing ground. New sod needs conditions that support it, so replacing grass alone may not address the reason an area is struggling.' },
      { question: 'Who waters the new sod?', answer: 'We agree on watering responsibilities and establishment guidance before work begins. Tell us about your water access and any irrigation limitations during the estimate.' },
    ],
    image: '/media/optimized/sod.webp', imageAlt: 'Fresh sod installed across a residential lawn by Blade Landscaping', imageCaption: 'A lawn installation from the Blade project gallery.',
  },
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
    image: '/media/ready/front-yard-renovation.webp', imageAlt: 'Decorative rock beds surrounding an established tree in a residential front yard', imageCaption: 'Residential landscape improvements from the supplied Blade project footage.',
  },
  {
    slug: 'hardscaping-outdoor-living', number: '03', title: 'Patios, Hardscaping & Outdoor Living', shortTitle: 'Patios & hardscaping',
    image: '/media/ready/flagstone-patio.webp', imageAlt: 'Flagstone patio beside a covered porch with a circular fire-pit ring', imageCaption: 'Natural-stone patio work from the supplied Blade project photographs.',
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
    image: '/media/ready/soil-preparation.webp', imageAlt: 'Compact loader preparing soil in a residential yard', imageCaption: 'Landscape ground preparation; this photograph does not document an engineered drainage system.',
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
    image: '/media/ready/front-yard-renovation.webp', imageAlt: 'Decorative rock beds surrounding an established tree in a residential front yard', imageCaption: 'Residential rock beds from the Blade project gallery.', imagePosition: '50% 50%',
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
  {
    slug: 'lawn-maintenance', number: '07', title: 'Lawn Maintenance', shortTitle: 'Lawn maintenance',
    summary: 'Mowing, trimming, edging, and cleanup from $60 per visit, with monthly lawn and property care plans.',
    introduction: 'A cleaner cut. A tidier yard.',
    detail: 'Regular care keeps your lawn looking its best between visits. We discuss the lawn size, grass condition, areas to trim or edge, and access before quoting. Whether you need an ongoing schedule or a one-time visit, we confirm the work and timing with you first.',
    offerings: [
      { title: 'Lawn mowing', description: 'Mowing at a height suited to your grass and current growing conditions, with the lawn areas defined in your service scope.' },
      { title: 'Trimming & edging', description: 'Tidy grass around fences, trees, planting beds, walks, and driveways within the agreed service area.' },
      { title: 'Finishing cleanup', description: 'Clear loose grass from nearby walks, patios, and driveways for a clean finish after mowing.' },
    ],
    considerations: 'Share your preferred schedule, current grass height, gate access, pets, and any areas that need special care. These details help us prepare an accurate estimate and plan the visit.',
    questions: [
      { question: 'Can I arrange regular lawn maintenance?', answer: 'Yes. Tell us whether you prefer weekly, biweekly, or another schedule. We will discuss grass growth, your property, and route availability before confirming recurring visits.' },
      { question: 'Can I request a one-time mow?', answer: 'Send your property location, the current lawn condition, and when you would like the work done. We will confirm availability and any additional work an overgrown lawn may need.' },
      { question: 'How is lawn maintenance priced?', answer: 'The estimate depends on lawn size, grass condition, access, the tasks included, and visit frequency. We review those details with you before agreeing on a price.' },
    ],
    image: '/media/ready/lawn-maintenance.webp', imageAlt: 'Blade team member operating a stand-on mower on a residential lawn', imageCaption: 'Mowing and routine lawn care with Blade Landscaping.', imagePosition: '50% 40%',
  },
].sort((a, b) => Number(a.number) - Number(b.number));

export const processSteps = [
  { title: 'Request an estimate', description: 'Tell us about your property, priorities, and the improvements you have in mind.' },
  { title: 'On-site consultation', description: 'Walk the property with us to discuss the scope, access, materials, and next steps.' },
  { title: 'Review your proposal', description: 'Review the work included, the estimate, and the project details before moving forward.' },
  { title: 'Project execution', description: 'Agree on scheduling, stay in communication, and finish with a walkthrough of the work.' },
];
