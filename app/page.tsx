"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import
  {
    ArrowRight,
    Award,
    BarChart3,
    Briefcase,
    Building2,
    Calendar,
    CheckCircle,
    Globe,
    GraduationCap,
    MapPin,
    Menu,
    Phone,
    Settings,
    Sparkles,
    Star,
    Target,
    TrendingUp,
    Users,
    X,
    Zap,
  } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

// Floating Icons Component
const FloatingIcons = () => {
  const icons = [
    { Icon: Building2, delay: 0 },
    { Icon: TrendingUp, delay: 0.5 },
    { Icon: BarChart3, delay: 1 },
    { Icon: Target, delay: 1.5 },
    { Icon: Award, delay: 2 },
    { Icon: Users, delay: 2.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 4,
            delay: delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Icon className="w-8 h-8 text-amber-500/30" />
        </motion.div>
      ))}
    </div>
  )
}

// Spotlight Effect Component
const Spotlight = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent ${className}`}
      style={{
        background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(245, 158, 11, 0.1) 60deg, transparent 120deg)`,
      }}
    />
  )
}

// Animated Background Grid
const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}

export default function AlfaCompanyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      icon: Building2,
      title: "إدارة وتخطيط المشاريع التجارية",
      description: "نقدم خدمات شاملة لإدارة وتخطيط المشاريع بأحدث الأساليب والتقنيات المتطورة",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "تطوير الأعمال وتحليل السوق",
      description: "تحليل معمق للسوق ووضع استراتيجيات فعالة لنمو الأعمال وتحقيق الأهداف",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Settings,
      title: "الإشراف الكامل على تنفيذ المشروعات",
      description: "متابعة دقيقة لجميع مراحل التنفيذ لضمان الجودة والالتزام بالمواعيد المحددة",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "دراسات الجدوى الاقتصادية والمالية",
      description: "تقييم شامل للمشاريع من الناحية الاقتصادية والمالية مع تحليل المخاطر",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: "تقديم الاستشارات الإدارية والفنية",
      description: "استشارات متخصصة من خبراء في مختلف المجالات لضمان نجاح مشروعك",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: GraduationCap,
      title: "تدريب وتطوير الكوادر البشرية",
      description: "برامج تدريبية متطورة لرفع كفاءة الموارد البشرية وتطوير المهارات",
      gradient: "from-teal-500 to-cyan-500",
    },
  ]

  const stats = [
    { number: "2015", label: "سنة التأسيس", icon: Calendar },
    { number: "150+", label: "موظف متخصص", icon: Users },
    { number: "500+", label: "مشروع منجز", icon: CheckCircle },
    { number: "98%", label: "معدل رضا العملاء", icon: Star },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3 rtl:space-x-reverse"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="relative">
                <Image
                  src="/logo.jpeg"
                  alt="شركة ألفا"
                  width={50}
                  height={50}
                  className="rounded-full shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 animate-pulse" />
              </div>
              <div className="text-right">
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  شركة ألفا
                </h1>
                <p className="text-sm text-gray-600">
                  لإدارة المشروعات التجارية
                </p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {["الرئيسية", "من نحن", "خدماتنا", "فريق العمل", "اتصل بنا"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${
                      ["home", "about", "services", "team", "contact"][index]
                    }`}
                    className="relative px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )
              )}
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-200">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col space-y-4 pt-4 text-right">
                  {[
                    "الرئيسية",
                    "من نحن",
                    "خدماتنا",
                    "فريق العمل",
                    "اتصل بنا",
                  ].map((item, index) => (
                    <motion.a
                      key={item}
                      variants={itemVariants}
                      href={`#${
                        ["home", "about", "services", "team", "contact"][index]
                      }`}
                      className="hover:text-amber-600 transition-colors duration-300 py-2"
                      onClick={() => setIsMenuOpen(false)}>
                      {item}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BackgroundGrid />
        <FloatingIcons />
        <Spotlight className="top-40 left-0 md:left-60 md:-top-20" />

        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent"
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="mb-8">
            <div className="relative inline-block">
              <Image
                src="/logo.jpeg"
                alt="شركة ألفا"
                width={200}
                height={200}
                className="mx-auto rounded-full shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/30 to-orange-500/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-2"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}>
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6">
            <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              الشريك الموثوق منذ 2015
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              شركة ألفا
            </span>
            <br />
            <span className="text-gray-700 text-3xl md:text-5xl">
              لإدارة المشروعات التجارية
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نحول أحلامك التجارية إلى واقع ملموس من خلال حلول إدارية متطورة وخبرة
            تمتد لأكثر من عقد من الزمن
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <Globe className="mr-2 h-5 w-5" />
              <a href="/#services"
               
              >اكتشف خدماتنا</a>
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg">
              <a href="/#contact">
                تواصل معنا
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05 }}>
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                    }}
                  />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <Target className="w-4 h-4 mr-2" />
              من نحن
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 p-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              رحلة نجاح تمتد لعقد من الزمن
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              أسست شركة ألفا لإدارة المشاريع التجارية في عام 2015، ونجحت منذ
              انطلاقها في أن تصبح واحدة من الشركات الرائدة في مجال إدارة وتطوير
              المشاريع التجارية
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <Card className="p-8 border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/50 hover:shadow-3xl transition-all duration-500 group">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">رؤيتنا</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    أن نكون الشريك الأول الموثوق في مجال إدارة المشاريع
                    التجارية، من خلال تقديم حلول متطورة تواكب تطورات السوق وتلبي
                    طموحات عملائنا.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <Card className="p-8 border-0 shadow-2xl bg-gradient-to-br from-white to-orange-50/50 hover:shadow-3xl transition-all duration-500 group">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      رسالتنا
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    تقديم خدمات إدارة مشاريع باحترافية عالية، من خلال فريق عمل
                    مؤهل، وأدوات مبتكرة، ونظم تشغيل فعالة، تضمن تحقيق نتائج
                    ملموسة وتحسين الأداء العام للمشروعات.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <Settings className="w-4 h-4 mr-2" />
              خدماتنا المتميزة
            </Badge>
            <h2 className="text-4xl md:text-5xl  p-4 font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
              حلول شاملة لنجاح مشروعك
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نقدم مجموعة متكاملة من الخدمات التي تركز على رفع كفاءة الأعمال
              وتحقيق أقصى درجات النجاح التجاري
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}
                    />
                    <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                      <div
                        className={`p-4 bg-gradient-to-r ${service.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-right text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-amber-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-right leading-relaxed">
                      {service.description}
                    </p>
                    <motion.div
                      className={`absolute bottom-0 right-0 w-0 h-0 bg-gradient-to-r ${service.gradient} opacity-10 group-hover:w-full group-hover:h-full transition-all duration-500`}
                      style={{
                        clipPath: "polygon(100% 100%, 0% 100%, 100% 0%)",
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-teal-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-teal-500 text-white">
              <Users className="w-4 h-4 mr-2" />
              فريق العمل
            </Badge>
            <h2 className="text-4xl md:text-5xl p-4 font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              خبراء متميزون في خدمتك
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              يضم فريق شركة ألفا أكثر من 150 موظفًا من ذوي الكفاءة العالية في
              مجالات الإدارة، والتخطيط، والهندسة، والمالية، والتسويق
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "خبرة واسعة",
                description:
                  "فريق متخصص بخبرة تزيد عن 10 سنوات في إدارة المشاريع",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Star,
                title: "جودة عالية",
                description: "التزام بأعلى معايير الجودة في جميع مراحل العمل",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: CheckCircle,
                title: "نتائج مضمونة",
                description:
                  "تحقيق أهداف المشاريع في الوقت المحدد وبالجودة المطلوبة",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}>
                <Card className="text-center p-8 border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group w-full h-full">
                  <CardContent>
                    <div className="relative mb-6">
                      <div
                        className={`w-20 h-20 mx-auto bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-10 w-10 text-white" />
                      </div>
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 rounded-full`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.5,
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <Phone className="w-4 h-4 mr-2" />
              تواصل معنا
            </Badge>
            <h2 className="text-4xl md:text-5xl p-4 font-bold mb-6 bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent">
              ابدأ رحلة نجاحك معنا
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك في تحقيق أهدافك التجارية. تواصل معنا اليوم
              لمناقشة مشروعك
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <Card className="p-8 border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-500">
                <CardContent className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6 text-right text-gray-900">
                    معلومات الاتصال
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Phone,
                        title: "الهاتف",
                        content: "01271680007 - 01220211915 - 22049058",
                        gradient: "from-green-500 to-emerald-500",
                      },
                      {
                        icon: MapPin,
                        title: "العنوان",
                        content: "82 عباس العقاد أمام بنك الـ CIB",
                        gradient: "from-blue-500 to-cyan-500",
                      },
                      {
                        icon: Calendar,
                        title: "ساعات العمل",
                        content: "السبت - الخميس: 9:00 ص - 6:00 م",
                        gradient: "from-purple-500 to-pink-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 rtl:space-x-reverse group"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <div
                          className={`p-3 bg-gradient-to-r ${item.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            {item.title}
                          </p>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="h-96 bg-gray-100 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.8974!2d31.3260!3d30.0626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzQ1LjQiTiAzMcKwMTknMzMuNiJF!5e0!3m2!1sen!2seg!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع شركة ألفا"
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent pointer-events-none" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="flex items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse mb-4">
                <div className="relative">
                  <Image
                    src="/logo.jpeg"
                    alt="شركة ألفا"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/30 to-orange-500/30" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-400">شركة ألفا</h3>
                  <p className="text-sm text-gray-300">
                    لإدارة المشروعات التجارية
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                شريكك الموثوق في إدارة وتطوير المشاريع التجارية منذ عام 2015
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}>
              <h4 className="font-bold mb-4 text-amber-400">روابط سريعة</h4>
              <div className="space-y-2">
                {["الرئيسية", "من نحن", "خدماتنا", "اتصل بنا"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href={`#${
                        ["home", "about", "services", "contact"][index]
                      }`}
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}>
                      {item}
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>
              <h4 className="font-bold mb-4 text-amber-400">تواصل معنا</h4>
              <div className="space-y-2 text-gray-300">
                <p>01271680007</p>
                <p>82 عباس العقاد أمام بنك الـ CIB</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 شركة ألفا لإدارة المشروعات التجارية. جميع الحقوق
              محفوظة.
            </p>
            <p className="text-gray-400 mt-2">
              تم تصميم وتطوير الموقع بواسطة{" "}
              <a
                href="https://shimaamohamed.bio.link/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors duration-300 hover:underline ">
                SM
              </a>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
