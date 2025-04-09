'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

type Testimonial = {
  id: number
  name: string
  comment: string
  rating: number
  location?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment: "Donika's banana bread is absolutely divine! It's become a staple at our family gatherings and everyone always asks where I got it from.",
    rating: 5,
    location: "Detroit, MI"
  },
  {
    id: 2,
    name: "Michael Chen",
    comment: "The spinach pie is incredible. Authentic flavor and the pastry is always perfectly crisp. I've tried many others but nothing compares to Donika's recipe!",
    rating: 5,
    location: "Royal Oak, MI"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    comment: "I ordered a custom cake for my daughter's birthday and it exceeded all expectations. Not only was it beautiful, but it tasted amazing too!",
    rating: 5,
    location: "Ann Arbor, MI"
  }
]

// Function to get avatar background color based on name
const getAvatarColor = (name: string) => {
  const colors = [
    'bg-pink-300',
    'bg-purple-300',
    'bg-indigo-300',
    'bg-blue-300',
    'bg-green-300',
    'bg-yellow-300',
    'bg-orange-300',
    'bg-red-300',
  ];
  // Simple hash function to get consistent color for a name
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
}

// Function to get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase();
}

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-purple/20" />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-10 right-0 text-brand-pink/10 rotate-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Quote size={180} />
      </motion.div>
      <motion.div 
        className="absolute bottom-10 left-0 text-brand-pink/10 -rotate-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Quote size={120} />
      </motion.div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-brand-pink font-medium inline-block mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            TESTIMONIALS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-greatVibes text-brand-darkRed mb-4">What Our Customers Say</h2>
          <p className="text-lg text-brand-darkRed/80 max-w-2xl mx-auto">
            Don't just take our word for it - see what our happy customers have to say about Donika's Home Baked Goods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg relative z-10 border border-brand-purple/10"
              initial={{ opacity: 0, y: 30, rotateZ: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(93, 0, 44, 0.15)" }}
            >
              {/* Quote mark */}
              <div className="absolute -top-3 -left-3 text-brand-pink">
                <Quote size={24} fill="currentColor" />
              </div>
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? "fill-brand-pink text-brand-pink" : "text-gray-300"}
                  />
                ))}
              </div>
              
              {/* Comment */}
              <p className="text-brand-darkRed/80 mb-6 italic">"{testimonial.comment}"</p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="mr-3 h-12 w-12 rounded-full overflow-hidden flex items-center justify-center text-white font-semibold text-sm border-2 border-brand-pink">
                  <div className={`h-full w-full flex items-center justify-center ${getAvatarColor(testimonial.name)}`}>
                    {getInitials(testimonial.name)}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-brand-darkRed">{testimonial.name}</p>
                  {testimonial.location && (
                    <p className="text-sm text-brand-darkRed/60">{testimonial.location}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 