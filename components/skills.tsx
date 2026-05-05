"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Code2, Database, Cloud, Wrench, Users, Zap, Sparkles, Star, Hexagon, Brain } from "lucide-react"

export function Skills() {
  const containerRef = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])

  // ✅ UPDATED SKILLS
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Java", "C", "JavaScript", "HTML/CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks",
      icon: Zap,
      skills: ["ReactJS", "NodeJS", "TailwindCSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "from-green-500 to-emerald-500",
    },
   
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "Machine Learning",
        "LLM (LLaMA, GPT-based)",
        "RAG Architecture",
        "AI Chatbot Development",
        "Model Training",
      ],
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Libraries (AI/ML)",
      icon: Code2,
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
        "PyTorch (Basics)",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Figma", "VS Code", "Canva"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Key Strengths",
      icon: Users,
      skills: [
        "Time Management",
        "Communication",
        "Adaptability",
        "Problem-Solving",
        "Leadership",
        "Critical Thinking",
      ],
      color: "from-pink-500 to-rose-500",
    },
  ]

  const particles = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
    size: Math.random() * 2 + 1,
  }))

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950"
    >
      {/* Background Effects */}
      <motion.div style={{ y: y1 }} className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"/>
      <motion.div style={{ y: y2 }} className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"/>
      
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white/60 rounded-full"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -140, 0], opacity: [0, 1, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      <motion.div className="container mx-auto max-w-7xl relative z-10" style={{ opacity }}>
        
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="h-1 w-56 mx-auto mt-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"/>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.15 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredCategory(catIndex)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="relative group"
            >
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/10 shadow-xl">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white"/>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => {
                    const key = `${catIndex}-${i}`
                    return (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.15 }}
                        onHoverStart={() => setHoveredSkill(key)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm`}
                      >
                        {skill}
                      </motion.div>
                    )
                  })}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}