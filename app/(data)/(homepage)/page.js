import { apiUrl } from '../../global-settings.js';
import '../../styles/home.css';
import Home from '../../templates/Home';
import OnLoadScripts from "../../components/OnLoadScripts.js";

async function getPage() {
  const res = await fetch(apiUrl + `/pages/all/home`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

export default async function Page() {
  const _page = getPage();
  const page = await _page;
  
  return (
    <>
      <Home pageData={page} />
      <OnLoadScripts pageData={page} />
    </>
  );
}