
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Book, Users, Star, Award, Gift } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    title: "Creator Masterclass (views + income)",
    description: "Grow fast. Monetize smart. Build something real.",
    icon: <Book className="h-7 w-7" />,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Premium Discord",
    description: "Get access to a community of like-minded individuals who are putting in the work.",
    icon: <Users className="h-7 w-7" />,
    color: "from-blue-400 to-indigo-600"
  },
  {
    title: "Premium Content Blueprints",
    description: "Unlock exclusive files, templates, and resources available only here.",
    icon: <Star className="h-7 w-7" />,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Premium Chat",
    description: "Chat in real-time and connect with the other members of our community.",
    icon: <Gift className="h-7 w-7" />,
    color: "from-green-400 to-emerald-600"
  },
  {
    title: "Announcements",
    description: "Share your thoughts and connect with others on topics that matter to you.",
    icon: <Award className="h-7 w-7" />,
    color: "from-pink-400 to-rose-600"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D001F] to-[#150033] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            <span className="bg-gradient-to-r from-soft-purple to-blue-400 bg-clip-text text-transparent">
              Here's What You'll Get
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-soft-purple to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Everything you need to grow and monetize your audience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className={index === 0 ? "lg:col-span-3" : ""}
            >
              <Card 
                className={`bg-gradient-to-br from-black/80 to-purple-900/10 border border-purple-500/20 rounded-xl overflow-hidden 
                hover:shadow-2xl hover:shadow-purple-600/20 hover:border-purple-500/50 transition-all duration-500 h-full
                ${index === 0 ? "relative p-0" : "p-6"}`}
              >
                {index === 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                    <div className="p-8 md:col-span-2 flex flex-col justify-center">
                      <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-5">
                        {feature.icon}
                      </div>
                      <h3 className="text-white text-2xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-300 text-lg">{feature.description}</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900/30 to-black/40 flex items-center justify-center p-10 relative">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                      <div className="w-full h-full border-2 border-dashed border-purple-500/30 rounded-xl flex items-center justify-center p-6">
                        <span className="text-4xl text-white font-bold bg-gradient-to-r from-soft-purple to-blue-400 bg-clip-text text-transparent">
                          Master Class
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl text-white flex items-center justify-center w-14 h-14 shrink-0`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
