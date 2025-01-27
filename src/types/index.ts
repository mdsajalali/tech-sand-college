// Latest news type
export type NewsItem = {
  title: string;
  date: string;
  image: string;
};

// Cover type

export type CoverType = {
  heading: string;
  mainTitle: string;
  subTitle?: string;
  title: string;
  titleLink: string;
  subTitleLink?: string;
};

// AchievementCardProps
export type AchievementCardProps = {
  id: number;
  title: string;
  date: string;
  image: string;
};

// Faculty type
export interface FacultyProps {
  id: number;
  name: string;
  designation: string;
  department: string;
  facultyCode: string;
  email: string;
  office: string;
  courses: string;
  profile: string[];
  researchArea: string;
  role: string;
  image: string;
}

// TabFilterProps
export interface TabFilterProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// MemberProps
export interface MemberProps {
  name: string;
  designation: string;
  qualification: string;
  phone: string;
  email: string;
  image: string;
}


// CategoryProps
export interface CategoryProps {
  category: string;
  members: MemberProps[];
}


//TabsProps
export interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}