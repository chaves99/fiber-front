interface MenuListInterface {
    url: string;
    description: string;
    icon: string;
    type: MenuListEnum;
}

export enum MenuListEnum {
    USER, FOOD
}
 
export const MENU_LIST: MenuListInterface[] = [
    {
        url: 'user',
        description: 'User',
        icon: 'person',
        type: MenuListEnum.USER
    },
    {
        url: 'food',
        description: 'Food',
        icon: 'restaurant',
        type: MenuListEnum.FOOD
    }
];