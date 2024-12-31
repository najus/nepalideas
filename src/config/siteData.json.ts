export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Nepal Ideas",
  // Your website's title and description (meta fields)
  title:
    "Nepal Ideas - Capture, Create, and Connect with Professional Services",
  description:
    "At Nepal Ideas, we believe in breaking barriers and unlocking the potential of businesses and individuals in the US and Nepal. Whether you want to elevate your brand, promote an event, or celebrate a special occasion, our expertise in content creation, branding, marketing, and digital solutions will help you craft creative strategies and deliver impactful results",
  useViewTransitions: true,
  // Your information!
  author: {
    name: "Sujan Thapa",
    email: "sujan2thapa@gmail.com",
    twitter: "",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/nepali-ideas-logo.jpg",
    alt: "Nepal Ideas logo",
  },
};

export default siteData;
