import React, { useState } from 'react';
import { Calendar, Clock, TrendingUp, Search, ArrowRight } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

// Sample blog data - replace with actual content
const featuredArticle = {
  id: 1,
  title: "Why IPL Home Hair Removal Devices Are the Best Choice Among All Hair Removal Tools",
  excerpt: "Discover why IPL is the most effective, comfortable, and convenient solution for long-term hair removal at home—backed by science and real user experience.",
  author: "iShine Editorial Team",
  date: "2025-07-10",
  category: "Expert Opinion",
  image: "/images/blog/ipl-best-choice.jpg",
  tags: ["IPL", "Hair Removal", "Comparison"]
};

const blogPosts = [
  {
    id: 2,
    title: "Sapphire Cooling: Reducing Pain by 90% for Dark Skin Types",
    excerpt: "Clinical data shows sapphire contact cooling technology dramatically improves IPL comfort for Fitzpatrick skin types III-IV.",
    author: "Engineering Team",
    date: "2025-06-26",
    category: "Clinical Research",
    image: "/images/blog/sapphire-cooling.jpg",
    tags: ["Skin Safety", "Cooling Technology"]
  },
  {
    id: 3,
    title: "FDA 510(k) Pathway: Navigating Medical Device Classification for IPL",
    excerpt: "Understanding when home IPL devices require medical certification and how marketing claims affect regulatory classification.",
    author: "Regulatory Affairs",
    date: "2025-06-25",
    category: "Regulatory Insights",
    image: "/images/blog/fda-pathway.jpg",
    tags: ["FDA Compliance", "Medical Device"]
  },
  {
    id: 4,
    title: "Multi-Head IPL Systems: Precision Meets Full-Body Efficiency",
    excerpt: "Market analysis of attachment-based IPL devices and their impact on treatment efficacy across different body areas.",
    author: "Market Research",
    date: "2025-06-24",
    category: "Market Analysis",
    image: "/images/blog/multi-head-systems.jpg",
    tags: ["Product Innovation", "User Experience"]
  },
  {
    id: 5,
    title: "AI-Powered Skin Sensing: The Future of Personalized IPL",
    excerpt: "How machine learning algorithms are revolutionizing automatic energy adjustment for optimal safety and efficacy.",
    author: "AI Research Division",
    date: "2025-06-22",
    category: "AI & Innovation",
    image: "/images/blog/ai-skin-sensing.jpg",
    tags: ["Artificial Intelligence", "Skin Technology"]
  },
  {
    id: 6,
    title: "Global Market Shifts: IPL Adoption in Emerging Markets",
    excerpt: "Economic analysis of IPL device penetration rates across Asia-Pacific and Latin American markets through 2025.",
    author: "Market Intelligence",
    date: "2025-06-20",
    category: "Market Analysis",
    image: "/images/blog/global-market.jpg",
    tags: ["Market Expansion", "Economic Trends"]
  },
  {
    id: 7,
    title: "Sustainable Manufacturing: Green IPL Production Methods",
    excerpt: "Environmental impact assessment of IPL device manufacturing and sustainable supply chain innovations.",
    author: "Sustainability Team",
    date: "2025-06-18",
    category: "Sustainability",
    image: "/images/blog/sustainable-manufacturing.jpg",
    tags: ["Environmental Impact", "Green Technology"]
  }
];

const categories = ["All", "Technology Analysis", "Clinical Research", "Regulatory Insights", "Market Analysis", "AI & Innovation", "Sustainability"];

const NewsInsights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Bloomberg-style Header */}
      <section className="bg-[rgb(0,43,92)] text-white py-8 border-b-4 border-[rgb(0,116,224)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">IPL Technology Insights</h1>
              <p className="text-lg text-gray-300">Expert analysis on the future of home hair removal technology</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <TrendingUp className="w-8 h-8 text-[rgb(0,116,224)]" />
              <span className="text-sm">Live Market Intelligence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bloomberg-style Navigation & Filters */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 text-sm rounded-full transition ${
                    selectedCategory === category
                      ? 'bg-[rgb(0,116,224)] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,116,224)] w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article - Bloomberg Style */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[rgb(0,116,224)] font-semibold text-sm uppercase tracking-wide">
                {featuredArticle.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {featuredArticle.date}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredArticle.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-6 py-3 rounded-full transition flex items-center">
                Read Full Analysis
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="relative">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-[rgb(0,116,224)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloomberg-style Article Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Latest Analysis</h3>
            <span className="text-sm text-gray-500">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Primary Column - Larger Articles */}
            <div className="lg:col-span-2 space-y-6">
              {filteredPosts.slice(0, 2).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-6">
                    <span className="text-[rgb(0,116,224)] font-semibold text-sm uppercase tracking-wide">
                      {post.category}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3 leading-tight hover:text-[rgb(0,116,224)] cursor-pointer">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Secondary Columns - Compact Articles */}
            <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-1 gap-6">
              {filteredPosts.slice(2).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="md:flex lg:block">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full md:w-32 lg:w-full h-32 lg:h-40 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none lg:rounded-t-xl lg:rounded-bl-none"
                    />
                    <div className="p-4 flex-1">
                      <span className="text-[rgb(0,116,224)] font-semibold text-xs uppercase tracking-wide">
                        {post.category}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 mt-1 mb-2 leading-tight hover:text-[rgb(0,116,224)] cursor-pointer">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bloomberg-style Data/Stats Section */}
      <section className="py-12 bg-[rgb(0,43,92)] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">IPL Market Intelligence</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[rgb(0,116,224)] mb-2">38-40 J/cm²</div>
              <div className="text-sm text-gray-300">Peak Dual-Lamp Energy Output</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,116,224)] mb-2">90%</div>
              <div className="text-sm text-gray-300">Pain Reduction with Sapphire Cooling</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,116,224)] mb-2">$2.5B</div>
              <div className="text-sm text-gray-300">Global IPL Market Size 2025</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,116,224)] mb-2">15%</div>
              <div className="text-sm text-gray-300">Annual Market Growth Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription - Bloomberg Style */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Ahead of IPL Innovation</h3>
          <p className="text-lg text-gray-600 mb-8">
            Get weekly insights on cutting-edge IPL technology, market trends, and regulatory updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,116,224)]"
            />
            <button className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-6 py-3 rounded-full transition">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Join 15,000+ industry professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <div className="bg-[#f9f9f9] py-16">
        <ContactFormA />
      </div>
    </div>
  );
};

export default NewsInsights;