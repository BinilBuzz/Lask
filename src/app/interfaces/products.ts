export interface Banner {
    id?: number;
    description?: string;
    title?: string;
    link?: string;
    web_image?: string;
    mobile_image?: string;
    placement_type?: string;
  }

  export interface BannerPageProps {
    placement_type?: Banner[] | Banner;
  }
  export interface BannerNext {
    id?: number;
    description?: string;
    title?: string;
    link?: string;
    web_image?: string;
    mobile_image?: string;
    placement_type?: string;
  }
  
  export interface InnerBanner {
    results?: BannerNext[];
  }
  export interface TeamMember {
    id?: number;
    name?: string;
    image?: string;
    designation?: string;
    team_member?: any;
  }
  
  export interface Testimonial {
    testimonial: any;
    id?: number;
    name?: string;
    image?: string;
    description?: string;
  }

  export interface Organizations {}

  export interface HomePage {
    organization?: Organizations;
    team_member?: TeamMember[];
    testimonial?: Testimonial[];
    banner?: Banner[];
  }

  export interface Home {
    testimonial?: HomePage;
  }
 
  export interface About {
    id?: number;
    title?: string;
    background_image?: string;
    content?: string;
  }

  export interface Service {
    id?: number;
    name?: string;
    image?: string;
    description?: string;
  }
  
  export interface ServiceBlockProps {
    unlimited?: boolean;
    filteredList?: Service[]
  }