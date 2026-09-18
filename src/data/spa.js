// All spa content in one place, so pages stay presentational and the menu is
// edited in a single file when prices change.

export const spa = {
  name: "Sally's Spa",
  legalName: "Sally's Wellness and Beauty Center",
  location: 'Pacific Palms Resort',
  address: '1 Industry Hills Pkwy, City of Industry, CA 91744',
  phoneBooking: '626-581-9599',
  phoneHours: '626-993-5765',
  phoneAfterHours: '626-819-6721',
  hours: '10am – 6pm, Monday through Sunday',
  socials: [
    { label: 'Instagram', handle: '@sallyspainla', url: 'https://www.instagram.com/sallyspainla/' },
    { label: 'TikTok', handle: '@sallyspala', url: 'https://www.tiktok.com/@sallyspala' },
    {
      label: 'Facebook',
      handle: 'Sally Spa',
      url: 'https://www.facebook.com/profile.php?id=100087250728663',
    },
    { label: 'Yelp', handle: 'Reviews', url: 'https://www.yelp.com/biz/BlClxkGBrc_N0oT1YZoH5g' },
  ],
  policiesPdf:
    'https://img1.wsimg.com/blobby/go/f052449f-6de8-4331-9232-f6241f57e3b2/downloads/spa%20policies%20and%20guidelines.pdf?ver=1788630688106',
}

