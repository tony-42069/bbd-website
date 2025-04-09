'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type FloatingElement = {
  id: number
  x: number
  y: number
  scale: number
  opacity: number
  rotate: number
  delay: number
}

const generateElements = (count: number): FloatingElement[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: 20 + Math.random() * 60, // Keep values within 20-80% range to avoid edge issues
    y: 20 + Math.random() * 60,
    scale: 0.5 + Math.random() * 0.5, // Smaller scale range
    opacity: 0.2 + Math.random() * 0.3,
    rotate: Math.random() * 360,
    delay: Math.random() * 2
  }))
}

const shapes = [
  // Circle
  <circle key="circle" cx="20" cy="20" r="20" />,
  // Square
  <rect key="square" x="0" y="0" width="40" height="40" />,
  // Triangle
  <polygon key="triangle" points="20,0 40,40 0,40" />
]

interface AnimatedBackgroundProps {
  count?: number
  colorStart?: string
  colorEnd?: string
  className?: string
}

const AnimatedBackground = ({ 
  count = 10, 
  colorStart = "rgba(215, 183, 255, 0.5)", 
  colorEnd = "rgba(240, 120, 177, 0.5)",
  className = ""
}: AnimatedBackgroundProps) => {
  // Use useState instead of useRef to ensure consistent rendering between server and client
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Generate elements only on the client side to avoid hydration mismatches
    setElements(generateElements(count));
    setIsMounted(true);
  }, [count]);

  // Don't render anything during server-side rendering
  if (!isMounted) {
    return <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}></div>;
  }

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          initial={{ 
            opacity: 0,
            scale: element.scale
          }}
          animate={{
            opacity: [0, element.opacity, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: element.delay,
            repeatType: "reverse"
          }}
          style={{
            top: `${element.y}vh`,
            left: `${element.x}vw`,
            transform: `rotate(${element.rotate}deg)`
          }}
        >
          <svg 
            width={40}
            height={40}
            viewBox="0 0 40 40"
            style={{ 
              filter: 'blur(1px)',
              fill: element.id % 2 === 0 ? colorStart : colorEnd
            }}
          >
            {shapes[element.id % shapes.length]}
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedBackground 