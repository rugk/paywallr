//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  faz mobile component
//  github.com/tobimori/paywallr
//

extapi.storage.sync.get({ sitesDisabled: [] },
    (stor) => {
        disabledSites = Array.from(stor["sitesDisabled"]);
        console.log("ON LOAD - DISABLED SITES: " + disabledSites);
        if (isSiteEnabled(window.location.href) && d.getElementById("paywall-form-container-outer")) {
            d.getElementById("paywall-form-container-outer").remove();
            d.getElementsByClassName("art_txt paywall")[0].innerHTML = FAZifyMobile(JSON.parse(d.getElementById("schemaOrgJson").innerHTML).ArticleBody);
        };
    }
);
