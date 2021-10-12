import { MenuItemPropsType } from './MenuItem/MenuItemType';

export type MenuItemDataType = MenuItemPropsType & {
	id: string;
};

export type NavbarPropsType = {
	MenuItemData: MenuItemDataType[];
};