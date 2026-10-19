import HeaderView from "./components/HeaderView";
import DownloadView from "./components/DownloadView";
import NavView from "./components/NavView";
import OptionsView from "./components/OptionsView";
import LinksView from "./components/LinksView";

import './LeftView.scss';

function LeftView()
{
    return (
        <header id="header-sticky">
            <div className="header-top">
                <HeaderView />
                <DownloadView />
                <NavView />
            </div>
            <div className="header-bottom">
                <OptionsView />
                <LinksView />
            </div>
        </header>
    );
}

export default LeftView;