import { LOG_IN_OUT_STATE } from "@core/services/storage.service";

export enum MenuListEnum {
    USER, FOOD, LOGIN, DAILY, ADD_MEAL, LOGOUT
}

interface MenuListInterface {
    url: string;
    description: string;
    icon: string;
    type: MenuListEnum;
    visibleMode: LOG_IN_OUT_STATE;
}

export function getMenuByType(type: MenuListEnum): MenuListInterface | undefined {
    return menuList.find(ml => ml.type===type);
}

export function getUrlByType(type: MenuListEnum): string | undefined {
    let menu = getMenuByType(type);
    if (menu) return menu.url;
    return undefined;
}

export const menuList: MenuListInterface[] = [
    {
        url: 'user',
        description: 'User',
        icon: 'person',
        type: MenuListEnum.USER,
        visibleMode: "LOGIN"
    },
    {
        url: 'food',
        description: 'Food',
        icon: 'restaurant',
        type: MenuListEnum.FOOD,
        visibleMode: "LOGIN"
    },
    {
        url: 'login',
        description: 'Login',
        icon: 'lock_open',
        type: MenuListEnum.LOGIN,
        visibleMode: "LOGOUT"
    },
    {
        url: 'dialy',
        description: 'Dialy Log',
        icon: 'library_books',
        type: MenuListEnum.DAILY,
        visibleMode: "LOGIN"
    },
    {
        url: 'add-meal',
        description: 'Add Meal',
        icon: 'add',
        type: MenuListEnum.ADD_MEAL,
        visibleMode: "LOGIN"
    },
    {
        url: 'logout',
        description: 'Logout',
        icon: 'lock_close',
        type: MenuListEnum.LOGOUT,
        visibleMode: "LOGIN"
    }
]