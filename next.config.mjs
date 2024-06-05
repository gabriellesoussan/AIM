import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env:{
        API_KEY: process.env.API_KEY,
        DELIVERY_TOKEN: process.env.DELIVERY_TOKEN,
        ENVIRONMENT: process.env.ENVIRONMENT,
        PREVIEW_TOKEN: process.env.PREVIEW_TOKEN,
        CONTENTSTACK_API_KEY: process.env.CONTENTSTACK_API_KEY,
        CONTENTSTACK_DELIVERY_TOKEN: process.env.CONTENTSTACK_DELIVERY_TOKEN,
        CONTENTSTACK_ENVIRONMENT: process.env.CONTENTSTACK_ENVIRONMENT,
        CONTENTSTACK_PREVIEW_TOKEN: process.env.CONTENTSTACK_PREVIEW_TOKEN,
        CONTENTSTACK_REGION: process.env.CONTENTSTACK_REGION
    }
};
 
export default withNextIntl(nextConfig);