import React from 'react'
import { motion } from "framer-motion";
const Wave = () => {
  return (
    <motion.svg
    id="wave"
    style={{ transform: "rotate(0deg)", transition: "0.1s" }}
    viewBox="0 0 1440 490"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, pathLength: 0 }}
    animate={{ opacity: 1, pathLength: 1 }}
    transition={{ duration: 2 }}
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
        <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <motion.path
      style={{ transform: "translate(0, 0px)" }}
      fill="url(#sw-gradient-0)"
      d="M0,49L48,114.3C96,180,192,310,288,310.3C384,310,480,180,576,147C672,114,768,180,864,204.2C960,229,1056,212,1152,245C1248,278,1344,359,1440,334.8C1536,310,1632,180,1728,138.8C1824,98,1920,147,2016,138.8C2112,131,2208,65,2304,32.7C2400,0,2496,0,2592,57.2C2688,114,2784,229,2880,245C2976,261,3072,180,3168,163.3C3264,147,3360,196,3456,187.8C3552,180,3648,114,3744,106.2C3840,98,3936,147,4032,155.2C4128,163,4224,131,4320,163.3C4416,196,4512,294,4608,318.5C4704,343,4800,294,4896,269.5C4992,245,5088,245,5184,220.5C5280,196,5376,147,5472,130.7C5568,114,5664,131,5760,187.8C5856,245,5952,343,6048,359.3C6144,376,6240,310,6336,236.8C6432,163,6528,82,6624,98C6720,114,6816,229,6864,285.8L6912,343L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
  </motion.svg>
  )
}

export default Wave