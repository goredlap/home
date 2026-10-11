import {
  Badge,
  Button,
  Card,
  CardContent,
  Container,
  Heading,
  Text,
  Theme,
} from '@goredlap/ui'
import '@goredlap/ui/styles.css'
import './App.css'

const skills = [
  'Go',
  'Java',
  'TypeScript',
  'Kafka',
  'Temporal',
  'ClickHouse',
  'PostgreSQL',
  'Kubernetes',
]

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

function App() {
  return (
    <Theme appearance="light" className="app-shell">
      <header className="site-header">
        <Container className="site-header__inner">
          <a className="wordmark" href="#top" aria-label="goredlap home">
            <span aria-hidden="true">G</span>
            goredlap
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#products">Products</a>
            <a href="#about">About</a>
          </nav>
        </Container>
      </header>

      <main id="top">
        <Container className="hero-section">
          <div className="hero-copy">
            <Badge>Independent products</Badge>
            <Heading as="h1">
              Useful software,
              <em>built with intent.</em>
            </Heading>
            <Text tone="muted" className="hero-description">
              goredlap is the home for products I build—focused tools shaped by real problems,
              careful engineering, and a bias for simplicity.
            </Text>
            <div className="hero-actions">
              <Button size="lg" onClick={() => scrollTo('#products')}>
                View products
                <span aria-hidden="true">↓</span>
              </Button>
              <Button size="lg" variant="secondary" onClick={() => scrollTo('#about')}>
                About the builder
              </Button>
            </div>
          </div>

          <div className="hero-mark" aria-hidden="true">
            <span>G</span>
            <div className="hero-mark__line" />
            <small>GOREDLAP / BY PRASANNA</small>
          </div>
        </Container>

        <section className="products-section" id="products">
          <Container>
            <div className="section-heading section-heading--split">
              <div>
                <Badge>Products</Badge>
                <Heading as="h2">The first release is taking shape.</Heading>
              </div>
              <Text tone="muted">
                A small collection of thoughtful software will live here. Nothing is ready to
                announce just yet.
              </Text>
            </div>

            <Card className="coming-soon-card">
              <CardContent>
                <span className="coming-soon-card__index">01</span>
                <div>
                  <Badge>Coming soon</Badge>
                  <Heading as="h3">Currently building.</Heading>
                  <Text tone="muted">
                    The shelf is intentionally quiet while the first product earns its place here.
                  </Text>
                </div>
                <span className="coming-soon-card__mark" aria-hidden="true">G</span>
              </CardContent>
            </Card>
          </Container>
        </section>

        <section className="about-section" id="about">
          <Container className="about-layout">
            <div className="about-heading">
              <Badge>About</Badge>
              <Heading as="h2">I’m Prasanna Kumar Reddi.</Heading>
            </div>

            <div className="about-copy">
              <Text className="about-lede">
                I’m a backend-focused software engineer with 4+ years of experience building
                payment systems, subscription workflows, and high-volume data platforms.
              </Text>
              <Text tone="muted">
                At Codecademy, I work on subscription lifecycle, billing, payments, and product
                experiences for a platform serving more than 50 million learners. Before that, I
                led a five-engineer event analytics and SDK team at Apxor, building Kubernetes-based
                services supporting SDKs deployed across 100M+ mobile devices.
              </Text>
              <Text tone="muted">
                I like turning difficult infrastructure and product problems into dependable,
                understandable software—from Kafka and Temporal workflows to ClickHouse data
                pipelines and the React interfaces around them.
              </Text>

              <div className="skill-list" aria-label="Core technologies">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>

              <div className="about-links">
                <a href="https://github.com/prasannakumar414" target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/laxmi-prasanna-kumar-naidu-reddi-b43b1219b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a href="mailto:prasannakumarreddi08@gmail.com">
                  Email <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="site-footer">
        <Container>
          <span>GOREDLAP / PRODUCTS</span>
          <Text tone="muted">Built by Prasanna Kumar Reddi.</Text>
        </Container>
      </footer>
    </Theme>
  )
}

export default App
