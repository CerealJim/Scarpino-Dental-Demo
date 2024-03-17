import Faq from "/admin/preview-templates/faq.js";
import Page from "/admin/preview-templates/page.js";

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("faq", Faq);
CMS.registerPreviewTemplate("pages", Page);

// Assuming you have a preview template for section-content named SectionContent
import SectionContent from "/admin/preview-templates/section-content.js";
CMS.registerPreviewTemplate("section-content", SectionContent);

CMS.registerPreviewStyle("/_includes/assets/css/inline.css");
// Register any CSS file on the home page as a preview style
fetch("/")
  .then((response) => response.text())
  .then((html) => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach((tag) => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
