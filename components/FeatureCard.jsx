"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const FeatureCard = ({ featureName, description, routeName }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/${routeName}`);
  };
  return (
    <div className="feature_card flex flex-row h-32" style={{ height: '160px'}} onClick={handleCardClick}>
      <div className="flex flex-col">
        <div className="flex flex-row gap-6 mb-2">
          <div className="feature-image">
            {/* Placeholder image (red square) */}
            <div className="w-16 h-16 bg-red-500"></div>
          </div>
          <h3 className="flex items-center font-satoshi font-semibold text-gray-900">{featureName}</h3>
        </div>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
