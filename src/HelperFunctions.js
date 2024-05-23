export const scrollToSection = (sectionId) => {
  console.log("clicked");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };