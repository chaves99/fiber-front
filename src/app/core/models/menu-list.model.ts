interface MenuListInterface {
    url: string;
    description: string;
    icon: string;
    type: MenuListEnum;
    isVisible: boolean;
}

export enum MenuListEnum {
    USER, FOOD, LOGIN
}

export class MenuListModel {

    public static readonly MENU_LIST: MenuListInterface[] = [
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
            icon: 'passkey',
            type: MenuListEnum.LOGIN,
            isVisible: false
        }
    ];

    public static getByType(menuType: MenuListEnum): MenuListInterface | undefined {
        return this.MENU_LIST.find(m => m.type === menuType);
    }
}