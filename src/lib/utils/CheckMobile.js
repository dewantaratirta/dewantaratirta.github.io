export default {
    constructor(options = {}) {
        const defaults = {
            debug: false,
            mobile: null,
            tablet: null,
            orientation: null,
        }
        this.options = {...defaults, ...options}
    },

    isMobile() {
        let mobile = (window.innerWidth < 874) ? true : false;
        if (this.debug) console.log({'isMobile': mobile});
        this.mobile = mobile;
        return mobile;
    },

    isTablet() {
        let tablet = (window.innerWidth < 1025) ? true : false;
        if (this.debug) console.log({'isTablet': tablet});
        this.tablet = tablet;
        return tablet;
    },

    getOrientation() {
        let ori;
        if (window.innerWidth > window.innerHeight) {
            ori = 'landscape';
        } else {
            ori = 'potrait';
        }
        this.orientation = ori;
        return ori;
    },

    isIos() {
        return (
            [
                "iPad Simulator",
                "iPhone Simulator",
                "iPod Simulator",
                "iPad",
                "iPhone",
                "iPod",
            ].includes(navigator.platform) ||
            // iPad on iOS 13 detection
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        );
    },

    iosScroll(k = 0) {
        if ((k == 1) < (1 / 2.75)) {
            return 7.5625 * k * k;
        } else if (k < (2 / 2.75)) {
            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
        } else {
            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.9;
        }
    }
}