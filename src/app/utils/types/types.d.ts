export type userData = {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  gender?: string;
  image?: File | null;
};
export type confrimCode = {
  code: string;
};

export type confrimPassword = {
  password: string;
  confrimPassword?: string;
  token: string;
};

export type forgetPassword = {
  email: string;
};

export type setting = {
  logo: string;
  footer_logo: string;
  location: string;
  points_price: number | null;
  footer_description: string;
};

export type categoryType = {
  id: number;
  image: string;
  courses_count: number;
  title: string;
  video: string;
  courses:course[]
};

export type settingType = {
  setting: setting | null;
  loading: boolean;
  categories: categoryType[] | null;
  instructors: instructors[] | null;
};

export type password = {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
};

export type course = {
      id: number,
      image: string,
      free_video:string,
      category_id: number,
      meta_title: string,
      meta_description: string,
      meta_keywords: string,
      meta_image: string,
      subscribed: boolean,
      progress: number,
      name: string,
      description: string,
      will_learn:string,
      requirements:string,
};

export type singleBookSliceType = {
  id: number | null;
  name: string;
  image: string;
  document: string;
  chapters: number | null;
  publish: string;
  price: number | null;
  average_rate: number;
  count_reviews: number;
  name: string;
  description: string;
  learning: string;
  reviews: null;
};
export type singleInstructorSliceType = {
  id: number | null;
  name: string | null;
  email: string | null;
  image: string;
  phone: string | null;
  category_id: number | null;
  average_rate: number;
  courses_count: number | null;
  count_reviews: number | null;
  courses: course[] | null;
  reviews: null;
};

export type instructors = {
  id: number;
  name: string;
  image: string;
  phone?: string;
  category_id?: string;
  courses_count?: number;
  courses?: course[];
  average_rate?: number;
};

export type Questions = {
  id: number;
  title: string;
  description: string;
};

export type HeroType = {
  name: string;
  image: string;
  description: string;
};
export type content={
  id: number,
  image: string,
  dir: string,
  title: string,
  description:string
}
export type homeType = {
  newCourses: course[] | null;
  categories: categoryType[] | null;
  content: content[]|null;
  student_count: number;
  course_count: number;
  lesson_count: number;
 
};
export type filterType = {
  rating: number | undefined;
  user_ids: number[] | undefined;
  min_price: number | undefined;
  max_price: number | undefined;
  category_ids: number[] | undefined;
};

export type filterType = {
  rating: number | undefined;
  user_ids: number[] | undefined;
  min_price: number | undefined;
  max_price: number | undefined;
  category_ids: number[] | undefined;
};
export type coursesSliceType = {
  courses: course[] | null;
  category_id: number | undefined;
  search: string | undefined;
};

export type ArticleCategory = {
  id: number;
  image: string;
  description: string;
  title: string;
  articles_count: number;
};
export type ArticleCatSliceType = {
  ArticleCategory: ArticleCategory[] | null;
  name: string | undefined;
};
export type Article = {
  id: number;
  category_article_id: number;
  updated_at: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_image: string;
  title: string;
  description: string;
};
export type booksSliceType = {
  books: book[] | null;
  currentPage: number;
  last_page: number;
  top: boolean;
};

export type instructorSliceType = {
  instructors: instructors[] | null;
  currentPage: number;
  last_page: number;
};

export type singlePackageSliceType = {
  id: number | null;
  image: string;
  price: string | null;
  status: string;
  average_rate: number;
  count_reviews: number;
  name: string;
  description: string;
  courses: course[] | null;
  reviews: null;
};

export type filterType = {
  rating: number | undefined;
  user_ids: number[] | undefined;
  min_price: number | undefined;
  max_price: number | undefined;
  category_ids: number[] | undefined;
};
export type coursesSliceType = {
  courses: course[] | null;
  currentPage: number;
  last_page: number;
  top: boolean;
  filter: filterType;
};

export type CourseDetailsType = {
  id: number | null;
  image: string | null;
  price: number | null;
  free_video: string | null;
  category_id: number | null;
  user_id: number | null;
  average_rate: number | null;
  hours: number | null;
  count_reviews: number | null;
  count: number | null;
  lessons_count: number | null;
  name: string | null;
  description: string | null;
  will_learn: string | null;
  requirements: string | null;
  instructor?: instructors | null;
  courses: course[] | null;
  coursesDetails: course | null;
};

export type BuyType = {
  courses: course[] | null;
  packages: Package[] | null;
  books: book[] | null;
};
export interface IFormContuctInput {
  name: string;
  email: string;
  title: string;
  message: string;
}

export type OrderType = {
  books: number[] | undefined;
  courses: number[] | undefined;
  packages: number[] | undefined;
};

export type CoursesParams = {
  name: string | undefined;
  id: number | undefined;
};

export type Benefits = {
  id: number | null;
  title: string | null;
  description: string | null;
};

export type AboutUs = {
  title: string;
  description: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_image: string;
};

export type AboutSliceType = {
  About: AboutUs[] | null;
  Benefits: Benefits[] | null;
};

export type Question = {
  id: number | null;
  title: string | null;
  description: string | null;
};

export type career = {
  id: number | null;
  type: string | null;
  level: string | null;
  title: string | null;
  description: string | null;
};

export type Package = {
  id: number;
  duration: number;
  price: number;
  name: string;
  features: Features[] | null;
};
export type Features = {
  id: number;
  package_id: number;
  title: string;
  is_active: number;
};
export type PackageSliceType = {
  month_package: Package[] | null;
  year_package: Package[] | null;
};

export type FQsSliceType = {
  Questions: Question[] | null;
};
export type CareersSliceType = {
  careers: career[] | null;
};
export type testimonial = {
  id: number;
  title: string;
  description: string;
};
