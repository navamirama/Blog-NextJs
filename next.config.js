// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         domains: ['localhost']
//     }
// }

// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "radiant-cliffs-13262-e79394c54684.herokuapp.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
    presets: ["@next/babel"],
  },
};
