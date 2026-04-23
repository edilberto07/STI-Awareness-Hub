export type Category = 'HIV' | 'Gonorrhea' | 'Syphilis' | 'Prevention' | 'Resources';

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  authorRole: string;
  date: string;
  readTime: number;
  coverImage: string;
  featured?: boolean;
  content: string;
  videoId?: string;
  videoTitle?: string;
  videoEmbed?: string;
  relatedIds: string[];
  healthTips: string[];
}

export const CATEGORY_COLORS: Record<Category, { bg: string; text: string; border: string; dot: string }> = {
  HIV: {
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    border: 'border-rose-200',
    dot: 'bg-rose-400',
  },
  Gonorrhea: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    dot: 'bg-amber-400',
  },
  Syphilis: {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200',
    dot: 'bg-purple-400',
  },
  Prevention: {
    bg: 'bg-teal-50',
    text: 'text-teal-700',
    border: 'border-teal-200',
    dot: 'bg-teal-500',
  },
  Resources: {
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    border: 'border-sky-200',
    dot: 'bg-sky-500',
  },
};

export const TOPIC_CARDS = [
  {
    id: 'hiv',
    category: 'HIV' as Category,
    title: 'HIV',
    description: 'Understanding transmission, treatment, and living well with HIV',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
    color: '#E8D5D5',
    textColor: '#7C2D2D',
  },
  {
    id: 'gonorrhea',
    category: 'Gonorrhea' as Category,
    title: 'Gonorrhea',
    description: 'Symptoms, testing options, and modern treatment approaches',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    color: '#F5E6C8',
    textColor: '#78450E',
  },
  {
    id: 'syphilis',
    category: 'Syphilis' as Category,
    title: 'Syphilis',
    description: 'Stages, complications, and what you need to know about testing',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80',
    color: '#E8E0F5',
    textColor: '#4C2A85',
  },
  {
    id: 'prevention',
    category: 'Prevention' as Category,
    title: 'Prevention',
    description: 'Practical strategies, PrEP, vaccines, and safer sex practices',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    color: '#D5EDE8',
    textColor: '#0D4F3C',
  },
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'understanding-hiv-in-2024',
    title: 'Understanding HIV in 2024: Treatment, Prevention & Living Well',
    excerpt: 'Modern antiretroviral therapy has transformed HIV from a life-threatening diagnosis into a manageable chronic condition. Here\'s what you need to know about treatment, undetectable viral loads, and thriving with HIV today.',
    category: 'HIV',
    author: 'Dr. Amara Osei',
    authorRole: 'Infectious Disease Specialist',
    date: 'June 12, 2025',
    readTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80',
    featured: true,
    content: `
<h2>What Is HIV?</h2>
<p>Human Immunodeficiency Virus (HIV) is a virus that attacks the body's immune system, specifically the CD4 cells (T cells), which help the immune system fight off infections. Untreated, HIV reduces the number of CD4 cells in the body, making the person more likely to get other infections or infection-related cancers.</p>

<blockquote>"U=U — Undetectable equals Untransmittable. People living with HIV who achieve and maintain an undetectable viral load have effectively no risk of transmitting HIV to their sexual partners."</blockquote>

<h2>Modern Treatment: A Game-Changer</h2>
<p>Today's antiretroviral therapy (ART) is remarkably effective. Most people with HIV can achieve an undetectable viral load within 3 to 6 months of starting treatment. When taken as prescribed, ART can suppress the virus to the point where it cannot be detected in a standard blood test.</p>
<p>Long-acting injectable treatments are now available that only require an injection every one or two months, removing the need for daily pills for many people. This flexibility has dramatically improved quality of life and medication adherence.</p>

<h2>Prevention Strategies</h2>
<p>HIV prevention has never been more powerful. Here are the main strategies:</p>
<ul>
<li><strong>PrEP (Pre-Exposure Prophylaxis):</strong> A daily pill (or bi-monthly injection) for HIV-negative individuals that reduces risk of HIV from sex by up to 99% when taken consistently.</li>
<li><strong>PEP (Post-Exposure Prophylaxis):</strong> Emergency medication taken within 72 hours of potential HIV exposure — must be started as soon as possible.</li>
<li><strong>Condoms:</strong> Correctly used condoms reduce HIV transmission risk by approximately 85%.</li>
<li><strong>Regular testing:</strong> Knowing your status and your partner's status allows for informed decisions.</li>
</ul>

<h2>Living Well with HIV</h2>
<p>People living with HIV who maintain an undetectable viral load can expect to live a normal life expectancy. Regular medical check-ups, adherence to medication, a healthy lifestyle, and a strong support network are key components of thriving with HIV.</p>
<p>Mental health is equally important. Many people living with HIV experience stigma and anxiety — connecting with community organizations and counseling services can make a significant difference in overall wellbeing.</p>

<h2>Getting Tested</h2>
<p>Regular HIV testing is recommended for sexually active individuals. Testing is fast, confidential, and widely available. The CDC recommends HIV testing at least once a year for people who have risk factors, and more frequently (every 3–6 months) for those with higher-risk behaviors.</p>
    `,
    videoId: 'JY1qi3bf-Os',
    videoTitle: 'HIV Basics: Testing, Prevention, and Living with HIV',
    relatedIds: ['2', '4', '5'],
    healthTips: [
      'Get tested for HIV regularly — at least once a year',
      'Ask your doctor about PrEP if you are at higher risk',
      'Use condoms consistently and correctly',
      'If on ART, take your medication every day as prescribed',
      'Maintain an undetectable viral load to protect yourself and partners',
    ],
  },
  {
    id: '2',
    slug: 'gonorrhea-symptoms-testing-treatment',
    title: 'Gonorrhea: Recognizing Symptoms, Getting Tested, and Modern Treatment',
    excerpt: 'Gonorrhea rates are rising, but the good news is it\'s highly treatable when caught early. Learn to recognize symptoms, understand how testing works, and what to do if you test positive.',
    category: 'Gonorrhea',
    author: 'Dr. Maya Patel',
    authorRole: 'Sexual Health Physician',
    date: 'June 8, 2025',
    readTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
    relatedIds: ['1', '4', '6'],
    healthTips: [
      'Get tested every 3–6 months if sexually active with multiple partners',
      'Gonorrhea can be asymptomatic — don\'t wait for symptoms to get tested',
      'Use condoms to significantly reduce transmission risk',
      'Complete the full course of antibiotics if treated',
      'Notify recent partners if you test positive so they can get tested too',
    ],
    content: `
<h2>What Is Gonorrhea?</h2>
<p>Gonorrhea is a bacterial sexually transmitted infection caused by <em>Neisseria gonorrhoeae</em>. It's one of the most common STIs worldwide and can infect the genitals, rectum, and throat. In the United States, over 600,000 new gonorrhea infections occur each year.</p>

<h2>Symptoms to Watch For</h2>
<p>One of the most important things to know about gonorrhea is that <strong>many infections produce no symptoms at all</strong> — particularly in people with vaginas. When symptoms do occur, they may include:</p>
<ul>
<li>A burning sensation when urinating</li>
<li>Increased discharge from the penis, vagina, or rectum</li>
<li>Painful or swollen testicles</li>
<li>Pelvic pain or increased vaginal bleeding (in people with vaginas)</li>
<li>Sore throat (for throat infections)</li>
</ul>

<blockquote>"Because gonorrhea often causes no symptoms, regular testing is the only reliable way to know your status."</blockquote>

<h2>Testing Options</h2>
<p>Gonorrhea testing is straightforward and widely available. Options include:</p>
<ul>
<li><strong>Urine test:</strong> The most common and easiest method for genital infections</li>
<li><strong>Swab test:</strong> Swabs from the throat, rectum, or cervix/urethra, depending on sexual practices</li>
<li><strong>At-home test kits:</strong> Now available online or at pharmacies</li>
</ul>

<h2>Treatment</h2>
<p>The good news: gonorrhea is curable with antibiotics. The current recommended treatment is a single injection of ceftriaxone. Due to rising antibiotic resistance, it's critical to complete treatment as directed and not take leftover antibiotics from other conditions.</p>
<p>Be aware that antibiotic-resistant gonorrhea strains are a growing concern globally. This is why proper treatment and following up with your healthcare provider is essential.</p>
    `,
    videoId: '5bpoUHZx4V4',
    videoTitle: 'Gonorrhea: Symptoms, Testing & Treatment',
  },
  {
    id: '3',
    slug: 'syphilis-the-great-imitator',
    title: 'Syphilis: The Great Imitator and Why Rates Are Surging',
    excerpt: 'Syphilis has earned its nickname "the great imitator" because its symptoms mimic so many other conditions. With cases at a 70-year high in the US, understanding the stages and getting regular testing has never been more critical.',
    category: 'Syphilis',
    author: 'Dr. Jordan Rivera',
    authorRole: 'Public Health Researcher',
    date: 'June 3, 2025',
    readTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=80',
    relatedIds: ['2', '4', '6'],
    healthTips: [
      'A simple blood test can detect syphilis — get tested annually if sexually active',
      'Early-stage syphilis is easily cured with a single penicillin injection',
      'Syphilis sores may be painless and inside the body — easy to miss',
      'Syphilis during pregnancy can be passed to the baby — prenatal testing is essential',
      'Using condoms reduces (but doesn\'t eliminate) syphilis risk',
    ],
    content: `
<h2>Why "The Great Imitator"?</h2>
<p>Syphilis is caused by the bacterium <em>Treponema pallidum</em>. It earned its notorious nickname because its symptoms can mimic dozens of other diseases — from skin rashes that look like psoriasis to neurological symptoms resembling multiple sclerosis. This makes it particularly important to test specifically for syphilis rather than relying on symptom identification alone.</p>

<h2>The Four Stages of Syphilis</h2>
<p>Syphilis progresses through distinct stages, each with different symptoms and risks:</p>
<ul>
<li><strong>Primary:</strong> A single, painless sore (chancre) appears at the infection site. It heals on its own, giving a false sense of resolution.</li>
<li><strong>Secondary:</strong> A rash (often on the palms and soles), flu-like symptoms, and mucous membrane sores appear weeks later.</li>
<li><strong>Latent:</strong> No visible symptoms, but the infection is still present in the body. This stage can last years.</li>
<li><strong>Tertiary (Late):</strong> Severe complications affecting the heart, brain, and other organs. This stage is now rare due to better testing and treatment.</li>
</ul>

<blockquote>"In 2023, reported syphilis cases in the US hit their highest level since 1950. Testing and treatment remain our most powerful tools."</blockquote>

<h2>Testing for Syphilis</h2>
<p>Syphilis testing typically involves one or two blood tests. The two-step testing process (a screening test followed by a confirmatory test) is the standard approach. Testing is available at sexual health clinics, primary care providers, and via at-home test kits.</p>

<h2>Treatment</h2>
<p>Early-stage syphilis is curable with a single intramuscular injection of benzathine penicillin G. Later stages may require multiple doses over several weeks. For those with penicillin allergies, alternative antibiotics are available.</p>
<p>Partner notification is critical — all sexual partners from the past 90 days (for primary syphilis) or one year (for secondary syphilis) should be notified and tested.</p>
    `,
    videoId: 'foUUeARe2f8',
    videoTitle: 'Syphilis: Stages, Testing & Treatment',
  },
  {
    id: '4',
    slug: 'complete-guide-to-prep',
    title: 'PrEP: A Complete Guide to HIV Pre-Exposure Prophylaxis',
    excerpt: 'PrEP is one of the most powerful HIV prevention tools ever developed — up to 99% effective when taken consistently. Here\'s everything you need to know about who should take it, how it works, and how to access it.',
    category: 'Prevention',
    author: 'Nurse Practitioner Sam Chen',
    authorRole: 'HIV Prevention Specialist',
    date: 'May 29, 2025',
    readTime: 9,
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
    relatedIds: ['1', '5', '6'],
    healthTips: [
      'PrEP is over 99% effective at preventing HIV when taken daily',
      'A prescription and regular HIV tests (every 3 months) are required',
      'PrEP does NOT protect against other STIs — use condoms too',
      'Injectable PrEP (cabotegravir) is available if daily pills are difficult',
      'Many insurance plans and assistance programs cover PrEP at no cost',
    ],
    content: `
<h2>What Is PrEP?</h2>
<p>PrEP (Pre-Exposure Prophylaxis) is a medication taken by HIV-negative people to prevent HIV infection. When taken consistently, PrEP reduces the risk of getting HIV from sex by about 99% and from injection drug use by more than 74%. It's one of the most effective prevention tools in history.</p>

<h2>Who Should Consider PrEP?</h2>
<p>PrEP is recommended for HIV-negative adults and adolescents who:</p>
<ul>
<li>Have a sexual partner who is HIV-positive</li>
<li>Don't consistently use condoms and have had an STI in the past 6 months</li>
<li>Share injection drug equipment</li>
<li>Have multiple sexual partners and want an additional layer of protection</li>
</ul>

<blockquote>"PrEP puts the power of HIV prevention directly in your hands. It's not just for any one group — it's for anyone who wants to take control of their sexual health."</blockquote>

<h2>Types of PrEP</h2>
<p>There are currently two main forms of PrEP in the US:</p>
<ul>
<li><strong>Emtricitabine/tenofovir alafenamide (Descovy):</strong> A daily pill approved for cisgender men and transgender women who have sex with men.</li>
<li><strong>Emtricitabine/tenofovir disoproxil fumarate (Truvada/generic):</strong> A daily pill approved for all adults at risk for HIV, including from heterosexual sex or injection drug use.</li>
<li><strong>Cabotegravir (Apretude):</strong> A long-acting injectable PrEP given every two months after two initial monthly injections. Approved for all adults at risk.</li>
</ul>

<h2>Getting Started</h2>
<p>To start PrEP, you'll need a prescription from a healthcare provider. They'll test you for HIV first (you must be HIV-negative to start PrEP), as well as kidney function and other STIs. You'll need to return every 3 months for HIV testing and prescription renewal while on PrEP.</p>
    `,
    videoId: 'Jay1yWSiXE8',
    videoTitle: 'PrEP: HIV Prevention Guide',
  },
  {
    id: '5',
    slug: 'condom-use-guide',
    title: 'The Science of Condoms: How to Maximize Protection',
    excerpt: 'Condoms remain one of the most accessible and effective tools for preventing both STIs and unintended pregnancy — but only when used correctly. We break down the science, the common mistakes, and how to make the most of this essential tool.',
    category: 'Prevention',
    author: 'Dr. Priya Nakamura',
    authorRole: 'Sexual Health Educator',
    date: 'May 22, 2025',
    readTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
    relatedIds: ['4', '1', '3'],
    healthTips: [
      'Check the expiration date before use — expired condoms are less effective',
      'Use a new condom for every act of sex, from start to finish',
      'Store condoms away from heat and direct sunlight',
      'Use water-based or silicone-based lube to reduce breakage',
      'Leave space at the tip to prevent breakage from pressure',
    ],
    content: `
<h2>How Effective Are Condoms?</h2>
<p>When used correctly and consistently, external (male) condoms are about 98% effective at preventing HIV and significantly reduce the risk of other STIs. In real-world use (accounting for occasional incorrect use), effectiveness drops to around 85%. The gap between "perfect use" and "typical use" is almost entirely due to common mistakes that are easy to correct.</p>

<h2>Common Mistakes and How to Avoid Them</h2>
<ul>
<li><strong>Not leaving space at the tip:</strong> Squeeze the tip before rolling on to leave a small reservoir for semen.</li>
<li><strong>Using oil-based lubricants:</strong> Oils degrade latex. Always use water-based or silicone-based lubricant.</li>
<li><strong>Not checking the expiration date:</strong> Latex degrades over time — always check before use.</li>
<li><strong>Not using a condom from the start:</strong> Pre-ejaculatory fluid can transmit STIs. Put on the condom before any genital contact.</li>
<li><strong>Storing in a wallet:</strong> Heat and friction from wallets damage condoms. Store them in a cool, dry place.</li>
</ul>

<h2>Internal vs. External Condoms</h2>
<p>Internal condoms (often called "female condoms") are an excellent alternative. They can be inserted up to 8 hours before sex, giving more control to the receptive partner. They are made from nitrile and work for vaginal and anal sex. They are equally effective when used correctly.</p>

<h2>Condoms and STI Prevention</h2>
<p>Condoms are highly effective against STIs spread through fluids like HIV, gonorrhea, and chlamydia. They are less effective against STIs spread through skin-to-skin contact (like herpes and HPV), but still provide significant protection by covering the areas most likely to shed the virus.</p>
    `,
    videoId: 'h6iYBRY_mis',
    videoTitle: 'Condom Use Guide: Effectiveness & Best Practices',
  },
  {
    id: '6',
    slug: 'sti-testing-guide',
    title: 'The Complete STI Testing Guide: What, When, and Where',
    excerpt: 'Many STIs have no symptoms, making regular testing the only reliable way to know your status. This comprehensive guide covers what tests you need based on your sexual practices, how often to test, and where to access free or low-cost testing.',
    category: 'Resources',
    author: 'HealthWise Editorial Team',
    authorRole: 'Health Education',
    date: 'May 15, 2025',
    readTime: 10,
    coverImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80',
    relatedIds: ['1', '2', '3'],
    healthTips: [
      'Many STIs have no symptoms — testing is the only way to know',
      'The CDC recommends at least annual HIV testing for sexually active adults',
      'Community health centers and Planned Parenthood offer free/low-cost testing',
      'At-home STI test kits are accurate, private, and widely available',
      'A comprehensive panel tests for HIV, gonorrhea, chlamydia, syphilis, and herpes',
    ],
    content: `
<h2>Why Regular Testing Matters</h2>
<p>The vast majority of STIs — including HIV, chlamydia, gonorrhea, and syphilis — can be completely asymptomatic. Many people live with an STI for months or years without knowing, during which time they may unknowingly transmit it to partners. Regular testing is the single most important thing sexually active people can do for their health and the health of their partners.</p>

<h2>Testing Recommendations by Sexual Practice</h2>
<p>The right tests for you depend on the types of sex you have and the number of partners you have:</p>
<ul>
<li><strong>Annual testing for all sexually active people:</strong> HIV, syphilis</li>
<li><strong>Every 3–6 months if multiple partners:</strong> Add gonorrhea and chlamydia screening</li>
<li><strong>Site-specific testing:</strong> If you have oral or anal sex, swabs from the throat and rectum are needed — urine tests don't detect infections at these sites</li>
<li><strong>Hepatitis B and C:</strong> At least once, more if at ongoing risk</li>
<li><strong>HPV:</strong> Cervical screening (Pap smear) every 3–5 years for people with a cervix</li>
</ul>

<blockquote>"Getting tested is an act of care — for yourself and for everyone you're intimate with. It's one of the most responsible and compassionate things you can do."</blockquote>

<h2>Where to Get Tested</h2>
<ul>
<li><strong>Sexual health clinics:</strong> Specialized, often free or sliding scale</li>
<li><strong>Community health centers (FQHCs):</strong> Free or very low-cost, no insurance required</li>
<li><strong>Planned Parenthood:</strong> Comprehensive STI testing, often low-cost</li>
<li><strong>Primary care provider:</strong> Can order STI tests during a regular visit</li>
<li><strong>At-home test kits:</strong> Options like Everlywell, GetTested.com — private and convenient</li>
<li><strong>gettested.cdc.gov:</strong> Find free testing near you</li>
</ul>

<h2>Understanding Your Results</h2>
<p>A negative result means no infection was detected — but remember there is a "window period" for some STIs (especially HIV) where very recent infections may not yet be detectable. A positive result means you should follow up with a healthcare provider promptly for treatment. Most STIs are very treatable, and many are curable.</p>
    `,
    videoId: 'CJv300pOuNw',
    videoTitle: 'Complete STI Testing Guide: What You Need to Know',
  },
];

export const featuredArticle = articles.find(a => a.featured) || articles[0];
