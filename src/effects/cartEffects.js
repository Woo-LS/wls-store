import { useStore } from "vuex";
import { computed } from "vue";

//购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
    const store = useStore();
    const cartList = store.state.cartList
    const changeCartItemInfo = (shopId, productId, productInfo, num) => {
        store.commit("changeCartItemInfo", {
            shopId,
            productId,
            productInfo,
            num
        });
    };
    const productList = computed(() => {
        const productList = cartList[shopId]?.productList || {};
        // console.log(productList)
        const notEmtyProductList = {}
        for (let i in productList) {
            const product = productList[i]
            if (product.count > 0) {
                notEmtyProductList[i] = product
            }
        }
        // console.log(notEmtyProductList)
        return notEmtyProductList;
    });
    const shopName = computed(() => {
        const shopName = cartList[shopId]?.shopName || [];
        return shopName;
    });
    const calculations = computed(() => {
        const productList = cartList[shopId]?.productList;
        const result = { total: 0, price: 0, allChecked: true };
        if (productList) {
            for (let i in productList) {
                const product = productList[i];
                //计算购物车上的件数
                result.total += product.count;
                //计算总计价格
                if (product.check) {
                    result.price += product.count * product.price;
                }
                if (product.count > 0 && !product.check) {
                    result.allChecked = false;
                }
            }
        }
        result.price = result.price.toFixed(2);
        return result;
    });
    return { changeCartItemInfo, cartList, productList, shopName, calculations };
};