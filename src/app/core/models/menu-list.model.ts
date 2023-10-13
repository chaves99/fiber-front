export enum MenuListEnum {
    USER, FOOD, LOGIN
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
    }
]