// import { withRouter } from "next/router";
import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Top Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Logo placeholder - empty space for NIJA logo */}
          <div className={styles.logoSpace}>
            <img src="white-logo.png" alt="logo" width="113" height="70"></img>
          </div>

          {/* Navigation Menu */}
          <ul className={styles.navMenu}>
            <li><a href="#company">Our Company</a></li>
            <li><a href="#solutions">Our Solutions</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
          
          {/* Contact Button */}
          <a href="#contact" className={styles.contactBtn}>
            Contact Us →
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.subtitle}>Simplifying Businesses Operations with</p>
          <h1 className={styles.title}>Smart ERP Solutions</h1>
          <p className={styles.description}>
            We help growing businesses manage finance, sales, inventory, and operations using powerful ERP
            systems like Oracle NetSuite and SAP Business One.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Request a Free Consultation</button>
            <button className={styles.secondaryBtn}>Explore Our Solutions ↗</button>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>About Nija Technologies</h2>
            <p className={styles.aboutDescription}>
              Nija Technologies embodies truth in technology, delivering 
              reliable and innovative ERP solutions that transform business
              operations with unwavering integrity.
            </p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>150+</h3>
                <p className={styles.statLabel}>Projects</p>
              </div>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>99%</h3>
                <p className={styles.statLabel}>Customer Retention</p>
              </div>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>20+</h3>
                <p className={styles.statLabel}>Years of Experience</p>
              </div>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>70+</h3>
                <p className={styles.statLabel}>Satisfied Clients</p>
              </div>
            </div>

            <button className={styles.knowMoreBtn}>
              Know More →
            </button>
          </div>

          <div className={styles.aboutImage}>
            {/* Placeholder for team illustration image */}
             <img src="persons.png" alt="person" width="500" height="400" ></img>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsContainer}>
          <div className={styles.solutionsHeader}>
            <h2 className={styles.solutionsTitle}>Our Solutions</h2>
            <p className={styles.solutionsDescription}>
              20 years of expertise in the ERP domain, establishing us as a trusted provider of high-quality,
              reliable ERP solutions across various industries.
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            {/* Oracle NetSuite */}
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                {/* Icon placeholder */}
                <img src="cloud.png" alt="cloud" width="69" height="48"></img>
              </div>
              <h3 className={styles.solutionTitle}>Oracle NetSuite</h3>
              <p className={styles.solutionSubtitle}>Cloud Leader</p>
              <p className={styles.solutionText}>
                Oracle NetSuite ERP is a cloud-based business management software that provides organizations with
                a comprehensive suite of applications.
              </p>
              <a href="#" className={styles.learnMoreLink}>Learn More <img src="mark.png" alt="mark" width="12" height="12"></img></a>
            </div>

            {/* SAP Business One */}
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                {/* Icon placeholder */}
                <img src="book.png" alt="book" width="48" height="48"></img>
              </div>
              <h3 className={styles.solutionTitle}>SAP Business One</h3>
              <p className={styles.solutionSubtitle}>Cloud Leader</p>
              <p className={styles.solutionText}>
                Oracle NetSuite ERP is a cloud-based business management software that provides organizations with
                a comprehensive suite of applications.
              </p>
              <a href="#" className={styles.learnMoreLink}>Learn More  <img src="mark.png" alt="mark" width="12" height="12"></img></a>
            </div>

            {/* Real Estate Management */}
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                {/* Icon placeholder */}
                <img src="estate.png" alt="estate" width="55" height="48"></img>
              </div>
              <h3 className={styles.solutionTitle}>Real Estate Management</h3>
              <p className={styles.solutionSubtitle}>Sales Master</p>
              <p className={styles.solutionText}>
                Oracle NetSuite ERP is a cloud-based business management software that provides organizations with
                a comprehensive suite of applications.
              </p>
              <a href="#" className={styles.learnMoreLink}>Learn More  <img src="mark.png" alt="mark" width="12" height="12"></img></a>
            </div>

            {/* Construction Management */}
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                {/* Icon placeholder */}
                <img src="manage.png" alt="manage" width="58" height="48"></img>
              </div>
              <h3 className={styles.solutionTitle}>Construction Management</h3>
              <p className={styles.solutionSubtitle}>Sales Master</p>
              <p className={styles.solutionText}>
                Oracle NetSuite ERP is a cloud-based business management software that provides organizations with
                a comprehensive suite of applications.
              </p>
              <a href="#" className={styles.learnMoreLink}>Learn More  <img src="mark.png" alt="mark" width="12" height="12"></img></a>
            </div>

            {/* Human Capital Management */}
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                {/* Icon placeholder */}
                <img src="profile.png" alt="profile" width="47" height="48"></img>
              </div>
              <h3 className={styles.solutionTitle}>Human Capital Management</h3>
              <p className={styles.solutionSubtitle}>Sales Master</p>
              <p className={styles.solutionText}>
                Oracle NetSuite ERP is a cloud-based business management software that provides organizations with
                a comprehensive suite of applications.
              </p>
              <a href="#" className={styles.learnMoreLink}>Learn More  <img src="mark.png" alt="mark" width="12" height="12"></img></a>
            </div>

            {/* Mobile Solutions */}
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                {/* Icon placeholder */}
                <img src="mobile.png" alt="mobile" width="31" height="48.22"></img>
              </div>
              <h3 className={styles.solutionTitle}>Mobile Solutions</h3>
              <p className={styles.solutionSubtitle}>Sales Master</p>
              <p className={styles.solutionText}>
                Oracle NetSuite ERP is a cloud-based business management software that provides organizations with
                a comprehensive suite of applications.
              </p>
              <a href="#" className={styles.learnMoreLink}>Learn More  <img src="mark.png" alt="mark" width="12" height="12"></img></a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={styles.whatWeDoSection}>
        <div className={styles.whatWeDoContainer}>
          {/* Left Side - Content with Image */}

          <div className={styles.whatWeDoLeft}>
            <h2 className={styles.whatWeDoTitle}>What We Do</h2>
            <p className={styles.whatWeDoDescription}>
              We partner with growing businesses to implement and optimize ERP systems that drive real results.
            </p>
            <button className={styles.requestDemoBtn}>Request a Demo →</button>
            
            <div className={styles.whatWeDoImagePlaceholder}>
              {/* Placeholder for team collaboration image */}
               <img src="childern.png" alt="childern" width="383.04" height="397.22"></img>
            </div>
          </div>

          {/* Right Side - Services Grid */}
          <div className={styles.whatWeDoRight}>
            <div className={styles.servicesGrid}>
              {/* ERP Implementation */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {/* Icon placeholder */}
                  <img src="circle.png" alt="circle" width="72" height="72"></img>
                </div>
                <h3 className={styles.serviceTitle}>ERP Implementation</h3>
                <p className={styles.serviceText}>
                  End-to-end deployment of Oracle NetSuite and SAP Business One tailored to your business needs.
                </p>
              </div>

              {/* Process Optimization */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {/* Icon placeholder */}
                  <img src="up.png" alt="up" width="72" height="72"></img>
                </div>
                <h3 className={styles.serviceTitle}>Process Optimization</h3>
                <p className={styles.serviceText}>
                  End-to-end deployment of Oracle NetSuite and SAP Business One tailored to your business needs.
                </p>
              </div>

              {/* Ongoing Support */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {/* Icon placeholder */}
                  <img src="shield.png" alt="shield" width="72" height="72"></img>
                </div>
                <h3 className={styles.serviceTitle}>Ongoing Support</h3>
                <p className={styles.serviceText}>
                  24/7 technical support and system maintenance to keep your business running smoothly.
                </p>
              </div>

              {/* Training & Consulting */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {/* Icon placeholder */}
                  <img src="contact.png" alt="contact" width="72" height="72"></img>
                </div>
                <h3 className={styles.serviceTitle}>Training & Consulting</h3>
                <p className={styles.serviceText}>
                  Comprehensive training programs and strategic consulting to maximize your ERP investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className={styles.industriesSection}>
        <div className={styles.industriesContainer}>
          <h2 className={styles.industriesTitle}>Industries We Serve</h2>

          <div className={styles.industriesGrid}>
            {/* Real Estate */}
            <div className={styles.industryItem}>
              <div className={styles.industryIcon}>
                {/* Icon placeholder */}
                 <img src="real.png" alt="estate" width="55" height="48"></img>
              </div>
              <h3 className={styles.industryName}>Real Estate</h3>
              <p className={styles.industryText}>
                Lorem ipsum dolor sit amet consectetur. Netus consequat.
              </p>
              <div className={styles.industryImage}>
                {/* Image placeholder */}
                <img src="21.png" alt="estate" width="297" height="153"></img>
              </div>
            </div>

            {/* Construction */}
            <div className={styles.industryItem}>
              <div className={styles.industryIcon}>
                {/* Icon placeholder */}
                 <img src="construction.png" alt="construction" width="58" height="48"></img>
              </div>
              <h3 className={styles.industryName}>Construction</h3>
              <p className={styles.industryText}>
                Lorem ipsum dolor sit amet consectetur. Mollis erat ac a.
              </p>
              <div className={styles.industryImage}>
                {/* Image placeholder */}
                <img src="21 (1).png" alt="estate" width="297" height="153"></img>
              </div>
            </div>

            {/* Facility Management */}
            <div className={styles.industryItem}>
              <div className={styles.industryIcon}>
                {/* Icon placeholder */}
                <img src="machine.png" alt="machine" width="48" height="48"></img>
              </div>
              <h3 className={styles.industryName}>Facility Management</h3>
              <p className={styles.industryText}>
                Lorem ipsum dolor sit amet consectetur. Faucibus diam.
              </p>
              <div className={styles.industryImage}>
                {/* Image placeholder */}
                <img src="21 (2).png" alt="estate" width="297" height="153"></img>
              </div>
            </div>

            {/* Wholesale Distribution */}
            <div className={styles.industryItem}>
              <div className={styles.industryIcon}>
                {/* Icon placeholder */}
                 <img src="wholesale.png" alt="wholesale" width="45" height="48"></img>
              </div>
              <h3 className={styles.industryName}>Wholesale Distribution</h3>
              <p className={styles.industryText}>
                Lorem ipsum dolor sit amet consectetur. Odio sed netus.
              </p>
              <div className={styles.industryImage}>
                {/* Image placeholder */}
                <img src="21 (3).png" alt="estate" width="297" height="153"></img>
              </div>
            </div>

            {/* Equipment Rental */}
            <div className={styles.industryItem}>
              <div className={styles.industryIcon}>
                {/* Icon placeholder */}
                <img src="rental.png" alt="rental" width="48" height="48"></img>
              </div>
              <h3 className={styles.industryName}>Equipment Rental</h3>
              <p className={styles.industryText}>
                Lorem ipsum dolor sit amet consectetur. Consequat.
              </p>
              <div className={styles.industryImage}>
                {/* Image placeholder */}
                <img src="21 (4).png" alt="estate" width="297" height="153"></img>
              </div>
            </div>
          </div>

          <div className={styles.industriesButtonWrapper}>
            <button className={styles.exploreSolutionsBtn}>
              Explore Solution by Industry →
            </button>
          </div>
        </div>
      </section>

      {/* Our Happy Clients Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <h2 className={styles.testimonialsTitle}>Our Happy Clients</h2>

          <div className={styles.testimonialsGrid}>
            {/* Testimonial 1 */}
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                {/* Quote icon placeholder */}
                <img src="quote.png" alt="quote"></img>
              </div>
              <p className={styles.testimonialText}>
                Nija Tech's Matrix Add-On streamlined the Nija Tech has brought remarkable efficiency and precision to our pricing management. It allows us to handle complex discount structures with ease, saving us considerable time and effort on manual calculations. What stands out is Nija Tech's attention to detail and their ability to tailor the add-on to our business requirements.....
              </p>
              <div className={styles.clientInfo}>
                <div className={styles.clientImage}>
                  {/* Client image placeholder */}
                   <img src="user1.png" alt="user" width="80" height="80"></img>
                </div>
                <div className={styles.clientDetails}>
                  <h4 className={styles.clientName}>Alexsia Jorgina</h4>
                  <p className={styles.clientPosition}>Director</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                {/* Quote icon placeholder */}
                 <img src="quote.png" alt="logo" width="60" height="48"></img>
              </div>
              <p className={styles.testimonialText}>
                I am highly satisfied with the ERP development team's performance and support throughout our AMC contract. They have been professional, responsive, and dedicated to aligning our system with business needs. Their team's efficient implementation of the KSA e-invoicing system, ensuring full compliance with Saudi tax regulations.
              </p>
              <div className={styles.clientInfo}>
                <div className={styles.clientImage}>
                  {/* Client image placeholder */}
                   <img src="user2.png" alt="user" width="80" height="80"></img>
                </div>
                <div className={styles.clientDetails}>
                  <h4 className={styles.clientName}>Alexsia Jorgina</h4>
                  <p className={styles.clientPosition}>Director</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                {/* Quote icon placeholder */}
                 <img src="quote.png" alt="logo" width="60" height="48"></img>
              </div>
              <p className={styles.testimonialText}>
                I am thrilled to share my experience with Nija Tech since the last 10 years, during our SAP Business One implementation. From the very beginning, their team demonstrated exceptional professionalism and expertise, guiding us through every step of the process. Their deep understanding of SAP B1, combined with their commitment to our success, made a significant difference.
              </p>
              <div className={styles.clientInfo}>
                <div className={styles.clientImage}>
                  {/* Client image placeholder */}
                   <img src="user3.png" alt="user" width="80" height="80"></img>
                </div>
                <div className={styles.clientDetails}>
                  <h4 className={styles.clientName}>Alexsia Jorgina</h4>
                  <p className={styles.clientPosition}>Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why we need nija tech */}
       <section className={styles.whySection}>
  <div className={styles.whyContainer}>

    {/* LEFT SIDE IMAGE */}
    <div className={styles.whyLeft}>


      {/* Image placeholder */}
      <div className={styles.whyImage}>
        <img src="img.png" alt="img"width={742} height={800} />
      </div>

      {/* Stats Card */}
      <div className={styles.whyStats}>
        <div>
          <h3>500+</h3>
          <p>Projects</p>
        </div>

        <div>
          <h3>98%</h3>
          <p>Satisfaction</p>
        </div>

        <div>
          <h3>15+</h3>
          <p>Years</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE CONTENT */}
    <div className={styles.whyRight}>

      <h2 className={styles.whyTitle}>Why Nija Technologies</h2>

      <p className={styles.whySubtitle}>
        We combine technical expertise with deep industry knowledge to
        deliver ERP solutions that truly transform your business operations.
      </p>
      <div className={styles.whyFeatures}>
        <div className={styles.whyItem}>
          <img src="a.png" alt="a" width={29} height={48} />
          <div>
            <h4>Industry Expertise</h4>
            <p>
              15+ years of ERP implementation experience across multiple
              industries and business sizes.
            </p>
          </div>
        </div>
        <div className={styles.whyItem}>
          <img src="b.png" alt="b" width={43} height={48} />
          <div>
            <h4>Rapid Implementation</h4>
            <p>
              Streamlined deployment process that gets you up and running
              quickly without disrupting operations.
            </p>
          </div>
        </div>

        <div className={styles.whyItem}>
          <img src="c.png" alt="c" width={53} height={48} />
          <div>
            <h4>Dedicated Team</h4>
            <p>
              Certified consultants who understand your business and
              provide personalised support.
            </p>
          </div>
        </div>

        <div className={styles.whyItem}>
          <img src="d.png" alt="d" width={48} height={48} />
          <div>
            <h4>24/7 Support</h4>
            <p>
              Round-the-clock technical assistance to ensure your systems
              run smoothly at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Ready to Transform Section */}
      <section className={styles.transformSection}>
        <div className={styles.transformContainer}>
          {/* LEFT SIDE */}
          <div className={styles.transformLeft}>
            <h2 className={styles.transformTitle}>
              Ready to Transform <br />
              <span>Your Business?</span>
            </h2>

            <p className={styles.transformDesc}>
              Let's discuss how our ERP solutions can streamline your operations and drive growth. Schedule a free consultation with our experts today.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}>
                  {/* Phone icon placeholder */}
                  <img src="phn.png" alt="phn" width="48" height="48"></img>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+971 50 978 9007</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconBox}>
                  {/* Email icon placeholder */}
                  <img src="mail.png" alt="mail" width="48" height="48"></img>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@nijatech.com</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconBox}>
                  {/* Clock icon placeholder */}
                  <img src="hour.png" alt="hour" width="48" height="48"></img>
                </div>
                <div>
                  <h4>Opening hours</h4>
                  <p>Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className={styles.transformRight}>
            <div className={styles.formCard}>
              <h3>Ready to simplify your business operations</h3>
              <p>Let's discuss how the right ERP system can improve efficiency, visibility, and growth for your business.</p>

              <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <input type="text" placeholder="Full Name*" required />
                  <input type="email" placeholder="Email Address*" required />
                </div>
                <div className={styles.formRow}>
                  <input type="tel" placeholder="Contact No.*" required />
                  <input type="text" placeholder="Industry" />
                </div>
                <textarea placeholder="Message" rows="4"></textarea>
                <button type="submit" className={styles.submitBtn}>Let's Get Started</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            {/* Logo and Description */}
            <div className={styles.footerCol}>
              <div className={styles.footerLogo}>
                {/* Logo placeholder */}
                 <img src="white-logo.png" alt="logo" width="100" height="60"></img>

                               
              </div>
              <p className={styles.footerDesc}>
                Building production-grade AI systems for enterprises that demand reliability, security, and measurable business impact.
              </p>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>{<img src="linkedin.png" alt="logo" width="16" height="15"></img>}</a>
                <a href="#" className={styles.socialIcon}>{<img src="twitter.png" alt="logo" width="16" height="14"></img>}</a>
                <a href="#" className={styles.socialIcon}>{<img src="facebook.png" alt="logo" width="9" height="16"></img>}</a>
                <a href="#" className={styles.socialIcon}>{<img src="msg.png" alt="logo" width="16" height="13"></img>}</a>
              </div>
            </div>

            {/* Solutions */}
            <div className={styles.footerCol}>
              <h4>Solutions</h4>
              <ul>
                <li><a href="#">Netsuite ERP</a></li>
                <li><a href="#">SAP Business One</a></li>
                <li><a href="#">Consulting Management</a></li>
                <li><a href="#">Human Capital Management</a></li>
                <li><a href="#">Property Management</a></li>
                <li><a href="#">Mobile Solution</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className={styles.footerCol}>
              <h4>Services</h4>
              <ul>
                <li><a href="#">Consulting</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Implementation</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Training</a></li>
                <li><a href="#">Mobile App Development</a></li>
                <li><a href="#">BI & Analytics</a></li>
                <li><a href="#">AI</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className={styles.footerCol}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Company</a></li>
                <li><a href="#">Story</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div className={styles.footerCol}>
              <h4>Get In Touch</h4>
              <ul>
                <li>108-Rove Business Centre,</li>
                <li>Al Quasis 2, Dubai, UAE</li>
                <li><a href="mailto:info@nijatech.com">info@nijatech.com</a></li>
                <li><a href="tel:+971509789007">+971 50 978 9007</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2025 All Rights Reserved. Nija Technologies FZE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}       