export enum MenuListEnum {
    USER, FOOD, LOGIN, DAILY
}

interface MenuListInterface {
    url: string;
    description: string;
    icon: string;
    type: MenuListEnum;
    isVisible: boolean;
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
        isVisible: true
    },
    {
        url: 'food',
        description: 'Food',
        icon: 'restaurant',
        type: MenuListEnum.FOOD,
        isVisible: true
    },
    {
        url: 'login',
        description: 'Login',
        icon: 'lock_open',
        type: MenuListEnum.LOGIN,
        isVisible: false
    },
    {
        url: 'dialy',
        description: 'Dialy Log',
        icon: 'library_books',
        type: MenuListEnum.DAILY,
        isVisible: true
    }
]