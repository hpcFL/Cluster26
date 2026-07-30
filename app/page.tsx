import Image from "next/image";
import {
  Bot,
  BrainCircuit,
  Leaf,
  LockKeyhole,
  Microscope,
  Network,
  RadioTower,
  Shield,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicAsset = (path: string) => `${basePath}${path}`;

const scopeIconComponents = {
  foundation: BrainCircuit,
  scalability: Network,
  sustainable: Leaf,
  communication: RadioTower,
  scientific: Microscope,
  agentic: Bot,
} as const;

type ScopeIconName = keyof typeof scopeIconComponents | "privacy";

const scopeTopics: Array<{
  icon: ScopeIconName;
  category: string;
  title: string;
  description: string;
}> = [
  {
    icon: "foundation",
    category: "Models",
    title: "Collaborative Foundation models",
    description:
      "Federated pretraining and fine-tuning of language, vision, and multimodal models across distributed supercomputing facilities.",
  },
  {
    icon: "scalability",
    category: "Scale",
    title: "Scalability & aggregation",
    description:
      "Hierarchical federated learning, hybrid parallelism, and workload-aware optimization for multi-cluster systems.",
  },
  {
    icon: "communication",
    category: "Systems",
    title: "Compute + Communication efficiency",
    description:
      "Methods that bridge fast intra-facility interconnects and slower, higher-latency links between facilities.",
  },
  {
    icon: "privacy",
    category: "Trust",
    title: "Security & privacy",
    description:
      "Adversarial robustness, backdoor vulnerabilities, data sovereignty, and differential privacy trade-offs.",
  },
  {
    icon: "sustainable",
    category: "Efficiency",
    title: "Sustainable AI",
    description:
      "Energy-aware resource allocation that maintains accuracy for federated AI at HPC scale.",
  },
  {
    icon: "scientific",
    category: "Science",
    title: "Scientific computing",
    description:
      "Collaborative model training for climate science, genomics, physics simulations, and experimental facilities.",
  },
  {
    icon: "agentic",
    category: "Agents",
    title: "Federated Agentic AI",
    description:
      "Federated learning within agentic workflows and intelligent agents that orchestrate federated pipelines.",
  },
];

function ScopeTopicIcon({ icon }: { icon: ScopeIconName }) {
  if (icon === "privacy") {
    return (
      <span
        className="scope-bento-icon scope-bento-icon-privacy"
        aria-hidden="true"
      >
        <Shield className="scope-privacy-shield" strokeWidth={1.8} />
        <LockKeyhole className="scope-privacy-lock" strokeWidth={2.2} />
      </span>
    );
  }

  const Icon = scopeIconComponents[icon];

  return (
    <span
      className={`scope-bento-icon scope-bento-icon-${icon}`}
      aria-hidden="true"
    >
      <Icon strokeWidth={1.8} />
    </span>
  );
}

const schedule = [
  { time: "08:25 - 08:30", activity: "Opening remarks", type: "Welcome" },
  { time: "08:30 - 09:15", activity: "Keynote speaker", type: "Keynote" },
  { time: "09:15 - 09:35", activity: "Invited talk 1", type: "Invited talk" },
  { time: "09:35 - 09:50", activity: "Morning break", type: "Break" },
  { time: "09:50 - 10:10", activity: "Invited talk 2", type: "Invited talk" },
  { time: "10:10 - 10:30", activity: "Ziyue Xu", type: "Invited talk" },
  { time: "10:30 - 10:50", activity: "Ang Li", type: "Invited talk" },
  { time: "10:50 - 11:10", activity: "Yijiang Li", type: "Invited talk" },
  { time: "11:10 - 11:55", activity: "Panel discussion", type: "Panel" },
  { time: "11:55 - 12:00", activity: "Concluding remarks", type: "Closing" },
];

const keynoteSpeaker = {
  name: "Keynote speaker",
  initials: "TBA",
  note: "To be announced",
  bio: "Speaker biography and profile details will be added when the keynote is announced.",
};

const invitedSpeakers = [
  {
    name: "Ziyue Xu",
    initials: "ZX",
    role: "Senior Scientist",
    organization: "NVIDIA, USA",
    bio: "Ziyue Xu develops machine learning and computer vision methods for biomedical and clinical imaging, with research spanning medical AI, shape modeling, and graph-based analysis.",
    profile: "https://research.nvidia.com/person/ziyue-xu",
    photo: publicAsset("/committee/ziyue-xu.jpg"),
  },
  {
    name: "Ang Li",
    initials: "AL",
    role: "Assistant Professor",
    organization: "University of Maryland, College Park, USA",
    bio: "Ang Li works at the intersection of machine learning and edge computing, building collaborative, scalable, secure, and trustworthy intelligent systems with a focus on federated learning.",
    profile: "https://www.ang-li.com/",
    photo: publicAsset("/speakers/ang-li.jpg"),
  },
  {
    name: "Yijiang Li",
    initials: "YL",
    role: "Assistant Computational Mathematician",
    organization: "Argonne National Laboratory, USA",
    bio: "Yijiang Li develops scalable federated learning for scientific computing, including cross-facility foundation-model training and queue-aware coordination across leadership-class HPC systems.",
    profile: "https://www.linkedin.com/in/yijiang-li-14489583",
    photo: publicAsset("/speakers/yijiang_li.jpg"),
  },
  {
    name: "TBA speaker",
    initials: "TBA",
    role: "Invited speaker",
    organization: "To be announced",
    bio: "Speaker biography and profile details will be added when this invited speaker is announced.",
    profile: null,
    photo: null,
  },
  {
    name: "TBA speaker",
    initials: "TBA",
    role: "Invited speaker",
    organization: "To be announced",
    bio: "Speaker biography and profile details will be added when this invited speaker is announced.",
    profile: null,
    photo: null,
  },
];

const previousWorkshops = [
  {
    edition: "First workshop",
    conference: "SC22",
    fullname: "The International Conference for High Performance Computing, Networking, Storage, and Analysis",
    year: "2022",
    location: "Dallas, Texas",
    date: "November 13-18 2022",
    href: "https://hpcfl.github.io/SC22/",
  },
  {
    edition: "Second workshop",
    conference: "SC23",
    fullname: "The International Conference for High Performance Computing, Networking, Storage, and Analysis",
    year: "2023",
    location: "Denver, Colorado",
    date: "November 12-17, 2023",
    href: "https://hpcfl.github.io/SC23/",
  },
];

const committees = [
  {
    title: "Organizers",
    members: [
      {
        name: "Sahil Tyagi",
        position: "Postdoctoral Research Associate",
        organization: "Oak Ridge National Laboratory, USA",
        photo: publicAsset("/committee/sahil-tyagi.jpg"),
        bio: "Sahil Tyagi is a postdoctoral research associate in ORNL's Analytics and AI Methods at Scale group. His work explores distributed and federated machine learning, with an emphasis on efficient training across heterogeneous clusters and unpredictable networks.",
        profile:
          "https://sahiltyagi4.github.io/",
      },
      {
        name: "Olivera Kotevska",
        position: "Senior Research Scientist",
        organization: "Oak Ridge National Laboratory, USA",
        photo: publicAsset("/committee/olivera-kotevska.png"),
        bio: "Olivera Kotevska is a senior research scientist in ORNL's Computer Science and Mathematics Division. Her research focuses on machine learning, secure AI, privacy-preserving technologies, and their use in scientific applications.",
        profile:
          "https://okotevska.github.io/",
      },
    ],
  },
  {
    title: "Advisory Committee",
    members: [
      {
        name: "Georgia Tourassi",
        position: "Associate Laboratory Director",
        organization: "Oak Ridge National Laboratory, USA",
        photo: publicAsset("/committee/georgia-tourassi.jpg"),
        bio: "Georgia Tourassi is Associate Laboratory Director of ORNL's Computing and Computational Sciences Directorate. Her research spans high-performance computing and artificial intelligence in biomedicine, and her leadership helped deliver Frontier, the first exascale system dedicated to open science.",
        profile:
          "https://www.ornl.gov/staff-profile/georgia-tourassi",
      },
      {
        name: "Feiyi Wang",
        position: "Distinguished Research Scientist & Group Leader",
        organization: "Oak Ridge National Laboratory, USA",
        photo: publicAsset("/committee/feiyi-wang.jpg"),
        bio: "Feiyi Wang leads ORNL's Analytics and AI Methods at Scale group. His research interests include large-scale data analytics, distributed machine learning and benchmarking, high-performance storage systems, parallel I/O, and file systems.",
        profile: "https://www.ornl.gov/staff-profile/feiyi-wang",
      },
    ],
  },
  {
    title: "Workshop Committee",
    members: [
        {
          name: "Chandreyee Bhowmick",
          position: "Postdoctoral Research Associate",
          organization: "Oak Ridge National Laboratory, USA",
          photo: publicAsset("/committee/chandreyee-bhowmick.jpg"),
          bio: "Chandreyee Bhowmick researches resilient distributed machine learning systems that remain trustworthy under failures, attacks, and communication constraints. Her work combines ideas from machine learning, systems, and control to build reliable and scalable learning methods.",
          profile:
              "https://www.linkedin.com/in/chandreyee-bhowmick-587a07183",
      },
      {
        name: "Jason Haga",
        position: "Chief Senior Research Scientist",
        organization:
          "National Institute of Advanced Industrial Science and Technology, Japan",
        photo: publicAsset("/committee/jason-haga.jpg"),
        bio: "Jason Haga is a chief senior researcher at AIST. His research covers immersive visualization and analytics, user experience and interfaces, applied artificial intelligence, and edge computing.",
        profile: "https://jp.linkedin.com/in/jason-haga-72861884",
      },
      {
        name: "Ravi Madduri",
        position: "Senior Scientist & Group Leader",
        organization: "Argonne National Laboratory, USA",
        photo: publicAsset("/committee/ravi-madduri.jpg"),
        bio: "Ravi Madduri is a computer scientist at Argonne National Laboratory whose work brings together high-performance computing, artificial intelligence, and biomedicine. He develops scalable, reproducible, and privacy-preserving approaches for data-intensive scientific research.",
        profile:
          "https://www.anl.gov/profile/ravi-k-madduri",
      },
      {
        name: "Truong Thao Nguyen",
        position: "Senior Researcher",
        organization:
          "National Institute of Advanced Industrial Science and Technology, Japan",
        photo: publicAsset("/committee/truong-thao-nguyen.jpg"),
        bio: "Truong Thao Nguyen is a researcher at AIST specializing in high-performance computing, interconnection networks, distributed computing, and large-scale distributed deep learning.",
        profile: "https://researchmap.jp/nguyentt",
      },
      {
        name: "John Gounley",
        position: "Computational Scientist & Group Leader",
        organization: "Oak Ridge National Laboratory, USA",
        photo: publicAsset("/committee/john-gounley.jpg"),
        bio: "John Gounley is a computational scientist at ORNL and leads the Scalable Biomedical Modeling group. His research focuses on scalable algorithms for biomedical simulations and data, including language models, distributed deep learning, and privacy-enhancing technologies.",
        profile:
          "https://www.ornl.gov/staff-profile/john-p-gounley",
      },
      {
        name: "Ziyue Xu",
        position: "Senior Scientist",
        organization: "NVIDIA, USA",
        photo: publicAsset("/committee/ziyue-xu.jpg"),
        bio: "Ziyue Xu is a senior scientist at NVIDIA. His research focuses on image analysis and computer vision for biomedical and clinical imaging, including shape modeling, graph methods, machine learning, and federated learning.",
        profile: "https://research.nvidia.com/person/ziyue-xu",
      },
    ],
  },
];

function WorkshopLogo({
  footer = false,
  hero = false,
}: {
  footer?: boolean;
  hero?: boolean;
}) {
  const className = [
    "workshop-logo",
    footer && "workshop-logo-footer",
    hero && "workshop-logo-hero",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Image
      className={className}
      src={publicAsset("/workshop-logo.png")}
      alt=""
      width={1254}
      height={1254}
      unoptimized
      aria-hidden="true"
    />
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="FPAI-HPC 2026 home">
          <WorkshopLogo />
          <span>
            <strong>FPAI-HPC</strong>
            <small>IEEE Cluster &apos;26</small>
          </span>
        </a>
        <nav aria-label="Workshop sections">
          <a href="#abstract">About</a>
          <a href="#scope">Scope</a>
          <a href="#program">Program</a>
          <a href="#speakers">Speakers</a>
          <a href="#committee">Committee</a>
          <a href="#previous-workshops">Series</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div
            className="hero-marquee"
            role="img"
            aria-label="IEEE Cluster 2026 — Federated — Collaborative — Privacy-Preserving — Secure — Trustworthy — Verifiable — Edge-Cloud-HPC Continuum"
          >
            <div className="hero-marquee-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <div className="hero-marquee-set" key={copy}>
                  <Image
                    className="hero-marquee-logo"
                    src={publicAsset("/cluster26-logo.png")}
                    alt=""
                    width={1959}
                    height={803}
                    unoptimized
                  />
                  <span className="hero-marquee-separator" />
                  <span className="hero-marquee-item">Federated</span>
                  <span className="hero-marquee-separator" />
                  <span className="hero-marquee-item">Collaborative</span>
                  <span className="hero-marquee-separator" />
                  <span className="hero-marquee-item">Privacy-Preserving</span>
                  <span className="hero-marquee-separator" />
                  <span className="hero-marquee-item">Secure</span>
                  <span className="hero-marquee-separator" />
                  <span className="hero-marquee-item">Trustworthy</span>
                  <span className="hero-marquee-separator" />
                  <span className="hero-marquee-item">Verifiable</span>
                  <span className="hero-marquee-separator" />
                  <span className="hero-marquee-item">Edge-Cloud-HPC Continuum</span>
                  <span className="hero-marquee-separator"/>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-grid" aria-hidden="true">
            <span className="node node-one" />
            <span className="node node-two" />
            <span className="node node-three" />
            <span className="node node-four" />
          </div>
          <div className="hero-copy">
            <h1 className="hero-title" id="hero-title">
              <span className="hero-title-short">
                FPAI-HPC<em>&apos;26</em>
              </span>
              <span className="hero-title-rule" aria-hidden="true" />
              <span className="hero-title-kicker">The 3rd Workshop on</span>
              <span className="hero-title-full">
                Federated and Privacy-Preserving AI{" "}
                <span className="hero-title-highlight">for HPC</span>
              </span>
            </h1>
            <p className="hero-location">
              In conjunction with{" "}
              <a
                  href="https://clustercomp.org/2026/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                IEEE International Conference on Cluster Computing 2026
              </a>
            </p>
            <dl className="hero-details" aria-label="Workshop details">
              <div className="hero-detail-location">
                <span className="location-pin" aria-hidden="true" />
                <div>
                  <dt>Location</dt>
                  <dd>Alexandria, Virginia, USA</dd>
                </div>
              </div>
              <div className="hero-detail-date">
                <span className="calendar-icon" aria-hidden="true" />
                <div>
                  <dt>Date</dt>
                  <dd>September xx, 2026</dd>
                </div>
              </div>
            </dl>
            <p className="hero-intro">
              Bringing together researchers and practitioners shaping
              collaborative AI across edge, cloud and high performance computing - without
              compromising data sovereignty.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#abstract">
                Explore the workshop <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <WorkshopLogo hero />
          <aside className="hero-note" aria-label="Workshop focus">
            <span>Focus / 2026</span>
            <p>Federated learning meets HPC, cross-silo privacy and agentic AI.</p>
          </aside>
        </section>

        <section className="section section-light" id="abstract">
          <div className="section-heading">
            <p className="section-kicker">01 / About</p>
            <h2>Advancing Trustworthy Federated AI at HPC Scale.</h2>
          </div>
          <div className="abstract-layout">
            <p className="lead">
              The 3rd Workshop on Federated and Privacy-Preserving AI for HPC (FPAI-HPC&apos;26) brings together
              researchers and practitioners from academia, industry, government, and research laboratories
              to advance trustworthy AI across distributed supercomputing environments without centralizing
              sensitive data. The workshop explores scalable federated training, communication efficiency,
              privacy and security, foundation models, scientific applications, sustainable AI, and agentic
              workflows while fostering shared platforms, meaningful evaluation metrics, and new collaborations
              for AI at HPC scale.
            </p>
          </div>
        </section>

        <section className="section section-ink" id="scope">
          <div className="section-heading">
            <p className="section-kicker">02 / Scope</p>
            <h2>From Foundations to Practice: Challenges in Federated and Privacy-Preserving AI.</h2>
            <p className="section-summary">
              Building on previous FPAI-HPC workshops at the Supercomputing conference series (SC),
              this edition brings together academia, industry, federal agencies, and research laboratories
              to advance federated and privacy-preserving AI for distributed HPC environments. Its scope
              spans the full stack—from foundation models, scalable aggregation, and communication-efficient
              systems to security, sustainability, scientific computing, and agentic workflows—connecting
              foundational theory with deployable systems and real-world applications.
            </p>
          </div>
          <div className="scope-bento-grid">
            {scopeTopics.map((topic) => (
              <article className="scope-bento-card" key={topic.title}>
                <div className="scope-bento-card-header">
                  <ScopeTopicIcon icon={topic.icon} />
                  <p className="scope-bento-category">{topic.category}</p>
                </div>
                <div className="scope-bento-card-content">
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="scope-question">
            <blockquote>
              What technologies, metrics, and safeguards
              make federated AI successful in the long term?
            </blockquote>
          </div>
        </section>

        <section className="section section-program" id="program">
          <div className="section-heading">
            <p className="section-kicker">03 / Program</p>
            <h2>Featuring current developments across industry, academia and national laboratories.</h2>
          </div>
          <div className="program-layout">
            <div className="format-card">
              <span className="format-label">Symposium format</span>
              <h3 className="format-card-title">
                <span>Talks, insights, and connect.</span>{" "}
              </h3>
              <p>
                The workshop combines invited talks with a panel discussion on
                current and future challenges. All the talks and presentations
                will be made available on this page following the conference
                proceedings.
              </p>
            </div>
            <div className="schedule" role="table" aria-label="Workshop schedule">
              <div className="schedule-head" role="row">
                <span role="columnheader">Time</span>
                <span role="columnheader">Activity</span>
                <span role="columnheader">Format</span>
              </div>
              {schedule.map((item) => (
                <div className="schedule-row" role="row" key={item.time}>
                  <time role="cell">{item.time}</time>
                  <strong role="cell">{item.activity}</strong>
                  <span role="cell">{item.type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-speakers" id="speakers">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">04 / Speakers</p>
              <h2>Voices across Federated AI and HPC.</h2>
            </div>
            <p>
              Keynote and talk-title details will be added as the program is finalized.
            </p>
          </div>
          <div className="speaker-grid">
            <article className="speaker-card speaker-card-keynote speaker-card-invited">
              <div className="speaker-identity">
                <div
                  className="speaker-photo speaker-photo-placeholder portrait-keynote"
                  role="img"
                  aria-label="Portrait placeholder for the keynote speaker"
                >
                  <span>{keynoteSpeaker.initials}</span>
                </div>
                <div>
                  <p className="speaker-category">Keynote</p>
                  <h3>{keynoteSpeaker.name}</h3>
                  <p className="speaker-organization">
                    {keynoteSpeaker.note}
                  </p>
                </div>
              </div>
              <details className="speaker-bio">
                <summary>
                  <span className="speaker-bio-action">
                    <span className="read-label">Read bio</span>
                    <span className="close-label">Close bio</span>
                    <span className="bio-chevron" aria-hidden="true" />
                  </span>
                  <span className="speaker-bio-preview">
                    {keynoteSpeaker.bio}
                  </span>
                </summary>
                <div className="speaker-bio-expanded">
                  <p>{keynoteSpeaker.bio}</p>
                  <span className="speaker-profile-pending">
                    Details forthcoming
                  </span>
                </div>
              </details>
            </article>
            {invitedSpeakers.map((speaker, speakerIndex) => (
              <article
                className="speaker-card speaker-card-invited"
                key={`${speaker.name}-${speakerIndex}`}
              >
                <div className="speaker-identity">
                  {speaker.photo ? (
                    <Image
                      className="speaker-photo"
                      src={speaker.photo}
                      alt={`Portrait of ${speaker.name}`}
                      width={168}
                      height={168}
                      loading="lazy"
                      unoptimized
                    />
                  ) : (
                    <div
                      className="speaker-photo speaker-photo-placeholder"
                      role="img"
                      aria-label={`Portrait placeholder for ${speaker.name}`}
                    >
                      <span>{speaker.initials}</span>
                    </div>
                  )}
                  <div>
                    <h3>{speaker.name}</h3>
                    <p className="speaker-role">{speaker.role}</p>
                    <p className="speaker-organization">
                      {speaker.organization}
                    </p>
                  </div>
                </div>
                <details className="speaker-bio">
                  <summary>
                    <span className="speaker-bio-action">
                      <span className="read-label">Read bio</span>
                      <span className="close-label">Close bio</span>
                      <span className="bio-chevron" aria-hidden="true" />
                    </span>
                    <span className="speaker-bio-preview">{speaker.bio}</span>
                  </summary>
                  <div className="speaker-bio-expanded">
                    <p>{speaker.bio}</p>
                    {speaker.profile ? (
                      <a
                        href={speaker.profile}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${speaker.name}'s personal webpage`}
                      >
                        Public profile <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="speaker-profile-pending">
                        Details forthcoming
                      </span>
                    )}
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-committee" id="committee">
          <p className="section-kicker">05 / Committee</p>
          <div className="committee-grid">
            {committees.map((committee, committeeIndex) => (
              <section className="committee-group" key={committee.title}>
                <div className="committee-title">
                  <span>0{committeeIndex + 1}</span>
                  <h3>{committee.title}</h3>
                </div>
                <div className="committee-members">
                  {committee.members.map((member) => (
                    <article className="committee-card" key={member.name}>
                      <div className="committee-identity">
                        <Image
                          src={member.photo}
                          alt={`Portrait of ${member.name}`}
                          width={168}
                          height={168}
                          loading="lazy"
                          unoptimized
                        />
                        <div>
                          <h4>{member.name}</h4>
                          <p className="committee-position">
                            {member.position}
                          </p>
                          <p className="committee-organization">
                            {member.organization}
                          </p>
                        </div>
                      </div>
                      <details className="committee-bio">
                        <summary>
                          <span className="committee-bio-action">
                            <span className="read-label">Read bio</span>
                            <span className="close-label">Close bio</span>
                            <span className="bio-chevron" aria-hidden="true" />
                          </span>
                          <span className="committee-bio-preview">
                            {member.bio}
                          </span>
                        </summary>
                        <div className="committee-bio-expanded">
                          <p>{member.bio}</p>
                          <a
                            href={member.profile}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Public Profile
                            <span aria-hidden="true"> ↗</span>
                          </a>
                        </div>
                      </details>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section
          className="section section-previous-workshops"
          id="previous-workshops"
        >
          <p className="section-kicker">06 / Previous workshops in the series</p>
          <div className="previous-workshop-grid">
            {previousWorkshops.map((workshop) => (
              <a
                className="previous-workshop-card"
                href={workshop.href}
                target="_blank"
                rel="noopener noreferrer"
                key={workshop.conference}
              >
                <div className="previous-workshop-meta">
                  <span>{workshop.conference}</span>
                </div>
                <div>
                  <strong>{workshop.year}</strong>
                  <h3>Federated and Privacy-Preserving AI for HPC</h3>
                  <p>
                    {workshop.fullname}
                  </p>
                  <p>
                    {workshop.date} · {workshop.location}
                  </p>
                </div>
                <span className="previous-workshop-link">
                  Visit workshop <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <WorkshopLogo footer />
          <div>
            <strong>FPAI-HPC &apos;26</strong>
            <span>Federated and Privacy-Preserving AI for HPC</span>
          </div>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
