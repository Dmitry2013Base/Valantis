import { $host } from "./host";


export const getItemsById = async (items) => {
    return await $host.post('', {
        action: "get_items",
        params: { "ids": items}
    });
}

export const getFilterItems = async (paramName, value) => {
    return await $host.post('', {
        action: "filter",
        params: { [paramName]: value }
    });
}
