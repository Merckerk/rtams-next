"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const FeatureCard = ({
  featureName,
  description,
  routeName,
  isAdminAccess,
  isUserAdmin,
  iconImage
}) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/${routeName}`);
  };
  return !isAdminAccess || isUserAdmin ? (
    <>
      <Link
        className="feature_card flex flex-row h-32"
        style={{ height: "160px" }}
        href={`/${routeName}`}
      >
        <div className="flex flex-col">
          <div className="flex flex-row gap-6 mb-2">
            <Image 
              src={iconImage}
              alt="Feature Icon"
              width={40}
              height={40}
            />
            {/* <div className="feature-image">
              <div className="w-16 h-16 bg-red-500"></div>
            </div> */}
            <h3 className="flex items-center font-satoshi font-semibold text-gray-900">
              {featureName}
            </h3>
          </div>
          <p className="feature-description">{description}</p>
        </div>
      </Link>
    </>
  ) : null;
};

export default FeatureCard;
