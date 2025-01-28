// FloatingDock.tsx (or appropriate file)
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 700,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const HoveredLink = ({ children, label, ...rest }: any) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevent the default anchor behavior
    if (label === "Internship") {
      router.push("/internship");
    } else if (label === "Trainings") {
      const encodedText = encodeURIComponent(label);
      router.push(`/services?message=${encodedText}`);
    }else if (label === "MasterClass") {
      const encodedText = encodeURIComponent(label);
      router.push(`/services?message=${encodedText}`);
    } else {
      router.push(`/coursecontent?message=${label}`);
    }
  };

  return (
    <Link
      {...rest}
      href={`/coursecontent?message=${label}`}
      onClick={handleClick}
      className="text-neutral-200 hover:text-gray-500"
    >
      {children}
    </Link>
  );
};

// export const HoveredLink = ({ children, label, ...rest }: any) => {
//   const router = useRouter();
//   if (label === "Internship") {
//     router.push("/internship");
//   } else {
//     const encodedText = encodeURIComponent(label);
//     router.push(`/services?message=${encodedText}`);
//   }
//   return (
//     <Link {...rest} href={`/coursecontent?message=${label}`} className="text-neutral-200 hover:text-gray-500">
//       {children}
//     </Link>
//   );
// };

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string; links?: { name: string; href: string }[] }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} active={active} setActive={setActive} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    links?: { icon: string; label: string; details: string }[];
  }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("fixed top-4 right-4", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute top-full md:hidden mt-2 right-0  flex flex-col gap-2 bg-neutral-900 p-2 rounded-lg shadow-lg z-50"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className=" flex items-center p-1 md:hidden bg-neutral-800 rounded-md hover:bg-neutral-700"
                >
                  <div className="h-6 w-6">{item.icon}</div>
                  {/* <span className="text-white text-sm">{item.title}</span> */}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 bg-neutral-800 md:hidden flex items-center justify-center rounded-full shadow-lg"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-400" />
      </button>
    </div>
  );
};


const FloatingDockDesktop = ({
  items,
  className,
  active,
  setActive,
}: {
  items: { title: string; icon: React.ReactNode; href: string; links?: { icon: string; label: string; details: string; }[] }[];
  className?: string;
  active: string | null;
  setActive: (item: string | null) => void;
}) => {
  const mouseX = useMotionValue(Infinity);

  // Hover close delay state
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActive(title);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActive(null);
    }, 0.0001);
    setHoverTimeout(timeout);
  };

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        handleMouseLeave();
      }}
      // onMouseLeave={() => mouseX.set(Infinity)}
      // onMouseLeave={handleMouseLeave}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-black px-4 pb-3",
        className
      )}
      transition={transition}
    >
      {items.map((item) => (
        <div
          onMouseEnter={() => handleMouseEnter(item.title)}
          key={item.title}
          className="relative"
        >
          <IconContainer mouseX={mouseX} {...item} />
          <AnimatePresence>
            {active === item.title && item.links && (
             <motion.div
             initial={{ opacity: 0, scale: 0.95, y: 10 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.95, y: 10 }}
             transition={transition}
             className="absolute top-full w-48 grid grid-cols-2 grid-rows-6 gap-2 justify-center items-center bg-black mt-2 p-2 z-50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
           >
             {item.links.map((link) => (
               <HoveredLink href={link.details} key={link.label} icon={link.icon} label={link.label}>
                 <img src={link.icon} className="w-10 h-auto " />
                 {link.label}
               </HoveredLink>
             ))}
           </motion.div>
           
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="aspect-square px-10 flex flex-col items-center justify-center relative"
      >
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
        <span className="text-xs text-neutral-100 mt-2">{title}</span>
      </motion.div>
    </Link>
  );
}
