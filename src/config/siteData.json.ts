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
  name: "NepalIdeas Photography/Videography",
  // Your website's title and description (meta fields)
  title:
    "NepalIdeas - make your moments memorable with us",
  description:
    "NepalIdeas is a photography/videography services company that was born in Nepal but based in the United States. We make your moments memorable with our professional photography and videography services.",
  useViewTransitions: true,
  // Your information!
  author: {
    name: "Sujan Thapa",
    email: "sujan2thapa@gmail.com",
    twitter: "",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Cosmic Themes logo",
  },
};

export default siteData;
