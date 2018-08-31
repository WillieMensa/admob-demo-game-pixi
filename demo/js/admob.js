var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-9863325511078756/9375997553',
        interstitial: 'ca-app-pub-9863325511078756/1657046752'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-9863325511078756/4806197152',
        interstitial: 'ca-app-pub-9863325511078756/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-9863325511078756/8878394753',
        interstitial: 'ca-app-pub-9863325511078756/1355127956'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

    AdMob.createBanner( {
        adId: admobid.banner, 
        isTesting: true,
        overlap: true, 
        offsetTopBar: false, 
        position: AdMob.AD_POSITION.TOP_CENTER,
        bgColor: 'black'
    } );
    
    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
    });
}

