import { apiUrl } from '../../../global-settings.js';
import { notFound } from 'next/navigation';
import ThankYou from "../../../templates/ThankYou.js";
import OnLoadScripts from "../../../components/OnLoadScripts.js";
import AreasOfExpertise from "../../../templates/AreasOfExpertise.js";
import SingleService from "../../../templates/SingleService.js";
import CaseResults from "../../../templates/CaseResults.js";
import About from "../../../templates/About.js";
import Contact from "../../../templates/Contact.js";
import FaqsPage from "../../../templates/FaqsPage.js";
import PrivacyPolicy from "../../../templates/PrivacyPolicy.js";

async function getAllPages() {
  const res = await fetch(apiUrl + `/pages/all`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getSinglePage(slug) {
  const res = await fetch(apiUrl + `/pages/all/${slug}`);
  if (!res.ok) {
    return notFound();
  } 
  else if (slug == "home" || slug == "404-2" || res == "404") {
    return notFound();
  } else {
    return res.json();
  }
}

export default async function Page({ params: { slug } }) {
  const _page = getSinglePage(slug);
  const page = await _page;

  if (!page.slug) return notFound();

  if (slug == "thank-you") {
    return (
      <>
        <ThankYou pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/areas-of-expertise.php") {
    return (
      <>
        <AreasOfExpertise pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/single-service.php") {
    return (
      <>
        <SingleService pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/case-results.php") {
    return (
      <>
        <CaseResults pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/about.php") {
    return (
      <>
        <About pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/contact.php") {
    return (
      <>
        <Contact pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/faqs.php") {
    return (
      <>
        <FaqsPage pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/privacy-policy.php") {
    return (
      <>
        <PrivacyPolicy pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else {
    return (null);
  }
}

export async function generateStaticParams() {
  const _pages = getAllPages();
  const pages = await _pages;
  return pages.map((pageSing) => ({ 
      slug: pageSing.slug 
    }));
}