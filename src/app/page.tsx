"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "hero" },
              { name: "Features", id: "features" },
              { name: "Pricing", id: "pricing" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="AffiliateHub"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboard
            background={{ variant: "gradient-bars" }}
            title="Scale Your Business with Our Affiliate Program"
            description="Drive revenue, expand your reach, and incentivize partners with our comprehensive, high-conversion affiliate tracking software."
            buttons={[{ text: "Get Started", href: "#pricing" }]}
            imageSrc="http://img.b2bpic.net/free-photo/business-data-analytics-dashboard_23-2151937262.jpg"
            mediaAnimation="slide-up"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/portrait-young-business-woman-park_1303-28940.jpg", alt: "Portrait of young business woman in park" },
              { src: "http://img.b2bpic.net/free-photo/young-business-woman-working-laptop-cafe_1303-30504.jpg", alt: "Young business woman working on laptop in a cafe" },
              { src: "http://img.b2bpic.net/free-photo/portrait-smiling-successful-businesswoman-looking-into-camera-sitting-restaurant-business-lady-with-stylish-hairstyle-wears-elegant-suit-business-meeting-attractive-appearance_8353-12611.jpg", alt: "Portrait of smiling successful businesswoman looking into camera" },
              { src: "http://img.b2bpic.net/free-photo/young-business-woman-white-background-business-job_185193-110285.jpg", alt: "Young business woman on white background" },
              { src: "http://img.b2bpic.net/free-photo/young-handsome-business-man-suit-office_1303-21048.jpg", alt: "Young handsome business man in a suit" }
            ]}
            marqueeItems={[
              { type: "text", text: "100% Transparency" },
              { type: "text", text: "Real-time Data" },
              { type: "text", text: "Global Payouts" },
              { type: "text", text: "Automated Scaling" },
              { type: "text", text: "Secure Integration" }
            ]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentyNine
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="bento-grid"
            useInvertedBackground={false}
            features={[
              { title: "Advanced Tracking", description: "Real-time analytics for every click and conversion.", imageSrc: "http://img.b2bpic.net/free-photo/3d-render-cardboard-boxes-isolated-icons-set_107791-16447.jpg", titleImageSrc: "http://img.b2bpic.net/free-photo/marketing-market-strategy-planning-business-concept_53876-21181.jpg", buttonText: "Learn More" },
              { title: "Automated Payouts", description: "Global, secure, and automated commission payments.", imageSrc: "http://img.b2bpic.net/free-photo/team-work-process-young-business-managers-crew-working-with-new-startup-project-laptop-wood-table-typing-keyboard-texting-message-analyse-graph-plans_1423-111.jpg", titleImageSrc: "http://img.b2bpic.net/free-photo/attractive-hipster-his-dark-skinned-girlfriend-watch-funny-video-online_273609-18718.jpg", buttonText: "Learn More" },
              { title: "Partner Portal", description: "A dedicated dashboard for your affiliate partners.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-assortment-still-life-friendship-day-elements_23-2148970493.jpg", titleImageSrc: "http://img.b2bpic.net/free-photo/network-people-digital-world_9975-23272.jpg", buttonText: "Learn More" }
            ]}
            title="Everything You Need to Succeed"
            description="Powerful tools designed to simplify your affiliate journey."
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardEleven
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            metrics={[
              { id: "m1", value: "500%", title: "Average Growth", description: "In affiliate-driven revenue.", imageSrc: "http://img.b2bpic.net/free-photo/modern-workspace-with-computer_23-2151966696.jpg" },
              { id: "m2", value: "24/7", title: "Support Access", description: "Round-the-clock partner assistance.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-financial-report-with-businesspeople-background_1098-4069.jpg" },
              { id: "m3", value: "100+", title: "Payout Methods", description: "Flexible global payment options.", imageSrc: "http://img.b2bpic.net/free-photo/network-concept-with-thread-high-angle_23-2148999166.jpg" }
            ]}
            title="Proven Growth Metrics"
            description="Our platform has empowered thousands of businesses to reach new heights."
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardTwo
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            plans={[
              { id: "basic", badge: "Essential", price: "$99", subtitle: "For new programs", buttons: [{ text: "Sign Up" }], features: ["100 Affiliates", "Real-time tracking", "Standard Payouts"] },
              { id: "pro", badge: "Growth", price: "$299", subtitle: "For growing businesses", buttons: [{ text: "Get Started" }], features: ["1000 Affiliates", "Custom Reporting", "Advanced Automation"] }
            ]}
            title="Simple, Transparent Pricing"
            description="Choose the perfect plan for your business scale."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardOne
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={true}
            testimonials={[
              { id: "t1", name: "Sarah J.", role: "Marketing Director", company: "TechBase", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg" },
              { id: "t2", name: "Mark D.", role: "CEO", company: "Innovate", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-business-man-wearing-grey-suit-standing-isolated-white-wall_231208-9211.jpg" },
              { id: "t3", name: "Elena P.", role: "Affiliate Manager", company: "RetailPlus", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-zoom-call-avatar_23-2149556781.jpg" },
              { id: "t4", name: "David W.", role: "Founder", company: "Startups", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-business-man-choosing-car-car-showroom_1303-17903.jpg" },
              { id: "t5", name: "Lucy K.", role: "Growth Lead", company: "Scale", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-zoom-call-avatar_23-2149556782.jpg" }
            ]}
            title="Loved by Global Brands"
            description="Trusted by marketing leaders worldwide."
          />
        </div>

        <div id="social-proof" data-section="social-proof">
          <SocialProofOne
            textboxLayout="split"
            useInvertedBackground={false}
            names={["Microsoft", "Google", "Amazon", "Tesla", "Nvidia", "Adobe", "Shopify"]}
            title="Trusted Partners"
            description="Our program is backed by industry leaders."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textboxLayout="split"
            useInvertedBackground={true}
            faqs={[
              { id: "f1", title: "How long for setup?", content: "Usually within 24 hours." },
              { id: "f2", title: "Can I integrate my store?", content: "Yes, we support most ecommerce platforms." },
              { id: "f3", title: "Are payouts automated?", content: "Yes, fully automated globally." }
            ]}
            mediaAnimation="slide-up"
            title="Common Questions"
            description="Everything you need to know."
            faqsAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/man-is-working-computer-with-graph-screen_23-2151929046.jpg"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Contact"
            title="Get Started Today"
            description="Join the AffiliateHub family and start scaling today."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              {
                title: "Product",                items: [
                  { label: "Pricing", href: "#pricing" },
                  { label: "Features", href: "#features" }
                ]
              },
              {
                title: "Company",                items: [
                  { label: "About Us", href: "#" },
                  { label: "Careers", href: "#" }
                ]
              }
            ]}
            bottomLeftText="© 2024 AffiliateHub. All rights reserved."
            bottomRightText="Privacy Policy"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
