"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Download,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Menu,
  X,
  MapPin,
  Phone,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const skills = {
    softwareDeveloper: [
      { name: "HTML", level: "Experienced", color: "bg-emerald-500", percentage: 90 },
      { name: "CSS", level: "Experienced", color: "bg-emerald-500", percentage: 85 },
      { name: "Java", level: "Experienced", color: "bg-emerald-500", percentage: 80 },
      { name: "C++", level: "Intermediate", color: "bg-amber-500", percentage: 70 },
      { name: "Python", level: "Intermediate", color: "bg-amber-500", percentage: 65 },
      { name: "JavaScript", level: "Basic", color: "bg-orange-500", percentage: 50 },
      { name: "React", level: "Basic", color: "bg-orange-500", percentage: 45 },
    ],
    networkEngineer: [
      { name: "Troubleshooting", level: "Experienced", color: "bg-emerald-500", percentage: 95 },
      { name: "Network Configuration", level: "Experienced", color: "bg-emerald-500", percentage: 90 },
      { name: "Documentation & Reporting", level: "Experienced", color: "bg-emerald-500", percentage: 85 },
      { name: "Technical Support", level: "Experienced", color: "bg-emerald-500", percentage: 88 },
      { name: "Performance Monitoring", level: "Experienced", color: "bg-emerald-500", percentage: 82 },
      { name: "Routing Protocols", level: "Experienced", color: "bg-emerald-500", percentage: 87 },
    ],
  }

  const projects = [
    {
      title: "2048 Game By Zuitt!",
      description:
        "A free JavaScript mini-game workshop project featuring animations, responsive design, and modern game mechanics. Built with vanilla JavaScript and CSS5.",
      image: "/Images/2048zuitt.png",
      preview: "https://marklaroya.github.io/Laroya-js-2048-fcb/", // Link to live demo
      code: "https://github.com/marklaroya/Laroya-js-2048-fcb", // Link to source code
      tech: ["JavaScript", "CSS5", "HTML5"],
      status: "Completed",
    },
    {
      title: "UpFace",
      description:
        "A comprehensive Zoom clone application built with React and TypeScript, featuring real-time video calls, screen sharing, and chat functionality.",
      image: "/Images/UpFace2.png",
      preview: "https://up-face.vercel.app/",
      code: "https://github.com/marklaroya/UpFace",
      tech: ["React", "TypeScript", "Firebase", "Vercel"],
      status: "Completed",
    },
    {
      title: "Frontliners",
      description:
        "COVID-19 Frontliner Record Management System designed to track and manage healthcare worker information during the pandemic response.",
      image: "/Images/Frontliner.png",
      code: "https://github.com/marklaroya/COVID-19-Frontliner-Record-Management",
      tech: ["Java", "MySQL",],
      status: "Completed",
    },
  ]

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-bold text-lg text-gray-900 dark:text-white"
            >
              Mark Lester Laroya
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden md:flex items-center space-x-6"
            >
              {["About", "Experience", "Projects", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  {item}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="ml-2">
                  <motion.div
                    key={darkMode ? "sun" : "moon"}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
                <motion.div
                  key={darkMode ? "sun" : "moon"}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.div>
              </Button>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mobileMenuOpen ? "close" : "menu"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col space-y-2"
                >
                  {["About", "Experience", "Projects", "Contact"].map((item, index) => (
                    <motion.button
                      key={item}
                      variants={fadeInLeft}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                    >
                      {item}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                {/* Animated decorative elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute -top-8 left-8 w-8 h-8 bg-blue-600 rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400 rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.25, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="absolute -bottom-8 right-8 w-6 h-6 bg-blue-700 rounded-full"
                />

                {/* Profile image with decorative border */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl"
                >
                  <Image src="/Images/Profile-pic 3.png" alt="Mark Lester D Laroya" fill className="object-cover" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left order-1 lg:order-2 space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-2"
              >
                <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Mark Lester Laroya
                </h1>
                <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                  Programmer & Network Support Engineer
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Passionate about creating innovative solutions and maintaining robust network infrastructures. 3+ years
                of experience in network support engineering and growing expertise in software and web development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  
                  <Button onClick={() => window.open("assets/Lester_Laroya_Resume.pdf", "_blank")} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="font-medium px-8"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex gap-4 justify-center lg:justify-start pt-4"
              >
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/mark-lester-laroya-215b9b252/", label: "LinkedIn" },
                  { Icon: Github, href: "https://github.com/marklaroya", label: "GitHub" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center shadow-md border border-gray-200 dark:border-gray-600"
                      aria-label={social.label}
                    >
                      <social.Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Get To Know More</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/Images/Ohh.jpg"
                  alt="About Mark"
                  width={400}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: "🏆",
                    title: "Experience",
                    subtitle: "3+ Years",
                    description: "Network Support Engineer",
                    color: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
                  },
                  {
                    icon: "🎓",
                    title: "Education",
                    subtitle: "Bachelor's Degree",
                    description: "Information Technology",
                    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={scaleIn}>
                    <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                      <Card
                        className={`text-center p-6 hover:shadow-lg transition-all duration-300 border-2 ${item.color}`}
                      >
                        <CardContent className="p-0 space-y-3">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring" }}
                            className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto shadow-md"
                          >
                            <span className="text-3xl">{item.icon}</span>
                          </motion.div>
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{item.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 font-medium">{item.subtitle}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Journey</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  I'm an IT graduate from Arellano University with a passion for both network infrastructure and
                  software development. Currently working as a Network Support Engineer, I manage Layer 3 networks
                  across the Philippines, handling router configurations, IPsec tunnels, and network security protocols.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  As a self-taught developer, I'm continuously expanding my skills in modern web technologies, combining
                  my technical network expertise with creative problem-solving in software development.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Explore My</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Software Developer",
                skills: skills.softwareDeveloper,
                color: "border-blue-200 dark:border-blue-800",
              },
              {
                title: "Network Support Engineer",
                skills: skills.networkEngineer,
                color: "border-emerald-200 dark:border-emerald-800",
              },
            ].map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                  <Card
                    className={`p-8 hover:shadow-xl transition-all duration-300 border-2 ${category.color} bg-white dark:bg-gray-900`}
                  >
                    <CardContent className="p-0">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + categoryIndex * 0.2, duration: 0.6 }}
                        className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8"
                      >
                        {category.title}
                      </motion.h3>
                      <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            variants={{
                              initial: { opacity: 0, x: -30 },
                              animate: { opacity: 1, x: 0 },
                            }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <motion.div
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay: 0.5 + categoryIndex * 0.2 + index * 0.05,
                                    duration: 0.3,
                                    type: "spring",
                                  }}
                                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md"
                                >
                                  {skill.name.charAt(0)}
                                </motion.div>
                                <div>
                                  <span className="font-semibold text-gray-900 dark:text-white text-lg">
                                    {skill.name}
                                  </span>
                                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {skill.percentage}% proficiency
                                  </p>
                                </div>
                              </div>
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + categoryIndex * 0.2 + index * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <Badge
                                  className={`${skill.color} text-white hover:${skill.color} font-medium px-3 py-1`}
                                >
                                  {skill.level}
                                </Badge>
                              </motion.div>
                            </div>
                            {/* Progress bar */}
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 + categoryIndex * 0.2 + index * 0.05, duration: 0.8 }}
                                className={`h-2 rounded-full ${skill.color}`}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Browse My Recent</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <motion.div
                    className="aspect-video relative bg-gray-100 dark:bg-gray-700 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge
                        className={`${project.status === "Completed" ? "bg-emerald-500" : "bg-amber-500"} text-white font-medium`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </motion.div>
                  <CardContent className="p-6 space-y-4">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      className="text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech stack */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="flex gap-3 pt-2"
                    >
                      {project.preview && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" asChild className="font-medium">
                            <Link href={project.preview}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Preview
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild className="font-medium">
                          <Link href={project.code}>
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let's Work Together</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  I'm always excited to discuss new opportunities, collaborate on innovative projects, or share insights
                  about technology and network engineering. Whether you're looking for a dedicated network engineer or a
                  passionate developer, I'd love to hear from you.
                </p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "lestermjlaroya@gmail.com",
                    description: "Send me an email anytime",
                    href: "mailto:lestermjlaroya@gmail.com",
                    color: "bg-blue-500",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+63 960 440 1428",
                    description: "Call me during business hours",
                    href: "tel:+639604401428",
                    color: "bg-emerald-500",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Paranaque, Philippines",
                    description: "Available for remote work",
                    href: "#",
                    color: "bg-purple-500",
                  },
                  {
                    icon: Calendar,
                    title: "Availability",
                    value: "Open to opportunities",
                    description: "Ready to start new projects",
                    href: "#",
                    color: "bg-orange-500",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.3, type: "spring" }}
                            className={`w-12 h-12 rounded-lg ${contact.color} flex items-center justify-center text-white shadow-md`}
                          >
                            <contact.icon className="w-6 h-6" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{contact.title}</h4>
                            <p className="text-gray-700 dark:text-gray-300 font-medium">{contact.value}</p>
                            <p className="text-gray-500 dark:text-gray-500 text-sm">{contact.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800"
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Response Time</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  I typically respond to emails within 24 hours and LinkedIn messages within a few hours during business
                  days. For urgent matters, feel free to call directly.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="lg:col-span-1"
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-xl">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <motion.div
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                    
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent"></div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="absolute bottom-6 left-6 right-6 text-center space-y-4"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-2">Ready to Connect?</h3>
                        <p className="text-blue-100 text-sm">You can find me here</p>
                      </div>

                      <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex justify-center gap-3"
                      >
                        {[
                          { Icon: Linkedin, href: "https://www.linkedin.com/in/mark-lester-laroya-215b9b252/", label: "LinkedIn" },
                          { Icon: Github, href: "https://github.com/marklaroya", label: "GitHub" },
                          { Icon: Mail, href: "mailto:lestermjlaroya@gmail.com", label: "Email" },
                        ].map((social, index) => (
                          <motion.div
                            key={index}
                            variants={{
                              initial: { opacity: 0, scale: 0 },
                              animate: { opacity: 1, scale: 1 },
                            }}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Link
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center backdrop-blur-sm"
                              aria-label={social.label}
                            >
                              <social.Icon className="w-5 h-5" />
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="w-full bg-white text-blue-700 hover:bg-gray-100 font-bold shadow-lg" asChild>
                          <Link href="mailto:lestermjlaroya@gmail.com">
                            <Mail className="w-4 h-4 mr-2" />
                            Send Email
                          </Link>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black border-t border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 text-sm"
            >
              {["About", "Experience", "Projects", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {[
                { Icon: Github, href: "https://github.com/marklaroya", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/mark-lester-laroya-215b9b252/", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:lestermjlaroya@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, scale: 0 },
                    animate: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center border border-gray-700"
                    aria-label={social.label}
                  >
                    <social.Icon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center space-y-2"
            >
              <p className="text-gray-400 font-medium">© 2024 Mark Lester Laroya. All Rights Reserved.</p>
              <p className="text-gray-500 text-sm">Technologies: Next.js, TypeScript, and Framer Motion</p>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
