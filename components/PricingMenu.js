import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, Truck, Warehouse, Box,
  ChevronDown, ChevronUp
} from 'lucide-react';

const PricingMenu = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    {
      name: "Receiving",
      icon: <Truck className="w-6 h-6 text-sky-400" />,
      items: [
        { title: "Container Unloading - 20'", price: "$300-$750" },
        { title: "Container Unloading - 40'", price: "$400-$850" },
        { title: "Pallet Receiving", price: "$4-$15 per pallet" }
      ]
    },
    {
      name: "Storage",
      icon: <Warehouse className="w-6 h-6 text-sky-400" />,
      items: [
        { title: "Pallet Storage", price: "$8-$40 per month" },
        { title: "Bin Storage", price: "$1-$5 per month" },
        { title: "Special Storage (FTZ, etc)", price: "Custom" }
      ]
    },
    {
      name: "Pick & Pack",
      icon: <Box className="w-6 h-6 text-sky-400" />,
      items: [
        { title: "Order Processing", price: "$3-$5 per order" },
        { title: "Pick & Pack", price: "$0.25-$2 per item" },
        { title: "Additional Items", price: "$0.75 per item" }
      ]
    },
    {
      name: "Shipping",
      icon: <Truck className="w-6 h-6 text-sky-400" />,
      items: [
        { title: "Standard Shipping", price: "Carrier + 10-15%" },
        { title: "Express Shipping", price: "Carrier + 8-12%" },
        { title: "International Shipping", price: "Custom rates" }
      ]
    },
    {
      name: "Additional Services",
      icon: <Package className="w-6 h-6 text-sky-400" />,
      items: [
        { title: "Kitting", price: "$0.25-$2 per item" },
        { title: "Returns Processing", price: "$2-$5 per item" },
        { title: "Custom Packaging", price: "Cost + 10-20%" },
        { title: "Quality Control", price: "From $0.98/carton" }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-sky-400">
            Quetico 3PL Services Price Guide
          </h1>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-white hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  {category.icon}
                  <span className="text-lg font-semibold">{category.name}</span>
                </div>
                {expandedCategory === index ? 
                  <ChevronUp className="text-sky-400" /> : 
                  <ChevronDown className="text-sky-400" />
                }
              </button>

              {expandedCategory === index && (
                <div className="p-4 bg-slate-800">
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div 
                        key={i}
                        className="bg-slate-700 p-3 rounded-lg flex justify-between items-center"
                      >
                        <span className="text-white">{item.title}</span>
                        <span className="text-sky-400 font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400">
          <p>* Prices may vary based on volume, complexity, and specific requirements</p>
          <p>Contact us for a custom quote tailored to your needs</p>
        </div>
      </div>
    </div>
  );
};

export default PricingMenu;
