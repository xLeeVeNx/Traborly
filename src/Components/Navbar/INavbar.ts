import { IMenuItemProps } from './MenuItem/IMenuItem';

export interface IMenuItemData extends IMenuItemProps {
	id: string;
}

export interface INavbarProps {
	MenuItemData: IMenuItemData[];
}