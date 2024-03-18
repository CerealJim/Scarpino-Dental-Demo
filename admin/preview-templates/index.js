import Faq from "/admin/preview-templates/faq.js";
import Page from "/admin/preview-templates/page.js";

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("faq", Faq);
CMS.registerPreviewTemplate("pages", Page);

// preview template for section-content on home page
import ContentIntro from "/admin/preview-templates/content-intro.js";
CMS.registerPreviewTemplate("content-intro", ContentIntro);
import ContentAbout from "/admin/preview-templates/content-about.js";
CMS.registerPreviewTemplate("content-about", ContentAbout);
import ContentService from "/admin/preview-templates/content-service.js";
CMS.registerPreviewTemplate("content-service", ContentService);
import ContentPitch from "/admin/preview-templates/content-pitch.js";
CMS.registerPreviewTemplate("content-pitch", ContentPitch);

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
