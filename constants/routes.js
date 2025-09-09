const ROUTES = {
<<<<<<< HEAD
  Home: "/",
  COURSES: "/courses",
=======
  HOME: "/",
>>>>>>> 90178e26dea3c311b8bfd0260f99694f3b00313b
  LOG_IN: "/log-in",
  SIGN_UP: "/sign-up",
  FORGET_PASSWORD: "/forget-password",
  OTP_VERIFICATION: "/otp-verification",
  RESET_PASSWORD: "/reset-password",
  PHONE_NUMBER: "/phone-number",
  FAVOURITE: "/favourite",
  CATEGORIES: "/categories",
  SINGLE_CATEGORIES: (slug) => `/categories?cat=${slug}`,
  SEARCH: "/search",
  ADVISORDETAIL: (slug) => `/advisor/${slug}`,
  ALL_BOOKINGS: "/all-bookings",
  MESSAGE: "/message",

  // Account Dashboard
  PROFILE_ACCOUNT: "/account",
};
export default ROUTES;