// Treatment menu — every service on one page, grouped.
export const menu = [
  {
    id: 'massage',
    name: 'Massage',
    intro:
      'Every massage is adjusted to your pressure and the areas you want worked. Tell your therapist before you begin.',
    treatments: [
      {
        name: 'Swedish Massage',
        blurb:
          'Full-body work at a gentle to firm pressure, using long smooth strokes to release tension and move circulation.',
        options: [
          { duration: '60 minutes', price: '$125', was: '$249' },
          { duration: '90 minutes', price: '$199', was: '$329' },
        ],
      },
      {
        name: 'doTERRA Aromatherapy Massage',
        tag: 'Most popular',
        blurb:
          'Therapists blend doTERRA essential oils to suit you on the day, then work them in across the full body.',
        options: [
          { duration: '60 minutes', price: '$149', was: '$279' },
          { duration: '90 minutes', price: '$225', was: '$379' },
        ],
      },
      {
        name: "Sally's Signature Massage",
        blurb:
          'Your therapist reads what your body needs and combines techniques and enhancements to match it. No two are quite the same.',
        options: [
          { duration: '60 minutes', price: '$149', was: '$259' },
          { duration: '90 minutes', price: '$225', was: '$359' },
        ],
      },
      {
        name: 'Deep Tissue Massage',
        tag: 'Most relief',
        blurb:
          'Firm pressure and slow strokes into knots and long-held tightness. Suited to athletes and anyone carrying chronic muscle pain.',
        options: [
          { duration: '60 minutes', price: '$179', was: '$299' },
          { duration: '90 minutes', price: '$268', was: '$399' },
        ],
      },
      {
        name: 'Couples Massage',
        tag: 'Popular choice',
        blurb:
          'Two Swedish massages side by side in a quiet room — for couples, friends or family on the same clock.',
        options: [
          { duration: '60 minutes', price: '$329', was: '$588' },
          { duration: '90 minutes', price: '$469', was: '$699' },
        ],
      },
      {
        name: 'Custom Thai Massage',
        blurb:
          'Traditional Thai technique that opens the outer muscle layers first, then works deeper to restore circulation and movement.',
        options: [{ duration: 'Ask when booking', price: 'Call for pricing' }],
      },
      {
        name: 'AromaTouch Technique Massage',
        blurb:
          "Uses doTERRA's proprietary massage blend through the AromaTouch sequence, layering the oils' benefits into the work.",
        options: [{ duration: 'Ask when booking', price: 'Call for pricing' }],
      },
      {
        name: 'Neck & Shoulder Massage',
        blurb:
          'Focused work on the neck, shoulders and upper back. Good as a short session or added to another treatment.',
        options: [{ duration: 'Ask when booking', price: 'Call for pricing' }],
      },
    ],
  },
  {
    id: 'facials',
    name: 'Facials',
    intro:
      'Each facial opens with a skin analysis, so products and technique are chosen for the skin you walk in with.',
    treatments: [
      {
        name: 'Valmont Switzerland Anti-Aging Facial',
        tag: 'Best seller',
        blurb:
          "Valmont's Swiss anti-aging protocol, applied with their signature technique to lift, firm and brighten.",
        options: [
          { duration: '60 minutes', price: '$199', was: '$379' },
          { duration: '90 minutes', price: '$279', was: '$479' },
        ],
      },
      {
        name: 'Golden Hydrating Facial',
        blurb:
          'Finished with a magnolia orchid collagen gold crystal mask to hydrate deeply, firm and restore elasticity.',
        options: [{ duration: '60 minutes', price: '$188', was: '$299' }],
      },
      {
        name: 'LPG Facial Lift',
        tag: 'Technology',
        blurb:
          "Non-invasive lifting using LPG's endermologie® technology — improves elasticity and softens fine lines with no downtime.",
        options: [
          { duration: '30 minutes', price: '$199', was: '$450' },
          { duration: '60 minutes', price: '$279', was: '$650' },
        ],
      },
      {
        name: 'Red Carpet Glow',
        blurb:
          'A Valmont facial for hydration and renewal, finished with an LPG treatment to firm and contour. Our most complete facial.',
        options: [{ duration: '90 minutes', price: '$388', was: '$850' }],
      },
      {
        name: 'Deep Cleansing Facial',
        blurb:
          'Cleansing, steam, extractions, facial massage and masque — for congestion, breakouts, fine lines and dehydration.',
        options: [{ duration: 'Ask when booking', price: 'Call for pricing' }],
      },
      {
        name: 'Deep Moisture Hydrating Facial',
        blurb:
          'Drives hydration back into the skin and seals it in. Best for dryness and irritation, suitable for any skin type.',
        options: [{ duration: 'Ask when booking', price: 'Call for pricing' }],
      },
      {
        name: 'Acne Facial Treatment',
        blurb:
          'Targeted clearing for congestion and active breakouts, adjusted to how reactive your skin is that day.',
        options: [{ duration: 'Ask when booking', price: 'Call for pricing' }],
      },
    ],
  },
  {
    id: 'scalp',
    name: 'Scalp & head therapy',
    intro: 'Worked seated or lying down, with oils chosen for your scalp and hair.',
    treatments: [
      {
        name: 'Ginger-Infused Massage',
        blurb:
          'Fresh ginger and warming herbal oils to move circulation and ease muscle tension. Suits chronic fatigue, stress, and cold hands and feet.',
        options: [{ duration: '60 minutes', price: '$168', was: '$299' }],
      },
      {
        name: 'Ginger Scalp Therapy',
        blurb:
          'The same ginger treatment worked through the scalp to stimulate follicles, release tension and lift blood flow.',
        options: [{ duration: '60 minutes', price: '$168', was: '$299' }],
      },
      {
        name: 'Aromatherapy Scalp & Hair Therapy',
        blurb:
          'Scalp massage with nourishing essential oils — moves circulation, supports hair health and unwinds held tension.',
        options: [
          { duration: '60 minutes', price: '$149', was: '$249' },
          { duration: '90 minutes', price: '$199', was: '$299' },
        ],
      },
    ],
  },
  {
    id: 'contouring',
    name: 'Body contouring',
    intro:
      'FDA-cleared mechanical massage that works the skin and connective tissue. Choose your focus when you book.',
    treatments: [
      {
        name: 'LPG Body Contouring',
        tag: 'Technology',
        blurb:
          'Non-invasive body shaping, lymphatic and detox care, anti-cellulite work, or postpartum slimming — one focus per session.',
        options: [
          { duration: '30 minutes', price: '$199', was: '$450' },
          { duration: '60 minutes', price: '$299', was: '$650' },
        ],
      },
    ],
  },
  {
    id: 'spa-day',
    name: 'Spa day',
    intro: 'Longer visits, with access to the facilities built in.',
    treatments: [
      {
        name: 'Luxury Spa Day Experience',
        blurb:
          'Two hours of treatment, plus a complimentary two-hour Spa Day Pass. Choose one of the two combinations.',
        options: [
          {
            duration: '120 min — Deep Hydrating Facial + Swedish Massage',
            price: '$329',
            was: '$498',
          },
          { duration: '120 min — Swedish Massage + Scalp Therapy', price: '$329', was: '$498' },
        ],
      },
      {
        name: 'Spa Day Pass',
        blurb:
          'Two hours in the facilities: robes and slippers, a personal locker, the lounge, jacuzzi, and tea and coffee throughout.',
        options: [{ duration: '2 hours', price: '$69', was: '$98' }],
      },
    ],
  },
  {
    id: 'group',
    name: 'Group & wellness sessions',
    intro: 'Booked ahead for groups — call to arrange a date and numbers.',
    treatments: [
      {
        name: 'Yoga & Sound Healing',
        blurb:
          'Guided yoga paired with a sound healing session, run for private groups on request.',
        options: [{ duration: 'By arrangement', price: 'Call to book' }],
      },
      {
        name: 'Group Wellness',
        blurb:
          'Spa days for parties, teams and celebrations, planned around your group size and the time you have.',
        options: [{ duration: 'By arrangement', price: 'Call to book' }],
      },
    ],
  },
]

export const addOns = [
  { name: 'Herbal Hot Stone', price: '$38' },
  { name: 'Essential Oil', price: '$38' },
]

export const menuNote =
  'Menu prices are already discounted by up to 50% off the regular service price. Gift cards cannot be combined with this promotion, and prices are subject to change.'

// Shown on the home page as a short preview of the full menu.
export const featured = [
  {
    name: 'doTERRA Aromatherapy Massage',
    meta: '60 min $149 · 90 min $225',
    blurb: 'Essential oil blends mixed for you on the day, worked across the full body.',
  },
  {
    name: 'Valmont Switzerland Anti-Aging Facial',
    meta: '60 min $199 · 90 min $279',
    blurb: 'Swiss anti-aging skincare applied with Valmont’s signature lifting technique.',
  },
  {
    name: 'LPG Facial Lift',
    meta: '30 min $199 · 60 min $279',
    blurb: 'Endermologie® lifting and firming, non-invasive and with no downtime.',
  },
]
