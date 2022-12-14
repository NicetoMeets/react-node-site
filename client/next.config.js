/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
  domains: ["www.gravatar.com",
  "localhost",
  "ec2-3-36-95-233.ap-northeast-2.compute.amazonaws.com"
]
},
}

module.exports = nextConfig
