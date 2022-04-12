export default ({ app: { router } }, inject) => {
    const vkRtrg = () => {
        const priceListId = '<%= options.priceListId %>';
        return {
            productEvent: (event, payload) => {
                return () => {
                    if (priceListId) {
                        VK.Retargeting.ProductEvent(priceListId, event, payload);
                    } else {
                        console.warn('priceListId not set');
                    }
                }
            }
        }
    }

    function create() {
        VK.Retargeting.Init('<%= options.id %>')
        inject('vkRtrg', vkRtrg());
        router.afterEach(() => {
            VK.Retargeting.Hit();
        });
    }
    if (window.VK && window.VK.Retargeting) {
        create();
    } else {
        (function (w, c) {
            (w[c] = w[c] || []).push(create)
        })(window, 'vkAsyncInitCallbacks');
    }
}