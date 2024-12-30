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
  name: "Nepali Ideas",
  // Your website's title and description (meta fields)
  title:
    "Nepali Ideas - Capture, Create, and Connect with Professional Services",
  description:
    "Nepali Ideas offers premium photography, videography, advertising, and marketing services. Based in the United States with roots in Nepal, we help you capture your moments, grow your brand, and connect with your audience.",
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
    alt: "Nepali Ideas logo",
  },
};

export default siteData;
