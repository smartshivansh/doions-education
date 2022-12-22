const api =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8090/api"
    : "https://www.education.doions.com/api";
// : "http://localhost:8090/api";

export const apis = {
  sendEnquiryMessage: `${api}/message/doions-education`,
  contactUs: `${api}/message/courses-contact-us`,

  beginnerFSWD: `${api}/apply/courses/beginner-full-stack-web-developer`,
  basicDM: `${api}/apply/courses/basics-of-digital-marketing`,
};

export const courses = {
  beginnerFSWD: "beginner-full-stack-web-developer",
  basicDM: "basics-of-digital-marketing",
};
