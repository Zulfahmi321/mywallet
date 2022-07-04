/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites(){
    return[
      {
        source:'/',
        destination:'/index',     
      },
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
        source:'/dashboard',
        destination:'/dashboard/dashboard',     
      },
      {
        source:'/transfer',
        destination:'/transfer/index',     
      },  
      {
        source:'/topup',
        destination:'/dashboard/topup',     
      },
      {
        source:'/profil',
        destination:'/profil/profil',     
      },
      {
        source:'/changepin',
        destination:'/profil/changepin',     
      },



    ]
  }
}

module.exports = nextConfig