import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  FileCheck,
  Calculator,
  TrendingUp,
  Shield,
  ClipboardCheck,
  Search,
  Award,
  Users,
  Target,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle2,
} from 'lucide-react';
import { useState, FormEvent } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { siteConfig } from '@/config';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: FileCheck,
      title: t.services.financial.title,
      description: t.services.financial.description,
    },
    {
      icon: Calculator,
      title: t.services.tax.title,
      description: t.services.tax.description,
    },
    {
      icon: TrendingUp,
      title: t.services.business.title,
      description: t.services.business.description,
    },
    {
      icon: Shield,
      title: t.services.risk.title,
      description: t.services.risk.description,
    },
    {
      icon: ClipboardCheck,
      title: t.services.compliance.title,
      description: t.services.compliance.description,
    },
    {
      icon: Search,
      title: t.services.internal.title,
      description: t.services.internal.description,
    },
  ];

  const features = [
    {
      icon: Award,
      title: t.features.certified.title,
      description: t.features.certified.description,
      stat: '50+',
    },
    {
      icon: Target,
      title: t.features.experience.title,
      description: t.features.experience.description,
      stat: '15+',
    },
    {
      icon: Users,
      title: t.features.clients.title,
      description: t.features.clients.description,
      stat: '500+',
    },
    {
      icon: CheckCircle2,
      title: t.features.approach.title,
      description: t.features.approach.description,
      stat: '100%',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="AUDIT Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-[#4A7856]">AUDIT</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-sm font-medium text-foreground hover:text-[#4A7856] transition-colors"
              >
                {t.nav.home}
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-foreground hover:text-[#4A7856] transition-colors"
              >
                {t.nav.about}
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-foreground hover:text-[#4A7856] transition-colors"
              >
                {t.nav.services}
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-foreground hover:text-[#4A7856] transition-colors"
              >
                {t.nav.contact}
              </a>
            </nav>

            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A7856]/20 via-background to-background z-10" />
          <img
            src="/audit-team.png"
            alt="Audit Team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 mb-6 bg-[#4A7856]/10 border border-[#4A7856]/20 rounded-full"
            >
              <span className="text-sm font-medium text-[#4A7856]">
                {t.hero.subtitle}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-[#4A7856] hover:bg-[#3d6447] text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {t.hero.cta1}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#4A7856] text-[#4A7856] hover:bg-[#4A7856] hover:text-white px-8 py-6 text-base font-semibold rounded-lg transition-all"
                onClick={() =>
                  document
                    .getElementById('services')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {t.hero.cta2}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {t.about.title}
                </h2>
                <p className="text-lg text-[#4A7856] font-semibold mb-6">
                  {t.about.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-[#4A7856] pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t.about.mission}
                  </h3>
                  <p className="text-muted-foreground">{t.about.missionText}</p>
                </div>

                <div className="border-l-4 border-[#4A7856] pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t.about.vision}
                  </h3>
                  <p className="text-muted-foreground">{t.about.visionText}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t.about.why}
                </h3>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4A7856] flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{t.about.reason1}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4A7856] flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{t.about.reason2}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4A7856] flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{t.about.reason3}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4A7856] flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{t.about.reason4}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A7856]/20 to-transparent rounded-2xl" />
              <img
                src="/office-interior.png"
                alt="Office Interior"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group p-8 bg-card border border-border rounded-xl hover:border-[#4A7856] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 mb-6 bg-[#4A7856]/10 rounded-lg group-hover:bg-[#4A7856] transition-colors">
                    <Icon className="h-8 w-8 text-[#4A7856] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/financial-analysis.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t.features.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-8 bg-card border border-border rounded-xl hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-[#4A7856]/10 rounded-full">
                    <Icon className="h-10 w-10 text-[#4A7856]" />
                  </div>
                  <div className="text-4xl font-bold text-[#4A7856] mb-3">
                    {feature.stat}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t.contact.info}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#4A7856]/10 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#4A7856]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        {t.contact.address}
                      </p>
                      <p className="text-muted-foreground">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#4A7856]/10 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#4A7856]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        {t.contact.callUs}
                      </p>
                      <p className="text-muted-foreground">
                        {siteConfig.contact.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#4A7856]/10 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#4A7856]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        {t.contact.emailUs}
                      </p>
                      <p className="text-muted-foreground">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#4A7856]/10 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#4A7856]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        {t.contact.workingHours}
                      </p>
                      <p className="text-muted-foreground">
                        {siteConfig.contact.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-muted/50 rounded-xl border border-border">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
            </motion.div>

            <motion.form
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-card border border-border rounded-xl"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t.contact.name}
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t.contact.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t.contact.phone}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t.contact.message}
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#4A7856] hover:bg-[#3d6447] text-white py-6 text-base font-semibold"
              >
                {t.contact.send}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="AUDIT Logo" className="h-10 w-auto" />
                <span className="text-xl font-bold text-[#4A7856]">AUDIT</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.footer.description}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-sm text-muted-foreground hover:text-[#4A7856] transition-colors"
                  >
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-[#4A7856] transition-colors"
                  >
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-[#4A7856] transition-colors"
                  >
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-muted-foreground hover:text-[#4A7856] transition-colors"
                  >
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">
                {t.contact.info}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{siteConfig.contact.phone}</li>
                <li>{siteConfig.contact.email}</li>
                <li>{siteConfig.contact.address}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">
                {t.footer.followUs}
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-background border border-border rounded-lg hover:border-[#4A7856] hover:bg-[#4A7856]/10 transition-all"
                >
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-[#4A7856]" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-background border border-border rounded-lg hover:border-[#4A7856] hover:bg-[#4A7856]/10 transition-all"
                >
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-[#4A7856]" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-background border border-border rounded-lg hover:border-[#4A7856] hover:bg-[#4A7856]/10 transition-all"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-[#4A7856]" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-background border border-border rounded-lg hover:border-[#4A7856] hover:bg-[#4A7856]/10 transition-all"
                >
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-[#4A7856]" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AUDIT. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
