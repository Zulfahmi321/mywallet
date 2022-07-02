/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites(){
    return[
      {
        source:'/login',
        destination:'/auth/login',     
      },
      {
        source:'/register',
        destination:'/auth/register',     
      },
      {
        source:'/pin',
        destination:'/auth/pin',     
      },
      {
        source:'/reset',
        destination:'/auth/reset',     
      },
      {
        source:'/home',
        destination:'/home/home',     
      },


    ]
  }
}

module.exports = nextConfig
